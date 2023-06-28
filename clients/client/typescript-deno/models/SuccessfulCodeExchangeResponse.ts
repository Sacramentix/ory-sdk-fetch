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

import { Session } from '../models/Session.ts';
import { HttpFile } from '../http/http.ts';

/**
* The Response for Registration Flows via API
*/
export class SuccessfulCodeExchangeResponse {
    'session': Session;
    /**
    * The Session Token  A session token is equivalent to a session cookie, but it can be sent in the HTTP Authorization Header:  Authorization: bearer ${session-token}  The session token is only issued for API flows, not for Browser flows!
    */
    'session_token'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "session",
            "baseName": "session",
            "type": "Session",
            "format": ""
        },
        {
            "name": "session_token",
            "baseName": "session_token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccessfulCodeExchangeResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

