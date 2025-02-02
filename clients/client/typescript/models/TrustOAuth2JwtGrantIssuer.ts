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
* Trust OAuth2 JWT Bearer Grant Type Issuer Request Body
*/
export class TrustOAuth2JwtGrantIssuer {
    /**
    * The \"allow_any_subject\" indicates that the issuer is allowed to have any principal as the subject of the JWT.
    */
    'allow_any_subject'?: boolean;
    /**
    * The \"expires_at\" indicates, when grant will expire, so we will reject assertion from \"issuer\" targeting \"subject\".
    */
    'expires_at': Date;
    /**
    * The \"issuer\" identifies the principal that issued the JWT assertion (same as \"iss\" claim in JWT).
    */
    'issuer': string;
    'jwk': JsonWebKey;
    /**
    * The \"scope\" contains list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749])
    */
    'scope': Array<string>;
    /**
    * The \"subject\" identifies the principal that is the subject of the JWT.
    */
    'subject'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allow_any_subject",
            "baseName": "allow_any_subject",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "expires_at",
            "baseName": "expires_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string",
            "format": ""
        },
        {
            "name": "jwk",
            "baseName": "jwk",
            "type": "JsonWebKey",
            "format": ""
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TrustOAuth2JwtGrantIssuer.attributeTypeMap;
    }

    public constructor() {
    }
}

