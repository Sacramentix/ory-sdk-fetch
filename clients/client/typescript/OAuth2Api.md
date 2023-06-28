# .OAuth2Api

All URIs are relative to *https://playground.projects.oryapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptOAuth2ConsentRequest**](OAuth2Api.md#acceptOAuth2ConsentRequest) | **PUT** /admin/oauth2/auth/requests/consent/accept | Accept OAuth 2.0 Consent Request
[**acceptOAuth2LoginRequest**](OAuth2Api.md#acceptOAuth2LoginRequest) | **PUT** /admin/oauth2/auth/requests/login/accept | Accept OAuth 2.0 Login Request
[**acceptOAuth2LogoutRequest**](OAuth2Api.md#acceptOAuth2LogoutRequest) | **PUT** /admin/oauth2/auth/requests/logout/accept | Accept OAuth 2.0 Session Logout Request
[**createOAuth2Client**](OAuth2Api.md#createOAuth2Client) | **POST** /admin/clients | Create OAuth 2.0 Client
[**deleteOAuth2Client**](OAuth2Api.md#deleteOAuth2Client) | **DELETE** /admin/clients/{id} | Delete OAuth 2.0 Client
[**deleteOAuth2Token**](OAuth2Api.md#deleteOAuth2Token) | **DELETE** /admin/oauth2/tokens | Delete OAuth 2.0 Access Tokens from specific OAuth 2.0 Client
[**deleteTrustedOAuth2JwtGrantIssuer**](OAuth2Api.md#deleteTrustedOAuth2JwtGrantIssuer) | **DELETE** /admin/trust/grants/jwt-bearer/issuers/{id} | Delete Trusted OAuth2 JWT Bearer Grant Type Issuer
[**getOAuth2Client**](OAuth2Api.md#getOAuth2Client) | **GET** /admin/clients/{id} | Get an OAuth 2.0 Client
[**getOAuth2ConsentRequest**](OAuth2Api.md#getOAuth2ConsentRequest) | **GET** /admin/oauth2/auth/requests/consent | Get OAuth 2.0 Consent Request
[**getOAuth2LoginRequest**](OAuth2Api.md#getOAuth2LoginRequest) | **GET** /admin/oauth2/auth/requests/login | Get OAuth 2.0 Login Request
[**getOAuth2LogoutRequest**](OAuth2Api.md#getOAuth2LogoutRequest) | **GET** /admin/oauth2/auth/requests/logout | Get OAuth 2.0 Session Logout Request
[**getTrustedOAuth2JwtGrantIssuer**](OAuth2Api.md#getTrustedOAuth2JwtGrantIssuer) | **GET** /admin/trust/grants/jwt-bearer/issuers/{id} | Get Trusted OAuth2 JWT Bearer Grant Type Issuer
[**introspectOAuth2Token**](OAuth2Api.md#introspectOAuth2Token) | **POST** /admin/oauth2/introspect | Introspect OAuth2 Access and Refresh Tokens
[**listOAuth2Clients**](OAuth2Api.md#listOAuth2Clients) | **GET** /admin/clients | List OAuth 2.0 Clients
[**listOAuth2ConsentSessions**](OAuth2Api.md#listOAuth2ConsentSessions) | **GET** /admin/oauth2/auth/sessions/consent | List OAuth 2.0 Consent Sessions of a Subject
[**listTrustedOAuth2JwtGrantIssuers**](OAuth2Api.md#listTrustedOAuth2JwtGrantIssuers) | **GET** /admin/trust/grants/jwt-bearer/issuers | List Trusted OAuth2 JWT Bearer Grant Type Issuers
[**oAuth2Authorize**](OAuth2Api.md#oAuth2Authorize) | **GET** /oauth2/auth | OAuth 2.0 Authorize Endpoint
[**oauth2TokenExchange**](OAuth2Api.md#oauth2TokenExchange) | **POST** /oauth2/token | The OAuth 2.0 Token Endpoint
[**patchOAuth2Client**](OAuth2Api.md#patchOAuth2Client) | **PATCH** /admin/clients/{id} | Patch OAuth 2.0 Client
[**rejectOAuth2ConsentRequest**](OAuth2Api.md#rejectOAuth2ConsentRequest) | **PUT** /admin/oauth2/auth/requests/consent/reject | Reject OAuth 2.0 Consent Request
[**rejectOAuth2LoginRequest**](OAuth2Api.md#rejectOAuth2LoginRequest) | **PUT** /admin/oauth2/auth/requests/login/reject | Reject OAuth 2.0 Login Request
[**rejectOAuth2LogoutRequest**](OAuth2Api.md#rejectOAuth2LogoutRequest) | **PUT** /admin/oauth2/auth/requests/logout/reject | Reject OAuth 2.0 Session Logout Request
[**revokeOAuth2ConsentSessions**](OAuth2Api.md#revokeOAuth2ConsentSessions) | **DELETE** /admin/oauth2/auth/sessions/consent | Revoke OAuth 2.0 Consent Sessions of a Subject
[**revokeOAuth2LoginSessions**](OAuth2Api.md#revokeOAuth2LoginSessions) | **DELETE** /admin/oauth2/auth/sessions/login | Revokes OAuth 2.0 Login Sessions by either a Subject or a SessionID
[**revokeOAuth2Token**](OAuth2Api.md#revokeOAuth2Token) | **POST** /oauth2/revoke | Revoke OAuth 2.0 Access or Refresh Token
[**setOAuth2Client**](OAuth2Api.md#setOAuth2Client) | **PUT** /admin/clients/{id} | Set OAuth 2.0 Client
[**setOAuth2ClientLifespans**](OAuth2Api.md#setOAuth2ClientLifespans) | **PUT** /admin/clients/{id}/lifespans | Set OAuth2 Client Token Lifespans
[**trustOAuth2JwtGrantIssuer**](OAuth2Api.md#trustOAuth2JwtGrantIssuer) | **POST** /admin/trust/grants/jwt-bearer/issuers | Trust OAuth2 JWT Bearer Grant Type Issuer


# **acceptOAuth2ConsentRequest**
> OAuth2RedirectTo acceptOAuth2ConsentRequest()

When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject\'s behalf.  The consent challenge is appended to the consent provider\'s URL to which the subject\'s user-agent (browser) is redirected to. The consent provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted or rejected the request.  This endpoint tells Ory that the subject has authorized the OAuth 2.0 client to access resources on his/her behalf. The consent provider includes additional information, such as session data for access and ID tokens, and if the consent request should be used as basis for future requests.  The response contains a redirect URL which the consent provider should redirect the user-agent to.  The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please head over to the OAuth 2.0 documentation.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiAcceptOAuth2ConsentRequestRequest = {
  // string | OAuth 2.0 Consent Request Challenge
  consentChallenge: "consent_challenge_example",
  // AcceptOAuth2ConsentRequest (optional)
  acceptOAuth2ConsentRequest: {
    grant_access_token_audience: [
      "grant_access_token_audience_example",
    ],
    grant_scope: [
      "grant_scope_example",
    ],
    handled_at: new Date('1970-01-01T00:00:00.00Z'),
    remember: true,
    remember_for: 1,
    session: {
      access_token: null,
      id_token: null,
    },
  },
};

apiInstance.acceptOAuth2ConsentRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptOAuth2ConsentRequest** | **AcceptOAuth2ConsentRequest**|  |
 **consentChallenge** | [**string**] | OAuth 2.0 Consent Request Challenge | defaults to undefined


### Return type

**OAuth2RedirectTo**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oAuth2RedirectTo |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **acceptOAuth2LoginRequest**
> OAuth2RedirectTo acceptOAuth2LoginRequest()

When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell the Ory OAuth2 Service about it.  The authentication challenge is appended to the login provider URL to which the subject\'s user-agent (browser) is redirected to. The login provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.  This endpoint tells Ory that the subject has successfully authenticated and includes additional information such as the subject\'s ID and if Ory should remember the subject\'s subject agent for future authentication attempts by setting a cookie.  The response contains a redirect URL which the login provider should redirect the user-agent to.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiAcceptOAuth2LoginRequestRequest = {
  // string | OAuth 2.0 Login Request Challenge
  loginChallenge: "login_challenge_example",
  // AcceptOAuth2LoginRequest (optional)
  acceptOAuth2LoginRequest: {
    acr: "acr_example",
    amr: [
      "amr_example",
    ],
    context: {},
    extend_session_lifespan: true,
    force_subject_identifier: "force_subject_identifier_example",
    remember: true,
    remember_for: 1,
    subject: "subject_example",
  },
};

apiInstance.acceptOAuth2LoginRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptOAuth2LoginRequest** | **AcceptOAuth2LoginRequest**|  |
 **loginChallenge** | [**string**] | OAuth 2.0 Login Request Challenge | defaults to undefined


### Return type

**OAuth2RedirectTo**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oAuth2RedirectTo |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **acceptOAuth2LogoutRequest**
> OAuth2RedirectTo acceptOAuth2LogoutRequest()

When a user or an application requests Ory OAuth 2.0 to remove the session state of a subject, this endpoint is used to confirm that logout request.  The response contains a redirect URL which the consent provider should redirect the user-agent to.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiAcceptOAuth2LogoutRequestRequest = {
  // string | OAuth 2.0 Logout Request Challenge
  logoutChallenge: "logout_challenge_example",
};

apiInstance.acceptOAuth2LogoutRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logoutChallenge** | [**string**] | OAuth 2.0 Logout Request Challenge | defaults to undefined


### Return type

**OAuth2RedirectTo**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oAuth2RedirectTo |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOAuth2Client**
> OAuth2Client createOAuth2Client(oAuth2Client)

Create a new OAuth 2.0 client. If you pass `client_secret` the secret is used, otherwise a random secret is generated. The secret is echoed in the response. It is not possible to retrieve it later on.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiCreateOAuth2ClientRequest = {
  // OAuth2Client | OAuth 2.0 Client Request Body
  oAuth2Client: {
    access_token_strategy: "access_token_strategy_example",
    allowed_cors_origins: [
      "allowed_cors_origins_example",
    ],
    audience: [
      "audience_example",
    ],
    authorization_code_grant_access_token_lifespan: "4ms",
    authorization_code_grant_id_token_lifespan: "4ms",
    authorization_code_grant_refresh_token_lifespan: "4ms",
    backchannel_logout_session_required: true,
    backchannel_logout_uri: "backchannel_logout_uri_example",
    client_credentials_grant_access_token_lifespan: "4ms",
    client_id: "client_id_example",
    client_name: "client_name_example",
    client_secret: "client_secret_example",
    client_secret_expires_at: 1,
    client_uri: "client_uri_example",
    contacts: [
      "contacts_example",
    ],
    created_at: new Date('1970-01-01T00:00:00.00Z'),
    frontchannel_logout_session_required: true,
    frontchannel_logout_uri: "frontchannel_logout_uri_example",
    grant_types: [
      "grant_types_example",
    ],
    implicit_grant_access_token_lifespan: "4ms",
    implicit_grant_id_token_lifespan: "4ms",
    jwks: null,
    jwks_uri: "jwks_uri_example",
    jwt_bearer_grant_access_token_lifespan: "4ms",
    logo_uri: "logo_uri_example",
    metadata: {},
    owner: "owner_example",
    policy_uri: "policy_uri_example",
    post_logout_redirect_uris: [
      "post_logout_redirect_uris_example",
    ],
    redirect_uris: [
      "redirect_uris_example",
    ],
    refresh_token_grant_access_token_lifespan: "4ms",
    refresh_token_grant_id_token_lifespan: "4ms",
    refresh_token_grant_refresh_token_lifespan: "4ms",
    registration_access_token: "registration_access_token_example",
    registration_client_uri: "registration_client_uri_example",
    request_object_signing_alg: "request_object_signing_alg_example",
    request_uris: [
      "request_uris_example",
    ],
    response_types: [
      "response_types_example",
    ],
    scope: "scope1 scope-2 scope.3 scope:4",
    sector_identifier_uri: "sector_identifier_uri_example",
    skip_consent: true,
    subject_type: "subject_type_example",
    token_endpoint_auth_method: "client_secret_basic",
    token_endpoint_auth_signing_alg: "token_endpoint_auth_signing_alg_example",
    tos_uri: "tos_uri_example",
    updated_at: new Date('1970-01-01T00:00:00.00Z'),
    userinfo_signed_response_alg: "userinfo_signed_response_alg_example",
  },
};

apiInstance.createOAuth2Client(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuth2Client** | **OAuth2Client**| OAuth 2.0 Client Request Body |


### Return type

**OAuth2Client**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | oAuth2Client |  -  |
**400** | Bad Request Error Response |  -  |
**0** | Default Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOAuth2Client**
> void deleteOAuth2Client()

Delete an existing OAuth 2.0 Client by its ID.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.  Make sure that this endpoint is well protected and only callable by first-party components.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiDeleteOAuth2ClientRequest = {
  // string | The id of the OAuth 2.0 Client.
  id: "id_example",
};

apiInstance.deleteOAuth2Client(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the OAuth 2.0 Client. | defaults to undefined


### Return type

**void**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**0** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOAuth2Token**
> void deleteOAuth2Token()

This endpoint deletes OAuth2 access tokens issued to an OAuth 2.0 Client from the database.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiDeleteOAuth2TokenRequest = {
  // string | OAuth 2.0 Client ID
  clientId: "client_id_example",
};

apiInstance.deleteOAuth2Token(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | [**string**] | OAuth 2.0 Client ID | defaults to undefined


### Return type

**void**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTrustedOAuth2JwtGrantIssuer**
> void deleteTrustedOAuth2JwtGrantIssuer()

Use this endpoint to delete trusted JWT Bearer Grant Type Issuer. The ID is the one returned when you created the trust relationship.  Once deleted, the associated issuer will no longer be able to perform the JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grant.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiDeleteTrustedOAuth2JwtGrantIssuerRequest = {
  // string | The id of the desired grant
  id: "id_example",
};

apiInstance.deleteTrustedOAuth2JwtGrantIssuer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the desired grant | defaults to undefined


### Return type

**void**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**0** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOAuth2Client**
> OAuth2Client getOAuth2Client()

Get an OAuth 2.0 client by its ID. This endpoint never returns the client secret.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiGetOAuth2ClientRequest = {
  // string | The id of the OAuth 2.0 Client.
  id: "id_example",
};

apiInstance.getOAuth2Client(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the OAuth 2.0 Client. | defaults to undefined


### Return type

**OAuth2Client**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oAuth2Client |  -  |
**0** | Default Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOAuth2ConsentRequest**
> OAuth2ConsentRequest getOAuth2ConsentRequest()

When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject\'s behalf.  The consent challenge is appended to the consent provider\'s URL to which the subject\'s user-agent (browser) is redirected to. The consent provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted or rejected the request.  The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please head over to the OAuth 2.0 documentation.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiGetOAuth2ConsentRequestRequest = {
  // string | OAuth 2.0 Consent Request Challenge
  consentChallenge: "consent_challenge_example",
};

apiInstance.getOAuth2ConsentRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentChallenge** | [**string**] | OAuth 2.0 Consent Request Challenge | defaults to undefined


### Return type

**OAuth2ConsentRequest**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oAuth2ConsentRequest |  -  |
**410** | oAuth2RedirectTo |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOAuth2LoginRequest**
> OAuth2LoginRequest getOAuth2LoginRequest()

When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell the Ory OAuth2 Service about it.  Per default, the login provider is Ory itself. You may use a different login provider which needs to be a web-app you write and host, and it must be able to authenticate (\"show the subject a login screen\") a subject (in OAuth2 the proper name for subject is \"resource owner\").  The authentication challenge is appended to the login provider URL to which the subject\'s user-agent (browser) is redirected to. The login provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiGetOAuth2LoginRequestRequest = {
  // string | OAuth 2.0 Login Request Challenge
  loginChallenge: "login_challenge_example",
};

apiInstance.getOAuth2LoginRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginChallenge** | [**string**] | OAuth 2.0 Login Request Challenge | defaults to undefined


### Return type

**OAuth2LoginRequest**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oAuth2LoginRequest |  -  |
**410** | oAuth2RedirectTo |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOAuth2LogoutRequest**
> OAuth2LogoutRequest getOAuth2LogoutRequest()

Use this endpoint to fetch an Ory OAuth 2.0 logout request.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiGetOAuth2LogoutRequestRequest = {
  // string
  logoutChallenge: "logout_challenge_example",
};

apiInstance.getOAuth2LogoutRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logoutChallenge** | [**string**] |  | defaults to undefined


### Return type

**OAuth2LogoutRequest**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oAuth2LogoutRequest |  -  |
**410** | oAuth2RedirectTo |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTrustedOAuth2JwtGrantIssuer**
> TrustedOAuth2JwtGrantIssuer getTrustedOAuth2JwtGrantIssuer()

Use this endpoint to get a trusted JWT Bearer Grant Type Issuer. The ID is the one returned when you created the trust relationship.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiGetTrustedOAuth2JwtGrantIssuerRequest = {
  // string | The id of the desired grant
  id: "id_example",
};

apiInstance.getTrustedOAuth2JwtGrantIssuer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the desired grant | defaults to undefined


### Return type

**TrustedOAuth2JwtGrantIssuer**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | trustedOAuth2JwtGrantIssuer |  -  |
**0** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **introspectOAuth2Token**
> IntrospectedOAuth2Token introspectOAuth2Token()

The introspection endpoint allows to check if a token (both refresh and access) is active or not. An active token is neither expired nor revoked. If a token is active, additional information on the token will be included. You can set additional data for a token by setting `session.access_token` during the consent flow.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiIntrospectOAuth2TokenRequest = {
  // string | The string value of the token. For access tokens, this is the \\\"access_token\\\" value returned from the token endpoint defined in OAuth 2.0. For refresh tokens, this is the \\\"refresh_token\\\" value returned.
  token: "token_example",
  // string | An optional, space separated list of required scopes. If the access token was not granted one of the scopes, the result of active will be false. (optional)
  scope: "scope_example",
};

apiInstance.introspectOAuth2Token(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The string value of the token. For access tokens, this is the \\\&quot;access_token\\\&quot; value returned from the token endpoint defined in OAuth 2.0. For refresh tokens, this is the \\\&quot;refresh_token\\\&quot; value returned. | defaults to undefined
 **scope** | [**string**] | An optional, space separated list of required scopes. If the access token was not granted one of the scopes, the result of active will be false. | (optional) defaults to undefined


### Return type

**IntrospectedOAuth2Token**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | introspectedOAuth2Token |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOAuth2Clients**
> Array<OAuth2Client> listOAuth2Clients()

This endpoint lists all clients in the database, and never returns client secrets. As a default it lists the first 100 clients.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiListOAuth2ClientsRequest = {
  // number | Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination). (optional)
  pageSize: 250,
  // string | Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination). (optional)
  pageToken: "1",
  // string | The name of the clients to filter by. (optional)
  clientName: "client_name_example",
  // string | The owner of the clients to filter by. (optional)
  owner: "owner_example",
};

apiInstance.listOAuth2Clients(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | [**number**] | Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination). | (optional) defaults to 250
 **pageToken** | [**string**] | Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination). | (optional) defaults to '1'
 **clientName** | [**string**] | The name of the clients to filter by. | (optional) defaults to undefined
 **owner** | [**string**] | The owner of the clients to filter by. | (optional) defaults to undefined


### Return type

**Array<OAuth2Client>**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated OAuth2 Client List Response |  -  |
**0** | Default Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOAuth2ConsentSessions**
> Array<OAuth2ConsentSession> listOAuth2ConsentSessions()

This endpoint lists all subject\'s granted consent sessions, including client and granted scope. If the subject is unknown or has not granted any consent sessions yet, the endpoint returns an empty JSON array with status code 200 OK.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiListOAuth2ConsentSessionsRequest = {
  // string | The subject to list the consent sessions for.
  subject: "subject_example",
  // number | Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination). (optional)
  pageSize: 250,
  // string | Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination). (optional)
  pageToken: "1",
  // string | The login session id to list the consent sessions for. (optional)
  loginSessionId: "login_session_id_example",
};

apiInstance.listOAuth2ConsentSessions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subject** | [**string**] | The subject to list the consent sessions for. | defaults to undefined
 **pageSize** | [**number**] | Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination). | (optional) defaults to 250
 **pageToken** | [**string**] | Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination). | (optional) defaults to '1'
 **loginSessionId** | [**string**] | The login session id to list the consent sessions for. | (optional) defaults to undefined


### Return type

**Array<OAuth2ConsentSession>**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oAuth2ConsentSessions |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTrustedOAuth2JwtGrantIssuers**
> Array<TrustedOAuth2JwtGrantIssuer> listTrustedOAuth2JwtGrantIssuers()

Use this endpoint to list all trusted JWT Bearer Grant Type Issuers.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiListTrustedOAuth2JwtGrantIssuersRequest = {
  // number (optional)
  maxItems: 1,
  // number (optional)
  defaultItems: 1,
  // string | If optional \"issuer\" is supplied, only jwt-bearer grants with this issuer will be returned. (optional)
  issuer: "issuer_example",
};

apiInstance.listTrustedOAuth2JwtGrantIssuers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **maxItems** | [**number**] |  | (optional) defaults to undefined
 **defaultItems** | [**number**] |  | (optional) defaults to undefined
 **issuer** | [**string**] | If optional \&quot;issuer\&quot; is supplied, only jwt-bearer grants with this issuer will be returned. | (optional) defaults to undefined


### Return type

**Array<TrustedOAuth2JwtGrantIssuer>**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | trustedOAuth2JwtGrantIssuers |  -  |
**0** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **oAuth2Authorize**
> oAuth2Authorize()

Use open source libraries to perform OAuth 2.0 and OpenID Connect available for any programming language. You can find a list of libraries at https://oauth.net/code/  The Ory SDK is not yet able to this endpoint properly.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:any = {};

apiInstance.oAuth2Authorize(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **oauth2TokenExchange**
> OAuth2TokenExchange oauth2TokenExchange()

Use open source libraries to perform OAuth 2.0 and OpenID Connect available for any programming language. You can find a list of libraries here https://oauth.net/code/  The Ory SDK is not yet able to this endpoint properly.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiOauth2TokenExchangeRequest = {
  // string
  grantType: "grantType_example",
  // string (optional)
  clientId: "clientId_example",
  // string (optional)
  code: "code_example",
  // string (optional)
  redirectUri: "redirectUri_example",
  // string (optional)
  refreshToken: "refreshToken_example",
};

apiInstance.oauth2TokenExchange(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | [**string**] |  | defaults to undefined
 **clientId** | [**string**] |  | (optional) defaults to undefined
 **code** | [**string**] |  | (optional) defaults to undefined
 **redirectUri** | [**string**] |  | (optional) defaults to undefined
 **refreshToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**OAuth2TokenExchange**

### Authorization

[basic](README.md#basic), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oAuth2TokenExchange |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchOAuth2Client**
> OAuth2Client patchOAuth2Client(jsonPatch)

Patch an existing OAuth 2.0 Client using JSON Patch. If you pass `client_secret` the secret will be updated and returned via the API. This is the only time you will be able to retrieve the client secret, so write it down and keep it safe.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiPatchOAuth2ClientRequest = {
  // string | The id of the OAuth 2.0 Client.
  id: "id_example",
  // Array<JsonPatch> | OAuth 2.0 Client JSON Patch Body
  jsonPatch: [
    {
      _from: "/name",
      op: "replace",
      path: "/name",
      value: null,
    },
  ],
};

apiInstance.patchOAuth2Client(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonPatch** | **Array<JsonPatch>**| OAuth 2.0 Client JSON Patch Body |
 **id** | [**string**] | The id of the OAuth 2.0 Client. | defaults to undefined


### Return type

**OAuth2Client**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oAuth2Client |  -  |
**404** | Not Found Error Response |  -  |
**0** | Default Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rejectOAuth2ConsentRequest**
> OAuth2RedirectTo rejectOAuth2ConsentRequest()

When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject\'s behalf.  The consent challenge is appended to the consent provider\'s URL to which the subject\'s user-agent (browser) is redirected to. The consent provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted or rejected the request.  This endpoint tells Ory that the subject has not authorized the OAuth 2.0 client to access resources on his/her behalf. The consent provider must include a reason why the consent was not granted.  The response contains a redirect URL which the consent provider should redirect the user-agent to.  The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please head over to the OAuth 2.0 documentation.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiRejectOAuth2ConsentRequestRequest = {
  // string | OAuth 2.0 Consent Request Challenge
  consentChallenge: "consent_challenge_example",
  // RejectOAuth2Request (optional)
  rejectOAuth2Request: {
    error: "error_example",
    error_debug: "error_debug_example",
    error_description: "error_description_example",
    error_hint: "error_hint_example",
    status_code: 1,
  },
};

apiInstance.rejectOAuth2ConsentRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rejectOAuth2Request** | **RejectOAuth2Request**|  |
 **consentChallenge** | [**string**] | OAuth 2.0 Consent Request Challenge | defaults to undefined


### Return type

**OAuth2RedirectTo**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oAuth2RedirectTo |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rejectOAuth2LoginRequest**
> OAuth2RedirectTo rejectOAuth2LoginRequest()

When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell the Ory OAuth2 Service about it.  The authentication challenge is appended to the login provider URL to which the subject\'s user-agent (browser) is redirected to. The login provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.  This endpoint tells Ory that the subject has not authenticated and includes a reason why the authentication was denied.  The response contains a redirect URL which the login provider should redirect the user-agent to.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiRejectOAuth2LoginRequestRequest = {
  // string | OAuth 2.0 Login Request Challenge
  loginChallenge: "login_challenge_example",
  // RejectOAuth2Request (optional)
  rejectOAuth2Request: {
    error: "error_example",
    error_debug: "error_debug_example",
    error_description: "error_description_example",
    error_hint: "error_hint_example",
    status_code: 1,
  },
};

apiInstance.rejectOAuth2LoginRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rejectOAuth2Request** | **RejectOAuth2Request**|  |
 **loginChallenge** | [**string**] | OAuth 2.0 Login Request Challenge | defaults to undefined


### Return type

**OAuth2RedirectTo**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oAuth2RedirectTo |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rejectOAuth2LogoutRequest**
> void rejectOAuth2LogoutRequest()

When a user or an application requests Ory OAuth 2.0 to remove the session state of a subject, this endpoint is used to deny that logout request. No HTTP request body is required.  The response is empty as the logout provider has to chose what action to perform next.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiRejectOAuth2LogoutRequestRequest = {
  // string
  logoutChallenge: "logout_challenge_example",
};

apiInstance.rejectOAuth2LogoutRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logoutChallenge** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **revokeOAuth2ConsentSessions**
> void revokeOAuth2ConsentSessions()

This endpoint revokes a subject\'s granted consent sessions and invalidates all associated OAuth 2.0 Access Tokens. You may also only revoke sessions for a specific OAuth 2.0 Client ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiRevokeOAuth2ConsentSessionsRequest = {
  // string | OAuth 2.0 Consent Subject  The subject whose consent sessions should be deleted.
  subject: "subject_example",
  // string | OAuth 2.0 Client ID  If set, deletes only those consent sessions that have been granted to the specified OAuth 2.0 Client ID. (optional)
  client: "client_example",
  // boolean | Revoke All Consent Sessions  If set to `true` deletes all consent sessions by the Subject that have been granted. (optional)
  all: true,
};

apiInstance.revokeOAuth2ConsentSessions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subject** | [**string**] | OAuth 2.0 Consent Subject  The subject whose consent sessions should be deleted. | defaults to undefined
 **client** | [**string**] | OAuth 2.0 Client ID  If set, deletes only those consent sessions that have been granted to the specified OAuth 2.0 Client ID. | (optional) defaults to undefined
 **all** | [**boolean**] | Revoke All Consent Sessions  If set to &#x60;true&#x60; deletes all consent sessions by the Subject that have been granted. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **revokeOAuth2LoginSessions**
> void revokeOAuth2LoginSessions()

This endpoint invalidates authentication sessions. After revoking the authentication session(s), the subject has to re-authenticate at the Ory OAuth2 Provider. This endpoint does not invalidate any tokens.  If you send the subject in a query param, all authentication sessions that belong to that subject are revoked. No OpennID Connect Front- or Back-channel logout is performed in this case.  Alternatively, you can send a SessionID via `sid` query param, in which case, only the session that is connected to that SessionID is revoked. OpenID Connect Back-channel logout is performed in this case.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiRevokeOAuth2LoginSessionsRequest = {
  // string | OAuth 2.0 Subject  The subject to revoke authentication sessions for. (optional)
  subject: "subject_example",
  // string | OAuth 2.0 Subject  The subject to revoke authentication sessions for. (optional)
  sid: "sid_example",
};

apiInstance.revokeOAuth2LoginSessions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subject** | [**string**] | OAuth 2.0 Subject  The subject to revoke authentication sessions for. | (optional) defaults to undefined
 **sid** | [**string**] | OAuth 2.0 Subject  The subject to revoke authentication sessions for. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **revokeOAuth2Token**
> void revokeOAuth2Token()

Revoking a token (both access and refresh) means that the tokens will be invalid. A revoked access token can no longer be used to make access requests, and a revoked refresh token can no longer be used to refresh an access token. Revoking a refresh token also invalidates the access token that was created with it. A token may only be revoked by the client the token was generated for.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiRevokeOAuth2TokenRequest = {
  // string
  token: "token_example",
  // string (optional)
  clientId: "clientId_example",
  // string (optional)
  clientSecret: "clientSecret_example",
};

apiInstance.revokeOAuth2Token(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] |  | defaults to undefined
 **clientId** | [**string**] |  | (optional) defaults to undefined
 **clientSecret** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[basic](README.md#basic), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setOAuth2Client**
> OAuth2Client setOAuth2Client(oAuth2Client)

Replaces an existing OAuth 2.0 Client with the payload you send. If you pass `client_secret` the secret is used, otherwise the existing secret is used.  If set, the secret is echoed in the response. It is not possible to retrieve it later on.  OAuth 2.0 Clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiSetOAuth2ClientRequest = {
  // string | OAuth 2.0 Client ID
  id: "id_example",
  // OAuth2Client | OAuth 2.0 Client Request Body
  oAuth2Client: {
    access_token_strategy: "access_token_strategy_example",
    allowed_cors_origins: [
      "allowed_cors_origins_example",
    ],
    audience: [
      "audience_example",
    ],
    authorization_code_grant_access_token_lifespan: "4ms",
    authorization_code_grant_id_token_lifespan: "4ms",
    authorization_code_grant_refresh_token_lifespan: "4ms",
    backchannel_logout_session_required: true,
    backchannel_logout_uri: "backchannel_logout_uri_example",
    client_credentials_grant_access_token_lifespan: "4ms",
    client_id: "client_id_example",
    client_name: "client_name_example",
    client_secret: "client_secret_example",
    client_secret_expires_at: 1,
    client_uri: "client_uri_example",
    contacts: [
      "contacts_example",
    ],
    created_at: new Date('1970-01-01T00:00:00.00Z'),
    frontchannel_logout_session_required: true,
    frontchannel_logout_uri: "frontchannel_logout_uri_example",
    grant_types: [
      "grant_types_example",
    ],
    implicit_grant_access_token_lifespan: "4ms",
    implicit_grant_id_token_lifespan: "4ms",
    jwks: null,
    jwks_uri: "jwks_uri_example",
    jwt_bearer_grant_access_token_lifespan: "4ms",
    logo_uri: "logo_uri_example",
    metadata: {},
    owner: "owner_example",
    policy_uri: "policy_uri_example",
    post_logout_redirect_uris: [
      "post_logout_redirect_uris_example",
    ],
    redirect_uris: [
      "redirect_uris_example",
    ],
    refresh_token_grant_access_token_lifespan: "4ms",
    refresh_token_grant_id_token_lifespan: "4ms",
    refresh_token_grant_refresh_token_lifespan: "4ms",
    registration_access_token: "registration_access_token_example",
    registration_client_uri: "registration_client_uri_example",
    request_object_signing_alg: "request_object_signing_alg_example",
    request_uris: [
      "request_uris_example",
    ],
    response_types: [
      "response_types_example",
    ],
    scope: "scope1 scope-2 scope.3 scope:4",
    sector_identifier_uri: "sector_identifier_uri_example",
    skip_consent: true,
    subject_type: "subject_type_example",
    token_endpoint_auth_method: "client_secret_basic",
    token_endpoint_auth_signing_alg: "token_endpoint_auth_signing_alg_example",
    tos_uri: "tos_uri_example",
    updated_at: new Date('1970-01-01T00:00:00.00Z'),
    userinfo_signed_response_alg: "userinfo_signed_response_alg_example",
  },
};

apiInstance.setOAuth2Client(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuth2Client** | **OAuth2Client**| OAuth 2.0 Client Request Body |
 **id** | [**string**] | OAuth 2.0 Client ID | defaults to undefined


### Return type

**OAuth2Client**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oAuth2Client |  -  |
**400** | Bad Request Error Response |  -  |
**404** | Not Found Error Response |  -  |
**0** | Default Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setOAuth2ClientLifespans**
> OAuth2Client setOAuth2ClientLifespans()

Set lifespans of different token types issued for this OAuth 2.0 client. Does not modify other fields.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiSetOAuth2ClientLifespansRequest = {
  // string | OAuth 2.0 Client ID
  id: "id_example",
  // OAuth2ClientTokenLifespans (optional)
  oAuth2ClientTokenLifespans: {
    authorization_code_grant_access_token_lifespan: "4ms",
    authorization_code_grant_id_token_lifespan: "4ms",
    authorization_code_grant_refresh_token_lifespan: "4ms",
    client_credentials_grant_access_token_lifespan: "4ms",
    implicit_grant_access_token_lifespan: "4ms",
    implicit_grant_id_token_lifespan: "4ms",
    jwt_bearer_grant_access_token_lifespan: "4ms",
    refresh_token_grant_access_token_lifespan: "4ms",
    refresh_token_grant_id_token_lifespan: "4ms",
    refresh_token_grant_refresh_token_lifespan: "4ms",
  },
};

apiInstance.setOAuth2ClientLifespans(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuth2ClientTokenLifespans** | **OAuth2ClientTokenLifespans**|  |
 **id** | [**string**] | OAuth 2.0 Client ID | defaults to undefined


### Return type

**OAuth2Client**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oAuth2Client |  -  |
**0** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **trustOAuth2JwtGrantIssuer**
> TrustedOAuth2JwtGrantIssuer trustOAuth2JwtGrantIssuer()

Use this endpoint to establish a trust relationship for a JWT issuer to perform JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants [RFC7523](https://datatracker.ietf.org/doc/html/rfc7523).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OAuth2Api(configuration);

let body:.OAuth2ApiTrustOAuth2JwtGrantIssuerRequest = {
  // TrustOAuth2JwtGrantIssuer (optional)
  trustOAuth2JwtGrantIssuer: {
    allow_any_subject: true,
    expires_at: new Date('1970-01-01T00:00:00.00Z'),
    issuer: "https://jwt-idp.example.com",
    jwk: {
      alg: "RS256",
      crv: "P-256",
      d: "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
      dp: "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
      dq: "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
      e: "AQAB",
      k: "GawgguFyGrWKav7AX4VKUg",
      kid: "1603dfe0af8f4596",
      kty: "RSA",
      n: "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
      p: "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
      q: "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
      qi: "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
      use: "sig",
      x: "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
      x5c: [
        "x5c_example",
      ],
      y: "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0",
    },
    scope: ["openid","offline"],
    subject: "mike@example.com",
  },
};

apiInstance.trustOAuth2JwtGrantIssuer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trustOAuth2JwtGrantIssuer** | **TrustOAuth2JwtGrantIssuer**|  |


### Return type

**TrustedOAuth2JwtGrantIssuer**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | trustedOAuth2JwtGrantIssuer |  -  |
**0** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


