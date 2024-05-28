(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json'], this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var protoOf = kotlin_kotlin.$_$.m8;
  var objectMeta = kotlin_kotlin.$_$.l8;
  var setMetadataFor = kotlin_kotlin.$_$.n8;
  var classMeta = kotlin_kotlin.$_$.j7;
  var VOID = kotlin_kotlin.$_$.f;
  var toString = kotlin_kotlin.$_$.r8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var charSequenceLength = kotlin_kotlin.$_$.h7;
  var charSequenceGet = kotlin_kotlin.$_$.g7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.y1;
  var Unit_instance = kotlin_kotlin.$_$.f4;
  var equals = kotlin_kotlin.$_$.m7;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var interfaceMeta = kotlin_kotlin.$_$.s7;
  var hashCode = kotlin_kotlin.$_$.r7;
  var joinToString = kotlin_kotlin.$_$.n5;
  var List = kotlin_kotlin.$_$.m4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.sa;
  var Map = kotlin_kotlin.$_$.o4;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.h;
  var lazy = kotlin_kotlin.$_$.kb;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getBooleanHashCode = kotlin_kotlin.$_$.o7;
  var getStringHashCode = kotlin_kotlin.$_$.q7;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.t3;
  var numberRangeToNumber = kotlin_kotlin.$_$.h8;
  var ClosedRange = kotlin_kotlin.$_$.t8;
  var isInterface = kotlin_kotlin.$_$.b8;
  var contains = kotlin_kotlin.$_$.x8;
  var toDouble = kotlin_kotlin.$_$.t9;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.v3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var toLongOrNull = kotlin_kotlin.$_$.w9;
  var toULongOrNull = kotlin_kotlin.$_$.aa;
  var ULong = kotlin_kotlin.$_$.za;
  var Companion_getInstance = kotlin_kotlin.$_$.d4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.y2;
  var toDoubleOrNull = kotlin_kotlin.$_$.s9;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.p9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var lazy_0 = kotlin_kotlin.$_$.lb;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var KProperty1 = kotlin_kotlin.$_$.c9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.p7;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var captureStack = kotlin_kotlin.$_$.e7;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var charSequenceSubSequence = kotlin_kotlin.$_$.i7;
  var coerceAtLeast = kotlin_kotlin.$_$.u8;
  var coerceAtMost = kotlin_kotlin.$_$.v8;
  var Companion_instance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var singleOrNull = kotlin_kotlin.$_$.z5;
  var emptyMap = kotlin_kotlin.$_$.i5;
  var getValue = kotlin_kotlin.$_$.k5;
  var fillArrayVal = kotlin_kotlin.$_$.n7;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var getKClass = kotlin_kotlin.$_$.e;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var toUInt = kotlin_kotlin.$_$.z9;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.q2;
  var IllegalArgumentException = kotlin_kotlin.$_$.la;
  var toULong = kotlin_kotlin.$_$.ba;
  var toUByte = kotlin_kotlin.$_$.y9;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.i2;
  var toUShort = kotlin_kotlin.$_$.ca;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.g3;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.c4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.b4;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.e4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var setOf = kotlin_kotlin.$_$.y5;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.a2;
  var numberToChar = kotlin_kotlin.$_$.i8;
  var equals_0 = kotlin_kotlin.$_$.f9;
  var toString_0 = kotlin_kotlin.$_$.b2;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.q3;
  var toByte = kotlin_kotlin.$_$.o8;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.u3;
  var toShort = kotlin_kotlin.$_$.q8;
  var isFinite = kotlin_kotlin.$_$.jb;
  var isFinite_0 = kotlin_kotlin.$_$.ib;
  var single = kotlin_kotlin.$_$.l9;
  var Char = kotlin_kotlin.$_$.ha;
  var emptySet = kotlin_kotlin.$_$.j5;
  var plus = kotlin_kotlin.$_$.v5;
  var toInt = kotlin_kotlin.$_$.v9;
  var toList = kotlin_kotlin.$_$.d6;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var ensureNotNull = kotlin_kotlin.$_$.hb;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.mb;
  var Long = kotlin_kotlin.$_$.na;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.z1;
  var toLong = kotlin_kotlin.$_$.p8;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.z3;
  var numberToLong = kotlin_kotlin.$_$.j8;
  var charArray = kotlin_kotlin.$_$.f7;
  var indexOf = kotlin_kotlin.$_$.g9;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var isArray = kotlin_kotlin.$_$.t7;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.y3;
  var isNumber = kotlin_kotlin.$_$.d8;
  var toBoolean = kotlin_kotlin.$_$.q9;
  var toByteOrNull = kotlin_kotlin.$_$.r9;
  var toShortOrNull = kotlin_kotlin.$_$.x9;
  var toIntOrNull = kotlin_kotlin.$_$.u9;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var abs = kotlin_kotlin.$_$.s8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.qb;
  var Enum = kotlin_kotlin.$_$.ia;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Json, 'Json', classMeta);
  setMetadataFor(Default, 'Default', objectMeta, Json);
  setMetadataFor(JsonBuilder, 'JsonBuilder', classMeta);
  setMetadataFor(JsonImpl, 'JsonImpl', classMeta, Json);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta);
  setMetadataFor(JsonNames, 'JsonNames', classMeta);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta);
  setMetadataFor(JsonDecoder, 'JsonDecoder', interfaceMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JsonElement, 'JsonElement', classMeta, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(JsonArray, 'JsonArray', classMeta, JsonElement, [JsonElement, List], VOID, VOID, {0: JsonArraySerializer_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(JsonObject, 'JsonObject', classMeta, JsonElement, [JsonElement, Map], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  setMetadataFor(JsonPrimitive, 'JsonPrimitive', classMeta, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  setMetadataFor(JsonNull, 'JsonNull', objectMeta, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNull_getInstance});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(JsonLiteral, 'JsonLiteral', classMeta, JsonPrimitive);
  setMetadataFor(JsonObjectBuilder, 'JsonObjectBuilder', classMeta);
  setMetadataFor(JsonArrayBuilder, 'JsonArrayBuilder', classMeta);
  setMetadataFor(JsonElementSerializer, 'JsonElementSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonArrayDescriptor, 'JsonArrayDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonArraySerializer, 'JsonArraySerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonObjectDescriptor, 'JsonObjectDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonObjectSerializer, 'JsonObjectSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonNullSerializer, 'JsonNullSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonLiteralSerializer, 'JsonLiteralSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(defer$1, VOID, classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonEncoder, 'JsonEncoder', interfaceMeta, VOID, [Encoder]);
  setMetadataFor(JsonException, 'JsonException', classMeta, SerializationException);
  setMetadataFor(JsonDecodingException, 'JsonDecodingException', classMeta, JsonException);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, JsonException);
  setMetadataFor(Tombstone, 'Tombstone', objectMeta);
  setMetadataFor(JsonPath, 'JsonPath', classMeta, VOID, VOID, JsonPath);
  setMetadataFor(PolymorphismValidator, 'PolymorphismValidator', classMeta, VOID, [SerializersModuleCollector]);
  setMetadataFor(Key, 'Key', classMeta, VOID, VOID, Key);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta, VOID, VOID, DescriptorSchemaCache);
  setMetadataFor(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', classMeta, AbstractDecoder);
  setMetadataFor(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', classMeta, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  setMetadataFor(JsonTreeDecoder, 'JsonTreeDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeListDecoder, 'JsonTreeListDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeMapDecoder, 'JsonTreeMapDecoder', classMeta, JsonTreeDecoder);
  setMetadataFor(AbstractJsonLexer, 'AbstractJsonLexer', classMeta);
  setMetadataFor(CharMappings, 'CharMappings', objectMeta);
  setMetadataFor(StringJsonLexer, 'StringJsonLexer', classMeta, AbstractJsonLexer);
  setMetadataFor(DynamicInput, 'DynamicInput', classMeta, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  setMetadataFor(PrimitiveDynamicInput, 'PrimitiveDynamicInput', classMeta, DynamicInput);
  setMetadataFor(DynamicListInput, 'DynamicListInput', classMeta, DynamicInput);
  setMetadataFor(DynamicMapInput, 'DynamicMapInput', classMeta, DynamicInput);
  setMetadataFor(DynamicPrimitiveEncoder, 'DynamicPrimitiveEncoder', classMeta, AbstractEncoder, [AbstractEncoder, JsonEncoder]);
  setMetadataFor(NoOutputMark, 'NoOutputMark', objectMeta);
  setMetadataFor(Node, 'Node', classMeta);
  setMetadataFor(WriteMode, 'WriteMode', classMeta, Enum);
  setMetadataFor(DynamicObjectEncoder, 'DynamicObjectEncoder', classMeta, AbstractEncoder, [AbstractEncoder, JsonEncoder]);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.fz_1 = configuration;
    this.gz_1 = serializersModule;
    this.hz_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).ug = function () {
    return this.gz_1;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.po();
    return new JsonImpl(conf, builder.wz_1);
  }
  function JsonBuilder(json) {
    this.iz_1 = json.fz_1.xz_1;
    this.jz_1 = json.fz_1.c10_1;
    this.kz_1 = json.fz_1.yz_1;
    this.lz_1 = json.fz_1.zz_1;
    this.mz_1 = json.fz_1.a10_1;
    this.nz_1 = json.fz_1.b10_1;
    this.oz_1 = json.fz_1.d10_1;
    this.pz_1 = json.fz_1.e10_1;
    this.qz_1 = json.fz_1.f10_1;
    this.rz_1 = json.fz_1.g10_1;
    this.sz_1 = json.fz_1.h10_1;
    this.tz_1 = json.fz_1.i10_1;
    this.uz_1 = json.fz_1.j10_1;
    this.vz_1 = json.fz_1.k10_1;
    this.wz_1 = json.ug();
  }
  protoOf(JsonBuilder).po = function () {
    if (this.qz_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.rz_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.nz_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.oz_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    } else if (!(this.oz_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = this.oz_1;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(indexedObject)) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          if (!(((element === _Char___init__impl__6a9atx(32) ? true : element === _Char___init__impl__6a9atx(9)) ? true : element === _Char___init__impl__6a9atx(13)) ? true : element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      var allWhitespaces = tmp$ret$3;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.oz_1;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return new JsonConfiguration(this.iz_1, this.kz_1, this.lz_1, this.mz_1, this.nz_1, this.jz_1, this.oz_1, this.pz_1, this.qz_1, this.rz_1, this.sz_1, this.tz_1, this.uz_1, this.vz_1);
  };
  function validateConfiguration($this) {
    if (equals($this.ug(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.fz_1.f10_1, $this.fz_1.g10_1);
    $this.ug().cy(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    this.xz_1 = encodeDefaults;
    this.yz_1 = ignoreUnknownKeys;
    this.zz_1 = isLenient;
    this.a10_1 = allowStructuredMapKeys;
    this.b10_1 = prettyPrint;
    this.c10_1 = explicitNulls;
    this.d10_1 = prettyPrintIndent;
    this.e10_1 = coerceInputValues;
    this.f10_1 = useArrayPolymorphism;
    this.g10_1 = classDiscriminator;
    this.h10_1 = allowSpecialFloatingPointValues;
    this.i10_1 = useAlternativeNames;
    this.j10_1 = namingStrategy;
    this.k10_1 = decodeEnumsCaseInsensitive;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.xz_1 + ', ignoreUnknownKeys=' + this.yz_1 + ', isLenient=' + this.zz_1 + ', ' + ('allowStructuredMapKeys=' + this.a10_1 + ', prettyPrint=' + this.b10_1 + ', explicitNulls=' + this.c10_1 + ', ') + ("prettyPrintIndent='" + this.d10_1 + "', coerceInputValues=" + this.e10_1 + ', useArrayPolymorphism=' + this.f10_1 + ', ') + ("classDiscriminator='" + this.g10_1 + "', allowSpecialFloatingPointValues=" + this.h10_1 + ', useAlternativeNames=' + this.i10_1 + ', ') + ('namingStrategy=' + this.j10_1 + ', decodeEnumsCaseInsensitive=' + this.k10_1 + ')');
  };
  function JsonDecoder() {
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  protoOf(Companion).n10 = function () {
    return JsonElementSerializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_5() {
    return Companion_instance_0;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_6() {
    return Companion_instance_1;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.o10_1 = content;
  }
  protoOf(JsonArray).l = function () {
    return this.o10_1.l();
  };
  protoOf(JsonArray).p10 = function (elements) {
    return this.o10_1.y(elements);
  };
  protoOf(JsonArray).y = function (elements) {
    return this.p10(elements);
  };
  protoOf(JsonArray).d1 = function (index) {
    return this.o10_1.d1(index);
  };
  protoOf(JsonArray).z = function () {
    return this.o10_1.z();
  };
  protoOf(JsonArray).s = function () {
    return this.o10_1.s();
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.o10_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.o10_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.o10_1, ',', '[', ']');
  };
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_7() {
    return Companion_instance_2;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    // Inline function 'kotlin.collections.component1' call
    var k = _name_for_destructuring_parameter_0__wldtmu.b2();
    // Inline function 'kotlin.collections.component2' call
    var v = _name_for_destructuring_parameter_0__wldtmu.c2();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.w4(_Char___init__impl__6a9atx(58));
    this_0.u4(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.q10_1 = content;
  }
  protoOf(JsonObject).a2 = function () {
    return this.q10_1.a2();
  };
  protoOf(JsonObject).x1 = function () {
    return this.q10_1.x1();
  };
  protoOf(JsonObject).l = function () {
    return this.q10_1.l();
  };
  protoOf(JsonObject).r10 = function (key) {
    return this.q10_1.f2(key);
  };
  protoOf(JsonObject).f2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.r10((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).s10 = function (key) {
    return this.q10_1.h2(key);
  };
  protoOf(JsonObject).h2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.s10((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).z = function () {
    return this.q10_1.z();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.q10_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.q10_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.q10_1.a2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.u10_1.c2();
  }
  function JsonNull$_anonymous__enib48() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.t10_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.u10_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
  }
  protoOf(JsonNull).v10 = function () {
    return this.t10_1;
  };
  protoOf(JsonNull).n10 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(JsonNull).lq = function (typeParamsSerializers) {
    return this.n10();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_8() {
    return Companion_instance_3;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.v10();
  };
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.v10())).a11();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonPrimitive_1(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonPrimitive_2(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.b11_1 = isString;
    this.c11_1 = coerceToInlineType;
    this.d11_1 = toString(body);
    if (!(this.c11_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.c11_1.qh()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).v10 = function () {
    return this.d11_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.b11_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.d11_1);
      tmp = this_0.toString();
    } else {
      tmp = this.d11_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.b11_1 === other.b11_1))
      return false;
    if (!(this.d11_1 === other.d11_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.b11_1);
    result = imul(31, result) + getStringHashCode(this.d11_1) | 0;
    return result;
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.v10());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.v10())).a11();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(IntCompanionObject_instance.MIN_VALUE, IntCompanionObject_instance.MAX_VALUE);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.v10() + ' is not an Int');
    return result.q8();
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.v10();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.v10());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.v10();
    }
    return tmp;
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonObjectBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.e11_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonObjectBuilder).f11 = function (key, element) {
    return this.e11_1.y1(key, element);
  };
  protoOf(JsonObjectBuilder).po = function () {
    return new JsonObject(this.e11_1);
  };
  function JsonArrayBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g11_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonArrayBuilder).h11 = function (element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.g11_1.p(element);
    return true;
  };
  protoOf(JsonArrayBuilder).po = function () {
    return new JsonArray(this.g11_1);
  };
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.zg('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.zg('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.zg('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.zg('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.zg('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().i11_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().j11_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().k11_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().l11_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().m11_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.n11_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).jg = function () {
    return this.n11_1;
  };
  protoOf(JsonElementSerializer).o11 = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.vg(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.vg(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.vg(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  protoOf(JsonElementSerializer).wg = function (encoder, value) {
    return this.o11(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).xg = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.m10();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.p11_1 = ListSerializer(JsonElementSerializer_getInstance()).jg();
    this.q11_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).kg = function () {
    return this.p11_1.kg();
  };
  protoOf(JsonArrayDescriptor).ph = function () {
    return this.p11_1.ph();
  };
  protoOf(JsonArrayDescriptor).qh = function () {
    return this.p11_1.qh();
  };
  protoOf(JsonArrayDescriptor).kh = function () {
    return this.p11_1.kh();
  };
  protoOf(JsonArrayDescriptor).rh = function () {
    return this.p11_1.rh();
  };
  protoOf(JsonArrayDescriptor).sh = function (index) {
    return this.p11_1.sh(index);
  };
  protoOf(JsonArrayDescriptor).th = function (index) {
    return this.p11_1.th(index);
  };
  protoOf(JsonArrayDescriptor).uh = function (name) {
    return this.p11_1.uh(name);
  };
  protoOf(JsonArrayDescriptor).vh = function (index) {
    return this.p11_1.vh(index);
  };
  protoOf(JsonArrayDescriptor).wh = function (index) {
    return this.p11_1.wh(index);
  };
  protoOf(JsonArrayDescriptor).oh = function () {
    return this.q11_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.m11_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).jg = function () {
    return this.m11_1;
  };
  protoOf(JsonArraySerializer).r11 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).wg(encoder, value);
  };
  protoOf(JsonArraySerializer).wg = function (encoder, value) {
    return this.r11(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).xg = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).xg(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.s11_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).jg();
    this.t11_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).kg = function () {
    return this.s11_1.kg();
  };
  protoOf(JsonObjectDescriptor).ph = function () {
    return this.s11_1.ph();
  };
  protoOf(JsonObjectDescriptor).qh = function () {
    return this.s11_1.qh();
  };
  protoOf(JsonObjectDescriptor).kh = function () {
    return this.s11_1.kh();
  };
  protoOf(JsonObjectDescriptor).rh = function () {
    return this.s11_1.rh();
  };
  protoOf(JsonObjectDescriptor).sh = function (index) {
    return this.s11_1.sh(index);
  };
  protoOf(JsonObjectDescriptor).th = function (index) {
    return this.s11_1.th(index);
  };
  protoOf(JsonObjectDescriptor).uh = function (name) {
    return this.s11_1.uh(name);
  };
  protoOf(JsonObjectDescriptor).vh = function (index) {
    return this.s11_1.vh(index);
  };
  protoOf(JsonObjectDescriptor).wh = function (index) {
    return this.s11_1.wh(index);
  };
  protoOf(JsonObjectDescriptor).oh = function () {
    return this.t11_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.l11_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).jg = function () {
    return this.l11_1;
  };
  protoOf(JsonObjectSerializer).u11 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).wg(encoder, value);
  };
  protoOf(JsonObjectSerializer).wg = function (encoder, value) {
    return this.u11(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).xg = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).xg(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.j11_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).jg = function () {
    return this.j11_1;
  };
  protoOf(JsonNullSerializer).v11 = function (encoder, value) {
    verify(encoder);
    encoder.yj();
  };
  protoOf(JsonNullSerializer).wg = function (encoder, value) {
    return this.v11(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).xg = function (decoder) {
    verify_0(decoder);
    if (decoder.si()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.ti();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.i11_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).jg = function () {
    return this.i11_1;
  };
  protoOf(JsonPrimitiveSerializer).w11 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.vg(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.vg(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).wg = function (encoder, value) {
    return this.w11(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).xg = function (decoder) {
    var result = asJsonDecoder(decoder).m10();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.k11_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).jg = function () {
    return this.k11_1;
  };
  protoOf(JsonLiteralSerializer).x11 = function (encoder, value) {
    verify(encoder);
    if (value.b11_1) {
      return encoder.hk(value.d11_1);
    }
    if (!(value.c11_1 == null)) {
      return encoder.ik(value.c11_1).hk(value.d11_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.d11_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.dk(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.d11_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).mf_1;
      var tmp_1 = encoder.ik(serializer_0(Companion_getInstance()).jg());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.dk(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.d11_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.fk(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.d11_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.zj(tmp3_safe_receiver);
    }
    encoder.hk(value.d11_1);
  };
  protoOf(JsonLiteralSerializer).wg = function (encoder, value) {
    return this.x11(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).xg = function (decoder) {
    var result = asJsonDecoder(decoder).m10();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.y11_1;
    original$factory();
    return this_0.c2();
  }
  function defer$1($deferred) {
    this.y11_1 = lazy_0($deferred);
  }
  protoOf(defer$1).oh = function () {
    return _get_original__l7ku1m(this).oh();
  };
  protoOf(defer$1).rh = function () {
    return _get_original__l7ku1m(this).rh();
  };
  protoOf(defer$1).ph = function () {
    return _get_original__l7ku1m(this).ph();
  };
  protoOf(defer$1).vh = function (index) {
    return _get_original__l7ku1m(this).vh(index);
  };
  protoOf(defer$1).uh = function (name) {
    return _get_original__l7ku1m(this).uh(name);
  };
  protoOf(defer$1).sh = function (index) {
    return _get_original__l7ku1m(this).sh(index);
  };
  protoOf(defer$1).th = function (index) {
    return _get_original__l7ku1m(this).th(index);
  };
  protoOf(defer$1).wh = function (index) {
    return _get_original__l7ku1m(this).wh(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.oh() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.rh() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    return JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n') + ('Current input: ' + minify(input)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output));
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    // Inline function 'kotlin.text.substring' call
    var startIndex = coerceAtLeast(start_0, 0);
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex_0)) + suffix;
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.uh(name);
    if (!(index === -3))
      return index;
    if (!json.fz_1.i10_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.vh(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.rh(), CLASS_getInstance()) ? json.fz_1.j10_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.a12(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.fz_1.k10_1 ? equals(descriptor.rh(), ENUM_getInstance()) : false;
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).h2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.a12(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.ph();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_0 = _this__u8e3s4.sh(i);
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = this_0.s();
        while (tmp0_iterator.t()) {
          var element = tmp0_iterator.v();
          if (element instanceof JsonNames) {
            destination.p(element);
          }
        }
        var tmp1_safe_receiver = singleOrNull(destination);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b12_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp2_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp2_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.vh(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.c12(_this__u8e3s4, i, _this__u8e3s4.vh(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.z()) {
      // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.rh(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).f2(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.vh(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.vh(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildDeserializationNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.y1(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.ph();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.vh(tmp_2);
        tmp_1[tmp_2] = $strategy.c12($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.d12_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.e12_1 = tmp_2;
    this.f12_1 = -1;
  }
  protoOf(JsonPath).g12 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.v4('$');
    // Inline function 'kotlin.repeat' call
    var times = this.f12_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.d12_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.rh(), LIST_getInstance())) {
            if (!(this.e12_1[index] === -1)) {
              this_0.v4('[');
              this_0.u4(this.e12_1[index]);
              this_0.v4(']');
            }
          } else {
            var idx = this.e12_1[index];
            if (idx >= 0) {
              this_0.v4('.');
              this_0.v4(element.vh(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.v4('[');
            this_0.v4("'");
            this_0.u4(element);
            this_0.v4("'");
            this_0.v4(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.g12();
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.kg().s();
    while (tmp0_iterator.t()) {
      var annotation = tmp0_iterator.v();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.h12_1;
    }
    return json.fz_1.g10_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.l10().fz_1.f10_1;
    }
    if (tmp) {
      return deserializer.xg(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.jg(), _this__u8e3s4.l10());
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = _this__u8e3s4.m10();
    var descriptor = deserializer.jg();
    if (!(value instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.oh() + ', but had ' + getKClassFromExpression(value));
    }
    var jsonTree = value;
    var tmp0_safe_receiver = jsonTree.s10(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v10();
    var tmp2_elvis_lhs = deserializer.eh(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.l10();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.jg()).x(classDiscriminator)) {
      var baseName = serializer.jg().oh();
      var actualName = actualSerializer.jg().oh();
      // Inline function 'kotlin.error' call
      var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.rh();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.q5() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.i12_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.q5() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.ph();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.vh(i);
        if (name === $this.j12_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.i12_1 = useArrayPolymorphism;
    this.j12_1 = discriminator;
  }
  protoOf(PolymorphismValidator).ky = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).ny = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.jg();
    checkKind_0(this, descriptor, actualClass);
    if (!this.i12_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).oy = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).py = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.z11_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).k12 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.z11_1;
    var value_0 = this_0.h2(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.y1(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var this_1 = tmp;
    var key_0 = key instanceof Key ? key : THROW_CCE();
    var value_1 = !(value == null) ? value : THROW_CCE();
    this_1.y1(key_0, value_1);
  };
  protoOf(DescriptorSchemaCache).a12 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.l12(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.k12(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).l12 = function (descriptor, key) {
    var tmp0_safe_receiver = this.z11_1.h2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.h2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.m12_1 = lexer;
    this.n12_1 = json.ug();
  }
  protoOf(JsonDecoderForUnsignedTypes).ug = function () {
    return this.n12_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).uj = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).xi = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.m12_1;
      var input = this_0.o12();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        // Inline function 'kotlin.UInt.toInt' call
        var this_1 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.p12("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).yi = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.m12_1;
      var input = this_0.o12();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        // Inline function 'kotlin.ULong.toLong' call
        var this_1 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.p12("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).vi = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.m12_1;
      var input = this_0.o12();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        // Inline function 'kotlin.UByte.toByte' call
        var this_1 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.p12("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).wi = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.m12_1;
      var input = this_0.o12();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        // Inline function 'kotlin.UShort.toShort' call
        var this_1 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.p12("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.qh() ? get_unsignedNumberDescriptors().x(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).jg(), serializer_0(Companion_getInstance()).jg(), serializer_2(Companion_getInstance_1()).jg(), serializer_3(Companion_getInstance_2()).jg()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.w4(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.c7(value, lastPos, i);
          _this__u8e3s4.v4(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.c7(value, lastPos, value.length);
    } else {
      _this__u8e3s4.v4(value);
    }
    _this__u8e3s4.w4(get_STRING());
  }
  function toBooleanStrictOrNull_0(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.arrayOfNulls' call
      var this_0 = fillArrayVal(Array(93), null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_0(c1) + toString_0(c2) + toString_0(c3) + toString_0(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      this_7[Char__toInt_impl_vasixd(this_8)] = 34;
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(92);
      this_7[Char__toInt_impl_vasixd(this_9)] = 92;
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(9);
      this_7[Char__toInt_impl_vasixd(this_10)] = 116;
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(8);
      this_7[Char__toInt_impl_vasixd(this_11)] = 98;
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(10);
      this_7[Char__toInt_impl_vasixd(this_12)] = 110;
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(13);
      this_7[Char__toInt_impl_vasixd(this_13)] = 114;
      this_7[12] = 102;
      ESCAPE_MARKERS = this_7;
    }
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse literal as '" + primitive + "' value", toString($this.v12()));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' literal when non-nullable " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.s12_1 = json;
    this.t12_1 = value;
    this.u12_1 = this.l10().fz_1;
  }
  protoOf(AbstractJsonTreeDecoder).l10 = function () {
    return this.s12_1;
  };
  protoOf(AbstractJsonTreeDecoder).c2 = function () {
    return this.t12_1;
  };
  protoOf(AbstractJsonTreeDecoder).ug = function () {
    return this.l10().ug();
  };
  protoOf(AbstractJsonTreeDecoder).v12 = function () {
    var tmp0_safe_receiver = this.dw();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.w12(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.c2() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).m10 = function () {
    return this.v12();
  };
  protoOf(AbstractJsonTreeDecoder).yg = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).ew = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).fj = function (descriptor) {
    var currentObject = this.v12();
    var tmp0_subject = descriptor.rh();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.l10();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.oh() + ', but had ' + getKClassFromExpression(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.l10();
        var keyDescriptor = carrierDescriptor(descriptor.th(0), this_0.ug());
        var keyKind = keyDescriptor.rh();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.l10();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.oh() + ', but had ' + getKClassFromExpression(currentObject));
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject);
        } else {
          if (this_0.fz_1.a10_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.l10();
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.oh() + ', but had ' + getKClassFromExpression(currentObject));
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_2;
      } else {
        var tmp_6 = this.l10();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.oh() + ', but had ' + getKClassFromExpression(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_6, currentObject);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).gj = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).si = function () {
    var tmp = this.v12();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).x12 = function (tag) {
    var currentElement = this.w12(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(this.v12()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).y12 = function (tag) {
    return !(this.w12(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).gw = function (tag) {
    return this.y12((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).z12 = function (tag) {
    var value = this.x12(tag);
    if (!this.l10().fz_1.zz_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.b11_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(this.v12()));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.<anonymous>' call
        var tmp0_elvis_lhs = get_booleanOrNull(value);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$_0();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var tmp0_elvis_lhs_0 = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).hw = function (tag) {
    return this.z12((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).a13 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.x12(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(this_0);
        var tmp;
        var containsLower = ByteCompanionObject_instance.MIN_VALUE;
        if (result <= ByteCompanionObject_instance.MAX_VALUE ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).iw = function (tag) {
    return this.a13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).b13 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.x12(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(this_0);
        var tmp;
        var containsLower = ShortCompanionObject_instance.MIN_VALUE;
        if (result <= ShortCompanionObject_instance.MAX_VALUE ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).jw = function (tag) {
    return this.b13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).c13 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.x12(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        var tmp0_elvis_lhs = get_int(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).kw = function (tag) {
    return this.c13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).d13 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.x12(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        var tmp0_elvis_lhs = get_long(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).lw = function (tag) {
    return this.d13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).e13 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.x12(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        var tmp0_elvis_lhs = get_float(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.l10().fz_1.h10_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.v12()));
  };
  protoOf(AbstractJsonTreeDecoder).mw = function (tag) {
    return this.e13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).f13 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.x12(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        var tmp0_elvis_lhs = get_double(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.l10().fz_1.h10_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.v12()));
  };
  protoOf(AbstractJsonTreeDecoder).nw = function (tag) {
    return this.f13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g13 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.x12(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        var tmp0_elvis_lhs = single(this_0.v10());
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).ow = function (tag) {
    return this.g13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h13 = function (tag) {
    var value = this.x12(tag);
    if (!this.l10().fz_1.zz_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.b11_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(this.v12()));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(this.v12()));
    return value.v10();
  };
  protoOf(AbstractJsonTreeDecoder).pw = function (tag) {
    return this.h13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i13 = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.x12(tag).v10()), this.l10()) : protoOf(NamedValueDecoder).qw.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).qw = function (tag, inlineDescriptor) {
    return this.i13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).dj = function (descriptor) {
    return !(this.dw() == null) ? protoOf(NamedValueDecoder).dj.call(this, descriptor) : (new JsonPrimitiveDecoder(this.l10(), this.c2())).dj(descriptor);
  };
  function coerceInputValue($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.l10();
      var elementDescriptor = descriptor.th(index);
      var tmp;
      if (!elementDescriptor.kh()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.w12(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.rh(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.kh()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.w12(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.w12(tag);
        var tmp0_safe_receiver = tmp_3 instanceof JsonPrimitive ? tmp_3 : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_4;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_4 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_4;
        var enumIndex = getJsonNameIndex(elementDescriptor, this_0, enumValue);
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.s13_1 = (!$this.l10().fz_1.c10_1 ? !descriptor.wh(index) : false) ? descriptor.th(index).kh() : false;
    return $this.s13_1;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.o13_1 = value;
    this.p13_1 = polyDiscriminator;
    this.q13_1 = polyDescriptor;
    this.r13_1 = 0;
    this.s13_1 = false;
  }
  protoOf(JsonTreeDecoder).c2 = function () {
    return this.o13_1;
  };
  protoOf(JsonTreeDecoder).uj = function (descriptor) {
    while (this.r13_1 < descriptor.ph()) {
      var tmp1 = this.r13_1;
      this.r13_1 = tmp1 + 1 | 0;
      var name = this.yv(descriptor, tmp1);
      var index = this.r13_1 - 1 | 0;
      this.s13_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.c2();
      if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).f2(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.u12_1.e10_1 ? true : !coerceInputValue(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).si = function () {
    return !this.s13_1 ? protoOf(AbstractJsonTreeDecoder).si.call(this) : false;
  };
  protoOf(JsonTreeDecoder).zv = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.l10());
    var baseName = descriptor.vh(index);
    if (strategy == null) {
      if (!this.u12_1.i10_1)
        return baseName;
      if (this.c2().x1().x(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.l10(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.c2().x1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.s();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.v();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.h2(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.c12(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).w12 = function (tag) {
    return getValue(this.c2(), tag);
  };
  protoOf(JsonTreeDecoder).fj = function (descriptor) {
    if (descriptor === this.q13_1) {
      var tmp = this.l10();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.v12();
      var descriptor_0 = this.q13_1;
      if (!(value instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor_0.oh() + ', but had ' + getKClassFromExpression(value));
      }
      return new JsonTreeDecoder(tmp, value, this.p13_1, this.q13_1);
    }
    return protoOf(AbstractJsonTreeDecoder).fj.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).gj = function (descriptor) {
    var tmp;
    if (this.u12_1.yz_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.rh();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.l10());
    var tmp_1;
    if (strategy == null ? !this.u12_1.i10_1 : false) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.l10(), descriptor).x1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.l10()).l12(descriptor, get_JsonDeserializationNamesKey());
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.c2().x1().s();
    while (tmp1_iterator.t()) {
      var key = tmp1_iterator.v();
      if (!names.x(key) ? !(key === this.p13_1) : false) {
        throw UnknownKeyException(key, this.c2().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.y13_1 = value;
    this.z13_1 = this.y13_1.l();
    this.a14_1 = -1;
  }
  protoOf(JsonTreeListDecoder).c2 = function () {
    return this.y13_1;
  };
  protoOf(JsonTreeListDecoder).zv = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).w12 = function (tag) {
    return this.y13_1.d1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).uj = function (descriptor) {
    while (this.a14_1 < (this.z13_1 - 1 | 0)) {
      this.a14_1 = this.a14_1 + 1 | 0;
      return this.a14_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.g14_1 = value;
    this.rw(get_PRIMITIVE_TAG());
  }
  protoOf(JsonPrimitiveDecoder).c2 = function () {
    return this.g14_1;
  };
  protoOf(JsonPrimitiveDecoder).uj = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).w12 = function (tag) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(tag === get_PRIMITIVE_TAG())) {
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveDecoder.currentElement.<anonymous>' call
      var message = "This input can only handle primitives with '" + get_PRIMITIVE_TAG() + "' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.g14_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.r14_1 = value;
    this.s14_1 = toList(this.r14_1.x1());
    this.t14_1 = imul(this.s14_1.l(), 2);
    this.u14_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).c2 = function () {
    return this.r14_1;
  };
  protoOf(JsonTreeMapDecoder).zv = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.s14_1.d1(i);
  };
  protoOf(JsonTreeMapDecoder).uj = function (descriptor) {
    while (this.u14_1 < (this.t14_1 - 1 | 0)) {
      this.u14_1 = this.u14_1 + 1 | 0;
      return this.u14_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).w12 = function (tag) {
    return (this.u14_1 % 2 | 0) === 0 ? JsonPrimitive_2(tag) : getValue(this.r14_1, tag);
  };
  protoOf(JsonTreeMapDecoder).gj = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.jg())).yg(deserializer);
  }
  function get_PRIMITIVE_TAG() {
    return PRIMITIVE_TAG;
  }
  var PRIMITIVE_TAG;
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.rh(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.qh()) {
      tmp = carrierDescriptor(_this__u8e3s4.th(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function appendEscape($this, lastPosition, current) {
    $this.v14(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.v14(lastPosition, currentPosition);
    var result = $this.z10_1.toString();
    $this.z10_1.h7(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.y10_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.y10_1 = null;
    return this_0;
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.w14(currentPosition);
    if (currentPosition === -1) {
      $this.p12('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.x14();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.x14(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.p12("Invalid escaped char '" + toString_0(currentChar) + "'");
    }
    $this.z10_1.w4(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.w10_1 = startPos;
      $this.y14();
      if (($this.w10_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.p12('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.w10_1);
    }
    $this.z10_1.w4(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.p12("Invalid toHexChar char '" + toString_0(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.l5();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.l5();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.w10_1 = 0;
    this.x10_1 = new JsonPath();
    this.y10_1 = null;
    this.z10_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).y14 = function () {
  };
  protoOf(AbstractJsonLexer).z14 = function (expected) {
    if (this.w10_1 > 0 ? expected === _Char___init__impl__6a9atx(34) : false) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.w10_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.w10_1 = this.w10_1 - 1 | 0;
          tmp$ret$1 = this.o12();
          break $l$block;
        }finally {
          this.w10_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.a15("Expected string literal but 'null' literal was found", this.w10_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls to default values.");
      }
    }
    this.b15(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).c15 = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.w10_1 - 1 | 0 : this.w10_1;
    var s = (this.w10_1 === charSequenceLength(this.x14()) ? true : position < 0) ? 'EOF' : toString_0(charSequenceGet(this.x14(), position));
    this.p12('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).b15 = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.c15(expectedToken, wasConsumed) : $super.c15.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).d15 = function () {
    var current = this.w10_1;
    $l$loop_0: while (true) {
      current = this.w14(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.x14(), current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.w10_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).e15 = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.x14();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).g15 = function () {
    if (!(this.y10_1 == null)) {
      return takePeeked(this);
    }
    return this.f15();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.w14(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.p12('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.v14(lastPosition, currentPosition);
          currentPosition = this.w14(currentPosition);
          if (currentPosition === -1) {
            this.p12('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.e15(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.w10_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).o12 = function () {
    if (!(this.y10_1 == null)) {
      return takePeeked(this);
    }
    var current = this.d15();
    if (current >= charSequenceLength(this.x14()) ? true : current === -1) {
      this.p12('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.x14(), current));
    if (token === 1) {
      return this.g15();
    }
    if (!(token === 0)) {
      this.p12('Expected beginning of the string, but got ' + toString_0(charSequenceGet(this.x14(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.x14(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.x14())) {
        usedAppend = true;
        this.v14(this.w10_1, current);
        var eof = this.w14(current);
        if (eof === -1) {
          this.w10_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.e15(this.w10_1, current);
    } else {
      tmp = decodedString(this, this.w10_1, current);
    }
    var result = tmp;
    this.w10_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).v14 = function (fromIndex, toIndex) {
    this.z10_1.c7(this.x14(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + this.x14() + "', currentPosition=" + this.w10_1 + ')';
  };
  protoOf(AbstractJsonLexer).a15 = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.x10_1.g12() + hintMessage, this.x14());
  };
  protoOf(AbstractJsonLexer).p12 = function (message, position, hint, $super) {
    position = position === VOID ? this.w10_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.a15(message, position, hint) : $super.a15.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).a11 = function () {
    var current = this.d15();
    current = this.w14(current);
    if (current >= charSequenceLength(this.x14()) ? true : current === -1) {
      this.p12('EOF');
    }
    var tmp;
    if (charSequenceGet(this.x14(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.x14())) {
        this.p12('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.x14()))) {
      var ch = charSequenceGet(this.x14(), current);
      if ((ch === _Char___init__impl__6a9atx(101) ? true : ch === _Char___init__impl__6a9atx(69)) ? !hasExponent : false) {
        if (current === start) {
          this.p12('Unexpected symbol ' + toString_0(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) ? hasExponent : false) {
        if (current === start) {
          this.p12("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) ? hasExponent : false) {
        if (current === start) {
          this.p12("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.p12("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.p12("Unexpected symbol '" + toString_0(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.plus' call
        // Inline function 'kotlin.Long.times' call
        exponentAccumulator = exponentAccumulator.i8(toLong(10)).m9(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.Long.times' call
      accumulator = accumulator.i8(toLong(10)).n9(toLong(digit));
      if (accumulator.n5(new Long(0, 0)) > 0) {
        this.p12('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.p12('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.p12('EOF');
      }
      if (!(charSequenceGet(this.x14(), current) === _Char___init__impl__6a9atx(34))) {
        this.p12('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.w10_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.l5() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      var tmp_0;
      Companion_getInstance_3();
      if (doubleAccumulator > (new Long(-1, 2147483647)).l5()) {
        tmp_0 = true;
      } else {
        Companion_getInstance_3();
        tmp_0 = doubleAccumulator < (new Long(0, -2147483648)).l5();
      }
      if (tmp_0) {
        this.p12('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.p12("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_3();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.m5();
      } else {
        this.p12('Numeric value overflow');
      }
    }
    return tmp_1;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().i15_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().h15_1[c] : _Char___init__impl__6a9atx(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.h15_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.i15_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.h15_1 = charArray(117);
    this.i15_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.n15_1 = source;
  }
  protoOf(StringJsonLexer).x14 = function () {
    return this.n15_1;
  };
  protoOf(StringJsonLexer).w14 = function (position) {
    return position < this.n15_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).d15 = function () {
    var current = this.w10_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.n15_1.length) {
      var c = charSequenceGet(this.n15_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.w10_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).o15 = function (expected) {
    if (this.w10_1 === -1) {
      this.z14(expected);
    }
    var source = this.n15_1;
    $l$loop: while (this.w10_1 < source.length) {
      var tmp1 = this.w10_1;
      this.w10_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      if (c === expected)
        return Unit_instance;
      this.z14(expected);
    }
    this.w10_1 = -1;
    this.z14(expected);
  };
  protoOf(StringJsonLexer).f15 = function () {
    this.o15(get_STRING());
    var current = this.w10_1;
    var closingQuote = indexOf(this.n15_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.o12();
      this.c15(get_TC_STRING(), false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.n15_1, i) === get_STRING_ESC()) {
          return this.consumeString2(this.n15_1, this.w10_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.w10_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.n15_1.substring(current, closingQuote);
  };
  function encodeToDynamic(_this__u8e3s4, serializer, value) {
    return encodeToDynamic_0(_this__u8e3s4, serializer, value);
  }
  function decodeFromDynamic(_this__u8e3s4, deserializer, dynamic) {
    return decodeDynamic(_this__u8e3s4, deserializer, dynamic);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.hz_1;
  }
  function decodeDynamic(_this__u8e3s4, deserializer, dynamic) {
    var tmp;
    switch (typeof dynamic) {
      case 'boolean':
      case 'number':
      case 'string':
        tmp = new PrimitiveDynamicInput(dynamic, _this__u8e3s4);
        break;
      default:
        var tmp_0;
        if (Array.isArray(dynamic)) {
          tmp_0 = new DynamicListInput(dynamic, _this__u8e3s4);
        } else {
          tmp_0 = new DynamicInput(dynamic, _this__u8e3s4);
        }

        tmp = tmp_0;
        break;
    }
    var input = tmp;
    return input.yg(deserializer);
  }
  function get_MAX_SAFE_INTEGER() {
    return MAX_SAFE_INTEGER;
  }
  var MAX_SAFE_INTEGER;
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.l10();
      var elementDescriptor = descriptor.th(index);
      var tmp;
      if (!elementDescriptor.kh()) {
        // Inline function 'kotlinx.serialization.json.internal.DynamicInput.coerceInputValue.<anonymous>' call
        tmp = $this.x15(tag) == null;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.rh(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.kh()) {
          // Inline function 'kotlinx.serialization.json.internal.DynamicInput.coerceInputValue.<anonymous>' call
          tmp_0 = $this.x15(tag) == null;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.DynamicInput.coerceInputValue.<anonymous>' call
        var tmp_1 = $this.x15(tag);
        var tmp0_elvis_lhs = (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : null;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_2;
        var enumIndex = getJsonNameIndex(elementDescriptor, this_0, enumValue);
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function hasName($this, name) {
    return $this.r15_1[name] !== undefined;
  }
  function absenceIsNull_0($this, descriptor, index) {
    $this.v15_1 = (!$this.l10().fz_1.c10_1 ? !descriptor.wh(index) : false) ? descriptor.th(index).kh() : false;
    return $this.v15_1;
  }
  function throwMissingTag($this, tag) {
    throw SerializationException_init_$Create$('Value for field ' + tag + ' is missing');
  }
  function DynamicInput(value, json) {
    NamedValueDecoder.call(this);
    this.r15_1 = value;
    this.s15_1 = json;
    var tmp = this;
    var tmp0_elvis_lhs = this.r15_1;
    tmp.t15_1 = Object.keys(tmp0_elvis_lhs == null ? {} : tmp0_elvis_lhs);
    var tmp_0 = this;
    var tmp_1 = this.t15_1.length;
    tmp_0.u15_1 = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    this.v15_1 = false;
    this.w15_1 = 0;
  }
  protoOf(DynamicInput).l10 = function () {
    return this.s15_1;
  };
  protoOf(DynamicInput).l = function () {
    return this.u15_1;
  };
  protoOf(DynamicInput).ug = function () {
    return this.l10().ug();
  };
  protoOf(DynamicInput).m10 = function () {
    var tag = this.dw();
    if (!(tag == null)) {
      return decodeFromDynamic(this.l10(), Companion_instance_0.n10(), this.r15_1[tag]);
    }
    if (this.r15_1 == null) {
      return JsonNull_getInstance();
    }
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    // Inline function 'kotlin.contracts.contract' call
    var builder = new JsonObjectBuilder();
    // Inline function 'kotlinx.serialization.json.internal.DynamicInput.decodeJsonElement.<anonymous>' call
    var inductionVariable = 0;
    var last = this.l();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var key = this.t15_1[i];
        var value = decodeDynamic(this.l10(), Companion_instance_0.n10(), this.r15_1[key]);
        builder.f11(toString(key), value);
      }
       while (inductionVariable < last);
    return builder.po();
  };
  protoOf(DynamicInput).yg = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(DynamicInput).ew = function (parentName, childName) {
    return childName;
  };
  protoOf(DynamicInput).uj = function (descriptor) {
    while (this.w15_1 < descriptor.ph()) {
      var tmp1 = this.w15_1;
      this.w15_1 = tmp1 + 1 | 0;
      var name = this.yv(descriptor, tmp1);
      var index = this.w15_1 - 1 | 0;
      this.v15_1 = false;
      if ((hasName(this, name) ? true : absenceIsNull_0(this, descriptor, index)) ? !this.l10().fz_1.e10_1 ? true : !coerceInputValue_0(this, descriptor, index, name) : false) {
        return index;
      }
    }
    return -1;
  };
  protoOf(DynamicInput).zv = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.l10());
    var mainName = descriptor.vh(index);
    if (strategy == null) {
      if (!this.l10().fz_1.i10_1)
        return mainName;
      if (hasName(this, mainName))
        return mainName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.l10(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp = this.t15_1;
    var this_0 = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = this_0.length;
      while (inductionVariable < last) {
        var element = this_0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.DynamicInput.elementName.<anonymous>' call
        if (deserializationNamesMap_0.h2(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.c12(descriptor, index, mainName);
    return fallbackName == null ? mainName : fallbackName;
  };
  protoOf(DynamicInput).x15 = function (tag) {
    return this.r15_1[tag];
  };
  protoOf(DynamicInput).g13 = function (tag) {
    var value = this.x15(tag);
    var tmp;
    if (!(value == null) ? typeof value === 'string' : false) {
      var tmp_0;
      if (value.length === 1) {
        tmp_0 = charSequenceGet(value, 0);
      } else {
        throw SerializationException_init_$Create$('' + value + " can't be represented as Char");
      }
      tmp = tmp_0;
    } else {
      if (isNumber(value)) {
        var tmp0_elvis_lhs = (!(value == null) ? typeof value === 'number' : false) ? value : null;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          throw SerializationException_init_$Create$('' + value + ' is not a Number');
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var num = tmp_1;
        var codePoint = this.y15(num);
        var tmp_2;
        if (codePoint.n5(new Long(0, 0)) < 0) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.code' call
          Companion_getInstance_4();
          var this_0 = _Char___init__impl__6a9atx(65535);
          var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
          tmp_2 = codePoint.n5(toLong(tmp$ret$0)) > 0;
        }
        if (tmp_2)
          throw SerializationException_init_$Create$('' + value + " can't be represented as Char because it's not in bounds of Char.MIN_VALUE..Char.MAX_VALUE");
        tmp = numberToChar(codePoint.q8());
      } else {
        throw SerializationException_init_$Create$('' + value + " can't be represented as Char");
      }
    }
    return tmp;
  };
  protoOf(DynamicInput).ow = function (tag) {
    return this.g13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(DynamicInput).d13 = function (tag) {
    var value = this.x15(tag);
    var tmp0_elvis_lhs = (!(value == null) ? typeof value === 'number' : false) ? value : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw SerializationException_init_$Create$('' + value + ' is not a Number');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var number = tmp;
    return this.y15(number);
  };
  protoOf(DynamicInput).lw = function (tag) {
    return this.d13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(DynamicInput).y15 = function (number) {
    var tmp;
    if (isFinite_0(number)) {
      // Inline function 'kotlin.math.floor' call
      tmp = Math.floor(number) === number;
    } else {
      tmp = false;
    }
    var canBeConverted = tmp;
    if (!canBeConverted)
      throw SerializationException_init_$Create$('' + number + " can't be represented as Long because it is not finite or has non-zero fractional part");
    // Inline function 'kotlin.math.abs' call
    var inBound = Math.abs(number) <= 9.007199254740991E15;
    if (!inBound)
      throw SerializationException_init_$Create$('' + number + " can't be deserialized to Long due to a potential precision loss");
    return numberToLong(number);
  };
  protoOf(DynamicInput).z15 = function (tag) {
    var tmp0_elvis_lhs = this.x15(tag);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwMissingTag(this, tag);
      tmp = Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var o = tmp;
    return !(o == null) ? o : THROW_CCE();
  };
  protoOf(DynamicInput).fw = function (tag) {
    return this.z15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(DynamicInput).y12 = function (tag) {
    if (this.v15_1) {
      return false;
    }
    var o = this.x15(tag);
    if (o === undefined) {
      throwMissingTag(this, tag);
    }
    return o != null;
  };
  protoOf(DynamicInput).gw = function (tag) {
    return this.y12((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(DynamicInput).fj = function (descriptor) {
    var tmp0_safe_receiver = this.dw();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.DynamicInput.beginStructure.<anonymous>' call
      tmp = this.r15_1[tmp0_safe_receiver];
    }
    var tmp1_elvis_lhs = tmp;
    var currentValue = tmp1_elvis_lhs == null ? this.r15_1 : tmp1_elvis_lhs;
    var tmp_0;
    if (descriptor.rh() instanceof PolymorphicKind) {
      tmp_0 = this.l10().fz_1.f10_1 ? LIST_getInstance() : MAP_getInstance();
    } else {
      tmp_0 = descriptor.rh();
    }
    var kind = tmp_0;
    return equals(kind, LIST_getInstance()) ? new DynamicListInput(currentValue, this.l10()) : equals(kind, MAP_getInstance()) ? new DynamicMapInput(currentValue, this.l10()) : new DynamicInput(currentValue, this.l10());
  };
  function PrimitiveDynamicInput(value, json) {
    DynamicInput.call(this, value, json);
    this.rw('primitive');
  }
  protoOf(PrimitiveDynamicInput).x15 = function (tag) {
    return this.r15_1;
  };
  protoOf(PrimitiveDynamicInput).m10 = function () {
    var str = toString(this.r15_1);
    var tmp;
    switch (typeof this.r15_1) {
      case 'boolean':
        tmp = JsonPrimitive_1(toBoolean(str));
        break;
      case 'number':
        var l = toLongOrNull(str);
        if (!(l == null))
          return JsonPrimitive_0(l);
        var d = toDoubleOrNull(str);
        if (!(d == null))
          return JsonPrimitive_0(d);
        return JsonPrimitive_2(str);
      default:
        tmp = JsonPrimitive_2(str);
        break;
    }
    return tmp;
  };
  function DynamicListInput(value, json) {
    DynamicInput.call(this, value, json);
    var tmp = this;
    var tmp_0 = value.length;
    tmp.q16_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    this.r16_1 = -1;
  }
  protoOf(DynamicListInput).l = function () {
    return this.q16_1;
  };
  protoOf(DynamicListInput).zv = function (descriptor, index) {
    return index.toString();
  };
  protoOf(DynamicListInput).uj = function (descriptor) {
    while (this.r16_1 < (this.q16_1 - 1 | 0)) {
      this.r16_1 = this.r16_1 + 1 | 0;
      var o = this.r15_1[this.r16_1];
      if (o !== undefined)
        return this.r16_1;
    }
    return -1;
  };
  protoOf(DynamicListInput).m10 = function () {
    var tag = this.dw();
    if (!(tag == null)) {
      return decodeFromDynamic(this.l10(), Companion_instance_0.n10(), this.r15_1[tag]);
    }
    // Inline function 'kotlinx.serialization.json.buildJsonArray' call
    // Inline function 'kotlin.contracts.contract' call
    var builder = new JsonArrayBuilder();
    // Inline function 'kotlinx.serialization.json.internal.DynamicListInput.decodeJsonElement.<anonymous>' call
    var inductionVariable = 0;
    var last = this.q16_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        builder.h11(decodeFromDynamic(this.l10(), Companion_instance_0.n10(), this.r15_1[i]));
      }
       while (inductionVariable < last);
    return builder.po();
  };
  function _get_isKey__g0dpic($this) {
    return ($this.b17_1 % 2 | 0) === 0;
  }
  function throwIllegalKeyType($this, tag, value, type) {
    throw SerializationException_init_$Create$('Property ' + tag + ' is not valid type ' + type + ': ' + toString(value));
  }
  function DynamicMapInput(value, json) {
    DynamicInput.call(this, value, json);
    var tmp = this;
    var tmp_0 = this.t15_1.length;
    tmp.a17_1 = imul((!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE(), 2);
    this.b17_1 = -1;
  }
  protoOf(DynamicMapInput).l = function () {
    return this.a17_1;
  };
  protoOf(DynamicMapInput).zv = function (descriptor, index) {
    var i = index / 2 | 0;
    var tmp = this.t15_1[i];
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  };
  protoOf(DynamicMapInput).a13 = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.z15(tag);
        if (!(typeof value === 'string')) {
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedByte.<anonymous>' call
          tmp$ret$1 = protoOf(DynamicInput).iw.call(this, tag);
          break $l$block_0;
        }
        // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedByte.<anonymous>' call
        var $this$decodeMapKey = toString(value);
        var tmp0_elvis_lhs = toByteOrNull($this$decodeMapKey);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throwIllegalKeyType(this, tag, value, 'byte');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      }
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedByte.<anonymous>' call
      tmp$ret$1 = protoOf(DynamicInput).iw.call(this, tag);
    }
    return tmp$ret$1;
  };
  protoOf(DynamicMapInput).iw = function (tag) {
    return this.a13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(DynamicMapInput).b13 = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.z15(tag);
        if (!(typeof value === 'string')) {
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedShort.<anonymous>' call
          tmp$ret$1 = protoOf(DynamicInput).jw.call(this, tag);
          break $l$block_0;
        }
        // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedShort.<anonymous>' call
        var $this$decodeMapKey = toString(value);
        var tmp0_elvis_lhs = toShortOrNull($this$decodeMapKey);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throwIllegalKeyType(this, tag, value, 'short');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      }
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedShort.<anonymous>' call
      tmp$ret$1 = protoOf(DynamicInput).jw.call(this, tag);
    }
    return tmp$ret$1;
  };
  protoOf(DynamicMapInput).jw = function (tag) {
    return this.b13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(DynamicMapInput).c13 = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.z15(tag);
        if (!(typeof value === 'string')) {
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedInt.<anonymous>' call
          tmp$ret$1 = protoOf(DynamicInput).kw.call(this, tag);
          break $l$block_0;
        }
        // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedInt.<anonymous>' call
        var $this$decodeMapKey = toString(value);
        var tmp0_elvis_lhs = toIntOrNull($this$decodeMapKey);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throwIllegalKeyType(this, tag, value, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      }
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedInt.<anonymous>' call
      tmp$ret$1 = protoOf(DynamicInput).kw.call(this, tag);
    }
    return tmp$ret$1;
  };
  protoOf(DynamicMapInput).kw = function (tag) {
    return this.c13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(DynamicMapInput).d13 = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.z15(tag);
        if (!(typeof value === 'string')) {
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedLong.<anonymous>' call
          tmp$ret$1 = protoOf(DynamicInput).d13.call(this, tag);
          break $l$block_0;
        }
        // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedLong.<anonymous>' call
        var $this$decodeMapKey = toString(value);
        var tmp0_elvis_lhs = toDoubleOrNull($this$decodeMapKey);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throwIllegalKeyType(this, tag, $this$decodeMapKey, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var tmp0_elvis_lhs_0 = this.y15(tmp);
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          throwIllegalKeyType(this, tag, value, 'long');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block_0;
      }
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedLong.<anonymous>' call
      tmp$ret$1 = protoOf(DynamicInput).d13.call(this, tag);
    }
    return tmp$ret$1;
  };
  protoOf(DynamicMapInput).lw = function (tag) {
    return this.d13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(DynamicMapInput).e13 = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.z15(tag);
        if (!(typeof value === 'string')) {
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedFloat.<anonymous>' call
          tmp$ret$1 = protoOf(DynamicInput).mw.call(this, tag);
          break $l$block_0;
        }
        // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedFloat.<anonymous>' call
        // Inline function 'kotlin.text.toFloatOrNull' call
        var this_0 = toString(value);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_elvis_lhs = toDoubleOrNull(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throwIllegalKeyType(this, tag, value, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      }
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedFloat.<anonymous>' call
      tmp$ret$1 = protoOf(DynamicInput).mw.call(this, tag);
    }
    return tmp$ret$1;
  };
  protoOf(DynamicMapInput).mw = function (tag) {
    return this.e13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(DynamicMapInput).f13 = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.z15(tag);
        if (!(typeof value === 'string')) {
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedDouble.<anonymous>' call
          tmp$ret$1 = protoOf(DynamicInput).nw.call(this, tag);
          break $l$block_0;
        }
        // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedDouble.<anonymous>' call
        var $this$decodeMapKey = toString(value);
        var tmp0_elvis_lhs = toDoubleOrNull($this$decodeMapKey);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throwIllegalKeyType(this, tag, value, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      }
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedDouble.<anonymous>' call
      tmp$ret$1 = protoOf(DynamicInput).nw.call(this, tag);
    }
    return tmp$ret$1;
  };
  protoOf(DynamicMapInput).nw = function (tag) {
    return this.f13((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(DynamicMapInput).uj = function (descriptor) {
    while (this.b17_1 < (this.a17_1 - 1 | 0)) {
      var tmp1 = this.b17_1;
      this.b17_1 = tmp1 + 1 | 0;
      var i = tmp1 / 2 | 0;
      var tmp = this.t15_1[i];
      var name = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
      if (this.r15_1[name] !== undefined)
        return this.b17_1;
    }
    return -1;
  };
  protoOf(DynamicMapInput).x15 = function (tag) {
    return (this.b17_1 % 2 | 0) === 0 ? tag : this.r15_1[tag];
  };
  function encodeToDynamic_0(_this__u8e3s4, serializer, value) {
    var tmp;
    var tmp_0 = serializer.jg().rh();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = true;
    } else {
      var tmp_1 = serializer.jg().rh();
      tmp = tmp_1 instanceof ENUM;
    }
    if (tmp) {
      var encoder = new DynamicPrimitiveEncoder(_this__u8e3s4);
      encoder.vg(serializer, value);
      return encoder.d17_1;
    }
    var encoder_0 = new DynamicObjectEncoder(_this__u8e3s4, false);
    encoder_0.vg(serializer, value);
    return encoder_0.g17_1;
  }
  function DynamicPrimitiveEncoder(json) {
    AbstractEncoder.call(this);
    this.c17_1 = json;
    this.d17_1 = null;
  }
  protoOf(DynamicPrimitiveEncoder).l10 = function () {
    return this.c17_1;
  };
  protoOf(DynamicPrimitiveEncoder).ug = function () {
    return this.c17_1.ug();
  };
  protoOf(DynamicPrimitiveEncoder).yj = function () {
    this.d17_1 = null;
  };
  protoOf(DynamicPrimitiveEncoder).dk = function (value) {
    var asDouble = value.l5();
    if (!this.c17_1.fz_1.zz_1 ? abs(value).l5() > get_MAX_SAFE_INTEGER() : false) {
      throw IllegalArgumentException_init_$Create$(value.toString() + " can't be deserialized to number due to a potential precision loss. " + 'Use the JsonConfiguration option isLenient to serialize anyway');
    }
    this.xj(asDouble);
  };
  protoOf(DynamicPrimitiveEncoder).gk = function (value) {
    this.xj(toString_0(value));
  };
  protoOf(DynamicPrimitiveEncoder).xj = function (value) {
    this.d17_1 = value;
  };
  protoOf(DynamicPrimitiveEncoder).gj = function (descriptor) {
  };
  var WriteMode_OBJ_instance;
  var WriteMode_MAP_instance;
  var WriteMode_LIST_instance;
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0);
    WriteMode_MAP_instance = new WriteMode('MAP', 1);
    WriteMode_LIST_instance = new WriteMode('LIST', 2);
  }
  function _get_current__qcrdxk($this) {
    var tmp = $this.h17_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('current');
    }
  }
  function NoOutputMark() {
  }
  var NoOutputMark_instance;
  function NoOutputMark_getInstance() {
    return NoOutputMark_instance;
  }
  function Node(writeMode, jsObject) {
    this.m17_1 = writeMode;
    this.n17_1 = jsObject;
    this.o17_1 = 0;
  }
  protoOf(Node).q17 = function () {
    var tmp = this.p17_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('parent');
    }
  };
  function WriteMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function enterNode($this, jsObject, writeMode) {
    var child = new Node(writeMode, jsObject);
    child.p17_1 = _get_current__qcrdxk($this);
    $this.h17_1 = child;
  }
  function exitNode($this) {
    $this.h17_1 = _get_current__qcrdxk($this).q17();
    $this.k17_1 = false;
  }
  function isNotStructured($this) {
    return $this.g17_1 === NoOutputMark_instance;
  }
  function newChild($this, writeMode) {
    var tmp;
    switch (writeMode.x7_1) {
      case 0:
      case 1:
        tmp = {};
        break;
      case 2:
        tmp = [];
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function DynamicObjectEncoder(json, encodeNullAsUndefined) {
    AbstractEncoder.call(this);
    this.e17_1 = json;
    this.f17_1 = encodeNullAsUndefined;
    this.g17_1 = NoOutputMark_instance;
    this.i17_1 = null;
    this.k17_1 = false;
    this.l17_1 = null;
  }
  protoOf(DynamicObjectEncoder).l10 = function () {
    return this.e17_1;
  };
  protoOf(DynamicObjectEncoder).ug = function () {
    return this.e17_1.ug();
  };
  protoOf(DynamicObjectEncoder).wj = function (descriptor, index) {
    _get_current__qcrdxk(this).o17_1 = index;
    this.j17_1 = descriptor;
    if (_get_current__qcrdxk(this).m17_1.equals(WriteMode_MAP_getInstance()))
      this.k17_1 = (_get_current__qcrdxk(this).o17_1 % 2 | 0) === 0;
    else {
      var tmp;
      if (_get_current__qcrdxk(this).m17_1.equals(WriteMode_LIST_getInstance())) {
        var tmp_0 = descriptor.rh();
        tmp = tmp_0 instanceof PolymorphicKind;
      } else {
        tmp = false;
      }
      if (tmp)
        this.i17_1 = index.toString();
      else {
        this.i17_1 = getJsonElementName(descriptor, this.e17_1, index);
      }
    }
    return true;
  };
  protoOf(DynamicObjectEncoder).xj = function (value) {
    if (this.k17_1) {
      this.i17_1 = toString(value);
    } else if (isNotStructured(this)) {
      this.g17_1 = value;
    } else {
      _get_current__qcrdxk(this).n17_1[this.i17_1] = value;
    }
  };
  protoOf(DynamicObjectEncoder).gk = function (value) {
    this.xj(toString_0(value));
  };
  protoOf(DynamicObjectEncoder).yj = function () {
    if (this.k17_1) {
      this.i17_1 = null;
    } else {
      if (this.f17_1)
        return Unit_instance;
      _get_current__qcrdxk(this).n17_1[this.i17_1] = null;
    }
  };
  protoOf(DynamicObjectEncoder).dk = function (value) {
    var asDouble = value.l5();
    // Inline function 'kotlin.math.abs' call
    var conversionHasLossOfPrecision = Math.abs(asDouble) > get_MAX_SAFE_INTEGER();
    if (!this.e17_1.fz_1.zz_1 ? conversionHasLossOfPrecision : false) {
      throw IllegalArgumentException_init_$Create$(value.toString() + " can't be serialized to number due to a potential precision loss. " + 'Use the JsonConfiguration option isLenient to serialize anyway');
    }
    if (this.k17_1 ? conversionHasLossOfPrecision : false) {
      throw IllegalArgumentException_init_$Create$('Long with value ' + value.toString() + " can't be used in json as map key, because its value is larger than Number.MAX_SAFE_INTEGER");
    }
    this.xj(asDouble);
  };
  protoOf(DynamicObjectEncoder).ek = function (value) {
    this.fk(value);
  };
  protoOf(DynamicObjectEncoder).fk = function (value) {
    if (this.k17_1) {
      // Inline function 'kotlin.math.floor' call
      var hasNonZeroFractionalPart = !(Math.floor(value) === value);
      if (!isFinite_0(value) ? true : hasNonZeroFractionalPart) {
        throw IllegalArgumentException_init_$Create$('Double with value ' + value + " can't be used in json as map key, because its value is not an integer.");
      }
    }
    this.xj(value);
  };
  protoOf(DynamicObjectEncoder).vg = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.l10().fz_1.f10_1;
      }
      if (tmp) {
        serializer.wg(this, value);
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.jg(), this.l10());
      var actualSerializer = findPolymorphicSerializer(casted, this, !(value == null) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.jg().rh());
      // Inline function 'kotlinx.serialization.json.internal.DynamicObjectEncoder.encodeSerializableValue.<anonymous>' call
      this.l17_1 = baseClassDiscriminator;
      actualSerializer.wg(this, value);
    }
  };
  protoOf(DynamicObjectEncoder).fj = function (descriptor) {
    if (this.k17_1) {
      throw IllegalArgumentException_init_$Create$('Value of type ' + descriptor.oh() + " can't be used in json as map key. " + ('It should have either primitive or enum kind, but its kind is ' + descriptor.rh() + '.'));
    }
    var newMode = this.r17(descriptor);
    if (this.g17_1 === NoOutputMark_instance) {
      this.g17_1 = newChild(this, newMode);
      this.h17_1 = new Node(newMode, this.g17_1);
      _get_current__qcrdxk(this).p17_1 = _get_current__qcrdxk(this);
    } else {
      var child = newChild(this, newMode);
      _get_current__qcrdxk(this).n17_1[this.i17_1] = child;
      enterNode(this, child, newMode);
    }
    if (!(this.l17_1 == null)) {
      _get_current__qcrdxk(this).n17_1[ensureNotNull(this.l17_1)] = descriptor.oh();
      this.l17_1 = null;
    }
    _get_current__qcrdxk(this).o17_1 = 0;
    return this;
  };
  protoOf(DynamicObjectEncoder).gj = function (descriptor) {
    exitNode(this);
  };
  protoOf(DynamicObjectEncoder).r17 = function (desc) {
    var tmp0_subject = desc.rh();
    var tmp;
    if ((equals(tmp0_subject, CLASS_getInstance()) ? true : equals(tmp0_subject, OBJECT_getInstance())) ? true : equals(tmp0_subject, CONTEXTUAL_getInstance())) {
      tmp = WriteMode_OBJ_getInstance();
    } else {
      var tmp_0;
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp_0 = true;
      } else {
        tmp_0 = tmp0_subject instanceof PolymorphicKind;
      }
      if (tmp_0) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          tmp = WriteMode_MAP_getInstance();
        } else {
          var tmp_1;
          if (tmp0_subject instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(tmp0_subject, ENUM_getInstance());
          }
          if (tmp_1) {
            var message = 'DynamicObjectSerializer does not support serialization of singular primitive values or enum types.';
            throw IllegalStateException_init_$Create$(toString(message));
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
    return tmp;
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).kh = get_isNullable;
  protoOf(defer$1).qh = get_isInline;
  protoOf(defer$1).kg = get_annotations;
  protoOf(PolymorphismValidator).my = contextual;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Tombstone_instance = new Tombstone();
  PRIMITIVE_TAG = 'primitive';
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  lenientHint = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  MAX_SAFE_INTEGER = 9.007199254740991E15;
  NoOutputMark_instance = new NoOutputMark();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = JsonNull_getInstance;
  _.$_$.b = JsonArray;
  _.$_$.c = JsonDecoder;
  _.$_$.d = JsonObject;
  _.$_$.e = JsonPrimitive;
  _.$_$.f = Json_0;
  _.$_$.g = decodeFromDynamic;
  _.$_$.h = encodeToDynamic;
  _.$_$.i = get_long;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
