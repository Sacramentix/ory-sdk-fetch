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

import { ProjectBrandingColors } from '../models/ProjectBrandingColors.ts';
import { HttpFile } from '../http/http.ts';

/**
* Create a Project Branding
*/
export class CreateProjectBranding {
    'logo_type'?: string;
    'logo_url'?: string;
    'name'?: string;
    'theme'?: ProjectBrandingColors;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "logo_type",
            "baseName": "logo_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "logo_url",
            "baseName": "logo_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "theme",
            "baseName": "theme",
            "type": "ProjectBrandingColors",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateProjectBranding.attributeTypeMap;
    }

    public constructor() {
    }
}

