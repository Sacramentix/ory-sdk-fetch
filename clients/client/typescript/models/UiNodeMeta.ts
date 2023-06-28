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

import { UiText } from '../models/UiText.ts';
import { HttpFile } from '../http/http.ts';

/**
* This might include a label and other information that can optionally be used to render UIs.
*/
export class UiNodeMeta {
    'label'?: UiText;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "label",
            "baseName": "label",
            "type": "UiText",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UiNodeMeta.attributeTypeMap;
    }

    public constructor() {
    }
}

