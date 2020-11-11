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


class RegistrationFlow(object):
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
        'active': 'str',
        'expires_at': 'datetime',
        'id': 'str',
        'issued_at': 'datetime',
        'messages': 'list[Message]',
        'methods': 'dict(str, RegistrationFlowMethod)',
        'request_url': 'str',
        'type': 'str'
    }

    attribute_map = {
        'active': 'active',
        'expires_at': 'expires_at',
        'id': 'id',
        'issued_at': 'issued_at',
        'messages': 'messages',
        'methods': 'methods',
        'request_url': 'request_url',
        'type': 'type'
    }

    def __init__(self, active=None, expires_at=None, id=None, issued_at=None, messages=None, methods=None, request_url=None, type=None, local_vars_configuration=None):  # noqa: E501
        """RegistrationFlow - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._active = None
        self._expires_at = None
        self._id = None
        self._issued_at = None
        self._messages = None
        self._methods = None
        self._request_url = None
        self._type = None
        self.discriminator = None

        if active is not None:
            self.active = active
        self.expires_at = expires_at
        self.id = id
        self.issued_at = issued_at
        if messages is not None:
            self.messages = messages
        self.methods = methods
        self.request_url = request_url
        if type is not None:
            self.type = type

    @property
    def active(self):
        """Gets the active of this RegistrationFlow.  # noqa: E501

        and so on.  # noqa: E501

        :return: The active of this RegistrationFlow.  # noqa: E501
        :rtype: str
        """
        return self._active

    @active.setter
    def active(self, active):
        """Sets the active of this RegistrationFlow.

        and so on.  # noqa: E501

        :param active: The active of this RegistrationFlow.  # noqa: E501
        :type: str
        """

        self._active = active

    @property
    def expires_at(self):
        """Gets the expires_at of this RegistrationFlow.  # noqa: E501

        ExpiresAt is the time (UTC) when the flow expires. If the user still wishes to log in, a new flow has to be initiated.  # noqa: E501

        :return: The expires_at of this RegistrationFlow.  # noqa: E501
        :rtype: datetime
        """
        return self._expires_at

    @expires_at.setter
    def expires_at(self, expires_at):
        """Sets the expires_at of this RegistrationFlow.

        ExpiresAt is the time (UTC) when the flow expires. If the user still wishes to log in, a new flow has to be initiated.  # noqa: E501

        :param expires_at: The expires_at of this RegistrationFlow.  # noqa: E501
        :type: datetime
        """
        if self.local_vars_configuration.client_side_validation and expires_at is None:  # noqa: E501
            raise ValueError("Invalid value for `expires_at`, must not be `None`")  # noqa: E501

        self._expires_at = expires_at

    @property
    def id(self):
        """Gets the id of this RegistrationFlow.  # noqa: E501


        :return: The id of this RegistrationFlow.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this RegistrationFlow.


        :param id: The id of this RegistrationFlow.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and id is None:  # noqa: E501
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def issued_at(self):
        """Gets the issued_at of this RegistrationFlow.  # noqa: E501

        IssuedAt is the time (UTC) when the flow occurred.  # noqa: E501

        :return: The issued_at of this RegistrationFlow.  # noqa: E501
        :rtype: datetime
        """
        return self._issued_at

    @issued_at.setter
    def issued_at(self, issued_at):
        """Sets the issued_at of this RegistrationFlow.

        IssuedAt is the time (UTC) when the flow occurred.  # noqa: E501

        :param issued_at: The issued_at of this RegistrationFlow.  # noqa: E501
        :type: datetime
        """
        if self.local_vars_configuration.client_side_validation and issued_at is None:  # noqa: E501
            raise ValueError("Invalid value for `issued_at`, must not be `None`")  # noqa: E501

        self._issued_at = issued_at

    @property
    def messages(self):
        """Gets the messages of this RegistrationFlow.  # noqa: E501


        :return: The messages of this RegistrationFlow.  # noqa: E501
        :rtype: list[Message]
        """
        return self._messages

    @messages.setter
    def messages(self, messages):
        """Sets the messages of this RegistrationFlow.


        :param messages: The messages of this RegistrationFlow.  # noqa: E501
        :type: list[Message]
        """

        self._messages = messages

    @property
    def methods(self):
        """Gets the methods of this RegistrationFlow.  # noqa: E501

        Methods contains context for all enabled registration methods. If a registration flow has been processed, but for example the password is incorrect, this will contain error messages.  # noqa: E501

        :return: The methods of this RegistrationFlow.  # noqa: E501
        :rtype: dict(str, RegistrationFlowMethod)
        """
        return self._methods

    @methods.setter
    def methods(self, methods):
        """Sets the methods of this RegistrationFlow.

        Methods contains context for all enabled registration methods. If a registration flow has been processed, but for example the password is incorrect, this will contain error messages.  # noqa: E501

        :param methods: The methods of this RegistrationFlow.  # noqa: E501
        :type: dict(str, RegistrationFlowMethod)
        """
        if self.local_vars_configuration.client_side_validation and methods is None:  # noqa: E501
            raise ValueError("Invalid value for `methods`, must not be `None`")  # noqa: E501

        self._methods = methods

    @property
    def request_url(self):
        """Gets the request_url of this RegistrationFlow.  # noqa: E501

        RequestURL is the initial URL that was requested from ORY Kratos. It can be used to forward information contained in the URL's path or query for example.  # noqa: E501

        :return: The request_url of this RegistrationFlow.  # noqa: E501
        :rtype: str
        """
        return self._request_url

    @request_url.setter
    def request_url(self, request_url):
        """Sets the request_url of this RegistrationFlow.

        RequestURL is the initial URL that was requested from ORY Kratos. It can be used to forward information contained in the URL's path or query for example.  # noqa: E501

        :param request_url: The request_url of this RegistrationFlow.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and request_url is None:  # noqa: E501
            raise ValueError("Invalid value for `request_url`, must not be `None`")  # noqa: E501

        self._request_url = request_url

    @property
    def type(self):
        """Gets the type of this RegistrationFlow.  # noqa: E501

        The flow type can either be `api` or `browser`.  # noqa: E501

        :return: The type of this RegistrationFlow.  # noqa: E501
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this RegistrationFlow.

        The flow type can either be `api` or `browser`.  # noqa: E501

        :param type: The type of this RegistrationFlow.  # noqa: E501
        :type: str
        """

        self._type = type

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
        if not isinstance(other, RegistrationFlow):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, RegistrationFlow):
            return True

        return self.to_dict() != other.to_dict()
