//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'verification_flow_state.g.dart';

class VerificationFlowState extends EnumClass {

  /// The state represents the state of the verification flow.  choose_method: ask the user to choose a method (e.g. recover account via email) sent_email: the email has been sent to the user passed_challenge: the request was successful and the recovery challenge was passed.
  @BuiltValueEnumConst(wireName: r'choose_method')
  static const VerificationFlowState chooseMethod = _$chooseMethod;
  /// The state represents the state of the verification flow.  choose_method: ask the user to choose a method (e.g. recover account via email) sent_email: the email has been sent to the user passed_challenge: the request was successful and the recovery challenge was passed.
  @BuiltValueEnumConst(wireName: r'sent_email')
  static const VerificationFlowState sentEmail = _$sentEmail;
  /// The state represents the state of the verification flow.  choose_method: ask the user to choose a method (e.g. recover account via email) sent_email: the email has been sent to the user passed_challenge: the request was successful and the recovery challenge was passed.
  @BuiltValueEnumConst(wireName: r'passed_challenge')
  static const VerificationFlowState passedChallenge = _$passedChallenge;

  static Serializer<VerificationFlowState> get serializer => _$verificationFlowStateSerializer;

  const VerificationFlowState._(String name): super(name);

  static BuiltSet<VerificationFlowState> get values => _$values;
  static VerificationFlowState valueOf(String name) => _$valueOf(name);
}

/// Optionally, enum_class can generate a mixin to go with your enum for use
/// with Angular. It exposes your enum constants as getters. So, if you mix it
/// in to your Dart component class, the values become available to the
/// corresponding Angular template.
///
/// Trigger mixin generation by writing a line like this one next to your enum.
abstract class VerificationFlowStateMixin = Object with _$VerificationFlowStateMixin;

