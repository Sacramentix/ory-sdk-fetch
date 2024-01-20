# NOTE: This file is auto generated by OpenAPI Generator 7.2.0 (https://openapi-generator.tech).
# Do not edit this file manually.

defmodule Ory.Model.OAuth2ConsentSession do
  @moduledoc """
  A completed OAuth 2.0 Consent Session.
  """

  @derive Jason.Encoder
  defstruct [
    :consent_request,
    :expires_at,
    :grant_access_token_audience,
    :grant_scope,
    :handled_at,
    :remember,
    :remember_for,
    :session
  ]

  @type t :: %__MODULE__{
    :consent_request => Ory.Model.OAuth2ConsentRequest.t | nil,
    :expires_at => Ory.Model.OAuth2ConsentSessionExpiresAt.t | nil,
    :grant_access_token_audience => [String.t] | nil,
    :grant_scope => [String.t] | nil,
    :handled_at => DateTime.t | nil,
    :remember => boolean() | nil,
    :remember_for => integer() | nil,
    :session => Ory.Model.AcceptOAuth2ConsentRequestSession.t | nil
  }

  alias Ory.Deserializer

  def decode(value) do
    value
     |> Deserializer.deserialize(:consent_request, :struct, Ory.Model.OAuth2ConsentRequest)
     |> Deserializer.deserialize(:expires_at, :struct, Ory.Model.OAuth2ConsentSessionExpiresAt)
     |> Deserializer.deserialize(:handled_at, :datetime, nil)
     |> Deserializer.deserialize(:session, :struct, Ory.Model.AcceptOAuth2ConsentRequestSession)
  end
end

