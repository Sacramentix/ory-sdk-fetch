/*
 * Ory Kratos
 * Welcome to the ORY Kratos HTTP API documentation!
 *
 * The version of the OpenAPI document: v0.5.4-alpha.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package sh.ory.kratos.model;

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
import sh.ory.kratos.model.VerificationFlowMethodConfig;

/**
 * VerificationFlowMethod
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-11-11T13:10:56.063507Z[GMT]")
public class VerificationFlowMethod {
  public static final String SERIALIZED_NAME_CONFIG = "config";
  @SerializedName(SERIALIZED_NAME_CONFIG)
  private VerificationFlowMethodConfig config;

  public static final String SERIALIZED_NAME_METHOD = "method";
  @SerializedName(SERIALIZED_NAME_METHOD)
  private String method;


  public VerificationFlowMethod config(VerificationFlowMethodConfig config) {
    
    this.config = config;
    return this;
  }

   /**
   * Get config
   * @return config
  **/
  @ApiModelProperty(required = true, value = "")

  public VerificationFlowMethodConfig getConfig() {
    return config;
  }


  public void setConfig(VerificationFlowMethodConfig config) {
    this.config = config;
  }


  public VerificationFlowMethod method(String method) {
    
    this.method = method;
    return this;
  }

   /**
   * Method contains the request credentials type.
   * @return method
  **/
  @ApiModelProperty(required = true, value = "Method contains the request credentials type.")

  public String getMethod() {
    return method;
  }


  public void setMethod(String method) {
    this.method = method;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    VerificationFlowMethod verificationFlowMethod = (VerificationFlowMethod) o;
    return Objects.equals(this.config, verificationFlowMethod.config) &&
        Objects.equals(this.method, verificationFlowMethod.method);
  }

  @Override
  public int hashCode() {
    return Objects.hash(config, method);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class VerificationFlowMethod {\n");
    sb.append("    config: ").append(toIndentedString(config)).append("\n");
    sb.append("    method: ").append(toIndentedString(method)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

