=begin
#Ory Identities API

#This is the API specification for Ory Identities with features such as registration, login, recovery, account verification, profile settings, password reset, identity management, session management, email and sms delivery, and more. 

The version of the OpenAPI document: v1.0.0
Contact: office@ory.sh
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.0.1

=end

require 'date'
require 'time'

module OryKratosClient
  class CourierMessageStatus
    QUEUED = "queued".freeze
    SENT = "sent".freeze
    PROCESSING = "processing".freeze
    ABANDONED = "abandoned".freeze

    # Builds the enum from string
    # @param [String] The enum value in the form of the string
    # @return [String] The enum value
    def self.build_from_hash(value)
      new.build_from_hash(value)
    end

    # Builds the enum from string
    # @param [String] The enum value in the form of the string
    # @return [String] The enum value
    def build_from_hash(value)
      constantValues = CourierMessageStatus.constants.select { |c| CourierMessageStatus::const_get(c) == value }
      raise "Invalid ENUM value #{value} for class #CourierMessageStatus" if constantValues.empty?
      value
    end
  end
end
