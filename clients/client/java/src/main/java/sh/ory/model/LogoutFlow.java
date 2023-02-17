/*
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.1.14
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package sh.ory.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import sh.ory.JSON;

/**
 * Logout Flow
 */
@ApiModel(description = "Logout Flow")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-02-17T09:43:42.716496396Z[Etc/UTC]")
public class LogoutFlow {
  public static final String SERIALIZED_NAME_LOGOUT_TOKEN = "logout_token";
  @SerializedName(SERIALIZED_NAME_LOGOUT_TOKEN)
  private String logoutToken;

  public static final String SERIALIZED_NAME_LOGOUT_URL = "logout_url";
  @SerializedName(SERIALIZED_NAME_LOGOUT_URL)
  private String logoutUrl;

  public LogoutFlow() {
  }

  public LogoutFlow logoutToken(String logoutToken) {
    
    this.logoutToken = logoutToken;
    return this;
  }

   /**
   * LogoutToken can be used to perform logout using AJAX.
   * @return logoutToken
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "LogoutToken can be used to perform logout using AJAX.")

  public String getLogoutToken() {
    return logoutToken;
  }


  public void setLogoutToken(String logoutToken) {
    this.logoutToken = logoutToken;
  }


  public LogoutFlow logoutUrl(String logoutUrl) {
    
    this.logoutUrl = logoutUrl;
    return this;
  }

   /**
   * LogoutURL can be opened in a browser to sign the user out.  format: uri
   * @return logoutUrl
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "LogoutURL can be opened in a browser to sign the user out.  format: uri")

  public String getLogoutUrl() {
    return logoutUrl;
  }


  public void setLogoutUrl(String logoutUrl) {
    this.logoutUrl = logoutUrl;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LogoutFlow logoutFlow = (LogoutFlow) o;
    return Objects.equals(this.logoutToken, logoutFlow.logoutToken) &&
        Objects.equals(this.logoutUrl, logoutFlow.logoutUrl);
  }

  @Override
  public int hashCode() {
    return Objects.hash(logoutToken, logoutUrl);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LogoutFlow {\n");
    sb.append("    logoutToken: ").append(toIndentedString(logoutToken)).append("\n");
    sb.append("    logoutUrl: ").append(toIndentedString(logoutUrl)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("logout_token");
    openapiFields.add("logout_url");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("logout_token");
    openapiRequiredFields.add("logout_url");
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to LogoutFlow
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!LogoutFlow.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in LogoutFlow is not found in the empty JSON string", LogoutFlow.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!LogoutFlow.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `LogoutFlow` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : LogoutFlow.openapiRequiredFields) {
        if (jsonObj.get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonObj.toString()));
        }
      }
      if (!jsonObj.get("logout_token").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `logout_token` to be a primitive type in the JSON string but got `%s`", jsonObj.get("logout_token").toString()));
      }
      if (!jsonObj.get("logout_url").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `logout_url` to be a primitive type in the JSON string but got `%s`", jsonObj.get("logout_url").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!LogoutFlow.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'LogoutFlow' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<LogoutFlow> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(LogoutFlow.class));

       return (TypeAdapter<T>) new TypeAdapter<LogoutFlow>() {
           @Override
           public void write(JsonWriter out, LogoutFlow value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public LogoutFlow read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of LogoutFlow given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of LogoutFlow
  * @throws IOException if the JSON string is invalid with respect to LogoutFlow
  */
  public static LogoutFlow fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, LogoutFlow.class);
  }

 /**
  * Convert an instance of LogoutFlow to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

