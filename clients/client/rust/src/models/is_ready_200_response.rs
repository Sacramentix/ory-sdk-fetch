/*
 * Ory APIs
 *
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v0.2.0-alpha.28
 * Contact: support@ory.sh
 * Generated by: https://openapi-generator.tech
 */




#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct IsReady200Response {
    /// Always \"ok\".
    #[serde(rename = "status")]
    pub status: String,
}


impl IsReady200Response {
    pub fn new(status: String) -> IsReady200Response {
        IsReady200Response {
                status,
        }
    }
}


