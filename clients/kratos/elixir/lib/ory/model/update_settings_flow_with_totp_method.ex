# NOTE: This file is auto generated by OpenAPI Generator 6.6.0 (https://openapi-generator.tech).
# Do not edit this file manually.

defmodule Ory.Model.UpdateSettingsFlowWithTotpMethod do
  @moduledoc """
  Update Settings Flow with TOTP Method
  """

  @derive [Poison.Encoder]
  defstruct [
    :csrf_token,
    :method,
    :totp_code,
    :totp_unlink
  ]

  @type t :: %__MODULE__{
    :csrf_token => String.t | nil,
    :method => String.t,
    :totp_code => String.t | nil,
    :totp_unlink => boolean() | nil
  }
end

defimpl Poison.Decoder, for: Ory.Model.UpdateSettingsFlowWithTotpMethod do
  def decode(value, _options) do
    value
  end
end

