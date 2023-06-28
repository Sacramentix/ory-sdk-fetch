// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AcceptOAuth2ConsentRequest } from '../models/AcceptOAuth2ConsentRequest.ts';
import { AcceptOAuth2LoginRequest } from '../models/AcceptOAuth2LoginRequest.ts';
import { ErrorOAuth2 } from '../models/ErrorOAuth2.ts';
import { GenericError } from '../models/GenericError.ts';
import { IntrospectedOAuth2Token } from '../models/IntrospectedOAuth2Token.ts';
import { JsonPatch } from '../models/JsonPatch.ts';
import { OAuth2Client } from '../models/OAuth2Client.ts';
import { OAuth2ClientTokenLifespans } from '../models/OAuth2ClientTokenLifespans.ts';
import { OAuth2ConsentRequest } from '../models/OAuth2ConsentRequest.ts';
import { OAuth2ConsentSession } from '../models/OAuth2ConsentSession.ts';
import { OAuth2LoginRequest } from '../models/OAuth2LoginRequest.ts';
import { OAuth2LogoutRequest } from '../models/OAuth2LogoutRequest.ts';
import { OAuth2RedirectTo } from '../models/OAuth2RedirectTo.ts';
import { OAuth2TokenExchange } from '../models/OAuth2TokenExchange.ts';
import { RejectOAuth2Request } from '../models/RejectOAuth2Request.ts';
import { TrustOAuth2JwtGrantIssuer } from '../models/TrustOAuth2JwtGrantIssuer.ts';
import { TrustedOAuth2JwtGrantIssuer } from '../models/TrustedOAuth2JwtGrantIssuer.ts';

/**
 * no description
 */
export class OAuth2ApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject\'s behalf.  The consent challenge is appended to the consent provider\'s URL to which the subject\'s user-agent (browser) is redirected to. The consent provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted or rejected the request.  This endpoint tells Ory that the subject has authorized the OAuth 2.0 client to access resources on his/her behalf. The consent provider includes additional information, such as session data for access and ID tokens, and if the consent request should be used as basis for future requests.  The response contains a redirect URL which the consent provider should redirect the user-agent to.  The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please head over to the OAuth 2.0 documentation.
     * Accept OAuth 2.0 Consent Request
     * @param consentChallenge OAuth 2.0 Consent Request Challenge
     * @param acceptOAuth2ConsentRequest 
     */
    public async acceptOAuth2ConsentRequest(consentChallenge: string, acceptOAuth2ConsentRequest?: AcceptOAuth2ConsentRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentChallenge' is not null or undefined
        if (consentChallenge === null || consentChallenge === undefined) {
            throw new RequiredError("OAuth2Api", "acceptOAuth2ConsentRequest", "consentChallenge");
        }



        // Path Params
        const localVarPath = '/admin/oauth2/auth/requests/consent/accept';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (consentChallenge !== undefined) {
            requestContext.setQueryParam("consent_challenge", ObjectSerializer.serialize(consentChallenge, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(acceptOAuth2ConsentRequest, "AcceptOAuth2ConsentRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell the Ory OAuth2 Service about it.  The authentication challenge is appended to the login provider URL to which the subject\'s user-agent (browser) is redirected to. The login provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.  This endpoint tells Ory that the subject has successfully authenticated and includes additional information such as the subject\'s ID and if Ory should remember the subject\'s subject agent for future authentication attempts by setting a cookie.  The response contains a redirect URL which the login provider should redirect the user-agent to.
     * Accept OAuth 2.0 Login Request
     * @param loginChallenge OAuth 2.0 Login Request Challenge
     * @param acceptOAuth2LoginRequest 
     */
    public async acceptOAuth2LoginRequest(loginChallenge: string, acceptOAuth2LoginRequest?: AcceptOAuth2LoginRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'loginChallenge' is not null or undefined
        if (loginChallenge === null || loginChallenge === undefined) {
            throw new RequiredError("OAuth2Api", "acceptOAuth2LoginRequest", "loginChallenge");
        }



        // Path Params
        const localVarPath = '/admin/oauth2/auth/requests/login/accept';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (loginChallenge !== undefined) {
            requestContext.setQueryParam("login_challenge", ObjectSerializer.serialize(loginChallenge, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(acceptOAuth2LoginRequest, "AcceptOAuth2LoginRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * When a user or an application requests Ory OAuth 2.0 to remove the session state of a subject, this endpoint is used to confirm that logout request.  The response contains a redirect URL which the consent provider should redirect the user-agent to.
     * Accept OAuth 2.0 Session Logout Request
     * @param logoutChallenge OAuth 2.0 Logout Request Challenge
     */
    public async acceptOAuth2LogoutRequest(logoutChallenge: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'logoutChallenge' is not null or undefined
        if (logoutChallenge === null || logoutChallenge === undefined) {
            throw new RequiredError("OAuth2Api", "acceptOAuth2LogoutRequest", "logoutChallenge");
        }


        // Path Params
        const localVarPath = '/admin/oauth2/auth/requests/logout/accept';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (logoutChallenge !== undefined) {
            requestContext.setQueryParam("logout_challenge", ObjectSerializer.serialize(logoutChallenge, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new OAuth 2.0 client. If you pass `client_secret` the secret is used, otherwise a random secret is generated. The secret is echoed in the response. It is not possible to retrieve it later on.
     * Create OAuth 2.0 Client
     * @param oAuth2Client OAuth 2.0 Client Request Body
     */
    public async createOAuth2Client(oAuth2Client: OAuth2Client, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'oAuth2Client' is not null or undefined
        if (oAuth2Client === null || oAuth2Client === undefined) {
            throw new RequiredError("OAuth2Api", "createOAuth2Client", "oAuth2Client");
        }


        // Path Params
        const localVarPath = '/admin/clients';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(oAuth2Client, "OAuth2Client", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete an existing OAuth 2.0 Client by its ID.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.  Make sure that this endpoint is well protected and only callable by first-party components.
     * Delete OAuth 2.0 Client
     * @param id The id of the OAuth 2.0 Client.
     */
    public async deleteOAuth2Client(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("OAuth2Api", "deleteOAuth2Client", "id");
        }


        // Path Params
        const localVarPath = '/admin/clients/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint deletes OAuth2 access tokens issued to an OAuth 2.0 Client from the database.
     * Delete OAuth 2.0 Access Tokens from specific OAuth 2.0 Client
     * @param clientId OAuth 2.0 Client ID
     */
    public async deleteOAuth2Token(clientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError("OAuth2Api", "deleteOAuth2Token", "clientId");
        }


        // Path Params
        const localVarPath = '/admin/oauth2/tokens';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (clientId !== undefined) {
            requestContext.setQueryParam("client_id", ObjectSerializer.serialize(clientId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this endpoint to delete trusted JWT Bearer Grant Type Issuer. The ID is the one returned when you created the trust relationship.  Once deleted, the associated issuer will no longer be able to perform the JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grant.
     * Delete Trusted OAuth2 JWT Bearer Grant Type Issuer
     * @param id The id of the desired grant
     */
    public async deleteTrustedOAuth2JwtGrantIssuer(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("OAuth2Api", "deleteTrustedOAuth2JwtGrantIssuer", "id");
        }


        // Path Params
        const localVarPath = '/admin/trust/grants/jwt-bearer/issuers/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get an OAuth 2.0 client by its ID. This endpoint never returns the client secret.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Get an OAuth 2.0 Client
     * @param id The id of the OAuth 2.0 Client.
     */
    public async getOAuth2Client(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("OAuth2Api", "getOAuth2Client", "id");
        }


        // Path Params
        const localVarPath = '/admin/clients/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject\'s behalf.  The consent challenge is appended to the consent provider\'s URL to which the subject\'s user-agent (browser) is redirected to. The consent provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted or rejected the request.  The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please head over to the OAuth 2.0 documentation.
     * Get OAuth 2.0 Consent Request
     * @param consentChallenge OAuth 2.0 Consent Request Challenge
     */
    public async getOAuth2ConsentRequest(consentChallenge: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentChallenge' is not null or undefined
        if (consentChallenge === null || consentChallenge === undefined) {
            throw new RequiredError("OAuth2Api", "getOAuth2ConsentRequest", "consentChallenge");
        }


        // Path Params
        const localVarPath = '/admin/oauth2/auth/requests/consent';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (consentChallenge !== undefined) {
            requestContext.setQueryParam("consent_challenge", ObjectSerializer.serialize(consentChallenge, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell the Ory OAuth2 Service about it.  Per default, the login provider is Ory itself. You may use a different login provider which needs to be a web-app you write and host, and it must be able to authenticate (\"show the subject a login screen\") a subject (in OAuth2 the proper name for subject is \"resource owner\").  The authentication challenge is appended to the login provider URL to which the subject\'s user-agent (browser) is redirected to. The login provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.
     * Get OAuth 2.0 Login Request
     * @param loginChallenge OAuth 2.0 Login Request Challenge
     */
    public async getOAuth2LoginRequest(loginChallenge: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'loginChallenge' is not null or undefined
        if (loginChallenge === null || loginChallenge === undefined) {
            throw new RequiredError("OAuth2Api", "getOAuth2LoginRequest", "loginChallenge");
        }


        // Path Params
        const localVarPath = '/admin/oauth2/auth/requests/login';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (loginChallenge !== undefined) {
            requestContext.setQueryParam("login_challenge", ObjectSerializer.serialize(loginChallenge, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this endpoint to fetch an Ory OAuth 2.0 logout request.
     * Get OAuth 2.0 Session Logout Request
     * @param logoutChallenge 
     */
    public async getOAuth2LogoutRequest(logoutChallenge: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'logoutChallenge' is not null or undefined
        if (logoutChallenge === null || logoutChallenge === undefined) {
            throw new RequiredError("OAuth2Api", "getOAuth2LogoutRequest", "logoutChallenge");
        }


        // Path Params
        const localVarPath = '/admin/oauth2/auth/requests/logout';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (logoutChallenge !== undefined) {
            requestContext.setQueryParam("logout_challenge", ObjectSerializer.serialize(logoutChallenge, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this endpoint to get a trusted JWT Bearer Grant Type Issuer. The ID is the one returned when you created the trust relationship.
     * Get Trusted OAuth2 JWT Bearer Grant Type Issuer
     * @param id The id of the desired grant
     */
    public async getTrustedOAuth2JwtGrantIssuer(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("OAuth2Api", "getTrustedOAuth2JwtGrantIssuer", "id");
        }


        // Path Params
        const localVarPath = '/admin/trust/grants/jwt-bearer/issuers/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * The introspection endpoint allows to check if a token (both refresh and access) is active or not. An active token is neither expired nor revoked. If a token is active, additional information on the token will be included. You can set additional data for a token by setting `session.access_token` during the consent flow.
     * Introspect OAuth2 Access and Refresh Tokens
     * @param token The string value of the token. For access tokens, this is the \\\&quot;access_token\\\&quot; value returned from the token endpoint defined in OAuth 2.0. For refresh tokens, this is the \\\&quot;refresh_token\\\&quot; value returned.
     * @param scope An optional, space separated list of required scopes. If the access token was not granted one of the scopes, the result of active will be false.
     */
    public async introspectOAuth2Token(token: string, scope?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("OAuth2Api", "introspectOAuth2Token", "token");
        }



        // Path Params
        const localVarPath = '/admin/oauth2/introspect';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'application/x-www-form-urlencoded',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (scope !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('scope', scope as any);
        }
        if (token !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('token', token as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "application/x-www-form-urlencoded"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint lists all clients in the database, and never returns client secrets. As a default it lists the first 100 clients.
     * List OAuth 2.0 Clients
     * @param pageSize Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param pageToken Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param clientName The name of the clients to filter by.
     * @param owner The owner of the clients to filter by.
     */
    public async listOAuth2Clients(pageSize?: number, pageToken?: string, clientName?: string, owner?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/admin/clients';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", "int64"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("page_token", ObjectSerializer.serialize(pageToken, "string", ""));
        }

        // Query Params
        if (clientName !== undefined) {
            requestContext.setQueryParam("client_name", ObjectSerializer.serialize(clientName, "string", ""));
        }

        // Query Params
        if (owner !== undefined) {
            requestContext.setQueryParam("owner", ObjectSerializer.serialize(owner, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint lists all subject\'s granted consent sessions, including client and granted scope. If the subject is unknown or has not granted any consent sessions yet, the endpoint returns an empty JSON array with status code 200 OK.
     * List OAuth 2.0 Consent Sessions of a Subject
     * @param subject The subject to list the consent sessions for.
     * @param pageSize Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param pageToken Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param loginSessionId The login session id to list the consent sessions for.
     */
    public async listOAuth2ConsentSessions(subject: string, pageSize?: number, pageToken?: string, loginSessionId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subject' is not null or undefined
        if (subject === null || subject === undefined) {
            throw new RequiredError("OAuth2Api", "listOAuth2ConsentSessions", "subject");
        }





        // Path Params
        const localVarPath = '/admin/oauth2/auth/sessions/consent';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", "int64"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("page_token", ObjectSerializer.serialize(pageToken, "string", ""));
        }

        // Query Params
        if (subject !== undefined) {
            requestContext.setQueryParam("subject", ObjectSerializer.serialize(subject, "string", ""));
        }

        // Query Params
        if (loginSessionId !== undefined) {
            requestContext.setQueryParam("login_session_id", ObjectSerializer.serialize(loginSessionId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this endpoint to list all trusted JWT Bearer Grant Type Issuers.
     * List Trusted OAuth2 JWT Bearer Grant Type Issuers
     * @param maxItems 
     * @param defaultItems 
     * @param issuer If optional \&quot;issuer\&quot; is supplied, only jwt-bearer grants with this issuer will be returned.
     */
    public async listTrustedOAuth2JwtGrantIssuers(maxItems?: number, defaultItems?: number, issuer?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/admin/trust/grants/jwt-bearer/issuers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxItems !== undefined) {
            requestContext.setQueryParam("MaxItems", ObjectSerializer.serialize(maxItems, "number", "int64"));
        }

        // Query Params
        if (defaultItems !== undefined) {
            requestContext.setQueryParam("DefaultItems", ObjectSerializer.serialize(defaultItems, "number", "int64"));
        }

        // Query Params
        if (issuer !== undefined) {
            requestContext.setQueryParam("issuer", ObjectSerializer.serialize(issuer, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use open source libraries to perform OAuth 2.0 and OpenID Connect available for any programming language. You can find a list of libraries at https://oauth.net/code/  The Ory SDK is not yet able to this endpoint properly.
     * OAuth 2.0 Authorize Endpoint
     */
    public async oAuth2Authorize(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/oauth2/auth';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use open source libraries to perform OAuth 2.0 and OpenID Connect available for any programming language. You can find a list of libraries here https://oauth.net/code/  The Ory SDK is not yet able to this endpoint properly.
     * The OAuth 2.0 Token Endpoint
     * @param grantType 
     * @param clientId 
     * @param code 
     * @param redirectUri 
     * @param refreshToken 
     */
    public async oauth2TokenExchange(grantType: string, clientId?: string, code?: string, redirectUri?: string, refreshToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'grantType' is not null or undefined
        if (grantType === null || grantType === undefined) {
            throw new RequiredError("OAuth2Api", "oauth2TokenExchange", "grantType");
        }






        // Path Params
        const localVarPath = '/oauth2/token';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'application/x-www-form-urlencoded',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (clientId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_id', clientId as any);
        }
        if (code !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('code', code as any);
        }
        if (grantType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('grant_type', grantType as any);
        }
        if (redirectUri !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('redirect_uri', redirectUri as any);
        }
        if (refreshToken !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('refresh_token', refreshToken as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "application/x-www-form-urlencoded"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basic"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Patch an existing OAuth 2.0 Client using JSON Patch. If you pass `client_secret` the secret will be updated and returned via the API. This is the only time you will be able to retrieve the client secret, so write it down and keep it safe.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Patch OAuth 2.0 Client
     * @param id The id of the OAuth 2.0 Client.
     * @param jsonPatch OAuth 2.0 Client JSON Patch Body
     */
    public async patchOAuth2Client(id: string, jsonPatch: Array<JsonPatch>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("OAuth2Api", "patchOAuth2Client", "id");
        }


        // verify required parameter 'jsonPatch' is not null or undefined
        if (jsonPatch === null || jsonPatch === undefined) {
            throw new RequiredError("OAuth2Api", "patchOAuth2Client", "jsonPatch");
        }


        // Path Params
        const localVarPath = '/admin/clients/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jsonPatch, "Array<JsonPatch>", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject\'s behalf.  The consent challenge is appended to the consent provider\'s URL to which the subject\'s user-agent (browser) is redirected to. The consent provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted or rejected the request.  This endpoint tells Ory that the subject has not authorized the OAuth 2.0 client to access resources on his/her behalf. The consent provider must include a reason why the consent was not granted.  The response contains a redirect URL which the consent provider should redirect the user-agent to.  The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please head over to the OAuth 2.0 documentation.
     * Reject OAuth 2.0 Consent Request
     * @param consentChallenge OAuth 2.0 Consent Request Challenge
     * @param rejectOAuth2Request 
     */
    public async rejectOAuth2ConsentRequest(consentChallenge: string, rejectOAuth2Request?: RejectOAuth2Request, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentChallenge' is not null or undefined
        if (consentChallenge === null || consentChallenge === undefined) {
            throw new RequiredError("OAuth2Api", "rejectOAuth2ConsentRequest", "consentChallenge");
        }



        // Path Params
        const localVarPath = '/admin/oauth2/auth/requests/consent/reject';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (consentChallenge !== undefined) {
            requestContext.setQueryParam("consent_challenge", ObjectSerializer.serialize(consentChallenge, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(rejectOAuth2Request, "RejectOAuth2Request", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell the Ory OAuth2 Service about it.  The authentication challenge is appended to the login provider URL to which the subject\'s user-agent (browser) is redirected to. The login provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.  This endpoint tells Ory that the subject has not authenticated and includes a reason why the authentication was denied.  The response contains a redirect URL which the login provider should redirect the user-agent to.
     * Reject OAuth 2.0 Login Request
     * @param loginChallenge OAuth 2.0 Login Request Challenge
     * @param rejectOAuth2Request 
     */
    public async rejectOAuth2LoginRequest(loginChallenge: string, rejectOAuth2Request?: RejectOAuth2Request, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'loginChallenge' is not null or undefined
        if (loginChallenge === null || loginChallenge === undefined) {
            throw new RequiredError("OAuth2Api", "rejectOAuth2LoginRequest", "loginChallenge");
        }



        // Path Params
        const localVarPath = '/admin/oauth2/auth/requests/login/reject';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (loginChallenge !== undefined) {
            requestContext.setQueryParam("login_challenge", ObjectSerializer.serialize(loginChallenge, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(rejectOAuth2Request, "RejectOAuth2Request", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * When a user or an application requests Ory OAuth 2.0 to remove the session state of a subject, this endpoint is used to deny that logout request. No HTTP request body is required.  The response is empty as the logout provider has to chose what action to perform next.
     * Reject OAuth 2.0 Session Logout Request
     * @param logoutChallenge 
     */
    public async rejectOAuth2LogoutRequest(logoutChallenge: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'logoutChallenge' is not null or undefined
        if (logoutChallenge === null || logoutChallenge === undefined) {
            throw new RequiredError("OAuth2Api", "rejectOAuth2LogoutRequest", "logoutChallenge");
        }


        // Path Params
        const localVarPath = '/admin/oauth2/auth/requests/logout/reject';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (logoutChallenge !== undefined) {
            requestContext.setQueryParam("logout_challenge", ObjectSerializer.serialize(logoutChallenge, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint revokes a subject\'s granted consent sessions and invalidates all associated OAuth 2.0 Access Tokens. You may also only revoke sessions for a specific OAuth 2.0 Client ID.
     * Revoke OAuth 2.0 Consent Sessions of a Subject
     * @param subject OAuth 2.0 Consent Subject  The subject whose consent sessions should be deleted.
     * @param client OAuth 2.0 Client ID  If set, deletes only those consent sessions that have been granted to the specified OAuth 2.0 Client ID.
     * @param all Revoke All Consent Sessions  If set to &#x60;true&#x60; deletes all consent sessions by the Subject that have been granted.
     */
    public async revokeOAuth2ConsentSessions(subject: string, client?: string, all?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subject' is not null or undefined
        if (subject === null || subject === undefined) {
            throw new RequiredError("OAuth2Api", "revokeOAuth2ConsentSessions", "subject");
        }




        // Path Params
        const localVarPath = '/admin/oauth2/auth/sessions/consent';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (subject !== undefined) {
            requestContext.setQueryParam("subject", ObjectSerializer.serialize(subject, "string", ""));
        }

        // Query Params
        if (client !== undefined) {
            requestContext.setQueryParam("client", ObjectSerializer.serialize(client, "string", ""));
        }

        // Query Params
        if (all !== undefined) {
            requestContext.setQueryParam("all", ObjectSerializer.serialize(all, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint invalidates authentication sessions. After revoking the authentication session(s), the subject has to re-authenticate at the Ory OAuth2 Provider. This endpoint does not invalidate any tokens.  If you send the subject in a query param, all authentication sessions that belong to that subject are revoked. No OpennID Connect Front- or Back-channel logout is performed in this case.  Alternatively, you can send a SessionID via `sid` query param, in which case, only the session that is connected to that SessionID is revoked. OpenID Connect Back-channel logout is performed in this case.
     * Revokes OAuth 2.0 Login Sessions by either a Subject or a SessionID
     * @param subject OAuth 2.0 Subject  The subject to revoke authentication sessions for.
     * @param sid OAuth 2.0 Subject  The subject to revoke authentication sessions for.
     */
    public async revokeOAuth2LoginSessions(subject?: string, sid?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/admin/oauth2/auth/sessions/login';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (subject !== undefined) {
            requestContext.setQueryParam("subject", ObjectSerializer.serialize(subject, "string", ""));
        }

        // Query Params
        if (sid !== undefined) {
            requestContext.setQueryParam("sid", ObjectSerializer.serialize(sid, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Revoking a token (both access and refresh) means that the tokens will be invalid. A revoked access token can no longer be used to make access requests, and a revoked refresh token can no longer be used to refresh an access token. Revoking a refresh token also invalidates the access token that was created with it. A token may only be revoked by the client the token was generated for.
     * Revoke OAuth 2.0 Access or Refresh Token
     * @param token 
     * @param clientId 
     * @param clientSecret 
     */
    public async revokeOAuth2Token(token: string, clientId?: string, clientSecret?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("OAuth2Api", "revokeOAuth2Token", "token");
        }




        // Path Params
        const localVarPath = '/oauth2/revoke';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'application/x-www-form-urlencoded',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (clientId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_id', clientId as any);
        }
        if (clientSecret !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_secret', clientSecret as any);
        }
        if (token !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('token', token as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "application/x-www-form-urlencoded"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basic"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Replaces an existing OAuth 2.0 Client with the payload you send. If you pass `client_secret` the secret is used, otherwise the existing secret is used.  If set, the secret is echoed in the response. It is not possible to retrieve it later on.  OAuth 2.0 Clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Set OAuth 2.0 Client
     * @param id OAuth 2.0 Client ID
     * @param oAuth2Client OAuth 2.0 Client Request Body
     */
    public async setOAuth2Client(id: string, oAuth2Client: OAuth2Client, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("OAuth2Api", "setOAuth2Client", "id");
        }


        // verify required parameter 'oAuth2Client' is not null or undefined
        if (oAuth2Client === null || oAuth2Client === undefined) {
            throw new RequiredError("OAuth2Api", "setOAuth2Client", "oAuth2Client");
        }


        // Path Params
        const localVarPath = '/admin/clients/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(oAuth2Client, "OAuth2Client", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Set lifespans of different token types issued for this OAuth 2.0 client. Does not modify other fields.
     * Set OAuth2 Client Token Lifespans
     * @param id OAuth 2.0 Client ID
     * @param oAuth2ClientTokenLifespans 
     */
    public async setOAuth2ClientLifespans(id: string, oAuth2ClientTokenLifespans?: OAuth2ClientTokenLifespans, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("OAuth2Api", "setOAuth2ClientLifespans", "id");
        }



        // Path Params
        const localVarPath = '/admin/clients/{id}/lifespans'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(oAuth2ClientTokenLifespans, "OAuth2ClientTokenLifespans", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this endpoint to establish a trust relationship for a JWT issuer to perform JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants [RFC7523](https://datatracker.ietf.org/doc/html/rfc7523).
     * Trust OAuth2 JWT Bearer Grant Type Issuer
     * @param trustOAuth2JwtGrantIssuer 
     */
    public async trustOAuth2JwtGrantIssuer(trustOAuth2JwtGrantIssuer?: TrustOAuth2JwtGrantIssuer, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/admin/trust/grants/jwt-bearer/issuers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(trustOAuth2JwtGrantIssuer, "TrustOAuth2JwtGrantIssuer", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class OAuth2ApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to acceptOAuth2ConsentRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async acceptOAuth2ConsentRequest(response: ResponseContext): Promise<OAuth2RedirectTo > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OAuth2RedirectTo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2RedirectTo", ""
            ) as OAuth2RedirectTo;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OAuth2RedirectTo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2RedirectTo", ""
            ) as OAuth2RedirectTo;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to acceptOAuth2LoginRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async acceptOAuth2LoginRequest(response: ResponseContext): Promise<OAuth2RedirectTo > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OAuth2RedirectTo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2RedirectTo", ""
            ) as OAuth2RedirectTo;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OAuth2RedirectTo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2RedirectTo", ""
            ) as OAuth2RedirectTo;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to acceptOAuth2LogoutRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async acceptOAuth2LogoutRequest(response: ResponseContext): Promise<OAuth2RedirectTo > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OAuth2RedirectTo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2RedirectTo", ""
            ) as OAuth2RedirectTo;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OAuth2RedirectTo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2RedirectTo", ""
            ) as OAuth2RedirectTo;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOAuth2Client
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createOAuth2Client(response: ResponseContext): Promise<OAuth2Client > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: OAuth2Client = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2Client", ""
            ) as OAuth2Client;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "Bad Request Error Response", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "Default Error Response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OAuth2Client = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2Client", ""
            ) as OAuth2Client;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOAuth2Client
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteOAuth2Client(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(response.httpStatusCode, "genericError", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOAuth2Token
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteOAuth2Token(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTrustedOAuth2JwtGrantIssuer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteTrustedOAuth2JwtGrantIssuer(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(response.httpStatusCode, "genericError", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2Client
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOAuth2Client(response: ResponseContext): Promise<OAuth2Client > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OAuth2Client = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2Client", ""
            ) as OAuth2Client;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "Default Error Response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OAuth2Client = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2Client", ""
            ) as OAuth2Client;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2ConsentRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOAuth2ConsentRequest(response: ResponseContext): Promise<OAuth2ConsentRequest > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OAuth2ConsentRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2ConsentRequest", ""
            ) as OAuth2ConsentRequest;
            return body;
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: OAuth2RedirectTo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2RedirectTo", ""
            ) as OAuth2RedirectTo;
            throw new ApiException<OAuth2RedirectTo>(response.httpStatusCode, "oAuth2RedirectTo", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OAuth2ConsentRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2ConsentRequest", ""
            ) as OAuth2ConsentRequest;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2LoginRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOAuth2LoginRequest(response: ResponseContext): Promise<OAuth2LoginRequest > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OAuth2LoginRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2LoginRequest", ""
            ) as OAuth2LoginRequest;
            return body;
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: OAuth2RedirectTo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2RedirectTo", ""
            ) as OAuth2RedirectTo;
            throw new ApiException<OAuth2RedirectTo>(response.httpStatusCode, "oAuth2RedirectTo", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OAuth2LoginRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2LoginRequest", ""
            ) as OAuth2LoginRequest;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2LogoutRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOAuth2LogoutRequest(response: ResponseContext): Promise<OAuth2LogoutRequest > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OAuth2LogoutRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2LogoutRequest", ""
            ) as OAuth2LogoutRequest;
            return body;
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: OAuth2RedirectTo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2RedirectTo", ""
            ) as OAuth2RedirectTo;
            throw new ApiException<OAuth2RedirectTo>(response.httpStatusCode, "oAuth2RedirectTo", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OAuth2LogoutRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2LogoutRequest", ""
            ) as OAuth2LogoutRequest;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTrustedOAuth2JwtGrantIssuer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTrustedOAuth2JwtGrantIssuer(response: ResponseContext): Promise<TrustedOAuth2JwtGrantIssuer > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TrustedOAuth2JwtGrantIssuer = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TrustedOAuth2JwtGrantIssuer", ""
            ) as TrustedOAuth2JwtGrantIssuer;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(response.httpStatusCode, "genericError", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TrustedOAuth2JwtGrantIssuer = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TrustedOAuth2JwtGrantIssuer", ""
            ) as TrustedOAuth2JwtGrantIssuer;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to introspectOAuth2Token
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async introspectOAuth2Token(response: ResponseContext): Promise<IntrospectedOAuth2Token > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IntrospectedOAuth2Token = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IntrospectedOAuth2Token", ""
            ) as IntrospectedOAuth2Token;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IntrospectedOAuth2Token = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IntrospectedOAuth2Token", ""
            ) as IntrospectedOAuth2Token;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOAuth2Clients
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listOAuth2Clients(response: ResponseContext): Promise<Array<OAuth2Client> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<OAuth2Client> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OAuth2Client>", ""
            ) as Array<OAuth2Client>;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "Default Error Response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<OAuth2Client> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OAuth2Client>", ""
            ) as Array<OAuth2Client>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOAuth2ConsentSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listOAuth2ConsentSessions(response: ResponseContext): Promise<Array<OAuth2ConsentSession> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<OAuth2ConsentSession> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OAuth2ConsentSession>", ""
            ) as Array<OAuth2ConsentSession>;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<OAuth2ConsentSession> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OAuth2ConsentSession>", ""
            ) as Array<OAuth2ConsentSession>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTrustedOAuth2JwtGrantIssuers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listTrustedOAuth2JwtGrantIssuers(response: ResponseContext): Promise<Array<TrustedOAuth2JwtGrantIssuer> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<TrustedOAuth2JwtGrantIssuer> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TrustedOAuth2JwtGrantIssuer>", ""
            ) as Array<TrustedOAuth2JwtGrantIssuer>;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(response.httpStatusCode, "genericError", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<TrustedOAuth2JwtGrantIssuer> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TrustedOAuth2JwtGrantIssuer>", ""
            ) as Array<TrustedOAuth2JwtGrantIssuer>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to oAuth2Authorize
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async oAuth2Authorize(response: ResponseContext): Promise< void> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("302", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201.", undefined, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to oauth2TokenExchange
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async oauth2TokenExchange(response: ResponseContext): Promise<OAuth2TokenExchange > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OAuth2TokenExchange = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2TokenExchange", ""
            ) as OAuth2TokenExchange;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OAuth2TokenExchange = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2TokenExchange", ""
            ) as OAuth2TokenExchange;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchOAuth2Client
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchOAuth2Client(response: ResponseContext): Promise<OAuth2Client > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OAuth2Client = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2Client", ""
            ) as OAuth2Client;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "Not Found Error Response", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "Default Error Response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OAuth2Client = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2Client", ""
            ) as OAuth2Client;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rejectOAuth2ConsentRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rejectOAuth2ConsentRequest(response: ResponseContext): Promise<OAuth2RedirectTo > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OAuth2RedirectTo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2RedirectTo", ""
            ) as OAuth2RedirectTo;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OAuth2RedirectTo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2RedirectTo", ""
            ) as OAuth2RedirectTo;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rejectOAuth2LoginRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rejectOAuth2LoginRequest(response: ResponseContext): Promise<OAuth2RedirectTo > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OAuth2RedirectTo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2RedirectTo", ""
            ) as OAuth2RedirectTo;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OAuth2RedirectTo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2RedirectTo", ""
            ) as OAuth2RedirectTo;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rejectOAuth2LogoutRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rejectOAuth2LogoutRequest(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeOAuth2ConsentSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async revokeOAuth2ConsentSessions(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeOAuth2LoginSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async revokeOAuth2LoginSessions(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeOAuth2Token
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async revokeOAuth2Token(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "errorOAuth2", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setOAuth2Client
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setOAuth2Client(response: ResponseContext): Promise<OAuth2Client > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OAuth2Client = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2Client", ""
            ) as OAuth2Client;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "Bad Request Error Response", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "Not Found Error Response", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorOAuth2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorOAuth2", ""
            ) as ErrorOAuth2;
            throw new ApiException<ErrorOAuth2>(response.httpStatusCode, "Default Error Response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OAuth2Client = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2Client", ""
            ) as OAuth2Client;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setOAuth2ClientLifespans
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setOAuth2ClientLifespans(response: ResponseContext): Promise<OAuth2Client > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OAuth2Client = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2Client", ""
            ) as OAuth2Client;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(response.httpStatusCode, "genericError", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OAuth2Client = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2Client", ""
            ) as OAuth2Client;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to trustOAuth2JwtGrantIssuer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async trustOAuth2JwtGrantIssuer(response: ResponseContext): Promise<TrustedOAuth2JwtGrantIssuer > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: TrustedOAuth2JwtGrantIssuer = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TrustedOAuth2JwtGrantIssuer", ""
            ) as TrustedOAuth2JwtGrantIssuer;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(response.httpStatusCode, "genericError", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TrustedOAuth2JwtGrantIssuer = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TrustedOAuth2JwtGrantIssuer", ""
            ) as TrustedOAuth2JwtGrantIssuer;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
