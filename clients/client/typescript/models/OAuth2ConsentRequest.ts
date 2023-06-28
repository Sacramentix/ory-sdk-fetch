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

import { OAuth2Client } from '../models/OAuth2Client.ts';
import { OAuth2ConsentRequestOpenIDConnectContext } from '../models/OAuth2ConsentRequestOpenIDConnectContext.ts';
import { HttpFile } from '../http/http.ts';

export class OAuth2ConsentRequest {
    /**
    * ACR represents the Authentication AuthorizationContext Class Reference value for this authentication session. You can use it to express that, for example, a user authenticated using two factor authentication.
    */
    'acr'?: string;
    'amr'?: Array<string>;
    /**
    * ID is the identifier (\"authorization challenge\") of the consent authorization request. It is used to identify the session.
    */
    'challenge': string;
    'client'?: OAuth2Client;
    'context'?: any;
    /**
    * LoginChallenge is the login challenge this consent challenge belongs to. It can be used to associate a login and consent request in the login & consent app.
    */
    'login_challenge'?: string;
    /**
    * LoginSessionID is the login session ID. If the user-agent reuses a login session (via cookie / remember flag) this ID will remain the same. If the user-agent did not have an existing authentication session (e.g. remember is false) this will be a new random value. This value is used as the \"sid\" parameter in the ID Token and in OIDC Front-/Back- channel logout. It\'s value can generally be used to associate consecutive login requests by a certain user.
    */
    'login_session_id'?: string;
    'oidc_context'?: OAuth2ConsentRequestOpenIDConnectContext;
    /**
    * RequestURL is the original OAuth 2.0 Authorization URL requested by the OAuth 2.0 client. It is the URL which initiates the OAuth 2.0 Authorization Code or OAuth 2.0 Implicit flow. This URL is typically not needed, but might come in handy if you want to deal with additional request parameters.
    */
    'request_url'?: string;
    'requested_access_token_audience'?: Array<string>;
    'requested_scope'?: Array<string>;
    /**
    * Skip, if true, implies that the client has requested the same scopes from the same user previously. If true, you must not ask the user to grant the requested scopes. You must however either allow or deny the consent request using the usual API call.
    */
    'skip'?: boolean;
    /**
    * Subject is the user ID of the end-user that authenticated. Now, that end user needs to grant or deny the scope requested by the OAuth 2.0 client.
    */
    'subject'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "acr",
            "baseName": "acr",
            "type": "string",
            "format": ""
        },
        {
            "name": "amr",
            "baseName": "amr",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "challenge",
            "baseName": "challenge",
            "type": "string",
            "format": ""
        },
        {
            "name": "client",
            "baseName": "client",
            "type": "OAuth2Client",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "any",
            "format": ""
        },
        {
            "name": "login_challenge",
            "baseName": "login_challenge",
            "type": "string",
            "format": ""
        },
        {
            "name": "login_session_id",
            "baseName": "login_session_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "oidc_context",
            "baseName": "oidc_context",
            "type": "OAuth2ConsentRequestOpenIDConnectContext",
            "format": ""
        },
        {
            "name": "request_url",
            "baseName": "request_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "requested_access_token_audience",
            "baseName": "requested_access_token_audience",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "requested_scope",
            "baseName": "requested_scope",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "skip",
            "baseName": "skip",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OAuth2ConsentRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

