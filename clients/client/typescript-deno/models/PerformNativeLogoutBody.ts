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
* Perform Native Logout Request Body
*/
export class PerformNativeLogoutBody {
    /**
    * The Session Token  Invalidate this session token.
    */
    'session_token': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "session_token",
            "baseName": "session_token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PerformNativeLogoutBody.attributeTypeMap;
    }

    public constructor() {
    }
}

