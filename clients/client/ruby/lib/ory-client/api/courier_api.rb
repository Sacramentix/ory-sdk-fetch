=begin
#Ory APIs

#Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 

The version of the OpenAPI document: v1.0.0
Contact: support@ory.sh
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.0.1

=end

require 'cgi'

module OryClient
  class CourierApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # List Messages
    # Lists all messages by given status and recipient.
    # @param [Hash] opts the optional parameters
    # @option opts [Integer] :per_page Items per Page  This is the number of items per page. (default to 250)
    # @option opts [Integer] :page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist. (default to 1)
    # @option opts [CourierMessageStatus] :status Status filters out messages based on status. If no value is provided, it doesn&#39;t take effect on filter.
    # @option opts [String] :recipient Recipient filters out messages based on recipient. If no value is provided, it doesn&#39;t take effect on filter.
    # @return [Array<Message>]
    def list_courier_messages(opts = {})
      data, _status_code, _headers = list_courier_messages_with_http_info(opts)
      data
    end

    # List Messages
    # Lists all messages by given status and recipient.
    # @param [Hash] opts the optional parameters
    # @option opts [Integer] :per_page Items per Page  This is the number of items per page. (default to 250)
    # @option opts [Integer] :page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist. (default to 1)
    # @option opts [CourierMessageStatus] :status Status filters out messages based on status. If no value is provided, it doesn&#39;t take effect on filter.
    # @option opts [String] :recipient Recipient filters out messages based on recipient. If no value is provided, it doesn&#39;t take effect on filter.
    # @return [Array<(Array<Message>, Integer, Hash)>] Array<Message> data, response status code and response headers
    def list_courier_messages_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: CourierApi.list_courier_messages ...'
      end
      if @api_client.config.client_side_validation && !opts[:'per_page'].nil? && opts[:'per_page'] > 1000
        fail ArgumentError, 'invalid value for "opts[:"per_page"]" when calling CourierApi.list_courier_messages, must be smaller than or equal to 1000.'
      end

      if @api_client.config.client_side_validation && !opts[:'per_page'].nil? && opts[:'per_page'] < 1
        fail ArgumentError, 'invalid value for "opts[:"per_page"]" when calling CourierApi.list_courier_messages, must be greater than or equal to 1.'
      end

      if @api_client.config.client_side_validation && !opts[:'page'].nil? && opts[:'page'] < 1
        fail ArgumentError, 'invalid value for "opts[:"page"]" when calling CourierApi.list_courier_messages, must be greater than or equal to 1.'
      end

      # resource path
      local_var_path = '/admin/courier/messages'

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'per_page'] = opts[:'per_page'] if !opts[:'per_page'].nil?
      query_params[:'page'] = opts[:'page'] if !opts[:'page'].nil?
      query_params[:'status'] = opts[:'status'] if !opts[:'status'].nil?
      query_params[:'recipient'] = opts[:'recipient'] if !opts[:'recipient'].nil?

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Array<Message>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['oryAccessToken']

      new_options = opts.merge(
        :operation => :"CourierApi.list_courier_messages",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: CourierApi#list_courier_messages\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
