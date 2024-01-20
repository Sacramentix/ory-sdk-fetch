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

// IsAlive200Response struct for IsAlive200Response
type IsAlive200Response struct {
	// Always \"ok\".
	Status string `json:"status"`
	AdditionalProperties map[string]interface{}
}

type _IsAlive200Response IsAlive200Response

// NewIsAlive200Response instantiates a new IsAlive200Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewIsAlive200Response(status string) *IsAlive200Response {
	this := IsAlive200Response{}
	this.Status = status
	return &this
}

// NewIsAlive200ResponseWithDefaults instantiates a new IsAlive200Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewIsAlive200ResponseWithDefaults() *IsAlive200Response {
	this := IsAlive200Response{}
	return &this
}

// GetStatus returns the Status field value
func (o *IsAlive200Response) GetStatus() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Status
}

// GetStatusOk returns a tuple with the Status field value
// and a boolean to check if the value has been set.
func (o *IsAlive200Response) GetStatusOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Status, true
}

// SetStatus sets field value
func (o *IsAlive200Response) SetStatus(v string) {
	o.Status = v
}

func (o IsAlive200Response) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["status"] = o.Status
	}

	for key, value := range o.AdditionalProperties {
		toSerialize[key] = value
	}

	return json.Marshal(toSerialize)
}

func (o *IsAlive200Response) UnmarshalJSON(bytes []byte) (err error) {
	varIsAlive200Response := _IsAlive200Response{}

	if err = json.Unmarshal(bytes, &varIsAlive200Response); err == nil {
		*o = IsAlive200Response(varIsAlive200Response)
	}

	additionalProperties := make(map[string]interface{})

	if err = json.Unmarshal(bytes, &additionalProperties); err == nil {
		delete(additionalProperties, "status")
		o.AdditionalProperties = additionalProperties
	}

	return err
}

type NullableIsAlive200Response struct {
	value *IsAlive200Response
	isSet bool
}

func (v NullableIsAlive200Response) Get() *IsAlive200Response {
	return v.value
}

func (v *NullableIsAlive200Response) Set(val *IsAlive200Response) {
	v.value = val
	v.isSet = true
}

func (v NullableIsAlive200Response) IsSet() bool {
	return v.isSet
}

func (v *NullableIsAlive200Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableIsAlive200Response(val *IsAlive200Response) *NullableIsAlive200Response {
	return &NullableIsAlive200Response{value: val, isSet: true}
}

func (v NullableIsAlive200Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableIsAlive200Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


