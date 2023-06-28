# .PermissionApi

All URIs are relative to *https://playground.projects.oryapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkPermission**](PermissionApi.md#checkPermission) | **GET** /relation-tuples/check/openapi | Check a permission
[**checkPermissionOrError**](PermissionApi.md#checkPermissionOrError) | **GET** /relation-tuples/check | Check a permission
[**expandPermissions**](PermissionApi.md#expandPermissions) | **GET** /relation-tuples/expand | Expand a Relationship into permissions.
[**postCheckPermission**](PermissionApi.md#postCheckPermission) | **POST** /relation-tuples/check/openapi | Check a permission
[**postCheckPermissionOrError**](PermissionApi.md#postCheckPermissionOrError) | **POST** /relation-tuples/check | Check a permission


# **checkPermission**
> CheckPermissionResult checkPermission()

To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PermissionApi(configuration);

let body:.PermissionApiCheckPermissionRequest = {
  // string | Namespace of the Relationship (optional)
  namespace: "namespace_example",
  // string | Object of the Relationship (optional)
  object: "object_example",
  // string | Relation of the Relationship (optional)
  relation: "relation_example",
  // string | SubjectID of the Relationship (optional)
  subjectId: "subject_id_example",
  // string | Namespace of the Subject Set (optional)
  subjectSetNamespace: "subject_set.namespace_example",
  // string | Object of the Subject Set (optional)
  subjectSetObject: "subject_set.object_example",
  // string | Relation of the Subject Set (optional)
  subjectSetRelation: "subject_set.relation_example",
  // number (optional)
  maxDepth: 1,
};

apiInstance.checkPermission(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] | Namespace of the Relationship | (optional) defaults to undefined
 **object** | [**string**] | Object of the Relationship | (optional) defaults to undefined
 **relation** | [**string**] | Relation of the Relationship | (optional) defaults to undefined
 **subjectId** | [**string**] | SubjectID of the Relationship | (optional) defaults to undefined
 **subjectSetNamespace** | [**string**] | Namespace of the Subject Set | (optional) defaults to undefined
 **subjectSetObject** | [**string**] | Object of the Subject Set | (optional) defaults to undefined
 **subjectSetRelation** | [**string**] | Relation of the Subject Set | (optional) defaults to undefined
 **maxDepth** | [**number**] |  | (optional) defaults to undefined


### Return type

**CheckPermissionResult**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | checkPermissionResult |  -  |
**400** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **checkPermissionOrError**
> CheckPermissionResult checkPermissionOrError()

To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PermissionApi(configuration);

let body:.PermissionApiCheckPermissionOrErrorRequest = {
  // string | Namespace of the Relationship (optional)
  namespace: "namespace_example",
  // string | Object of the Relationship (optional)
  object: "object_example",
  // string | Relation of the Relationship (optional)
  relation: "relation_example",
  // string | SubjectID of the Relationship (optional)
  subjectId: "subject_id_example",
  // string | Namespace of the Subject Set (optional)
  subjectSetNamespace: "subject_set.namespace_example",
  // string | Object of the Subject Set (optional)
  subjectSetObject: "subject_set.object_example",
  // string | Relation of the Subject Set (optional)
  subjectSetRelation: "subject_set.relation_example",
  // number (optional)
  maxDepth: 1,
};

apiInstance.checkPermissionOrError(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] | Namespace of the Relationship | (optional) defaults to undefined
 **object** | [**string**] | Object of the Relationship | (optional) defaults to undefined
 **relation** | [**string**] | Relation of the Relationship | (optional) defaults to undefined
 **subjectId** | [**string**] | SubjectID of the Relationship | (optional) defaults to undefined
 **subjectSetNamespace** | [**string**] | Namespace of the Subject Set | (optional) defaults to undefined
 **subjectSetObject** | [**string**] | Object of the Subject Set | (optional) defaults to undefined
 **subjectSetRelation** | [**string**] | Relation of the Subject Set | (optional) defaults to undefined
 **maxDepth** | [**number**] |  | (optional) defaults to undefined


### Return type

**CheckPermissionResult**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | checkPermissionResult |  -  |
**400** | errorGeneric |  -  |
**403** | checkPermissionResult |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **expandPermissions**
> ExpandedPermissionTree expandPermissions()

Use this endpoint to expand a relationship tuple into permissions.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PermissionApi(configuration);

let body:.PermissionApiExpandPermissionsRequest = {
  // string | Namespace of the Subject Set
  namespace: "namespace_example",
  // string | Object of the Subject Set
  object: "object_example",
  // string | Relation of the Subject Set
  relation: "relation_example",
  // number (optional)
  maxDepth: 1,
};

apiInstance.expandPermissions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] | Namespace of the Subject Set | defaults to undefined
 **object** | [**string**] | Object of the Subject Set | defaults to undefined
 **relation** | [**string**] | Relation of the Subject Set | defaults to undefined
 **maxDepth** | [**number**] |  | (optional) defaults to undefined


### Return type

**ExpandedPermissionTree**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | expandedPermissionTree |  -  |
**400** | errorGeneric |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postCheckPermission**
> CheckPermissionResult postCheckPermission()

To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PermissionApi(configuration);

let body:.PermissionApiPostCheckPermissionRequest = {
  // number (optional)
  maxDepth: 1,
  // PostCheckPermissionBody (optional)
  postCheckPermissionBody: {
    namespace: "namespace_example",
    object: "object_example",
    relation: "relation_example",
    subject_id: "subject_id_example",
    subject_set: {
      namespace: "namespace_example",
      object: "object_example",
      relation: "relation_example",
    },
  },
};

apiInstance.postCheckPermission(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postCheckPermissionBody** | **PostCheckPermissionBody**|  |
 **maxDepth** | [**number**] |  | (optional) defaults to undefined


### Return type

**CheckPermissionResult**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | checkPermissionResult |  -  |
**400** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postCheckPermissionOrError**
> CheckPermissionResult postCheckPermissionOrError()

To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PermissionApi(configuration);

let body:.PermissionApiPostCheckPermissionOrErrorRequest = {
  // number | nolint:deadcode,unused (optional)
  maxDepth: 1,
  // PostCheckPermissionOrErrorBody (optional)
  postCheckPermissionOrErrorBody: {
    namespace: "namespace_example",
    object: "object_example",
    relation: "relation_example",
    subject_id: "subject_id_example",
    subject_set: {
      namespace: "namespace_example",
      object: "object_example",
      relation: "relation_example",
    },
  },
};

apiInstance.postCheckPermissionOrError(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postCheckPermissionOrErrorBody** | **PostCheckPermissionOrErrorBody**|  |
 **maxDepth** | [**number**] | nolint:deadcode,unused | (optional) defaults to undefined


### Return type

**CheckPermissionResult**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | checkPermissionResult |  -  |
**400** | errorGeneric |  -  |
**403** | checkPermissionResult |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


