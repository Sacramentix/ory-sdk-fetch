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

export class UiText {
    /**
    * The message\'s context. Useful when customizing messages.
    */
    'context'?: any;
    'id': number;
    /**
    * The message text. Written in american english.
    */
    'text': string;
    /**
    * The message type. info Info error Error success Success
    */
    'type': UiTextTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "context",
            "baseName": "context",
            "type": "any",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UiTextTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UiText.attributeTypeMap;
    }

    public constructor() {
    }
}


export type UiTextTypeEnum = "info" | "error" | "success" ;

