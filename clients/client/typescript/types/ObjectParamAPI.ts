import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

import { AcceptOAuth2ConsentRequest } from '../models/AcceptOAuth2ConsentRequest.ts';
import { AcceptOAuth2ConsentRequestSession } from '../models/AcceptOAuth2ConsentRequestSession.ts';
import { AcceptOAuth2LoginRequest } from '../models/AcceptOAuth2LoginRequest.ts';
import { ActiveProjectInConsole } from '../models/ActiveProjectInConsole.ts';
import { AuthenticatorAssuranceLevel } from '../models/AuthenticatorAssuranceLevel.ts';
import { BatchPatchIdentitiesResponse } from '../models/BatchPatchIdentitiesResponse.ts';
import { CheckOplSyntaxResult } from '../models/CheckOplSyntaxResult.ts';
import { CheckPermissionResult } from '../models/CheckPermissionResult.ts';
import { CloudAccount } from '../models/CloudAccount.ts';
import { ContinueWith } from '../models/ContinueWith.ts';
import { ContinueWithSetOrySessionToken } from '../models/ContinueWithSetOrySessionToken.ts';
import { ContinueWithVerificationUi } from '../models/ContinueWithVerificationUi.ts';
import { ContinueWithVerificationUiFlow } from '../models/ContinueWithVerificationUiFlow.ts';
import { CourierMessageStatus } from '../models/CourierMessageStatus.ts';
import { CourierMessageType } from '../models/CourierMessageType.ts';
import { CreateCustomDomainBody } from '../models/CreateCustomDomainBody.ts';
import { CreateIdentityBody } from '../models/CreateIdentityBody.ts';
import { CreateJsonWebKeySet } from '../models/CreateJsonWebKeySet.ts';
import { CreateProjectApiKeyRequest } from '../models/CreateProjectApiKeyRequest.ts';
import { CreateProjectBody } from '../models/CreateProjectBody.ts';
import { CreateProjectBranding } from '../models/CreateProjectBranding.ts';
import { CreateProjectInvite } from '../models/CreateProjectInvite.ts';
import { CreateProjectInvitesResponse } from '../models/CreateProjectInvitesResponse.ts';
import { CreateRecoveryCodeForIdentityBody } from '../models/CreateRecoveryCodeForIdentityBody.ts';
import { CreateRecoveryLinkForIdentityBody } from '../models/CreateRecoveryLinkForIdentityBody.ts';
import { CreateRelationshipBody } from '../models/CreateRelationshipBody.ts';
import { CreateSubscriptionBody } from '../models/CreateSubscriptionBody.ts';
import { CustomDomain } from '../models/CustomDomain.ts';
import { DeleteMySessionsCount } from '../models/DeleteMySessionsCount.ts';
import { ErrorAuthenticatorAssuranceLevelNotSatisfied } from '../models/ErrorAuthenticatorAssuranceLevelNotSatisfied.ts';
import { ErrorBrowserLocationChangeRequired } from '../models/ErrorBrowserLocationChangeRequired.ts';
import { ErrorFlowReplaced } from '../models/ErrorFlowReplaced.ts';
import { ErrorGeneric } from '../models/ErrorGeneric.ts';
import { ErrorOAuth2 } from '../models/ErrorOAuth2.ts';
import { ExpandedPermissionTree } from '../models/ExpandedPermissionTree.ts';
import { FlowError } from '../models/FlowError.ts';
import { GenericError } from '../models/GenericError.ts';
import { GenericErrorContent } from '../models/GenericErrorContent.ts';
import { GenericUsage } from '../models/GenericUsage.ts';
import { GetManagedIdentitySchemaLocation } from '../models/GetManagedIdentitySchemaLocation.ts';
import { GetProjectMetricsResponse } from '../models/GetProjectMetricsResponse.ts';
import { GetVersion200Response } from '../models/GetVersion200Response.ts';
import { HealthNotReadyStatus } from '../models/HealthNotReadyStatus.ts';
import { HealthStatus } from '../models/HealthStatus.ts';
import { Identity } from '../models/Identity.ts';
import { IdentityCredentials } from '../models/IdentityCredentials.ts';
import { IdentityCredentialsOidc } from '../models/IdentityCredentialsOidc.ts';
import { IdentityCredentialsOidcProvider } from '../models/IdentityCredentialsOidcProvider.ts';
import { IdentityCredentialsPassword } from '../models/IdentityCredentialsPassword.ts';
import { IdentityCredentialsType } from '../models/IdentityCredentialsType.ts';
import { IdentityPatch } from '../models/IdentityPatch.ts';
import { IdentityPatchResponse } from '../models/IdentityPatchResponse.ts';
import { IdentitySchemaContainer } from '../models/IdentitySchemaContainer.ts';
import { IdentitySchemaPreset } from '../models/IdentitySchemaPreset.ts';
import { IdentityState } from '../models/IdentityState.ts';
import { IdentityWithCredentials } from '../models/IdentityWithCredentials.ts';
import { IdentityWithCredentialsOidc } from '../models/IdentityWithCredentialsOidc.ts';
import { IdentityWithCredentialsOidcConfig } from '../models/IdentityWithCredentialsOidcConfig.ts';
import { IdentityWithCredentialsOidcConfigProvider } from '../models/IdentityWithCredentialsOidcConfigProvider.ts';
import { IdentityWithCredentialsPassword } from '../models/IdentityWithCredentialsPassword.ts';
import { IdentityWithCredentialsPasswordConfig } from '../models/IdentityWithCredentialsPasswordConfig.ts';
import { InternalGetProjectBrandingBody } from '../models/InternalGetProjectBrandingBody.ts';
import { InternalIsOwnerForProjectBySlugBody } from '../models/InternalIsOwnerForProjectBySlugBody.ts';
import { InternalIsOwnerForProjectBySlugResponse } from '../models/InternalIsOwnerForProjectBySlugResponse.ts';
import { InternalProvisionMockSubscription } from '../models/InternalProvisionMockSubscription.ts';
import { IntrospectedOAuth2Token } from '../models/IntrospectedOAuth2Token.ts';
import { IsOwnerForProjectBySlug } from '../models/IsOwnerForProjectBySlug.ts';
import { IsReady200Response } from '../models/IsReady200Response.ts';
import { IsReady503Response } from '../models/IsReady503Response.ts';
import { JsonPatch } from '../models/JsonPatch.ts';
import { JsonWebKey } from '../models/JsonWebKey.ts';
import { JsonWebKeySet } from '../models/JsonWebKeySet.ts';
import { KetoNamespace } from '../models/KetoNamespace.ts';
import { LoginFlow } from '../models/LoginFlow.ts';
import { LogoutFlow } from '../models/LogoutFlow.ts';
import { ManagedIdentitySchema } from '../models/ManagedIdentitySchema.ts';
import { ManagedIdentitySchemaValidationResult } from '../models/ManagedIdentitySchemaValidationResult.ts';
import { Message } from '../models/Message.ts';
import { MessageDispatch } from '../models/MessageDispatch.ts';
import { MetricsDatapoint } from '../models/MetricsDatapoint.ts';
import { Namespace } from '../models/Namespace.ts';
import { NeedsPrivilegedSessionError } from '../models/NeedsPrivilegedSessionError.ts';
import { NormalizedProject } from '../models/NormalizedProject.ts';
import { NormalizedProjectRevision } from '../models/NormalizedProjectRevision.ts';
import { NormalizedProjectRevisionHook } from '../models/NormalizedProjectRevisionHook.ts';
import { NormalizedProjectRevisionIdentitySchema } from '../models/NormalizedProjectRevisionIdentitySchema.ts';
import { NormalizedProjectRevisionThirdPartyProvider } from '../models/NormalizedProjectRevisionThirdPartyProvider.ts';
import { OAuth2Client } from '../models/OAuth2Client.ts';
import { OAuth2ClientTokenLifespans } from '../models/OAuth2ClientTokenLifespans.ts';
import { OAuth2ConsentRequest } from '../models/OAuth2ConsentRequest.ts';
import { OAuth2ConsentRequestOpenIDConnectContext } from '../models/OAuth2ConsentRequestOpenIDConnectContext.ts';
import { OAuth2ConsentSession } from '../models/OAuth2ConsentSession.ts';
import { OAuth2ConsentSessionExpiresAt } from '../models/OAuth2ConsentSessionExpiresAt.ts';
import { OAuth2LoginRequest } from '../models/OAuth2LoginRequest.ts';
import { OAuth2LogoutRequest } from '../models/OAuth2LogoutRequest.ts';
import { OAuth2RedirectTo } from '../models/OAuth2RedirectTo.ts';
import { OAuth2TokenExchange } from '../models/OAuth2TokenExchange.ts';
import { OidcConfiguration } from '../models/OidcConfiguration.ts';
import { OidcUserInfo } from '../models/OidcUserInfo.ts';
import { Pagination } from '../models/Pagination.ts';
import { PaginationHeaders } from '../models/PaginationHeaders.ts';
import { ParseError } from '../models/ParseError.ts';
import { PatchIdentitiesBody } from '../models/PatchIdentitiesBody.ts';
import { PerformNativeLogoutBody } from '../models/PerformNativeLogoutBody.ts';
import { Plan } from '../models/Plan.ts';
import { PlanDetails } from '../models/PlanDetails.ts';
import { PostCheckPermissionBody } from '../models/PostCheckPermissionBody.ts';
import { PostCheckPermissionOrErrorBody } from '../models/PostCheckPermissionOrErrorBody.ts';
import { Project } from '../models/Project.ts';
import { ProjectApiKey } from '../models/ProjectApiKey.ts';
import { ProjectBranding } from '../models/ProjectBranding.ts';
import { ProjectBrandingColors } from '../models/ProjectBrandingColors.ts';
import { ProjectBrandingTheme } from '../models/ProjectBrandingTheme.ts';
import { ProjectHost } from '../models/ProjectHost.ts';
import { ProjectInvite } from '../models/ProjectInvite.ts';
import { ProjectMetadata } from '../models/ProjectMetadata.ts';
import { ProjectServiceIdentity } from '../models/ProjectServiceIdentity.ts';
import { ProjectServiceOAuth2 } from '../models/ProjectServiceOAuth2.ts';
import { ProjectServicePermission } from '../models/ProjectServicePermission.ts';
import { ProjectServices } from '../models/ProjectServices.ts';
import { QuotaUsage } from '../models/QuotaUsage.ts';
import { RecoveryCodeForIdentity } from '../models/RecoveryCodeForIdentity.ts';
import { RecoveryFlow } from '../models/RecoveryFlow.ts';
import { RecoveryFlowState } from '../models/RecoveryFlowState.ts';
import { RecoveryIdentityAddress } from '../models/RecoveryIdentityAddress.ts';
import { RecoveryLinkForIdentity } from '../models/RecoveryLinkForIdentity.ts';
import { RegistrationFlow } from '../models/RegistrationFlow.ts';
import { RejectOAuth2Request } from '../models/RejectOAuth2Request.ts';
import { RelationQuery } from '../models/RelationQuery.ts';
import { Relationship } from '../models/Relationship.ts';
import { RelationshipNamespaces } from '../models/RelationshipNamespaces.ts';
import { RelationshipPatch } from '../models/RelationshipPatch.ts';
import { Relationships } from '../models/Relationships.ts';
import { SchemaPatch } from '../models/SchemaPatch.ts';
import { SelfServiceFlowExpiredError } from '../models/SelfServiceFlowExpiredError.ts';
import { Session } from '../models/Session.ts';
import { SessionAuthenticationMethod } from '../models/SessionAuthenticationMethod.ts';
import { SessionDevice } from '../models/SessionDevice.ts';
import { SetActiveProjectInConsoleBody } from '../models/SetActiveProjectInConsoleBody.ts';
import { SetCustomDomainBody } from '../models/SetCustomDomainBody.ts';
import { SetProject } from '../models/SetProject.ts';
import { SetProjectBrandingThemeBody } from '../models/SetProjectBrandingThemeBody.ts';
import { SettingsFlow } from '../models/SettingsFlow.ts';
import { SettingsFlowState } from '../models/SettingsFlowState.ts';
import { SourcePosition } from '../models/SourcePosition.ts';
import { StripeCustomer } from '../models/StripeCustomer.ts';
import { SubjectSet } from '../models/SubjectSet.ts';
import { Subscription } from '../models/Subscription.ts';
import { SuccessfulCodeExchangeResponse } from '../models/SuccessfulCodeExchangeResponse.ts';
import { SuccessfulNativeLogin } from '../models/SuccessfulNativeLogin.ts';
import { SuccessfulNativeRegistration } from '../models/SuccessfulNativeRegistration.ts';
import { SuccessfulProjectUpdate } from '../models/SuccessfulProjectUpdate.ts';
import { TokenPagination } from '../models/TokenPagination.ts';
import { TokenPaginationHeaders } from '../models/TokenPaginationHeaders.ts';
import { TokenPaginationRequestParameters } from '../models/TokenPaginationRequestParameters.ts';
import { TokenPaginationResponseHeaders } from '../models/TokenPaginationResponseHeaders.ts';
import { TrustOAuth2JwtGrantIssuer } from '../models/TrustOAuth2JwtGrantIssuer.ts';
import { TrustedOAuth2JwtGrantIssuer } from '../models/TrustedOAuth2JwtGrantIssuer.ts';
import { TrustedOAuth2JwtGrantJsonWebKey } from '../models/TrustedOAuth2JwtGrantJsonWebKey.ts';
import { UiContainer } from '../models/UiContainer.ts';
import { UiNode } from '../models/UiNode.ts';
import { UiNodeAnchorAttributes } from '../models/UiNodeAnchorAttributes.ts';
import { UiNodeAttributes } from '../models/UiNodeAttributes.ts';
import { UiNodeImageAttributes } from '../models/UiNodeImageAttributes.ts';
import { UiNodeInputAttributes } from '../models/UiNodeInputAttributes.ts';
import { UiNodeMeta } from '../models/UiNodeMeta.ts';
import { UiNodeScriptAttributes } from '../models/UiNodeScriptAttributes.ts';
import { UiNodeTextAttributes } from '../models/UiNodeTextAttributes.ts';
import { UiText } from '../models/UiText.ts';
import { UpdateIdentityBody } from '../models/UpdateIdentityBody.ts';
import { UpdateLoginFlowBody } from '../models/UpdateLoginFlowBody.ts';
import { UpdateLoginFlowWithLookupSecretMethod } from '../models/UpdateLoginFlowWithLookupSecretMethod.ts';
import { UpdateLoginFlowWithOidcMethod } from '../models/UpdateLoginFlowWithOidcMethod.ts';
import { UpdateLoginFlowWithPasswordMethod } from '../models/UpdateLoginFlowWithPasswordMethod.ts';
import { UpdateLoginFlowWithTotpMethod } from '../models/UpdateLoginFlowWithTotpMethod.ts';
import { UpdateLoginFlowWithWebAuthnMethod } from '../models/UpdateLoginFlowWithWebAuthnMethod.ts';
import { UpdateRecoveryFlowBody } from '../models/UpdateRecoveryFlowBody.ts';
import { UpdateRecoveryFlowWithCodeMethod } from '../models/UpdateRecoveryFlowWithCodeMethod.ts';
import { UpdateRecoveryFlowWithLinkMethod } from '../models/UpdateRecoveryFlowWithLinkMethod.ts';
import { UpdateRegistrationFlowBody } from '../models/UpdateRegistrationFlowBody.ts';
import { UpdateRegistrationFlowWithOidcMethod } from '../models/UpdateRegistrationFlowWithOidcMethod.ts';
import { UpdateRegistrationFlowWithPasswordMethod } from '../models/UpdateRegistrationFlowWithPasswordMethod.ts';
import { UpdateRegistrationFlowWithWebAuthnMethod } from '../models/UpdateRegistrationFlowWithWebAuthnMethod.ts';
import { UpdateSettingsFlowBody } from '../models/UpdateSettingsFlowBody.ts';
import { UpdateSettingsFlowWithLookupMethod } from '../models/UpdateSettingsFlowWithLookupMethod.ts';
import { UpdateSettingsFlowWithOidcMethod } from '../models/UpdateSettingsFlowWithOidcMethod.ts';
import { UpdateSettingsFlowWithPasswordMethod } from '../models/UpdateSettingsFlowWithPasswordMethod.ts';
import { UpdateSettingsFlowWithProfileMethod } from '../models/UpdateSettingsFlowWithProfileMethod.ts';
import { UpdateSettingsFlowWithTotpMethod } from '../models/UpdateSettingsFlowWithTotpMethod.ts';
import { UpdateSettingsFlowWithWebAuthnMethod } from '../models/UpdateSettingsFlowWithWebAuthnMethod.ts';
import { UpdateSubscriptionBody } from '../models/UpdateSubscriptionBody.ts';
import { UpdateVerificationFlowBody } from '../models/UpdateVerificationFlowBody.ts';
import { UpdateVerificationFlowWithCodeMethod } from '../models/UpdateVerificationFlowWithCodeMethod.ts';
import { UpdateVerificationFlowWithLinkMethod } from '../models/UpdateVerificationFlowWithLinkMethod.ts';
import { Usage } from '../models/Usage.ts';
import { VerifiableIdentityAddress } from '../models/VerifiableIdentityAddress.ts';
import { VerificationFlow } from '../models/VerificationFlow.ts';
import { VerificationFlowState } from '../models/VerificationFlowState.ts';
import { Version } from '../models/Version.ts';
import { Warning } from '../models/Warning.ts';

import { ObservableCourierApi } from "./ObservableAPI.ts";
import { CourierApiRequestFactory, CourierApiResponseProcessor} from "../apis/CourierApi.ts";

export interface CourierApiGetCourierMessageRequest {
    /**
     * MessageID is the ID of the message.
     * @type string
     * @memberof CourierApigetCourierMessage
     */
    id: string
}

export interface CourierApiListCourierMessagesRequest {
    /**
     * Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @type number
     * @memberof CourierApilistCourierMessages
     */
    pageSize?: number
    /**
     * Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @type string
     * @memberof CourierApilistCourierMessages
     */
    pageToken?: string
    /**
     * Status filters out messages based on status. If no value is provided, it doesn\&#39;t take effect on filter.
     * @type CourierMessageStatus
     * @memberof CourierApilistCourierMessages
     */
    status?: CourierMessageStatus
    /**
     * Recipient filters out messages based on recipient. If no value is provided, it doesn\&#39;t take effect on filter.
     * @type string
     * @memberof CourierApilistCourierMessages
     */
    recipient?: string
}

export class ObjectCourierApi {
    private api: ObservableCourierApi

    public constructor(configuration: Configuration, requestFactory?: CourierApiRequestFactory, responseProcessor?: CourierApiResponseProcessor) {
        this.api = new ObservableCourierApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a specific messages by the given ID.
     * Get a Message
     * @param param the request object
     */
    public getCourierMessage(param: CourierApiGetCourierMessageRequest, options?: Configuration): Promise<Message> {
        return this.api.getCourierMessage(param.id,  options).toPromise();
    }

    /**
     * Lists all messages by given status and recipient.
     * List Messages
     * @param param the request object
     */
    public listCourierMessages(param: CourierApiListCourierMessagesRequest = {}, options?: Configuration): Promise<Array<Message>> {
        return this.api.listCourierMessages(param.pageSize, param.pageToken, param.status, param.recipient,  options).toPromise();
    }

}

import { ObservableFrontendApi } from "./ObservableAPI.ts";
import { FrontendApiRequestFactory, FrontendApiResponseProcessor} from "../apis/FrontendApi.ts";

export interface FrontendApiCreateBrowserLoginFlowRequest {
    /**
     * Refresh a login session  If set to true, this will refresh an existing login session by asking the user to sign in again. This will reset the authenticated_at time of the session.
     * @type boolean
     * @memberof FrontendApicreateBrowserLoginFlow
     */
    refresh?: boolean
    /**
     * Request a Specific AuthenticationMethod Assurance Level  Use this parameter to upgrade an existing session\&#39;s authenticator assurance level (AAL). This allows you to ask for multi-factor authentication. When an identity sign in using e.g. username+password, the AAL is 1. If you wish to \&quot;upgrade\&quot; the session\&#39;s security by asking the user to perform TOTP / WebAuth/ ... you would set this to \&quot;aal2\&quot;.
     * @type string
     * @memberof FrontendApicreateBrowserLoginFlow
     */
    aal?: string
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof FrontendApicreateBrowserLoginFlow
     */
    returnTo?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApicreateBrowserLoginFlow
     */
    cookie?: string
    /**
     * An optional Hydra login challenge. If present, Kratos will cooperate with Ory Hydra to act as an OAuth2 identity provider.  The value for this parameter comes from &#x60;login_challenge&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?login_challenge&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApicreateBrowserLoginFlow
     */
    loginChallenge?: string
}

export interface FrontendApiCreateBrowserLogoutFlowRequest {
    /**
     * HTTP Cookies  If you call this endpoint from a backend, please include the original Cookie header in the request.
     * @type string
     * @memberof FrontendApicreateBrowserLogoutFlow
     */
    cookie?: string
}

export interface FrontendApiCreateBrowserRecoveryFlowRequest {
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof FrontendApicreateBrowserRecoveryFlow
     */
    returnTo?: string
}

export interface FrontendApiCreateBrowserRegistrationFlowRequest {
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof FrontendApicreateBrowserRegistrationFlow
     */
    returnTo?: string
    /**
     * Ory OAuth 2.0 Login Challenge.  If set will cooperate with Ory OAuth2 and OpenID to act as an OAuth2 server / OpenID Provider.  The value for this parameter comes from &#x60;login_challenge&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?login_challenge&#x3D;abcde&#x60;).  This feature is compatible with Ory Hydra when not running on the Ory Network.
     * @type string
     * @memberof FrontendApicreateBrowserRegistrationFlow
     */
    loginChallenge?: string
    /**
     * The URL to return the browser to after the verification flow was completed.  After the registration flow is completed, the user will be sent a verification email. Upon completing the verification flow, this URL will be used to override the default &#x60;selfservice.flows.verification.after.default_redirect_to&#x60; value.
     * @type string
     * @memberof FrontendApicreateBrowserRegistrationFlow
     */
    afterVerificationReturnTo?: string
}

export interface FrontendApiCreateBrowserSettingsFlowRequest {
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof FrontendApicreateBrowserSettingsFlow
     */
    returnTo?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApicreateBrowserSettingsFlow
     */
    cookie?: string
}

export interface FrontendApiCreateBrowserVerificationFlowRequest {
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof FrontendApicreateBrowserVerificationFlow
     */
    returnTo?: string
}

export interface FrontendApiCreateNativeLoginFlowRequest {
    /**
     * Refresh a login session  If set to true, this will refresh an existing login session by asking the user to sign in again. This will reset the authenticated_at time of the session.
     * @type boolean
     * @memberof FrontendApicreateNativeLoginFlow
     */
    refresh?: boolean
    /**
     * Request a Specific AuthenticationMethod Assurance Level  Use this parameter to upgrade an existing session\&#39;s authenticator assurance level (AAL). This allows you to ask for multi-factor authentication. When an identity sign in using e.g. username+password, the AAL is 1. If you wish to \&quot;upgrade\&quot; the session\&#39;s security by asking the user to perform TOTP / WebAuth/ ... you would set this to \&quot;aal2\&quot;.
     * @type string
     * @memberof FrontendApicreateNativeLoginFlow
     */
    aal?: string
    /**
     * The Session Token of the Identity performing the settings flow.
     * @type string
     * @memberof FrontendApicreateNativeLoginFlow
     */
    xSessionToken?: string
    /**
     * EnableSessionTokenExchangeCode requests the login flow to include a code that can be used to retrieve the session token after the login flow has been completed.
     * @type boolean
     * @memberof FrontendApicreateNativeLoginFlow
     */
    returnSessionTokenExchangeCode?: boolean
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof FrontendApicreateNativeLoginFlow
     */
    returnTo?: string
}

export interface FrontendApiCreateNativeRecoveryFlowRequest {
}

export interface FrontendApiCreateNativeRegistrationFlowRequest {
    /**
     * EnableSessionTokenExchangeCode requests the login flow to include a code that can be used to retrieve the session token after the login flow has been completed.
     * @type boolean
     * @memberof FrontendApicreateNativeRegistrationFlow
     */
    returnSessionTokenExchangeCode?: boolean
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof FrontendApicreateNativeRegistrationFlow
     */
    returnTo?: string
}

export interface FrontendApiCreateNativeSettingsFlowRequest {
    /**
     * The Session Token of the Identity performing the settings flow.
     * @type string
     * @memberof FrontendApicreateNativeSettingsFlow
     */
    xSessionToken?: string
}

export interface FrontendApiCreateNativeVerificationFlowRequest {
}

export interface FrontendApiDisableMyOtherSessionsRequest {
    /**
     * Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @type string
     * @memberof FrontendApidisableMyOtherSessions
     */
    xSessionToken?: string
    /**
     * Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     * @type string
     * @memberof FrontendApidisableMyOtherSessions
     */
    cookie?: string
}

export interface FrontendApiDisableMySessionRequest {
    /**
     * ID is the session\&#39;s ID.
     * @type string
     * @memberof FrontendApidisableMySession
     */
    id: string
    /**
     * Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @type string
     * @memberof FrontendApidisableMySession
     */
    xSessionToken?: string
    /**
     * Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     * @type string
     * @memberof FrontendApidisableMySession
     */
    cookie?: string
}

export interface FrontendApiExchangeSessionTokenRequest {
    /**
     * The part of the code return when initializing the flow.
     * @type string
     * @memberof FrontendApiexchangeSessionToken
     */
    initCode: string
    /**
     * The part of the code returned by the return_to URL.
     * @type string
     * @memberof FrontendApiexchangeSessionToken
     */
    returnToCode: string
}

export interface FrontendApiGetFlowErrorRequest {
    /**
     * Error is the error\&#39;s ID
     * @type string
     * @memberof FrontendApigetFlowError
     */
    id: string
}

export interface FrontendApiGetLoginFlowRequest {
    /**
     * The Login Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApigetLoginFlow
     */
    id: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApigetLoginFlow
     */
    cookie?: string
}

export interface FrontendApiGetRecoveryFlowRequest {
    /**
     * The Flow ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/recovery?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApigetRecoveryFlow
     */
    id: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApigetRecoveryFlow
     */
    cookie?: string
}

export interface FrontendApiGetRegistrationFlowRequest {
    /**
     * The Registration Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApigetRegistrationFlow
     */
    id: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApigetRegistrationFlow
     */
    cookie?: string
}

export interface FrontendApiGetSettingsFlowRequest {
    /**
     * ID is the Settings Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/settings?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApigetSettingsFlow
     */
    id: string
    /**
     * The Session Token  When using the SDK in an app without a browser, please include the session token here.
     * @type string
     * @memberof FrontendApigetSettingsFlow
     */
    xSessionToken?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApigetSettingsFlow
     */
    cookie?: string
}

export interface FrontendApiGetVerificationFlowRequest {
    /**
     * The Flow ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/verification?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApigetVerificationFlow
     */
    id: string
    /**
     * HTTP Cookies  When using the SDK on the server side you must include the HTTP Cookie Header originally sent to your HTTP handler here.
     * @type string
     * @memberof FrontendApigetVerificationFlow
     */
    cookie?: string
}

export interface FrontendApiGetWebAuthnJavaScriptRequest {
}

export interface FrontendApiListMySessionsRequest {
    /**
     * Items per Page  This is the number of items per page.
     * @type number
     * @memberof FrontendApilistMySessions
     */
    perPage?: number
    /**
     * Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @type number
     * @memberof FrontendApilistMySessions
     */
    page?: number
    /**
     * Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @type string
     * @memberof FrontendApilistMySessions
     */
    xSessionToken?: string
    /**
     * Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     * @type string
     * @memberof FrontendApilistMySessions
     */
    cookie?: string
}

export interface FrontendApiPerformNativeLogoutRequest {
    /**
     * 
     * @type PerformNativeLogoutBody
     * @memberof FrontendApiperformNativeLogout
     */
    performNativeLogoutBody: PerformNativeLogoutBody
}

export interface FrontendApiToSessionRequest {
    /**
     * Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @type string
     * @memberof FrontendApitoSession
     */
    xSessionToken?: string
    /**
     * Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     * @type string
     * @memberof FrontendApitoSession
     */
    cookie?: string
}

export interface FrontendApiUpdateLoginFlowRequest {
    /**
     * The Login Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApiupdateLoginFlow
     */
    flow: string
    /**
     * 
     * @type UpdateLoginFlowBody
     * @memberof FrontendApiupdateLoginFlow
     */
    updateLoginFlowBody: UpdateLoginFlowBody
    /**
     * The Session Token of the Identity performing the settings flow.
     * @type string
     * @memberof FrontendApiupdateLoginFlow
     */
    xSessionToken?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApiupdateLoginFlow
     */
    cookie?: string
}

export interface FrontendApiUpdateLogoutFlowRequest {
    /**
     * A Valid Logout Token  If you do not have a logout token because you only have a session cookie, call &#x60;/self-service/logout/browser&#x60; to generate a URL for this endpoint.
     * @type string
     * @memberof FrontendApiupdateLogoutFlow
     */
    token?: string
    /**
     * The URL to return to after the logout was completed.
     * @type string
     * @memberof FrontendApiupdateLogoutFlow
     */
    returnTo?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApiupdateLogoutFlow
     */
    cookie?: string
}

export interface FrontendApiUpdateRecoveryFlowRequest {
    /**
     * The Recovery Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/recovery?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApiupdateRecoveryFlow
     */
    flow: string
    /**
     * 
     * @type UpdateRecoveryFlowBody
     * @memberof FrontendApiupdateRecoveryFlow
     */
    updateRecoveryFlowBody: UpdateRecoveryFlowBody
    /**
     * Recovery Token  The recovery token which completes the recovery request. If the token is invalid (e.g. expired) an error will be shown to the end-user.  This parameter is usually set in a link and not used by any direct API call.
     * @type string
     * @memberof FrontendApiupdateRecoveryFlow
     */
    token?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApiupdateRecoveryFlow
     */
    cookie?: string
}

export interface FrontendApiUpdateRegistrationFlowRequest {
    /**
     * The Registration Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApiupdateRegistrationFlow
     */
    flow: string
    /**
     * 
     * @type UpdateRegistrationFlowBody
     * @memberof FrontendApiupdateRegistrationFlow
     */
    updateRegistrationFlowBody: UpdateRegistrationFlowBody
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApiupdateRegistrationFlow
     */
    cookie?: string
}

export interface FrontendApiUpdateSettingsFlowRequest {
    /**
     * The Settings Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/settings?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApiupdateSettingsFlow
     */
    flow: string
    /**
     * 
     * @type UpdateSettingsFlowBody
     * @memberof FrontendApiupdateSettingsFlow
     */
    updateSettingsFlowBody: UpdateSettingsFlowBody
    /**
     * The Session Token of the Identity performing the settings flow.
     * @type string
     * @memberof FrontendApiupdateSettingsFlow
     */
    xSessionToken?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApiupdateSettingsFlow
     */
    cookie?: string
}

export interface FrontendApiUpdateVerificationFlowRequest {
    /**
     * The Verification Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/verification?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApiupdateVerificationFlow
     */
    flow: string
    /**
     * 
     * @type UpdateVerificationFlowBody
     * @memberof FrontendApiupdateVerificationFlow
     */
    updateVerificationFlowBody: UpdateVerificationFlowBody
    /**
     * Verification Token  The verification token which completes the verification request. If the token is invalid (e.g. expired) an error will be shown to the end-user.  This parameter is usually set in a link and not used by any direct API call.
     * @type string
     * @memberof FrontendApiupdateVerificationFlow
     */
    token?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApiupdateVerificationFlow
     */
    cookie?: string
}

export class ObjectFrontendApi {
    private api: ObservableFrontendApi

    public constructor(configuration: Configuration, requestFactory?: FrontendApiRequestFactory, responseProcessor?: FrontendApiResponseProcessor) {
        this.api = new ObservableFrontendApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint initializes a browser-based user login flow. This endpoint will set the appropriate cookies and anti-CSRF measures required for browser-based flows.  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.login.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists already, the browser will be redirected to `urls.default_redirect_url` unless the query parameter `?refresh=true` was set.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `session_aal1_required`: Multi-factor auth (e.g. 2fa) was requested but the user has no session yet. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  The optional query parameter login_challenge is set when using Kratos with Hydra in an OAuth2 flow. See the oauth2_provider.url configuration option.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Login Flow for Browsers
     * @param param the request object
     */
    public createBrowserLoginFlow(param: FrontendApiCreateBrowserLoginFlowRequest = {}, options?: Configuration): Promise<LoginFlow> {
        return this.api.createBrowserLoginFlow(param.refresh, param.aal, param.returnTo, param.cookie, param.loginChallenge,  options).toPromise();
    }

    /**
     * This endpoint initializes a browser-based user logout flow and a URL which can be used to log out the user.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...). For API clients you can call the `/self-service/logout/api` URL directly with the Ory Session Token.  The URL is only valid for the currently signed in user. If no user is signed in, this endpoint returns a 401 error.  When calling this endpoint from a backend, please ensure to properly forward the HTTP cookies.
     * Create a Logout URL for Browsers
     * @param param the request object
     */
    public createBrowserLogoutFlow(param: FrontendApiCreateBrowserLogoutFlowRequest = {}, options?: Configuration): Promise<LogoutFlow> {
        return this.api.createBrowserLogoutFlow(param.cookie,  options).toPromise();
    }

    /**
     * This endpoint initializes a browser-based account recovery flow. Once initialized, the browser will be redirected to `selfservice.flows.recovery.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists, the browser is returned to the configured return URL.  If this endpoint is called via an AJAX request, the response contains the recovery flow without any redirects or a 400 bad request error if the user is already authenticated.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Create Recovery Flow for Browsers
     * @param param the request object
     */
    public createBrowserRecoveryFlow(param: FrontendApiCreateBrowserRecoveryFlowRequest = {}, options?: Configuration): Promise<RecoveryFlow> {
        return this.api.createBrowserRecoveryFlow(param.returnTo,  options).toPromise();
    }

    /**
     * This endpoint initializes a browser-based user registration flow. This endpoint will set the appropriate cookies and anti-CSRF measures required for browser-based flows.  :::info  This endpoint is EXPERIMENTAL and subject to potential breaking changes in the future.  :::  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.registration.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists already, the browser will be redirected to `urls.default_redirect_url`.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  If this endpoint is called via an AJAX request, the response contains the registration flow without a redirect.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Registration Flow for Browsers
     * @param param the request object
     */
    public createBrowserRegistrationFlow(param: FrontendApiCreateBrowserRegistrationFlowRequest = {}, options?: Configuration): Promise<RegistrationFlow> {
        return this.api.createBrowserRegistrationFlow(param.returnTo, param.loginChallenge, param.afterVerificationReturnTo,  options).toPromise();
    }

    /**
     * This endpoint initializes a browser-based user settings flow. Once initialized, the browser will be redirected to `selfservice.flows.settings.ui_url` with the flow ID set as the query parameter `?flow=`. If no valid Ory Kratos Session Cookie is included in the request, a login flow will be initialized.  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.settings.ui_url` with the flow ID set as the query parameter `?flow=`. If no valid user session was set, the browser will be redirected to the login endpoint.  If this endpoint is called via an AJAX request, the response contains the settings flow without any redirects or a 401 forbidden error if no valid session was set.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor (happens automatically for server-side browser flows) or change the configuration.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Create Settings Flow for Browsers
     * @param param the request object
     */
    public createBrowserSettingsFlow(param: FrontendApiCreateBrowserSettingsFlowRequest = {}, options?: Configuration): Promise<SettingsFlow> {
        return this.api.createBrowserSettingsFlow(param.returnTo, param.cookie,  options).toPromise();
    }

    /**
     * This endpoint initializes a browser-based account verification flow. Once initialized, the browser will be redirected to `selfservice.flows.verification.ui_url` with the flow ID set as the query parameter `?flow=`.  If this endpoint is called via an AJAX request, the response contains the recovery flow without any redirects.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...).  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Create Verification Flow for Browser Clients
     * @param param the request object
     */
    public createBrowserVerificationFlow(param: FrontendApiCreateBrowserVerificationFlowRequest = {}, options?: Configuration): Promise<VerificationFlow> {
        return this.api.createBrowserVerificationFlow(param.returnTo,  options).toPromise();
    }

    /**
     * This endpoint initiates a login flow for native apps that do not use a browser, such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error will be returned unless the URL query parameter `?refresh=true` is set.  To fetch an existing login flow call `/self-service/login/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks, including CSRF login attacks.  In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `session_aal1_required`: Multi-factor auth (e.g. 2fa) was requested but the user has no session yet. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Login Flow for Native Apps
     * @param param the request object
     */
    public createNativeLoginFlow(param: FrontendApiCreateNativeLoginFlowRequest = {}, options?: Configuration): Promise<LoginFlow> {
        return this.api.createNativeLoginFlow(param.refresh, param.aal, param.xSessionToken, param.returnSessionTokenExchangeCode, param.returnTo,  options).toPromise();
    }

    /**
     * This endpoint initiates a recovery flow for API clients such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error.  To fetch an existing recovery flow call `/self-service/recovery/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Create Recovery Flow for Native Apps
     * @param param the request object
     */
    public createNativeRecoveryFlow(param: FrontendApiCreateNativeRecoveryFlowRequest = {}, options?: Configuration): Promise<RecoveryFlow> {
        return this.api.createNativeRecoveryFlow( options).toPromise();
    }

    /**
     * This endpoint initiates a registration flow for API clients such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error will be returned unless the URL query parameter `?refresh=true` is set.  To fetch an existing registration flow call `/self-service/registration/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Registration Flow for Native Apps
     * @param param the request object
     */
    public createNativeRegistrationFlow(param: FrontendApiCreateNativeRegistrationFlowRequest = {}, options?: Configuration): Promise<RegistrationFlow> {
        return this.api.createNativeRegistrationFlow(param.returnSessionTokenExchangeCode, param.returnTo,  options).toPromise();
    }

    /**
     * This endpoint initiates a settings flow for API clients such as mobile devices, smart TVs, and so on. You must provide a valid Ory Kratos Session Token for this endpoint to respond with HTTP 200 OK.  To fetch an existing settings flow call `/self-service/settings/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Create Settings Flow for Native Apps
     * @param param the request object
     */
    public createNativeSettingsFlow(param: FrontendApiCreateNativeSettingsFlowRequest = {}, options?: Configuration): Promise<SettingsFlow> {
        return this.api.createNativeSettingsFlow(param.xSessionToken,  options).toPromise();
    }

    /**
     * This endpoint initiates a verification flow for API clients such as mobile devices, smart TVs, and so on.  To fetch an existing verification flow call `/self-service/verification/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Create Verification Flow for Native Apps
     * @param param the request object
     */
    public createNativeVerificationFlow(param: FrontendApiCreateNativeVerificationFlowRequest = {}, options?: Configuration): Promise<VerificationFlow> {
        return this.api.createNativeVerificationFlow( options).toPromise();
    }

    /**
     * Calling this endpoint invalidates all except the current session that belong to the logged-in user. Session data are not deleted.
     * Disable my other sessions
     * @param param the request object
     */
    public disableMyOtherSessions(param: FrontendApiDisableMyOtherSessionsRequest = {}, options?: Configuration): Promise<DeleteMySessionsCount> {
        return this.api.disableMyOtherSessions(param.xSessionToken, param.cookie,  options).toPromise();
    }

    /**
     * Calling this endpoint invalidates the specified session. The current session cannot be revoked. Session data are not deleted.
     * Disable one of my sessions
     * @param param the request object
     */
    public disableMySession(param: FrontendApiDisableMySessionRequest, options?: Configuration): Promise<void> {
        return this.api.disableMySession(param.id, param.xSessionToken, param.cookie,  options).toPromise();
    }

    /**
     * Exchange Session Token
     * @param param the request object
     */
    public exchangeSessionToken(param: FrontendApiExchangeSessionTokenRequest, options?: Configuration): Promise<SuccessfulNativeLogin> {
        return this.api.exchangeSessionToken(param.initCode, param.returnToCode,  options).toPromise();
    }

    /**
     * This endpoint returns the error associated with a user-facing self service errors.  This endpoint supports stub values to help you implement the error UI:  `?id=stub:500` - returns a stub 500 (Internal Server Error) error.  More information can be found at [Ory Kratos User User Facing Error Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-facing-errors).
     * Get User-Flow Errors
     * @param param the request object
     */
    public getFlowError(param: FrontendApiGetFlowErrorRequest, options?: Configuration): Promise<FlowError> {
        return this.api.getFlowError(param.id,  options).toPromise();
    }

    /**
     * This endpoint returns a login flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/login\', async function (req, res) { const flow = await client.getLoginFlow(req.header(\'cookie\'), req.query[\'flow\'])  res.render(\'login\', flow) }) ```  This request may fail due to several reasons. The `error.id` can be one of:  `session_already_available`: The user is already signed in. `self_service_flow_expired`: The flow is expired and you should request a new one.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get Login Flow
     * @param param the request object
     */
    public getLoginFlow(param: FrontendApiGetLoginFlowRequest, options?: Configuration): Promise<LoginFlow> {
        return this.api.getLoginFlow(param.id, param.cookie,  options).toPromise();
    }

    /**
     * This endpoint returns a recovery flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/recovery\', async function (req, res) { const flow = await client.getRecoveryFlow(req.header(\'Cookie\'), req.query[\'flow\'])  res.render(\'recovery\', flow) }) ```  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Get Recovery Flow
     * @param param the request object
     */
    public getRecoveryFlow(param: FrontendApiGetRecoveryFlowRequest, options?: Configuration): Promise<RecoveryFlow> {
        return this.api.getRecoveryFlow(param.id, param.cookie,  options).toPromise();
    }

    /**
     * This endpoint returns a registration flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/registration\', async function (req, res) { const flow = await client.getRegistrationFlow(req.header(\'cookie\'), req.query[\'flow\'])  res.render(\'registration\', flow) }) ```  This request may fail due to several reasons. The `error.id` can be one of:  `session_already_available`: The user is already signed in. `self_service_flow_expired`: The flow is expired and you should request a new one.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get Registration Flow
     * @param param the request object
     */
    public getRegistrationFlow(param: FrontendApiGetRegistrationFlowRequest, options?: Configuration): Promise<RegistrationFlow> {
        return this.api.getRegistrationFlow(param.id, param.cookie,  options).toPromise();
    }

    /**
     * When accessing this endpoint through Ory Kratos\' Public API you must ensure that either the Ory Kratos Session Cookie or the Ory Kratos Session Token are set.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  You can access this endpoint without credentials when using Ory Kratos\' Admin API.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The flow was interrupted with `session_refresh_required` but apparently some other identity logged in instead.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Get Settings Flow
     * @param param the request object
     */
    public getSettingsFlow(param: FrontendApiGetSettingsFlowRequest, options?: Configuration): Promise<SettingsFlow> {
        return this.api.getSettingsFlow(param.id, param.xSessionToken, param.cookie,  options).toPromise();
    }

    /**
     * This endpoint returns a verification flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/recovery\', async function (req, res) { const flow = await client.getVerificationFlow(req.header(\'cookie\'), req.query[\'flow\'])  res.render(\'verification\', flow) }) ```  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Get Verification Flow
     * @param param the request object
     */
    public getVerificationFlow(param: FrontendApiGetVerificationFlowRequest, options?: Configuration): Promise<VerificationFlow> {
        return this.api.getVerificationFlow(param.id, param.cookie,  options).toPromise();
    }

    /**
     * This endpoint provides JavaScript which is needed in order to perform WebAuthn login and registration.  If you are building a JavaScript Browser App (e.g. in ReactJS or AngularJS) you will need to load this file:  ```html <script src=\"https://public-kratos.example.org/.well-known/ory/webauthn.js\" type=\"script\" async /> ```  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get WebAuthn JavaScript
     * @param param the request object
     */
    public getWebAuthnJavaScript(param: FrontendApiGetWebAuthnJavaScriptRequest = {}, options?: Configuration): Promise<string> {
        return this.api.getWebAuthnJavaScript( options).toPromise();
    }

    /**
     * This endpoints returns all other active sessions that belong to the logged-in user. The current session can be retrieved by calling the `/sessions/whoami` endpoint.
     * Get My Active Sessions
     * @param param the request object
     */
    public listMySessions(param: FrontendApiListMySessionsRequest = {}, options?: Configuration): Promise<Array<Session>> {
        return this.api.listMySessions(param.perPage, param.page, param.xSessionToken, param.cookie,  options).toPromise();
    }

    /**
     * Use this endpoint to log out an identity using an Ory Session Token. If the Ory Session Token was successfully revoked, the server returns a 204 No Content response. A 204 No Content response is also sent when the Ory Session Token has been revoked already before.  If the Ory Session Token is malformed or does not exist a 403 Forbidden response will be returned.  This endpoint does not remove any HTTP Cookies - use the Browser-Based Self-Service Logout Flow instead.
     * Perform Logout for Native Apps
     * @param param the request object
     */
    public performNativeLogout(param: FrontendApiPerformNativeLogoutRequest, options?: Configuration): Promise<void> {
        return this.api.performNativeLogout(param.performNativeLogoutBody,  options).toPromise();
    }

    /**
     * Uses the HTTP Headers in the GET request to determine (e.g. by using checking the cookies) who is authenticated. Returns a session object in the body or 401 if the credentials are invalid or no credentials were sent. When the request it successful it adds the user ID to the \'X-Kratos-Authenticated-Identity-Id\' header in the response.  If you call this endpoint from a server-side application, you must forward the HTTP Cookie Header to this endpoint:  ```js pseudo-code example router.get(\'/protected-endpoint\', async function (req, res) { const session = await client.toSession(undefined, req.header(\'cookie\'))  console.log(session) }) ```  When calling this endpoint from a non-browser application (e.g. mobile app) you must include the session token:  ```js pseudo-code example ... const session = await client.toSession(\"the-session-token\")  console.log(session) ```  Depending on your configuration this endpoint might return a 403 status code if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  This endpoint is useful for:  AJAX calls. Remember to send credentials and set up CORS correctly! Reverse proxies and API Gateways Server-side calls - use the `X-Session-Token` header!  This endpoint authenticates users by checking:  if the `Cookie` HTTP header was set containing an Ory Kratos Session Cookie; if the `Authorization: bearer <ory-session-token>` HTTP header was set with a valid Ory Kratos Session Token; if the `X-Session-Token` HTTP header was set with a valid Ory Kratos Session Token.  If none of these headers are set or the cooke or token are invalid, the endpoint returns a HTTP 401 status code.  As explained above, this request may fail due to several reasons. The `error.id` can be one of:  `session_inactive`: No active session was found in the request (e.g. no Ory Session Cookie / Ory Session Token). `session_aal2_required`: An active session was found but it does not fulfil the Authenticator Assurance Level, implying that the session must (e.g.) authenticate the second factor.
     * Check Who the Current HTTP Session Belongs To
     * @param param the request object
     */
    public toSession(param: FrontendApiToSessionRequest = {}, options?: Configuration): Promise<Session> {
        return this.api.toSession(param.xSessionToken, param.cookie,  options).toPromise();
    }

    /**
     * :::info  This endpoint is EXPERIMENTAL and subject to potential breaking changes in the future.  :::  Use this endpoint to complete a login flow. This endpoint behaves differently for API and browser flows.  API flows expect `application/json` to be sent in the body and responds with HTTP 200 and a application/json body with the session token on success; HTTP 410 if the original flow expired with the appropriate error messages set and optionally a `use_flow_id` parameter in the body; HTTP 400 on form validation errors.  Browser flows expect a Content-Type of `application/x-www-form-urlencoded` or `application/json` to be sent in the body and respond with a HTTP 303 redirect to the post/after login URL or the `return_to` value if it was set and if the login succeeded; a HTTP 303 redirect to the login UI URL with the flow ID containing the validation errors otherwise.  Browser flows with an accept header of `application/json` will not redirect but instead respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors.  If this endpoint is called with `Accept: application/json` in the header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Submit a Login Flow
     * @param param the request object
     */
    public updateLoginFlow(param: FrontendApiUpdateLoginFlowRequest, options?: Configuration): Promise<SuccessfulNativeLogin> {
        return this.api.updateLoginFlow(param.flow, param.updateLoginFlowBody, param.xSessionToken, param.cookie,  options).toPromise();
    }

    /**
     * This endpoint logs out an identity in a self-service manner.  If the `Accept` HTTP header is not set to `application/json`, the browser will be redirected (HTTP 303 See Other) to the `return_to` parameter of the initial request or fall back to `urls.default_return_to`.  If the `Accept` HTTP header is set to `application/json`, a 204 No Content response will be sent on successful logout instead.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...). For API clients you can call the `/self-service/logout/api` URL directly with the Ory Session Token.  More information can be found at [Ory Kratos User Logout Documentation](https://www.ory.sh/docs/next/kratos/self-service/flows/user-logout).
     * Update Logout Flow
     * @param param the request object
     */
    public updateLogoutFlow(param: FrontendApiUpdateLogoutFlowRequest = {}, options?: Configuration): Promise<void> {
        return this.api.updateLogoutFlow(param.token, param.returnTo, param.cookie,  options).toPromise();
    }

    /**
     * Use this endpoint to complete a recovery flow. This endpoint behaves differently for API and browser flows and has several states:  `choose_method` expects `flow` (in the URL query) and `email` (in the body) to be sent and works with API- and Browser-initiated flows. For API clients and Browser clients with HTTP Header `Accept: application/json` it either returns a HTTP 200 OK when the form is valid and HTTP 400 OK when the form is invalid. and a HTTP 303 See Other redirect with a fresh recovery flow if the flow was otherwise invalid (e.g. expired). For Browser clients without HTTP Header `Accept` or with `Accept: text/_*` it returns a HTTP 303 See Other redirect to the Recovery UI URL with the Recovery Flow ID appended. `sent_email` is the success state after `choose_method` for the `link` method and allows the user to request another recovery email. It works for both API and Browser-initiated flows and returns the same responses as the flow in `choose_method` state. `passed_challenge` expects a `token` to be sent in the URL query and given the nature of the flow (\"sending a recovery link\") does not have any API capabilities. The server responds with a HTTP 303 See Other redirect either to the Settings UI URL (if the link was valid) and instructs the user to update their password, or a redirect to the Recover UI URL with a new Recovery Flow ID which contains an error message that the recovery link was invalid.  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Complete Recovery Flow
     * @param param the request object
     */
    public updateRecoveryFlow(param: FrontendApiUpdateRecoveryFlowRequest, options?: Configuration): Promise<RecoveryFlow> {
        return this.api.updateRecoveryFlow(param.flow, param.updateRecoveryFlowBody, param.token, param.cookie,  options).toPromise();
    }

    /**
     * Use this endpoint to complete a registration flow by sending an identity\'s traits and password. This endpoint behaves differently for API and browser flows.  API flows expect `application/json` to be sent in the body and respond with HTTP 200 and a application/json body with the created identity success - if the session hook is configured the `session` and `session_token` will also be included; HTTP 410 if the original flow expired with the appropriate error messages set and optionally a `use_flow_id` parameter in the body; HTTP 400 on form validation errors.  Browser flows expect a Content-Type of `application/x-www-form-urlencoded` or `application/json` to be sent in the body and respond with a HTTP 303 redirect to the post/after registration URL or the `return_to` value if it was set and if the registration succeeded; a HTTP 303 redirect to the registration UI URL with the flow ID containing the validation errors otherwise.  Browser flows with an accept header of `application/json` will not redirect but instead respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors.  If this endpoint is called with `Accept: application/json` in the header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Update Registration Flow
     * @param param the request object
     */
    public updateRegistrationFlow(param: FrontendApiUpdateRegistrationFlowRequest, options?: Configuration): Promise<SuccessfulNativeRegistration> {
        return this.api.updateRegistrationFlow(param.flow, param.updateRegistrationFlowBody, param.cookie,  options).toPromise();
    }

    /**
     * Use this endpoint to complete a settings flow by sending an identity\'s updated password. This endpoint behaves differently for API and browser flows.  API-initiated flows expect `application/json` to be sent in the body and respond with HTTP 200 and an application/json body with the session token on success; HTTP 303 redirect to a fresh settings flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors. HTTP 401 when the endpoint is called without a valid session token. HTTP 403 when `selfservice.flows.settings.privileged_session_max_age` was reached or the session\'s AAL is too low. Implies that the user needs to re-authenticate.  Browser flows without HTTP Header `Accept` or with `Accept: text/_*` respond with a HTTP 303 redirect to the post/after settings URL or the `return_to` value if it was set and if the flow succeeded; a HTTP 303 redirect to the Settings UI URL with the flow ID containing the validation errors otherwise. a HTTP 303 redirect to the login endpoint when `selfservice.flows.settings.privileged_session_max_age` was reached or the session\'s AAL is too low.  Browser flows with HTTP Header `Accept: application/json` respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 401 when the endpoint is called without a valid session cookie. HTTP 403 when the page is accessed without a session cookie or the session\'s AAL is too low. HTTP 400 on form validation errors.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor (happens automatically for server-side browser flows) or change the configuration.  If this endpoint is called with a `Accept: application/json` HTTP header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_refresh_required`: The identity requested to change something that needs a privileged session. Redirect the identity to the login init endpoint with query parameters `?refresh=true&return_to=<the-current-browser-url>`, or initiate a refresh login flow otherwise. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The flow was interrupted with `session_refresh_required` but apparently some other identity logged in instead. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Complete Settings Flow
     * @param param the request object
     */
    public updateSettingsFlow(param: FrontendApiUpdateSettingsFlowRequest, options?: Configuration): Promise<SettingsFlow> {
        return this.api.updateSettingsFlow(param.flow, param.updateSettingsFlowBody, param.xSessionToken, param.cookie,  options).toPromise();
    }

    /**
     * Use this endpoint to complete a verification flow. This endpoint behaves differently for API and browser flows and has several states:  `choose_method` expects `flow` (in the URL query) and `email` (in the body) to be sent and works with API- and Browser-initiated flows. For API clients and Browser clients with HTTP Header `Accept: application/json` it either returns a HTTP 200 OK when the form is valid and HTTP 400 OK when the form is invalid and a HTTP 303 See Other redirect with a fresh verification flow if the flow was otherwise invalid (e.g. expired). For Browser clients without HTTP Header `Accept` or with `Accept: text/_*` it returns a HTTP 303 See Other redirect to the Verification UI URL with the Verification Flow ID appended. `sent_email` is the success state after `choose_method` when using the `link` method and allows the user to request another verification email. It works for both API and Browser-initiated flows and returns the same responses as the flow in `choose_method` state. `passed_challenge` expects a `token` to be sent in the URL query and given the nature of the flow (\"sending a verification link\") does not have any API capabilities. The server responds with a HTTP 303 See Other redirect either to the Settings UI URL (if the link was valid) and instructs the user to update their password, or a redirect to the Verification UI URL with a new Verification Flow ID which contains an error message that the verification link was invalid.  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Complete Verification Flow
     * @param param the request object
     */
    public updateVerificationFlow(param: FrontendApiUpdateVerificationFlowRequest, options?: Configuration): Promise<VerificationFlow> {
        return this.api.updateVerificationFlow(param.flow, param.updateVerificationFlowBody, param.token, param.cookie,  options).toPromise();
    }

}

import { ObservableIdentityApi } from "./ObservableAPI.ts";
import { IdentityApiRequestFactory, IdentityApiResponseProcessor} from "../apis/IdentityApi.ts";

export interface IdentityApiBatchPatchIdentitiesRequest {
    /**
     * 
     * @type PatchIdentitiesBody
     * @memberof IdentityApibatchPatchIdentities
     */
    patchIdentitiesBody?: PatchIdentitiesBody
}

export interface IdentityApiCreateIdentityRequest {
    /**
     * 
     * @type CreateIdentityBody
     * @memberof IdentityApicreateIdentity
     */
    createIdentityBody?: CreateIdentityBody
}

export interface IdentityApiCreateRecoveryCodeForIdentityRequest {
    /**
     * 
     * @type CreateRecoveryCodeForIdentityBody
     * @memberof IdentityApicreateRecoveryCodeForIdentity
     */
    createRecoveryCodeForIdentityBody?: CreateRecoveryCodeForIdentityBody
}

export interface IdentityApiCreateRecoveryLinkForIdentityRequest {
    /**
     * 
     * @type CreateRecoveryLinkForIdentityBody
     * @memberof IdentityApicreateRecoveryLinkForIdentity
     */
    createRecoveryLinkForIdentityBody?: CreateRecoveryLinkForIdentityBody
}

export interface IdentityApiDeleteIdentityRequest {
    /**
     * ID is the identity\&#39;s ID.
     * @type string
     * @memberof IdentityApideleteIdentity
     */
    id: string
}

export interface IdentityApiDeleteIdentityCredentialsRequest {
    /**
     * ID is the identity\&#39;s ID.
     * @type string
     * @memberof IdentityApideleteIdentityCredentials
     */
    id: string
    /**
     * Type is the credential\&#39;s Type. One of totp, webauthn, lookup
     * @type &#39;totp&#39; | &#39;webauthn&#39; | &#39;lookup&#39;
     * @memberof IdentityApideleteIdentityCredentials
     */
    type: 'totp' | 'webauthn' | 'lookup'
}

export interface IdentityApiDeleteIdentitySessionsRequest {
    /**
     * ID is the identity\&#39;s ID.
     * @type string
     * @memberof IdentityApideleteIdentitySessions
     */
    id: string
}

export interface IdentityApiDisableSessionRequest {
    /**
     * ID is the session\&#39;s ID.
     * @type string
     * @memberof IdentityApidisableSession
     */
    id: string
}

export interface IdentityApiExtendSessionRequest {
    /**
     * ID is the session\&#39;s ID.
     * @type string
     * @memberof IdentityApiextendSession
     */
    id: string
}

export interface IdentityApiGetIdentityRequest {
    /**
     * ID must be set to the ID of identity you want to get
     * @type string
     * @memberof IdentityApigetIdentity
     */
    id: string
    /**
     * Include Credentials in Response  Include any credential, for example &#x60;password&#x60; or &#x60;oidc&#x60;, in the response. When set to &#x60;oidc&#x60;, This will return the initial OAuth 2.0 Access Token, OAuth 2.0 Refresh Token and the OpenID Connect ID Token if available.
     * @type Array&lt;&#39;password&#39; | &#39;totp&#39; | &#39;oidc&#39; | &#39;webauthn&#39; | &#39;lookup_secret&#39;&gt;
     * @memberof IdentityApigetIdentity
     */
    includeCredential?: Array<'password' | 'totp' | 'oidc' | 'webauthn' | 'lookup_secret'>
}

export interface IdentityApiGetIdentitySchemaRequest {
    /**
     * ID must be set to the ID of schema you want to get
     * @type string
     * @memberof IdentityApigetIdentitySchema
     */
    id: string
}

export interface IdentityApiGetSessionRequest {
    /**
     * ID is the session\&#39;s ID.
     * @type string
     * @memberof IdentityApigetSession
     */
    id: string
    /**
     * ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. Example - ?expand&#x3D;Identity&amp;expand&#x3D;Devices If no value is provided, the expandable properties are skipped.
     * @type Array&lt;string&gt;
     * @memberof IdentityApigetSession
     */
    expand?: Array<string>
}

export interface IdentityApiListIdentitiesRequest {
    /**
     * Items per Page  This is the number of items per page.
     * @type number
     * @memberof IdentityApilistIdentities
     */
    perPage?: number
    /**
     * Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @type number
     * @memberof IdentityApilistIdentities
     */
    page?: number
    /**
     * CredentialsIdentifier is the identifier (username, email) of the credentials to look up.
     * @type string
     * @memberof IdentityApilistIdentities
     */
    credentialsIdentifier?: string
}

export interface IdentityApiListIdentitySchemasRequest {
    /**
     * Items per Page  This is the number of items per page.
     * @type number
     * @memberof IdentityApilistIdentitySchemas
     */
    perPage?: number
    /**
     * Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @type number
     * @memberof IdentityApilistIdentitySchemas
     */
    page?: number
}

export interface IdentityApiListIdentitySessionsRequest {
    /**
     * ID is the identity\&#39;s ID.
     * @type string
     * @memberof IdentityApilistIdentitySessions
     */
    id: string
    /**
     * Items per Page  This is the number of items per page.
     * @type number
     * @memberof IdentityApilistIdentitySessions
     */
    perPage?: number
    /**
     * Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @type number
     * @memberof IdentityApilistIdentitySessions
     */
    page?: number
    /**
     * Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.
     * @type boolean
     * @memberof IdentityApilistIdentitySessions
     */
    active?: boolean
}

export interface IdentityApiListSessionsRequest {
    /**
     * Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @type number
     * @memberof IdentityApilistSessions
     */
    pageSize?: number
    /**
     * Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @type string
     * @memberof IdentityApilistSessions
     */
    pageToken?: string
    /**
     * Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.
     * @type boolean
     * @memberof IdentityApilistSessions
     */
    active?: boolean
    /**
     * ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. If no value is provided, the expandable properties are skipped.
     * @type Array&lt;string&gt;
     * @memberof IdentityApilistSessions
     */
    expand?: Array<string>
}

export interface IdentityApiPatchIdentityRequest {
    /**
     * ID must be set to the ID of identity you want to update
     * @type string
     * @memberof IdentityApipatchIdentity
     */
    id: string
    /**
     * 
     * @type Array&lt;JsonPatch&gt;
     * @memberof IdentityApipatchIdentity
     */
    jsonPatch?: Array<JsonPatch>
}

export interface IdentityApiUpdateIdentityRequest {
    /**
     * ID must be set to the ID of identity you want to update
     * @type string
     * @memberof IdentityApiupdateIdentity
     */
    id: string
    /**
     * 
     * @type UpdateIdentityBody
     * @memberof IdentityApiupdateIdentity
     */
    updateIdentityBody?: UpdateIdentityBody
}

export class ObjectIdentityApi {
    private api: ObservableIdentityApi

    public constructor(configuration: Configuration, requestFactory?: IdentityApiRequestFactory, responseProcessor?: IdentityApiResponseProcessor) {
        this.api = new ObservableIdentityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates or delete multiple [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model). This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.
     * Create and deletes multiple identities
     * @param param the request object
     */
    public batchPatchIdentities(param: IdentityApiBatchPatchIdentitiesRequest = {}, options?: Configuration): Promise<BatchPatchIdentitiesResponse> {
        return this.api.batchPatchIdentities(param.patchIdentitiesBody,  options).toPromise();
    }

    /**
     * Create an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model).  This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.
     * Create an Identity
     * @param param the request object
     */
    public createIdentity(param: IdentityApiCreateIdentityRequest = {}, options?: Configuration): Promise<Identity> {
        return this.api.createIdentity(param.createIdentityBody,  options).toPromise();
    }

    /**
     * This endpoint creates a recovery code which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Code
     * @param param the request object
     */
    public createRecoveryCodeForIdentity(param: IdentityApiCreateRecoveryCodeForIdentityRequest = {}, options?: Configuration): Promise<RecoveryCodeForIdentity> {
        return this.api.createRecoveryCodeForIdentity(param.createRecoveryCodeForIdentityBody,  options).toPromise();
    }

    /**
     * This endpoint creates a recovery link which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Link
     * @param param the request object
     */
    public createRecoveryLinkForIdentity(param: IdentityApiCreateRecoveryLinkForIdentityRequest = {}, options?: Configuration): Promise<RecoveryLinkForIdentity> {
        return this.api.createRecoveryLinkForIdentity(param.createRecoveryLinkForIdentityBody,  options).toPromise();
    }

    /**
     * Calling this endpoint irrecoverably and permanently deletes the [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) given its ID. This action can not be undone. This endpoint returns 204 when the identity was deleted or when the identity was not found, in which case it is assumed that is has been deleted already.
     * Delete an Identity
     * @param param the request object
     */
    public deleteIdentity(param: IdentityApiDeleteIdentityRequest, options?: Configuration): Promise<void> {
        return this.api.deleteIdentity(param.id,  options).toPromise();
    }

    /**
     * Delete an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) credential by its type You can only delete second factor (aal2) credentials.
     * Delete a credential for a specific identity
     * @param param the request object
     */
    public deleteIdentityCredentials(param: IdentityApiDeleteIdentityCredentialsRequest, options?: Configuration): Promise<Identity> {
        return this.api.deleteIdentityCredentials(param.id, param.type,  options).toPromise();
    }

    /**
     * Calling this endpoint irrecoverably and permanently deletes and invalidates all sessions that belong to the given Identity.
     * Delete & Invalidate an Identity\'s Sessions
     * @param param the request object
     */
    public deleteIdentitySessions(param: IdentityApiDeleteIdentitySessionsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteIdentitySessions(param.id,  options).toPromise();
    }

    /**
     * Calling this endpoint deactivates the specified session. Session data is not deleted.
     * Deactivate a Session
     * @param param the request object
     */
    public disableSession(param: IdentityApiDisableSessionRequest, options?: Configuration): Promise<void> {
        return this.api.disableSession(param.id,  options).toPromise();
    }

    /**
     * Calling this endpoint extends the given session ID. If `session.earliest_possible_extend` is set it will only extend the session after the specified time has passed.  Retrieve the session ID from the `/sessions/whoami` endpoint / `toSession` SDK method.
     * Extend a Session
     * @param param the request object
     */
    public extendSession(param: IdentityApiExtendSessionRequest, options?: Configuration): Promise<Session> {
        return this.api.extendSession(param.id,  options).toPromise();
    }

    /**
     * Return an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) by its ID. You can optionally include credentials (e.g. social sign in connections) in the response by using the `include_credential` query parameter.
     * Get an Identity
     * @param param the request object
     */
    public getIdentity(param: IdentityApiGetIdentityRequest, options?: Configuration): Promise<Identity> {
        return this.api.getIdentity(param.id, param.includeCredential,  options).toPromise();
    }

    /**
     * Return a specific identity schema.
     * Get Identity JSON Schema
     * @param param the request object
     */
    public getIdentitySchema(param: IdentityApiGetIdentitySchemaRequest, options?: Configuration): Promise<any> {
        return this.api.getIdentitySchema(param.id,  options).toPromise();
    }

    /**
     * This endpoint is useful for:  Getting a session object with all specified expandables that exist in an administrative context.
     * Get Session
     * @param param the request object
     */
    public getSession(param: IdentityApiGetSessionRequest, options?: Configuration): Promise<Session> {
        return this.api.getSession(param.id, param.expand,  options).toPromise();
    }

    /**
     * Lists all [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model) in the system.
     * List Identities
     * @param param the request object
     */
    public listIdentities(param: IdentityApiListIdentitiesRequest = {}, options?: Configuration): Promise<Array<Identity>> {
        return this.api.listIdentities(param.perPage, param.page, param.credentialsIdentifier,  options).toPromise();
    }

    /**
     * Returns a list of all identity schemas currently in use.
     * Get all Identity Schemas
     * @param param the request object
     */
    public listIdentitySchemas(param: IdentityApiListIdentitySchemasRequest = {}, options?: Configuration): Promise<Array<IdentitySchemaContainer>> {
        return this.api.listIdentitySchemas(param.perPage, param.page,  options).toPromise();
    }

    /**
     * This endpoint returns all sessions that belong to the given Identity.
     * List an Identity\'s Sessions
     * @param param the request object
     */
    public listIdentitySessions(param: IdentityApiListIdentitySessionsRequest, options?: Configuration): Promise<Array<Session>> {
        return this.api.listIdentitySessions(param.id, param.perPage, param.page, param.active,  options).toPromise();
    }

    /**
     * Listing all sessions that exist.
     * List All Sessions
     * @param param the request object
     */
    public listSessions(param: IdentityApiListSessionsRequest = {}, options?: Configuration): Promise<Array<Session>> {
        return this.api.listSessions(param.pageSize, param.pageToken, param.active, param.expand,  options).toPromise();
    }

    /**
     * Partially updates an [identity\'s](https://www.ory.sh/docs/kratos/concepts/identity-user-model) field using [JSON Patch](https://jsonpatch.com/). The fields `id`, `stateChangedAt` and `credentials` can not be updated using this method.
     * Patch an Identity
     * @param param the request object
     */
    public patchIdentity(param: IdentityApiPatchIdentityRequest, options?: Configuration): Promise<Identity> {
        return this.api.patchIdentity(param.id, param.jsonPatch,  options).toPromise();
    }

    /**
     * This endpoint updates an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model). The full identity payload (except credentials) is expected. It is possible to update the identity\'s credentials as well.
     * Update an Identity
     * @param param the request object
     */
    public updateIdentity(param: IdentityApiUpdateIdentityRequest, options?: Configuration): Promise<Identity> {
        return this.api.updateIdentity(param.id, param.updateIdentityBody,  options).toPromise();
    }

}

import { ObservableJwkApi } from "./ObservableAPI.ts";
import { JwkApiRequestFactory, JwkApiResponseProcessor} from "../apis/JwkApi.ts";

export interface JwkApiCreateJsonWebKeySetRequest {
    /**
     * The JSON Web Key Set ID
     * @type string
     * @memberof JwkApicreateJsonWebKeySet
     */
    set: string
    /**
     * 
     * @type CreateJsonWebKeySet
     * @memberof JwkApicreateJsonWebKeySet
     */
    createJsonWebKeySet: CreateJsonWebKeySet
}

export interface JwkApiDeleteJsonWebKeyRequest {
    /**
     * The JSON Web Key Set
     * @type string
     * @memberof JwkApideleteJsonWebKey
     */
    set: string
    /**
     * The JSON Web Key ID (kid)
     * @type string
     * @memberof JwkApideleteJsonWebKey
     */
    kid: string
}

export interface JwkApiDeleteJsonWebKeySetRequest {
    /**
     * The JSON Web Key Set
     * @type string
     * @memberof JwkApideleteJsonWebKeySet
     */
    set: string
}

export interface JwkApiGetJsonWebKeyRequest {
    /**
     * JSON Web Key Set ID
     * @type string
     * @memberof JwkApigetJsonWebKey
     */
    set: string
    /**
     * JSON Web Key ID
     * @type string
     * @memberof JwkApigetJsonWebKey
     */
    kid: string
}

export interface JwkApiGetJsonWebKeySetRequest {
    /**
     * JSON Web Key Set ID
     * @type string
     * @memberof JwkApigetJsonWebKeySet
     */
    set: string
}

export interface JwkApiSetJsonWebKeyRequest {
    /**
     * The JSON Web Key Set ID
     * @type string
     * @memberof JwkApisetJsonWebKey
     */
    set: string
    /**
     * JSON Web Key ID
     * @type string
     * @memberof JwkApisetJsonWebKey
     */
    kid: string
    /**
     * 
     * @type JsonWebKey
     * @memberof JwkApisetJsonWebKey
     */
    jsonWebKey?: JsonWebKey
}

export interface JwkApiSetJsonWebKeySetRequest {
    /**
     * The JSON Web Key Set ID
     * @type string
     * @memberof JwkApisetJsonWebKeySet
     */
    set: string
    /**
     * 
     * @type JsonWebKeySet
     * @memberof JwkApisetJsonWebKeySet
     */
    jsonWebKeySet?: JsonWebKeySet
}

export class ObjectJwkApi {
    private api: ObservableJwkApi

    public constructor(configuration: Configuration, requestFactory?: JwkApiRequestFactory, responseProcessor?: JwkApiResponseProcessor) {
        this.api = new ObservableJwkApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is capable of generating JSON Web Key Sets for you. There a different strategies available, such as symmetric cryptographic keys (HS256, HS512) and asymetric cryptographic keys (RS256, ECDSA). If the specified JSON Web Key Set does not exist, it will be created.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Create JSON Web Key
     * @param param the request object
     */
    public createJsonWebKeySet(param: JwkApiCreateJsonWebKeySetRequest, options?: Configuration): Promise<JsonWebKeySet> {
        return this.api.createJsonWebKeySet(param.set, param.createJsonWebKeySet,  options).toPromise();
    }

    /**
     * Use this endpoint to delete a single JSON Web Key.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Delete JSON Web Key
     * @param param the request object
     */
    public deleteJsonWebKey(param: JwkApiDeleteJsonWebKeyRequest, options?: Configuration): Promise<void> {
        return this.api.deleteJsonWebKey(param.set, param.kid,  options).toPromise();
    }

    /**
     * Use this endpoint to delete a complete JSON Web Key Set and all the keys in that set.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Delete JSON Web Key Set
     * @param param the request object
     */
    public deleteJsonWebKeySet(param: JwkApiDeleteJsonWebKeySetRequest, options?: Configuration): Promise<void> {
        return this.api.deleteJsonWebKeySet(param.set,  options).toPromise();
    }

    /**
     * This endpoint returns a singular JSON Web Key contained in a set. It is identified by the set and the specific key ID (kid).
     * Get JSON Web Key
     * @param param the request object
     */
    public getJsonWebKey(param: JwkApiGetJsonWebKeyRequest, options?: Configuration): Promise<JsonWebKeySet> {
        return this.api.getJsonWebKey(param.set, param.kid,  options).toPromise();
    }

    /**
     * This endpoint can be used to retrieve JWK Sets stored in ORY Hydra.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Retrieve a JSON Web Key Set
     * @param param the request object
     */
    public getJsonWebKeySet(param: JwkApiGetJsonWebKeySetRequest, options?: Configuration): Promise<JsonWebKeySet> {
        return this.api.getJsonWebKeySet(param.set,  options).toPromise();
    }

    /**
     * Use this method if you do not want to let Hydra generate the JWKs for you, but instead save your own.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Set JSON Web Key
     * @param param the request object
     */
    public setJsonWebKey(param: JwkApiSetJsonWebKeyRequest, options?: Configuration): Promise<JsonWebKey> {
        return this.api.setJsonWebKey(param.set, param.kid, param.jsonWebKey,  options).toPromise();
    }

    /**
     * Use this method if you do not want to let Hydra generate the JWKs for you, but instead save your own.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Update a JSON Web Key Set
     * @param param the request object
     */
    public setJsonWebKeySet(param: JwkApiSetJsonWebKeySetRequest, options?: Configuration): Promise<JsonWebKeySet> {
        return this.api.setJsonWebKeySet(param.set, param.jsonWebKeySet,  options).toPromise();
    }

}

import { ObservableMetadataApi } from "./ObservableAPI.ts";
import { MetadataApiRequestFactory, MetadataApiResponseProcessor} from "../apis/MetadataApi.ts";

export interface MetadataApiGetVersionRequest {
}

export interface MetadataApiIsAliveRequest {
}

export interface MetadataApiIsReadyRequest {
}

export class ObjectMetadataApi {
    private api: ObservableMetadataApi

    public constructor(configuration: Configuration, requestFactory?: MetadataApiRequestFactory, responseProcessor?: MetadataApiResponseProcessor) {
        this.api = new ObservableMetadataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint returns the version of Ory Kratos.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the version will never refer to the cluster state, only to a single instance.
     * Return Running Software Version.
     * @param param the request object
     */
    public getVersion(param: MetadataApiGetVersionRequest = {}, options?: Configuration): Promise<GetVersion200Response> {
        return this.api.getVersion( options).toPromise();
    }

    /**
     * This endpoint returns a HTTP 200 status code when Ory Kratos is accepting incoming HTTP requests. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
     * Check HTTP Server Status
     * @param param the request object
     */
    public isAlive(param: MetadataApiIsAliveRequest = {}, options?: Configuration): Promise<HealthStatus> {
        return this.api.isAlive( options).toPromise();
    }

    /**
     * This endpoint returns a HTTP 200 status code when Ory Kratos is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of Ory Kratos, the health status will never refer to the cluster state, only to a single instance.
     * Check HTTP Server and Database Status
     * @param param the request object
     */
    public isReady(param: MetadataApiIsReadyRequest = {}, options?: Configuration): Promise<IsReady200Response> {
        return this.api.isReady( options).toPromise();
    }

}

import { ObservableOAuth2Api } from "./ObservableAPI.ts";
import { OAuth2ApiRequestFactory, OAuth2ApiResponseProcessor} from "../apis/OAuth2Api.ts";

export interface OAuth2ApiAcceptOAuth2ConsentRequestRequest {
    /**
     * OAuth 2.0 Consent Request Challenge
     * @type string
     * @memberof OAuth2ApiacceptOAuth2ConsentRequest
     */
    consentChallenge: string
    /**
     * 
     * @type AcceptOAuth2ConsentRequest
     * @memberof OAuth2ApiacceptOAuth2ConsentRequest
     */
    acceptOAuth2ConsentRequest?: AcceptOAuth2ConsentRequest
}

export interface OAuth2ApiAcceptOAuth2LoginRequestRequest {
    /**
     * OAuth 2.0 Login Request Challenge
     * @type string
     * @memberof OAuth2ApiacceptOAuth2LoginRequest
     */
    loginChallenge: string
    /**
     * 
     * @type AcceptOAuth2LoginRequest
     * @memberof OAuth2ApiacceptOAuth2LoginRequest
     */
    acceptOAuth2LoginRequest?: AcceptOAuth2LoginRequest
}

export interface OAuth2ApiAcceptOAuth2LogoutRequestRequest {
    /**
     * OAuth 2.0 Logout Request Challenge
     * @type string
     * @memberof OAuth2ApiacceptOAuth2LogoutRequest
     */
    logoutChallenge: string
}

export interface OAuth2ApiCreateOAuth2ClientRequest {
    /**
     * OAuth 2.0 Client Request Body
     * @type OAuth2Client
     * @memberof OAuth2ApicreateOAuth2Client
     */
    oAuth2Client: OAuth2Client
}

export interface OAuth2ApiDeleteOAuth2ClientRequest {
    /**
     * The id of the OAuth 2.0 Client.
     * @type string
     * @memberof OAuth2ApideleteOAuth2Client
     */
    id: string
}

export interface OAuth2ApiDeleteOAuth2TokenRequest {
    /**
     * OAuth 2.0 Client ID
     * @type string
     * @memberof OAuth2ApideleteOAuth2Token
     */
    clientId: string
}

export interface OAuth2ApiDeleteTrustedOAuth2JwtGrantIssuerRequest {
    /**
     * The id of the desired grant
     * @type string
     * @memberof OAuth2ApideleteTrustedOAuth2JwtGrantIssuer
     */
    id: string
}

export interface OAuth2ApiGetOAuth2ClientRequest {
    /**
     * The id of the OAuth 2.0 Client.
     * @type string
     * @memberof OAuth2ApigetOAuth2Client
     */
    id: string
}

export interface OAuth2ApiGetOAuth2ConsentRequestRequest {
    /**
     * OAuth 2.0 Consent Request Challenge
     * @type string
     * @memberof OAuth2ApigetOAuth2ConsentRequest
     */
    consentChallenge: string
}

export interface OAuth2ApiGetOAuth2LoginRequestRequest {
    /**
     * OAuth 2.0 Login Request Challenge
     * @type string
     * @memberof OAuth2ApigetOAuth2LoginRequest
     */
    loginChallenge: string
}

export interface OAuth2ApiGetOAuth2LogoutRequestRequest {
    /**
     * 
     * @type string
     * @memberof OAuth2ApigetOAuth2LogoutRequest
     */
    logoutChallenge: string
}

export interface OAuth2ApiGetTrustedOAuth2JwtGrantIssuerRequest {
    /**
     * The id of the desired grant
     * @type string
     * @memberof OAuth2ApigetTrustedOAuth2JwtGrantIssuer
     */
    id: string
}

export interface OAuth2ApiIntrospectOAuth2TokenRequest {
    /**
     * The string value of the token. For access tokens, this is the \\\&quot;access_token\\\&quot; value returned from the token endpoint defined in OAuth 2.0. For refresh tokens, this is the \\\&quot;refresh_token\\\&quot; value returned.
     * @type string
     * @memberof OAuth2ApiintrospectOAuth2Token
     */
    token: string
    /**
     * An optional, space separated list of required scopes. If the access token was not granted one of the scopes, the result of active will be false.
     * @type string
     * @memberof OAuth2ApiintrospectOAuth2Token
     */
    scope?: string
}

export interface OAuth2ApiListOAuth2ClientsRequest {
    /**
     * Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @type number
     * @memberof OAuth2ApilistOAuth2Clients
     */
    pageSize?: number
    /**
     * Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @type string
     * @memberof OAuth2ApilistOAuth2Clients
     */
    pageToken?: string
    /**
     * The name of the clients to filter by.
     * @type string
     * @memberof OAuth2ApilistOAuth2Clients
     */
    clientName?: string
    /**
     * The owner of the clients to filter by.
     * @type string
     * @memberof OAuth2ApilistOAuth2Clients
     */
    owner?: string
}

export interface OAuth2ApiListOAuth2ConsentSessionsRequest {
    /**
     * The subject to list the consent sessions for.
     * @type string
     * @memberof OAuth2ApilistOAuth2ConsentSessions
     */
    subject: string
    /**
     * Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @type number
     * @memberof OAuth2ApilistOAuth2ConsentSessions
     */
    pageSize?: number
    /**
     * Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @type string
     * @memberof OAuth2ApilistOAuth2ConsentSessions
     */
    pageToken?: string
    /**
     * The login session id to list the consent sessions for.
     * @type string
     * @memberof OAuth2ApilistOAuth2ConsentSessions
     */
    loginSessionId?: string
}

export interface OAuth2ApiListTrustedOAuth2JwtGrantIssuersRequest {
    /**
     * 
     * @type number
     * @memberof OAuth2ApilistTrustedOAuth2JwtGrantIssuers
     */
    maxItems?: number
    /**
     * 
     * @type number
     * @memberof OAuth2ApilistTrustedOAuth2JwtGrantIssuers
     */
    defaultItems?: number
    /**
     * If optional \&quot;issuer\&quot; is supplied, only jwt-bearer grants with this issuer will be returned.
     * @type string
     * @memberof OAuth2ApilistTrustedOAuth2JwtGrantIssuers
     */
    issuer?: string
}

export interface OAuth2ApiOAuth2AuthorizeRequest {
}

export interface OAuth2ApiOauth2TokenExchangeRequest {
    /**
     * 
     * @type string
     * @memberof OAuth2Apioauth2TokenExchange
     */
    grantType: string
    /**
     * 
     * @type string
     * @memberof OAuth2Apioauth2TokenExchange
     */
    clientId?: string
    /**
     * 
     * @type string
     * @memberof OAuth2Apioauth2TokenExchange
     */
    code?: string
    /**
     * 
     * @type string
     * @memberof OAuth2Apioauth2TokenExchange
     */
    redirectUri?: string
    /**
     * 
     * @type string
     * @memberof OAuth2Apioauth2TokenExchange
     */
    refreshToken?: string
}

export interface OAuth2ApiPatchOAuth2ClientRequest {
    /**
     * The id of the OAuth 2.0 Client.
     * @type string
     * @memberof OAuth2ApipatchOAuth2Client
     */
    id: string
    /**
     * OAuth 2.0 Client JSON Patch Body
     * @type Array&lt;JsonPatch&gt;
     * @memberof OAuth2ApipatchOAuth2Client
     */
    jsonPatch: Array<JsonPatch>
}

export interface OAuth2ApiRejectOAuth2ConsentRequestRequest {
    /**
     * OAuth 2.0 Consent Request Challenge
     * @type string
     * @memberof OAuth2ApirejectOAuth2ConsentRequest
     */
    consentChallenge: string
    /**
     * 
     * @type RejectOAuth2Request
     * @memberof OAuth2ApirejectOAuth2ConsentRequest
     */
    rejectOAuth2Request?: RejectOAuth2Request
}

export interface OAuth2ApiRejectOAuth2LoginRequestRequest {
    /**
     * OAuth 2.0 Login Request Challenge
     * @type string
     * @memberof OAuth2ApirejectOAuth2LoginRequest
     */
    loginChallenge: string
    /**
     * 
     * @type RejectOAuth2Request
     * @memberof OAuth2ApirejectOAuth2LoginRequest
     */
    rejectOAuth2Request?: RejectOAuth2Request
}

export interface OAuth2ApiRejectOAuth2LogoutRequestRequest {
    /**
     * 
     * @type string
     * @memberof OAuth2ApirejectOAuth2LogoutRequest
     */
    logoutChallenge: string
}

export interface OAuth2ApiRevokeOAuth2ConsentSessionsRequest {
    /**
     * OAuth 2.0 Consent Subject  The subject whose consent sessions should be deleted.
     * @type string
     * @memberof OAuth2ApirevokeOAuth2ConsentSessions
     */
    subject: string
    /**
     * OAuth 2.0 Client ID  If set, deletes only those consent sessions that have been granted to the specified OAuth 2.0 Client ID.
     * @type string
     * @memberof OAuth2ApirevokeOAuth2ConsentSessions
     */
    client?: string
    /**
     * Revoke All Consent Sessions  If set to &#x60;true&#x60; deletes all consent sessions by the Subject that have been granted.
     * @type boolean
     * @memberof OAuth2ApirevokeOAuth2ConsentSessions
     */
    all?: boolean
}

export interface OAuth2ApiRevokeOAuth2LoginSessionsRequest {
    /**
     * OAuth 2.0 Subject  The subject to revoke authentication sessions for.
     * @type string
     * @memberof OAuth2ApirevokeOAuth2LoginSessions
     */
    subject?: string
    /**
     * OAuth 2.0 Subject  The subject to revoke authentication sessions for.
     * @type string
     * @memberof OAuth2ApirevokeOAuth2LoginSessions
     */
    sid?: string
}

export interface OAuth2ApiRevokeOAuth2TokenRequest {
    /**
     * 
     * @type string
     * @memberof OAuth2ApirevokeOAuth2Token
     */
    token: string
    /**
     * 
     * @type string
     * @memberof OAuth2ApirevokeOAuth2Token
     */
    clientId?: string
    /**
     * 
     * @type string
     * @memberof OAuth2ApirevokeOAuth2Token
     */
    clientSecret?: string
}

export interface OAuth2ApiSetOAuth2ClientRequest {
    /**
     * OAuth 2.0 Client ID
     * @type string
     * @memberof OAuth2ApisetOAuth2Client
     */
    id: string
    /**
     * OAuth 2.0 Client Request Body
     * @type OAuth2Client
     * @memberof OAuth2ApisetOAuth2Client
     */
    oAuth2Client: OAuth2Client
}

export interface OAuth2ApiSetOAuth2ClientLifespansRequest {
    /**
     * OAuth 2.0 Client ID
     * @type string
     * @memberof OAuth2ApisetOAuth2ClientLifespans
     */
    id: string
    /**
     * 
     * @type OAuth2ClientTokenLifespans
     * @memberof OAuth2ApisetOAuth2ClientLifespans
     */
    oAuth2ClientTokenLifespans?: OAuth2ClientTokenLifespans
}

export interface OAuth2ApiTrustOAuth2JwtGrantIssuerRequest {
    /**
     * 
     * @type TrustOAuth2JwtGrantIssuer
     * @memberof OAuth2ApitrustOAuth2JwtGrantIssuer
     */
    trustOAuth2JwtGrantIssuer?: TrustOAuth2JwtGrantIssuer
}

export class ObjectOAuth2Api {
    private api: ObservableOAuth2Api

    public constructor(configuration: Configuration, requestFactory?: OAuth2ApiRequestFactory, responseProcessor?: OAuth2ApiResponseProcessor) {
        this.api = new ObservableOAuth2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject\'s behalf.  The consent challenge is appended to the consent provider\'s URL to which the subject\'s user-agent (browser) is redirected to. The consent provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted or rejected the request.  This endpoint tells Ory that the subject has authorized the OAuth 2.0 client to access resources on his/her behalf. The consent provider includes additional information, such as session data for access and ID tokens, and if the consent request should be used as basis for future requests.  The response contains a redirect URL which the consent provider should redirect the user-agent to.  The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please head over to the OAuth 2.0 documentation.
     * Accept OAuth 2.0 Consent Request
     * @param param the request object
     */
    public acceptOAuth2ConsentRequest(param: OAuth2ApiAcceptOAuth2ConsentRequestRequest, options?: Configuration): Promise<OAuth2RedirectTo> {
        return this.api.acceptOAuth2ConsentRequest(param.consentChallenge, param.acceptOAuth2ConsentRequest,  options).toPromise();
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell the Ory OAuth2 Service about it.  The authentication challenge is appended to the login provider URL to which the subject\'s user-agent (browser) is redirected to. The login provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.  This endpoint tells Ory that the subject has successfully authenticated and includes additional information such as the subject\'s ID and if Ory should remember the subject\'s subject agent for future authentication attempts by setting a cookie.  The response contains a redirect URL which the login provider should redirect the user-agent to.
     * Accept OAuth 2.0 Login Request
     * @param param the request object
     */
    public acceptOAuth2LoginRequest(param: OAuth2ApiAcceptOAuth2LoginRequestRequest, options?: Configuration): Promise<OAuth2RedirectTo> {
        return this.api.acceptOAuth2LoginRequest(param.loginChallenge, param.acceptOAuth2LoginRequest,  options).toPromise();
    }

    /**
     * When a user or an application requests Ory OAuth 2.0 to remove the session state of a subject, this endpoint is used to confirm that logout request.  The response contains a redirect URL which the consent provider should redirect the user-agent to.
     * Accept OAuth 2.0 Session Logout Request
     * @param param the request object
     */
    public acceptOAuth2LogoutRequest(param: OAuth2ApiAcceptOAuth2LogoutRequestRequest, options?: Configuration): Promise<OAuth2RedirectTo> {
        return this.api.acceptOAuth2LogoutRequest(param.logoutChallenge,  options).toPromise();
    }

    /**
     * Create a new OAuth 2.0 client. If you pass `client_secret` the secret is used, otherwise a random secret is generated. The secret is echoed in the response. It is not possible to retrieve it later on.
     * Create OAuth 2.0 Client
     * @param param the request object
     */
    public createOAuth2Client(param: OAuth2ApiCreateOAuth2ClientRequest, options?: Configuration): Promise<OAuth2Client> {
        return this.api.createOAuth2Client(param.oAuth2Client,  options).toPromise();
    }

    /**
     * Delete an existing OAuth 2.0 Client by its ID.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.  Make sure that this endpoint is well protected and only callable by first-party components.
     * Delete OAuth 2.0 Client
     * @param param the request object
     */
    public deleteOAuth2Client(param: OAuth2ApiDeleteOAuth2ClientRequest, options?: Configuration): Promise<void> {
        return this.api.deleteOAuth2Client(param.id,  options).toPromise();
    }

    /**
     * This endpoint deletes OAuth2 access tokens issued to an OAuth 2.0 Client from the database.
     * Delete OAuth 2.0 Access Tokens from specific OAuth 2.0 Client
     * @param param the request object
     */
    public deleteOAuth2Token(param: OAuth2ApiDeleteOAuth2TokenRequest, options?: Configuration): Promise<void> {
        return this.api.deleteOAuth2Token(param.clientId,  options).toPromise();
    }

    /**
     * Use this endpoint to delete trusted JWT Bearer Grant Type Issuer. The ID is the one returned when you created the trust relationship.  Once deleted, the associated issuer will no longer be able to perform the JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grant.
     * Delete Trusted OAuth2 JWT Bearer Grant Type Issuer
     * @param param the request object
     */
    public deleteTrustedOAuth2JwtGrantIssuer(param: OAuth2ApiDeleteTrustedOAuth2JwtGrantIssuerRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTrustedOAuth2JwtGrantIssuer(param.id,  options).toPromise();
    }

    /**
     * Get an OAuth 2.0 client by its ID. This endpoint never returns the client secret.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Get an OAuth 2.0 Client
     * @param param the request object
     */
    public getOAuth2Client(param: OAuth2ApiGetOAuth2ClientRequest, options?: Configuration): Promise<OAuth2Client> {
        return this.api.getOAuth2Client(param.id,  options).toPromise();
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject\'s behalf.  The consent challenge is appended to the consent provider\'s URL to which the subject\'s user-agent (browser) is redirected to. The consent provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted or rejected the request.  The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please head over to the OAuth 2.0 documentation.
     * Get OAuth 2.0 Consent Request
     * @param param the request object
     */
    public getOAuth2ConsentRequest(param: OAuth2ApiGetOAuth2ConsentRequestRequest, options?: Configuration): Promise<OAuth2ConsentRequest> {
        return this.api.getOAuth2ConsentRequest(param.consentChallenge,  options).toPromise();
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell the Ory OAuth2 Service about it.  Per default, the login provider is Ory itself. You may use a different login provider which needs to be a web-app you write and host, and it must be able to authenticate (\"show the subject a login screen\") a subject (in OAuth2 the proper name for subject is \"resource owner\").  The authentication challenge is appended to the login provider URL to which the subject\'s user-agent (browser) is redirected to. The login provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.
     * Get OAuth 2.0 Login Request
     * @param param the request object
     */
    public getOAuth2LoginRequest(param: OAuth2ApiGetOAuth2LoginRequestRequest, options?: Configuration): Promise<OAuth2LoginRequest> {
        return this.api.getOAuth2LoginRequest(param.loginChallenge,  options).toPromise();
    }

    /**
     * Use this endpoint to fetch an Ory OAuth 2.0 logout request.
     * Get OAuth 2.0 Session Logout Request
     * @param param the request object
     */
    public getOAuth2LogoutRequest(param: OAuth2ApiGetOAuth2LogoutRequestRequest, options?: Configuration): Promise<OAuth2LogoutRequest> {
        return this.api.getOAuth2LogoutRequest(param.logoutChallenge,  options).toPromise();
    }

    /**
     * Use this endpoint to get a trusted JWT Bearer Grant Type Issuer. The ID is the one returned when you created the trust relationship.
     * Get Trusted OAuth2 JWT Bearer Grant Type Issuer
     * @param param the request object
     */
    public getTrustedOAuth2JwtGrantIssuer(param: OAuth2ApiGetTrustedOAuth2JwtGrantIssuerRequest, options?: Configuration): Promise<TrustedOAuth2JwtGrantIssuer> {
        return this.api.getTrustedOAuth2JwtGrantIssuer(param.id,  options).toPromise();
    }

    /**
     * The introspection endpoint allows to check if a token (both refresh and access) is active or not. An active token is neither expired nor revoked. If a token is active, additional information on the token will be included. You can set additional data for a token by setting `session.access_token` during the consent flow.
     * Introspect OAuth2 Access and Refresh Tokens
     * @param param the request object
     */
    public introspectOAuth2Token(param: OAuth2ApiIntrospectOAuth2TokenRequest, options?: Configuration): Promise<IntrospectedOAuth2Token> {
        return this.api.introspectOAuth2Token(param.token, param.scope,  options).toPromise();
    }

    /**
     * This endpoint lists all clients in the database, and never returns client secrets. As a default it lists the first 100 clients.
     * List OAuth 2.0 Clients
     * @param param the request object
     */
    public listOAuth2Clients(param: OAuth2ApiListOAuth2ClientsRequest = {}, options?: Configuration): Promise<Array<OAuth2Client>> {
        return this.api.listOAuth2Clients(param.pageSize, param.pageToken, param.clientName, param.owner,  options).toPromise();
    }

    /**
     * This endpoint lists all subject\'s granted consent sessions, including client and granted scope. If the subject is unknown or has not granted any consent sessions yet, the endpoint returns an empty JSON array with status code 200 OK.
     * List OAuth 2.0 Consent Sessions of a Subject
     * @param param the request object
     */
    public listOAuth2ConsentSessions(param: OAuth2ApiListOAuth2ConsentSessionsRequest, options?: Configuration): Promise<Array<OAuth2ConsentSession>> {
        return this.api.listOAuth2ConsentSessions(param.subject, param.pageSize, param.pageToken, param.loginSessionId,  options).toPromise();
    }

    /**
     * Use this endpoint to list all trusted JWT Bearer Grant Type Issuers.
     * List Trusted OAuth2 JWT Bearer Grant Type Issuers
     * @param param the request object
     */
    public listTrustedOAuth2JwtGrantIssuers(param: OAuth2ApiListTrustedOAuth2JwtGrantIssuersRequest = {}, options?: Configuration): Promise<Array<TrustedOAuth2JwtGrantIssuer>> {
        return this.api.listTrustedOAuth2JwtGrantIssuers(param.maxItems, param.defaultItems, param.issuer,  options).toPromise();
    }

    /**
     * Use open source libraries to perform OAuth 2.0 and OpenID Connect available for any programming language. You can find a list of libraries at https://oauth.net/code/  The Ory SDK is not yet able to this endpoint properly.
     * OAuth 2.0 Authorize Endpoint
     * @param param the request object
     */
    public oAuth2Authorize(param: OAuth2ApiOAuth2AuthorizeRequest = {}, options?: Configuration): Promise<void> {
        return this.api.oAuth2Authorize( options).toPromise();
    }

    /**
     * Use open source libraries to perform OAuth 2.0 and OpenID Connect available for any programming language. You can find a list of libraries here https://oauth.net/code/  The Ory SDK is not yet able to this endpoint properly.
     * The OAuth 2.0 Token Endpoint
     * @param param the request object
     */
    public oauth2TokenExchange(param: OAuth2ApiOauth2TokenExchangeRequest, options?: Configuration): Promise<OAuth2TokenExchange> {
        return this.api.oauth2TokenExchange(param.grantType, param.clientId, param.code, param.redirectUri, param.refreshToken,  options).toPromise();
    }

    /**
     * Patch an existing OAuth 2.0 Client using JSON Patch. If you pass `client_secret` the secret will be updated and returned via the API. This is the only time you will be able to retrieve the client secret, so write it down and keep it safe.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Patch OAuth 2.0 Client
     * @param param the request object
     */
    public patchOAuth2Client(param: OAuth2ApiPatchOAuth2ClientRequest, options?: Configuration): Promise<OAuth2Client> {
        return this.api.patchOAuth2Client(param.id, param.jsonPatch,  options).toPromise();
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject\'s behalf.  The consent challenge is appended to the consent provider\'s URL to which the subject\'s user-agent (browser) is redirected to. The consent provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted or rejected the request.  This endpoint tells Ory that the subject has not authorized the OAuth 2.0 client to access resources on his/her behalf. The consent provider must include a reason why the consent was not granted.  The response contains a redirect URL which the consent provider should redirect the user-agent to.  The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please head over to the OAuth 2.0 documentation.
     * Reject OAuth 2.0 Consent Request
     * @param param the request object
     */
    public rejectOAuth2ConsentRequest(param: OAuth2ApiRejectOAuth2ConsentRequestRequest, options?: Configuration): Promise<OAuth2RedirectTo> {
        return this.api.rejectOAuth2ConsentRequest(param.consentChallenge, param.rejectOAuth2Request,  options).toPromise();
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell the Ory OAuth2 Service about it.  The authentication challenge is appended to the login provider URL to which the subject\'s user-agent (browser) is redirected to. The login provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.  This endpoint tells Ory that the subject has not authenticated and includes a reason why the authentication was denied.  The response contains a redirect URL which the login provider should redirect the user-agent to.
     * Reject OAuth 2.0 Login Request
     * @param param the request object
     */
    public rejectOAuth2LoginRequest(param: OAuth2ApiRejectOAuth2LoginRequestRequest, options?: Configuration): Promise<OAuth2RedirectTo> {
        return this.api.rejectOAuth2LoginRequest(param.loginChallenge, param.rejectOAuth2Request,  options).toPromise();
    }

    /**
     * When a user or an application requests Ory OAuth 2.0 to remove the session state of a subject, this endpoint is used to deny that logout request. No HTTP request body is required.  The response is empty as the logout provider has to chose what action to perform next.
     * Reject OAuth 2.0 Session Logout Request
     * @param param the request object
     */
    public rejectOAuth2LogoutRequest(param: OAuth2ApiRejectOAuth2LogoutRequestRequest, options?: Configuration): Promise<void> {
        return this.api.rejectOAuth2LogoutRequest(param.logoutChallenge,  options).toPromise();
    }

    /**
     * This endpoint revokes a subject\'s granted consent sessions and invalidates all associated OAuth 2.0 Access Tokens. You may also only revoke sessions for a specific OAuth 2.0 Client ID.
     * Revoke OAuth 2.0 Consent Sessions of a Subject
     * @param param the request object
     */
    public revokeOAuth2ConsentSessions(param: OAuth2ApiRevokeOAuth2ConsentSessionsRequest, options?: Configuration): Promise<void> {
        return this.api.revokeOAuth2ConsentSessions(param.subject, param.client, param.all,  options).toPromise();
    }

    /**
     * This endpoint invalidates authentication sessions. After revoking the authentication session(s), the subject has to re-authenticate at the Ory OAuth2 Provider. This endpoint does not invalidate any tokens.  If you send the subject in a query param, all authentication sessions that belong to that subject are revoked. No OpennID Connect Front- or Back-channel logout is performed in this case.  Alternatively, you can send a SessionID via `sid` query param, in which case, only the session that is connected to that SessionID is revoked. OpenID Connect Back-channel logout is performed in this case.
     * Revokes OAuth 2.0 Login Sessions by either a Subject or a SessionID
     * @param param the request object
     */
    public revokeOAuth2LoginSessions(param: OAuth2ApiRevokeOAuth2LoginSessionsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.revokeOAuth2LoginSessions(param.subject, param.sid,  options).toPromise();
    }

    /**
     * Revoking a token (both access and refresh) means that the tokens will be invalid. A revoked access token can no longer be used to make access requests, and a revoked refresh token can no longer be used to refresh an access token. Revoking a refresh token also invalidates the access token that was created with it. A token may only be revoked by the client the token was generated for.
     * Revoke OAuth 2.0 Access or Refresh Token
     * @param param the request object
     */
    public revokeOAuth2Token(param: OAuth2ApiRevokeOAuth2TokenRequest, options?: Configuration): Promise<void> {
        return this.api.revokeOAuth2Token(param.token, param.clientId, param.clientSecret,  options).toPromise();
    }

    /**
     * Replaces an existing OAuth 2.0 Client with the payload you send. If you pass `client_secret` the secret is used, otherwise the existing secret is used.  If set, the secret is echoed in the response. It is not possible to retrieve it later on.  OAuth 2.0 Clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Set OAuth 2.0 Client
     * @param param the request object
     */
    public setOAuth2Client(param: OAuth2ApiSetOAuth2ClientRequest, options?: Configuration): Promise<OAuth2Client> {
        return this.api.setOAuth2Client(param.id, param.oAuth2Client,  options).toPromise();
    }

    /**
     * Set lifespans of different token types issued for this OAuth 2.0 client. Does not modify other fields.
     * Set OAuth2 Client Token Lifespans
     * @param param the request object
     */
    public setOAuth2ClientLifespans(param: OAuth2ApiSetOAuth2ClientLifespansRequest, options?: Configuration): Promise<OAuth2Client> {
        return this.api.setOAuth2ClientLifespans(param.id, param.oAuth2ClientTokenLifespans,  options).toPromise();
    }

    /**
     * Use this endpoint to establish a trust relationship for a JWT issuer to perform JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants [RFC7523](https://datatracker.ietf.org/doc/html/rfc7523).
     * Trust OAuth2 JWT Bearer Grant Type Issuer
     * @param param the request object
     */
    public trustOAuth2JwtGrantIssuer(param: OAuth2ApiTrustOAuth2JwtGrantIssuerRequest = {}, options?: Configuration): Promise<TrustedOAuth2JwtGrantIssuer> {
        return this.api.trustOAuth2JwtGrantIssuer(param.trustOAuth2JwtGrantIssuer,  options).toPromise();
    }

}

import { ObservableOidcApi } from "./ObservableAPI.ts";
import { OidcApiRequestFactory, OidcApiResponseProcessor} from "../apis/OidcApi.ts";

export interface OidcApiCreateOidcDynamicClientRequest {
    /**
     * Dynamic Client Registration Request Body
     * @type OAuth2Client
     * @memberof OidcApicreateOidcDynamicClient
     */
    oAuth2Client: OAuth2Client
}

export interface OidcApiDeleteOidcDynamicClientRequest {
    /**
     * The id of the OAuth 2.0 Client.
     * @type string
     * @memberof OidcApideleteOidcDynamicClient
     */
    id: string
}

export interface OidcApiDiscoverOidcConfigurationRequest {
}

export interface OidcApiGetOidcDynamicClientRequest {
    /**
     * The id of the OAuth 2.0 Client.
     * @type string
     * @memberof OidcApigetOidcDynamicClient
     */
    id: string
}

export interface OidcApiGetOidcUserInfoRequest {
}

export interface OidcApiRevokeOidcSessionRequest {
}

export interface OidcApiSetOidcDynamicClientRequest {
    /**
     * OAuth 2.0 Client ID
     * @type string
     * @memberof OidcApisetOidcDynamicClient
     */
    id: string
    /**
     * OAuth 2.0 Client Request Body
     * @type OAuth2Client
     * @memberof OidcApisetOidcDynamicClient
     */
    oAuth2Client: OAuth2Client
}

export class ObjectOidcApi {
    private api: ObservableOidcApi

    public constructor(configuration: Configuration, requestFactory?: OidcApiRequestFactory, responseProcessor?: OidcApiResponseProcessor) {
        this.api = new ObservableOidcApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint behaves like the administrative counterpart (`createOAuth2Client`) but is capable of facing the public internet directly and can be used in self-service. It implements the OpenID Connect Dynamic Client Registration Protocol. This feature needs to be enabled in the configuration. This endpoint is disabled by default. It can be enabled by an administrator.  Please note that using this endpoint you are not able to choose the `client_secret` nor the `client_id` as those values will be server generated when specifying `token_endpoint_auth_method` as `client_secret_basic` or `client_secret_post`.  The `client_secret` will be returned in the response and you will not be able to retrieve it later on. Write the secret down and keep it somewhere safe.
     * Register OAuth2 Client using OpenID Dynamic Client Registration
     * @param param the request object
     */
    public createOidcDynamicClient(param: OidcApiCreateOidcDynamicClientRequest, options?: Configuration): Promise<OAuth2Client> {
        return this.api.createOidcDynamicClient(param.oAuth2Client,  options).toPromise();
    }

    /**
     * This endpoint behaves like the administrative counterpart (`deleteOAuth2Client`) but is capable of facing the public internet directly and can be used in self-service. It implements the OpenID Connect Dynamic Client Registration Protocol. This feature needs to be enabled in the configuration. This endpoint is disabled by default. It can be enabled by an administrator.  To use this endpoint, you will need to present the client\'s authentication credentials. If the OAuth2 Client uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query. If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Delete OAuth 2.0 Client using the OpenID Dynamic Client Registration Management Protocol
     * @param param the request object
     */
    public deleteOidcDynamicClient(param: OidcApiDeleteOidcDynamicClientRequest, options?: Configuration): Promise<void> {
        return this.api.deleteOidcDynamicClient(param.id,  options).toPromise();
    }

    /**
     * A mechanism for an OpenID Connect Relying Party to discover the End-User\'s OpenID Provider and obtain information needed to interact with it, including its OAuth 2.0 endpoint locations.  Popular libraries for OpenID Connect clients include oidc-client-js (JavaScript), go-oidc (Golang), and others. For a full list of clients go here: https://openid.net/developers/certified/
     * OpenID Connect Discovery
     * @param param the request object
     */
    public discoverOidcConfiguration(param: OidcApiDiscoverOidcConfigurationRequest = {}, options?: Configuration): Promise<OidcConfiguration> {
        return this.api.discoverOidcConfiguration( options).toPromise();
    }

    /**
     * This endpoint behaves like the administrative counterpart (`getOAuth2Client`) but is capable of facing the public internet directly and can be used in self-service. It implements the OpenID Connect Dynamic Client Registration Protocol.  To use this endpoint, you will need to present the client\'s authentication credentials. If the OAuth2 Client uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query. If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.
     * Get OAuth2 Client using OpenID Dynamic Client Registration
     * @param param the request object
     */
    public getOidcDynamicClient(param: OidcApiGetOidcDynamicClientRequest, options?: Configuration): Promise<OAuth2Client> {
        return this.api.getOidcDynamicClient(param.id,  options).toPromise();
    }

    /**
     * This endpoint returns the payload of the ID Token, including `session.id_token` values, of the provided OAuth 2.0 Access Token\'s consent request.  In the case of authentication error, a WWW-Authenticate header might be set in the response with more information about the error. See [the spec](https://datatracker.ietf.org/doc/html/rfc6750#section-3) for more details about header format.
     * OpenID Connect Userinfo
     * @param param the request object
     */
    public getOidcUserInfo(param: OidcApiGetOidcUserInfoRequest = {}, options?: Configuration): Promise<OidcUserInfo> {
        return this.api.getOidcUserInfo( options).toPromise();
    }

    /**
     * This endpoint initiates and completes user logout at the Ory OAuth2 & OpenID provider and initiates OpenID Connect Front- / Back-channel logout:  https://openid.net/specs/openid-connect-frontchannel-1_0.html https://openid.net/specs/openid-connect-backchannel-1_0.html  Back-channel logout is performed asynchronously and does not affect logout flow.
     * OpenID Connect Front- and Back-channel Enabled Logout
     * @param param the request object
     */
    public revokeOidcSession(param: OidcApiRevokeOidcSessionRequest = {}, options?: Configuration): Promise<void> {
        return this.api.revokeOidcSession( options).toPromise();
    }

    /**
     * This endpoint behaves like the administrative counterpart (`setOAuth2Client`) but is capable of facing the public internet directly to be used by third parties. It implements the OpenID Connect Dynamic Client Registration Protocol.  This feature is disabled per default. It can be enabled by a system administrator.  If you pass `client_secret` the secret is used, otherwise the existing secret is used. If set, the secret is echoed in the response. It is not possible to retrieve it later on.  To use this endpoint, you will need to present the client\'s authentication credentials. If the OAuth2 Client uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query. If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Set OAuth2 Client using OpenID Dynamic Client Registration
     * @param param the request object
     */
    public setOidcDynamicClient(param: OidcApiSetOidcDynamicClientRequest, options?: Configuration): Promise<OAuth2Client> {
        return this.api.setOidcDynamicClient(param.id, param.oAuth2Client,  options).toPromise();
    }

}

import { ObservablePermissionApi } from "./ObservableAPI.ts";
import { PermissionApiRequestFactory, PermissionApiResponseProcessor} from "../apis/PermissionApi.ts";

export interface PermissionApiCheckPermissionRequest {
    /**
     * Namespace of the Relationship
     * @type string
     * @memberof PermissionApicheckPermission
     */
    namespace?: string
    /**
     * Object of the Relationship
     * @type string
     * @memberof PermissionApicheckPermission
     */
    object?: string
    /**
     * Relation of the Relationship
     * @type string
     * @memberof PermissionApicheckPermission
     */
    relation?: string
    /**
     * SubjectID of the Relationship
     * @type string
     * @memberof PermissionApicheckPermission
     */
    subjectId?: string
    /**
     * Namespace of the Subject Set
     * @type string
     * @memberof PermissionApicheckPermission
     */
    subjectSetNamespace?: string
    /**
     * Object of the Subject Set
     * @type string
     * @memberof PermissionApicheckPermission
     */
    subjectSetObject?: string
    /**
     * Relation of the Subject Set
     * @type string
     * @memberof PermissionApicheckPermission
     */
    subjectSetRelation?: string
    /**
     * 
     * @type number
     * @memberof PermissionApicheckPermission
     */
    maxDepth?: number
}

export interface PermissionApiCheckPermissionOrErrorRequest {
    /**
     * Namespace of the Relationship
     * @type string
     * @memberof PermissionApicheckPermissionOrError
     */
    namespace?: string
    /**
     * Object of the Relationship
     * @type string
     * @memberof PermissionApicheckPermissionOrError
     */
    object?: string
    /**
     * Relation of the Relationship
     * @type string
     * @memberof PermissionApicheckPermissionOrError
     */
    relation?: string
    /**
     * SubjectID of the Relationship
     * @type string
     * @memberof PermissionApicheckPermissionOrError
     */
    subjectId?: string
    /**
     * Namespace of the Subject Set
     * @type string
     * @memberof PermissionApicheckPermissionOrError
     */
    subjectSetNamespace?: string
    /**
     * Object of the Subject Set
     * @type string
     * @memberof PermissionApicheckPermissionOrError
     */
    subjectSetObject?: string
    /**
     * Relation of the Subject Set
     * @type string
     * @memberof PermissionApicheckPermissionOrError
     */
    subjectSetRelation?: string
    /**
     * 
     * @type number
     * @memberof PermissionApicheckPermissionOrError
     */
    maxDepth?: number
}

export interface PermissionApiExpandPermissionsRequest {
    /**
     * Namespace of the Subject Set
     * @type string
     * @memberof PermissionApiexpandPermissions
     */
    namespace: string
    /**
     * Object of the Subject Set
     * @type string
     * @memberof PermissionApiexpandPermissions
     */
    object: string
    /**
     * Relation of the Subject Set
     * @type string
     * @memberof PermissionApiexpandPermissions
     */
    relation: string
    /**
     * 
     * @type number
     * @memberof PermissionApiexpandPermissions
     */
    maxDepth?: number
}

export interface PermissionApiPostCheckPermissionRequest {
    /**
     * 
     * @type number
     * @memberof PermissionApipostCheckPermission
     */
    maxDepth?: number
    /**
     * 
     * @type PostCheckPermissionBody
     * @memberof PermissionApipostCheckPermission
     */
    postCheckPermissionBody?: PostCheckPermissionBody
}

export interface PermissionApiPostCheckPermissionOrErrorRequest {
    /**
     * nolint:deadcode,unused
     * @type number
     * @memberof PermissionApipostCheckPermissionOrError
     */
    maxDepth?: number
    /**
     * 
     * @type PostCheckPermissionOrErrorBody
     * @memberof PermissionApipostCheckPermissionOrError
     */
    postCheckPermissionOrErrorBody?: PostCheckPermissionOrErrorBody
}

export class ObjectPermissionApi {
    private api: ObservablePermissionApi

    public constructor(configuration: Configuration, requestFactory?: PermissionApiRequestFactory, responseProcessor?: PermissionApiResponseProcessor) {
        this.api = new ObservablePermissionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param param the request object
     */
    public checkPermission(param: PermissionApiCheckPermissionRequest = {}, options?: Configuration): Promise<CheckPermissionResult> {
        return this.api.checkPermission(param.namespace, param.object, param.relation, param.subjectId, param.subjectSetNamespace, param.subjectSetObject, param.subjectSetRelation, param.maxDepth,  options).toPromise();
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param param the request object
     */
    public checkPermissionOrError(param: PermissionApiCheckPermissionOrErrorRequest = {}, options?: Configuration): Promise<CheckPermissionResult> {
        return this.api.checkPermissionOrError(param.namespace, param.object, param.relation, param.subjectId, param.subjectSetNamespace, param.subjectSetObject, param.subjectSetRelation, param.maxDepth,  options).toPromise();
    }

    /**
     * Use this endpoint to expand a relationship tuple into permissions.
     * Expand a Relationship into permissions.
     * @param param the request object
     */
    public expandPermissions(param: PermissionApiExpandPermissionsRequest, options?: Configuration): Promise<ExpandedPermissionTree> {
        return this.api.expandPermissions(param.namespace, param.object, param.relation, param.maxDepth,  options).toPromise();
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param param the request object
     */
    public postCheckPermission(param: PermissionApiPostCheckPermissionRequest = {}, options?: Configuration): Promise<CheckPermissionResult> {
        return this.api.postCheckPermission(param.maxDepth, param.postCheckPermissionBody,  options).toPromise();
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param param the request object
     */
    public postCheckPermissionOrError(param: PermissionApiPostCheckPermissionOrErrorRequest = {}, options?: Configuration): Promise<CheckPermissionResult> {
        return this.api.postCheckPermissionOrError(param.maxDepth, param.postCheckPermissionOrErrorBody,  options).toPromise();
    }

}

import { ObservableProjectApi } from "./ObservableAPI.ts";
import { ProjectApiRequestFactory, ProjectApiResponseProcessor} from "../apis/ProjectApi.ts";

export interface ProjectApiCreateProjectRequest {
    /**
     * 
     * @type CreateProjectBody
     * @memberof ProjectApicreateProject
     */
    createProjectBody?: CreateProjectBody
}

export interface ProjectApiCreateProjectApiKeyRequest {
    /**
     * The Project ID or Project slug
     * @type string
     * @memberof ProjectApicreateProjectApiKey
     */
    project: string
    /**
     * 
     * @type CreateProjectApiKeyRequest
     * @memberof ProjectApicreateProjectApiKey
     */
    createProjectApiKeyRequest?: CreateProjectApiKeyRequest
}

export interface ProjectApiDeleteProjectApiKeyRequest {
    /**
     * The Project ID or Project slug
     * @type string
     * @memberof ProjectApideleteProjectApiKey
     */
    project: string
    /**
     * The Token ID
     * @type string
     * @memberof ProjectApideleteProjectApiKey
     */
    tokenId: string
}

export interface ProjectApiGetActiveProjectInConsoleRequest {
}

export interface ProjectApiGetProjectRequest {
    /**
     * Project ID  The project\&#39;s ID.
     * @type string
     * @memberof ProjectApigetProject
     */
    projectId: string
}

export interface ProjectApiGetProjectMembersRequest {
    /**
     * Project ID  The project\&#39;s ID.
     * @type string
     * @memberof ProjectApigetProjectMembers
     */
    projectId: string
}

export interface ProjectApiGetProjectMetricsRequest {
    /**
     * Project ID
     * @type string
     * @memberof ProjectApigetProjectMetrics
     */
    projectId: string
    /**
     * The event type to query for
     * @type string
     * @memberof ProjectApigetProjectMetrics
     */
    eventType: string
    /**
     * The resolution of the buckets  The minimum resolution is 1 hour.
     * @type string
     * @memberof ProjectApigetProjectMetrics
     */
    resolution: string
    /**
     * The start time of the time window
     * @type Date
     * @memberof ProjectApigetProjectMetrics
     */
    _from: Date
    /**
     * The end time of the time window
     * @type Date
     * @memberof ProjectApigetProjectMetrics
     */
    to: Date
}

export interface ProjectApiListProjectApiKeysRequest {
    /**
     * The Project ID or Project slug
     * @type string
     * @memberof ProjectApilistProjectApiKeys
     */
    project: string
}

export interface ProjectApiListProjectsRequest {
}

export interface ProjectApiPatchProjectRequest {
    /**
     * Project ID  The project\&#39;s ID.
     * @type string
     * @memberof ProjectApipatchProject
     */
    projectId: string
    /**
     * 
     * @type Array&lt;JsonPatch&gt;
     * @memberof ProjectApipatchProject
     */
    jsonPatch?: Array<JsonPatch>
}

export interface ProjectApiPurgeProjectRequest {
    /**
     * Project ID  The project\&#39;s ID.
     * @type string
     * @memberof ProjectApipurgeProject
     */
    projectId: string
}

export interface ProjectApiRemoveProjectMemberRequest {
    /**
     * Project ID  The project\&#39;s ID.
     * @type string
     * @memberof ProjectApiremoveProjectMember
     */
    projectId: string
    /**
     * Member ID
     * @type string
     * @memberof ProjectApiremoveProjectMember
     */
    memberId: string
}

export interface ProjectApiSetActiveProjectInConsoleRequest {
    /**
     * 
     * @type SetActiveProjectInConsoleBody
     * @memberof ProjectApisetActiveProjectInConsole
     */
    setActiveProjectInConsoleBody?: SetActiveProjectInConsoleBody
}

export interface ProjectApiSetProjectRequest {
    /**
     * Project ID  The project\&#39;s ID.
     * @type string
     * @memberof ProjectApisetProject
     */
    projectId: string
    /**
     * 
     * @type SetProject
     * @memberof ProjectApisetProject
     */
    setProject?: SetProject
}

export class ObjectProjectApi {
    private api: ObservableProjectApi

    public constructor(configuration: Configuration, requestFactory?: ProjectApiRequestFactory, responseProcessor?: ProjectApiResponseProcessor) {
        this.api = new ObservableProjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new project.
     * Create a Project
     * @param param the request object
     */
    public createProject(param: ProjectApiCreateProjectRequest = {}, options?: Configuration): Promise<Project> {
        return this.api.createProject(param.createProjectBody,  options).toPromise();
    }

    /**
     * Create an API token for a project.
     * Create project API token
     * @param param the request object
     */
    public createProjectApiKey(param: ProjectApiCreateProjectApiKeyRequest, options?: Configuration): Promise<ProjectApiKey> {
        return this.api.createProjectApiKey(param.project, param.createProjectApiKeyRequest,  options).toPromise();
    }

    /**
     * Deletes an API token and immediately removes it.
     * Delete project API token
     * @param param the request object
     */
    public deleteProjectApiKey(param: ProjectApiDeleteProjectApiKeyRequest, options?: Configuration): Promise<void> {
        return this.api.deleteProjectApiKey(param.project, param.tokenId,  options).toPromise();
    }

    /**
     * Use this API to get your active project in the Ory Network Console UI.
     * Returns the Ory Network Project selected in the Ory Network Console
     * @param param the request object
     */
    public getActiveProjectInConsole(param: ProjectApiGetActiveProjectInConsoleRequest = {}, options?: Configuration): Promise<ActiveProjectInConsole> {
        return this.api.getActiveProjectInConsole( options).toPromise();
    }

    /**
     * Get a projects you have access to by its ID.
     * Get a Project
     * @param param the request object
     */
    public getProject(param: ProjectApiGetProjectRequest, options?: Configuration): Promise<Project> {
        return this.api.getProject(param.projectId,  options).toPromise();
    }

    /**
     * This endpoint requires the user to be a member of the project with the role `OWNER` or `DEVELOPER`.
     * Get all members associated with this project
     * @param param the request object
     */
    public getProjectMembers(param: ProjectApiGetProjectMembersRequest, options?: Configuration): Promise<Array<CloudAccount>> {
        return this.api.getProjectMembers(param.projectId,  options).toPromise();
    }

    /**
     * Retrieves project metrics for the specified event type and time range
     * @param param the request object
     */
    public getProjectMetrics(param: ProjectApiGetProjectMetricsRequest, options?: Configuration): Promise<GetProjectMetricsResponse> {
        return this.api.getProjectMetrics(param.projectId, param.eventType, param.resolution, param._from, param.to,  options).toPromise();
    }

    /**
     * A list of all the project\'s API tokens.
     * List a project\'s API Tokens
     * @param param the request object
     */
    public listProjectApiKeys(param: ProjectApiListProjectApiKeysRequest, options?: Configuration): Promise<Array<ProjectApiKey>> {
        return this.api.listProjectApiKeys(param.project,  options).toPromise();
    }

    /**
     * Lists all projects you have access to.
     * List All Projects
     * @param param the request object
     */
    public listProjects(param: ProjectApiListProjectsRequest = {}, options?: Configuration): Promise<Array<ProjectMetadata>> {
        return this.api.listProjects( options).toPromise();
    }

    /**
     * Deprecated: Use the `patchProjectWithRevision` endpoint instead to specify the exact revision the patch was generated for.  This endpoints allows you to patch individual Ory Network project configuration keys for Ory\'s services (identity, permission, ...). The configuration format is fully compatible with the open source projects for the respective services (e.g. Ory Kratos for Identity, Ory Keto for Permissions).  This endpoint expects the `version` key to be set in the payload. If it is unset, it will try to import the config as if it is from the most recent version.  If you have an older version of a configuration, you should set the version key in the payload!  While this endpoint is able to process all configuration items related to features (e.g. password reset), it does not support operational configuration items (e.g. port, tracing, logging) otherwise available in the open source.  For configuration items that can not be translated to the Ory Network, this endpoint will return a list of warnings to help you understand which parts of your config could not be processed.
     * Patch an Ory Network Project Configuration
     * @param param the request object
     */
    public patchProject(param: ProjectApiPatchProjectRequest, options?: Configuration): Promise<SuccessfulProjectUpdate> {
        return this.api.patchProject(param.projectId, param.jsonPatch,  options).toPromise();
    }

    /**
     * !! Use with extreme caution !!  Using this API endpoint you can purge (completely delete) a project and its data. This action can not be undone and will delete ALL your data.  !! Use with extreme caution !!
     * Irrecoverably purge a project
     * @param param the request object
     */
    public purgeProject(param: ProjectApiPurgeProjectRequest, options?: Configuration): Promise<void> {
        return this.api.purgeProject(param.projectId,  options).toPromise();
    }

    /**
     * This also sets their invite status to `REMOVED`. This endpoint requires the user to be a member of the project with the role `OWNER`.
     * Remove a member associated with this project
     * @param param the request object
     */
    public removeProjectMember(param: ProjectApiRemoveProjectMemberRequest, options?: Configuration): Promise<void> {
        return this.api.removeProjectMember(param.projectId, param.memberId,  options).toPromise();
    }

    /**
     * Use this API to set your active project in the Ory Network Console UI.
     * Sets the Ory Network Project active in the Ory Network Console
     * @param param the request object
     */
    public setActiveProjectInConsole(param: ProjectApiSetActiveProjectInConsoleRequest = {}, options?: Configuration): Promise<void> {
        return this.api.setActiveProjectInConsole(param.setActiveProjectInConsoleBody,  options).toPromise();
    }

    /**
     * This endpoints allows you to update the Ory Network project configuration for individual services (identity, permission, ...). The configuration is fully compatible with the open source projects for the respective services (e.g. Ory Kratos for Identity, Ory Keto for Permissions).  This endpoint expects the `version` key to be set in the payload. If it is unset, it will try to import the config as if it is from the most recent version.  If you have an older version of a configuration, you should set the version key in the payload!  While this endpoint is able to process all configuration items related to features (e.g. password reset), it does not support operational configuration items (e.g. port, tracing, logging) otherwise available in the open source.  For configuration items that can not be translated to the Ory Network, this endpoint will return a list of warnings to help you understand which parts of your config could not be processed.  Be aware that updating any service\'s configuration will completely override your current configuration for that service!
     * Update an Ory Network Project Configuration
     * @param param the request object
     */
    public setProject(param: ProjectApiSetProjectRequest, options?: Configuration): Promise<SuccessfulProjectUpdate> {
        return this.api.setProject(param.projectId, param.setProject,  options).toPromise();
    }

}

import { ObservableRelationshipApi } from "./ObservableAPI.ts";
import { RelationshipApiRequestFactory, RelationshipApiResponseProcessor} from "../apis/RelationshipApi.ts";

export interface RelationshipApiCheckOplSyntaxRequest {
    /**
     * 
     * @type string
     * @memberof RelationshipApicheckOplSyntax
     */
    body?: string
}

export interface RelationshipApiCreateRelationshipRequest {
    /**
     * 
     * @type CreateRelationshipBody
     * @memberof RelationshipApicreateRelationship
     */
    createRelationshipBody?: CreateRelationshipBody
}

export interface RelationshipApiDeleteRelationshipsRequest {
    /**
     * Namespace of the Relationship
     * @type string
     * @memberof RelationshipApideleteRelationships
     */
    namespace?: string
    /**
     * Object of the Relationship
     * @type string
     * @memberof RelationshipApideleteRelationships
     */
    object?: string
    /**
     * Relation of the Relationship
     * @type string
     * @memberof RelationshipApideleteRelationships
     */
    relation?: string
    /**
     * SubjectID of the Relationship
     * @type string
     * @memberof RelationshipApideleteRelationships
     */
    subjectId?: string
    /**
     * Namespace of the Subject Set
     * @type string
     * @memberof RelationshipApideleteRelationships
     */
    subjectSetNamespace?: string
    /**
     * Object of the Subject Set
     * @type string
     * @memberof RelationshipApideleteRelationships
     */
    subjectSetObject?: string
    /**
     * Relation of the Subject Set
     * @type string
     * @memberof RelationshipApideleteRelationships
     */
    subjectSetRelation?: string
}

export interface RelationshipApiGetRelationshipsRequest {
    /**
     * 
     * @type string
     * @memberof RelationshipApigetRelationships
     */
    pageToken?: string
    /**
     * 
     * @type number
     * @memberof RelationshipApigetRelationships
     */
    pageSize?: number
    /**
     * Namespace of the Relationship
     * @type string
     * @memberof RelationshipApigetRelationships
     */
    namespace?: string
    /**
     * Object of the Relationship
     * @type string
     * @memberof RelationshipApigetRelationships
     */
    object?: string
    /**
     * Relation of the Relationship
     * @type string
     * @memberof RelationshipApigetRelationships
     */
    relation?: string
    /**
     * SubjectID of the Relationship
     * @type string
     * @memberof RelationshipApigetRelationships
     */
    subjectId?: string
    /**
     * Namespace of the Subject Set
     * @type string
     * @memberof RelationshipApigetRelationships
     */
    subjectSetNamespace?: string
    /**
     * Object of the Subject Set
     * @type string
     * @memberof RelationshipApigetRelationships
     */
    subjectSetObject?: string
    /**
     * Relation of the Subject Set
     * @type string
     * @memberof RelationshipApigetRelationships
     */
    subjectSetRelation?: string
}

export interface RelationshipApiListRelationshipNamespacesRequest {
}

export interface RelationshipApiPatchRelationshipsRequest {
    /**
     * 
     * @type Array&lt;RelationshipPatch&gt;
     * @memberof RelationshipApipatchRelationships
     */
    relationshipPatch?: Array<RelationshipPatch>
}

export class ObjectRelationshipApi {
    private api: ObservableRelationshipApi

    public constructor(configuration: Configuration, requestFactory?: RelationshipApiRequestFactory, responseProcessor?: RelationshipApiResponseProcessor) {
        this.api = new ObservableRelationshipApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The OPL file is expected in the body of the request.
     * Check the syntax of an OPL file
     * @param param the request object
     */
    public checkOplSyntax(param: RelationshipApiCheckOplSyntaxRequest = {}, options?: Configuration): Promise<CheckOplSyntaxResult> {
        return this.api.checkOplSyntax(param.body,  options).toPromise();
    }

    /**
     * Use this endpoint to create a relationship.
     * Create a Relationship
     * @param param the request object
     */
    public createRelationship(param: RelationshipApiCreateRelationshipRequest = {}, options?: Configuration): Promise<Relationship> {
        return this.api.createRelationship(param.createRelationshipBody,  options).toPromise();
    }

    /**
     * Use this endpoint to delete relationships
     * Delete Relationships
     * @param param the request object
     */
    public deleteRelationships(param: RelationshipApiDeleteRelationshipsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.deleteRelationships(param.namespace, param.object, param.relation, param.subjectId, param.subjectSetNamespace, param.subjectSetObject, param.subjectSetRelation,  options).toPromise();
    }

    /**
     * Get all relationships that match the query. Only the namespace field is required.
     * Query relationships
     * @param param the request object
     */
    public getRelationships(param: RelationshipApiGetRelationshipsRequest = {}, options?: Configuration): Promise<Relationships> {
        return this.api.getRelationships(param.pageToken, param.pageSize, param.namespace, param.object, param.relation, param.subjectId, param.subjectSetNamespace, param.subjectSetObject, param.subjectSetRelation,  options).toPromise();
    }

    /**
     * Get all namespaces
     * Query namespaces
     * @param param the request object
     */
    public listRelationshipNamespaces(param: RelationshipApiListRelationshipNamespacesRequest = {}, options?: Configuration): Promise<RelationshipNamespaces> {
        return this.api.listRelationshipNamespaces( options).toPromise();
    }

    /**
     * Use this endpoint to patch one or more relationships.
     * Patch Multiple Relationships
     * @param param the request object
     */
    public patchRelationships(param: RelationshipApiPatchRelationshipsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.patchRelationships(param.relationshipPatch,  options).toPromise();
    }

}

import { ObservableWellknownApi } from "./ObservableAPI.ts";
import { WellknownApiRequestFactory, WellknownApiResponseProcessor} from "../apis/WellknownApi.ts";

export interface WellknownApiDiscoverJsonWebKeysRequest {
}

export class ObjectWellknownApi {
    private api: ObservableWellknownApi

    public constructor(configuration: Configuration, requestFactory?: WellknownApiRequestFactory, responseProcessor?: WellknownApiResponseProcessor) {
        this.api = new ObservableWellknownApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint returns JSON Web Keys required to verifying OpenID Connect ID Tokens and, if enabled, OAuth 2.0 JWT Access Tokens. This endpoint can be used with client libraries like [node-jwks-rsa](https://github.com/auth0/node-jwks-rsa) among others.
     * Discover Well-Known JSON Web Keys
     * @param param the request object
     */
    public discoverJsonWebKeys(param: WellknownApiDiscoverJsonWebKeysRequest = {}, options?: Configuration): Promise<JsonWebKeySet> {
        return this.api.discoverJsonWebKeys( options).toPromise();
    }

}
