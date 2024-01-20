# NOTE: This file is auto generated by OpenAPI Generator 7.2.0 (https://openapi-generator.tech).
# Do not edit this file manually.

defmodule Ory.Model.GetProjectMetricsResponse do
  @moduledoc """
  Response of the getMetrics endpoint
  """

  @derive Jason.Encoder
  defstruct [
    :data
  ]

  @type t :: %__MODULE__{
    :data => [Ory.Model.MetricsDatapoint.t]
  }

  alias Ory.Deserializer

  def decode(value) do
    value
     |> Deserializer.deserialize(:data, :list, Ory.Model.MetricsDatapoint)
  end
end

