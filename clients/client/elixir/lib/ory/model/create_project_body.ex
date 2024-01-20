# NOTE: This file is auto generated by OpenAPI Generator 7.2.0 (https://openapi-generator.tech).
# Do not edit this file manually.

defmodule Ory.Model.CreateProjectBody do
  @moduledoc """
  Create Project Request Body
  """

  @derive Jason.Encoder
  defstruct [
    :name,
    :workspace_id
  ]

  @type t :: %__MODULE__{
    :name => String.t,
    :workspace_id => String.t | nil
  }

  def decode(value) do
    value
  end
end

