(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.f4;
  var protoOf = kotlin_kotlin.$_$.m8;
  var THROW_CCE = kotlin_kotlin.$_$.sa;
  var Continuation = kotlin_kotlin.$_$.t6;
  var classMeta = kotlin_kotlin.$_$.j7;
  var setMetadataFor = kotlin_kotlin.$_$.n8;
  var VOID = kotlin_kotlin.$_$.f;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.o3;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.m6;
  var interfaceMeta = kotlin_kotlin.$_$.s7;
  var isInterface = kotlin_kotlin.$_$.b8;
  var toString = kotlin_kotlin.$_$.r8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var toString_0 = kotlin_kotlin.$_$.rb;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l6;
  var objectMeta = kotlin_kotlin.$_$.l8;
  var hashCode = kotlin_kotlin.$_$.r7;
  var equals = kotlin_kotlin.$_$.m7;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.y;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.d2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.g2;
  var Companion_instance = kotlin_kotlin.$_$.a4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.c2;
  var createFailure = kotlin_kotlin.$_$.gb;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.p6;
  var Key_instance = kotlin_kotlin.$_$.n3;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.o6;
  var get = kotlin_kotlin.$_$.q6;
  var minusKey = kotlin_kotlin.$_$.r6;
  var ContinuationInterceptor = kotlin_kotlin.$_$.s6;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var Enum = kotlin_kotlin.$_$.ia;
  var startCoroutine = kotlin_kotlin.$_$.a7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.mb;
  var Long = kotlin_kotlin.$_$.na;
  var intercepted = kotlin_kotlin.$_$.n6;
  var Companion_getInstance = kotlin_kotlin.$_$.z3;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.j;
  var RuntimeException = kotlin_kotlin.$_$.ra;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.t1;
  var captureStack = kotlin_kotlin.$_$.e7;
  var Error_0 = kotlin_kotlin.$_$.ja;
  var Error_init_$Init$ = kotlin_kotlin.$_$.e1;
  var Element = kotlin_kotlin.$_$.x6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.qb;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var CancellationException = kotlin_kotlin.$_$.k6;
  var ArrayList = kotlin_kotlin.$_$.g4;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  var plus = kotlin_kotlin.$_$.y6;
  var get_0 = kotlin_kotlin.$_$.v6;
  var fold = kotlin_kotlin.$_$.u6;
  var minusKey_0 = kotlin_kotlin.$_$.w6;
  var anyToString = kotlin_kotlin.$_$.b7;
  var UnsupportedOperationException = kotlin_kotlin.$_$.db;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.hb;
  var toLong = kotlin_kotlin.$_$.p8;
  var CoroutineImpl = kotlin_kotlin.$_$.z6;
  var addSuppressed = kotlin_kotlin.$_$.eb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.s5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var compareTo = kotlin_kotlin.$_$.k7;
  var last = kotlin_kotlin.$_$.j9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.y1;
  var IllegalStateException = kotlin_kotlin.$_$.ma;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.l1;
  var NoSuchElementException = kotlin_kotlin.$_$.oa;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.q1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var getKClass = kotlin_kotlin.$_$.e;
  var Unit = kotlin_kotlin.$_$.cb;
  var joinToString = kotlin_kotlin.$_$.n5;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.t3;
  var Exception = kotlin_kotlin.$_$.ka;
  var toLongOrNull = kotlin_kotlin.$_$.w9;
  var plus_0 = kotlin_kotlin.$_$.w5;
  var List = kotlin_kotlin.$_$.m4;
  var listOf_0 = kotlin_kotlin.$_$.r5;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.z;
  var getStringHashCode = kotlin_kotlin.$_$.q7;
  var removeFirstOrNull = kotlin_kotlin.$_$.x5;
  var MutableList = kotlin_kotlin.$_$.p4;
  var coerceIn = kotlin_kotlin.$_$.w8;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.s1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.w;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.v1;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.m19(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.m19.call(this, cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.i19(onCancelling, invokeImmediately, handler) : $super.i19.call(this, onCancelling, invokeImmediately, handler);
  }
  setMetadataFor(Job, 'Job', interfaceMeta, VOID, [Element], VOID, VOID, VOID, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, VOID, [Job], VOID, VOID, VOID, [0]);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, VOID, [Job, ParentJob], VOID, VOID, VOID, [0]);
  setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], VOID, VOID, VOID, [0]);
  setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, StandaloneCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(DeferredCoroutine, 'DeferredCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, Job], VOID, VOID, VOID, [0]);
  setMetadataFor(LazyDeferredCoroutine, 'LazyDeferredCoroutine', classMeta, DeferredCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(CancellableContinuation, 'CancellableContinuation', interfaceMeta, VOID, [Continuation]);
  setMetadataFor(Runnable, 'Runnable', interfaceMeta);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta, VOID, [Runnable]);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask);
  setMetadataFor(Waiter, 'Waiter', interfaceMeta);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, CancellableContinuation, Waiter]);
  setMetadataFor(NotCompleted, 'NotCompleted', interfaceMeta);
  setMetadataFor(CancelHandlerBase, 'CancelHandlerBase', classMeta);
  setMetadataFor(CancelHandler, 'CancelHandler', classMeta, CancelHandlerBase, [CancelHandlerBase, NotCompleted]);
  setMetadataFor(Active, 'Active', objectMeta, VOID, [NotCompleted]);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', classMeta);
  setMetadataFor(InvokeOnCancel, 'InvokeOnCancel', classMeta, CancelHandler);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta);
  setMetadataFor(CancelledContinuation, 'CancelledContinuation', classMeta, CompletedExceptionally);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta);
  setMetadataFor(Key, 'Key', objectMeta, AbstractCoroutineContextKey);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  setMetadataFor(Key_0, 'Key', objectMeta);
  setMetadataFor(GlobalScope, 'GlobalScope', objectMeta, VOID, [CoroutineScope]);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum);
  setMetadataFor(Delay, 'Delay', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(EventLoop, 'EventLoop', classMeta, CoroutineDispatcher);
  setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta);
  setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta, RuntimeException);
  setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta, Error_0);
  setMetadataFor(Key_1, 'Key', objectMeta);
  setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, VOID, [ChildHandle]);
  setMetadataFor(Incomplete, 'Incomplete', interfaceMeta);
  setMetadataFor(Empty, 'Empty', classMeta, VOID, [Incomplete]);
  setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta, VOID, VOID, LinkedListNode);
  setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, LinkedListNode, VOID, LinkedListHead);
  setMetadataFor(NodeList, 'NodeList', classMeta, LinkedListHead, [LinkedListHead, Incomplete], NodeList);
  setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta, LinkedListNode);
  setMetadataFor(JobNode, 'JobNode', classMeta, CompletionHandlerBase, [CompletionHandlerBase, Incomplete]);
  setMetadataFor(Finishing, 'Finishing', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta, JobNode);
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta);
  setMetadataFor(ChildContinuation, 'ChildContinuation', classMeta, JobCancellingNode);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher);
  setMetadataFor(Key_2, 'Key', objectMeta);
  setMetadataFor(BufferOverflow, 'BufferOverflow', classMeta, Enum);
  setMetadataFor(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode', classMeta);
  setMetadataFor(Segment, 'Segment', classMeta, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  setMetadataFor(ChannelSegment, 'ChannelSegment', classMeta, Segment);
  setMetadataFor($hasNextCOROUTINE$4, '$hasNextCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(SendBroadcast, 'SendBroadcast', classMeta, VOID, [Waiter]);
  setMetadataFor(BufferedChannelIterator, 'BufferedChannelIterator', classMeta, VOID, [Waiter], VOID, VOID, VOID, [0, 3]);
  setMetadataFor($sendCOROUTINE$1, '$sendCOROUTINE$1', classMeta, CoroutineImpl);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.m19(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.m19.call(this, cause);
    }
    return tmp;
  }
  setMetadataFor(ReceiveChannel, 'ReceiveChannel', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.t1l(cause) : $super.t1l.call(this, cause);
  }
  setMetadataFor(SendChannel, 'SendChannel', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BufferedChannel, 'BufferedChannel', classMeta, VOID, [ReceiveChannel, SendChannel], VOID, VOID, VOID, [1, 4, 0, 3]);
  setMetadataFor(WaiterEB, 'WaiterEB', classMeta);
  setMetadataFor(ReceiveCatching, 'ReceiveCatching', classMeta, VOID, [Waiter]);
  setMetadataFor(Factory, 'Factory', objectMeta);
  setMetadataFor(Failed, 'Failed', classMeta, VOID, VOID, Failed);
  setMetadataFor(Closed, 'Closed', classMeta, Failed);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ChannelResult, 'ChannelResult', classMeta);
  setMetadataFor(ClosedSendChannelException, 'ClosedSendChannelException', classMeta, IllegalStateException);
  setMetadataFor(ClosedReceiveChannelException, 'ClosedReceiveChannelException', classMeta, NoSuchElementException);
  setMetadataFor(ChannelCoroutine, 'ChannelCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, ReceiveChannel, SendChannel], VOID, VOID, VOID, [0, 1]);
  setMetadataFor(ConflatedBufferedChannel, 'ConflatedBufferedChannel', classMeta, BufferedChannel, VOID, VOID, VOID, VOID, [1, 0]);
  setMetadataFor(ProducerScope, 'ProducerScope', interfaceMeta, VOID, [CoroutineScope, SendChannel], VOID, VOID, VOID, [1]);
  setMetadataFor(ProducerCoroutine, 'ProducerCoroutine', classMeta, ChannelCoroutine, [ChannelCoroutine, ProducerScope], VOID, VOID, VOID, [0, 1]);
  setMetadataFor(Flow, 'Flow', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlow, 'ChannelFlow', classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlowBuilder, 'ChannelFlowBuilder', classMeta, ChannelFlow, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(AbstractFlow, 'AbstractFlow', classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(SafeFlow, 'SafeFlow', classMeta, AbstractFlow, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($emitAllImplCOROUTINE$7, '$emitAllImplCOROUTINE$7', classMeta, CoroutineImpl);
  setMetadataFor($collectCOROUTINE$8, '$collectCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor(FlowCollector, 'FlowCollector', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(StateFlow, 'StateFlow', interfaceMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlow$_get_collectToFun_$slambda_j53z2e, 'ChannelFlow$<get-collectToFun>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlow$collect$slambda, 'ChannelFlow$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ThrowingCollector, 'ThrowingCollector', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta);
  setMetadataFor(SegmentOrClosed, 'SegmentOrClosed', classMeta);
  setMetadataFor(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', objectMeta, Exception);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, Continuation]);
  setMetadataFor(UndeliveredElementException, 'UndeliveredElementException', classMeta, RuntimeException);
  setMetadataFor(ScopeCoroutine, 'ScopeCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Symbol, 'Symbol', classMeta);
  setMetadataFor(SelectInstance, 'SelectInstance', interfaceMeta);
  setMetadataFor(ClauseData, 'ClauseData', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SelectImplementation, 'SelectImplementation', classMeta, CancelHandler, [CancelHandler, SelectInstance, Waiter], VOID, VOID, VOID, [0, 2]);
  setMetadataFor(TrySelectDetailedResult, 'TrySelectDetailedResult', classMeta, Enum);
  setMetadataFor(Dispatchers, 'Dispatchers', objectMeta);
  setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta, MainCoroutineDispatcher);
  setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, EventLoop, VOID, UnconfinedEventLoop);
  setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta, CancellationException);
  setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, VOID, [1]);
  setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MessageQueue, 'MessageQueue', classMeta, VOID, [MutableList]);
  setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta, MessageQueue);
  setMetadataFor(ClearTimeout, 'ClearTimeout', classMeta, CancelHandler);
  setMetadataFor(WindowClearTimeout, 'WindowClearTimeout', classMeta, ClearTimeout);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, VOID, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue);
  setMetadataFor(SafeCollector, 'SafeCollector', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', classMeta, RuntimeException);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta, VOID, VOID, CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.b18(parentContext.ma(Key_instance_2));
    }
    this.e18_1 = parentContext.ad(this);
  }
  protoOf(AbstractCoroutine).la = function () {
    return this.e18_1;
  };
  protoOf(AbstractCoroutine).f18 = function () {
    return this.e18_1;
  };
  protoOf(AbstractCoroutine).g18 = function () {
    return protoOf(JobSupport).g18.call(this);
  };
  protoOf(AbstractCoroutine).h18 = function (value) {
  };
  protoOf(AbstractCoroutine).i18 = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).j18 = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).k18 = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.i18(state.l18_1, state.n18());
    } else {
      this.h18((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).sa = function (result) {
    var state = this.o18(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.p18(state);
  };
  protoOf(AbstractCoroutine).p18 = function (state) {
    return this.q18(state);
  };
  protoOf(AbstractCoroutine).r18 = function (exception) {
    handleCoroutineException(this.e18_1, exception);
  };
  protoOf(AbstractCoroutine).s18 = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.e18_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).s18.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).s18.call(this);
  };
  protoOf(AbstractCoroutine).t18 = function (start, receiver, block) {
    start.w18(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.c1a() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.t18(start, coroutine, block);
    return coroutine;
  }
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.c1a() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.t18(start, coroutine, block);
    return coroutine;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).y19 = function (exception) {
    handleCoroutineException(this.e18_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.j1a_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).d19 = function () {
    startCoroutineCancellable(this.j1a_1, this);
  };
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).n1a = function () {
    var tmp = this.b1a();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.r1a_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).d19 = function () {
    startCoroutineCancellable(this.r1a_1, this);
  };
  function CancellableContinuation() {
  }
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.c1b();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      if (tmp0_safe_receiver.j1b()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_parentHandle__f8dcex($this) {
    return $this.i1b_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.z18();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.l1b_1)) {
      var tmp_0 = $this.e1b_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).k1b();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.e1b_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.m1b(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.g1b_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(index === 536870911)) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      segment.r1b(index, cause, $this.la());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.la(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.g1b_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) {
        case 0:
          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          // Inline function 'kotlinx.coroutines.index' call

          var index = cur & 536870911;
          var tmp$ret$2 = (1 << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + index | 0;
          if ($this.g1b_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.g1b_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) {
        case 0:
          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          // Inline function 'kotlinx.coroutines.index' call

          var index = cur & 536870911;
          var tmp$ret$2 = (2 << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + index | 0;
          if ($this.g1b_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.la().ma(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ChildContinuation($this);
    var handle = parent.j19(true, VOID, tmp$ret$1);
    $this.i1b_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.h1b_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellationImpl.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.h1b_1.atomicfu$compareAndSet(state, handler))
          return Unit_instance;
      } else {
        var tmp;
        if (state instanceof CancelHandler) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.a1c()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l18_1;
              if (handler instanceof CancelHandler) {
                $this.x1b(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.t1b_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!(handler instanceof CancelHandler))
                THROW_CCE();
              if (state.y1b()) {
                $this.x1b(handler, state.w1b_1);
                return Unit_instance;
              }
              var update = state.z1b(VOID, handler);
              if ($this.h1b_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!(handler instanceof CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.h1b_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = state instanceof CancelHandler;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, state instanceof CancelHandler ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.h1b_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(state == null) ? isInterface(state, NotCompleted) : false) {
          var update = resumedState($this, state, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.h1b_1.atomicfu$compareAndSet(state, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_instance;
        } else {
          if (state instanceof CancelledContinuation) {
            if (state.f1c()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.b1c(onCancellation, state.l18_1);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.h1b_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(state == null) ? isInterface(state, NotCompleted) : false) {
          var update = resumedState($this, state, proposedUpdate, $this.l1b_1, onCancellation, idempotent);
          if (!$this.h1b_1.atomicfu$compareAndSet(state, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (state instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) ? state.v1b_1 === idempotent : false) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.g1c();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.e1b_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.f1b_1 = this.e1b_1.la();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$0 = (0 << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + 536870911 | 0;
    tmp.g1b_1 = atomic$int$1(tmp$ret$0);
    this.h1b_1 = atomic$ref$1(Active_instance);
    this.i1b_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).h1c = function () {
    return this.e1b_1;
  };
  protoOf(CancellableContinuationImpl).la = function () {
    return this.f1b_1;
  };
  protoOf(CancellableContinuationImpl).z18 = function () {
    return this.h1b_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).a19 = function () {
    var tmp = this.z18();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).i1c = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.a19()) {
      handle.j1c();
      this.i1b_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).j1b = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.h1b_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.v1b_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.g1c();
      return false;
    }
    var tmp_0 = this.g1b_1;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp_0.kotlinx$atomicfu$value = (0 << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + 536870911 | 0;
    this.h1b_1.kotlinx$atomicfu$value = Active_instance;
    return true;
  };
  protoOf(CancellableContinuationImpl).k1c = function () {
    return this.z18();
  };
  protoOf(CancellableContinuationImpl).l1c = function (takenState, cause) {
    var this_0 = this.h1b_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!!state.y1b()) {
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.z1b(VOID, VOID, VOID, VOID, cause);
            if (this.h1b_1.atomicfu$compareAndSet(state, update)) {
              state.m1c(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.h1b_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).n1c = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.h1b_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(!(state == null) ? isInterface(state, NotCompleted) : false))
          return false;
        var tmp;
        if (state instanceof CancelHandler) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.h1b_1.atomicfu$compareAndSet(state, update)) {
          break $l$block;
        }
        if (state instanceof CancelHandler) {
          this.x1b(state, cause);
        } else {
          if (state instanceof Segment) {
            callSegmentOnCancellation(this, state, cause);
          }
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.l1b_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).o1c = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.n1c(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).x1b = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.la(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, ex));
        tmp_0 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).b1c = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.la(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).p1c = function (parent) {
    return parent.e19();
  };
  protoOf(CancellableContinuationImpl).q1c = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.r1c();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.r1c();
    }
    var state = this.z18();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.l18_1, this);
    if (get_isCancellableMode(this.l1b_1)) {
      var job = this.la().ma(Key_instance_2);
      if (!(job == null) ? !job.g18() : false) {
        var cause = job.e19();
        this.l1c(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.s1c(state);
  };
  protoOf(CancellableContinuationImpl).r1c = function () {
    var tmp = this.e1b_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t1c(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.g1c();
    this.n1c(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).sa = function (result) {
    return resumeImpl$default(this, toState(result, this), this.l1b_1);
  };
  protoOf(CancellableContinuationImpl).u1c = function (value, onCancellation) {
    return resumeImpl(this, value, this.l1b_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).v1c = function (segment, index) {
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = this.g1b_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlinx.coroutines.index' call
        // Inline function 'kotlin.contracts.contract' call
        if (!((cur & 536870911) === 536870911)) {
          // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>.<anonymous>' call
          var message = 'invokeOnCancellation should be called at most once';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlinx.coroutines.decisionAndIndex' call
        // Inline function 'kotlinx.coroutines.decision' call
        var upd = (cur >> _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i() << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + index | 0;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    invokeOnCancellationImpl(this, segment);
  };
  protoOf(CancellableContinuationImpl).u1a = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    invokeOnCancellationImpl(this, cancelHandler);
  };
  protoOf(CancellableContinuationImpl).g1c = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.j1c();
    this.i1b_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).s1a = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).t1a = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.l1b_1);
  };
  protoOf(CancellableContinuationImpl).v1a = function (_this__u8e3s4, value) {
    var tmp = this.e1b_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.x1a_1) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.l1b_1;
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).s1c = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.s1b_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).w1c = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).w1c.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.e1b_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.s18() + '(' + toDebugString(this.e1b_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).s18 = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.s1b_1 = result;
    this.t1b_1 = cancelHandler;
    this.u1b_1 = onCancellation;
    this.v1b_1 = idempotentResume;
    this.w1b_1 = cancelCause;
  }
  protoOf(CompletedContinuation).y1b = function () {
    return !(this.w1b_1 == null);
  };
  protoOf(CompletedContinuation).m1c = function (cont, cause) {
    var tmp0_safe_receiver = this.t1b_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.x1b(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.u1b_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.b1c(tmp1_safe_receiver, cause);
    }
  };
  protoOf(CompletedContinuation).z1c = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).z1b = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.s1b_1 : result;
    cancelHandler = cancelHandler === VOID ? this.t1b_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.u1b_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.v1b_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.w1b_1 : cancelCause;
    return $super === VOID ? this.z1c(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.z1c.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.s1b_1) + ', cancelHandler=' + this.t1b_1 + ', onCancellation=' + this.u1b_1 + ', idempotentResume=' + toString_0(this.v1b_1) + ', cancelCause=' + this.w1b_1 + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.s1b_1 == null ? 0 : hashCode(this.s1b_1);
    result = imul(result, 31) + (this.t1b_1 == null ? 0 : hashCode(this.t1b_1)) | 0;
    result = imul(result, 31) + (this.u1b_1 == null ? 0 : hashCode(this.u1b_1)) | 0;
    result = imul(result, 31) + (this.v1b_1 == null ? 0 : hashCode(this.v1b_1)) | 0;
    result = imul(result, 31) + (this.w1b_1 == null ? 0 : hashCode(this.w1b_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.s1b_1, tmp0_other_with_cast.s1b_1))
      return false;
    if (!equals(this.t1b_1, tmp0_other_with_cast.t1b_1))
      return false;
    if (!equals(this.u1b_1, tmp0_other_with_cast.u1b_1))
      return false;
    if (!equals(this.v1b_1, tmp0_other_with_cast.v1b_1))
      return false;
    if (!equals(this.w1b_1, tmp0_other_with_cast.w1b_1))
      return false;
    return true;
  };
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.a1d_1 = handler;
  }
  protoOf(InvokeOnCancel).b1d = function (cause) {
    this.a1d_1(cause);
  };
  protoOf(InvokeOnCancel).invoke = function (cause) {
    return this.b1d(cause);
  };
  protoOf(InvokeOnCancel).toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.a1d_1) + '@' + get_hexAddress(this) + ']';
  };
  function _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return 29;
  }
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.l18_1 = cause;
    this.m18_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).n18 = function () {
    return this.m18_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).a1c = function () {
    return this.m18_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.l18_1 + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : cause, handled);
    this.e1c_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).f1c = function () {
    return this.e1c_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      tmp = !(onCancellation == null) ? new CompletedWithCancellation(it, onCancellation) : it;
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.c1d_1 = result;
    this.d1d_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString_0(this.c1d_1) + ', onCancellation=' + this.d1d_1 + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.c1d_1 == null ? 0 : hashCode(this.c1d_1);
    result = imul(result, 31) + hashCode(this.d1d_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.c1d_1, tmp0_other_with_cast.c1d_1))
      return false;
    if (!equals(this.d1d_1, tmp0_other_with_cast.d1d_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.l18_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = (state == null ? true : !(state == null)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(value);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).f1d = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).pa = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).na = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.h1d();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.ma(Key_instance_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.i1d(context, exception);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(exception, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, exception);
  }
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    return RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
  }
  function GlobalScope() {
  }
  protoOf(GlobalScope).f18 = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    return GlobalScope_instance;
  }
  function CoroutineScope() {
  }
  function ensureActive(_this__u8e3s4) {
    return ensureActive_0(_this__u8e3s4.f18());
  }
  function get_isActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.f18().ma(Key_instance_2);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g18();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var coroutine = new ScopeCoroutine($completion.la(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).w18 = function (block, receiver, completion) {
    var tmp;
    switch (this.x7_1) {
      case 0:
        startCoroutineCancellable_0(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).c1a = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.ma(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delay(timeMillis, $completion) {
    if (timeMillis.n5(new Long(0, 0)) <= 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.i1c();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    Companion_getInstance();
    if (timeMillis.n5(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.la()).j1d(timeMillis, cancellable);
    }
    return cancellable.q1c();
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.l1d_1 = new Long(0, 0);
    this.m1d_1 = false;
    this.n1d_1 = null;
  }
  protoOf(EventLoop).o1d = function () {
    var tmp0_elvis_lhs = this.n1d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.rb();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.x1c();
    return true;
  };
  protoOf(EventLoop).p1d = function (task) {
    var tmp0_elvis_lhs = this.n1d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.n1d_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.pb(task);
  };
  protoOf(EventLoop).q1d = function () {
    return this.l1d_1.n5(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).r1d = function () {
    var tmp0_safe_receiver = this.n1d_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).s1d = function (unconfined) {
    this.l1d_1 = this.l1d_1.m9(delta(this, unconfined));
    if (!unconfined)
      this.m1d_1 = true;
  };
  protoOf(EventLoop).t1d = function (unconfined) {
    this.l1d_1 = this.l1d_1.n9(delta(this, unconfined));
    if (this.l1d_1.n5(new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.m1d_1) {
      this.u1d();
    }
  };
  protoOf(EventLoop).u1d = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.v1d_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).w1d = function () {
    var tmp0_elvis_lhs = this.v1d_1.y1d();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().v1d_1.z1d(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).q17 = function () {
    return null;
  };
  protoOf(NonDisposableHandle).j1c = function () {
  };
  protoOf(NonDisposableHandle).q19 = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function ensureActive_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.ma(Key_instance_2);
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_1(tmp0_safe_receiver);
    }
  }
  function ensureActive_1(_this__u8e3s4) {
    if (!_this__u8e3s4.g18())
      throw _this__u8e3s4.e19();
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.a1e_1 = isActive;
  }
  protoOf(Empty).g18 = function () {
    return this.a1e_1;
  };
  protoOf(Empty).b1e = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.a1e_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).g18 = function () {
    return true;
  };
  protoOf(NodeList).b1e = function () {
    return this;
  };
  protoOf(NodeList).f1e = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    this_0.v4('List{');
    this_0.v4(state);
    this_0.v4('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.g1e_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var node = cur;
        if (first)
          first = false;
        else {
          this_0.v4(', ');
        }
        this_0.u4(node);
      }
      cur = cur.g1e_1;
    }
    this_0.v4(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.f1e('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  protoOf(JobNode).t1e = function () {
    var tmp = this.s1e_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).g18 = function () {
    return true;
  };
  protoOf(JobNode).b1e = function () {
    return null;
  };
  protoOf(JobNode).j1c = function () {
    return this.t1e().k19(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.t1e()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.y1e_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.y1e_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l18_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.z1e();
    var exceptions = state.a1f(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.y19(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).a1c();
      }
    }
    if (!wasCancelling) {
      $this.v19(finalException);
    }
    $this.k18(finalState);
    var casSuccess = $this.z17_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.z()) {
      if (state.z1e()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.j18() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.s();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.v();
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.d1(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.s();
        while (tmp0_iterator_0.t()) {
          var element_0 = tmp0_iterator_0.v();
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.l() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.l());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.s();
    while (tmp0_iterator.t()) {
      var exception = tmp0_iterator.v();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.p(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.z17_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.v19(null);
    $this.k18(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.y18();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.j1c();
      $this.x18(NonDisposableHandle_instance);
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l18_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.r18(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.b1e();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.v19(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.g1e_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var node = cur;
        try {
          node.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + $this, ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.g1e_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.r18(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.w19())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.y18();
    if (parent === null ? true : parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.q19(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.g1e_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var node = cur;
        try {
          node.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + $this, ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.g1e_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.r18(tmp0_safe_receiver_0);
    }
    return Unit_instance;
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.a1e_1)
        return 0;
      if (!$this.z17_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.d19();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.z17_1.atomicfu$compareAndSet(state, state.b1f_1))
          return -1;
        $this.d19();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_0 = tmp1_safe_receiver;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.s1e_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      if (!($this.z18() === expect)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.n1e(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.a1e_1 ? list : new InactiveNodeList(list);
    $this.z17_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.u1e(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var list = state.g1e_1;
    $this.z17_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var state = $this.z18();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.c1f();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.j18() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).t19();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var state = $this.z18();
        if (state instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (state.d1f())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = state.z1e();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            state.e1f(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = state.f1f();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, state.v1e_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (state.g18()) {
              if (tryMakeCancelling($this, state, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, state, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString_0(state);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.b1e();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.z17_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.c1f())
      return get_COMPLETING_ALREADY();
    finishing.g1f(true);
    if (!(finishing === state)) {
      if (!$this.z17_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.z1e();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.e1f(tmp0_safe_receiver.l18_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.f1f();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l18_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.b1e();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.l1f_1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var handle = tmp.j19(VOID, false, tmp$ret$1);
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        $this_0 = $this_0;
        state_0 = state_0;
        child_0 = nextChild_0;
        proposedUpdate_0 = proposedUpdate_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_instance;
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.q18(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (!cur.i1e_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      cur = cur.h1e_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      cur = cur.g1e_1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (cur.i1e_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.z1e() ? 'Cancelling' : state.c1f() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.g18() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.v1e_1 = list;
    this.w1e_1 = atomic$boolean$1(isCompleting);
    this.x1e_1 = atomic$ref$1(rootCause);
    this.y1e_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).b1e = function () {
    return this.v1e_1;
  };
  protoOf(Finishing).g1f = function (value) {
    this.w1e_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).c1f = function () {
    return this.w1e_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).m1f = function (value) {
    this.x1e_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).f1f = function () {
    return this.x1e_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).d1f = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).z1e = function () {
    return !(this.f1f() == null);
  };
  protoOf(Finishing).g18 = function () {
    return this.f1f() == null;
  };
  protoOf(Finishing).a1f = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        this_0.p(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.f1f();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.l1(0, rootCause);
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.p(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).e1f = function (exception) {
    var rootCause = this.f1f();
    if (rootCause == null) {
      this.m1f(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        this_0.p(eh);
        this_0.p(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).p(exception);
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.z1e() + ', completing=' + this.c1f() + ', rootCause=' + this.f1f() + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.v1e_1 + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.r1f_1 = parent;
    this.s1f_1 = state;
    this.t1f_1 = child;
    this.u1f_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).b1d = function (cause) {
    continueCompleting(this.r1f_1, this.s1f_1, this.t1f_1, this.u1f_1);
  };
  protoOf(ChildCompletion).invoke = function (cause) {
    return this.b1d(cause);
  };
  function JobSupport(active) {
    this.z17_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.a18_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).b2 = function () {
    return Key_instance_2;
  };
  protoOf(JobSupport).x18 = function (value) {
    this.a18_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).y18 = function () {
    return this.a18_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).q17 = function () {
    var tmp0_safe_receiver = this.y18();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q17();
  };
  protoOf(JobSupport).b18 = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.x18(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.c19();
    var handle = parent.u19(this);
    this.x18(handle);
    if (this.a19()) {
      handle.j1c();
      this.x18(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).z18 = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.z17_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state instanceof OpDescriptor))
        return state;
      state.v1f(this);
    }
  };
  protoOf(JobSupport).g18 = function () {
    var state = this.z18();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.g18();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).a19 = function () {
    var tmp = this.z18();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).b19 = function () {
    var state = this.z18();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.z1e();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).c19 = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var state = this.z18();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).d19 = function () {
  };
  protoOf(JobSupport).e19 = function () {
    var state = this.z18();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.f1f();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.f19(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.g19(state.l18_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).f19 = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.j18() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).g19 = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.f19(_this__u8e3s4, message) : $super.f19.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).h19 = function (handler) {
    return this.i19(false, true, handler);
  };
  protoOf(JobSupport).i19 = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var state = this.z18();
        if (state instanceof Empty) {
          if (state.a1e_1) {
            if (this.z17_1.atomicfu$compareAndSet(state, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.b1e();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_instance;
              var tmp;
              if (onCancelling) {
                tmp = state instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
                rootCause = state.f1f();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  if (handler instanceof ChildHandleNode) {
                    tmp_2 = !state.c1f();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, state, list, node)) {
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_instance;
                }
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, state, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l18_1);
            }
            return NonDisposableHandle_instance;
          }
        }
      }
    }
  };
  protoOf(JobSupport).k19 = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var state = this.z18();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.z17_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.b1e() == null)) {
            node.m1e();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).l19 = function () {
    return false;
  };
  protoOf(JobSupport).m19 = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.j18() : null, null, this);
    } else {
      tmp = cause;
    }
    this.o19(tmp);
  };
  protoOf(JobSupport).j18 = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).o19 = function (cause) {
    this.s19(cause);
  };
  protoOf(JobSupport).p19 = function (parentJob) {
    this.s19(parentJob);
  };
  protoOf(JobSupport).q19 = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.s19(cause) ? this.x19() : false;
  };
  protoOf(JobSupport).r19 = function (cause) {
    return this.s19(cause);
  };
  protoOf(JobSupport).s19 = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.l19()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.q18(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).t19 = function () {
    var state = this.z18();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.f1f();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.l18_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).o18 = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var state = this.z18();
        var finalState = tryMakeCompleting(this, state, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).u19 = function (child) {
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ChildHandleNode(child);
    var tmp = this.j19(true, VOID, tmp$ret$1);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).r18 = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).v19 = function (cause) {
  };
  protoOf(JobSupport).w19 = function () {
    return false;
  };
  protoOf(JobSupport).x19 = function () {
    return true;
  };
  protoOf(JobSupport).y19 = function (exception) {
    return false;
  };
  protoOf(JobSupport).k18 = function (state) {
  };
  protoOf(JobSupport).q18 = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.z19() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).z19 = function () {
    return this.s18() + '{' + stateString(this, this.z18()) + '}';
  };
  protoOf(JobSupport).s18 = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).a1a = function () {
    var state = this.z18();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletionExceptionOrNull.<anonymous>' call
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_exceptionOrNull__b3j7js(state, this);
  };
  protoOf(JobSupport).b1a = function () {
    var state = this.z18();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletedInternal.<anonymous>' call
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (state instanceof CompletedExceptionally)
      throw state.l18_1;
    return unboxState(state);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function InactiveNodeList(list) {
    this.b1f_1 = list;
  }
  protoOf(InactiveNodeList).b1e = function () {
    return this.b1f_1;
  };
  protoOf(InactiveNodeList).g18 = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.b1f_1.f1e('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.l1f_1 = childJob;
  }
  protoOf(ChildHandleNode).q17 = function () {
    return this.t1e();
  };
  protoOf(ChildHandleNode).b1d = function (cause) {
    return this.l1f_1.p19(this.t1e());
  };
  protoOf(ChildHandleNode).invoke = function (cause) {
    return this.b1d(cause);
  };
  protoOf(ChildHandleNode).q19 = function (cause) {
    return this.t1e().q19(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.a1g_1 = handler;
    this.b1g_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).b1d = function (cause) {
    if (this.b1g_1.atomicfu$compareAndSet(0, 1))
      this.a1g_1(cause);
  };
  protoOf(InvokeOnCancelling).invoke = function (cause) {
    return this.b1d(cause);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.g1g_1 = handler;
  }
  protoOf(InvokeOnCompletion).b1d = function (cause) {
    return this.g1g_1(cause);
  };
  protoOf(InvokeOnCompletion).invoke = function (cause) {
    return this.b1d(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1g_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function IncompleteStateBox(state) {
    this.h1g_1 = state;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.m1g_1 = child;
  }
  protoOf(ChildContinuation).b1d = function (cause) {
    this.m1g_1.o1c(this.m1g_1.p1c(this.t1e()));
  };
  protoOf(ChildContinuation).invoke = function (cause) {
    return this.b1d(cause);
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.p1g();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).p1g = function () {
    var main = Dispatchers_getInstance().u1g();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.o1g();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function TimeoutCancellationException() {
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).f1d = function (context) {
    return false;
  };
  protoOf(Unconfined).g1d = function (context, block) {
    var yieldContext = context.ma(Key_instance_3);
    if (!(yieldContext == null)) {
      yieldContext.x1g_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function Waiter() {
  }
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_instance;
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function get_NULL_SEGMENT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NULL_SEGMENT;
  }
  var NULL_SEGMENT;
  function get_SEGMENT_SIZE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  function get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  }
  var EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  function get_BUFFERED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return BUFFERED;
  }
  var BUFFERED;
  function get_IN_BUFFER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return IN_BUFFER;
  }
  var IN_BUFFER;
  function get_RESUMING_BY_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_RCV;
  }
  var RESUMING_BY_RCV;
  function get_RESUMING_BY_EB() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_EB;
  }
  var RESUMING_BY_EB;
  function get_POISONED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return POISONED;
  }
  var POISONED;
  function get_DONE_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return DONE_RCV;
  }
  var DONE_RCV;
  function get_INTERRUPTED_SEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_SEND;
  }
  var INTERRUPTED_SEND;
  function get_INTERRUPTED_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_RCV;
  }
  var INTERRUPTED_RCV;
  function get_CHANNEL_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CHANNEL_CLOSED;
  }
  var CHANNEL_CLOSED;
  function get_SUSPEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND;
  }
  var SUSPEND;
  function get_SUSPEND_NO_WAITER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND_NO_WAITER;
  }
  var SUSPEND_NO_WAITER;
  function get_FAILED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return FAILED;
  }
  var FAILED;
  function get_NO_RECEIVE_RESULT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_RECEIVE_RESULT;
  }
  var NO_RECEIVE_RESULT;
  function get_CLOSE_HANDLER_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_CLOSED;
  }
  var CLOSE_HANDLER_CLOSED;
  function get_CLOSE_HANDLER_INVOKED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_INVOKED;
  }
  var CLOSE_HANDLER_INVOKED;
  function get_NO_CLOSE_CAUSE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_CLOSE_CAUSE;
  }
  var NO_CLOSE_CAUSE;
  function setElementLazy($this, index, value) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    $this.d1h_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value = value;
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this.c1h_1 = channel;
    this.d1h_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).e1h = function () {
    return ensureNotNull(this.c1h_1);
  };
  protoOf(ChannelSegment).f1h = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).g1h = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).h1h = function (index) {
    var tmp = this.d1h_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ChannelSegment).i1h = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.h1h(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ChannelSegment.retrieveElement.<anonymous>' call
    this.j1h(index);
    return this_0;
  };
  protoOf(ChannelSegment).j1h = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).k1h = function (index) {
    return this.d1h_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).l1h = function (index, value) {
    this.d1h_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value = value;
  };
  protoOf(ChannelSegment).m1h = function (index, from, to) {
    return this.d1h_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).n1h = function (index, update) {
    return this.d1h_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).r1b = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.h1h(index_0);
    $l$loop: while (true) {
      var cur = this.k1h(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.m1h(index_0, cur, update)) {
          this.j1h(index_0);
          this.a1i(index_0, !isSender);
          if (isSender) {
            var tmp0_safe_receiver = this.e1h().p1h_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp0_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        }
      } else {
        if (cur === get_INTERRUPTED_SEND() ? true : cur === get_INTERRUPTED_RCV()) {
          this.j1h(index_0);
          if (isSender) {
            var tmp1_safe_receiver = this.e1h().p1h_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp1_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        } else {
          if (cur === get_RESUMING_BY_EB() ? true : cur === get_RESUMING_BY_RCV())
            continue $l$loop;
          else {
            if (cur === get_DONE_RCV() ? true : cur === get_BUFFERED())
              return Unit_instance;
            else {
              if (cur === get_CHANNEL_CLOSED())
                return Unit_instance;
              else {
                var message = 'unexpected state: ' + toString_0(cur);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  };
  protoOf(ChannelSegment).a1i = function (index, receiver) {
    if (receiver) {
      var tmp = this.e1h();
      // Inline function 'kotlin.Long.plus' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = this.p1b_1;
      var other = get_SEGMENT_SIZE();
      var tmp$ret$1 = this_0.i8(toLong(other)).m9(toLong(index));
      tmp.b1i(tmp$ret$1);
    }
    this.c1i();
  };
  function onClosedHasNext($this) {
    $this.o1i_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.q1i_1.r1i();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var cause = tmp;
    throw recoverStackTrace_0(cause);
  }
  function hasNextOnNoWaiterSuspend($this, segment, index, r, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>' call
      $this.p1i_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var this_0 = $this.q1i_1;
      var updCellResult = updateCellReceive(this_0, segment, index, r, $this);
      if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
        prepareReceiverForSuspension($this, this_0, segment, index);
      } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
        if (r.n5(this_0.s1i()) < 0) {
          segment.m1i();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = this_0.v1h_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if (this_0.t1i()) {
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = this_0.r1h_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.h8(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.o9(toLong(other_0)).q8();
            if (!segment_0.p1b_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this_0, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive(this_0, segment_0, i, r_0, $this);
            var tmp_0;
            if (updCellResult_0 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp1_safe_receiver = (!($this == null) ? isInterface($this, Waiter) : false) ? $this : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this_0, segment_0, i);
              }
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
              tmp_0 = Unit_instance;
            } else if (updCellResult_0 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
              if (r_0.n5(this_0.s1i()) < 0) {
                segment_0.m1i();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.m1i();
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              $this.o1i_1 = element;
              $this.p1i_1 = null;
              var tmp0_safe_receiver = $this.q1i_1.p1h_1;
              cancellable.u1c(true, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cancellable.la()));
              tmp_0 = Unit_instance;
            }
            break $l$block_0;
          }
        }
      } else {
        segment.m1i();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        $this.o1i_1 = element_0;
        $this.p1i_1 = null;
        var tmp0_safe_receiver_0 = $this.q1i_1.p1h_1;
        cancellable.u1c(true, tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, element_0, cancellable.la()));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.r1c();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.q1c();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.p1i_1);
    $this.p1i_1 = null;
    $this.o1i_1 = get_CHANNEL_CLOSED();
    var cause = $this.q1i_1.r1i();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.sa(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.sa(tmp$ret$2);
    }
  }
  function $hasNextCOROUTINE$4(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1j_1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$4).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 8;
            this.ea_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.e1j_1 = this.c1j_1.q1i_1;
            var tmp_1 = this;
            tmp_1.f1j_1 = null;
            this.g1j_1 = this.e1j_1.v1h_1.kotlinx$atomicfu$value;
            this.ea_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.ea_1 = 9;
              continue $sm;
            }

            if (this.e1j_1.t1i()) {
              var tmp_2 = this;
              tmp_2.d1j_1 = onClosedHasNext(this.c1j_1);
              this.ea_1 = 10;
              continue $sm;
            } else {
              this.ea_1 = 3;
              continue $sm;
            }

          case 3:
            this.h1j_1 = this.e1j_1.r1h_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            var this_0 = this.h1j_1;
            var other = get_SEGMENT_SIZE();
            tmp_3.i1j_1 = this_0.h8(toLong(other));
            var tmp_4 = this;
            var this_1 = this.h1j_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_4.j1j_1 = this_1.o9(toLong(other_0)).q8();
            if (!this.g1j_1.p1b_1.equals(this.i1j_1)) {
              this.k1j_1 = findSegmentReceive(this.e1j_1, this.i1j_1, this.g1j_1);
              if (this.k1j_1 == null) {
                this.ea_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                this.l1j_1 = this.k1j_1;
                this.ea_1 = 4;
                continue $sm;
              }
            } else {
              this.ea_1 = 5;
              continue $sm;
            }

          case 4:
            this.g1j_1 = this.l1j_1;
            this.ea_1 = 5;
            continue $sm;
          case 5:
            this.m1j_1 = updateCellReceive(this.e1j_1, this.g1j_1, this.j1j_1, this.h1j_1, this.f1j_1);
            if (this.m1j_1 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp_6 = this;
              var tmp_7 = this.f1j_1;
              var tmp1_safe_receiver = (!(tmp_7 == null) ? isInterface(tmp_7, Waiter) : false) ? tmp_7 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this.e1j_1, this.g1j_1, this.j1j_1);
              }
              this.g1j_1;
              this.j1j_1;
              this.h1j_1;
              var message = 'unreachable';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.m1j_1 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
                if (this.h1j_1.n5(this.e1j_1.s1i()) < 0) {
                  this.g1j_1.m1i();
                }
                this.ea_1 = 2;
                var tmp_8 = this;
                continue $sm;
              } else {
                if (this.m1j_1 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
                  var tmp_9 = this;
                  tmp_9.o1j_1 = this.g1j_1;
                  var tmp_10 = this;
                  tmp_10.p1j_1 = this.j1j_1;
                  var tmp_11 = this;
                  tmp_11.q1j_1 = this.h1j_1;
                  this.ea_1 = 6;
                  suspendResult = hasNextOnNoWaiterSuspend(this.c1j_1, this.o1j_1, this.p1j_1, this.q1j_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_12 = this;
                  this.g1j_1.m1i();
                  var tmp_13 = this.m1j_1;
                  var element = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
                  this.c1j_1.o1i_1 = element;
                  tmp_12.n1j_1 = true;
                  this.ea_1 = 7;
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_14 = this;
            return suspendResult;
          case 7:
            this.d1j_1 = this.n1j_1;
            this.ea_1 = 10;
            continue $sm;
          case 8:
            throw this.ha_1;
          case 9:
            if (false) {
              this.ea_1 = 1;
              continue $sm;
            }

            this.ea_1 = 10;
            continue $sm;
          case 10:
            return this.d1j_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.fa_1 === 8) {
          throw e;
        } else {
          this.ea_1 = this.fa_1;
          this.ha_1 = e;
        }
      }
     while (true);
  };
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.s1h_1.kotlinx$atomicfu$value;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.<get-isRendezvousOrUnlimited>.<anonymous>' call
    var it = _get_bufferEndCounter__2d4hee($this);
    return it.equals(new Long(0, 0)) ? true : it.equals(new Long(-1, 2147483647));
  }
  function onClosedSend($this, element, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.i1c();
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.onClosedSend.<anonymous>' call
      var tmp0_safe_receiver = $this.p1h_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        addSuppressed(tmp1_safe_receiver, $this.r1j());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = recoverStackTrace(tmp1_safe_receiver, cancellable);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
        cancellable.sa(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var exception_0 = $this.r1j();
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = recoverStackTrace(exception_0, cancellable);
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception_1));
      cancellable.sa(tmp$ret$3);
    }
    return cancellable.q1c();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      var tmp0_subject = updateCellSend($this, segment, index, element, s, cancellable, false);
      if (tmp0_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8()) {
        segment.m1i();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.sa(tmp$ret$0);
      } else if (tmp0_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m()) {
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.sa(tmp$ret$2);
      } else if (tmp0_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf()) {
        prepareSenderForSuspension(cancellable, $this, segment, index);
      } else if (tmp0_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j()) {
        if (s.n5($this.s1j()) < 0) {
          segment.m1i();
        }
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        onClosedSendOnNoWaiterSuspend($this, element, cancellable);
      } else if (tmp0_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0()) {
        segment.m1i();
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
          var segment_0 = $this.u1h_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            var sendersAndCloseStatusCur = $this.q1h_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
            var s_0 = sendersAndCloseStatusCur.v9(new Long(-1, 268435455));
            var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, $this);
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = s_0.h8(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = s_0.o9(toLong(other_0)).q8();
            if (!segment_0.p1b_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentSend($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                var tmp_0;
                if (closed) {
                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_5;
                } else {
                  continue $l$loop_0;
                }
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var tmp1_subject = updateCellSend($this, segment_0, i, element, s_0, cancellable, closed);
            if (tmp1_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8()) {
              segment_0.m1i();
              // Inline function 'kotlin.coroutines.resume' call
              // Inline function 'kotlin.Companion.success' call
              var tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_instance);
              cancellable.sa(tmp$ret$8);
              break $l$block_5;
            } else if (tmp1_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m()) {
              // Inline function 'kotlin.coroutines.resume' call
              // Inline function 'kotlin.Companion.success' call
              var tmp$ret$10 = _Result___init__impl__xyqfz8(Unit_instance);
              cancellable.sa(tmp$ret$10);
              break $l$block_5;
            } else if (tmp1_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf()) {
              if (closed) {
                segment_0.c1i();
                onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                break $l$block_5;
              }
              var tmp2_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
              if (tmp2_safe_receiver == null)
                null;
              else {
                prepareSenderForSuspension(tmp2_safe_receiver, $this, segment_0, i);
              }
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter.<anonymous>' call
              break $l$block_5;
            } else if (tmp1_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j()) {
              if (s_0.n5($this.s1j()) < 0) {
                segment_0.m1i();
              }
              onClosedSendOnNoWaiterSuspend($this, element, cancellable);
              break $l$block_5;
            } else if (tmp1_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0()) {
              segment_0.m1i();
              continue $l$loop_0;
            } else if (tmp1_subject === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      } else {
        // Inline function 'kotlin.error' call
        var message_0 = 'unexpected';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.r1c();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.q1c();
  }
  function prepareSenderForSuspension(_this__u8e3s4, $this, segment, index) {
    _this__u8e3s4.v1c(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp0_safe_receiver = $this.p1h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, cont.la());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = recoverStackTrace($this.r1j(), cont);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.sa(tmp$ret$0);
  }
  function SendBroadcast() {
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.g1h(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.k1h(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.m1h(index, null, get_BUFFERED())) {
          return _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m();
        }
      } else {
        if (waiter == null) {
          return _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m();
        } else {
          if (segment.m1h(index, null, waiter))
            return _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf();
        }
      }
    } else {
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        segment.j1h(index);
        var tmp;
        if (tryResumeReceiver(state, $this, element)) {
          segment.l1h(index, get_DONE_RCV());
          $this.t1j();
          tmp = _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8();
        } else {
          if (!(segment.n1h(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.a1i(index, true);
          }
          tmp = _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0();
        }
        return tmp;
      }
    }
    return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
  }
  function updateCellSendSlow($this, segment, index, element, s, waiter, closed) {
    while (true) {
      var state = segment.k1h(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) ? !closed : false) {
          if (segment.m1h(index, null, get_BUFFERED())) {
            return _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m();
          }
        } else {
          if (closed) {
            if (segment.m1h(index, null, get_INTERRUPTED_SEND())) {
              segment.a1i(index, false);
              return _get_RESULT_CLOSED_$accessor$yt74tm_10v48j();
            }
          } else if (waiter == null)
            return _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m();
          else if (segment.m1h(index, null, waiter))
            return _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf();
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.m1h(index, state, get_BUFFERED())) {
          return _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m();
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.j1h(index);
        return _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0();
      } else if (state === get_POISONED()) {
        segment.j1h(index);
        return _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0();
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.j1h(index);
        completeCloseOrCancel($this);
        return _get_RESULT_CLOSED_$accessor$yt74tm_10v48j();
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.j1h(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.u1j_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver(receiver, $this, element)) {
          segment.l1h(index, get_DONE_RCV());
          $this.t1j();
          tmp_0 = _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8();
        } else {
          if (!(segment.n1h(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.a1i(index, true);
          }
          tmp_0 = _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0();
        }
        return tmp_0;
      }
    }
  }
  function shouldSendSuspend($this, curSendersAndCloseStatus) {
    if (_get_isClosedForSend0__kxgf9m(curSendersAndCloseStatus, $this))
      return false;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var tmp$ret$0 = curSendersAndCloseStatus.v9(new Long(-1, 268435455));
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (curSenders.n5(_get_bufferEndCounter__2d4hee($this)) < 0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.Long.plus' call
      var this_0 = $this.s1j();
      var other = $this.o1h_1;
      var tmp$ret$0 = this_0.m9(toLong(other));
      tmp = curSenders.n5(tmp$ret$0) < 0;
    }
    return tmp;
  }
  function tryResumeReceiver(_this__u8e3s4, $this, element) {
    var tmp;
    if (isInterface(_this__u8e3s4, SelectInstance)) {
      tmp = _this__u8e3s4.z1j($this, element);
    } else {
      if (_this__u8e3s4 instanceof ReceiveCatching) {
        if (!(_this__u8e3s4 instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = Companion_getInstance_0().x1j(element);
        var tmp1_safe_receiver = $this.p1h_1;
        tmp = tryResume0(_this__u8e3s4.y1j_1, new ChannelResult(tmp_0), tmp1_safe_receiver == null ? null : bindCancellationFun(tmp1_safe_receiver, element, _this__u8e3s4.y1j_1.la()));
      } else {
        if (_this__u8e3s4 instanceof BufferedChannelIterator) {
          if (!(_this__u8e3s4 instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = _this__u8e3s4.v1j(element);
        } else {
          if (isInterface(_this__u8e3s4, CancellableContinuation)) {
            if (!isInterface(_this__u8e3s4, CancellableContinuation))
              THROW_CCE();
            var tmp2_safe_receiver = $this.p1h_1;
            tmp = tryResume0(_this__u8e3s4, element, tmp2_safe_receiver == null ? null : bindCancellationFun(tmp2_safe_receiver, element, _this__u8e3s4.la()));
          } else {
            var message = 'Unexpected receiver type: ' + toString(_this__u8e3s4);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
    }
    return tmp;
  }
  function prepareReceiverForSuspension(_this__u8e3s4, $this, segment, index) {
    $this.a1k();
    _this__u8e3s4.v1c(segment, index);
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.k1h(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var senders = $this.q1h_1.kotlinx$atomicfu$value.v9(new Long(-1, 268435455));
      if (r.n5(senders) >= 0) {
        if (waiter === null) {
          return _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky();
        }
        if (segment.m1h(index, state, waiter)) {
          expandBuffer($this);
          return _get_SUSPEND_$accessor$yt74tm_ccb8g1();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.m1h(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.i1h(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.k1h(index);
      if (state === null ? true : state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var senders = $this.q1h_1.kotlinx$atomicfu$value.v9(new Long(-1, 268435455));
        if (r.n5(senders) < 0) {
          if (segment.m1h(index, state, get_POISONED())) {
            expandBuffer($this);
            return _get_FAILED_$accessor$yt74tm_h47uk8();
          }
        } else {
          if (waiter === null) {
            return _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky();
          }
          if (segment.m1h(index, state, waiter)) {
            expandBuffer($this);
            return _get_SUSPEND_$accessor$yt74tm_ccb8g1();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.m1h(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.i1h(index);
        }
      } else if (state === get_INTERRUPTED_SEND())
        return _get_FAILED_$accessor$yt74tm_h47uk8();
      else if (state === get_POISONED())
        return _get_FAILED_$accessor$yt74tm_h47uk8();
      else if (state === get_CHANNEL_CLOSED()) {
        expandBuffer($this);
        return _get_FAILED_$accessor$yt74tm_h47uk8();
      } else if (state === get_RESUMING_BY_EB())
        continue $l$loop;
      else {
        if (segment.m1h(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.u1j_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender(sender, $this, segment, index)) {
            segment.l1h(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.i1h(index);
          } else {
            segment.l1h(index, get_INTERRUPTED_SEND());
            segment.a1i(index, false);
            if (helpExpandBuffer) {
              expandBuffer($this);
            }
            tmp_0 = _get_FAILED_$accessor$yt74tm_h47uk8();
          }
          return tmp_0;
        }
      }
    }
  }
  function tryResumeSender(_this__u8e3s4, $this, segment, index) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      tmp = tryResume0(_this__u8e3s4, Unit_instance);
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        if (!(_this__u8e3s4 instanceof SelectImplementation))
          THROW_CCE();
        var trySelectResult = _this__u8e3s4.f1k($this, Unit_instance);
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.j1h(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if (_this__u8e3s4 instanceof SendBroadcast) {
          tmp = tryResume0(_this__u8e3s4.b1k_1, true);
        } else {
          var message = 'Unexpected waiter: ' + toString(_this__u8e3s4);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp;
  }
  function expandBuffer($this) {
    if (_get_isRendezvousOrUnlimited__3mdufi($this))
      return Unit_instance;
    var segment = $this.w1h_1.kotlinx$atomicfu$value;
    try_again: while (true) {
      var b = $this.s1h_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = b.h8(toLong(other));
      var s = $this.s1i();
      if (s.n5(b) <= 0) {
        if (segment.p1b_1.n5(id) < 0 ? !(segment.i1i() == null) : false) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      }
      if (!segment.p1b_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentBufferEnd($this, id, segment, b);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue try_again;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = b.o9(toLong(other_0)).q8();
      if (updateCellExpandBuffer($this, segment, i, b)) {
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      } else {
        incCompletedExpandBufferAttempts$default($this);
        continue try_again;
      }
    }
  }
  function updateCellExpandBuffer($this, segment, index, b) {
    var state = segment.k1h(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (b.n5($this.r1h_1.kotlinx$atomicfu$value) >= 0) {
        if (segment.m1h(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender(state, $this, segment, index)) {
            segment.l1h(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.l1h(index, get_INTERRUPTED_SEND());
            segment.a1i(index, false);
            tmp = false;
          }
          return tmp;
        }
      }
    }
    return updateCellExpandBufferSlow($this, segment, index, b);
  }
  function updateCellExpandBufferSlow($this, segment, index, b) {
    $l$loop: while (true) {
      var state = segment.k1h(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (b.n5($this.r1h_1.kotlinx$atomicfu$value) < 0) {
          if (segment.m1h(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.m1h(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender(state, $this, segment, index)) {
              segment.l1h(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.l1h(index, get_INTERRUPTED_SEND());
              segment.a1i(index, false);
              tmp = false;
            }
            return tmp;
          }
        }
      } else {
        if (state === get_INTERRUPTED_SEND())
          return false;
        else {
          if (state === null) {
            if (segment.m1h(index, state, get_IN_BUFFER()))
              return true;
          } else {
            if (state === get_BUFFERED())
              return true;
            else {
              if ((state === get_POISONED() ? true : state === get_DONE_RCV()) ? true : state === get_INTERRUPTED_RCV())
                return true;
              else {
                if (state === get_CHANNEL_CLOSED())
                  return true;
                else {
                  if (state === get_RESUMING_BY_RCV())
                    continue $l$loop;
                  else {
                    var message = 'Unexpected cell state: ' + toString_0(state);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts($this, nAttempts) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.incCompletedExpandBufferAttempts.<anonymous>' call
    // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
    if (!$this.t1h_1.atomicfu$addAndGet$long(nAttempts).v9(new Long(0, 1073741824)).equals(new Long(0, 0))) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        if (!!$this.t1h_1.kotlinx$atomicfu$value.v9(new Long(0, 1073741824)).equals(new Long(0, 0))) {
          break $l$loop;
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts$default($this, nAttempts, $super) {
    nAttempts = nAttempts === VOID ? new Long(1, 0) : nAttempts;
    return incCompletedExpandBufferAttempts($this, nAttempts);
  }
  function BufferedChannelIterator($outer) {
    this.q1i_1 = $outer;
    this.o1i_1 = get_NO_RECEIVE_RESULT();
    this.p1i_1 = null;
  }
  protoOf(BufferedChannelIterator).g1k = function ($completion) {
    var tmp = new $hasNextCOROUTINE$4(this, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  };
  protoOf(BufferedChannelIterator).v1c = function (segment, index) {
    var tmp0_safe_receiver = this.p1i_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.v1c(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).v = function () {
    var result = this.o1i_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.next.<anonymous>' call
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.o1i_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.q1i_1));
    return (result == null ? true : !(result == null)) ? result : THROW_CCE();
  };
  protoOf(BufferedChannelIterator).v1j = function (element) {
    var cont = ensureNotNull(this.p1i_1);
    this.p1i_1 = null;
    this.o1i_1 = element;
    var tmp0_safe_receiver = this.q1i_1.p1h_1;
    return tryResume0(cont, true, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cont.la()));
  };
  protoOf(BufferedChannelIterator).h1k = function () {
    var cont = ensureNotNull(this.p1i_1);
    this.p1i_1 = null;
    this.o1i_1 = get_CHANNEL_CLOSED();
    var cause = this.q1i_1.r1i();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.sa(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.sa(tmp$ret$2);
    }
  };
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.r1i();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  }
  function invokeCloseHandler($this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.getAndUpdate' call
      var this_0 = $this.z1h_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.invokeCloseHandler.<anonymous>' call
        var tmp;
        if (cur === null) {
          tmp = get_CLOSE_HANDLER_CLOSED();
        } else {
          tmp = get_CLOSE_HANDLER_INVOKED();
        }
        var upd = tmp;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = cur;
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var closeHandler = tmp_0;
    if (typeof closeHandler !== 'function')
      THROW_CCE();
    closeHandler($this.r1i());
  }
  function markClosed($this) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = $this.q1h_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markClosed.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        var tmp;
        switch (cur.t9(60).q8()) {
          case 0:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$1 = cur.v9(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$1, 2);
            break;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$2 = cur.v9(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$2, 3);
            break;
          default:
            return Unit_instance;
        }
        var upd = tmp;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$4 = Unit_instance;
          break $l$block;
        }
      }
    }
    return tmp$ret$4;
  }
  function markCancelled($this) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = $this.q1h_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markCancelled.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var tmp$ret$0 = cur.v9(new Long(-1, 268435455));
        var upd = constructSendersAndCloseStatus(tmp$ret$0, 3);
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$2 = Unit_instance;
          break $l$block;
        }
      }
    }
    return tmp$ret$2;
  }
  function markCancellationStarted($this) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = $this.q1h_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markCancellationStarted.<anonymous>' call
        var tmp;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        if (cur.t9(60).q8() === 0) {
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          var tmp$ret$1 = cur.v9(new Long(-1, 268435455));
          tmp = constructSendersAndCloseStatus(tmp$ret$1, 1);
        } else {
          return Unit_instance;
        }
        var upd = tmp;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$3 = Unit_instance;
          break $l$block;
        }
      }
    }
    return tmp$ret$3;
  }
  function completeCloseOrCancel($this) {
    $this.i1k();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.k1k()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!lastBufferedCellGlobalIndex.equals(new Long(-1, -1))) {
        $this.j1k(lastBufferedCellGlobalIndex);
      }
    }
    cancelSuspendedReceiveRequests($this, lastSegment, sendersCur);
    return lastSegment;
  }
  function completeCancel($this, sendersCur) {
    var lastSegment = completeClose($this, sendersCur);
    removeUnprocessedElements($this, lastSegment);
  }
  function closeLinkedList($this) {
    var lastSegment = $this.w1h_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var it = $this.u1h_1.kotlinx$atomicfu$value;
    var tmp;
    if (it.p1b_1.n5(lastSegment.p1b_1) > 0) {
      lastSegment = it;
      tmp = Unit_instance;
    }
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var it_0 = $this.v1h_1.kotlinx$atomicfu$value;
    var tmp_0;
    if (it_0.p1b_1.n5(lastSegment.p1b_1) > 0) {
      lastSegment = it_0;
      tmp_0 = Unit_instance;
    }
    return close(lastSegment);
  }
  function markAllEmptyCellsAsClosed($this, lastSegment) {
    var segment = lastSegment;
    while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var this_0 = segment.p1b_1;
          var other = get_SEGMENT_SIZE();
          var globalIndex = this_0.i8(toLong(other)).m9(toLong(index));
          if (globalIndex.n5($this.s1j()) < 0)
            return new Long(-1, -1);
          cell_update: while (true) {
            var state = segment.k1h(index);
            if (state === null ? true : state === get_IN_BUFFER()) {
              if (segment.m1h(index, state, get_CHANNEL_CLOSED())) {
                segment.c1i();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp1_elvis_lhs = segment.l1i();
      var tmp;
      if (tmp1_elvis_lhs == null) {
        return new Long(-1, -1);
      } else {
        tmp = tmp1_elvis_lhs;
      }
      segment = tmp;
    }
  }
  function removeUnprocessedElements($this, lastSegment) {
    var onUndeliveredElement = $this.p1h_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var this_0 = segment.p1b_1;
          var other = get_SEGMENT_SIZE();
          var globalIndex = this_0.i8(toLong(other)).m9(toLong(index));
          update_cell: while (true) {
            var state = segment.k1h(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (globalIndex.n5($this.s1j()) < 0)
                  break process_segments;
                if (segment.m1h(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.h1h(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.j1h(index);
                  segment.c1i();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() ? true : state === null) {
                  if (segment.m1h(index, state, get_CHANNEL_CLOSED())) {
                    segment.c1i();
                    break update_cell;
                  }
                } else {
                  var tmp;
                  if (!(state == null) ? isInterface(state, Waiter) : false) {
                    tmp = true;
                  } else {
                    tmp = state instanceof WaiterEB;
                  }
                  if (tmp) {
                    if (globalIndex.n5($this.s1j()) < 0)
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.u1j_1;
                    } else {
                      tmp_0 = (!(state == null) ? isInterface(state, Waiter) : false) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.m1h(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.h1h(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.j1h(index);
                      segment.c1i();
                      break update_cell;
                    }
                  } else {
                    if (state === get_RESUMING_BY_EB() ? true : state === get_RESUMING_BY_RCV())
                      break process_segments;
                    else {
                      if (state === get_RESUMING_BY_EB())
                        continue update_cell;
                      else {
                        break update_cell;
                      }
                    }
                  }
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      var tmp1_elvis_lhs = segment.l1i();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        break process_segments;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      segment = tmp_1;
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var this_1 = suspendedSenders;
      var tmp0_subject = _get_holder__f6h5pd(this_1);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.removeUnprocessedElements.<anonymous>' call
          var tmp_2 = _get_holder__f6h5pd(this_1);
          var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          resumeSenderOnCancelledChannel(it, $this);
        } else {
          var tmp_3 = _get_holder__f6h5pd(this_1);
          var list = tmp_3 instanceof ArrayList ? tmp_3 : THROW_CCE();
          var inductionVariable_0 = list.l() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.removeUnprocessedElements.<anonymous>' call
              var it_0 = list.d1(i);
              resumeSenderOnCancelledChannel(it_0, $this);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    var tmp2_safe_receiver = undeliveredElementException;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp2_safe_receiver;
    }
  }
  function cancelSuspendedReceiveRequests($this, lastSegment, sendersCounter) {
    var suspendedReceivers = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (!(segment == null)) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var this_0 = segment.p1b_1;
          var other = get_SEGMENT_SIZE();
          if (this_0.i8(toLong(other)).m9(toLong(index)).n5(sendersCounter) < 0)
            break process_segments;
          cell_update: while (true) {
            var state = segment.k1h(index);
            if (state === null ? true : state === get_IN_BUFFER()) {
              if (segment.m1h(index, state, get_CHANNEL_CLOSED())) {
                segment.c1i();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.m1h(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.u1j_1);
                  segment.a1i(index, true);
                  break cell_update;
                }
              } else {
                if (!(state == null) ? isInterface(state, Waiter) : false) {
                  if (segment.m1h(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.a1i(index, true);
                    break cell_update;
                  }
                } else {
                  break cell_update;
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      segment = segment.l1i();
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var this_1 = suspendedReceivers;
      var tmp0_subject = _get_holder__f6h5pd(this_1);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.cancelSuspendedReceiveRequests.<anonymous>' call
          var tmp = _get_holder__f6h5pd(this_1);
          var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          resumeReceiverOnClosedChannel(it, $this);
        } else {
          var tmp_0 = _get_holder__f6h5pd(this_1);
          var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable_0 = list.l() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.cancelSuspendedReceiveRequests.<anonymous>' call
              var it_0 = list.d1(i);
              resumeReceiverOnClosedChannel(it_0, $this);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function resumeReceiverOnClosedChannel(_this__u8e3s4, $this) {
    return resumeWaiterOnClosedChannel(_this__u8e3s4, $this, true);
  }
  function resumeSenderOnCancelledChannel(_this__u8e3s4, $this) {
    return resumeWaiterOnClosedChannel(_this__u8e3s4, $this, false);
  }
  function resumeWaiterOnClosedChannel(_this__u8e3s4, $this, receiver) {
    if (_this__u8e3s4 instanceof SendBroadcast) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = _this__u8e3s4.b1k_1;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      this_0.sa(tmp$ret$0);
    } else {
      if (isInterface(_this__u8e3s4, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = receiver ? _get_receiveException__foorc1($this) : $this.r1j();
        var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
        _this__u8e3s4.sa(tmp$ret$2);
      } else {
        if (_this__u8e3s4 instanceof ReceiveCatching) {
          // Inline function 'kotlin.coroutines.resume' call
          var this_1 = _this__u8e3s4.y1j_1;
          // Inline function 'kotlin.Companion.success' call
          var value = new ChannelResult(Companion_getInstance_0().l1k($this.r1i()));
          var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
          this_1.sa(tmp$ret$4);
        } else {
          if (_this__u8e3s4 instanceof BufferedChannelIterator) {
            _this__u8e3s4.h1k();
          } else {
            if (isInterface(_this__u8e3s4, SelectInstance)) {
              _this__u8e3s4.z1j($this, get_CHANNEL_CLOSED());
            } else {
              var message = 'Unexpected waiter: ' + _this__u8e3s4;
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  }
  function _get_isClosedForSend0__kxgf9m(_this__u8e3s4, $this) {
    return isClosed($this, _this__u8e3s4, false);
  }
  function _get_isClosedForReceive0__f7qknl(_this__u8e3s4, $this) {
    return isClosed($this, _this__u8e3s4, true);
  }
  function isClosed($this, sendersAndCloseStatusCur, isClosedForReceive) {
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp;
    switch (sendersAndCloseStatusCur.t9(60).q8()) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$1 = sendersAndCloseStatusCur.v9(new Long(-1, 268435455));
        completeClose($this, tmp$ret$1);
        tmp = isClosedForReceive ? !$this.m1k() : true;
        break;
      case 3:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$2 = sendersAndCloseStatusCur.v9(new Long(-1, 268435455));
        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call

        var message = 'unexpected close status: ' + sendersAndCloseStatusCur.t9(60).q8();
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.k1h(index);
      if (state === null ? true : state === get_IN_BUFFER()) {
        if (segment.m1h(index, state, get_POISONED())) {
          expandBuffer($this);
          return false;
        }
      } else if (state === get_BUFFERED())
        return true;
      else if (state === get_INTERRUPTED_SEND())
        return false;
      else if (state === get_CHANNEL_CLOSED())
        return false;
      else if (state === get_DONE_RCV())
        return false;
      else if (state === get_POISONED())
        return false;
      else if (state === get_RESUMING_BY_EB())
        return true;
      else if (state === get_RESUMING_BY_RCV())
        return false;
      else
        return globalIndex.equals($this.s1j());
    }
  }
  function findSegmentSend($this, id, startFrom) {
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var this_0 = $this.u1h_1;
      var createNewSegment = createSegmentFunction();
      while (true) {
        var s = findSegmentInternal(startFrom, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var to = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = this_0.kotlinx$atomicfu$value;
              if (cur.p1b_1.n5(to.p1b_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!to.e1i()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.f1i()) {
                  cur.u();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (to.f1i()) {
                to.u();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentSend.<anonymous>' call
    var it = tmp$ret$1;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      // Inline function 'kotlin.Long.times' call
      var this_1 = startFrom.p1b_1;
      var other = get_SEGMENT_SIZE();
      if (this_1.i8(toLong(other)).n5($this.s1j()) < 0) {
        startFrom.m1i();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.p1b_1.n5(id) > 0) {
        // Inline function 'kotlin.Long.times' call
        var this_2 = segment.p1b_1;
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = this_2.i8(toLong(other_0));
        updateSendersCounterIfLower($this, tmp$ret$3);
        // Inline function 'kotlin.Long.times' call
        var this_3 = segment.p1b_1;
        var other_1 = get_SEGMENT_SIZE();
        if (this_3.i8(toLong(other_1)).n5($this.s1j()) < 0) {
          segment.m1i();
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function findSegmentReceive($this, id, startFrom) {
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var this_0 = $this.v1h_1;
      var createNewSegment = createSegmentFunction();
      while (true) {
        var s = findSegmentInternal(startFrom, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var to = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = this_0.kotlinx$atomicfu$value;
              if (cur.p1b_1.n5(to.p1b_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!to.e1i()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.f1i()) {
                  cur.u();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (to.f1i()) {
                to.u();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentReceive.<anonymous>' call
    var it = tmp$ret$1;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      // Inline function 'kotlin.Long.times' call
      var this_1 = startFrom.p1b_1;
      var other = get_SEGMENT_SIZE();
      if (this_1.i8(toLong(other)).n5($this.s1i()) < 0) {
        startFrom.m1i();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        // Inline function 'kotlin.Long.div' call
        var this_2 = _get_bufferEndCounter__2d4hee($this);
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = this_2.h8(toLong(other_0));
        tmp_1 = id.n5(tmp$ret$3) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          var this_3 = $this.w1h_1;
          while (true) {
            // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
            var cur_0 = this_3.kotlinx$atomicfu$value;
            if (cur_0.p1b_1.n5(segment.p1b_1) >= 0) {
              break $l$block_5;
            }
            if (!segment.e1i()) {
              break $l$block_5;
            }
            if (this_3.atomicfu$compareAndSet(cur_0, segment)) {
              if (cur_0.f1i()) {
                cur_0.u();
              }
              break $l$block_5;
            }
            if (segment.f1i()) {
              segment.u();
            }
          }
        }
      }
      var tmp_2;
      if (segment.p1b_1.n5(id) > 0) {
        // Inline function 'kotlin.Long.times' call
        var this_4 = segment.p1b_1;
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$5 = this_4.i8(toLong(other_1));
        updateReceiversCounterIfLower($this, tmp$ret$5);
        // Inline function 'kotlin.Long.times' call
        var this_5 = segment.p1b_1;
        var other_2 = get_SEGMENT_SIZE();
        if (this_5.i8(toLong(other_2)).n5($this.s1i()) < 0) {
          segment.m1i();
        }
        tmp_2 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_2 = segment;
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function findSegmentBufferEnd($this, id, startFrom, currentBufferEndCounter) {
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var this_0 = $this.w1h_1;
      var createNewSegment = createSegmentFunction();
      while (true) {
        var s = findSegmentInternal(startFrom, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var to = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = this_0.kotlinx$atomicfu$value;
              if (cur.p1b_1.n5(to.p1b_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!to.e1i()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.f1i()) {
                  cur.u();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (to.f1i()) {
                to.u();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentBufferEnd.<anonymous>' call
    var it = tmp$ret$1;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom);
      incCompletedExpandBufferAttempts$default($this);
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.p1b_1.n5(id) > 0) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = currentBufferEndCounter.m9(toLong(1));
        // Inline function 'kotlin.Long.times' call
        var this_1 = segment.p1b_1;
        var other = get_SEGMENT_SIZE();
        var tmp$ret$3 = this_1.i8(toLong(other));
        if ($this.s1h_1.atomicfu$compareAndSet(tmp_2, tmp$ret$3)) {
          // Inline function 'kotlin.Long.times' call
          var this_2 = segment.p1b_1;
          var other_0 = get_SEGMENT_SIZE();
          var tmp$ret$4 = this_2.i8(toLong(other_0));
          incCompletedExpandBufferAttempts($this, tmp$ret$4.n9(currentBufferEndCounter));
        } else {
          incCompletedExpandBufferAttempts$default($this);
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom) {
    var segment = startFrom;
    $l$loop: while (segment.p1b_1.n5(id) < 0) {
      var tmp0_elvis_lhs = segment.i1i();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.d1i()) {
        var tmp1_elvis_lhs = segment.i1i();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        var this_0 = $this.w1h_1;
        var to = segment;
        while (true) {
          // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
          var cur = this_0.kotlinx$atomicfu$value;
          if (cur.p1b_1.n5(to.p1b_1) >= 0) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!to.e1i()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (this_0.atomicfu$compareAndSet(cur, to)) {
            if (cur.f1i()) {
              cur.u();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (to.f1i()) {
            to.u();
          }
        }
        tmp$ret$0 = Unit_instance;
      }
      if (tmp$ret$0)
        return Unit_instance;
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var this_0 = $this.q1h_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.updateSendersCounterIfLower.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = cur.v9(new Long(-1, 268435455));
      if (curCounter.n5(value) >= 0)
        return Unit_instance;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      var tmp$ret$1 = cur.t9(60).q8();
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$1);
      if ($this.q1h_1.atomicfu$compareAndSet(cur, update))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function updateReceiversCounterIfLower($this, value) {
    var this_0 = $this.r1h_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.updateReceiversCounterIfLower.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      if (cur.n5(value) >= 0)
        return Unit_instance;
      if ($this.r1h_1.atomicfu$compareAndSet(cur, value))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda($element, this$0, $select) {
    return function (it) {
      var tmp;
      if (!($element === get_CHANNEL_CLOSED())) {
        callUndeliveredElement(this$0.p1h_1, ($element == null ? true : !($element == null)) ? $element : THROW_CCE(), $select.la());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this$0) {
    return function (select, _anonymous_parameter_1__qggqgd, element) {
      return BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda(element, this$0, select);
    };
  }
  function $sendCOROUTINE$1(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w1k_1 = _this__u8e3s4;
    this.x1k_1 = element;
  }
  protoOf($sendCOROUTINE$1).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 11;
            this.ea_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.z1k_1 = this.w1k_1;
            var tmp_1 = this;
            tmp_1.a1l_1 = this.x1k_1;
            var tmp_2 = this;
            tmp_2.b1l_1 = null;
            this.c1l_1 = this.z1k_1.u1h_1.kotlinx$atomicfu$value;
            this.ea_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.ea_1 = 12;
              continue $sm;
            }

            this.d1l_1 = this.z1k_1.q1h_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            tmp_3.e1l_1 = this.d1l_1.v9(new Long(-1, 268435455));
            this.f1l_1 = _get_isClosedForSend0__kxgf9m(this.d1l_1, this.z1k_1);
            var tmp_4 = this;
            var this_0 = this.e1l_1;
            var other = get_SEGMENT_SIZE();
            tmp_4.g1l_1 = this_0.h8(toLong(other));
            var tmp_5 = this;
            var this_1 = this.e1l_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_5.h1l_1 = this_1.o9(toLong(other_0)).q8();
            if (!this.c1l_1.p1b_1.equals(this.g1l_1)) {
              this.i1l_1 = findSegmentSend(this.z1k_1, this.g1l_1, this.c1l_1);
              if (this.i1l_1 == null) {
                if (this.f1l_1) {
                  this.ea_1 = 10;
                  suspendResult = onClosedSend(this.w1k_1, this.x1k_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.ea_1 = 2;
                  continue $sm;
                }
              } else {
                this.j1l_1 = this.i1l_1;
                this.ea_1 = 3;
                continue $sm;
              }
            } else {
              this.ea_1 = 4;
              continue $sm;
            }

          case 3:
            this.c1l_1 = this.j1l_1;
            this.ea_1 = 4;
            continue $sm;
          case 4:
            this.k1l_1 = updateCellSend(this.z1k_1, this.c1l_1, this.h1l_1, this.a1l_1, this.e1l_1, this.b1l_1, this.f1l_1);
            if (this.k1l_1 === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8()) {
              this.c1l_1.m1i();
              var tmp_6 = this;
              tmp_6.y1k_1 = Unit_instance;
              this.ea_1 = 13;
              continue $sm;
            } else {
              if (this.k1l_1 === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m()) {
                var tmp_7 = this;
                tmp_7.y1k_1 = Unit_instance;
                this.ea_1 = 13;
                continue $sm;
              } else {
                if (this.k1l_1 === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf()) {
                  if (this.f1l_1) {
                    this.c1l_1.c1i();
                    this.ea_1 = 9;
                    suspendResult = onClosedSend(this.w1k_1, this.x1k_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.ea_1 = 8;
                    continue $sm;
                  }
                } else {
                  if (this.k1l_1 === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j()) {
                    if (this.e1l_1.n5(this.z1k_1.s1j()) < 0) {
                      this.c1l_1.m1i();
                    }
                    this.ea_1 = 7;
                    suspendResult = onClosedSend(this.w1k_1, this.x1k_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.k1l_1 === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0()) {
                      this.c1l_1.m1i();
                      this.ea_1 = 2;
                      continue $sm;
                    } else {
                      if (this.k1l_1 === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
                        var tmp_8 = this;
                        tmp_8.l1l_1 = this.c1l_1;
                        var tmp_9 = this;
                        tmp_9.m1l_1 = this.h1l_1;
                        var tmp_10 = this;
                        tmp_10.n1l_1 = this.a1l_1;
                        var tmp_11 = this;
                        tmp_11.o1l_1 = this.e1l_1;
                        this.ea_1 = 6;
                        suspendResult = sendOnNoWaiterSuspend(this.w1k_1, this.l1l_1, this.m1l_1, this.n1l_1, this.o1l_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.ea_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.ea_1 = 2;
            continue $sm;
          case 6:
            this.y1k_1 = suspendResult;
            this.ea_1 = 13;
            continue $sm;
          case 7:
            this.y1k_1 = suspendResult;
            this.ea_1 = 13;
            continue $sm;
          case 8:
            var tmp_12 = this.b1l_1;
            var tmp2_safe_receiver = (!(tmp_12 == null) ? isInterface(tmp_12, Waiter) : false) ? tmp_12 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(tmp2_safe_receiver, this.z1k_1, this.c1l_1, this.h1l_1);
            }

            var tmp_13 = this;
            this.c1l_1;
            this.h1l_1;
            tmp_13.y1k_1 = Unit_instance;
            this.ea_1 = 13;
            continue $sm;
          case 9:
            this.y1k_1 = suspendResult;
            this.ea_1 = 13;
            continue $sm;
          case 10:
            this.y1k_1 = suspendResult;
            this.ea_1 = 13;
            continue $sm;
          case 11:
            throw this.ha_1;
          case 12:
            if (false) {
              this.ea_1 = 1;
              continue $sm;
            }

            this.ea_1 = 13;
            continue $sm;
          case 13:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.fa_1 === 11) {
          throw e;
        } else {
          this.ea_1 = this.fa_1;
          this.ha_1 = e;
        }
      }
     while (true);
  };
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.o1h_1 = capacity;
    this.p1h_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.o1h_1 >= 0)) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.<anonymous>' call
      var message = 'Invalid channel capacity: ' + this.o1h_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.q1h_1 = atomic$long$1(new Long(0, 0));
    this.r1h_1 = atomic$long$1(new Long(0, 0));
    this.s1h_1 = atomic$long$1(initialBufferEnd(this.o1h_1));
    this.t1h_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(new Long(0, 0), null, this, 3);
    this.u1h_1 = atomic$ref$1(firstSegment);
    this.v1h_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.w1h_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.p1h_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.onUndeliveredElementReceiveCancellationConstructor.<anonymous>' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.x1h_1 = tmp_3;
    this.y1h_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.z1h_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).s1i = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    return this.q1h_1.kotlinx$atomicfu$value.v9(new Long(-1, 268435455));
  };
  protoOf(BufferedChannel).s1j = function () {
    return this.r1h_1.kotlinx$atomicfu$value;
  };
  protoOf(BufferedChannel).p1l = function (element, $completion) {
    var tmp = new $sendCOROUTINE$1(this, element, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  };
  protoOf(BufferedChannel).q1l = function (element) {
    if (shouldSendSuspend(this, this.q1h_1.kotlinx$atomicfu$value))
      return Companion_getInstance_0().r1l();
    var tmp$ret$4;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var waiter = get_INTERRUPTED_SEND();
      var segment = this.u1h_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.q1h_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.v9(new Long(-1, 268435455));
        var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, this);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = s.h8(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = s.o9(toLong(other_0)).q8();
        if (!segment.p1b_1.equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
              tmp$ret$4 = Companion_getInstance_0().l1k(this.r1j());
              break $l$block_5;
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var tmp1_subject = updateCellSend(this, segment, i, element, s, waiter, closed);
        if (tmp1_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8()) {
          segment.m1i();
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$4 = Companion_getInstance_0().x1j(Unit_instance);
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$4 = Companion_getInstance_0().x1j(Unit_instance);
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf()) {
          if (closed) {
            segment.c1i();
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
            tmp$ret$4 = Companion_getInstance_0().l1k(this.r1j());
            break $l$block_5;
          }
          var tmp2_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            prepareSenderForSuspension(tmp2_safe_receiver, this, segment, i);
          }
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          segment.c1i();
          tmp$ret$4 = Companion_getInstance_0().r1l();
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j()) {
          if (s.n5(this.s1j()) < 0) {
            segment.m1i();
          }
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$4 = Companion_getInstance_0().l1k(this.r1j());
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0()) {
          segment.m1i();
          continue $l$loop_0;
        } else if (tmp1_subject === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(BufferedChannel).a1k = function () {
  };
  protoOf(BufferedChannel).t1j = function () {
  };
  protoOf(BufferedChannel).j1k = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.v1h_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var r = this.r1h_1.kotlinx$atomicfu$value;
      // Inline function 'kotlin.math.max' call
      // Inline function 'kotlin.Long.plus' call
      var other = this.o1h_1;
      var a = r.m9(toLong(other));
      var b = _get_bufferEndCounter__2d4hee(this);
      var tmp$ret$1 = a.n5(b) >= 0 ? a : b;
      if (globalCellIndex.n5(tmp$ret$1) < 0)
        return Unit_instance;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = r.m9(toLong(1));
      if (!this.r1h_1.atomicfu$compareAndSet(r, tmp$ret$2))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = get_SEGMENT_SIZE();
      var id = r.h8(toLong(other_0));
      // Inline function 'kotlin.Long.rem' call
      var other_1 = get_SEGMENT_SIZE();
      var i = r.o9(toLong(other_1)).q8();
      if (!segment.p1b_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive(this, segment, i, r, null);
      if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
        if (r.n5(this.s1i()) < 0) {
          segment.m1i();
        }
      } else {
        segment.m1i();
        var tmp1_safe_receiver = this.p1h_1;
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE());
        }
        var tmp2_safe_receiver = tmp_0;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          throw tmp2_safe_receiver;
        }
      }
    }
  };
  protoOf(BufferedChannel).b1i = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_instance;
    while (_get_bufferEndCounter__2d4hee(this).n5(globalIndex) <= 0) {
    }
    // Inline function 'kotlin.repeat' call
    var times = get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
        var b = _get_bufferEndCounter__2d4hee(this);
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var ebCompleted = this.t1h_1.kotlinx$atomicfu$value.v9(new Long(-1, 1073741823));
        if (b.equals(ebCompleted) ? b.equals(_get_bufferEndCounter__2d4hee(this)) : false)
          return Unit_instance;
      }
       while (inductionVariable < times);
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = this.t1h_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var tmp$ret$1 = cur.v9(new Long(-1, 1073741823));
        var upd = constructEBCompletedAndPauseFlag(tmp$ret$1, true);
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.t1h_1.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = ebCompletedAndBit.v9(new Long(-1, 1073741823));
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !ebCompletedAndBit.v9(new Long(0, 1073741824)).equals(new Long(0, 0));
      if (b_0.equals(ebCompleted_0) ? b_0.equals(_get_bufferEndCounter__2d4hee(this)) : false) {
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          var this_1 = this.t1h_1;
          while (true) {
            var cur_0 = this_1.kotlinx$atomicfu$value;
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            var tmp$ret$6 = cur_0.v9(new Long(-1, 1073741823));
            var upd_0 = constructEBCompletedAndPauseFlag(tmp$ret$6, false);
            if (this_1.atomicfu$compareAndSet(cur_0, upd_0)) {
              break $l$block_0;
            }
          }
        }
        return Unit_instance;
      }
      if (!pauseExpandBuffers) {
        this.t1h_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).s = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).r1i = function () {
    var tmp = this.y1h_1.kotlinx$atomicfu$value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).r1j = function () {
    var tmp0_elvis_lhs = this.r1i();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).s1l = function () {
  };
  protoOf(BufferedChannel).t1l = function (cause) {
    return this.u1l(cause, false);
  };
  protoOf(BufferedChannel).m19 = function (cause) {
    this.w1l(cause);
  };
  protoOf(BufferedChannel).w1l = function (cause) {
    return this.u1l(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).u1l = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this.y1h_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.closeOrCancelImpl.<anonymous>' call
    this.s1l();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).k1k = function () {
    return false;
  };
  protoOf(BufferedChannel).i1k = function () {
    return _get_isClosedForSend0__kxgf9m(this.q1h_1.kotlinx$atomicfu$value, this);
  };
  protoOf(BufferedChannel).t1i = function () {
    return _get_isClosedForReceive0__f7qknl(this.q1h_1.kotlinx$atomicfu$value, this);
  };
  protoOf(BufferedChannel).m1k = function () {
    $l$loop: while (true) {
      var segment = this.v1h_1.kotlinx$atomicfu$value;
      var r = this.s1j();
      var s = this.s1i();
      if (s.n5(r) <= 0)
        return false;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = r.h8(toLong(other));
      if (!segment.p1b_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (this.v1h_1.kotlinx$atomicfu$value.p1b_1.n5(id) < 0) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.m1i();
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = r.o9(toLong(other_0)).q8();
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = r.m9(toLong(1));
      this.r1h_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp0_subject = this.q1h_1.kotlinx$atomicfu$value.t9(60).q8();
    if (tmp0_subject === 2) {
      sb.v4('closed,');
    } else if (tmp0_subject === 3) {
      sb.v4('cancelled,');
    }
    sb.v4('capacity=' + this.o1h_1 + ',');
    sb.v4('data=[');
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = listOf([this.v1h_1.kotlinx$atomicfu$value, this.u1h_1.kotlinx$atomicfu$value, this.w1h_1.kotlinx$atomicfu$value]);
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = this_0.s();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.v();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
        if (!(element === get_NULL_SEGMENT())) {
          destination.p(element);
        }
      }
      var iterator = destination.s();
      if (!iterator.t())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.v();
      if (!iterator.t()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
      var minValue = minElem.p1b_1;
      do {
        var e = iterator.v();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
        var v = e.p1b_1;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.t());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.s1j();
    var s = this.s1i();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var this_1 = segment.p1b_1;
          var other = get_SEGMENT_SIZE();
          var globalCellIndex = this_1.i8(toLong(other)).m9(toLong(i));
          if (globalCellIndex.n5(s) >= 0 ? globalCellIndex.n5(r) >= 0 : false)
            break append_elements;
          var cellState = segment.k1h(i);
          var element_0 = segment.h1h(i);
          var tmp;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp = (globalCellIndex.n5(r) < 0 ? globalCellIndex.n5(s) >= 0 : false) ? 'receive' : (globalCellIndex.n5(s) < 0 ? globalCellIndex.n5(r) >= 0 : false) ? 'send' : 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp = (globalCellIndex.n5(r) < 0 ? globalCellIndex.n5(s) >= 0 : false) ? 'onReceive' : (globalCellIndex.n5(s) < 0 ? globalCellIndex.n5(r) >= 0 : false) ? 'onSend' : 'select';
            } else {
              if (cellState instanceof ReceiveCatching) {
                tmp = 'receiveCatching';
              } else {
                if (cellState instanceof SendBroadcast) {
                  tmp = 'sendBroadcast';
                } else {
                  if (cellState instanceof WaiterEB) {
                    tmp = 'EB(' + toString_0(cellState) + ')';
                  } else {
                    if (equals(cellState, get_RESUMING_BY_RCV()) ? true : equals(cellState, get_RESUMING_BY_EB())) {
                      tmp = 'resuming_sender';
                    } else {
                      if ((((((cellState == null ? true : equals(cellState, get_IN_BUFFER())) ? true : equals(cellState, get_DONE_RCV())) ? true : equals(cellState, get_POISONED())) ? true : equals(cellState, get_INTERRUPTED_RCV())) ? true : equals(cellState, get_INTERRUPTED_SEND())) ? true : equals(cellState, get_CHANNEL_CLOSED())) {
                        continue process_cell;
                      } else {
                        tmp = toString(cellState);
                      }
                    }
                  }
                }
              }
            }
          }
          var cellStateString = tmp;
          if (!(element_0 == null)) {
            sb.v4('(' + cellStateString + ',' + element_0 + '),');
          } else {
            sb.v4(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp3_elvis_lhs = segment.i1i();
      var tmp_0;
      if (tmp3_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp3_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.i7(sb.a() - 1 | 0);
    }
    sb.v4(']');
    return sb.toString();
  };
  function WaiterEB(waiter) {
    this.u1j_1 = waiter;
  }
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + this.u1j_1 + ')';
  };
  function initialBufferEnd(capacity) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    var tmp;
    Factory_getInstance();
    if (capacity === 0) {
      tmp = new Long(0, 0);
    } else {
      Factory_getInstance();
      if (capacity === 2147483647) {
        tmp = new Long(-1, 2147483647);
      } else {
        tmp = toLong(capacity);
      }
    }
    return tmp;
  }
  function ReceiveCatching() {
  }
  function tryResume0(_this__u8e3s4, value, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_BufferedChannel_kt__d6uc4y();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.tryResume0.<anonymous>' call
    var token = _this__u8e3s4.s1a(value, null, onCancellation);
    var tmp;
    if (!(token == null)) {
      _this__u8e3s4.t1a(token);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return (pauseEB ? new Long(0, 1073741824) : new Long(0, 0)).m9(counter);
  }
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return toLong(closeStatus).s9(60).m9(counter);
  }
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function get_SENDERS_COUNTER_MASK() {
    return SENDERS_COUNTER_MASK;
  }
  var SENDERS_COUNTER_MASK;
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.e1h(), 0);
  }
  function _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 3;
  }
  function _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 0;
  }
  function _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 1;
  }
  function _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 2;
  }
  function _get_RESULT_CLOSED_$accessor$yt74tm_10v48j() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 4;
  }
  function _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 5;
  }
  function _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_SUSPEND_NO_WAITER();
  }
  function _get_SUSPEND_$accessor$yt74tm_ccb8g1() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_SUSPEND();
  }
  function _get_FAILED_$accessor$yt74tm_h47uk8() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_FAILED();
  }
  function createSegment$ref() {
    var l = function (p0, p1) {
      return createSegment(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  var properties_initialized_BufferedChannel_kt_58tjvw;
  function _init_properties_BufferedChannel_kt__d6uc4y() {
    if (!properties_initialized_BufferedChannel_kt_58tjvw) {
      properties_initialized_BufferedChannel_kt_58tjvw = true;
      NULL_SEGMENT = new ChannelSegment(new Long(-1, -1), null, null, 0);
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.bufferedChannel.segmentSize', 32);
      EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS = systemProp('kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations', 10000);
      BUFFERED = new Symbol('BUFFERED');
      IN_BUFFER = new Symbol('SHOULD_BUFFER');
      RESUMING_BY_RCV = new Symbol('S_RESUMING_BY_RCV');
      RESUMING_BY_EB = new Symbol('RESUMING_BY_EB');
      POISONED = new Symbol('POISONED');
      DONE_RCV = new Symbol('DONE_RCV');
      INTERRUPTED_SEND = new Symbol('INTERRUPTED_SEND');
      INTERRUPTED_RCV = new Symbol('INTERRUPTED_RCV');
      CHANNEL_CLOSED = new Symbol('CHANNEL_CLOSED');
      SUSPEND = new Symbol('SUSPEND');
      SUSPEND_NO_WAITER = new Symbol('SUSPEND_NO_WAITER');
      FAILED = new Symbol('FAILED');
      NO_RECEIVE_RESULT = new Symbol('NO_RECEIVE_RESULT');
      CLOSE_HANDLER_CLOSED = new Symbol('CLOSE_HANDLER_CLOSED');
      CLOSE_HANDLER_INVOKED = new Symbol('CLOSE_HANDLER_INVOKED');
      NO_CLOSE_CAUSE = new Symbol('NO_CLOSE_CAUSE');
    }
  }
  function Factory() {
    Factory_instance = this;
    this.x1l_1 = 2147483647;
    this.y1l_1 = 0;
    this.z1l_1 = -1;
    this.a1m_1 = -2;
    this.b1m_1 = -3;
    this.c1m_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.d1m_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed;
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1m_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.e1m_1 = cause;
  }
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.e1m_1, other.e1m_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.e1m_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + this.e1m_1 + ')';
  };
  function Companion() {
    Companion_instance_0 = this;
    this.w1j_1 = new Failed();
  }
  protoOf(Companion).x1j = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).r1l = function () {
    return _ChannelResult___init__impl__siwsuf(this.w1j_1);
  };
  protoOf(Companion).l1k = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed(cause));
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp;
    if (_ChannelResult___get_holder__impl__pm9gzw($this) instanceof Closed) {
      tmp = toString(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.f1m_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_0();
    this.f1m_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.f1m_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.f1m_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.f1m_1, other);
  };
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function SendChannel() {
  }
  function ReceiveChannel() {
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp;
    switch (capacity) {
      case 0:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(0, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      case -1:
        // Inline function 'kotlin.require' call

        // Inline function 'kotlin.contracts.contract' call

        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }

        tmp = new ConflatedBufferedChannel(1, BufferOverflow_DROP_OLDEST_getInstance(), onUndeliveredElement);
        break;
      case 2147483647:
        tmp = new BufferedChannel(2147483647, onUndeliveredElement);
        break;
      case -2:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().d1m_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.k1m_1 = _channel;
  }
  protoOf(ChannelCoroutine).t1l = function (cause) {
    return this.k1m_1.t1l(cause);
  };
  protoOf(ChannelCoroutine).s = function () {
    return this.k1m_1.s();
  };
  protoOf(ChannelCoroutine).p1l = function (element, $completion) {
    return this.k1m_1.p1l(element, $completion);
  };
  protoOf(ChannelCoroutine).m19 = function (cause) {
    if (this.b19())
      return Unit_instance;
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.j18() : null, null, this);
    } else {
      tmp = cause;
    }
    this.o19(tmp);
  };
  protoOf(ChannelCoroutine).g1m = function (cause, $super) {
    return this.n19(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).o19 = function (cause) {
    var exception = this.g19(cause);
    this.k1m_1.m19(exception);
    this.r19(exception);
  };
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp;
    if (cause == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.cancelConsumed.<anonymous>' call
      var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
      tmp = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', cause) : tmp0_elvis_lhs;
    }
    _this__u8e3s4.m19(tmp);
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.y1m_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : trySendDropOldest($this, element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).q1l.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) ? true : _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp0_safe_receiver = $this.p1h_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp1_safe_receiver;
      }
    }
    return Companion_getInstance_0().x1j(Unit_instance);
  }
  function trySendDropOldest($this, element) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var waiter = get_BUFFERED();
      var segment = $this.u1h_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = $this.q1h_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.v9(get_SENDERS_COUNTER_MASK());
        var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, $this);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = s.h8(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = s.o9(toLong(other_0)).q8();
        if (!segment.p1b_1.equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend($this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              return Companion_getInstance_0().l1k($this.r1j());
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var tmp1_subject = updateCellSend($this, segment, i, element, s, waiter, closed);
        if (tmp1_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8()) {
          segment.m1i();
          return Companion_getInstance_0().x1j(Unit_instance);
        } else if (tmp1_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m()) {
          return Companion_getInstance_0().x1j(Unit_instance);
        } else if (tmp1_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf()) {
          if (closed) {
            segment.c1i();
            return Companion_getInstance_0().l1k($this.r1j());
          }
          var tmp2_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            prepareSenderForSuspension(tmp2_safe_receiver, $this, segment, i);
          }
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var this_0 = segment.p1b_1;
          var other_1 = get_SEGMENT_SIZE();
          var tmp$ret$5 = this_0.i8(toLong(other_1)).m9(toLong(i));
          $this.j1k(tmp$ret$5);
          return Companion_getInstance_0().x1j(Unit_instance);
        } else if (tmp1_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j()) {
          if (s.n5($this.s1j()) < 0) {
            segment.m1i();
          }
          return Companion_getInstance_0().l1k($this.r1j());
        } else if (tmp1_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0()) {
          segment.m1i();
          continue $l$loop_0;
        } else if (tmp1_subject === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$3;
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.x1m_1 = capacity;
    this.y1m_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.y1m_1 === BufferOverflow_SUSPEND_getInstance())) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.<anonymous>' call
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).q5() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.x1m_1 >= 1)) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.<anonymous>' call
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.x1m_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).k1k = function () {
    return this.y1m_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).p1l = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var this_0 = trySendImpl(this, element, true);
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp instanceof Closed) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.send.<anonymous>' call
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      var tmp0_safe_receiver = this.p1h_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        addSuppressed(tmp1_safe_receiver, this.r1j());
        throw tmp1_safe_receiver;
      }
      throw this.r1j();
    }
    return Unit_instance;
  };
  protoOf(ConflatedBufferedChannel).q1l = function (element) {
    return trySendImpl(this, element, false);
  };
  function ProducerScope() {
  }
  function produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.h19(onCompletion);
    }
    coroutine.t18(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).g18 = function () {
    return protoOf(ChannelCoroutine).g18.call(this);
  };
  protoOf(ProducerCoroutine).d1n = function (value) {
    this.k1m_1.v1l();
  };
  protoOf(ProducerCoroutine).h18 = function (value) {
    return this.d1n(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).i18 = function (cause, handled) {
    var processed = this.k1m_1.t1l(cause);
    if (!processed ? !handled : false) {
      handleCoroutineException(this.e18_1, cause);
    }
  };
  protoOf(ProducerCoroutine).g1m = function (cause, $super) {
    return this.n19(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function channelFlow(block) {
    return new ChannelFlowBuilder(block);
  }
  function flow(block) {
    return new SafeFlow(block);
  }
  function ChannelFlowBuilder(block, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    var tmp;
    if (capacity === VOID) {
      Factory_getInstance();
      tmp = -2;
    } else {
      tmp = capacity;
    }
    capacity = tmp;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.h1n_1 = block;
  }
  protoOf(ChannelFlowBuilder).i1n = function (scope, $completion) {
    return this.h1n_1(scope, $completion);
  };
  protoOf(ChannelFlowBuilder).toString = function () {
    return 'block[' + this.h1n_1 + '] -> ' + protoOf(ChannelFlow).toString.call(this);
  };
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.r1n_1 = block;
  }
  protoOf(SafeFlow).s1n = function (collector, $completion) {
    return this.r1n_1(collector, $completion);
  };
  function emitAll(_this__u8e3s4, channel, $completion) {
    return emitAllImpl(_this__u8e3s4, channel, true, $completion);
  }
  function emitAllImpl(_this__u8e3s4, channel, consume, $completion) {
    var tmp = new $emitAllImplCOROUTINE$7(_this__u8e3s4, channel, consume, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  }
  function $emitAllImplCOROUTINE$7(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1o_1 = _this__u8e3s4;
    this.c1o_1 = channel;
    this.d1o_1 = consume;
  }
  protoOf($emitAllImplCOROUTINE$7).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 9;
            ensureActive_2(this.b1o_1);
            this.e1o_1 = null;
            this.ea_1 = 1;
            continue $sm;
          case 1:
            this.fa_1 = 7;
            this.fa_1 = 6;
            this.g1o_1 = this.c1o_1.s();
            this.ea_1 = 2;
            continue $sm;
          case 2:
            this.ea_1 = 3;
            suspendResult = this.g1o_1.g1k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            if (!suspendResult) {
              this.ea_1 = 5;
              continue $sm;
            }

            this.h1o_1 = this.g1o_1.v();
            this.ea_1 = 4;
            suspendResult = this.b1o_1.i1o(this.h1o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.ea_1 = 2;
            continue $sm;
          case 5:
            this.f1o_1 = Unit_instance;
            this.fa_1 = 9;
            this.ea_1 = 8;
            continue $sm;
          case 6:
            this.fa_1 = 7;
            var tmp_0 = this.ha_1;
            if (tmp_0 instanceof Error) {
              var e = this.ha_1;
              var tmp_1 = this;
              this.e1o_1 = e;
              throw e;
            } else {
              throw this.ha_1;
            }

          case 7:
            this.fa_1 = 9;
            var t = this.ha_1;
            if (this.d1o_1) {
              cancelConsumed(this.c1o_1, this.e1o_1);
            }

            throw t;
          case 8:
            if (this.d1o_1) {
              cancelConsumed(this.c1o_1, this.e1o_1);
            }

            return Unit_instance;
          case 9:
            throw this.ha_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.fa_1 === 9) {
          throw e_0;
        } else {
          this.ea_1 = this.fa_1;
          this.ha_1 = e_0;
        }
      }
     while (true);
  };
  function Flow() {
  }
  function $collectCOROUTINE$8(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r1o_1 = _this__u8e3s4;
    this.s1o_1 = collector;
  }
  protoOf($collectCOROUTINE$8).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 5;
            var tmp_0 = this;
            tmp_0.t1o_1 = new SafeCollector(this.s1o_1, this.la());
            this.ea_1 = 1;
            continue $sm;
          case 1:
            this.fa_1 = 4;
            this.ea_1 = 2;
            suspendResult = this.r1o_1.s1n(this.t1o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u1o_1 = suspendResult;
            this.fa_1 = 5;
            this.ea_1 = 3;
            continue $sm;
          case 3:
            this.t1o_1.z1o();
            return Unit_instance;
          case 4:
            this.fa_1 = 5;
            var t = this.ha_1;
            this.t1o_1.z1o();
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
  function AbstractFlow() {
  }
  protoOf(AbstractFlow).p1n = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$8(this, collector, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  };
  function FlowCollector() {
  }
  function StateFlow() {
  }
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.j1p_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).l1p = function (it, $completion) {
    var tmp = this.m1p(it, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).eb = function (p1, $completion) {
    return this.l1p((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 2;
            this.ea_1 = 1;
            suspendResult = this.j1p_1.i1n(this.k1p_1, this);
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
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).m1p = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.j1p_1, completion);
    i.k1p_1 = it;
    return i;
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.l1p(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.v1p_1 = $collector;
    this.w1p_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$collect$slambda).y1p = function ($this$coroutineScope, $completion) {
    var tmp = this.z1p($this$coroutineScope, $completion);
    tmp.ga_1 = Unit_instance;
    tmp.ha_1 = null;
    return tmp.ra();
  };
  protoOf(ChannelFlow$collect$slambda).eb = function (p1, $completion) {
    return this.y1p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$collect$slambda).ra = function () {
    var suspendResult = this.ga_1;
    $sm: do
      try {
        var tmp = this.ea_1;
        switch (tmp) {
          case 0:
            this.fa_1 = 2;
            this.ea_1 = 1;
            suspendResult = emitAll(this.v1p_1, this.w1p_1.o1n(this.x1p_1), this);
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
  protoOf(ChannelFlow$collect$slambda).z1p = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.v1p_1, this.w1p_1, completion);
    i.x1p_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.y1p($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.j1n_1 = context;
    this.k1n_1 = capacity;
    this.l1n_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  protoOf(ChannelFlow).m1n = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  protoOf(ChannelFlow).n1n = function () {
    var tmp;
    Factory_getInstance();
    if (this.k1n_1 === -3) {
      Factory_getInstance();
      tmp = -2;
    } else {
      tmp = this.k1n_1;
    }
    return tmp;
  };
  protoOf(ChannelFlow).o1n = function (scope) {
    return produce(scope, this.j1n_1, this.n1n(), this.l1n_1, CoroutineStart_ATOMIC_getInstance(), VOID, this.m1n());
  };
  protoOf(ChannelFlow).p1n = function (collector, $completion) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $completion);
  };
  protoOf(ChannelFlow).q1n = function () {
    return null;
  };
  protoOf(ChannelFlow).toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp0_safe_receiver = this.q1n();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.ChannelFlow.toString.<anonymous>' call
      props.p(tmp0_safe_receiver);
    }
    if (!(this.j1n_1 === EmptyCoroutineContext_getInstance())) {
      props.p('context=' + this.j1n_1);
    }
    Factory_getInstance();
    if (!(this.k1n_1 === -3)) {
      props.p('capacity=' + this.k1n_1);
    }
    if (!this.l1n_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.p('onBufferOverflow=' + this.l1n_1);
    }
    return get_classSimpleName(this) + '[' + joinToString(props, ', ') + ']';
  };
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.zc(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.x1o_1)) {
      // Inline function 'kotlin.error' call
      var message = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + _this__u8e3s4.w1o_1 + ',\n') + ('\t\tbut emission happened in ' + currentContext + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        $this = $this.q17();
        collectJob_0 = collectJob_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.b2();
      var collectElement = $this_checkContext.w1o_1.ma(key);
      var tmp;
      if (!(key === Key_instance_2)) {
        return !(element === collectElement) ? IntCompanionObject_instance.MIN_VALUE : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var message = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + emissionParentJob + ', expected child of ' + collectJob + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function ensureActive_2(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.a1q_1;
  }
  function ThrowingCollector() {
  }
  function OpDescriptor() {
  }
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.p1b_1 = id;
    this.q1b_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).d1i = function () {
    return this.q1b_1.kotlinx$atomicfu$value === this.f1h() ? !this.k1i() : false;
  };
  protoOf(Segment).e1i = function () {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      var this_0 = this.q1b_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.internal.Segment.tryIncPointers.<anonymous>' call
        if (!(!(cur === this.f1h()) ? true : this.k1i())) {
          tmp$ret$1 = false;
          break $l$block_0;
        }
        if (this_0.atomicfu$compareAndSet(cur, cur + 65536 | 0)) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(Segment).f1i = function () {
    return this.q1b_1.atomicfu$addAndGet(-65536) === this.f1h() ? !this.k1i() : false;
  };
  protoOf(Segment).c1i = function () {
    if (this.q1b_1.atomicfu$incrementAndGet() === this.f1h()) {
      this.u();
    }
  };
  function close(_this__u8e3s4) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
      var it = _get_nextOrClosed__w0gmuv(this_0);
      var tmp;
      if (it === get_CLOSED()) {
        return cur;
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (next === null) {
        if (cur.n1i())
          return cur;
      } else {
        cur = next;
      }
    }
  }
  function _SegmentOrClosed___init__impl__jnexvb(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _SegmentOrClosed___get_isClosed__impl__qmxmlo($this) {
    return _get_value__a43j40($this) === get_CLOSED();
  }
  function _SegmentOrClosed___get_segment__impl__jvcr9l($this) {
    var tmp;
    if (_get_value__a43j40($this) === get_CLOSED()) {
      var message = 'Does not contain segment';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      var tmp_0 = _get_value__a43j40($this);
      tmp = tmp_0 instanceof Segment ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function SegmentOrClosed__toString_impl_pzb2an($this) {
    return 'SegmentOrClosed(value=' + toString_0($this) + ')';
  }
  function SegmentOrClosed__hashCode_impl_4855hs($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function SegmentOrClosed__equals_impl_6erq1g($this, other) {
    if (!(other instanceof SegmentOrClosed))
      return false;
    var tmp0_other_with_cast = other instanceof SegmentOrClosed ? other.n1k_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.n1k_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.n1k_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.n1k_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.n1k_1, other);
  };
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.g1i_1.kotlinx$atomicfu$value;
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.l1i();
    while (!(cur === null) ? cur.d1i() : false)
      cur = cur.h1i_1.kotlinx$atomicfu$value;
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.i1i());
    while (cur.d1i()) {
      var tmp0_elvis_lhs = cur.i1i();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return cur;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      cur = tmp;
    }
    return cur;
  }
  function ConcurrentLinkedListNode(prev) {
    this.g1i_1 = atomic$ref$1(null);
    this.h1i_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).i1i = function () {
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
    var it = _get_nextOrClosed__w0gmuv(this);
    var tmp;
    if (it === get_CLOSED()) {
      return null;
    } else {
      tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
    }
    return tmp;
  };
  protoOf(ConcurrentLinkedListNode).j1i = function (value) {
    return this.g1i_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).k1i = function () {
    return this.i1i() == null;
  };
  protoOf(ConcurrentLinkedListNode).l1i = function () {
    return this.h1i_1.kotlinx$atomicfu$value;
  };
  protoOf(ConcurrentLinkedListNode).m1i = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this.h1i_1.kotlinx$atomicfu$value = null;
  };
  protoOf(ConcurrentLinkedListNode).n1i = function () {
    return this.g1i_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).u = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.k1i())
      return Unit_instance;
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        var this_0 = next.h1i_1;
        while (true) {
          var cur = this_0.kotlinx$atomicfu$value;
          // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.remove.<anonymous>' call
          var upd = cur === null ? null : prev;
          if (this_0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
      if (!(prev === null))
        prev.g1i_1.kotlinx$atomicfu$value = next;
      if (next.d1i() ? !next.k1i() : false)
        continue $l$loop_0;
      if (!(prev === null) ? prev.d1i() : false)
        continue $l$loop_0;
      return Unit_instance;
    }
  };
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (cur.p1b_1.n5(id) < 0 ? true : cur.d1i()) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
      var it = _get_nextOrClosed__w0gmuv(this_0);
      var tmp;
      if (it === get_CLOSED()) {
        return _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (!(next == null)) {
        cur = next;
        continue $l$loop;
      }
      // Inline function 'kotlin.Long.plus' call
      var newTail = createNewSegment(cur.p1b_1.m9(toLong(1)), cur);
      if (cur.j1i(newTail)) {
        if (cur.d1i()) {
          cur.u();
        }
        cur = newTail;
      }
    }
    return _SegmentOrClosed___init__impl__jnexvb(cur);
  }
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (!properties_initialized_ConcurrentLinkedList_kt_kwt434) {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function handleUncaughtCoroutineException(context, exception) {
    var tmp0_iterator = get_platformExceptionHandlers().s();
    while (tmp0_iterator.t()) {
      var handler = tmp0_iterator.v();
      try {
        handler.i1d(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _ = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.b1b_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.x1a_1 = dispatcher;
    this.y1a_1 = continuation;
    this.z1a_1 = get_UNDEFINED();
    this.a1b_1 = threadContextElements(this.la());
    this.b1b_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).la = function () {
    return this.y1a_1.la();
  };
  protoOf(DispatchedContinuation).k1b = function () {
    return !(this.b1b_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).b1q = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.b1b_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).h1d = function () {
    this.b1q();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g1c();
    }
  };
  protoOf(DispatchedContinuation).c1b = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.b1b_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === null) {
        this.b1b_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this.b1b_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
            return state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          }
        } else {
          if (state !== get_REUSABLE_CLAIMED()) {
            if (!(state instanceof Error)) {
              var message = 'Inconsistent state ' + toString_0(state);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).t1c = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.b1b_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.b1b_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!this.b1b_1.atomicfu$compareAndSet(state, null)) {
            // Inline function 'kotlin.require.<anonymous>' call
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).m1b = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.b1b_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.b1b_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.b1b_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).k1c = function () {
    var state = this.z1a_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.z1a_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).h1c = function () {
    return this;
  };
  protoOf(DispatchedContinuation).sa = function (result) {
    var context = this.y1a_1.la();
    var state = toState_0(result);
    if (this.x1a_1.f1d(context)) {
      this.z1a_1 = state;
      this.l1b_1 = get_MODE_ATOMIC();
      this.x1a_1.g1d(context, this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var mode = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().w1d();
        if (false ? eventLoop.r1d() : false) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.q1d()) {
          this.z1a_1 = state;
          this.l1b_1 = mode;
          eventLoop.p1d(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.s1d(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.la();
            this.a1b_1;
            this.y1a_1.sa(result);
            $l$loop: while (eventLoop.o1d()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.y1c(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.t1d(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).l1c = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.d1d_1(cause);
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.x1a_1 + ', ' + toDebugString(this.y1a_1) + ']';
  };
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (_this__u8e3s4.x1a_1.f1d(_this__u8e3s4.la())) {
        _this__u8e3s4.z1a_1 = state;
        _this__u8e3s4.l1b_1 = get_MODE_CANCELLABLE();
        _this__u8e3s4.x1a_1.g1d(_this__u8e3s4.la(), _this__u8e3s4);
        tmp_0 = Unit_instance;
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var mode = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().w1d();
          if (false ? eventLoop.r1d() : false) {
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.q1d()) {
            _this__u8e3s4.z1a_1 = state;
            _this__u8e3s4.l1b_1 = mode;
            eventLoop.p1d(_this__u8e3s4);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.s1d(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.la().ma(Key_instance_2);
                if (!(job == null) ? !job.g18() : false) {
                  var cause = job.e19();
                  _this__u8e3s4.l1c(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.sa(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.y1a_1;
                _this__u8e3s4.a1b_1;
                _this__u8e3s4.y1a_1.sa(result);
              }
              $l$loop: while (eventLoop.o1d()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.y1c(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.t1d(true);
            }
            tmp_1 = false;
          }
        }
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.sa(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.l1b_1 = resumeMode;
  }
  protoOf(DispatchedTask).l1c = function (takenState, cause) {
  };
  protoOf(DispatchedTask).s1c = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).w1c = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l18_1;
  };
  protoOf(DispatchedTask).x1c = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_instance;
    var fatalException = null;
    try {
      var tmp = this.h1c();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.y1a_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.a1b_1;
      var context = continuation.la();
      var state = this.k1c();
      var exception = this.w1c(state);
      var job = (exception == null ? get_isCancellableMode(this.l1b_1) : false) ? context.ma(Key_instance_2) : null;
      var tmp_0;
      if (!(job == null) ? !job.g18() : false) {
        var cause = job.e19();
        this.l1c(state, cause);
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.sa(tmp$ret$0);
        tmp_0 = Unit_instance;
      } else {
        var tmp_1;
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.sa(tmp$ret$1);
          tmp_1 = Unit_instance;
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.s1c(state);
          var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
          continuation.sa(tmp$ret$3);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        // Inline function 'kotlin.Companion.success' call
        // Inline function 'kotlinx.coroutines.DispatchedTask.run.<anonymous>' call
        // Inline function 'kotlinx.coroutines.afterTask' call
        tmp_2 = _Result___init__impl__xyqfz8(Unit_instance);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_3 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      var result = tmp_2;
      this.y1c(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).y1c = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_instance;
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var cause = exception == null ? finallyException : exception;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.h1c().la(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.h1c();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.l1b_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.x1a_1;
      var context = delegate.la();
      if (dispatcher.f1d(context)) {
        dispatcher.g1d(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().w1d();
    if (eventLoop.q1d()) {
      eventLoop.p1d(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.s1d(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.h1c(), true);
        $l$loop: while (eventLoop.o1d()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.y1c(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.t1d(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.k1c();
    var exception = _this__u8e3s4.w1c(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.s1c(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.y1a_1;
      this_0.a1b_1;
      this_0.y1a_1.sa(result);
    } else {
      delegate.sa(result);
    }
  }
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).p(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.p((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
        list.p(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      handleCoroutineException(context, tmp0_safe_receiver);
    }
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === ex) : false) {
          // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_instance;
    };
  }
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.f1q_1 = uCont;
  }
  protoOf(ScopeCoroutine).w19 = function () {
    return true;
  };
  protoOf(ScopeCoroutine).q18 = function (state) {
    resumeCancellableWith(intercepted(this.f1q_1), recoverResult(state, this.f1q_1));
  };
  protoOf(ScopeCoroutine).p18 = function (state) {
    this.f1q_1.sa(recoverResult(state, this.f1q_1));
  };
  function Symbol(symbol) {
    this.g1q_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.g1q_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? IntCompanionObject_instance.MAX_VALUE : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).q8();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    var tmp;
    if (maxValue === VOID) {
      Companion_getInstance();
      tmp = new Long(-1, 2147483647);
    } else {
      tmp = maxValue;
    }
    maxValue = tmp;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var value = tmp_0;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var message = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var parsed = tmp_1;
    if (!(minValue.n5(parsed) <= 0 ? parsed.n5(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var message_0 = "System property '" + propertyName + "' should be in range " + minValue.toString() + '..' + maxValue.toString() + ", but is '" + parsed.toString() + "'";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(fatalCompletion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(completion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.sa(tmp$ret$0);
    throw e;
  }
  function dispatcherFailure$accessor$glj1hg(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        completion.la();
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = _this__u8e3s4;
        tmp = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.eb(receiver, actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.sa(tmp$ret$6);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
        var tmp$ret$9 = _Result___init__impl__xyqfz8(value_0);
        actualCompletion.sa(tmp$ret$9);
      }
    }
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = block;
        tmp = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.eb(receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.o18(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        state.l18_1;
        if (true) {
          throw recoverStackTrace(state.l18_1, _this__u8e3s4.f1q_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.l18_1, _this__u8e3s4.f1q_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  var DUMMY_PROCESS_RESULT_FUNCTION;
  function get_STATE_REG() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_REG;
  }
  var STATE_REG;
  function get_STATE_COMPLETED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_COMPLETED;
  }
  var STATE_COMPLETED;
  function get_STATE_CANCELLED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_CANCELLED;
  }
  var STATE_CANCELLED;
  var NO_RESULT;
  var PARAM_CLAUSE_0;
  function SelectInstance() {
  }
  function trySelectInternal($this, clauseObject, internalResult) {
    $l$loop: while (true) {
      var curState = $this.c1k_1.kotlinx$atomicfu$value;
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.k1q($this, internalResult);
        if ($this.c1k_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.e1k_1 = internalResult;
          if (tryResume_0(cont, onCancellation))
            return 0;
          $this.e1k_1 = null;
          return 2;
        }
      } else {
        var tmp_0;
        if (equals(curState, get_STATE_COMPLETED())) {
          tmp_0 = true;
        } else {
          tmp_0 = curState instanceof ClauseData;
        }
        if (tmp_0)
          return 3;
        else {
          if (equals(curState, get_STATE_CANCELLED()))
            return 2;
          else {
            if (equals(curState, get_STATE_REG())) {
              if ($this.c1k_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, List)) {
                if ($this.c1k_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
                  return 1;
              } else {
                var message = 'Unexpected state: ' + toString(curState);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  }
  function findClause($this, clauseObject) {
    var tmp0_elvis_lhs = $this.d1k_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = clauses.s();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.v();
        // Inline function 'kotlinx.coroutines.selects.SelectImplementation.findClause.<anonymous>' call
        if (element.h1q_1 === clauseObject) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Clause with object ' + toString(clauseObject) + ' is not found';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function ClauseData() {
  }
  protoOf(ClauseData).k1q = function (select, internalResult) {
    var tmp0_safe_receiver = this.j1q_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver(select, this.i1q_1, internalResult);
  };
  function SelectImplementation() {
  }
  protoOf(SelectImplementation).f1k = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  var TrySelectDetailedResult_SUCCESSFUL_instance;
  var TrySelectDetailedResult_REREGISTER_instance;
  var TrySelectDetailedResult_CANCELLED_instance;
  var TrySelectDetailedResult_ALREADY_SELECTED_instance;
  var TrySelectDetailedResult_entriesInitialized;
  function TrySelectDetailedResult_initEntries() {
    if (TrySelectDetailedResult_entriesInitialized)
      return Unit_instance;
    TrySelectDetailedResult_entriesInitialized = true;
    TrySelectDetailedResult_SUCCESSFUL_instance = new TrySelectDetailedResult('SUCCESSFUL', 0);
    TrySelectDetailedResult_REREGISTER_instance = new TrySelectDetailedResult('REREGISTER', 1);
    TrySelectDetailedResult_CANCELLED_instance = new TrySelectDetailedResult('CANCELLED', 2);
    TrySelectDetailedResult_ALREADY_SELECTED_instance = new TrySelectDetailedResult('ALREADY_SELECTED', 3);
  }
  function TrySelectDetailedResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TrySelectDetailedResult_0(trySelectInternalResult) {
    _init_properties_Select_kt__zhm2jg();
    var tmp;
    switch (trySelectInternalResult) {
      case 0:
        tmp = TrySelectDetailedResult_SUCCESSFUL_getInstance();
        break;
      case 1:
        tmp = TrySelectDetailedResult_REREGISTER_getInstance();
        break;
      case 2:
        tmp = TrySelectDetailedResult_CANCELLED_getInstance();
        break;
      case 3:
        tmp = TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
        break;
      default:
        var message = 'Unexpected internal result: ' + trySelectInternalResult;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function tryResume_0(_this__u8e3s4, onCancellation) {
    _init_properties_Select_kt__zhm2jg();
    var tmp0_elvis_lhs = _this__u8e3s4.s1a(Unit_instance, null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.t1a(token);
    return true;
  }
  function DUMMY_PROCESS_RESULT_FUNCTION$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    _init_properties_Select_kt__zhm2jg();
    return null;
  }
  function TrySelectDetailedResult_SUCCESSFUL_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_SUCCESSFUL_instance;
  }
  function TrySelectDetailedResult_REREGISTER_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_REREGISTER_instance;
  }
  function TrySelectDetailedResult_CANCELLED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_CANCELLED_instance;
  }
  function TrySelectDetailedResult_ALREADY_SELECTED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_ALREADY_SELECTED_instance;
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (!properties_initialized_Select_kt_7rpl36) {
      properties_initialized_Select_kt_7rpl36 = true;
      DUMMY_PROCESS_RESULT_FUNCTION = DUMMY_PROCESS_RESULT_FUNCTION$lambda;
      STATE_REG = new Symbol('STATE_REG');
      STATE_COMPLETED = new Symbol('STATE_COMPLETED');
      STATE_CANCELLED = new Symbol('STATE_CANCELLED');
      NO_RESULT = new Symbol('NO_RESULT');
      PARAM_CLAUSE_0 = new Symbol('PARAM_CLAUSE_0');
    }
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  function invokeIt(_this__u8e3s4, cause) {
    if (typeof _this__u8e3s4 === 'function')
      _this__u8e3s4(cause);
    else {
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().q1g_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.f18().ad(context);
    return (!(combined === Dispatchers_getInstance().q1g_1) ? combined.ma(Key_instance) == null : false) ? combined.ad(Dispatchers_getInstance().q1g_1) : combined;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).q5();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.q1g_1 = createDefaultDispatcher();
    this.r1g_1 = Unconfined_getInstance();
    this.s1g_1 = new JsMainDispatcher(this.q1g_1, false);
    this.t1g_1 = null;
  }
  protoOf(Dispatchers).u1g = function () {
    var tmp0_elvis_lhs = this.t1g_1;
    return tmp0_elvis_lhs == null ? this.s1g_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.m1q_1 = delegate;
    this.n1q_1 = invokeImmediately;
    this.o1q_1 = this.n1q_1 ? this : new JsMainDispatcher(this.m1q_1, true);
  }
  protoOf(JsMainDispatcher).o1g = function () {
    return this.o1q_1;
  };
  protoOf(JsMainDispatcher).f1d = function (context) {
    return !this.n1q_1;
  };
  protoOf(JsMainDispatcher).g1d = function (context, block) {
    return this.m1q_1.g1d(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.p1g();
    return tmp0_elvis_lhs == null ? this.m1q_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).g1d = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    captureStack(this, JobCancellationException);
    this.t1q_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + this.t1q_1;
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.t1q_1, this.t1q_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.t1q_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).w1q = function () {
    process.nextTick(this.d1r_1.a1r_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).w1q = function () {
    setTimeout(this.d1r_1.a1r_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.j1r();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue($outer) {
    this.b1r_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.a1r_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).k1r = function () {
    this.b1r_1.w1q();
  };
  protoOf(ScheduledMessageQueue).l1r = function () {
    setTimeout(this.a1r_1, 0);
  };
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.v1a(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.d1r_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).g1d = function (context, block) {
    this.d1r_1.r1r(block);
  };
  protoOf(SetTimeoutBasedDispatcher).j1d = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ClearTimeout(handle);
    continuation.u1a(tmp$ret$1);
  };
  function MessageQueue() {
    this.g1r_1 = ArrayDeque_init_$Create$();
    this.h1r_1 = 16;
    this.i1r_1 = false;
  }
  protoOf(MessageQueue).l = function () {
    return this.g1r_1.lb_1;
  };
  protoOf(MessageQueue).m1r = function (element) {
    return this.g1r_1.p(element);
  };
  protoOf(MessageQueue).p = function (element) {
    return this.m1r((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).n1r = function (elements) {
    return this.g1r_1.w(elements);
  };
  protoOf(MessageQueue).w = function (elements) {
    return this.n1r(elements);
  };
  protoOf(MessageQueue).m1 = function () {
    this.g1r_1.m1();
  };
  protoOf(MessageQueue).o1r = function (elements) {
    return this.g1r_1.y(elements);
  };
  protoOf(MessageQueue).y = function (elements) {
    return this.o1r(elements);
  };
  protoOf(MessageQueue).d1 = function (index) {
    return this.g1r_1.d1(index);
  };
  protoOf(MessageQueue).z = function () {
    return this.g1r_1.z();
  };
  protoOf(MessageQueue).s = function () {
    return this.g1r_1.s();
  };
  protoOf(MessageQueue).p1r = function (element) {
    return this.g1r_1.q(element);
  };
  protoOf(MessageQueue).q = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.p1r((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).f1 = function (index) {
    return this.g1r_1.f1(index);
  };
  protoOf(MessageQueue).q1r = function (index, element) {
    return this.g1r_1.m(index, element);
  };
  protoOf(MessageQueue).m = function (index, element) {
    return this.q1r(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).r1r = function (element) {
    this.m1r(element);
    if (!this.i1r_1) {
      this.i1r_1 = true;
      this.k1r();
    }
  };
  protoOf(MessageQueue).j1r = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.h1r_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.x1c();
        }
         while (inductionVariable < times);
    }finally {
      if (this.z()) {
        this.i1r_1 = false;
      } else {
        this.l1r();
      }
    }
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).q8();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.s1r_1 = handle;
  }
  protoOf(ClearTimeout).j1c = function () {
    clearTimeout(this.s1r_1);
  };
  protoOf(ClearTimeout).b1d = function (cause) {
    this.j1c();
  };
  protoOf(ClearTimeout).invoke = function (cause) {
    return this.b1d(cause);
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.s1r_1 + ']';
  };
  function WindowClearTimeout($outer, handle) {
    this.u1r_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).j1c = function () {
    this.u1r_1.w1r_1.clearTimeout(this.s1r_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.v1a(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.w1r_1 = window_0;
    this.x1r_1 = new WindowMessageQueue(this.w1r_1);
  }
  protoOf(WindowDispatcher).g1d = function (context, block) {
    return this.x1r_1.r1r(block);
  };
  protoOf(WindowDispatcher).j1d = function (timeMillis, continuation) {
    var handle = this.w1r_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new WindowClearTimeout(this, handle);
    continuation.u1a(tmp$ret$1);
  };
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.b1s_1 ? event.data == this$0.c1s_1 : false) {
        event.stopPropagation();
        this$0.j1r();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.j1r();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.b1s_1 = window_0;
    this.c1s_1 = 'dispatchCoroutine';
    this.b1s_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).k1r = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).l1r = function () {
    this.b1s_1.postMessage(this.c1s_1, '*');
  };
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return Unit_instance;
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SafeCollector$collectContextSize$lambda(count, _anonymous_parameter_1__qggqgd) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.v1o_1 = collector;
    this.w1o_1 = collectContext;
    var tmp = this;
    tmp.x1o_1 = this.w1o_1.zc(0, SafeCollector$collectContextSize$lambda);
    this.y1o_1 = null;
  }
  protoOf(SafeCollector).i1o = function (value, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.la();
    ensureActive_0(currentContext);
    if (!(this.y1o_1 === currentContext)) {
      checkContext(this, currentContext);
      this.y1o_1 = currentContext;
    }
    return this.v1o_1.i1o(value, $completion);
  };
  protoOf(SafeCollector).z1o = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function propagateExceptionFinalResort(exception) {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    console.error(exception);
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  protoOf(LinkedListHead).m1e = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this.g1e_1 = this;
    this.h1e_1 = this;
    this.i1e_1 = false;
  }
  protoOf(LinkedListNode).n1e = function (node) {
    var prev = this.h1e_1;
    node.g1e_1 = this;
    node.h1e_1 = prev;
    prev.g1e_1 = node;
    this.h1e_1 = node;
  };
  protoOf(LinkedListNode).m1e = function () {
    return this.o1e();
  };
  protoOf(LinkedListNode).j1c = function () {
    this.m1e();
  };
  protoOf(LinkedListNode).o1e = function () {
    if (this.i1e_1)
      return false;
    var prev = this.h1e_1;
    var next = this.g1e_1;
    prev.g1e_1 = next;
    next.h1e_1 = prev;
    this.i1e_1 = true;
    return true;
  };
  protoOf(LinkedListNode).u1e = function (node) {
    if (!(this.g1e_1 === this))
      return false;
    this.n1e(node);
    return true;
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.x1d_1 = null;
  }
  protoOf(CommonThreadLocal).y1d = function () {
    var tmp = this.x1d_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).z1d = function (value) {
    this.x1d_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).j19 = invokeOnCompletion$default;
  protoOf(JobSupport).n19 = cancel$default;
  protoOf(JobSupport).ad = plus;
  protoOf(JobSupport).ma = get_0;
  protoOf(JobSupport).zc = fold;
  protoOf(JobSupport).yc = minusKey_0;
  protoOf(CoroutineDispatcher).ma = get;
  protoOf(CoroutineDispatcher).yc = minusKey;
  protoOf(BufferedChannel).v1l = close$default;
  protoOf(ChannelCoroutine).v1l = close$default;
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  GlobalScope_instance = new GlobalScope();
  Key_instance_2 = new Key_1();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_3 = new Key_2();
  SENDERS_COUNTER_MASK = new Long(-1, 268435455);
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  MODE_CANCELLABLE = 1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNINITIALIZED = -1;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.b = delay;
  _.$_$.c = GlobalScope_instance;
  _.$_$.d = ProducerScope;
  _.$_$.e = FlowCollector;
  _.$_$.f = Flow;
  _.$_$.g = StateFlow;
  _.$_$.h = channelFlow;
  _.$_$.i = flow;
  _.$_$.j = CancellableContinuationImpl;
  _.$_$.k = CoroutineScope;
  _.$_$.l = get_MODE_CANCELLABLE;
  _.$_$.m = async;
  _.$_$.n = ensureActive;
  _.$_$.o = get_isActive;
  _.$_$.p = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
