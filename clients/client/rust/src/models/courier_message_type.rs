/*
 * Ory APIs
 *
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.1.14
 * Contact: support@ory.sh
 * Generated by: https://openapi-generator.tech
 */

/// CourierMessageType : It can either be `email` or `phone`

/// It can either be `email` or `phone`
#[derive(Clone, Copy, Debug, Eq, PartialEq, Ord, PartialOrd, Hash, Serialize, Deserialize)]
pub enum CourierMessageType {
    #[serde(rename = "email")]
    Email,
    #[serde(rename = "phone")]
    Phone,

}

impl ToString for CourierMessageType {
    fn to_string(&self) -> String {
        match self {
            Self::Email => String::from("email"),
            Self::Phone => String::from("phone"),
        }
    }
}




