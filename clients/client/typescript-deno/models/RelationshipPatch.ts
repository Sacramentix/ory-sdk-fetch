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

import { Relationship } from '../models/Relationship.ts';
import { HttpFile } from '../http/http.ts';

/**
* Payload for patching a relationship
*/
export class RelationshipPatch {
    'action'?: RelationshipPatchActionEnum;
    'relation_tuple'?: Relationship;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "RelationshipPatchActionEnum",
            "format": ""
        },
        {
            "name": "relation_tuple",
            "baseName": "relation_tuple",
            "type": "Relationship",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RelationshipPatch.attributeTypeMap;
    }

    public constructor() {
    }
}


export type RelationshipPatchActionEnum = "insert" | "delete" ;

