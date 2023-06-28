import 'package:test/test.dart';
import 'package:ory_client/ory_client.dart';

// tests for SetCustomDomainBody
void main() {
  final instance = SetCustomDomainBodyBuilder();
  // TODO add properties to the builder and call build()

  group(SetCustomDomainBody, () {
    // The domain where cookies will be set. Has to be a parent domain of the custom hostname to work.
    // String cookieDomain
    test('to test the property `cookieDomain`', () async {
      // TODO
    });

    // CORS Allowed origins for the custom hostname.
    // BuiltList<String> corsAllowedOrigins
    test('to test the property `corsAllowedOrigins`', () async {
      // TODO
    });

    // CORS Enabled for the custom hostname.
    // bool corsEnabled
    test('to test the property `corsEnabled`', () async {
      // TODO
    });

    // The custom UI base URL where the UI will be exposed.
    // String customUiBaseUrl
    test('to test the property `customUiBaseUrl`', () async {
      // TODO
    });

    // The custom hostname where the API will be exposed.
    // String hostname
    test('to test the property `hostname`', () async {
      // TODO
    });

  });
}
