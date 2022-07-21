/*
 * Ory APIs
 *
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * API version: v0.1.0-alpha.11
 * Contact: support@ory.sh
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package client

import (
	"encoding/json"
)

// AdminCreateIdentityImportCredentialsOidcProvider struct for AdminCreateIdentityImportCredentialsOidcProvider
type AdminCreateIdentityImportCredentialsOidcProvider struct {
	// The OpenID Connect provider to link the subject to. Usually something like `google` or `github`.
	Provider string `json:"provider"`
	// The subject (`sub`) of the OpenID Connect connection. Usually the `sub` field of the ID Token.
	Subject string `json:"subject"`
}

// NewAdminCreateIdentityImportCredentialsOidcProvider instantiates a new AdminCreateIdentityImportCredentialsOidcProvider object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAdminCreateIdentityImportCredentialsOidcProvider(provider string, subject string) *AdminCreateIdentityImportCredentialsOidcProvider {
	this := AdminCreateIdentityImportCredentialsOidcProvider{}
	this.Provider = provider
	this.Subject = subject
	return &this
}

// NewAdminCreateIdentityImportCredentialsOidcProviderWithDefaults instantiates a new AdminCreateIdentityImportCredentialsOidcProvider object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAdminCreateIdentityImportCredentialsOidcProviderWithDefaults() *AdminCreateIdentityImportCredentialsOidcProvider {
	this := AdminCreateIdentityImportCredentialsOidcProvider{}
	return &this
}

// GetProvider returns the Provider field value
func (o *AdminCreateIdentityImportCredentialsOidcProvider) GetProvider() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Provider
}

// GetProviderOk returns a tuple with the Provider field value
// and a boolean to check if the value has been set.
func (o *AdminCreateIdentityImportCredentialsOidcProvider) GetProviderOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Provider, true
}

// SetProvider sets field value
func (o *AdminCreateIdentityImportCredentialsOidcProvider) SetProvider(v string) {
	o.Provider = v
}

// GetSubject returns the Subject field value
func (o *AdminCreateIdentityImportCredentialsOidcProvider) GetSubject() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Subject
}

// GetSubjectOk returns a tuple with the Subject field value
// and a boolean to check if the value has been set.
func (o *AdminCreateIdentityImportCredentialsOidcProvider) GetSubjectOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Subject, true
}

// SetSubject sets field value
func (o *AdminCreateIdentityImportCredentialsOidcProvider) SetSubject(v string) {
	o.Subject = v
}

func (o AdminCreateIdentityImportCredentialsOidcProvider) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["provider"] = o.Provider
	}
	if true {
		toSerialize["subject"] = o.Subject
	}
	return json.Marshal(toSerialize)
}

type NullableAdminCreateIdentityImportCredentialsOidcProvider struct {
	value *AdminCreateIdentityImportCredentialsOidcProvider
	isSet bool
}

func (v NullableAdminCreateIdentityImportCredentialsOidcProvider) Get() *AdminCreateIdentityImportCredentialsOidcProvider {
	return v.value
}

func (v *NullableAdminCreateIdentityImportCredentialsOidcProvider) Set(val *AdminCreateIdentityImportCredentialsOidcProvider) {
	v.value = val
	v.isSet = true
}

func (v NullableAdminCreateIdentityImportCredentialsOidcProvider) IsSet() bool {
	return v.isSet
}

func (v *NullableAdminCreateIdentityImportCredentialsOidcProvider) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAdminCreateIdentityImportCredentialsOidcProvider(val *AdminCreateIdentityImportCredentialsOidcProvider) *NullableAdminCreateIdentityImportCredentialsOidcProvider {
	return &NullableAdminCreateIdentityImportCredentialsOidcProvider{value: val, isSet: true}
}

func (v NullableAdminCreateIdentityImportCredentialsOidcProvider) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAdminCreateIdentityImportCredentialsOidcProvider) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


