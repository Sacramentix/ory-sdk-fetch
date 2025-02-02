//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/json_object.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'project_service_identity.g.dart';

/// ProjectServiceIdentity
///
/// Properties:
/// * [config] 
@BuiltValue()
abstract class ProjectServiceIdentity implements Built<ProjectServiceIdentity, ProjectServiceIdentityBuilder> {
  @BuiltValueField(wireName: r'config')
  JsonObject get config;

  ProjectServiceIdentity._();

  factory ProjectServiceIdentity([void updates(ProjectServiceIdentityBuilder b)]) = _$ProjectServiceIdentity;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(ProjectServiceIdentityBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<ProjectServiceIdentity> get serializer => _$ProjectServiceIdentitySerializer();
}

class _$ProjectServiceIdentitySerializer implements PrimitiveSerializer<ProjectServiceIdentity> {
  @override
  final Iterable<Type> types = const [ProjectServiceIdentity, _$ProjectServiceIdentity];

  @override
  final String wireName = r'ProjectServiceIdentity';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    ProjectServiceIdentity object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'config';
    yield serializers.serialize(
      object.config,
      specifiedType: const FullType(JsonObject),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    ProjectServiceIdentity object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required ProjectServiceIdentityBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'config':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(JsonObject),
          ) as JsonObject;
          result.config = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  ProjectServiceIdentity deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = ProjectServiceIdentityBuilder();
    final serializedList = (serialized as Iterable<Object?>).toList();
    final unhandled = <Object?>[];
    _deserializeProperties(
      serializers,
      serialized,
      specifiedType: specifiedType,
      serializedList: serializedList,
      unhandled: unhandled,
      result: result,
    );
    return result.build();
  }
}

