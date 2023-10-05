# NOTE: This file is auto generated by OpenAPI Generator 6.6.0 (https://openapi-generator.tech).
# Do not edit this file manually.

defmodule Ory.Model.OAuth2TokenExchange do
  @moduledoc """
  OAuth2 Token Exchange Result
  """

  @derive [Poison.Encoder]
  defstruct [
    :access_token,
    :expires_in,
    :id_token,
    :refresh_token,
    :scope,
    :token_type
  ]

  @type t :: %__MODULE__{
    :access_token => String.t | nil,
    :expires_in => integer() | nil,
    :id_token => String.t | nil,
    :refresh_token => String.t | nil,
    :scope => String.t | nil,
    :token_type => String.t | nil
  }
end

defimpl Poison.Decoder, for: Ory.Model.OAuth2TokenExchange do
  def decode(value, _options) do
    value
  end
end

