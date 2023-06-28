# .ProjectApi

All URIs are relative to *https://playground.projects.oryapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProject**](ProjectApi.md#createProject) | **POST** /projects | Create a Project
[**createProjectApiKey**](ProjectApi.md#createProjectApiKey) | **POST** /projects/{project}/tokens | Create project API token
[**deleteProjectApiKey**](ProjectApi.md#deleteProjectApiKey) | **DELETE** /projects/{project}/tokens/{token_id} | Delete project API token
[**getActiveProjectInConsole**](ProjectApi.md#getActiveProjectInConsole) | **GET** /console/active/project | Returns the Ory Network Project selected in the Ory Network Console
[**getProject**](ProjectApi.md#getProject) | **GET** /projects/{project_id} | Get a Project
[**getProjectMembers**](ProjectApi.md#getProjectMembers) | **GET** /projects/{project_id}/members | Get all members associated with this project
[**getProjectMetrics**](ProjectApi.md#getProjectMetrics) | **GET** /projects/{project_id}/metrics | 
[**listProjectApiKeys**](ProjectApi.md#listProjectApiKeys) | **GET** /projects/{project}/tokens | List a project\&#39;s API Tokens
[**listProjects**](ProjectApi.md#listProjects) | **GET** /projects | List All Projects
[**patchProject**](ProjectApi.md#patchProject) | **PATCH** /projects/{project_id} | Patch an Ory Network Project Configuration
[**purgeProject**](ProjectApi.md#purgeProject) | **DELETE** /projects/{project_id} | Irrecoverably purge a project
[**removeProjectMember**](ProjectApi.md#removeProjectMember) | **DELETE** /projects/{project_id}/members/{member_id} | Remove a member associated with this project
[**setActiveProjectInConsole**](ProjectApi.md#setActiveProjectInConsole) | **PUT** /console/active/project | Sets the Ory Network Project active in the Ory Network Console
[**setProject**](ProjectApi.md#setProject) | **PUT** /projects/{project_id} | Update an Ory Network Project Configuration


# **createProject**
> Project createProject()

Creates a new project.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectApi(configuration);

let body:.ProjectApiCreateProjectRequest = {
  // CreateProjectBody (optional)
  createProjectBody: {
    name: "name_example",
  },
};

apiInstance.createProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProjectBody** | **CreateProjectBody**|  |


### Return type

**Project**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | project |  -  |
**401** | errorGeneric |  -  |
**403** | errorGeneric |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createProjectApiKey**
> ProjectApiKey createProjectApiKey()

Create an API token for a project.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectApi(configuration);

let body:.ProjectApiCreateProjectApiKeyRequest = {
  // string | The Project ID or Project slug
  project: "project_example",
  // CreateProjectApiKeyRequest (optional)
  createProjectApiKeyRequest: {
    name: "name_example",
  },
};

apiInstance.createProjectApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProjectApiKeyRequest** | **CreateProjectApiKeyRequest**|  |
 **project** | [**string**] | The Project ID or Project slug | defaults to undefined


### Return type

**ProjectApiKey**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | projectApiKey |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProjectApiKey**
> void deleteProjectApiKey()

Deletes an API token and immediately removes it.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectApi(configuration);

let body:.ProjectApiDeleteProjectApiKeyRequest = {
  // string | The Project ID or Project slug
  project: "project_example",
  // string | The Token ID
  tokenId: "token_id_example",
};

apiInstance.deleteProjectApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**string**] | The Project ID or Project slug | defaults to undefined
 **tokenId** | [**string**] | The Token ID | defaults to undefined


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
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getActiveProjectInConsole**
> ActiveProjectInConsole getActiveProjectInConsole()

Use this API to get your active project in the Ory Network Console UI.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectApi(configuration);

let body:any = {};

apiInstance.getActiveProjectInConsole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ActiveProjectInConsole**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | activeProjectInConsole |  -  |
**401** | genericError |  -  |
**0** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProject**
> Project getProject()

Get a projects you have access to by its ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectApi(configuration);

let body:.ProjectApiGetProjectRequest = {
  // string | Project ID  The project\'s ID.
  projectId: "project_id_example",
};

apiInstance.getProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID  The project\&#39;s ID. | defaults to undefined


### Return type

**Project**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | project |  -  |
**401** | errorGeneric |  -  |
**403** | errorGeneric |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProjectMembers**
> Array<CloudAccount> getProjectMembers()

This endpoint requires the user to be a member of the project with the role `OWNER` or `DEVELOPER`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectApi(configuration);

let body:.ProjectApiGetProjectMembersRequest = {
  // string | Project ID  The project\'s ID.
  projectId: "project_id_example",
};

apiInstance.getProjectMembers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID  The project\&#39;s ID. | defaults to undefined


### Return type

**Array<CloudAccount>**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | projectMembers |  -  |
**401** | genericError |  -  |
**406** | genericError |  -  |
**0** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProjectMetrics**
> GetProjectMetricsResponse getProjectMetrics()

Retrieves project metrics for the specified event type and time range

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectApi(configuration);

let body:.ProjectApiGetProjectMetricsRequest = {
  // string | Project ID
  projectId: "project_id_example",
  // string | The event type to query for
  eventType: "event_type_example",
  // string | The resolution of the buckets  The minimum resolution is 1 hour.
  resolution: "4ms",
  // Date | The start time of the time window
  _from: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The end time of the time window
  to: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getProjectMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID | defaults to undefined
 **eventType** | [**string**] | The event type to query for | defaults to undefined
 **resolution** | [**string**] | The resolution of the buckets  The minimum resolution is 1 hour. | defaults to undefined
 **_from** | [**Date**] | The start time of the time window | defaults to undefined
 **to** | [**Date**] | The end time of the time window | defaults to undefined


### Return type

**GetProjectMetricsResponse**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getProjectMetricsResponse |  -  |
**400** | genericError |  -  |
**403** | genericError |  -  |
**0** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProjectApiKeys**
> Array<ProjectApiKey> listProjectApiKeys()

A list of all the project\'s API tokens.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectApi(configuration);

let body:.ProjectApiListProjectApiKeysRequest = {
  // string | The Project ID or Project slug
  project: "project_example",
};

apiInstance.listProjectApiKeys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**string**] | The Project ID or Project slug | defaults to undefined


### Return type

**Array<ProjectApiKey>**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | projectApiKeys |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProjects**
> Array<ProjectMetadata> listProjects()

Lists all projects you have access to.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectApi(configuration);

let body:any = {};

apiInstance.listProjects(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ProjectMetadata>**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | projectMetadataList |  -  |
**401** | errorGeneric |  -  |
**403** | errorGeneric |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchProject**
> SuccessfulProjectUpdate patchProject()

Deprecated: Use the `patchProjectWithRevision` endpoint instead to specify the exact revision the patch was generated for.  This endpoints allows you to patch individual Ory Network project configuration keys for Ory\'s services (identity, permission, ...). The configuration format is fully compatible with the open source projects for the respective services (e.g. Ory Kratos for Identity, Ory Keto for Permissions).  This endpoint expects the `version` key to be set in the payload. If it is unset, it will try to import the config as if it is from the most recent version.  If you have an older version of a configuration, you should set the version key in the payload!  While this endpoint is able to process all configuration items related to features (e.g. password reset), it does not support operational configuration items (e.g. port, tracing, logging) otherwise available in the open source.  For configuration items that can not be translated to the Ory Network, this endpoint will return a list of warnings to help you understand which parts of your config could not be processed.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectApi(configuration);

let body:.ProjectApiPatchProjectRequest = {
  // string | Project ID  The project\'s ID.
  projectId: "project_id_example",
  // Array<JsonPatch> (optional)
  jsonPatch: [
    {
      _from: "/name",
      op: "replace",
      path: "/name",
      value: null,
    },
  ],
};

apiInstance.patchProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonPatch** | **Array<JsonPatch>**|  |
 **projectId** | [**string**] | Project ID  The project\&#39;s ID. | defaults to undefined


### Return type

**SuccessfulProjectUpdate**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successfulProjectUpdate |  -  |
**400** | errorGeneric |  -  |
**401** | errorGeneric |  -  |
**403** | errorGeneric |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **purgeProject**
> void purgeProject()

!! Use with extreme caution !!  Using this API endpoint you can purge (completely delete) a project and its data. This action can not be undone and will delete ALL your data.  !! Use with extreme caution !!

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectApi(configuration);

let body:.ProjectApiPurgeProjectRequest = {
  // string | Project ID  The project\'s ID.
  projectId: "project_id_example",
};

apiInstance.purgeProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID  The project\&#39;s ID. | defaults to undefined


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
**401** | genericError |  -  |
**403** | genericError |  -  |
**404** | genericError |  -  |
**0** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeProjectMember**
> void removeProjectMember()

This also sets their invite status to `REMOVED`. This endpoint requires the user to be a member of the project with the role `OWNER`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectApi(configuration);

let body:.ProjectApiRemoveProjectMemberRequest = {
  // string | Project ID  The project\'s ID.
  projectId: "project_id_example",
  // string | Member ID
  memberId: "member_id_example",
};

apiInstance.removeProjectMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID  The project\&#39;s ID. | defaults to undefined
 **memberId** | [**string**] | Member ID | defaults to undefined


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
**401** | genericError |  -  |
**406** | genericError |  -  |
**0** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setActiveProjectInConsole**
> void setActiveProjectInConsole()

Use this API to set your active project in the Ory Network Console UI.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectApi(configuration);

let body:.ProjectApiSetActiveProjectInConsoleRequest = {
  // SetActiveProjectInConsoleBody (optional)
  setActiveProjectInConsoleBody: {
    project_id: "project_id_example",
  },
};

apiInstance.setActiveProjectInConsole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setActiveProjectInConsoleBody** | **SetActiveProjectInConsoleBody**|  |


### Return type

**void**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**401** | genericError |  -  |
**0** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setProject**
> SuccessfulProjectUpdate setProject()

This endpoints allows you to update the Ory Network project configuration for individual services (identity, permission, ...). The configuration is fully compatible with the open source projects for the respective services (e.g. Ory Kratos for Identity, Ory Keto for Permissions).  This endpoint expects the `version` key to be set in the payload. If it is unset, it will try to import the config as if it is from the most recent version.  If you have an older version of a configuration, you should set the version key in the payload!  While this endpoint is able to process all configuration items related to features (e.g. password reset), it does not support operational configuration items (e.g. port, tracing, logging) otherwise available in the open source.  For configuration items that can not be translated to the Ory Network, this endpoint will return a list of warnings to help you understand which parts of your config could not be processed.  Be aware that updating any service\'s configuration will completely override your current configuration for that service!

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectApi(configuration);

let body:.ProjectApiSetProjectRequest = {
  // string | Project ID  The project\'s ID.
  projectId: "project_id_example",
  // SetProject (optional)
  setProject: {
    name: "name_example",
    services: {
      identity: {
        config: {},
      },
      oauth2: {
        config: {},
      },
      permission: {
        config: {},
      },
    },
  },
};

apiInstance.setProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setProject** | **SetProject**|  |
 **projectId** | [**string**] | Project ID  The project\&#39;s ID. | defaults to undefined


### Return type

**SuccessfulProjectUpdate**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successfulProjectUpdate |  -  |
**400** | errorGeneric |  -  |
**401** | errorGeneric |  -  |
**403** | errorGeneric |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


