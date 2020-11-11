# coding: utf-8

# flake8: noqa
"""
    Ory Kratos

    Welcome to the ORY Kratos HTTP API documentation!  # noqa: E501

    The version of the OpenAPI document: v0.5.4-alpha.1
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

# import models into model package
from ory_kratos_client.models.complete_self_service_login_flow_with_password_method import CompleteSelfServiceLoginFlowWithPasswordMethod
from ory_kratos_client.models.complete_self_service_recovery_flow_with_link_method import CompleteSelfServiceRecoveryFlowWithLinkMethod
from ory_kratos_client.models.complete_self_service_settings_flow_with_password_method import CompleteSelfServiceSettingsFlowWithPasswordMethod
from ory_kratos_client.models.complete_self_service_verification_flow_with_link_method import CompleteSelfServiceVerificationFlowWithLinkMethod
from ory_kratos_client.models.create_identity import CreateIdentity
from ory_kratos_client.models.create_recovery_link import CreateRecoveryLink
from ory_kratos_client.models.error_container import ErrorContainer
from ory_kratos_client.models.form_field import FormField
from ory_kratos_client.models.generic_error import GenericError
from ory_kratos_client.models.generic_error_payload import GenericErrorPayload
from ory_kratos_client.models.health_not_ready_status import HealthNotReadyStatus
from ory_kratos_client.models.health_status import HealthStatus
from ory_kratos_client.models.identity import Identity
from ory_kratos_client.models.login_flow import LoginFlow
from ory_kratos_client.models.login_flow_method import LoginFlowMethod
from ory_kratos_client.models.login_flow_method_config import LoginFlowMethodConfig
from ory_kratos_client.models.login_via_api_response import LoginViaApiResponse
from ory_kratos_client.models.message import Message
from ory_kratos_client.models.recovery_address import RecoveryAddress
from ory_kratos_client.models.recovery_flow import RecoveryFlow
from ory_kratos_client.models.recovery_flow_method import RecoveryFlowMethod
from ory_kratos_client.models.recovery_flow_method_config import RecoveryFlowMethodConfig
from ory_kratos_client.models.recovery_link import RecoveryLink
from ory_kratos_client.models.registration_flow import RegistrationFlow
from ory_kratos_client.models.registration_flow_method import RegistrationFlowMethod
from ory_kratos_client.models.registration_flow_method_config import RegistrationFlowMethodConfig
from ory_kratos_client.models.registration_via_api_response import RegistrationViaApiResponse
from ory_kratos_client.models.revoke_session import RevokeSession
from ory_kratos_client.models.session import Session
from ory_kratos_client.models.settings_flow import SettingsFlow
from ory_kratos_client.models.settings_flow_method import SettingsFlowMethod
from ory_kratos_client.models.settings_flow_method_config import SettingsFlowMethodConfig
from ory_kratos_client.models.settings_via_api_response import SettingsViaApiResponse
from ory_kratos_client.models.update_identity import UpdateIdentity
from ory_kratos_client.models.verifiable_address import VerifiableAddress
from ory_kratos_client.models.verification_flow import VerificationFlow
from ory_kratos_client.models.verification_flow_method import VerificationFlowMethod
from ory_kratos_client.models.verification_flow_method_config import VerificationFlowMethodConfig
from ory_kratos_client.models.version import Version
