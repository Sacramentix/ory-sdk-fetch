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

import { JsonWebKey } from '../models/JsonWebKey.ts';
import { HttpFile } from '../http/http.ts';

/**
* JSON Web Key Set
*/
export class JsonWebKeySet {
    /**
    * List of JSON Web Keys  The value of the \"keys\" parameter is an array of JSON Web Key (JWK) values. By default, the order of the JWK values within the array does not imply an order of preference among them, although applications of JWK Sets can choose to assign a meaning to the order for their purposes, if desired.
    */
    'keys'?: Array<JsonWebKey>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "keys",
            "baseName": "keys",
            "type": "Array<JsonWebKey>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JsonWebKeySet.attributeTypeMap;
    }

    public constructor() {
    }
}

