(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './zipline-root-zipline.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./zipline-root-zipline.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ziplinekmmtesting:presenters'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ziplinekmmtesting:presenters'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ziplinekmmtesting:presenters'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ziplinekmmtesting:presenters'.");
    }
    if (typeof this['zipline-root-zipline'] === 'undefined') {
      throw new Error("Error loading module 'ziplinekmmtesting:presenters'. Its dependency 'zipline-root-zipline' was not found. Please, check whether 'zipline-root-zipline' is loaded prior to 'ziplinekmmtesting:presenters'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ziplinekmmtesting:presenters'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ziplinekmmtesting:presenters'.");
    }
    root['ziplinekmmtesting:presenters'] = factory(typeof this['ziplinekmmtesting:presenters'] === 'undefined' ? {} : this['ziplinekmmtesting:presenters'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core'], this['zipline-root-zipline'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_app_cash_zipline_zipline, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.m8;
  var objectMeta = kotlin_kotlin.$_$.l8;
  var setMetadataFor = kotlin_kotlin.$_$.n8;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.sa;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var VOID = kotlin_kotlin.$_$.f;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var Unit_instance = kotlin_kotlin.$_$.f4;
  var objectCreate = kotlin_kotlin.$_$.k8;
  var getStringHashCode = kotlin_kotlin.$_$.q7;
  var classMeta = kotlin_kotlin.$_$.j7;
  var ReturningZiplineFunction = kotlin_app_cash_zipline_zipline.$_$.a;
  var isInterface = kotlin_kotlin.$_$.b8;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var Unit = kotlin_kotlin.$_$.cb;
  var ZiplineServiceAdapter = kotlin_app_cash_zipline_zipline.$_$.b;
  var getKClass = kotlin_kotlin.$_$.e;
  var arrayOf = kotlin_kotlin.$_$.fb;
  var createKType = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var listOf = kotlin_kotlin.$_$.s5;
  var requireContextual = kotlin_app_cash_zipline_zipline.$_$.c;
  var ZiplineService = kotlin_app_cash_zipline_zipline.$_$.e;
  var interfaceMeta = kotlin_kotlin.$_$.s7;
  var List = kotlin_kotlin.$_$.m4;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.w3;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var until = kotlin_kotlin.$_$.z8;
  var slice = kotlin_kotlin.$_$.m9;
  var trimMargin = kotlin_kotlin.$_$.ea;
  var isCharSequence = kotlin_kotlin.$_$.x7;
  var trim = kotlin_kotlin.$_$.fa;
  var toString = kotlin_kotlin.$_$.r8;
  var equals = kotlin_kotlin.$_$.f9;
  var RegexOption_IGNORE_CASE_getInstance = kotlin_kotlin.$_$.g;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.b1;
  var listOf_0 = kotlin_kotlin.$_$.r5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var close = kotlin_app_cash_zipline_zipline.$_$.d;
  var withIndex = kotlin_kotlin.$_$.i6;
  var CoroutineImpl = kotlin_kotlin.$_$.z6;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l6;
  var Long = kotlin_kotlin.$_$.na;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var Companion_instance = kotlin_app_cash_zipline_zipline.$_$.f;
  var KProperty0 = kotlin_kotlin.$_$.b9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.p7;
  var lazy = kotlin_kotlin.$_$.lb;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(WorldClockModel, 'WorldClockModel', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(ZiplineFunction0, 'ZiplineFunction0', classMeta, ReturningZiplineFunction);
  setMetadataFor(ZiplineFunction1, 'ZiplineFunction1', classMeta, ReturningZiplineFunction);
  setMetadataFor(WorldClockPresenter, 'WorldClockPresenter', interfaceMeta, VOID, [ZiplineService]);
  setMetadataFor(GeneratedOutboundService, 'GeneratedOutboundService', classMeta, VOID, [WorldClockPresenter]);
  setMetadataFor(Adapter, 'Adapter', classMeta, ZiplineServiceAdapter, [ZiplineServiceAdapter, KSerializer]);
  setMetadataFor(ZiplineFunction0_0, 'ZiplineFunction0', classMeta, ReturningZiplineFunction);
  setMetadataFor(ZiplineFunction1_0, 'ZiplineFunction1', classMeta, ReturningZiplineFunction);
  setMetadataFor(ZiplineFunction2, 'ZiplineFunction2', classMeta, ReturningZiplineFunction);
  setMetadataFor(TriviaService, 'TriviaService', interfaceMeta, VOID, [ZiplineService]);
  setMetadataFor(GeneratedOutboundService_0, 'GeneratedOutboundService', classMeta, VOID, [TriviaService]);
  setMetadataFor(Adapter_0, 'Adapter', classMeta, ZiplineServiceAdapter, [ZiplineServiceAdapter, KSerializer]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(TriviaGame, 'TriviaGame', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor($serializer_1, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Question, 'Question', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor($serializer_2, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(AnswerResult, 'AnswerResult', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  setMetadataFor(TimeFormatter, 'TimeFormatter', classMeta, VOID, VOID, TimeFormatter);
  setMetadataFor(RealTriviaService$gameWithAnswersList$1, VOID, classMeta);
  setMetadataFor(RealTriviaService$gameWithAnswersList$2, VOID, classMeta);
  setMetadataFor(RealTriviaService, 'RealTriviaService', classMeta, VOID, [TriviaService], RealTriviaService);
  setMetadataFor(GameWithAnswers, 'GameWithAnswers', classMeta);
  setMetadataFor(RealWorldClockPresenter$models$slambda, 'RealWorldClockPresenter$models$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(RealWorldClockPresenter, 'RealWorldClockPresenter', classMeta, VOID, [WorldClockPresenter], RealWorldClockPresenter);
  //endregion
  function Companion() {
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.hyperboot.ziplinekmmtesting.WorldClockModel', this, 1);
    tmp0_serialDesc.yp('label', false);
    this.n2b_1 = tmp0_serialDesc;
  }
  protoOf($serializer).jg = function () {
    return this.n2b_1;
  };
  protoOf($serializer).aq = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  protoOf($serializer).xg = function (decoder) {
    var tmp0_desc = this.n2b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.fj(tmp0_desc);
    if (tmp5_input.tj()) {
      tmp4_local0 = tmp5_input.pj(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.uj(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.pj(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.gj(tmp0_desc);
    return WorldClockModel_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer).o2b = function (encoder, value) {
    var tmp0_desc = this.n2b_1;
    var tmp1_output = encoder.fj(tmp0_desc);
    tmp1_output.rk(tmp0_desc, 0, value.p2b_1);
    tmp1_output.gj(tmp0_desc);
  };
  protoOf($serializer).wg = function (encoder, value) {
    return this.o2b(encoder, value instanceof WorldClockModel ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function WorldClockModel_init_$Init$(seen1, label, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance().n2b_1);
    }
    $this.p2b_1 = label;
    return $this;
  }
  function WorldClockModel_init_$Create$(seen1, label, serializationConstructorMarker) {
    return WorldClockModel_init_$Init$(seen1, label, serializationConstructorMarker, objectCreate(protoOf(WorldClockModel)));
  }
  function WorldClockModel(label) {
    this.p2b_1 = label;
  }
  protoOf(WorldClockModel).toString = function () {
    return 'WorldClockModel(label=' + this.p2b_1 + ')';
  };
  protoOf(WorldClockModel).hashCode = function () {
    return getStringHashCode(this.p2b_1);
  };
  protoOf(WorldClockModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WorldClockModel))
      return false;
    var tmp0_other_with_cast = other instanceof WorldClockModel ? other : THROW_CCE();
    if (!(this.p2b_1 === tmp0_other_with_cast.p2b_1))
      return false;
    return true;
  };
  function ZiplineFunction0(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'b/P9mZN3', 'fun models(): kotlinx.coroutines.flow.Flow<com.hyperboot.ziplinekmmtesting.WorldClockModel>', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction0).u2b = function (service, args) {
    return service.v2b();
  };
  protoOf(ZiplineFunction0).c1t = function (service, args) {
    return this.u2b(isInterface(service, WorldClockPresenter) ? service : THROW_CCE(), args);
  };
  function ZiplineFunction1(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'moYx+T3e', 'fun close(): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction1).u2b = function (service, args) {
    service.v1s();
    return Unit_instance;
  };
  protoOf(ZiplineFunction1).c1t = function (service, args) {
    return this.u2b(isInterface(service, WorldClockPresenter) ? service : THROW_CCE(), args);
  };
  function GeneratedOutboundService(callHandler) {
    this.a2c_1 = callHandler;
  }
  protoOf(GeneratedOutboundService).v2b = function () {
    var tmp0_callHandler = this.a2c_1;
    var tmp = tmp0_callHandler.f1u(this, 0, []);
    return (!(tmp == null) ? isInterface(tmp, Flow) : false) ? tmp : THROW_CCE();
  };
  protoOf(GeneratedOutboundService).v1s = function () {
    var tmp0_callHandler = this.a2c_1;
    var tmp = tmp0_callHandler.f1u(this, 1, []);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  function Adapter(serializers, serialName) {
    ZiplineServiceAdapter.call(this);
    this.d2c_1 = serialName;
    this.e2c_1 = 'WorldClockPresenter';
    this.f2c_1 = serializers;
  }
  protoOf(Adapter).oh = function () {
    return this.d2c_1;
  };
  protoOf(Adapter).q5 = function () {
    return this.e2c_1;
  };
  protoOf(Adapter).l1u = function () {
    return this.f2c_1;
  };
  protoOf(Adapter).m1u = function (serializersModule) {
    var tmp0_serializers = this.f2c_1;
    var tmp = getKClass(Flow);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(serializersModule, createKType(getKClass(WorldClockModel), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
    var tmp1_serializer = requireContextual(serializersModule, tmp, listOf([tmp$ret$1]));
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(serializersModule, createKType(getKClass(Unit), arrayOf([]), false));
    var tmp2_serializer = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    return listOf([new ZiplineFunction0(listOf([]), tmp1_serializer), new ZiplineFunction1(listOf([]), tmp2_serializer)]);
  };
  protoOf(Adapter).n1u = function (callHandler) {
    return new GeneratedOutboundService(callHandler);
  };
  function WorldClockPresenter() {
  }
  function ZiplineFunction0_0(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'sMsExFR0', 'fun games(): kotlin.collections.List<com.hyperboot.ziplinekmmtesting.TriviaGame>', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction0_0).k2c = function (service, args) {
    return service.l2c();
  };
  protoOf(ZiplineFunction0_0).c1t = function (service, args) {
    return this.k2c(isInterface(service, TriviaService) ? service : THROW_CCE(), args);
  };
  function ZiplineFunction1_0(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'pSB3NbS3', 'fun answer(kotlin.Int, kotlin.Int, kotlin.String): com.hyperboot.ziplinekmmtesting.AnswerResult', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction1_0).k2c = function (service, args) {
    var tmp = args.d1(0);
    var tmp_0 = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_1 = args.d1(1);
    var tmp_2 = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_3 = args.d1(2);
    return service.q2c(tmp_0, tmp_2, (!(tmp_3 == null) ? typeof tmp_3 === 'string' : false) ? tmp_3 : THROW_CCE());
  };
  protoOf(ZiplineFunction1_0).c1t = function (service, args) {
    return this.k2c(isInterface(service, TriviaService) ? service : THROW_CCE(), args);
  };
  function ZiplineFunction2(argSerializers, resultSerializer) {
    ReturningZiplineFunction.call(this, 'moYx+T3e', 'fun close(): kotlin.Unit', argSerializers, resultSerializer);
  }
  protoOf(ZiplineFunction2).k2c = function (service, args) {
    service.v1s();
    return Unit_instance;
  };
  protoOf(ZiplineFunction2).c1t = function (service, args) {
    return this.k2c(isInterface(service, TriviaService) ? service : THROW_CCE(), args);
  };
  function GeneratedOutboundService_0(callHandler) {
    this.v2c_1 = callHandler;
  }
  protoOf(GeneratedOutboundService_0).l2c = function () {
    var tmp0_callHandler = this.v2c_1;
    var tmp = tmp0_callHandler.f1u(this, 0, []);
    return (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
  };
  protoOf(GeneratedOutboundService_0).q2c = function (gameId, questionId, answer) {
    var tmp0_callHandler = this.v2c_1;
    var tmp = tmp0_callHandler.f1u(this, 1, [gameId, questionId, answer]);
    return tmp instanceof AnswerResult ? tmp : THROW_CCE();
  };
  protoOf(GeneratedOutboundService_0).v1s = function () {
    var tmp0_callHandler = this.v2c_1;
    var tmp = tmp0_callHandler.f1u(this, 2, []);
    return tmp instanceof Unit ? tmp : THROW_CCE();
  };
  function Adapter_0(serializers, serialName) {
    ZiplineServiceAdapter.call(this);
    this.y2c_1 = serialName;
    this.z2c_1 = 'TriviaService';
    this.a2d_1 = serializers;
  }
  protoOf(Adapter_0).oh = function () {
    return this.y2c_1;
  };
  protoOf(Adapter_0).q5 = function () {
    return this.z2c_1;
  };
  protoOf(Adapter_0).l1u = function () {
    return this.a2d_1;
  };
  protoOf(Adapter_0).m1u = function (serializersModule) {
    var tmp0_serializers = this.a2d_1;
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(serializersModule, createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(TriviaGame), arrayOf([]), false))]), false));
    var tmp1_serializer = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(serializersModule, createKType(PrimitiveClasses_getInstance().n6(), arrayOf([]), false));
    var tmp2_serializer = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(serializersModule, createKType(PrimitiveClasses_getInstance().r6(), arrayOf([]), false));
    var tmp3_serializer = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_3 = serializer(serializersModule, createKType(getKClass(AnswerResult), arrayOf([]), false));
    var tmp4_serializer = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_4 = serializer(serializersModule, createKType(getKClass(Unit), arrayOf([]), false));
    var tmp5_serializer = isInterface(this_4, KSerializer) ? this_4 : THROW_CCE();
    return listOf([new ZiplineFunction0_0(listOf([]), tmp1_serializer), new ZiplineFunction1_0(listOf([tmp2_serializer, tmp2_serializer, tmp3_serializer]), tmp4_serializer), new ZiplineFunction2(listOf([]), tmp5_serializer)]);
  };
  protoOf(Adapter_0).n1u = function (callHandler) {
    return new GeneratedOutboundService_0(callHandler);
  };
  function TriviaService() {
  }
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b2d_1 = [null, null, new ArrayListSerializer($serializer_getInstance_1())];
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.hyperboot.ziplinekmmtesting.TriviaGame', this, 3);
    tmp0_serialDesc.yp('id', false);
    tmp0_serialDesc.yp('name', false);
    tmp0_serialDesc.yp('question', false);
    this.c2d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).jg = function () {
    return this.c2d_1;
  };
  protoOf($serializer_0).aq = function () {
    var tmp0_cached = Companion_getInstance_0().b2d_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2]];
  };
  protoOf($serializer_0).xg = function (decoder) {
    var tmp0_desc = this.c2d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.fj(tmp0_desc);
    var tmp8_cached = Companion_getInstance_0().b2d_1;
    if (tmp7_input.tj()) {
      tmp4_local0 = tmp7_input.kj(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.pj(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.rj(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.uj(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.kj(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.pj(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.rj(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.gj(tmp0_desc);
    return TriviaGame_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_0).d2d = function (encoder, value) {
    var tmp0_desc = this.c2d_1;
    var tmp1_output = encoder.fj(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().b2d_1;
    tmp1_output.mk(tmp0_desc, 0, value.e2d_1);
    tmp1_output.rk(tmp0_desc, 1, value.f2d_1);
    tmp1_output.tk(tmp0_desc, 2, tmp2_cached[2], value.g2d_1);
    tmp1_output.gj(tmp0_desc);
  };
  protoOf($serializer_0).wg = function (encoder, value) {
    return this.d2d(encoder, value instanceof TriviaGame ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function TriviaGame_init_$Init$(seen1, id, name, question, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_0().c2d_1);
    }
    $this.e2d_1 = id;
    $this.f2d_1 = name;
    $this.g2d_1 = question;
    return $this;
  }
  function TriviaGame_init_$Create$(seen1, id, name, question, serializationConstructorMarker) {
    return TriviaGame_init_$Init$(seen1, id, name, question, serializationConstructorMarker, objectCreate(protoOf(TriviaGame)));
  }
  function TriviaGame(id, name, question) {
    Companion_getInstance_0();
    this.e2d_1 = id;
    this.f2d_1 = name;
    this.g2d_1 = question;
  }
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.hyperboot.ziplinekmmtesting.Question', this, 2);
    tmp0_serialDesc.yp('id', false);
    tmp0_serialDesc.yp('text', false);
    this.h2d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).jg = function () {
    return this.h2d_1;
  };
  protoOf($serializer_1).aq = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_1).xg = function (decoder) {
    var tmp0_desc = this.h2d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.fj(tmp0_desc);
    if (tmp6_input.tj()) {
      tmp4_local0 = tmp6_input.kj(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.kj(tmp0_desc, 0);
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
    return Question_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_1).i2d = function (encoder, value) {
    var tmp0_desc = this.h2d_1;
    var tmp1_output = encoder.fj(tmp0_desc);
    tmp1_output.mk(tmp0_desc, 0, value.j2d_1);
    tmp1_output.rk(tmp0_desc, 1, value.k2d_1);
    tmp1_output.gj(tmp0_desc);
  };
  protoOf($serializer_1).wg = function (encoder, value) {
    return this.i2d(encoder, value instanceof Question ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function Question_init_$Init$(seen1, id, text, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_1().h2d_1);
    }
    $this.j2d_1 = id;
    $this.k2d_1 = text;
    return $this;
  }
  function Question_init_$Create$(seen1, id, text, serializationConstructorMarker) {
    return Question_init_$Init$(seen1, id, text, serializationConstructorMarker, objectCreate(protoOf(Question)));
  }
  function Question(id, text) {
    this.j2d_1 = id;
    this.k2d_1 = text;
  }
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    return Companion_instance_3;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.hyperboot.ziplinekmmtesting.AnswerResult', this, 2);
    tmp0_serialDesc.yp('correct', false);
    tmp0_serialDesc.yp('message', false);
    this.l2d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).jg = function () {
    return this.l2d_1;
  };
  protoOf($serializer_2).aq = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_2).xg = function (decoder) {
    var tmp0_desc = this.l2d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_input = decoder.fj(tmp0_desc);
    if (tmp6_input.tj()) {
      tmp4_local0 = tmp6_input.hj(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.hj(tmp0_desc, 0);
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
    return AnswerResult_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).m2d = function (encoder, value) {
    var tmp0_desc = this.l2d_1;
    var tmp1_output = encoder.fj(tmp0_desc);
    tmp1_output.jk(tmp0_desc, 0, value.n2d_1);
    tmp1_output.rk(tmp0_desc, 1, value.o2d_1);
    tmp1_output.gj(tmp0_desc);
  };
  protoOf($serializer_2).wg = function (encoder, value) {
    return this.m2d(encoder, value instanceof AnswerResult ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function AnswerResult_init_$Init$(seen1, correct, message, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_2().l2d_1);
    }
    $this.n2d_1 = correct;
    $this.o2d_1 = message;
    return $this;
  }
  function AnswerResult_init_$Create$(seen1, correct, message, serializationConstructorMarker) {
    return AnswerResult_init_$Init$(seen1, correct, message, serializationConstructorMarker, objectCreate(protoOf(AnswerResult)));
  }
  function AnswerResult(correct, message) {
    this.n2d_1 = correct;
    this.o2d_1 = message;
  }
  function formatDate($this, date, millis) {
    var limit = millis ? 23 : 19;
    var tmp = date.toISOString();
    var string = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    return slice(string, until(11, limit));
  }
  function TimeFormatter() {
  }
  protoOf(TimeFormatter).p2d = function (now, millis) {
    var originalHours = now.getHours();
    now.setHours(originalHours + 2);
    var barcelona = formatDate(this, now, millis);
    now.setHours(originalHours - 4);
    var nyc = formatDate(this, now, millis);
    now.setHours(originalHours - 7);
    var sf = formatDate(this, now, millis);
    now.setHours(originalHours + 2);
    var rome = formatDate(this, now, millis);
    return trimMargin('\n      |Barcelona\n      |' + barcelona + '\n      |\n      |New York City\n      |' + nyc + '\n      |\n      |San Francisco\n      |' + sf + '\n      |\n      |Roma\n      |' + rome + '\n      ');
  };
  protoOf(TimeFormatter).q2d = function (now, millis, $super) {
    now = now === VOID ? new Date() : now;
    millis = millis === VOID ? false : millis;
    return $super === VOID ? this.p2d(now, millis) : $super.p2d.call(this, now, millis);
  };
  function RealTriviaService$gameWithAnswersList$1() {
    this.r2d_1 = "This Java IDE was IBM's attempt at blocking out the SUN";
  }
  protoOf(RealTriviaService$gameWithAnswersList$1).s2d = function () {
    return this.r2d_1;
  };
  protoOf(RealTriviaService$gameWithAnswersList$1).t2d = function (answer) {
    var tmp;
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString(trim(isCharSequence(answer) ? answer : THROW_CCE()));
    if (equals(tmp$ret$0, 'Eclipse', true)) {
      tmp = new AnswerResult(true, "Yep! Next they'll need to block out an Oracle.");
    } else {
      tmp = new AnswerResult(false, "Nope! The stars aren't in alignment for you.");
    }
    return tmp;
  };
  function RealTriviaService$gameWithAnswersList$2() {
    this.u2d_1 = "IntelliJ ships with a mode to emulate this editor in case you can't quit it";
  }
  protoOf(RealTriviaService$gameWithAnswersList$2).s2d = function () {
    return this.u2d_1;
  };
  protoOf(RealTriviaService$gameWithAnswersList$2).t2d = function (answer) {
    var tmp;
    // Inline function 'kotlin.text.matches' call
    if (Regex_init_$Create$('vim?', RegexOption_IGNORE_CASE_getInstance()).s7(answer)) {
      tmp = new AnswerResult(true, "You got it! :wq while you're ahead!");
    } else {
      tmp = new AnswerResult(false, 'Not that! Are you taking your VItamins?');
    }
    return tmp;
  };
  function RealTriviaService() {
    var tmp = this;
    var tmp_0 = new RealTriviaService$gameWithAnswersList$1();
    tmp.v2d_1 = listOf_0(new GameWithAnswers(0, 'IDEs of March', listOf([tmp_0, new RealTriviaService$gameWithAnswersList$2()])));
  }
  protoOf(RealTriviaService).l2c = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.v2d_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.s();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.v();
      // Inline function 'com.hyperboot.ziplinekmmtesting.RealTriviaService.games.<anonymous>' call
      var tmp$ret$0 = item.z2d();
      destination.p(tmp$ret$0);
    }
    return destination;
  };
  protoOf(RealTriviaService).q2c = function (gameId, questionId, answer) {
    return this.v2d_1.d1(gameId).y2d_1.d1(questionId).t2d(answer);
  };
  function GameWithAnswers(id, name, questionList) {
    this.w2d_1 = id;
    this.x2d_1 = name;
    this.y2d_1 = questionList;
  }
  protoOf(GameWithAnswers).z2d = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = withIndex(this.y2d_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.s();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.v();
      // Inline function 'com.hyperboot.ziplinekmmtesting.GameWithAnswers.<get-game>.<anonymous>' call
      var index = item.cc();
      var value = item.dc();
      var tmp$ret$0 = new Question(index, value.s2d());
      destination.p(tmp$ret$0);
    }
    return new TriviaGame(this.w2d_1, this.x2d_1, destination);
  };
  function get_zipline() {
    _init_properties_js_kt__2zfvxz();
    // Inline function 'kotlin.getValue' call
    var this_0 = zipline$delegate;
    zipline$factory();
    return this_0.c2();
  }
  var zipline$delegate;
  function main() {
    _init_properties_js_kt__2zfvxz();
    get_zipline().t1y('WorldClockPresenter', new RealWorldClockPresenter(), new Adapter(listOf([]), 'com.hyperboot.ziplinekmmtesting.WorldClockPresenter'));
    get_zipline().t1y('Trivia', new RealTriviaService(), new Adapter_0(listOf([]), 'com.hyperboot.ziplinekmmtesting.TriviaService'));
  }
  function RealWorldClockPresenter$models$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealWorldClockPresenter$models$slambda).j2e = function ($this$flow, $completion) {
    var tmp = this.k2e($this$flow, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  };
  protoOf(RealWorldClockPresenter$models$slambda).eb = function (p1, $completion) {
    return this.j2e((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RealWorldClockPresenter$models$slambda).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 4;
            this.ea_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.ea_1 = 5;
              continue $sm;
            }

            this.ea_1 = 2;
            suspendResult = this.i2e_1.i1o(new WorldClockModel((new TimeFormatter()).q2d(VOID, true)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ea_1 = 3;
            suspendResult = delay(new Long(16, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.ea_1 = 1;
            continue $sm;
          case 4:
            throw this.ha_1;
          case 5:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.fa_1 === 4) {
          throw e;
        } else {
          this.ea_1 = this.fa_1;
          this.ha_1 = e;
        }
      }
     while (true);
  };
  protoOf(RealWorldClockPresenter$models$slambda).k2e = function ($this$flow, completion) {
    var i = new RealWorldClockPresenter$models$slambda(completion);
    i.i2e_1 = $this$flow;
    return i;
  };
  function RealWorldClockPresenter$models$slambda_0(resultContinuation) {
    var i = new RealWorldClockPresenter$models$slambda(resultContinuation);
    var l = function ($this$flow, $completion) {
      return i.j2e($this$flow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RealWorldClockPresenter() {
  }
  protoOf(RealWorldClockPresenter).v2b = function () {
    return flow(RealWorldClockPresenter$models$slambda_0(null));
  };
  function zipline$delegate$lambda() {
    _init_properties_js_kt__2zfvxz();
    return Companion_instance.l2b();
  }
  function zipline$factory() {
    return getPropertyCallableRef('zipline', 0, KProperty0, function () {
      return get_zipline();
    }, null);
  }
  var properties_initialized_js_kt_3aui8b;
  function _init_properties_js_kt__2zfvxz() {
    if (!properties_initialized_js_kt_3aui8b) {
      properties_initialized_js_kt_3aui8b = true;
      zipline$delegate = lazy(zipline$delegate$lambda);
    }
  }
  //region block: post-declaration
  protoOf($serializer).bq = typeParametersSerializers;
  protoOf($serializer_0).bq = typeParametersSerializers;
  protoOf($serializer_1).bq = typeParametersSerializers;
  protoOf($serializer_2).bq = typeParametersSerializers;
  protoOf(RealTriviaService).v1s = close;
  protoOf(RealWorldClockPresenter).v1s = close;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$hyperboot = $com.hyperboot || ($com.hyperboot = {});
    var $com$hyperboot$ziplinekmmtesting = $com$hyperboot.ziplinekmmtesting || ($com$hyperboot.ziplinekmmtesting = {});
    $com$hyperboot$ziplinekmmtesting.main = main;
  }
  $jsExportAll$(_);
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=ziplinekmmtesting-presenters.js.map
