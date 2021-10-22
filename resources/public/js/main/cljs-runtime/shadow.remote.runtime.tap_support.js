goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__56799,p__56800){
var map__56802 = p__56799;
var map__56802__$1 = cljs.core.__destructure_map(map__56802);
var svc = map__56802__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56802__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56802__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56802__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__56803 = p__56800;
var map__56803__$1 = cljs.core.__destructure_map(map__56803);
var msg = map__56803__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56803__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56803__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56803__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56803__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__56816,p__56817){
var map__56818 = p__56816;
var map__56818__$1 = cljs.core.__destructure_map(map__56818);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56818__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__56821 = p__56817;
var map__56821__$1 = cljs.core.__destructure_map(map__56821);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56821__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__56825,p__56826){
var map__56827 = p__56825;
var map__56827__$1 = cljs.core.__destructure_map(map__56827);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56827__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56827__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__56828 = p__56826;
var map__56828__$1 = cljs.core.__destructure_map(map__56828);
var msg = map__56828__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56828__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__56837,tid){
var map__56838 = p__56837;
var map__56838__$1 = cljs.core.__destructure_map(map__56838);
var svc = map__56838__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56838__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__56846 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__56847 = null;
var count__56848 = (0);
var i__56849 = (0);
while(true){
if((i__56849 < count__56848)){
var vec__56856 = chunk__56847.cljs$core$IIndexed$_nth$arity$2(null,i__56849);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56856,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56856,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__56868 = seq__56846;
var G__56869 = chunk__56847;
var G__56870 = count__56848;
var G__56871 = (i__56849 + (1));
seq__56846 = G__56868;
chunk__56847 = G__56869;
count__56848 = G__56870;
i__56849 = G__56871;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56846);
if(temp__5753__auto__){
var seq__56846__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56846__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__56846__$1);
var G__56873 = cljs.core.chunk_rest(seq__56846__$1);
var G__56874 = c__4649__auto__;
var G__56875 = cljs.core.count(c__4649__auto__);
var G__56876 = (0);
seq__56846 = G__56873;
chunk__56847 = G__56874;
count__56848 = G__56875;
i__56849 = G__56876;
continue;
} else {
var vec__56859 = cljs.core.first(seq__56846__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56859,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56859,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__56877 = cljs.core.next(seq__56846__$1);
var G__56878 = null;
var G__56879 = (0);
var G__56880 = (0);
seq__56846 = G__56877;
chunk__56847 = G__56878;
count__56848 = G__56879;
i__56849 = G__56880;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__56841_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__56841_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__56842_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__56842_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__56843_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__56843_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__56844_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__56844_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__56862){
var map__56863 = p__56862;
var map__56863__$1 = cljs.core.__destructure_map(map__56863);
var svc = map__56863__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56863__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56863__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
