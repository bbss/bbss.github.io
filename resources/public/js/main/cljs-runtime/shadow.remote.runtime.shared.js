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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__55844,res){
var map__55845 = p__55844;
var map__55845__$1 = cljs.core.__destructure_map(map__55845);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55845__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55845__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__55846 = res;
var G__55846__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55846,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__55846);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55846__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__55846__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__55852 = arguments.length;
switch (G__55852) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__55854,msg,handlers,timeout_after_ms){
var map__55855 = p__55854;
var map__55855__$1 = cljs.core.__destructure_map(map__55855);
var runtime = map__55855__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55855__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___55993 = arguments.length;
var i__4830__auto___55994 = (0);
while(true){
if((i__4830__auto___55994 < len__4829__auto___55993)){
args__4835__auto__.push((arguments[i__4830__auto___55994]));

var G__55998 = (i__4830__auto___55994 + (1));
i__4830__auto___55994 = G__55998;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__55863,ev,args){
var map__55864 = p__55863;
var map__55864__$1 = cljs.core.__destructure_map(map__55864);
var runtime = map__55864__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55864__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__55865 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__55868 = null;
var count__55869 = (0);
var i__55870 = (0);
while(true){
if((i__55870 < count__55869)){
var ext = chunk__55868.cljs$core$IIndexed$_nth$arity$2(null,i__55870);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__55999 = seq__55865;
var G__56000 = chunk__55868;
var G__56001 = count__55869;
var G__56002 = (i__55870 + (1));
seq__55865 = G__55999;
chunk__55868 = G__56000;
count__55869 = G__56001;
i__55870 = G__56002;
continue;
} else {
var G__56003 = seq__55865;
var G__56004 = chunk__55868;
var G__56005 = count__55869;
var G__56006 = (i__55870 + (1));
seq__55865 = G__56003;
chunk__55868 = G__56004;
count__55869 = G__56005;
i__55870 = G__56006;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55865);
if(temp__5753__auto__){
var seq__55865__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55865__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55865__$1);
var G__56010 = cljs.core.chunk_rest(seq__55865__$1);
var G__56011 = c__4649__auto__;
var G__56012 = cljs.core.count(c__4649__auto__);
var G__56013 = (0);
seq__55865 = G__56010;
chunk__55868 = G__56011;
count__55869 = G__56012;
i__55870 = G__56013;
continue;
} else {
var ext = cljs.core.first(seq__55865__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__56014 = cljs.core.next(seq__55865__$1);
var G__56015 = null;
var G__56016 = (0);
var G__56017 = (0);
seq__55865 = G__56014;
chunk__55868 = G__56015;
count__55869 = G__56016;
i__55870 = G__56017;
continue;
} else {
var G__56018 = cljs.core.next(seq__55865__$1);
var G__56019 = null;
var G__56020 = (0);
var G__56021 = (0);
seq__55865 = G__56018;
chunk__55868 = G__56019;
count__55869 = G__56020;
i__55870 = G__56021;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq55860){
var G__55861 = cljs.core.first(seq55860);
var seq55860__$1 = cljs.core.next(seq55860);
var G__55862 = cljs.core.first(seq55860__$1);
var seq55860__$2 = cljs.core.next(seq55860__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55861,G__55862,seq55860__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__55888,p__55889){
var map__55890 = p__55888;
var map__55890__$1 = cljs.core.__destructure_map(map__55890);
var runtime = map__55890__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55890__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__55891 = p__55889;
var map__55891__$1 = cljs.core.__destructure_map(map__55891);
var msg = map__55891__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55891__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__55894 = cljs.core.deref(state_ref);
var map__55894__$1 = cljs.core.__destructure_map(map__55894);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55894__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55894__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__55896){
var map__55897 = p__55896;
var map__55897__$1 = cljs.core.__destructure_map(map__55897);
var runtime = map__55897__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55897__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__55908,msg){
var map__55911 = p__55908;
var map__55911__$1 = cljs.core.__destructure_map(map__55911);
var runtime = map__55911__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55911__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__55913,key,p__55914){
var map__55919 = p__55913;
var map__55919__$1 = cljs.core.__destructure_map(map__55919);
var state = map__55919__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55919__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__55920 = p__55914;
var map__55920__$1 = cljs.core.__destructure_map(map__55920);
var spec = map__55920__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55920__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__55929,key,spec){
var map__55930 = p__55929;
var map__55930__$1 = cljs.core.__destructure_map(map__55930);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55930__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__55931_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__55931_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__55937_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__55937_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__55938_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__55938_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__55939_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__55939_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__55943_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__55943_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__55955,key){
var map__55956 = p__55955;
var map__55956__$1 = cljs.core.__destructure_map(map__55956);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55956__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__55957,msg){
var map__55958 = p__55957;
var map__55958__$1 = cljs.core.__destructure_map(map__55958);
var runtime = map__55958__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55958__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__55964,p__55965){
var map__55966 = p__55964;
var map__55966__$1 = cljs.core.__destructure_map(map__55966);
var runtime = map__55966__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55966__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__55967 = p__55965;
var map__55967__$1 = cljs.core.__destructure_map(map__55967);
var msg = map__55967__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55967__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55967__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__55968 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__55970 = null;
var count__55971 = (0);
var i__55972 = (0);
while(true){
if((i__55972 < count__55971)){
var map__55977 = chunk__55970.cljs$core$IIndexed$_nth$arity$2(null,i__55972);
var map__55977__$1 = cljs.core.__destructure_map(map__55977);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55977__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__56030 = seq__55968;
var G__56031 = chunk__55970;
var G__56032 = count__55971;
var G__56033 = (i__55972 + (1));
seq__55968 = G__56030;
chunk__55970 = G__56031;
count__55971 = G__56032;
i__55972 = G__56033;
continue;
} else {
var G__56034 = seq__55968;
var G__56035 = chunk__55970;
var G__56036 = count__55971;
var G__56037 = (i__55972 + (1));
seq__55968 = G__56034;
chunk__55970 = G__56035;
count__55971 = G__56036;
i__55972 = G__56037;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55968);
if(temp__5753__auto__){
var seq__55968__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55968__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55968__$1);
var G__56041 = cljs.core.chunk_rest(seq__55968__$1);
var G__56042 = c__4649__auto__;
var G__56043 = cljs.core.count(c__4649__auto__);
var G__56044 = (0);
seq__55968 = G__56041;
chunk__55970 = G__56042;
count__55971 = G__56043;
i__55972 = G__56044;
continue;
} else {
var map__55978 = cljs.core.first(seq__55968__$1);
var map__55978__$1 = cljs.core.__destructure_map(map__55978);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55978__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__56051 = cljs.core.next(seq__55968__$1);
var G__56052 = null;
var G__56053 = (0);
var G__56054 = (0);
seq__55968 = G__56051;
chunk__55970 = G__56052;
count__55971 = G__56053;
i__55972 = G__56054;
continue;
} else {
var G__56055 = cljs.core.next(seq__55968__$1);
var G__56056 = null;
var G__56057 = (0);
var G__56058 = (0);
seq__55968 = G__56055;
chunk__55970 = G__56056;
count__55971 = G__56057;
i__55972 = G__56058;
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
