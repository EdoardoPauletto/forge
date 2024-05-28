(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.m8;
  var objectCreate = kotlin_kotlin.$_$.k8;
  var emptyList = kotlin_kotlin.$_$.h5;
  var Unit_instance = kotlin_kotlin.$_$.f4;
  var asList = kotlin_kotlin.$_$.t4;
  var THROW_CCE = kotlin_kotlin.$_$.sa;
  var classMeta = kotlin_kotlin.$_$.j7;
  var setMetadataFor = kotlin_kotlin.$_$.n8;
  var VOID = kotlin_kotlin.$_$.f;
  var interfaceMeta = kotlin_kotlin.$_$.s7;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.v3;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.h;
  var lazy = kotlin_kotlin.$_$.kb;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.c9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.p7;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.g1;
  var captureStack = kotlin_kotlin.$_$.e7;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.i1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.k1;
  var IllegalArgumentException = kotlin_kotlin.$_$.la;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var KClass = kotlin_kotlin.$_$.a9;
  var isInterface = kotlin_kotlin.$_$.b8;
  var Triple = kotlin_kotlin.$_$.ta;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.pa;
  var Entry = kotlin_kotlin.$_$.n4;
  var LinkedHashMap = kotlin_kotlin.$_$.k4;
  var MutableMap = kotlin_kotlin.$_$.q4;
  var Map = kotlin_kotlin.$_$.o4;
  var HashMap = kotlin_kotlin.$_$.i4;
  var LinkedHashSet = kotlin_kotlin.$_$.l4;
  var MutableSet = kotlin_kotlin.$_$.r4;
  var Set = kotlin_kotlin.$_$.s4;
  var HashSet = kotlin_kotlin.$_$.j4;
  var ArrayList = kotlin_kotlin.$_$.g4;
  var MutableList = kotlin_kotlin.$_$.p4;
  var List = kotlin_kotlin.$_$.m4;
  var Collection = kotlin_kotlin.$_$.h4;
  var copyToArray = kotlin_kotlin.$_$.g5;
  var toString = kotlin_kotlin.$_$.r8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.g2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.e2;
  var Result = kotlin_kotlin.$_$.qa;
  var ensureNotNull = kotlin_kotlin.$_$.hb;
  var equals = kotlin_kotlin.$_$.m7;
  var getStringHashCode = kotlin_kotlin.$_$.q7;
  var isBlank = kotlin_kotlin.$_$.h9;
  var toList = kotlin_kotlin.$_$.e6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var toHashSet = kotlin_kotlin.$_$.c6;
  var toBooleanArray = kotlin_kotlin.$_$.b6;
  var withIndex = kotlin_kotlin.$_$.h6;
  var to = kotlin_kotlin.$_$.sb;
  var toMap = kotlin_kotlin.$_$.f6;
  var lazy_0 = kotlin_kotlin.$_$.lb;
  var contentEquals = kotlin_kotlin.$_$.w4;
  var until = kotlin_kotlin.$_$.z8;
  var joinToString = kotlin_kotlin.$_$.n5;
  var objectMeta = kotlin_kotlin.$_$.l8;
  var Long = kotlin_kotlin.$_$.na;
  var Char = kotlin_kotlin.$_$.ha;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.x1;
  var Duration = kotlin_kotlin.$_$.ga;
  var Companion_getInstance = kotlin_kotlin.$_$.x3;
  var toIntOrNull = kotlin_kotlin.$_$.u9;
  var hashCode = kotlin_kotlin.$_$.r7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.m;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.w;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.x;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var isArray = kotlin_kotlin.$_$.t7;
  var arrayIterator = kotlin_kotlin.$_$.c7;
  var step = kotlin_kotlin.$_$.y8;
  var getValue = kotlin_kotlin.$_$.k5;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.q;
  var KTypeParameter = kotlin_kotlin.$_$.d9;
  var fillArrayVal = kotlin_kotlin.$_$.n7;
  var booleanArray = kotlin_kotlin.$_$.d7;
  var emptyMap = kotlin_kotlin.$_$.i5;
  var contentHashCode = kotlin_kotlin.$_$.x4;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.y3;
  var isCharArray = kotlin_kotlin.$_$.w7;
  var charArray = kotlin_kotlin.$_$.f7;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.r3;
  var isDoubleArray = kotlin_kotlin.$_$.y7;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.s3;
  var isFloatArray = kotlin_kotlin.$_$.z7;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.z3;
  var isLongArray = kotlin_kotlin.$_$.c8;
  var longArray = kotlin_kotlin.$_$.g8;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.d4;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.d3;
  var ULongArray = kotlin_kotlin.$_$.ya;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.z2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.x2;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.b3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.y2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.t3;
  var isIntArray = kotlin_kotlin.$_$.a8;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.c4;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.v2;
  var UIntArray = kotlin_kotlin.$_$.wa;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.r2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.p2;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.t2;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.q2;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.u3;
  var isShortArray = kotlin_kotlin.$_$.e8;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.e4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.l3;
  var UShortArray = kotlin_kotlin.$_$.ab;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.h3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.f3;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.j3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.g3;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.q3;
  var isByteArray = kotlin_kotlin.$_$.v7;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.b4;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.n2;
  var UByteArray = kotlin_kotlin.$_$.ua;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.k2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.h2;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.l2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.i2;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.p3;
  var isBooleanArray = kotlin_kotlin.$_$.u7;
  var coerceAtLeast = kotlin_kotlin.$_$.u8;
  var copyOf = kotlin_kotlin.$_$.b5;
  var copyOf_0 = kotlin_kotlin.$_$.d5;
  var copyOf_1 = kotlin_kotlin.$_$.e5;
  var copyOf_2 = kotlin_kotlin.$_$.z4;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.e3;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.a3;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.c3;
  var copyOf_3 = kotlin_kotlin.$_$.f5;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.w2;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.s2;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.u2;
  var copyOf_4 = kotlin_kotlin.$_$.y4;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.m3;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.i3;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.k3;
  var copyOf_5 = kotlin_kotlin.$_$.c5;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.o2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.j2;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.m2;
  var copyOf_6 = kotlin_kotlin.$_$.a5;
  var Unit = kotlin_kotlin.$_$.cb;
  var trimIndent = kotlin_kotlin.$_$.da;
  var equals_0 = kotlin_kotlin.$_$.f9;
  var charSequenceLength = kotlin_kotlin.$_$.h7;
  var charSequenceGet = kotlin_kotlin.$_$.g7;
  var toString_0 = kotlin_kotlin.$_$.b2;
  var titlecase = kotlin_kotlin.$_$.o9;
  var isLowerCase = kotlin_kotlin.$_$.i9;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.w3;
  var ULong = kotlin_kotlin.$_$.za;
  var UInt = kotlin_kotlin.$_$.xa;
  var UShort = kotlin_kotlin.$_$.bb;
  var UByte = kotlin_kotlin.$_$.va;
  var mapOf = kotlin_kotlin.$_$.u5;
  var lastOrNull = kotlin_kotlin.$_$.q5;
  var get_lastIndex = kotlin_kotlin.$_$.p5;
  var asSequence = kotlin_kotlin.$_$.u4;
  var get_js = kotlin_kotlin.$_$.f8;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  var get_indices = kotlin_kotlin.$_$.m5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var get_indices_0 = kotlin_kotlin.$_$.l5;
  var Companion_instance = kotlin_kotlin.$_$.a4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.c2;
  var createFailure = kotlin_kotlin.$_$.gb;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationStrategy, 'SerializationStrategy', interfaceMeta);
  setMetadataFor(DeserializationStrategy, 'DeserializationStrategy', interfaceMeta);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, VOID, [SerializationStrategy, DeserializationStrategy]);
  setMetadataFor(ContextualSerializer, 'ContextualSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException, VOID, SerializationException_init_$Create$);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(elementDescriptors$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(SerialKind, 'SerialKind', classMeta);
  setMetadataFor(ENUM, 'ENUM', objectMeta, SerialKind);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind);
  setMetadataFor(BOOLEAN, 'BOOLEAN', objectMeta, PrimitiveKind);
  setMetadataFor(BYTE, 'BYTE', objectMeta, PrimitiveKind);
  setMetadataFor(CHAR, 'CHAR', objectMeta, PrimitiveKind);
  setMetadataFor(SHORT, 'SHORT', objectMeta, PrimitiveKind);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind);
  setMetadataFor(LONG, 'LONG', objectMeta, PrimitiveKind);
  setMetadataFor(FLOAT, 'FLOAT', objectMeta, PrimitiveKind);
  setMetadataFor(DOUBLE, 'DOUBLE', objectMeta, PrimitiveKind);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind);
  setMetadataFor(SEALED, 'SEALED', objectMeta, PolymorphicKind);
  setMetadataFor(OPEN, 'OPEN', objectMeta, PolymorphicKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.xg(this);
  }
  setMetadataFor(Decoder, 'Decoder', interfaceMeta);
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.rj(descriptor, index, deserializer, previousValue) : $super.rj.call(this, descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.fj(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.wg(this, value);
  }
  setMetadataFor(Encoder, 'Encoder', interfaceMeta);
  setMetadataFor(AbstractEncoder, 'AbstractEncoder', classMeta, VOID, [Encoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(NothingSerializer_0, 'NothingSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DurationSerializer, 'DurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(ArrayListClassDesc, 'ArrayListClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(HashSetClassDesc, 'HashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(MapLikeDescriptor, 'MapLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(HashMapClassDesc, 'HashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(ArrayClassDesc, 'ArrayClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', classMeta, ListLikeDescriptor);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(CollectionSerializer, 'CollectionSerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(ArrayListSerializer, 'ArrayListSerializer', classMeta, CollectionSerializer);
  setMetadataFor(HashSetSerializer, 'HashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(LinkedHashSetSerializer, 'LinkedHashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(MapLikeSerializer, 'MapLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(HashMapSerializer, 'HashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(LinkedHashMapSerializer, 'LinkedHashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(ReferenceArraySerializer, 'ReferenceArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArraySerializer, 'PrimitiveArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder', classMeta);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, VOID, [KSerializer]);
  setMetadataFor(InlinePrimitiveDescriptor$1, VOID, classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NoOpEncoder, 'NoOpEncoder', objectMeta, AbstractEncoder);
  setMetadataFor(NothingSerialDescriptor, 'NothingSerialDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(ObjectSerializer, 'ObjectSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerializerFactory, 'SerializerFactory', interfaceMeta);
  setMetadataFor(CharArraySerializer_0, 'CharArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(DoubleArraySerializer_0, 'DoubleArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(FloatArraySerializer_0, 'FloatArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(LongArraySerializer_0, 'LongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ULongArraySerializer_0, 'ULongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(IntArraySerializer_0, 'IntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UIntArraySerializer_0, 'UIntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ShortArraySerializer_0, 'ShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UShortArraySerializer_0, 'UShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ByteArraySerializer_0, 'ByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UByteArraySerializer_0, 'UByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(BooleanArraySerializer_0, 'BooleanArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(CharArrayBuilder, 'CharArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(DoubleArrayBuilder, 'DoubleArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(FloatArrayBuilder, 'FloatArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(LongArrayBuilder, 'LongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ULongArrayBuilder, 'ULongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(IntArrayBuilder, 'IntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UIntArrayBuilder, 'UIntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ShortArrayBuilder, 'ShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UShortArrayBuilder, 'UShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ByteArrayBuilder, 'ByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UByteArrayBuilder, 'UByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(BooleanArrayBuilder, 'BooleanArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FloatSerializer, 'FloatSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ShortSerializer, 'ShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UnitSerializer, 'UnitSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(TaggedDecoder, 'TaggedDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(NamedValueDecoder, 'NamedValueDecoder', classMeta, TaggedDecoder);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(KeyValueSerializer, 'KeyValueSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(MapEntrySerializer_0, 'MapEntrySerializer', classMeta, KeyValueSerializer);
  setMetadataFor(PairSerializer_0, 'PairSerializer', classMeta, KeyValueSerializer);
  setMetadataFor(TripleSerializer_0, 'TripleSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(ULongSerializer, 'ULongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UIntSerializer, 'UIntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UShortSerializer, 'UShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UByteSerializer, 'UByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule);
  setMetadataFor(ContextualProvider, 'ContextualProvider', classMeta);
  setMetadataFor(Argless, 'Argless', classMeta, ContextualProvider);
  setMetadataFor(WithTypeArguments, 'WithTypeArguments', classMeta, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.ky(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  setMetadataFor(SerializersModuleCollector, 'SerializersModuleCollector', interfaceMeta);
  setMetadataFor(SerializersModuleBuilder, 'SerializersModuleBuilder', classMeta, VOID, [SerializersModuleCollector]);
  setMetadataFor(SerializerAlreadyRegisteredException, 'SerializerAlreadyRegisteredException', classMeta, IllegalArgumentException);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, VOID, VOID, VOID, 0);
  setMetadataFor(createCache$1, VOID, classMeta);
  setMetadataFor(createParametrizedCache$1, VOID, classMeta);
  //endregion
  function serializer($this, serializersModule) {
    var tmp0_elvis_lhs = serializersModule.ig($this.eg_1, $this.gg_1);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? $this.fg_1 : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      serializerNotRegistered($this.eg_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function ContextualSerializer_init_$Init$(serializableClass, $this) {
    ContextualSerializer.call($this, serializableClass, null, get_EMPTY_SERIALIZER_ARRAY());
    return $this;
  }
  function ContextualSerializer_init_$Create$(serializableClass) {
    return ContextualSerializer_init_$Init$(serializableClass, objectCreate(protoOf(ContextualSerializer)));
  }
  function ContextualSerializer$descriptor$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp = $this$buildSerialDescriptor;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = this$0.fg_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jg();
      var tmp0_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.kg();
      tmp.ng_1 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      return Unit_instance;
    };
  }
  function ContextualSerializer(serializableClass, fallbackSerializer, typeArgumentsSerializers) {
    this.eg_1 = serializableClass;
    this.fg_1 = fallbackSerializer;
    this.gg_1 = asList(typeArgumentsSerializers);
    var tmp = this;
    var tmp_0 = CONTEXTUAL_getInstance();
    tmp.hg_1 = withContext(buildSerialDescriptor('kotlinx.serialization.ContextualSerializer', tmp_0, [], ContextualSerializer$descriptor$lambda(this)), this.eg_1);
  }
  protoOf(ContextualSerializer).jg = function () {
    return this.hg_1;
  };
  protoOf(ContextualSerializer).tg = function (encoder, value) {
    encoder.vg(serializer(this, encoder.ug()), value);
  };
  protoOf(ContextualSerializer).wg = function (encoder, value) {
    return this.tg(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ContextualSerializer).xg = function (decoder) {
    return decoder.yg(serializer(this, decoder.ug()));
  };
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.zg('type', serializer_2(StringCompanionObject_instance).jg());
      $this$buildSerialDescriptor.zg('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.ah_1.q5() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.ng_1 = this$0.bh_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.ah_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.ah_1 = baseClass;
    this.bh_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ch_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).dh = function () {
    return this.ah_1;
  };
  protoOf(PolymorphicSerializer).jg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ch_1;
    descriptor$factory();
    return this_0.c2();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.ah_1 + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.fh(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.dh());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.eh(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.dh());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.jg();
    }, null);
  }
  function SealedClassSerializer() {
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.l() === 1 ? "Field '" + missingFields.d1(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.gh_1 = missingFields;
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.s();
      while (tmp0_iterator.t()) {
        var item = tmp0_iterator.v();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp$ret$0 = serializer_0(_this__u8e3s4, item);
        destination.p(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.s();
      while (tmp0_iterator_0.t()) {
        var item_0 = tmp0_iterator_0.v();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.p(tmp$ret$3);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer_0(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (((_this__u8e3s4.equals(getKClass(Collection)) ? true : _this__u8e3s4.equals(getKClass(List))) ? true : _this__u8e3s4.equals(getKClass(MutableList))) ? true : _this__u8e3s4.equals(getKClass(ArrayList))) {
      tmp = new ArrayListSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.d1(0));
    } else if ((_this__u8e3s4.equals(getKClass(Set)) ? true : _this__u8e3s4.equals(getKClass(MutableSet))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashSet))) {
      tmp = new LinkedHashSetSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.d1(0), serializers.d1(1));
    } else if ((_this__u8e3s4.equals(getKClass(Map)) ? true : _this__u8e3s4.equals(getKClass(MutableMap))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashMap))) {
      tmp = new LinkedHashMapSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.d1(0), serializers.d1(1), serializers.d1(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.d1(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.g6();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.f6();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.s();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.v();
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var value = item.nd_1;
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>.<anonymous>' call
          var message = 'Star projections in type arguments are not allowed, but had ' + type;
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = value;
          break $l$block;
        }
      }
      var tmp$ret$2 = tmp$ret$1;
      destination.p(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.z()) {
      tmp = findCachedSerializer(rootClass, isNullable);
    } else {
      // Inline function 'kotlin.Result.getOrNull' call
      var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
      var tmp_0;
      if (_Result___get_isFailure__impl__jpiriv(this_1)) {
        tmp_0 = null;
      } else {
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_1);
        tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      }
      tmp = tmp_0;
    }
    var cachedSerializer = tmp;
    if (cachedSerializer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return cachedSerializer;
    }
    var tmp_2;
    if (typeArguments.z()) {
      tmp_2 = _this__u8e3s4.hh(rootClass);
    } else {
      var tmp1_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var serializers = tmp_3;
      var tmp2_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      tmp_2 = tmp2_elvis_lhs == null ? _this__u8e3s4.ig(rootClass, serializers) : tmp2_elvis_lhs;
    }
    var contextualSerializer = tmp_2;
    var tmp_4;
    if (contextualSerializer == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_4 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp4_safe_receiver = tmp_4;
    return tmp4_safe_receiver == null ? null : nullable(tmp4_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializer_1(type) {
    return serializer_0(EmptySerializersModule_0(), type);
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.d1(0).e6();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().ih(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().ih(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().jh(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().jh(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    return serializerOrNull(it);
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_safe_receiver = serializerOrNull(it);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.d1(0).e6();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.d1(0).e6();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.jg().kh()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_2(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.lh_1 = original;
    this.mh_1 = kClass;
    this.nh_1 = this.lh_1.oh() + '<' + this.mh_1.q5() + '>';
  }
  protoOf(ContextDescriptor).kg = function () {
    return this.lh_1.kg();
  };
  protoOf(ContextDescriptor).ph = function () {
    return this.lh_1.ph();
  };
  protoOf(ContextDescriptor).qh = function () {
    return this.lh_1.qh();
  };
  protoOf(ContextDescriptor).kh = function () {
    return this.lh_1.kh();
  };
  protoOf(ContextDescriptor).rh = function () {
    return this.lh_1.rh();
  };
  protoOf(ContextDescriptor).sh = function (index) {
    return this.lh_1.sh(index);
  };
  protoOf(ContextDescriptor).th = function (index) {
    return this.lh_1.th(index);
  };
  protoOf(ContextDescriptor).uh = function (name) {
    return this.lh_1.uh(name);
  };
  protoOf(ContextDescriptor).vh = function (index) {
    return this.lh_1.vh(index);
  };
  protoOf(ContextDescriptor).wh = function (index) {
    return this.lh_1.wh(index);
  };
  protoOf(ContextDescriptor).oh = function () {
    return this.nh_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.lh_1, another.lh_1) ? another.mh_1.equals(this.mh_1) : false;
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.mh_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.nh_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + this.mh_1 + ', original: ' + this.lh_1 + ')';
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.hh(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.jg();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.mh_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.xh_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv(_this__u8e3s4);
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.bi_1 = $this_elementDescriptors;
    this.ai_1 = $this_elementDescriptors.ph();
  }
  protoOf(elementDescriptors$1$1).t = function () {
    return this.ai_1 > 0;
  };
  protoOf(elementDescriptors$1$1).v = function () {
    var tmp = this.bi_1.ph();
    var tmp1 = this.ai_1;
    this.ai_1 = tmp1 - 1 | 0;
    return this.bi_1.th(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.ci_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv).s = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1$1(this.ci_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.og_1.l(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.lg_1 = serialName;
    this.mg_1 = false;
    this.ng_1 = emptyList();
    this.og_1 = ArrayList_init_$Create$_0();
    this.pg_1 = HashSet_init_$Create$();
    this.qg_1 = ArrayList_init_$Create$_0();
    this.rg_1 = ArrayList_init_$Create$_0();
    this.sg_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).di = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.pg_1.p(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.lg_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.og_1.p(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.qg_1.p(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.rg_1.p(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.sg_1.p(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).zg = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.di(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.di.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.og_1.l(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.pi_1;
    _hashCode$factory();
    return this_0.c2();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.oi_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.vh(it) + ': ' + this$0.th(it).oh();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.ei_1 = serialName;
    this.fi_1 = kind;
    this.gi_1 = elementsCount;
    this.hi_1 = builder.ng_1;
    this.ii_1 = toHashSet(builder.og_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.og_1;
    tmp.ji_1 = copyToArray(this_0);
    this.ki_1 = compactArray(builder.qg_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.rg_1;
    tmp_0.li_1 = copyToArray(this_1);
    this.mi_1 = toBooleanArray(builder.sg_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.ji_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.s();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.v();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.bc_1, item.ac_1);
      destination.p(tmp$ret$2);
    }
    tmp_1.ni_1 = toMap(destination);
    this.oi_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.pi_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).oh = function () {
    return this.ei_1;
  };
  protoOf(SerialDescriptorImpl).rh = function () {
    return this.fi_1;
  };
  protoOf(SerialDescriptorImpl).ph = function () {
    return this.gi_1;
  };
  protoOf(SerialDescriptorImpl).kg = function () {
    return this.hi_1;
  };
  protoOf(SerialDescriptorImpl).qi = function () {
    return this.ii_1;
  };
  protoOf(SerialDescriptorImpl).vh = function (index) {
    return getChecked(this.ji_1, index);
  };
  protoOf(SerialDescriptorImpl).uh = function (name) {
    var tmp0_elvis_lhs = this.ni_1.h2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SerialDescriptorImpl).sh = function (index) {
    return getChecked(this.li_1, index);
  };
  protoOf(SerialDescriptorImpl).th = function (index) {
    return getChecked(this.ki_1, index);
  };
  protoOf(SerialDescriptorImpl).wh = function (index) {
    return getChecked_0(this.mi_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.oh() === other.oh())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.oi_1, other.oi_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ph() === other.ph())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ph();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.th(index).oh() === other.th(index).oh())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.th(index).rh(), other.th(index).rh())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.gi_1);
    var tmp_0 = this.ei_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).q5());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).ri = function () {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).si = function () {
    return true;
  };
  protoOf(AbstractDecoder).ti = function () {
    return null;
  };
  protoOf(AbstractDecoder).ui = function () {
    var tmp = this.ri();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).vi = function () {
    var tmp = this.ri();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).wi = function () {
    var tmp = this.ri();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).xi = function () {
    var tmp = this.ri();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).yi = function () {
    var tmp = this.ri();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).zi = function () {
    var tmp = this.ri();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).aj = function () {
    var tmp = this.ri();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).bj = function () {
    var tmp = this.ri();
    return tmp instanceof Char ? tmp.u8_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).cj = function () {
    var tmp = this.ri();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).dj = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).ej = function (deserializer, previousValue) {
    return this.yg(deserializer);
  };
  protoOf(AbstractDecoder).fj = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).gj = function (descriptor) {
  };
  protoOf(AbstractDecoder).hj = function (descriptor, index) {
    return this.ui();
  };
  protoOf(AbstractDecoder).ij = function (descriptor, index) {
    return this.vi();
  };
  protoOf(AbstractDecoder).jj = function (descriptor, index) {
    return this.wi();
  };
  protoOf(AbstractDecoder).kj = function (descriptor, index) {
    return this.xi();
  };
  protoOf(AbstractDecoder).lj = function (descriptor, index) {
    return this.yi();
  };
  protoOf(AbstractDecoder).mj = function (descriptor, index) {
    return this.zi();
  };
  protoOf(AbstractDecoder).nj = function (descriptor, index) {
    return this.aj();
  };
  protoOf(AbstractDecoder).oj = function (descriptor, index) {
    return this.bj();
  };
  protoOf(AbstractDecoder).pj = function (descriptor, index) {
    return this.cj();
  };
  protoOf(AbstractDecoder).qj = function (descriptor, index) {
    return this.dj(descriptor.th(index));
  };
  protoOf(AbstractDecoder).rj = function (descriptor, index, deserializer, previousValue) {
    return this.ej(deserializer, previousValue);
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).fj = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).gj = function (descriptor) {
  };
  protoOf(AbstractEncoder).wj = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).xj = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  protoOf(AbstractEncoder).yj = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).zj = function (value) {
    return this.xj(value);
  };
  protoOf(AbstractEncoder).ak = function (value) {
    return this.xj(value);
  };
  protoOf(AbstractEncoder).bk = function (value) {
    return this.xj(value);
  };
  protoOf(AbstractEncoder).ck = function (value) {
    return this.xj(value);
  };
  protoOf(AbstractEncoder).dk = function (value) {
    return this.xj(value);
  };
  protoOf(AbstractEncoder).ek = function (value) {
    return this.xj(value);
  };
  protoOf(AbstractEncoder).fk = function (value) {
    return this.xj(value);
  };
  protoOf(AbstractEncoder).gk = function (value) {
    return this.xj(new Char(value));
  };
  protoOf(AbstractEncoder).hk = function (value) {
    return this.xj(value);
  };
  protoOf(AbstractEncoder).ik = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).jk = function (descriptor, index, value) {
    if (this.wj(descriptor, index)) {
      this.zj(value);
    }
  };
  protoOf(AbstractEncoder).kk = function (descriptor, index, value) {
    if (this.wj(descriptor, index)) {
      this.ak(value);
    }
  };
  protoOf(AbstractEncoder).lk = function (descriptor, index, value) {
    if (this.wj(descriptor, index)) {
      this.bk(value);
    }
  };
  protoOf(AbstractEncoder).mk = function (descriptor, index, value) {
    if (this.wj(descriptor, index)) {
      this.ck(value);
    }
  };
  protoOf(AbstractEncoder).nk = function (descriptor, index, value) {
    if (this.wj(descriptor, index)) {
      this.dk(value);
    }
  };
  protoOf(AbstractEncoder).ok = function (descriptor, index, value) {
    if (this.wj(descriptor, index)) {
      this.ek(value);
    }
  };
  protoOf(AbstractEncoder).pk = function (descriptor, index, value) {
    if (this.wj(descriptor, index)) {
      this.fk(value);
    }
  };
  protoOf(AbstractEncoder).qk = function (descriptor, index, value) {
    if (this.wj(descriptor, index)) {
      this.gk(value);
    }
  };
  protoOf(AbstractEncoder).rk = function (descriptor, index, value) {
    if (this.wj(descriptor, index)) {
      this.hk(value);
    }
  };
  protoOf(AbstractEncoder).sk = function (descriptor, index) {
    return this.wj(descriptor, index) ? this.ik(descriptor.th(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).tk = function (descriptor, index, serializer, value) {
    if (this.wj(descriptor, index)) {
      this.vg(serializer, value);
    }
  };
  function Decoder() {
  }
  function Companion() {
    this.wk_1 = -1;
    this.xk_1 = -3;
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    return Companion_instance_0;
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.pj($this.jg(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.sj($this.jg(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).tg = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.jg();
    var composite = encoder.fj(descriptor);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.rk(this.jg(), 0, actualSerializer.jg().oh());
    var tmp = this.jg();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.tk(tmp, 1, tmp$ret$0, value);
    composite.gj(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).wg = function (encoder, value) {
    return this.tg(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).xg = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.jg();
    var composite = decoder.fj(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.tj()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.uj(this.jg());
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.pj(this.jg(), index);
          } else {
            if (index === 1) {
              var tmp$ret$2;
              $l$block_0: {
                // Inline function 'kotlin.requireNotNull' call
                var value_0 = klassName;
                // Inline function 'kotlin.contracts.contract' call
                if (value_0 == null) {
                  // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                  var message = 'Cannot read polymorphic value before its type token';
                  throw IllegalArgumentException_init_$Create$(toString(message));
                } else {
                  tmp$ret$2 = value_0;
                  break $l$block_0;
                }
              }
              klassName = tmp$ret$2;
              var serializer = findPolymorphicSerializer_0(this, composite, klassName);
              value = composite.sj(this.jg(), index, serializer);
            } else {
              var tmp0_elvis_lhs = klassName;
              throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
            }
          }
        }
      }
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        var value_1 = value;
        // Inline function 'kotlin.contracts.contract' call
        if (value_1 == null) {
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = value_1;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.gj(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).eh = function (decoder, klassName) {
    return decoder.ug().yk(this.dh(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).fh = function (encoder, value) {
    return encoder.ug().zk(this.dh(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.q5();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.q5() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.q5() + "' has to be sealed and '@Serializable'.\n") + ("Alternatively, register the serializer for '" + subClassName + "' explicitly in a corresponding SerializersModule."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.al_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).jg = function () {
    return this.al_1;
  };
  protoOf(NothingSerializer_0).bl = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).wg = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.bl(encoder, tmp);
  };
  protoOf(NothingSerializer_0).xg = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.cl_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).jg = function () {
    return this.cl_1;
  };
  protoOf(DurationSerializer).dl = function (encoder, value) {
    encoder.hk(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).wg = function (encoder, value) {
    return this.dl(encoder, value instanceof Duration ? value.ce_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).el = function (decoder) {
    return Companion_getInstance().be(decoder.cj());
  };
  protoOf(DurationSerializer).xg = function (decoder) {
    return new Duration(this.el(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).oh = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).oh = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).oh = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).oh = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.hl_1 = elementDescriptor;
    this.il_1 = 1;
  }
  protoOf(ListLikeDescriptor).rh = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).ph = function () {
    return this.il_1;
  };
  protoOf(ListLikeDescriptor).vh = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).uh = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).wh = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.oh() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).sh = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.oh() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).th = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.oh() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.hl_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.hl_1, other.hl_1) ? this.oh() === other.oh() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.hl_1), 31) + getStringHashCode(this.oh()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.oh() + '(' + this.hl_1 + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.nl_1 = serialName;
    this.ol_1 = keyDescriptor;
    this.pl_1 = valueDescriptor;
    this.ql_1 = 2;
  }
  protoOf(MapLikeDescriptor).oh = function () {
    return this.nl_1;
  };
  protoOf(MapLikeDescriptor).rh = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).ph = function () {
    return this.ql_1;
  };
  protoOf(MapLikeDescriptor).vh = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).uh = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).wh = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.oh() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).sh = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.oh() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).th = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.oh() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.ol_1;
        break;
      case 1:
        tmp = this.pl_1;
        break;
      default:
        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.oh() === other.oh()))
      return false;
    if (!equals(this.ol_1, other.ol_1))
      return false;
    if (!equals(this.pl_1, other.pl_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.oh());
    result = imul(31, result) + hashCode(this.ol_1) | 0;
    result = imul(31, result) + hashCode(this.pl_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.oh() + '(' + this.ol_1 + ', ' + this.pl_1 + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.vl_1 = primitive.oh() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).oh = function () {
    return this.vl_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.xl_1 = new ArrayListClassDesc(element.jg());
  }
  protoOf(ArrayListSerializer).jg = function () {
    return this.xl_1;
  };
  protoOf(ArrayListSerializer).yl = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).zl = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(ArrayListSerializer).am = function (_this__u8e3s4) {
    return this.zl(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).bm = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).cm = function (_this__u8e3s4) {
    return this.bm(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).dm = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).em = function (_this__u8e3s4) {
    return this.dm((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).fm = function (_this__u8e3s4, size) {
    return _this__u8e3s4.p2(size);
  };
  protoOf(ArrayListSerializer).gm = function (_this__u8e3s4, size) {
    return this.fm(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).hm = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.l1(index, element);
  };
  protoOf(ArrayListSerializer).im = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.hm(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.tm_1 = new HashSetClassDesc(eSerializer.jg());
  }
  protoOf(HashSetSerializer).jg = function () {
    return this.tm_1;
  };
  protoOf(HashSetSerializer).yl = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).um = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(HashSetSerializer).am = function (_this__u8e3s4) {
    return this.um(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).vm = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).cm = function (_this__u8e3s4) {
    return this.vm(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).wm = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).em = function (_this__u8e3s4) {
    return this.wm((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).xm = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).gm = function (_this__u8e3s4, size) {
    return this.xm(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).ym = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.p(element);
  };
  protoOf(HashSetSerializer).im = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.ym(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.an_1 = new LinkedHashSetClassDesc(eSerializer.jg());
  }
  protoOf(LinkedHashSetSerializer).jg = function () {
    return this.an_1;
  };
  protoOf(LinkedHashSetSerializer).yl = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).bn = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(LinkedHashSetSerializer).am = function (_this__u8e3s4) {
    return this.bn(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).cn = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).cm = function (_this__u8e3s4) {
    return this.cn(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).wm = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).em = function (_this__u8e3s4) {
    return this.wm((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).dn = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).gm = function (_this__u8e3s4, size) {
    return this.dn(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).en = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.p(element);
  };
  protoOf(LinkedHashSetSerializer).im = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.en(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.hn_1 = new HashMapClassDesc(kSerializer.jg(), vSerializer.jg());
  }
  protoOf(HashMapSerializer).jg = function () {
    return this.hn_1;
  };
  protoOf(HashMapSerializer).in = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(HashMapSerializer).jn = function (_this__u8e3s4) {
    return this.in((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).kn = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.a2().s();
  };
  protoOf(HashMapSerializer).ln = function (_this__u8e3s4) {
    return this.kn((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).yl = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).mn = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.l(), 2);
  };
  protoOf(HashMapSerializer).am = function (_this__u8e3s4) {
    return this.mn(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).nn = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).cm = function (_this__u8e3s4) {
    return this.nn(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).on = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).em = function (_this__u8e3s4) {
    return this.on((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).pn = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).gm = function (_this__u8e3s4, size) {
    return this.pn(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.wn_1 = new LinkedHashMapClassDesc(kSerializer.jg(), vSerializer.jg());
  }
  protoOf(LinkedHashMapSerializer).jg = function () {
    return this.wn_1;
  };
  protoOf(LinkedHashMapSerializer).in = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(LinkedHashMapSerializer).jn = function (_this__u8e3s4) {
    return this.in((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).kn = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.a2().s();
  };
  protoOf(LinkedHashMapSerializer).ln = function (_this__u8e3s4) {
    return this.kn((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).yl = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).xn = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.l(), 2);
  };
  protoOf(LinkedHashMapSerializer).am = function (_this__u8e3s4) {
    return this.xn(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).yn = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).cm = function (_this__u8e3s4) {
    return this.yn(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).on = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).em = function (_this__u8e3s4) {
    return this.on((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).zn = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).gm = function (_this__u8e3s4, size) {
    return this.zn(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.bo_1 = kClass;
    this.co_1 = new ArrayClassDesc(eSerializer.jg());
  }
  protoOf(ReferenceArraySerializer).jg = function () {
    return this.co_1;
  };
  protoOf(ReferenceArraySerializer).do = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).jn = function (_this__u8e3s4) {
    return this.do((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).eo = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).ln = function (_this__u8e3s4) {
    return this.eo((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).yl = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).fo = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(ReferenceArraySerializer).am = function (_this__u8e3s4) {
    return this.fo(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).go = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.bo_1);
  };
  protoOf(ReferenceArraySerializer).cm = function (_this__u8e3s4) {
    return this.go(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ho = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).em = function (_this__u8e3s4) {
    return this.ho((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).io = function (_this__u8e3s4, size) {
    return _this__u8e3s4.p2(size);
  };
  protoOf(ReferenceArraySerializer).gm = function (_this__u8e3s4, size) {
    return this.io(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).jo = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.l1(index, element);
  };
  protoOf(ReferenceArraySerializer).im = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.jo(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).km = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(CollectionSerializer).jn = function (_this__u8e3s4) {
    return this.km((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).lm = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(CollectionSerializer).ln = function (_this__u8e3s4) {
    return this.lm((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.qn_1 = keySerializer;
    this.rn_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).sn = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.l8_1;
    var last = progression.m8_1;
    var step_0 = progression.n8_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.tn(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).om = function (decoder, builder, startIndex, size) {
    return this.sn(decoder, (!(builder == null) ? isInterface(builder, MutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).tn = function (decoder, index, builder, checkIndex) {
    var key = decoder.sj(this.jg(), index, this.qn_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.uj(this.jg());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0 === (index + 1 | 0))) {
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.f2(key)) {
      var tmp_2 = this.rn_1.jg().rh();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.rj(this.jg(), vIndex, this.rn_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.sj(this.jg(), vIndex, this.rn_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.y1(key, value);
  };
  protoOf(MapLikeSerializer).pm = function (decoder, index, builder, checkIndex) {
    return this.tn(decoder, index, (!(builder == null) ? isInterface(builder, MutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).nm = function (encoder, value) {
    var size = this.jn(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.jg();
    var composite = encoder.vk(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.ln(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = iterator;
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.v();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.b2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.c2();
      var tmp = this.jg();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.tk(tmp, tmp0, this.qn_1, k);
      var tmp_0 = this.jg();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.tk(tmp_0, tmp1, this.rn_1, v);
    }
    composite.gj(descriptor);
  };
  protoOf(MapLikeSerializer).wg = function (encoder, value) {
    return this.nm(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.mm_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).nm = function (encoder, value) {
    var size = this.jn(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.jg();
    var composite = encoder.vk(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.ln(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.tk(this.jg(), index, this.mm_1, iterator.v());
      }
       while (inductionVariable < size);
    composite.gj(descriptor);
  };
  protoOf(CollectionLikeSerializer).wg = function (encoder, value) {
    return this.nm(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).om = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.pm(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).pm = function (decoder, index, builder, checkIndex) {
    this.im(builder, index, decoder.sj(this.jg(), index, this.mm_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.vj($this.jg());
    $this.gm(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).rm = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.em(previous);
    var builder = tmp1_elvis_lhs == null ? this.yl() : tmp1_elvis_lhs;
    var startIndex = this.am(builder);
    var compositeDecoder = decoder.fj(this.jg());
    if (compositeDecoder.tj()) {
      this.om(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.uj(this.jg());
        if (index === -1)
          break $l$loop;
        this.qm(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.gj(this.jg());
    return this.cm(builder);
  };
  protoOf(AbstractCollectionSerializer).xg = function (decoder) {
    return this.rm(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).qm = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.pm(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.pm.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.lo_1 = new PrimitiveArrayDescriptor(primitiveSerializer.jg());
  }
  protoOf(PrimitiveArraySerializer).jg = function () {
    return this.lo_1;
  };
  protoOf(PrimitiveArraySerializer).mo = function (_this__u8e3s4) {
    return _this__u8e3s4.no();
  };
  protoOf(PrimitiveArraySerializer).am = function (_this__u8e3s4) {
    return this.mo(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).oo = function (_this__u8e3s4) {
    return _this__u8e3s4.po();
  };
  protoOf(PrimitiveArraySerializer).cm = function (_this__u8e3s4) {
    return this.oo(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).qo = function (_this__u8e3s4, size) {
    return _this__u8e3s4.p2(size);
  };
  protoOf(PrimitiveArraySerializer).gm = function (_this__u8e3s4, size) {
    return this.qo(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).ro = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).ln = function (_this__u8e3s4) {
    return this.ro((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).so = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).im = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.so(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).yl = function () {
    return this.em(this.to());
  };
  protoOf(PrimitiveArraySerializer).wo = function (encoder, value) {
    var size = this.jn(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.lo_1;
    var composite = encoder.vk(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.vo(composite, value, size);
    composite.gj(descriptor);
  };
  protoOf(PrimitiveArraySerializer).wg = function (encoder, value) {
    return this.wo(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).nm = function (encoder, value) {
    return this.wo(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).xg = function (decoder) {
    return this.rm(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).xo = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.no() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.p2(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.p2.call(this, requiredCapacity);
    }
    return tmp;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.kp_1 = true;
  }
  protoOf(InlineClassDescriptor).qh = function () {
    return this.kp_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.oh() === other.oh())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.kp_1 ? contentEquals(this.xp(), other.xp()) : false)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ph() === other.ph())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ph();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.th(index).oh() === other.th(index).oh())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.th(index).rh(), other.th(index).rh())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.zp_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).aq = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.zp_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).jg = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).wg = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).xg = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.cq_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).ug = function () {
    return this.cq_1;
  };
  protoOf(NoOpEncoder).xj = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).yj = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).zj = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ak = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).bk = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ck = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).dk = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ek = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).fk = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).gk = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).hk = function (value) {
    return Unit_instance;
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.dq_1 = OBJECT_getInstance();
    this.eq_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).rh = function () {
    return this.dq_1;
  };
  protoOf(NothingSerialDescriptor).oh = function () {
    return this.eq_1;
  };
  protoOf(NothingSerialDescriptor).ph = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).vh = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).uh = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).wh = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).th = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).sh = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.eq_1) + imul(31, this.dq_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.fq_1 = serializer;
    this.gq_1 = new SerialDescriptorForNullable(this.fq_1.jg());
  }
  protoOf(NullableSerializer).jg = function () {
    return this.gq_1;
  };
  protoOf(NullableSerializer).hq = function (encoder, value) {
    if (!(value == null)) {
      encoder.uk();
      encoder.vg(this.fq_1, value);
    } else {
      encoder.yj();
    }
  };
  protoOf(NullableSerializer).wg = function (encoder, value) {
    return this.hq(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).xg = function (decoder) {
    return decoder.si() ? decoder.yg(this.fq_1) : decoder.ti();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.fq_1, other.fq_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.fq_1);
  };
  function SerialDescriptorForNullable(original) {
    this.xh_1 = original;
    this.yh_1 = this.xh_1.oh() + '?';
    this.zh_1 = cachedSerialNames(this.xh_1);
  }
  protoOf(SerialDescriptorForNullable).kg = function () {
    return this.xh_1.kg();
  };
  protoOf(SerialDescriptorForNullable).ph = function () {
    return this.xh_1.ph();
  };
  protoOf(SerialDescriptorForNullable).qh = function () {
    return this.xh_1.qh();
  };
  protoOf(SerialDescriptorForNullable).rh = function () {
    return this.xh_1.rh();
  };
  protoOf(SerialDescriptorForNullable).sh = function (index) {
    return this.xh_1.sh(index);
  };
  protoOf(SerialDescriptorForNullable).th = function (index) {
    return this.xh_1.th(index);
  };
  protoOf(SerialDescriptorForNullable).uh = function (name) {
    return this.xh_1.uh(name);
  };
  protoOf(SerialDescriptorForNullable).vh = function (index) {
    return this.xh_1.vh(index);
  };
  protoOf(SerialDescriptorForNullable).wh = function (index) {
    return this.xh_1.wh(index);
  };
  protoOf(SerialDescriptorForNullable).oh = function () {
    return this.yh_1;
  };
  protoOf(SerialDescriptorForNullable).qi = function () {
    return this.zh_1;
  };
  protoOf(SerialDescriptorForNullable).kh = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.xh_1, other.xh_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return '' + this.xh_1 + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.xh_1), 31);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.ng_1 = this$0.jq_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.iq_1 = objectInstance;
    this.jq_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.kq_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).jg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.kq_1;
    descriptor$factory_0();
    return this_0.c2();
  };
  protoOf(ObjectSerializer).tg = function (encoder, value) {
    encoder.fj(this.jg()).gj(this.jg());
  };
  protoOf(ObjectSerializer).wg = function (encoder, value) {
    return this.tg(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).xg = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.jg();
    var composite = decoder.fj(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      if (composite.tj()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.uj(this.jg());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else {
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.gj(descriptor);
    return this.iq_1;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.jg();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.qi();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.ph());
    var inductionVariable = 0;
    var last = _this__u8e3s4.ph();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.vh(i);
        result.p(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.e6();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var message = 'Captured type parameter ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        var message_0 = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.q5();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4 == null ? true : _this__u8e3s4.z())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function serializerNotRegistered(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4));
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.vh(i);
          missingFields.p(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.oh());
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.up_1;
    childSerializers$factory();
    return this_0.c2();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.wp_1;
    _hashCode$factory_0();
    return this_0.c2();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.pp_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.pp_1[i];
        indices.y1(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.mp_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.aq();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.mp_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bq();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.jg();
          destination.p(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.xp());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.vh(i) + ': ' + this$0.th(i).oh();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.lp_1 = serialName;
    this.mp_1 = generatedSerializer;
    this.np_1 = elementsCount;
    this.op_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.np_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.pp_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.np_1;
    tmp_3.qp_1 = fillArrayVal(Array(size), null);
    this.rp_1 = null;
    this.sp_1 = booleanArray(this.np_1);
    this.tp_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.up_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.vp_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.wp_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).oh = function () {
    return this.lp_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).ph = function () {
    return this.np_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).rh = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).kg = function () {
    var tmp0_elvis_lhs = this.rp_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).qi = function () {
    return this.tp_1.x1();
  };
  protoOf(PluginGeneratedSerialDescriptor).xp = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.vp_1;
    typeParameterDescriptors$factory();
    return this_0.c2();
  };
  protoOf(PluginGeneratedSerialDescriptor).yp = function (name, isOptional) {
    this.op_1 = this.op_1 + 1 | 0;
    this.pp_1[this.op_1] = name;
    this.sp_1[this.op_1] = isOptional;
    this.qp_1[this.op_1] = null;
    if (this.op_1 === (this.np_1 - 1 | 0)) {
      this.tp_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).th = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).jg();
  };
  protoOf(PluginGeneratedSerialDescriptor).wh = function (index) {
    return getChecked_0(this.sp_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).sh = function (index) {
    var tmp0_elvis_lhs = getChecked(this.qp_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).vh = function (index) {
    return getChecked(this.pp_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).uh = function (name) {
    var tmp0_elvis_lhs = this.tp_1.h2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.oh() === other.oh())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.xp(), other.xp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ph() === other.ph())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ph();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.th(index).oh() === other.th(index).oh())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.th(index).rh(), other.th(index).rh())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.np_1);
    var tmp_0 = this.oh() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.oh());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.s();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.v();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.oh();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.s();
    while (tmp0_iterator_0.t()) {
      var element_0 = tmp0_iterator_0.v();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.rh();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.xp();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_0()));
  }
  protoOf(CharArraySerializer_0).oq = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).jn = function (_this__u8e3s4) {
    return this.oq((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).pq = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).em = function (_this__u8e3s4) {
    return this.pq((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).to = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).qq = function (decoder, index, builder, checkIndex) {
    builder.tq(decoder.oj(this.lo_1, index));
  };
  protoOf(CharArraySerializer_0).pm = function (decoder, index, builder, checkIndex) {
    return this.qq(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).uo = function (decoder, index, builder, checkIndex) {
    return this.qq(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).uq = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.qk(this.lo_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).vo = function (encoder, content, size) {
    return this.uq(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).xq = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).jn = function (_this__u8e3s4) {
    return this.xq((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).yq = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).em = function (_this__u8e3s4) {
    return this.yq((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).to = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).zq = function (decoder, index, builder, checkIndex) {
    builder.cr(decoder.nj(this.lo_1, index));
  };
  protoOf(DoubleArraySerializer_0).pm = function (decoder, index, builder, checkIndex) {
    return this.zq(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).uo = function (decoder, index, builder, checkIndex) {
    return this.zq(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).dr = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.pk(this.lo_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).vo = function (encoder, content, size) {
    return this.dr(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).gr = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).jn = function (_this__u8e3s4) {
    return this.gr((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).hr = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).em = function (_this__u8e3s4) {
    return this.hr((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).to = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).ir = function (decoder, index, builder, checkIndex) {
    builder.lr(decoder.mj(this.lo_1, index));
  };
  protoOf(FloatArraySerializer_0).pm = function (decoder, index, builder, checkIndex) {
    return this.ir(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).uo = function (decoder, index, builder, checkIndex) {
    return this.ir(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).mr = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ok(this.lo_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).vo = function (encoder, content, size) {
    return this.mr(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_1()));
  }
  protoOf(LongArraySerializer_0).pr = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).jn = function (_this__u8e3s4) {
    return this.pr((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).qr = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).em = function (_this__u8e3s4) {
    return this.qr((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).to = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).rr = function (decoder, index, builder, checkIndex) {
    builder.ur(decoder.lj(this.lo_1, index));
  };
  protoOf(LongArraySerializer_0).pm = function (decoder, index, builder, checkIndex) {
    return this.rr(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).uo = function (decoder, index, builder, checkIndex) {
    return this.rr(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).vr = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.nk(this.lo_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).vo = function (encoder, content, size) {
    return this.vr(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_getInstance_2()));
  }
  protoOf(ULongArraySerializer_0).yr = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).jn = function (_this__u8e3s4) {
    return this.yr(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.rf_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).zr = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).em = function (_this__u8e3s4) {
    return this.zr(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.rf_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).as = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).to = function () {
    return new ULongArray(this.as());
  };
  protoOf(ULongArraySerializer_0).bs = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.qj(this.lo_1, index).yi();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.es(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).pm = function (decoder, index, builder, checkIndex) {
    return this.bs(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).uo = function (decoder, index, builder, checkIndex) {
    return this.bs(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).fs = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.sk(this.lo_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.dk(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).vo = function (encoder, content, size) {
    return this.fs(encoder, content instanceof ULongArray ? content.rf_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).is = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).jn = function (_this__u8e3s4) {
    return this.is((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).js = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).em = function (_this__u8e3s4) {
    return this.js((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).to = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).ks = function (decoder, index, builder, checkIndex) {
    builder.ns(decoder.kj(this.lo_1, index));
  };
  protoOf(IntArraySerializer_0).pm = function (decoder, index, builder, checkIndex) {
    return this.ks(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).uo = function (decoder, index, builder, checkIndex) {
    return this.ks(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).os = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.mk(this.lo_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).vo = function (encoder, content, size) {
    return this.os(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_3()));
  }
  protoOf(UIntArraySerializer_0).rs = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).jn = function (_this__u8e3s4) {
    return this.rs(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.gf_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).ss = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).em = function (_this__u8e3s4) {
    return this.ss(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.gf_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).ts = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).to = function () {
    return new UIntArray(this.ts());
  };
  protoOf(UIntArraySerializer_0).us = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.qj(this.lo_1, index).xi();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.xs(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).pm = function (decoder, index, builder, checkIndex) {
    return this.us(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).uo = function (decoder, index, builder, checkIndex) {
    return this.us(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).ys = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.sk(this.lo_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.ck(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).vo = function (encoder, content, size) {
    return this.ys(encoder, content instanceof UIntArray ? content.gf_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).bt = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).jn = function (_this__u8e3s4) {
    return this.bt((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).ct = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).em = function (_this__u8e3s4) {
    return this.ct((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).to = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).dt = function (decoder, index, builder, checkIndex) {
    builder.gt(decoder.jj(this.lo_1, index));
  };
  protoOf(ShortArraySerializer_0).pm = function (decoder, index, builder, checkIndex) {
    return this.dt(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).uo = function (decoder, index, builder, checkIndex) {
    return this.dt(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).ht = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.lk(this.lo_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).vo = function (encoder, content, size) {
    return this.ht(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_4()));
  }
  protoOf(UShortArraySerializer_0).kt = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).jn = function (_this__u8e3s4) {
    return this.kt(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.cg_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).lt = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).em = function (_this__u8e3s4) {
    return this.lt(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.cg_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).mt = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).to = function () {
    return new UShortArray(this.mt());
  };
  protoOf(UShortArraySerializer_0).nt = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.qj(this.lo_1, index).wi();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.qt(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).pm = function (decoder, index, builder, checkIndex) {
    return this.nt(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).uo = function (decoder, index, builder, checkIndex) {
    return this.nt(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).rt = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.sk(this.lo_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.bk(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).vo = function (encoder, content, size) {
    return this.rt(encoder, content instanceof UShortArray ? content.cg_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).ut = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).jn = function (_this__u8e3s4) {
    return this.ut((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).vt = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).em = function (_this__u8e3s4) {
    return this.vt((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).to = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).wt = function (decoder, index, builder, checkIndex) {
    builder.zt(decoder.ij(this.lo_1, index));
  };
  protoOf(ByteArraySerializer_0).pm = function (decoder, index, builder, checkIndex) {
    return this.wt(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).uo = function (decoder, index, builder, checkIndex) {
    return this.wt(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).au = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.kk(this.lo_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).vo = function (encoder, content, size) {
    return this.au(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_13(Companion_getInstance_5()));
  }
  protoOf(UByteArraySerializer_0).du = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).jn = function (_this__u8e3s4) {
    return this.du(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.ve_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).eu = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).em = function (_this__u8e3s4) {
    return this.eu(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.ve_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).fu = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).to = function () {
    return new UByteArray(this.fu());
  };
  protoOf(UByteArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.qj(this.lo_1, index).vi();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.ju(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).pm = function (decoder, index, builder, checkIndex) {
    return this.gu(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).uo = function (decoder, index, builder, checkIndex) {
    return this.gu(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).ku = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.sk(this.lo_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.ak(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).vo = function (encoder, content, size) {
    return this.ku(encoder, content instanceof UByteArray ? content.ve_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_14(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).nu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).jn = function (_this__u8e3s4) {
    return this.nu((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).ou = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).em = function (_this__u8e3s4) {
    return this.ou((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).to = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).pu = function (decoder, index, builder, checkIndex) {
    builder.su(decoder.hj(this.lo_1, index));
  };
  protoOf(BooleanArraySerializer_0).pm = function (decoder, index, builder, checkIndex) {
    return this.pu(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).uo = function (decoder, index, builder, checkIndex) {
    return this.pu(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).tu = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.jk(this.lo_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).vo = function (encoder, content, size) {
    return this.tu(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.rq_1 = bufferWithData;
    this.sq_1 = bufferWithData.length;
    this.p2(10);
  }
  protoOf(CharArrayBuilder).no = function () {
    return this.sq_1;
  };
  protoOf(CharArrayBuilder).p2 = function (requiredCapacity) {
    if (this.rq_1.length < requiredCapacity)
      this.rq_1 = copyOf(this.rq_1, coerceAtLeast(requiredCapacity, imul(this.rq_1.length, 2)));
  };
  protoOf(CharArrayBuilder).tq = function (c) {
    this.xo();
    var tmp = this.rq_1;
    var tmp1 = this.sq_1;
    this.sq_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(CharArrayBuilder).po = function () {
    return copyOf(this.rq_1, this.sq_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ar_1 = bufferWithData;
    this.br_1 = bufferWithData.length;
    this.p2(10);
  }
  protoOf(DoubleArrayBuilder).no = function () {
    return this.br_1;
  };
  protoOf(DoubleArrayBuilder).p2 = function (requiredCapacity) {
    if (this.ar_1.length < requiredCapacity)
      this.ar_1 = copyOf_0(this.ar_1, coerceAtLeast(requiredCapacity, imul(this.ar_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).cr = function (c) {
    this.xo();
    var tmp = this.ar_1;
    var tmp1 = this.br_1;
    this.br_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(DoubleArrayBuilder).po = function () {
    return copyOf_0(this.ar_1, this.br_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.jr_1 = bufferWithData;
    this.kr_1 = bufferWithData.length;
    this.p2(10);
  }
  protoOf(FloatArrayBuilder).no = function () {
    return this.kr_1;
  };
  protoOf(FloatArrayBuilder).p2 = function (requiredCapacity) {
    if (this.jr_1.length < requiredCapacity)
      this.jr_1 = copyOf_1(this.jr_1, coerceAtLeast(requiredCapacity, imul(this.jr_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).lr = function (c) {
    this.xo();
    var tmp = this.jr_1;
    var tmp1 = this.kr_1;
    this.kr_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(FloatArrayBuilder).po = function () {
    return copyOf_1(this.jr_1, this.kr_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.sr_1 = bufferWithData;
    this.tr_1 = bufferWithData.length;
    this.p2(10);
  }
  protoOf(LongArrayBuilder).no = function () {
    return this.tr_1;
  };
  protoOf(LongArrayBuilder).p2 = function (requiredCapacity) {
    if (this.sr_1.length < requiredCapacity)
      this.sr_1 = copyOf_2(this.sr_1, coerceAtLeast(requiredCapacity, imul(this.sr_1.length, 2)));
  };
  protoOf(LongArrayBuilder).ur = function (c) {
    this.xo();
    var tmp = this.sr_1;
    var tmp1 = this.tr_1;
    this.tr_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(LongArrayBuilder).po = function () {
    return copyOf_2(this.sr_1, this.tr_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.cs_1 = bufferWithData;
    this.ds_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.p2(10);
  }
  protoOf(ULongArrayBuilder).no = function () {
    return this.ds_1;
  };
  protoOf(ULongArrayBuilder).p2 = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.cs_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.cs_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.cs_1), 2));
      tmp.cs_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).es = function (c) {
    this.xo();
    var tmp = this.cs_1;
    var tmp1 = this.ds_1;
    this.ds_1 = tmp1 + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, tmp1, c);
  };
  protoOf(ULongArrayBuilder).uu = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.cs_1;
    var newSize = this.ds_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
  };
  protoOf(ULongArrayBuilder).po = function () {
    return new ULongArray(this.uu());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ls_1 = bufferWithData;
    this.ms_1 = bufferWithData.length;
    this.p2(10);
  }
  protoOf(IntArrayBuilder).no = function () {
    return this.ms_1;
  };
  protoOf(IntArrayBuilder).p2 = function (requiredCapacity) {
    if (this.ls_1.length < requiredCapacity)
      this.ls_1 = copyOf_3(this.ls_1, coerceAtLeast(requiredCapacity, imul(this.ls_1.length, 2)));
  };
  protoOf(IntArrayBuilder).ns = function (c) {
    this.xo();
    var tmp = this.ls_1;
    var tmp1 = this.ms_1;
    this.ms_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(IntArrayBuilder).po = function () {
    return copyOf_3(this.ls_1, this.ms_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.vs_1 = bufferWithData;
    this.ws_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.p2(10);
  }
  protoOf(UIntArrayBuilder).no = function () {
    return this.ws_1;
  };
  protoOf(UIntArrayBuilder).p2 = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.vs_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.vs_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.vs_1), 2));
      tmp.vs_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).xs = function (c) {
    this.xo();
    var tmp = this.vs_1;
    var tmp1 = this.ws_1;
    this.ws_1 = tmp1 + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, tmp1, c);
  };
  protoOf(UIntArrayBuilder).vu = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.vs_1;
    var newSize = this.ws_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
  };
  protoOf(UIntArrayBuilder).po = function () {
    return new UIntArray(this.vu());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.et_1 = bufferWithData;
    this.ft_1 = bufferWithData.length;
    this.p2(10);
  }
  protoOf(ShortArrayBuilder).no = function () {
    return this.ft_1;
  };
  protoOf(ShortArrayBuilder).p2 = function (requiredCapacity) {
    if (this.et_1.length < requiredCapacity)
      this.et_1 = copyOf_4(this.et_1, coerceAtLeast(requiredCapacity, imul(this.et_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).gt = function (c) {
    this.xo();
    var tmp = this.et_1;
    var tmp1 = this.ft_1;
    this.ft_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ShortArrayBuilder).po = function () {
    return copyOf_4(this.et_1, this.ft_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ot_1 = bufferWithData;
    this.pt_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.p2(10);
  }
  protoOf(UShortArrayBuilder).no = function () {
    return this.pt_1;
  };
  protoOf(UShortArrayBuilder).p2 = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.ot_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.ot_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.ot_1), 2));
      tmp.ot_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).qt = function (c) {
    this.xo();
    var tmp = this.ot_1;
    var tmp1 = this.pt_1;
    this.pt_1 = tmp1 + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, tmp1, c);
  };
  protoOf(UShortArrayBuilder).wu = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.ot_1;
    var newSize = this.pt_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
  };
  protoOf(UShortArrayBuilder).po = function () {
    return new UShortArray(this.wu());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.xt_1 = bufferWithData;
    this.yt_1 = bufferWithData.length;
    this.p2(10);
  }
  protoOf(ByteArrayBuilder).no = function () {
    return this.yt_1;
  };
  protoOf(ByteArrayBuilder).p2 = function (requiredCapacity) {
    if (this.xt_1.length < requiredCapacity)
      this.xt_1 = copyOf_5(this.xt_1, coerceAtLeast(requiredCapacity, imul(this.xt_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).zt = function (c) {
    this.xo();
    var tmp = this.xt_1;
    var tmp1 = this.yt_1;
    this.yt_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ByteArrayBuilder).po = function () {
    return copyOf_5(this.xt_1, this.yt_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.hu_1 = bufferWithData;
    this.iu_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.p2(10);
  }
  protoOf(UByteArrayBuilder).no = function () {
    return this.iu_1;
  };
  protoOf(UByteArrayBuilder).p2 = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.hu_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.hu_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.hu_1), 2));
      tmp.hu_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).ju = function (c) {
    this.xo();
    var tmp = this.hu_1;
    var tmp1 = this.iu_1;
    this.iu_1 = tmp1 + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, tmp1, c);
  };
  protoOf(UByteArrayBuilder).xu = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.hu_1;
    var newSize = this.iu_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
  };
  protoOf(UByteArrayBuilder).po = function () {
    return new UByteArray(this.xu());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.qu_1 = bufferWithData;
    this.ru_1 = bufferWithData.length;
    this.p2(10);
  }
  protoOf(BooleanArrayBuilder).no = function () {
    return this.ru_1;
  };
  protoOf(BooleanArrayBuilder).p2 = function (requiredCapacity) {
    if (this.qu_1.length < requiredCapacity)
      this.qu_1 = copyOf_6(this.qu_1, coerceAtLeast(requiredCapacity, imul(this.qu_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).su = function (c) {
    this.xo();
    var tmp = this.qu_1;
    var tmp1 = this.ru_1;
    this.ru_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(BooleanArrayBuilder).po = function () {
    return copyOf_6(this.qu_1, this.ru_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().h2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.yu_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).jg = function () {
    return this.yu_1;
  };
  protoOf(StringSerializer).zu = function (encoder, value) {
    return encoder.hk(value);
  };
  protoOf(StringSerializer).wg = function (encoder, value) {
    return this.zu(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).xg = function (decoder) {
    return decoder.cj();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.av_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).jg = function () {
    return this.av_1;
  };
  protoOf(CharSerializer).bv = function (encoder, value) {
    return encoder.gk(value);
  };
  protoOf(CharSerializer).wg = function (encoder, value) {
    return this.bv(encoder, value instanceof Char ? value.u8_1 : THROW_CCE());
  };
  protoOf(CharSerializer).cv = function (decoder) {
    return decoder.bj();
  };
  protoOf(CharSerializer).xg = function (decoder) {
    return new Char(this.cv(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.dv_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).jg = function () {
    return this.dv_1;
  };
  protoOf(DoubleSerializer).ev = function (encoder, value) {
    return encoder.fk(value);
  };
  protoOf(DoubleSerializer).wg = function (encoder, value) {
    return this.ev(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).xg = function (decoder) {
    return decoder.aj();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.fv_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).jg = function () {
    return this.fv_1;
  };
  protoOf(FloatSerializer).gv = function (encoder, value) {
    return encoder.ek(value);
  };
  protoOf(FloatSerializer).wg = function (encoder, value) {
    return this.gv(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).xg = function (decoder) {
    return decoder.zi();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.hv_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).jg = function () {
    return this.hv_1;
  };
  protoOf(LongSerializer).iv = function (encoder, value) {
    return encoder.dk(value);
  };
  protoOf(LongSerializer).wg = function (encoder, value) {
    return this.iv(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).xg = function (decoder) {
    return decoder.yi();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.jv_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).jg = function () {
    return this.jv_1;
  };
  protoOf(IntSerializer).kv = function (encoder, value) {
    return encoder.ck(value);
  };
  protoOf(IntSerializer).wg = function (encoder, value) {
    return this.kv(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).xg = function (decoder) {
    return decoder.xi();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.lv_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).jg = function () {
    return this.lv_1;
  };
  protoOf(ShortSerializer).mv = function (encoder, value) {
    return encoder.bk(value);
  };
  protoOf(ShortSerializer).wg = function (encoder, value) {
    return this.mv(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).xg = function (decoder) {
    return decoder.wi();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.nv_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).jg = function () {
    return this.nv_1;
  };
  protoOf(ByteSerializer).ov = function (encoder, value) {
    return encoder.ak(value);
  };
  protoOf(ByteSerializer).wg = function (encoder, value) {
    return this.ov(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).xg = function (decoder) {
    return decoder.vi();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.pv_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).jg = function () {
    return this.pv_1;
  };
  protoOf(BooleanSerializer).qv = function (encoder, value) {
    return encoder.zj(value);
  };
  protoOf(BooleanSerializer).wg = function (encoder, value) {
    return this.qv(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).xg = function (decoder) {
    return decoder.ui();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.rv_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).jg = function () {
    return this.rv_1.jg();
  };
  protoOf(UnitSerializer).sv = function (decoder) {
    this.rv_1.xg(decoder);
  };
  protoOf(UnitSerializer).xg = function (decoder) {
    this.sv(decoder);
    return Unit_instance;
  };
  protoOf(UnitSerializer).tv = function (encoder, value) {
    this.rv_1.tg(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).wg = function (encoder, value) {
    return this.tv(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.uv_1 = serialName;
    this.vv_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).oh = function () {
    return this.uv_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).rh = function () {
    return this.vv_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).ph = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).vh = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).uh = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).wh = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).th = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).sh = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.uv_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.uv_1 === other.uv_1 ? equals(this.vv_1, other.vv_1) : false)
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.uv_1) + imul(31, this.vv_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var keys = get_BUILTIN_SERIALIZERS().x1();
    var tmp0_iterator = keys.s();
    while (tmp0_iterator.t()) {
      var primitive = tmp0_iterator.v();
      var simpleName = capitalize(ensureNotNull(primitive.q5()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var it = charSequenceGet(_this__u8e3s4, 0);
      var tmp$ret$1 = isLowerCase(it) ? titlecase(it) : toString_0(it);
      var tmp_0 = toString(tmp$ret$1);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + _this__u8e3s4.substring(1);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().r6(), serializer_2(StringCompanionObject_instance)), to(getKClass(Char), serializer_3(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().u6(), CharArraySerializer()), to(PrimitiveClasses_getInstance().p6(), serializer_4(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().a7(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().o6(), serializer_5(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().z6(), FloatArraySerializer()), to(getKClass(Long), serializer_6(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().y6(), LongArraySerializer()), to(getKClass(ULong), serializer_7(Companion_getInstance_2())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().n6(), serializer_8(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().x6(), IntArraySerializer()), to(getKClass(UInt), serializer_9(Companion_getInstance_3())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().m6(), serializer_10(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().w6(), ShortArraySerializer()), to(getKClass(UShort), serializer_11(Companion_getInstance_4())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().l6(), serializer_12(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().v6(), ByteArraySerializer()), to(getKClass(UByte), serializer_13(Companion_getInstance_5())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().k6(), serializer_14(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().t6(), BooleanArraySerializer()), to(getKClass(Unit), serializer_15(Unit_instance)), to(PrimitiveClasses_getInstance().j6(), NothingSerializer()), to(getKClass(Duration), serializer_16(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).yv = function (_this__u8e3s4, index) {
    return this.aw(this.zv(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).aw = function (nestedName) {
    var tmp0_elvis_lhs = this.dw();
    return this.ew(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).zv = function (descriptor, index) {
    return descriptor.vh(index);
  };
  protoOf(NamedValueDecoder).ew = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.rw(tag);
    var r = block();
    if (!$this.cw_1) {
      $this.sw();
    }
    $this.cw_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.ej($deserializer, $previousValue);
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.bw_1 = ArrayList_init_$Create$_0();
    this.cw_1 = false;
  }
  protoOf(TaggedDecoder).ug = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).fw = function (tag) {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).gw = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).hw = function (tag) {
    var tmp = this.fw(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).iw = function (tag) {
    var tmp = this.fw(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).jw = function (tag) {
    var tmp = this.fw(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).kw = function (tag) {
    var tmp = this.fw(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).lw = function (tag) {
    var tmp = this.fw(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).mw = function (tag) {
    var tmp = this.fw(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).nw = function (tag) {
    var tmp = this.fw(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ow = function (tag) {
    var tmp = this.fw(tag);
    return tmp instanceof Char ? tmp.u8_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).pw = function (tag) {
    var tmp = this.fw(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).qw = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.rw(tag);
    return this;
  };
  protoOf(TaggedDecoder).ej = function (deserializer, previousValue) {
    return this.yg(deserializer);
  };
  protoOf(TaggedDecoder).dj = function (descriptor) {
    return this.qw(this.sw(), descriptor);
  };
  protoOf(TaggedDecoder).si = function () {
    var tmp0_elvis_lhs = this.dw();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.gw(currentTag);
  };
  protoOf(TaggedDecoder).ti = function () {
    return null;
  };
  protoOf(TaggedDecoder).ui = function () {
    return this.hw(this.sw());
  };
  protoOf(TaggedDecoder).vi = function () {
    return this.iw(this.sw());
  };
  protoOf(TaggedDecoder).wi = function () {
    return this.jw(this.sw());
  };
  protoOf(TaggedDecoder).xi = function () {
    return this.kw(this.sw());
  };
  protoOf(TaggedDecoder).yi = function () {
    return this.lw(this.sw());
  };
  protoOf(TaggedDecoder).zi = function () {
    return this.mw(this.sw());
  };
  protoOf(TaggedDecoder).aj = function () {
    return this.nw(this.sw());
  };
  protoOf(TaggedDecoder).bj = function () {
    return this.ow(this.sw());
  };
  protoOf(TaggedDecoder).cj = function () {
    return this.pw(this.sw());
  };
  protoOf(TaggedDecoder).fj = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).gj = function (descriptor) {
  };
  protoOf(TaggedDecoder).hj = function (descriptor, index) {
    return this.hw(this.yv(descriptor, index));
  };
  protoOf(TaggedDecoder).ij = function (descriptor, index) {
    return this.iw(this.yv(descriptor, index));
  };
  protoOf(TaggedDecoder).jj = function (descriptor, index) {
    return this.jw(this.yv(descriptor, index));
  };
  protoOf(TaggedDecoder).kj = function (descriptor, index) {
    return this.kw(this.yv(descriptor, index));
  };
  protoOf(TaggedDecoder).lj = function (descriptor, index) {
    return this.lw(this.yv(descriptor, index));
  };
  protoOf(TaggedDecoder).mj = function (descriptor, index) {
    return this.mw(this.yv(descriptor, index));
  };
  protoOf(TaggedDecoder).nj = function (descriptor, index) {
    return this.nw(this.yv(descriptor, index));
  };
  protoOf(TaggedDecoder).oj = function (descriptor, index) {
    return this.ow(this.yv(descriptor, index));
  };
  protoOf(TaggedDecoder).pj = function (descriptor, index) {
    return this.pw(this.yv(descriptor, index));
  };
  protoOf(TaggedDecoder).qj = function (descriptor, index) {
    return this.qw(this.yv(descriptor, index), descriptor.th(index));
  };
  protoOf(TaggedDecoder).rj = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.yv(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).dw = function () {
    return lastOrNull(this.bw_1);
  };
  protoOf(TaggedDecoder).rw = function (name) {
    this.bw_1.p(name);
  };
  protoOf(TaggedDecoder).sw = function () {
    var r = this.bw_1.f1(get_lastIndex(this.bw_1));
    this.cw_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.tw_1 = key;
    this.uw_1 = value;
  }
  protoOf(MapEntry).b2 = function () {
    return this.tw_1;
  };
  protoOf(MapEntry).c2 = function () {
    return this.uw_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + this.tw_1 + ', value=' + this.uw_1 + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.tw_1 == null ? 0 : hashCode(this.tw_1);
    result = imul(result, 31) + (this.uw_1 == null ? 0 : hashCode(this.uw_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.tw_1, tmp0_other_with_cast.tw_1))
      return false;
    if (!equals(this.uw_1, tmp0_other_with_cast.uw_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.zg('key', $keySerializer.jg());
      $this$buildSerialDescriptor.zg('value', $valueSerializer.jg());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.xw_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).jg = function () {
    return this.xw_1;
  };
  protoOf(MapEntrySerializer_0).yw = function (_this__u8e3s4) {
    return _this__u8e3s4.b2();
  };
  protoOf(MapEntrySerializer_0).zw = function (_this__u8e3s4) {
    return this.yw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).ax = function (_this__u8e3s4) {
    return _this__u8e3s4.c2();
  };
  protoOf(MapEntrySerializer_0).bx = function (_this__u8e3s4) {
    return this.ax((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).cx = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.zg('first', $keySerializer.jg());
      $this$buildClassSerialDescriptor.zg('second', $valueSerializer.jg());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.ix_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).jg = function () {
    return this.ix_1;
  };
  protoOf(PairSerializer_0).jx = function (_this__u8e3s4) {
    return _this__u8e3s4.lc_1;
  };
  protoOf(PairSerializer_0).zw = function (_this__u8e3s4) {
    return this.jx(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).kx = function (_this__u8e3s4) {
    return _this__u8e3s4.mc_1;
  };
  protoOf(PairSerializer_0).bx = function (_this__u8e3s4) {
    return this.kx(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).cx = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.sj($this.ox_1, 0, $this.lx_1);
    var b = composite.sj($this.ox_1, 1, $this.mx_1);
    var c = composite.sj($this.ox_1, 2, $this.nx_1);
    composite.gj($this.ox_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.uj($this.ox_1);
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.sj($this.ox_1, 0, $this.lx_1);
        } else {
          if (index === 1) {
            b = composite.sj($this.ox_1, 1, $this.mx_1);
          } else {
            if (index === 2) {
              c = composite.sj($this.ox_1, 2, $this.nx_1);
            } else {
              throw SerializationException_init_$Create$_0('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.gj($this.ox_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : !(b == null)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : !(c == null)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.zg('first', this$0.lx_1.jg());
      $this$buildClassSerialDescriptor.zg('second', this$0.mx_1.jg());
      $this$buildClassSerialDescriptor.zg('third', this$0.nx_1.jg());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.lx_1 = aSerializer;
    this.mx_1 = bSerializer;
    this.nx_1 = cSerializer;
    var tmp = this;
    tmp.ox_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).jg = function () {
    return this.ox_1;
  };
  protoOf(TripleSerializer_0).px = function (encoder, value) {
    var structuredEncoder = encoder.fj(this.ox_1);
    structuredEncoder.tk(this.ox_1, 0, this.lx_1, value.je_1);
    structuredEncoder.tk(this.ox_1, 1, this.mx_1, value.ke_1);
    structuredEncoder.tk(this.ox_1, 2, this.nx_1, value.le_1);
    structuredEncoder.gj(this.ox_1);
  };
  protoOf(TripleSerializer_0).wg = function (encoder, value) {
    return this.px(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).xg = function (decoder) {
    var composite = decoder.fj(this.ox_1);
    if (composite.tj()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.dx_1 = keySerializer;
    this.ex_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).fx = function (encoder, value) {
    var structuredEncoder = encoder.fj(this.jg());
    structuredEncoder.tk(this.jg(), 0, this.dx_1, this.zw(value));
    structuredEncoder.tk(this.jg(), 1, this.ex_1, this.bx(value));
    structuredEncoder.gj(this.jg());
  };
  protoOf(KeyValueSerializer).wg = function (encoder, value) {
    return this.fx(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).xg = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.jg();
    var composite = decoder.fj(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.KeyValueSerializer.deserialize.<anonymous>' call
      if (composite.tj()) {
        var key = composite.sj(this.jg(), 0, this.dx_1);
        var value = composite.sj(this.jg(), 1, this.ex_1);
        tmp$ret$0 = this.cx(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.uj(this.jg());
        if (idx === -1) {
          break mainLoop;
        } else {
          if (idx === 0) {
            key_0 = composite.sj(this.jg(), 0, this.dx_1);
          } else {
            if (idx === 1) {
              value_0 = composite.sj(this.jg(), 1, this.ex_1);
            } else {
              throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
            }
          }
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      var tmp = (key_0 == null ? true : !(key_0 == null)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.cx(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.gj(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.qx_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_1()));
  }
  protoOf(ULongSerializer).jg = function () {
    return this.qx_1;
  };
  protoOf(ULongSerializer).rx = function (encoder, value) {
    var tmp = encoder.ik(this.qx_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.dk(tmp$ret$0);
  };
  protoOf(ULongSerializer).wg = function (encoder, value) {
    return this.rx(encoder, value instanceof ULong ? value.mf_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).sx = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.dj(this.qx_1).yi();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).xg = function (decoder) {
    return new ULong(this.sx(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.tx_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_8(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).jg = function () {
    return this.tx_1;
  };
  protoOf(UIntSerializer).ux = function (encoder, value) {
    var tmp = encoder.ik(this.tx_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.ck(tmp$ret$0);
  };
  protoOf(UIntSerializer).wg = function (encoder, value) {
    return this.ux(encoder, value instanceof UInt ? value.bf_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).vx = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.dj(this.tx_1).xi();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).xg = function (decoder) {
    return new UInt(this.vx(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.wx_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_10(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).jg = function () {
    return this.wx_1;
  };
  protoOf(UShortSerializer).xx = function (encoder, value) {
    var tmp = encoder.ik(this.wx_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.bk(tmp$ret$0);
  };
  protoOf(UShortSerializer).wg = function (encoder, value) {
    return this.xx(encoder, value instanceof UShort ? value.xf_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).yx = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.dj(this.wx_1).wi();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).xg = function (decoder) {
    return new UShort(this.yx(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.zx_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_12(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).jg = function () {
    return this.zx_1;
  };
  protoOf(UByteSerializer).ay = function (encoder, value) {
    var tmp = encoder.ik(this.zx_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.ak(tmp$ret$0);
  };
  protoOf(UByteSerializer).wg = function (encoder, value) {
    return this.ay(encoder, value instanceof UByte ? value.qe_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).by = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.dj(this.zx_1).vi();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).xg = function (decoder) {
    return new UByte(this.by(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).hh = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.ig(kClass, typeArgumentsSerializers) : $super.ig.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.dy_1 = class2ContextualFactory;
    this.ey_1 = polyBase2Serializers;
    this.fy_1 = polyBase2DefaultSerializerProvider;
    this.gy_1 = polyBase2NamedSerializers;
    this.hy_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).zk = function (baseClass, value) {
    if (!baseClass.r5(value))
      return null;
    var tmp0_safe_receiver = this.ey_1.h2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.fy_1.h2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).yk = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.gy_1.h2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, Map) ? tmp0_safe_receiver : THROW_CCE()).h2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.hy_1.h2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).ig = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.dy_1.h2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.iy(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).cy = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.dy_1.a2().s();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.v();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.b2();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.c2();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.ly_1;
        collector.my(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.ky(kclass, serial.jy_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.ey_1.a2().s();
    while (tmp0_iterator_0.t()) {
      var element_0 = tmp0_iterator_0.v();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.b2();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.c2();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_1 = classMap.a2().s();
      while (tmp0_iterator_1.t()) {
        var element_1 = tmp0_iterator_1.v();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.b2();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.c2();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.ny(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_2 = this.fy_1.a2().s();
    while (tmp0_iterator_2.t()) {
      var element_2 = tmp0_iterator_2.v();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.b2();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.c2();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.oy(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_3 = this.hy_1.a2().s();
    while (tmp0_iterator_3.t()) {
      var element_3 = tmp0_iterator_3.v();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.b2();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.c2();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.py(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.ly_1 = serializer;
  }
  protoOf(Argless).iy = function (typeArgumentsSerializers) {
    return this.ly_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.ly_1, this.ly_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.ly_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.jy_1 = provider;
  }
  protoOf(WithTypeArguments).iy = function (typeArgumentsSerializers) {
    return this.jy_1(typeArgumentsSerializers);
  };
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.qy_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.ry_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.sy_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.ty_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.uy_1 = HashMap_init_$Create$();
  }
  protoOf(SerializersModuleBuilder).my = function (kClass, serializer) {
    return this.vy(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).ky = function (kClass, provider) {
    return this.vy(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).ny = function (baseClass, actualClass, actualSerializer) {
    this.wy(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).oy = function (baseClass, defaultSerializerProvider) {
    this.xy(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).py = function (baseClass, defaultDeserializerProvider) {
    this.yy(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).zy = function (module_0) {
    module_0.cy(this);
  };
  protoOf(SerializersModuleBuilder).az = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.qy_1.h2(forClass);
      if (!(previous == null) ? !equals(previous, provider) : false) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + forClass + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.qy_1.y1(forClass, provider);
  };
  protoOf(SerializersModuleBuilder).vy = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.az(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.az.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).xy = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.sy_1.h2(baseClass);
    if ((!(previous == null) ? !equals(previous, defaultSerializerProvider) : false) ? !allowOverwrite : false) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + baseClass + ' is already registered: ' + previous);
    }
    // Inline function 'kotlin.collections.set' call
    this.sy_1.y1(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).yy = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.uy_1.h2(baseClass);
    if ((!(previous == null) ? !equals(previous, defaultDeserializerProvider) : false) ? !allowOverwrite : false) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + baseClass + ' is already registered: ' + previous);
    }
    // Inline function 'kotlin.collections.set' call
    this.uy_1.y1(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).bz = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.jg().oh();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.ry_1;
    var value = this_0.h2(baseClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer = HashMap_init_$Create$();
      this_0.y1(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var baseClassSerializers = tmp;
    var previousSerializer = baseClassSerializers.h2(concreteClass);
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.ty_1;
    var value_0 = this_1.h2(baseClass);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer_0 = HashMap_init_$Create$();
      this_1.y1(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var names = tmp_0;
    if (allowOverwrite) {
      if (!(previousSerializer == null)) {
        names.z1(previousSerializer.jg().oh());
      }
      // Inline function 'kotlin.collections.set' call
      baseClassSerializers.y1(concreteClass, concreteSerializer);
      // Inline function 'kotlin.collections.set' call
      names.y1(name, concreteSerializer);
      return Unit_instance;
    }
    if (!(previousSerializer == null)) {
      if (!equals(previousSerializer, concreteSerializer)) {
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
      } else {
        names.z1(previousSerializer.jg().oh());
      }
    }
    var previousByName = names.h2(name);
    if (!(previousByName == null)) {
      // Inline function 'kotlin.sequences.find' call
      var this_2 = asSequence(ensureNotNull(this.ry_1.h2(baseClass)));
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.sequences.firstOrNull' call
        var tmp0_iterator = this_2.s();
        while (tmp0_iterator.t()) {
          var element = tmp0_iterator.v();
          // Inline function 'kotlinx.serialization.modules.SerializersModuleBuilder.registerPolymorphicSerializer.<anonymous>' call
          if (element.c2() === previousByName) {
            tmp$ret$5 = element;
            break $l$block;
          }
        }
        tmp$ret$5 = null;
      }
      var conflictingClass = tmp$ret$5;
      throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers for base class '" + baseClass + "' " + ("have the same serial name '" + name + "': '" + concreteClass + "' and '" + conflictingClass + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.y1(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.y1(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).wy = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.bz(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.bz.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).po = function () {
    return new SerialModuleImpl(this.qy_1, this.ry_1, this.sy_1, this.ty_1, this.uy_1);
  };
  function SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, $this) {
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + concreteClass + ' already registered in the scope of ' + baseClass);
    return $this;
  }
  function SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass) {
    var tmp = SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, objectCreate(protoOf(SerializerAlreadyRegisteredException)));
    captureStack(tmp, SerializerAlreadyRegisteredException_init_$Create$);
    return tmp;
  }
  function SerializerAlreadyRegisteredException(msg) {
    IllegalArgumentException_init_$Init$_0(msg, this);
    captureStack(this, SerializerAlreadyRegisteredException);
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.cz_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.cz_1.equals(tmp0_other_with_cast.cz_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.cz_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.cz_1 + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().j6()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().q6());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.lq(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function createCache$1($factory) {
    this.dz_1 = $factory;
  }
  protoOf(createCache$1).ih = function (key) {
    return this.dz_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.ez_1 = $factory;
  }
  protoOf(createParametrizedCache$1).jh = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      var value = this.ez_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).kh = get_isNullable;
  protoOf(SerialDescriptorImpl).qh = get_isInline;
  protoOf(AbstractDecoder).sj = decodeSerializableElement$default;
  protoOf(AbstractDecoder).yg = decodeSerializableValue;
  protoOf(AbstractDecoder).tj = decodeSequentially;
  protoOf(AbstractDecoder).vj = decodeCollectionSize;
  protoOf(AbstractEncoder).uk = encodeNotNullMark;
  protoOf(AbstractEncoder).vk = beginCollection;
  protoOf(AbstractEncoder).vg = encodeSerializableValue;
  protoOf(ListLikeDescriptor).kh = get_isNullable;
  protoOf(ListLikeDescriptor).qh = get_isInline;
  protoOf(ListLikeDescriptor).kg = get_annotations;
  protoOf(MapLikeDescriptor).kh = get_isNullable;
  protoOf(MapLikeDescriptor).qh = get_isInline;
  protoOf(MapLikeDescriptor).kg = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).kh = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).qh = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).bq = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).kh = get_isNullable;
  protoOf(NothingSerialDescriptor).qh = get_isInline;
  protoOf(NothingSerialDescriptor).kg = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).kh = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).qh = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).kg = get_annotations;
  protoOf(TaggedDecoder).sj = decodeSerializableElement$default;
  protoOf(TaggedDecoder).yg = decodeSerializableValue;
  protoOf(TaggedDecoder).tj = decodeSequentially;
  protoOf(TaggedDecoder).vj = decodeCollectionSize;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ContextualSerializer_init_$Create$;
  _.$_$.b = SerializationException_init_$Init$_0;
  _.$_$.c = SerializationException_init_$Create$_0;
  _.$_$.d = UnknownFieldException_init_$Create$;
  _.$_$.e = SEALED_getInstance;
  _.$_$.f = LONG_getInstance;
  _.$_$.g = STRING_getInstance;
  _.$_$.h = CONTEXTUAL_getInstance;
  _.$_$.i = ENUM_getInstance;
  _.$_$.j = CLASS_getInstance;
  _.$_$.k = LIST_getInstance;
  _.$_$.l = MAP_getInstance;
  _.$_$.m = OBJECT_getInstance;
  _.$_$.n = Companion_instance_0;
  _.$_$.o = BooleanSerializer_getInstance;
  _.$_$.p = IntSerializer_getInstance;
  _.$_$.q = StringSerializer_getInstance;
  _.$_$.r = ListSerializer;
  _.$_$.s = MapSerializer;
  _.$_$.t = serializer_2;
  _.$_$.u = serializer_11;
  _.$_$.v = serializer_9;
  _.$_$.w = serializer_8;
  _.$_$.x = serializer_13;
  _.$_$.y = serializer_7;
  _.$_$.z = PolymorphicKind;
  _.$_$.a1 = PrimitiveKind;
  _.$_$.b1 = PrimitiveSerialDescriptor;
  _.$_$.c1 = get_annotations;
  _.$_$.d1 = get_isInline;
  _.$_$.e1 = get_isNullable;
  _.$_$.f1 = SerialDescriptor;
  _.$_$.g1 = ENUM;
  _.$_$.h1 = buildClassSerialDescriptor;
  _.$_$.i1 = buildSerialDescriptor;
  _.$_$.j1 = getContextualDescriptor;
  _.$_$.k1 = AbstractDecoder;
  _.$_$.l1 = AbstractEncoder;
  _.$_$.m1 = CompositeDecoder;
  _.$_$.n1 = Decoder;
  _.$_$.o1 = Encoder;
  _.$_$.p1 = AbstractPolymorphicSerializer;
  _.$_$.q1 = ArrayListSerializer;
  _.$_$.r1 = typeParametersSerializers;
  _.$_$.s1 = GeneratedSerializer;
  _.$_$.t1 = InlinePrimitiveDescriptor;
  _.$_$.u1 = NamedValueDecoder;
  _.$_$.v1 = PluginGeneratedSerialDescriptor;
  _.$_$.w1 = SerializerFactory;
  _.$_$.x1 = jsonCachedSerialNames;
  _.$_$.y1 = throwMissingFieldException;
  _.$_$.z1 = EmptySerializersModule_0;
  _.$_$.a2 = SerializersModuleBuilder;
  _.$_$.b2 = contextual;
  _.$_$.c2 = SerializersModuleCollector;
  _.$_$.d2 = DeserializationStrategy;
  _.$_$.e2 = KSerializer;
  _.$_$.f2 = SealedClassSerializer;
  _.$_$.g2 = SerializationException;
  _.$_$.h2 = findPolymorphicSerializer;
  _.$_$.i2 = serializer_1;
  _.$_$.j2 = serializer_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
