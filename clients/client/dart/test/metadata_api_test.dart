import 'package:test/test.dart';
import 'package:ory_client/ory_client.dart';


/// tests for MetadataApi
void main() {
  final instance = OryClient().getMetadataApi();

  group(MetadataApi, () {
    // Return Running Software Version.
    //
    // This endpoint returns the version of Ory Kratos.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the version will never refer to the cluster state, only to a single instance.
    //
    //Future<GetVersion200Response> getVersion() async
    test('test getVersion', () async {
      // TODO
    });

    // Check HTTP Server Status
    //
    // This endpoint returns a HTTP 200 status code when Ory Kratos is accepting incoming HTTP requests. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
    //
    //Future<HealthStatus> isAlive() async
    test('test isAlive', () async {
      // TODO
    });

    // Check HTTP Server and Database Status
    //
    // This endpoint returns a HTTP 200 status code when Ory Kratos is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of Ory Kratos, the health status will never refer to the cluster state, only to a single instance.
    //
    //Future<IsReady200Response> isReady() async
    test('test isReady', () async {
      // TODO
    });

  });
}
