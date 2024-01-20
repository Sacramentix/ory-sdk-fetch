/*
 * Ory Identities API
 *
 * This is the API specification for Ory Identities with features such as registration, login, recovery, account verification, profile settings, password reset, identity management, session management, email and sms delivery, and more. 
 *
 * The version of the OpenAPI document: v1.0.0
 * Contact: office@ory.sh
 * Generated by: https://openapi-generator.tech
 */

/// UiContainer : Container represents a HTML Form. The container can work with both HTTP Form and JSON requests



#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct UiContainer {
    /// Action should be used as the form action URL `<form action=\"{{ .Action }}\" method=\"post\">`.
    #[serde(rename = "action")]
    pub action: String,
    #[serde(rename = "messages", skip_serializing_if = "Option::is_none")]
    pub messages: Option<Vec<crate::models::UiText>>,
    /// Method is the form method (e.g. POST)
    #[serde(rename = "method")]
    pub method: String,
    #[serde(rename = "nodes")]
    pub nodes: Vec<crate::models::UiNode>,
}


impl UiContainer {
    /// Container represents a HTML Form. The container can work with both HTTP Form and JSON requests
    pub fn new(action: String, method: String, nodes: Vec<crate::models::UiNode>) -> UiContainer {
        UiContainer {
                action,
                messages: None,
                method,
                nodes,
        }
    }
}


