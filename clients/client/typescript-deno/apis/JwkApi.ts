// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CreateJsonWebKeySet } from '../models/CreateJsonWebKeySet.ts';
import { ErrorOAuth2 } from '../models/ErrorOAuth2.ts';
import { JsonWebKey } from '../models/JsonWebKey.ts';
import { JsonWebKeySet } from '../models/JsonWebKeySet.ts';

/**
 * no description
 */
export class JwkApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This endpoint is capable of generating JSON Web Key Sets for you. There a different strategies available, such as symmetric cryptographic keys (HS256, HS512) and asymetric cryptographic keys (RS256, ECDSA). If the specified JSON Web Key Set does not exist, it will be created.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Create JSON Web Key
     * @param set The JSON Web Key Set ID
     * @param createJsonWebKeySet 
     */
    public async createJsonWebKeySet(set: string, createJsonWebKeySet: CreateJsonWebKeySet, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'set' is not null or undefined
        if (set === null || set === undefined) {
            throw new RequiredError("JwkApi", "createJsonWebKeySet", "set");
        }


        // verify required parameter 'createJsonWebKeySet' is not null or undefined
        if (createJsonWebKeySet === null || createJsonWebKeySet === undefined) {
            throw new RequiredError("JwkApi", "createJsonWebKeySet", "createJsonWebKeySet");
        }


        // Path Params
        const localVarPath = '/admin/keys/{set}'
            .replace('{' + 'set' + '}', encodeURIComponent(String(set)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createJsonWebKeySet, "CreateJsonWebKeySet", ""),
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
     * Use this endpoint to delete a single JSON Web Key.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Delete JSON Web Key
     * @param set The JSON Web Key Set
     * @param kid The JSON Web Key ID (kid)
     */
    public async deleteJsonWebKey(set: string, kid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'set' is not null or undefined
        if (set === null || set === undefined) {
            throw new RequiredError("JwkApi", "deleteJsonWebKey", "set");
        }


        // verify required parameter 'kid' is not null or undefined
        if (kid === null || kid === undefined) {
            throw new RequiredError("JwkApi", "deleteJsonWebKey", "kid");
        }


        // Path Params
        const localVarPath = '/admin/keys/{set}/{kid}'
            .replace('{' + 'set' + '}', encodeURIComponent(String(set)))
            .replace('{' + 'kid' + '}', encodeURIComponent(String(kid)));

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
     * Use this endpoint to delete a complete JSON Web Key Set and all the keys in that set.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Delete JSON Web Key Set
     * @param set The JSON Web Key Set
     */
    public async deleteJsonWebKeySet(set: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'set' is not null or undefined
        if (set === null || set === undefined) {
            throw new RequiredError("JwkApi", "deleteJsonWebKeySet", "set");
        }


        // Path Params
        const localVarPath = '/admin/keys/{set}'
            .replace('{' + 'set' + '}', encodeURIComponent(String(set)));

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
     * This endpoint returns a singular JSON Web Key contained in a set. It is identified by the set and the specific key ID (kid).
     * Get JSON Web Key
     * @param set JSON Web Key Set ID
     * @param kid JSON Web Key ID
     */
    public async getJsonWebKey(set: string, kid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'set' is not null or undefined
        if (set === null || set === undefined) {
            throw new RequiredError("JwkApi", "getJsonWebKey", "set");
        }


        // verify required parameter 'kid' is not null or undefined
        if (kid === null || kid === undefined) {
            throw new RequiredError("JwkApi", "getJsonWebKey", "kid");
        }


        // Path Params
        const localVarPath = '/admin/keys/{set}/{kid}'
            .replace('{' + 'set' + '}', encodeURIComponent(String(set)))
            .replace('{' + 'kid' + '}', encodeURIComponent(String(kid)));

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
     * This endpoint can be used to retrieve JWK Sets stored in ORY Hydra.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Retrieve a JSON Web Key Set
     * @param set JSON Web Key Set ID
     */
    public async getJsonWebKeySet(set: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'set' is not null or undefined
        if (set === null || set === undefined) {
            throw new RequiredError("JwkApi", "getJsonWebKeySet", "set");
        }


        // Path Params
        const localVarPath = '/admin/keys/{set}'
            .replace('{' + 'set' + '}', encodeURIComponent(String(set)));

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
     * Use this method if you do not want to let Hydra generate the JWKs for you, but instead save your own.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Set JSON Web Key
     * @param set The JSON Web Key Set ID
     * @param kid JSON Web Key ID
     * @param jsonWebKey 
     */
    public async setJsonWebKey(set: string, kid: string, jsonWebKey?: JsonWebKey, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'set' is not null or undefined
        if (set === null || set === undefined) {
            throw new RequiredError("JwkApi", "setJsonWebKey", "set");
        }


        // verify required parameter 'kid' is not null or undefined
        if (kid === null || kid === undefined) {
            throw new RequiredError("JwkApi", "setJsonWebKey", "kid");
        }



        // Path Params
        const localVarPath = '/admin/keys/{set}/{kid}'
            .replace('{' + 'set' + '}', encodeURIComponent(String(set)))
            .replace('{' + 'kid' + '}', encodeURIComponent(String(kid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jsonWebKey, "JsonWebKey", ""),
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
     * Use this method if you do not want to let Hydra generate the JWKs for you, but instead save your own.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Update a JSON Web Key Set
     * @param set The JSON Web Key Set ID
     * @param jsonWebKeySet 
     */
    public async setJsonWebKeySet(set: string, jsonWebKeySet?: JsonWebKeySet, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'set' is not null or undefined
        if (set === null || set === undefined) {
            throw new RequiredError("JwkApi", "setJsonWebKeySet", "set");
        }



        // Path Params
        const localVarPath = '/admin/keys/{set}'
            .replace('{' + 'set' + '}', encodeURIComponent(String(set)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jsonWebKeySet, "JsonWebKeySet", ""),
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

export class JwkApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createJsonWebKeySet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createJsonWebKeySet(response: ResponseContext): Promise<JsonWebKeySet > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteJsonWebKey(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteJsonWebKeySet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteJsonWebKeySet(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to getJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJsonWebKey(response: ResponseContext): Promise<JsonWebKeySet > {
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJsonWebKeySet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJsonWebKeySet(response: ResponseContext): Promise<JsonWebKeySet > {
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setJsonWebKey(response: ResponseContext): Promise<JsonWebKey > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JsonWebKey = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JsonWebKey", ""
            ) as JsonWebKey;
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
            const body: JsonWebKey = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JsonWebKey", ""
            ) as JsonWebKey;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setJsonWebKeySet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setJsonWebKeySet(response: ResponseContext): Promise<JsonWebKeySet > {
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
