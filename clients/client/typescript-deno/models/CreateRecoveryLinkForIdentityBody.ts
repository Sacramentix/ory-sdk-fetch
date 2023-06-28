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
* Create Recovery Link for Identity Request Body
*/
export class CreateRecoveryLinkForIdentityBody {
    /**
    * Link Expires In  The recovery link will expire after that amount of time has passed. Defaults to the configuration value of `selfservice.methods.code.config.lifespan`.
    */
    'expires_in'?: string;
    /**
    * Identity to Recover  The identity\'s ID you wish to recover.
    */
    'identity_id': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "expires_in",
            "baseName": "expires_in",
            "type": "string",
            "format": ""
        },
        {
            "name": "identity_id",
            "baseName": "identity_id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return CreateRecoveryLinkForIdentityBody.attributeTypeMap;
    }

    public constructor() {
    }
}

