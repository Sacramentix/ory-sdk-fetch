/*
Ory APIs

Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 

API version: v1.2.11
Contact: support@ory.sh
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package client

import (
	"encoding/json"
)

// EmailTemplateDataBody struct for EmailTemplateDataBody
type EmailTemplateDataBody struct {
	Html string `json:"html"`
	Plaintext string `json:"plaintext"`
	AdditionalProperties map[string]interface{}
}

type _EmailTemplateDataBody EmailTemplateDataBody

// NewEmailTemplateDataBody instantiates a new EmailTemplateDataBody object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEmailTemplateDataBody(html string, plaintext string) *EmailTemplateDataBody {
	this := EmailTemplateDataBody{}
	this.Html = html
	this.Plaintext = plaintext
	return &this
}

// NewEmailTemplateDataBodyWithDefaults instantiates a new EmailTemplateDataBody object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEmailTemplateDataBodyWithDefaults() *EmailTemplateDataBody {
	this := EmailTemplateDataBody{}
	return &this
}

// GetHtml returns the Html field value
func (o *EmailTemplateDataBody) GetHtml() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Html
}

// GetHtmlOk returns a tuple with the Html field value
// and a boolean to check if the value has been set.
func (o *EmailTemplateDataBody) GetHtmlOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Html, true
}

// SetHtml sets field value
func (o *EmailTemplateDataBody) SetHtml(v string) {
	o.Html = v
}

// GetPlaintext returns the Plaintext field value
func (o *EmailTemplateDataBody) GetPlaintext() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Plaintext
}

// GetPlaintextOk returns a tuple with the Plaintext field value
// and a boolean to check if the value has been set.
func (o *EmailTemplateDataBody) GetPlaintextOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Plaintext, true
}

// SetPlaintext sets field value
func (o *EmailTemplateDataBody) SetPlaintext(v string) {
	o.Plaintext = v
}

func (o EmailTemplateDataBody) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["html"] = o.Html
	}
	if true {
		toSerialize["plaintext"] = o.Plaintext
	}

	for key, value := range o.AdditionalProperties {
		toSerialize[key] = value
	}

	return json.Marshal(toSerialize)
}

func (o *EmailTemplateDataBody) UnmarshalJSON(bytes []byte) (err error) {
	varEmailTemplateDataBody := _EmailTemplateDataBody{}

	if err = json.Unmarshal(bytes, &varEmailTemplateDataBody); err == nil {
		*o = EmailTemplateDataBody(varEmailTemplateDataBody)
	}

	additionalProperties := make(map[string]interface{})

	if err = json.Unmarshal(bytes, &additionalProperties); err == nil {
		delete(additionalProperties, "html")
		delete(additionalProperties, "plaintext")
		o.AdditionalProperties = additionalProperties
	}

	return err
}

type NullableEmailTemplateDataBody struct {
	value *EmailTemplateDataBody
	isSet bool
}

func (v NullableEmailTemplateDataBody) Get() *EmailTemplateDataBody {
	return v.value
}

func (v *NullableEmailTemplateDataBody) Set(val *EmailTemplateDataBody) {
	v.value = val
	v.isSet = true
}

func (v NullableEmailTemplateDataBody) IsSet() bool {
	return v.isSet
}

func (v *NullableEmailTemplateDataBody) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEmailTemplateDataBody(val *EmailTemplateDataBody) *NullableEmailTemplateDataBody {
	return &NullableEmailTemplateDataBody{value: val, isSet: true}
}

func (v NullableEmailTemplateDataBody) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEmailTemplateDataBody) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


