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
* Update Settings Flow with Profile Method
*/
export class UpdateSettingsFlowWithProfileMethod {
    /**
    * The Anti-CSRF Token  This token is only required when performing browser flows.
    */
    'csrf_token'?: string;
    /**
    * Method  Should be set to profile when trying to update a profile.
    */
    'method': string;
    /**
    * Traits  The identity\'s traits.
    */
    'traits': any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "csrf_token",
            "baseName": "csrf_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string",
            "format": ""
        },
        {
            "name": "traits",
            "baseName": "traits",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateSettingsFlowWithProfileMethod.attributeTypeMap;
    }

    public constructor() {
    }
}

