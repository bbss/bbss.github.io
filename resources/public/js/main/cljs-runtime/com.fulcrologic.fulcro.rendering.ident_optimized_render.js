goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app,ident,c){
if(cljs.core.truth_((function (){var and__4221__auto__ = c;
if(cljs.core.truth_(and__4221__auto__)){
return ident;
} else {
return and__4221__auto__;
}
})())){
var map__62381 = app;
var map__62381__$1 = cljs.core.__destructure_map(map__62381);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62381__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4223__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__62385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__62386 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__62385,G__62386) : com.fulcrologic.fulcro.components.computed.call(null,G__62385,G__62386));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,887252001,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__62392 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__62392) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__62392));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-231257546,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app,ident){
var seq__62396 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app,ident));
var chunk__62397 = null;
var count__62398 = (0);
var i__62399 = (0);
while(true){
if((i__62399 < count__62398)){
var c = chunk__62397.cljs$core$IIndexed$_nth$arity$2(null,i__62399);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__62656 = seq__62396;
var G__62657 = chunk__62397;
var G__62658 = count__62398;
var G__62659 = (i__62399 + (1));
seq__62396 = G__62656;
chunk__62397 = G__62657;
count__62398 = G__62658;
i__62399 = G__62659;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62396);
if(temp__5753__auto__){
var seq__62396__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62396__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__62396__$1);
var G__62662 = cljs.core.chunk_rest(seq__62396__$1);
var G__62663 = c__4649__auto__;
var G__62664 = cljs.core.count(c__4649__auto__);
var G__62665 = (0);
seq__62396 = G__62662;
chunk__62397 = G__62663;
count__62398 = G__62664;
i__62399 = G__62665;
continue;
} else {
var c = cljs.core.first(seq__62396__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__62667 = cljs.core.next(seq__62396__$1);
var G__62668 = null;
var G__62669 = (0);
var G__62670 = (0);
seq__62396 = G__62667;
chunk__62397 = G__62668;
count__62398 = G__62669;
i__62399 = G__62670;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app,ident);

var map__62418 = app;
var map__62418__$1 = cljs.core.__destructure_map(map__62418);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62418__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__62419 = cljs.core.deref(runtime_atom);
var map__62419__$1 = cljs.core.__destructure_map(map__62419);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62419__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__62420 = indexes;
var map__62420__$1 = cljs.core.__destructure_map(map__62420);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62420__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62420__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62420__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4223__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__62426 = cljs.core.seq(classes);
var chunk__62427 = null;
var count__62428 = (0);
var i__62429 = (0);
while(true){
if((i__62429 < count__62428)){
var class$ = chunk__62427.cljs$core$IIndexed$_nth$arity$2(null,i__62429);
var seq__62479_62677 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__62481_62678 = null;
var count__62482_62679 = (0);
var i__62483_62680 = (0);
while(true){
if((i__62483_62680 < count__62482_62679)){
var component_62682 = chunk__62481_62678.cljs$core$IIndexed$_nth$arity$2(null,i__62483_62680);
var component_ident_62683 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62682) : com.fulcrologic.fulcro.components.get_ident.call(null,component_62682));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_62683,component_62682);


var G__62684 = seq__62479_62677;
var G__62685 = chunk__62481_62678;
var G__62686 = count__62482_62679;
var G__62687 = (i__62483_62680 + (1));
seq__62479_62677 = G__62684;
chunk__62481_62678 = G__62685;
count__62482_62679 = G__62686;
i__62483_62680 = G__62687;
continue;
} else {
var temp__5753__auto___62688 = cljs.core.seq(seq__62479_62677);
if(temp__5753__auto___62688){
var seq__62479_62689__$1 = temp__5753__auto___62688;
if(cljs.core.chunked_seq_QMARK_(seq__62479_62689__$1)){
var c__4649__auto___62690 = cljs.core.chunk_first(seq__62479_62689__$1);
var G__62691 = cljs.core.chunk_rest(seq__62479_62689__$1);
var G__62692 = c__4649__auto___62690;
var G__62693 = cljs.core.count(c__4649__auto___62690);
var G__62694 = (0);
seq__62479_62677 = G__62691;
chunk__62481_62678 = G__62692;
count__62482_62679 = G__62693;
i__62483_62680 = G__62694;
continue;
} else {
var component_62695 = cljs.core.first(seq__62479_62689__$1);
var component_ident_62697 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62695) : com.fulcrologic.fulcro.components.get_ident.call(null,component_62695));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_62697,component_62695);


var G__62698 = cljs.core.next(seq__62479_62689__$1);
var G__62699 = null;
var G__62700 = (0);
var G__62701 = (0);
seq__62479_62677 = G__62698;
chunk__62481_62678 = G__62699;
count__62482_62679 = G__62700;
i__62483_62680 = G__62701;
continue;
}
} else {
}
}
break;
}


var G__62702 = seq__62426;
var G__62703 = chunk__62427;
var G__62704 = count__62428;
var G__62705 = (i__62429 + (1));
seq__62426 = G__62702;
chunk__62427 = G__62703;
count__62428 = G__62704;
i__62429 = G__62705;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62426);
if(temp__5753__auto__){
var seq__62426__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62426__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__62426__$1);
var G__62708 = cljs.core.chunk_rest(seq__62426__$1);
var G__62709 = c__4649__auto__;
var G__62710 = cljs.core.count(c__4649__auto__);
var G__62711 = (0);
seq__62426 = G__62708;
chunk__62427 = G__62709;
count__62428 = G__62710;
i__62429 = G__62711;
continue;
} else {
var class$ = cljs.core.first(seq__62426__$1);
var seq__62498_62713 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__62500_62714 = null;
var count__62501_62715 = (0);
var i__62502_62716 = (0);
while(true){
if((i__62502_62716 < count__62501_62715)){
var component_62717 = chunk__62500_62714.cljs$core$IIndexed$_nth$arity$2(null,i__62502_62716);
var component_ident_62718 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62717) : com.fulcrologic.fulcro.components.get_ident.call(null,component_62717));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_62718,component_62717);


var G__62719 = seq__62498_62713;
var G__62720 = chunk__62500_62714;
var G__62721 = count__62501_62715;
var G__62722 = (i__62502_62716 + (1));
seq__62498_62713 = G__62719;
chunk__62500_62714 = G__62720;
count__62501_62715 = G__62721;
i__62502_62716 = G__62722;
continue;
} else {
var temp__5753__auto___62723__$1 = cljs.core.seq(seq__62498_62713);
if(temp__5753__auto___62723__$1){
var seq__62498_62724__$1 = temp__5753__auto___62723__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62498_62724__$1)){
var c__4649__auto___62725 = cljs.core.chunk_first(seq__62498_62724__$1);
var G__62726 = cljs.core.chunk_rest(seq__62498_62724__$1);
var G__62727 = c__4649__auto___62725;
var G__62728 = cljs.core.count(c__4649__auto___62725);
var G__62729 = (0);
seq__62498_62713 = G__62726;
chunk__62500_62714 = G__62727;
count__62501_62715 = G__62728;
i__62502_62716 = G__62729;
continue;
} else {
var component_62730 = cljs.core.first(seq__62498_62724__$1);
var component_ident_62731 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62730) : com.fulcrologic.fulcro.components.get_ident.call(null,component_62730));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_62731,component_62730);


var G__62734 = cljs.core.next(seq__62498_62724__$1);
var G__62735 = null;
var G__62736 = (0);
var G__62737 = (0);
seq__62498_62713 = G__62734;
chunk__62500_62714 = G__62735;
count__62501_62715 = G__62736;
i__62502_62716 = G__62737;
continue;
}
} else {
}
}
break;
}


var G__62738 = cljs.core.next(seq__62426__$1);
var G__62739 = null;
var G__62740 = (0);
var G__62741 = (0);
seq__62426 = G__62738;
chunk__62427 = G__62739;
count__62428 = G__62740;
i__62429 = G__62741;
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
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app,property_set){
if(cljs.core.seq(property_set)){
var map__62539 = app;
var map__62539__$1 = cljs.core.__destructure_map(map__62539);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62539__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__62540 = cljs.core.deref(runtime_atom);
var map__62540__$1 = cljs.core.__destructure_map(map__62540);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62540__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__62541 = indexes;
var map__62541__$1 = cljs.core.__destructure_map(map__62541);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62541__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62541__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__62530_SHARP_,p2__62532_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__62530_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__62532_SHARP_) : class__GT_components.call(null,p2__62532_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app){
var map__62552 = app;
var map__62552__$1 = cljs.core.__destructure_map(map__62552);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62552__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62552__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__62553 = cljs.core.deref(runtime_atom);
var map__62553__$1 = cljs.core.__destructure_map(map__62553);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62553__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62553__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62553__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62553__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__62554 = indexes;
var map__62554__$1 = cljs.core.__destructure_map(map__62554);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62554__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62554__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62554__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62554__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__62559 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__62559__$1 = cljs.core.__destructure_map(map__62559);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62559__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62559__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,limited_props);
var seq__62560_62749 = cljs.core.seq(limited_to_render);
var chunk__62562_62750 = null;
var count__62563_62751 = (0);
var i__62564_62752 = (0);
while(true){
if((i__62564_62752 < count__62563_62751)){
var c_62755 = chunk__62562_62750.cljs$core$IIndexed$_nth$arity$2(null,i__62564_62752);
var ident_62756 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_62755) : com.fulcrologic.fulcro.components.get_ident.call(null,c_62755));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_62756,c_62755);


var G__62757 = seq__62560_62749;
var G__62758 = chunk__62562_62750;
var G__62759 = count__62563_62751;
var G__62760 = (i__62564_62752 + (1));
seq__62560_62749 = G__62757;
chunk__62562_62750 = G__62758;
count__62563_62751 = G__62759;
i__62564_62752 = G__62760;
continue;
} else {
var temp__5753__auto___62761 = cljs.core.seq(seq__62560_62749);
if(temp__5753__auto___62761){
var seq__62560_62762__$1 = temp__5753__auto___62761;
if(cljs.core.chunked_seq_QMARK_(seq__62560_62762__$1)){
var c__4649__auto___62763 = cljs.core.chunk_first(seq__62560_62762__$1);
var G__62764 = cljs.core.chunk_rest(seq__62560_62762__$1);
var G__62765 = c__4649__auto___62763;
var G__62766 = cljs.core.count(c__4649__auto___62763);
var G__62767 = (0);
seq__62560_62749 = G__62764;
chunk__62562_62750 = G__62765;
count__62563_62751 = G__62766;
i__62564_62752 = G__62767;
continue;
} else {
var c_62768 = cljs.core.first(seq__62560_62762__$1);
var ident_62769 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_62768) : com.fulcrologic.fulcro.components.get_ident.call(null,c_62768));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_62769,c_62768);


var G__62773 = cljs.core.next(seq__62560_62762__$1);
var G__62774 = null;
var G__62775 = (0);
var G__62776 = (0);
seq__62560_62749 = G__62773;
chunk__62562_62750 = G__62774;
count__62563_62751 = G__62775;
i__62564_62752 = G__62776;
continue;
}
} else {
}
}
break;
}

var seq__62577 = cljs.core.seq(limited_idents);
var chunk__62578 = null;
var count__62579 = (0);
var i__62580 = (0);
while(true){
if((i__62580 < count__62579)){
var i = chunk__62578.cljs$core$IIndexed$_nth$arity$2(null,i__62580);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__62780 = seq__62577;
var G__62781 = chunk__62578;
var G__62782 = count__62579;
var G__62783 = (i__62580 + (1));
seq__62577 = G__62780;
chunk__62578 = G__62781;
count__62579 = G__62782;
i__62580 = G__62783;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62577);
if(temp__5753__auto__){
var seq__62577__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62577__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__62577__$1);
var G__62789 = cljs.core.chunk_rest(seq__62577__$1);
var G__62790 = c__4649__auto__;
var G__62791 = cljs.core.count(c__4649__auto__);
var G__62792 = (0);
seq__62577 = G__62789;
chunk__62578 = G__62790;
count__62579 = G__62791;
i__62580 = G__62792;
continue;
} else {
var i = cljs.core.first(seq__62577__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__62793 = cljs.core.next(seq__62577__$1);
var G__62794 = null;
var G__62795 = (0);
var G__62796 = (0);
seq__62577 = G__62793;
chunk__62578 = G__62794;
count__62579 = G__62795;
i__62580 = G__62796;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4223__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__62589 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__62589__$1 = cljs.core.__destructure_map(map__62589);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62589__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62589__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__62593_62811 = cljs.core.seq(all_idents);
var chunk__62594_62812 = null;
var count__62595_62813 = (0);
var i__62596_62814 = (0);
while(true){
if((i__62596_62814 < count__62595_62813)){
var i_62815 = chunk__62594_62812.cljs$core$IIndexed$_nth$arity$2(null,i__62596_62814);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_62815);


var G__62817 = seq__62593_62811;
var G__62818 = chunk__62594_62812;
var G__62819 = count__62595_62813;
var G__62820 = (i__62596_62814 + (1));
seq__62593_62811 = G__62817;
chunk__62594_62812 = G__62818;
count__62595_62813 = G__62819;
i__62596_62814 = G__62820;
continue;
} else {
var temp__5753__auto___62826 = cljs.core.seq(seq__62593_62811);
if(temp__5753__auto___62826){
var seq__62593_62828__$1 = temp__5753__auto___62826;
if(cljs.core.chunked_seq_QMARK_(seq__62593_62828__$1)){
var c__4649__auto___62829 = cljs.core.chunk_first(seq__62593_62828__$1);
var G__62830 = cljs.core.chunk_rest(seq__62593_62828__$1);
var G__62831 = c__4649__auto___62829;
var G__62832 = cljs.core.count(c__4649__auto___62829);
var G__62833 = (0);
seq__62593_62811 = G__62830;
chunk__62594_62812 = G__62831;
count__62595_62813 = G__62832;
i__62596_62814 = G__62833;
continue;
} else {
var i_62844 = cljs.core.first(seq__62593_62828__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_62844);


var G__62848 = cljs.core.next(seq__62593_62828__$1);
var G__62849 = null;
var G__62850 = (0);
var G__62851 = (0);
seq__62593_62811 = G__62848;
chunk__62594_62812 = G__62849;
count__62595_62813 = G__62850;
i__62596_62814 = G__62851;
continue;
}
} else {
}
}
break;
}

var seq__62604 = cljs.core.seq(extra_to_force);
var chunk__62605 = null;
var count__62606 = (0);
var i__62607 = (0);
while(true){
if((i__62607 < count__62606)){
var c = chunk__62605.cljs$core$IIndexed$_nth$arity$2(null,i__62607);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__62859 = seq__62604;
var G__62860 = chunk__62605;
var G__62861 = count__62606;
var G__62862 = (i__62607 + (1));
seq__62604 = G__62859;
chunk__62605 = G__62860;
count__62606 = G__62861;
i__62607 = G__62862;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62604);
if(temp__5753__auto__){
var seq__62604__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62604__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__62604__$1);
var G__62863 = cljs.core.chunk_rest(seq__62604__$1);
var G__62864 = c__4649__auto__;
var G__62865 = cljs.core.count(c__4649__auto__);
var G__62866 = (0);
seq__62604 = G__62863;
chunk__62605 = G__62864;
count__62606 = G__62865;
i__62607 = G__62866;
continue;
} else {
var c = cljs.core.first(seq__62604__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__62868 = cljs.core.next(seq__62604__$1);
var G__62869 = null;
var G__62870 = (0);
var G__62871 = (0);
seq__62604 = G__62868;
chunk__62605 = G__62869;
count__62606 = G__62870;
i__62607 = G__62871;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__62626 = arguments.length;
switch (G__62626) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,p__62627){
var map__62628 = p__62627;
var map__62628__$1 = cljs.core.__destructure_map(map__62628);
var options = map__62628__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62628__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62628__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4223__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app);
}catch (e62635){var e = e62635;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,1731706083,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
