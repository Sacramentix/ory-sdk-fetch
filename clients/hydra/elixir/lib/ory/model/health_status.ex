# NOTE: This file is auto generated by OpenAPI Generator 6.6.0 (https://openapi-generator.tech).
# Do not edit this file manually.

defmodule Ory.Model.HealthStatus do
  @moduledoc """
  
  """

  @derive [Poison.Encoder]
  defstruct [
    :status
  ]

  @type t :: %__MODULE__{
    :status => String.t | nil
  }
end

defimpl Poison.Decoder, for: Ory.Model.HealthStatus do
  def decode(value, _options) do
    value
  end
end

