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

import { UpdateVerificationFlowWithCodeMethod } from '../models/UpdateVerificationFlowWithCodeMethod.ts';
import { UpdateVerificationFlowWithLinkMethod } from '../models/UpdateVerificationFlowWithLinkMethod.ts';
import { HttpFile } from '../http/http.ts';

/**
* Update Verification Flow Request Body
*/
export class UpdateVerificationFlowBody {
    /**
    * Sending the anti-csrf token is only required for browser login flows.
    */
    'csrf_token'?: string;
    /**
    * The email address to verify  If the email belongs to a valid account, a verifiation email will be sent.  If you want to notify the email address if the account does not exist, see the [notify_unknown_recipients flag](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation#attempted-verification-notifications)  If a code was already sent, including this field in the payload will invalidate the sent code and re-send a new code.  format: email
    */
    'email': string;
    /**
    * Method is the method that should be used for this verification flow  Allowed values are `link` and `code`. link VerificationStrategyLink code VerificationStrategyCode
    */
    'method': UpdateVerificationFlowBodyMethodEnum;
    /**
    * Code from the recovery email  If you want to submit a code, use this field, but make sure to _not_ include the email field, as well.
    */
    'code'?: string;

    static readonly discriminator: string | undefined = "method";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "csrf_token",
            "baseName": "csrf_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "UpdateVerificationFlowBodyMethodEnum",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateVerificationFlowBody.attributeTypeMap;
    }

    public constructor() {
        this.method = "UpdateVerificationFlowBody";
    }
}


export type UpdateVerificationFlowBodyMethodEnum = "link" | "code" ;

