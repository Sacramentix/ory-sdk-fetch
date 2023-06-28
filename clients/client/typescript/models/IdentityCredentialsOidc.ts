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

import { IdentityCredentialsOidcProvider } from '../models/IdentityCredentialsOidcProvider.ts';
import { HttpFile } from '../http/http.ts';

export class IdentityCredentialsOidc {
    'providers'?: Array<IdentityCredentialsOidcProvider>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "providers",
            "baseName": "providers",
            "type": "Array<IdentityCredentialsOidcProvider>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IdentityCredentialsOidc.attributeTypeMap;
    }

    public constructor() {
    }
}

