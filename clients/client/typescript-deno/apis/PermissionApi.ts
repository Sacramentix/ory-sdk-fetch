// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CheckPermissionResult } from '../models/CheckPermissionResult.ts';
import { ErrorGeneric } from '../models/ErrorGeneric.ts';
import { ExpandedPermissionTree } from '../models/ExpandedPermissionTree.ts';
import { PostCheckPermissionBody } from '../models/PostCheckPermissionBody.ts';
import { PostCheckPermissionOrErrorBody } from '../models/PostCheckPermissionOrErrorBody.ts';

/**
 * no description
 */
export class PermissionApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param namespace Namespace of the Relationship
     * @param object Object of the Relationship
     * @param relation Relation of the Relationship
     * @param subjectId SubjectID of the Relationship
     * @param subjectSetNamespace Namespace of the Subject Set
     * @param subjectSetObject Object of the Subject Set
     * @param subjectSetRelation Relation of the Subject Set
     * @param maxDepth 
     */
    public async checkPermission(namespace?: string, object?: string, relation?: string, subjectId?: string, subjectSetNamespace?: string, subjectSetObject?: string, subjectSetRelation?: string, maxDepth?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/relation-tuples/check/openapi';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (namespace !== undefined) {
            requestContext.setQueryParam("namespace", ObjectSerializer.serialize(namespace, "string", ""));
        }

        // Query Params
        if (object !== undefined) {
            requestContext.setQueryParam("object", ObjectSerializer.serialize(object, "string", ""));
        }

        // Query Params
        if (relation !== undefined) {
            requestContext.setQueryParam("relation", ObjectSerializer.serialize(relation, "string", ""));
        }

        // Query Params
        if (subjectId !== undefined) {
            requestContext.setQueryParam("subject_id", ObjectSerializer.serialize(subjectId, "string", ""));
        }

        // Query Params
        if (subjectSetNamespace !== undefined) {
            requestContext.setQueryParam("subject_set.namespace", ObjectSerializer.serialize(subjectSetNamespace, "string", ""));
        }

        // Query Params
        if (subjectSetObject !== undefined) {
            requestContext.setQueryParam("subject_set.object", ObjectSerializer.serialize(subjectSetObject, "string", ""));
        }

        // Query Params
        if (subjectSetRelation !== undefined) {
            requestContext.setQueryParam("subject_set.relation", ObjectSerializer.serialize(subjectSetRelation, "string", ""));
        }

        // Query Params
        if (maxDepth !== undefined) {
            requestContext.setQueryParam("max-depth", ObjectSerializer.serialize(maxDepth, "number", "int64"));
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
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param namespace Namespace of the Relationship
     * @param object Object of the Relationship
     * @param relation Relation of the Relationship
     * @param subjectId SubjectID of the Relationship
     * @param subjectSetNamespace Namespace of the Subject Set
     * @param subjectSetObject Object of the Subject Set
     * @param subjectSetRelation Relation of the Subject Set
     * @param maxDepth 
     */
    public async checkPermissionOrError(namespace?: string, object?: string, relation?: string, subjectId?: string, subjectSetNamespace?: string, subjectSetObject?: string, subjectSetRelation?: string, maxDepth?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/relation-tuples/check';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (namespace !== undefined) {
            requestContext.setQueryParam("namespace", ObjectSerializer.serialize(namespace, "string", ""));
        }

        // Query Params
        if (object !== undefined) {
            requestContext.setQueryParam("object", ObjectSerializer.serialize(object, "string", ""));
        }

        // Query Params
        if (relation !== undefined) {
            requestContext.setQueryParam("relation", ObjectSerializer.serialize(relation, "string", ""));
        }

        // Query Params
        if (subjectId !== undefined) {
            requestContext.setQueryParam("subject_id", ObjectSerializer.serialize(subjectId, "string", ""));
        }

        // Query Params
        if (subjectSetNamespace !== undefined) {
            requestContext.setQueryParam("subject_set.namespace", ObjectSerializer.serialize(subjectSetNamespace, "string", ""));
        }

        // Query Params
        if (subjectSetObject !== undefined) {
            requestContext.setQueryParam("subject_set.object", ObjectSerializer.serialize(subjectSetObject, "string", ""));
        }

        // Query Params
        if (subjectSetRelation !== undefined) {
            requestContext.setQueryParam("subject_set.relation", ObjectSerializer.serialize(subjectSetRelation, "string", ""));
        }

        // Query Params
        if (maxDepth !== undefined) {
            requestContext.setQueryParam("max-depth", ObjectSerializer.serialize(maxDepth, "number", "int64"));
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
     * Use this endpoint to expand a relationship tuple into permissions.
     * Expand a Relationship into permissions.
     * @param namespace Namespace of the Subject Set
     * @param object Object of the Subject Set
     * @param relation Relation of the Subject Set
     * @param maxDepth 
     */
    public async expandPermissions(namespace: string, object: string, relation: string, maxDepth?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("PermissionApi", "expandPermissions", "namespace");
        }


        // verify required parameter 'object' is not null or undefined
        if (object === null || object === undefined) {
            throw new RequiredError("PermissionApi", "expandPermissions", "object");
        }


        // verify required parameter 'relation' is not null or undefined
        if (relation === null || relation === undefined) {
            throw new RequiredError("PermissionApi", "expandPermissions", "relation");
        }



        // Path Params
        const localVarPath = '/relation-tuples/expand';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (namespace !== undefined) {
            requestContext.setQueryParam("namespace", ObjectSerializer.serialize(namespace, "string", ""));
        }

        // Query Params
        if (object !== undefined) {
            requestContext.setQueryParam("object", ObjectSerializer.serialize(object, "string", ""));
        }

        // Query Params
        if (relation !== undefined) {
            requestContext.setQueryParam("relation", ObjectSerializer.serialize(relation, "string", ""));
        }

        // Query Params
        if (maxDepth !== undefined) {
            requestContext.setQueryParam("max-depth", ObjectSerializer.serialize(maxDepth, "number", "int64"));
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
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param maxDepth 
     * @param postCheckPermissionBody 
     */
    public async postCheckPermission(maxDepth?: number, postCheckPermissionBody?: PostCheckPermissionBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/relation-tuples/check/openapi';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxDepth !== undefined) {
            requestContext.setQueryParam("max-depth", ObjectSerializer.serialize(maxDepth, "number", "int64"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(postCheckPermissionBody, "PostCheckPermissionBody", ""),
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
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param maxDepth nolint:deadcode,unused
     * @param postCheckPermissionOrErrorBody 
     */
    public async postCheckPermissionOrError(maxDepth?: number, postCheckPermissionOrErrorBody?: PostCheckPermissionOrErrorBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/relation-tuples/check';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxDepth !== undefined) {
            requestContext.setQueryParam("max-depth", ObjectSerializer.serialize(maxDepth, "number", "int64"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(postCheckPermissionOrErrorBody, "PostCheckPermissionOrErrorBody", ""),
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

export class PermissionApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkPermission
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async checkPermission(response: ResponseContext): Promise<CheckPermissionResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CheckPermissionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckPermissionResult", ""
            ) as CheckPermissionResult;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CheckPermissionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckPermissionResult", ""
            ) as CheckPermissionResult;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkPermissionOrError
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async checkPermissionOrError(response: ResponseContext): Promise<CheckPermissionResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CheckPermissionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckPermissionResult", ""
            ) as CheckPermissionResult;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: CheckPermissionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckPermissionResult", ""
            ) as CheckPermissionResult;
            throw new ApiException<CheckPermissionResult>(response.httpStatusCode, "checkPermissionResult", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CheckPermissionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckPermissionResult", ""
            ) as CheckPermissionResult;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expandPermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async expandPermissions(response: ResponseContext): Promise<ExpandedPermissionTree > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExpandedPermissionTree = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExpandedPermissionTree", ""
            ) as ExpandedPermissionTree;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExpandedPermissionTree = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExpandedPermissionTree", ""
            ) as ExpandedPermissionTree;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCheckPermission
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postCheckPermission(response: ResponseContext): Promise<CheckPermissionResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CheckPermissionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckPermissionResult", ""
            ) as CheckPermissionResult;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CheckPermissionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckPermissionResult", ""
            ) as CheckPermissionResult;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCheckPermissionOrError
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postCheckPermissionOrError(response: ResponseContext): Promise<CheckPermissionResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CheckPermissionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckPermissionResult", ""
            ) as CheckPermissionResult;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: CheckPermissionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckPermissionResult", ""
            ) as CheckPermissionResult;
            throw new ApiException<CheckPermissionResult>(response.httpStatusCode, "checkPermissionResult", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CheckPermissionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckPermissionResult", ""
            ) as CheckPermissionResult;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
