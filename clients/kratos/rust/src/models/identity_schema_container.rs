/*
 * Ory Identities API
 *
 * This is the API specification for Ory Identities with features such as registration, login, recovery, account verification, profile settings, password reset, identity management, session management, email and sms delivery, and more. 
 *
 * The version of the OpenAPI document: v1.0.0
 * Contact: office@ory.sh
 * Generated by: https://openapi-generator.tech
 */

/// IdentitySchemaContainer : An Identity JSON Schema Container



#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct IdentitySchemaContainer {
    /// The ID of the Identity JSON Schema
    #[serde(rename = "id", skip_serializing_if = "Option::is_none")]
    pub id: Option<String>,
    /// The actual Identity JSON Schema
    #[serde(rename = "schema", skip_serializing_if = "Option::is_none")]
    pub schema: Option<serde_json::Value>,
}

impl Default for IdentitySchemaContainer {
    fn default() -> Self {
        Self::new()
    }
}

impl IdentitySchemaContainer {
    /// An Identity JSON Schema Container
    pub fn new() -> IdentitySchemaContainer {
        IdentitySchemaContainer {
                id: None,
                schema: None,
        }
    }
}


