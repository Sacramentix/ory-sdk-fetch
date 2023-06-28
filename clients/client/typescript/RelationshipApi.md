# .RelationshipApi

All URIs are relative to *https://playground.projects.oryapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkOplSyntax**](RelationshipApi.md#checkOplSyntax) | **POST** /opl/syntax/check | Check the syntax of an OPL file
[**createRelationship**](RelationshipApi.md#createRelationship) | **PUT** /admin/relation-tuples | Create a Relationship
[**deleteRelationships**](RelationshipApi.md#deleteRelationships) | **DELETE** /admin/relation-tuples | Delete Relationships
[**getRelationships**](RelationshipApi.md#getRelationships) | **GET** /relation-tuples | Query relationships
[**listRelationshipNamespaces**](RelationshipApi.md#listRelationshipNamespaces) | **GET** /namespaces | Query namespaces
[**patchRelationships**](RelationshipApi.md#patchRelationships) | **PATCH** /admin/relation-tuples | Patch Multiple Relationships


# **checkOplSyntax**
> CheckOplSyntaxResult checkOplSyntax()

The OPL file is expected in the body of the request.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RelationshipApi(configuration);

let body:.RelationshipApiCheckOplSyntaxRequest = {
  // string (optional)
  body: "body_example",
};

apiInstance.checkOplSyntax(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |


### Return type

**CheckOplSyntaxResult**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | checkOplSyntaxResult |  -  |
**400** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createRelationship**
> Relationship createRelationship()

Use this endpoint to create a relationship.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RelationshipApi(configuration);

let body:.RelationshipApiCreateRelationshipRequest = {
  // CreateRelationshipBody (optional)
  createRelationshipBody: {
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

apiInstance.createRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRelationshipBody** | **CreateRelationshipBody**|  |


### Return type

**Relationship**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | relationship |  -  |
**400** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteRelationships**
> void deleteRelationships()

Use this endpoint to delete relationships

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RelationshipApi(configuration);

let body:.RelationshipApiDeleteRelationshipsRequest = {
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
};

apiInstance.deleteRelationships(body).then((data:any) => {
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
**400** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRelationships**
> Relationships getRelationships()

Get all relationships that match the query. Only the namespace field is required.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RelationshipApi(configuration);

let body:.RelationshipApiGetRelationshipsRequest = {
  // string (optional)
  pageToken: "page_token_example",
  // number (optional)
  pageSize: 1,
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
};

apiInstance.getRelationships(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageToken** | [**string**] |  | (optional) defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to undefined
 **namespace** | [**string**] | Namespace of the Relationship | (optional) defaults to undefined
 **object** | [**string**] | Object of the Relationship | (optional) defaults to undefined
 **relation** | [**string**] | Relation of the Relationship | (optional) defaults to undefined
 **subjectId** | [**string**] | SubjectID of the Relationship | (optional) defaults to undefined
 **subjectSetNamespace** | [**string**] | Namespace of the Subject Set | (optional) defaults to undefined
 **subjectSetObject** | [**string**] | Object of the Subject Set | (optional) defaults to undefined
 **subjectSetRelation** | [**string**] | Relation of the Subject Set | (optional) defaults to undefined


### Return type

**Relationships**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | relationships |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRelationshipNamespaces**
> RelationshipNamespaces listRelationshipNamespaces()

Get all namespaces

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RelationshipApi(configuration);

let body:any = {};

apiInstance.listRelationshipNamespaces(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**RelationshipNamespaces**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | relationshipNamespaces |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchRelationships**
> void patchRelationships()

Use this endpoint to patch one or more relationships.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RelationshipApi(configuration);

let body:.RelationshipApiPatchRelationshipsRequest = {
  // Array<RelationshipPatch> (optional)
  relationshipPatch: [
    {
      action: "insert",
      relation_tuple: {
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
    },
  ],
};

apiInstance.patchRelationships(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relationshipPatch** | **Array<RelationshipPatch>**|  |


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
**400** | errorGeneric |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


