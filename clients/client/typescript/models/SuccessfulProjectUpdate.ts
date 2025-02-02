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

import { Project } from '../models/Project.ts';
import { Warning } from '../models/Warning.ts';
import { HttpFile } from '../http/http.ts';

export class SuccessfulProjectUpdate {
    'project': Project;
    /**
    * Import Warnings  Not all configuration items can be imported to the Ory Network. For example, setting the port does not make sense because the Ory Network provides the runtime and networking.  This field contains warnings where configuration keys were found but can not be imported. These keys will be ignored by the Ory Network. This field will help you understand why certain configuration keys might not be respected!
    */
    'warnings': Array<Warning>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "project",
            "baseName": "project",
            "type": "Project",
            "format": ""
        },
        {
            "name": "warnings",
            "baseName": "warnings",
            "type": "Array<Warning>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuccessfulProjectUpdate.attributeTypeMap;
    }

    public constructor() {
    }
}

