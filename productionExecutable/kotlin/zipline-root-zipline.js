(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'zipline-root-zipline'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'zipline-root-zipline'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'zipline-root-zipline'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'zipline-root-zipline'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'zipline-root-zipline'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'zipline-root-zipline'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'zipline-root-zipline'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'zipline-root-zipline'.");
    }
    root['zipline-root-zipline'] = factory(typeof this['zipline-root-zipline'] === 'undefined' ? {} : this['zipline-root-zipline'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var toList = kotlin_kotlin.$_$.d6;
  var protoOf = kotlin_kotlin.$_$.m8;
  var classMeta = kotlin_kotlin.$_$.j7;
  var setMetadataFor = kotlin_kotlin.$_$.n8;
  var objectMeta = kotlin_kotlin.$_$.l8;
  var Exception = kotlin_kotlin.$_$.ka;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.f1;
  var captureStack = kotlin_kotlin.$_$.e7;
  var defineProp = kotlin_kotlin.$_$.l7;
  var RuntimeException = kotlin_kotlin.$_$.ra;
  var VOID = kotlin_kotlin.$_$.f;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.t1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.w;
  var toString = kotlin_kotlin.$_$.r8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var Unit_instance = kotlin_kotlin.$_$.f4;
  var interfaceMeta = kotlin_kotlin.$_$.s7;
  var THROW_CCE = kotlin_kotlin.$_$.sa;
  var isInterface = kotlin_kotlin.$_$.b8;
  var Unit = kotlin_kotlin.$_$.cb;
  var Set = kotlin_kotlin.$_$.s4;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.w3;
  var arrayOf = kotlin_kotlin.$_$.fb;
  var createKType = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var getKClass = kotlin_kotlin.$_$.e;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var listOf = kotlin_kotlin.$_$.s5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var Result = kotlin_kotlin.$_$.qa;
  var ensureNotNull = kotlin_kotlin.$_$.hb;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var Long = kotlin_kotlin.$_$.na;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var StateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var toSet = kotlin_kotlin.$_$.g6;
  var CoroutineImpl = kotlin_kotlin.$_$.z6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var Companion_instance = kotlin_kotlin.$_$.a4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.c2;
  var createFailure = kotlin_kotlin.$_$.gb;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.g2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.e2;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.d2;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.qb;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.f2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.y1;
  var joinTo = kotlin_kotlin.$_$.o5;
  var contains = kotlin_kotlin.$_$.e9;
  var throwOnFailure = kotlin_kotlin.$_$.pb;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var ensureActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var trimMargin = kotlin_kotlin.$_$.ea;
  var toList_0 = kotlin_kotlin.$_$.e6;
  var intercepted = kotlin_kotlin.$_$.n6;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var returnIfSuspended = kotlin_kotlin.$_$.i;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v4;
  var mapCapacity = kotlin_kotlin.$_$.t5;
  var coerceAtLeast = kotlin_kotlin.$_$.u8;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var sortedWith = kotlin_kotlin.$_$.a6;
  var objectCreate = kotlin_kotlin.$_$.k8;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var compareValues = kotlin_kotlin.$_$.j6;
  var ContextualSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var equals = kotlin_kotlin.$_$.m7;
  var until = kotlin_kotlin.$_$.z8;
  var List = kotlin_kotlin.$_$.m4;
  var Companion_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var emptyList = kotlin_kotlin.$_$.h5;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.v3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.t3;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var JsonDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var channelFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var hashCode = kotlin_kotlin.$_$.r7;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.ob;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.d1;
  var LONG_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var JsonNull_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.mb;
  var get_long = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var listOf_0 = kotlin_kotlin.$_$.r5;
  var to = kotlin_kotlin.$_$.sb;
  var regionMatches = kotlin_kotlin.$_$.k9;
  var startsWith = kotlin_kotlin.$_$.n9;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var joinToString = kotlin_kotlin.$_$.n5;
  var stackTraceToString = kotlin_kotlin.$_$.nb;
  var encodeToDynamic = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var decodeFromDynamic = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Call, 'Call', classMeta);
  setMetadataFor(CallResult, 'CallResult', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ZiplineApiMismatchException, 'ZiplineApiMismatchException', classMeta, Exception);
  setMetadataFor(ZiplineException, 'ZiplineException', classMeta, RuntimeException, VOID, ZiplineException);
  setMetadataFor(ZiplineScope, 'ZiplineScope', classMeta, VOID, VOID, ZiplineScope);
  setMetadataFor(ZiplineScoped, 'ZiplineScoped', interfaceMeta);
  function close() {
  }
  setMetadataFor(ZiplineService, 'ZiplineService', interfaceMeta);
  setMetadataFor(ReturningZiplineFunction, 'ReturningZiplineFunction', classMeta);
  setMetadataFor(ZiplineFunction0, 'ZiplineFunction0', classMeta, ReturningZiplineFunction);
  setMetadataFor(ZiplineFunction1, 'ZiplineFunction1', classMeta, ReturningZiplineFunction);
  setMetadataFor(ZiplineFunction2, 'ZiplineFunction2', classMeta, ReturningZiplineFunction);
  setMetadataFor(ZiplineFunction3, 'ZiplineFunction3', classMeta, ReturningZiplineFunction);
  setMetadataFor(GuestService, 'GuestService', interfaceMeta, VOID, [ZiplineService]);
  setMetadataFor(GeneratedOutboundService, 'GeneratedOutboundService', classMeta, VOID, [GuestService]);
  setMetadataFor(ZiplineServiceAdapter, 'ZiplineServiceAdapter', classMeta, VOID, [KSerializer]);
  setMetadataFor(Adapter, 'Adapter', classMeta, ZiplineServiceAdapter, [ZiplineServiceAdapter, KSerializer]);
  setMetadataFor(ZiplineFunction0_0, 'ZiplineFunction0', classMeta, ReturningZiplineFunction);
  setMetadataFor(ZiplineFunction1_0, 'ZiplineFunction1', classMeta, ReturningZiplineFunction);
  setMetadataFor(ZiplineFunction2_0, 'ZiplineFunction2', classMeta, ReturningZiplineFunction);
  setMetadataFor(ZiplineFunction3_0, 'ZiplineFunction3', classMeta, ReturningZiplineFunction);
  setMetadataFor(ZiplineFunction4, 'ZiplineFunction4', classMeta, ReturningZiplineFunction);
  setMetadataFor(ZiplineFunction5, 'ZiplineFunction5', classMeta, ReturningZiplineFunction);
  setMetadataFor(ZiplineFunction6, 'ZiplineFunction6', classMeta, ReturningZiplineFunction);
  setMetadataFor(HostService, 'HostService', interfaceMeta, VOID, [ZiplineService]);
  setMetadataFor(GeneratedOutboundService_0, 'GeneratedOutboundService', classMeta, VOID, [HostService]);
  setMetadataFor(Adapter_0, 'Adapter', classMeta, ZiplineServiceAdapter, [ZiplineServiceAdapter, KSerializer]);
  setMetadataFor(CallCodec, 'CallCodec', classMeta);
  setMetadataFor(ZiplineFunction0_1, 'ZiplineFunction0', classMeta, ReturningZiplineFunction);
  setMetadataFor(ZiplineFunction1_1, 'ZiplineFunction1', classMeta, ReturningZiplineFunction);
  setMetadataFor(CancelCallback, 'CancelCallback', interfaceMeta, VOID, [ZiplineService]);
  setMetadataFor(GeneratedOutboundService_1, 'GeneratedOutboundService', classMeta, VOID, [CancelCallback]);
  setMetadataFor(Adapter_1, 'Adapter', classMeta, ZiplineServiceAdapter, [ZiplineServiceAdapter, KSerializer]);
  setMetadataFor(EventListener, 'EventListener', classMeta, VOID, VOID, EventListener);
  setMetadataFor(Endpoint$inboundChannel$1, VOID, classMeta);
  setMetadataFor(Endpoint, 'Endpoint', classMeta, VOID, [ZiplineService]);
  setMetadataFor(InboundService$callSuspending$slambda, 'InboundService$callSuspending$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(HasPassByReferenceName, 'HasPassByReferenceName', interfaceMeta);
  setMetadataFor(InboundService$callSuspending$cancelCallback$1, VOID, classMeta, VOID, [CancelCallback, HasPassByReferenceName]);
  setMetadataFor(InboundService, 'InboundService', classMeta);
  setMetadataFor(ServiceState, 'ServiceState', classMeta, VOID, VOID, ServiceState);
  setMetadataFor(SuspendCallback, 'SuspendCallback', interfaceMeta, VOID, [ZiplineService]);
  setMetadataFor(RealSuspendCallback, 'RealSuspendCallback', classMeta, VOID, [SuspendCallback, HasPassByReferenceName, ZiplineScoped]);
  setMetadataFor(OutboundCallHandler$callSuspending$lambda$slambda, 'OutboundCallHandler$callSuspending$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($callSuspendingCOROUTINE$0, '$callSuspendingCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(OutboundCallHandler, 'OutboundCallHandler', classMeta, VOID, VOID, VOID, VOID, VOID, [3]);
  setMetadataFor(RealZiplineServiceType, 'RealZiplineServiceType', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(SerializableZiplineServiceType, 'SerializableZiplineServiceType', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(ZiplineFunction0_2, 'ZiplineFunction0', classMeta, ReturningZiplineFunction);
  setMetadataFor(ZiplineFunction1_2, 'ZiplineFunction1', classMeta, ReturningZiplineFunction);
  setMetadataFor(ZiplineFunction2_1, 'ZiplineFunction2', classMeta, ReturningZiplineFunction);
  setMetadataFor(GeneratedOutboundService_2, 'GeneratedOutboundService', classMeta, VOID, [SuspendCallback]);
  setMetadataFor(Adapter_2, 'Adapter', classMeta, ZiplineServiceAdapter, [ZiplineServiceAdapter, KSerializer]);
  setMetadataFor(InternalCall, 'InternalCall', classMeta);
  setMetadataFor(ArgsListSerializer, 'ArgsListSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(ResultOrCallbackSerializer, 'ResultOrCallbackSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(EncodedResultOrCallback, 'EncodedResultOrCallback', classMeta);
  setMetadataFor(ResultOrCallback, 'ResultOrCallback', classMeta, VOID, VOID, ResultOrCallback);
  setMetadataFor(RealCallSerializer$unknownService$1, VOID, classMeta, VOID, [ZiplineService]);
  setMetadataFor(SuspendingZiplineFunction, 'SuspendingZiplineFunction', classMeta, VOID, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(RealCallSerializer$unknownFunction$1, VOID, classMeta, SuspendingZiplineFunction, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(RealCallSerializer$unknownFunction$2, VOID, classMeta, ReturningZiplineFunction);
  setMetadataFor(RealCallSerializer, 'RealCallSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(FlowZiplineCollector$emit$ref, 'FlowZiplineCollector$emit$ref', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$1, '$collectCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(FlowZiplineCollector, 'FlowZiplineCollector', interfaceMeta, VOID, [ZiplineService], VOID, VOID, VOID, [1]);
  setMetadataFor(FlowSerializer$toFlow$1$1, VOID, classMeta, VOID, [FlowZiplineCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(FlowZiplineService, 'FlowZiplineService', interfaceMeta, VOID, [ZiplineService], VOID, VOID, VOID, [1]);
  setMetadataFor(FlowSerializer$toZiplineService$1, VOID, classMeta, VOID, [FlowZiplineService], VOID, VOID, VOID, [1]);
  setMetadataFor(FlowSerializer$toFlow$slambda, 'FlowSerializer$toFlow$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(FlowSerializer, 'FlowSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor($collectCOROUTINE$2, '$collectCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(ZiplineFunction0_3, 'ZiplineFunction0', classMeta, SuspendingZiplineFunction, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(ZiplineFunction1_3, 'ZiplineFunction1', classMeta, ReturningZiplineFunction);
  setMetadataFor(GeneratedOutboundService_3, 'GeneratedOutboundService', classMeta, VOID, [FlowZiplineService], VOID, VOID, VOID, [1]);
  setMetadataFor(Adapter_3, 'Adapter', classMeta, ZiplineServiceAdapter, [ZiplineServiceAdapter, KSerializer]);
  setMetadataFor(FlowZiplineCollector$emit$ref_1, 'FlowZiplineCollector$emit$ref', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$3, '$collectCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(StateFlowSerializer$toStateFlow$1$collect$2$1, VOID, classMeta, VOID, [FlowZiplineCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(StateFlowSerializer$toStateFlow$o$collect$slambda, 'StateFlowSerializer$toStateFlow$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$4, '$collectCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(StateFlowZiplineService, 'StateFlowZiplineService', interfaceMeta, VOID, [FlowZiplineService], VOID, VOID, VOID, [1]);
  setMetadataFor(StateFlowSerializer$toZiplineService$1, VOID, classMeta, VOID, [StateFlowZiplineService], VOID, VOID, VOID, [1]);
  setMetadataFor(StateFlowSerializer$toStateFlow$1, VOID, classMeta, VOID, [StateFlow], VOID, VOID, VOID, [1]);
  setMetadataFor(StateFlowSerializer, 'StateFlowSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor($collectCOROUTINE$5, '$collectCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(ZiplineFunction0_4, 'ZiplineFunction0', classMeta, SuspendingZiplineFunction, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(ZiplineFunction1_4, 'ZiplineFunction1', classMeta, ReturningZiplineFunction);
  setMetadataFor(ZiplineFunction2_2, 'ZiplineFunction2', classMeta, ReturningZiplineFunction);
  setMetadataFor(GeneratedOutboundService_4, 'GeneratedOutboundService', classMeta, VOID, [StateFlowZiplineService], VOID, VOID, VOID, [1]);
  setMetadataFor(Adapter_4, 'Adapter', classMeta, ZiplineServiceAdapter, [ZiplineServiceAdapter, KSerializer]);
  setMetadataFor($emitCOROUTINE$6, '$emitCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor(ZiplineFunction0_5, 'ZiplineFunction0', classMeta, SuspendingZiplineFunction, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(ZiplineFunction1_5, 'ZiplineFunction1', classMeta, ReturningZiplineFunction);
  setMetadataFor(GeneratedOutboundService_5, 'GeneratedOutboundService', classMeta, VOID, [FlowZiplineCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(Adapter_5, 'Adapter', classMeta, ZiplineServiceAdapter, [ZiplineServiceAdapter, KSerializer]);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PassByReference, 'PassByReference', interfaceMeta);
  setMetadataFor(SendByReference, 'SendByReference', classMeta, VOID, [PassByReference]);
  setMetadataFor(ReceiveByReference, 'ReceiveByReference', classMeta, VOID, [PassByReference]);
  setMetadataFor(PassByReferenceSerializer, 'PassByReferenceSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(ThrowableSerializer, 'ThrowableSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ThrowableSurrogate, 'ThrowableSurrogate', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor($serializer_1, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(SerializableZiplineFunction, 'SerializableZiplineFunction', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  setMetadataFor(Job, 'Job', classMeta);
  setMetadataFor(GlobalBridge, 'GlobalBridge', objectMeta, VOID, [GuestService]);
  setMetadataFor(ZiplineServiceReference, 'ZiplineServiceReference', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Zipline$eventListener$1, VOID, classMeta, EventListener);
  setMetadataFor(Zipline$endpoint$1, VOID, classMeta);
  setMetadataFor(Zipline, 'Zipline', classMeta);
  //endregion
  function Call(serviceName, service, function_0, args, encodedCall, serviceNames) {
    this.d1s_1 = serviceName;
    this.e1s_1 = service;
    this.f1s_1 = function_0;
    this.g1s_1 = args;
    this.h1s_1 = encodedCall;
    this.i1s_1 = toList(serviceNames);
  }
  protoOf(Call).toString = function () {
    return 'Call(receiver=' + this.e1s_1 + ', function=' + this.f1s_1.j1s() + ', args=' + this.g1s_1 + ')';
  };
  function CallResult(result, encodedResult, serviceNames) {
    this.k1s_1 = result;
    this.l1s_1 = encodedResult;
    this.m1s_1 = toList(serviceNames);
  }
  function Companion() {
    this.n1s_1 = '<unknown function>';
    this.o1s_1 = '<unknown service>';
  }
  var Companion_instance_1;
  function Companion_getInstance() {
    return Companion_instance_1;
  }
  function ZiplineApiMismatchException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ZiplineApiMismatchException);
    this.p1s_1 = message;
  }
  protoOf(ZiplineApiMismatchException).h5 = function () {
    return this.p1s_1;
  };
  function ZiplineException(message, cause) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, ZiplineException);
  }
  function ZiplineScope() {
    this.q1s_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.r1s_1 = LinkedHashSet_init_$Create$();
  }
  protoOf(ZiplineScope).s1s = function (callHandler) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.q1s_1) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.r1s_1.p(callHandler);
  };
  protoOf(ZiplineScope).t1s = function (callHandler) {
    // Inline function 'kotlin.collections.minusAssign' call
    this.r1s_1.q(callHandler);
  };
  function ZiplineScoped() {
  }
  function ZiplineService() {
  }
  function ZiplineFunction0(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'UdeailsI', 'fun runJob(kotlin.Int): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction0).a1t = function (service, args) {
    var tmp = args.d1(0);
    service.b1t((!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE());
    return Unit_instance;
  };
  protoOf(ZiplineFunction0).c1t = function (service, args) {
    return this.a1t(isInterface(service, GuestService) ? service : THROW_CCE(), args);
  };
  function ZiplineFunction1(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'lT3a9OTc', 'fun serviceType(kotlin.String): app.cash.zipline.internal.bridge.SerializableZiplineServiceType?', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction1).a1t = function (service, args) {
    var tmp = args.d1(0);
    return service.o1t((!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE());
  };
  protoOf(ZiplineFunction1).c1t = function (service, args) {
    return this.a1t(isInterface(service, GuestService) ? service : THROW_CCE(), args);
  };
  function ZiplineFunction2(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'moYx+T3e', 'fun close(): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction2).a1t = function (service, args) {
    service.v1s();
    return Unit_instance;
  };
  protoOf(ZiplineFunction2).c1t = function (service, args) {
    return this.a1t(isInterface(service, GuestService) ? service : THROW_CCE(), args);
  };
  function ZiplineFunction3(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'YUpf59K9', 'val serviceNames: kotlin.collections.Set<kotlin.String>', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction3).a1t = function (service, args) {
    return service.x1t();
  };
  protoOf(ZiplineFunction3).c1t = function (service, args) {
    return this.a1t(isInterface(service, GuestService) ? service : THROW_CCE(), args);
  };
  function GeneratedOutboundService(callHandler) {
    this.y1t_1 = callHandler;
  }
  protoOf(GeneratedOutboundService).b1t = function (timeoutId) {
    var tmp0_callHandler = this.y1t_1;
    var tmp = tmp0_callHandler.f1u(this, 0, [timeoutId]);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  protoOf(GeneratedOutboundService).o1t = function (name) {
    var tmp0_callHandler = this.y1t_1;
    var tmp = tmp0_callHandler.f1u(this, 1, [name]);
    return (tmp == null ? true : tmp instanceof SerializableZiplineServiceType) ? tmp : THROW_CCE();
  };
  protoOf(GeneratedOutboundService).v1s = function () {
    var tmp0_callHandler = this.y1t_1;
    var tmp = tmp0_callHandler.f1u(this, 2, []);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  protoOf(GeneratedOutboundService).x1t = function () {
    var tmp0_callHandler = this.y1t_1;
    var tmp = tmp0_callHandler.f1u(this, 3, []);
    return (!(tmp == null) ? isInterface(tmp, Set) : false) ? tmp : THROW_CCE();
  };
  function Adapter(serializers, serialName) {
    ZiplineServiceAdapter.call(this);
    this.i1u_1 = serialName;
    this.j1u_1 = 'GuestService';
    this.k1u_1 = serializers;
  }
  protoOf(Adapter).oh = function () {
    return this.i1u_1;
  };
  protoOf(Adapter).q5 = function () {
    return this.j1u_1;
  };
  protoOf(Adapter).l1u = function () {
    return this.k1u_1;
  };
  protoOf(Adapter).m1u = function (serializersModule) {
    var tmp0_serializers = this.k1u_1;
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(serializersModule, createKType(PrimitiveClasses_getInstance().n6(), arrayOf([]), false));
    var tmp1_serializer = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(serializersModule, createKType(getKClass(Unit), arrayOf([]), false));
    var tmp2_serializer = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(serializersModule, createKType(PrimitiveClasses_getInstance().r6(), arrayOf([]), false));
    var tmp3_serializer = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_3 = serializer(serializersModule, createKType(getKClass(SerializableZiplineServiceType), arrayOf([]), true));
    var tmp4_serializer = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_4 = serializer(serializersModule, createKType(getKClass(Set), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().r6(), arrayOf([]), false))]), false));
    var tmp5_serializer = isInterface(this_4, KSerializer) ? this_4 : THROW_CCE();
    return listOf([new ZiplineFunction0(listOf([tmp1_serializer]), tmp2_serializer), new ZiplineFunction1(listOf([tmp3_serializer]), tmp4_serializer), new ZiplineFunction2(listOf([]), tmp2_serializer), new ZiplineFunction3(listOf([]), tmp5_serializer)]);
  };
  protoOf(Adapter).n1u = function (callHandler) {
    return new GeneratedOutboundService(callHandler);
  };
  function GuestService() {
  }
  function ZiplineFunction0_0(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'aj52KUj/', 'fun setTimeout(kotlin.Int, kotlin.Int): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction0_0).v1u = function (service, args) {
    var tmp = args.d1(0);
    var tmp_0 = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_1 = args.d1(1);
    service.w1u(tmp_0, (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE());
    return Unit_instance;
  };
  protoOf(ZiplineFunction0_0).c1t = function (service, args) {
    return this.v1u(isInterface(service, HostService) ? service : THROW_CCE(), args);
  };
  function ZiplineFunction1_0(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'oO0TiwLK', 'fun clearTimeout(kotlin.Int): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction1_0).v1u = function (service, args) {
    var tmp = args.d1(0);
    service.b1v((!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE());
    return Unit_instance;
  };
  protoOf(ZiplineFunction1_0).c1t = function (service, args) {
    return this.v1u(isInterface(service, HostService) ? service : THROW_CCE(), args);
  };
  function ZiplineFunction2_0(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'Lu6/DTqp', 'fun log(kotlin.String, kotlin.String, kotlin.Throwable?): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction2_0).v1u = function (service, args) {
    var tmp = args.d1(0);
    var tmp_0 = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    var tmp_1 = args.d1(1);
    var tmp_2 = (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE();
    var tmp_3 = args.d1(2);
    service.g1v(tmp_0, tmp_2, (tmp_3 == null ? true : tmp_3 instanceof Error) ? tmp_3 : THROW_CCE());
    return Unit_instance;
  };
  protoOf(ZiplineFunction2_0).c1t = function (service, args) {
    return this.v1u(isInterface(service, HostService) ? service : THROW_CCE(), args);
  };
  function ZiplineFunction3_0(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'Mx/W/Edd', 'fun serviceLeaked(kotlin.String): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction3_0).v1u = function (service, args) {
    var tmp = args.d1(0);
    service.l1v((!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE());
    return Unit_instance;
  };
  protoOf(ZiplineFunction3_0).c1t = function (service, args) {
    return this.v1u(isInterface(service, HostService) ? service : THROW_CCE(), args);
  };
  function ZiplineFunction4(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'lT3a9OTc', 'fun serviceType(kotlin.String): app.cash.zipline.internal.bridge.SerializableZiplineServiceType?', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction4).v1u = function (service, args) {
    var tmp = args.d1(0);
    return service.o1t((!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE());
  };
  protoOf(ZiplineFunction4).c1t = function (service, args) {
    return this.v1u(isInterface(service, HostService) ? service : THROW_CCE(), args);
  };
  function ZiplineFunction5(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'moYx+T3e', 'fun close(): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction5).v1u = function (service, args) {
    service.v1s();
    return Unit_instance;
  };
  protoOf(ZiplineFunction5).c1t = function (service, args) {
    return this.v1u(isInterface(service, HostService) ? service : THROW_CCE(), args);
  };
  function ZiplineFunction6(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'YUpf59K9', 'val serviceNames: kotlin.collections.Set<kotlin.String>', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction6).v1u = function (service, args) {
    return service.x1t();
  };
  protoOf(ZiplineFunction6).c1t = function (service, args) {
    return this.v1u(isInterface(service, HostService) ? service : THROW_CCE(), args);
  };
  function GeneratedOutboundService_0(callHandler) {
    this.y1v_1 = callHandler;
  }
  protoOf(GeneratedOutboundService_0).w1u = function (timeoutId, delayMillis) {
    var tmp0_callHandler = this.y1v_1;
    var tmp = tmp0_callHandler.f1u(this, 0, [timeoutId, delayMillis]);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  protoOf(GeneratedOutboundService_0).b1v = function (timeoutId) {
    var tmp0_callHandler = this.y1v_1;
    var tmp = tmp0_callHandler.f1u(this, 1, [timeoutId]);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  protoOf(GeneratedOutboundService_0).g1v = function (level, message, throwable) {
    var tmp0_callHandler = this.y1v_1;
    var tmp = tmp0_callHandler.f1u(this, 2, [level, message, throwable]);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  protoOf(GeneratedOutboundService_0).l1v = function (name) {
    var tmp0_callHandler = this.y1v_1;
    var tmp = tmp0_callHandler.f1u(this, 3, [name]);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  protoOf(GeneratedOutboundService_0).o1t = function (name) {
    var tmp0_callHandler = this.y1v_1;
    var tmp = tmp0_callHandler.f1u(this, 4, [name]);
    return (tmp == null ? true : tmp instanceof SerializableZiplineServiceType) ? tmp : THROW_CCE();
  };
  protoOf(GeneratedOutboundService_0).v1s = function () {
    var tmp0_callHandler = this.y1v_1;
    var tmp = tmp0_callHandler.f1u(this, 5, []);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  protoOf(GeneratedOutboundService_0).x1t = function () {
    var tmp0_callHandler = this.y1v_1;
    var tmp = tmp0_callHandler.f1u(this, 6, []);
    return (!(tmp == null) ? isInterface(tmp, Set) : false) ? tmp : THROW_CCE();
  };
  function Adapter_0(serializers, serialName) {
    ZiplineServiceAdapter.call(this);
    this.b1w_1 = serialName;
    this.c1w_1 = 'HostService';
    this.d1w_1 = serializers;
  }
  protoOf(Adapter_0).oh = function () {
    return this.b1w_1;
  };
  protoOf(Adapter_0).q5 = function () {
    return this.c1w_1;
  };
  protoOf(Adapter_0).l1u = function () {
    return this.d1w_1;
  };
  protoOf(Adapter_0).m1u = function (serializersModule) {
    var tmp0_serializers = this.d1w_1;
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(serializersModule, createKType(PrimitiveClasses_getInstance().n6(), arrayOf([]), false));
    var tmp1_serializer = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(serializersModule, createKType(getKClass(Unit), arrayOf([]), false));
    var tmp2_serializer = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(serializersModule, createKType(PrimitiveClasses_getInstance().r6(), arrayOf([]), false));
    var tmp3_serializer = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_3 = serializer(serializersModule, createKType(PrimitiveClasses_getInstance().s6(), arrayOf([]), true));
    var tmp4_serializer = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_4 = serializer(serializersModule, createKType(getKClass(SerializableZiplineServiceType), arrayOf([]), true));
    var tmp5_serializer = isInterface(this_4, KSerializer) ? this_4 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_5 = serializer(serializersModule, createKType(getKClass(Set), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().r6(), arrayOf([]), false))]), false));
    var tmp6_serializer = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
    return listOf([new ZiplineFunction0_0(listOf([tmp1_serializer, tmp1_serializer]), tmp2_serializer), new ZiplineFunction1_0(listOf([tmp1_serializer]), tmp2_serializer), new ZiplineFunction2_0(listOf([tmp3_serializer, tmp3_serializer, tmp4_serializer]), tmp2_serializer), new ZiplineFunction3_0(listOf([tmp3_serializer]), tmp2_serializer), new ZiplineFunction4(listOf([tmp3_serializer]), tmp5_serializer), new ZiplineFunction5(listOf([]), tmp2_serializer), new ZiplineFunction6(listOf([]), tmp6_serializer)]);
  };
  protoOf(Adapter_0).n1u = function (callHandler) {
    return new GeneratedOutboundService_0(callHandler);
  };
  function HostService() {
  }
  function CallCodec(endpoint) {
    this.e1w_1 = endpoint;
    this.f1w_1 = new RealCallSerializer(this.e1w_1);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g1w_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.h1w_1 = ArrayList_init_$Create$();
    this.i1w_1 = null;
    this.j1w_1 = null;
  }
  protoOf(CallCodec).k1w = function (internalCall, service) {
    this.h1w_1.m1();
    var encodedCall = encodeToStringFast(this.e1w_1.u1w_1, this.f1w_1, internalCall);
    var result = new Call(internalCall.y1w_1, service, internalCall.a1x_1, internalCall.c1x_1, encodedCall, this.h1w_1);
    var callback = this.j1w_1;
    if (!(callback == null)) {
      callback(result);
      this.j1w_1 = null;
    }
    return result;
  };
  protoOf(CallCodec).d1x = function (callJson) {
    this.g1w_1.m1();
    var internalCall = decodeFromStringFast(this.e1w_1.u1w_1, this.f1w_1, callJson);
    var tmp0_elvis_lhs = internalCall.z1w_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'no handler for ' + internalCall.y1w_1;
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var inboundService = tmp;
    this.i1w_1 = new Call(internalCall.y1w_1, inboundService.f1x_1, internalCall.a1x_1, internalCall.c1x_1, callJson, this.g1w_1);
    return internalCall;
  };
  protoOf(CallCodec).h1x = function (function_0, result) {
    this.h1w_1.m1();
    var tmp = function_0.g1t_1;
    var resultJson = encodeToStringFast(this.e1w_1.u1w_1, isInterface(tmp, KSerializer) ? tmp : THROW_CCE(), new ResultOrCallback(new Result(result)));
    return new CallResult(result, resultJson, this.h1w_1);
  };
  protoOf(CallCodec).i1x = function (function_0, result) {
    this.h1w_1.m1();
    var tmp = function_0.n1x_1;
    var resultOrCallbackJson = encodeToStringFast(this.e1w_1.u1w_1, isInterface(tmp, KSerializer) ? tmp : THROW_CCE(), result);
    return new EncodedResultOrCallback(result, resultOrCallbackJson, this.h1w_1);
  };
  protoOf(CallCodec).o1x = function (function_0, resultJson) {
    this.g1w_1.m1();
    var result = decodeFromStringFast(this.e1w_1.u1w_1, function_0.g1t_1, resultJson);
    return new CallResult(ensureNotNull(result.p1x_1).ie_1, resultJson, this.g1w_1);
  };
  protoOf(CallCodec).r1x = function (function_0, resultOrCallbackJson) {
    this.g1w_1.m1();
    var result = decodeFromStringFast(this.e1w_1.u1w_1, function_0.n1x_1, resultOrCallbackJson);
    return new EncodedResultOrCallback(result, resultOrCallbackJson, this.g1w_1);
  };
  function ZiplineFunction0_1(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'EhTc1FUm', 'fun cancel(): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction0_1).w1x = function (service, args) {
    service.x1x();
    return Unit_instance;
  };
  protoOf(ZiplineFunction0_1).c1t = function (service, args) {
    return this.w1x(isInterface(service, CancelCallback) ? service : THROW_CCE(), args);
  };
  function ZiplineFunction1_1(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'moYx+T3e', 'fun close(): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction1_1).w1x = function (service, args) {
    service.v1s();
    return Unit_instance;
  };
  protoOf(ZiplineFunction1_1).c1t = function (service, args) {
    return this.w1x(isInterface(service, CancelCallback) ? service : THROW_CCE(), args);
  };
  function GeneratedOutboundService_1(callHandler) {
    this.c1y_1 = callHandler;
  }
  protoOf(GeneratedOutboundService_1).x1x = function () {
    var tmp0_callHandler = this.c1y_1;
    var tmp = tmp0_callHandler.f1u(this, 0, []);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  protoOf(GeneratedOutboundService_1).v1s = function () {
    var tmp0_callHandler = this.c1y_1;
    var tmp = tmp0_callHandler.f1u(this, 1, []);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  function Adapter_1(serializers, serialName) {
    ZiplineServiceAdapter.call(this);
    this.f1y_1 = serialName;
    this.g1y_1 = 'CancelCallback';
    this.h1y_1 = serializers;
  }
  protoOf(Adapter_1).oh = function () {
    return this.f1y_1;
  };
  protoOf(Adapter_1).q5 = function () {
    return this.g1y_1;
  };
  protoOf(Adapter_1).l1u = function () {
    return this.h1y_1;
  };
  protoOf(Adapter_1).m1u = function (serializersModule) {
    var tmp0_serializers = this.h1y_1;
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(serializersModule, createKType(getKClass(Unit), arrayOf([]), false));
    var tmp1_serializer = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
    return listOf([new ZiplineFunction0_1(listOf([]), tmp1_serializer), new ZiplineFunction1_1(listOf([]), tmp1_serializer)]);
  };
  protoOf(Adapter_1).n1u = function (callHandler) {
    return new GeneratedOutboundService_1(callHandler);
  };
  function CancelCallback() {
  }
  function usesScope(_this__u8e3s4, $this) {
    if (isInterface(_this__u8e3s4, SuspendCallback))
      return false;
    if (isInterface(_this__u8e3s4, CancelCallback))
      return false;
    return true;
  }
  function serviceType($this, adapter) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = $this.x1w_1;
    var key = adapter.oh();
    var value = this_0.h2(key);
    var tmp;
    if (value == null) {
      // Inline function 'app.cash.zipline.internal.bridge.Endpoint.serviceType.<anonymous>' call
      var answer = new RealZiplineServiceType(adapter.oh(), adapter.m1u($this.u1w_1.ug()));
      this_0.y1(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var tmp_0 = tmp;
    return tmp_0 instanceof RealZiplineServiceType ? tmp_0 : THROW_CCE();
  }
  function EventListener() {
  }
  protoOf(EventListener).i1y = function (name, service) {
  };
  protoOf(EventListener).j1y = function (name, service) {
  };
  protoOf(EventListener).l1v = function (name) {
  };
  protoOf(EventListener).k1y = function (call) {
    return null;
  };
  protoOf(EventListener).l1y = function (call, result, startValue) {
  };
  function Endpoint$json$lambda$lambda(serializers) {
    var tmp3_serializers = serializers;
    return new FlowSerializer(new Adapter_3(tmp3_serializers, serialName('app.cash.zipline.internal.bridge.FlowZiplineService', tmp3_serializers)));
  }
  function Endpoint$json$lambda$lambda_0(serializers) {
    var tmp2_serializers = serializers;
    return new StateFlowSerializer(new Adapter_4(tmp2_serializers, serialName('app.cash.zipline.internal.bridge.StateFlowZiplineService', tmp2_serializers)));
  }
  function Endpoint$json$lambda(this$0) {
    return function ($this$Json) {
      $this$Json.qz_1 = true;
      $this$Json.kz_1 = true;
      $this$Json.iz_1 = true;
      $this$Json.mz_1 = true;
      var tmp = $this$Json;
      // Inline function 'kotlinx.serialization.modules.SerializersModule' call
      var builder = new SerializersModuleBuilder();
      // Inline function 'app.cash.zipline.internal.bridge.Endpoint.json.<anonymous>.<anonymous>' call
      builder.my(getKClass(PassByReference), new PassByReferenceSerializer(this$0));
      builder.my(PrimitiveClasses_getInstance().s6(), ThrowableSerializer_getInstance());
      builder.my(getKClass(Long), LongSerializer_getInstance());
      var tmp_0 = getKClass(Flow);
      builder.ky(tmp_0, Endpoint$json$lambda$lambda);
      var tmp_1 = getKClass(StateFlow);
      builder.ky(tmp_1, Endpoint$json$lambda$lambda_0);
      builder.zy(this$0.m1w_1);
      tmp.wz_1 = builder.po();
      return Unit_instance;
    };
  }
  function Endpoint$inboundChannel$1(this$0) {
    this.m1y_1 = this$0;
  }
  protoOf(Endpoint$inboundChannel$1).n1y = function (callJson) {
    var internalCall = this.m1y_1.v1w_1.d1x(callJson);
    var inboundService = ensureNotNull(internalCall.z1w_1);
    var externalCall = ensureNotNull(this.m1y_1.v1w_1.i1w_1);
    return !(internalCall.b1x_1 == null) ? inboundService.p1y(internalCall, externalCall, internalCall.b1x_1) : inboundService.o1y(internalCall, externalCall);
  };
  protoOf(Endpoint$inboundChannel$1).call = function (callJson) {
    return this.n1y(callJson);
  };
  protoOf(Endpoint$inboundChannel$1).q1y = function (instanceName) {
    return !(this.m1y_1.r1y(instanceName) == null);
  };
  protoOf(Endpoint$inboundChannel$1).disconnect = function (instanceName) {
    return this.q1y(instanceName);
  };
  function Endpoint(scope, userSerializersModule, eventListener, outboundChannel, oppositeProvider) {
    this.l1w_1 = scope;
    this.m1w_1 = userSerializersModule;
    this.n1w_1 = eventListener;
    this.o1w_1 = outboundChannel;
    this.p1w_1 = oppositeProvider;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.q1w_1 = LinkedHashMap_init_$Create$();
    this.r1w_1 = 1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.s1w_1 = LinkedHashSet_init_$Create$();
    this.t1w_1 = null;
    var tmp_1 = this;
    tmp_1.u1w_1 = Json(VOID, Endpoint$json$lambda(this));
    this.v1w_1 = new CallCodec(this);
    var tmp_2 = this;
    tmp_2.w1w_1 = new Endpoint$inboundChannel$1(this);
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.x1w_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Endpoint).x1t = function () {
    return toSet(this.q1w_1.x1());
  };
  protoOf(Endpoint).s1y = function () {
    return this.p1w_1();
  };
  protoOf(Endpoint).t1y = function (name, service, adapter) {
    this.n1w_1.i1y(name, service);
    var type = serviceType(this, adapter);
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.q1w_1;
    var value = new InboundService(type, service, this);
    this_0.y1(name, value);
  };
  protoOf(Endpoint).u1y = function (name, scope, adapter) {
    detectLeaks();
    var type = serviceType(this, adapter);
    var callHandler = new OutboundCallHandler(type, name, this, adapter, scope);
    var result = callHandler.v1y();
    if (usesScope(result, this)) {
      scope.s1s(callHandler);
    }
    this.n1w_1.j1y(name, result);
    trackLeaks(this.n1w_1, name, callHandler, result);
    return result;
  };
  protoOf(Endpoint).w1y = function (name, scope, adapter, $super) {
    scope = scope === VOID ? new ZiplineScope() : scope;
    return $super === VOID ? this.u1y(name, scope, adapter) : $super.u1y.call(this, name, scope, adapter);
  };
  protoOf(Endpoint).x1y = function (scope, block) {
    var pushedTakeScope = this.t1w_1;
    this.t1w_1 = scope;
    try {
      return block();
    }finally {
      this.t1w_1 = pushedTakeScope;
    }
  };
  protoOf(Endpoint).r1y = function (name) {
    return this.q1w_1.z1(name);
  };
  protoOf(Endpoint).y1y = function () {
    var tmp = get_passByReferencePrefix();
    var tmp1 = this.r1w_1;
    this.r1w_1 = tmp1 + 1 | 0;
    return tmp + tmp1;
  };
  protoOf(Endpoint).o1t = function (name) {
    var tmp0_safe_receiver = this.q1w_1.h2(name);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1x_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var type = tmp;
    return SerializableZiplineServiceType_init_$Create$(type);
  };
  function InboundService$callSuspending$slambda($internalCall, $function, this$0, resultContinuation) {
    this.h1z_1 = $internalCall;
    this.i1z_1 = $function;
    this.j1z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(InboundService$callSuspending$slambda).q1z = function ($this$async, $completion) {
    var tmp = this.z1p($this$async, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    var tmp_0 = tmp.ra();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(InboundService$callSuspending$slambda).eb = function (p1, $completion) {
    return this.q1z((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(InboundService$callSuspending$slambda).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 3;
            this.l1z_1 = this.h1z_1.c1x_1;
            var tmp_0 = this;
            tmp_0.m1z_1 = this.k1z_1;
            this.fa_1 = 2;
            var tmp_1 = this;
            tmp_1.o1z_1 = Companion_instance;
            var tmp_2 = this;
            tmp_2.p1z_1 = this.m1z_1;
            this.ea_1 = 1;
            suspendResult = this.i1z_1.r1z(this.j1z_1.f1x_1, this.l1z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var value = suspendResult;
            this.n1z_1 = _Result___init__impl__xyqfz8(value);
            this.fa_1 = 3;
            this.ea_1 = 4;
            continue $sm;
          case 2:
            this.fa_1 = 3;
            var tmp_3 = this.ha_1;
            if (tmp_3 instanceof Error) {
              var e = this.ha_1;
              var tmp_4 = this;
              tmp_4.n1z_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.ea_1 = 4;
              continue $sm;
            } else {
              throw this.ha_1;
            }

          case 3:
            throw this.ha_1;
          case 4:
            this.fa_1 = 3;
            return new Result(this.n1z_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.fa_1 === 3) {
          throw e_0;
        } else {
          this.ea_1 = this.fa_1;
          this.ha_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(InboundService$callSuspending$slambda).z1p = function ($this$async, completion) {
    var i = new InboundService$callSuspending$slambda(this.h1z_1, this.i1z_1, this.j1z_1, completion);
    i.k1z_1 = $this$async;
    return i;
  };
  function InboundService$callSuspending$slambda_0($internalCall, $function, this$0, resultContinuation) {
    var i = new InboundService$callSuspending$slambda($internalCall, $function, this$0, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.q1z($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function InboundService$callSuspending$cancelCallback$1($deferred, $internalCall) {
    this.t1z_1 = $deferred;
    this.u1z_1 = $internalCall;
    this.s1z_1 = null;
  }
  protoOf(InboundService$callSuspending$cancelCallback$1).v1z = function (_set____db54di) {
    this.s1z_1 = _set____db54di;
  };
  protoOf(InboundService$callSuspending$cancelCallback$1).x1x = function () {
    this.t1z_1.n19();
  };
  protoOf(InboundService$callSuspending$cancelCallback$1).toString = function () {
    return 'CancelCallback/' + this.u1z_1;
  };
  function InboundService$callSuspending$lambda$lambda(this$0, $externalCall, $kotlinResult, $callStart) {
    return function (callbackCall) {
      this$0.g1x_1.n1w_1.l1y($externalCall, new CallResult($kotlinResult, callbackCall.h1s_1, callbackCall.i1s_1), $callStart);
      return Unit_instance;
    };
  }
  function InboundService$callSuspending$lambda($cancelCallback, this$0, $deferred, $suspendCallback, $externalCall, $callStart) {
    return function (it) {
      var name = $cancelCallback.s1z_1;
      var tmp;
      if (!(name == null)) {
        this$0.g1x_1.r1y(name);
        tmp = Unit_instance;
      }
      var failure = $deferred.a1a();
      var tmp_0;
      if (!(failure == null)) {
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(failure));
      } else {
        tmp_0 = $deferred.n1a().ie_1;
      }
      var kotlinResult = tmp_0;
      var tmp_1;
      if (!get_isActive(this$0.g1x_1.l1w_1)) {
        return Unit_instance;
      }
      var tmp_2 = this$0.g1x_1.v1w_1;
      tmp_2.j1w_1 = InboundService$callSuspending$lambda$lambda(this$0, $externalCall, kotlinResult, $callStart);
      var tmp_3;
      if (_Result___get_isFailure__impl__jpiriv(kotlinResult)) {
        $suspendCallback.x1z(ensureNotNull(Result__exceptionOrNull_impl_p6xea9(kotlinResult)));
        tmp_3 = Unit_instance;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var tmp_4;
        if (_Result___get_isFailure__impl__jpiriv(kotlinResult)) {
          tmp_4 = null;
        } else {
          var tmp_5 = _Result___get_value__impl__bjfvqg(kotlinResult);
          tmp_4 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        }
        var tmp$ret$1 = tmp_4;
        $suspendCallback.w1z(tmp$ret$1);
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function InboundService(type, service, endpoint) {
    this.e1x_1 = type;
    this.f1x_1 = service;
    this.g1x_1 = endpoint;
  }
  protoOf(InboundService).o1y = function (internalCall, externalCall) {
    var tmp = internalCall.a1x_1;
    var function_0 = tmp instanceof ReturningZiplineFunction ? tmp : THROW_CCE();
    if (function_0.j1t()) {
      this.g1x_1.r1y(internalCall.y1w_1);
    }
    var tmp0_subject = externalCall.e1s_1;
    var tmp_0;
    if (!isInterface(tmp0_subject, SuspendCallback)) {
      tmp_0 = this.g1x_1.n1w_1.k1y(externalCall);
    } else {
      tmp_0 = Unit_instance;
    }
    var callStart = tmp_0;
    // Inline function 'kotlin.runCatching' call
    var tmp_1;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'app.cash.zipline.internal.bridge.InboundService.call.<anonymous>' call
      var value = function_0.c1t(this.f1x_1, internalCall.c1x_1);
      tmp_1 = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    var theResult = tmp_1;
    var callResult = this.g1x_1.v1w_1.h1x(function_0, theResult);
    var tmp1_subject = externalCall.e1s_1;
    if (!isInterface(tmp1_subject, SuspendCallback)) {
      this.g1x_1.n1w_1.l1y(externalCall, callResult, callStart);
    }
    return callResult.l1s_1;
  };
  protoOf(InboundService).p1y = function (internalCall, externalCall, suspendCallback) {
    var tmp = internalCall.a1x_1;
    var function_0 = tmp instanceof SuspendingZiplineFunction ? tmp : THROW_CCE();
    var callStart = this.g1x_1.n1w_1.k1y(externalCall);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    var deferred = async(this.g1x_1.l1w_1, VOID, tmp_0, InboundService$callSuspending$slambda_0(internalCall, function_0, this, null));
    if (deferred.g18()) {
      var cancelCallback = new InboundService$callSuspending$cancelCallback$1(deferred, internalCall);
      deferred.h19(InboundService$callSuspending$lambda(cancelCallback, this, deferred, suspendCallback, externalCall, callStart));
      var encodedResultOrCallback = this.g1x_1.v1w_1.i1x(function_0, new ResultOrCallback(VOID, cancelCallback));
      return encodedResultOrCallback.z1z_1;
    }
    var failure = deferred.a1a();
    var tmp_1;
    if (!(failure == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp_1 = _Result___init__impl__xyqfz8(createFailure(failure));
    } else {
      tmp_1 = deferred.n1a().ie_1;
    }
    var result = tmp_1;
    var encodedResultOrCallback_0 = this.g1x_1.v1w_1.i1x(function_0, new ResultOrCallback(new Result(result)));
    this.g1x_1.n1w_1.l1y(externalCall, ensureNotNull(encodedResultOrCallback_0.b20()), callStart);
    return encodedResultOrCallback_0.z1z_1;
  };
  protoOf(InboundService).toString = function () {
    return toString(this.f1x_1);
  };
  function call($this, result) {
    var suspendCall = ensureNotNull($this.i20_1.b1u_1.v1w_1.i1w_1);
    var callResult = new CallResult(result, suspendCall.h1s_1, suspendCall.i1s_1);
    $this.h20_1 = true;
    var name = $this.g20_1;
    if (!(name == null)) {
      $this.i20_1.b1u_1.r1y(name);
    }
    // Inline function 'kotlin.collections.minusAssign' call
    var this_0 = $this.i20_1.b1u_1.s1w_1;
    var element = $this.j20();
    this_0.q(element);
    $this.i20_1.b1u_1.n1w_1.l1y($this.k20(), callResult, $this.f20_1);
    $this.j20().sa(result);
  }
  function ServiceState() {
    this.l20_1 = false;
  }
  function RealSuspendCallback($outer) {
    this.i20_1 = $outer;
    this.f20_1 = null;
    this.g20_1 = null;
    this.h20_1 = false;
  }
  protoOf(RealSuspendCallback).m20 = function () {
    var tmp = this.c20_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('internalCall');
    }
  };
  protoOf(RealSuspendCallback).k20 = function () {
    var tmp = this.d20_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('externalCall');
    }
  };
  protoOf(RealSuspendCallback).j20 = function () {
    var tmp = this.e20_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('continuation');
    }
  };
  protoOf(RealSuspendCallback).v1z = function (_set____db54di) {
    this.g20_1 = _set____db54di;
  };
  protoOf(RealSuspendCallback).u1s = function () {
    return this.i20_1.d1u_1;
  };
  protoOf(RealSuspendCallback).n20 = function (result) {
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
    call(this, tmp$ret$0);
  };
  protoOf(RealSuspendCallback).w1z = function (result) {
    return this.n20((result == null ? true : !(result == null)) ? result : THROW_CCE());
  };
  protoOf(RealSuspendCallback).x1z = function (result) {
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(result));
    call(this, tmp$ret$0);
  };
  protoOf(RealSuspendCallback).toString = function () {
    return 'SuspendCallback/' + this.m20();
  };
  function withApiMismatchMessage(_this__u8e3s4, $this, called) {
    if (_Result___get_isSuccess__impl__sndoy8(_this__u8e3s4))
      return _this__u8e3s4;
    var throwable = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4));
    if (!(throwable instanceof ZiplineApiMismatchException))
      return _this__u8e3s4;
    var tmp;
    try {
      var tmp_0;
      if (contains(throwable.p1s_1, '<unknown function>')) {
        var tmp0_elvis_lhs = $this.o20();
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          return _this__u8e3s4;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var calledService = tmp_1;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'app.cash.zipline.internal.bridge.OutboundCallHandler.withApiMismatchMessage.<anonymous>' call
        // Inline function 'kotlin.text.appendLine' call
        var value = 'no such method (incompatible API versions?)';
        // Inline function 'kotlin.text.appendLine' call
        this_0.v4(value).w4(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_0 = '\tcalled service:';
        // Inline function 'kotlin.text.appendLine' call
        this_0.v4(value_0).w4(_Char___init__impl__6a9atx(10));
        this_0.v4('\t\t');
        // Inline function 'kotlin.text.appendLine' call
        var value_1 = $this.a1u_1;
        // Inline function 'kotlin.text.appendLine' call
        this_0.v4(value_1).w4(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_2 = '\tcalled function:';
        // Inline function 'kotlin.text.appendLine' call
        this_0.v4(value_2).w4(_Char___init__impl__6a9atx(10));
        this_0.v4('\t\t');
        // Inline function 'kotlin.text.appendLine' call
        var value_3 = called.j1s();
        // Inline function 'kotlin.text.appendLine' call
        this_0.v4(value_3).w4(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_4 = '\tavailable functions:';
        // Inline function 'kotlin.text.appendLine' call
        this_0.v4(value_4).w4(_Char___init__impl__6a9atx(10));
        joinTo(calledService.q20_1, this_0, '\n', VOID, VOID, VOID, VOID, OutboundCallHandler$withApiMismatchMessage$lambda);
        var message = this_0.toString();
        // Inline function 'kotlin.Companion.failure' call
        var exception = new ZiplineApiMismatchException(message);
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(exception));
      } else {
        if (contains(throwable.p1s_1, '<unknown service>')) {
          // Inline function 'kotlin.text.buildString' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.apply' call
          var this_1 = StringBuilder_init_$Create$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'app.cash.zipline.internal.bridge.OutboundCallHandler.withApiMismatchMessage.<anonymous>' call
          // Inline function 'kotlin.text.appendLine' call
          var value_5 = 'no such service (service closed?)';
          // Inline function 'kotlin.text.appendLine' call
          this_1.v4(value_5).w4(_Char___init__impl__6a9atx(10));
          // Inline function 'kotlin.text.appendLine' call
          var value_6 = '\tcalled service:';
          // Inline function 'kotlin.text.appendLine' call
          this_1.v4(value_6).w4(_Char___init__impl__6a9atx(10));
          this_1.v4('\t\t');
          // Inline function 'kotlin.text.appendLine' call
          var value_7 = $this.a1u_1;
          // Inline function 'kotlin.text.appendLine' call
          this_1.v4(value_7).w4(_Char___init__impl__6a9atx(10));
          // Inline function 'kotlin.text.appendLine' call
          var value_8 = '\tavailable services:';
          // Inline function 'kotlin.text.appendLine' call
          this_1.v4(value_8).w4(_Char___init__impl__6a9atx(10));
          var tmp_2 = $this.b1u_1.s1y().x1t();
          joinTo(tmp_2, this_1, '\n', VOID, VOID, VOID, VOID, OutboundCallHandler$withApiMismatchMessage$lambda_0);
          var message_0 = this_1.toString();
          // Inline function 'kotlin.Companion.failure' call
          var exception_0 = new ZiplineApiMismatchException(message_0);
          tmp_0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        } else {
          tmp_0 = _this__u8e3s4;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_3 = _this__u8e3s4;
      } else {
        throw $p;
      }
      tmp = tmp_3;
    }
    return tmp;
  }
  function OutboundCallHandler$call$lambda(this$0, $function, $encodedResult, $service, $externalCall, $callStart) {
    return function () {
      var callResult = this$0.b1u_1.v1w_1.o1x($function, $encodedResult);
      var tmp0_subject = $service;
      var tmp;
      if (!isInterface(tmp0_subject, SuspendCallback)) {
        this$0.b1u_1.n1w_1.l1y($externalCall, callResult, $callStart);
        tmp = Unit_instance;
      } else {
        tmp = Unit_instance;
      }
      // Inline function 'kotlin.getOrThrow' call
      var this_0 = withApiMismatchMessage(callResult.k1s_1, this$0, $function);
      throwOnFailure(this_0);
      var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
      return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    };
  }
  function OutboundCallHandler$callSuspending$lambda(this$0, $function, $resultOrCallbackJson) {
    return function () {
      return this$0.b1u_1.v1w_1.r1x($function, $resultOrCallbackJson);
    };
  }
  function OutboundCallHandler$callSuspending$lambda$slambda($suspendCallback, $cancelCallback, resultContinuation) {
    this.z20_1 = $suspendCallback;
    this.a21_1 = $cancelCallback;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OutboundCallHandler$callSuspending$lambda$slambda).y1p = function ($this$launch, $completion) {
    var tmp = this.z1p($this$launch, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  };
  protoOf(OutboundCallHandler$callSuspending$lambda$slambda).eb = function (p1, $completion) {
    return this.y1p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OutboundCallHandler$callSuspending$lambda$slambda).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        if (tmp === 0) {
          this.fa_1 = 1;
          if (!this.z20_1.h20_1) {
            this.a21_1.x1x();
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.ha_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(OutboundCallHandler$callSuspending$lambda$slambda).z1p = function ($this$launch, completion) {
    var i = new OutboundCallHandler$callSuspending$lambda$slambda(this.z20_1, this.a21_1, completion);
    i.b21_1 = $this$launch;
    return i;
  };
  function OutboundCallHandler$callSuspending$lambda$slambda_0($suspendCallback, $cancelCallback, resultContinuation) {
    var i = new OutboundCallHandler$callSuspending$lambda$slambda($suspendCallback, $cancelCallback, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.y1p($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OutboundCallHandler$callSuspending$lambda_0(this$0, $suspendCallback, $cancelCallback) {
    return function (it) {
      launch(this$0.b1u_1.l1w_1, VOID, VOID, OutboundCallHandler$callSuspending$lambda$slambda_0($suspendCallback, $cancelCallback, null));
      return Unit_instance;
    };
  }
  function OutboundCallHandler$withApiMismatchMessage$lambda(it) {
    return '\t\t' + it.d21_1;
  }
  function OutboundCallHandler$withApiMismatchMessage$lambda_0(it) {
    return '\t\t' + it;
  }
  function $callSuspendingCOROUTINE$0(_this__u8e3s4, service, functionIndex, args, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n21_1 = _this__u8e3s4;
    this.o21_1 = service;
    this.p21_1 = functionIndex;
    this.q21_1 = args;
  }
  protoOf($callSuspendingCOROUTINE$0).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 3;
            ensureActive(this.n21_1.b1u_1.l1w_1);
            var tmp_0 = this;
            var tmp_1 = this.n21_1.z1t_1.z21().d1(this.p21_1);
            tmp_0.r21_1 = tmp_1 instanceof SuspendingZiplineFunction ? tmp_1 : THROW_CCE();
            if (!!this.n21_1.e1u_1.l20_1) {
              var message = trimMargin('\n      |' + this.n21_1.c1u_1 + ' ' + this.n21_1.a1u_1 + ' is closed, failed to call:\n      |  ' + this.r21_1 + '\n      ');
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.s21_1 = toList_0(this.q21_1);
            this.t21_1 = new RealSuspendCallback(this.n21_1);
            this.u21_1 = new InternalCall(this.n21_1.a1u_1, VOID, this.r21_1, this.t21_1, this.s21_1);
            this.t21_1.c20_1 = this.u21_1;
            this.v21_1 = this.n21_1.b1u_1.v1w_1.k1w(this.u21_1, this.o21_1);
            this.t21_1.d20_1 = this.v21_1;
            this.t21_1.f20_1 = this.n21_1.b1u_1.n1w_1.k1y(this.v21_1);
            this.w21_1 = this.n21_1.b1u_1.o1w_1.call(this.v21_1.h1s_1);
            var tmp_2 = this;
            tmp_2.x21_1 = this.n21_1.b1u_1.x1y(this.n21_1.d1u_1, OutboundCallHandler$callSuspending$lambda(this.n21_1, this.r21_1, this.w21_1));
            this.y21_1 = this.x21_1.y1z_1.q1x_1;
            if (!(this.y21_1 == null)) {
              this.ea_1 = 2;
              var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
              cancellable.i1c();
              this.t21_1.e20_1 = cancellable;
              this.n21_1.b1u_1.s1w_1.p(cancellable);
              cancellable.u1a(OutboundCallHandler$callSuspending$lambda_0(this.n21_1, this.t21_1, this.y21_1));
              suspendResult = returnIfSuspended(cancellable.q1c(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ea_1 = 1;
              continue $sm;
            }

          case 1:
            var callResult = ensureNotNull(this.x21_1.b20());
            var name = this.t21_1.g20_1;
            if (!(name == null)) {
              this.n21_1.b1u_1.r1y(name);
            }

            this.n21_1.b1u_1.n1w_1.l1y(this.v21_1, callResult, this.t21_1.f20_1);
            var this_0 = withApiMismatchMessage(callResult.k1s_1, this.n21_1, this.r21_1);
            throwOnFailure(this_0);
            var tmp_3 = _Result___get_value__impl__bjfvqg(this_0);
            return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          case 2:
            return suspendResult;
          case 3:
            throw this.ha_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.fa_1 === 3) {
          throw e;
        } else {
          this.ea_1 = this.fa_1;
          this.ha_1 = e;
        }
      }
     while (true);
  };
  function OutboundCallHandler(type, serviceName, endpoint, adapter, scope, serviceState) {
    serviceState = serviceState === VOID ? new ServiceState() : serviceState;
    this.z1t_1 = type;
    this.a1u_1 = serviceName;
    this.b1u_1 = endpoint;
    this.c1u_1 = adapter;
    this.d1u_1 = scope;
    this.e1u_1 = serviceState;
  }
  protoOf(OutboundCallHandler).o20 = function () {
    return this.b1u_1.s1y().o1t(this.a1u_1);
  };
  protoOf(OutboundCallHandler).v1y = function () {
    var tmp = this.c1u_1.n1u(this);
    return isInterface(tmp, ZiplineService) ? tmp : THROW_CCE();
  };
  protoOf(OutboundCallHandler).f1u = function (service, functionIndex, args) {
    var tmp = this.z1t_1.z21().d1(functionIndex);
    var function_0 = tmp instanceof ReturningZiplineFunction ? tmp : THROW_CCE();
    if (function_0.j1t()) {
      if (this.e1u_1.l20_1)
        return Unit_instance;
      this.e1u_1.l20_1 = true;
      this.d1u_1.t1s(this);
    } else {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!this.e1u_1.l20_1) {
        // Inline function 'app.cash.zipline.internal.bridge.OutboundCallHandler.call.<anonymous>' call
        var message = trimMargin('\n        |' + this.c1u_1 + ' ' + this.a1u_1 + ' is closed, failed to call:\n        |  ' + function_0 + '\n        ');
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    var argsList = toList_0(args);
    var internalCall = new InternalCall(this.a1u_1, VOID, function_0, VOID, argsList);
    var externalCall = this.b1u_1.v1w_1.k1w(internalCall, service);
    var tmp_0;
    if (!isInterface(service, SuspendCallback)) {
      tmp_0 = this.b1u_1.n1w_1.k1y(externalCall);
    } else {
      tmp_0 = Unit_instance;
    }
    var callStart = tmp_0;
    var encodedResult = this.b1u_1.o1w_1.call(externalCall.h1s_1);
    return this.b1u_1.x1y(this.d1u_1, OutboundCallHandler$call$lambda(this, function_0, encodedResult, service, externalCall, callStart));
  };
  protoOf(OutboundCallHandler).a22 = function (service, functionIndex, args, $completion) {
    var tmp = new $callSuspendingCOROUTINE$0(this, service, functionIndex, args, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  };
  protoOf(OutboundCallHandler).toString = function () {
    return this.a1u_1;
  };
  function RealZiplineServiceType(name, functions) {
    this.b22_1 = name;
    this.c22_1 = functions;
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = this.c22_1;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var tmp0_iterator = this_0.s();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.v();
      // Inline function 'app.cash.zipline.internal.bridge.RealZiplineServiceType.functionsById.<anonymous>' call
      var tmp$ret$0 = element.h1t();
      destination.y1(tmp$ret$0, element);
    }
    tmp.d22_1 = destination;
  }
  protoOf(RealZiplineServiceType).e22 = function () {
    return this.b22_1;
  };
  protoOf(RealZiplineServiceType).z21 = function () {
    return this.c22_1;
  };
  function SerializableZiplineServiceType_init_$Init$(type, $this) {
    var tmp = type.e22();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.z21();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.s();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.v();
      // Inline function 'app.cash.zipline.internal.bridge.SerializableZiplineServiceType.<init>.<anonymous>' call
      var tmp$ret$0 = SerializableZiplineFunction_init_$Create$(item);
      destination.p(tmp$ret$0);
    }
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = SerializableZiplineServiceType$_init_$lambda_pvorv2;
    var tmp$ret$3 = new sam$kotlin_Comparator$0(tmp_0);
    var tmp$ret$4 = sortedWith(destination, tmp$ret$3);
    SerializableZiplineServiceType.call($this, tmp, tmp$ret$4);
    return $this;
  }
  function SerializableZiplineServiceType_init_$Create$(type) {
    return SerializableZiplineServiceType_init_$Init$(type, objectCreate(protoOf(SerializableZiplineServiceType)));
  }
  function Companion_0() {
    Companion_instance_2 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f22_1 = [null, new ArrayListSerializer($serializer_getInstance_1())];
  }
  var Companion_instance_2;
  function Companion_getInstance_0() {
    if (Companion_instance_2 == null)
      new Companion_0();
    return Companion_instance_2;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.cash.zipline.internal.bridge.SerializableZiplineServiceType', this, 2);
    tmp0_serialDesc.yp('name', false);
    tmp0_serialDesc.yp('functions', false);
    this.g22_1 = tmp0_serialDesc;
  }
  protoOf($serializer).jg = function () {
    return this.g22_1;
  };
  protoOf($serializer).aq = function () {
    var tmp0_cached = Companion_getInstance_0().f22_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1]];
  };
  protoOf($serializer).xg = function (decoder) {
    var tmp0_desc = this.g22_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.fj(tmp0_desc);
    var tmp7_cached = Companion_getInstance_0().f22_1;
    if (tmp6_input.tj()) {
      tmp4_local0 = tmp6_input.pj(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.rj(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.uj(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.pj(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.rj(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.gj(tmp0_desc);
    return SerializableZiplineServiceType_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).h22 = function (encoder, value) {
    var tmp0_desc = this.g22_1;
    var tmp1_output = encoder.fj(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().f22_1;
    tmp1_output.rk(tmp0_desc, 0, value.p20_1);
    tmp1_output.tk(tmp0_desc, 1, tmp2_cached[1], value.q20_1);
    tmp1_output.gj(tmp0_desc);
  };
  protoOf($serializer).wg = function (encoder, value) {
    return this.h22(encoder, value instanceof SerializableZiplineServiceType ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function SerializableZiplineServiceType_init_$Init$_0(seen1, name, functions, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance().g22_1);
    }
    $this.p20_1 = name;
    $this.q20_1 = functions;
    return $this;
  }
  function SerializableZiplineServiceType_init_$Create$_0(seen1, name, functions, serializationConstructorMarker) {
    return SerializableZiplineServiceType_init_$Init$_0(seen1, name, functions, serializationConstructorMarker, objectCreate(protoOf(SerializableZiplineServiceType)));
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.i22_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).j22 = function (a, b) {
    return this.i22_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.j22(a, b);
  };
  function SerializableZiplineServiceType$_init_$lambda_pvorv2(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.cash.zipline.internal.bridge.SerializableZiplineServiceType.<init>.<anonymous>' call
    var tmp = a.d21_1;
    // Inline function 'app.cash.zipline.internal.bridge.SerializableZiplineServiceType.<init>.<anonymous>' call
    var tmp$ret$1 = b.d21_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function SerializableZiplineServiceType(name, functions) {
    Companion_getInstance_0();
    this.p20_1 = name;
    this.q20_1 = functions;
  }
  protoOf(SerializableZiplineServiceType).e22 = function () {
    return this.p20_1;
  };
  protoOf(SerializableZiplineServiceType).z21 = function () {
    return this.q20_1;
  };
  function ZiplineFunction0_2(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'uCBo/XOg', 'fun success(T): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction0_2).o22 = function (service, args) {
    var tmp = args.d1(0);
    service.w1z((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
    return Unit_instance;
  };
  protoOf(ZiplineFunction0_2).c1t = function (service, args) {
    return this.o22(isInterface(service, SuspendCallback) ? service : THROW_CCE(), args);
  };
  function ZiplineFunction1_2(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'tNUxxzEe', 'fun failure(kotlin.Throwable): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction1_2).o22 = function (service, args) {
    var tmp = args.d1(0);
    service.x1z(tmp instanceof Error ? tmp : THROW_CCE());
    return Unit_instance;
  };
  protoOf(ZiplineFunction1_2).c1t = function (service, args) {
    return this.o22(isInterface(service, SuspendCallback) ? service : THROW_CCE(), args);
  };
  function ZiplineFunction2_1(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'moYx+T3e', 'fun close(): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction2_1).o22 = function (service, args) {
    service.v1s();
    return Unit_instance;
  };
  protoOf(ZiplineFunction2_1).c1t = function (service, args) {
    return this.o22(isInterface(service, SuspendCallback) ? service : THROW_CCE(), args);
  };
  function GeneratedOutboundService_2(callHandler) {
    this.x22_1 = callHandler;
  }
  protoOf(GeneratedOutboundService_2).y22 = function (result) {
    var tmp0_callHandler = this.x22_1;
    var tmp = tmp0_callHandler.f1u(this, 0, [result]);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  protoOf(GeneratedOutboundService_2).w1z = function (result) {
    return this.y22((result == null ? true : !(result == null)) ? result : THROW_CCE());
  };
  protoOf(GeneratedOutboundService_2).x1z = function (result) {
    var tmp0_callHandler = this.x22_1;
    var tmp = tmp0_callHandler.f1u(this, 1, [result]);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  protoOf(GeneratedOutboundService_2).v1s = function () {
    var tmp0_callHandler = this.x22_1;
    var tmp = tmp0_callHandler.f1u(this, 2, []);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  function Adapter_2(serializers, serialName) {
    ZiplineServiceAdapter.call(this);
    this.b23_1 = serialName;
    this.c23_1 = 'SuspendCallback';
    this.d23_1 = serializers;
  }
  protoOf(Adapter_2).oh = function () {
    return this.b23_1;
  };
  protoOf(Adapter_2).q5 = function () {
    return this.c23_1;
  };
  protoOf(Adapter_2).l1u = function () {
    return this.d23_1;
  };
  protoOf(Adapter_2).m1u = function (serializersModule) {
    var tmp0_serializers = this.d23_1;
    var tmp1_serializer = tmp0_serializers.d1(0);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(serializersModule, createKType(getKClass(Unit), arrayOf([]), false));
    var tmp2_serializer = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(serializersModule, createKType(PrimitiveClasses_getInstance().s6(), arrayOf([]), false));
    var tmp3_serializer = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    return listOf([new ZiplineFunction0_2(listOf([tmp1_serializer]), tmp2_serializer), new ZiplineFunction1_2(listOf([tmp3_serializer]), tmp2_serializer), new ZiplineFunction2_1(listOf([]), tmp2_serializer)]);
  };
  protoOf(Adapter_2).n1u = function (callHandler) {
    return new GeneratedOutboundService_2(callHandler);
  };
  function SuspendCallback() {
  }
  function ZiplineServiceAdapter() {
    this.o1u_1 = ContextualSerializer_init_$Create$(getKClass(PassByReference));
    this.p1u_1 = this.o1u_1.hg_1;
  }
  protoOf(ZiplineServiceAdapter).jg = function () {
    return this.p1u_1;
  };
  protoOf(ZiplineServiceAdapter).q1u = function (encoder, value) {
    this.o1u_1.tg(encoder, new SendByReference(value, this));
  };
  protoOf(ZiplineServiceAdapter).wg = function (encoder, value) {
    return this.q1u(encoder, (!(value == null) ? isInterface(value, ZiplineService) : false) ? value : THROW_CCE());
  };
  protoOf(ZiplineServiceAdapter).xg = function (decoder) {
    var tmp = this.o1u_1.xg(decoder);
    var reference = tmp instanceof ReceiveByReference ? tmp : THROW_CCE();
    return reference.g23(this);
  };
  protoOf(ZiplineServiceAdapter).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ZiplineServiceAdapter) {
      tmp_0 = getKClassFromExpression(this).equals(getKClassFromExpression(other));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.l1u(), other.l1u());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ZiplineServiceAdapter).hashCode = function () {
    return getKClassFromExpression(this).hashCode();
  };
  protoOf(ZiplineServiceAdapter).toString = function () {
    return this.q5();
  };
  function serialName(typeName, serializers) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'app.cash.zipline.internal.bridge.serialName.<anonymous>' call
    this_0.v4(typeName);
    joinTo(serializers, this_0, ',', '<', '>', VOID, VOID, serialName$lambda);
    return this_0.toString();
  }
  function descriptorName(typeName) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'app.cash.zipline.internal.bridge.descriptorName.<anonymous>' call
    this_0.v4(typeName.oh());
    if (typeName.ph() > 0) {
      this_0.w4(_Char___init__impl__6a9atx(60));
      var elementIndices = until(0, typeName.ph());
      var inductionVariable = elementIndices.l8_1;
      var last = elementIndices.m8_1;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this_0.v4(descriptorName(typeName.th(i)));
          if (i < elementIndices.m8_1) {
            this_0.w4(_Char___init__impl__6a9atx(44));
          }
        }
         while (!(i === last));
      this_0.w4(_Char___init__impl__6a9atx(62));
    }
    return this_0.toString();
  }
  function serialName$lambda(it) {
    return descriptorName(it.jg());
  }
  function get_argsListDescriptor() {
    _init_properties_calls_kt__icry7x();
    return argsListDescriptor;
  }
  var argsListDescriptor;
  function get_failureSuspendCallbackSerializer() {
    _init_properties_calls_kt__icry7x();
    return failureSuspendCallbackSerializer;
  }
  var failureSuspendCallbackSerializer;
  function get_cancelCallbackSerializer() {
    _init_properties_calls_kt__icry7x();
    return cancelCallbackSerializer;
  }
  var cancelCallbackSerializer;
  function InternalCall(serviceName, inboundService, function_0, suspendCallback, args) {
    inboundService = inboundService === VOID ? null : inboundService;
    suspendCallback = suspendCallback === VOID ? null : suspendCallback;
    this.y1w_1 = serviceName;
    this.z1w_1 = inboundService;
    this.a1x_1 = function_0;
    this.b1x_1 = suspendCallback;
    this.c1x_1 = args;
  }
  protoOf(InternalCall).toString = function () {
    return 'Call(receiver=' + this.y1w_1 + ', function=' + this.a1x_1.j1s() + ', args=' + this.c1x_1 + ')';
  };
  function ArgsListSerializer(serializers) {
    this.h23_1 = serializers;
    this.i23_1 = get_argsListDescriptor();
  }
  protoOf(ArgsListSerializer).jg = function () {
    return this.i23_1;
  };
  protoOf(ArgsListSerializer).j23 = function (encoder, value) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value.l() === this.h23_1.l())) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.i23_1;
    var composite = encoder.fj(descriptor);
    // Inline function 'app.cash.zipline.internal.bridge.ArgsListSerializer.serialize.<anonymous>' call
    var inductionVariable = 0;
    var last = this.h23_1.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.h23_1.d1(i);
        composite.tk(this.i23_1, i, isInterface(tmp, KSerializer) ? tmp : THROW_CCE(), value.d1(i));
      }
       while (inductionVariable <= last);
    composite.gj(descriptor);
  };
  protoOf(ArgsListSerializer).wg = function (encoder, value) {
    return this.j23(encoder, (!(value == null) ? isInterface(value, List) : false) ? value : THROW_CCE());
  };
  protoOf(ArgsListSerializer).xg = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.i23_1;
    var composite = decoder.fj(descriptor);
    // Inline function 'app.cash.zipline.internal.bridge.ArgsListSerializer.deserialize.<anonymous>' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = this.h23_1.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(composite.uj(this.i23_1) === i)) {
          // Inline function 'kotlin.check.<anonymous>' call
          var message = 'Check failed.';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlin.collections.plusAssign' call
        var element = composite.sj(this.i23_1, i, this.h23_1.d1(i));
        result.p(element);
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.check' call
    var tmp = composite.uj(this.i23_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp === -1)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_0 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var result_0 = result;
    composite.gj(descriptor);
    return result_0;
  };
  function ResultOrCallbackSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.zg('cancelCallback', get_cancelCallbackSerializer().jg());
      $this$buildClassSerialDescriptor.zg('failure', ThrowableSerializer_getInstance().l23_1);
      $this$buildClassSerialDescriptor.zg('success', this$0.m23_1.jg());
      return Unit_instance;
    };
  }
  function ResultOrCallbackSerializer(successSerializer) {
    this.m23_1 = successSerializer;
    var tmp = this;
    tmp.n23_1 = buildClassSerialDescriptor('Result', [], ResultOrCallbackSerializer$descriptor$lambda(this));
  }
  protoOf(ResultOrCallbackSerializer).jg = function () {
    return this.n23_1;
  };
  protoOf(ResultOrCallbackSerializer).o23 = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.n23_1;
    var composite = encoder.fj(descriptor);
    $l$block_0: {
      // Inline function 'app.cash.zipline.internal.bridge.ResultOrCallbackSerializer.serialize.<anonymous>' call
      if (!(value.q1x_1 == null)) {
        composite.tk(this.n23_1, 0, get_cancelCallbackSerializer(), value.q1x_1);
        break $l$block_0;
      }
      var result = ensureNotNull(value.p1x_1).ie_1;
      var throwable = Result__exceptionOrNull_impl_p6xea9(result);
      if (!(throwable == null)) {
        composite.tk(this.n23_1, 1, ThrowableSerializer_getInstance(), throwable);
        break $l$block_0;
      }
      // Inline function 'kotlin.Result.getOrNull' call
      var tmp;
      if (_Result___get_isFailure__impl__jpiriv(result)) {
        tmp = null;
      } else {
        var tmp_0 = _Result___get_value__impl__bjfvqg(result);
        tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      }
      var tmp_1 = tmp;
      composite.tk(this.n23_1, 2, this.m23_1, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
    }
    composite.gj(descriptor);
  };
  protoOf(ResultOrCallbackSerializer).wg = function (encoder, value) {
    return this.o23(encoder, value instanceof ResultOrCallback ? value : THROW_CCE());
  };
  protoOf(ResultOrCallbackSerializer).xg = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.n23_1;
    var composite = decoder.fj(descriptor);
    // Inline function 'app.cash.zipline.internal.bridge.ResultOrCallbackSerializer.deserialize.<anonymous>' call
    var result = null;
    var callback = null;
    $l$loop: while (true) {
      var index = composite.uj(this.n23_1);
      if (index === 0)
        callback = composite.sj(this.n23_1, 0, get_cancelCallbackSerializer());
      else {
        if (index === 1) {
          // Inline function 'kotlin.Companion.failure' call
          var exception = composite.sj(this.n23_1, 1, ThrowableSerializer_getInstance());
          var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
          result = new Result(tmp$ret$0);
        } else {
          if (index === 2) {
            // Inline function 'kotlin.Companion.success' call
            var value = composite.sj(this.n23_1, 2, this.m23_1);
            var tmp$ret$1 = _Result___init__impl__xyqfz8(value);
            result = new Result(tmp$ret$1);
          } else {
            if (index === -1)
              break $l$loop;
            else {
              var message = 'Unexpected index: ' + index;
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
    var result_0 = new ResultOrCallback(result, callback);
    composite.gj(descriptor);
    return result_0;
  };
  function EncodedResultOrCallback(value, json, serviceNames) {
    this.y1z_1 = value;
    this.z1z_1 = json;
    this.a20_1 = toList(serviceNames);
  }
  protoOf(EncodedResultOrCallback).b20 = function () {
    var tmp0_elvis_lhs = this.y1z_1.p1x_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs.ie_1;
    }
    var result = tmp;
    return new CallResult(result, this.z1z_1, this.a20_1);
  };
  function ResultOrCallback(result, callback) {
    result = result === VOID ? null : result;
    callback = callback === VOID ? null : callback;
    this.p1x_1 = result;
    this.q1x_1 = callback;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(this.q1x_1 == null) === !(this.p1x_1 == null))) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function unknownService($this) {
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$0 = emptyList();
    var tmp = new RealZiplineServiceType('Unknown', tmp$ret$0);
    return new InboundService(tmp, new RealCallSerializer$unknownService$1(), $this.p23_1);
  }
  function unknownFunction($this, functionId, suspendCallback, message) {
    if (!(suspendCallback == null)) {
      return new RealCallSerializer$unknownFunction$1(functionId, message);
    } else {
      return new RealCallSerializer$unknownFunction$2(functionId, message);
    }
  }
  function RealCallSerializer$descriptor$lambda($this$buildClassSerialDescriptor) {
    $this$buildClassSerialDescriptor.zg('service', serializer_0(StringCompanionObject_instance).jg());
    $this$buildClassSerialDescriptor.zg('function', serializer_0(StringCompanionObject_instance).jg());
    $this$buildClassSerialDescriptor.zg('callback', serializer_0(StringCompanionObject_instance).jg());
    $this$buildClassSerialDescriptor.zg('args', get_argsListDescriptor());
    return Unit_instance;
  }
  function RealCallSerializer$unknownService$1() {
  }
  function RealCallSerializer$unknownFunction$1($functionId, $message) {
    this.w23_1 = $message;
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$0 = emptyList();
    SuspendingZiplineFunction.call(this, $functionId, 'suspend fun unknownFunction(): kotlin.Unit', tmp$ret$0, serializer_1(IntCompanionObject_instance), get_failureSuspendCallbackSerializer());
  }
  protoOf(RealCallSerializer$unknownFunction$1).x23 = function (service, args, $completion) {
    throw new ZiplineApiMismatchException(this.w23_1);
  };
  protoOf(RealCallSerializer$unknownFunction$1).r1z = function (service, args, $completion) {
    return this.x23(isInterface(service, ZiplineService) ? service : THROW_CCE(), args, $completion);
  };
  function RealCallSerializer$unknownFunction$2($functionId, $message) {
    this.c24_1 = $message;
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$0 = emptyList();
    ReturningZiplineFunction.call(this, $functionId, 'fun unknownFunction(): kotlin.Unit', tmp$ret$0, serializer_1(IntCompanionObject_instance));
  }
  protoOf(RealCallSerializer$unknownFunction$2).c1t = function (service, args) {
    throw new ZiplineApiMismatchException(this.c24_1);
  };
  function RealCallSerializer(endpoint) {
    this.p23_1 = endpoint;
    var tmp = this;
    tmp.q23_1 = buildClassSerialDescriptor('RealCall', [], RealCallSerializer$descriptor$lambda);
  }
  protoOf(RealCallSerializer).jg = function () {
    return this.q23_1;
  };
  protoOf(RealCallSerializer).d24 = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.q23_1;
    var composite = encoder.fj(descriptor);
    // Inline function 'app.cash.zipline.internal.bridge.RealCallSerializer.serialize.<anonymous>' call
    composite.rk(this.q23_1, 0, value.y1w_1);
    composite.rk(this.q23_1, 1, value.a1x_1.h1t());
    if (!(value.b1x_1 == null)) {
      var tmp = value.a1x_1;
      var function_0 = tmp instanceof SuspendingZiplineFunction ? tmp : THROW_CCE();
      var tmp_0 = function_0.l1x_1;
      composite.tk(this.q23_1, 2, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE(), value.b1x_1);
      composite.tk(this.q23_1, 3, function_0.m1x_1, value.c1x_1);
    } else {
      var tmp_1 = value.a1x_1;
      var function_1 = tmp_1 instanceof ReturningZiplineFunction ? tmp_1 : THROW_CCE();
      composite.tk(this.q23_1, 3, function_1.f1t_1, value.c1x_1);
    }
    composite.gj(descriptor);
  };
  protoOf(RealCallSerializer).wg = function (encoder, value) {
    return this.d24(encoder, value instanceof InternalCall ? value : THROW_CCE());
  };
  protoOf(RealCallSerializer).xg = function (decoder) {
    var pushedTakeScope = this.p23_1.t1w_1;
    try {
      // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
      var descriptor = this.q23_1;
      var composite = decoder.fj(descriptor);
      // Inline function 'app.cash.zipline.internal.bridge.RealCallSerializer.deserialize.<anonymous>' call
      var serviceName = '';
      var inboundService = null;
      var functionId = '';
      var function_0 = null;
      var suspendCallback = null;
      // Inline function 'kotlin.collections.listOf' call
      var args = emptyList();
      $l$loop: while (true) {
        var index = composite.uj(this.q23_1);
        if (index === 0) {
          serviceName = composite.pj(this.q23_1, index);
          inboundService = this.p23_1.q1w_1.h2(serviceName);
          var tmp = this.p23_1;
          var tmp0_safe_receiver = inboundService;
          var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f1x_1;
          var tmp1_safe_receiver = (!(tmp_0 == null) ? isInterface(tmp_0, ZiplineScoped) : false) ? tmp_0 : null;
          tmp.t1w_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.u1s();
        } else {
          if (index === 1) {
            functionId = composite.pj(this.q23_1, index);
            var tmp2_safe_receiver = inboundService;
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.e1x_1;
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.d22_1;
            function_0 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.h2(functionId);
          } else {
            if (index === 2) {
              var tmp_1;
              if (function_0 instanceof SuspendingZiplineFunction) {
                tmp_1 = function_0.l1x_1;
              } else {
                tmp_1 = get_failureSuspendCallbackSerializer();
              }
              var tmp_2 = tmp_1;
              var serializer = isInterface(tmp_2, KSerializer) ? tmp_2 : THROW_CCE();
              suspendCallback = composite.sj(this.q23_1, index, serializer);
            } else {
              if (index === 3) {
                var tmp6_subject = function_0;
                var tmp_3;
                if (tmp6_subject instanceof SuspendingZiplineFunction) {
                  tmp_3 = function_0.m1x_1;
                } else {
                  if (tmp6_subject instanceof ReturningZiplineFunction) {
                    tmp_3 = function_0.f1t_1;
                  } else {
                    tmp_3 = null;
                  }
                }
                var argsListSerializer = tmp_3;
                if (!(argsListSerializer == null)) {
                  args = composite.sj(this.q23_1, index, argsListSerializer);
                } else {
                  (isInterface(decoder, JsonDecoder) ? decoder : THROW_CCE()).m10();
                }
              } else {
                if (index === -1)
                  break $l$loop;
                else {
                  var message = 'Unexpected index: ' + index;
                  throw IllegalStateException_init_$Create$(toString(message));
                }
              }
            }
          }
        }
      }
      var tmp_4 = serviceName;
      var tmp7_elvis_lhs = inboundService;
      var tmp_5 = tmp7_elvis_lhs == null ? unknownService(this) : tmp7_elvis_lhs;
      var tmp9_elvis_lhs = function_0;
      var tmp_6;
      if (tmp9_elvis_lhs == null) {
        var tmp_7 = functionId;
        var tmp_8 = suspendCallback;
        var tmp_9;
        if (inboundService == null) {
          tmp_9 = '<unknown service>';
        } else {
          tmp_9 = '<unknown function>';
        }
        tmp_6 = unknownFunction(this, tmp_7, tmp_8, tmp_9);
      } else {
        tmp_6 = tmp9_elvis_lhs;
      }
      var result = new InternalCall(tmp_4, tmp_5, tmp_6, suspendCallback, args);
      composite.gj(descriptor);
      return result;
    }finally {
      this.p23_1.t1w_1 = pushedTakeScope;
    }
  };
  var properties_initialized_calls_kt_hvm7y3;
  function _init_properties_calls_kt__icry7x() {
    if (!properties_initialized_calls_kt_hvm7y3) {
      properties_initialized_calls_kt_hvm7y3 = true;
      argsListDescriptor = ListSerializer(serializer_1(IntCompanionObject_instance)).jg();
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_0 = serializer_2(createKType(PrimitiveClasses_getInstance().n6(), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
      failureSuspendCallbackSerializer = ziplineServiceSerializer(new Adapter_2(listOf([tmp$ret$1]), 'app.cash.zipline.internal.bridge.SuspendCallback<kotlin.Int>'));
      cancelCallbackSerializer = ziplineServiceSerializer(new Adapter_1(listOf([]), 'app.cash.zipline.internal.bridge.CancelCallback'));
    }
  }
  function FlowZiplineCollector$emit$ref($boundThis) {
    this.e24_1 = $boundThis;
  }
  protoOf(FlowZiplineCollector$emit$ref).f24 = function (p0, $completion) {
    return this.e24_1.i1o(p0, $completion);
  };
  protoOf(FlowZiplineCollector$emit$ref).eb = function (p1, $completion) {
    return this.f24((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  function FlowZiplineCollector$emit$ref_0($boundThis) {
    var i = new FlowZiplineCollector$emit$ref($boundThis);
    var l = function (p0, $completion) {
      return i.f24(p0, $completion);
    };
    l.callableName = 'emit';
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o24_1 = _this__u8e3s4;
    this.p24_1 = collector;
  }
  protoOf($collectCOROUTINE$1).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 5;
            this.ea_1 = 1;
            continue $sm;
          case 1:
            this.fa_1 = 4;
            this.ea_1 = 2;
            var tmp_0 = FlowZiplineCollector$emit$ref_0(this.p24_1);
            suspendResult = this.o24_1.r24_1.p1n(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q24_1 = suspendResult;
            this.fa_1 = 5;
            this.ea_1 = 3;
            continue $sm;
          case 3:
            this.p24_1.v1s();
            return Unit_instance;
          case 4:
            this.fa_1 = 5;
            var t = this.ha_1;
            this.p24_1.v1s();
            throw t;
          case 5:
            throw this.ha_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.fa_1 === 5) {
          throw e;
        } else {
          this.ea_1 = this.fa_1;
          this.ha_1 = e;
        }
      }
     while (true);
  };
  function FlowSerializer$toFlow$1$1($this_channelFlow) {
    this.s24_1 = $this_channelFlow;
  }
  protoOf(FlowSerializer$toFlow$1$1).i1o = function (value, $completion) {
    return this.s24_1.p1l(value, $completion);
  };
  function toZiplineService(_this__u8e3s4, $this) {
    return new FlowSerializer$toZiplineService$1(_this__u8e3s4);
  }
  function toFlow(_this__u8e3s4, $this) {
    return channelFlow(FlowSerializer$toFlow$slambda_0(_this__u8e3s4, null));
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.t24_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).i1o = function (value, $completion) {
    return this.t24_1(value, $completion);
  };
  function FlowSerializer$toZiplineService$1($this_toZiplineService) {
    this.r24_1 = $this_toZiplineService;
  }
  protoOf(FlowSerializer$toZiplineService$1).u24 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  };
  protoOf(FlowSerializer$toZiplineService$1).toString = function () {
    return toString(this.r24_1);
  };
  function FlowSerializer$toFlow$slambda($this_toFlow, resultContinuation) {
    this.d25_1 = $this_toFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FlowSerializer$toFlow$slambda).l1p = function ($this$channelFlow, $completion) {
    var tmp = this.m1p($this$channelFlow, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  };
  protoOf(FlowSerializer$toFlow$slambda).eb = function (p1, $completion) {
    return this.l1p((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FlowSerializer$toFlow$slambda).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 2;
            this.ea_1 = 1;
            suspendResult = this.d25_1.u24(new FlowSerializer$toFlow$1$1(this.e25_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.ha_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.fa_1 === 2) {
          throw e;
        } else {
          this.ea_1 = this.fa_1;
          this.ha_1 = e;
        }
      }
     while (true);
  };
  protoOf(FlowSerializer$toFlow$slambda).m1p = function ($this$channelFlow, completion) {
    var i = new FlowSerializer$toFlow$slambda(this.d25_1, completion);
    i.e25_1 = $this$channelFlow;
    return i;
  };
  function FlowSerializer$toFlow$slambda_0($this_toFlow, resultContinuation) {
    var i = new FlowSerializer$toFlow$slambda($this_toFlow, resultContinuation);
    var l = function ($this$channelFlow, $completion) {
      return i.l1p($this$channelFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FlowSerializer(delegateSerializer) {
    this.f25_1 = delegateSerializer;
    this.g25_1 = this.f25_1.jg();
  }
  protoOf(FlowSerializer).jg = function () {
    return this.g25_1;
  };
  protoOf(FlowSerializer).h25 = function (encoder, value) {
    var service = toZiplineService(value, this);
    return encoder.vg(this.f25_1, service);
  };
  protoOf(FlowSerializer).wg = function (encoder, value) {
    return this.h25(encoder, (!(value == null) ? isInterface(value, Flow) : false) ? value : THROW_CCE());
  };
  protoOf(FlowSerializer).xg = function (decoder) {
    var service = decoder.yg(this.f25_1);
    return toFlow(service, this);
  };
  protoOf(FlowSerializer).equals = function (other) {
    var tmp;
    if (other instanceof FlowSerializer) {
      tmp = equals(other.f25_1, this.f25_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(FlowSerializer).hashCode = function () {
    return hashCode(this.f25_1);
  };
  function $collectCOROUTINE$2($this, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q25_1 = $this;
    this.r25_1 = collector;
  }
  protoOf($collectCOROUTINE$2).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 2;
            this.s25_1 = this.q25_1.t25_1;
            this.ea_1 = 1;
            suspendResult = this.s25_1.a22(this.q25_1, 0, [this.r25_1], this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!(suspendResult instanceof Unit))
              THROW_CCE();
            return Unit_instance;
          case 2:
            throw this.ha_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.fa_1 === 2) {
          throw e;
        } else {
          this.ea_1 = this.fa_1;
          this.ha_1 = e;
        }
      }
     while (true);
  };
  function ZiplineFunction0_3(argSerializers, resultSerializer, suspendCallbackSerializer) {
    SuspendingZiplineFunction.call(this, 'cdZduhGd', 'suspend fun collect(app.cash.zipline.internal.bridge.FlowZiplineCollector<T>): kotlin.Unit', argSerializers, resultSerializer, suspendCallbackSerializer);
  }
  protoOf(ZiplineFunction0_3).z25 = function (service, args, $completion) {
    var tmp = args.d1(0);
    return service.u24((!(tmp == null) ? isInterface(tmp, FlowZiplineCollector) : false) ? tmp : THROW_CCE(), $completion);
  };
  protoOf(ZiplineFunction0_3).r1z = function (service, args, $completion) {
    return this.z25(isInterface(service, FlowZiplineService) ? service : THROW_CCE(), args, $completion);
  };
  function ZiplineFunction1_3(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'moYx+T3e', 'fun close(): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction1_3).e26 = function (service, args) {
    service.v1s();
    return Unit_instance;
  };
  protoOf(ZiplineFunction1_3).c1t = function (service, args) {
    return this.e26(isInterface(service, FlowZiplineService) ? service : THROW_CCE(), args);
  };
  function GeneratedOutboundService_3(callHandler) {
    this.t25_1 = callHandler;
  }
  protoOf(GeneratedOutboundService_3).f26 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$2(this, collector, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  };
  protoOf(GeneratedOutboundService_3).u24 = function (collector, $completion) {
    return this.f26(collector, $completion);
  };
  protoOf(GeneratedOutboundService_3).v1s = function () {
    var tmp0_callHandler = this.t25_1;
    var tmp = tmp0_callHandler.f1u(this, 1, []);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  function Adapter_3(serializers, serialName) {
    ZiplineServiceAdapter.call(this);
    this.i26_1 = serialName;
    this.j26_1 = 'FlowZiplineService';
    this.k26_1 = serializers;
  }
  protoOf(Adapter_3).oh = function () {
    return this.i26_1;
  };
  protoOf(Adapter_3).q5 = function () {
    return this.j26_1;
  };
  protoOf(Adapter_3).l1u = function () {
    return this.k26_1;
  };
  protoOf(Adapter_3).m1u = function (serializersModule) {
    var tmp0_serializers = this.k26_1;
    var tmp1_serializers = listOf([tmp0_serializers.d1(0)]);
    var tmp1_serializer = new Adapter_5(tmp1_serializers, serialName('app.cash.zipline.internal.bridge.FlowZiplineCollector', tmp1_serializers));
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(serializersModule, createKType(getKClass(Unit), arrayOf([]), false));
    var tmp2_serializer = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(serializersModule, createKType(getKClass(Unit), arrayOf([]), false));
    var tmp$ret$3 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    var tmp2_serializers = listOf([tmp$ret$3]);
    var tmp3_serializer = new Adapter_2(tmp2_serializers, serialName('app.cash.zipline.internal.bridge.SuspendCallback', tmp2_serializers));
    return listOf([new ZiplineFunction0_3(listOf([tmp1_serializer]), tmp2_serializer, tmp3_serializer), new ZiplineFunction1_3(listOf([]), tmp2_serializer)]);
  };
  protoOf(Adapter_3).n1u = function (callHandler) {
    return new GeneratedOutboundService_3(callHandler);
  };
  function FlowZiplineService() {
  }
  function FlowZiplineCollector$emit$ref_1($boundThis) {
    this.l26_1 = $boundThis;
  }
  protoOf(FlowZiplineCollector$emit$ref_1).f24 = function (p0, $completion) {
    return this.l26_1.i1o(p0, $completion);
  };
  protoOf(FlowZiplineCollector$emit$ref_1).eb = function (p1, $completion) {
    return this.f24((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  function FlowZiplineCollector$emit$ref_2($boundThis) {
    var i = new FlowZiplineCollector$emit$ref_1($boundThis);
    var l = function (p0, $completion) {
      return i.f24(p0, $completion);
    };
    l.callableName = 'emit';
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$3(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u26_1 = _this__u8e3s4;
    this.v26_1 = collector;
  }
  protoOf($collectCOROUTINE$3).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 5;
            this.ea_1 = 1;
            continue $sm;
          case 1:
            this.fa_1 = 4;
            this.ea_1 = 2;
            var tmp_0 = FlowZiplineCollector$emit$ref_2(this.v26_1);
            suspendResult = this.u26_1.x26_1.a1p(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w26_1 = throwKotlinNothingValueException();
            this.fa_1 = 5;
            this.ea_1 = 3;
            continue $sm;
          case 3:
            this.v26_1.v1s();
            return Unit_instance;
          case 4:
            this.fa_1 = 5;
            var t = this.ha_1;
            this.v26_1.v1s();
            throw t;
          case 5:
            throw this.ha_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.fa_1 === 5) {
          throw e;
        } else {
          this.ea_1 = this.fa_1;
          this.ha_1 = e;
        }
      }
     while (true);
  };
  function StateFlowSerializer$toStateFlow$1$collect$2$1($this_channelFlow) {
    this.y26_1 = $this_channelFlow;
  }
  protoOf(StateFlowSerializer$toStateFlow$1$collect$2$1).i1o = function (value, $completion) {
    return this.y26_1.p1l(value, $completion);
  };
  function StateFlowSerializer$toStateFlow$o$collect$slambda($this_toStateFlow, resultContinuation) {
    this.h27_1 = $this_toStateFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateFlowSerializer$toStateFlow$o$collect$slambda).l1p = function ($this$channelFlow, $completion) {
    var tmp = this.m1p($this$channelFlow, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  };
  protoOf(StateFlowSerializer$toStateFlow$o$collect$slambda).eb = function (p1, $completion) {
    return this.l1p((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateFlowSerializer$toStateFlow$o$collect$slambda).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 2;
            this.ea_1 = 1;
            suspendResult = this.h27_1.u24(new StateFlowSerializer$toStateFlow$1$collect$2$1(this.i27_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.ha_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.fa_1 === 2) {
          throw e;
        } else {
          this.ea_1 = this.fa_1;
          this.ha_1 = e;
        }
      }
     while (true);
  };
  protoOf(StateFlowSerializer$toStateFlow$o$collect$slambda).m1p = function ($this$channelFlow, completion) {
    var i = new StateFlowSerializer$toStateFlow$o$collect$slambda(this.h27_1, completion);
    i.i27_1 = $this$channelFlow;
    return i;
  };
  function StateFlowSerializer$toStateFlow$o$collect$slambda_0($this_toStateFlow, resultContinuation) {
    var i = new StateFlowSerializer$toStateFlow$o$collect$slambda($this_toStateFlow, resultContinuation);
    var l = function ($this$channelFlow, $completion) {
      return i.l1p($this$channelFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$4(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r27_1 = _this__u8e3s4;
    this.s27_1 = collector;
  }
  protoOf($collectCOROUTINE$4).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 2;
            this.ea_1 = 1;
            suspendResult = channelFlow(StateFlowSerializer$toStateFlow$o$collect$slambda_0(this.r27_1.t27_1, null)).p1n(this.s27_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throw AssertionError_init_$Create$();
          case 2:
            throw this.ha_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.fa_1 === 2) {
          throw e;
        } else {
          this.ea_1 = this.fa_1;
          this.ha_1 = e;
        }
      }
     while (true);
  };
  function toZiplineService_0(_this__u8e3s4, $this) {
    return new StateFlowSerializer$toZiplineService$1(_this__u8e3s4);
  }
  function toStateFlow(_this__u8e3s4, $this) {
    return new StateFlowSerializer$toStateFlow$1(_this__u8e3s4);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.u27_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).i1o = function (value, $completion) {
    return this.u27_1(value, $completion);
  };
  function StateFlowSerializer$toZiplineService$1($this_toZiplineService) {
    this.x26_1 = $this_toZiplineService;
  }
  protoOf(StateFlowSerializer$toZiplineService$1).u24 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$3(this, collector, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  };
  protoOf(StateFlowSerializer$toZiplineService$1).c2 = function () {
    return this.x26_1.c2();
  };
  protoOf(StateFlowSerializer$toZiplineService$1).toString = function () {
    return toString(this.x26_1);
  };
  function StateFlowSerializer$toStateFlow$1($this_toStateFlow) {
    this.t27_1 = $this_toStateFlow;
  }
  protoOf(StateFlowSerializer$toStateFlow$1).a1p = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$4(this, collector, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  };
  protoOf(StateFlowSerializer$toStateFlow$1).p1n = function (collector, $completion) {
    return this.a1p(collector, $completion);
  };
  protoOf(StateFlowSerializer$toStateFlow$1).c2 = function () {
    return this.t27_1.c2();
  };
  function StateFlowSerializer(delegateSerializer) {
    this.v27_1 = delegateSerializer;
    this.w27_1 = this.v27_1.jg();
  }
  protoOf(StateFlowSerializer).jg = function () {
    return this.w27_1;
  };
  protoOf(StateFlowSerializer).x27 = function (encoder, value) {
    var service = toZiplineService_0(value, this);
    return encoder.vg(this.v27_1, service);
  };
  protoOf(StateFlowSerializer).wg = function (encoder, value) {
    return this.x27(encoder, (!(value == null) ? isInterface(value, StateFlow) : false) ? value : THROW_CCE());
  };
  protoOf(StateFlowSerializer).xg = function (decoder) {
    var service = decoder.yg(this.v27_1);
    return toStateFlow(service, this);
  };
  protoOf(StateFlowSerializer).equals = function (other) {
    var tmp;
    if (other instanceof StateFlowSerializer) {
      tmp = equals(other.v27_1, this.v27_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StateFlowSerializer).hashCode = function () {
    return hashCode(this.v27_1);
  };
  function $collectCOROUTINE$5($this, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g28_1 = $this;
    this.h28_1 = collector;
  }
  protoOf($collectCOROUTINE$5).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 2;
            this.i28_1 = this.g28_1.j28_1;
            this.ea_1 = 1;
            suspendResult = this.i28_1.a22(this.g28_1, 0, [this.h28_1], this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!(suspendResult instanceof Unit))
              THROW_CCE();
            return Unit_instance;
          case 2:
            throw this.ha_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.fa_1 === 2) {
          throw e;
        } else {
          this.ea_1 = this.fa_1;
          this.ha_1 = e;
        }
      }
     while (true);
  };
  function ZiplineFunction0_4(argSerializers, resultSerializer, suspendCallbackSerializer) {
    SuspendingZiplineFunction.call(this, 'cdZduhGd', 'suspend fun collect(app.cash.zipline.internal.bridge.FlowZiplineCollector<T>): kotlin.Unit', argSerializers, resultSerializer, suspendCallbackSerializer);
  }
  protoOf(ZiplineFunction0_4).p28 = function (service, args, $completion) {
    var tmp = args.d1(0);
    return service.u24((!(tmp == null) ? isInterface(tmp, FlowZiplineCollector) : false) ? tmp : THROW_CCE(), $completion);
  };
  protoOf(ZiplineFunction0_4).r1z = function (service, args, $completion) {
    return this.p28(isInterface(service, StateFlowZiplineService) ? service : THROW_CCE(), args, $completion);
  };
  function ZiplineFunction1_4(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'moYx+T3e', 'fun close(): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction1_4).u28 = function (service, args) {
    service.v1s();
    return Unit_instance;
  };
  protoOf(ZiplineFunction1_4).c1t = function (service, args) {
    return this.u28(isInterface(service, StateFlowZiplineService) ? service : THROW_CCE(), args);
  };
  function ZiplineFunction2_2(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, '+2qMKzhx', 'val value: T', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction2_2).u28 = function (service, args) {
    return service.c2();
  };
  protoOf(ZiplineFunction2_2).c1t = function (service, args) {
    return this.u28(isInterface(service, StateFlowZiplineService) ? service : THROW_CCE(), args);
  };
  function GeneratedOutboundService_4(callHandler) {
    this.j28_1 = callHandler;
  }
  protoOf(GeneratedOutboundService_4).f26 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$5(this, collector, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  };
  protoOf(GeneratedOutboundService_4).u24 = function (collector, $completion) {
    return this.f26(collector, $completion);
  };
  protoOf(GeneratedOutboundService_4).v1s = function () {
    var tmp0_callHandler = this.j28_1;
    var tmp = tmp0_callHandler.f1u(this, 1, []);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  protoOf(GeneratedOutboundService_4).c2 = function () {
    var tmp0_callHandler = this.j28_1;
    var tmp = tmp0_callHandler.f1u(this, 2, []);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function Adapter_4(serializers, serialName) {
    ZiplineServiceAdapter.call(this);
    this.b29_1 = serialName;
    this.c29_1 = 'StateFlowZiplineService';
    this.d29_1 = serializers;
  }
  protoOf(Adapter_4).oh = function () {
    return this.b29_1;
  };
  protoOf(Adapter_4).q5 = function () {
    return this.c29_1;
  };
  protoOf(Adapter_4).l1u = function () {
    return this.d29_1;
  };
  protoOf(Adapter_4).m1u = function (serializersModule) {
    var tmp0_serializers = this.d29_1;
    var tmp0_serializers_0 = listOf([tmp0_serializers.d1(0)]);
    var tmp1_serializer = new Adapter_5(tmp0_serializers_0, serialName('app.cash.zipline.internal.bridge.FlowZiplineCollector', tmp0_serializers_0));
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(serializersModule, createKType(getKClass(Unit), arrayOf([]), false));
    var tmp2_serializer = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(serializersModule, createKType(getKClass(Unit), arrayOf([]), false));
    var tmp$ret$3 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    var tmp1_serializers = listOf([tmp$ret$3]);
    var tmp3_serializer = new Adapter_2(tmp1_serializers, serialName('app.cash.zipline.internal.bridge.SuspendCallback', tmp1_serializers));
    var tmp4_serializer = tmp0_serializers.d1(0);
    return listOf([new ZiplineFunction0_4(listOf([tmp1_serializer]), tmp2_serializer, tmp3_serializer), new ZiplineFunction1_4(listOf([]), tmp2_serializer), new ZiplineFunction2_2(listOf([]), tmp4_serializer)]);
  };
  protoOf(Adapter_4).n1u = function (callHandler) {
    return new GeneratedOutboundService_4(callHandler);
  };
  function StateFlowZiplineService() {
  }
  function $emitCOROUTINE$6($this, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m29_1 = $this;
    this.n29_1 = value;
  }
  protoOf($emitCOROUTINE$6).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 2;
            this.o29_1 = this.m29_1.p29_1;
            this.ea_1 = 1;
            suspendResult = this.o29_1.a22(this.m29_1, 0, [this.n29_1], this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!(suspendResult instanceof Unit))
              THROW_CCE();
            return Unit_instance;
          case 2:
            throw this.ha_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.fa_1 === 2) {
          throw e;
        } else {
          this.ea_1 = this.fa_1;
          this.ha_1 = e;
        }
      }
     while (true);
  };
  function ZiplineFunction0_5(argSerializers, resultSerializer, suspendCallbackSerializer) {
    SuspendingZiplineFunction.call(this, 'onkYO9kU', 'suspend fun emit(T): kotlin.Unit', argSerializers, resultSerializer, suspendCallbackSerializer);
  }
  protoOf(ZiplineFunction0_5).v29 = function (service, args, $completion) {
    var tmp = args.d1(0);
    return service.i1o((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE(), $completion);
  };
  protoOf(ZiplineFunction0_5).r1z = function (service, args, $completion) {
    return this.v29(isInterface(service, FlowZiplineCollector) ? service : THROW_CCE(), args, $completion);
  };
  function ZiplineFunction1_5(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'moYx+T3e', 'fun close(): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction1_5).a2a = function (service, args) {
    service.v1s();
    return Unit_instance;
  };
  protoOf(ZiplineFunction1_5).c1t = function (service, args) {
    return this.a2a(isInterface(service, FlowZiplineCollector) ? service : THROW_CCE(), args);
  };
  function GeneratedOutboundService_5(callHandler) {
    this.p29_1 = callHandler;
  }
  protoOf(GeneratedOutboundService_5).b2a = function (value, $completion) {
    var tmp = new $emitCOROUTINE$6(this, value, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  };
  protoOf(GeneratedOutboundService_5).i1o = function (value, $completion) {
    return this.b2a((value == null ? true : !(value == null)) ? value : THROW_CCE(), $completion);
  };
  protoOf(GeneratedOutboundService_5).v1s = function () {
    var tmp0_callHandler = this.p29_1;
    var tmp = tmp0_callHandler.f1u(this, 1, []);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  function Adapter_5(serializers, serialName) {
    ZiplineServiceAdapter.call(this);
    this.e2a_1 = serialName;
    this.f2a_1 = 'FlowZiplineCollector';
    this.g2a_1 = serializers;
  }
  protoOf(Adapter_5).oh = function () {
    return this.e2a_1;
  };
  protoOf(Adapter_5).q5 = function () {
    return this.f2a_1;
  };
  protoOf(Adapter_5).l1u = function () {
    return this.g2a_1;
  };
  protoOf(Adapter_5).m1u = function (serializersModule) {
    var tmp0_serializers = this.g2a_1;
    var tmp1_serializer = tmp0_serializers.d1(0);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(serializersModule, createKType(getKClass(Unit), arrayOf([]), false));
    var tmp2_serializer = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(serializersModule, createKType(getKClass(Unit), arrayOf([]), false));
    var tmp$ret$3 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    var tmp0_serializers_0 = listOf([tmp$ret$3]);
    var tmp3_serializer = new Adapter_2(tmp0_serializers_0, serialName('app.cash.zipline.internal.bridge.SuspendCallback', tmp0_serializers_0));
    return listOf([new ZiplineFunction0_5(listOf([tmp1_serializer]), tmp2_serializer, tmp3_serializer), new ZiplineFunction1_5(listOf([]), tmp2_serializer)]);
  };
  protoOf(Adapter_5).n1u = function (callHandler) {
    return new GeneratedOutboundService_5(callHandler);
  };
  function FlowZiplineCollector() {
  }
  function requireContextual(_this__u8e3s4, kClass, typeArgumentsSerializers) {
    var tmp0_elvis_lhs = _this__u8e3s4.ig(kClass, typeArgumentsSerializers);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'No contextual serializer for ' + kClass + ' is registered';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    return isInterface(result, KSerializer) ? result : THROW_CCE();
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.h2a_1 = PrimitiveSerialDescriptor('LongSerializer', LONG_getInstance());
    this.i2a_1 = new Long(1, -2097152);
    this.j2a_1 = new Long(-1, 2097151);
  }
  protoOf(LongSerializer).jg = function () {
    return this.h2a_1;
  };
  protoOf(LongSerializer).xg = function (decoder) {
    var jsonElement = (isInterface(decoder, JsonDecoder) ? decoder : THROW_CCE()).m10();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (jsonElement instanceof JsonArray) {
      tmp_1 = true;
    } else {
      tmp_1 = jsonElement instanceof JsonObject;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = equals(jsonElement, JsonNull_getInstance());
    }
    if (tmp_0) {
      throw SerializationException_init_$Create$('expected a Long');
    } else {
      if (jsonElement instanceof JsonPrimitive) {
        tmp = get_long(jsonElement);
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  };
  protoOf(LongSerializer).iv = function (encoder, value) {
    if ((new Long(1, -2097152)).n5(value) <= 0 ? value.n5(new Long(-1, 2097151)) <= 0 : false) {
      encoder.dk(value);
    } else {
      encoder.hk(value.toString());
    }
  };
  protoOf(LongSerializer).wg = function (encoder, value) {
    return this.iv(encoder, value instanceof Long ? value : THROW_CCE());
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function PassByReference() {
  }
  function SendByReference(service, adapter) {
    this.k2a_1 = service;
    this.l2a_1 = adapter;
  }
  protoOf(SendByReference).m2a = function (endpoint, name) {
    endpoint.t1y(name, this.k2a_1, this.l2a_1);
  };
  function ReceiveByReference(name, endpoint) {
    this.e23_1 = name;
    this.f23_1 = endpoint;
  }
  protoOf(ReceiveByReference).g23 = function (adapter) {
    var tmp0_elvis_lhs = this.f23_1.t1w_1;
    var scope = tmp0_elvis_lhs == null ? new ZiplineScope() : tmp0_elvis_lhs;
    return this.f23_1.u1y(this.e23_1, scope, adapter);
  };
  function PassByReferenceSerializer(endpoint) {
    this.n2a_1 = endpoint;
    this.o2a_1 = PrimitiveSerialDescriptor('PassByReference', STRING_getInstance());
  }
  protoOf(PassByReferenceSerializer).jg = function () {
    return this.o2a_1;
  };
  protoOf(PassByReferenceSerializer).p2a = function (encoder, value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value instanceof SendByReference)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var serviceName = this.n2a_1.y1y();
    var tmp = value.k2a_1;
    if (isInterface(tmp, HasPassByReferenceName)) {
      value.k2a_1.v1z(serviceName);
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.n2a_1.v1w_1.h1w_1.p(serviceName);
    value.m2a(this.n2a_1, serviceName);
    encoder.hk(serviceName);
  };
  protoOf(PassByReferenceSerializer).wg = function (encoder, value) {
    return this.p2a(encoder, (!(value == null) ? isInterface(value, PassByReference) : false) ? value : THROW_CCE());
  };
  protoOf(PassByReferenceSerializer).xg = function (decoder) {
    var serviceName = decoder.cj();
    // Inline function 'kotlin.collections.plusAssign' call
    this.n2a_1.v1w_1.g1w_1.p(serviceName);
    return new ReceiveByReference(serviceName, this.n2a_1);
  };
  function HasPassByReferenceName() {
  }
  function knownTypeNames($this, throwable) {
    var tmp;
    if (throwable instanceof ZiplineApiMismatchException) {
      tmp = listOf_0('ZiplineApiMismatchException');
    } else {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    }
    return tmp;
  }
  function knownTypeConstructor($this, typeName) {
    var tmp;
    if (typeName === 'ZiplineApiMismatchException') {
      tmp = ZiplineApiMismatchException$_init_$ref_cua33r();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ThrowableSerializer$deserialize$lambda(message) {
    return new ZiplineException(message);
  }
  function ZiplineApiMismatchException$_init_$ref_cua33r() {
    var l = function (p0) {
      return new ZiplineApiMismatchException(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function ThrowableSerializer() {
    ThrowableSerializer_instance = this;
    this.k23_1 = Companion_getInstance_1().n10();
    this.l23_1 = this.k23_1.jg();
  }
  protoOf(ThrowableSerializer).jg = function () {
    return this.l23_1;
  };
  protoOf(ThrowableSerializer).r2a = function (encoder, value) {
    var stacktraceString_0 = stacktraceString(value);
    var typeNames = knownTypeNames(this, value);
    encoder.vg(this.k23_1, new ThrowableSurrogate(typeNames, stacktraceString_0));
  };
  protoOf(ThrowableSerializer).wg = function (encoder, value) {
    return this.r2a(encoder, value instanceof Error ? value : THROW_CCE());
  };
  protoOf(ThrowableSerializer).xg = function (decoder) {
    var surrogate = decoder.yg(this.k23_1);
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      var tmp0_iterator = surrogate.s2a_1.s();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.v();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'app.cash.zipline.internal.bridge.ThrowableSerializer.deserialize.<anonymous>' call
          var tmp0_elvis_lhs = knownTypeConstructor(ThrowableSerializer_getInstance(), element);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            tmp$ret$0 = null;
            break $l$block;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var constructor = tmp;
          tmp$ret$0 = to(element, constructor);
        }
        var result = tmp$ret$0;
        if (!(result == null)) {
          tmp$ret$1 = result;
          break $l$block_0;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs_0 = tmp$ret$1;
    var tmp_0;
    if (tmp0_elvis_lhs_0 == null) {
      tmp_0 = to('ZiplineException', ThrowableSerializer$deserialize$lambda);
    } else {
      tmp_0 = tmp0_elvis_lhs_0;
    }
    var typeNameToConstructor = tmp_0;
    var typeName = typeNameToConstructor.cc();
    var constructor_0 = typeNameToConstructor.dc();
    var stacktraceString = surrogate.t2a_1;
    if (startsWith(stacktraceString, typeName) ? regionMatches(stacktraceString, typeName.length, ': ', 0, 2) : false) {
      // Inline function 'kotlin.text.substring' call
      var this_0 = stacktraceString;
      var startIndex = typeName.length + 2 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      stacktraceString = this_0.substring(startIndex);
    }
    return toInboundThrowable(stacktraceString, constructor_0);
  };
  var ThrowableSerializer_instance;
  function ThrowableSerializer_getInstance() {
    if (ThrowableSerializer_instance == null)
      new ThrowableSerializer();
    return ThrowableSerializer_instance;
  }
  function Companion_1() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q2a_1 = [new ArrayListSerializer(StringSerializer_getInstance()), null];
  }
  protoOf(Companion_1).n10 = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_3;
  function Companion_getInstance_1() {
    if (Companion_instance_3 == null)
      new Companion_1();
    return Companion_instance_3;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.cash.zipline.internal.bridge.ThrowableSurrogate', this, 2);
    tmp0_serialDesc.yp('types', false);
    tmp0_serialDesc.yp('stacktraceString', false);
    this.u2a_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).jg = function () {
    return this.u2a_1;
  };
  protoOf($serializer_0).aq = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_1().q2a_1[0], StringSerializer_getInstance()];
  };
  protoOf($serializer_0).xg = function (decoder) {
    var tmp0_desc = this.u2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.fj(tmp0_desc);
    var tmp7_cached = Companion_getInstance_1().q2a_1;
    if (tmp6_input.tj()) {
      tmp4_local0 = tmp6_input.rj(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.pj(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.uj(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.rj(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.pj(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.gj(tmp0_desc);
    return ThrowableSurrogate_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).v2a = function (encoder, value) {
    var tmp0_desc = this.u2a_1;
    var tmp1_output = encoder.fj(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().q2a_1;
    tmp1_output.tk(tmp0_desc, 0, tmp2_cached[0], value.s2a_1);
    tmp1_output.rk(tmp0_desc, 1, value.t2a_1);
    tmp1_output.gj(tmp0_desc);
  };
  protoOf($serializer_0).wg = function (encoder, value) {
    return this.v2a(encoder, value instanceof ThrowableSurrogate ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function ThrowableSurrogate_init_$Init$(seen1, types, stacktraceString, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_0().u2a_1);
    }
    $this.s2a_1 = types;
    $this.t2a_1 = stacktraceString;
    return $this;
  }
  function ThrowableSurrogate_init_$Create$(seen1, types, stacktraceString, serializationConstructorMarker) {
    return ThrowableSurrogate_init_$Init$(seen1, types, stacktraceString, serializationConstructorMarker, objectCreate(protoOf(ThrowableSurrogate)));
  }
  function ThrowableSurrogate(types, stacktraceString) {
    Companion_getInstance_1();
    this.s2a_1 = types;
    this.t2a_1 = stacktraceString;
  }
  function ReturningZiplineFunction(id, signature, argSerializers, resultSerializer) {
    this.d1t_1 = id;
    this.e1t_1 = signature;
    this.f1t_1 = new ArgsListSerializer(argSerializers);
    this.g1t_1 = new ResultOrCallbackSerializer(resultSerializer);
  }
  protoOf(ReturningZiplineFunction).h1t = function () {
    return this.d1t_1;
  };
  protoOf(ReturningZiplineFunction).j1s = function () {
    return this.e1t_1;
  };
  protoOf(ReturningZiplineFunction).i1t = function () {
    return false;
  };
  protoOf(ReturningZiplineFunction).j1t = function () {
    return this.j1s() === 'fun close(): kotlin.Unit';
  };
  protoOf(ReturningZiplineFunction).toString = function () {
    return this.j1s();
  };
  function SuspendingZiplineFunction(id, signature, argSerializers, resultSerializer, suspendCallbackSerializer) {
    this.j1x_1 = id;
    this.k1x_1 = signature;
    this.l1x_1 = suspendCallbackSerializer;
    this.m1x_1 = new ArgsListSerializer(argSerializers);
    this.n1x_1 = new ResultOrCallbackSerializer(resultSerializer);
  }
  protoOf(SuspendingZiplineFunction).h1t = function () {
    return this.j1x_1;
  };
  protoOf(SuspendingZiplineFunction).j1s = function () {
    return this.k1x_1;
  };
  protoOf(SuspendingZiplineFunction).i1t = function () {
    return true;
  };
  protoOf(SuspendingZiplineFunction).toString = function () {
    return this.j1s();
  };
  function SerializableZiplineFunction_init_$Init$(function_0, $this) {
    SerializableZiplineFunction.call($this, function_0.h1t(), function_0.j1s(), function_0.i1t());
    return $this;
  }
  function SerializableZiplineFunction_init_$Create$(function_0) {
    return SerializableZiplineFunction_init_$Init$(function_0, objectCreate(protoOf(SerializableZiplineFunction)));
  }
  function Companion_2() {
  }
  var Companion_instance_4;
  function Companion_getInstance_2() {
    return Companion_instance_4;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.cash.zipline.internal.bridge.SerializableZiplineFunction', this, 3);
    tmp0_serialDesc.yp('id', false);
    tmp0_serialDesc.yp('signature', false);
    tmp0_serialDesc.yp('isSuspending', false);
    this.w2a_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).jg = function () {
    return this.w2a_1;
  };
  protoOf($serializer_1).aq = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  protoOf($serializer_1).xg = function (decoder) {
    var tmp0_desc = this.w2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_input = decoder.fj(tmp0_desc);
    if (tmp7_input.tj()) {
      tmp4_local0 = tmp7_input.pj(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.pj(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.hj(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.uj(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.pj(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.pj(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.hj(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.gj(tmp0_desc);
    return SerializableZiplineFunction_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_1).x2a = function (encoder, value) {
    var tmp0_desc = this.w2a_1;
    var tmp1_output = encoder.fj(tmp0_desc);
    tmp1_output.rk(tmp0_desc, 0, value.c21_1);
    tmp1_output.rk(tmp0_desc, 1, value.d21_1);
    tmp1_output.jk(tmp0_desc, 2, value.e21_1);
    tmp1_output.gj(tmp0_desc);
  };
  protoOf($serializer_1).wg = function (encoder, value) {
    return this.x2a(encoder, value instanceof SerializableZiplineFunction ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function SerializableZiplineFunction_init_$Init$_0(seen1, id, signature, isSuspending, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_1().w2a_1);
    }
    $this.c21_1 = id;
    $this.d21_1 = signature;
    $this.e21_1 = isSuspending;
    return $this;
  }
  function SerializableZiplineFunction_init_$Create$_0(seen1, id, signature, isSuspending, serializationConstructorMarker) {
    return SerializableZiplineFunction_init_$Init$_0(seen1, id, signature, isSuspending, serializationConstructorMarker, objectCreate(protoOf(SerializableZiplineFunction)));
  }
  function SerializableZiplineFunction(id, signature, isSuspending) {
    this.c21_1 = id;
    this.d21_1 = signature;
    this.e21_1 = isSuspending;
  }
  protoOf(SerializableZiplineFunction).h1t = function () {
    return this.c21_1;
  };
  protoOf(SerializableZiplineFunction).j1s = function () {
    return this.d21_1;
  };
  protoOf(SerializableZiplineFunction).i1t = function () {
    return this.e21_1;
  };
  function get_ZIPLINE_HOST_NAME() {
    return ZIPLINE_HOST_NAME;
  }
  var ZIPLINE_HOST_NAME;
  function get_ZIPLINE_GUEST_NAME() {
    return ZIPLINE_GUEST_NAME;
  }
  var ZIPLINE_GUEST_NAME;
  function ziplineServiceSerializer(ziplineServiceAdapter) {
    return ziplineServiceAdapter;
  }
  function _get_zipline__x7ub6k($this) {
    var tmp0_elvis_lhs = get_theOnlyZipline();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Zipline isn't ready: did you call Zipline.get() yet?";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_inboundChannel__qv2m7z($this) {
    return _get_zipline__x7ub6k($this).z2a_1.w1w_1;
  }
  function Job(handler, arguments_0) {
    this.c2b_1 = handler;
    this.d2b_1 = arguments_0;
  }
  function GlobalBridge() {
    GlobalBridge_instance = this;
    this.e2b_1 = 1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.f2b_1 = LinkedHashMap_init_$Create$();
    var globalBridge = this;
    globalThis.app_cash_zipline_inboundChannel = globalBridge;
    globalThis.setTimeout = function (handler, delay) {
      return globalBridge.setTimeout(handler, delay, arguments);
    };
    globalThis.clearTimeout = function (timeoutID) {
      return globalBridge.clearTimeout(timeoutID);
    };
    globalThis.console = {error: function () {
      globalBridge.consoleMessage('error', arguments);
    }, info: function () {
      globalBridge.consoleMessage('info', arguments);
    }, log: function () {
      globalBridge.consoleMessage('log', arguments);
    }, warn: function () {
      globalBridge.consoleMessage('warn', arguments);
    }};
  }
  protoOf(GlobalBridge).x1t = function () {
    return _get_zipline__x7ub6k(this).z2a_1.x1t();
  };
  protoOf(GlobalBridge).o1t = function (name) {
    return _get_zipline__x7ub6k(this).z2a_1.o1t(name);
  };
  protoOf(GlobalBridge).n1y = function (callJson) {
    return _get_inboundChannel__qv2m7z(this).call(callJson);
  };
  protoOf(GlobalBridge).call = function (callJson) {
    return this.n1y(callJson);
  };
  protoOf(GlobalBridge).q1y = function (instanceName) {
    return _get_inboundChannel__qv2m7z(this).disconnect(instanceName);
  };
  protoOf(GlobalBridge).disconnect = function (instanceName) {
    return this.q1y(instanceName);
  };
  protoOf(GlobalBridge).b1t = function (timeoutId) {
    var tmp0_elvis_lhs = this.f2b_1.z1(timeoutId);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.c2b_1.apply(null, job.d2b_1);
  };
  protoOf(GlobalBridge).v1s = function () {
  };
  protoOf(GlobalBridge).setTimeout = function (handler, timeout, arguments_0) {
    var tmp1 = this.e2b_1;
    this.e2b_1 = tmp1 + 1 | 0;
    var timeoutId = tmp1;
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.f2b_1;
    var value = new Job(handler, arguments_0);
    this_0.y1(timeoutId, value);
    _get_zipline__x7ub6k(this).b2b_1.w1u(timeoutId, timeout);
    return timeoutId;
  };
  protoOf(GlobalBridge).clearTimeout = function (timeoutId) {
    this.f2b_1.z1(timeoutId);
    _get_zipline__x7ub6k(this).b2b_1.b1v(timeoutId);
  };
  protoOf(GlobalBridge).consoleMessage = function (level, arguments_0) {
    var throwable = null;
    // Inline function 'kotlin.collections.mutableListOf' call
    var argumentsList = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = arguments_0.length;
    while (inductionVariable < last) {
      var argument = arguments_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp;
      if (throwable == null) {
        tmp = argument instanceof Error;
      } else {
        tmp = false;
      }
      if (tmp) {
        throwable = argument;
      } else {
        // Inline function 'kotlin.collections.plusAssign' call
        argumentsList.p(argument);
      }
    }
    _get_zipline__x7ub6k(this).b2b_1.g1v(level, joinToString(argumentsList, ' '), throwable);
  };
  var GlobalBridge_instance;
  function GlobalBridge_getInstance() {
    if (GlobalBridge_instance == null)
      new GlobalBridge();
    return GlobalBridge_instance;
  }
  function get_referenceQueue() {
    _init_properties_leakCanaryJs_kt__uxjmyk();
    return referenceQueue;
  }
  var referenceQueue;
  function get_registry() {
    _init_properties_leakCanaryJs_kt__uxjmyk();
    return registry;
  }
  var registry;
  function detectLeaks() {
    _init_properties_leakCanaryJs_kt__uxjmyk();
    $l$loop: while (true) {
      var tmp0_elvis_lhs = get_referenceQueue().shift();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var reference = tmp;
      (reference instanceof ZiplineServiceReference ? reference : THROW_CCE()).j2b();
    }
  }
  function trackLeaks(eventListener, serviceName, callHandler, service) {
    _init_properties_leakCanaryJs_kt__uxjmyk();
    get_registry().register(service, new ZiplineServiceReference(eventListener, serviceName, callHandler));
  }
  function ZiplineServiceReference(eventListener, name, callHandler) {
    this.g2b_1 = eventListener;
    this.h2b_1 = name;
    this.i2b_1 = callHandler;
  }
  protoOf(ZiplineServiceReference).j2b = function () {
    if (!this.i2b_1.e1u_1.l20_1) {
      this.g2b_1.l1v(this.h2b_1);
    }
  };
  var properties_initialized_leakCanaryJs_kt_rtjqze;
  function _init_properties_leakCanaryJs_kt__uxjmyk() {
    if (!properties_initialized_leakCanaryJs_kt_rtjqze) {
      properties_initialized_leakCanaryJs_kt_rtjqze = true;
      referenceQueue = [];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'app.cash.zipline.internal.bridge.registry.<anonymous>' call
      var referenceQueue_0 = get_referenceQueue();
      registry = new FinalizationRegistry(function (heldValue) {
        referenceQueue_0.push(heldValue);
      });
    }
  }
  function stacktraceString(throwable) {
    return stackTraceToString(throwable);
  }
  function toInboundThrowable(stacktraceString, constructor) {
    return constructor(stacktraceString);
  }
  function encodeToStringFast(_this__u8e3s4, serializer, value) {
    return JSON.stringify(encodeToDynamic(_this__u8e3s4, serializer, value));
  }
  function decodeFromStringFast(_this__u8e3s4, deserializer, string) {
    return decodeFromDynamic(_this__u8e3s4, deserializer, JSON.parse(string));
  }
  function get_passByReferencePrefix() {
    return passByReferencePrefix;
  }
  var passByReferencePrefix;
  function get_theOnlyZipline() {
    return theOnlyZipline;
  }
  var theOnlyZipline;
  function _get_jsOutboundChannel__bvjciv($this) {
    return globalThis.app_cash_zipline_outboundChannel;
  }
  function Companion_3() {
  }
  protoOf(Companion_3).k2b = function (serializersModule) {
    var tmp0_safe_receiver = theOnlyZipline;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!equals(serializersModule, tmp0_safe_receiver.z2a_1.m1w_1)) {
        // Inline function 'app.cash.zipline.Companion.get.<anonymous>.<anonymous>' call
        var message = 'get() called multiple times with non-equal serializersModule instances';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      return tmp0_safe_receiver;
    }
    // Inline function 'kotlin.apply' call
    var this_0 = new Zipline(serializersModule);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'app.cash.zipline.Companion.get.<anonymous>' call
    this_0.t1y(get_ZIPLINE_GUEST_NAME(), GlobalBridge_getInstance(), new Adapter(listOf([]), 'app.cash.zipline.internal.GuestService'));
    theOnlyZipline = this_0;
    return this_0;
  };
  protoOf(Companion_3).l2b = function (serializersModule, $super) {
    serializersModule = serializersModule === VOID ? EmptySerializersModule() : serializersModule;
    return $super === VOID ? this.k2b(serializersModule) : $super.k2b.call(this, serializersModule);
  };
  var Companion_instance_5;
  function Companion_getInstance_3() {
    return Companion_instance_5;
  }
  function Zipline$eventListener$1(this$0) {
    this.m2b_1 = this$0;
    EventListener.call(this);
  }
  protoOf(Zipline$eventListener$1).l1v = function (name) {
    this.m2b_1.b2b_1.l1v(name);
  };
  function Zipline$endpoint$1() {
  }
  protoOf(Zipline$endpoint$1).n1y = function (callJson) {
    return _get_jsOutboundChannel__bvjciv(this).call(callJson);
  };
  protoOf(Zipline$endpoint$1).call = function (callJson) {
    return this.n1y(callJson);
  };
  protoOf(Zipline$endpoint$1).q1y = function (instanceName) {
    return _get_jsOutboundChannel__bvjciv(this).disconnect(instanceName);
  };
  protoOf(Zipline$endpoint$1).disconnect = function (instanceName) {
    return this.q1y(instanceName);
  };
  function Zipline$endpoint$lambda(this$0) {
    return function () {
      return this$0.b2b_1;
    };
  }
  function Zipline(userSerializersModule) {
    var tmp = this;
    tmp.y2a_1 = new Zipline$eventListener$1(this);
    var tmp_0 = this;
    var tmp_1 = GlobalScope_instance;
    var tmp_2 = new Zipline$endpoint$1();
    tmp_0.z2a_1 = new Endpoint(tmp_1, userSerializersModule, this.y2a_1, tmp_2, Zipline$endpoint$lambda(this));
    this.a2b_1 = this.z2a_1.u1w_1;
    this.b2b_1 = this.z2a_1.w1y(get_ZIPLINE_HOST_NAME(), VOID, new Adapter_0(listOf([]), 'app.cash.zipline.internal.HostService'));
  }
  protoOf(Zipline).t1y = function (name, service, adapter) {
    this.z2a_1.t1y(name, service, adapter);
  };
  //region block: post-declaration
  defineProp(protoOf(ZiplineApiMismatchException), 'message', function () {
    return this.h5();
  });
  protoOf(InboundService$callSuspending$cancelCallback$1).v1s = close;
  protoOf(RealSuspendCallback).v1s = close;
  protoOf($serializer).bq = typeParametersSerializers;
  protoOf(FlowSerializer$toFlow$1$1).v1s = close;
  protoOf(FlowSerializer$toZiplineService$1).v1s = close;
  protoOf(StateFlowSerializer$toStateFlow$1$collect$2$1).v1s = close;
  protoOf(StateFlowSerializer$toZiplineService$1).v1s = close;
  protoOf($serializer_0).bq = typeParametersSerializers;
  protoOf($serializer_1).bq = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion();
  Companion_instance_4 = new Companion_2();
  ZIPLINE_HOST_NAME = 'zipline/host';
  ZIPLINE_GUEST_NAME = 'zipline/guest';
  passByReferencePrefix = 'zipline/guest-';
  theOnlyZipline = null;
  Companion_instance_5 = new Companion_3();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ReturningZiplineFunction;
  _.$_$.b = ZiplineServiceAdapter;
  _.$_$.c = requireContextual;
  _.$_$.d = close;
  _.$_$.e = ZiplineService;
  _.$_$.f = Companion_instance_5;
  //endregion
  return _;
}));

//# sourceMappingURL=zipline-root-zipline.js.map
