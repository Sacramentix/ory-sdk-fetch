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

export class UiNodeScriptAttributes {
    /**
    * The script async type
    */
    'async': boolean;
    /**
    * The script cross origin policy
    */
    'crossorigin': string;
    /**
    * A unique identifier
    */
    'id': string;
    /**
    * The script\'s integrity hash
    */
    'integrity': string;
    /**
    * NodeType represents this node\'s types. It is a mirror of `node.type` and is primarily used to allow compatibility with OpenAPI 3.0. In this struct it technically always is \"script\".
    */
    'node_type': string;
    /**
    * Nonce for CSP  A nonce you may want to use to improve your Content Security Policy. You do not have to use this value but if you want to improve your CSP policies you may use it. You can also choose to use your own nonce value!
    */
    'nonce': string;
    /**
    * The script referrer policy
    */
    'referrerpolicy': string;
    /**
    * The script source
    */
    'src': string;
    /**
    * The script MIME type
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "async",
            "baseName": "async",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "crossorigin",
            "baseName": "crossorigin",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "integrity",
            "baseName": "integrity",
            "type": "string",
            "format": ""
        },
        {
            "name": "node_type",
            "baseName": "node_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "nonce",
            "baseName": "nonce",
            "type": "string",
            "format": ""
        },
        {
            "name": "referrerpolicy",
            "baseName": "referrerpolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "src",
            "baseName": "src",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UiNodeScriptAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}

