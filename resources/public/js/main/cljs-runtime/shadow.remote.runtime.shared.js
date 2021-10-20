goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__55741,res){
var map__55742 = p__55741;
var map__55742__$1 = cljs.core.__destructure_map(map__55742);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55742__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55742__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__55743 = res;
var G__55743__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55743,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__55743);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55743__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__55743__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__55764 = arguments.length;
switch (G__55764) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__55793,msg,handlers,timeout_after_ms){
var map__55795 = p__55793;
var map__55795__$1 = cljs.core.__destructure_map(map__55795);
var runtime = map__55795__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55795__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___55941 = arguments.length;
var i__4830__auto___55942 = (0);
while(true){
if((i__4830__auto___55942 < len__4829__auto___55941)){
args__4835__auto__.push((arguments[i__4830__auto___55942]));

var G__55943 = (i__4830__auto___55942 + (1));
i__4830__auto___55942 = G__55943;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__55822,ev,args){
var map__55823 = p__55822;
var map__55823__$1 = cljs.core.__destructure_map(map__55823);
var runtime = map__55823__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55823__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__55824 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__55827 = null;
var count__55828 = (0);
var i__55829 = (0);
while(true){
if((i__55829 < count__55828)){
var ext = chunk__55827.cljs$core$IIndexed$_nth$arity$2(null,i__55829);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__55944 = seq__55824;
var G__55945 = chunk__55827;
var G__55946 = count__55828;
var G__55947 = (i__55829 + (1));
seq__55824 = G__55944;
chunk__55827 = G__55945;
count__55828 = G__55946;
i__55829 = G__55947;
continue;
} else {
var G__55948 = seq__55824;
var G__55949 = chunk__55827;
var G__55950 = count__55828;
var G__55951 = (i__55829 + (1));
seq__55824 = G__55948;
chunk__55827 = G__55949;
count__55828 = G__55950;
i__55829 = G__55951;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55824);
if(temp__5753__auto__){
var seq__55824__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55824__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55824__$1);
var G__55952 = cljs.core.chunk_rest(seq__55824__$1);
var G__55953 = c__4649__auto__;
var G__55954 = cljs.core.count(c__4649__auto__);
var G__55955 = (0);
seq__55824 = G__55952;
chunk__55827 = G__55953;
count__55828 = G__55954;
i__55829 = G__55955;
continue;
} else {
var ext = cljs.core.first(seq__55824__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__55956 = cljs.core.next(seq__55824__$1);
var G__55957 = null;
var G__55958 = (0);
var G__55959 = (0);
seq__55824 = G__55956;
chunk__55827 = G__55957;
count__55828 = G__55958;
i__55829 = G__55959;
continue;
} else {
var G__55960 = cljs.core.next(seq__55824__$1);
var G__55961 = null;
var G__55962 = (0);
var G__55963 = (0);
seq__55824 = G__55960;
chunk__55827 = G__55961;
count__55828 = G__55962;
i__55829 = G__55963;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq55807){
var G__55808 = cljs.core.first(seq55807);
var seq55807__$1 = cljs.core.next(seq55807);
var G__55809 = cljs.core.first(seq55807__$1);
var seq55807__$2 = cljs.core.next(seq55807__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55808,G__55809,seq55807__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__55844,p__55845){
var map__55846 = p__55844;
var map__55846__$1 = cljs.core.__destructure_map(map__55846);
var runtime = map__55846__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__55847 = p__55845;
var map__55847__$1 = cljs.core.__destructure_map(map__55847);
var msg = map__55847__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55847__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__55850 = cljs.core.deref(state_ref);
var map__55850__$1 = cljs.core.__destructure_map(map__55850);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55850__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55850__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__55856){
var map__55858 = p__55856;
var map__55858__$1 = cljs.core.__destructure_map(map__55858);
var runtime = map__55858__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55858__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__55864,msg){
var map__55865 = p__55864;
var map__55865__$1 = cljs.core.__destructure_map(map__55865);
var runtime = map__55865__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55865__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__55877,key,p__55878){
var map__55879 = p__55877;
var map__55879__$1 = cljs.core.__destructure_map(map__55879);
var state = map__55879__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55879__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__55880 = p__55878;
var map__55880__$1 = cljs.core.__destructure_map(map__55880);
var spec = map__55880__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55880__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__55883,key,spec){
var map__55884 = p__55883;
var map__55884__$1 = cljs.core.__destructure_map(map__55884);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55884__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__55888_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__55888_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__55889_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__55889_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__55890_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__55890_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__55891_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__55891_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__55892_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__55892_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__55907,key){
var map__55908 = p__55907;
var map__55908__$1 = cljs.core.__destructure_map(map__55908);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55908__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__55918,msg){
var map__55919 = p__55918;
var map__55919__$1 = cljs.core.__destructure_map(map__55919);
var runtime = map__55919__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55919__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__55920,p__55921){
var map__55922 = p__55920;
var map__55922__$1 = cljs.core.__destructure_map(map__55922);
var runtime = map__55922__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55922__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__55923 = p__55921;
var map__55923__$1 = cljs.core.__destructure_map(map__55923);
var msg = map__55923__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55923__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55923__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__55924 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__55926 = null;
var count__55927 = (0);
var i__55928 = (0);
while(true){
if((i__55928 < count__55927)){
var map__55932 = chunk__55926.cljs$core$IIndexed$_nth$arity$2(null,i__55928);
var map__55932__$1 = cljs.core.__destructure_map(map__55932);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55932__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__55984 = seq__55924;
var G__55985 = chunk__55926;
var G__55986 = count__55927;
var G__55987 = (i__55928 + (1));
seq__55924 = G__55984;
chunk__55926 = G__55985;
count__55927 = G__55986;
i__55928 = G__55987;
continue;
} else {
var G__55988 = seq__55924;
var G__55989 = chunk__55926;
var G__55990 = count__55927;
var G__55991 = (i__55928 + (1));
seq__55924 = G__55988;
chunk__55926 = G__55989;
count__55927 = G__55990;
i__55928 = G__55991;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55924);
if(temp__5753__auto__){
var seq__55924__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55924__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55924__$1);
var G__55992 = cljs.core.chunk_rest(seq__55924__$1);
var G__55993 = c__4649__auto__;
var G__55994 = cljs.core.count(c__4649__auto__);
var G__55995 = (0);
seq__55924 = G__55992;
chunk__55926 = G__55993;
count__55927 = G__55994;
i__55928 = G__55995;
continue;
} else {
var map__55934 = cljs.core.first(seq__55924__$1);
var map__55934__$1 = cljs.core.__destructure_map(map__55934);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55934__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__56000 = cljs.core.next(seq__55924__$1);
var G__56001 = null;
var G__56002 = (0);
var G__56003 = (0);
seq__55924 = G__56000;
chunk__55926 = G__56001;
count__55927 = G__56002;
i__55928 = G__56003;
continue;
} else {
var G__56004 = cljs.core.next(seq__55924__$1);
var G__56005 = null;
var G__56006 = (0);
var G__56007 = (0);
seq__55924 = G__56004;
chunk__55926 = G__56005;
count__55927 = G__56006;
i__55928 = G__56007;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
