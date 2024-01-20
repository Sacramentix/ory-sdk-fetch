/*
 * Ory Hydra API
 * Documentation for all of Ory Hydra's APIs. 
 *
 * The version of the OpenAPI document: v2.2.0-rc.3
 * Contact: hi@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package sh.ory.hydra.api;

import sh.ory.hydra.ApiException;
import sh.ory.hydra.model.ErrorOAuth2;
import sh.ory.hydra.model.JsonWebKeySet;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for WellknownApi
 */
@Disabled
public class WellknownApiTest {

    private final WellknownApi api = new WellknownApi();

    /**
     * Discover Well-Known JSON Web Keys
     *
     * This endpoint returns JSON Web Keys required to verifying OpenID Connect ID Tokens and, if enabled, OAuth 2.0 JWT Access Tokens. This endpoint can be used with client libraries like [node-jwks-rsa](https://github.com/auth0/node-jwks-rsa) among others.
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void discoverJsonWebKeysTest() throws ApiException {
        JsonWebKeySet response = api.discoverJsonWebKeys();
        // TODO: test validations
    }

}
