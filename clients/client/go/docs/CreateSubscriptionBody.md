# CreateSubscriptionBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Currency** | Pointer to **string** |  usd USD eur Euro | [optional] 
**Interval** | **string** |  monthly Monthly yearly Yearly | 
**Plan** | **string** |  | 
**ProvisionFirstProject** | Pointer to **NullableString** |  | [optional] 
**ReturnTo** | Pointer to **string** |  | [optional] 
**Workspace** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewCreateSubscriptionBody

`func NewCreateSubscriptionBody(interval string, plan string, ) *CreateSubscriptionBody`

NewCreateSubscriptionBody instantiates a new CreateSubscriptionBody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateSubscriptionBodyWithDefaults

`func NewCreateSubscriptionBodyWithDefaults() *CreateSubscriptionBody`

NewCreateSubscriptionBodyWithDefaults instantiates a new CreateSubscriptionBody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrency

`func (o *CreateSubscriptionBody) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *CreateSubscriptionBody) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *CreateSubscriptionBody) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *CreateSubscriptionBody) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetInterval

`func (o *CreateSubscriptionBody) GetInterval() string`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *CreateSubscriptionBody) GetIntervalOk() (*string, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *CreateSubscriptionBody) SetInterval(v string)`

SetInterval sets Interval field to given value.


### GetPlan

`func (o *CreateSubscriptionBody) GetPlan() string`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *CreateSubscriptionBody) GetPlanOk() (*string, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *CreateSubscriptionBody) SetPlan(v string)`

SetPlan sets Plan field to given value.


### GetProvisionFirstProject

`func (o *CreateSubscriptionBody) GetProvisionFirstProject() string`

GetProvisionFirstProject returns the ProvisionFirstProject field if non-nil, zero value otherwise.

### GetProvisionFirstProjectOk

`func (o *CreateSubscriptionBody) GetProvisionFirstProjectOk() (*string, bool)`

GetProvisionFirstProjectOk returns a tuple with the ProvisionFirstProject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisionFirstProject

`func (o *CreateSubscriptionBody) SetProvisionFirstProject(v string)`

SetProvisionFirstProject sets ProvisionFirstProject field to given value.

### HasProvisionFirstProject

`func (o *CreateSubscriptionBody) HasProvisionFirstProject() bool`

HasProvisionFirstProject returns a boolean if a field has been set.

### SetProvisionFirstProjectNil

`func (o *CreateSubscriptionBody) SetProvisionFirstProjectNil(b bool)`

 SetProvisionFirstProjectNil sets the value for ProvisionFirstProject to be an explicit nil

### UnsetProvisionFirstProject
`func (o *CreateSubscriptionBody) UnsetProvisionFirstProject()`

UnsetProvisionFirstProject ensures that no value is present for ProvisionFirstProject, not even an explicit nil
### GetReturnTo

`func (o *CreateSubscriptionBody) GetReturnTo() string`

GetReturnTo returns the ReturnTo field if non-nil, zero value otherwise.

### GetReturnToOk

`func (o *CreateSubscriptionBody) GetReturnToOk() (*string, bool)`

GetReturnToOk returns a tuple with the ReturnTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnTo

`func (o *CreateSubscriptionBody) SetReturnTo(v string)`

SetReturnTo sets ReturnTo field to given value.

### HasReturnTo

`func (o *CreateSubscriptionBody) HasReturnTo() bool`

HasReturnTo returns a boolean if a field has been set.

### GetWorkspace

`func (o *CreateSubscriptionBody) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *CreateSubscriptionBody) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *CreateSubscriptionBody) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.

### HasWorkspace

`func (o *CreateSubscriptionBody) HasWorkspace() bool`

HasWorkspace returns a boolean if a field has been set.

### SetWorkspaceNil

`func (o *CreateSubscriptionBody) SetWorkspaceNil(b bool)`

 SetWorkspaceNil sets the value for Workspace to be an explicit nil

### UnsetWorkspace
`func (o *CreateSubscriptionBody) UnsetWorkspace()`

UnsetWorkspace ensures that no value is present for Workspace, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


