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
import { ObservableCourierApi } from './ObservableAPI.ts';

import { CourierApiRequestFactory, CourierApiResponseProcessor} from "../apis/CourierApi.ts";
export class PromiseCourierApi {
    private api: ObservableCourierApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CourierApiRequestFactory,
        responseProcessor?: CourierApiResponseProcessor
    ) {
        this.api = new ObservableCourierApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a specific messages by the given ID.
     * Get a Message
     * @param id MessageID is the ID of the message.
     */
    public getCourierMessage(id: string, _options?: Configuration): Promise<Message> {
        const result = this.api.getCourierMessage(id, _options);
        return result.toPromise();
    }

    /**
     * Lists all messages by given status and recipient.
     * List Messages
     * @param pageSize Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param pageToken Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param status Status filters out messages based on status. If no value is provided, it doesn\&#39;t take effect on filter.
     * @param recipient Recipient filters out messages based on recipient. If no value is provided, it doesn\&#39;t take effect on filter.
     */
    public listCourierMessages(pageSize?: number, pageToken?: string, status?: CourierMessageStatus, recipient?: string, _options?: Configuration): Promise<Array<Message>> {
        const result = this.api.listCourierMessages(pageSize, pageToken, status, recipient, _options);
        return result.toPromise();
    }


}



import { ObservableFrontendApi } from './ObservableAPI.ts';

import { FrontendApiRequestFactory, FrontendApiResponseProcessor} from "../apis/FrontendApi.ts";
export class PromiseFrontendApi {
    private api: ObservableFrontendApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FrontendApiRequestFactory,
        responseProcessor?: FrontendApiResponseProcessor
    ) {
        this.api = new ObservableFrontendApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint initializes a browser-based user login flow. This endpoint will set the appropriate cookies and anti-CSRF measures required for browser-based flows.  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.login.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists already, the browser will be redirected to `urls.default_redirect_url` unless the query parameter `?refresh=true` was set.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `session_aal1_required`: Multi-factor auth (e.g. 2fa) was requested but the user has no session yet. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  The optional query parameter login_challenge is set when using Kratos with Hydra in an OAuth2 flow. See the oauth2_provider.url configuration option.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Login Flow for Browsers
     * @param refresh Refresh a login session  If set to true, this will refresh an existing login session by asking the user to sign in again. This will reset the authenticated_at time of the session.
     * @param aal Request a Specific AuthenticationMethod Assurance Level  Use this parameter to upgrade an existing session\&#39;s authenticator assurance level (AAL). This allows you to ask for multi-factor authentication. When an identity sign in using e.g. username+password, the AAL is 1. If you wish to \&quot;upgrade\&quot; the session\&#39;s security by asking the user to perform TOTP / WebAuth/ ... you would set this to \&quot;aal2\&quot;.
     * @param returnTo The URL to return the browser to after the flow was completed.
     * @param cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @param loginChallenge An optional Hydra login challenge. If present, Kratos will cooperate with Ory Hydra to act as an OAuth2 identity provider.  The value for this parameter comes from &#x60;login_challenge&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?login_challenge&#x3D;abcde&#x60;).
     */
    public createBrowserLoginFlow(refresh?: boolean, aal?: string, returnTo?: string, cookie?: string, loginChallenge?: string, _options?: Configuration): Promise<LoginFlow> {
        const result = this.api.createBrowserLoginFlow(refresh, aal, returnTo, cookie, loginChallenge, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initializes a browser-based user logout flow and a URL which can be used to log out the user.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...). For API clients you can call the `/self-service/logout/api` URL directly with the Ory Session Token.  The URL is only valid for the currently signed in user. If no user is signed in, this endpoint returns a 401 error.  When calling this endpoint from a backend, please ensure to properly forward the HTTP cookies.
     * Create a Logout URL for Browsers
     * @param cookie HTTP Cookies  If you call this endpoint from a backend, please include the original Cookie header in the request.
     */
    public createBrowserLogoutFlow(cookie?: string, _options?: Configuration): Promise<LogoutFlow> {
        const result = this.api.createBrowserLogoutFlow(cookie, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initializes a browser-based account recovery flow. Once initialized, the browser will be redirected to `selfservice.flows.recovery.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists, the browser is returned to the configured return URL.  If this endpoint is called via an AJAX request, the response contains the recovery flow without any redirects or a 400 bad request error if the user is already authenticated.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Create Recovery Flow for Browsers
     * @param returnTo The URL to return the browser to after the flow was completed.
     */
    public createBrowserRecoveryFlow(returnTo?: string, _options?: Configuration): Promise<RecoveryFlow> {
        const result = this.api.createBrowserRecoveryFlow(returnTo, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initializes a browser-based user registration flow. This endpoint will set the appropriate cookies and anti-CSRF measures required for browser-based flows.  :::info  This endpoint is EXPERIMENTAL and subject to potential breaking changes in the future.  :::  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.registration.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists already, the browser will be redirected to `urls.default_redirect_url`.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  If this endpoint is called via an AJAX request, the response contains the registration flow without a redirect.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Registration Flow for Browsers
     * @param returnTo The URL to return the browser to after the flow was completed.
     * @param loginChallenge Ory OAuth 2.0 Login Challenge.  If set will cooperate with Ory OAuth2 and OpenID to act as an OAuth2 server / OpenID Provider.  The value for this parameter comes from &#x60;login_challenge&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?login_challenge&#x3D;abcde&#x60;).  This feature is compatible with Ory Hydra when not running on the Ory Network.
     * @param afterVerificationReturnTo The URL to return the browser to after the verification flow was completed.  After the registration flow is completed, the user will be sent a verification email. Upon completing the verification flow, this URL will be used to override the default &#x60;selfservice.flows.verification.after.default_redirect_to&#x60; value.
     */
    public createBrowserRegistrationFlow(returnTo?: string, loginChallenge?: string, afterVerificationReturnTo?: string, _options?: Configuration): Promise<RegistrationFlow> {
        const result = this.api.createBrowserRegistrationFlow(returnTo, loginChallenge, afterVerificationReturnTo, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initializes a browser-based user settings flow. Once initialized, the browser will be redirected to `selfservice.flows.settings.ui_url` with the flow ID set as the query parameter `?flow=`. If no valid Ory Kratos Session Cookie is included in the request, a login flow will be initialized.  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.settings.ui_url` with the flow ID set as the query parameter `?flow=`. If no valid user session was set, the browser will be redirected to the login endpoint.  If this endpoint is called via an AJAX request, the response contains the settings flow without any redirects or a 401 forbidden error if no valid session was set.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor (happens automatically for server-side browser flows) or change the configuration.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Create Settings Flow for Browsers
     * @param returnTo The URL to return the browser to after the flow was completed.
     * @param cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public createBrowserSettingsFlow(returnTo?: string, cookie?: string, _options?: Configuration): Promise<SettingsFlow> {
        const result = this.api.createBrowserSettingsFlow(returnTo, cookie, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initializes a browser-based account verification flow. Once initialized, the browser will be redirected to `selfservice.flows.verification.ui_url` with the flow ID set as the query parameter `?flow=`.  If this endpoint is called via an AJAX request, the response contains the recovery flow without any redirects.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...).  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Create Verification Flow for Browser Clients
     * @param returnTo The URL to return the browser to after the flow was completed.
     */
    public createBrowserVerificationFlow(returnTo?: string, _options?: Configuration): Promise<VerificationFlow> {
        const result = this.api.createBrowserVerificationFlow(returnTo, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initiates a login flow for native apps that do not use a browser, such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error will be returned unless the URL query parameter `?refresh=true` is set.  To fetch an existing login flow call `/self-service/login/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks, including CSRF login attacks.  In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `session_aal1_required`: Multi-factor auth (e.g. 2fa) was requested but the user has no session yet. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Login Flow for Native Apps
     * @param refresh Refresh a login session  If set to true, this will refresh an existing login session by asking the user to sign in again. This will reset the authenticated_at time of the session.
     * @param aal Request a Specific AuthenticationMethod Assurance Level  Use this parameter to upgrade an existing session\&#39;s authenticator assurance level (AAL). This allows you to ask for multi-factor authentication. When an identity sign in using e.g. username+password, the AAL is 1. If you wish to \&quot;upgrade\&quot; the session\&#39;s security by asking the user to perform TOTP / WebAuth/ ... you would set this to \&quot;aal2\&quot;.
     * @param xSessionToken The Session Token of the Identity performing the settings flow.
     * @param returnSessionTokenExchangeCode EnableSessionTokenExchangeCode requests the login flow to include a code that can be used to retrieve the session token after the login flow has been completed.
     * @param returnTo The URL to return the browser to after the flow was completed.
     */
    public createNativeLoginFlow(refresh?: boolean, aal?: string, xSessionToken?: string, returnSessionTokenExchangeCode?: boolean, returnTo?: string, _options?: Configuration): Promise<LoginFlow> {
        const result = this.api.createNativeLoginFlow(refresh, aal, xSessionToken, returnSessionTokenExchangeCode, returnTo, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initiates a recovery flow for API clients such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error.  To fetch an existing recovery flow call `/self-service/recovery/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Create Recovery Flow for Native Apps
     */
    public createNativeRecoveryFlow(_options?: Configuration): Promise<RecoveryFlow> {
        const result = this.api.createNativeRecoveryFlow(_options);
        return result.toPromise();
    }

    /**
     * This endpoint initiates a registration flow for API clients such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error will be returned unless the URL query parameter `?refresh=true` is set.  To fetch an existing registration flow call `/self-service/registration/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Registration Flow for Native Apps
     * @param returnSessionTokenExchangeCode EnableSessionTokenExchangeCode requests the login flow to include a code that can be used to retrieve the session token after the login flow has been completed.
     * @param returnTo The URL to return the browser to after the flow was completed.
     */
    public createNativeRegistrationFlow(returnSessionTokenExchangeCode?: boolean, returnTo?: string, _options?: Configuration): Promise<RegistrationFlow> {
        const result = this.api.createNativeRegistrationFlow(returnSessionTokenExchangeCode, returnTo, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initiates a settings flow for API clients such as mobile devices, smart TVs, and so on. You must provide a valid Ory Kratos Session Token for this endpoint to respond with HTTP 200 OK.  To fetch an existing settings flow call `/self-service/settings/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Create Settings Flow for Native Apps
     * @param xSessionToken The Session Token of the Identity performing the settings flow.
     */
    public createNativeSettingsFlow(xSessionToken?: string, _options?: Configuration): Promise<SettingsFlow> {
        const result = this.api.createNativeSettingsFlow(xSessionToken, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initiates a verification flow for API clients such as mobile devices, smart TVs, and so on.  To fetch an existing verification flow call `/self-service/verification/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Create Verification Flow for Native Apps
     */
    public createNativeVerificationFlow(_options?: Configuration): Promise<VerificationFlow> {
        const result = this.api.createNativeVerificationFlow(_options);
        return result.toPromise();
    }

    /**
     * Calling this endpoint invalidates all except the current session that belong to the logged-in user. Session data are not deleted.
     * Disable my other sessions
     * @param xSessionToken Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @param cookie Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     */
    public disableMyOtherSessions(xSessionToken?: string, cookie?: string, _options?: Configuration): Promise<DeleteMySessionsCount> {
        const result = this.api.disableMyOtherSessions(xSessionToken, cookie, _options);
        return result.toPromise();
    }

    /**
     * Calling this endpoint invalidates the specified session. The current session cannot be revoked. Session data are not deleted.
     * Disable one of my sessions
     * @param id ID is the session\&#39;s ID.
     * @param xSessionToken Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @param cookie Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     */
    public disableMySession(id: string, xSessionToken?: string, cookie?: string, _options?: Configuration): Promise<void> {
        const result = this.api.disableMySession(id, xSessionToken, cookie, _options);
        return result.toPromise();
    }

    /**
     * Exchange Session Token
     * @param initCode The part of the code return when initializing the flow.
     * @param returnToCode The part of the code returned by the return_to URL.
     */
    public exchangeSessionToken(initCode: string, returnToCode: string, _options?: Configuration): Promise<SuccessfulNativeLogin> {
        const result = this.api.exchangeSessionToken(initCode, returnToCode, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns the error associated with a user-facing self service errors.  This endpoint supports stub values to help you implement the error UI:  `?id=stub:500` - returns a stub 500 (Internal Server Error) error.  More information can be found at [Ory Kratos User User Facing Error Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-facing-errors).
     * Get User-Flow Errors
     * @param id Error is the error\&#39;s ID
     */
    public getFlowError(id: string, _options?: Configuration): Promise<FlowError> {
        const result = this.api.getFlowError(id, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a login flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/login\', async function (req, res) { const flow = await client.getLoginFlow(req.header(\'cookie\'), req.query[\'flow\'])  res.render(\'login\', flow) }) ```  This request may fail due to several reasons. The `error.id` can be one of:  `session_already_available`: The user is already signed in. `self_service_flow_expired`: The flow is expired and you should request a new one.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get Login Flow
     * @param id The Login Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?flow&#x3D;abcde&#x60;).
     * @param cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public getLoginFlow(id: string, cookie?: string, _options?: Configuration): Promise<LoginFlow> {
        const result = this.api.getLoginFlow(id, cookie, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a recovery flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/recovery\', async function (req, res) { const flow = await client.getRecoveryFlow(req.header(\'Cookie\'), req.query[\'flow\'])  res.render(\'recovery\', flow) }) ```  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Get Recovery Flow
     * @param id The Flow ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/recovery?flow&#x3D;abcde&#x60;).
     * @param cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public getRecoveryFlow(id: string, cookie?: string, _options?: Configuration): Promise<RecoveryFlow> {
        const result = this.api.getRecoveryFlow(id, cookie, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a registration flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/registration\', async function (req, res) { const flow = await client.getRegistrationFlow(req.header(\'cookie\'), req.query[\'flow\'])  res.render(\'registration\', flow) }) ```  This request may fail due to several reasons. The `error.id` can be one of:  `session_already_available`: The user is already signed in. `self_service_flow_expired`: The flow is expired and you should request a new one.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get Registration Flow
     * @param id The Registration Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?flow&#x3D;abcde&#x60;).
     * @param cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public getRegistrationFlow(id: string, cookie?: string, _options?: Configuration): Promise<RegistrationFlow> {
        const result = this.api.getRegistrationFlow(id, cookie, _options);
        return result.toPromise();
    }

    /**
     * When accessing this endpoint through Ory Kratos\' Public API you must ensure that either the Ory Kratos Session Cookie or the Ory Kratos Session Token are set.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  You can access this endpoint without credentials when using Ory Kratos\' Admin API.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The flow was interrupted with `session_refresh_required` but apparently some other identity logged in instead.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Get Settings Flow
     * @param id ID is the Settings Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/settings?flow&#x3D;abcde&#x60;).
     * @param xSessionToken The Session Token  When using the SDK in an app without a browser, please include the session token here.
     * @param cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public getSettingsFlow(id: string, xSessionToken?: string, cookie?: string, _options?: Configuration): Promise<SettingsFlow> {
        const result = this.api.getSettingsFlow(id, xSessionToken, cookie, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a verification flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/recovery\', async function (req, res) { const flow = await client.getVerificationFlow(req.header(\'cookie\'), req.query[\'flow\'])  res.render(\'verification\', flow) }) ```  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Get Verification Flow
     * @param id The Flow ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/verification?flow&#x3D;abcde&#x60;).
     * @param cookie HTTP Cookies  When using the SDK on the server side you must include the HTTP Cookie Header originally sent to your HTTP handler here.
     */
    public getVerificationFlow(id: string, cookie?: string, _options?: Configuration): Promise<VerificationFlow> {
        const result = this.api.getVerificationFlow(id, cookie, _options);
        return result.toPromise();
    }

    /**
     * This endpoint provides JavaScript which is needed in order to perform WebAuthn login and registration.  If you are building a JavaScript Browser App (e.g. in ReactJS or AngularJS) you will need to load this file:  ```html <script src=\"https://public-kratos.example.org/.well-known/ory/webauthn.js\" type=\"script\" async /> ```  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get WebAuthn JavaScript
     */
    public getWebAuthnJavaScript(_options?: Configuration): Promise<string> {
        const result = this.api.getWebAuthnJavaScript(_options);
        return result.toPromise();
    }

    /**
     * This endpoints returns all other active sessions that belong to the logged-in user. The current session can be retrieved by calling the `/sessions/whoami` endpoint.
     * Get My Active Sessions
     * @param perPage Items per Page  This is the number of items per page.
     * @param page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @param xSessionToken Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @param cookie Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     */
    public listMySessions(perPage?: number, page?: number, xSessionToken?: string, cookie?: string, _options?: Configuration): Promise<Array<Session>> {
        const result = this.api.listMySessions(perPage, page, xSessionToken, cookie, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to log out an identity using an Ory Session Token. If the Ory Session Token was successfully revoked, the server returns a 204 No Content response. A 204 No Content response is also sent when the Ory Session Token has been revoked already before.  If the Ory Session Token is malformed or does not exist a 403 Forbidden response will be returned.  This endpoint does not remove any HTTP Cookies - use the Browser-Based Self-Service Logout Flow instead.
     * Perform Logout for Native Apps
     * @param performNativeLogoutBody 
     */
    public performNativeLogout(performNativeLogoutBody: PerformNativeLogoutBody, _options?: Configuration): Promise<void> {
        const result = this.api.performNativeLogout(performNativeLogoutBody, _options);
        return result.toPromise();
    }

    /**
     * Uses the HTTP Headers in the GET request to determine (e.g. by using checking the cookies) who is authenticated. Returns a session object in the body or 401 if the credentials are invalid or no credentials were sent. When the request it successful it adds the user ID to the \'X-Kratos-Authenticated-Identity-Id\' header in the response.  If you call this endpoint from a server-side application, you must forward the HTTP Cookie Header to this endpoint:  ```js pseudo-code example router.get(\'/protected-endpoint\', async function (req, res) { const session = await client.toSession(undefined, req.header(\'cookie\'))  console.log(session) }) ```  When calling this endpoint from a non-browser application (e.g. mobile app) you must include the session token:  ```js pseudo-code example ... const session = await client.toSession(\"the-session-token\")  console.log(session) ```  Depending on your configuration this endpoint might return a 403 status code if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  This endpoint is useful for:  AJAX calls. Remember to send credentials and set up CORS correctly! Reverse proxies and API Gateways Server-side calls - use the `X-Session-Token` header!  This endpoint authenticates users by checking:  if the `Cookie` HTTP header was set containing an Ory Kratos Session Cookie; if the `Authorization: bearer <ory-session-token>` HTTP header was set with a valid Ory Kratos Session Token; if the `X-Session-Token` HTTP header was set with a valid Ory Kratos Session Token.  If none of these headers are set or the cooke or token are invalid, the endpoint returns a HTTP 401 status code.  As explained above, this request may fail due to several reasons. The `error.id` can be one of:  `session_inactive`: No active session was found in the request (e.g. no Ory Session Cookie / Ory Session Token). `session_aal2_required`: An active session was found but it does not fulfil the Authenticator Assurance Level, implying that the session must (e.g.) authenticate the second factor.
     * Check Who the Current HTTP Session Belongs To
     * @param xSessionToken Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @param cookie Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     */
    public toSession(xSessionToken?: string, cookie?: string, _options?: Configuration): Promise<Session> {
        const result = this.api.toSession(xSessionToken, cookie, _options);
        return result.toPromise();
    }

    /**
     * :::info  This endpoint is EXPERIMENTAL and subject to potential breaking changes in the future.  :::  Use this endpoint to complete a login flow. This endpoint behaves differently for API and browser flows.  API flows expect `application/json` to be sent in the body and responds with HTTP 200 and a application/json body with the session token on success; HTTP 410 if the original flow expired with the appropriate error messages set and optionally a `use_flow_id` parameter in the body; HTTP 400 on form validation errors.  Browser flows expect a Content-Type of `application/x-www-form-urlencoded` or `application/json` to be sent in the body and respond with a HTTP 303 redirect to the post/after login URL or the `return_to` value if it was set and if the login succeeded; a HTTP 303 redirect to the login UI URL with the flow ID containing the validation errors otherwise.  Browser flows with an accept header of `application/json` will not redirect but instead respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors.  If this endpoint is called with `Accept: application/json` in the header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Submit a Login Flow
     * @param flow The Login Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?flow&#x3D;abcde&#x60;).
     * @param updateLoginFlowBody 
     * @param xSessionToken The Session Token of the Identity performing the settings flow.
     * @param cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public updateLoginFlow(flow: string, updateLoginFlowBody: UpdateLoginFlowBody, xSessionToken?: string, cookie?: string, _options?: Configuration): Promise<SuccessfulNativeLogin> {
        const result = this.api.updateLoginFlow(flow, updateLoginFlowBody, xSessionToken, cookie, _options);
        return result.toPromise();
    }

    /**
     * This endpoint logs out an identity in a self-service manner.  If the `Accept` HTTP header is not set to `application/json`, the browser will be redirected (HTTP 303 See Other) to the `return_to` parameter of the initial request or fall back to `urls.default_return_to`.  If the `Accept` HTTP header is set to `application/json`, a 204 No Content response will be sent on successful logout instead.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...). For API clients you can call the `/self-service/logout/api` URL directly with the Ory Session Token.  More information can be found at [Ory Kratos User Logout Documentation](https://www.ory.sh/docs/next/kratos/self-service/flows/user-logout).
     * Update Logout Flow
     * @param token A Valid Logout Token  If you do not have a logout token because you only have a session cookie, call &#x60;/self-service/logout/browser&#x60; to generate a URL for this endpoint.
     * @param returnTo The URL to return to after the logout was completed.
     * @param cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public updateLogoutFlow(token?: string, returnTo?: string, cookie?: string, _options?: Configuration): Promise<void> {
        const result = this.api.updateLogoutFlow(token, returnTo, cookie, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to complete a recovery flow. This endpoint behaves differently for API and browser flows and has several states:  `choose_method` expects `flow` (in the URL query) and `email` (in the body) to be sent and works with API- and Browser-initiated flows. For API clients and Browser clients with HTTP Header `Accept: application/json` it either returns a HTTP 200 OK when the form is valid and HTTP 400 OK when the form is invalid. and a HTTP 303 See Other redirect with a fresh recovery flow if the flow was otherwise invalid (e.g. expired). For Browser clients without HTTP Header `Accept` or with `Accept: text/_*` it returns a HTTP 303 See Other redirect to the Recovery UI URL with the Recovery Flow ID appended. `sent_email` is the success state after `choose_method` for the `link` method and allows the user to request another recovery email. It works for both API and Browser-initiated flows and returns the same responses as the flow in `choose_method` state. `passed_challenge` expects a `token` to be sent in the URL query and given the nature of the flow (\"sending a recovery link\") does not have any API capabilities. The server responds with a HTTP 303 See Other redirect either to the Settings UI URL (if the link was valid) and instructs the user to update their password, or a redirect to the Recover UI URL with a new Recovery Flow ID which contains an error message that the recovery link was invalid.  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Complete Recovery Flow
     * @param flow The Recovery Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/recovery?flow&#x3D;abcde&#x60;).
     * @param updateRecoveryFlowBody 
     * @param token Recovery Token  The recovery token which completes the recovery request. If the token is invalid (e.g. expired) an error will be shown to the end-user.  This parameter is usually set in a link and not used by any direct API call.
     * @param cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public updateRecoveryFlow(flow: string, updateRecoveryFlowBody: UpdateRecoveryFlowBody, token?: string, cookie?: string, _options?: Configuration): Promise<RecoveryFlow> {
        const result = this.api.updateRecoveryFlow(flow, updateRecoveryFlowBody, token, cookie, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to complete a registration flow by sending an identity\'s traits and password. This endpoint behaves differently for API and browser flows.  API flows expect `application/json` to be sent in the body and respond with HTTP 200 and a application/json body with the created identity success - if the session hook is configured the `session` and `session_token` will also be included; HTTP 410 if the original flow expired with the appropriate error messages set and optionally a `use_flow_id` parameter in the body; HTTP 400 on form validation errors.  Browser flows expect a Content-Type of `application/x-www-form-urlencoded` or `application/json` to be sent in the body and respond with a HTTP 303 redirect to the post/after registration URL or the `return_to` value if it was set and if the registration succeeded; a HTTP 303 redirect to the registration UI URL with the flow ID containing the validation errors otherwise.  Browser flows with an accept header of `application/json` will not redirect but instead respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors.  If this endpoint is called with `Accept: application/json` in the header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Update Registration Flow
     * @param flow The Registration Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?flow&#x3D;abcde&#x60;).
     * @param updateRegistrationFlowBody 
     * @param cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public updateRegistrationFlow(flow: string, updateRegistrationFlowBody: UpdateRegistrationFlowBody, cookie?: string, _options?: Configuration): Promise<SuccessfulNativeRegistration> {
        const result = this.api.updateRegistrationFlow(flow, updateRegistrationFlowBody, cookie, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to complete a settings flow by sending an identity\'s updated password. This endpoint behaves differently for API and browser flows.  API-initiated flows expect `application/json` to be sent in the body and respond with HTTP 200 and an application/json body with the session token on success; HTTP 303 redirect to a fresh settings flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors. HTTP 401 when the endpoint is called without a valid session token. HTTP 403 when `selfservice.flows.settings.privileged_session_max_age` was reached or the session\'s AAL is too low. Implies that the user needs to re-authenticate.  Browser flows without HTTP Header `Accept` or with `Accept: text/_*` respond with a HTTP 303 redirect to the post/after settings URL or the `return_to` value if it was set and if the flow succeeded; a HTTP 303 redirect to the Settings UI URL with the flow ID containing the validation errors otherwise. a HTTP 303 redirect to the login endpoint when `selfservice.flows.settings.privileged_session_max_age` was reached or the session\'s AAL is too low.  Browser flows with HTTP Header `Accept: application/json` respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 401 when the endpoint is called without a valid session cookie. HTTP 403 when the page is accessed without a session cookie or the session\'s AAL is too low. HTTP 400 on form validation errors.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor (happens automatically for server-side browser flows) or change the configuration.  If this endpoint is called with a `Accept: application/json` HTTP header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_refresh_required`: The identity requested to change something that needs a privileged session. Redirect the identity to the login init endpoint with query parameters `?refresh=true&return_to=<the-current-browser-url>`, or initiate a refresh login flow otherwise. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The flow was interrupted with `session_refresh_required` but apparently some other identity logged in instead. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Complete Settings Flow
     * @param flow The Settings Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/settings?flow&#x3D;abcde&#x60;).
     * @param updateSettingsFlowBody 
     * @param xSessionToken The Session Token of the Identity performing the settings flow.
     * @param cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public updateSettingsFlow(flow: string, updateSettingsFlowBody: UpdateSettingsFlowBody, xSessionToken?: string, cookie?: string, _options?: Configuration): Promise<SettingsFlow> {
        const result = this.api.updateSettingsFlow(flow, updateSettingsFlowBody, xSessionToken, cookie, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to complete a verification flow. This endpoint behaves differently for API and browser flows and has several states:  `choose_method` expects `flow` (in the URL query) and `email` (in the body) to be sent and works with API- and Browser-initiated flows. For API clients and Browser clients with HTTP Header `Accept: application/json` it either returns a HTTP 200 OK when the form is valid and HTTP 400 OK when the form is invalid and a HTTP 303 See Other redirect with a fresh verification flow if the flow was otherwise invalid (e.g. expired). For Browser clients without HTTP Header `Accept` or with `Accept: text/_*` it returns a HTTP 303 See Other redirect to the Verification UI URL with the Verification Flow ID appended. `sent_email` is the success state after `choose_method` when using the `link` method and allows the user to request another verification email. It works for both API and Browser-initiated flows and returns the same responses as the flow in `choose_method` state. `passed_challenge` expects a `token` to be sent in the URL query and given the nature of the flow (\"sending a verification link\") does not have any API capabilities. The server responds with a HTTP 303 See Other redirect either to the Settings UI URL (if the link was valid) and instructs the user to update their password, or a redirect to the Verification UI URL with a new Verification Flow ID which contains an error message that the verification link was invalid.  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Complete Verification Flow
     * @param flow The Verification Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/verification?flow&#x3D;abcde&#x60;).
     * @param updateVerificationFlowBody 
     * @param token Verification Token  The verification token which completes the verification request. If the token is invalid (e.g. expired) an error will be shown to the end-user.  This parameter is usually set in a link and not used by any direct API call.
     * @param cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public updateVerificationFlow(flow: string, updateVerificationFlowBody: UpdateVerificationFlowBody, token?: string, cookie?: string, _options?: Configuration): Promise<VerificationFlow> {
        const result = this.api.updateVerificationFlow(flow, updateVerificationFlowBody, token, cookie, _options);
        return result.toPromise();
    }


}



import { ObservableIdentityApi } from './ObservableAPI.ts';

import { IdentityApiRequestFactory, IdentityApiResponseProcessor} from "../apis/IdentityApi.ts";
export class PromiseIdentityApi {
    private api: ObservableIdentityApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IdentityApiRequestFactory,
        responseProcessor?: IdentityApiResponseProcessor
    ) {
        this.api = new ObservableIdentityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates or delete multiple [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model). This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.
     * Create and deletes multiple identities
     * @param patchIdentitiesBody 
     */
    public batchPatchIdentities(patchIdentitiesBody?: PatchIdentitiesBody, _options?: Configuration): Promise<BatchPatchIdentitiesResponse> {
        const result = this.api.batchPatchIdentities(patchIdentitiesBody, _options);
        return result.toPromise();
    }

    /**
     * Create an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model).  This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.
     * Create an Identity
     * @param createIdentityBody 
     */
    public createIdentity(createIdentityBody?: CreateIdentityBody, _options?: Configuration): Promise<Identity> {
        const result = this.api.createIdentity(createIdentityBody, _options);
        return result.toPromise();
    }

    /**
     * This endpoint creates a recovery code which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Code
     * @param createRecoveryCodeForIdentityBody 
     */
    public createRecoveryCodeForIdentity(createRecoveryCodeForIdentityBody?: CreateRecoveryCodeForIdentityBody, _options?: Configuration): Promise<RecoveryCodeForIdentity> {
        const result = this.api.createRecoveryCodeForIdentity(createRecoveryCodeForIdentityBody, _options);
        return result.toPromise();
    }

    /**
     * This endpoint creates a recovery link which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Link
     * @param createRecoveryLinkForIdentityBody 
     */
    public createRecoveryLinkForIdentity(createRecoveryLinkForIdentityBody?: CreateRecoveryLinkForIdentityBody, _options?: Configuration): Promise<RecoveryLinkForIdentity> {
        const result = this.api.createRecoveryLinkForIdentity(createRecoveryLinkForIdentityBody, _options);
        return result.toPromise();
    }

    /**
     * Calling this endpoint irrecoverably and permanently deletes the [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) given its ID. This action can not be undone. This endpoint returns 204 when the identity was deleted or when the identity was not found, in which case it is assumed that is has been deleted already.
     * Delete an Identity
     * @param id ID is the identity\&#39;s ID.
     */
    public deleteIdentity(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteIdentity(id, _options);
        return result.toPromise();
    }

    /**
     * Delete an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) credential by its type You can only delete second factor (aal2) credentials.
     * Delete a credential for a specific identity
     * @param id ID is the identity\&#39;s ID.
     * @param type Type is the credential\&#39;s Type. One of totp, webauthn, lookup
     */
    public deleteIdentityCredentials(id: string, type: 'totp' | 'webauthn' | 'lookup', _options?: Configuration): Promise<Identity> {
        const result = this.api.deleteIdentityCredentials(id, type, _options);
        return result.toPromise();
    }

    /**
     * Calling this endpoint irrecoverably and permanently deletes and invalidates all sessions that belong to the given Identity.
     * Delete & Invalidate an Identity\'s Sessions
     * @param id ID is the identity\&#39;s ID.
     */
    public deleteIdentitySessions(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteIdentitySessions(id, _options);
        return result.toPromise();
    }

    /**
     * Calling this endpoint deactivates the specified session. Session data is not deleted.
     * Deactivate a Session
     * @param id ID is the session\&#39;s ID.
     */
    public disableSession(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.disableSession(id, _options);
        return result.toPromise();
    }

    /**
     * Calling this endpoint extends the given session ID. If `session.earliest_possible_extend` is set it will only extend the session after the specified time has passed.  Retrieve the session ID from the `/sessions/whoami` endpoint / `toSession` SDK method.
     * Extend a Session
     * @param id ID is the session\&#39;s ID.
     */
    public extendSession(id: string, _options?: Configuration): Promise<Session> {
        const result = this.api.extendSession(id, _options);
        return result.toPromise();
    }

    /**
     * Return an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) by its ID. You can optionally include credentials (e.g. social sign in connections) in the response by using the `include_credential` query parameter.
     * Get an Identity
     * @param id ID must be set to the ID of identity you want to get
     * @param includeCredential Include Credentials in Response  Include any credential, for example &#x60;password&#x60; or &#x60;oidc&#x60;, in the response. When set to &#x60;oidc&#x60;, This will return the initial OAuth 2.0 Access Token, OAuth 2.0 Refresh Token and the OpenID Connect ID Token if available.
     */
    public getIdentity(id: string, includeCredential?: Array<'password' | 'totp' | 'oidc' | 'webauthn' | 'lookup_secret'>, _options?: Configuration): Promise<Identity> {
        const result = this.api.getIdentity(id, includeCredential, _options);
        return result.toPromise();
    }

    /**
     * Return a specific identity schema.
     * Get Identity JSON Schema
     * @param id ID must be set to the ID of schema you want to get
     */
    public getIdentitySchema(id: string, _options?: Configuration): Promise<any> {
        const result = this.api.getIdentitySchema(id, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is useful for:  Getting a session object with all specified expandables that exist in an administrative context.
     * Get Session
     * @param id ID is the session\&#39;s ID.
     * @param expand ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. Example - ?expand&#x3D;Identity&amp;expand&#x3D;Devices If no value is provided, the expandable properties are skipped.
     */
    public getSession(id: string, expand?: Array<string>, _options?: Configuration): Promise<Session> {
        const result = this.api.getSession(id, expand, _options);
        return result.toPromise();
    }

    /**
     * Lists all [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model) in the system.
     * List Identities
     * @param perPage Items per Page  This is the number of items per page.
     * @param page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @param credentialsIdentifier CredentialsIdentifier is the identifier (username, email) of the credentials to look up.
     */
    public listIdentities(perPage?: number, page?: number, credentialsIdentifier?: string, _options?: Configuration): Promise<Array<Identity>> {
        const result = this.api.listIdentities(perPage, page, credentialsIdentifier, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all identity schemas currently in use.
     * Get all Identity Schemas
     * @param perPage Items per Page  This is the number of items per page.
     * @param page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     */
    public listIdentitySchemas(perPage?: number, page?: number, _options?: Configuration): Promise<Array<IdentitySchemaContainer>> {
        const result = this.api.listIdentitySchemas(perPage, page, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns all sessions that belong to the given Identity.
     * List an Identity\'s Sessions
     * @param id ID is the identity\&#39;s ID.
     * @param perPage Items per Page  This is the number of items per page.
     * @param page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @param active Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.
     */
    public listIdentitySessions(id: string, perPage?: number, page?: number, active?: boolean, _options?: Configuration): Promise<Array<Session>> {
        const result = this.api.listIdentitySessions(id, perPage, page, active, _options);
        return result.toPromise();
    }

    /**
     * Listing all sessions that exist.
     * List All Sessions
     * @param pageSize Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param pageToken Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param active Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.
     * @param expand ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. If no value is provided, the expandable properties are skipped.
     */
    public listSessions(pageSize?: number, pageToken?: string, active?: boolean, expand?: Array<string>, _options?: Configuration): Promise<Array<Session>> {
        const result = this.api.listSessions(pageSize, pageToken, active, expand, _options);
        return result.toPromise();
    }

    /**
     * Partially updates an [identity\'s](https://www.ory.sh/docs/kratos/concepts/identity-user-model) field using [JSON Patch](https://jsonpatch.com/). The fields `id`, `stateChangedAt` and `credentials` can not be updated using this method.
     * Patch an Identity
     * @param id ID must be set to the ID of identity you want to update
     * @param jsonPatch 
     */
    public patchIdentity(id: string, jsonPatch?: Array<JsonPatch>, _options?: Configuration): Promise<Identity> {
        const result = this.api.patchIdentity(id, jsonPatch, _options);
        return result.toPromise();
    }

    /**
     * This endpoint updates an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model). The full identity payload (except credentials) is expected. It is possible to update the identity\'s credentials as well.
     * Update an Identity
     * @param id ID must be set to the ID of identity you want to update
     * @param updateIdentityBody 
     */
    public updateIdentity(id: string, updateIdentityBody?: UpdateIdentityBody, _options?: Configuration): Promise<Identity> {
        const result = this.api.updateIdentity(id, updateIdentityBody, _options);
        return result.toPromise();
    }


}



import { ObservableJwkApi } from './ObservableAPI.ts';

import { JwkApiRequestFactory, JwkApiResponseProcessor} from "../apis/JwkApi.ts";
export class PromiseJwkApi {
    private api: ObservableJwkApi

    public constructor(
        configuration: Configuration,
        requestFactory?: JwkApiRequestFactory,
        responseProcessor?: JwkApiResponseProcessor
    ) {
        this.api = new ObservableJwkApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is capable of generating JSON Web Key Sets for you. There a different strategies available, such as symmetric cryptographic keys (HS256, HS512) and asymetric cryptographic keys (RS256, ECDSA). If the specified JSON Web Key Set does not exist, it will be created.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Create JSON Web Key
     * @param set The JSON Web Key Set ID
     * @param createJsonWebKeySet 
     */
    public createJsonWebKeySet(set: string, createJsonWebKeySet: CreateJsonWebKeySet, _options?: Configuration): Promise<JsonWebKeySet> {
        const result = this.api.createJsonWebKeySet(set, createJsonWebKeySet, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to delete a single JSON Web Key.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Delete JSON Web Key
     * @param set The JSON Web Key Set
     * @param kid The JSON Web Key ID (kid)
     */
    public deleteJsonWebKey(set: string, kid: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteJsonWebKey(set, kid, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to delete a complete JSON Web Key Set and all the keys in that set.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Delete JSON Web Key Set
     * @param set The JSON Web Key Set
     */
    public deleteJsonWebKeySet(set: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteJsonWebKeySet(set, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a singular JSON Web Key contained in a set. It is identified by the set and the specific key ID (kid).
     * Get JSON Web Key
     * @param set JSON Web Key Set ID
     * @param kid JSON Web Key ID
     */
    public getJsonWebKey(set: string, kid: string, _options?: Configuration): Promise<JsonWebKeySet> {
        const result = this.api.getJsonWebKey(set, kid, _options);
        return result.toPromise();
    }

    /**
     * This endpoint can be used to retrieve JWK Sets stored in ORY Hydra.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Retrieve a JSON Web Key Set
     * @param set JSON Web Key Set ID
     */
    public getJsonWebKeySet(set: string, _options?: Configuration): Promise<JsonWebKeySet> {
        const result = this.api.getJsonWebKeySet(set, _options);
        return result.toPromise();
    }

    /**
     * Use this method if you do not want to let Hydra generate the JWKs for you, but instead save your own.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Set JSON Web Key
     * @param set The JSON Web Key Set ID
     * @param kid JSON Web Key ID
     * @param jsonWebKey 
     */
    public setJsonWebKey(set: string, kid: string, jsonWebKey?: JsonWebKey, _options?: Configuration): Promise<JsonWebKey> {
        const result = this.api.setJsonWebKey(set, kid, jsonWebKey, _options);
        return result.toPromise();
    }

    /**
     * Use this method if you do not want to let Hydra generate the JWKs for you, but instead save your own.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Update a JSON Web Key Set
     * @param set The JSON Web Key Set ID
     * @param jsonWebKeySet 
     */
    public setJsonWebKeySet(set: string, jsonWebKeySet?: JsonWebKeySet, _options?: Configuration): Promise<JsonWebKeySet> {
        const result = this.api.setJsonWebKeySet(set, jsonWebKeySet, _options);
        return result.toPromise();
    }


}



import { ObservableMetadataApi } from './ObservableAPI.ts';

import { MetadataApiRequestFactory, MetadataApiResponseProcessor} from "../apis/MetadataApi.ts";
export class PromiseMetadataApi {
    private api: ObservableMetadataApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetadataApiRequestFactory,
        responseProcessor?: MetadataApiResponseProcessor
    ) {
        this.api = new ObservableMetadataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint returns the version of Ory Kratos.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the version will never refer to the cluster state, only to a single instance.
     * Return Running Software Version.
     */
    public getVersion(_options?: Configuration): Promise<GetVersion200Response> {
        const result = this.api.getVersion(_options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a HTTP 200 status code when Ory Kratos is accepting incoming HTTP requests. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
     * Check HTTP Server Status
     */
    public isAlive(_options?: Configuration): Promise<HealthStatus> {
        const result = this.api.isAlive(_options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a HTTP 200 status code when Ory Kratos is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of Ory Kratos, the health status will never refer to the cluster state, only to a single instance.
     * Check HTTP Server and Database Status
     */
    public isReady(_options?: Configuration): Promise<IsReady200Response> {
        const result = this.api.isReady(_options);
        return result.toPromise();
    }


}



import { ObservableOAuth2Api } from './ObservableAPI.ts';

import { OAuth2ApiRequestFactory, OAuth2ApiResponseProcessor} from "../apis/OAuth2Api.ts";
export class PromiseOAuth2Api {
    private api: ObservableOAuth2Api

    public constructor(
        configuration: Configuration,
        requestFactory?: OAuth2ApiRequestFactory,
        responseProcessor?: OAuth2ApiResponseProcessor
    ) {
        this.api = new ObservableOAuth2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject\'s behalf.  The consent challenge is appended to the consent provider\'s URL to which the subject\'s user-agent (browser) is redirected to. The consent provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted or rejected the request.  This endpoint tells Ory that the subject has authorized the OAuth 2.0 client to access resources on his/her behalf. The consent provider includes additional information, such as session data for access and ID tokens, and if the consent request should be used as basis for future requests.  The response contains a redirect URL which the consent provider should redirect the user-agent to.  The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please head over to the OAuth 2.0 documentation.
     * Accept OAuth 2.0 Consent Request
     * @param consentChallenge OAuth 2.0 Consent Request Challenge
     * @param acceptOAuth2ConsentRequest 
     */
    public acceptOAuth2ConsentRequest(consentChallenge: string, acceptOAuth2ConsentRequest?: AcceptOAuth2ConsentRequest, _options?: Configuration): Promise<OAuth2RedirectTo> {
        const result = this.api.acceptOAuth2ConsentRequest(consentChallenge, acceptOAuth2ConsentRequest, _options);
        return result.toPromise();
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell the Ory OAuth2 Service about it.  The authentication challenge is appended to the login provider URL to which the subject\'s user-agent (browser) is redirected to. The login provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.  This endpoint tells Ory that the subject has successfully authenticated and includes additional information such as the subject\'s ID and if Ory should remember the subject\'s subject agent for future authentication attempts by setting a cookie.  The response contains a redirect URL which the login provider should redirect the user-agent to.
     * Accept OAuth 2.0 Login Request
     * @param loginChallenge OAuth 2.0 Login Request Challenge
     * @param acceptOAuth2LoginRequest 
     */
    public acceptOAuth2LoginRequest(loginChallenge: string, acceptOAuth2LoginRequest?: AcceptOAuth2LoginRequest, _options?: Configuration): Promise<OAuth2RedirectTo> {
        const result = this.api.acceptOAuth2LoginRequest(loginChallenge, acceptOAuth2LoginRequest, _options);
        return result.toPromise();
    }

    /**
     * When a user or an application requests Ory OAuth 2.0 to remove the session state of a subject, this endpoint is used to confirm that logout request.  The response contains a redirect URL which the consent provider should redirect the user-agent to.
     * Accept OAuth 2.0 Session Logout Request
     * @param logoutChallenge OAuth 2.0 Logout Request Challenge
     */
    public acceptOAuth2LogoutRequest(logoutChallenge: string, _options?: Configuration): Promise<OAuth2RedirectTo> {
        const result = this.api.acceptOAuth2LogoutRequest(logoutChallenge, _options);
        return result.toPromise();
    }

    /**
     * Create a new OAuth 2.0 client. If you pass `client_secret` the secret is used, otherwise a random secret is generated. The secret is echoed in the response. It is not possible to retrieve it later on.
     * Create OAuth 2.0 Client
     * @param oAuth2Client OAuth 2.0 Client Request Body
     */
    public createOAuth2Client(oAuth2Client: OAuth2Client, _options?: Configuration): Promise<OAuth2Client> {
        const result = this.api.createOAuth2Client(oAuth2Client, _options);
        return result.toPromise();
    }

    /**
     * Delete an existing OAuth 2.0 Client by its ID.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.  Make sure that this endpoint is well protected and only callable by first-party components.
     * Delete OAuth 2.0 Client
     * @param id The id of the OAuth 2.0 Client.
     */
    public deleteOAuth2Client(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOAuth2Client(id, _options);
        return result.toPromise();
    }

    /**
     * This endpoint deletes OAuth2 access tokens issued to an OAuth 2.0 Client from the database.
     * Delete OAuth 2.0 Access Tokens from specific OAuth 2.0 Client
     * @param clientId OAuth 2.0 Client ID
     */
    public deleteOAuth2Token(clientId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOAuth2Token(clientId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to delete trusted JWT Bearer Grant Type Issuer. The ID is the one returned when you created the trust relationship.  Once deleted, the associated issuer will no longer be able to perform the JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grant.
     * Delete Trusted OAuth2 JWT Bearer Grant Type Issuer
     * @param id The id of the desired grant
     */
    public deleteTrustedOAuth2JwtGrantIssuer(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTrustedOAuth2JwtGrantIssuer(id, _options);
        return result.toPromise();
    }

    /**
     * Get an OAuth 2.0 client by its ID. This endpoint never returns the client secret.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Get an OAuth 2.0 Client
     * @param id The id of the OAuth 2.0 Client.
     */
    public getOAuth2Client(id: string, _options?: Configuration): Promise<OAuth2Client> {
        const result = this.api.getOAuth2Client(id, _options);
        return result.toPromise();
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject\'s behalf.  The consent challenge is appended to the consent provider\'s URL to which the subject\'s user-agent (browser) is redirected to. The consent provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted or rejected the request.  The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please head over to the OAuth 2.0 documentation.
     * Get OAuth 2.0 Consent Request
     * @param consentChallenge OAuth 2.0 Consent Request Challenge
     */
    public getOAuth2ConsentRequest(consentChallenge: string, _options?: Configuration): Promise<OAuth2ConsentRequest> {
        const result = this.api.getOAuth2ConsentRequest(consentChallenge, _options);
        return result.toPromise();
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell the Ory OAuth2 Service about it.  Per default, the login provider is Ory itself. You may use a different login provider which needs to be a web-app you write and host, and it must be able to authenticate (\"show the subject a login screen\") a subject (in OAuth2 the proper name for subject is \"resource owner\").  The authentication challenge is appended to the login provider URL to which the subject\'s user-agent (browser) is redirected to. The login provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.
     * Get OAuth 2.0 Login Request
     * @param loginChallenge OAuth 2.0 Login Request Challenge
     */
    public getOAuth2LoginRequest(loginChallenge: string, _options?: Configuration): Promise<OAuth2LoginRequest> {
        const result = this.api.getOAuth2LoginRequest(loginChallenge, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to fetch an Ory OAuth 2.0 logout request.
     * Get OAuth 2.0 Session Logout Request
     * @param logoutChallenge 
     */
    public getOAuth2LogoutRequest(logoutChallenge: string, _options?: Configuration): Promise<OAuth2LogoutRequest> {
        const result = this.api.getOAuth2LogoutRequest(logoutChallenge, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a trusted JWT Bearer Grant Type Issuer. The ID is the one returned when you created the trust relationship.
     * Get Trusted OAuth2 JWT Bearer Grant Type Issuer
     * @param id The id of the desired grant
     */
    public getTrustedOAuth2JwtGrantIssuer(id: string, _options?: Configuration): Promise<TrustedOAuth2JwtGrantIssuer> {
        const result = this.api.getTrustedOAuth2JwtGrantIssuer(id, _options);
        return result.toPromise();
    }

    /**
     * The introspection endpoint allows to check if a token (both refresh and access) is active or not. An active token is neither expired nor revoked. If a token is active, additional information on the token will be included. You can set additional data for a token by setting `session.access_token` during the consent flow.
     * Introspect OAuth2 Access and Refresh Tokens
     * @param token The string value of the token. For access tokens, this is the \\\&quot;access_token\\\&quot; value returned from the token endpoint defined in OAuth 2.0. For refresh tokens, this is the \\\&quot;refresh_token\\\&quot; value returned.
     * @param scope An optional, space separated list of required scopes. If the access token was not granted one of the scopes, the result of active will be false.
     */
    public introspectOAuth2Token(token: string, scope?: string, _options?: Configuration): Promise<IntrospectedOAuth2Token> {
        const result = this.api.introspectOAuth2Token(token, scope, _options);
        return result.toPromise();
    }

    /**
     * This endpoint lists all clients in the database, and never returns client secrets. As a default it lists the first 100 clients.
     * List OAuth 2.0 Clients
     * @param pageSize Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param pageToken Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param clientName The name of the clients to filter by.
     * @param owner The owner of the clients to filter by.
     */
    public listOAuth2Clients(pageSize?: number, pageToken?: string, clientName?: string, owner?: string, _options?: Configuration): Promise<Array<OAuth2Client>> {
        const result = this.api.listOAuth2Clients(pageSize, pageToken, clientName, owner, _options);
        return result.toPromise();
    }

    /**
     * This endpoint lists all subject\'s granted consent sessions, including client and granted scope. If the subject is unknown or has not granted any consent sessions yet, the endpoint returns an empty JSON array with status code 200 OK.
     * List OAuth 2.0 Consent Sessions of a Subject
     * @param subject The subject to list the consent sessions for.
     * @param pageSize Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param pageToken Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param loginSessionId The login session id to list the consent sessions for.
     */
    public listOAuth2ConsentSessions(subject: string, pageSize?: number, pageToken?: string, loginSessionId?: string, _options?: Configuration): Promise<Array<OAuth2ConsentSession>> {
        const result = this.api.listOAuth2ConsentSessions(subject, pageSize, pageToken, loginSessionId, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to list all trusted JWT Bearer Grant Type Issuers.
     * List Trusted OAuth2 JWT Bearer Grant Type Issuers
     * @param maxItems 
     * @param defaultItems 
     * @param issuer If optional \&quot;issuer\&quot; is supplied, only jwt-bearer grants with this issuer will be returned.
     */
    public listTrustedOAuth2JwtGrantIssuers(maxItems?: number, defaultItems?: number, issuer?: string, _options?: Configuration): Promise<Array<TrustedOAuth2JwtGrantIssuer>> {
        const result = this.api.listTrustedOAuth2JwtGrantIssuers(maxItems, defaultItems, issuer, _options);
        return result.toPromise();
    }

    /**
     * Use open source libraries to perform OAuth 2.0 and OpenID Connect available for any programming language. You can find a list of libraries at https://oauth.net/code/  The Ory SDK is not yet able to this endpoint properly.
     * OAuth 2.0 Authorize Endpoint
     */
    public oAuth2Authorize(_options?: Configuration): Promise<void> {
        const result = this.api.oAuth2Authorize(_options);
        return result.toPromise();
    }

    /**
     * Use open source libraries to perform OAuth 2.0 and OpenID Connect available for any programming language. You can find a list of libraries here https://oauth.net/code/  The Ory SDK is not yet able to this endpoint properly.
     * The OAuth 2.0 Token Endpoint
     * @param grantType 
     * @param clientId 
     * @param code 
     * @param redirectUri 
     * @param refreshToken 
     */
    public oauth2TokenExchange(grantType: string, clientId?: string, code?: string, redirectUri?: string, refreshToken?: string, _options?: Configuration): Promise<OAuth2TokenExchange> {
        const result = this.api.oauth2TokenExchange(grantType, clientId, code, redirectUri, refreshToken, _options);
        return result.toPromise();
    }

    /**
     * Patch an existing OAuth 2.0 Client using JSON Patch. If you pass `client_secret` the secret will be updated and returned via the API. This is the only time you will be able to retrieve the client secret, so write it down and keep it safe.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Patch OAuth 2.0 Client
     * @param id The id of the OAuth 2.0 Client.
     * @param jsonPatch OAuth 2.0 Client JSON Patch Body
     */
    public patchOAuth2Client(id: string, jsonPatch: Array<JsonPatch>, _options?: Configuration): Promise<OAuth2Client> {
        const result = this.api.patchOAuth2Client(id, jsonPatch, _options);
        return result.toPromise();
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject\'s behalf.  The consent challenge is appended to the consent provider\'s URL to which the subject\'s user-agent (browser) is redirected to. The consent provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted or rejected the request.  This endpoint tells Ory that the subject has not authorized the OAuth 2.0 client to access resources on his/her behalf. The consent provider must include a reason why the consent was not granted.  The response contains a redirect URL which the consent provider should redirect the user-agent to.  The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please head over to the OAuth 2.0 documentation.
     * Reject OAuth 2.0 Consent Request
     * @param consentChallenge OAuth 2.0 Consent Request Challenge
     * @param rejectOAuth2Request 
     */
    public rejectOAuth2ConsentRequest(consentChallenge: string, rejectOAuth2Request?: RejectOAuth2Request, _options?: Configuration): Promise<OAuth2RedirectTo> {
        const result = this.api.rejectOAuth2ConsentRequest(consentChallenge, rejectOAuth2Request, _options);
        return result.toPromise();
    }

    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell the Ory OAuth2 Service about it.  The authentication challenge is appended to the login provider URL to which the subject\'s user-agent (browser) is redirected to. The login provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.  This endpoint tells Ory that the subject has not authenticated and includes a reason why the authentication was denied.  The response contains a redirect URL which the login provider should redirect the user-agent to.
     * Reject OAuth 2.0 Login Request
     * @param loginChallenge OAuth 2.0 Login Request Challenge
     * @param rejectOAuth2Request 
     */
    public rejectOAuth2LoginRequest(loginChallenge: string, rejectOAuth2Request?: RejectOAuth2Request, _options?: Configuration): Promise<OAuth2RedirectTo> {
        const result = this.api.rejectOAuth2LoginRequest(loginChallenge, rejectOAuth2Request, _options);
        return result.toPromise();
    }

    /**
     * When a user or an application requests Ory OAuth 2.0 to remove the session state of a subject, this endpoint is used to deny that logout request. No HTTP request body is required.  The response is empty as the logout provider has to chose what action to perform next.
     * Reject OAuth 2.0 Session Logout Request
     * @param logoutChallenge 
     */
    public rejectOAuth2LogoutRequest(logoutChallenge: string, _options?: Configuration): Promise<void> {
        const result = this.api.rejectOAuth2LogoutRequest(logoutChallenge, _options);
        return result.toPromise();
    }

    /**
     * This endpoint revokes a subject\'s granted consent sessions and invalidates all associated OAuth 2.0 Access Tokens. You may also only revoke sessions for a specific OAuth 2.0 Client ID.
     * Revoke OAuth 2.0 Consent Sessions of a Subject
     * @param subject OAuth 2.0 Consent Subject  The subject whose consent sessions should be deleted.
     * @param client OAuth 2.0 Client ID  If set, deletes only those consent sessions that have been granted to the specified OAuth 2.0 Client ID.
     * @param all Revoke All Consent Sessions  If set to &#x60;true&#x60; deletes all consent sessions by the Subject that have been granted.
     */
    public revokeOAuth2ConsentSessions(subject: string, client?: string, all?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.revokeOAuth2ConsentSessions(subject, client, all, _options);
        return result.toPromise();
    }

    /**
     * This endpoint invalidates authentication sessions. After revoking the authentication session(s), the subject has to re-authenticate at the Ory OAuth2 Provider. This endpoint does not invalidate any tokens.  If you send the subject in a query param, all authentication sessions that belong to that subject are revoked. No OpennID Connect Front- or Back-channel logout is performed in this case.  Alternatively, you can send a SessionID via `sid` query param, in which case, only the session that is connected to that SessionID is revoked. OpenID Connect Back-channel logout is performed in this case.
     * Revokes OAuth 2.0 Login Sessions by either a Subject or a SessionID
     * @param subject OAuth 2.0 Subject  The subject to revoke authentication sessions for.
     * @param sid OAuth 2.0 Subject  The subject to revoke authentication sessions for.
     */
    public revokeOAuth2LoginSessions(subject?: string, sid?: string, _options?: Configuration): Promise<void> {
        const result = this.api.revokeOAuth2LoginSessions(subject, sid, _options);
        return result.toPromise();
    }

    /**
     * Revoking a token (both access and refresh) means that the tokens will be invalid. A revoked access token can no longer be used to make access requests, and a revoked refresh token can no longer be used to refresh an access token. Revoking a refresh token also invalidates the access token that was created with it. A token may only be revoked by the client the token was generated for.
     * Revoke OAuth 2.0 Access or Refresh Token
     * @param token 
     * @param clientId 
     * @param clientSecret 
     */
    public revokeOAuth2Token(token: string, clientId?: string, clientSecret?: string, _options?: Configuration): Promise<void> {
        const result = this.api.revokeOAuth2Token(token, clientId, clientSecret, _options);
        return result.toPromise();
    }

    /**
     * Replaces an existing OAuth 2.0 Client with the payload you send. If you pass `client_secret` the secret is used, otherwise the existing secret is used.  If set, the secret is echoed in the response. It is not possible to retrieve it later on.  OAuth 2.0 Clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Set OAuth 2.0 Client
     * @param id OAuth 2.0 Client ID
     * @param oAuth2Client OAuth 2.0 Client Request Body
     */
    public setOAuth2Client(id: string, oAuth2Client: OAuth2Client, _options?: Configuration): Promise<OAuth2Client> {
        const result = this.api.setOAuth2Client(id, oAuth2Client, _options);
        return result.toPromise();
    }

    /**
     * Set lifespans of different token types issued for this OAuth 2.0 client. Does not modify other fields.
     * Set OAuth2 Client Token Lifespans
     * @param id OAuth 2.0 Client ID
     * @param oAuth2ClientTokenLifespans 
     */
    public setOAuth2ClientLifespans(id: string, oAuth2ClientTokenLifespans?: OAuth2ClientTokenLifespans, _options?: Configuration): Promise<OAuth2Client> {
        const result = this.api.setOAuth2ClientLifespans(id, oAuth2ClientTokenLifespans, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to establish a trust relationship for a JWT issuer to perform JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants [RFC7523](https://datatracker.ietf.org/doc/html/rfc7523).
     * Trust OAuth2 JWT Bearer Grant Type Issuer
     * @param trustOAuth2JwtGrantIssuer 
     */
    public trustOAuth2JwtGrantIssuer(trustOAuth2JwtGrantIssuer?: TrustOAuth2JwtGrantIssuer, _options?: Configuration): Promise<TrustedOAuth2JwtGrantIssuer> {
        const result = this.api.trustOAuth2JwtGrantIssuer(trustOAuth2JwtGrantIssuer, _options);
        return result.toPromise();
    }


}



import { ObservableOidcApi } from './ObservableAPI.ts';

import { OidcApiRequestFactory, OidcApiResponseProcessor} from "../apis/OidcApi.ts";
export class PromiseOidcApi {
    private api: ObservableOidcApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OidcApiRequestFactory,
        responseProcessor?: OidcApiResponseProcessor
    ) {
        this.api = new ObservableOidcApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint behaves like the administrative counterpart (`createOAuth2Client`) but is capable of facing the public internet directly and can be used in self-service. It implements the OpenID Connect Dynamic Client Registration Protocol. This feature needs to be enabled in the configuration. This endpoint is disabled by default. It can be enabled by an administrator.  Please note that using this endpoint you are not able to choose the `client_secret` nor the `client_id` as those values will be server generated when specifying `token_endpoint_auth_method` as `client_secret_basic` or `client_secret_post`.  The `client_secret` will be returned in the response and you will not be able to retrieve it later on. Write the secret down and keep it somewhere safe.
     * Register OAuth2 Client using OpenID Dynamic Client Registration
     * @param oAuth2Client Dynamic Client Registration Request Body
     */
    public createOidcDynamicClient(oAuth2Client: OAuth2Client, _options?: Configuration): Promise<OAuth2Client> {
        const result = this.api.createOidcDynamicClient(oAuth2Client, _options);
        return result.toPromise();
    }

    /**
     * This endpoint behaves like the administrative counterpart (`deleteOAuth2Client`) but is capable of facing the public internet directly and can be used in self-service. It implements the OpenID Connect Dynamic Client Registration Protocol. This feature needs to be enabled in the configuration. This endpoint is disabled by default. It can be enabled by an administrator.  To use this endpoint, you will need to present the client\'s authentication credentials. If the OAuth2 Client uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query. If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Delete OAuth 2.0 Client using the OpenID Dynamic Client Registration Management Protocol
     * @param id The id of the OAuth 2.0 Client.
     */
    public deleteOidcDynamicClient(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOidcDynamicClient(id, _options);
        return result.toPromise();
    }

    /**
     * A mechanism for an OpenID Connect Relying Party to discover the End-User\'s OpenID Provider and obtain information needed to interact with it, including its OAuth 2.0 endpoint locations.  Popular libraries for OpenID Connect clients include oidc-client-js (JavaScript), go-oidc (Golang), and others. For a full list of clients go here: https://openid.net/developers/certified/
     * OpenID Connect Discovery
     */
    public discoverOidcConfiguration(_options?: Configuration): Promise<OidcConfiguration> {
        const result = this.api.discoverOidcConfiguration(_options);
        return result.toPromise();
    }

    /**
     * This endpoint behaves like the administrative counterpart (`getOAuth2Client`) but is capable of facing the public internet directly and can be used in self-service. It implements the OpenID Connect Dynamic Client Registration Protocol.  To use this endpoint, you will need to present the client\'s authentication credentials. If the OAuth2 Client uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query. If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.
     * Get OAuth2 Client using OpenID Dynamic Client Registration
     * @param id The id of the OAuth 2.0 Client.
     */
    public getOidcDynamicClient(id: string, _options?: Configuration): Promise<OAuth2Client> {
        const result = this.api.getOidcDynamicClient(id, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns the payload of the ID Token, including `session.id_token` values, of the provided OAuth 2.0 Access Token\'s consent request.  In the case of authentication error, a WWW-Authenticate header might be set in the response with more information about the error. See [the spec](https://datatracker.ietf.org/doc/html/rfc6750#section-3) for more details about header format.
     * OpenID Connect Userinfo
     */
    public getOidcUserInfo(_options?: Configuration): Promise<OidcUserInfo> {
        const result = this.api.getOidcUserInfo(_options);
        return result.toPromise();
    }

    /**
     * This endpoint initiates and completes user logout at the Ory OAuth2 & OpenID provider and initiates OpenID Connect Front- / Back-channel logout:  https://openid.net/specs/openid-connect-frontchannel-1_0.html https://openid.net/specs/openid-connect-backchannel-1_0.html  Back-channel logout is performed asynchronously and does not affect logout flow.
     * OpenID Connect Front- and Back-channel Enabled Logout
     */
    public revokeOidcSession(_options?: Configuration): Promise<void> {
        const result = this.api.revokeOidcSession(_options);
        return result.toPromise();
    }

    /**
     * This endpoint behaves like the administrative counterpart (`setOAuth2Client`) but is capable of facing the public internet directly to be used by third parties. It implements the OpenID Connect Dynamic Client Registration Protocol.  This feature is disabled per default. It can be enabled by a system administrator.  If you pass `client_secret` the secret is used, otherwise the existing secret is used. If set, the secret is echoed in the response. It is not possible to retrieve it later on.  To use this endpoint, you will need to present the client\'s authentication credentials. If the OAuth2 Client uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query. If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Set OAuth2 Client using OpenID Dynamic Client Registration
     * @param id OAuth 2.0 Client ID
     * @param oAuth2Client OAuth 2.0 Client Request Body
     */
    public setOidcDynamicClient(id: string, oAuth2Client: OAuth2Client, _options?: Configuration): Promise<OAuth2Client> {
        const result = this.api.setOidcDynamicClient(id, oAuth2Client, _options);
        return result.toPromise();
    }


}



import { ObservablePermissionApi } from './ObservableAPI.ts';

import { PermissionApiRequestFactory, PermissionApiResponseProcessor} from "../apis/PermissionApi.ts";
export class PromisePermissionApi {
    private api: ObservablePermissionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PermissionApiRequestFactory,
        responseProcessor?: PermissionApiResponseProcessor
    ) {
        this.api = new ObservablePermissionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param namespace Namespace of the Relationship
     * @param object Object of the Relationship
     * @param relation Relation of the Relationship
     * @param subjectId SubjectID of the Relationship
     * @param subjectSetNamespace Namespace of the Subject Set
     * @param subjectSetObject Object of the Subject Set
     * @param subjectSetRelation Relation of the Subject Set
     * @param maxDepth 
     */
    public checkPermission(namespace?: string, object?: string, relation?: string, subjectId?: string, subjectSetNamespace?: string, subjectSetObject?: string, subjectSetRelation?: string, maxDepth?: number, _options?: Configuration): Promise<CheckPermissionResult> {
        const result = this.api.checkPermission(namespace, object, relation, subjectId, subjectSetNamespace, subjectSetObject, subjectSetRelation, maxDepth, _options);
        return result.toPromise();
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param namespace Namespace of the Relationship
     * @param object Object of the Relationship
     * @param relation Relation of the Relationship
     * @param subjectId SubjectID of the Relationship
     * @param subjectSetNamespace Namespace of the Subject Set
     * @param subjectSetObject Object of the Subject Set
     * @param subjectSetRelation Relation of the Subject Set
     * @param maxDepth 
     */
    public checkPermissionOrError(namespace?: string, object?: string, relation?: string, subjectId?: string, subjectSetNamespace?: string, subjectSetObject?: string, subjectSetRelation?: string, maxDepth?: number, _options?: Configuration): Promise<CheckPermissionResult> {
        const result = this.api.checkPermissionOrError(namespace, object, relation, subjectId, subjectSetNamespace, subjectSetObject, subjectSetRelation, maxDepth, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to expand a relationship tuple into permissions.
     * Expand a Relationship into permissions.
     * @param namespace Namespace of the Subject Set
     * @param object Object of the Subject Set
     * @param relation Relation of the Subject Set
     * @param maxDepth 
     */
    public expandPermissions(namespace: string, object: string, relation: string, maxDepth?: number, _options?: Configuration): Promise<ExpandedPermissionTree> {
        const result = this.api.expandPermissions(namespace, object, relation, maxDepth, _options);
        return result.toPromise();
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param maxDepth 
     * @param postCheckPermissionBody 
     */
    public postCheckPermission(maxDepth?: number, postCheckPermissionBody?: PostCheckPermissionBody, _options?: Configuration): Promise<CheckPermissionResult> {
        const result = this.api.postCheckPermission(maxDepth, postCheckPermissionBody, _options);
        return result.toPromise();
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param maxDepth nolint:deadcode,unused
     * @param postCheckPermissionOrErrorBody 
     */
    public postCheckPermissionOrError(maxDepth?: number, postCheckPermissionOrErrorBody?: PostCheckPermissionOrErrorBody, _options?: Configuration): Promise<CheckPermissionResult> {
        const result = this.api.postCheckPermissionOrError(maxDepth, postCheckPermissionOrErrorBody, _options);
        return result.toPromise();
    }


}



import { ObservableProjectApi } from './ObservableAPI.ts';

import { ProjectApiRequestFactory, ProjectApiResponseProcessor} from "../apis/ProjectApi.ts";
export class PromiseProjectApi {
    private api: ObservableProjectApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectApiRequestFactory,
        responseProcessor?: ProjectApiResponseProcessor
    ) {
        this.api = new ObservableProjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new project.
     * Create a Project
     * @param createProjectBody 
     */
    public createProject(createProjectBody?: CreateProjectBody, _options?: Configuration): Promise<Project> {
        const result = this.api.createProject(createProjectBody, _options);
        return result.toPromise();
    }

    /**
     * Create an API token for a project.
     * Create project API token
     * @param project The Project ID or Project slug
     * @param createProjectApiKeyRequest 
     */
    public createProjectApiKey(project: string, createProjectApiKeyRequest?: CreateProjectApiKeyRequest, _options?: Configuration): Promise<ProjectApiKey> {
        const result = this.api.createProjectApiKey(project, createProjectApiKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes an API token and immediately removes it.
     * Delete project API token
     * @param project The Project ID or Project slug
     * @param tokenId The Token ID
     */
    public deleteProjectApiKey(project: string, tokenId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteProjectApiKey(project, tokenId, _options);
        return result.toPromise();
    }

    /**
     * Use this API to get your active project in the Ory Network Console UI.
     * Returns the Ory Network Project selected in the Ory Network Console
     */
    public getActiveProjectInConsole(_options?: Configuration): Promise<ActiveProjectInConsole> {
        const result = this.api.getActiveProjectInConsole(_options);
        return result.toPromise();
    }

    /**
     * Get a projects you have access to by its ID.
     * Get a Project
     * @param projectId Project ID  The project\&#39;s ID.
     */
    public getProject(projectId: string, _options?: Configuration): Promise<Project> {
        const result = this.api.getProject(projectId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint requires the user to be a member of the project with the role `OWNER` or `DEVELOPER`.
     * Get all members associated with this project
     * @param projectId Project ID  The project\&#39;s ID.
     */
    public getProjectMembers(projectId: string, _options?: Configuration): Promise<Array<CloudAccount>> {
        const result = this.api.getProjectMembers(projectId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves project metrics for the specified event type and time range
     * @param projectId Project ID
     * @param eventType The event type to query for
     * @param resolution The resolution of the buckets  The minimum resolution is 1 hour.
     * @param _from The start time of the time window
     * @param to The end time of the time window
     */
    public getProjectMetrics(projectId: string, eventType: string, resolution: string, _from: Date, to: Date, _options?: Configuration): Promise<GetProjectMetricsResponse> {
        const result = this.api.getProjectMetrics(projectId, eventType, resolution, _from, to, _options);
        return result.toPromise();
    }

    /**
     * A list of all the project\'s API tokens.
     * List a project\'s API Tokens
     * @param project The Project ID or Project slug
     */
    public listProjectApiKeys(project: string, _options?: Configuration): Promise<Array<ProjectApiKey>> {
        const result = this.api.listProjectApiKeys(project, _options);
        return result.toPromise();
    }

    /**
     * Lists all projects you have access to.
     * List All Projects
     */
    public listProjects(_options?: Configuration): Promise<Array<ProjectMetadata>> {
        const result = this.api.listProjects(_options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use the `patchProjectWithRevision` endpoint instead to specify the exact revision the patch was generated for.  This endpoints allows you to patch individual Ory Network project configuration keys for Ory\'s services (identity, permission, ...). The configuration format is fully compatible with the open source projects for the respective services (e.g. Ory Kratos for Identity, Ory Keto for Permissions).  This endpoint expects the `version` key to be set in the payload. If it is unset, it will try to import the config as if it is from the most recent version.  If you have an older version of a configuration, you should set the version key in the payload!  While this endpoint is able to process all configuration items related to features (e.g. password reset), it does not support operational configuration items (e.g. port, tracing, logging) otherwise available in the open source.  For configuration items that can not be translated to the Ory Network, this endpoint will return a list of warnings to help you understand which parts of your config could not be processed.
     * Patch an Ory Network Project Configuration
     * @param projectId Project ID  The project\&#39;s ID.
     * @param jsonPatch 
     */
    public patchProject(projectId: string, jsonPatch?: Array<JsonPatch>, _options?: Configuration): Promise<SuccessfulProjectUpdate> {
        const result = this.api.patchProject(projectId, jsonPatch, _options);
        return result.toPromise();
    }

    /**
     * !! Use with extreme caution !!  Using this API endpoint you can purge (completely delete) a project and its data. This action can not be undone and will delete ALL your data.  !! Use with extreme caution !!
     * Irrecoverably purge a project
     * @param projectId Project ID  The project\&#39;s ID.
     */
    public purgeProject(projectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.purgeProject(projectId, _options);
        return result.toPromise();
    }

    /**
     * This also sets their invite status to `REMOVED`. This endpoint requires the user to be a member of the project with the role `OWNER`.
     * Remove a member associated with this project
     * @param projectId Project ID  The project\&#39;s ID.
     * @param memberId Member ID
     */
    public removeProjectMember(projectId: string, memberId: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeProjectMember(projectId, memberId, _options);
        return result.toPromise();
    }

    /**
     * Use this API to set your active project in the Ory Network Console UI.
     * Sets the Ory Network Project active in the Ory Network Console
     * @param setActiveProjectInConsoleBody 
     */
    public setActiveProjectInConsole(setActiveProjectInConsoleBody?: SetActiveProjectInConsoleBody, _options?: Configuration): Promise<void> {
        const result = this.api.setActiveProjectInConsole(setActiveProjectInConsoleBody, _options);
        return result.toPromise();
    }

    /**
     * This endpoints allows you to update the Ory Network project configuration for individual services (identity, permission, ...). The configuration is fully compatible with the open source projects for the respective services (e.g. Ory Kratos for Identity, Ory Keto for Permissions).  This endpoint expects the `version` key to be set in the payload. If it is unset, it will try to import the config as if it is from the most recent version.  If you have an older version of a configuration, you should set the version key in the payload!  While this endpoint is able to process all configuration items related to features (e.g. password reset), it does not support operational configuration items (e.g. port, tracing, logging) otherwise available in the open source.  For configuration items that can not be translated to the Ory Network, this endpoint will return a list of warnings to help you understand which parts of your config could not be processed.  Be aware that updating any service\'s configuration will completely override your current configuration for that service!
     * Update an Ory Network Project Configuration
     * @param projectId Project ID  The project\&#39;s ID.
     * @param setProject 
     */
    public setProject(projectId: string, setProject?: SetProject, _options?: Configuration): Promise<SuccessfulProjectUpdate> {
        const result = this.api.setProject(projectId, setProject, _options);
        return result.toPromise();
    }


}



import { ObservableRelationshipApi } from './ObservableAPI.ts';

import { RelationshipApiRequestFactory, RelationshipApiResponseProcessor} from "../apis/RelationshipApi.ts";
export class PromiseRelationshipApi {
    private api: ObservableRelationshipApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RelationshipApiRequestFactory,
        responseProcessor?: RelationshipApiResponseProcessor
    ) {
        this.api = new ObservableRelationshipApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The OPL file is expected in the body of the request.
     * Check the syntax of an OPL file
     * @param body 
     */
    public checkOplSyntax(body?: string, _options?: Configuration): Promise<CheckOplSyntaxResult> {
        const result = this.api.checkOplSyntax(body, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to create a relationship.
     * Create a Relationship
     * @param createRelationshipBody 
     */
    public createRelationship(createRelationshipBody?: CreateRelationshipBody, _options?: Configuration): Promise<Relationship> {
        const result = this.api.createRelationship(createRelationshipBody, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to delete relationships
     * Delete Relationships
     * @param namespace Namespace of the Relationship
     * @param object Object of the Relationship
     * @param relation Relation of the Relationship
     * @param subjectId SubjectID of the Relationship
     * @param subjectSetNamespace Namespace of the Subject Set
     * @param subjectSetObject Object of the Subject Set
     * @param subjectSetRelation Relation of the Subject Set
     */
    public deleteRelationships(namespace?: string, object?: string, relation?: string, subjectId?: string, subjectSetNamespace?: string, subjectSetObject?: string, subjectSetRelation?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteRelationships(namespace, object, relation, subjectId, subjectSetNamespace, subjectSetObject, subjectSetRelation, _options);
        return result.toPromise();
    }

    /**
     * Get all relationships that match the query. Only the namespace field is required.
     * Query relationships
     * @param pageToken 
     * @param pageSize 
     * @param namespace Namespace of the Relationship
     * @param object Object of the Relationship
     * @param relation Relation of the Relationship
     * @param subjectId SubjectID of the Relationship
     * @param subjectSetNamespace Namespace of the Subject Set
     * @param subjectSetObject Object of the Subject Set
     * @param subjectSetRelation Relation of the Subject Set
     */
    public getRelationships(pageToken?: string, pageSize?: number, namespace?: string, object?: string, relation?: string, subjectId?: string, subjectSetNamespace?: string, subjectSetObject?: string, subjectSetRelation?: string, _options?: Configuration): Promise<Relationships> {
        const result = this.api.getRelationships(pageToken, pageSize, namespace, object, relation, subjectId, subjectSetNamespace, subjectSetObject, subjectSetRelation, _options);
        return result.toPromise();
    }

    /**
     * Get all namespaces
     * Query namespaces
     */
    public listRelationshipNamespaces(_options?: Configuration): Promise<RelationshipNamespaces> {
        const result = this.api.listRelationshipNamespaces(_options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to patch one or more relationships.
     * Patch Multiple Relationships
     * @param relationshipPatch 
     */
    public patchRelationships(relationshipPatch?: Array<RelationshipPatch>, _options?: Configuration): Promise<void> {
        const result = this.api.patchRelationships(relationshipPatch, _options);
        return result.toPromise();
    }


}



import { ObservableWellknownApi } from './ObservableAPI.ts';

import { WellknownApiRequestFactory, WellknownApiResponseProcessor} from "../apis/WellknownApi.ts";
export class PromiseWellknownApi {
    private api: ObservableWellknownApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WellknownApiRequestFactory,
        responseProcessor?: WellknownApiResponseProcessor
    ) {
        this.api = new ObservableWellknownApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint returns JSON Web Keys required to verifying OpenID Connect ID Tokens and, if enabled, OAuth 2.0 JWT Access Tokens. This endpoint can be used with client libraries like [node-jwks-rsa](https://github.com/auth0/node-jwks-rsa) among others.
     * Discover Well-Known JSON Web Keys
     */
    public discoverJsonWebKeys(_options?: Configuration): Promise<JsonWebKeySet> {
        const result = this.api.discoverJsonWebKeys(_options);
        return result.toPromise();
    }


}



