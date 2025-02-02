/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * OpenAPI spec version: v1.1.39
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

/**
* Is Owner For Project By Slug Request Body
*/
export class InternalIsOwnerForProjectBySlugBody {
    /**
    * Namespace is the namespace of the subject.
    */
    'namespace': InternalIsOwnerForProjectBySlugBodyNamespaceEnum;
    /**
    * ProjectScope is the project_id resolved from the API Token.
    */
    'project_scope'?: string;
    /**
    * ProjectSlug is the project\'s slug.
    */
    'project_slug': string;
    /**
    * Subject is the subject acting (user or API key).
    */
    'subject': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "InternalIsOwnerForProjectBySlugBodyNamespaceEnum",
            "format": ""
        },
        {
            "name": "project_scope",
            "baseName": "project_scope",
            "type": "string",
            "format": ""
        },
        {
            "name": "project_slug",
            "baseName": "project_slug",
            "type": "string",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InternalIsOwnerForProjectBySlugBody.attributeTypeMap;
    }

    public constructor() {
    }
}


export type InternalIsOwnerForProjectBySlugBodyNamespaceEnum = "User" | " ApiKey" ;

