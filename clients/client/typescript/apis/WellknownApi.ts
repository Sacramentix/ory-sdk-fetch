// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ErrorOAuth2 } from '../models/ErrorOAuth2.ts';
import { JsonWebKeySet } from '../models/JsonWebKeySet.ts';

/**
 * no description
 */
export class WellknownApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This endpoint returns JSON Web Keys required to verifying OpenID Connect ID Tokens and, if enabled, OAuth 2.0 JWT Access Tokens. This endpoint can be used with client libraries like [node-jwks-rsa](https://github.com/auth0/node-jwks-rsa) among others.
     * Discover Well-Known JSON Web Keys
     */
    public async discoverJsonWebKeys(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/.well-known/jwks.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class WellknownApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to discoverJsonWebKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async discoverJsonWebKeys(response: ResponseContext): Promise<JsonWebKeySet > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JsonWebKeySet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JsonWebKeySet", ""
            ) as JsonWebKeySet;
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
            const body: JsonWebKeySet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JsonWebKeySet", ""
            ) as JsonWebKeySet;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
