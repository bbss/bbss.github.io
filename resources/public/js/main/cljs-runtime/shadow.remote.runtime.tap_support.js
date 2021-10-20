goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__56433,p__56434){
var map__56435 = p__56433;
var map__56435__$1 = cljs.core.__destructure_map(map__56435);
var svc = map__56435__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56435__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56435__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56435__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__56436 = p__56434;
var map__56436__$1 = cljs.core.__destructure_map(map__56436);
var msg = map__56436__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56436__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56436__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56436__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56436__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__56452,p__56453){
var map__56459 = p__56452;
var map__56459__$1 = cljs.core.__destructure_map(map__56459);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56459__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__56460 = p__56453;
var map__56460__$1 = cljs.core.__destructure_map(map__56460);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56460__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__56493,p__56494){
var map__56495 = p__56493;
var map__56495__$1 = cljs.core.__destructure_map(map__56495);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56495__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56495__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__56497 = p__56494;
var map__56497__$1 = cljs.core.__destructure_map(map__56497);
var msg = map__56497__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56497__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__56526,tid){
var map__56527 = p__56526;
var map__56527__$1 = cljs.core.__destructure_map(map__56527);
var svc = map__56527__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56527__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__56545 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__56546 = null;
var count__56547 = (0);
var i__56548 = (0);
while(true){
if((i__56548 < count__56547)){
var vec__56561 = chunk__56546.cljs$core$IIndexed$_nth$arity$2(null,i__56548);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56561,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56561,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__56652 = seq__56545;
var G__56653 = chunk__56546;
var G__56654 = count__56547;
var G__56655 = (i__56548 + (1));
seq__56545 = G__56652;
chunk__56546 = G__56653;
count__56547 = G__56654;
i__56548 = G__56655;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56545);
if(temp__5753__auto__){
var seq__56545__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56545__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__56545__$1);
var G__56658 = cljs.core.chunk_rest(seq__56545__$1);
var G__56659 = c__4649__auto__;
var G__56660 = cljs.core.count(c__4649__auto__);
var G__56661 = (0);
seq__56545 = G__56658;
chunk__56546 = G__56659;
count__56547 = G__56660;
i__56548 = G__56661;
continue;
} else {
var vec__56584 = cljs.core.first(seq__56545__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56584,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56584,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__56662 = cljs.core.next(seq__56545__$1);
var G__56663 = null;
var G__56664 = (0);
var G__56665 = (0);
seq__56545 = G__56662;
chunk__56546 = G__56663;
count__56547 = G__56664;
i__56548 = G__56665;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__56528_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__56528_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__56529_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__56529_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__56530_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__56530_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__56531_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__56531_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__56635){
var map__56641 = p__56635;
var map__56641__$1 = cljs.core.__destructure_map(map__56641);
var svc = map__56641__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56641__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56641__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
