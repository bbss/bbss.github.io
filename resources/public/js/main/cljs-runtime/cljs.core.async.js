goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__49571 = arguments.length;
switch (G__49571) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49576 = (function (f,blockable,meta49577){
this.f = f;
this.blockable = blockable;
this.meta49577 = meta49577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49578,meta49577__$1){
var self__ = this;
var _49578__$1 = this;
return (new cljs.core.async.t_cljs$core$async49576(self__.f,self__.blockable,meta49577__$1));
}));

(cljs.core.async.t_cljs$core$async49576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49578){
var self__ = this;
var _49578__$1 = this;
return self__.meta49577;
}));

(cljs.core.async.t_cljs$core$async49576.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49576.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async49576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async49576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49577","meta49577",1884658296,null)], null);
}));

(cljs.core.async.t_cljs$core$async49576.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49576");

(cljs.core.async.t_cljs$core$async49576.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49576");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49576.
 */
cljs.core.async.__GT_t_cljs$core$async49576 = (function cljs$core$async$__GT_t_cljs$core$async49576(f__$1,blockable__$1,meta49577){
return (new cljs.core.async.t_cljs$core$async49576(f__$1,blockable__$1,meta49577));
});

}

return (new cljs.core.async.t_cljs$core$async49576(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__49604 = arguments.length;
switch (G__49604) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__49611 = arguments.length;
switch (G__49611) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__49614 = arguments.length;
switch (G__49614) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_51817 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51817) : fn1.call(null,val_51817));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51817) : fn1.call(null,val_51817));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__49621 = arguments.length;
switch (G__49621) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___51820 = n;
var x_51821 = (0);
while(true){
if((x_51821 < n__4706__auto___51820)){
(a[x_51821] = x_51821);

var G__51823 = (x_51821 + (1));
x_51821 = G__51823;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49625 = (function (flag,meta49626){
this.flag = flag;
this.meta49626 = meta49626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49627,meta49626__$1){
var self__ = this;
var _49627__$1 = this;
return (new cljs.core.async.t_cljs$core$async49625(self__.flag,meta49626__$1));
}));

(cljs.core.async.t_cljs$core$async49625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49627){
var self__ = this;
var _49627__$1 = this;
return self__.meta49626;
}));

(cljs.core.async.t_cljs$core$async49625.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49625.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async49625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49626","meta49626",1415971251,null)], null);
}));

(cljs.core.async.t_cljs$core$async49625.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49625");

(cljs.core.async.t_cljs$core$async49625.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49625");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49625.
 */
cljs.core.async.__GT_t_cljs$core$async49625 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49625(flag__$1,meta49626){
return (new cljs.core.async.t_cljs$core$async49625(flag__$1,meta49626));
});

}

return (new cljs.core.async.t_cljs$core$async49625(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49641 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49641 = (function (flag,cb,meta49642){
this.flag = flag;
this.cb = cb;
this.meta49642 = meta49642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49643,meta49642__$1){
var self__ = this;
var _49643__$1 = this;
return (new cljs.core.async.t_cljs$core$async49641(self__.flag,self__.cb,meta49642__$1));
}));

(cljs.core.async.t_cljs$core$async49641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49643){
var self__ = this;
var _49643__$1 = this;
return self__.meta49642;
}));

(cljs.core.async.t_cljs$core$async49641.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49641.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async49641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta49642","meta49642",-385406580,null)], null);
}));

(cljs.core.async.t_cljs$core$async49641.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49641");

(cljs.core.async.t_cljs$core$async49641.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49641");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49641.
 */
cljs.core.async.__GT_t_cljs$core$async49641 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async49641(flag__$1,cb__$1,meta49642){
return (new cljs.core.async.t_cljs$core$async49641(flag__$1,cb__$1,meta49642));
});

}

return (new cljs.core.async.t_cljs$core$async49641(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49647_SHARP_){
var G__49650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49647_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49650) : fret.call(null,G__49650));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49648_SHARP_){
var G__49651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49648_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49651) : fret.call(null,G__49651));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__51840 = (i + (1));
i = G__51840;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51843 = arguments.length;
var i__4830__auto___51844 = (0);
while(true){
if((i__4830__auto___51844 < len__4829__auto___51843)){
args__4835__auto__.push((arguments[i__4830__auto___51844]));

var G__51847 = (i__4830__auto___51844 + (1));
i__4830__auto___51844 = G__51847;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__49656){
var map__49657 = p__49656;
var map__49657__$1 = cljs.core.__destructure_map(map__49657);
var opts = map__49657__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq49653){
var G__49654 = cljs.core.first(seq49653);
var seq49653__$1 = cljs.core.next(seq49653);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49654,seq49653__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__49659 = arguments.length;
switch (G__49659) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__49450__auto___51858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_49691){
var state_val_49692 = (state_49691[(1)]);
if((state_val_49692 === (7))){
var inst_49687 = (state_49691[(2)]);
var state_49691__$1 = state_49691;
var statearr_49697_51859 = state_49691__$1;
(statearr_49697_51859[(2)] = inst_49687);

(statearr_49697_51859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (1))){
var state_49691__$1 = state_49691;
var statearr_49698_51860 = state_49691__$1;
(statearr_49698_51860[(2)] = null);

(statearr_49698_51860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (4))){
var inst_49670 = (state_49691[(7)]);
var inst_49670__$1 = (state_49691[(2)]);
var inst_49671 = (inst_49670__$1 == null);
var state_49691__$1 = (function (){var statearr_49699 = state_49691;
(statearr_49699[(7)] = inst_49670__$1);

return statearr_49699;
})();
if(cljs.core.truth_(inst_49671)){
var statearr_49700_51862 = state_49691__$1;
(statearr_49700_51862[(1)] = (5));

} else {
var statearr_49701_51864 = state_49691__$1;
(statearr_49701_51864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (13))){
var state_49691__$1 = state_49691;
var statearr_49702_51865 = state_49691__$1;
(statearr_49702_51865[(2)] = null);

(statearr_49702_51865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (6))){
var inst_49670 = (state_49691[(7)]);
var state_49691__$1 = state_49691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49691__$1,(11),to,inst_49670);
} else {
if((state_val_49692 === (3))){
var inst_49689 = (state_49691[(2)]);
var state_49691__$1 = state_49691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49691__$1,inst_49689);
} else {
if((state_val_49692 === (12))){
var state_49691__$1 = state_49691;
var statearr_49706_51866 = state_49691__$1;
(statearr_49706_51866[(2)] = null);

(statearr_49706_51866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (2))){
var state_49691__$1 = state_49691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49691__$1,(4),from);
} else {
if((state_val_49692 === (11))){
var inst_49680 = (state_49691[(2)]);
var state_49691__$1 = state_49691;
if(cljs.core.truth_(inst_49680)){
var statearr_49707_51867 = state_49691__$1;
(statearr_49707_51867[(1)] = (12));

} else {
var statearr_49708_51868 = state_49691__$1;
(statearr_49708_51868[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (9))){
var state_49691__$1 = state_49691;
var statearr_49709_51869 = state_49691__$1;
(statearr_49709_51869[(2)] = null);

(statearr_49709_51869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (5))){
var state_49691__$1 = state_49691;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49710_51870 = state_49691__$1;
(statearr_49710_51870[(1)] = (8));

} else {
var statearr_49711_51871 = state_49691__$1;
(statearr_49711_51871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (14))){
var inst_49685 = (state_49691[(2)]);
var state_49691__$1 = state_49691;
var statearr_49713_51872 = state_49691__$1;
(statearr_49713_51872[(2)] = inst_49685);

(statearr_49713_51872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (10))){
var inst_49677 = (state_49691[(2)]);
var state_49691__$1 = state_49691;
var statearr_49715_51874 = state_49691__$1;
(statearr_49715_51874[(2)] = inst_49677);

(statearr_49715_51874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (8))){
var inst_49674 = cljs.core.async.close_BANG_(to);
var state_49691__$1 = state_49691;
var statearr_49717_51875 = state_49691__$1;
(statearr_49717_51875[(2)] = inst_49674);

(statearr_49717_51875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49349__auto__ = null;
var cljs$core$async$state_machine__49349__auto____0 = (function (){
var statearr_49718 = [null,null,null,null,null,null,null,null];
(statearr_49718[(0)] = cljs$core$async$state_machine__49349__auto__);

(statearr_49718[(1)] = (1));

return statearr_49718;
});
var cljs$core$async$state_machine__49349__auto____1 = (function (state_49691){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_49691);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e49720){var ex__49352__auto__ = e49720;
var statearr_49721_51876 = state_49691;
(statearr_49721_51876[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_49691[(4)]))){
var statearr_49722_51877 = state_49691;
(statearr_49722_51877[(1)] = cljs.core.first((state_49691[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51878 = state_49691;
state_49691 = G__51878;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$state_machine__49349__auto__ = function(state_49691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49349__auto____1.call(this,state_49691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49349__auto____0;
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49349__auto____1;
return cljs$core$async$state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_49725 = f__49451__auto__();
(statearr_49725[(6)] = c__49450__auto___51858);

return statearr_49725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__49732){
var vec__49733 = p__49732;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49733,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49733,(1),null);
var job = vec__49733;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__49450__auto___51880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_49740){
var state_val_49741 = (state_49740[(1)]);
if((state_val_49741 === (1))){
var state_49740__$1 = state_49740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49740__$1,(2),res,v);
} else {
if((state_val_49741 === (2))){
var inst_49737 = (state_49740[(2)]);
var inst_49738 = cljs.core.async.close_BANG_(res);
var state_49740__$1 = (function (){var statearr_49743 = state_49740;
(statearr_49743[(7)] = inst_49737);

return statearr_49743;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49740__$1,inst_49738);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____0 = (function (){
var statearr_49744 = [null,null,null,null,null,null,null,null];
(statearr_49744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__);

(statearr_49744[(1)] = (1));

return statearr_49744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____1 = (function (state_49740){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_49740);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e49747){var ex__49352__auto__ = e49747;
var statearr_49748_51881 = state_49740;
(statearr_49748_51881[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_49740[(4)]))){
var statearr_49749_51882 = state_49740;
(statearr_49749_51882[(1)] = cljs.core.first((state_49740[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51883 = state_49740;
state_49740 = G__51883;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__ = function(state_49740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____1.call(this,state_49740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_49754 = f__49451__auto__();
(statearr_49754[(6)] = c__49450__auto___51880);

return statearr_49754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__49756){
var vec__49757 = p__49756;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49757,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49757,(1),null);
var job = vec__49757;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___51888 = n;
var __51889 = (0);
while(true){
if((__51889 < n__4706__auto___51888)){
var G__49762_51892 = type;
var G__49762_51893__$1 = (((G__49762_51892 instanceof cljs.core.Keyword))?G__49762_51892.fqn:null);
switch (G__49762_51893__$1) {
case "compute":
var c__49450__auto___51895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__51889,c__49450__auto___51895,G__49762_51892,G__49762_51893__$1,n__4706__auto___51888,jobs,results,process,async){
return (function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = ((function (__51889,c__49450__auto___51895,G__49762_51892,G__49762_51893__$1,n__4706__auto___51888,jobs,results,process,async){
return (function (state_49781){
var state_val_49782 = (state_49781[(1)]);
if((state_val_49782 === (1))){
var state_49781__$1 = state_49781;
var statearr_49783_51896 = state_49781__$1;
(statearr_49783_51896[(2)] = null);

(statearr_49783_51896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49782 === (2))){
var state_49781__$1 = state_49781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49781__$1,(4),jobs);
} else {
if((state_val_49782 === (3))){
var inst_49779 = (state_49781[(2)]);
var state_49781__$1 = state_49781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49781__$1,inst_49779);
} else {
if((state_val_49782 === (4))){
var inst_49771 = (state_49781[(2)]);
var inst_49772 = process(inst_49771);
var state_49781__$1 = state_49781;
if(cljs.core.truth_(inst_49772)){
var statearr_49784_51897 = state_49781__$1;
(statearr_49784_51897[(1)] = (5));

} else {
var statearr_49785_51898 = state_49781__$1;
(statearr_49785_51898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49782 === (5))){
var state_49781__$1 = state_49781;
var statearr_49786_51899 = state_49781__$1;
(statearr_49786_51899[(2)] = null);

(statearr_49786_51899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49782 === (6))){
var state_49781__$1 = state_49781;
var statearr_49787_51900 = state_49781__$1;
(statearr_49787_51900[(2)] = null);

(statearr_49787_51900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49782 === (7))){
var inst_49777 = (state_49781[(2)]);
var state_49781__$1 = state_49781;
var statearr_49788_51901 = state_49781__$1;
(statearr_49788_51901[(2)] = inst_49777);

(statearr_49788_51901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__51889,c__49450__auto___51895,G__49762_51892,G__49762_51893__$1,n__4706__auto___51888,jobs,results,process,async))
;
return ((function (__51889,switch__49348__auto__,c__49450__auto___51895,G__49762_51892,G__49762_51893__$1,n__4706__auto___51888,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____0 = (function (){
var statearr_49789 = [null,null,null,null,null,null,null];
(statearr_49789[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__);

(statearr_49789[(1)] = (1));

return statearr_49789;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____1 = (function (state_49781){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_49781);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e49790){var ex__49352__auto__ = e49790;
var statearr_49791_51903 = state_49781;
(statearr_49791_51903[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_49781[(4)]))){
var statearr_49796_51904 = state_49781;
(statearr_49796_51904[(1)] = cljs.core.first((state_49781[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51905 = state_49781;
state_49781 = G__51905;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__ = function(state_49781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____1.call(this,state_49781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__;
})()
;})(__51889,switch__49348__auto__,c__49450__auto___51895,G__49762_51892,G__49762_51893__$1,n__4706__auto___51888,jobs,results,process,async))
})();
var state__49452__auto__ = (function (){var statearr_49799 = f__49451__auto__();
(statearr_49799[(6)] = c__49450__auto___51895);

return statearr_49799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
});})(__51889,c__49450__auto___51895,G__49762_51892,G__49762_51893__$1,n__4706__auto___51888,jobs,results,process,async))
);


break;
case "async":
var c__49450__auto___51906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__51889,c__49450__auto___51906,G__49762_51892,G__49762_51893__$1,n__4706__auto___51888,jobs,results,process,async){
return (function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = ((function (__51889,c__49450__auto___51906,G__49762_51892,G__49762_51893__$1,n__4706__auto___51888,jobs,results,process,async){
return (function (state_49812){
var state_val_49813 = (state_49812[(1)]);
if((state_val_49813 === (1))){
var state_49812__$1 = state_49812;
var statearr_49814_51907 = state_49812__$1;
(statearr_49814_51907[(2)] = null);

(statearr_49814_51907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49813 === (2))){
var state_49812__$1 = state_49812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49812__$1,(4),jobs);
} else {
if((state_val_49813 === (3))){
var inst_49810 = (state_49812[(2)]);
var state_49812__$1 = state_49812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49812__$1,inst_49810);
} else {
if((state_val_49813 === (4))){
var inst_49802 = (state_49812[(2)]);
var inst_49803 = async(inst_49802);
var state_49812__$1 = state_49812;
if(cljs.core.truth_(inst_49803)){
var statearr_49816_51908 = state_49812__$1;
(statearr_49816_51908[(1)] = (5));

} else {
var statearr_49818_51909 = state_49812__$1;
(statearr_49818_51909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49813 === (5))){
var state_49812__$1 = state_49812;
var statearr_49820_51910 = state_49812__$1;
(statearr_49820_51910[(2)] = null);

(statearr_49820_51910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49813 === (6))){
var state_49812__$1 = state_49812;
var statearr_49821_51911 = state_49812__$1;
(statearr_49821_51911[(2)] = null);

(statearr_49821_51911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49813 === (7))){
var inst_49808 = (state_49812[(2)]);
var state_49812__$1 = state_49812;
var statearr_49822_51912 = state_49812__$1;
(statearr_49822_51912[(2)] = inst_49808);

(statearr_49822_51912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__51889,c__49450__auto___51906,G__49762_51892,G__49762_51893__$1,n__4706__auto___51888,jobs,results,process,async))
;
return ((function (__51889,switch__49348__auto__,c__49450__auto___51906,G__49762_51892,G__49762_51893__$1,n__4706__auto___51888,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____0 = (function (){
var statearr_49823 = [null,null,null,null,null,null,null];
(statearr_49823[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__);

(statearr_49823[(1)] = (1));

return statearr_49823;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____1 = (function (state_49812){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_49812);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e49824){var ex__49352__auto__ = e49824;
var statearr_49825_51919 = state_49812;
(statearr_49825_51919[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_49812[(4)]))){
var statearr_49826_51920 = state_49812;
(statearr_49826_51920[(1)] = cljs.core.first((state_49812[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51921 = state_49812;
state_49812 = G__51921;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__ = function(state_49812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____1.call(this,state_49812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__;
})()
;})(__51889,switch__49348__auto__,c__49450__auto___51906,G__49762_51892,G__49762_51893__$1,n__4706__auto___51888,jobs,results,process,async))
})();
var state__49452__auto__ = (function (){var statearr_49827 = f__49451__auto__();
(statearr_49827[(6)] = c__49450__auto___51906);

return statearr_49827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
});})(__51889,c__49450__auto___51906,G__49762_51892,G__49762_51893__$1,n__4706__auto___51888,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49762_51893__$1)].join('')));

}

var G__51923 = (__51889 + (1));
__51889 = G__51923;
continue;
} else {
}
break;
}

var c__49450__auto___51924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_49851){
var state_val_49852 = (state_49851[(1)]);
if((state_val_49852 === (7))){
var inst_49847 = (state_49851[(2)]);
var state_49851__$1 = state_49851;
var statearr_49857_51937 = state_49851__$1;
(statearr_49857_51937[(2)] = inst_49847);

(statearr_49857_51937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49852 === (1))){
var state_49851__$1 = state_49851;
var statearr_49859_51940 = state_49851__$1;
(statearr_49859_51940[(2)] = null);

(statearr_49859_51940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49852 === (4))){
var inst_49831 = (state_49851[(7)]);
var inst_49831__$1 = (state_49851[(2)]);
var inst_49832 = (inst_49831__$1 == null);
var state_49851__$1 = (function (){var statearr_49870 = state_49851;
(statearr_49870[(7)] = inst_49831__$1);

return statearr_49870;
})();
if(cljs.core.truth_(inst_49832)){
var statearr_49871_51941 = state_49851__$1;
(statearr_49871_51941[(1)] = (5));

} else {
var statearr_49872_51942 = state_49851__$1;
(statearr_49872_51942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49852 === (6))){
var inst_49831 = (state_49851[(7)]);
var inst_49837 = (state_49851[(8)]);
var inst_49837__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_49838 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49839 = [inst_49831,inst_49837__$1];
var inst_49840 = (new cljs.core.PersistentVector(null,2,(5),inst_49838,inst_49839,null));
var state_49851__$1 = (function (){var statearr_49875 = state_49851;
(statearr_49875[(8)] = inst_49837__$1);

return statearr_49875;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49851__$1,(8),jobs,inst_49840);
} else {
if((state_val_49852 === (3))){
var inst_49849 = (state_49851[(2)]);
var state_49851__$1 = state_49851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49851__$1,inst_49849);
} else {
if((state_val_49852 === (2))){
var state_49851__$1 = state_49851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49851__$1,(4),from);
} else {
if((state_val_49852 === (9))){
var inst_49844 = (state_49851[(2)]);
var state_49851__$1 = (function (){var statearr_49876 = state_49851;
(statearr_49876[(9)] = inst_49844);

return statearr_49876;
})();
var statearr_49877_51943 = state_49851__$1;
(statearr_49877_51943[(2)] = null);

(statearr_49877_51943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49852 === (5))){
var inst_49835 = cljs.core.async.close_BANG_(jobs);
var state_49851__$1 = state_49851;
var statearr_49878_51944 = state_49851__$1;
(statearr_49878_51944[(2)] = inst_49835);

(statearr_49878_51944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49852 === (8))){
var inst_49837 = (state_49851[(8)]);
var inst_49842 = (state_49851[(2)]);
var state_49851__$1 = (function (){var statearr_49880 = state_49851;
(statearr_49880[(10)] = inst_49842);

return statearr_49880;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49851__$1,(9),results,inst_49837);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____0 = (function (){
var statearr_49881 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49881[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__);

(statearr_49881[(1)] = (1));

return statearr_49881;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____1 = (function (state_49851){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_49851);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e49884){var ex__49352__auto__ = e49884;
var statearr_49885_51958 = state_49851;
(statearr_49885_51958[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_49851[(4)]))){
var statearr_49886_51959 = state_49851;
(statearr_49886_51959[(1)] = cljs.core.first((state_49851[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51962 = state_49851;
state_49851 = G__51962;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__ = function(state_49851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____1.call(this,state_49851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_49887 = f__49451__auto__();
(statearr_49887[(6)] = c__49450__auto___51924);

return statearr_49887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));


var c__49450__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_49926){
var state_val_49927 = (state_49926[(1)]);
if((state_val_49927 === (7))){
var inst_49922 = (state_49926[(2)]);
var state_49926__$1 = state_49926;
var statearr_49930_51970 = state_49926__$1;
(statearr_49930_51970[(2)] = inst_49922);

(statearr_49930_51970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49927 === (20))){
var state_49926__$1 = state_49926;
var statearr_49936_51972 = state_49926__$1;
(statearr_49936_51972[(2)] = null);

(statearr_49936_51972[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49927 === (1))){
var state_49926__$1 = state_49926;
var statearr_49937_51973 = state_49926__$1;
(statearr_49937_51973[(2)] = null);

(statearr_49937_51973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49927 === (4))){
var inst_49890 = (state_49926[(7)]);
var inst_49890__$1 = (state_49926[(2)]);
var inst_49891 = (inst_49890__$1 == null);
var state_49926__$1 = (function (){var statearr_49938 = state_49926;
(statearr_49938[(7)] = inst_49890__$1);

return statearr_49938;
})();
if(cljs.core.truth_(inst_49891)){
var statearr_49939_51974 = state_49926__$1;
(statearr_49939_51974[(1)] = (5));

} else {
var statearr_49940_51975 = state_49926__$1;
(statearr_49940_51975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49927 === (15))){
var inst_49904 = (state_49926[(8)]);
var state_49926__$1 = state_49926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49926__$1,(18),to,inst_49904);
} else {
if((state_val_49927 === (21))){
var inst_49917 = (state_49926[(2)]);
var state_49926__$1 = state_49926;
var statearr_49941_51976 = state_49926__$1;
(statearr_49941_51976[(2)] = inst_49917);

(statearr_49941_51976[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49927 === (13))){
var inst_49919 = (state_49926[(2)]);
var state_49926__$1 = (function (){var statearr_49942 = state_49926;
(statearr_49942[(9)] = inst_49919);

return statearr_49942;
})();
var statearr_49943_51978 = state_49926__$1;
(statearr_49943_51978[(2)] = null);

(statearr_49943_51978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49927 === (6))){
var inst_49890 = (state_49926[(7)]);
var state_49926__$1 = state_49926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49926__$1,(11),inst_49890);
} else {
if((state_val_49927 === (17))){
var inst_49912 = (state_49926[(2)]);
var state_49926__$1 = state_49926;
if(cljs.core.truth_(inst_49912)){
var statearr_49944_51981 = state_49926__$1;
(statearr_49944_51981[(1)] = (19));

} else {
var statearr_49945_51983 = state_49926__$1;
(statearr_49945_51983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49927 === (3))){
var inst_49924 = (state_49926[(2)]);
var state_49926__$1 = state_49926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49926__$1,inst_49924);
} else {
if((state_val_49927 === (12))){
var inst_49900 = (state_49926[(10)]);
var state_49926__$1 = state_49926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49926__$1,(14),inst_49900);
} else {
if((state_val_49927 === (2))){
var state_49926__$1 = state_49926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49926__$1,(4),results);
} else {
if((state_val_49927 === (19))){
var state_49926__$1 = state_49926;
var statearr_49946_51984 = state_49926__$1;
(statearr_49946_51984[(2)] = null);

(statearr_49946_51984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49927 === (11))){
var inst_49900 = (state_49926[(2)]);
var state_49926__$1 = (function (){var statearr_49947 = state_49926;
(statearr_49947[(10)] = inst_49900);

return statearr_49947;
})();
var statearr_49948_51986 = state_49926__$1;
(statearr_49948_51986[(2)] = null);

(statearr_49948_51986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49927 === (9))){
var state_49926__$1 = state_49926;
var statearr_49949_51987 = state_49926__$1;
(statearr_49949_51987[(2)] = null);

(statearr_49949_51987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49927 === (5))){
var state_49926__$1 = state_49926;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49950_51990 = state_49926__$1;
(statearr_49950_51990[(1)] = (8));

} else {
var statearr_49951_51992 = state_49926__$1;
(statearr_49951_51992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49927 === (14))){
var inst_49906 = (state_49926[(11)]);
var inst_49904 = (state_49926[(8)]);
var inst_49904__$1 = (state_49926[(2)]);
var inst_49905 = (inst_49904__$1 == null);
var inst_49906__$1 = cljs.core.not(inst_49905);
var state_49926__$1 = (function (){var statearr_49954 = state_49926;
(statearr_49954[(11)] = inst_49906__$1);

(statearr_49954[(8)] = inst_49904__$1);

return statearr_49954;
})();
if(inst_49906__$1){
var statearr_49955_51993 = state_49926__$1;
(statearr_49955_51993[(1)] = (15));

} else {
var statearr_49958_51994 = state_49926__$1;
(statearr_49958_51994[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49927 === (16))){
var inst_49906 = (state_49926[(11)]);
var state_49926__$1 = state_49926;
var statearr_49960_51996 = state_49926__$1;
(statearr_49960_51996[(2)] = inst_49906);

(statearr_49960_51996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49927 === (10))){
var inst_49897 = (state_49926[(2)]);
var state_49926__$1 = state_49926;
var statearr_49961_51997 = state_49926__$1;
(statearr_49961_51997[(2)] = inst_49897);

(statearr_49961_51997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49927 === (18))){
var inst_49909 = (state_49926[(2)]);
var state_49926__$1 = state_49926;
var statearr_49962_51998 = state_49926__$1;
(statearr_49962_51998[(2)] = inst_49909);

(statearr_49962_51998[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49927 === (8))){
var inst_49894 = cljs.core.async.close_BANG_(to);
var state_49926__$1 = state_49926;
var statearr_49963_51999 = state_49926__$1;
(statearr_49963_51999[(2)] = inst_49894);

(statearr_49963_51999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____0 = (function (){
var statearr_49964 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__);

(statearr_49964[(1)] = (1));

return statearr_49964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____1 = (function (state_49926){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_49926);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e49965){var ex__49352__auto__ = e49965;
var statearr_49966_52005 = state_49926;
(statearr_49966_52005[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_49926[(4)]))){
var statearr_49967_52006 = state_49926;
(statearr_49967_52006[(1)] = cljs.core.first((state_49926[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52008 = state_49926;
state_49926 = G__52008;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__ = function(state_49926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____1.call(this,state_49926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_49969 = f__49451__auto__();
(statearr_49969[(6)] = c__49450__auto__);

return statearr_49969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));

return c__49450__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__49975 = arguments.length;
switch (G__49975) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__49981 = arguments.length;
switch (G__49981) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__49984 = arguments.length;
switch (G__49984) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__49450__auto___52023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_50011){
var state_val_50012 = (state_50011[(1)]);
if((state_val_50012 === (7))){
var inst_50007 = (state_50011[(2)]);
var state_50011__$1 = state_50011;
var statearr_50013_52024 = state_50011__$1;
(statearr_50013_52024[(2)] = inst_50007);

(statearr_50013_52024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (1))){
var state_50011__$1 = state_50011;
var statearr_50016_52027 = state_50011__$1;
(statearr_50016_52027[(2)] = null);

(statearr_50016_52027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (4))){
var inst_49988 = (state_50011[(7)]);
var inst_49988__$1 = (state_50011[(2)]);
var inst_49989 = (inst_49988__$1 == null);
var state_50011__$1 = (function (){var statearr_50017 = state_50011;
(statearr_50017[(7)] = inst_49988__$1);

return statearr_50017;
})();
if(cljs.core.truth_(inst_49989)){
var statearr_50020_52030 = state_50011__$1;
(statearr_50020_52030[(1)] = (5));

} else {
var statearr_50021_52031 = state_50011__$1;
(statearr_50021_52031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (13))){
var state_50011__$1 = state_50011;
var statearr_50022_52034 = state_50011__$1;
(statearr_50022_52034[(2)] = null);

(statearr_50022_52034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (6))){
var inst_49988 = (state_50011[(7)]);
var inst_49994 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49988) : p.call(null,inst_49988));
var state_50011__$1 = state_50011;
if(cljs.core.truth_(inst_49994)){
var statearr_50023_52035 = state_50011__$1;
(statearr_50023_52035[(1)] = (9));

} else {
var statearr_50024_52036 = state_50011__$1;
(statearr_50024_52036[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (3))){
var inst_50009 = (state_50011[(2)]);
var state_50011__$1 = state_50011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50011__$1,inst_50009);
} else {
if((state_val_50012 === (12))){
var state_50011__$1 = state_50011;
var statearr_50027_52038 = state_50011__$1;
(statearr_50027_52038[(2)] = null);

(statearr_50027_52038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (2))){
var state_50011__$1 = state_50011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50011__$1,(4),ch);
} else {
if((state_val_50012 === (11))){
var inst_49988 = (state_50011[(7)]);
var inst_49998 = (state_50011[(2)]);
var state_50011__$1 = state_50011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50011__$1,(8),inst_49998,inst_49988);
} else {
if((state_val_50012 === (9))){
var state_50011__$1 = state_50011;
var statearr_50028_52039 = state_50011__$1;
(statearr_50028_52039[(2)] = tc);

(statearr_50028_52039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (5))){
var inst_49991 = cljs.core.async.close_BANG_(tc);
var inst_49992 = cljs.core.async.close_BANG_(fc);
var state_50011__$1 = (function (){var statearr_50029 = state_50011;
(statearr_50029[(8)] = inst_49991);

return statearr_50029;
})();
var statearr_50030_52043 = state_50011__$1;
(statearr_50030_52043[(2)] = inst_49992);

(statearr_50030_52043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (14))){
var inst_50005 = (state_50011[(2)]);
var state_50011__$1 = state_50011;
var statearr_50031_52044 = state_50011__$1;
(statearr_50031_52044[(2)] = inst_50005);

(statearr_50031_52044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (10))){
var state_50011__$1 = state_50011;
var statearr_50032_52046 = state_50011__$1;
(statearr_50032_52046[(2)] = fc);

(statearr_50032_52046[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (8))){
var inst_50000 = (state_50011[(2)]);
var state_50011__$1 = state_50011;
if(cljs.core.truth_(inst_50000)){
var statearr_50033_52047 = state_50011__$1;
(statearr_50033_52047[(1)] = (12));

} else {
var statearr_50034_52048 = state_50011__$1;
(statearr_50034_52048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49349__auto__ = null;
var cljs$core$async$state_machine__49349__auto____0 = (function (){
var statearr_50035 = [null,null,null,null,null,null,null,null,null];
(statearr_50035[(0)] = cljs$core$async$state_machine__49349__auto__);

(statearr_50035[(1)] = (1));

return statearr_50035;
});
var cljs$core$async$state_machine__49349__auto____1 = (function (state_50011){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_50011);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e50036){var ex__49352__auto__ = e50036;
var statearr_50037_52050 = state_50011;
(statearr_50037_52050[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_50011[(4)]))){
var statearr_50038_52052 = state_50011;
(statearr_50038_52052[(1)] = cljs.core.first((state_50011[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52053 = state_50011;
state_50011 = G__52053;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$state_machine__49349__auto__ = function(state_50011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49349__auto____1.call(this,state_50011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49349__auto____0;
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49349__auto____1;
return cljs$core$async$state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_50039 = f__49451__auto__();
(statearr_50039[(6)] = c__49450__auto___52023);

return statearr_50039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__49450__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_50061){
var state_val_50062 = (state_50061[(1)]);
if((state_val_50062 === (7))){
var inst_50057 = (state_50061[(2)]);
var state_50061__$1 = state_50061;
var statearr_50063_52058 = state_50061__$1;
(statearr_50063_52058[(2)] = inst_50057);

(statearr_50063_52058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (1))){
var inst_50040 = init;
var inst_50041 = inst_50040;
var state_50061__$1 = (function (){var statearr_50064 = state_50061;
(statearr_50064[(7)] = inst_50041);

return statearr_50064;
})();
var statearr_50065_52060 = state_50061__$1;
(statearr_50065_52060[(2)] = null);

(statearr_50065_52060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (4))){
var inst_50044 = (state_50061[(8)]);
var inst_50044__$1 = (state_50061[(2)]);
var inst_50045 = (inst_50044__$1 == null);
var state_50061__$1 = (function (){var statearr_50066 = state_50061;
(statearr_50066[(8)] = inst_50044__$1);

return statearr_50066;
})();
if(cljs.core.truth_(inst_50045)){
var statearr_50067_52061 = state_50061__$1;
(statearr_50067_52061[(1)] = (5));

} else {
var statearr_50068_52062 = state_50061__$1;
(statearr_50068_52062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (6))){
var inst_50044 = (state_50061[(8)]);
var inst_50041 = (state_50061[(7)]);
var inst_50048 = (state_50061[(9)]);
var inst_50048__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50041,inst_50044) : f.call(null,inst_50041,inst_50044));
var inst_50049 = cljs.core.reduced_QMARK_(inst_50048__$1);
var state_50061__$1 = (function (){var statearr_50071 = state_50061;
(statearr_50071[(9)] = inst_50048__$1);

return statearr_50071;
})();
if(inst_50049){
var statearr_50072_52064 = state_50061__$1;
(statearr_50072_52064[(1)] = (8));

} else {
var statearr_50073_52065 = state_50061__$1;
(statearr_50073_52065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (3))){
var inst_50059 = (state_50061[(2)]);
var state_50061__$1 = state_50061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50061__$1,inst_50059);
} else {
if((state_val_50062 === (2))){
var state_50061__$1 = state_50061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50061__$1,(4),ch);
} else {
if((state_val_50062 === (9))){
var inst_50048 = (state_50061[(9)]);
var inst_50041 = inst_50048;
var state_50061__$1 = (function (){var statearr_50078 = state_50061;
(statearr_50078[(7)] = inst_50041);

return statearr_50078;
})();
var statearr_50080_52066 = state_50061__$1;
(statearr_50080_52066[(2)] = null);

(statearr_50080_52066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (5))){
var inst_50041 = (state_50061[(7)]);
var state_50061__$1 = state_50061;
var statearr_50081_52068 = state_50061__$1;
(statearr_50081_52068[(2)] = inst_50041);

(statearr_50081_52068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (10))){
var inst_50055 = (state_50061[(2)]);
var state_50061__$1 = state_50061;
var statearr_50082_52070 = state_50061__$1;
(statearr_50082_52070[(2)] = inst_50055);

(statearr_50082_52070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (8))){
var inst_50048 = (state_50061[(9)]);
var inst_50051 = cljs.core.deref(inst_50048);
var state_50061__$1 = state_50061;
var statearr_50083_52071 = state_50061__$1;
(statearr_50083_52071[(2)] = inst_50051);

(statearr_50083_52071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__49349__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49349__auto____0 = (function (){
var statearr_50084 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50084[(0)] = cljs$core$async$reduce_$_state_machine__49349__auto__);

(statearr_50084[(1)] = (1));

return statearr_50084;
});
var cljs$core$async$reduce_$_state_machine__49349__auto____1 = (function (state_50061){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_50061);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e50085){var ex__49352__auto__ = e50085;
var statearr_50086_52073 = state_50061;
(statearr_50086_52073[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_50061[(4)]))){
var statearr_50087_52074 = state_50061;
(statearr_50087_52074[(1)] = cljs.core.first((state_50061[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52075 = state_50061;
state_50061 = G__52075;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49349__auto__ = function(state_50061){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49349__auto____1.call(this,state_50061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49349__auto____0;
cljs$core$async$reduce_$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49349__auto____1;
return cljs$core$async$reduce_$_state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_50099 = f__49451__auto__();
(statearr_50099[(6)] = c__49450__auto__);

return statearr_50099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));

return c__49450__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__49450__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_50115){
var state_val_50116 = (state_50115[(1)]);
if((state_val_50116 === (1))){
var inst_50110 = cljs.core.async.reduce(f__$1,init,ch);
var state_50115__$1 = state_50115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50115__$1,(2),inst_50110);
} else {
if((state_val_50116 === (2))){
var inst_50112 = (state_50115[(2)]);
var inst_50113 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50112) : f__$1.call(null,inst_50112));
var state_50115__$1 = state_50115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50115__$1,inst_50113);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__49349__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49349__auto____0 = (function (){
var statearr_50118 = [null,null,null,null,null,null,null];
(statearr_50118[(0)] = cljs$core$async$transduce_$_state_machine__49349__auto__);

(statearr_50118[(1)] = (1));

return statearr_50118;
});
var cljs$core$async$transduce_$_state_machine__49349__auto____1 = (function (state_50115){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_50115);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e50120){var ex__49352__auto__ = e50120;
var statearr_50121_52078 = state_50115;
(statearr_50121_52078[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_50115[(4)]))){
var statearr_50122_52079 = state_50115;
(statearr_50122_52079[(1)] = cljs.core.first((state_50115[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52080 = state_50115;
state_50115 = G__52080;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49349__auto__ = function(state_50115){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49349__auto____1.call(this,state_50115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49349__auto____0;
cljs$core$async$transduce_$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49349__auto____1;
return cljs$core$async$transduce_$_state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_50123 = f__49451__auto__();
(statearr_50123[(6)] = c__49450__auto__);

return statearr_50123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));

return c__49450__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__50125 = arguments.length;
switch (G__50125) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__49450__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_50160){
var state_val_50161 = (state_50160[(1)]);
if((state_val_50161 === (7))){
var inst_50139 = (state_50160[(2)]);
var state_50160__$1 = state_50160;
var statearr_50166_52083 = state_50160__$1;
(statearr_50166_52083[(2)] = inst_50139);

(statearr_50166_52083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50161 === (1))){
var inst_50130 = cljs.core.seq(coll);
var inst_50132 = inst_50130;
var state_50160__$1 = (function (){var statearr_50167 = state_50160;
(statearr_50167[(7)] = inst_50132);

return statearr_50167;
})();
var statearr_50168_52084 = state_50160__$1;
(statearr_50168_52084[(2)] = null);

(statearr_50168_52084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50161 === (4))){
var inst_50132 = (state_50160[(7)]);
var inst_50137 = cljs.core.first(inst_50132);
var state_50160__$1 = state_50160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50160__$1,(7),ch,inst_50137);
} else {
if((state_val_50161 === (13))){
var inst_50154 = (state_50160[(2)]);
var state_50160__$1 = state_50160;
var statearr_50169_52089 = state_50160__$1;
(statearr_50169_52089[(2)] = inst_50154);

(statearr_50169_52089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50161 === (6))){
var inst_50142 = (state_50160[(2)]);
var state_50160__$1 = state_50160;
if(cljs.core.truth_(inst_50142)){
var statearr_50172_52091 = state_50160__$1;
(statearr_50172_52091[(1)] = (8));

} else {
var statearr_50173_52092 = state_50160__$1;
(statearr_50173_52092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50161 === (3))){
var inst_50158 = (state_50160[(2)]);
var state_50160__$1 = state_50160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50160__$1,inst_50158);
} else {
if((state_val_50161 === (12))){
var state_50160__$1 = state_50160;
var statearr_50174_52093 = state_50160__$1;
(statearr_50174_52093[(2)] = null);

(statearr_50174_52093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50161 === (2))){
var inst_50132 = (state_50160[(7)]);
var state_50160__$1 = state_50160;
if(cljs.core.truth_(inst_50132)){
var statearr_50178_52095 = state_50160__$1;
(statearr_50178_52095[(1)] = (4));

} else {
var statearr_50179_52096 = state_50160__$1;
(statearr_50179_52096[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50161 === (11))){
var inst_50151 = cljs.core.async.close_BANG_(ch);
var state_50160__$1 = state_50160;
var statearr_50180_52097 = state_50160__$1;
(statearr_50180_52097[(2)] = inst_50151);

(statearr_50180_52097[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50161 === (9))){
var state_50160__$1 = state_50160;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50181_52098 = state_50160__$1;
(statearr_50181_52098[(1)] = (11));

} else {
var statearr_50182_52099 = state_50160__$1;
(statearr_50182_52099[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50161 === (5))){
var inst_50132 = (state_50160[(7)]);
var state_50160__$1 = state_50160;
var statearr_50183_52100 = state_50160__$1;
(statearr_50183_52100[(2)] = inst_50132);

(statearr_50183_52100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50161 === (10))){
var inst_50156 = (state_50160[(2)]);
var state_50160__$1 = state_50160;
var statearr_50184_52101 = state_50160__$1;
(statearr_50184_52101[(2)] = inst_50156);

(statearr_50184_52101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50161 === (8))){
var inst_50132 = (state_50160[(7)]);
var inst_50144 = cljs.core.next(inst_50132);
var inst_50132__$1 = inst_50144;
var state_50160__$1 = (function (){var statearr_50185 = state_50160;
(statearr_50185[(7)] = inst_50132__$1);

return statearr_50185;
})();
var statearr_50187_52102 = state_50160__$1;
(statearr_50187_52102[(2)] = null);

(statearr_50187_52102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49349__auto__ = null;
var cljs$core$async$state_machine__49349__auto____0 = (function (){
var statearr_50190 = [null,null,null,null,null,null,null,null];
(statearr_50190[(0)] = cljs$core$async$state_machine__49349__auto__);

(statearr_50190[(1)] = (1));

return statearr_50190;
});
var cljs$core$async$state_machine__49349__auto____1 = (function (state_50160){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_50160);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e50191){var ex__49352__auto__ = e50191;
var statearr_50192_52104 = state_50160;
(statearr_50192_52104[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_50160[(4)]))){
var statearr_50193_52105 = state_50160;
(statearr_50193_52105[(1)] = cljs.core.first((state_50160[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52106 = state_50160;
state_50160 = G__52106;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$state_machine__49349__auto__ = function(state_50160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49349__auto____1.call(this,state_50160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49349__auto____0;
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49349__auto____1;
return cljs$core$async$state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_50194 = f__49451__auto__();
(statearr_50194[(6)] = c__49450__auto__);

return statearr_50194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));

return c__49450__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__50200 = arguments.length;
switch (G__50200) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_52113 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_52113(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52115 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_52115(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52116 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_52116(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52118 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_52118(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50240 = (function (ch,cs,meta50241){
this.ch = ch;
this.cs = cs;
this.meta50241 = meta50241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50242,meta50241__$1){
var self__ = this;
var _50242__$1 = this;
return (new cljs.core.async.t_cljs$core$async50240(self__.ch,self__.cs,meta50241__$1));
}));

(cljs.core.async.t_cljs$core$async50240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50242){
var self__ = this;
var _50242__$1 = this;
return self__.meta50241;
}));

(cljs.core.async.t_cljs$core$async50240.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50240.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50240.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50240.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50240.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50240.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50241","meta50241",-1220136861,null)], null);
}));

(cljs.core.async.t_cljs$core$async50240.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50240");

(cljs.core.async.t_cljs$core$async50240.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50240");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50240.
 */
cljs.core.async.__GT_t_cljs$core$async50240 = (function cljs$core$async$mult_$___GT_t_cljs$core$async50240(ch__$1,cs__$1,meta50241){
return (new cljs.core.async.t_cljs$core$async50240(ch__$1,cs__$1,meta50241));
});

}

return (new cljs.core.async.t_cljs$core$async50240(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__49450__auto___52123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_50436){
var state_val_50437 = (state_50436[(1)]);
if((state_val_50437 === (7))){
var inst_50429 = (state_50436[(2)]);
var state_50436__$1 = state_50436;
var statearr_50440_52124 = state_50436__$1;
(statearr_50440_52124[(2)] = inst_50429);

(statearr_50440_52124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (20))){
var inst_50298 = (state_50436[(7)]);
var inst_50339 = cljs.core.first(inst_50298);
var inst_50340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50339,(0),null);
var inst_50341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50339,(1),null);
var state_50436__$1 = (function (){var statearr_50441 = state_50436;
(statearr_50441[(8)] = inst_50340);

return statearr_50441;
})();
if(cljs.core.truth_(inst_50341)){
var statearr_50442_52126 = state_50436__$1;
(statearr_50442_52126[(1)] = (22));

} else {
var statearr_50447_52127 = state_50436__$1;
(statearr_50447_52127[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (27))){
var inst_50371 = (state_50436[(9)]);
var inst_50376 = (state_50436[(10)]);
var inst_50369 = (state_50436[(11)]);
var inst_50256 = (state_50436[(12)]);
var inst_50376__$1 = cljs.core._nth(inst_50369,inst_50371);
var inst_50377 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50376__$1,inst_50256,done);
var state_50436__$1 = (function (){var statearr_50455 = state_50436;
(statearr_50455[(10)] = inst_50376__$1);

return statearr_50455;
})();
if(cljs.core.truth_(inst_50377)){
var statearr_50456_52128 = state_50436__$1;
(statearr_50456_52128[(1)] = (30));

} else {
var statearr_50457_52131 = state_50436__$1;
(statearr_50457_52131[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (1))){
var state_50436__$1 = state_50436;
var statearr_50458_52133 = state_50436__$1;
(statearr_50458_52133[(2)] = null);

(statearr_50458_52133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (24))){
var inst_50298 = (state_50436[(7)]);
var inst_50346 = (state_50436[(2)]);
var inst_50347 = cljs.core.next(inst_50298);
var inst_50266 = inst_50347;
var inst_50267 = null;
var inst_50268 = (0);
var inst_50269 = (0);
var state_50436__$1 = (function (){var statearr_50459 = state_50436;
(statearr_50459[(13)] = inst_50346);

(statearr_50459[(14)] = inst_50267);

(statearr_50459[(15)] = inst_50266);

(statearr_50459[(16)] = inst_50268);

(statearr_50459[(17)] = inst_50269);

return statearr_50459;
})();
var statearr_50460_52135 = state_50436__$1;
(statearr_50460_52135[(2)] = null);

(statearr_50460_52135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (39))){
var state_50436__$1 = state_50436;
var statearr_50464_52136 = state_50436__$1;
(statearr_50464_52136[(2)] = null);

(statearr_50464_52136[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (4))){
var inst_50256 = (state_50436[(12)]);
var inst_50256__$1 = (state_50436[(2)]);
var inst_50257 = (inst_50256__$1 == null);
var state_50436__$1 = (function (){var statearr_50465 = state_50436;
(statearr_50465[(12)] = inst_50256__$1);

return statearr_50465;
})();
if(cljs.core.truth_(inst_50257)){
var statearr_50466_52140 = state_50436__$1;
(statearr_50466_52140[(1)] = (5));

} else {
var statearr_50467_52141 = state_50436__$1;
(statearr_50467_52141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (15))){
var inst_50267 = (state_50436[(14)]);
var inst_50266 = (state_50436[(15)]);
var inst_50268 = (state_50436[(16)]);
var inst_50269 = (state_50436[(17)]);
var inst_50287 = (state_50436[(2)]);
var inst_50295 = (inst_50269 + (1));
var tmp50461 = inst_50267;
var tmp50462 = inst_50266;
var tmp50463 = inst_50268;
var inst_50266__$1 = tmp50462;
var inst_50267__$1 = tmp50461;
var inst_50268__$1 = tmp50463;
var inst_50269__$1 = inst_50295;
var state_50436__$1 = (function (){var statearr_50468 = state_50436;
(statearr_50468[(18)] = inst_50287);

(statearr_50468[(14)] = inst_50267__$1);

(statearr_50468[(15)] = inst_50266__$1);

(statearr_50468[(16)] = inst_50268__$1);

(statearr_50468[(17)] = inst_50269__$1);

return statearr_50468;
})();
var statearr_50469_52143 = state_50436__$1;
(statearr_50469_52143[(2)] = null);

(statearr_50469_52143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (21))){
var inst_50350 = (state_50436[(2)]);
var state_50436__$1 = state_50436;
var statearr_50473_52146 = state_50436__$1;
(statearr_50473_52146[(2)] = inst_50350);

(statearr_50473_52146[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (31))){
var inst_50376 = (state_50436[(10)]);
var inst_50380 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50376);
var state_50436__$1 = state_50436;
var statearr_50474_52147 = state_50436__$1;
(statearr_50474_52147[(2)] = inst_50380);

(statearr_50474_52147[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (32))){
var inst_50370 = (state_50436[(19)]);
var inst_50371 = (state_50436[(9)]);
var inst_50369 = (state_50436[(11)]);
var inst_50368 = (state_50436[(20)]);
var inst_50382 = (state_50436[(2)]);
var inst_50387 = (inst_50371 + (1));
var tmp50470 = inst_50370;
var tmp50471 = inst_50369;
var tmp50472 = inst_50368;
var inst_50368__$1 = tmp50472;
var inst_50369__$1 = tmp50471;
var inst_50370__$1 = tmp50470;
var inst_50371__$1 = inst_50387;
var state_50436__$1 = (function (){var statearr_50475 = state_50436;
(statearr_50475[(19)] = inst_50370__$1);

(statearr_50475[(9)] = inst_50371__$1);

(statearr_50475[(21)] = inst_50382);

(statearr_50475[(11)] = inst_50369__$1);

(statearr_50475[(20)] = inst_50368__$1);

return statearr_50475;
})();
var statearr_50476_52148 = state_50436__$1;
(statearr_50476_52148[(2)] = null);

(statearr_50476_52148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (40))){
var inst_50402 = (state_50436[(22)]);
var inst_50406 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50402);
var state_50436__$1 = state_50436;
var statearr_50477_52149 = state_50436__$1;
(statearr_50477_52149[(2)] = inst_50406);

(statearr_50477_52149[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (33))){
var inst_50390 = (state_50436[(23)]);
var inst_50395 = cljs.core.chunked_seq_QMARK_(inst_50390);
var state_50436__$1 = state_50436;
if(inst_50395){
var statearr_50478_52151 = state_50436__$1;
(statearr_50478_52151[(1)] = (36));

} else {
var statearr_50479_52152 = state_50436__$1;
(statearr_50479_52152[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (13))){
var inst_50281 = (state_50436[(24)]);
var inst_50284 = cljs.core.async.close_BANG_(inst_50281);
var state_50436__$1 = state_50436;
var statearr_50480_52154 = state_50436__$1;
(statearr_50480_52154[(2)] = inst_50284);

(statearr_50480_52154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (22))){
var inst_50340 = (state_50436[(8)]);
var inst_50343 = cljs.core.async.close_BANG_(inst_50340);
var state_50436__$1 = state_50436;
var statearr_50481_52156 = state_50436__$1;
(statearr_50481_52156[(2)] = inst_50343);

(statearr_50481_52156[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (36))){
var inst_50390 = (state_50436[(23)]);
var inst_50397 = cljs.core.chunk_first(inst_50390);
var inst_50398 = cljs.core.chunk_rest(inst_50390);
var inst_50399 = cljs.core.count(inst_50397);
var inst_50368 = inst_50398;
var inst_50369 = inst_50397;
var inst_50370 = inst_50399;
var inst_50371 = (0);
var state_50436__$1 = (function (){var statearr_50482 = state_50436;
(statearr_50482[(19)] = inst_50370);

(statearr_50482[(9)] = inst_50371);

(statearr_50482[(11)] = inst_50369);

(statearr_50482[(20)] = inst_50368);

return statearr_50482;
})();
var statearr_50483_52157 = state_50436__$1;
(statearr_50483_52157[(2)] = null);

(statearr_50483_52157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (41))){
var inst_50390 = (state_50436[(23)]);
var inst_50408 = (state_50436[(2)]);
var inst_50409 = cljs.core.next(inst_50390);
var inst_50368 = inst_50409;
var inst_50369 = null;
var inst_50370 = (0);
var inst_50371 = (0);
var state_50436__$1 = (function (){var statearr_50484 = state_50436;
(statearr_50484[(19)] = inst_50370);

(statearr_50484[(25)] = inst_50408);

(statearr_50484[(9)] = inst_50371);

(statearr_50484[(11)] = inst_50369);

(statearr_50484[(20)] = inst_50368);

return statearr_50484;
})();
var statearr_50485_52160 = state_50436__$1;
(statearr_50485_52160[(2)] = null);

(statearr_50485_52160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (43))){
var state_50436__$1 = state_50436;
var statearr_50486_52161 = state_50436__$1;
(statearr_50486_52161[(2)] = null);

(statearr_50486_52161[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (29))){
var inst_50417 = (state_50436[(2)]);
var state_50436__$1 = state_50436;
var statearr_50487_52162 = state_50436__$1;
(statearr_50487_52162[(2)] = inst_50417);

(statearr_50487_52162[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (44))){
var inst_50426 = (state_50436[(2)]);
var state_50436__$1 = (function (){var statearr_50488 = state_50436;
(statearr_50488[(26)] = inst_50426);

return statearr_50488;
})();
var statearr_50489_52163 = state_50436__$1;
(statearr_50489_52163[(2)] = null);

(statearr_50489_52163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (6))){
var inst_50360 = (state_50436[(27)]);
var inst_50359 = cljs.core.deref(cs);
var inst_50360__$1 = cljs.core.keys(inst_50359);
var inst_50361 = cljs.core.count(inst_50360__$1);
var inst_50362 = cljs.core.reset_BANG_(dctr,inst_50361);
var inst_50367 = cljs.core.seq(inst_50360__$1);
var inst_50368 = inst_50367;
var inst_50369 = null;
var inst_50370 = (0);
var inst_50371 = (0);
var state_50436__$1 = (function (){var statearr_50490 = state_50436;
(statearr_50490[(28)] = inst_50362);

(statearr_50490[(19)] = inst_50370);

(statearr_50490[(9)] = inst_50371);

(statearr_50490[(27)] = inst_50360__$1);

(statearr_50490[(11)] = inst_50369);

(statearr_50490[(20)] = inst_50368);

return statearr_50490;
})();
var statearr_50491_52165 = state_50436__$1;
(statearr_50491_52165[(2)] = null);

(statearr_50491_52165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (28))){
var inst_50390 = (state_50436[(23)]);
var inst_50368 = (state_50436[(20)]);
var inst_50390__$1 = cljs.core.seq(inst_50368);
var state_50436__$1 = (function (){var statearr_50492 = state_50436;
(statearr_50492[(23)] = inst_50390__$1);

return statearr_50492;
})();
if(inst_50390__$1){
var statearr_50493_52166 = state_50436__$1;
(statearr_50493_52166[(1)] = (33));

} else {
var statearr_50494_52167 = state_50436__$1;
(statearr_50494_52167[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (25))){
var inst_50370 = (state_50436[(19)]);
var inst_50371 = (state_50436[(9)]);
var inst_50373 = (inst_50371 < inst_50370);
var inst_50374 = inst_50373;
var state_50436__$1 = state_50436;
if(cljs.core.truth_(inst_50374)){
var statearr_50495_52168 = state_50436__$1;
(statearr_50495_52168[(1)] = (27));

} else {
var statearr_50496_52169 = state_50436__$1;
(statearr_50496_52169[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (34))){
var state_50436__$1 = state_50436;
var statearr_50497_52171 = state_50436__$1;
(statearr_50497_52171[(2)] = null);

(statearr_50497_52171[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (17))){
var state_50436__$1 = state_50436;
var statearr_50498_52173 = state_50436__$1;
(statearr_50498_52173[(2)] = null);

(statearr_50498_52173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (3))){
var inst_50431 = (state_50436[(2)]);
var state_50436__$1 = state_50436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50436__$1,inst_50431);
} else {
if((state_val_50437 === (12))){
var inst_50355 = (state_50436[(2)]);
var state_50436__$1 = state_50436;
var statearr_50499_52175 = state_50436__$1;
(statearr_50499_52175[(2)] = inst_50355);

(statearr_50499_52175[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (2))){
var state_50436__$1 = state_50436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50436__$1,(4),ch);
} else {
if((state_val_50437 === (23))){
var state_50436__$1 = state_50436;
var statearr_50501_52177 = state_50436__$1;
(statearr_50501_52177[(2)] = null);

(statearr_50501_52177[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (35))){
var inst_50415 = (state_50436[(2)]);
var state_50436__$1 = state_50436;
var statearr_50502_52178 = state_50436__$1;
(statearr_50502_52178[(2)] = inst_50415);

(statearr_50502_52178[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (19))){
var inst_50298 = (state_50436[(7)]);
var inst_50326 = cljs.core.chunk_first(inst_50298);
var inst_50328 = cljs.core.chunk_rest(inst_50298);
var inst_50329 = cljs.core.count(inst_50326);
var inst_50266 = inst_50328;
var inst_50267 = inst_50326;
var inst_50268 = inst_50329;
var inst_50269 = (0);
var state_50436__$1 = (function (){var statearr_50503 = state_50436;
(statearr_50503[(14)] = inst_50267);

(statearr_50503[(15)] = inst_50266);

(statearr_50503[(16)] = inst_50268);

(statearr_50503[(17)] = inst_50269);

return statearr_50503;
})();
var statearr_50504_52180 = state_50436__$1;
(statearr_50504_52180[(2)] = null);

(statearr_50504_52180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (11))){
var inst_50266 = (state_50436[(15)]);
var inst_50298 = (state_50436[(7)]);
var inst_50298__$1 = cljs.core.seq(inst_50266);
var state_50436__$1 = (function (){var statearr_50506 = state_50436;
(statearr_50506[(7)] = inst_50298__$1);

return statearr_50506;
})();
if(inst_50298__$1){
var statearr_50507_52181 = state_50436__$1;
(statearr_50507_52181[(1)] = (16));

} else {
var statearr_50508_52182 = state_50436__$1;
(statearr_50508_52182[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (9))){
var inst_50357 = (state_50436[(2)]);
var state_50436__$1 = state_50436;
var statearr_50509_52183 = state_50436__$1;
(statearr_50509_52183[(2)] = inst_50357);

(statearr_50509_52183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (5))){
var inst_50264 = cljs.core.deref(cs);
var inst_50265 = cljs.core.seq(inst_50264);
var inst_50266 = inst_50265;
var inst_50267 = null;
var inst_50268 = (0);
var inst_50269 = (0);
var state_50436__$1 = (function (){var statearr_50510 = state_50436;
(statearr_50510[(14)] = inst_50267);

(statearr_50510[(15)] = inst_50266);

(statearr_50510[(16)] = inst_50268);

(statearr_50510[(17)] = inst_50269);

return statearr_50510;
})();
var statearr_50511_52185 = state_50436__$1;
(statearr_50511_52185[(2)] = null);

(statearr_50511_52185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (14))){
var state_50436__$1 = state_50436;
var statearr_50512_52188 = state_50436__$1;
(statearr_50512_52188[(2)] = null);

(statearr_50512_52188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (45))){
var inst_50423 = (state_50436[(2)]);
var state_50436__$1 = state_50436;
var statearr_50513_52189 = state_50436__$1;
(statearr_50513_52189[(2)] = inst_50423);

(statearr_50513_52189[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (26))){
var inst_50360 = (state_50436[(27)]);
var inst_50419 = (state_50436[(2)]);
var inst_50420 = cljs.core.seq(inst_50360);
var state_50436__$1 = (function (){var statearr_50514 = state_50436;
(statearr_50514[(29)] = inst_50419);

return statearr_50514;
})();
if(inst_50420){
var statearr_50515_52190 = state_50436__$1;
(statearr_50515_52190[(1)] = (42));

} else {
var statearr_50516_52193 = state_50436__$1;
(statearr_50516_52193[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (16))){
var inst_50298 = (state_50436[(7)]);
var inst_50300 = cljs.core.chunked_seq_QMARK_(inst_50298);
var state_50436__$1 = state_50436;
if(inst_50300){
var statearr_50517_52195 = state_50436__$1;
(statearr_50517_52195[(1)] = (19));

} else {
var statearr_50518_52196 = state_50436__$1;
(statearr_50518_52196[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (38))){
var inst_50412 = (state_50436[(2)]);
var state_50436__$1 = state_50436;
var statearr_50519_52197 = state_50436__$1;
(statearr_50519_52197[(2)] = inst_50412);

(statearr_50519_52197[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (30))){
var state_50436__$1 = state_50436;
var statearr_50520_52198 = state_50436__$1;
(statearr_50520_52198[(2)] = null);

(statearr_50520_52198[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (10))){
var inst_50267 = (state_50436[(14)]);
var inst_50269 = (state_50436[(17)]);
var inst_50277 = cljs.core._nth(inst_50267,inst_50269);
var inst_50281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50277,(0),null);
var inst_50282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50277,(1),null);
var state_50436__$1 = (function (){var statearr_50521 = state_50436;
(statearr_50521[(24)] = inst_50281);

return statearr_50521;
})();
if(cljs.core.truth_(inst_50282)){
var statearr_50522_52199 = state_50436__$1;
(statearr_50522_52199[(1)] = (13));

} else {
var statearr_50523_52200 = state_50436__$1;
(statearr_50523_52200[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (18))){
var inst_50353 = (state_50436[(2)]);
var state_50436__$1 = state_50436;
var statearr_50524_52201 = state_50436__$1;
(statearr_50524_52201[(2)] = inst_50353);

(statearr_50524_52201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (42))){
var state_50436__$1 = state_50436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50436__$1,(45),dchan);
} else {
if((state_val_50437 === (37))){
var inst_50390 = (state_50436[(23)]);
var inst_50402 = (state_50436[(22)]);
var inst_50256 = (state_50436[(12)]);
var inst_50402__$1 = cljs.core.first(inst_50390);
var inst_50403 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50402__$1,inst_50256,done);
var state_50436__$1 = (function (){var statearr_50525 = state_50436;
(statearr_50525[(22)] = inst_50402__$1);

return statearr_50525;
})();
if(cljs.core.truth_(inst_50403)){
var statearr_50526_52202 = state_50436__$1;
(statearr_50526_52202[(1)] = (39));

} else {
var statearr_50527_52203 = state_50436__$1;
(statearr_50527_52203[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (8))){
var inst_50268 = (state_50436[(16)]);
var inst_50269 = (state_50436[(17)]);
var inst_50271 = (inst_50269 < inst_50268);
var inst_50272 = inst_50271;
var state_50436__$1 = state_50436;
if(cljs.core.truth_(inst_50272)){
var statearr_50528_52204 = state_50436__$1;
(statearr_50528_52204[(1)] = (10));

} else {
var statearr_50529_52205 = state_50436__$1;
(statearr_50529_52205[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__49349__auto__ = null;
var cljs$core$async$mult_$_state_machine__49349__auto____0 = (function (){
var statearr_50530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50530[(0)] = cljs$core$async$mult_$_state_machine__49349__auto__);

(statearr_50530[(1)] = (1));

return statearr_50530;
});
var cljs$core$async$mult_$_state_machine__49349__auto____1 = (function (state_50436){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_50436);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e50531){var ex__49352__auto__ = e50531;
var statearr_50532_52209 = state_50436;
(statearr_50532_52209[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_50436[(4)]))){
var statearr_50534_52210 = state_50436;
(statearr_50534_52210[(1)] = cljs.core.first((state_50436[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52211 = state_50436;
state_50436 = G__52211;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49349__auto__ = function(state_50436){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49349__auto____1.call(this,state_50436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49349__auto____0;
cljs$core$async$mult_$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49349__auto____1;
return cljs$core$async$mult_$_state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_50535 = f__49451__auto__();
(statearr_50535[(6)] = c__49450__auto___52123);

return statearr_50535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__50543 = arguments.length;
switch (G__50543) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_52218 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_52218(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_52219 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_52219(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_52220 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_52220(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_52221 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_52221(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_52222 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_52222(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___52224 = arguments.length;
var i__4830__auto___52225 = (0);
while(true){
if((i__4830__auto___52225 < len__4829__auto___52224)){
args__4835__auto__.push((arguments[i__4830__auto___52225]));

var G__52226 = (i__4830__auto___52225 + (1));
i__4830__auto___52225 = G__52226;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50562){
var map__50563 = p__50562;
var map__50563__$1 = cljs.core.__destructure_map(map__50563);
var opts = map__50563__$1;
var statearr_50564_52227 = state;
(statearr_50564_52227[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_50565_52228 = state;
(statearr_50565_52228[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_50569_52229 = state;
(statearr_50569_52229[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50558){
var G__50559 = cljs.core.first(seq50558);
var seq50558__$1 = cljs.core.next(seq50558);
var G__50560 = cljs.core.first(seq50558__$1);
var seq50558__$2 = cljs.core.next(seq50558__$1);
var G__50561 = cljs.core.first(seq50558__$2);
var seq50558__$3 = cljs.core.next(seq50558__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50559,G__50560,G__50561,seq50558__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50573 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50574){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta50574 = meta50574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50575,meta50574__$1){
var self__ = this;
var _50575__$1 = this;
return (new cljs.core.async.t_cljs$core$async50573(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50574__$1));
}));

(cljs.core.async.t_cljs$core$async50573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50575){
var self__ = this;
var _50575__$1 = this;
return self__.meta50574;
}));

(cljs.core.async.t_cljs$core$async50573.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50573.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async50573.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50573.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50573.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50573.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50573.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50573.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta50574","meta50574",12135487,null)], null);
}));

(cljs.core.async.t_cljs$core$async50573.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50573");

(cljs.core.async.t_cljs$core$async50573.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50573");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50573.
 */
cljs.core.async.__GT_t_cljs$core$async50573 = (function cljs$core$async$mix_$___GT_t_cljs$core$async50573(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50574){
return (new cljs.core.async.t_cljs$core$async50573(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50574));
});

}

return (new cljs.core.async.t_cljs$core$async50573(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49450__auto___52246 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_50652){
var state_val_50654 = (state_50652[(1)]);
if((state_val_50654 === (7))){
var inst_50610 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
if(cljs.core.truth_(inst_50610)){
var statearr_50657_52247 = state_50652__$1;
(statearr_50657_52247[(1)] = (8));

} else {
var statearr_50658_52248 = state_50652__$1;
(statearr_50658_52248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (20))){
var inst_50603 = (state_50652[(7)]);
var state_50652__$1 = state_50652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50652__$1,(23),out,inst_50603);
} else {
if((state_val_50654 === (1))){
var inst_50586 = calc_state();
var inst_50587 = cljs.core.__destructure_map(inst_50586);
var inst_50588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50587,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50587,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50587,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_50591 = inst_50586;
var state_50652__$1 = (function (){var statearr_50660 = state_50652;
(statearr_50660[(8)] = inst_50590);

(statearr_50660[(9)] = inst_50589);

(statearr_50660[(10)] = inst_50591);

(statearr_50660[(11)] = inst_50588);

return statearr_50660;
})();
var statearr_50661_52252 = state_50652__$1;
(statearr_50661_52252[(2)] = null);

(statearr_50661_52252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (24))){
var inst_50594 = (state_50652[(12)]);
var inst_50591 = inst_50594;
var state_50652__$1 = (function (){var statearr_50663 = state_50652;
(statearr_50663[(10)] = inst_50591);

return statearr_50663;
})();
var statearr_50664_52253 = state_50652__$1;
(statearr_50664_52253[(2)] = null);

(statearr_50664_52253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (4))){
var inst_50603 = (state_50652[(7)]);
var inst_50605 = (state_50652[(13)]);
var inst_50602 = (state_50652[(2)]);
var inst_50603__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50602,(0),null);
var inst_50604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50602,(1),null);
var inst_50605__$1 = (inst_50603__$1 == null);
var state_50652__$1 = (function (){var statearr_50665 = state_50652;
(statearr_50665[(14)] = inst_50604);

(statearr_50665[(7)] = inst_50603__$1);

(statearr_50665[(13)] = inst_50605__$1);

return statearr_50665;
})();
if(cljs.core.truth_(inst_50605__$1)){
var statearr_50666_52254 = state_50652__$1;
(statearr_50666_52254[(1)] = (5));

} else {
var statearr_50667_52255 = state_50652__$1;
(statearr_50667_52255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (15))){
var inst_50624 = (state_50652[(15)]);
var inst_50595 = (state_50652[(16)]);
var inst_50624__$1 = cljs.core.empty_QMARK_(inst_50595);
var state_50652__$1 = (function (){var statearr_50669 = state_50652;
(statearr_50669[(15)] = inst_50624__$1);

return statearr_50669;
})();
if(inst_50624__$1){
var statearr_50670_52257 = state_50652__$1;
(statearr_50670_52257[(1)] = (17));

} else {
var statearr_50671_52259 = state_50652__$1;
(statearr_50671_52259[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (21))){
var inst_50594 = (state_50652[(12)]);
var inst_50591 = inst_50594;
var state_50652__$1 = (function (){var statearr_50672 = state_50652;
(statearr_50672[(10)] = inst_50591);

return statearr_50672;
})();
var statearr_50673_52262 = state_50652__$1;
(statearr_50673_52262[(2)] = null);

(statearr_50673_52262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (13))){
var inst_50617 = (state_50652[(2)]);
var inst_50618 = calc_state();
var inst_50591 = inst_50618;
var state_50652__$1 = (function (){var statearr_50674 = state_50652;
(statearr_50674[(10)] = inst_50591);

(statearr_50674[(17)] = inst_50617);

return statearr_50674;
})();
var statearr_50675_52264 = state_50652__$1;
(statearr_50675_52264[(2)] = null);

(statearr_50675_52264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (22))){
var inst_50644 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
var statearr_50677_52266 = state_50652__$1;
(statearr_50677_52266[(2)] = inst_50644);

(statearr_50677_52266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (6))){
var inst_50604 = (state_50652[(14)]);
var inst_50608 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50604,change);
var state_50652__$1 = state_50652;
var statearr_50678_52268 = state_50652__$1;
(statearr_50678_52268[(2)] = inst_50608);

(statearr_50678_52268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (25))){
var state_50652__$1 = state_50652;
var statearr_50679_52269 = state_50652__$1;
(statearr_50679_52269[(2)] = null);

(statearr_50679_52269[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (17))){
var inst_50604 = (state_50652[(14)]);
var inst_50596 = (state_50652[(18)]);
var inst_50626 = (inst_50596.cljs$core$IFn$_invoke$arity$1 ? inst_50596.cljs$core$IFn$_invoke$arity$1(inst_50604) : inst_50596.call(null,inst_50604));
var inst_50627 = cljs.core.not(inst_50626);
var state_50652__$1 = state_50652;
var statearr_50680_52270 = state_50652__$1;
(statearr_50680_52270[(2)] = inst_50627);

(statearr_50680_52270[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (3))){
var inst_50648 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50652__$1,inst_50648);
} else {
if((state_val_50654 === (12))){
var state_50652__$1 = state_50652;
var statearr_50681_52271 = state_50652__$1;
(statearr_50681_52271[(2)] = null);

(statearr_50681_52271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (2))){
var inst_50591 = (state_50652[(10)]);
var inst_50594 = (state_50652[(12)]);
var inst_50594__$1 = cljs.core.__destructure_map(inst_50591);
var inst_50595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50594__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50594__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50594__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_50652__$1 = (function (){var statearr_50682 = state_50652;
(statearr_50682[(12)] = inst_50594__$1);

(statearr_50682[(16)] = inst_50595);

(statearr_50682[(18)] = inst_50596);

return statearr_50682;
})();
return cljs.core.async.ioc_alts_BANG_(state_50652__$1,(4),inst_50597);
} else {
if((state_val_50654 === (23))){
var inst_50635 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
if(cljs.core.truth_(inst_50635)){
var statearr_50687_52272 = state_50652__$1;
(statearr_50687_52272[(1)] = (24));

} else {
var statearr_50688_52273 = state_50652__$1;
(statearr_50688_52273[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (19))){
var inst_50630 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
var statearr_50691_52274 = state_50652__$1;
(statearr_50691_52274[(2)] = inst_50630);

(statearr_50691_52274[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (11))){
var inst_50604 = (state_50652[(14)]);
var inst_50614 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_50604);
var state_50652__$1 = state_50652;
var statearr_50692_52276 = state_50652__$1;
(statearr_50692_52276[(2)] = inst_50614);

(statearr_50692_52276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (9))){
var inst_50604 = (state_50652[(14)]);
var inst_50621 = (state_50652[(19)]);
var inst_50595 = (state_50652[(16)]);
var inst_50621__$1 = (inst_50595.cljs$core$IFn$_invoke$arity$1 ? inst_50595.cljs$core$IFn$_invoke$arity$1(inst_50604) : inst_50595.call(null,inst_50604));
var state_50652__$1 = (function (){var statearr_50693 = state_50652;
(statearr_50693[(19)] = inst_50621__$1);

return statearr_50693;
})();
if(cljs.core.truth_(inst_50621__$1)){
var statearr_50694_52279 = state_50652__$1;
(statearr_50694_52279[(1)] = (14));

} else {
var statearr_50695_52281 = state_50652__$1;
(statearr_50695_52281[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (5))){
var inst_50605 = (state_50652[(13)]);
var state_50652__$1 = state_50652;
var statearr_50699_52285 = state_50652__$1;
(statearr_50699_52285[(2)] = inst_50605);

(statearr_50699_52285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (14))){
var inst_50621 = (state_50652[(19)]);
var state_50652__$1 = state_50652;
var statearr_50700_52288 = state_50652__$1;
(statearr_50700_52288[(2)] = inst_50621);

(statearr_50700_52288[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (26))){
var inst_50640 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
var statearr_50708_52290 = state_50652__$1;
(statearr_50708_52290[(2)] = inst_50640);

(statearr_50708_52290[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (16))){
var inst_50632 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
if(cljs.core.truth_(inst_50632)){
var statearr_50712_52291 = state_50652__$1;
(statearr_50712_52291[(1)] = (20));

} else {
var statearr_50713_52292 = state_50652__$1;
(statearr_50713_52292[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (10))){
var inst_50646 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
var statearr_50714_52293 = state_50652__$1;
(statearr_50714_52293[(2)] = inst_50646);

(statearr_50714_52293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (18))){
var inst_50624 = (state_50652[(15)]);
var state_50652__$1 = state_50652;
var statearr_50715_52294 = state_50652__$1;
(statearr_50715_52294[(2)] = inst_50624);

(statearr_50715_52294[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (8))){
var inst_50603 = (state_50652[(7)]);
var inst_50612 = (inst_50603 == null);
var state_50652__$1 = state_50652;
if(cljs.core.truth_(inst_50612)){
var statearr_50716_52298 = state_50652__$1;
(statearr_50716_52298[(1)] = (11));

} else {
var statearr_50717_52299 = state_50652__$1;
(statearr_50717_52299[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__49349__auto__ = null;
var cljs$core$async$mix_$_state_machine__49349__auto____0 = (function (){
var statearr_50726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50726[(0)] = cljs$core$async$mix_$_state_machine__49349__auto__);

(statearr_50726[(1)] = (1));

return statearr_50726;
});
var cljs$core$async$mix_$_state_machine__49349__auto____1 = (function (state_50652){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_50652);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e50727){var ex__49352__auto__ = e50727;
var statearr_50731_52303 = state_50652;
(statearr_50731_52303[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_50652[(4)]))){
var statearr_50732_52304 = state_50652;
(statearr_50732_52304[(1)] = cljs.core.first((state_50652[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52305 = state_50652;
state_50652 = G__52305;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49349__auto__ = function(state_50652){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49349__auto____1.call(this,state_50652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49349__auto____0;
cljs$core$async$mix_$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49349__auto____1;
return cljs$core$async$mix_$_state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_50733 = f__49451__auto__();
(statearr_50733[(6)] = c__49450__auto___52246);

return statearr_50733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_52310 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_52310(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_52311 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_52311(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_52312 = (function() {
var G__52313 = null;
var G__52313__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__52313__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__52313 = function(p,v){
switch(arguments.length){
case 1:
return G__52313__1.call(this,p);
case 2:
return G__52313__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52313.cljs$core$IFn$_invoke$arity$1 = G__52313__1;
G__52313.cljs$core$IFn$_invoke$arity$2 = G__52313__2;
return G__52313;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__50766 = arguments.length;
switch (G__50766) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52312(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52312(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__50779 = arguments.length;
switch (G__50779) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__50776_SHARP_){
if(cljs.core.truth_((p1__50776_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__50776_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__50776_SHARP_.call(null,topic)))){
return p1__50776_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50776_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50780 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50780 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta50781){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta50781 = meta50781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50782,meta50781__$1){
var self__ = this;
var _50782__$1 = this;
return (new cljs.core.async.t_cljs$core$async50780(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta50781__$1));
}));

(cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50782){
var self__ = this;
var _50782__$1 = this;
return self__.meta50781;
}));

(cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async50780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta50781","meta50781",477960435,null)], null);
}));

(cljs.core.async.t_cljs$core$async50780.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50780");

(cljs.core.async.t_cljs$core$async50780.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50780");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50780.
 */
cljs.core.async.__GT_t_cljs$core$async50780 = (function cljs$core$async$__GT_t_cljs$core$async50780(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50781){
return (new cljs.core.async.t_cljs$core$async50780(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50781));
});

}

return (new cljs.core.async.t_cljs$core$async50780(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49450__auto___52347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_50879){
var state_val_50885 = (state_50879[(1)]);
if((state_val_50885 === (7))){
var inst_50875 = (state_50879[(2)]);
var state_50879__$1 = state_50879;
var statearr_50886_52349 = state_50879__$1;
(statearr_50886_52349[(2)] = inst_50875);

(statearr_50886_52349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (20))){
var state_50879__$1 = state_50879;
var statearr_50887_52350 = state_50879__$1;
(statearr_50887_52350[(2)] = null);

(statearr_50887_52350[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (1))){
var state_50879__$1 = state_50879;
var statearr_50889_52351 = state_50879__$1;
(statearr_50889_52351[(2)] = null);

(statearr_50889_52351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (24))){
var inst_50858 = (state_50879[(7)]);
var inst_50867 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_50858);
var state_50879__$1 = state_50879;
var statearr_50891_52352 = state_50879__$1;
(statearr_50891_52352[(2)] = inst_50867);

(statearr_50891_52352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (4))){
var inst_50791 = (state_50879[(8)]);
var inst_50791__$1 = (state_50879[(2)]);
var inst_50792 = (inst_50791__$1 == null);
var state_50879__$1 = (function (){var statearr_50893 = state_50879;
(statearr_50893[(8)] = inst_50791__$1);

return statearr_50893;
})();
if(cljs.core.truth_(inst_50792)){
var statearr_50897_52353 = state_50879__$1;
(statearr_50897_52353[(1)] = (5));

} else {
var statearr_50898_52354 = state_50879__$1;
(statearr_50898_52354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (15))){
var inst_50852 = (state_50879[(2)]);
var state_50879__$1 = state_50879;
var statearr_50899_52356 = state_50879__$1;
(statearr_50899_52356[(2)] = inst_50852);

(statearr_50899_52356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (21))){
var inst_50872 = (state_50879[(2)]);
var state_50879__$1 = (function (){var statearr_50900 = state_50879;
(statearr_50900[(9)] = inst_50872);

return statearr_50900;
})();
var statearr_50901_52358 = state_50879__$1;
(statearr_50901_52358[(2)] = null);

(statearr_50901_52358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (13))){
var inst_50816 = (state_50879[(10)]);
var inst_50821 = cljs.core.chunked_seq_QMARK_(inst_50816);
var state_50879__$1 = state_50879;
if(inst_50821){
var statearr_50903_52360 = state_50879__$1;
(statearr_50903_52360[(1)] = (16));

} else {
var statearr_50904_52361 = state_50879__$1;
(statearr_50904_52361[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (22))){
var inst_50864 = (state_50879[(2)]);
var state_50879__$1 = state_50879;
if(cljs.core.truth_(inst_50864)){
var statearr_50905_52363 = state_50879__$1;
(statearr_50905_52363[(1)] = (23));

} else {
var statearr_50906_52364 = state_50879__$1;
(statearr_50906_52364[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (6))){
var inst_50858 = (state_50879[(7)]);
var inst_50860 = (state_50879[(11)]);
var inst_50791 = (state_50879[(8)]);
var inst_50858__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_50791) : topic_fn.call(null,inst_50791));
var inst_50859 = cljs.core.deref(mults);
var inst_50860__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50859,inst_50858__$1);
var state_50879__$1 = (function (){var statearr_50908 = state_50879;
(statearr_50908[(7)] = inst_50858__$1);

(statearr_50908[(11)] = inst_50860__$1);

return statearr_50908;
})();
if(cljs.core.truth_(inst_50860__$1)){
var statearr_50911_52365 = state_50879__$1;
(statearr_50911_52365[(1)] = (19));

} else {
var statearr_50912_52366 = state_50879__$1;
(statearr_50912_52366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (25))){
var inst_50869 = (state_50879[(2)]);
var state_50879__$1 = state_50879;
var statearr_50913_52368 = state_50879__$1;
(statearr_50913_52368[(2)] = inst_50869);

(statearr_50913_52368[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (17))){
var inst_50816 = (state_50879[(10)]);
var inst_50843 = cljs.core.first(inst_50816);
var inst_50844 = cljs.core.async.muxch_STAR_(inst_50843);
var inst_50845 = cljs.core.async.close_BANG_(inst_50844);
var inst_50846 = cljs.core.next(inst_50816);
var inst_50802 = inst_50846;
var inst_50803 = null;
var inst_50804 = (0);
var inst_50805 = (0);
var state_50879__$1 = (function (){var statearr_50914 = state_50879;
(statearr_50914[(12)] = inst_50802);

(statearr_50914[(13)] = inst_50845);

(statearr_50914[(14)] = inst_50804);

(statearr_50914[(15)] = inst_50805);

(statearr_50914[(16)] = inst_50803);

return statearr_50914;
})();
var statearr_50915_52374 = state_50879__$1;
(statearr_50915_52374[(2)] = null);

(statearr_50915_52374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (3))){
var inst_50877 = (state_50879[(2)]);
var state_50879__$1 = state_50879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50879__$1,inst_50877);
} else {
if((state_val_50885 === (12))){
var inst_50854 = (state_50879[(2)]);
var state_50879__$1 = state_50879;
var statearr_50916_52376 = state_50879__$1;
(statearr_50916_52376[(2)] = inst_50854);

(statearr_50916_52376[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (2))){
var state_50879__$1 = state_50879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50879__$1,(4),ch);
} else {
if((state_val_50885 === (23))){
var state_50879__$1 = state_50879;
var statearr_50917_52377 = state_50879__$1;
(statearr_50917_52377[(2)] = null);

(statearr_50917_52377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (19))){
var inst_50860 = (state_50879[(11)]);
var inst_50791 = (state_50879[(8)]);
var inst_50862 = cljs.core.async.muxch_STAR_(inst_50860);
var state_50879__$1 = state_50879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50879__$1,(22),inst_50862,inst_50791);
} else {
if((state_val_50885 === (11))){
var inst_50816 = (state_50879[(10)]);
var inst_50802 = (state_50879[(12)]);
var inst_50816__$1 = cljs.core.seq(inst_50802);
var state_50879__$1 = (function (){var statearr_50922 = state_50879;
(statearr_50922[(10)] = inst_50816__$1);

return statearr_50922;
})();
if(inst_50816__$1){
var statearr_50923_52379 = state_50879__$1;
(statearr_50923_52379[(1)] = (13));

} else {
var statearr_50924_52380 = state_50879__$1;
(statearr_50924_52380[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (9))){
var inst_50856 = (state_50879[(2)]);
var state_50879__$1 = state_50879;
var statearr_50925_52382 = state_50879__$1;
(statearr_50925_52382[(2)] = inst_50856);

(statearr_50925_52382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (5))){
var inst_50799 = cljs.core.deref(mults);
var inst_50800 = cljs.core.vals(inst_50799);
var inst_50801 = cljs.core.seq(inst_50800);
var inst_50802 = inst_50801;
var inst_50803 = null;
var inst_50804 = (0);
var inst_50805 = (0);
var state_50879__$1 = (function (){var statearr_50926 = state_50879;
(statearr_50926[(12)] = inst_50802);

(statearr_50926[(14)] = inst_50804);

(statearr_50926[(15)] = inst_50805);

(statearr_50926[(16)] = inst_50803);

return statearr_50926;
})();
var statearr_50927_52383 = state_50879__$1;
(statearr_50927_52383[(2)] = null);

(statearr_50927_52383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (14))){
var state_50879__$1 = state_50879;
var statearr_50931_52384 = state_50879__$1;
(statearr_50931_52384[(2)] = null);

(statearr_50931_52384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (16))){
var inst_50816 = (state_50879[(10)]);
var inst_50825 = cljs.core.chunk_first(inst_50816);
var inst_50839 = cljs.core.chunk_rest(inst_50816);
var inst_50840 = cljs.core.count(inst_50825);
var inst_50802 = inst_50839;
var inst_50803 = inst_50825;
var inst_50804 = inst_50840;
var inst_50805 = (0);
var state_50879__$1 = (function (){var statearr_50932 = state_50879;
(statearr_50932[(12)] = inst_50802);

(statearr_50932[(14)] = inst_50804);

(statearr_50932[(15)] = inst_50805);

(statearr_50932[(16)] = inst_50803);

return statearr_50932;
})();
var statearr_50933_52388 = state_50879__$1;
(statearr_50933_52388[(2)] = null);

(statearr_50933_52388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (10))){
var inst_50802 = (state_50879[(12)]);
var inst_50804 = (state_50879[(14)]);
var inst_50805 = (state_50879[(15)]);
var inst_50803 = (state_50879[(16)]);
var inst_50810 = cljs.core._nth(inst_50803,inst_50805);
var inst_50811 = cljs.core.async.muxch_STAR_(inst_50810);
var inst_50812 = cljs.core.async.close_BANG_(inst_50811);
var inst_50813 = (inst_50805 + (1));
var tmp50928 = inst_50802;
var tmp50929 = inst_50804;
var tmp50930 = inst_50803;
var inst_50802__$1 = tmp50928;
var inst_50803__$1 = tmp50930;
var inst_50804__$1 = tmp50929;
var inst_50805__$1 = inst_50813;
var state_50879__$1 = (function (){var statearr_50934 = state_50879;
(statearr_50934[(17)] = inst_50812);

(statearr_50934[(12)] = inst_50802__$1);

(statearr_50934[(14)] = inst_50804__$1);

(statearr_50934[(15)] = inst_50805__$1);

(statearr_50934[(16)] = inst_50803__$1);

return statearr_50934;
})();
var statearr_50935_52392 = state_50879__$1;
(statearr_50935_52392[(2)] = null);

(statearr_50935_52392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (18))){
var inst_50849 = (state_50879[(2)]);
var state_50879__$1 = state_50879;
var statearr_50936_52393 = state_50879__$1;
(statearr_50936_52393[(2)] = inst_50849);

(statearr_50936_52393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50885 === (8))){
var inst_50804 = (state_50879[(14)]);
var inst_50805 = (state_50879[(15)]);
var inst_50807 = (inst_50805 < inst_50804);
var inst_50808 = inst_50807;
var state_50879__$1 = state_50879;
if(cljs.core.truth_(inst_50808)){
var statearr_50940_52398 = state_50879__$1;
(statearr_50940_52398[(1)] = (10));

} else {
var statearr_50943_52399 = state_50879__$1;
(statearr_50943_52399[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49349__auto__ = null;
var cljs$core$async$state_machine__49349__auto____0 = (function (){
var statearr_50947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50947[(0)] = cljs$core$async$state_machine__49349__auto__);

(statearr_50947[(1)] = (1));

return statearr_50947;
});
var cljs$core$async$state_machine__49349__auto____1 = (function (state_50879){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_50879);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e50949){var ex__49352__auto__ = e50949;
var statearr_50950_52401 = state_50879;
(statearr_50950_52401[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_50879[(4)]))){
var statearr_50951_52402 = state_50879;
(statearr_50951_52402[(1)] = cljs.core.first((state_50879[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52403 = state_50879;
state_50879 = G__52403;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$state_machine__49349__auto__ = function(state_50879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49349__auto____1.call(this,state_50879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49349__auto____0;
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49349__auto____1;
return cljs$core$async$state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_50953 = f__49451__auto__();
(statearr_50953[(6)] = c__49450__auto___52347);

return statearr_50953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__50957 = arguments.length;
switch (G__50957) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__50960 = arguments.length;
switch (G__50960) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__50970 = arguments.length;
switch (G__50970) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__49450__auto___52416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_51029){
var state_val_51030 = (state_51029[(1)]);
if((state_val_51030 === (7))){
var state_51029__$1 = state_51029;
var statearr_51031_52420 = state_51029__$1;
(statearr_51031_52420[(2)] = null);

(statearr_51031_52420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51030 === (1))){
var state_51029__$1 = state_51029;
var statearr_51032_52421 = state_51029__$1;
(statearr_51032_52421[(2)] = null);

(statearr_51032_52421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51030 === (4))){
var inst_50978 = (state_51029[(7)]);
var inst_50983 = (state_51029[(8)]);
var inst_50985 = (inst_50983 < inst_50978);
var state_51029__$1 = state_51029;
if(cljs.core.truth_(inst_50985)){
var statearr_51033_52422 = state_51029__$1;
(statearr_51033_52422[(1)] = (6));

} else {
var statearr_51034_52423 = state_51029__$1;
(statearr_51034_52423[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51030 === (15))){
var inst_51008 = (state_51029[(9)]);
var inst_51015 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51008);
var state_51029__$1 = state_51029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51029__$1,(17),out,inst_51015);
} else {
if((state_val_51030 === (13))){
var inst_51008 = (state_51029[(9)]);
var inst_51008__$1 = (state_51029[(2)]);
var inst_51009 = cljs.core.some(cljs.core.nil_QMARK_,inst_51008__$1);
var state_51029__$1 = (function (){var statearr_51035 = state_51029;
(statearr_51035[(9)] = inst_51008__$1);

return statearr_51035;
})();
if(cljs.core.truth_(inst_51009)){
var statearr_51036_52425 = state_51029__$1;
(statearr_51036_52425[(1)] = (14));

} else {
var statearr_51037_52426 = state_51029__$1;
(statearr_51037_52426[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51030 === (6))){
var state_51029__$1 = state_51029;
var statearr_51038_52427 = state_51029__$1;
(statearr_51038_52427[(2)] = null);

(statearr_51038_52427[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51030 === (17))){
var inst_51017 = (state_51029[(2)]);
var state_51029__$1 = (function (){var statearr_51042 = state_51029;
(statearr_51042[(10)] = inst_51017);

return statearr_51042;
})();
var statearr_51043_52430 = state_51029__$1;
(statearr_51043_52430[(2)] = null);

(statearr_51043_52430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51030 === (3))){
var inst_51022 = (state_51029[(2)]);
var state_51029__$1 = state_51029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51029__$1,inst_51022);
} else {
if((state_val_51030 === (12))){
var _ = (function (){var statearr_51044 = state_51029;
(statearr_51044[(4)] = cljs.core.rest((state_51029[(4)])));

return statearr_51044;
})();
var state_51029__$1 = state_51029;
var ex51040 = (state_51029__$1[(2)]);
var statearr_51046_52432 = state_51029__$1;
(statearr_51046_52432[(5)] = ex51040);


if((ex51040 instanceof Object)){
var statearr_51047_52433 = state_51029__$1;
(statearr_51047_52433[(1)] = (11));

(statearr_51047_52433[(5)] = null);

} else {
throw ex51040;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51030 === (2))){
var inst_50977 = cljs.core.reset_BANG_(dctr,cnt);
var inst_50978 = cnt;
var inst_50983 = (0);
var state_51029__$1 = (function (){var statearr_51048 = state_51029;
(statearr_51048[(7)] = inst_50978);

(statearr_51048[(8)] = inst_50983);

(statearr_51048[(11)] = inst_50977);

return statearr_51048;
})();
var statearr_51049_52434 = state_51029__$1;
(statearr_51049_52434[(2)] = null);

(statearr_51049_52434[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51030 === (11))){
var inst_50987 = (state_51029[(2)]);
var inst_50988 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51029__$1 = (function (){var statearr_51050 = state_51029;
(statearr_51050[(12)] = inst_50987);

return statearr_51050;
})();
var statearr_51051_52435 = state_51029__$1;
(statearr_51051_52435[(2)] = inst_50988);

(statearr_51051_52435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51030 === (9))){
var inst_50983 = (state_51029[(8)]);
var _ = (function (){var statearr_51052 = state_51029;
(statearr_51052[(4)] = cljs.core.cons((12),(state_51029[(4)])));

return statearr_51052;
})();
var inst_50994 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_50983) : chs__$1.call(null,inst_50983));
var inst_50995 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_50983) : done.call(null,inst_50983));
var inst_50996 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_50994,inst_50995);
var ___$1 = (function (){var statearr_51057 = state_51029;
(statearr_51057[(4)] = cljs.core.rest((state_51029[(4)])));

return statearr_51057;
})();
var state_51029__$1 = state_51029;
var statearr_51058_52436 = state_51029__$1;
(statearr_51058_52436[(2)] = inst_50996);

(statearr_51058_52436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51030 === (5))){
var inst_51006 = (state_51029[(2)]);
var state_51029__$1 = (function (){var statearr_51059 = state_51029;
(statearr_51059[(13)] = inst_51006);

return statearr_51059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51029__$1,(13),dchan);
} else {
if((state_val_51030 === (14))){
var inst_51013 = cljs.core.async.close_BANG_(out);
var state_51029__$1 = state_51029;
var statearr_51060_52437 = state_51029__$1;
(statearr_51060_52437[(2)] = inst_51013);

(statearr_51060_52437[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51030 === (16))){
var inst_51020 = (state_51029[(2)]);
var state_51029__$1 = state_51029;
var statearr_51061_52438 = state_51029__$1;
(statearr_51061_52438[(2)] = inst_51020);

(statearr_51061_52438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51030 === (10))){
var inst_50983 = (state_51029[(8)]);
var inst_50999 = (state_51029[(2)]);
var inst_51000 = (inst_50983 + (1));
var inst_50983__$1 = inst_51000;
var state_51029__$1 = (function (){var statearr_51062 = state_51029;
(statearr_51062[(8)] = inst_50983__$1);

(statearr_51062[(14)] = inst_50999);

return statearr_51062;
})();
var statearr_51063_52439 = state_51029__$1;
(statearr_51063_52439[(2)] = null);

(statearr_51063_52439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51030 === (8))){
var inst_51004 = (state_51029[(2)]);
var state_51029__$1 = state_51029;
var statearr_51064_52440 = state_51029__$1;
(statearr_51064_52440[(2)] = inst_51004);

(statearr_51064_52440[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49349__auto__ = null;
var cljs$core$async$state_machine__49349__auto____0 = (function (){
var statearr_51065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51065[(0)] = cljs$core$async$state_machine__49349__auto__);

(statearr_51065[(1)] = (1));

return statearr_51065;
});
var cljs$core$async$state_machine__49349__auto____1 = (function (state_51029){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_51029);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e51070){var ex__49352__auto__ = e51070;
var statearr_51071_52451 = state_51029;
(statearr_51071_52451[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_51029[(4)]))){
var statearr_51072_52452 = state_51029;
(statearr_51072_52452[(1)] = cljs.core.first((state_51029[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52456 = state_51029;
state_51029 = G__52456;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$state_machine__49349__auto__ = function(state_51029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49349__auto____1.call(this,state_51029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49349__auto____0;
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49349__auto____1;
return cljs$core$async$state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_51073 = f__49451__auto__();
(statearr_51073[(6)] = c__49450__auto___52416);

return statearr_51073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__51076 = arguments.length;
switch (G__51076) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49450__auto___52463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_51109){
var state_val_51110 = (state_51109[(1)]);
if((state_val_51110 === (7))){
var inst_51088 = (state_51109[(7)]);
var inst_51089 = (state_51109[(8)]);
var inst_51088__$1 = (state_51109[(2)]);
var inst_51089__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51088__$1,(0),null);
var inst_51090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51088__$1,(1),null);
var inst_51091 = (inst_51089__$1 == null);
var state_51109__$1 = (function (){var statearr_51111 = state_51109;
(statearr_51111[(7)] = inst_51088__$1);

(statearr_51111[(8)] = inst_51089__$1);

(statearr_51111[(9)] = inst_51090);

return statearr_51111;
})();
if(cljs.core.truth_(inst_51091)){
var statearr_51112_52464 = state_51109__$1;
(statearr_51112_52464[(1)] = (8));

} else {
var statearr_51113_52465 = state_51109__$1;
(statearr_51113_52465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51110 === (1))){
var inst_51078 = cljs.core.vec(chs);
var inst_51079 = inst_51078;
var state_51109__$1 = (function (){var statearr_51114 = state_51109;
(statearr_51114[(10)] = inst_51079);

return statearr_51114;
})();
var statearr_51115_52469 = state_51109__$1;
(statearr_51115_52469[(2)] = null);

(statearr_51115_52469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51110 === (4))){
var inst_51079 = (state_51109[(10)]);
var state_51109__$1 = state_51109;
return cljs.core.async.ioc_alts_BANG_(state_51109__$1,(7),inst_51079);
} else {
if((state_val_51110 === (6))){
var inst_51105 = (state_51109[(2)]);
var state_51109__$1 = state_51109;
var statearr_51117_52470 = state_51109__$1;
(statearr_51117_52470[(2)] = inst_51105);

(statearr_51117_52470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51110 === (3))){
var inst_51107 = (state_51109[(2)]);
var state_51109__$1 = state_51109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51109__$1,inst_51107);
} else {
if((state_val_51110 === (2))){
var inst_51079 = (state_51109[(10)]);
var inst_51081 = cljs.core.count(inst_51079);
var inst_51082 = (inst_51081 > (0));
var state_51109__$1 = state_51109;
if(cljs.core.truth_(inst_51082)){
var statearr_51119_52471 = state_51109__$1;
(statearr_51119_52471[(1)] = (4));

} else {
var statearr_51120_52472 = state_51109__$1;
(statearr_51120_52472[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51110 === (11))){
var inst_51079 = (state_51109[(10)]);
var inst_51098 = (state_51109[(2)]);
var tmp51118 = inst_51079;
var inst_51079__$1 = tmp51118;
var state_51109__$1 = (function (){var statearr_51121 = state_51109;
(statearr_51121[(10)] = inst_51079__$1);

(statearr_51121[(11)] = inst_51098);

return statearr_51121;
})();
var statearr_51122_52473 = state_51109__$1;
(statearr_51122_52473[(2)] = null);

(statearr_51122_52473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51110 === (9))){
var inst_51089 = (state_51109[(8)]);
var state_51109__$1 = state_51109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51109__$1,(11),out,inst_51089);
} else {
if((state_val_51110 === (5))){
var inst_51103 = cljs.core.async.close_BANG_(out);
var state_51109__$1 = state_51109;
var statearr_51123_52474 = state_51109__$1;
(statearr_51123_52474[(2)] = inst_51103);

(statearr_51123_52474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51110 === (10))){
var inst_51101 = (state_51109[(2)]);
var state_51109__$1 = state_51109;
var statearr_51124_52475 = state_51109__$1;
(statearr_51124_52475[(2)] = inst_51101);

(statearr_51124_52475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51110 === (8))){
var inst_51079 = (state_51109[(10)]);
var inst_51088 = (state_51109[(7)]);
var inst_51089 = (state_51109[(8)]);
var inst_51090 = (state_51109[(9)]);
var inst_51093 = (function (){var cs = inst_51079;
var vec__51084 = inst_51088;
var v = inst_51089;
var c = inst_51090;
return (function (p1__51074_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51074_SHARP_);
});
})();
var inst_51094 = cljs.core.filterv(inst_51093,inst_51079);
var inst_51079__$1 = inst_51094;
var state_51109__$1 = (function (){var statearr_51125 = state_51109;
(statearr_51125[(10)] = inst_51079__$1);

return statearr_51125;
})();
var statearr_51126_52476 = state_51109__$1;
(statearr_51126_52476[(2)] = null);

(statearr_51126_52476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49349__auto__ = null;
var cljs$core$async$state_machine__49349__auto____0 = (function (){
var statearr_51127 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51127[(0)] = cljs$core$async$state_machine__49349__auto__);

(statearr_51127[(1)] = (1));

return statearr_51127;
});
var cljs$core$async$state_machine__49349__auto____1 = (function (state_51109){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_51109);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e51128){var ex__49352__auto__ = e51128;
var statearr_51129_52478 = state_51109;
(statearr_51129_52478[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_51109[(4)]))){
var statearr_51130_52480 = state_51109;
(statearr_51130_52480[(1)] = cljs.core.first((state_51109[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52482 = state_51109;
state_51109 = G__52482;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$state_machine__49349__auto__ = function(state_51109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49349__auto____1.call(this,state_51109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49349__auto____0;
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49349__auto____1;
return cljs$core$async$state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_51131 = f__49451__auto__();
(statearr_51131[(6)] = c__49450__auto___52463);

return statearr_51131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__51133 = arguments.length;
switch (G__51133) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49450__auto___52485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_51157){
var state_val_51158 = (state_51157[(1)]);
if((state_val_51158 === (7))){
var inst_51139 = (state_51157[(7)]);
var inst_51139__$1 = (state_51157[(2)]);
var inst_51140 = (inst_51139__$1 == null);
var inst_51141 = cljs.core.not(inst_51140);
var state_51157__$1 = (function (){var statearr_51159 = state_51157;
(statearr_51159[(7)] = inst_51139__$1);

return statearr_51159;
})();
if(inst_51141){
var statearr_51160_52486 = state_51157__$1;
(statearr_51160_52486[(1)] = (8));

} else {
var statearr_51161_52487 = state_51157__$1;
(statearr_51161_52487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51158 === (1))){
var inst_51134 = (0);
var state_51157__$1 = (function (){var statearr_51162 = state_51157;
(statearr_51162[(8)] = inst_51134);

return statearr_51162;
})();
var statearr_51163_52489 = state_51157__$1;
(statearr_51163_52489[(2)] = null);

(statearr_51163_52489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51158 === (4))){
var state_51157__$1 = state_51157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51157__$1,(7),ch);
} else {
if((state_val_51158 === (6))){
var inst_51152 = (state_51157[(2)]);
var state_51157__$1 = state_51157;
var statearr_51164_52491 = state_51157__$1;
(statearr_51164_52491[(2)] = inst_51152);

(statearr_51164_52491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51158 === (3))){
var inst_51154 = (state_51157[(2)]);
var inst_51155 = cljs.core.async.close_BANG_(out);
var state_51157__$1 = (function (){var statearr_51165 = state_51157;
(statearr_51165[(9)] = inst_51154);

return statearr_51165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51157__$1,inst_51155);
} else {
if((state_val_51158 === (2))){
var inst_51134 = (state_51157[(8)]);
var inst_51136 = (inst_51134 < n);
var state_51157__$1 = state_51157;
if(cljs.core.truth_(inst_51136)){
var statearr_51166_52492 = state_51157__$1;
(statearr_51166_52492[(1)] = (4));

} else {
var statearr_51167_52493 = state_51157__$1;
(statearr_51167_52493[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51158 === (11))){
var inst_51134 = (state_51157[(8)]);
var inst_51144 = (state_51157[(2)]);
var inst_51145 = (inst_51134 + (1));
var inst_51134__$1 = inst_51145;
var state_51157__$1 = (function (){var statearr_51168 = state_51157;
(statearr_51168[(10)] = inst_51144);

(statearr_51168[(8)] = inst_51134__$1);

return statearr_51168;
})();
var statearr_51169_52494 = state_51157__$1;
(statearr_51169_52494[(2)] = null);

(statearr_51169_52494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51158 === (9))){
var state_51157__$1 = state_51157;
var statearr_51172_52495 = state_51157__$1;
(statearr_51172_52495[(2)] = null);

(statearr_51172_52495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51158 === (5))){
var state_51157__$1 = state_51157;
var statearr_51173_52496 = state_51157__$1;
(statearr_51173_52496[(2)] = null);

(statearr_51173_52496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51158 === (10))){
var inst_51149 = (state_51157[(2)]);
var state_51157__$1 = state_51157;
var statearr_51174_52497 = state_51157__$1;
(statearr_51174_52497[(2)] = inst_51149);

(statearr_51174_52497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51158 === (8))){
var inst_51139 = (state_51157[(7)]);
var state_51157__$1 = state_51157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51157__$1,(11),out,inst_51139);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49349__auto__ = null;
var cljs$core$async$state_machine__49349__auto____0 = (function (){
var statearr_51175 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51175[(0)] = cljs$core$async$state_machine__49349__auto__);

(statearr_51175[(1)] = (1));

return statearr_51175;
});
var cljs$core$async$state_machine__49349__auto____1 = (function (state_51157){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_51157);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e51176){var ex__49352__auto__ = e51176;
var statearr_51177_52498 = state_51157;
(statearr_51177_52498[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_51157[(4)]))){
var statearr_51178_52500 = state_51157;
(statearr_51178_52500[(1)] = cljs.core.first((state_51157[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52501 = state_51157;
state_51157 = G__52501;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$state_machine__49349__auto__ = function(state_51157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49349__auto____1.call(this,state_51157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49349__auto____0;
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49349__auto____1;
return cljs$core$async$state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_51179 = f__49451__auto__();
(statearr_51179[(6)] = c__49450__auto___52485);

return statearr_51179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51184 = (function (f,ch,meta51185){
this.f = f;
this.ch = ch;
this.meta51185 = meta51185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51186,meta51185__$1){
var self__ = this;
var _51186__$1 = this;
return (new cljs.core.async.t_cljs$core$async51184(self__.f,self__.ch,meta51185__$1));
}));

(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51186){
var self__ = this;
var _51186__$1 = this;
return self__.meta51185;
}));

(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51191 = (function (f,ch,meta51185,_,fn1,meta51192){
this.f = f;
this.ch = ch;
this.meta51185 = meta51185;
this._ = _;
this.fn1 = fn1;
this.meta51192 = meta51192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51193,meta51192__$1){
var self__ = this;
var _51193__$1 = this;
return (new cljs.core.async.t_cljs$core$async51191(self__.f,self__.ch,self__.meta51185,self__._,self__.fn1,meta51192__$1));
}));

(cljs.core.async.t_cljs$core$async51191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51193){
var self__ = this;
var _51193__$1 = this;
return self__.meta51192;
}));

(cljs.core.async.t_cljs$core$async51191.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51191.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__51183_SHARP_){
var G__51198 = (((p1__51183_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51183_SHARP_) : self__.f.call(null,p1__51183_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51198) : f1.call(null,G__51198));
});
}));

(cljs.core.async.t_cljs$core$async51191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51185","meta51185",1714090836,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51184","cljs.core.async/t_cljs$core$async51184",-1016213732,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51192","meta51192",1014593628,null)], null);
}));

(cljs.core.async.t_cljs$core$async51191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51191");

(cljs.core.async.t_cljs$core$async51191.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async51191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51191.
 */
cljs.core.async.__GT_t_cljs$core$async51191 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51191(f__$1,ch__$1,meta51185__$1,___$2,fn1__$1,meta51192){
return (new cljs.core.async.t_cljs$core$async51191(f__$1,ch__$1,meta51185__$1,___$2,fn1__$1,meta51192));
});

}

return (new cljs.core.async.t_cljs$core$async51191(self__.f,self__.ch,self__.meta51185,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51205 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51205) : self__.f.call(null,G__51205));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51185","meta51185",1714090836,null)], null);
}));

(cljs.core.async.t_cljs$core$async51184.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51184");

(cljs.core.async.t_cljs$core$async51184.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async51184");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51184.
 */
cljs.core.async.__GT_t_cljs$core$async51184 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51184(f__$1,ch__$1,meta51185){
return (new cljs.core.async.t_cljs$core$async51184(f__$1,ch__$1,meta51185));
});

}

return (new cljs.core.async.t_cljs$core$async51184(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51215 = (function (f,ch,meta51216){
this.f = f;
this.ch = ch;
this.meta51216 = meta51216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51217,meta51216__$1){
var self__ = this;
var _51217__$1 = this;
return (new cljs.core.async.t_cljs$core$async51215(self__.f,self__.ch,meta51216__$1));
}));

(cljs.core.async.t_cljs$core$async51215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51217){
var self__ = this;
var _51217__$1 = this;
return self__.meta51216;
}));

(cljs.core.async.t_cljs$core$async51215.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51215.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51215.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51215.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51215.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51215.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51216","meta51216",-487979308,null)], null);
}));

(cljs.core.async.t_cljs$core$async51215.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51215");

(cljs.core.async.t_cljs$core$async51215.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async51215");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51215.
 */
cljs.core.async.__GT_t_cljs$core$async51215 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51215(f__$1,ch__$1,meta51216){
return (new cljs.core.async.t_cljs$core$async51215(f__$1,ch__$1,meta51216));
});

}

return (new cljs.core.async.t_cljs$core$async51215(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51226 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51226 = (function (p,ch,meta51227){
this.p = p;
this.ch = ch;
this.meta51227 = meta51227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51228,meta51227__$1){
var self__ = this;
var _51228__$1 = this;
return (new cljs.core.async.t_cljs$core$async51226(self__.p,self__.ch,meta51227__$1));
}));

(cljs.core.async.t_cljs$core$async51226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51228){
var self__ = this;
var _51228__$1 = this;
return self__.meta51227;
}));

(cljs.core.async.t_cljs$core$async51226.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51226.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51226.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51226.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51226.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51226.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51226.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51227","meta51227",-1910434193,null)], null);
}));

(cljs.core.async.t_cljs$core$async51226.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51226");

(cljs.core.async.t_cljs$core$async51226.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async51226");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51226.
 */
cljs.core.async.__GT_t_cljs$core$async51226 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51226(p__$1,ch__$1,meta51227){
return (new cljs.core.async.t_cljs$core$async51226(p__$1,ch__$1,meta51227));
});

}

return (new cljs.core.async.t_cljs$core$async51226(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__51236 = arguments.length;
switch (G__51236) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49450__auto___52524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_51259){
var state_val_51260 = (state_51259[(1)]);
if((state_val_51260 === (7))){
var inst_51255 = (state_51259[(2)]);
var state_51259__$1 = state_51259;
var statearr_51265_52525 = state_51259__$1;
(statearr_51265_52525[(2)] = inst_51255);

(statearr_51265_52525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (1))){
var state_51259__$1 = state_51259;
var statearr_51266_52526 = state_51259__$1;
(statearr_51266_52526[(2)] = null);

(statearr_51266_52526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (4))){
var inst_51239 = (state_51259[(7)]);
var inst_51239__$1 = (state_51259[(2)]);
var inst_51240 = (inst_51239__$1 == null);
var state_51259__$1 = (function (){var statearr_51267 = state_51259;
(statearr_51267[(7)] = inst_51239__$1);

return statearr_51267;
})();
if(cljs.core.truth_(inst_51240)){
var statearr_51268_52527 = state_51259__$1;
(statearr_51268_52527[(1)] = (5));

} else {
var statearr_51269_52528 = state_51259__$1;
(statearr_51269_52528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (6))){
var inst_51239 = (state_51259[(7)]);
var inst_51245 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51239) : p.call(null,inst_51239));
var state_51259__$1 = state_51259;
if(cljs.core.truth_(inst_51245)){
var statearr_51270_52530 = state_51259__$1;
(statearr_51270_52530[(1)] = (8));

} else {
var statearr_51271_52531 = state_51259__$1;
(statearr_51271_52531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (3))){
var inst_51257 = (state_51259[(2)]);
var state_51259__$1 = state_51259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51259__$1,inst_51257);
} else {
if((state_val_51260 === (2))){
var state_51259__$1 = state_51259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51259__$1,(4),ch);
} else {
if((state_val_51260 === (11))){
var inst_51249 = (state_51259[(2)]);
var state_51259__$1 = state_51259;
var statearr_51272_52535 = state_51259__$1;
(statearr_51272_52535[(2)] = inst_51249);

(statearr_51272_52535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (9))){
var state_51259__$1 = state_51259;
var statearr_51274_52536 = state_51259__$1;
(statearr_51274_52536[(2)] = null);

(statearr_51274_52536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (5))){
var inst_51243 = cljs.core.async.close_BANG_(out);
var state_51259__$1 = state_51259;
var statearr_51276_52537 = state_51259__$1;
(statearr_51276_52537[(2)] = inst_51243);

(statearr_51276_52537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (10))){
var inst_51252 = (state_51259[(2)]);
var state_51259__$1 = (function (){var statearr_51277 = state_51259;
(statearr_51277[(8)] = inst_51252);

return statearr_51277;
})();
var statearr_51278_52538 = state_51259__$1;
(statearr_51278_52538[(2)] = null);

(statearr_51278_52538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (8))){
var inst_51239 = (state_51259[(7)]);
var state_51259__$1 = state_51259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51259__$1,(11),out,inst_51239);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49349__auto__ = null;
var cljs$core$async$state_machine__49349__auto____0 = (function (){
var statearr_51281 = [null,null,null,null,null,null,null,null,null];
(statearr_51281[(0)] = cljs$core$async$state_machine__49349__auto__);

(statearr_51281[(1)] = (1));

return statearr_51281;
});
var cljs$core$async$state_machine__49349__auto____1 = (function (state_51259){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_51259);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e51283){var ex__49352__auto__ = e51283;
var statearr_51284_52543 = state_51259;
(statearr_51284_52543[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_51259[(4)]))){
var statearr_51285_52544 = state_51259;
(statearr_51285_52544[(1)] = cljs.core.first((state_51259[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52545 = state_51259;
state_51259 = G__52545;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$state_machine__49349__auto__ = function(state_51259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49349__auto____1.call(this,state_51259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49349__auto____0;
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49349__auto____1;
return cljs$core$async$state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_51286 = f__49451__auto__();
(statearr_51286[(6)] = c__49450__auto___52524);

return statearr_51286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51288 = arguments.length;
switch (G__51288) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__49450__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_51360){
var state_val_51361 = (state_51360[(1)]);
if((state_val_51361 === (7))){
var inst_51353 = (state_51360[(2)]);
var state_51360__$1 = state_51360;
var statearr_51369_52550 = state_51360__$1;
(statearr_51369_52550[(2)] = inst_51353);

(statearr_51369_52550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (20))){
var inst_51323 = (state_51360[(7)]);
var inst_51334 = (state_51360[(2)]);
var inst_51335 = cljs.core.next(inst_51323);
var inst_51309 = inst_51335;
var inst_51310 = null;
var inst_51311 = (0);
var inst_51312 = (0);
var state_51360__$1 = (function (){var statearr_51370 = state_51360;
(statearr_51370[(8)] = inst_51310);

(statearr_51370[(9)] = inst_51312);

(statearr_51370[(10)] = inst_51334);

(statearr_51370[(11)] = inst_51311);

(statearr_51370[(12)] = inst_51309);

return statearr_51370;
})();
var statearr_51371_52552 = state_51360__$1;
(statearr_51371_52552[(2)] = null);

(statearr_51371_52552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (1))){
var state_51360__$1 = state_51360;
var statearr_51372_52553 = state_51360__$1;
(statearr_51372_52553[(2)] = null);

(statearr_51372_52553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (4))){
var inst_51297 = (state_51360[(13)]);
var inst_51297__$1 = (state_51360[(2)]);
var inst_51298 = (inst_51297__$1 == null);
var state_51360__$1 = (function (){var statearr_51373 = state_51360;
(statearr_51373[(13)] = inst_51297__$1);

return statearr_51373;
})();
if(cljs.core.truth_(inst_51298)){
var statearr_51374_52555 = state_51360__$1;
(statearr_51374_52555[(1)] = (5));

} else {
var statearr_51375_52558 = state_51360__$1;
(statearr_51375_52558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (15))){
var state_51360__$1 = state_51360;
var statearr_51379_52560 = state_51360__$1;
(statearr_51379_52560[(2)] = null);

(statearr_51379_52560[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (21))){
var state_51360__$1 = state_51360;
var statearr_51380_52561 = state_51360__$1;
(statearr_51380_52561[(2)] = null);

(statearr_51380_52561[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (13))){
var inst_51310 = (state_51360[(8)]);
var inst_51312 = (state_51360[(9)]);
var inst_51311 = (state_51360[(11)]);
var inst_51309 = (state_51360[(12)]);
var inst_51319 = (state_51360[(2)]);
var inst_51320 = (inst_51312 + (1));
var tmp51376 = inst_51310;
var tmp51377 = inst_51311;
var tmp51378 = inst_51309;
var inst_51309__$1 = tmp51378;
var inst_51310__$1 = tmp51376;
var inst_51311__$1 = tmp51377;
var inst_51312__$1 = inst_51320;
var state_51360__$1 = (function (){var statearr_51381 = state_51360;
(statearr_51381[(8)] = inst_51310__$1);

(statearr_51381[(9)] = inst_51312__$1);

(statearr_51381[(14)] = inst_51319);

(statearr_51381[(11)] = inst_51311__$1);

(statearr_51381[(12)] = inst_51309__$1);

return statearr_51381;
})();
var statearr_51385_52563 = state_51360__$1;
(statearr_51385_52563[(2)] = null);

(statearr_51385_52563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (22))){
var state_51360__$1 = state_51360;
var statearr_51386_52566 = state_51360__$1;
(statearr_51386_52566[(2)] = null);

(statearr_51386_52566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (6))){
var inst_51297 = (state_51360[(13)]);
var inst_51307 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51297) : f.call(null,inst_51297));
var inst_51308 = cljs.core.seq(inst_51307);
var inst_51309 = inst_51308;
var inst_51310 = null;
var inst_51311 = (0);
var inst_51312 = (0);
var state_51360__$1 = (function (){var statearr_51387 = state_51360;
(statearr_51387[(8)] = inst_51310);

(statearr_51387[(9)] = inst_51312);

(statearr_51387[(11)] = inst_51311);

(statearr_51387[(12)] = inst_51309);

return statearr_51387;
})();
var statearr_51388_52568 = state_51360__$1;
(statearr_51388_52568[(2)] = null);

(statearr_51388_52568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (17))){
var inst_51323 = (state_51360[(7)]);
var inst_51327 = cljs.core.chunk_first(inst_51323);
var inst_51328 = cljs.core.chunk_rest(inst_51323);
var inst_51329 = cljs.core.count(inst_51327);
var inst_51309 = inst_51328;
var inst_51310 = inst_51327;
var inst_51311 = inst_51329;
var inst_51312 = (0);
var state_51360__$1 = (function (){var statearr_51390 = state_51360;
(statearr_51390[(8)] = inst_51310);

(statearr_51390[(9)] = inst_51312);

(statearr_51390[(11)] = inst_51311);

(statearr_51390[(12)] = inst_51309);

return statearr_51390;
})();
var statearr_51394_52570 = state_51360__$1;
(statearr_51394_52570[(2)] = null);

(statearr_51394_52570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (3))){
var inst_51355 = (state_51360[(2)]);
var state_51360__$1 = state_51360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51360__$1,inst_51355);
} else {
if((state_val_51361 === (12))){
var inst_51343 = (state_51360[(2)]);
var state_51360__$1 = state_51360;
var statearr_51398_52572 = state_51360__$1;
(statearr_51398_52572[(2)] = inst_51343);

(statearr_51398_52572[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (2))){
var state_51360__$1 = state_51360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51360__$1,(4),in$);
} else {
if((state_val_51361 === (23))){
var inst_51351 = (state_51360[(2)]);
var state_51360__$1 = state_51360;
var statearr_51401_52576 = state_51360__$1;
(statearr_51401_52576[(2)] = inst_51351);

(statearr_51401_52576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (19))){
var inst_51338 = (state_51360[(2)]);
var state_51360__$1 = state_51360;
var statearr_51402_52577 = state_51360__$1;
(statearr_51402_52577[(2)] = inst_51338);

(statearr_51402_52577[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (11))){
var inst_51323 = (state_51360[(7)]);
var inst_51309 = (state_51360[(12)]);
var inst_51323__$1 = cljs.core.seq(inst_51309);
var state_51360__$1 = (function (){var statearr_51403 = state_51360;
(statearr_51403[(7)] = inst_51323__$1);

return statearr_51403;
})();
if(inst_51323__$1){
var statearr_51404_52578 = state_51360__$1;
(statearr_51404_52578[(1)] = (14));

} else {
var statearr_51405_52579 = state_51360__$1;
(statearr_51405_52579[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (9))){
var inst_51345 = (state_51360[(2)]);
var inst_51346 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51360__$1 = (function (){var statearr_51406 = state_51360;
(statearr_51406[(15)] = inst_51345);

return statearr_51406;
})();
if(cljs.core.truth_(inst_51346)){
var statearr_51407_52580 = state_51360__$1;
(statearr_51407_52580[(1)] = (21));

} else {
var statearr_51408_52581 = state_51360__$1;
(statearr_51408_52581[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (5))){
var inst_51300 = cljs.core.async.close_BANG_(out);
var state_51360__$1 = state_51360;
var statearr_51409_52583 = state_51360__$1;
(statearr_51409_52583[(2)] = inst_51300);

(statearr_51409_52583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (14))){
var inst_51323 = (state_51360[(7)]);
var inst_51325 = cljs.core.chunked_seq_QMARK_(inst_51323);
var state_51360__$1 = state_51360;
if(inst_51325){
var statearr_51410_52587 = state_51360__$1;
(statearr_51410_52587[(1)] = (17));

} else {
var statearr_51411_52588 = state_51360__$1;
(statearr_51411_52588[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (16))){
var inst_51341 = (state_51360[(2)]);
var state_51360__$1 = state_51360;
var statearr_51421_52589 = state_51360__$1;
(statearr_51421_52589[(2)] = inst_51341);

(statearr_51421_52589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51361 === (10))){
var inst_51310 = (state_51360[(8)]);
var inst_51312 = (state_51360[(9)]);
var inst_51317 = cljs.core._nth(inst_51310,inst_51312);
var state_51360__$1 = state_51360;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51360__$1,(13),out,inst_51317);
} else {
if((state_val_51361 === (18))){
var inst_51323 = (state_51360[(7)]);
var inst_51332 = cljs.core.first(inst_51323);
var state_51360__$1 = state_51360;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51360__$1,(20),out,inst_51332);
} else {
if((state_val_51361 === (8))){
var inst_51312 = (state_51360[(9)]);
var inst_51311 = (state_51360[(11)]);
var inst_51314 = (inst_51312 < inst_51311);
var inst_51315 = inst_51314;
var state_51360__$1 = state_51360;
if(cljs.core.truth_(inst_51315)){
var statearr_51430_52590 = state_51360__$1;
(statearr_51430_52590[(1)] = (10));

} else {
var statearr_51431_52591 = state_51360__$1;
(statearr_51431_52591[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__49349__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49349__auto____0 = (function (){
var statearr_51432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51432[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49349__auto__);

(statearr_51432[(1)] = (1));

return statearr_51432;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49349__auto____1 = (function (state_51360){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_51360);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e51433){var ex__49352__auto__ = e51433;
var statearr_51434_52596 = state_51360;
(statearr_51434_52596[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_51360[(4)]))){
var statearr_51435_52597 = state_51360;
(statearr_51435_52597[(1)] = cljs.core.first((state_51360[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52601 = state_51360;
state_51360 = G__52601;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49349__auto__ = function(state_51360){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49349__auto____1.call(this,state_51360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49349__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49349__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_51436 = f__49451__auto__();
(statearr_51436[(6)] = c__49450__auto__);

return statearr_51436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));

return c__49450__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__51438 = arguments.length;
switch (G__51438) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__51467 = arguments.length;
switch (G__51467) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__51471 = arguments.length;
switch (G__51471) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49450__auto___52609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_51518){
var state_val_51519 = (state_51518[(1)]);
if((state_val_51519 === (7))){
var inst_51513 = (state_51518[(2)]);
var state_51518__$1 = state_51518;
var statearr_51524_52611 = state_51518__$1;
(statearr_51524_52611[(2)] = inst_51513);

(statearr_51524_52611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51519 === (1))){
var inst_51481 = null;
var state_51518__$1 = (function (){var statearr_51525 = state_51518;
(statearr_51525[(7)] = inst_51481);

return statearr_51525;
})();
var statearr_51526_52613 = state_51518__$1;
(statearr_51526_52613[(2)] = null);

(statearr_51526_52613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51519 === (4))){
var inst_51494 = (state_51518[(8)]);
var inst_51494__$1 = (state_51518[(2)]);
var inst_51499 = (inst_51494__$1 == null);
var inst_51500 = cljs.core.not(inst_51499);
var state_51518__$1 = (function (){var statearr_51527 = state_51518;
(statearr_51527[(8)] = inst_51494__$1);

return statearr_51527;
})();
if(inst_51500){
var statearr_51529_52614 = state_51518__$1;
(statearr_51529_52614[(1)] = (5));

} else {
var statearr_51530_52615 = state_51518__$1;
(statearr_51530_52615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51519 === (6))){
var state_51518__$1 = state_51518;
var statearr_51531_52616 = state_51518__$1;
(statearr_51531_52616[(2)] = null);

(statearr_51531_52616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51519 === (3))){
var inst_51515 = (state_51518[(2)]);
var inst_51516 = cljs.core.async.close_BANG_(out);
var state_51518__$1 = (function (){var statearr_51533 = state_51518;
(statearr_51533[(9)] = inst_51515);

return statearr_51533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51518__$1,inst_51516);
} else {
if((state_val_51519 === (2))){
var state_51518__$1 = state_51518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51518__$1,(4),ch);
} else {
if((state_val_51519 === (11))){
var inst_51494 = (state_51518[(8)]);
var inst_51507 = (state_51518[(2)]);
var inst_51481 = inst_51494;
var state_51518__$1 = (function (){var statearr_51536 = state_51518;
(statearr_51536[(10)] = inst_51507);

(statearr_51536[(7)] = inst_51481);

return statearr_51536;
})();
var statearr_51537_52618 = state_51518__$1;
(statearr_51537_52618[(2)] = null);

(statearr_51537_52618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51519 === (9))){
var inst_51494 = (state_51518[(8)]);
var state_51518__$1 = state_51518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51518__$1,(11),out,inst_51494);
} else {
if((state_val_51519 === (5))){
var inst_51494 = (state_51518[(8)]);
var inst_51481 = (state_51518[(7)]);
var inst_51502 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51494,inst_51481);
var state_51518__$1 = state_51518;
if(inst_51502){
var statearr_51541_52620 = state_51518__$1;
(statearr_51541_52620[(1)] = (8));

} else {
var statearr_51545_52621 = state_51518__$1;
(statearr_51545_52621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51519 === (10))){
var inst_51510 = (state_51518[(2)]);
var state_51518__$1 = state_51518;
var statearr_51546_52622 = state_51518__$1;
(statearr_51546_52622[(2)] = inst_51510);

(statearr_51546_52622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51519 === (8))){
var inst_51481 = (state_51518[(7)]);
var tmp51539 = inst_51481;
var inst_51481__$1 = tmp51539;
var state_51518__$1 = (function (){var statearr_51547 = state_51518;
(statearr_51547[(7)] = inst_51481__$1);

return statearr_51547;
})();
var statearr_51548_52624 = state_51518__$1;
(statearr_51548_52624[(2)] = null);

(statearr_51548_52624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49349__auto__ = null;
var cljs$core$async$state_machine__49349__auto____0 = (function (){
var statearr_51550 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51550[(0)] = cljs$core$async$state_machine__49349__auto__);

(statearr_51550[(1)] = (1));

return statearr_51550;
});
var cljs$core$async$state_machine__49349__auto____1 = (function (state_51518){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_51518);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e51551){var ex__49352__auto__ = e51551;
var statearr_51553_52627 = state_51518;
(statearr_51553_52627[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_51518[(4)]))){
var statearr_51555_52629 = state_51518;
(statearr_51555_52629[(1)] = cljs.core.first((state_51518[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52630 = state_51518;
state_51518 = G__52630;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$state_machine__49349__auto__ = function(state_51518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49349__auto____1.call(this,state_51518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49349__auto____0;
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49349__auto____1;
return cljs$core$async$state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_51558 = f__49451__auto__();
(statearr_51558[(6)] = c__49450__auto___52609);

return statearr_51558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__51561 = arguments.length;
switch (G__51561) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49450__auto___52634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_51618){
var state_val_51619 = (state_51618[(1)]);
if((state_val_51619 === (7))){
var inst_51614 = (state_51618[(2)]);
var state_51618__$1 = state_51618;
var statearr_51620_52636 = state_51618__$1;
(statearr_51620_52636[(2)] = inst_51614);

(statearr_51620_52636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51619 === (1))){
var inst_51573 = (new Array(n));
var inst_51574 = inst_51573;
var inst_51575 = (0);
var state_51618__$1 = (function (){var statearr_51621 = state_51618;
(statearr_51621[(7)] = inst_51575);

(statearr_51621[(8)] = inst_51574);

return statearr_51621;
})();
var statearr_51622_52639 = state_51618__$1;
(statearr_51622_52639[(2)] = null);

(statearr_51622_52639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51619 === (4))){
var inst_51582 = (state_51618[(9)]);
var inst_51582__$1 = (state_51618[(2)]);
var inst_51586 = (inst_51582__$1 == null);
var inst_51587 = cljs.core.not(inst_51586);
var state_51618__$1 = (function (){var statearr_51623 = state_51618;
(statearr_51623[(9)] = inst_51582__$1);

return statearr_51623;
})();
if(inst_51587){
var statearr_51624_52640 = state_51618__$1;
(statearr_51624_52640[(1)] = (5));

} else {
var statearr_51625_52641 = state_51618__$1;
(statearr_51625_52641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51619 === (15))){
var inst_51608 = (state_51618[(2)]);
var state_51618__$1 = state_51618;
var statearr_51627_52642 = state_51618__$1;
(statearr_51627_52642[(2)] = inst_51608);

(statearr_51627_52642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51619 === (13))){
var state_51618__$1 = state_51618;
var statearr_51628_52643 = state_51618__$1;
(statearr_51628_52643[(2)] = null);

(statearr_51628_52643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51619 === (6))){
var inst_51575 = (state_51618[(7)]);
var inst_51604 = (inst_51575 > (0));
var state_51618__$1 = state_51618;
if(cljs.core.truth_(inst_51604)){
var statearr_51631_52644 = state_51618__$1;
(statearr_51631_52644[(1)] = (12));

} else {
var statearr_51632_52645 = state_51618__$1;
(statearr_51632_52645[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51619 === (3))){
var inst_51616 = (state_51618[(2)]);
var state_51618__$1 = state_51618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51618__$1,inst_51616);
} else {
if((state_val_51619 === (12))){
var inst_51574 = (state_51618[(8)]);
var inst_51606 = cljs.core.vec(inst_51574);
var state_51618__$1 = state_51618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51618__$1,(15),out,inst_51606);
} else {
if((state_val_51619 === (2))){
var state_51618__$1 = state_51618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51618__$1,(4),ch);
} else {
if((state_val_51619 === (11))){
var inst_51598 = (state_51618[(2)]);
var inst_51599 = (new Array(n));
var inst_51574 = inst_51599;
var inst_51575 = (0);
var state_51618__$1 = (function (){var statearr_51635 = state_51618;
(statearr_51635[(10)] = inst_51598);

(statearr_51635[(7)] = inst_51575);

(statearr_51635[(8)] = inst_51574);

return statearr_51635;
})();
var statearr_51637_52647 = state_51618__$1;
(statearr_51637_52647[(2)] = null);

(statearr_51637_52647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51619 === (9))){
var inst_51574 = (state_51618[(8)]);
var inst_51596 = cljs.core.vec(inst_51574);
var state_51618__$1 = state_51618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51618__$1,(11),out,inst_51596);
} else {
if((state_val_51619 === (5))){
var inst_51582 = (state_51618[(9)]);
var inst_51575 = (state_51618[(7)]);
var inst_51574 = (state_51618[(8)]);
var inst_51591 = (state_51618[(11)]);
var inst_51590 = (inst_51574[inst_51575] = inst_51582);
var inst_51591__$1 = (inst_51575 + (1));
var inst_51592 = (inst_51591__$1 < n);
var state_51618__$1 = (function (){var statearr_51642 = state_51618;
(statearr_51642[(12)] = inst_51590);

(statearr_51642[(11)] = inst_51591__$1);

return statearr_51642;
})();
if(cljs.core.truth_(inst_51592)){
var statearr_51644_52651 = state_51618__$1;
(statearr_51644_52651[(1)] = (8));

} else {
var statearr_51646_52652 = state_51618__$1;
(statearr_51646_52652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51619 === (14))){
var inst_51611 = (state_51618[(2)]);
var inst_51612 = cljs.core.async.close_BANG_(out);
var state_51618__$1 = (function (){var statearr_51650 = state_51618;
(statearr_51650[(13)] = inst_51611);

return statearr_51650;
})();
var statearr_51651_52653 = state_51618__$1;
(statearr_51651_52653[(2)] = inst_51612);

(statearr_51651_52653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51619 === (10))){
var inst_51602 = (state_51618[(2)]);
var state_51618__$1 = state_51618;
var statearr_51652_52654 = state_51618__$1;
(statearr_51652_52654[(2)] = inst_51602);

(statearr_51652_52654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51619 === (8))){
var inst_51574 = (state_51618[(8)]);
var inst_51591 = (state_51618[(11)]);
var tmp51649 = inst_51574;
var inst_51574__$1 = tmp51649;
var inst_51575 = inst_51591;
var state_51618__$1 = (function (){var statearr_51653 = state_51618;
(statearr_51653[(7)] = inst_51575);

(statearr_51653[(8)] = inst_51574__$1);

return statearr_51653;
})();
var statearr_51654_52655 = state_51618__$1;
(statearr_51654_52655[(2)] = null);

(statearr_51654_52655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49349__auto__ = null;
var cljs$core$async$state_machine__49349__auto____0 = (function (){
var statearr_51655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51655[(0)] = cljs$core$async$state_machine__49349__auto__);

(statearr_51655[(1)] = (1));

return statearr_51655;
});
var cljs$core$async$state_machine__49349__auto____1 = (function (state_51618){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_51618);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e51656){var ex__49352__auto__ = e51656;
var statearr_51657_52660 = state_51618;
(statearr_51657_52660[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_51618[(4)]))){
var statearr_51659_52661 = state_51618;
(statearr_51659_52661[(1)] = cljs.core.first((state_51618[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52662 = state_51618;
state_51618 = G__52662;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$state_machine__49349__auto__ = function(state_51618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49349__auto____1.call(this,state_51618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49349__auto____0;
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49349__auto____1;
return cljs$core$async$state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_51664 = f__49451__auto__();
(statearr_51664[(6)] = c__49450__auto___52634);

return statearr_51664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__51672 = arguments.length;
switch (G__51672) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49450__auto___52669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_51773){
var state_val_51774 = (state_51773[(1)]);
if((state_val_51774 === (7))){
var inst_51767 = (state_51773[(2)]);
var state_51773__$1 = state_51773;
var statearr_51775_52671 = state_51773__$1;
(statearr_51775_52671[(2)] = inst_51767);

(statearr_51775_52671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (1))){
var inst_51727 = [];
var inst_51728 = inst_51727;
var inst_51729 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51773__$1 = (function (){var statearr_51776 = state_51773;
(statearr_51776[(7)] = inst_51728);

(statearr_51776[(8)] = inst_51729);

return statearr_51776;
})();
var statearr_51777_52672 = state_51773__$1;
(statearr_51777_52672[(2)] = null);

(statearr_51777_52672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (4))){
var inst_51732 = (state_51773[(9)]);
var inst_51732__$1 = (state_51773[(2)]);
var inst_51733 = (inst_51732__$1 == null);
var inst_51734 = cljs.core.not(inst_51733);
var state_51773__$1 = (function (){var statearr_51778 = state_51773;
(statearr_51778[(9)] = inst_51732__$1);

return statearr_51778;
})();
if(inst_51734){
var statearr_51779_52673 = state_51773__$1;
(statearr_51779_52673[(1)] = (5));

} else {
var statearr_51780_52674 = state_51773__$1;
(statearr_51780_52674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (15))){
var inst_51728 = (state_51773[(7)]);
var inst_51759 = cljs.core.vec(inst_51728);
var state_51773__$1 = state_51773;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51773__$1,(18),out,inst_51759);
} else {
if((state_val_51774 === (13))){
var inst_51754 = (state_51773[(2)]);
var state_51773__$1 = state_51773;
var statearr_51781_52676 = state_51773__$1;
(statearr_51781_52676[(2)] = inst_51754);

(statearr_51781_52676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (6))){
var inst_51728 = (state_51773[(7)]);
var inst_51756 = inst_51728.length;
var inst_51757 = (inst_51756 > (0));
var state_51773__$1 = state_51773;
if(cljs.core.truth_(inst_51757)){
var statearr_51782_52679 = state_51773__$1;
(statearr_51782_52679[(1)] = (15));

} else {
var statearr_51783_52681 = state_51773__$1;
(statearr_51783_52681[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (17))){
var inst_51764 = (state_51773[(2)]);
var inst_51765 = cljs.core.async.close_BANG_(out);
var state_51773__$1 = (function (){var statearr_51785 = state_51773;
(statearr_51785[(10)] = inst_51764);

return statearr_51785;
})();
var statearr_51786_52686 = state_51773__$1;
(statearr_51786_52686[(2)] = inst_51765);

(statearr_51786_52686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (3))){
var inst_51769 = (state_51773[(2)]);
var state_51773__$1 = state_51773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51773__$1,inst_51769);
} else {
if((state_val_51774 === (12))){
var inst_51728 = (state_51773[(7)]);
var inst_51747 = cljs.core.vec(inst_51728);
var state_51773__$1 = state_51773;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51773__$1,(14),out,inst_51747);
} else {
if((state_val_51774 === (2))){
var state_51773__$1 = state_51773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51773__$1,(4),ch);
} else {
if((state_val_51774 === (11))){
var inst_51728 = (state_51773[(7)]);
var inst_51736 = (state_51773[(11)]);
var inst_51732 = (state_51773[(9)]);
var inst_51744 = inst_51728.push(inst_51732);
var tmp51788 = inst_51728;
var inst_51728__$1 = tmp51788;
var inst_51729 = inst_51736;
var state_51773__$1 = (function (){var statearr_51789 = state_51773;
(statearr_51789[(12)] = inst_51744);

(statearr_51789[(7)] = inst_51728__$1);

(statearr_51789[(8)] = inst_51729);

return statearr_51789;
})();
var statearr_51790_52688 = state_51773__$1;
(statearr_51790_52688[(2)] = null);

(statearr_51790_52688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (9))){
var inst_51729 = (state_51773[(8)]);
var inst_51740 = cljs.core.keyword_identical_QMARK_(inst_51729,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_51773__$1 = state_51773;
var statearr_51791_52689 = state_51773__$1;
(statearr_51791_52689[(2)] = inst_51740);

(statearr_51791_52689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (5))){
var inst_51736 = (state_51773[(11)]);
var inst_51732 = (state_51773[(9)]);
var inst_51737 = (state_51773[(13)]);
var inst_51729 = (state_51773[(8)]);
var inst_51736__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51732) : f.call(null,inst_51732));
var inst_51737__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51736__$1,inst_51729);
var state_51773__$1 = (function (){var statearr_51792 = state_51773;
(statearr_51792[(11)] = inst_51736__$1);

(statearr_51792[(13)] = inst_51737__$1);

return statearr_51792;
})();
if(inst_51737__$1){
var statearr_51793_52693 = state_51773__$1;
(statearr_51793_52693[(1)] = (8));

} else {
var statearr_51794_52694 = state_51773__$1;
(statearr_51794_52694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (14))){
var inst_51736 = (state_51773[(11)]);
var inst_51732 = (state_51773[(9)]);
var inst_51749 = (state_51773[(2)]);
var inst_51750 = [];
var inst_51751 = inst_51750.push(inst_51732);
var inst_51728 = inst_51750;
var inst_51729 = inst_51736;
var state_51773__$1 = (function (){var statearr_51795 = state_51773;
(statearr_51795[(14)] = inst_51751);

(statearr_51795[(7)] = inst_51728);

(statearr_51795[(15)] = inst_51749);

(statearr_51795[(8)] = inst_51729);

return statearr_51795;
})();
var statearr_51797_52698 = state_51773__$1;
(statearr_51797_52698[(2)] = null);

(statearr_51797_52698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (16))){
var state_51773__$1 = state_51773;
var statearr_51799_52700 = state_51773__$1;
(statearr_51799_52700[(2)] = null);

(statearr_51799_52700[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (10))){
var inst_51742 = (state_51773[(2)]);
var state_51773__$1 = state_51773;
if(cljs.core.truth_(inst_51742)){
var statearr_51800_52701 = state_51773__$1;
(statearr_51800_52701[(1)] = (11));

} else {
var statearr_51801_52702 = state_51773__$1;
(statearr_51801_52702[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (18))){
var inst_51761 = (state_51773[(2)]);
var state_51773__$1 = state_51773;
var statearr_51802_52703 = state_51773__$1;
(statearr_51802_52703[(2)] = inst_51761);

(statearr_51802_52703[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (8))){
var inst_51737 = (state_51773[(13)]);
var state_51773__$1 = state_51773;
var statearr_51803_52704 = state_51773__$1;
(statearr_51803_52704[(2)] = inst_51737);

(statearr_51803_52704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49349__auto__ = null;
var cljs$core$async$state_machine__49349__auto____0 = (function (){
var statearr_51804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51804[(0)] = cljs$core$async$state_machine__49349__auto__);

(statearr_51804[(1)] = (1));

return statearr_51804;
});
var cljs$core$async$state_machine__49349__auto____1 = (function (state_51773){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_51773);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e51805){var ex__49352__auto__ = e51805;
var statearr_51806_52710 = state_51773;
(statearr_51806_52710[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_51773[(4)]))){
var statearr_51807_52711 = state_51773;
(statearr_51807_52711[(1)] = cljs.core.first((state_51773[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52713 = state_51773;
state_51773 = G__52713;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
cljs$core$async$state_machine__49349__auto__ = function(state_51773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49349__auto____1.call(this,state_51773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49349__auto____0;
cljs$core$async$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49349__auto____1;
return cljs$core$async$state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_51808 = f__49451__auto__();
(statearr_51808[(6)] = c__49450__auto___52669);

return statearr_51808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
