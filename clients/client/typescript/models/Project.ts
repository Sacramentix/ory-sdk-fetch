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

import { ProjectServices } from '../models/ProjectServices.ts';
import { HttpFile } from '../http/http.ts';

export class Project {
    /**
    * The project\'s ID.
    */
    'id': string;
    /**
    * The name of the project.
    */
    'name': string;
    /**
    * The configuration revision ID.
    */
    'revision_id': string;
    'services': ProjectServices;
    /**
    * The project\'s slug
    */
    'slug': string;
    /**
    * The state of the project. running Running halted Halted deleted Deleted
    */
    'state': ProjectStateEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "revision_id",
            "baseName": "revision_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "services",
            "baseName": "services",
            "type": "ProjectServices",
            "format": ""
        },
        {
            "name": "slug",
            "baseName": "slug",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ProjectStateEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Project.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ProjectStateEnum = "running" | "halted" | "deleted" ;

