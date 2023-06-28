import { RequestContext } from "../http/http.ts";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies http authentication to the request context.
 */
export class BasicAuthentication implements SecurityAuthentication {
    /**
     * Configures the http authentication with the required details.
     *
     * @param username username for http basic authentication
     * @param password password for http basic authentication
     */
    public constructor(
        private username: string,
        private password: string
    ) {}

    public getName(): string {
        return "basic";
    }

    public applySecurityAuthentication(context: RequestContext) {
        let comb = Buffer.from(this.username + ":" + this.password, 'binary').toString('base64');
        context.setHeaderParam("Authorization", "Basic " + comb);
    }
}

/**
 * Applies http authentication to the request context.
 */
export class BearerAuthentication implements SecurityAuthentication {
    /**
     * Configures the http authentication with the required details.
     *
     * @param tokenProvider service that can provide the up-to-date token when needed
     */
    public constructor(private tokenProvider: TokenProvider) {}

    public getName(): string {
        return "bearer";
    }

    public async applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Bearer " + await this.tokenProvider.getToken());
    }
}

/**
 * Applies oauth2 authentication to the request context.
 */
export class Oauth2Authentication implements SecurityAuthentication {
    /**
     * Configures OAuth2 with the necessary properties
     *
     * @param accessToken: The access token to be used for every request
     */
    public constructor(private accessToken: string) {}

    public getName(): string {
        return "oauth2";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Bearer " + this.accessToken);
    }
}

/**
 * Applies http authentication to the request context.
 */
export class OryAccessTokenAuthentication implements SecurityAuthentication {
    /**
     * Configures the http authentication with the required details.
     *
     * @param tokenProvider service that can provide the up-to-date token when needed
     */
    public constructor(private tokenProvider: TokenProvider) {}

    public getName(): string {
        return "oryAccessToken";
    }

    public async applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Bearer " + await this.tokenProvider.getToken());
    }
}


export type AuthMethods = {
    "default"?: SecurityAuthentication,
    "basic"?: SecurityAuthentication,
    "bearer"?: SecurityAuthentication,
    "oauth2"?: SecurityAuthentication,
    "oryAccessToken"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };

export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication,
    "basic"?: HttpBasicConfiguration,
    "bearer"?: HttpBearerConfiguration,
    "oauth2"?: OAuth2Configuration,
    "oryAccessToken"?: HttpBearerConfiguration
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"]

    if (config["basic"]) {
        authMethods["basic"] = new BasicAuthentication(
            config["basic"]["username"],
            config["basic"]["password"]
        );
    }

    if (config["bearer"]) {
        authMethods["bearer"] = new BearerAuthentication(
            config["bearer"]["tokenProvider"]
        );
    }

    if (config["oauth2"]) {
        authMethods["oauth2"] = new Oauth2Authentication(
            config["oauth2"]["accessToken"]
        );
    }

    if (config["oryAccessToken"]) {
        authMethods["oryAccessToken"] = new OryAccessTokenAuthentication(
            config["oryAccessToken"]["tokenProvider"]
        );
    }

    return authMethods;
}