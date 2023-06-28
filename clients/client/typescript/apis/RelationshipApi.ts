// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CheckOplSyntaxResult } from '../models/CheckOplSyntaxResult.ts';
import { CreateRelationshipBody } from '../models/CreateRelationshipBody.ts';
import { ErrorGeneric } from '../models/ErrorGeneric.ts';
import { Relationship } from '../models/Relationship.ts';
import { RelationshipNamespaces } from '../models/RelationshipNamespaces.ts';
import { RelationshipPatch } from '../models/RelationshipPatch.ts';
import { Relationships } from '../models/Relationships.ts';

/**
 * no description
 */
export class RelationshipApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * The OPL file is expected in the body of the request.
     * Check the syntax of an OPL file
     * @param body 
     */
    public async checkOplSyntax(body?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/opl/syntax/check';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "text/plain"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "string", ""),
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
     * Use this endpoint to create a relationship.
     * Create a Relationship
     * @param createRelationshipBody 
     */
    public async createRelationship(createRelationshipBody?: CreateRelationshipBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/admin/relation-tuples';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createRelationshipBody, "CreateRelationshipBody", ""),
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
     * Use this endpoint to delete relationships
     * Delete Relationships
     * @param namespace Namespace of the Relationship
     * @param object Object of the Relationship
     * @param relation Relation of the Relationship
     * @param subjectId SubjectID of the Relationship
     * @param subjectSetNamespace Namespace of the Subject Set
     * @param subjectSetObject Object of the Subject Set
     * @param subjectSetRelation Relation of the Subject Set
     */
    public async deleteRelationships(namespace?: string, object?: string, relation?: string, subjectId?: string, subjectSetNamespace?: string, subjectSetObject?: string, subjectSetRelation?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/admin/relation-tuples';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Get all relationships that match the query. Only the namespace field is required.
     * Query relationships
     * @param pageToken 
     * @param pageSize 
     * @param namespace Namespace of the Relationship
     * @param object Object of the Relationship
     * @param relation Relation of the Relationship
     * @param subjectId SubjectID of the Relationship
     * @param subjectSetNamespace Namespace of the Subject Set
     * @param subjectSetObject Object of the Subject Set
     * @param subjectSetRelation Relation of the Subject Set
     */
    public async getRelationships(pageToken?: string, pageSize?: number, namespace?: string, object?: string, relation?: string, subjectId?: string, subjectSetNamespace?: string, subjectSetObject?: string, subjectSetRelation?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;










        // Path Params
        const localVarPath = '/relation-tuples';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("page_token", ObjectSerializer.serialize(pageToken, "string", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", "int64"));
        }

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
     * Get all namespaces
     * Query namespaces
     */
    public async listRelationshipNamespaces(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/namespaces';

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
     * Use this endpoint to patch one or more relationships.
     * Patch Multiple Relationships
     * @param relationshipPatch 
     */
    public async patchRelationships(relationshipPatch?: Array<RelationshipPatch>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/admin/relation-tuples';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(relationshipPatch, "Array<RelationshipPatch>", ""),
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

export class RelationshipApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkOplSyntax
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async checkOplSyntax(response: ResponseContext): Promise<CheckOplSyntaxResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CheckOplSyntaxResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckOplSyntaxResult", ""
            ) as CheckOplSyntaxResult;
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
            const body: CheckOplSyntaxResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckOplSyntaxResult", ""
            ) as CheckOplSyntaxResult;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createRelationship(response: ResponseContext): Promise<Relationship > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Relationship = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Relationship", ""
            ) as Relationship;
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
            const body: Relationship = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Relationship", ""
            ) as Relationship;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRelationships
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteRelationships(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
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
     * @params response Response returned by the server for a request to getRelationships
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRelationships(response: ResponseContext): Promise<Relationships > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Relationships = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Relationships", ""
            ) as Relationships;
            return body;
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
            const body: Relationships = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Relationships", ""
            ) as Relationships;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRelationshipNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRelationshipNamespaces(response: ResponseContext): Promise<RelationshipNamespaces > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RelationshipNamespaces = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationshipNamespaces", ""
            ) as RelationshipNamespaces;
            return body;
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
            const body: RelationshipNamespaces = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RelationshipNamespaces", ""
            ) as RelationshipNamespaces;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchRelationships
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchRelationships(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
