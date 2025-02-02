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

export class RecoveryIdentityAddress {
    /**
    * CreatedAt is a helper struct field for gobuffalo.pop.
    */
    'created_at'?: Date;
    'id': string;
    /**
    * UpdatedAt is a helper struct field for gobuffalo.pop.
    */
    'updated_at'?: Date;
    'value': string;
    'via': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "via",
            "baseName": "via",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RecoveryIdentityAddress.attributeTypeMap;
    }

    public constructor() {
    }
}

