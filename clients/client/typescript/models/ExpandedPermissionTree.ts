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

import { Relationship } from '../models/Relationship.ts';
import { HttpFile } from '../http/http.ts';

export class ExpandedPermissionTree {
    /**
    * The children of the node, possibly none.
    */
    'children'?: Array<ExpandedPermissionTree>;
    'tuple'?: Relationship;
    /**
    * The type of the node. union TreeNodeUnion exclusion TreeNodeExclusion intersection TreeNodeIntersection leaf TreeNodeLeaf tuple_to_subject_set TreeNodeTupleToSubjectSet computed_subject_set TreeNodeComputedSubjectSet not TreeNodeNot unspecified TreeNodeUnspecified
    */
    'type': ExpandedPermissionTreeTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "children",
            "baseName": "children",
            "type": "Array<ExpandedPermissionTree>",
            "format": ""
        },
        {
            "name": "tuple",
            "baseName": "tuple",
            "type": "Relationship",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ExpandedPermissionTreeTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ExpandedPermissionTree.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ExpandedPermissionTreeTypeEnum = "union" | "exclusion" | "intersection" | "leaf" | "tuple_to_subject_set" | "computed_subject_set" | "not" | "unspecified" ;

