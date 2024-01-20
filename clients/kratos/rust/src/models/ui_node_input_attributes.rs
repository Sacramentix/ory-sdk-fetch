/*
 * Ory Identities API
 *
 * This is the API specification for Ory Identities with features such as registration, login, recovery, account verification, profile settings, password reset, identity management, session management, email and sms delivery, and more. 
 *
 * The version of the OpenAPI document: v1.0.0
 * Contact: office@ory.sh
 * Generated by: https://openapi-generator.tech
 */

/// UiNodeInputAttributes : InputAttributes represents the attributes of an input node



#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct UiNodeInputAttributes {
    /// The autocomplete attribute for the input. email InputAttributeAutocompleteEmail tel InputAttributeAutocompleteTel url InputAttributeAutocompleteUrl current-password InputAttributeAutocompleteCurrentPassword new-password InputAttributeAutocompleteNewPassword one-time-code InputAttributeAutocompleteOneTimeCode
    #[serde(rename = "autocomplete", skip_serializing_if = "Option::is_none")]
    pub autocomplete: Option<AutocompleteEnum>,
    /// Sets the input's disabled field to true or false.
    #[serde(rename = "disabled")]
    pub disabled: bool,
    #[serde(rename = "label", skip_serializing_if = "Option::is_none")]
    pub label: Option<Box<crate::models::UiText>>,
    /// The input's element name.
    #[serde(rename = "name")]
    pub name: String,
    /// NodeType represents this node's types. It is a mirror of `node.type` and is primarily used to allow compatibility with OpenAPI 3.0.  In this struct it technically always is \"input\".
    #[serde(rename = "node_type")]
    pub node_type: String,
    /// OnClick may contain javascript which should be executed on click. This is primarily used for WebAuthn.
    #[serde(rename = "onclick", skip_serializing_if = "Option::is_none")]
    pub onclick: Option<String>,
    /// The input's pattern.
    #[serde(rename = "pattern", skip_serializing_if = "Option::is_none")]
    pub pattern: Option<String>,
    /// Mark this input field as required.
    #[serde(rename = "required", skip_serializing_if = "Option::is_none")]
    pub required: Option<bool>,
    /// The input's element type. text InputAttributeTypeText password InputAttributeTypePassword number InputAttributeTypeNumber checkbox InputAttributeTypeCheckbox hidden InputAttributeTypeHidden email InputAttributeTypeEmail tel InputAttributeTypeTel submit InputAttributeTypeSubmit button InputAttributeTypeButton datetime-local InputAttributeTypeDateTimeLocal date InputAttributeTypeDate url InputAttributeTypeURI
    #[serde(rename = "type")]
    pub _type: TypeEnum,
    /// The input's value.
    #[serde(rename = "value", skip_serializing_if = "Option::is_none")]
    pub value: Option<serde_json::Value>,
}


impl UiNodeInputAttributes {
    /// InputAttributes represents the attributes of an input node
    pub fn new(disabled: bool, name: String, node_type: String, _type: TypeEnum) -> UiNodeInputAttributes {
        UiNodeInputAttributes {
                autocomplete: None,
                disabled,
                label: None,
                name,
                node_type,
                onclick: None,
                pattern: None,
                required: None,
                _type,
                value: None,
        }
    }
}

/// The autocomplete attribute for the input. email InputAttributeAutocompleteEmail tel InputAttributeAutocompleteTel url InputAttributeAutocompleteUrl current-password InputAttributeAutocompleteCurrentPassword new-password InputAttributeAutocompleteNewPassword one-time-code InputAttributeAutocompleteOneTimeCode
#[derive(Clone, Copy, Debug, Eq, PartialEq, Ord, PartialOrd, Hash, Serialize, Deserialize)]
pub enum AutocompleteEnum {
    #[serde(rename = "email")]
    Email,
    #[serde(rename = "tel")]
    Tel,
    #[serde(rename = "url")]
    Url,
    #[serde(rename = "current-password")]
    CurrentPassword,
    #[serde(rename = "new-password")]
    NewPassword,
    #[serde(rename = "one-time-code")]
    OneTimeCode,
}
/// The input's element type. text InputAttributeTypeText password InputAttributeTypePassword number InputAttributeTypeNumber checkbox InputAttributeTypeCheckbox hidden InputAttributeTypeHidden email InputAttributeTypeEmail tel InputAttributeTypeTel submit InputAttributeTypeSubmit button InputAttributeTypeButton datetime-local InputAttributeTypeDateTimeLocal date InputAttributeTypeDate url InputAttributeTypeURI
#[derive(Clone, Copy, Debug, Eq, PartialEq, Ord, PartialOrd, Hash, Serialize, Deserialize)]
pub enum TypeEnum {
    #[serde(rename = "text")]
    Text,
    #[serde(rename = "password")]
    Password,
    #[serde(rename = "number")]
    Number,
    #[serde(rename = "checkbox")]
    Checkbox,
    #[serde(rename = "hidden")]
    Hidden,
    #[serde(rename = "email")]
    Email,
    #[serde(rename = "tel")]
    Tel,
    #[serde(rename = "submit")]
    Submit,
    #[serde(rename = "button")]
    Button,
    #[serde(rename = "datetime-local")]
    DatetimeLocal,
    #[serde(rename = "date")]
    Date,
    #[serde(rename = "url")]
    Url,
}

