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


package sh.ory.hydra.model;

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
import java.util.ArrayList;
import java.util.List;

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

import sh.ory.hydra.JSON;

/**
 * JsonWebKey
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-08-16T21:14:30.471114291Z[Etc/UTC]")
public class JsonWebKey {
  public static final String SERIALIZED_NAME_ALG = "alg";
  @SerializedName(SERIALIZED_NAME_ALG)
  private String alg;

  public static final String SERIALIZED_NAME_CRV = "crv";
  @SerializedName(SERIALIZED_NAME_CRV)
  private String crv;

  public static final String SERIALIZED_NAME_D = "d";
  @SerializedName(SERIALIZED_NAME_D)
  private String d;

  public static final String SERIALIZED_NAME_DP = "dp";
  @SerializedName(SERIALIZED_NAME_DP)
  private String dp;

  public static final String SERIALIZED_NAME_DQ = "dq";
  @SerializedName(SERIALIZED_NAME_DQ)
  private String dq;

  public static final String SERIALIZED_NAME_E = "e";
  @SerializedName(SERIALIZED_NAME_E)
  private String e;

  public static final String SERIALIZED_NAME_K = "k";
  @SerializedName(SERIALIZED_NAME_K)
  private String k;

  public static final String SERIALIZED_NAME_KID = "kid";
  @SerializedName(SERIALIZED_NAME_KID)
  private String kid;

  public static final String SERIALIZED_NAME_KTY = "kty";
  @SerializedName(SERIALIZED_NAME_KTY)
  private String kty;

  public static final String SERIALIZED_NAME_N = "n";
  @SerializedName(SERIALIZED_NAME_N)
  private String n;

  public static final String SERIALIZED_NAME_P = "p";
  @SerializedName(SERIALIZED_NAME_P)
  private String p;

  public static final String SERIALIZED_NAME_Q = "q";
  @SerializedName(SERIALIZED_NAME_Q)
  private String q;

  public static final String SERIALIZED_NAME_QI = "qi";
  @SerializedName(SERIALIZED_NAME_QI)
  private String qi;

  public static final String SERIALIZED_NAME_USE = "use";
  @SerializedName(SERIALIZED_NAME_USE)
  private String use;

  public static final String SERIALIZED_NAME_X = "x";
  @SerializedName(SERIALIZED_NAME_X)
  private String x;

  public static final String SERIALIZED_NAME_X5C = "x5c";
  @SerializedName(SERIALIZED_NAME_X5C)
  private List<String> x5c = null;

  public static final String SERIALIZED_NAME_Y = "y";
  @SerializedName(SERIALIZED_NAME_Y)
  private String y;

  public JsonWebKey() {
  }

  public JsonWebKey alg(String alg) {
    
    this.alg = alg;
    return this;
  }

   /**
   * The \&quot;alg\&quot; (algorithm) parameter identifies the algorithm intended for use with the key.  The values used should either be registered in the IANA \&quot;JSON Web Signature and Encryption Algorithms\&quot; registry established by [JWA] or be a value that contains a Collision- Resistant Name.
   * @return alg
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "RS256", required = true, value = "The \"alg\" (algorithm) parameter identifies the algorithm intended for use with the key.  The values used should either be registered in the IANA \"JSON Web Signature and Encryption Algorithms\" registry established by [JWA] or be a value that contains a Collision- Resistant Name.")

  public String getAlg() {
    return alg;
  }


  public void setAlg(String alg) {
    this.alg = alg;
  }


  public JsonWebKey crv(String crv) {
    
    this.crv = crv;
    return this;
  }

   /**
   * Get crv
   * @return crv
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "P-256", value = "")

  public String getCrv() {
    return crv;
  }


  public void setCrv(String crv) {
    this.crv = crv;
  }


  public JsonWebKey d(String d) {
    
    this.d = d;
    return this;
  }

   /**
   * Get d
   * @return d
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE", value = "")

  public String getD() {
    return d;
  }


  public void setD(String d) {
    this.d = d;
  }


  public JsonWebKey dp(String dp) {
    
    this.dp = dp;
    return this;
  }

   /**
   * Get dp
   * @return dp
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0", value = "")

  public String getDp() {
    return dp;
  }


  public void setDp(String dp) {
    this.dp = dp;
  }


  public JsonWebKey dq(String dq) {
    
    this.dq = dq;
    return this;
  }

   /**
   * Get dq
   * @return dq
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk", value = "")

  public String getDq() {
    return dq;
  }


  public void setDq(String dq) {
    this.dq = dq;
  }


  public JsonWebKey e(String e) {
    
    this.e = e;
    return this;
  }

   /**
   * Get e
   * @return e
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "AQAB", value = "")

  public String getE() {
    return e;
  }


  public void setE(String e) {
    this.e = e;
  }


  public JsonWebKey k(String k) {
    
    this.k = k;
    return this;
  }

   /**
   * Get k
   * @return k
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "GawgguFyGrWKav7AX4VKUg", value = "")

  public String getK() {
    return k;
  }


  public void setK(String k) {
    this.k = k;
  }


  public JsonWebKey kid(String kid) {
    
    this.kid = kid;
    return this;
  }

   /**
   * The \&quot;kid\&quot; (key ID) parameter is used to match a specific key.  This is used, for instance, to choose among a set of keys within a JWK Set during key rollover.  The structure of the \&quot;kid\&quot; value is unspecified.  When \&quot;kid\&quot; values are used within a JWK Set, different keys within the JWK Set SHOULD use distinct \&quot;kid\&quot; values.  (One example in which different keys might use the same \&quot;kid\&quot; value is if they have different \&quot;kty\&quot; (key type) values but are considered to be equivalent alternatives by the application using them.)  The \&quot;kid\&quot; value is a case-sensitive string.
   * @return kid
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "1603dfe0af8f4596", required = true, value = "The \"kid\" (key ID) parameter is used to match a specific key.  This is used, for instance, to choose among a set of keys within a JWK Set during key rollover.  The structure of the \"kid\" value is unspecified.  When \"kid\" values are used within a JWK Set, different keys within the JWK Set SHOULD use distinct \"kid\" values.  (One example in which different keys might use the same \"kid\" value is if they have different \"kty\" (key type) values but are considered to be equivalent alternatives by the application using them.)  The \"kid\" value is a case-sensitive string.")

  public String getKid() {
    return kid;
  }


  public void setKid(String kid) {
    this.kid = kid;
  }


  public JsonWebKey kty(String kty) {
    
    this.kty = kty;
    return this;
  }

   /**
   * The \&quot;kty\&quot; (key type) parameter identifies the cryptographic algorithm family used with the key, such as \&quot;RSA\&quot; or \&quot;EC\&quot;. \&quot;kty\&quot; values should either be registered in the IANA \&quot;JSON Web Key Types\&quot; registry established by [JWA] or be a value that contains a Collision- Resistant Name.  The \&quot;kty\&quot; value is a case-sensitive string.
   * @return kty
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "RSA", required = true, value = "The \"kty\" (key type) parameter identifies the cryptographic algorithm family used with the key, such as \"RSA\" or \"EC\". \"kty\" values should either be registered in the IANA \"JSON Web Key Types\" registry established by [JWA] or be a value that contains a Collision- Resistant Name.  The \"kty\" value is a case-sensitive string.")

  public String getKty() {
    return kty;
  }


  public void setKty(String kty) {
    this.kty = kty;
  }


  public JsonWebKey n(String n) {
    
    this.n = n;
    return this;
  }

   /**
   * Get n
   * @return n
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0", value = "")

  public String getN() {
    return n;
  }


  public void setN(String n) {
    this.n = n;
  }


  public JsonWebKey p(String p) {
    
    this.p = p;
    return this;
  }

   /**
   * Get p
   * @return p
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ", value = "")

  public String getP() {
    return p;
  }


  public void setP(String p) {
    this.p = p;
  }


  public JsonWebKey q(String q) {
    
    this.q = q;
    return this;
  }

   /**
   * Get q
   * @return q
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ", value = "")

  public String getQ() {
    return q;
  }


  public void setQ(String q) {
    this.q = q;
  }


  public JsonWebKey qi(String qi) {
    
    this.qi = qi;
    return this;
  }

   /**
   * Get qi
   * @return qi
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU", value = "")

  public String getQi() {
    return qi;
  }


  public void setQi(String qi) {
    this.qi = qi;
  }


  public JsonWebKey use(String use) {
    
    this.use = use;
    return this;
  }

   /**
   * Use (\&quot;public key use\&quot;) identifies the intended use of the public key. The \&quot;use\&quot; parameter is employed to indicate whether a public key is used for encrypting data or verifying the signature on data. Values are commonly \&quot;sig\&quot; (signature) or \&quot;enc\&quot; (encryption).
   * @return use
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "sig", required = true, value = "Use (\"public key use\") identifies the intended use of the public key. The \"use\" parameter is employed to indicate whether a public key is used for encrypting data or verifying the signature on data. Values are commonly \"sig\" (signature) or \"enc\" (encryption).")

  public String getUse() {
    return use;
  }


  public void setUse(String use) {
    this.use = use;
  }


  public JsonWebKey x(String x) {
    
    this.x = x;
    return this;
  }

   /**
   * Get x
   * @return x
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU", value = "")

  public String getX() {
    return x;
  }


  public void setX(String x) {
    this.x = x;
  }


  public JsonWebKey x5c(List<String> x5c) {
    
    this.x5c = x5c;
    return this;
  }

  public JsonWebKey addX5cItem(String x5cItem) {
    if (this.x5c == null) {
      this.x5c = new ArrayList<>();
    }
    this.x5c.add(x5cItem);
    return this;
  }

   /**
   * The \&quot;x5c\&quot; (X.509 certificate chain) parameter contains a chain of one or more PKIX certificates [RFC5280].  The certificate chain is represented as a JSON array of certificate value strings.  Each string in the array is a base64-encoded (Section 4 of [RFC4648] -- not base64url-encoded) DER [ITU.X690.1994] PKIX certificate value. The PKIX certificate containing the key value MUST be the first certificate.
   * @return x5c
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The \"x5c\" (X.509 certificate chain) parameter contains a chain of one or more PKIX certificates [RFC5280].  The certificate chain is represented as a JSON array of certificate value strings.  Each string in the array is a base64-encoded (Section 4 of [RFC4648] -- not base64url-encoded) DER [ITU.X690.1994] PKIX certificate value. The PKIX certificate containing the key value MUST be the first certificate.")

  public List<String> getX5c() {
    return x5c;
  }


  public void setX5c(List<String> x5c) {
    this.x5c = x5c;
  }


  public JsonWebKey y(String y) {
    
    this.y = y;
    return this;
  }

   /**
   * Get y
   * @return y
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0", value = "")

  public String getY() {
    return y;
  }


  public void setY(String y) {
    this.y = y;
  }

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  private Map<String, Object> additionalProperties;

  /**
   * Set the additional (undeclared) property with the specified name and value.
   * If the property does not already exist, create it otherwise replace it.
   *
   * @param key name of the property
   * @param value value of the property
   * @return the JsonWebKey instance itself
   */
  public JsonWebKey putAdditionalProperty(String key, Object value) {
    if (this.additionalProperties == null) {
        this.additionalProperties = new HashMap<String, Object>();
    }
    this.additionalProperties.put(key, value);
    return this;
  }

  /**
   * Return the additional (undeclared) property.
   *
   * @return a map of objects
   */
  public Map<String, Object> getAdditionalProperties() {
    return additionalProperties;
  }

  /**
   * Return the additional (undeclared) property with the specified name.
   *
   * @param key name of the property
   * @return an object
   */
  public Object getAdditionalProperty(String key) {
    if (this.additionalProperties == null) {
        return null;
    }
    return this.additionalProperties.get(key);
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    JsonWebKey jsonWebKey = (JsonWebKey) o;
    return Objects.equals(this.alg, jsonWebKey.alg) &&
        Objects.equals(this.crv, jsonWebKey.crv) &&
        Objects.equals(this.d, jsonWebKey.d) &&
        Objects.equals(this.dp, jsonWebKey.dp) &&
        Objects.equals(this.dq, jsonWebKey.dq) &&
        Objects.equals(this.e, jsonWebKey.e) &&
        Objects.equals(this.k, jsonWebKey.k) &&
        Objects.equals(this.kid, jsonWebKey.kid) &&
        Objects.equals(this.kty, jsonWebKey.kty) &&
        Objects.equals(this.n, jsonWebKey.n) &&
        Objects.equals(this.p, jsonWebKey.p) &&
        Objects.equals(this.q, jsonWebKey.q) &&
        Objects.equals(this.qi, jsonWebKey.qi) &&
        Objects.equals(this.use, jsonWebKey.use) &&
        Objects.equals(this.x, jsonWebKey.x) &&
        Objects.equals(this.x5c, jsonWebKey.x5c) &&
        Objects.equals(this.y, jsonWebKey.y)&&
        Objects.equals(this.additionalProperties, jsonWebKey.additionalProperties);
  }

  @Override
  public int hashCode() {
    return Objects.hash(alg, crv, d, dp, dq, e, k, kid, kty, n, p, q, qi, use, x, x5c, y, additionalProperties);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class JsonWebKey {\n");
    sb.append("    alg: ").append(toIndentedString(alg)).append("\n");
    sb.append("    crv: ").append(toIndentedString(crv)).append("\n");
    sb.append("    d: ").append(toIndentedString(d)).append("\n");
    sb.append("    dp: ").append(toIndentedString(dp)).append("\n");
    sb.append("    dq: ").append(toIndentedString(dq)).append("\n");
    sb.append("    e: ").append(toIndentedString(e)).append("\n");
    sb.append("    k: ").append(toIndentedString(k)).append("\n");
    sb.append("    kid: ").append(toIndentedString(kid)).append("\n");
    sb.append("    kty: ").append(toIndentedString(kty)).append("\n");
    sb.append("    n: ").append(toIndentedString(n)).append("\n");
    sb.append("    p: ").append(toIndentedString(p)).append("\n");
    sb.append("    q: ").append(toIndentedString(q)).append("\n");
    sb.append("    qi: ").append(toIndentedString(qi)).append("\n");
    sb.append("    use: ").append(toIndentedString(use)).append("\n");
    sb.append("    x: ").append(toIndentedString(x)).append("\n");
    sb.append("    x5c: ").append(toIndentedString(x5c)).append("\n");
    sb.append("    y: ").append(toIndentedString(y)).append("\n");
    sb.append("    additionalProperties: ").append(toIndentedString(additionalProperties)).append("\n");
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
    openapiFields.add("alg");
    openapiFields.add("crv");
    openapiFields.add("d");
    openapiFields.add("dp");
    openapiFields.add("dq");
    openapiFields.add("e");
    openapiFields.add("k");
    openapiFields.add("kid");
    openapiFields.add("kty");
    openapiFields.add("n");
    openapiFields.add("p");
    openapiFields.add("q");
    openapiFields.add("qi");
    openapiFields.add("use");
    openapiFields.add("x");
    openapiFields.add("x5c");
    openapiFields.add("y");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("alg");
    openapiRequiredFields.add("kid");
    openapiRequiredFields.add("kty");
    openapiRequiredFields.add("use");
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to JsonWebKey
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!JsonWebKey.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in JsonWebKey is not found in the empty JSON string", JsonWebKey.openapiRequiredFields.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : JsonWebKey.openapiRequiredFields) {
        if (jsonObj.get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonObj.toString()));
        }
      }
      if (!jsonObj.get("alg").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `alg` to be a primitive type in the JSON string but got `%s`", jsonObj.get("alg").toString()));
      }
      if ((jsonObj.get("crv") != null && !jsonObj.get("crv").isJsonNull()) && !jsonObj.get("crv").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `crv` to be a primitive type in the JSON string but got `%s`", jsonObj.get("crv").toString()));
      }
      if ((jsonObj.get("d") != null && !jsonObj.get("d").isJsonNull()) && !jsonObj.get("d").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `d` to be a primitive type in the JSON string but got `%s`", jsonObj.get("d").toString()));
      }
      if ((jsonObj.get("dp") != null && !jsonObj.get("dp").isJsonNull()) && !jsonObj.get("dp").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `dp` to be a primitive type in the JSON string but got `%s`", jsonObj.get("dp").toString()));
      }
      if ((jsonObj.get("dq") != null && !jsonObj.get("dq").isJsonNull()) && !jsonObj.get("dq").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `dq` to be a primitive type in the JSON string but got `%s`", jsonObj.get("dq").toString()));
      }
      if ((jsonObj.get("e") != null && !jsonObj.get("e").isJsonNull()) && !jsonObj.get("e").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `e` to be a primitive type in the JSON string but got `%s`", jsonObj.get("e").toString()));
      }
      if ((jsonObj.get("k") != null && !jsonObj.get("k").isJsonNull()) && !jsonObj.get("k").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `k` to be a primitive type in the JSON string but got `%s`", jsonObj.get("k").toString()));
      }
      if (!jsonObj.get("kid").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `kid` to be a primitive type in the JSON string but got `%s`", jsonObj.get("kid").toString()));
      }
      if (!jsonObj.get("kty").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `kty` to be a primitive type in the JSON string but got `%s`", jsonObj.get("kty").toString()));
      }
      if ((jsonObj.get("n") != null && !jsonObj.get("n").isJsonNull()) && !jsonObj.get("n").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `n` to be a primitive type in the JSON string but got `%s`", jsonObj.get("n").toString()));
      }
      if ((jsonObj.get("p") != null && !jsonObj.get("p").isJsonNull()) && !jsonObj.get("p").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `p` to be a primitive type in the JSON string but got `%s`", jsonObj.get("p").toString()));
      }
      if ((jsonObj.get("q") != null && !jsonObj.get("q").isJsonNull()) && !jsonObj.get("q").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `q` to be a primitive type in the JSON string but got `%s`", jsonObj.get("q").toString()));
      }
      if ((jsonObj.get("qi") != null && !jsonObj.get("qi").isJsonNull()) && !jsonObj.get("qi").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `qi` to be a primitive type in the JSON string but got `%s`", jsonObj.get("qi").toString()));
      }
      if (!jsonObj.get("use").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `use` to be a primitive type in the JSON string but got `%s`", jsonObj.get("use").toString()));
      }
      if ((jsonObj.get("x") != null && !jsonObj.get("x").isJsonNull()) && !jsonObj.get("x").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `x` to be a primitive type in the JSON string but got `%s`", jsonObj.get("x").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("x5c") != null && !jsonObj.get("x5c").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `x5c` to be an array in the JSON string but got `%s`", jsonObj.get("x5c").toString()));
      }
      if ((jsonObj.get("y") != null && !jsonObj.get("y").isJsonNull()) && !jsonObj.get("y").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `y` to be a primitive type in the JSON string but got `%s`", jsonObj.get("y").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!JsonWebKey.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'JsonWebKey' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<JsonWebKey> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(JsonWebKey.class));

       return (TypeAdapter<T>) new TypeAdapter<JsonWebKey>() {
           @Override
           public void write(JsonWriter out, JsonWebKey value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             obj.remove("additionalProperties");
             // serialize additonal properties
             if (value.getAdditionalProperties() != null) {
               for (Map.Entry<String, Object> entry : value.getAdditionalProperties().entrySet()) {
                 if (entry.getValue() instanceof String)
                   obj.addProperty(entry.getKey(), (String) entry.getValue());
                 else if (entry.getValue() instanceof Number)
                   obj.addProperty(entry.getKey(), (Number) entry.getValue());
                 else if (entry.getValue() instanceof Boolean)
                   obj.addProperty(entry.getKey(), (Boolean) entry.getValue());
                 else if (entry.getValue() instanceof Character)
                   obj.addProperty(entry.getKey(), (Character) entry.getValue());
                 else {
                   obj.add(entry.getKey(), gson.toJsonTree(entry.getValue()).getAsJsonObject());
                 }
               }
             }
             elementAdapter.write(out, obj);
           }

           @Override
           public JsonWebKey read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             // store additional fields in the deserialized instance
             JsonWebKey instance = thisAdapter.fromJsonTree(jsonObj);
             for (Map.Entry<String, JsonElement> entry : jsonObj.entrySet()) {
               if (!openapiFields.contains(entry.getKey())) {
                 if (entry.getValue().isJsonPrimitive()) { // primitive type
                   if (entry.getValue().getAsJsonPrimitive().isString())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsString());
                   else if (entry.getValue().getAsJsonPrimitive().isNumber())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsNumber());
                   else if (entry.getValue().getAsJsonPrimitive().isBoolean())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsBoolean());
                   else
                     throw new IllegalArgumentException(String.format("The field `%s` has unknown primitive type. Value: %s", entry.getKey(), entry.getValue().toString()));
                 } else if (entry.getValue().isJsonArray()) {
                     instance.putAdditionalProperty(entry.getKey(), gson.fromJson(entry.getValue(), List.class));
                 } else { // JSON object
                     instance.putAdditionalProperty(entry.getKey(), gson.fromJson(entry.getValue(), HashMap.class));
                 }
               }
             }
             return instance;
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of JsonWebKey given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of JsonWebKey
  * @throws IOException if the JSON string is invalid with respect to JsonWebKey
  */
  public static JsonWebKey fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, JsonWebKey.class);
  }

 /**
  * Convert an instance of JsonWebKey to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

