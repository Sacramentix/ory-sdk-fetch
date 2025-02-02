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

export class NormalizedProjectRevisionHook {
    /**
    * The Hooks Config Key
    */
    'config_key': string;
    /**
    * The Project\'s Revision Creation Date
    */
    'created_at'?: Date;
    /**
    * The Hook Type
    */
    'hook': string;
    /**
    * ID of the entry
    */
    'id'?: string;
    /**
    * The Revision\'s ID this schema belongs to
    */
    'project_revision_id'?: string;
    /**
    * Last Time Project\'s Revision was Updated
    */
    'updated_at'?: Date;
    /**
    * Whether to send the API Key in the HTTP Header or as a HTTP Cookie
    */
    'web_hook_config_auth_api_key_in'?: string;
    /**
    * The name of the api key
    */
    'web_hook_config_auth_api_key_name'?: string;
    /**
    * The value of the api key
    */
    'web_hook_config_auth_api_key_value'?: string;
    /**
    * The password to be sent in the HTTP Basic Auth Header
    */
    'web_hook_config_auth_basic_auth_password'?: string;
    /**
    * The username to be sent in the HTTP Basic Auth Header
    */
    'web_hook_config_auth_basic_auth_user'?: string;
    /**
    * HTTP Auth Method to use for the Web-Hook
    */
    'web_hook_config_auth_type'?: string;
    /**
    * URI pointing to the JsonNet template used for Web-Hook payload generation. Only used for those HTTP methods, which support HTTP body payloads.
    */
    'web_hook_config_body'?: string;
    /**
    * If enabled allows the web hook to interrupt / abort the self-service flow. It only applies to certain flows (registration/verification/login/settings) and requires a valid response format.
    */
    'web_hook_config_can_interrupt'?: boolean;
    /**
    * The HTTP method to use (GET, POST, etc) for the Web-Hook
    */
    'web_hook_config_method'?: string;
    /**
    * Whether to ignore the Web Hook response
    */
    'web_hook_config_response_ignore'?: boolean;
    /**
    * Whether to parse the Web Hook response
    */
    'web_hook_config_response_parse'?: boolean;
    /**
    * The URL the Web-Hook should call
    */
    'web_hook_config_url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "config_key",
            "baseName": "config_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "hook",
            "baseName": "hook",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "project_revision_id",
            "baseName": "project_revision_id",
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
            "name": "web_hook_config_auth_api_key_in",
            "baseName": "web_hook_config_auth_api_key_in",
            "type": "string",
            "format": ""
        },
        {
            "name": "web_hook_config_auth_api_key_name",
            "baseName": "web_hook_config_auth_api_key_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "web_hook_config_auth_api_key_value",
            "baseName": "web_hook_config_auth_api_key_value",
            "type": "string",
            "format": ""
        },
        {
            "name": "web_hook_config_auth_basic_auth_password",
            "baseName": "web_hook_config_auth_basic_auth_password",
            "type": "string",
            "format": ""
        },
        {
            "name": "web_hook_config_auth_basic_auth_user",
            "baseName": "web_hook_config_auth_basic_auth_user",
            "type": "string",
            "format": ""
        },
        {
            "name": "web_hook_config_auth_type",
            "baseName": "web_hook_config_auth_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "web_hook_config_body",
            "baseName": "web_hook_config_body",
            "type": "string",
            "format": ""
        },
        {
            "name": "web_hook_config_can_interrupt",
            "baseName": "web_hook_config_can_interrupt",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "web_hook_config_method",
            "baseName": "web_hook_config_method",
            "type": "string",
            "format": ""
        },
        {
            "name": "web_hook_config_response_ignore",
            "baseName": "web_hook_config_response_ignore",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "web_hook_config_response_parse",
            "baseName": "web_hook_config_response_parse",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "web_hook_config_url",
            "baseName": "web_hook_config_url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NormalizedProjectRevisionHook.attributeTypeMap;
    }

    public constructor() {
    }
}

