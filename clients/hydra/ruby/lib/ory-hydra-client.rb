=begin
#Ory Hydra API

#Documentation for all of Ory Hydra's APIs. 

The version of the OpenAPI document: v2.2.0-rc.3
Contact: hi@ory.sh
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.0.1

=end

# Common files
require 'ory-hydra-client/api_client'
require 'ory-hydra-client/api_error'
require 'ory-hydra-client/version'
require 'ory-hydra-client/configuration'

# Models
require 'ory-hydra-client/models/accept_o_auth2_consent_request'
require 'ory-hydra-client/models/accept_o_auth2_consent_request_session'
require 'ory-hydra-client/models/accept_o_auth2_login_request'
require 'ory-hydra-client/models/create_json_web_key_set'
require 'ory-hydra-client/models/create_verifiable_credential_request_body'
require 'ory-hydra-client/models/credential_supported_draft00'
require 'ory-hydra-client/models/error_o_auth2'
require 'ory-hydra-client/models/generic_error'
require 'ory-hydra-client/models/get_version200_response'
require 'ory-hydra-client/models/health_not_ready_status'
require 'ory-hydra-client/models/health_status'
require 'ory-hydra-client/models/introspected_o_auth2_token'
require 'ory-hydra-client/models/is_ready200_response'
require 'ory-hydra-client/models/is_ready503_response'
require 'ory-hydra-client/models/json_patch'
require 'ory-hydra-client/models/json_web_key'
require 'ory-hydra-client/models/json_web_key_set'
require 'ory-hydra-client/models/o_auth2_client'
require 'ory-hydra-client/models/o_auth2_client_token_lifespans'
require 'ory-hydra-client/models/o_auth2_consent_request'
require 'ory-hydra-client/models/o_auth2_consent_request_open_id_connect_context'
require 'ory-hydra-client/models/o_auth2_consent_session'
require 'ory-hydra-client/models/o_auth2_consent_session_expires_at'
require 'ory-hydra-client/models/o_auth2_login_request'
require 'ory-hydra-client/models/o_auth2_logout_request'
require 'ory-hydra-client/models/o_auth2_redirect_to'
require 'ory-hydra-client/models/o_auth2_token_exchange'
require 'ory-hydra-client/models/oidc_configuration'
require 'ory-hydra-client/models/oidc_user_info'
require 'ory-hydra-client/models/pagination'
require 'ory-hydra-client/models/pagination_headers'
require 'ory-hydra-client/models/rfc6749_error_json'
require 'ory-hydra-client/models/reject_o_auth2_request'
require 'ory-hydra-client/models/token_pagination'
require 'ory-hydra-client/models/token_pagination_headers'
require 'ory-hydra-client/models/token_pagination_request_parameters'
require 'ory-hydra-client/models/token_pagination_response_headers'
require 'ory-hydra-client/models/trust_o_auth2_jwt_grant_issuer'
require 'ory-hydra-client/models/trusted_o_auth2_jwt_grant_issuer'
require 'ory-hydra-client/models/trusted_o_auth2_jwt_grant_json_web_key'
require 'ory-hydra-client/models/verifiable_credential_priming_response'
require 'ory-hydra-client/models/verifiable_credential_proof'
require 'ory-hydra-client/models/verifiable_credential_response'
require 'ory-hydra-client/models/version'

# APIs
require 'ory-hydra-client/api/jwk_api'
require 'ory-hydra-client/api/metadata_api'
require 'ory-hydra-client/api/o_auth2_api'
require 'ory-hydra-client/api/oidc_api'
require 'ory-hydra-client/api/wellknown_api'

module OryHydraClient
  class << self
    # Customize default settings for the SDK using block.
    #   OryHydraClient.configure do |config|
    #     config.username = "xxx"
    #     config.password = "xxx"
    #   end
    # If no block given, return the default Configuration object.
    def configure
      if block_given?
        yield(Configuration.default)
      else
        Configuration.default
      end
    end
  end
end
