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
* Response for a single identity patch
*/
export class IdentityPatchResponse {
    /**
    * The action for this specific patch create ActionCreate  Create this identity.
    */
    'action'?: IdentityPatchResponseActionEnum;
    /**
    * The identity ID payload of this patch
    */
    'identity'?: string;
    /**
    * The ID of this patch response, if an ID was specified in the patch.
    */
    'patch_id'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "IdentityPatchResponseActionEnum",
            "format": ""
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "patch_id",
            "baseName": "patch_id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return IdentityPatchResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type IdentityPatchResponseActionEnum = "create" ;

