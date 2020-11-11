# coding: utf-8

"""
    Ory Kratos

    Welcome to the ORY Kratos HTTP API documentation!  # noqa: E501

    The version of the OpenAPI document: v0.5.4-alpha.1
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from ory_kratos_client.configuration import Configuration


class CompleteSelfServiceLoginFlowWithPasswordMethod(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'csrf_token': 'str',
        'identifier': 'str',
        'password': 'str'
    }

    attribute_map = {
        'csrf_token': 'csrf_token',
        'identifier': 'identifier',
        'password': 'password'
    }

    def __init__(self, csrf_token=None, identifier=None, password=None, local_vars_configuration=None):  # noqa: E501
        """CompleteSelfServiceLoginFlowWithPasswordMethod - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._csrf_token = None
        self._identifier = None
        self._password = None
        self.discriminator = None

        if csrf_token is not None:
            self.csrf_token = csrf_token
        if identifier is not None:
            self.identifier = identifier
        if password is not None:
            self.password = password

    @property
    def csrf_token(self):
        """Gets the csrf_token of this CompleteSelfServiceLoginFlowWithPasswordMethod.  # noqa: E501

        Sending the anti-csrf token is only required for browser login flows.  # noqa: E501

        :return: The csrf_token of this CompleteSelfServiceLoginFlowWithPasswordMethod.  # noqa: E501
        :rtype: str
        """
        return self._csrf_token

    @csrf_token.setter
    def csrf_token(self, csrf_token):
        """Sets the csrf_token of this CompleteSelfServiceLoginFlowWithPasswordMethod.

        Sending the anti-csrf token is only required for browser login flows.  # noqa: E501

        :param csrf_token: The csrf_token of this CompleteSelfServiceLoginFlowWithPasswordMethod.  # noqa: E501
        :type: str
        """

        self._csrf_token = csrf_token

    @property
    def identifier(self):
        """Gets the identifier of this CompleteSelfServiceLoginFlowWithPasswordMethod.  # noqa: E501

        Identifier is the email or username of the user trying to log in.  # noqa: E501

        :return: The identifier of this CompleteSelfServiceLoginFlowWithPasswordMethod.  # noqa: E501
        :rtype: str
        """
        return self._identifier

    @identifier.setter
    def identifier(self, identifier):
        """Sets the identifier of this CompleteSelfServiceLoginFlowWithPasswordMethod.

        Identifier is the email or username of the user trying to log in.  # noqa: E501

        :param identifier: The identifier of this CompleteSelfServiceLoginFlowWithPasswordMethod.  # noqa: E501
        :type: str
        """

        self._identifier = identifier

    @property
    def password(self):
        """Gets the password of this CompleteSelfServiceLoginFlowWithPasswordMethod.  # noqa: E501

        The user's password.  # noqa: E501

        :return: The password of this CompleteSelfServiceLoginFlowWithPasswordMethod.  # noqa: E501
        :rtype: str
        """
        return self._password

    @password.setter
    def password(self, password):
        """Sets the password of this CompleteSelfServiceLoginFlowWithPasswordMethod.

        The user's password.  # noqa: E501

        :param password: The password of this CompleteSelfServiceLoginFlowWithPasswordMethod.  # noqa: E501
        :type: str
        """

        self._password = password

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, CompleteSelfServiceLoginFlowWithPasswordMethod):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CompleteSelfServiceLoginFlowWithPasswordMethod):
            return True

        return self.to_dict() != other.to_dict()
