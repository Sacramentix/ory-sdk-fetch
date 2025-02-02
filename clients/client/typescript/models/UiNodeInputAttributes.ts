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
* InputAttributes represents the attributes of an input node
*/
export class UiNodeInputAttributes {
    /**
    * The autocomplete attribute for the input. email InputAttributeAutocompleteEmail tel InputAttributeAutocompleteTel url InputAttributeAutocompleteUrl current-password InputAttributeAutocompleteCurrentPassword new-password InputAttributeAutocompleteNewPassword one-time-code InputAttributeAutocompleteOneTimeCode
    */
    'autocomplete'?: UiNodeInputAttributesAutocompleteEnum;
    /**
    * Sets the input\'s disabled field to true or false.
    */
    'disabled': boolean;
    'label'?: UiText;
    /**
    * The input\'s element name.
    */
    'name': string;
    /**
    * NodeType represents this node\'s types. It is a mirror of `node.type` and is primarily used to allow compatibility with OpenAPI 3.0.  In this struct it technically always is \"input\".
    */
    'node_type': string;
    /**
    * OnClick may contain javascript which should be executed on click. This is primarily used for WebAuthn.
    */
    'onclick'?: string;
    /**
    * The input\'s pattern.
    */
    'pattern'?: string;
    /**
    * Mark this input field as required.
    */
    'required'?: boolean;
    /**
    * The input\'s element type. text InputAttributeTypeText password InputAttributeTypePassword number InputAttributeTypeNumber checkbox InputAttributeTypeCheckbox hidden InputAttributeTypeHidden email InputAttributeTypeEmail tel InputAttributeTypeTel submit InputAttributeTypeSubmit button InputAttributeTypeButton datetime-local InputAttributeTypeDateTimeLocal date InputAttributeTypeDate url InputAttributeTypeURI
    */
    'type': UiNodeInputAttributesTypeEnum;
    /**
    * The input\'s value.
    */
    'value'?: any | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "autocomplete",
            "baseName": "autocomplete",
            "type": "UiNodeInputAttributesAutocompleteEnum",
            "format": ""
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "UiText",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
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
            "name": "onclick",
            "baseName": "onclick",
            "type": "string",
            "format": ""
        },
        {
            "name": "pattern",
            "baseName": "pattern",
            "type": "string",
            "format": ""
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UiNodeInputAttributesTypeEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UiNodeInputAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}


export type UiNodeInputAttributesAutocompleteEnum = "email" | "tel" | "url" | "current-password" | "new-password" | "one-time-code" ;
export type UiNodeInputAttributesTypeEnum = "text" | "password" | "number" | "checkbox" | "hidden" | "email" | "tel" | "submit" | "button" | "datetime-local" | "date" | "url" ;

