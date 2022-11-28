/*
 * Ory APIs
 *
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.0.0
 * Contact: support@ory.sh
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Ory.Client.Client.OpenAPIDateConverter;

namespace Ory.Client.Model
{
    /// <summary>
    /// ClientNormalizedProjectRevisionIdentitySchema
    /// </summary>
    [DataContract(Name = "normalizedProjectRevisionIdentitySchema")]
    public partial class ClientNormalizedProjectRevisionIdentitySchema : IEquatable<ClientNormalizedProjectRevisionIdentitySchema>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ClientNormalizedProjectRevisionIdentitySchema" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="identitySchema">identitySchema.</param>
        /// <param name="identitySchemaId">identitySchemaId.</param>
        /// <param name="importId">The imported (named) ID of the Identity Schema referenced in the Ory Kratos config..</param>
        /// <param name="importUrl">The ImportURL can be used to import an Identity Schema from a bse64 encoded string. In the future, this key also support HTTPS and other sources!  If you import an Ory Kratos configuration, this would be akin to the &#x60;identity.schemas.#.url&#x60; key.  The configuration will always return the import URL when you fetch it from the API..</param>
        /// <param name="isDefault">If true sets the default schema for identities  Only one schema can ever be the default schema. If you try to add two schemas with default to true, the request will fail..</param>
        /// <param name="preset">Use a preset instead of a custom identity schema..</param>
        /// <param name="projectRevisionId">projectRevisionId.</param>
        public ClientNormalizedProjectRevisionIdentitySchema(string id = default(string), ClientManagedIdentitySchema identitySchema = default(ClientManagedIdentitySchema), string identitySchemaId = default(string), string importId = default(string), string importUrl = default(string), bool isDefault = default(bool), string preset = default(string), string projectRevisionId = default(string))
        {
            this.Id = id;
            this.IdentitySchema = identitySchema;
            this.IdentitySchemaId = identitySchemaId;
            this.ImportId = importId;
            this.ImportUrl = importUrl;
            this.IsDefault = isDefault;
            this.Preset = preset;
            this.ProjectRevisionId = projectRevisionId;
            this.AdditionalProperties = new Dictionary<string, object>();
        }

        /// <summary>
        /// The Project&#39;s Revision Creation Date
        /// </summary>
        /// <value>The Project&#39;s Revision Creation Date</value>
        [DataMember(Name = "created_at", EmitDefaultValue = false)]
        public DateTime CreatedAt { get; private set; }

        /// <summary>
        /// Returns false as CreatedAt should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeCreatedAt()
        {
            return false;
        }
        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets IdentitySchema
        /// </summary>
        [DataMember(Name = "identity_schema", EmitDefaultValue = false)]
        public ClientManagedIdentitySchema IdentitySchema { get; set; }

        /// <summary>
        /// Gets or Sets IdentitySchemaId
        /// </summary>
        [DataMember(Name = "identity_schema_id", EmitDefaultValue = true)]
        public string IdentitySchemaId { get; set; }

        /// <summary>
        /// The imported (named) ID of the Identity Schema referenced in the Ory Kratos config.
        /// </summary>
        /// <value>The imported (named) ID of the Identity Schema referenced in the Ory Kratos config.</value>
        [DataMember(Name = "import_id", EmitDefaultValue = false)]
        public string ImportId { get; set; }

        /// <summary>
        /// The ImportURL can be used to import an Identity Schema from a bse64 encoded string. In the future, this key also support HTTPS and other sources!  If you import an Ory Kratos configuration, this would be akin to the &#x60;identity.schemas.#.url&#x60; key.  The configuration will always return the import URL when you fetch it from the API.
        /// </summary>
        /// <value>The ImportURL can be used to import an Identity Schema from a bse64 encoded string. In the future, this key also support HTTPS and other sources!  If you import an Ory Kratos configuration, this would be akin to the &#x60;identity.schemas.#.url&#x60; key.  The configuration will always return the import URL when you fetch it from the API.</value>
        [DataMember(Name = "import_url", EmitDefaultValue = false)]
        public string ImportUrl { get; set; }

        /// <summary>
        /// If true sets the default schema for identities  Only one schema can ever be the default schema. If you try to add two schemas with default to true, the request will fail.
        /// </summary>
        /// <value>If true sets the default schema for identities  Only one schema can ever be the default schema. If you try to add two schemas with default to true, the request will fail.</value>
        [DataMember(Name = "is_default", EmitDefaultValue = true)]
        public bool IsDefault { get; set; }

        /// <summary>
        /// Use a preset instead of a custom identity schema.
        /// </summary>
        /// <value>Use a preset instead of a custom identity schema.</value>
        [DataMember(Name = "preset", EmitDefaultValue = false)]
        public string Preset { get; set; }

        /// <summary>
        /// Gets or Sets ProjectRevisionId
        /// </summary>
        [DataMember(Name = "project_revision_id", EmitDefaultValue = false)]
        public string ProjectRevisionId { get; set; }

        /// <summary>
        /// Last Time Project&#39;s Revision was Updated
        /// </summary>
        /// <value>Last Time Project&#39;s Revision was Updated</value>
        [DataMember(Name = "updated_at", EmitDefaultValue = false)]
        public DateTime UpdatedAt { get; private set; }

        /// <summary>
        /// Returns false as UpdatedAt should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeUpdatedAt()
        {
            return false;
        }
        /// <summary>
        /// Gets or Sets additional properties
        /// </summary>
        [JsonExtensionData]
        public IDictionary<string, object> AdditionalProperties { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ClientNormalizedProjectRevisionIdentitySchema {\n");
            sb.Append("  CreatedAt: ").Append(CreatedAt).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  IdentitySchema: ").Append(IdentitySchema).Append("\n");
            sb.Append("  IdentitySchemaId: ").Append(IdentitySchemaId).Append("\n");
            sb.Append("  ImportId: ").Append(ImportId).Append("\n");
            sb.Append("  ImportUrl: ").Append(ImportUrl).Append("\n");
            sb.Append("  IsDefault: ").Append(IsDefault).Append("\n");
            sb.Append("  Preset: ").Append(Preset).Append("\n");
            sb.Append("  ProjectRevisionId: ").Append(ProjectRevisionId).Append("\n");
            sb.Append("  UpdatedAt: ").Append(UpdatedAt).Append("\n");
            sb.Append("  AdditionalProperties: ").Append(AdditionalProperties).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as ClientNormalizedProjectRevisionIdentitySchema);
        }

        /// <summary>
        /// Returns true if ClientNormalizedProjectRevisionIdentitySchema instances are equal
        /// </summary>
        /// <param name="input">Instance of ClientNormalizedProjectRevisionIdentitySchema to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ClientNormalizedProjectRevisionIdentitySchema input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.CreatedAt == input.CreatedAt ||
                    (this.CreatedAt != null &&
                    this.CreatedAt.Equals(input.CreatedAt))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.IdentitySchema == input.IdentitySchema ||
                    (this.IdentitySchema != null &&
                    this.IdentitySchema.Equals(input.IdentitySchema))
                ) && 
                (
                    this.IdentitySchemaId == input.IdentitySchemaId ||
                    (this.IdentitySchemaId != null &&
                    this.IdentitySchemaId.Equals(input.IdentitySchemaId))
                ) && 
                (
                    this.ImportId == input.ImportId ||
                    (this.ImportId != null &&
                    this.ImportId.Equals(input.ImportId))
                ) && 
                (
                    this.ImportUrl == input.ImportUrl ||
                    (this.ImportUrl != null &&
                    this.ImportUrl.Equals(input.ImportUrl))
                ) && 
                (
                    this.IsDefault == input.IsDefault ||
                    this.IsDefault.Equals(input.IsDefault)
                ) && 
                (
                    this.Preset == input.Preset ||
                    (this.Preset != null &&
                    this.Preset.Equals(input.Preset))
                ) && 
                (
                    this.ProjectRevisionId == input.ProjectRevisionId ||
                    (this.ProjectRevisionId != null &&
                    this.ProjectRevisionId.Equals(input.ProjectRevisionId))
                ) && 
                (
                    this.UpdatedAt == input.UpdatedAt ||
                    (this.UpdatedAt != null &&
                    this.UpdatedAt.Equals(input.UpdatedAt))
                )
                && (this.AdditionalProperties.Count == input.AdditionalProperties.Count && !this.AdditionalProperties.Except(input.AdditionalProperties).Any());
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.CreatedAt != null)
                {
                    hashCode = (hashCode * 59) + this.CreatedAt.GetHashCode();
                }
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                if (this.IdentitySchema != null)
                {
                    hashCode = (hashCode * 59) + this.IdentitySchema.GetHashCode();
                }
                if (this.IdentitySchemaId != null)
                {
                    hashCode = (hashCode * 59) + this.IdentitySchemaId.GetHashCode();
                }
                if (this.ImportId != null)
                {
                    hashCode = (hashCode * 59) + this.ImportId.GetHashCode();
                }
                if (this.ImportUrl != null)
                {
                    hashCode = (hashCode * 59) + this.ImportUrl.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.IsDefault.GetHashCode();
                if (this.Preset != null)
                {
                    hashCode = (hashCode * 59) + this.Preset.GetHashCode();
                }
                if (this.ProjectRevisionId != null)
                {
                    hashCode = (hashCode * 59) + this.ProjectRevisionId.GetHashCode();
                }
                if (this.UpdatedAt != null)
                {
                    hashCode = (hashCode * 59) + this.UpdatedAt.GetHashCode();
                }
                if (this.AdditionalProperties != null)
                {
                    hashCode = (hashCode * 59) + this.AdditionalProperties.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
