/*
Ory Identities API

This is the API specification for Ory Identities with features such as registration, login, recovery, account verification, profile settings, password reset, identity management, session management, email and sms delivery, and more. 

API version: v1.0.0
Contact: office@ory.sh
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package client

import (
	"encoding/json"
)

// BatchPatchIdentitiesResponse Patch identities response
type BatchPatchIdentitiesResponse struct {
	// The patch responses for the individual identities.
	Identities []IdentityPatchResponse `json:"identities,omitempty"`
	AdditionalProperties map[string]interface{}
}

type _BatchPatchIdentitiesResponse BatchPatchIdentitiesResponse

// NewBatchPatchIdentitiesResponse instantiates a new BatchPatchIdentitiesResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBatchPatchIdentitiesResponse() *BatchPatchIdentitiesResponse {
	this := BatchPatchIdentitiesResponse{}
	return &this
}

// NewBatchPatchIdentitiesResponseWithDefaults instantiates a new BatchPatchIdentitiesResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBatchPatchIdentitiesResponseWithDefaults() *BatchPatchIdentitiesResponse {
	this := BatchPatchIdentitiesResponse{}
	return &this
}

// GetIdentities returns the Identities field value if set, zero value otherwise.
func (o *BatchPatchIdentitiesResponse) GetIdentities() []IdentityPatchResponse {
	if o == nil || o.Identities == nil {
		var ret []IdentityPatchResponse
		return ret
	}
	return o.Identities
}

// GetIdentitiesOk returns a tuple with the Identities field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BatchPatchIdentitiesResponse) GetIdentitiesOk() ([]IdentityPatchResponse, bool) {
	if o == nil || o.Identities == nil {
		return nil, false
	}
	return o.Identities, true
}

// HasIdentities returns a boolean if a field has been set.
func (o *BatchPatchIdentitiesResponse) HasIdentities() bool {
	if o != nil && o.Identities != nil {
		return true
	}

	return false
}

// SetIdentities gets a reference to the given []IdentityPatchResponse and assigns it to the Identities field.
func (o *BatchPatchIdentitiesResponse) SetIdentities(v []IdentityPatchResponse) {
	o.Identities = v
}

func (o BatchPatchIdentitiesResponse) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Identities != nil {
		toSerialize["identities"] = o.Identities
	}

	for key, value := range o.AdditionalProperties {
		toSerialize[key] = value
	}

	return json.Marshal(toSerialize)
}

func (o *BatchPatchIdentitiesResponse) UnmarshalJSON(bytes []byte) (err error) {
	varBatchPatchIdentitiesResponse := _BatchPatchIdentitiesResponse{}

	if err = json.Unmarshal(bytes, &varBatchPatchIdentitiesResponse); err == nil {
		*o = BatchPatchIdentitiesResponse(varBatchPatchIdentitiesResponse)
	}

	additionalProperties := make(map[string]interface{})

	if err = json.Unmarshal(bytes, &additionalProperties); err == nil {
		delete(additionalProperties, "identities")
		o.AdditionalProperties = additionalProperties
	}

	return err
}

type NullableBatchPatchIdentitiesResponse struct {
	value *BatchPatchIdentitiesResponse
	isSet bool
}

func (v NullableBatchPatchIdentitiesResponse) Get() *BatchPatchIdentitiesResponse {
	return v.value
}

func (v *NullableBatchPatchIdentitiesResponse) Set(val *BatchPatchIdentitiesResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableBatchPatchIdentitiesResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableBatchPatchIdentitiesResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBatchPatchIdentitiesResponse(val *BatchPatchIdentitiesResponse) *NullableBatchPatchIdentitiesResponse {
	return &NullableBatchPatchIdentitiesResponse{value: val, isSet: true}
}

func (v NullableBatchPatchIdentitiesResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBatchPatchIdentitiesResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


