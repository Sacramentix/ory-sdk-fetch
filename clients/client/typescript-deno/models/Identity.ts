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

import { IdentityCredentials } from '../models/IdentityCredentials.ts';
import { IdentityState } from '../models/IdentityState.ts';
import { RecoveryIdentityAddress } from '../models/RecoveryIdentityAddress.ts';
import { VerifiableIdentityAddress } from '../models/VerifiableIdentityAddress.ts';
import { HttpFile } from '../http/http.ts';

/**
* An [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) represents a (human) user in Ory.
*/
export class Identity {
    /**
    * CreatedAt is a helper struct field for gobuffalo.pop.
    */
    'created_at'?: Date;
    /**
    * Credentials represents all credentials that can be used for authenticating this identity.
    */
    'credentials'?: { [key: string]: IdentityCredentials; };
    /**
    * ID is the identity\'s unique identifier.  The Identity ID can not be changed and can not be chosen. This ensures future compatibility and optimization for distributed stores such as CockroachDB.
    */
    'id': string;
    /**
    * NullJSONRawMessage represents a json.RawMessage that works well with JSON, SQL, and Swagger and is NULLable-
    */
    'metadata_admin'?: any | null;
    /**
    * NullJSONRawMessage represents a json.RawMessage that works well with JSON, SQL, and Swagger and is NULLable-
    */
    'metadata_public'?: any | null;
    /**
    * RecoveryAddresses contains all the addresses that can be used to recover an identity.
    */
    'recovery_addresses'?: Array<RecoveryIdentityAddress>;
    /**
    * SchemaID is the ID of the JSON Schema to be used for validating the identity\'s traits.
    */
    'schema_id': string;
    /**
    * SchemaURL is the URL of the endpoint where the identity\'s traits schema can be fetched from.  format: url
    */
    'schema_url': string;
    'state'?: IdentityState;
    'state_changed_at'?: Date;
    /**
    * Traits represent an identity\'s traits. The identity is able to create, modify, and delete traits in a self-service manner. The input will always be validated against the JSON Schema defined in `schema_url`.
    */
    'traits': any | null;
    /**
    * UpdatedAt is a helper struct field for gobuffalo.pop.
    */
    'updated_at'?: Date;
    /**
    * VerifiableAddresses contains all the addresses that can be verified by the user.
    */
    'verifiable_addresses'?: Array<VerifiableIdentityAddress>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "credentials",
            "baseName": "credentials",
            "type": "{ [key: string]: IdentityCredentials; }",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "metadata_admin",
            "baseName": "metadata_admin",
            "type": "any",
            "format": ""
        },
        {
            "name": "metadata_public",
            "baseName": "metadata_public",
            "type": "any",
            "format": ""
        },
        {
            "name": "recovery_addresses",
            "baseName": "recovery_addresses",
            "type": "Array<RecoveryIdentityAddress>",
            "format": ""
        },
        {
            "name": "schema_id",
            "baseName": "schema_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "schema_url",
            "baseName": "schema_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "IdentityState",
            "format": ""
        },
        {
            "name": "state_changed_at",
            "baseName": "state_changed_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "traits",
            "baseName": "traits",
            "type": "any",
            "format": ""
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "verifiable_addresses",
            "baseName": "verifiable_addresses",
            "type": "Array<VerifiableIdentityAddress>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Identity.attributeTypeMap;
    }

    public constructor() {
    }
}



