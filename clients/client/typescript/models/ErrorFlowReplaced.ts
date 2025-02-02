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

import { GenericError } from '../models/GenericError.ts';
import { HttpFile } from '../http/http.ts';

/**
* Is sent when a flow is replaced by a different flow of the same class
*/
export class ErrorFlowReplaced {
    'error'?: GenericError;
    /**
    * The flow ID that should be used for the new flow as it contains the correct messages.
    */
    'use_flow_id'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "GenericError",
            "format": ""
        },
        {
            "name": "use_flow_id",
            "baseName": "use_flow_id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return ErrorFlowReplaced.attributeTypeMap;
    }

    public constructor() {
    }
}

