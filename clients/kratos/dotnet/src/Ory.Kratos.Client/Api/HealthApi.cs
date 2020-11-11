/* 
 * Ory Kratos
 *
 * Welcome to the ORY Kratos HTTP API documentation!
 *
 * The version of the OpenAPI document: v0.5.4-alpha.1
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Net.Mime;
using Ory.Kratos.Client.Client;
using Ory.Kratos.Client.Model;

namespace Ory.Kratos.Client.Api
{

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IHealthApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Check alive status
        /// </summary>
        /// <remarks>
        /// This endpoint returns a 200 status code when the HTTP server is up running. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
        /// </remarks>
        /// <exception cref="Ory.Kratos.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>KratosHealthStatus</returns>
        KratosHealthStatus IsInstanceAlive ();

        /// <summary>
        /// Check alive status
        /// </summary>
        /// <remarks>
        /// This endpoint returns a 200 status code when the HTTP server is up running. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
        /// </remarks>
        /// <exception cref="Ory.Kratos.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of KratosHealthStatus</returns>
        ApiResponse<KratosHealthStatus> IsInstanceAliveWithHttpInfo ();
        /// <summary>
        /// Check readiness status
        /// </summary>
        /// <remarks>
        /// This endpoint returns a 200 status code when the HTTP server is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
        /// </remarks>
        /// <exception cref="Ory.Kratos.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>KratosHealthStatus</returns>
        KratosHealthStatus IsInstanceReady ();

        /// <summary>
        /// Check readiness status
        /// </summary>
        /// <remarks>
        /// This endpoint returns a 200 status code when the HTTP server is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
        /// </remarks>
        /// <exception cref="Ory.Kratos.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of KratosHealthStatus</returns>
        ApiResponse<KratosHealthStatus> IsInstanceReadyWithHttpInfo ();
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IHealthApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// Check alive status
        /// </summary>
        /// <remarks>
        /// This endpoint returns a 200 status code when the HTTP server is up running. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
        /// </remarks>
        /// <exception cref="Ory.Kratos.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>Task of KratosHealthStatus</returns>
        System.Threading.Tasks.Task<KratosHealthStatus> IsInstanceAliveAsync ();

        /// <summary>
        /// Check alive status
        /// </summary>
        /// <remarks>
        /// This endpoint returns a 200 status code when the HTTP server is up running. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
        /// </remarks>
        /// <exception cref="Ory.Kratos.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>Task of ApiResponse (KratosHealthStatus)</returns>
        System.Threading.Tasks.Task<ApiResponse<KratosHealthStatus>> IsInstanceAliveAsyncWithHttpInfo ();
        /// <summary>
        /// Check readiness status
        /// </summary>
        /// <remarks>
        /// This endpoint returns a 200 status code when the HTTP server is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
        /// </remarks>
        /// <exception cref="Ory.Kratos.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>Task of KratosHealthStatus</returns>
        System.Threading.Tasks.Task<KratosHealthStatus> IsInstanceReadyAsync ();

        /// <summary>
        /// Check readiness status
        /// </summary>
        /// <remarks>
        /// This endpoint returns a 200 status code when the HTTP server is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
        /// </remarks>
        /// <exception cref="Ory.Kratos.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>Task of ApiResponse (KratosHealthStatus)</returns>
        System.Threading.Tasks.Task<ApiResponse<KratosHealthStatus>> IsInstanceReadyAsyncWithHttpInfo ();
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IHealthApi : IHealthApiSync, IHealthApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class HealthApi : IHealthApi
    {
        private Ory.Kratos.Client.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="HealthApi"/> class.
        /// </summary>
        /// <returns></returns>
        public HealthApi() : this((string) null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="HealthApi"/> class.
        /// </summary>
        /// <returns></returns>
        public HealthApi(String basePath)
        {
            this.Configuration = Ory.Kratos.Client.Client.Configuration.MergeConfigurations(
                Ory.Kratos.Client.Client.GlobalConfiguration.Instance,
                new Ory.Kratos.Client.Client.Configuration { BasePath = basePath }
            );
            this.Client = new Ory.Kratos.Client.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new Ory.Kratos.Client.Client.ApiClient(this.Configuration.BasePath);
            this.ExceptionFactory = Ory.Kratos.Client.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="HealthApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public HealthApi(Ory.Kratos.Client.Client.Configuration configuration)
        {
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Configuration = Ory.Kratos.Client.Client.Configuration.MergeConfigurations(
                Ory.Kratos.Client.Client.GlobalConfiguration.Instance,
                configuration
            );
            this.Client = new Ory.Kratos.Client.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new Ory.Kratos.Client.Client.ApiClient(this.Configuration.BasePath);
            ExceptionFactory = Ory.Kratos.Client.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="HealthApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public HealthApi(Ory.Kratos.Client.Client.ISynchronousClient client,Ory.Kratos.Client.Client.IAsynchronousClient asyncClient, Ory.Kratos.Client.Client.IReadableConfiguration configuration)
        {
            if(client == null) throw new ArgumentNullException("client");
            if(asyncClient == null) throw new ArgumentNullException("asyncClient");
            if(configuration == null) throw new ArgumentNullException("configuration");

            this.Client = client;
            this.AsynchronousClient = asyncClient;
            this.Configuration = configuration;
            this.ExceptionFactory = Ory.Kratos.Client.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// The client for accessing this underlying API asynchronously.
        /// </summary>
        public Ory.Kratos.Client.Client.IAsynchronousClient AsynchronousClient { get; set; }

        /// <summary>
        /// The client for accessing this underlying API synchronously.
        /// </summary>
        public Ory.Kratos.Client.Client.ISynchronousClient Client { get; set; }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public String GetBasePath()
        {
            return this.Configuration.BasePath;
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public Ory.Kratos.Client.Client.IReadableConfiguration Configuration {get; set;}

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public Ory.Kratos.Client.Client.ExceptionFactory ExceptionFactory
        {
            get
            {
                if (_exceptionFactory != null && _exceptionFactory.GetInvocationList().Length > 1)
                {
                    throw new InvalidOperationException("Multicast delegate for ExceptionFactory is unsupported.");
                }
                return _exceptionFactory;
            }
            set { _exceptionFactory = value; }
        }

        /// <summary>
        /// Check alive status This endpoint returns a 200 status code when the HTTP server is up running. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
        /// </summary>
        /// <exception cref="Ory.Kratos.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>KratosHealthStatus</returns>
        public KratosHealthStatus IsInstanceAlive ()
        {
             Ory.Kratos.Client.Client.ApiResponse<KratosHealthStatus> localVarResponse = IsInstanceAliveWithHttpInfo();
             return localVarResponse.Data;
        }

        /// <summary>
        /// Check alive status This endpoint returns a 200 status code when the HTTP server is up running. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
        /// </summary>
        /// <exception cref="Ory.Kratos.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of KratosHealthStatus</returns>
        public Ory.Kratos.Client.Client.ApiResponse< KratosHealthStatus > IsInstanceAliveWithHttpInfo ()
        {
            Ory.Kratos.Client.Client.RequestOptions localVarRequestOptions = new Ory.Kratos.Client.Client.RequestOptions();

            String[] _contentTypes = new String[] {
            };

            // to determine the Accept header
            String[] _accepts = new String[] {
                "application/json"
            };

            var localVarContentType = Ory.Kratos.Client.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null) localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);

            var localVarAccept = Ory.Kratos.Client.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null) localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);



            // make the HTTP request
            var localVarResponse = this.Client.Get< KratosHealthStatus >("/health/alive", localVarRequestOptions, this.Configuration);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("IsInstanceAlive", localVarResponse);
                if (_exception != null) throw _exception;
            }

            return localVarResponse;
        }

        /// <summary>
        /// Check alive status This endpoint returns a 200 status code when the HTTP server is up running. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
        /// </summary>
        /// <exception cref="Ory.Kratos.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>Task of KratosHealthStatus</returns>
        public async System.Threading.Tasks.Task<KratosHealthStatus> IsInstanceAliveAsync ()
        {
             Ory.Kratos.Client.Client.ApiResponse<KratosHealthStatus> localVarResponse = await IsInstanceAliveAsyncWithHttpInfo();
             return localVarResponse.Data;

        }

        /// <summary>
        /// Check alive status This endpoint returns a 200 status code when the HTTP server is up running. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
        /// </summary>
        /// <exception cref="Ory.Kratos.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>Task of ApiResponse (KratosHealthStatus)</returns>
        public async System.Threading.Tasks.Task<Ory.Kratos.Client.Client.ApiResponse<KratosHealthStatus>> IsInstanceAliveAsyncWithHttpInfo ()
        {

            Ory.Kratos.Client.Client.RequestOptions localVarRequestOptions = new Ory.Kratos.Client.Client.RequestOptions();

            String[] _contentTypes = new String[] {
            };

            // to determine the Accept header
            String[] _accepts = new String[] {
                "application/json"
            };
            
            foreach (var _contentType in _contentTypes)
                localVarRequestOptions.HeaderParameters.Add("Content-Type", _contentType);
            
            foreach (var _accept in _accepts)
                localVarRequestOptions.HeaderParameters.Add("Accept", _accept);
            


            // make the HTTP request

            var localVarResponse = await this.AsynchronousClient.GetAsync<KratosHealthStatus>("/health/alive", localVarRequestOptions, this.Configuration);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("IsInstanceAlive", localVarResponse);
                if (_exception != null) throw _exception;
            }

            return localVarResponse;
        }

        /// <summary>
        /// Check readiness status This endpoint returns a 200 status code when the HTTP server is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
        /// </summary>
        /// <exception cref="Ory.Kratos.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>KratosHealthStatus</returns>
        public KratosHealthStatus IsInstanceReady ()
        {
             Ory.Kratos.Client.Client.ApiResponse<KratosHealthStatus> localVarResponse = IsInstanceReadyWithHttpInfo();
             return localVarResponse.Data;
        }

        /// <summary>
        /// Check readiness status This endpoint returns a 200 status code when the HTTP server is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
        /// </summary>
        /// <exception cref="Ory.Kratos.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of KratosHealthStatus</returns>
        public Ory.Kratos.Client.Client.ApiResponse< KratosHealthStatus > IsInstanceReadyWithHttpInfo ()
        {
            Ory.Kratos.Client.Client.RequestOptions localVarRequestOptions = new Ory.Kratos.Client.Client.RequestOptions();

            String[] _contentTypes = new String[] {
            };

            // to determine the Accept header
            String[] _accepts = new String[] {
                "application/json"
            };

            var localVarContentType = Ory.Kratos.Client.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null) localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);

            var localVarAccept = Ory.Kratos.Client.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null) localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);



            // make the HTTP request
            var localVarResponse = this.Client.Get< KratosHealthStatus >("/health/ready", localVarRequestOptions, this.Configuration);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("IsInstanceReady", localVarResponse);
                if (_exception != null) throw _exception;
            }

            return localVarResponse;
        }

        /// <summary>
        /// Check readiness status This endpoint returns a 200 status code when the HTTP server is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
        /// </summary>
        /// <exception cref="Ory.Kratos.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>Task of KratosHealthStatus</returns>
        public async System.Threading.Tasks.Task<KratosHealthStatus> IsInstanceReadyAsync ()
        {
             Ory.Kratos.Client.Client.ApiResponse<KratosHealthStatus> localVarResponse = await IsInstanceReadyAsyncWithHttpInfo();
             return localVarResponse.Data;

        }

        /// <summary>
        /// Check readiness status This endpoint returns a 200 status code when the HTTP server is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the &#x60;X-Forwarded-Proto&#x60; header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
        /// </summary>
        /// <exception cref="Ory.Kratos.Client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>Task of ApiResponse (KratosHealthStatus)</returns>
        public async System.Threading.Tasks.Task<Ory.Kratos.Client.Client.ApiResponse<KratosHealthStatus>> IsInstanceReadyAsyncWithHttpInfo ()
        {

            Ory.Kratos.Client.Client.RequestOptions localVarRequestOptions = new Ory.Kratos.Client.Client.RequestOptions();

            String[] _contentTypes = new String[] {
            };

            // to determine the Accept header
            String[] _accepts = new String[] {
                "application/json"
            };
            
            foreach (var _contentType in _contentTypes)
                localVarRequestOptions.HeaderParameters.Add("Content-Type", _contentType);
            
            foreach (var _accept in _accepts)
                localVarRequestOptions.HeaderParameters.Add("Accept", _accept);
            


            // make the HTTP request

            var localVarResponse = await this.AsynchronousClient.GetAsync<KratosHealthStatus>("/health/ready", localVarRequestOptions, this.Configuration);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("IsInstanceReady", localVarResponse);
                if (_exception != null) throw _exception;
            }

            return localVarResponse;
        }

    }
}
