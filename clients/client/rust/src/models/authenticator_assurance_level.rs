/*
 * Ory APIs
 *
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.0.0
 * Contact: support@ory.sh
 * Generated by: https://openapi-generator.tech
 */

/// AuthenticatorAssuranceLevel : The authenticator assurance level can be one of \"aal1\", \"aal2\", or \"aal3\". A higher number means that it is harder for an attacker to compromise the account.  Generally, \"aal1\" implies that one authentication factor was used while AAL2 implies that two factors (e.g. password + TOTP) have been used.  To learn more about these levels please head over to: https://www.ory.sh/kratos/docs/concepts/credentials

/// The authenticator assurance level can be one of \"aal1\", \"aal2\", or \"aal3\". A higher number means that it is harder for an attacker to compromise the account.  Generally, \"aal1\" implies that one authentication factor was used while AAL2 implies that two factors (e.g. password + TOTP) have been used.  To learn more about these levels please head over to: https://www.ory.sh/kratos/docs/concepts/credentials
#[derive(Clone, Copy, Debug, Eq, PartialEq, Ord, PartialOrd, Hash, Serialize, Deserialize)]
pub enum AuthenticatorAssuranceLevel {
    #[serde(rename = "aal0")]
    Aal0,
    #[serde(rename = "aal1")]
    Aal1,
    #[serde(rename = "aal2")]
    Aal2,
    #[serde(rename = "aal3")]
    Aal3,

}

impl ToString for AuthenticatorAssuranceLevel {
    fn to_string(&self) -> String {
        match self {
            Self::Aal0 => String::from("aal0"),
            Self::Aal1 => String::from("aal1"),
            Self::Aal2 => String::from("aal2"),
            Self::Aal3 => String::from("aal3"),
        }
    }
}




