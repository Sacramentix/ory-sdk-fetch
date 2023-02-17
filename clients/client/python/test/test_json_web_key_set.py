"""
    Ory APIs

    Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.   # noqa: E501

    The version of the OpenAPI document: v1.1.14
    Contact: support@ory.sh
    Generated by: https://openapi-generator.tech
"""


import sys
import unittest

import ory_client
from ory_client.model.json_web_key import JsonWebKey
globals()['JsonWebKey'] = JsonWebKey
from ory_client.model.json_web_key_set import JsonWebKeySet


class TestJsonWebKeySet(unittest.TestCase):
    """JsonWebKeySet unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testJsonWebKeySet(self):
        """Test JsonWebKeySet"""
        # FIXME: construct object with mandatory attributes with example values
        # model = JsonWebKeySet()  # noqa: E501
        pass


if __name__ == '__main__':
    unittest.main()
