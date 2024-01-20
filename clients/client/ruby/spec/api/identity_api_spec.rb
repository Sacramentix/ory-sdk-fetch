=begin
#Ory APIs

#Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 

The version of the OpenAPI document: v1.5.1
Contact: support@ory.sh
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.0.1

=end

require 'spec_helper'
require 'json'

# Unit tests for OryClient::IdentityApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'IdentityApi' do
  before do
    # run before each test
    @api_instance = OryClient::IdentityApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of IdentityApi' do
    it 'should create an instance of IdentityApi' do
      expect(@api_instance).to be_instance_of(OryClient::IdentityApi)
    end
  end

  # unit tests for batch_patch_identities
  # Create and deletes multiple identities
  # Creates or delete multiple [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model). This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.
  # @param [Hash] opts the optional parameters
  # @option opts [PatchIdentitiesBody] :patch_identities_body 
  # @return [BatchPatchIdentitiesResponse]
  describe 'batch_patch_identities test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_identity
  # Create an Identity
  # Create an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model).  This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.
  # @param [Hash] opts the optional parameters
  # @option opts [CreateIdentityBody] :create_identity_body 
  # @return [Identity]
  describe 'create_identity test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_recovery_code_for_identity
  # Create a Recovery Code
  # This endpoint creates a recovery code which should be given to the user in order for them to recover (or activate) their account.
  # @param [Hash] opts the optional parameters
  # @option opts [CreateRecoveryCodeForIdentityBody] :create_recovery_code_for_identity_body 
  # @return [RecoveryCodeForIdentity]
  describe 'create_recovery_code_for_identity test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_recovery_link_for_identity
  # Create a Recovery Link
  # This endpoint creates a recovery link which should be given to the user in order for them to recover (or activate) their account.
  # @param [Hash] opts the optional parameters
  # @option opts [CreateRecoveryLinkForIdentityBody] :create_recovery_link_for_identity_body 
  # @return [RecoveryLinkForIdentity]
  describe 'create_recovery_link_for_identity test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_identity
  # Delete an Identity
  # Calling this endpoint irrecoverably and permanently deletes the [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) given its ID. This action can not be undone. This endpoint returns 204 when the identity was deleted or when the identity was not found, in which case it is assumed that is has been deleted already.
  # @param id ID is the identity&#39;s ID.
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_identity test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_identity_credentials
  # Delete a credential for a specific identity
  # Delete an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) credential by its type You can only delete second factor (aal2) credentials.
  # @param id ID is the identity&#39;s ID.
  # @param type Type is the credential&#39;s Type. One of totp, webauthn, lookup
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_identity_credentials test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_identity_sessions
  # Delete &amp; Invalidate an Identity&#39;s Sessions
  # Calling this endpoint irrecoverably and permanently deletes and invalidates all sessions that belong to the given Identity.
  # @param id ID is the identity&#39;s ID.
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_identity_sessions test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for disable_session
  # Deactivate a Session
  # Calling this endpoint deactivates the specified session. Session data is not deleted.
  # @param id ID is the session&#39;s ID.
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'disable_session test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for extend_session
  # Extend a Session
  # Calling this endpoint extends the given session ID. If &#x60;session.earliest_possible_extend&#x60; is set it will only extend the session after the specified time has passed.  Retrieve the session ID from the &#x60;/sessions/whoami&#x60; endpoint / &#x60;toSession&#x60; SDK method.
  # @param id ID is the session&#39;s ID.
  # @param [Hash] opts the optional parameters
  # @return [Session]
  describe 'extend_session test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_identity
  # Get an Identity
  # Return an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) by its ID. You can optionally include credentials (e.g. social sign in connections) in the response by using the &#x60;include_credential&#x60; query parameter.
  # @param id ID must be set to the ID of identity you want to get
  # @param [Hash] opts the optional parameters
  # @option opts [Array<String>] :include_credential Include Credentials in Response  Include any credential, for example &#x60;password&#x60; or &#x60;oidc&#x60;, in the response. When set to &#x60;oidc&#x60;, This will return the initial OAuth 2.0 Access Token, OAuth 2.0 Refresh Token and the OpenID Connect ID Token if available.
  # @return [Identity]
  describe 'get_identity test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_identity_schema
  # Get Identity JSON Schema
  # Return a specific identity schema.
  # @param id ID must be set to the ID of schema you want to get
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_identity_schema test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_session
  # Get Session
  # This endpoint is useful for:  Getting a session object with all specified expandables that exist in an administrative context.
  # @param id ID is the session&#39;s ID.
  # @param [Hash] opts the optional parameters
  # @option opts [Array<String>] :expand ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. Example - ?expand&#x3D;Identity&amp;expand&#x3D;Devices If no value is provided, the expandable properties are skipped.
  # @return [Session]
  describe 'get_session test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for list_identities
  # List Identities
  # Lists all [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model) in the system.
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :per_page Deprecated Items per Page  DEPRECATED: Please use &#x60;page_token&#x60; instead. This parameter will be removed in the future.  This is the number of items per page.
  # @option opts [Integer] :page Deprecated Pagination Page  DEPRECATED: Please use &#x60;page_token&#x60; instead. This parameter will be removed in the future.  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist. The first page can be retrieved by omitting this parameter. Following page pointers will be returned in the &#x60;Link&#x60; header.
  # @option opts [Integer] :page_size Page Size  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
  # @option opts [String] :page_token Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
  # @option opts [String] :consistency Read Consistency Level (preview)  The read consistency level determines the consistency guarantee for reads:  strong (slow): The read is guaranteed to return the most recent data committed at the start of the read. eventual (very fast): The result will return data that is about 4.8 seconds old.  The default consistency guarantee can be changed in the Ory Network Console or using the Ory CLI with &#x60;ory patch project --replace &#39;/previews/default_read_consistency_level&#x3D;\&quot;strong\&quot;&#39;&#x60;.  Setting the default consistency level to &#x60;eventual&#x60; may cause regressions in the future as we add consistency controls to more APIs. Currently, the following APIs will be affected by this setting:  &#x60;GET /admin/identities&#x60;  This feature is in preview and only available in Ory Network.  ConsistencyLevelUnset  ConsistencyLevelUnset is the unset / default consistency level. strong ConsistencyLevelStrong  ConsistencyLevelStrong is the strong consistency level. eventual ConsistencyLevelEventual  ConsistencyLevelEventual is the eventual consistency level using follower read timestamps.
  # @option opts [Array<String>] :ids_filter IdsFilter is list of ids used to filter identities. If this list is empty, then no filter will be applied.
  # @option opts [String] :credentials_identifier CredentialsIdentifier is the identifier (username, email) of the credentials to look up using exact match. Only one of CredentialsIdentifier and CredentialsIdentifierSimilar can be used.
  # @option opts [String] :preview_credentials_identifier_similar This is an EXPERIMENTAL parameter that WILL CHANGE. Do NOT rely on consistent, deterministic behavior. THIS PARAMETER WILL BE REMOVED IN AN UPCOMING RELEASE WITHOUT ANY MIGRATION PATH.  CredentialsIdentifierSimilar is the (partial) identifier (username, email) of the credentials to look up using similarity search. Only one of CredentialsIdentifier and CredentialsIdentifierSimilar can be used.
  # @return [Array<Identity>]
  describe 'list_identities test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for list_identity_schemas
  # Get all Identity Schemas
  # Returns a list of all identity schemas currently in use.
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :per_page Deprecated Items per Page  DEPRECATED: Please use &#x60;page_token&#x60; instead. This parameter will be removed in the future.  This is the number of items per page.
  # @option opts [Integer] :page Deprecated Pagination Page  DEPRECATED: Please use &#x60;page_token&#x60; instead. This parameter will be removed in the future.  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist. The first page can be retrieved by omitting this parameter. Following page pointers will be returned in the &#x60;Link&#x60; header.
  # @option opts [Integer] :page_size Page Size  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
  # @option opts [String] :page_token Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
  # @return [Array<IdentitySchemaContainer>]
  describe 'list_identity_schemas test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for list_identity_sessions
  # List an Identity&#39;s Sessions
  # This endpoint returns all sessions that belong to the given Identity.
  # @param id ID is the identity&#39;s ID.
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :per_page Deprecated Items per Page  DEPRECATED: Please use &#x60;page_token&#x60; instead. This parameter will be removed in the future.  This is the number of items per page.
  # @option opts [Integer] :page Deprecated Pagination Page  DEPRECATED: Please use &#x60;page_token&#x60; instead. This parameter will be removed in the future.  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist. The first page can be retrieved by omitting this parameter. Following page pointers will be returned in the &#x60;Link&#x60; header.
  # @option opts [Integer] :page_size Page Size  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
  # @option opts [String] :page_token Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
  # @option opts [Boolean] :active Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.
  # @return [Array<Session>]
  describe 'list_identity_sessions test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for list_sessions
  # List All Sessions
  # Listing all sessions that exist.
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :page_size Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
  # @option opts [String] :page_token Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
  # @option opts [Boolean] :active Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.
  # @option opts [Array<String>] :expand ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. If no value is provided, the expandable properties are skipped.
  # @return [Array<Session>]
  describe 'list_sessions test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for patch_identity
  # Patch an Identity
  # Partially updates an [identity&#39;s](https://www.ory.sh/docs/kratos/concepts/identity-user-model) field using [JSON Patch](https://jsonpatch.com/). The fields &#x60;id&#x60;, &#x60;stateChangedAt&#x60; and &#x60;credentials&#x60; can not be updated using this method.
  # @param id ID must be set to the ID of identity you want to update
  # @param [Hash] opts the optional parameters
  # @option opts [Array<JsonPatch>] :json_patch 
  # @return [Identity]
  describe 'patch_identity test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_identity
  # Update an Identity
  # This endpoint updates an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model). The full identity payload (except credentials) is expected. It is possible to update the identity&#39;s credentials as well.
  # @param id ID must be set to the ID of identity you want to update
  # @param [Hash] opts the optional parameters
  # @option opts [UpdateIdentityBody] :update_identity_body 
  # @return [Identity]
  describe 'update_identity test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
