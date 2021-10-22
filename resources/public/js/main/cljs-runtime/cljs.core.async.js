goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__49555 = arguments.length;
switch (G__49555) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49560 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49560 = (function (f,blockable,meta49561){
this.f = f;
this.blockable = blockable;
this.meta49561 = meta49561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49562,meta49561__$1){
var self__ = this;
var _49562__$1 = this;
return (new cljs.core.async.t_cljs$core$async49560(self__.f,self__.blockable,meta49561__$1));
}));

(cljs.core.async.t_cljs$core$async49560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49562){
var self__ = this;
var _49562__$1 = this;
return self__.meta49561;
}));

(cljs.core.async.t_cljs$core$async49560.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49560.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49560.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async49560.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async49560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49561","meta49561",-598166300,null)], null);
}));

(cljs.core.async.t_cljs$core$async49560.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49560");

(cljs.core.async.t_cljs$core$async49560.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49560");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49560.
 */
cljs.core.async.__GT_t_cljs$core$async49560 = (function cljs$core$async$__GT_t_cljs$core$async49560(f__$1,blockable__$1,meta49561){
return (new cljs.core.async.t_cljs$core$async49560(f__$1,blockable__$1,meta49561));
});

}

return (new cljs.core.async.t_cljs$core$async49560(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49596 = arguments.length;
switch (G__49596) {
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
var G__49612 = arguments.length;
switch (G__49612) {
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
var G__49616 = arguments.length;
switch (G__49616) {
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
var val_52087 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52087) : fn1.call(null,val_52087));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52087) : fn1.call(null,val_52087));
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
var G__49622 = arguments.length;
switch (G__49622) {
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
var n__4706__auto___52093 = n;
var x_52094 = (0);
while(true){
if((x_52094 < n__4706__auto___52093)){
(a[x_52094] = x_52094);

var G__52095 = (x_52094 + (1));
x_52094 = G__52095;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49626 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49626 = (function (flag,meta49627){
this.flag = flag;
this.meta49627 = meta49627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49628,meta49627__$1){
var self__ = this;
var _49628__$1 = this;
return (new cljs.core.async.t_cljs$core$async49626(self__.flag,meta49627__$1));
}));

(cljs.core.async.t_cljs$core$async49626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49628){
var self__ = this;
var _49628__$1 = this;
return self__.meta49627;
}));

(cljs.core.async.t_cljs$core$async49626.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49626.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49626.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49626.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async49626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49627","meta49627",-742856833,null)], null);
}));

(cljs.core.async.t_cljs$core$async49626.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49626");

(cljs.core.async.t_cljs$core$async49626.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49626");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49626.
 */
cljs.core.async.__GT_t_cljs$core$async49626 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49626(flag__$1,meta49627){
return (new cljs.core.async.t_cljs$core$async49626(flag__$1,meta49627));
});

}

return (new cljs.core.async.t_cljs$core$async49626(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49633 = (function (flag,cb,meta49634){
this.flag = flag;
this.cb = cb;
this.meta49634 = meta49634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49635,meta49634__$1){
var self__ = this;
var _49635__$1 = this;
return (new cljs.core.async.t_cljs$core$async49633(self__.flag,self__.cb,meta49634__$1));
}));

(cljs.core.async.t_cljs$core$async49633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49635){
var self__ = this;
var _49635__$1 = this;
return self__.meta49634;
}));

(cljs.core.async.t_cljs$core$async49633.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49633.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49633.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49633.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async49633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta49634","meta49634",1449519325,null)], null);
}));

(cljs.core.async.t_cljs$core$async49633.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49633");

(cljs.core.async.t_cljs$core$async49633.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49633");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49633.
 */
cljs.core.async.__GT_t_cljs$core$async49633 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async49633(flag__$1,cb__$1,meta49634){
return (new cljs.core.async.t_cljs$core$async49633(flag__$1,cb__$1,meta49634));
});

}

return (new cljs.core.async.t_cljs$core$async49633(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__49641_SHARP_){
var G__49649 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49641_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49649) : fret.call(null,G__49649));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49642_SHARP_){
var G__49650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49642_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49650) : fret.call(null,G__49650));
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
var G__52096 = (i + (1));
i = G__52096;
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
var len__4829__auto___52098 = arguments.length;
var i__4830__auto___52099 = (0);
while(true){
if((i__4830__auto___52099 < len__4829__auto___52098)){
args__4835__auto__.push((arguments[i__4830__auto___52099]));

var G__52100 = (i__4830__auto___52099 + (1));
i__4830__auto___52099 = G__52100;
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
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq49651){
var G__49652 = cljs.core.first(seq49651);
var seq49651__$1 = cljs.core.next(seq49651);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49652,seq49651__$1);
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
var c__49445__auto___52103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_49691){
var state_val_49692 = (state_49691[(1)]);
if((state_val_49692 === (7))){
var inst_49687 = (state_49691[(2)]);
var state_49691__$1 = state_49691;
var statearr_49698_52104 = state_49691__$1;
(statearr_49698_52104[(2)] = inst_49687);

(statearr_49698_52104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (1))){
var state_49691__$1 = state_49691;
var statearr_49699_52105 = state_49691__$1;
(statearr_49699_52105[(2)] = null);

(statearr_49699_52105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (4))){
var inst_49670 = (state_49691[(7)]);
var inst_49670__$1 = (state_49691[(2)]);
var inst_49671 = (inst_49670__$1 == null);
var state_49691__$1 = (function (){var statearr_49708 = state_49691;
(statearr_49708[(7)] = inst_49670__$1);

return statearr_49708;
})();
if(cljs.core.truth_(inst_49671)){
var statearr_49711_52106 = state_49691__$1;
(statearr_49711_52106[(1)] = (5));

} else {
var statearr_49712_52107 = state_49691__$1;
(statearr_49712_52107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (13))){
var state_49691__$1 = state_49691;
var statearr_49713_52108 = state_49691__$1;
(statearr_49713_52108[(2)] = null);

(statearr_49713_52108[(1)] = (14));


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
var statearr_49717_52109 = state_49691__$1;
(statearr_49717_52109[(2)] = null);

(statearr_49717_52109[(1)] = (2));


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
var statearr_49718_52110 = state_49691__$1;
(statearr_49718_52110[(1)] = (12));

} else {
var statearr_49719_52111 = state_49691__$1;
(statearr_49719_52111[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (9))){
var state_49691__$1 = state_49691;
var statearr_49720_52113 = state_49691__$1;
(statearr_49720_52113[(2)] = null);

(statearr_49720_52113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (5))){
var state_49691__$1 = state_49691;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49722_52114 = state_49691__$1;
(statearr_49722_52114[(1)] = (8));

} else {
var statearr_49723_52115 = state_49691__$1;
(statearr_49723_52115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (14))){
var inst_49685 = (state_49691[(2)]);
var state_49691__$1 = state_49691;
var statearr_49724_52116 = state_49691__$1;
(statearr_49724_52116[(2)] = inst_49685);

(statearr_49724_52116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (10))){
var inst_49677 = (state_49691[(2)]);
var state_49691__$1 = state_49691;
var statearr_49727_52117 = state_49691__$1;
(statearr_49727_52117[(2)] = inst_49677);

(statearr_49727_52117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49692 === (8))){
var inst_49674 = cljs.core.async.close_BANG_(to);
var state_49691__$1 = state_49691;
var statearr_49728_52119 = state_49691__$1;
(statearr_49728_52119[(2)] = inst_49674);

(statearr_49728_52119[(1)] = (10));


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
var cljs$core$async$state_machine__49335__auto__ = null;
var cljs$core$async$state_machine__49335__auto____0 = (function (){
var statearr_49729 = [null,null,null,null,null,null,null,null];
(statearr_49729[(0)] = cljs$core$async$state_machine__49335__auto__);

(statearr_49729[(1)] = (1));

return statearr_49729;
});
var cljs$core$async$state_machine__49335__auto____1 = (function (state_49691){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_49691);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e49730){var ex__49338__auto__ = e49730;
var statearr_49731_52121 = state_49691;
(statearr_49731_52121[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_49691[(4)]))){
var statearr_49732_52122 = state_49691;
(statearr_49732_52122[(1)] = cljs.core.first((state_49691[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52124 = state_49691;
state_49691 = G__52124;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$state_machine__49335__auto__ = function(state_49691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49335__auto____1.call(this,state_49691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49335__auto____0;
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49335__auto____1;
return cljs$core$async$state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_49733 = f__49446__auto__();
(statearr_49733[(6)] = c__49445__auto___52103);

return statearr_49733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
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
var process = (function (p__49736){
var vec__49737 = p__49736;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49737,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49737,(1),null);
var job = vec__49737;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__49445__auto___52126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_49744){
var state_val_49745 = (state_49744[(1)]);
if((state_val_49745 === (1))){
var state_49744__$1 = state_49744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49744__$1,(2),res,v);
} else {
if((state_val_49745 === (2))){
var inst_49741 = (state_49744[(2)]);
var inst_49742 = cljs.core.async.close_BANG_(res);
var state_49744__$1 = (function (){var statearr_49748 = state_49744;
(statearr_49748[(7)] = inst_49741);

return statearr_49748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49744__$1,inst_49742);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____0 = (function (){
var statearr_49749 = [null,null,null,null,null,null,null,null];
(statearr_49749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__);

(statearr_49749[(1)] = (1));

return statearr_49749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____1 = (function (state_49744){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_49744);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e49750){var ex__49338__auto__ = e49750;
var statearr_49751_52129 = state_49744;
(statearr_49751_52129[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_49744[(4)]))){
var statearr_49752_52130 = state_49744;
(statearr_49752_52130[(1)] = cljs.core.first((state_49744[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52131 = state_49744;
state_49744 = G__52131;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__ = function(state_49744){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____1.call(this,state_49744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_49753 = f__49446__auto__();
(statearr_49753[(6)] = c__49445__auto___52126);

return statearr_49753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__49754){
var vec__49755 = p__49754;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49755,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49755,(1),null);
var job = vec__49755;
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
var n__4706__auto___52132 = n;
var __52133 = (0);
while(true){
if((__52133 < n__4706__auto___52132)){
var G__49758_52134 = type;
var G__49758_52135__$1 = (((G__49758_52134 instanceof cljs.core.Keyword))?G__49758_52134.fqn:null);
switch (G__49758_52135__$1) {
case "compute":
var c__49445__auto___52137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52133,c__49445__auto___52137,G__49758_52134,G__49758_52135__$1,n__4706__auto___52132,jobs,results,process,async){
return (function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = ((function (__52133,c__49445__auto___52137,G__49758_52134,G__49758_52135__$1,n__4706__auto___52132,jobs,results,process,async){
return (function (state_49773){
var state_val_49774 = (state_49773[(1)]);
if((state_val_49774 === (1))){
var state_49773__$1 = state_49773;
var statearr_49777_52138 = state_49773__$1;
(statearr_49777_52138[(2)] = null);

(statearr_49777_52138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49774 === (2))){
var state_49773__$1 = state_49773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49773__$1,(4),jobs);
} else {
if((state_val_49774 === (3))){
var inst_49771 = (state_49773[(2)]);
var state_49773__$1 = state_49773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49773__$1,inst_49771);
} else {
if((state_val_49774 === (4))){
var inst_49763 = (state_49773[(2)]);
var inst_49764 = process(inst_49763);
var state_49773__$1 = state_49773;
if(cljs.core.truth_(inst_49764)){
var statearr_49783_52139 = state_49773__$1;
(statearr_49783_52139[(1)] = (5));

} else {
var statearr_49785_52140 = state_49773__$1;
(statearr_49785_52140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49774 === (5))){
var state_49773__$1 = state_49773;
var statearr_49788_52141 = state_49773__$1;
(statearr_49788_52141[(2)] = null);

(statearr_49788_52141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49774 === (6))){
var state_49773__$1 = state_49773;
var statearr_49791_52142 = state_49773__$1;
(statearr_49791_52142[(2)] = null);

(statearr_49791_52142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49774 === (7))){
var inst_49769 = (state_49773[(2)]);
var state_49773__$1 = state_49773;
var statearr_49792_52143 = state_49773__$1;
(statearr_49792_52143[(2)] = inst_49769);

(statearr_49792_52143[(1)] = (3));


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
});})(__52133,c__49445__auto___52137,G__49758_52134,G__49758_52135__$1,n__4706__auto___52132,jobs,results,process,async))
;
return ((function (__52133,switch__49334__auto__,c__49445__auto___52137,G__49758_52134,G__49758_52135__$1,n__4706__auto___52132,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____0 = (function (){
var statearr_49796 = [null,null,null,null,null,null,null];
(statearr_49796[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__);

(statearr_49796[(1)] = (1));

return statearr_49796;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____1 = (function (state_49773){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_49773);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e49797){var ex__49338__auto__ = e49797;
var statearr_49798_52145 = state_49773;
(statearr_49798_52145[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_49773[(4)]))){
var statearr_49799_52146 = state_49773;
(statearr_49799_52146[(1)] = cljs.core.first((state_49773[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52147 = state_49773;
state_49773 = G__52147;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__ = function(state_49773){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____1.call(this,state_49773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__;
})()
;})(__52133,switch__49334__auto__,c__49445__auto___52137,G__49758_52134,G__49758_52135__$1,n__4706__auto___52132,jobs,results,process,async))
})();
var state__49447__auto__ = (function (){var statearr_49800 = f__49446__auto__();
(statearr_49800[(6)] = c__49445__auto___52137);

return statearr_49800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
});})(__52133,c__49445__auto___52137,G__49758_52134,G__49758_52135__$1,n__4706__auto___52132,jobs,results,process,async))
);


break;
case "async":
var c__49445__auto___52148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52133,c__49445__auto___52148,G__49758_52134,G__49758_52135__$1,n__4706__auto___52132,jobs,results,process,async){
return (function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = ((function (__52133,c__49445__auto___52148,G__49758_52134,G__49758_52135__$1,n__4706__auto___52132,jobs,results,process,async){
return (function (state_49817){
var state_val_49818 = (state_49817[(1)]);
if((state_val_49818 === (1))){
var state_49817__$1 = state_49817;
var statearr_49820_52150 = state_49817__$1;
(statearr_49820_52150[(2)] = null);

(statearr_49820_52150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49818 === (2))){
var state_49817__$1 = state_49817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49817__$1,(4),jobs);
} else {
if((state_val_49818 === (3))){
var inst_49815 = (state_49817[(2)]);
var state_49817__$1 = state_49817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49817__$1,inst_49815);
} else {
if((state_val_49818 === (4))){
var inst_49807 = (state_49817[(2)]);
var inst_49808 = async(inst_49807);
var state_49817__$1 = state_49817;
if(cljs.core.truth_(inst_49808)){
var statearr_49821_52152 = state_49817__$1;
(statearr_49821_52152[(1)] = (5));

} else {
var statearr_49822_52153 = state_49817__$1;
(statearr_49822_52153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49818 === (5))){
var state_49817__$1 = state_49817;
var statearr_49823_52154 = state_49817__$1;
(statearr_49823_52154[(2)] = null);

(statearr_49823_52154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49818 === (6))){
var state_49817__$1 = state_49817;
var statearr_49824_52156 = state_49817__$1;
(statearr_49824_52156[(2)] = null);

(statearr_49824_52156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49818 === (7))){
var inst_49813 = (state_49817[(2)]);
var state_49817__$1 = state_49817;
var statearr_49831_52157 = state_49817__$1;
(statearr_49831_52157[(2)] = inst_49813);

(statearr_49831_52157[(1)] = (3));


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
});})(__52133,c__49445__auto___52148,G__49758_52134,G__49758_52135__$1,n__4706__auto___52132,jobs,results,process,async))
;
return ((function (__52133,switch__49334__auto__,c__49445__auto___52148,G__49758_52134,G__49758_52135__$1,n__4706__auto___52132,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____0 = (function (){
var statearr_49832 = [null,null,null,null,null,null,null];
(statearr_49832[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__);

(statearr_49832[(1)] = (1));

return statearr_49832;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____1 = (function (state_49817){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_49817);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e49833){var ex__49338__auto__ = e49833;
var statearr_49838_52158 = state_49817;
(statearr_49838_52158[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_49817[(4)]))){
var statearr_49841_52159 = state_49817;
(statearr_49841_52159[(1)] = cljs.core.first((state_49817[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52160 = state_49817;
state_49817 = G__52160;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__ = function(state_49817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____1.call(this,state_49817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__;
})()
;})(__52133,switch__49334__auto__,c__49445__auto___52148,G__49758_52134,G__49758_52135__$1,n__4706__auto___52132,jobs,results,process,async))
})();
var state__49447__auto__ = (function (){var statearr_49842 = f__49446__auto__();
(statearr_49842[(6)] = c__49445__auto___52148);

return statearr_49842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
});})(__52133,c__49445__auto___52148,G__49758_52134,G__49758_52135__$1,n__4706__auto___52132,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49758_52135__$1)].join('')));

}

var G__52161 = (__52133 + (1));
__52133 = G__52161;
continue;
} else {
}
break;
}

var c__49445__auto___52162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_49868){
var state_val_49869 = (state_49868[(1)]);
if((state_val_49869 === (7))){
var inst_49860 = (state_49868[(2)]);
var state_49868__$1 = state_49868;
var statearr_49875_52163 = state_49868__$1;
(statearr_49875_52163[(2)] = inst_49860);

(statearr_49875_52163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49869 === (1))){
var state_49868__$1 = state_49868;
var statearr_49876_52164 = state_49868__$1;
(statearr_49876_52164[(2)] = null);

(statearr_49876_52164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49869 === (4))){
var inst_49845 = (state_49868[(7)]);
var inst_49845__$1 = (state_49868[(2)]);
var inst_49846 = (inst_49845__$1 == null);
var state_49868__$1 = (function (){var statearr_49878 = state_49868;
(statearr_49878[(7)] = inst_49845__$1);

return statearr_49878;
})();
if(cljs.core.truth_(inst_49846)){
var statearr_49879_52165 = state_49868__$1;
(statearr_49879_52165[(1)] = (5));

} else {
var statearr_49880_52166 = state_49868__$1;
(statearr_49880_52166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49869 === (6))){
var inst_49845 = (state_49868[(7)]);
var inst_49850 = (state_49868[(8)]);
var inst_49850__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_49851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49852 = [inst_49845,inst_49850__$1];
var inst_49853 = (new cljs.core.PersistentVector(null,2,(5),inst_49851,inst_49852,null));
var state_49868__$1 = (function (){var statearr_49882 = state_49868;
(statearr_49882[(8)] = inst_49850__$1);

return statearr_49882;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49868__$1,(8),jobs,inst_49853);
} else {
if((state_val_49869 === (3))){
var inst_49862 = (state_49868[(2)]);
var state_49868__$1 = state_49868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49868__$1,inst_49862);
} else {
if((state_val_49869 === (2))){
var state_49868__$1 = state_49868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49868__$1,(4),from);
} else {
if((state_val_49869 === (9))){
var inst_49857 = (state_49868[(2)]);
var state_49868__$1 = (function (){var statearr_49883 = state_49868;
(statearr_49883[(9)] = inst_49857);

return statearr_49883;
})();
var statearr_49884_52167 = state_49868__$1;
(statearr_49884_52167[(2)] = null);

(statearr_49884_52167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49869 === (5))){
var inst_49848 = cljs.core.async.close_BANG_(jobs);
var state_49868__$1 = state_49868;
var statearr_49885_52169 = state_49868__$1;
(statearr_49885_52169[(2)] = inst_49848);

(statearr_49885_52169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49869 === (8))){
var inst_49850 = (state_49868[(8)]);
var inst_49855 = (state_49868[(2)]);
var state_49868__$1 = (function (){var statearr_49886 = state_49868;
(statearr_49886[(10)] = inst_49855);

return statearr_49886;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49868__$1,(9),results,inst_49850);
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
var cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____0 = (function (){
var statearr_49888 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__);

(statearr_49888[(1)] = (1));

return statearr_49888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____1 = (function (state_49868){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_49868);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e49889){var ex__49338__auto__ = e49889;
var statearr_49890_52171 = state_49868;
(statearr_49890_52171[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_49868[(4)]))){
var statearr_49891_52172 = state_49868;
(statearr_49891_52172[(1)] = cljs.core.first((state_49868[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52173 = state_49868;
state_49868 = G__52173;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__ = function(state_49868){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____1.call(this,state_49868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_49892 = f__49446__auto__();
(statearr_49892[(6)] = c__49445__auto___52162);

return statearr_49892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
}));


var c__49445__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_49938){
var state_val_49939 = (state_49938[(1)]);
if((state_val_49939 === (7))){
var inst_49932 = (state_49938[(2)]);
var state_49938__$1 = state_49938;
var statearr_49940_52175 = state_49938__$1;
(statearr_49940_52175[(2)] = inst_49932);

(statearr_49940_52175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (20))){
var state_49938__$1 = state_49938;
var statearr_49941_52177 = state_49938__$1;
(statearr_49941_52177[(2)] = null);

(statearr_49941_52177[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (1))){
var state_49938__$1 = state_49938;
var statearr_49942_52178 = state_49938__$1;
(statearr_49942_52178[(2)] = null);

(statearr_49942_52178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (4))){
var inst_49897 = (state_49938[(7)]);
var inst_49897__$1 = (state_49938[(2)]);
var inst_49898 = (inst_49897__$1 == null);
var state_49938__$1 = (function (){var statearr_49943 = state_49938;
(statearr_49943[(7)] = inst_49897__$1);

return statearr_49943;
})();
if(cljs.core.truth_(inst_49898)){
var statearr_49944_52179 = state_49938__$1;
(statearr_49944_52179[(1)] = (5));

} else {
var statearr_49945_52180 = state_49938__$1;
(statearr_49945_52180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (15))){
var inst_49911 = (state_49938[(8)]);
var state_49938__$1 = state_49938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49938__$1,(18),to,inst_49911);
} else {
if((state_val_49939 === (21))){
var inst_49926 = (state_49938[(2)]);
var state_49938__$1 = state_49938;
var statearr_49946_52183 = state_49938__$1;
(statearr_49946_52183[(2)] = inst_49926);

(statearr_49946_52183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (13))){
var inst_49928 = (state_49938[(2)]);
var state_49938__$1 = (function (){var statearr_49948 = state_49938;
(statearr_49948[(9)] = inst_49928);

return statearr_49948;
})();
var statearr_49949_52184 = state_49938__$1;
(statearr_49949_52184[(2)] = null);

(statearr_49949_52184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (6))){
var inst_49897 = (state_49938[(7)]);
var state_49938__$1 = state_49938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49938__$1,(11),inst_49897);
} else {
if((state_val_49939 === (17))){
var inst_49920 = (state_49938[(2)]);
var state_49938__$1 = state_49938;
if(cljs.core.truth_(inst_49920)){
var statearr_49950_52186 = state_49938__$1;
(statearr_49950_52186[(1)] = (19));

} else {
var statearr_49951_52187 = state_49938__$1;
(statearr_49951_52187[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (3))){
var inst_49935 = (state_49938[(2)]);
var state_49938__$1 = state_49938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49938__$1,inst_49935);
} else {
if((state_val_49939 === (12))){
var inst_49908 = (state_49938[(10)]);
var state_49938__$1 = state_49938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49938__$1,(14),inst_49908);
} else {
if((state_val_49939 === (2))){
var state_49938__$1 = state_49938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49938__$1,(4),results);
} else {
if((state_val_49939 === (19))){
var state_49938__$1 = state_49938;
var statearr_49952_52188 = state_49938__$1;
(statearr_49952_52188[(2)] = null);

(statearr_49952_52188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (11))){
var inst_49908 = (state_49938[(2)]);
var state_49938__$1 = (function (){var statearr_49954 = state_49938;
(statearr_49954[(10)] = inst_49908);

return statearr_49954;
})();
var statearr_49955_52189 = state_49938__$1;
(statearr_49955_52189[(2)] = null);

(statearr_49955_52189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (9))){
var state_49938__$1 = state_49938;
var statearr_49956_52195 = state_49938__$1;
(statearr_49956_52195[(2)] = null);

(statearr_49956_52195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (5))){
var state_49938__$1 = state_49938;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49961_52200 = state_49938__$1;
(statearr_49961_52200[(1)] = (8));

} else {
var statearr_49962_52201 = state_49938__$1;
(statearr_49962_52201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (14))){
var inst_49914 = (state_49938[(11)]);
var inst_49911 = (state_49938[(8)]);
var inst_49911__$1 = (state_49938[(2)]);
var inst_49913 = (inst_49911__$1 == null);
var inst_49914__$1 = cljs.core.not(inst_49913);
var state_49938__$1 = (function (){var statearr_49963 = state_49938;
(statearr_49963[(11)] = inst_49914__$1);

(statearr_49963[(8)] = inst_49911__$1);

return statearr_49963;
})();
if(inst_49914__$1){
var statearr_49964_52205 = state_49938__$1;
(statearr_49964_52205[(1)] = (15));

} else {
var statearr_49965_52206 = state_49938__$1;
(statearr_49965_52206[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (16))){
var inst_49914 = (state_49938[(11)]);
var state_49938__$1 = state_49938;
var statearr_49966_52207 = state_49938__$1;
(statearr_49966_52207[(2)] = inst_49914);

(statearr_49966_52207[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (10))){
var inst_49905 = (state_49938[(2)]);
var state_49938__$1 = state_49938;
var statearr_49967_52209 = state_49938__$1;
(statearr_49967_52209[(2)] = inst_49905);

(statearr_49967_52209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (18))){
var inst_49917 = (state_49938[(2)]);
var state_49938__$1 = state_49938;
var statearr_49968_52210 = state_49938__$1;
(statearr_49968_52210[(2)] = inst_49917);

(statearr_49968_52210[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (8))){
var inst_49901 = cljs.core.async.close_BANG_(to);
var state_49938__$1 = state_49938;
var statearr_49969_52213 = state_49938__$1;
(statearr_49969_52213[(2)] = inst_49901);

(statearr_49969_52213[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____0 = (function (){
var statearr_49970 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49970[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__);

(statearr_49970[(1)] = (1));

return statearr_49970;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____1 = (function (state_49938){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_49938);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e49971){var ex__49338__auto__ = e49971;
var statearr_49972_52219 = state_49938;
(statearr_49972_52219[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_49938[(4)]))){
var statearr_49973_52220 = state_49938;
(statearr_49973_52220[(1)] = cljs.core.first((state_49938[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52221 = state_49938;
state_49938 = G__52221;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__ = function(state_49938){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____1.call(this,state_49938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_49975 = f__49446__auto__();
(statearr_49975[(6)] = c__49445__auto__);

return statearr_49975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
}));

return c__49445__auto__;
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
var G__49984 = arguments.length;
switch (G__49984) {
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
var G__49997 = arguments.length;
switch (G__49997) {
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
var G__50007 = arguments.length;
switch (G__50007) {
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
var c__49445__auto___52238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_50036){
var state_val_50037 = (state_50036[(1)]);
if((state_val_50037 === (7))){
var inst_50032 = (state_50036[(2)]);
var state_50036__$1 = state_50036;
var statearr_50038_52239 = state_50036__$1;
(statearr_50038_52239[(2)] = inst_50032);

(statearr_50038_52239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50037 === (1))){
var state_50036__$1 = state_50036;
var statearr_50039_52240 = state_50036__$1;
(statearr_50039_52240[(2)] = null);

(statearr_50039_52240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50037 === (4))){
var inst_50012 = (state_50036[(7)]);
var inst_50012__$1 = (state_50036[(2)]);
var inst_50014 = (inst_50012__$1 == null);
var state_50036__$1 = (function (){var statearr_50044 = state_50036;
(statearr_50044[(7)] = inst_50012__$1);

return statearr_50044;
})();
if(cljs.core.truth_(inst_50014)){
var statearr_50048_52241 = state_50036__$1;
(statearr_50048_52241[(1)] = (5));

} else {
var statearr_50049_52243 = state_50036__$1;
(statearr_50049_52243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50037 === (13))){
var state_50036__$1 = state_50036;
var statearr_50051_52246 = state_50036__$1;
(statearr_50051_52246[(2)] = null);

(statearr_50051_52246[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50037 === (6))){
var inst_50012 = (state_50036[(7)]);
var inst_50019 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50012) : p.call(null,inst_50012));
var state_50036__$1 = state_50036;
if(cljs.core.truth_(inst_50019)){
var statearr_50052_52248 = state_50036__$1;
(statearr_50052_52248[(1)] = (9));

} else {
var statearr_50053_52250 = state_50036__$1;
(statearr_50053_52250[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50037 === (3))){
var inst_50034 = (state_50036[(2)]);
var state_50036__$1 = state_50036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50036__$1,inst_50034);
} else {
if((state_val_50037 === (12))){
var state_50036__$1 = state_50036;
var statearr_50054_52251 = state_50036__$1;
(statearr_50054_52251[(2)] = null);

(statearr_50054_52251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50037 === (2))){
var state_50036__$1 = state_50036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50036__$1,(4),ch);
} else {
if((state_val_50037 === (11))){
var inst_50012 = (state_50036[(7)]);
var inst_50023 = (state_50036[(2)]);
var state_50036__$1 = state_50036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50036__$1,(8),inst_50023,inst_50012);
} else {
if((state_val_50037 === (9))){
var state_50036__$1 = state_50036;
var statearr_50055_52252 = state_50036__$1;
(statearr_50055_52252[(2)] = tc);

(statearr_50055_52252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50037 === (5))){
var inst_50016 = cljs.core.async.close_BANG_(tc);
var inst_50017 = cljs.core.async.close_BANG_(fc);
var state_50036__$1 = (function (){var statearr_50057 = state_50036;
(statearr_50057[(8)] = inst_50016);

return statearr_50057;
})();
var statearr_50058_52253 = state_50036__$1;
(statearr_50058_52253[(2)] = inst_50017);

(statearr_50058_52253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50037 === (14))){
var inst_50030 = (state_50036[(2)]);
var state_50036__$1 = state_50036;
var statearr_50059_52254 = state_50036__$1;
(statearr_50059_52254[(2)] = inst_50030);

(statearr_50059_52254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50037 === (10))){
var state_50036__$1 = state_50036;
var statearr_50061_52255 = state_50036__$1;
(statearr_50061_52255[(2)] = fc);

(statearr_50061_52255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50037 === (8))){
var inst_50025 = (state_50036[(2)]);
var state_50036__$1 = state_50036;
if(cljs.core.truth_(inst_50025)){
var statearr_50062_52256 = state_50036__$1;
(statearr_50062_52256[(1)] = (12));

} else {
var statearr_50063_52257 = state_50036__$1;
(statearr_50063_52257[(1)] = (13));

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
var cljs$core$async$state_machine__49335__auto__ = null;
var cljs$core$async$state_machine__49335__auto____0 = (function (){
var statearr_50067 = [null,null,null,null,null,null,null,null,null];
(statearr_50067[(0)] = cljs$core$async$state_machine__49335__auto__);

(statearr_50067[(1)] = (1));

return statearr_50067;
});
var cljs$core$async$state_machine__49335__auto____1 = (function (state_50036){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_50036);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e50068){var ex__49338__auto__ = e50068;
var statearr_50069_52262 = state_50036;
(statearr_50069_52262[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_50036[(4)]))){
var statearr_50070_52263 = state_50036;
(statearr_50070_52263[(1)] = cljs.core.first((state_50036[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52264 = state_50036;
state_50036 = G__52264;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$state_machine__49335__auto__ = function(state_50036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49335__auto____1.call(this,state_50036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49335__auto____0;
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49335__auto____1;
return cljs$core$async$state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_50073 = f__49446__auto__();
(statearr_50073[(6)] = c__49445__auto___52238);

return statearr_50073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
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
var c__49445__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_50103){
var state_val_50104 = (state_50103[(1)]);
if((state_val_50104 === (7))){
var inst_50099 = (state_50103[(2)]);
var state_50103__$1 = state_50103;
var statearr_50111_52270 = state_50103__$1;
(statearr_50111_52270[(2)] = inst_50099);

(statearr_50111_52270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50104 === (1))){
var inst_50075 = init;
var inst_50079 = inst_50075;
var state_50103__$1 = (function (){var statearr_50112 = state_50103;
(statearr_50112[(7)] = inst_50079);

return statearr_50112;
})();
var statearr_50114_52271 = state_50103__$1;
(statearr_50114_52271[(2)] = null);

(statearr_50114_52271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50104 === (4))){
var inst_50086 = (state_50103[(8)]);
var inst_50086__$1 = (state_50103[(2)]);
var inst_50087 = (inst_50086__$1 == null);
var state_50103__$1 = (function (){var statearr_50119 = state_50103;
(statearr_50119[(8)] = inst_50086__$1);

return statearr_50119;
})();
if(cljs.core.truth_(inst_50087)){
var statearr_50120_52273 = state_50103__$1;
(statearr_50120_52273[(1)] = (5));

} else {
var statearr_50121_52274 = state_50103__$1;
(statearr_50121_52274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50104 === (6))){
var inst_50090 = (state_50103[(9)]);
var inst_50079 = (state_50103[(7)]);
var inst_50086 = (state_50103[(8)]);
var inst_50090__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50079,inst_50086) : f.call(null,inst_50079,inst_50086));
var inst_50091 = cljs.core.reduced_QMARK_(inst_50090__$1);
var state_50103__$1 = (function (){var statearr_50122 = state_50103;
(statearr_50122[(9)] = inst_50090__$1);

return statearr_50122;
})();
if(inst_50091){
var statearr_50123_52278 = state_50103__$1;
(statearr_50123_52278[(1)] = (8));

} else {
var statearr_50124_52279 = state_50103__$1;
(statearr_50124_52279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50104 === (3))){
var inst_50101 = (state_50103[(2)]);
var state_50103__$1 = state_50103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50103__$1,inst_50101);
} else {
if((state_val_50104 === (2))){
var state_50103__$1 = state_50103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50103__$1,(4),ch);
} else {
if((state_val_50104 === (9))){
var inst_50090 = (state_50103[(9)]);
var inst_50079 = inst_50090;
var state_50103__$1 = (function (){var statearr_50129 = state_50103;
(statearr_50129[(7)] = inst_50079);

return statearr_50129;
})();
var statearr_50133_52281 = state_50103__$1;
(statearr_50133_52281[(2)] = null);

(statearr_50133_52281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50104 === (5))){
var inst_50079 = (state_50103[(7)]);
var state_50103__$1 = state_50103;
var statearr_50134_52285 = state_50103__$1;
(statearr_50134_52285[(2)] = inst_50079);

(statearr_50134_52285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50104 === (10))){
var inst_50097 = (state_50103[(2)]);
var state_50103__$1 = state_50103;
var statearr_50138_52286 = state_50103__$1;
(statearr_50138_52286[(2)] = inst_50097);

(statearr_50138_52286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50104 === (8))){
var inst_50090 = (state_50103[(9)]);
var inst_50093 = cljs.core.deref(inst_50090);
var state_50103__$1 = state_50103;
var statearr_50139_52288 = state_50103__$1;
(statearr_50139_52288[(2)] = inst_50093);

(statearr_50139_52288[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__49335__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49335__auto____0 = (function (){
var statearr_50140 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50140[(0)] = cljs$core$async$reduce_$_state_machine__49335__auto__);

(statearr_50140[(1)] = (1));

return statearr_50140;
});
var cljs$core$async$reduce_$_state_machine__49335__auto____1 = (function (state_50103){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_50103);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e50141){var ex__49338__auto__ = e50141;
var statearr_50142_52294 = state_50103;
(statearr_50142_52294[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_50103[(4)]))){
var statearr_50143_52295 = state_50103;
(statearr_50143_52295[(1)] = cljs.core.first((state_50103[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52296 = state_50103;
state_50103 = G__52296;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49335__auto__ = function(state_50103){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49335__auto____1.call(this,state_50103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49335__auto____0;
cljs$core$async$reduce_$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49335__auto____1;
return cljs$core$async$reduce_$_state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_50144 = f__49446__auto__();
(statearr_50144[(6)] = c__49445__auto__);

return statearr_50144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
}));

return c__49445__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__49445__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_50155){
var state_val_50156 = (state_50155[(1)]);
if((state_val_50156 === (1))){
var inst_50150 = cljs.core.async.reduce(f__$1,init,ch);
var state_50155__$1 = state_50155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50155__$1,(2),inst_50150);
} else {
if((state_val_50156 === (2))){
var inst_50152 = (state_50155[(2)]);
var inst_50153 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50152) : f__$1.call(null,inst_50152));
var state_50155__$1 = state_50155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50155__$1,inst_50153);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__49335__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49335__auto____0 = (function (){
var statearr_50164 = [null,null,null,null,null,null,null];
(statearr_50164[(0)] = cljs$core$async$transduce_$_state_machine__49335__auto__);

(statearr_50164[(1)] = (1));

return statearr_50164;
});
var cljs$core$async$transduce_$_state_machine__49335__auto____1 = (function (state_50155){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_50155);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e50165){var ex__49338__auto__ = e50165;
var statearr_50166_52304 = state_50155;
(statearr_50166_52304[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_50155[(4)]))){
var statearr_50167_52305 = state_50155;
(statearr_50167_52305[(1)] = cljs.core.first((state_50155[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52307 = state_50155;
state_50155 = G__52307;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49335__auto__ = function(state_50155){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49335__auto____1.call(this,state_50155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49335__auto____0;
cljs$core$async$transduce_$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49335__auto____1;
return cljs$core$async$transduce_$_state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_50168 = f__49446__auto__();
(statearr_50168[(6)] = c__49445__auto__);

return statearr_50168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
}));

return c__49445__auto__;
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
var G__50173 = arguments.length;
switch (G__50173) {
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
var c__49445__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_50201){
var state_val_50202 = (state_50201[(1)]);
if((state_val_50202 === (7))){
var inst_50183 = (state_50201[(2)]);
var state_50201__$1 = state_50201;
var statearr_50203_52318 = state_50201__$1;
(statearr_50203_52318[(2)] = inst_50183);

(statearr_50203_52318[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (1))){
var inst_50174 = cljs.core.seq(coll);
var inst_50175 = inst_50174;
var state_50201__$1 = (function (){var statearr_50204 = state_50201;
(statearr_50204[(7)] = inst_50175);

return statearr_50204;
})();
var statearr_50205_52322 = state_50201__$1;
(statearr_50205_52322[(2)] = null);

(statearr_50205_52322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (4))){
var inst_50175 = (state_50201[(7)]);
var inst_50181 = cljs.core.first(inst_50175);
var state_50201__$1 = state_50201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50201__$1,(7),ch,inst_50181);
} else {
if((state_val_50202 === (13))){
var inst_50195 = (state_50201[(2)]);
var state_50201__$1 = state_50201;
var statearr_50206_52324 = state_50201__$1;
(statearr_50206_52324[(2)] = inst_50195);

(statearr_50206_52324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (6))){
var inst_50186 = (state_50201[(2)]);
var state_50201__$1 = state_50201;
if(cljs.core.truth_(inst_50186)){
var statearr_50207_52325 = state_50201__$1;
(statearr_50207_52325[(1)] = (8));

} else {
var statearr_50208_52327 = state_50201__$1;
(statearr_50208_52327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (3))){
var inst_50199 = (state_50201[(2)]);
var state_50201__$1 = state_50201;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50201__$1,inst_50199);
} else {
if((state_val_50202 === (12))){
var state_50201__$1 = state_50201;
var statearr_50209_52328 = state_50201__$1;
(statearr_50209_52328[(2)] = null);

(statearr_50209_52328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (2))){
var inst_50175 = (state_50201[(7)]);
var state_50201__$1 = state_50201;
if(cljs.core.truth_(inst_50175)){
var statearr_50210_52329 = state_50201__$1;
(statearr_50210_52329[(1)] = (4));

} else {
var statearr_50211_52330 = state_50201__$1;
(statearr_50211_52330[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (11))){
var inst_50192 = cljs.core.async.close_BANG_(ch);
var state_50201__$1 = state_50201;
var statearr_50215_52331 = state_50201__$1;
(statearr_50215_52331[(2)] = inst_50192);

(statearr_50215_52331[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (9))){
var state_50201__$1 = state_50201;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50216_52336 = state_50201__$1;
(statearr_50216_52336[(1)] = (11));

} else {
var statearr_50217_52337 = state_50201__$1;
(statearr_50217_52337[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (5))){
var inst_50175 = (state_50201[(7)]);
var state_50201__$1 = state_50201;
var statearr_50218_52338 = state_50201__$1;
(statearr_50218_52338[(2)] = inst_50175);

(statearr_50218_52338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (10))){
var inst_50197 = (state_50201[(2)]);
var state_50201__$1 = state_50201;
var statearr_50219_52339 = state_50201__$1;
(statearr_50219_52339[(2)] = inst_50197);

(statearr_50219_52339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50202 === (8))){
var inst_50175 = (state_50201[(7)]);
var inst_50188 = cljs.core.next(inst_50175);
var inst_50175__$1 = inst_50188;
var state_50201__$1 = (function (){var statearr_50223 = state_50201;
(statearr_50223[(7)] = inst_50175__$1);

return statearr_50223;
})();
var statearr_50224_52340 = state_50201__$1;
(statearr_50224_52340[(2)] = null);

(statearr_50224_52340[(1)] = (2));


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
var cljs$core$async$state_machine__49335__auto__ = null;
var cljs$core$async$state_machine__49335__auto____0 = (function (){
var statearr_50225 = [null,null,null,null,null,null,null,null];
(statearr_50225[(0)] = cljs$core$async$state_machine__49335__auto__);

(statearr_50225[(1)] = (1));

return statearr_50225;
});
var cljs$core$async$state_machine__49335__auto____1 = (function (state_50201){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_50201);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e50226){var ex__49338__auto__ = e50226;
var statearr_50230_52342 = state_50201;
(statearr_50230_52342[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_50201[(4)]))){
var statearr_50231_52346 = state_50201;
(statearr_50231_52346[(1)] = cljs.core.first((state_50201[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52348 = state_50201;
state_50201 = G__52348;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$state_machine__49335__auto__ = function(state_50201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49335__auto____1.call(this,state_50201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49335__auto____0;
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49335__auto____1;
return cljs$core$async$state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_50235 = f__49446__auto__();
(statearr_50235[(6)] = c__49445__auto__);

return statearr_50235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
}));

return c__49445__auto__;
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
var G__50247 = arguments.length;
switch (G__50247) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_52358 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_52358(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52364 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_52364(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52365 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_52365(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52367 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_52367(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50268 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50268 = (function (ch,cs,meta50269){
this.ch = ch;
this.cs = cs;
this.meta50269 = meta50269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50270,meta50269__$1){
var self__ = this;
var _50270__$1 = this;
return (new cljs.core.async.t_cljs$core$async50268(self__.ch,self__.cs,meta50269__$1));
}));

(cljs.core.async.t_cljs$core$async50268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50270){
var self__ = this;
var _50270__$1 = this;
return self__.meta50269;
}));

(cljs.core.async.t_cljs$core$async50268.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50268.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50268.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50268.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50268.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50268.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50269","meta50269",1140753995,null)], null);
}));

(cljs.core.async.t_cljs$core$async50268.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50268");

(cljs.core.async.t_cljs$core$async50268.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50268");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50268.
 */
cljs.core.async.__GT_t_cljs$core$async50268 = (function cljs$core$async$mult_$___GT_t_cljs$core$async50268(ch__$1,cs__$1,meta50269){
return (new cljs.core.async.t_cljs$core$async50268(ch__$1,cs__$1,meta50269));
});

}

return (new cljs.core.async.t_cljs$core$async50268(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__49445__auto___52382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_50452){
var state_val_50453 = (state_50452[(1)]);
if((state_val_50453 === (7))){
var inst_50447 = (state_50452[(2)]);
var state_50452__$1 = state_50452;
var statearr_50454_52385 = state_50452__$1;
(statearr_50454_52385[(2)] = inst_50447);

(statearr_50454_52385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (20))){
var inst_50316 = (state_50452[(7)]);
var inst_50328 = cljs.core.first(inst_50316);
var inst_50361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50328,(0),null);
var inst_50365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50328,(1),null);
var state_50452__$1 = (function (){var statearr_50455 = state_50452;
(statearr_50455[(8)] = inst_50361);

return statearr_50455;
})();
if(cljs.core.truth_(inst_50365)){
var statearr_50456_52387 = state_50452__$1;
(statearr_50456_52387[(1)] = (22));

} else {
var statearr_50457_52388 = state_50452__$1;
(statearr_50457_52388[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (27))){
var inst_50400 = (state_50452[(9)]);
var inst_50395 = (state_50452[(10)]);
var inst_50284 = (state_50452[(11)]);
var inst_50393 = (state_50452[(12)]);
var inst_50400__$1 = cljs.core._nth(inst_50393,inst_50395);
var inst_50401 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50400__$1,inst_50284,done);
var state_50452__$1 = (function (){var statearr_50458 = state_50452;
(statearr_50458[(9)] = inst_50400__$1);

return statearr_50458;
})();
if(cljs.core.truth_(inst_50401)){
var statearr_50459_52389 = state_50452__$1;
(statearr_50459_52389[(1)] = (30));

} else {
var statearr_50460_52390 = state_50452__$1;
(statearr_50460_52390[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (1))){
var state_50452__$1 = state_50452;
var statearr_50461_52391 = state_50452__$1;
(statearr_50461_52391[(2)] = null);

(statearr_50461_52391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (24))){
var inst_50316 = (state_50452[(7)]);
var inst_50370 = (state_50452[(2)]);
var inst_50371 = cljs.core.next(inst_50316);
var inst_50294 = inst_50371;
var inst_50295 = null;
var inst_50296 = (0);
var inst_50297 = (0);
var state_50452__$1 = (function (){var statearr_50468 = state_50452;
(statearr_50468[(13)] = inst_50295);

(statearr_50468[(14)] = inst_50370);

(statearr_50468[(15)] = inst_50294);

(statearr_50468[(16)] = inst_50296);

(statearr_50468[(17)] = inst_50297);

return statearr_50468;
})();
var statearr_50469_52394 = state_50452__$1;
(statearr_50469_52394[(2)] = null);

(statearr_50469_52394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (39))){
var state_50452__$1 = state_50452;
var statearr_50473_52396 = state_50452__$1;
(statearr_50473_52396[(2)] = null);

(statearr_50473_52396[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (4))){
var inst_50284 = (state_50452[(11)]);
var inst_50284__$1 = (state_50452[(2)]);
var inst_50285 = (inst_50284__$1 == null);
var state_50452__$1 = (function (){var statearr_50474 = state_50452;
(statearr_50474[(11)] = inst_50284__$1);

return statearr_50474;
})();
if(cljs.core.truth_(inst_50285)){
var statearr_50475_52400 = state_50452__$1;
(statearr_50475_52400[(1)] = (5));

} else {
var statearr_50476_52401 = state_50452__$1;
(statearr_50476_52401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (15))){
var inst_50295 = (state_50452[(13)]);
var inst_50294 = (state_50452[(15)]);
var inst_50296 = (state_50452[(16)]);
var inst_50297 = (state_50452[(17)]);
var inst_50312 = (state_50452[(2)]);
var inst_50313 = (inst_50297 + (1));
var tmp50470 = inst_50295;
var tmp50471 = inst_50294;
var tmp50472 = inst_50296;
var inst_50294__$1 = tmp50471;
var inst_50295__$1 = tmp50470;
var inst_50296__$1 = tmp50472;
var inst_50297__$1 = inst_50313;
var state_50452__$1 = (function (){var statearr_50477 = state_50452;
(statearr_50477[(13)] = inst_50295__$1);

(statearr_50477[(18)] = inst_50312);

(statearr_50477[(15)] = inst_50294__$1);

(statearr_50477[(16)] = inst_50296__$1);

(statearr_50477[(17)] = inst_50297__$1);

return statearr_50477;
})();
var statearr_50478_52411 = state_50452__$1;
(statearr_50478_52411[(2)] = null);

(statearr_50478_52411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (21))){
var inst_50374 = (state_50452[(2)]);
var state_50452__$1 = state_50452;
var statearr_50482_52412 = state_50452__$1;
(statearr_50482_52412[(2)] = inst_50374);

(statearr_50482_52412[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (31))){
var inst_50400 = (state_50452[(9)]);
var inst_50404 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50400);
var state_50452__$1 = state_50452;
var statearr_50483_52413 = state_50452__$1;
(statearr_50483_52413[(2)] = inst_50404);

(statearr_50483_52413[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (32))){
var inst_50395 = (state_50452[(10)]);
var inst_50392 = (state_50452[(19)]);
var inst_50394 = (state_50452[(20)]);
var inst_50393 = (state_50452[(12)]);
var inst_50406 = (state_50452[(2)]);
var inst_50407 = (inst_50395 + (1));
var tmp50479 = inst_50392;
var tmp50480 = inst_50394;
var tmp50481 = inst_50393;
var inst_50392__$1 = tmp50479;
var inst_50393__$1 = tmp50481;
var inst_50394__$1 = tmp50480;
var inst_50395__$1 = inst_50407;
var state_50452__$1 = (function (){var statearr_50484 = state_50452;
(statearr_50484[(10)] = inst_50395__$1);

(statearr_50484[(19)] = inst_50392__$1);

(statearr_50484[(21)] = inst_50406);

(statearr_50484[(20)] = inst_50394__$1);

(statearr_50484[(12)] = inst_50393__$1);

return statearr_50484;
})();
var statearr_50485_52418 = state_50452__$1;
(statearr_50485_52418[(2)] = null);

(statearr_50485_52418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (40))){
var inst_50419 = (state_50452[(22)]);
var inst_50424 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50419);
var state_50452__$1 = state_50452;
var statearr_50486_52419 = state_50452__$1;
(statearr_50486_52419[(2)] = inst_50424);

(statearr_50486_52419[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (33))){
var inst_50410 = (state_50452[(23)]);
var inst_50412 = cljs.core.chunked_seq_QMARK_(inst_50410);
var state_50452__$1 = state_50452;
if(inst_50412){
var statearr_50487_52424 = state_50452__$1;
(statearr_50487_52424[(1)] = (36));

} else {
var statearr_50493_52426 = state_50452__$1;
(statearr_50493_52426[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (13))){
var inst_50306 = (state_50452[(24)]);
var inst_50309 = cljs.core.async.close_BANG_(inst_50306);
var state_50452__$1 = state_50452;
var statearr_50494_52428 = state_50452__$1;
(statearr_50494_52428[(2)] = inst_50309);

(statearr_50494_52428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (22))){
var inst_50361 = (state_50452[(8)]);
var inst_50367 = cljs.core.async.close_BANG_(inst_50361);
var state_50452__$1 = state_50452;
var statearr_50495_52429 = state_50452__$1;
(statearr_50495_52429[(2)] = inst_50367);

(statearr_50495_52429[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (36))){
var inst_50410 = (state_50452[(23)]);
var inst_50414 = cljs.core.chunk_first(inst_50410);
var inst_50415 = cljs.core.chunk_rest(inst_50410);
var inst_50416 = cljs.core.count(inst_50414);
var inst_50392 = inst_50415;
var inst_50393 = inst_50414;
var inst_50394 = inst_50416;
var inst_50395 = (0);
var state_50452__$1 = (function (){var statearr_50496 = state_50452;
(statearr_50496[(10)] = inst_50395);

(statearr_50496[(19)] = inst_50392);

(statearr_50496[(20)] = inst_50394);

(statearr_50496[(12)] = inst_50393);

return statearr_50496;
})();
var statearr_50497_52431 = state_50452__$1;
(statearr_50497_52431[(2)] = null);

(statearr_50497_52431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (41))){
var inst_50410 = (state_50452[(23)]);
var inst_50426 = (state_50452[(2)]);
var inst_50427 = cljs.core.next(inst_50410);
var inst_50392 = inst_50427;
var inst_50393 = null;
var inst_50394 = (0);
var inst_50395 = (0);
var state_50452__$1 = (function (){var statearr_50498 = state_50452;
(statearr_50498[(10)] = inst_50395);

(statearr_50498[(25)] = inst_50426);

(statearr_50498[(19)] = inst_50392);

(statearr_50498[(20)] = inst_50394);

(statearr_50498[(12)] = inst_50393);

return statearr_50498;
})();
var statearr_50499_52434 = state_50452__$1;
(statearr_50499_52434[(2)] = null);

(statearr_50499_52434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (43))){
var state_50452__$1 = state_50452;
var statearr_50500_52435 = state_50452__$1;
(statearr_50500_52435[(2)] = null);

(statearr_50500_52435[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (29))){
var inst_50435 = (state_50452[(2)]);
var state_50452__$1 = state_50452;
var statearr_50501_52436 = state_50452__$1;
(statearr_50501_52436[(2)] = inst_50435);

(statearr_50501_52436[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (44))){
var inst_50444 = (state_50452[(2)]);
var state_50452__$1 = (function (){var statearr_50502 = state_50452;
(statearr_50502[(26)] = inst_50444);

return statearr_50502;
})();
var statearr_50503_52440 = state_50452__$1;
(statearr_50503_52440[(2)] = null);

(statearr_50503_52440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (6))){
var inst_50384 = (state_50452[(27)]);
var inst_50383 = cljs.core.deref(cs);
var inst_50384__$1 = cljs.core.keys(inst_50383);
var inst_50385 = cljs.core.count(inst_50384__$1);
var inst_50386 = cljs.core.reset_BANG_(dctr,inst_50385);
var inst_50391 = cljs.core.seq(inst_50384__$1);
var inst_50392 = inst_50391;
var inst_50393 = null;
var inst_50394 = (0);
var inst_50395 = (0);
var state_50452__$1 = (function (){var statearr_50505 = state_50452;
(statearr_50505[(10)] = inst_50395);

(statearr_50505[(27)] = inst_50384__$1);

(statearr_50505[(28)] = inst_50386);

(statearr_50505[(19)] = inst_50392);

(statearr_50505[(20)] = inst_50394);

(statearr_50505[(12)] = inst_50393);

return statearr_50505;
})();
var statearr_50506_52445 = state_50452__$1;
(statearr_50506_52445[(2)] = null);

(statearr_50506_52445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (28))){
var inst_50410 = (state_50452[(23)]);
var inst_50392 = (state_50452[(19)]);
var inst_50410__$1 = cljs.core.seq(inst_50392);
var state_50452__$1 = (function (){var statearr_50508 = state_50452;
(statearr_50508[(23)] = inst_50410__$1);

return statearr_50508;
})();
if(inst_50410__$1){
var statearr_50509_52449 = state_50452__$1;
(statearr_50509_52449[(1)] = (33));

} else {
var statearr_50511_52450 = state_50452__$1;
(statearr_50511_52450[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (25))){
var inst_50395 = (state_50452[(10)]);
var inst_50394 = (state_50452[(20)]);
var inst_50397 = (inst_50395 < inst_50394);
var inst_50398 = inst_50397;
var state_50452__$1 = state_50452;
if(cljs.core.truth_(inst_50398)){
var statearr_50514_52451 = state_50452__$1;
(statearr_50514_52451[(1)] = (27));

} else {
var statearr_50515_52452 = state_50452__$1;
(statearr_50515_52452[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (34))){
var state_50452__$1 = state_50452;
var statearr_50516_52453 = state_50452__$1;
(statearr_50516_52453[(2)] = null);

(statearr_50516_52453[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (17))){
var state_50452__$1 = state_50452;
var statearr_50517_52454 = state_50452__$1;
(statearr_50517_52454[(2)] = null);

(statearr_50517_52454[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (3))){
var inst_50449 = (state_50452[(2)]);
var state_50452__$1 = state_50452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50452__$1,inst_50449);
} else {
if((state_val_50453 === (12))){
var inst_50379 = (state_50452[(2)]);
var state_50452__$1 = state_50452;
var statearr_50518_52461 = state_50452__$1;
(statearr_50518_52461[(2)] = inst_50379);

(statearr_50518_52461[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (2))){
var state_50452__$1 = state_50452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50452__$1,(4),ch);
} else {
if((state_val_50453 === (23))){
var state_50452__$1 = state_50452;
var statearr_50522_52462 = state_50452__$1;
(statearr_50522_52462[(2)] = null);

(statearr_50522_52462[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (35))){
var inst_50433 = (state_50452[(2)]);
var state_50452__$1 = state_50452;
var statearr_50524_52463 = state_50452__$1;
(statearr_50524_52463[(2)] = inst_50433);

(statearr_50524_52463[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (19))){
var inst_50316 = (state_50452[(7)]);
var inst_50320 = cljs.core.chunk_first(inst_50316);
var inst_50321 = cljs.core.chunk_rest(inst_50316);
var inst_50322 = cljs.core.count(inst_50320);
var inst_50294 = inst_50321;
var inst_50295 = inst_50320;
var inst_50296 = inst_50322;
var inst_50297 = (0);
var state_50452__$1 = (function (){var statearr_50525 = state_50452;
(statearr_50525[(13)] = inst_50295);

(statearr_50525[(15)] = inst_50294);

(statearr_50525[(16)] = inst_50296);

(statearr_50525[(17)] = inst_50297);

return statearr_50525;
})();
var statearr_50526_52468 = state_50452__$1;
(statearr_50526_52468[(2)] = null);

(statearr_50526_52468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (11))){
var inst_50294 = (state_50452[(15)]);
var inst_50316 = (state_50452[(7)]);
var inst_50316__$1 = cljs.core.seq(inst_50294);
var state_50452__$1 = (function (){var statearr_50527 = state_50452;
(statearr_50527[(7)] = inst_50316__$1);

return statearr_50527;
})();
if(inst_50316__$1){
var statearr_50528_52471 = state_50452__$1;
(statearr_50528_52471[(1)] = (16));

} else {
var statearr_50529_52472 = state_50452__$1;
(statearr_50529_52472[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (9))){
var inst_50381 = (state_50452[(2)]);
var state_50452__$1 = state_50452;
var statearr_50531_52474 = state_50452__$1;
(statearr_50531_52474[(2)] = inst_50381);

(statearr_50531_52474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (5))){
var inst_50292 = cljs.core.deref(cs);
var inst_50293 = cljs.core.seq(inst_50292);
var inst_50294 = inst_50293;
var inst_50295 = null;
var inst_50296 = (0);
var inst_50297 = (0);
var state_50452__$1 = (function (){var statearr_50532 = state_50452;
(statearr_50532[(13)] = inst_50295);

(statearr_50532[(15)] = inst_50294);

(statearr_50532[(16)] = inst_50296);

(statearr_50532[(17)] = inst_50297);

return statearr_50532;
})();
var statearr_50533_52475 = state_50452__$1;
(statearr_50533_52475[(2)] = null);

(statearr_50533_52475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (14))){
var state_50452__$1 = state_50452;
var statearr_50537_52476 = state_50452__$1;
(statearr_50537_52476[(2)] = null);

(statearr_50537_52476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (45))){
var inst_50441 = (state_50452[(2)]);
var state_50452__$1 = state_50452;
var statearr_50538_52477 = state_50452__$1;
(statearr_50538_52477[(2)] = inst_50441);

(statearr_50538_52477[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (26))){
var inst_50384 = (state_50452[(27)]);
var inst_50437 = (state_50452[(2)]);
var inst_50438 = cljs.core.seq(inst_50384);
var state_50452__$1 = (function (){var statearr_50540 = state_50452;
(statearr_50540[(29)] = inst_50437);

return statearr_50540;
})();
if(inst_50438){
var statearr_50541_52478 = state_50452__$1;
(statearr_50541_52478[(1)] = (42));

} else {
var statearr_50542_52479 = state_50452__$1;
(statearr_50542_52479[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (16))){
var inst_50316 = (state_50452[(7)]);
var inst_50318 = cljs.core.chunked_seq_QMARK_(inst_50316);
var state_50452__$1 = state_50452;
if(inst_50318){
var statearr_50543_52480 = state_50452__$1;
(statearr_50543_52480[(1)] = (19));

} else {
var statearr_50544_52481 = state_50452__$1;
(statearr_50544_52481[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (38))){
var inst_50430 = (state_50452[(2)]);
var state_50452__$1 = state_50452;
var statearr_50545_52482 = state_50452__$1;
(statearr_50545_52482[(2)] = inst_50430);

(statearr_50545_52482[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (30))){
var state_50452__$1 = state_50452;
var statearr_50546_52483 = state_50452__$1;
(statearr_50546_52483[(2)] = null);

(statearr_50546_52483[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (10))){
var inst_50295 = (state_50452[(13)]);
var inst_50297 = (state_50452[(17)]);
var inst_50305 = cljs.core._nth(inst_50295,inst_50297);
var inst_50306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50305,(0),null);
var inst_50307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50305,(1),null);
var state_50452__$1 = (function (){var statearr_50547 = state_50452;
(statearr_50547[(24)] = inst_50306);

return statearr_50547;
})();
if(cljs.core.truth_(inst_50307)){
var statearr_50548_52486 = state_50452__$1;
(statearr_50548_52486[(1)] = (13));

} else {
var statearr_50549_52488 = state_50452__$1;
(statearr_50549_52488[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (18))){
var inst_50377 = (state_50452[(2)]);
var state_50452__$1 = state_50452;
var statearr_50552_52489 = state_50452__$1;
(statearr_50552_52489[(2)] = inst_50377);

(statearr_50552_52489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (42))){
var state_50452__$1 = state_50452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50452__$1,(45),dchan);
} else {
if((state_val_50453 === (37))){
var inst_50419 = (state_50452[(22)]);
var inst_50410 = (state_50452[(23)]);
var inst_50284 = (state_50452[(11)]);
var inst_50419__$1 = cljs.core.first(inst_50410);
var inst_50420 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50419__$1,inst_50284,done);
var state_50452__$1 = (function (){var statearr_50554 = state_50452;
(statearr_50554[(22)] = inst_50419__$1);

return statearr_50554;
})();
if(cljs.core.truth_(inst_50420)){
var statearr_50555_52491 = state_50452__$1;
(statearr_50555_52491[(1)] = (39));

} else {
var statearr_50556_52492 = state_50452__$1;
(statearr_50556_52492[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (8))){
var inst_50296 = (state_50452[(16)]);
var inst_50297 = (state_50452[(17)]);
var inst_50299 = (inst_50297 < inst_50296);
var inst_50300 = inst_50299;
var state_50452__$1 = state_50452;
if(cljs.core.truth_(inst_50300)){
var statearr_50557_52493 = state_50452__$1;
(statearr_50557_52493[(1)] = (10));

} else {
var statearr_50558_52494 = state_50452__$1;
(statearr_50558_52494[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__49335__auto__ = null;
var cljs$core$async$mult_$_state_machine__49335__auto____0 = (function (){
var statearr_50562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50562[(0)] = cljs$core$async$mult_$_state_machine__49335__auto__);

(statearr_50562[(1)] = (1));

return statearr_50562;
});
var cljs$core$async$mult_$_state_machine__49335__auto____1 = (function (state_50452){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_50452);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e50565){var ex__49338__auto__ = e50565;
var statearr_50566_52496 = state_50452;
(statearr_50566_52496[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_50452[(4)]))){
var statearr_50567_52498 = state_50452;
(statearr_50567_52498[(1)] = cljs.core.first((state_50452[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52499 = state_50452;
state_50452 = G__52499;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49335__auto__ = function(state_50452){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49335__auto____1.call(this,state_50452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49335__auto____0;
cljs$core$async$mult_$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49335__auto____1;
return cljs$core$async$mult_$_state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_50571 = f__49446__auto__();
(statearr_50571[(6)] = c__49445__auto___52382);

return statearr_50571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
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
var G__50574 = arguments.length;
switch (G__50574) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_52502 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_52502(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_52514 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_52514(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_52518 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_52518(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_52519 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_52519(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_52522 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_52522(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___52535 = arguments.length;
var i__4830__auto___52544 = (0);
while(true){
if((i__4830__auto___52544 < len__4829__auto___52535)){
args__4835__auto__.push((arguments[i__4830__auto___52544]));

var G__52550 = (i__4830__auto___52544 + (1));
i__4830__auto___52544 = G__52550;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50601){
var map__50602 = p__50601;
var map__50602__$1 = cljs.core.__destructure_map(map__50602);
var opts = map__50602__$1;
var statearr_50603_52565 = state;
(statearr_50603_52565[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_50604_52566 = state;
(statearr_50604_52566[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_50605_52567 = state;
(statearr_50605_52567[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50592){
var G__50593 = cljs.core.first(seq50592);
var seq50592__$1 = cljs.core.next(seq50592);
var G__50594 = cljs.core.first(seq50592__$1);
var seq50592__$2 = cljs.core.next(seq50592__$1);
var G__50595 = cljs.core.first(seq50592__$2);
var seq50592__$3 = cljs.core.next(seq50592__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50593,G__50594,G__50595,seq50592__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50618 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50618 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50619){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta50619 = meta50619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50620,meta50619__$1){
var self__ = this;
var _50620__$1 = this;
return (new cljs.core.async.t_cljs$core$async50618(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50619__$1));
}));

(cljs.core.async.t_cljs$core$async50618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50620){
var self__ = this;
var _50620__$1 = this;
return self__.meta50619;
}));

(cljs.core.async.t_cljs$core$async50618.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async50618.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50618.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50618.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50618.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50618.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50618.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta50619","meta50619",1620384423,null)], null);
}));

(cljs.core.async.t_cljs$core$async50618.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50618");

(cljs.core.async.t_cljs$core$async50618.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50618");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50618.
 */
cljs.core.async.__GT_t_cljs$core$async50618 = (function cljs$core$async$mix_$___GT_t_cljs$core$async50618(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50619){
return (new cljs.core.async.t_cljs$core$async50618(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50619));
});

}

return (new cljs.core.async.t_cljs$core$async50618(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49445__auto___52596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_50713){
var state_val_50714 = (state_50713[(1)]);
if((state_val_50714 === (7))){
var inst_50669 = (state_50713[(2)]);
var state_50713__$1 = state_50713;
if(cljs.core.truth_(inst_50669)){
var statearr_50715_52597 = state_50713__$1;
(statearr_50715_52597[(1)] = (8));

} else {
var statearr_50716_52598 = state_50713__$1;
(statearr_50716_52598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (20))){
var inst_50662 = (state_50713[(7)]);
var state_50713__$1 = state_50713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50713__$1,(23),out,inst_50662);
} else {
if((state_val_50714 === (1))){
var inst_50645 = calc_state();
var inst_50646 = cljs.core.__destructure_map(inst_50645);
var inst_50647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50646,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50646,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50646,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_50650 = inst_50645;
var state_50713__$1 = (function (){var statearr_50728 = state_50713;
(statearr_50728[(8)] = inst_50649);

(statearr_50728[(9)] = inst_50648);

(statearr_50728[(10)] = inst_50650);

(statearr_50728[(11)] = inst_50647);

return statearr_50728;
})();
var statearr_50729_52599 = state_50713__$1;
(statearr_50729_52599[(2)] = null);

(statearr_50729_52599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (24))){
var inst_50653 = (state_50713[(12)]);
var inst_50650 = inst_50653;
var state_50713__$1 = (function (){var statearr_50736 = state_50713;
(statearr_50736[(10)] = inst_50650);

return statearr_50736;
})();
var statearr_50737_52600 = state_50713__$1;
(statearr_50737_52600[(2)] = null);

(statearr_50737_52600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (4))){
var inst_50664 = (state_50713[(13)]);
var inst_50662 = (state_50713[(7)]);
var inst_50661 = (state_50713[(2)]);
var inst_50662__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50661,(0),null);
var inst_50663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50661,(1),null);
var inst_50664__$1 = (inst_50662__$1 == null);
var state_50713__$1 = (function (){var statearr_50743 = state_50713;
(statearr_50743[(13)] = inst_50664__$1);

(statearr_50743[(7)] = inst_50662__$1);

(statearr_50743[(14)] = inst_50663);

return statearr_50743;
})();
if(cljs.core.truth_(inst_50664__$1)){
var statearr_50744_52604 = state_50713__$1;
(statearr_50744_52604[(1)] = (5));

} else {
var statearr_50750_52605 = state_50713__$1;
(statearr_50750_52605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (15))){
var inst_50654 = (state_50713[(15)]);
var inst_50687 = (state_50713[(16)]);
var inst_50687__$1 = cljs.core.empty_QMARK_(inst_50654);
var state_50713__$1 = (function (){var statearr_50751 = state_50713;
(statearr_50751[(16)] = inst_50687__$1);

return statearr_50751;
})();
if(inst_50687__$1){
var statearr_50752_52606 = state_50713__$1;
(statearr_50752_52606[(1)] = (17));

} else {
var statearr_50753_52608 = state_50713__$1;
(statearr_50753_52608[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (21))){
var inst_50653 = (state_50713[(12)]);
var inst_50650 = inst_50653;
var state_50713__$1 = (function (){var statearr_50754 = state_50713;
(statearr_50754[(10)] = inst_50650);

return statearr_50754;
})();
var statearr_50755_52609 = state_50713__$1;
(statearr_50755_52609[(2)] = null);

(statearr_50755_52609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (13))){
var inst_50676 = (state_50713[(2)]);
var inst_50677 = calc_state();
var inst_50650 = inst_50677;
var state_50713__$1 = (function (){var statearr_50756 = state_50713;
(statearr_50756[(10)] = inst_50650);

(statearr_50756[(17)] = inst_50676);

return statearr_50756;
})();
var statearr_50757_52615 = state_50713__$1;
(statearr_50757_52615[(2)] = null);

(statearr_50757_52615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (22))){
var inst_50707 = (state_50713[(2)]);
var state_50713__$1 = state_50713;
var statearr_50758_52616 = state_50713__$1;
(statearr_50758_52616[(2)] = inst_50707);

(statearr_50758_52616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (6))){
var inst_50663 = (state_50713[(14)]);
var inst_50667 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50663,change);
var state_50713__$1 = state_50713;
var statearr_50761_52617 = state_50713__$1;
(statearr_50761_52617[(2)] = inst_50667);

(statearr_50761_52617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (25))){
var state_50713__$1 = state_50713;
var statearr_50762_52618 = state_50713__$1;
(statearr_50762_52618[(2)] = null);

(statearr_50762_52618[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (17))){
var inst_50655 = (state_50713[(18)]);
var inst_50663 = (state_50713[(14)]);
var inst_50689 = (inst_50655.cljs$core$IFn$_invoke$arity$1 ? inst_50655.cljs$core$IFn$_invoke$arity$1(inst_50663) : inst_50655.call(null,inst_50663));
var inst_50690 = cljs.core.not(inst_50689);
var state_50713__$1 = state_50713;
var statearr_50765_52619 = state_50713__$1;
(statearr_50765_52619[(2)] = inst_50690);

(statearr_50765_52619[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (3))){
var inst_50711 = (state_50713[(2)]);
var state_50713__$1 = state_50713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50713__$1,inst_50711);
} else {
if((state_val_50714 === (12))){
var state_50713__$1 = state_50713;
var statearr_50766_52620 = state_50713__$1;
(statearr_50766_52620[(2)] = null);

(statearr_50766_52620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (2))){
var inst_50650 = (state_50713[(10)]);
var inst_50653 = (state_50713[(12)]);
var inst_50653__$1 = cljs.core.__destructure_map(inst_50650);
var inst_50654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50653__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50653__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50653__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_50713__$1 = (function (){var statearr_50768 = state_50713;
(statearr_50768[(15)] = inst_50654);

(statearr_50768[(18)] = inst_50655);

(statearr_50768[(12)] = inst_50653__$1);

return statearr_50768;
})();
return cljs.core.async.ioc_alts_BANG_(state_50713__$1,(4),inst_50656);
} else {
if((state_val_50714 === (23))){
var inst_50698 = (state_50713[(2)]);
var state_50713__$1 = state_50713;
if(cljs.core.truth_(inst_50698)){
var statearr_50774_52621 = state_50713__$1;
(statearr_50774_52621[(1)] = (24));

} else {
var statearr_50775_52622 = state_50713__$1;
(statearr_50775_52622[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (19))){
var inst_50693 = (state_50713[(2)]);
var state_50713__$1 = state_50713;
var statearr_50776_52623 = state_50713__$1;
(statearr_50776_52623[(2)] = inst_50693);

(statearr_50776_52623[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (11))){
var inst_50663 = (state_50713[(14)]);
var inst_50673 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_50663);
var state_50713__$1 = state_50713;
var statearr_50777_52624 = state_50713__$1;
(statearr_50777_52624[(2)] = inst_50673);

(statearr_50777_52624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (9))){
var inst_50684 = (state_50713[(19)]);
var inst_50654 = (state_50713[(15)]);
var inst_50663 = (state_50713[(14)]);
var inst_50684__$1 = (inst_50654.cljs$core$IFn$_invoke$arity$1 ? inst_50654.cljs$core$IFn$_invoke$arity$1(inst_50663) : inst_50654.call(null,inst_50663));
var state_50713__$1 = (function (){var statearr_50778 = state_50713;
(statearr_50778[(19)] = inst_50684__$1);

return statearr_50778;
})();
if(cljs.core.truth_(inst_50684__$1)){
var statearr_50781_52627 = state_50713__$1;
(statearr_50781_52627[(1)] = (14));

} else {
var statearr_50782_52628 = state_50713__$1;
(statearr_50782_52628[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (5))){
var inst_50664 = (state_50713[(13)]);
var state_50713__$1 = state_50713;
var statearr_50783_52629 = state_50713__$1;
(statearr_50783_52629[(2)] = inst_50664);

(statearr_50783_52629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (14))){
var inst_50684 = (state_50713[(19)]);
var state_50713__$1 = state_50713;
var statearr_50791_52630 = state_50713__$1;
(statearr_50791_52630[(2)] = inst_50684);

(statearr_50791_52630[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (26))){
var inst_50703 = (state_50713[(2)]);
var state_50713__$1 = state_50713;
var statearr_50801_52631 = state_50713__$1;
(statearr_50801_52631[(2)] = inst_50703);

(statearr_50801_52631[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (16))){
var inst_50695 = (state_50713[(2)]);
var state_50713__$1 = state_50713;
if(cljs.core.truth_(inst_50695)){
var statearr_50802_52632 = state_50713__$1;
(statearr_50802_52632[(1)] = (20));

} else {
var statearr_50803_52633 = state_50713__$1;
(statearr_50803_52633[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (10))){
var inst_50709 = (state_50713[(2)]);
var state_50713__$1 = state_50713;
var statearr_50804_52634 = state_50713__$1;
(statearr_50804_52634[(2)] = inst_50709);

(statearr_50804_52634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (18))){
var inst_50687 = (state_50713[(16)]);
var state_50713__$1 = state_50713;
var statearr_50806_52635 = state_50713__$1;
(statearr_50806_52635[(2)] = inst_50687);

(statearr_50806_52635[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (8))){
var inst_50662 = (state_50713[(7)]);
var inst_50671 = (inst_50662 == null);
var state_50713__$1 = state_50713;
if(cljs.core.truth_(inst_50671)){
var statearr_50808_52637 = state_50713__$1;
(statearr_50808_52637[(1)] = (11));

} else {
var statearr_50809_52638 = state_50713__$1;
(statearr_50809_52638[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__49335__auto__ = null;
var cljs$core$async$mix_$_state_machine__49335__auto____0 = (function (){
var statearr_50815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50815[(0)] = cljs$core$async$mix_$_state_machine__49335__auto__);

(statearr_50815[(1)] = (1));

return statearr_50815;
});
var cljs$core$async$mix_$_state_machine__49335__auto____1 = (function (state_50713){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_50713);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e50820){var ex__49338__auto__ = e50820;
var statearr_50821_52645 = state_50713;
(statearr_50821_52645[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_50713[(4)]))){
var statearr_50822_52646 = state_50713;
(statearr_50822_52646[(1)] = cljs.core.first((state_50713[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52647 = state_50713;
state_50713 = G__52647;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49335__auto__ = function(state_50713){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49335__auto____1.call(this,state_50713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49335__auto____0;
cljs$core$async$mix_$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49335__auto____1;
return cljs$core$async$mix_$_state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_50823 = f__49446__auto__();
(statearr_50823[(6)] = c__49445__auto___52596);

return statearr_50823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_52650 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_52650(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_52654 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_52654(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_52655 = (function() {
var G__52656 = null;
var G__52656__1 = (function (p){
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
var G__52656__2 = (function (p,v){
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
G__52656 = function(p,v){
switch(arguments.length){
case 1:
return G__52656__1.call(this,p);
case 2:
return G__52656__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52656.cljs$core$IFn$_invoke$arity$1 = G__52656__1;
G__52656.cljs$core$IFn$_invoke$arity$2 = G__52656__2;
return G__52656;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__50834 = arguments.length;
switch (G__50834) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52655(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52655(p,v);
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
var G__50841 = arguments.length;
switch (G__50841) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__50839_SHARP_){
if(cljs.core.truth_((p1__50839_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__50839_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__50839_SHARP_.call(null,topic)))){
return p1__50839_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50839_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50843 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50843 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta50844){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta50844 = meta50844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50845,meta50844__$1){
var self__ = this;
var _50845__$1 = this;
return (new cljs.core.async.t_cljs$core$async50843(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta50844__$1));
}));

(cljs.core.async.t_cljs$core$async50843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50845){
var self__ = this;
var _50845__$1 = this;
return self__.meta50844;
}));

(cljs.core.async.t_cljs$core$async50843.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50843.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50843.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50843.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async50843.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async50843.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async50843.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async50843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta50844","meta50844",1308395056,null)], null);
}));

(cljs.core.async.t_cljs$core$async50843.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50843");

(cljs.core.async.t_cljs$core$async50843.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50843");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50843.
 */
cljs.core.async.__GT_t_cljs$core$async50843 = (function cljs$core$async$__GT_t_cljs$core$async50843(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50844){
return (new cljs.core.async.t_cljs$core$async50843(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50844));
});

}

return (new cljs.core.async.t_cljs$core$async50843(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49445__auto___52659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_50937){
var state_val_50938 = (state_50937[(1)]);
if((state_val_50938 === (7))){
var inst_50933 = (state_50937[(2)]);
var state_50937__$1 = state_50937;
var statearr_50939_52660 = state_50937__$1;
(statearr_50939_52660[(2)] = inst_50933);

(statearr_50939_52660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (20))){
var state_50937__$1 = state_50937;
var statearr_50940_52661 = state_50937__$1;
(statearr_50940_52661[(2)] = null);

(statearr_50940_52661[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (1))){
var state_50937__$1 = state_50937;
var statearr_50943_52662 = state_50937__$1;
(statearr_50943_52662[(2)] = null);

(statearr_50943_52662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (24))){
var inst_50916 = (state_50937[(7)]);
var inst_50925 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_50916);
var state_50937__$1 = state_50937;
var statearr_50944_52663 = state_50937__$1;
(statearr_50944_52663[(2)] = inst_50925);

(statearr_50944_52663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (4))){
var inst_50862 = (state_50937[(8)]);
var inst_50862__$1 = (state_50937[(2)]);
var inst_50863 = (inst_50862__$1 == null);
var state_50937__$1 = (function (){var statearr_50945 = state_50937;
(statearr_50945[(8)] = inst_50862__$1);

return statearr_50945;
})();
if(cljs.core.truth_(inst_50863)){
var statearr_50946_52664 = state_50937__$1;
(statearr_50946_52664[(1)] = (5));

} else {
var statearr_50947_52665 = state_50937__$1;
(statearr_50947_52665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (15))){
var inst_50909 = (state_50937[(2)]);
var state_50937__$1 = state_50937;
var statearr_50948_52666 = state_50937__$1;
(statearr_50948_52666[(2)] = inst_50909);

(statearr_50948_52666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (21))){
var inst_50930 = (state_50937[(2)]);
var state_50937__$1 = (function (){var statearr_50949 = state_50937;
(statearr_50949[(9)] = inst_50930);

return statearr_50949;
})();
var statearr_50950_52667 = state_50937__$1;
(statearr_50950_52667[(2)] = null);

(statearr_50950_52667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (13))){
var inst_50886 = (state_50937[(10)]);
var inst_50893 = cljs.core.chunked_seq_QMARK_(inst_50886);
var state_50937__$1 = state_50937;
if(inst_50893){
var statearr_50951_52668 = state_50937__$1;
(statearr_50951_52668[(1)] = (16));

} else {
var statearr_50952_52669 = state_50937__$1;
(statearr_50952_52669[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (22))){
var inst_50922 = (state_50937[(2)]);
var state_50937__$1 = state_50937;
if(cljs.core.truth_(inst_50922)){
var statearr_50953_52670 = state_50937__$1;
(statearr_50953_52670[(1)] = (23));

} else {
var statearr_50954_52671 = state_50937__$1;
(statearr_50954_52671[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (6))){
var inst_50916 = (state_50937[(7)]);
var inst_50862 = (state_50937[(8)]);
var inst_50918 = (state_50937[(11)]);
var inst_50916__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_50862) : topic_fn.call(null,inst_50862));
var inst_50917 = cljs.core.deref(mults);
var inst_50918__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50917,inst_50916__$1);
var state_50937__$1 = (function (){var statearr_50955 = state_50937;
(statearr_50955[(7)] = inst_50916__$1);

(statearr_50955[(11)] = inst_50918__$1);

return statearr_50955;
})();
if(cljs.core.truth_(inst_50918__$1)){
var statearr_50956_52672 = state_50937__$1;
(statearr_50956_52672[(1)] = (19));

} else {
var statearr_50957_52673 = state_50937__$1;
(statearr_50957_52673[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (25))){
var inst_50927 = (state_50937[(2)]);
var state_50937__$1 = state_50937;
var statearr_50958_52674 = state_50937__$1;
(statearr_50958_52674[(2)] = inst_50927);

(statearr_50958_52674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (17))){
var inst_50886 = (state_50937[(10)]);
var inst_50900 = cljs.core.first(inst_50886);
var inst_50901 = cljs.core.async.muxch_STAR_(inst_50900);
var inst_50902 = cljs.core.async.close_BANG_(inst_50901);
var inst_50903 = cljs.core.next(inst_50886);
var inst_50872 = inst_50903;
var inst_50873 = null;
var inst_50874 = (0);
var inst_50875 = (0);
var state_50937__$1 = (function (){var statearr_50959 = state_50937;
(statearr_50959[(12)] = inst_50872);

(statearr_50959[(13)] = inst_50902);

(statearr_50959[(14)] = inst_50875);

(statearr_50959[(15)] = inst_50874);

(statearr_50959[(16)] = inst_50873);

return statearr_50959;
})();
var statearr_50960_52675 = state_50937__$1;
(statearr_50960_52675[(2)] = null);

(statearr_50960_52675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (3))){
var inst_50935 = (state_50937[(2)]);
var state_50937__$1 = state_50937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50937__$1,inst_50935);
} else {
if((state_val_50938 === (12))){
var inst_50911 = (state_50937[(2)]);
var state_50937__$1 = state_50937;
var statearr_50961_52676 = state_50937__$1;
(statearr_50961_52676[(2)] = inst_50911);

(statearr_50961_52676[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (2))){
var state_50937__$1 = state_50937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50937__$1,(4),ch);
} else {
if((state_val_50938 === (23))){
var state_50937__$1 = state_50937;
var statearr_50963_52678 = state_50937__$1;
(statearr_50963_52678[(2)] = null);

(statearr_50963_52678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (19))){
var inst_50862 = (state_50937[(8)]);
var inst_50918 = (state_50937[(11)]);
var inst_50920 = cljs.core.async.muxch_STAR_(inst_50918);
var state_50937__$1 = state_50937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50937__$1,(22),inst_50920,inst_50862);
} else {
if((state_val_50938 === (11))){
var inst_50872 = (state_50937[(12)]);
var inst_50886 = (state_50937[(10)]);
var inst_50886__$1 = cljs.core.seq(inst_50872);
var state_50937__$1 = (function (){var statearr_50964 = state_50937;
(statearr_50964[(10)] = inst_50886__$1);

return statearr_50964;
})();
if(inst_50886__$1){
var statearr_50965_52679 = state_50937__$1;
(statearr_50965_52679[(1)] = (13));

} else {
var statearr_50966_52680 = state_50937__$1;
(statearr_50966_52680[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (9))){
var inst_50913 = (state_50937[(2)]);
var state_50937__$1 = state_50937;
var statearr_50967_52681 = state_50937__$1;
(statearr_50967_52681[(2)] = inst_50913);

(statearr_50967_52681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (5))){
var inst_50869 = cljs.core.deref(mults);
var inst_50870 = cljs.core.vals(inst_50869);
var inst_50871 = cljs.core.seq(inst_50870);
var inst_50872 = inst_50871;
var inst_50873 = null;
var inst_50874 = (0);
var inst_50875 = (0);
var state_50937__$1 = (function (){var statearr_50968 = state_50937;
(statearr_50968[(12)] = inst_50872);

(statearr_50968[(14)] = inst_50875);

(statearr_50968[(15)] = inst_50874);

(statearr_50968[(16)] = inst_50873);

return statearr_50968;
})();
var statearr_50969_52682 = state_50937__$1;
(statearr_50969_52682[(2)] = null);

(statearr_50969_52682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (14))){
var state_50937__$1 = state_50937;
var statearr_50973_52683 = state_50937__$1;
(statearr_50973_52683[(2)] = null);

(statearr_50973_52683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (16))){
var inst_50886 = (state_50937[(10)]);
var inst_50895 = cljs.core.chunk_first(inst_50886);
var inst_50896 = cljs.core.chunk_rest(inst_50886);
var inst_50897 = cljs.core.count(inst_50895);
var inst_50872 = inst_50896;
var inst_50873 = inst_50895;
var inst_50874 = inst_50897;
var inst_50875 = (0);
var state_50937__$1 = (function (){var statearr_50975 = state_50937;
(statearr_50975[(12)] = inst_50872);

(statearr_50975[(14)] = inst_50875);

(statearr_50975[(15)] = inst_50874);

(statearr_50975[(16)] = inst_50873);

return statearr_50975;
})();
var statearr_50976_52684 = state_50937__$1;
(statearr_50976_52684[(2)] = null);

(statearr_50976_52684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (10))){
var inst_50872 = (state_50937[(12)]);
var inst_50875 = (state_50937[(14)]);
var inst_50874 = (state_50937[(15)]);
var inst_50873 = (state_50937[(16)]);
var inst_50880 = cljs.core._nth(inst_50873,inst_50875);
var inst_50881 = cljs.core.async.muxch_STAR_(inst_50880);
var inst_50882 = cljs.core.async.close_BANG_(inst_50881);
var inst_50883 = (inst_50875 + (1));
var tmp50970 = inst_50872;
var tmp50971 = inst_50874;
var tmp50972 = inst_50873;
var inst_50872__$1 = tmp50970;
var inst_50873__$1 = tmp50972;
var inst_50874__$1 = tmp50971;
var inst_50875__$1 = inst_50883;
var state_50937__$1 = (function (){var statearr_50979 = state_50937;
(statearr_50979[(12)] = inst_50872__$1);

(statearr_50979[(17)] = inst_50882);

(statearr_50979[(14)] = inst_50875__$1);

(statearr_50979[(15)] = inst_50874__$1);

(statearr_50979[(16)] = inst_50873__$1);

return statearr_50979;
})();
var statearr_50980_52685 = state_50937__$1;
(statearr_50980_52685[(2)] = null);

(statearr_50980_52685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (18))){
var inst_50906 = (state_50937[(2)]);
var state_50937__$1 = state_50937;
var statearr_50981_52686 = state_50937__$1;
(statearr_50981_52686[(2)] = inst_50906);

(statearr_50981_52686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50938 === (8))){
var inst_50875 = (state_50937[(14)]);
var inst_50874 = (state_50937[(15)]);
var inst_50877 = (inst_50875 < inst_50874);
var inst_50878 = inst_50877;
var state_50937__$1 = state_50937;
if(cljs.core.truth_(inst_50878)){
var statearr_50982_52687 = state_50937__$1;
(statearr_50982_52687[(1)] = (10));

} else {
var statearr_50983_52688 = state_50937__$1;
(statearr_50983_52688[(1)] = (11));

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
var cljs$core$async$state_machine__49335__auto__ = null;
var cljs$core$async$state_machine__49335__auto____0 = (function (){
var statearr_50984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50984[(0)] = cljs$core$async$state_machine__49335__auto__);

(statearr_50984[(1)] = (1));

return statearr_50984;
});
var cljs$core$async$state_machine__49335__auto____1 = (function (state_50937){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_50937);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e50985){var ex__49338__auto__ = e50985;
var statearr_50986_52689 = state_50937;
(statearr_50986_52689[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_50937[(4)]))){
var statearr_50987_52690 = state_50937;
(statearr_50987_52690[(1)] = cljs.core.first((state_50937[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52691 = state_50937;
state_50937 = G__52691;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$state_machine__49335__auto__ = function(state_50937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49335__auto____1.call(this,state_50937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49335__auto____0;
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49335__auto____1;
return cljs$core$async$state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_50990 = f__49446__auto__();
(statearr_50990[(6)] = c__49445__auto___52659);

return statearr_50990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
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
var G__50994 = arguments.length;
switch (G__50994) {
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
var G__50998 = arguments.length;
switch (G__50998) {
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
var G__51006 = arguments.length;
switch (G__51006) {
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
var c__49445__auto___52696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_51082){
var state_val_51083 = (state_51082[(1)]);
if((state_val_51083 === (7))){
var state_51082__$1 = state_51082;
var statearr_51084_52697 = state_51082__$1;
(statearr_51084_52697[(2)] = null);

(statearr_51084_52697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (1))){
var state_51082__$1 = state_51082;
var statearr_51085_52698 = state_51082__$1;
(statearr_51085_52698[(2)] = null);

(statearr_51085_52698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (4))){
var inst_51027 = (state_51082[(7)]);
var inst_51026 = (state_51082[(8)]);
var inst_51033 = (inst_51027 < inst_51026);
var state_51082__$1 = state_51082;
if(cljs.core.truth_(inst_51033)){
var statearr_51086_52699 = state_51082__$1;
(statearr_51086_52699[(1)] = (6));

} else {
var statearr_51087_52700 = state_51082__$1;
(statearr_51087_52700[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (15))){
var inst_51057 = (state_51082[(9)]);
var inst_51063 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51057);
var state_51082__$1 = state_51082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51082__$1,(17),out,inst_51063);
} else {
if((state_val_51083 === (13))){
var inst_51057 = (state_51082[(9)]);
var inst_51057__$1 = (state_51082[(2)]);
var inst_51058 = cljs.core.some(cljs.core.nil_QMARK_,inst_51057__$1);
var state_51082__$1 = (function (){var statearr_51088 = state_51082;
(statearr_51088[(9)] = inst_51057__$1);

return statearr_51088;
})();
if(cljs.core.truth_(inst_51058)){
var statearr_51091_52701 = state_51082__$1;
(statearr_51091_52701[(1)] = (14));

} else {
var statearr_51093_52702 = state_51082__$1;
(statearr_51093_52702[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (6))){
var state_51082__$1 = state_51082;
var statearr_51094_52703 = state_51082__$1;
(statearr_51094_52703[(2)] = null);

(statearr_51094_52703[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (17))){
var inst_51065 = (state_51082[(2)]);
var state_51082__$1 = (function (){var statearr_51099 = state_51082;
(statearr_51099[(10)] = inst_51065);

return statearr_51099;
})();
var statearr_51100_52704 = state_51082__$1;
(statearr_51100_52704[(2)] = null);

(statearr_51100_52704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (3))){
var inst_51070 = (state_51082[(2)]);
var state_51082__$1 = state_51082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51082__$1,inst_51070);
} else {
if((state_val_51083 === (12))){
var _ = (function (){var statearr_51103 = state_51082;
(statearr_51103[(4)] = cljs.core.rest((state_51082[(4)])));

return statearr_51103;
})();
var state_51082__$1 = state_51082;
var ex51098 = (state_51082__$1[(2)]);
var statearr_51104_52706 = state_51082__$1;
(statearr_51104_52706[(5)] = ex51098);


if((ex51098 instanceof Object)){
var statearr_51105_52707 = state_51082__$1;
(statearr_51105_52707[(1)] = (11));

(statearr_51105_52707[(5)] = null);

} else {
throw ex51098;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (2))){
var inst_51025 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51026 = cnt;
var inst_51027 = (0);
var state_51082__$1 = (function (){var statearr_51106 = state_51082;
(statearr_51106[(7)] = inst_51027);

(statearr_51106[(8)] = inst_51026);

(statearr_51106[(11)] = inst_51025);

return statearr_51106;
})();
var statearr_51107_52708 = state_51082__$1;
(statearr_51107_52708[(2)] = null);

(statearr_51107_52708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (11))){
var inst_51035 = (state_51082[(2)]);
var inst_51036 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51082__$1 = (function (){var statearr_51108 = state_51082;
(statearr_51108[(12)] = inst_51035);

return statearr_51108;
})();
var statearr_51112_52709 = state_51082__$1;
(statearr_51112_52709[(2)] = inst_51036);

(statearr_51112_52709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (9))){
var inst_51027 = (state_51082[(7)]);
var _ = (function (){var statearr_51113 = state_51082;
(statearr_51113[(4)] = cljs.core.cons((12),(state_51082[(4)])));

return statearr_51113;
})();
var inst_51042 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51027) : chs__$1.call(null,inst_51027));
var inst_51043 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51027) : done.call(null,inst_51027));
var inst_51044 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51042,inst_51043);
var ___$1 = (function (){var statearr_51114 = state_51082;
(statearr_51114[(4)] = cljs.core.rest((state_51082[(4)])));

return statearr_51114;
})();
var state_51082__$1 = state_51082;
var statearr_51115_52710 = state_51082__$1;
(statearr_51115_52710[(2)] = inst_51044);

(statearr_51115_52710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (5))){
var inst_51055 = (state_51082[(2)]);
var state_51082__$1 = (function (){var statearr_51116 = state_51082;
(statearr_51116[(13)] = inst_51055);

return statearr_51116;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51082__$1,(13),dchan);
} else {
if((state_val_51083 === (14))){
var inst_51060 = cljs.core.async.close_BANG_(out);
var state_51082__$1 = state_51082;
var statearr_51121_52712 = state_51082__$1;
(statearr_51121_52712[(2)] = inst_51060);

(statearr_51121_52712[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (16))){
var inst_51068 = (state_51082[(2)]);
var state_51082__$1 = state_51082;
var statearr_51125_52713 = state_51082__$1;
(statearr_51125_52713[(2)] = inst_51068);

(statearr_51125_52713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (10))){
var inst_51027 = (state_51082[(7)]);
var inst_51047 = (state_51082[(2)]);
var inst_51048 = (inst_51027 + (1));
var inst_51027__$1 = inst_51048;
var state_51082__$1 = (function (){var statearr_51126 = state_51082;
(statearr_51126[(7)] = inst_51027__$1);

(statearr_51126[(14)] = inst_51047);

return statearr_51126;
})();
var statearr_51127_52714 = state_51082__$1;
(statearr_51127_52714[(2)] = null);

(statearr_51127_52714[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (8))){
var inst_51053 = (state_51082[(2)]);
var state_51082__$1 = state_51082;
var statearr_51131_52715 = state_51082__$1;
(statearr_51131_52715[(2)] = inst_51053);

(statearr_51131_52715[(1)] = (5));


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
var cljs$core$async$state_machine__49335__auto__ = null;
var cljs$core$async$state_machine__49335__auto____0 = (function (){
var statearr_51132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51132[(0)] = cljs$core$async$state_machine__49335__auto__);

(statearr_51132[(1)] = (1));

return statearr_51132;
});
var cljs$core$async$state_machine__49335__auto____1 = (function (state_51082){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_51082);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e51140){var ex__49338__auto__ = e51140;
var statearr_51141_52716 = state_51082;
(statearr_51141_52716[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_51082[(4)]))){
var statearr_51142_52717 = state_51082;
(statearr_51142_52717[(1)] = cljs.core.first((state_51082[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52718 = state_51082;
state_51082 = G__52718;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$state_machine__49335__auto__ = function(state_51082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49335__auto____1.call(this,state_51082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49335__auto____0;
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49335__auto____1;
return cljs$core$async$state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_51145 = f__49446__auto__();
(statearr_51145[(6)] = c__49445__auto___52696);

return statearr_51145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
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
var G__51148 = arguments.length;
switch (G__51148) {
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
var c__49445__auto___52721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_51186){
var state_val_51187 = (state_51186[(1)]);
if((state_val_51187 === (7))){
var inst_51163 = (state_51186[(7)]);
var inst_51164 = (state_51186[(8)]);
var inst_51163__$1 = (state_51186[(2)]);
var inst_51164__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51163__$1,(0),null);
var inst_51165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51163__$1,(1),null);
var inst_51166 = (inst_51164__$1 == null);
var state_51186__$1 = (function (){var statearr_51191 = state_51186;
(statearr_51191[(7)] = inst_51163__$1);

(statearr_51191[(9)] = inst_51165);

(statearr_51191[(8)] = inst_51164__$1);

return statearr_51191;
})();
if(cljs.core.truth_(inst_51166)){
var statearr_51192_52722 = state_51186__$1;
(statearr_51192_52722[(1)] = (8));

} else {
var statearr_51193_52724 = state_51186__$1;
(statearr_51193_52724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51187 === (1))){
var inst_51153 = cljs.core.vec(chs);
var inst_51154 = inst_51153;
var state_51186__$1 = (function (){var statearr_51194 = state_51186;
(statearr_51194[(10)] = inst_51154);

return statearr_51194;
})();
var statearr_51195_52725 = state_51186__$1;
(statearr_51195_52725[(2)] = null);

(statearr_51195_52725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51187 === (4))){
var inst_51154 = (state_51186[(10)]);
var state_51186__$1 = state_51186;
return cljs.core.async.ioc_alts_BANG_(state_51186__$1,(7),inst_51154);
} else {
if((state_val_51187 === (6))){
var inst_51180 = (state_51186[(2)]);
var state_51186__$1 = state_51186;
var statearr_51196_52727 = state_51186__$1;
(statearr_51196_52727[(2)] = inst_51180);

(statearr_51196_52727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51187 === (3))){
var inst_51182 = (state_51186[(2)]);
var state_51186__$1 = state_51186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51186__$1,inst_51182);
} else {
if((state_val_51187 === (2))){
var inst_51154 = (state_51186[(10)]);
var inst_51156 = cljs.core.count(inst_51154);
var inst_51157 = (inst_51156 > (0));
var state_51186__$1 = state_51186;
if(cljs.core.truth_(inst_51157)){
var statearr_51198_52728 = state_51186__$1;
(statearr_51198_52728[(1)] = (4));

} else {
var statearr_51199_52729 = state_51186__$1;
(statearr_51199_52729[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51187 === (11))){
var inst_51154 = (state_51186[(10)]);
var inst_51173 = (state_51186[(2)]);
var tmp51197 = inst_51154;
var inst_51154__$1 = tmp51197;
var state_51186__$1 = (function (){var statearr_51206 = state_51186;
(statearr_51206[(10)] = inst_51154__$1);

(statearr_51206[(11)] = inst_51173);

return statearr_51206;
})();
var statearr_51207_52730 = state_51186__$1;
(statearr_51207_52730[(2)] = null);

(statearr_51207_52730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51187 === (9))){
var inst_51164 = (state_51186[(8)]);
var state_51186__$1 = state_51186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51186__$1,(11),out,inst_51164);
} else {
if((state_val_51187 === (5))){
var inst_51178 = cljs.core.async.close_BANG_(out);
var state_51186__$1 = state_51186;
var statearr_51209_52732 = state_51186__$1;
(statearr_51209_52732[(2)] = inst_51178);

(statearr_51209_52732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51187 === (10))){
var inst_51176 = (state_51186[(2)]);
var state_51186__$1 = state_51186;
var statearr_51210_52733 = state_51186__$1;
(statearr_51210_52733[(2)] = inst_51176);

(statearr_51210_52733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51187 === (8))){
var inst_51163 = (state_51186[(7)]);
var inst_51165 = (state_51186[(9)]);
var inst_51154 = (state_51186[(10)]);
var inst_51164 = (state_51186[(8)]);
var inst_51168 = (function (){var cs = inst_51154;
var vec__51159 = inst_51163;
var v = inst_51164;
var c = inst_51165;
return (function (p1__51146_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51146_SHARP_);
});
})();
var inst_51169 = cljs.core.filterv(inst_51168,inst_51154);
var inst_51154__$1 = inst_51169;
var state_51186__$1 = (function (){var statearr_51211 = state_51186;
(statearr_51211[(10)] = inst_51154__$1);

return statearr_51211;
})();
var statearr_51212_52734 = state_51186__$1;
(statearr_51212_52734[(2)] = null);

(statearr_51212_52734[(1)] = (2));


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
var cljs$core$async$state_machine__49335__auto__ = null;
var cljs$core$async$state_machine__49335__auto____0 = (function (){
var statearr_51214 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51214[(0)] = cljs$core$async$state_machine__49335__auto__);

(statearr_51214[(1)] = (1));

return statearr_51214;
});
var cljs$core$async$state_machine__49335__auto____1 = (function (state_51186){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_51186);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e51215){var ex__49338__auto__ = e51215;
var statearr_51216_52736 = state_51186;
(statearr_51216_52736[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_51186[(4)]))){
var statearr_51217_52737 = state_51186;
(statearr_51217_52737[(1)] = cljs.core.first((state_51186[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52738 = state_51186;
state_51186 = G__52738;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$state_machine__49335__auto__ = function(state_51186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49335__auto____1.call(this,state_51186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49335__auto____0;
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49335__auto____1;
return cljs$core$async$state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_51218 = f__49446__auto__();
(statearr_51218[(6)] = c__49445__auto___52721);

return statearr_51218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
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
var G__51229 = arguments.length;
switch (G__51229) {
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
var c__49445__auto___52740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_51257){
var state_val_51259 = (state_51257[(1)]);
if((state_val_51259 === (7))){
var inst_51235 = (state_51257[(7)]);
var inst_51235__$1 = (state_51257[(2)]);
var inst_51237 = (inst_51235__$1 == null);
var inst_51238 = cljs.core.not(inst_51237);
var state_51257__$1 = (function (){var statearr_51268 = state_51257;
(statearr_51268[(7)] = inst_51235__$1);

return statearr_51268;
})();
if(inst_51238){
var statearr_51269_52741 = state_51257__$1;
(statearr_51269_52741[(1)] = (8));

} else {
var statearr_51270_52742 = state_51257__$1;
(statearr_51270_52742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (1))){
var inst_51230 = (0);
var state_51257__$1 = (function (){var statearr_51277 = state_51257;
(statearr_51277[(8)] = inst_51230);

return statearr_51277;
})();
var statearr_51278_52744 = state_51257__$1;
(statearr_51278_52744[(2)] = null);

(statearr_51278_52744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (4))){
var state_51257__$1 = state_51257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51257__$1,(7),ch);
} else {
if((state_val_51259 === (6))){
var inst_51252 = (state_51257[(2)]);
var state_51257__$1 = state_51257;
var statearr_51285_52745 = state_51257__$1;
(statearr_51285_52745[(2)] = inst_51252);

(statearr_51285_52745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (3))){
var inst_51254 = (state_51257[(2)]);
var inst_51255 = cljs.core.async.close_BANG_(out);
var state_51257__$1 = (function (){var statearr_51286 = state_51257;
(statearr_51286[(9)] = inst_51254);

return statearr_51286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51257__$1,inst_51255);
} else {
if((state_val_51259 === (2))){
var inst_51230 = (state_51257[(8)]);
var inst_51232 = (inst_51230 < n);
var state_51257__$1 = state_51257;
if(cljs.core.truth_(inst_51232)){
var statearr_51289_52746 = state_51257__$1;
(statearr_51289_52746[(1)] = (4));

} else {
var statearr_51290_52747 = state_51257__$1;
(statearr_51290_52747[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (11))){
var inst_51230 = (state_51257[(8)]);
var inst_51243 = (state_51257[(2)]);
var inst_51245 = (inst_51230 + (1));
var inst_51230__$1 = inst_51245;
var state_51257__$1 = (function (){var statearr_51291 = state_51257;
(statearr_51291[(8)] = inst_51230__$1);

(statearr_51291[(10)] = inst_51243);

return statearr_51291;
})();
var statearr_51292_52748 = state_51257__$1;
(statearr_51292_52748[(2)] = null);

(statearr_51292_52748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (9))){
var state_51257__$1 = state_51257;
var statearr_51293_52749 = state_51257__$1;
(statearr_51293_52749[(2)] = null);

(statearr_51293_52749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (5))){
var state_51257__$1 = state_51257;
var statearr_51294_52750 = state_51257__$1;
(statearr_51294_52750[(2)] = null);

(statearr_51294_52750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (10))){
var inst_51249 = (state_51257[(2)]);
var state_51257__$1 = state_51257;
var statearr_51295_52751 = state_51257__$1;
(statearr_51295_52751[(2)] = inst_51249);

(statearr_51295_52751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (8))){
var inst_51235 = (state_51257[(7)]);
var state_51257__$1 = state_51257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51257__$1,(11),out,inst_51235);
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
var cljs$core$async$state_machine__49335__auto__ = null;
var cljs$core$async$state_machine__49335__auto____0 = (function (){
var statearr_51296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51296[(0)] = cljs$core$async$state_machine__49335__auto__);

(statearr_51296[(1)] = (1));

return statearr_51296;
});
var cljs$core$async$state_machine__49335__auto____1 = (function (state_51257){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_51257);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e51297){var ex__49338__auto__ = e51297;
var statearr_51298_52756 = state_51257;
(statearr_51298_52756[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_51257[(4)]))){
var statearr_51299_52757 = state_51257;
(statearr_51299_52757[(1)] = cljs.core.first((state_51257[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52758 = state_51257;
state_51257 = G__52758;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$state_machine__49335__auto__ = function(state_51257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49335__auto____1.call(this,state_51257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49335__auto____0;
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49335__auto____1;
return cljs$core$async$state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_51301 = f__49446__auto__();
(statearr_51301[(6)] = c__49445__auto___52740);

return statearr_51301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51308 = (function (f,ch,meta51309){
this.f = f;
this.ch = ch;
this.meta51309 = meta51309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51310,meta51309__$1){
var self__ = this;
var _51310__$1 = this;
return (new cljs.core.async.t_cljs$core$async51308(self__.f,self__.ch,meta51309__$1));
}));

(cljs.core.async.t_cljs$core$async51308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51310){
var self__ = this;
var _51310__$1 = this;
return self__.meta51309;
}));

(cljs.core.async.t_cljs$core$async51308.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51308.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51308.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51308.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51308.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51315 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51315 = (function (f,ch,meta51309,_,fn1,meta51316){
this.f = f;
this.ch = ch;
this.meta51309 = meta51309;
this._ = _;
this.fn1 = fn1;
this.meta51316 = meta51316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51317,meta51316__$1){
var self__ = this;
var _51317__$1 = this;
return (new cljs.core.async.t_cljs$core$async51315(self__.f,self__.ch,self__.meta51309,self__._,self__.fn1,meta51316__$1));
}));

(cljs.core.async.t_cljs$core$async51315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51317){
var self__ = this;
var _51317__$1 = this;
return self__.meta51316;
}));

(cljs.core.async.t_cljs$core$async51315.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51315.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__51305_SHARP_){
var G__51320 = (((p1__51305_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51305_SHARP_) : self__.f.call(null,p1__51305_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51320) : f1.call(null,G__51320));
});
}));

(cljs.core.async.t_cljs$core$async51315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51309","meta51309",1803949198,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51308","cljs.core.async/t_cljs$core$async51308",-580093566,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51316","meta51316",1604294486,null)], null);
}));

(cljs.core.async.t_cljs$core$async51315.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51315");

(cljs.core.async.t_cljs$core$async51315.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async51315");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51315.
 */
cljs.core.async.__GT_t_cljs$core$async51315 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51315(f__$1,ch__$1,meta51309__$1,___$2,fn1__$1,meta51316){
return (new cljs.core.async.t_cljs$core$async51315(f__$1,ch__$1,meta51309__$1,___$2,fn1__$1,meta51316));
});

}

return (new cljs.core.async.t_cljs$core$async51315(self__.f,self__.ch,self__.meta51309,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51325 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51325) : self__.f.call(null,G__51325));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51308.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51308.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51309","meta51309",1803949198,null)], null);
}));

(cljs.core.async.t_cljs$core$async51308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51308");

(cljs.core.async.t_cljs$core$async51308.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async51308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51308.
 */
cljs.core.async.__GT_t_cljs$core$async51308 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51308(f__$1,ch__$1,meta51309){
return (new cljs.core.async.t_cljs$core$async51308(f__$1,ch__$1,meta51309));
});

}

return (new cljs.core.async.t_cljs$core$async51308(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51330 = (function (f,ch,meta51331){
this.f = f;
this.ch = ch;
this.meta51331 = meta51331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51332,meta51331__$1){
var self__ = this;
var _51332__$1 = this;
return (new cljs.core.async.t_cljs$core$async51330(self__.f,self__.ch,meta51331__$1));
}));

(cljs.core.async.t_cljs$core$async51330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51332){
var self__ = this;
var _51332__$1 = this;
return self__.meta51331;
}));

(cljs.core.async.t_cljs$core$async51330.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51330.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51330.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51331","meta51331",-304700784,null)], null);
}));

(cljs.core.async.t_cljs$core$async51330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51330");

(cljs.core.async.t_cljs$core$async51330.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async51330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51330.
 */
cljs.core.async.__GT_t_cljs$core$async51330 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51330(f__$1,ch__$1,meta51331){
return (new cljs.core.async.t_cljs$core$async51330(f__$1,ch__$1,meta51331));
});

}

return (new cljs.core.async.t_cljs$core$async51330(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51335 = (function (p,ch,meta51336){
this.p = p;
this.ch = ch;
this.meta51336 = meta51336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51337,meta51336__$1){
var self__ = this;
var _51337__$1 = this;
return (new cljs.core.async.t_cljs$core$async51335(self__.p,self__.ch,meta51336__$1));
}));

(cljs.core.async.t_cljs$core$async51335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51337){
var self__ = this;
var _51337__$1 = this;
return self__.meta51336;
}));

(cljs.core.async.t_cljs$core$async51335.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51335.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51335.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51335.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51336","meta51336",-2002901834,null)], null);
}));

(cljs.core.async.t_cljs$core$async51335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51335");

(cljs.core.async.t_cljs$core$async51335.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async51335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51335.
 */
cljs.core.async.__GT_t_cljs$core$async51335 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51335(p__$1,ch__$1,meta51336){
return (new cljs.core.async.t_cljs$core$async51335(p__$1,ch__$1,meta51336));
});

}

return (new cljs.core.async.t_cljs$core$async51335(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51349 = arguments.length;
switch (G__51349) {
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
var c__49445__auto___52775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_51375){
var state_val_51376 = (state_51375[(1)]);
if((state_val_51376 === (7))){
var inst_51371 = (state_51375[(2)]);
var state_51375__$1 = state_51375;
var statearr_51378_52778 = state_51375__$1;
(statearr_51378_52778[(2)] = inst_51371);

(statearr_51378_52778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51376 === (1))){
var state_51375__$1 = state_51375;
var statearr_51382_52780 = state_51375__$1;
(statearr_51382_52780[(2)] = null);

(statearr_51382_52780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51376 === (4))){
var inst_51356 = (state_51375[(7)]);
var inst_51356__$1 = (state_51375[(2)]);
var inst_51358 = (inst_51356__$1 == null);
var state_51375__$1 = (function (){var statearr_51383 = state_51375;
(statearr_51383[(7)] = inst_51356__$1);

return statearr_51383;
})();
if(cljs.core.truth_(inst_51358)){
var statearr_51384_52781 = state_51375__$1;
(statearr_51384_52781[(1)] = (5));

} else {
var statearr_51385_52782 = state_51375__$1;
(statearr_51385_52782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51376 === (6))){
var inst_51356 = (state_51375[(7)]);
var inst_51362 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51356) : p.call(null,inst_51356));
var state_51375__$1 = state_51375;
if(cljs.core.truth_(inst_51362)){
var statearr_51387_52783 = state_51375__$1;
(statearr_51387_52783[(1)] = (8));

} else {
var statearr_51388_52784 = state_51375__$1;
(statearr_51388_52784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51376 === (3))){
var inst_51373 = (state_51375[(2)]);
var state_51375__$1 = state_51375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51375__$1,inst_51373);
} else {
if((state_val_51376 === (2))){
var state_51375__$1 = state_51375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51375__$1,(4),ch);
} else {
if((state_val_51376 === (11))){
var inst_51365 = (state_51375[(2)]);
var state_51375__$1 = state_51375;
var statearr_51393_52785 = state_51375__$1;
(statearr_51393_52785[(2)] = inst_51365);

(statearr_51393_52785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51376 === (9))){
var state_51375__$1 = state_51375;
var statearr_51394_52786 = state_51375__$1;
(statearr_51394_52786[(2)] = null);

(statearr_51394_52786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51376 === (5))){
var inst_51360 = cljs.core.async.close_BANG_(out);
var state_51375__$1 = state_51375;
var statearr_51395_52788 = state_51375__$1;
(statearr_51395_52788[(2)] = inst_51360);

(statearr_51395_52788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51376 === (10))){
var inst_51368 = (state_51375[(2)]);
var state_51375__$1 = (function (){var statearr_51396 = state_51375;
(statearr_51396[(8)] = inst_51368);

return statearr_51396;
})();
var statearr_51397_52789 = state_51375__$1;
(statearr_51397_52789[(2)] = null);

(statearr_51397_52789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51376 === (8))){
var inst_51356 = (state_51375[(7)]);
var state_51375__$1 = state_51375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51375__$1,(11),out,inst_51356);
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
var cljs$core$async$state_machine__49335__auto__ = null;
var cljs$core$async$state_machine__49335__auto____0 = (function (){
var statearr_51401 = [null,null,null,null,null,null,null,null,null];
(statearr_51401[(0)] = cljs$core$async$state_machine__49335__auto__);

(statearr_51401[(1)] = (1));

return statearr_51401;
});
var cljs$core$async$state_machine__49335__auto____1 = (function (state_51375){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_51375);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e51403){var ex__49338__auto__ = e51403;
var statearr_51404_52793 = state_51375;
(statearr_51404_52793[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_51375[(4)]))){
var statearr_51405_52794 = state_51375;
(statearr_51405_52794[(1)] = cljs.core.first((state_51375[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52795 = state_51375;
state_51375 = G__52795;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$state_machine__49335__auto__ = function(state_51375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49335__auto____1.call(this,state_51375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49335__auto____0;
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49335__auto____1;
return cljs$core$async$state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_51414 = f__49446__auto__();
(statearr_51414[(6)] = c__49445__auto___52775);

return statearr_51414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51417 = arguments.length;
switch (G__51417) {
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
var c__49445__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_51495){
var state_val_51497 = (state_51495[(1)]);
if((state_val_51497 === (7))){
var inst_51491 = (state_51495[(2)]);
var state_51495__$1 = state_51495;
var statearr_51501_52799 = state_51495__$1;
(statearr_51501_52799[(2)] = inst_51491);

(statearr_51501_52799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (20))){
var inst_51461 = (state_51495[(7)]);
var inst_51472 = (state_51495[(2)]);
var inst_51473 = cljs.core.next(inst_51461);
var inst_51444 = inst_51473;
var inst_51445 = null;
var inst_51446 = (0);
var inst_51447 = (0);
var state_51495__$1 = (function (){var statearr_51504 = state_51495;
(statearr_51504[(8)] = inst_51444);

(statearr_51504[(9)] = inst_51446);

(statearr_51504[(10)] = inst_51445);

(statearr_51504[(11)] = inst_51472);

(statearr_51504[(12)] = inst_51447);

return statearr_51504;
})();
var statearr_51507_52800 = state_51495__$1;
(statearr_51507_52800[(2)] = null);

(statearr_51507_52800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (1))){
var state_51495__$1 = state_51495;
var statearr_51508_52801 = state_51495__$1;
(statearr_51508_52801[(2)] = null);

(statearr_51508_52801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (4))){
var inst_51432 = (state_51495[(13)]);
var inst_51432__$1 = (state_51495[(2)]);
var inst_51433 = (inst_51432__$1 == null);
var state_51495__$1 = (function (){var statearr_51509 = state_51495;
(statearr_51509[(13)] = inst_51432__$1);

return statearr_51509;
})();
if(cljs.core.truth_(inst_51433)){
var statearr_51510_52803 = state_51495__$1;
(statearr_51510_52803[(1)] = (5));

} else {
var statearr_51511_52804 = state_51495__$1;
(statearr_51511_52804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (15))){
var state_51495__$1 = state_51495;
var statearr_51516_52805 = state_51495__$1;
(statearr_51516_52805[(2)] = null);

(statearr_51516_52805[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (21))){
var state_51495__$1 = state_51495;
var statearr_51517_52806 = state_51495__$1;
(statearr_51517_52806[(2)] = null);

(statearr_51517_52806[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (13))){
var inst_51444 = (state_51495[(8)]);
var inst_51446 = (state_51495[(9)]);
var inst_51445 = (state_51495[(10)]);
var inst_51447 = (state_51495[(12)]);
var inst_51457 = (state_51495[(2)]);
var inst_51458 = (inst_51447 + (1));
var tmp51513 = inst_51444;
var tmp51514 = inst_51446;
var tmp51515 = inst_51445;
var inst_51444__$1 = tmp51513;
var inst_51445__$1 = tmp51515;
var inst_51446__$1 = tmp51514;
var inst_51447__$1 = inst_51458;
var state_51495__$1 = (function (){var statearr_51521 = state_51495;
(statearr_51521[(14)] = inst_51457);

(statearr_51521[(8)] = inst_51444__$1);

(statearr_51521[(9)] = inst_51446__$1);

(statearr_51521[(10)] = inst_51445__$1);

(statearr_51521[(12)] = inst_51447__$1);

return statearr_51521;
})();
var statearr_51522_52807 = state_51495__$1;
(statearr_51522_52807[(2)] = null);

(statearr_51522_52807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (22))){
var state_51495__$1 = state_51495;
var statearr_51523_52808 = state_51495__$1;
(statearr_51523_52808[(2)] = null);

(statearr_51523_52808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (6))){
var inst_51432 = (state_51495[(13)]);
var inst_51442 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51432) : f.call(null,inst_51432));
var inst_51443 = cljs.core.seq(inst_51442);
var inst_51444 = inst_51443;
var inst_51445 = null;
var inst_51446 = (0);
var inst_51447 = (0);
var state_51495__$1 = (function (){var statearr_51524 = state_51495;
(statearr_51524[(8)] = inst_51444);

(statearr_51524[(9)] = inst_51446);

(statearr_51524[(10)] = inst_51445);

(statearr_51524[(12)] = inst_51447);

return statearr_51524;
})();
var statearr_51529_52809 = state_51495__$1;
(statearr_51529_52809[(2)] = null);

(statearr_51529_52809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (17))){
var inst_51461 = (state_51495[(7)]);
var inst_51465 = cljs.core.chunk_first(inst_51461);
var inst_51466 = cljs.core.chunk_rest(inst_51461);
var inst_51467 = cljs.core.count(inst_51465);
var inst_51444 = inst_51466;
var inst_51445 = inst_51465;
var inst_51446 = inst_51467;
var inst_51447 = (0);
var state_51495__$1 = (function (){var statearr_51530 = state_51495;
(statearr_51530[(8)] = inst_51444);

(statearr_51530[(9)] = inst_51446);

(statearr_51530[(10)] = inst_51445);

(statearr_51530[(12)] = inst_51447);

return statearr_51530;
})();
var statearr_51533_52811 = state_51495__$1;
(statearr_51533_52811[(2)] = null);

(statearr_51533_52811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (3))){
var inst_51493 = (state_51495[(2)]);
var state_51495__$1 = state_51495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51495__$1,inst_51493);
} else {
if((state_val_51497 === (12))){
var inst_51481 = (state_51495[(2)]);
var state_51495__$1 = state_51495;
var statearr_51534_52812 = state_51495__$1;
(statearr_51534_52812[(2)] = inst_51481);

(statearr_51534_52812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (2))){
var state_51495__$1 = state_51495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51495__$1,(4),in$);
} else {
if((state_val_51497 === (23))){
var inst_51489 = (state_51495[(2)]);
var state_51495__$1 = state_51495;
var statearr_51538_52813 = state_51495__$1;
(statearr_51538_52813[(2)] = inst_51489);

(statearr_51538_52813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (19))){
var inst_51476 = (state_51495[(2)]);
var state_51495__$1 = state_51495;
var statearr_51542_52814 = state_51495__$1;
(statearr_51542_52814[(2)] = inst_51476);

(statearr_51542_52814[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (11))){
var inst_51444 = (state_51495[(8)]);
var inst_51461 = (state_51495[(7)]);
var inst_51461__$1 = cljs.core.seq(inst_51444);
var state_51495__$1 = (function (){var statearr_51544 = state_51495;
(statearr_51544[(7)] = inst_51461__$1);

return statearr_51544;
})();
if(inst_51461__$1){
var statearr_51545_52820 = state_51495__$1;
(statearr_51545_52820[(1)] = (14));

} else {
var statearr_51546_52821 = state_51495__$1;
(statearr_51546_52821[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (9))){
var inst_51483 = (state_51495[(2)]);
var inst_51484 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51495__$1 = (function (){var statearr_51550 = state_51495;
(statearr_51550[(15)] = inst_51483);

return statearr_51550;
})();
if(cljs.core.truth_(inst_51484)){
var statearr_51551_52822 = state_51495__$1;
(statearr_51551_52822[(1)] = (21));

} else {
var statearr_51552_52823 = state_51495__$1;
(statearr_51552_52823[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (5))){
var inst_51435 = cljs.core.async.close_BANG_(out);
var state_51495__$1 = state_51495;
var statearr_51553_52824 = state_51495__$1;
(statearr_51553_52824[(2)] = inst_51435);

(statearr_51553_52824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (14))){
var inst_51461 = (state_51495[(7)]);
var inst_51463 = cljs.core.chunked_seq_QMARK_(inst_51461);
var state_51495__$1 = state_51495;
if(inst_51463){
var statearr_51554_52825 = state_51495__$1;
(statearr_51554_52825[(1)] = (17));

} else {
var statearr_51555_52826 = state_51495__$1;
(statearr_51555_52826[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (16))){
var inst_51479 = (state_51495[(2)]);
var state_51495__$1 = state_51495;
var statearr_51558_52827 = state_51495__$1;
(statearr_51558_52827[(2)] = inst_51479);

(statearr_51558_52827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (10))){
var inst_51445 = (state_51495[(10)]);
var inst_51447 = (state_51495[(12)]);
var inst_51455 = cljs.core._nth(inst_51445,inst_51447);
var state_51495__$1 = state_51495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51495__$1,(13),out,inst_51455);
} else {
if((state_val_51497 === (18))){
var inst_51461 = (state_51495[(7)]);
var inst_51470 = cljs.core.first(inst_51461);
var state_51495__$1 = state_51495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51495__$1,(20),out,inst_51470);
} else {
if((state_val_51497 === (8))){
var inst_51446 = (state_51495[(9)]);
var inst_51447 = (state_51495[(12)]);
var inst_51451 = (inst_51447 < inst_51446);
var inst_51452 = inst_51451;
var state_51495__$1 = state_51495;
if(cljs.core.truth_(inst_51452)){
var statearr_51559_52829 = state_51495__$1;
(statearr_51559_52829[(1)] = (10));

} else {
var statearr_51560_52830 = state_51495__$1;
(statearr_51560_52830[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__49335__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49335__auto____0 = (function (){
var statearr_51562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51562[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49335__auto__);

(statearr_51562[(1)] = (1));

return statearr_51562;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49335__auto____1 = (function (state_51495){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_51495);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e51568){var ex__49338__auto__ = e51568;
var statearr_51569_52836 = state_51495;
(statearr_51569_52836[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_51495[(4)]))){
var statearr_51570_52837 = state_51495;
(statearr_51570_52837[(1)] = cljs.core.first((state_51495[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52838 = state_51495;
state_51495 = G__52838;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49335__auto__ = function(state_51495){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49335__auto____1.call(this,state_51495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49335__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49335__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_51571 = f__49446__auto__();
(statearr_51571[(6)] = c__49445__auto__);

return statearr_51571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
}));

return c__49445__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__51578 = arguments.length;
switch (G__51578) {
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
var G__51592 = arguments.length;
switch (G__51592) {
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
var G__51603 = arguments.length;
switch (G__51603) {
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
var c__49445__auto___52844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_51707){
var state_val_51708 = (state_51707[(1)]);
if((state_val_51708 === (7))){
var inst_51702 = (state_51707[(2)]);
var state_51707__$1 = state_51707;
var statearr_51714_52849 = state_51707__$1;
(statearr_51714_52849[(2)] = inst_51702);

(statearr_51714_52849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (1))){
var inst_51639 = null;
var state_51707__$1 = (function (){var statearr_51717 = state_51707;
(statearr_51717[(7)] = inst_51639);

return statearr_51717;
})();
var statearr_51718_52850 = state_51707__$1;
(statearr_51718_52850[(2)] = null);

(statearr_51718_52850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (4))){
var inst_51675 = (state_51707[(8)]);
var inst_51675__$1 = (state_51707[(2)]);
var inst_51683 = (inst_51675__$1 == null);
var inst_51684 = cljs.core.not(inst_51683);
var state_51707__$1 = (function (){var statearr_51720 = state_51707;
(statearr_51720[(8)] = inst_51675__$1);

return statearr_51720;
})();
if(inst_51684){
var statearr_51721_52851 = state_51707__$1;
(statearr_51721_52851[(1)] = (5));

} else {
var statearr_51722_52853 = state_51707__$1;
(statearr_51722_52853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (6))){
var state_51707__$1 = state_51707;
var statearr_51723_52854 = state_51707__$1;
(statearr_51723_52854[(2)] = null);

(statearr_51723_52854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (3))){
var inst_51704 = (state_51707[(2)]);
var inst_51705 = cljs.core.async.close_BANG_(out);
var state_51707__$1 = (function (){var statearr_51724 = state_51707;
(statearr_51724[(9)] = inst_51704);

return statearr_51724;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51707__$1,inst_51705);
} else {
if((state_val_51708 === (2))){
var state_51707__$1 = state_51707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51707__$1,(4),ch);
} else {
if((state_val_51708 === (11))){
var inst_51675 = (state_51707[(8)]);
var inst_51696 = (state_51707[(2)]);
var inst_51639 = inst_51675;
var state_51707__$1 = (function (){var statearr_51727 = state_51707;
(statearr_51727[(7)] = inst_51639);

(statearr_51727[(10)] = inst_51696);

return statearr_51727;
})();
var statearr_51728_52859 = state_51707__$1;
(statearr_51728_52859[(2)] = null);

(statearr_51728_52859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (9))){
var inst_51675 = (state_51707[(8)]);
var state_51707__$1 = state_51707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51707__$1,(11),out,inst_51675);
} else {
if((state_val_51708 === (5))){
var inst_51639 = (state_51707[(7)]);
var inst_51675 = (state_51707[(8)]);
var inst_51689 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51675,inst_51639);
var state_51707__$1 = state_51707;
if(inst_51689){
var statearr_51731_52862 = state_51707__$1;
(statearr_51731_52862[(1)] = (8));

} else {
var statearr_51732_52863 = state_51707__$1;
(statearr_51732_52863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (10))){
var inst_51699 = (state_51707[(2)]);
var state_51707__$1 = state_51707;
var statearr_51733_52864 = state_51707__$1;
(statearr_51733_52864[(2)] = inst_51699);

(statearr_51733_52864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (8))){
var inst_51639 = (state_51707[(7)]);
var tmp51730 = inst_51639;
var inst_51639__$1 = tmp51730;
var state_51707__$1 = (function (){var statearr_51734 = state_51707;
(statearr_51734[(7)] = inst_51639__$1);

return statearr_51734;
})();
var statearr_51736_52865 = state_51707__$1;
(statearr_51736_52865[(2)] = null);

(statearr_51736_52865[(1)] = (2));


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
var cljs$core$async$state_machine__49335__auto__ = null;
var cljs$core$async$state_machine__49335__auto____0 = (function (){
var statearr_51739 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51739[(0)] = cljs$core$async$state_machine__49335__auto__);

(statearr_51739[(1)] = (1));

return statearr_51739;
});
var cljs$core$async$state_machine__49335__auto____1 = (function (state_51707){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_51707);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e51740){var ex__49338__auto__ = e51740;
var statearr_51741_52867 = state_51707;
(statearr_51741_52867[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_51707[(4)]))){
var statearr_51742_52868 = state_51707;
(statearr_51742_52868[(1)] = cljs.core.first((state_51707[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52869 = state_51707;
state_51707 = G__52869;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$state_machine__49335__auto__ = function(state_51707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49335__auto____1.call(this,state_51707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49335__auto____0;
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49335__auto____1;
return cljs$core$async$state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_51744 = f__49446__auto__();
(statearr_51744[(6)] = c__49445__auto___52844);

return statearr_51744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__51753 = arguments.length;
switch (G__51753) {
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
var c__49445__auto___52871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_51802){
var state_val_51803 = (state_51802[(1)]);
if((state_val_51803 === (7))){
var inst_51797 = (state_51802[(2)]);
var state_51802__$1 = state_51802;
var statearr_51807_52873 = state_51802__$1;
(statearr_51807_52873[(2)] = inst_51797);

(statearr_51807_52873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51803 === (1))){
var inst_51760 = (new Array(n));
var inst_51762 = inst_51760;
var inst_51763 = (0);
var state_51802__$1 = (function (){var statearr_51811 = state_51802;
(statearr_51811[(7)] = inst_51763);

(statearr_51811[(8)] = inst_51762);

return statearr_51811;
})();
var statearr_51812_52874 = state_51802__$1;
(statearr_51812_52874[(2)] = null);

(statearr_51812_52874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51803 === (4))){
var inst_51767 = (state_51802[(9)]);
var inst_51767__$1 = (state_51802[(2)]);
var inst_51768 = (inst_51767__$1 == null);
var inst_51769 = cljs.core.not(inst_51768);
var state_51802__$1 = (function (){var statearr_51813 = state_51802;
(statearr_51813[(9)] = inst_51767__$1);

return statearr_51813;
})();
if(inst_51769){
var statearr_51815_52875 = state_51802__$1;
(statearr_51815_52875[(1)] = (5));

} else {
var statearr_51816_52876 = state_51802__$1;
(statearr_51816_52876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51803 === (15))){
var inst_51791 = (state_51802[(2)]);
var state_51802__$1 = state_51802;
var statearr_51817_52877 = state_51802__$1;
(statearr_51817_52877[(2)] = inst_51791);

(statearr_51817_52877[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51803 === (13))){
var state_51802__$1 = state_51802;
var statearr_51820_52878 = state_51802__$1;
(statearr_51820_52878[(2)] = null);

(statearr_51820_52878[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51803 === (6))){
var inst_51763 = (state_51802[(7)]);
var inst_51787 = (inst_51763 > (0));
var state_51802__$1 = state_51802;
if(cljs.core.truth_(inst_51787)){
var statearr_51822_52879 = state_51802__$1;
(statearr_51822_52879[(1)] = (12));

} else {
var statearr_51827_52880 = state_51802__$1;
(statearr_51827_52880[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51803 === (3))){
var inst_51799 = (state_51802[(2)]);
var state_51802__$1 = state_51802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51802__$1,inst_51799);
} else {
if((state_val_51803 === (12))){
var inst_51762 = (state_51802[(8)]);
var inst_51789 = cljs.core.vec(inst_51762);
var state_51802__$1 = state_51802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51802__$1,(15),out,inst_51789);
} else {
if((state_val_51803 === (2))){
var state_51802__$1 = state_51802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51802__$1,(4),ch);
} else {
if((state_val_51803 === (11))){
var inst_51779 = (state_51802[(2)]);
var inst_51780 = (new Array(n));
var inst_51762 = inst_51780;
var inst_51763 = (0);
var state_51802__$1 = (function (){var statearr_51830 = state_51802;
(statearr_51830[(7)] = inst_51763);

(statearr_51830[(8)] = inst_51762);

(statearr_51830[(10)] = inst_51779);

return statearr_51830;
})();
var statearr_51831_52881 = state_51802__$1;
(statearr_51831_52881[(2)] = null);

(statearr_51831_52881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51803 === (9))){
var inst_51762 = (state_51802[(8)]);
var inst_51777 = cljs.core.vec(inst_51762);
var state_51802__$1 = state_51802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51802__$1,(11),out,inst_51777);
} else {
if((state_val_51803 === (5))){
var inst_51763 = (state_51802[(7)]);
var inst_51762 = (state_51802[(8)]);
var inst_51767 = (state_51802[(9)]);
var inst_51772 = (state_51802[(11)]);
var inst_51771 = (inst_51762[inst_51763] = inst_51767);
var inst_51772__$1 = (inst_51763 + (1));
var inst_51773 = (inst_51772__$1 < n);
var state_51802__$1 = (function (){var statearr_51835 = state_51802;
(statearr_51835[(12)] = inst_51771);

(statearr_51835[(11)] = inst_51772__$1);

return statearr_51835;
})();
if(cljs.core.truth_(inst_51773)){
var statearr_51836_52882 = state_51802__$1;
(statearr_51836_52882[(1)] = (8));

} else {
var statearr_51837_52883 = state_51802__$1;
(statearr_51837_52883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51803 === (14))){
var inst_51794 = (state_51802[(2)]);
var inst_51795 = cljs.core.async.close_BANG_(out);
var state_51802__$1 = (function (){var statearr_51840 = state_51802;
(statearr_51840[(13)] = inst_51794);

return statearr_51840;
})();
var statearr_51841_52884 = state_51802__$1;
(statearr_51841_52884[(2)] = inst_51795);

(statearr_51841_52884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51803 === (10))){
var inst_51785 = (state_51802[(2)]);
var state_51802__$1 = state_51802;
var statearr_51843_52885 = state_51802__$1;
(statearr_51843_52885[(2)] = inst_51785);

(statearr_51843_52885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51803 === (8))){
var inst_51762 = (state_51802[(8)]);
var inst_51772 = (state_51802[(11)]);
var tmp51838 = inst_51762;
var inst_51762__$1 = tmp51838;
var inst_51763 = inst_51772;
var state_51802__$1 = (function (){var statearr_51844 = state_51802;
(statearr_51844[(7)] = inst_51763);

(statearr_51844[(8)] = inst_51762__$1);

return statearr_51844;
})();
var statearr_51845_52886 = state_51802__$1;
(statearr_51845_52886[(2)] = null);

(statearr_51845_52886[(1)] = (2));


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
var cljs$core$async$state_machine__49335__auto__ = null;
var cljs$core$async$state_machine__49335__auto____0 = (function (){
var statearr_51847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51847[(0)] = cljs$core$async$state_machine__49335__auto__);

(statearr_51847[(1)] = (1));

return statearr_51847;
});
var cljs$core$async$state_machine__49335__auto____1 = (function (state_51802){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_51802);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e51848){var ex__49338__auto__ = e51848;
var statearr_51849_52889 = state_51802;
(statearr_51849_52889[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_51802[(4)]))){
var statearr_51852_52890 = state_51802;
(statearr_51852_52890[(1)] = cljs.core.first((state_51802[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52891 = state_51802;
state_51802 = G__52891;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$state_machine__49335__auto__ = function(state_51802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49335__auto____1.call(this,state_51802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49335__auto____0;
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49335__auto____1;
return cljs$core$async$state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_51855 = f__49446__auto__();
(statearr_51855[(6)] = c__49445__auto___52871);

return statearr_51855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__51864 = arguments.length;
switch (G__51864) {
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
var c__49445__auto___52893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_51981){
var state_val_51982 = (state_51981[(1)]);
if((state_val_51982 === (7))){
var inst_51963 = (state_51981[(2)]);
var state_51981__$1 = state_51981;
var statearr_51983_52895 = state_51981__$1;
(statearr_51983_52895[(2)] = inst_51963);

(statearr_51983_52895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51982 === (1))){
var inst_51876 = [];
var inst_51880 = inst_51876;
var inst_51881 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51981__$1 = (function (){var statearr_51985 = state_51981;
(statearr_51985[(7)] = inst_51880);

(statearr_51985[(8)] = inst_51881);

return statearr_51985;
})();
var statearr_51986_52896 = state_51981__$1;
(statearr_51986_52896[(2)] = null);

(statearr_51986_52896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51982 === (4))){
var inst_51891 = (state_51981[(9)]);
var inst_51891__$1 = (state_51981[(2)]);
var inst_51897 = (inst_51891__$1 == null);
var inst_51898 = cljs.core.not(inst_51897);
var state_51981__$1 = (function (){var statearr_51988 = state_51981;
(statearr_51988[(9)] = inst_51891__$1);

return statearr_51988;
})();
if(inst_51898){
var statearr_51993_52897 = state_51981__$1;
(statearr_51993_52897[(1)] = (5));

} else {
var statearr_51997_52898 = state_51981__$1;
(statearr_51997_52898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51982 === (15))){
var inst_51880 = (state_51981[(7)]);
var inst_51955 = cljs.core.vec(inst_51880);
var state_51981__$1 = state_51981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51981__$1,(18),out,inst_51955);
} else {
if((state_val_51982 === (13))){
var inst_51947 = (state_51981[(2)]);
var state_51981__$1 = state_51981;
var statearr_52001_52899 = state_51981__$1;
(statearr_52001_52899[(2)] = inst_51947);

(statearr_52001_52899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51982 === (6))){
var inst_51880 = (state_51981[(7)]);
var inst_51952 = inst_51880.length;
var inst_51953 = (inst_51952 > (0));
var state_51981__$1 = state_51981;
if(cljs.core.truth_(inst_51953)){
var statearr_52010_52900 = state_51981__$1;
(statearr_52010_52900[(1)] = (15));

} else {
var statearr_52015_52901 = state_51981__$1;
(statearr_52015_52901[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51982 === (17))){
var inst_51960 = (state_51981[(2)]);
var inst_51961 = cljs.core.async.close_BANG_(out);
var state_51981__$1 = (function (){var statearr_52024 = state_51981;
(statearr_52024[(10)] = inst_51960);

return statearr_52024;
})();
var statearr_52025_52902 = state_51981__$1;
(statearr_52025_52902[(2)] = inst_51961);

(statearr_52025_52902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51982 === (3))){
var inst_51965 = (state_51981[(2)]);
var state_51981__$1 = state_51981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51981__$1,inst_51965);
} else {
if((state_val_51982 === (12))){
var inst_51880 = (state_51981[(7)]);
var inst_51938 = cljs.core.vec(inst_51880);
var state_51981__$1 = state_51981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51981__$1,(14),out,inst_51938);
} else {
if((state_val_51982 === (2))){
var state_51981__$1 = state_51981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51981__$1,(4),ch);
} else {
if((state_val_51982 === (11))){
var inst_51912 = (state_51981[(11)]);
var inst_51880 = (state_51981[(7)]);
var inst_51891 = (state_51981[(9)]);
var inst_51926 = inst_51880.push(inst_51891);
var tmp52026 = inst_51880;
var inst_51880__$1 = tmp52026;
var inst_51881 = inst_51912;
var state_51981__$1 = (function (){var statearr_52028 = state_51981;
(statearr_52028[(7)] = inst_51880__$1);

(statearr_52028[(12)] = inst_51926);

(statearr_52028[(8)] = inst_51881);

return statearr_52028;
})();
var statearr_52029_52903 = state_51981__$1;
(statearr_52029_52903[(2)] = null);

(statearr_52029_52903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51982 === (9))){
var inst_51881 = (state_51981[(8)]);
var inst_51919 = cljs.core.keyword_identical_QMARK_(inst_51881,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_51981__$1 = state_51981;
var statearr_52030_52904 = state_51981__$1;
(statearr_52030_52904[(2)] = inst_51919);

(statearr_52030_52904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51982 === (5))){
var inst_51912 = (state_51981[(11)]);
var inst_51881 = (state_51981[(8)]);
var inst_51914 = (state_51981[(13)]);
var inst_51891 = (state_51981[(9)]);
var inst_51912__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51891) : f.call(null,inst_51891));
var inst_51914__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51912__$1,inst_51881);
var state_51981__$1 = (function (){var statearr_52032 = state_51981;
(statearr_52032[(11)] = inst_51912__$1);

(statearr_52032[(13)] = inst_51914__$1);

return statearr_52032;
})();
if(inst_51914__$1){
var statearr_52033_52905 = state_51981__$1;
(statearr_52033_52905[(1)] = (8));

} else {
var statearr_52034_52906 = state_51981__$1;
(statearr_52034_52906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51982 === (14))){
var inst_51912 = (state_51981[(11)]);
var inst_51891 = (state_51981[(9)]);
var inst_51940 = (state_51981[(2)]);
var inst_51943 = [];
var inst_51944 = inst_51943.push(inst_51891);
var inst_51880 = inst_51943;
var inst_51881 = inst_51912;
var state_51981__$1 = (function (){var statearr_52035 = state_51981;
(statearr_52035[(7)] = inst_51880);

(statearr_52035[(14)] = inst_51944);

(statearr_52035[(15)] = inst_51940);

(statearr_52035[(8)] = inst_51881);

return statearr_52035;
})();
var statearr_52037_52907 = state_51981__$1;
(statearr_52037_52907[(2)] = null);

(statearr_52037_52907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51982 === (16))){
var state_51981__$1 = state_51981;
var statearr_52038_52908 = state_51981__$1;
(statearr_52038_52908[(2)] = null);

(statearr_52038_52908[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51982 === (10))){
var inst_51921 = (state_51981[(2)]);
var state_51981__$1 = state_51981;
if(cljs.core.truth_(inst_51921)){
var statearr_52039_52909 = state_51981__$1;
(statearr_52039_52909[(1)] = (11));

} else {
var statearr_52040_52910 = state_51981__$1;
(statearr_52040_52910[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51982 === (18))){
var inst_51957 = (state_51981[(2)]);
var state_51981__$1 = state_51981;
var statearr_52041_52911 = state_51981__$1;
(statearr_52041_52911[(2)] = inst_51957);

(statearr_52041_52911[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51982 === (8))){
var inst_51914 = (state_51981[(13)]);
var state_51981__$1 = state_51981;
var statearr_52042_52912 = state_51981__$1;
(statearr_52042_52912[(2)] = inst_51914);

(statearr_52042_52912[(1)] = (10));


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
var cljs$core$async$state_machine__49335__auto__ = null;
var cljs$core$async$state_machine__49335__auto____0 = (function (){
var statearr_52048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52048[(0)] = cljs$core$async$state_machine__49335__auto__);

(statearr_52048[(1)] = (1));

return statearr_52048;
});
var cljs$core$async$state_machine__49335__auto____1 = (function (state_51981){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_51981);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e52050){var ex__49338__auto__ = e52050;
var statearr_52053_52913 = state_51981;
(statearr_52053_52913[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_51981[(4)]))){
var statearr_52055_52914 = state_51981;
(statearr_52055_52914[(1)] = cljs.core.first((state_51981[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52915 = state_51981;
state_51981 = G__52915;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
cljs$core$async$state_machine__49335__auto__ = function(state_51981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49335__auto____1.call(this,state_51981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49335__auto____0;
cljs$core$async$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49335__auto____1;
return cljs$core$async$state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_52056 = f__49446__auto__();
(statearr_52056[(6)] = c__49445__auto___52893);

return statearr_52056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
