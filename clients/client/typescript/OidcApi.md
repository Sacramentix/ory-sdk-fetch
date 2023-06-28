# .OidcApi

All URIs are relative to *https://playground.projects.oryapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOidcDynamicClient**](OidcApi.md#createOidcDynamicClient) | **POST** /oauth2/register | Register OAuth2 Client using OpenID Dynamic Client Registration
[**deleteOidcDynamicClient**](OidcApi.md#deleteOidcDynamicClient) | **DELETE** /oauth2/register/{id} | Delete OAuth 2.0 Client using the OpenID Dynamic Client Registration Management Protocol
[**discoverOidcConfiguration**](OidcApi.md#discoverOidcConfiguration) | **GET** /.well-known/openid-configuration | OpenID Connect Discovery
[**getOidcDynamicClient**](OidcApi.md#getOidcDynamicClient) | **GET** /oauth2/register/{id} | Get OAuth2 Client using OpenID Dynamic Client Registration
[**getOidcUserInfo**](OidcApi.md#getOidcUserInfo) | **GET** /userinfo | OpenID Connect Userinfo
[**revokeOidcSession**](OidcApi.md#revokeOidcSession) | **GET** /oauth2/sessions/logout | OpenID Connect Front- and Back-channel Enabled Logout
[**setOidcDynamicClient**](OidcApi.md#setOidcDynamicClient) | **PUT** /oauth2/register/{id} | Set OAuth2 Client using OpenID Dynamic Client Registration


# **createOidcDynamicClient**
> OAuth2Client createOidcDynamicClient(oAuth2Client)

This endpoint behaves like the administrative counterpart (`createOAuth2Client`) but is capable of facing the public internet directly and can be used in self-service. It implements the OpenID Connect Dynamic Client Registration Protocol. This feature needs to be enabled in the configuration. This endpoint is disabled by default. It can be enabled by an administrator.  Please note that using this endpoint you are not able to choose the `client_secret` nor the `client_id` as those values will be server generated when specifying `token_endpoint_auth_method` as `client_secret_basic` or `client_secret_post`.  The `client_secret` will be returned in the response and you will not be able to retrieve it later on. Write the secret down and keep it somewhere safe.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OidcApi(configuration);

let body:.OidcApiCreateOidcDynamicClientRequest = {
  // OAuth2Client | Dynamic Client Registration Request Body
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

apiInstance.createOidcDynamicClient(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuth2Client** | **OAuth2Client**| Dynamic Client Registration Request Body |


### Return type

**OAuth2Client**

### Authorization

No authorization required

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

# **deleteOidcDynamicClient**
> void deleteOidcDynamicClient()

This endpoint behaves like the administrative counterpart (`deleteOAuth2Client`) but is capable of facing the public internet directly and can be used in self-service. It implements the OpenID Connect Dynamic Client Registration Protocol. This feature needs to be enabled in the configuration. This endpoint is disabled by default. It can be enabled by an administrator.  To use this endpoint, you will need to present the client\'s authentication credentials. If the OAuth2 Client uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query. If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OidcApi(configuration);

let body:.OidcApiDeleteOidcDynamicClientRequest = {
  // string | The id of the OAuth 2.0 Client.
  id: "id_example",
};

apiInstance.deleteOidcDynamicClient(body).then((data:any) => {
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

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**0** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **discoverOidcConfiguration**
> OidcConfiguration discoverOidcConfiguration()

A mechanism for an OpenID Connect Relying Party to discover the End-User\'s OpenID Provider and obtain information needed to interact with it, including its OAuth 2.0 endpoint locations.  Popular libraries for OpenID Connect clients include oidc-client-js (JavaScript), go-oidc (Golang), and others. For a full list of clients go here: https://openid.net/developers/certified/

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OidcApi(configuration);

let body:any = {};

apiInstance.discoverOidcConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OidcConfiguration**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oidcConfiguration |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOidcDynamicClient**
> OAuth2Client getOidcDynamicClient()

This endpoint behaves like the administrative counterpart (`getOAuth2Client`) but is capable of facing the public internet directly and can be used in self-service. It implements the OpenID Connect Dynamic Client Registration Protocol.  To use this endpoint, you will need to present the client\'s authentication credentials. If the OAuth2 Client uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query. If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OidcApi(configuration);

let body:.OidcApiGetOidcDynamicClientRequest = {
  // string | The id of the OAuth 2.0 Client.
  id: "id_example",
};

apiInstance.getOidcDynamicClient(body).then((data:any) => {
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

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oAuth2Client |  -  |
**0** | Default Error Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOidcUserInfo**
> OidcUserInfo getOidcUserInfo()

This endpoint returns the payload of the ID Token, including `session.id_token` values, of the provided OAuth 2.0 Access Token\'s consent request.  In the case of authentication error, a WWW-Authenticate header might be set in the response with more information about the error. See [the spec](https://datatracker.ietf.org/doc/html/rfc6750#section-3) for more details about header format.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OidcApi(configuration);

let body:any = {};

apiInstance.getOidcUserInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OidcUserInfo**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oidcUserInfo |  -  |
**0** | errorOAuth2 |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **revokeOidcSession**
> revokeOidcSession()

This endpoint initiates and completes user logout at the Ory OAuth2 & OpenID provider and initiates OpenID Connect Front- / Back-channel logout:  https://openid.net/specs/openid-connect-frontchannel-1_0.html https://openid.net/specs/openid-connect-backchannel-1_0.html  Back-channel logout is performed asynchronously and does not affect logout flow.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OidcApi(configuration);

let body:any = {};

apiInstance.revokeOidcSession(body).then((data:any) => {
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
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setOidcDynamicClient**
> OAuth2Client setOidcDynamicClient(oAuth2Client)

This endpoint behaves like the administrative counterpart (`setOAuth2Client`) but is capable of facing the public internet directly to be used by third parties. It implements the OpenID Connect Dynamic Client Registration Protocol.  This feature is disabled per default. It can be enabled by a system administrator.  If you pass `client_secret` the secret is used, otherwise the existing secret is used. If set, the secret is echoed in the response. It is not possible to retrieve it later on.  To use this endpoint, you will need to present the client\'s authentication credentials. If the OAuth2 Client uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query. If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OidcApi(configuration);

let body:.OidcApiSetOidcDynamicClientRequest = {
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

apiInstance.setOidcDynamicClient(body).then((data:any) => {
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

[bearer](README.md#bearer)

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


