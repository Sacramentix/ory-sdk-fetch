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
* Ory Identity Schema Location
*/
export class GetManagedIdentitySchemaLocation {
    'location'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "location",
            "baseName": "location",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetManagedIdentitySchemaLocation.attributeTypeMap;
    }

    public constructor() {
    }
}

