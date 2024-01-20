/*
 * Ory Identities API
 *
 * This is the API specification for Ory Identities with features such as registration, login, recovery, account verification, profile settings, password reset, identity management, session management, email and sms delivery, and more. 
 *
 * The version of the OpenAPI document: v1.0.0
 * Contact: office@ory.sh
 * Generated by: https://openapi-generator.tech
 */

/// IdentityWithCredentialsPasswordConfig : Create Identity and Import Password Credentials Configuration



#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct IdentityWithCredentialsPasswordConfig {
    /// The hashed password in [PHC format]( https://www.ory.sh/docs/kratos/concepts/credentials/username-email-password#hashed-password-format)
    #[serde(rename = "hashed_password", skip_serializing_if = "Option::is_none")]
    pub hashed_password: Option<String>,
    /// The password in plain text if no hash is available.
    #[serde(rename = "password", skip_serializing_if = "Option::is_none")]
    pub password: Option<String>,
}

impl Default for IdentityWithCredentialsPasswordConfig {
    fn default() -> Self {
        Self::new()
    }
}

impl IdentityWithCredentialsPasswordConfig {
    /// Create Identity and Import Password Credentials Configuration
    pub fn new() -> IdentityWithCredentialsPasswordConfig {
        IdentityWithCredentialsPasswordConfig {
                hashed_password: None,
                password: None,
        }
    }
}


