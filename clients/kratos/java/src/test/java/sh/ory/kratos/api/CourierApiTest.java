/*
 * Ory Identities API
 * This is the API specification for Ory Identities with features such as registration, login, recovery, account verification, profile settings, password reset, identity management, session management, email and sms delivery, and more. 
 *
 * The version of the OpenAPI document: v1.0.0
 * Contact: office@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package sh.ory.kratos.api;

import sh.ory.kratos.ApiException;
import sh.ory.kratos.model.CourierMessageStatus;
import sh.ory.kratos.model.ErrorGeneric;
import sh.ory.kratos.model.Message;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for CourierApi
 */
@Disabled
public class CourierApiTest {

    private final CourierApi api = new CourierApi();

    /**
     * Get a Message
     *
     * Gets a specific messages by the given ID.
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getCourierMessageTest() throws ApiException {
        String id = null;
        Message response = api.getCourierMessage(id);
        // TODO: test validations
    }

    /**
     * List Messages
     *
     * Lists all messages by given status and recipient.
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listCourierMessagesTest() throws ApiException {
        Long pageSize = null;
        String pageToken = null;
        CourierMessageStatus status = null;
        String recipient = null;
        List<Message> response = api.listCourierMessages(pageSize, pageToken, status, recipient);
        // TODO: test validations
    }

}
