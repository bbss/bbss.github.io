goog.provide('com.fulcrologic.fulcro.rendering.multiple_roots_renderer');
/**
 * Register a mounted react component as a new root that should be managed. The
 *   options map can contain:
 * 
 *   - `:initialize?`: Should the initial state be pushed into the app state (if not already present)? Defaults
 *   to true, which causes it to happen once (on initial mount).
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$register_root_BANG_(var_args){
var G__63316 = arguments.length;
switch (G__63316) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118),true], null));
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__63323){
var map__63324 = p__63323;
var map__63324__$1 = cljs.core.__destructure_map(map__63324);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63324__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63324__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var app__$1 = (function (){var or__4223__auto__ = app;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$1)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
var initialize_state_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"initialize-state!","initialize-state!",-1114074844));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var known_roots = (function (){var G__63329 = app__$1;
var G__63329__$1 = (((G__63329 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__63329));
var G__63329__$2 = (((G__63329__$1 == null))?null:cljs.core.deref(G__63329__$1));
if((G__63329__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__63329__$2);
}
})();
var initialized_QMARK_ = cljs.core.contains_QMARK_(known_roots,k);
if(cljs.core.truth_((function (){var and__4221__auto__ = initialize_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return (!(initialized_QMARK_));
} else {
return and__4221__auto__;
}
})())){
(initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,class$) : initialize_state_BANG_.call(null,app__$1,class$));

var G__63334_63508 = app__$1;
var G__63335_63509 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__63334_63508,G__63335_63509) : schedule_render_BANG_.call(null,G__63334_63508,G__63335_63509));
} else {
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,90,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,895371989,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,92,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Register-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-reg-root-no-app"], null);
}),null)),null,919444302,null);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Deregister a mounted root that should no longer be managed.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$deregister_root_BANG_(var_args){
var G__63341 = arguments.length;
switch (G__63341) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__63347){
var map__63348 = p__63347;
var map__63348__$1 = cljs.core.__destructure_map(map__63348);
var options = map__63348__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63348__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app__$1 = (function (){var or__4223__auto__ = app;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$1)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,103,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,1400277518,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,105,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deregister-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-dereg-root-no-app"], null);
}),null)),null,-1406711117,null);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_roots_BANG_(app,options){
var state_map = (function (){var G__63360 = app;
var G__63360__$1 = (((G__63360 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__63360));
if((G__63360__$1 == null)){
return null;
} else {
return cljs.core.deref(G__63360__$1);
}
})();
var known_roots = (function (){var G__63361 = app;
var G__63361__$1 = (((G__63361 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__63361));
var G__63361__$2 = (((G__63361__$1 == null))?null:cljs.core.deref(G__63361__$1));
if((G__63361__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__63361__$2);
}
})();
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);

var seq__63362 = cljs.core.seq(cljs.core.keys(known_roots));
var chunk__63364 = null;
var count__63365 = (0);
var i__63366 = (0);
while(true){
if((i__63366 < count__63365)){
var k = chunk__63364.cljs$core$IIndexed$_nth$arity$2(null,i__63366);
var cls_63511 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_63512 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_63511,state_map);
var root_props_63513 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_63512,state_map,state_map);
var seq__63383_63514 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__63384_63515 = null;
var count__63385_63516 = (0);
var i__63386_63517 = (0);
while(true){
if((i__63386_63517 < count__63385_63516)){
var root_63518 = chunk__63384_63515.cljs$core$IIndexed$_nth$arity$2(null,i__63386_63517);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_63518,root_props_63513);


var G__63519 = seq__63383_63514;
var G__63520 = chunk__63384_63515;
var G__63521 = count__63385_63516;
var G__63522 = (i__63386_63517 + (1));
seq__63383_63514 = G__63519;
chunk__63384_63515 = G__63520;
count__63385_63516 = G__63521;
i__63386_63517 = G__63522;
continue;
} else {
var temp__5753__auto___63523 = cljs.core.seq(seq__63383_63514);
if(temp__5753__auto___63523){
var seq__63383_63524__$1 = temp__5753__auto___63523;
if(cljs.core.chunked_seq_QMARK_(seq__63383_63524__$1)){
var c__4649__auto___63525 = cljs.core.chunk_first(seq__63383_63524__$1);
var G__63526 = cljs.core.chunk_rest(seq__63383_63524__$1);
var G__63527 = c__4649__auto___63525;
var G__63528 = cljs.core.count(c__4649__auto___63525);
var G__63529 = (0);
seq__63383_63514 = G__63526;
chunk__63384_63515 = G__63527;
count__63385_63516 = G__63528;
i__63386_63517 = G__63529;
continue;
} else {
var root_63530 = cljs.core.first(seq__63383_63524__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_63530,root_props_63513);


var G__63531 = cljs.core.next(seq__63383_63524__$1);
var G__63532 = null;
var G__63533 = (0);
var G__63534 = (0);
seq__63383_63514 = G__63531;
chunk__63384_63515 = G__63532;
count__63385_63516 = G__63533;
i__63386_63517 = G__63534;
continue;
}
} else {
}
}
break;
}


var G__63535 = seq__63362;
var G__63536 = chunk__63364;
var G__63537 = count__63365;
var G__63538 = (i__63366 + (1));
seq__63362 = G__63535;
chunk__63364 = G__63536;
count__63365 = G__63537;
i__63366 = G__63538;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63362);
if(temp__5753__auto__){
var seq__63362__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63362__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__63362__$1);
var G__63539 = cljs.core.chunk_rest(seq__63362__$1);
var G__63540 = c__4649__auto__;
var G__63541 = cljs.core.count(c__4649__auto__);
var G__63542 = (0);
seq__63362 = G__63539;
chunk__63364 = G__63540;
count__63365 = G__63541;
i__63366 = G__63542;
continue;
} else {
var k = cljs.core.first(seq__63362__$1);
var cls_63543 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_63544 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_63543,state_map);
var root_props_63545 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_63544,state_map,state_map);
var seq__63387_63546 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__63388_63547 = null;
var count__63389_63548 = (0);
var i__63390_63549 = (0);
while(true){
if((i__63390_63549 < count__63389_63548)){
var root_63550 = chunk__63388_63547.cljs$core$IIndexed$_nth$arity$2(null,i__63390_63549);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_63550,root_props_63545);


var G__63551 = seq__63387_63546;
var G__63552 = chunk__63388_63547;
var G__63553 = count__63389_63548;
var G__63554 = (i__63390_63549 + (1));
seq__63387_63546 = G__63551;
chunk__63388_63547 = G__63552;
count__63389_63548 = G__63553;
i__63390_63549 = G__63554;
continue;
} else {
var temp__5753__auto___63555__$1 = cljs.core.seq(seq__63387_63546);
if(temp__5753__auto___63555__$1){
var seq__63387_63556__$1 = temp__5753__auto___63555__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63387_63556__$1)){
var c__4649__auto___63557 = cljs.core.chunk_first(seq__63387_63556__$1);
var G__63558 = cljs.core.chunk_rest(seq__63387_63556__$1);
var G__63559 = c__4649__auto___63557;
var G__63560 = cljs.core.count(c__4649__auto___63557);
var G__63561 = (0);
seq__63387_63546 = G__63558;
chunk__63388_63547 = G__63559;
count__63389_63548 = G__63560;
i__63390_63549 = G__63561;
continue;
} else {
var root_63562 = cljs.core.first(seq__63387_63556__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_63562,root_props_63545);


var G__63563 = cljs.core.next(seq__63387_63556__$1);
var G__63564 = null;
var G__63565 = (0);
var G__63566 = (0);
seq__63387_63546 = G__63563;
chunk__63388_63547 = G__63564;
count__63389_63548 = G__63565;
i__63390_63549 = G__63566;
continue;
}
} else {
}
}
break;
}


var G__63567 = cljs.core.next(seq__63362__$1);
var G__63568 = null;
var G__63569 = (0);
var G__63570 = (0);
seq__63362 = G__63567;
chunk__63364 = G__63568;
count__63365 = G__63569;
i__63366 = G__63570;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_stale_components_BANG_(app,options){
var map__63398 = app;
var map__63398__$1 = cljs.core.__destructure_map(map__63398);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63398__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__63399 = cljs.core.deref(runtime_atom);
var map__63399__$1 = cljs.core.__destructure_map(map__63399);
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63399__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__63400 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__63400__$1 = cljs.core.__destructure_map(map__63400);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63400__$1,true);
var seq__63401 = cljs.core.seq(limited_idents);
var chunk__63402 = null;
var count__63403 = (0);
var i__63404 = (0);
while(true){
if((i__63404 < count__63403)){
var i = chunk__63402.cljs$core$IIndexed$_nth$arity$2(null,i__63404);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app,i);


var G__63572 = seq__63401;
var G__63573 = chunk__63402;
var G__63574 = count__63403;
var G__63575 = (i__63404 + (1));
seq__63401 = G__63572;
chunk__63402 = G__63573;
count__63403 = G__63574;
i__63404 = G__63575;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63401);
if(temp__5753__auto__){
var seq__63401__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63401__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__63401__$1);
var G__63576 = cljs.core.chunk_rest(seq__63401__$1);
var G__63577 = c__4649__auto__;
var G__63578 = cljs.core.count(c__4649__auto__);
var G__63579 = (0);
seq__63401 = G__63576;
chunk__63402 = G__63577;
count__63403 = G__63578;
i__63404 = G__63579;
continue;
} else {
var i = cljs.core.first(seq__63401__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app,i);


var G__63580 = cljs.core.next(seq__63401__$1);
var G__63581 = null;
var G__63582 = (0);
var G__63583 = (0);
seq__63401 = G__63580;
chunk__63402 = G__63581;
count__63403 = G__63582;
i__63404 = G__63583;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app,options);
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render.
 * 
 *   This renderer always does a keyframe render *unless* an `:only-refresh` option is passed to the stack
 *   (usually as an option on `(transact! this [(f)] {:only-refresh [...idents...]})`. In that case the renderer
 *   will ignore *all* data diffing and will target refresh only to the on-screen components that have the listed
 *   ident(s). This allows you to get component-local state refresh rates on transactions that are responding to
 *   events that should really only affect a known set of components (like the input field).
 * 
 *   This option does *not* currently support using query keywords in the refresh set. Only idents.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_BANG_(var_args){
var G__63407 = arguments.length;
switch (G__63407) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2(app,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,p__63413){
var map__63414 = p__63413;
var map__63414__$1 = cljs.core.__destructure_map(map__63414);
var options = map__63414__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63414__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63414__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4223__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app,options);
} else {
try{return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_(app,options);
}catch (e63415){var e = e63415;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,152,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,509850333,null);

return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app,options);
}}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Generate a plain React class that can render a Fulcro UIRoot. NOTE: The UIRoot must register/deregister itself
 *   in the component lifecycle:
 * 
 *   ```
 *   (defsc UIRoot [this props]
 *  {:componentDidMount     (fn [this] (mroot/register-root! this))
 *   :componentWillUnmount  (fn [this] (mroot/deregister-root! this))
 *   :initial-state {}
 *   :query [root-like-query]}
 *  ...)
 *   ```
 * 
 *   The `fulcro-app` is the app under which this root will be rendered. Create different factories if you have more than
 *   one mounted app.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_react_class = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_react_class(UIRoot,fulcro_app){
var cls = (function (){
return null;
});
var ui_root = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIRoot);
goog.object.extend(cls.prototype,React.Component.prototype,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var this$ = this;
var js_props = this$.props;
var app__63256__auto__ = (function (){var or__4223__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return fulcro_app;
}
})();
var d__63257__auto__ = (function (){var or__4223__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})();
var _STAR_app_STAR__orig_val__63420 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__63421 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_depth_STAR__orig_val__63422 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_app_STAR__temp_val__63423 = app__63256__auto__;
var _STAR_shared_STAR__temp_val__63424 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__63256__auto__);
var _STAR_depth_STAR__temp_val__63425 = d__63257__auto__;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__63423);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__63424);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__63425);

try{var _STAR_denormalize_time_STAR__orig_val__63468 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__63469 = new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","basis-t","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/basis-t",1789052925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(fulcro_app)));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__63469);

try{var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(UIRoot);
var state_map = (function (){var G__63470 = fulcro_app;
var G__63470__$1 = (((G__63470 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__63470));
if((G__63470__$1 == null)){
return null;
} else {
return cljs.core.deref(G__63470__$1);
}
})();
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__63471 = props;
var G__63472 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-props","js-props",1900369280),js_props], null);
return (ui_root.cljs$core$IFn$_invoke$arity$2 ? ui_root.cljs$core$IFn$_invoke$arity$2(G__63471,G__63472) : ui_root.call(null,G__63471,G__63472));
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__63468);
}}finally {(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__63422);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__63421);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__63420);
}})], null)));

return cls;
});
/**
 * Create a factory that renders a floating root in a normal Fulcro context (body of a Fulcro component). This factory
 * has the same sync constraints as normal `component/factory` functions. See `components/with-parent-context`.
 * 
 *   `UIClass`: A class that will behave as a floating root. NOTE: that class MUST have a mount/unmount hook
 *   to regsiter/deregister itself as a root.
 * 
 *   `options`: An options map. Same as for `component/factory`. Note, however, that this factory will *not* receive
 *   props, so a `:keyfn` would have to be based on something else.
 * 
 *   You normally do not pass any props to this factory because it is controlling the component and feeding props from
 *   the database. Props sent to this factory are only used by the wrapper, however, `:react-key` is useful if you
 *   have a bunch of sibling roots and need to set the react key for each.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_factory(var_args){
var G__63474 = arguments.length;
switch (G__63474) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1 = (function (UIClass){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2(UIClass,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2 = (function (UIClass,options){
var constructor$ = (function (){
return null;
});
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIClass);
var render = (function (this$){
var _STAR_denormalize_time_STAR__orig_val__63475 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__63476 = new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","basis-t","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/basis-t",1789052925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components._STAR_app_STAR_)));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__63476);

try{var state_map = (function (){var G__63477 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__63477__$1 = (((G__63477 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__63477));
if((G__63477__$1 == null)){
return null;
} else {
return cljs.core.deref(G__63477__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIClass,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__63478 = (function (){var or__4223__auto__ = props;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__63479 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__63478,G__63479) : ui_factory.call(null,G__63478,G__63479));
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__63475);
}});
var wrapper_class = com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","wrapper","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/wrapper",-2035797237),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),render], null));
var wrapper_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(wrapper_class,options);
return wrapper_factory;
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.multiple_roots_renderer.js.map
