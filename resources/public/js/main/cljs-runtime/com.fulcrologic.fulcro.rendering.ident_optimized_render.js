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
var map__62447 = app;
var map__62447__$1 = cljs.core.__destructure_map(map__62447);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62447__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
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
var new_props = (function (){var G__62454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__62455 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__62454,G__62455) : com.fulcrologic.fulcro.components.computed.call(null,G__62454,G__62455));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,-1202095340,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__62462 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__62462) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__62462));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,97721500,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app,ident){
var seq__62467 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app,ident));
var chunk__62469 = null;
var count__62470 = (0);
var i__62471 = (0);
while(true){
if((i__62471 < count__62470)){
var c = chunk__62469.cljs$core$IIndexed$_nth$arity$2(null,i__62471);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__62684 = seq__62467;
var G__62685 = chunk__62469;
var G__62686 = count__62470;
var G__62687 = (i__62471 + (1));
seq__62467 = G__62684;
chunk__62469 = G__62685;
count__62470 = G__62686;
i__62471 = G__62687;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62467);
if(temp__5753__auto__){
var seq__62467__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62467__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__62467__$1);
var G__62688 = cljs.core.chunk_rest(seq__62467__$1);
var G__62689 = c__4649__auto__;
var G__62690 = cljs.core.count(c__4649__auto__);
var G__62691 = (0);
seq__62467 = G__62688;
chunk__62469 = G__62689;
count__62470 = G__62690;
i__62471 = G__62691;
continue;
} else {
var c = cljs.core.first(seq__62467__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__62692 = cljs.core.next(seq__62467__$1);
var G__62693 = null;
var G__62694 = (0);
var G__62695 = (0);
seq__62467 = G__62692;
chunk__62469 = G__62693;
count__62470 = G__62694;
i__62471 = G__62695;
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

var map__62483 = app;
var map__62483__$1 = cljs.core.__destructure_map(map__62483);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62483__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__62484 = cljs.core.deref(runtime_atom);
var map__62484__$1 = cljs.core.__destructure_map(map__62484);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62484__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__62485 = indexes;
var map__62485__$1 = cljs.core.__destructure_map(map__62485);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62485__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62485__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62485__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
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
var seq__62489 = cljs.core.seq(classes);
var chunk__62490 = null;
var count__62491 = (0);
var i__62492 = (0);
while(true){
if((i__62492 < count__62491)){
var class$ = chunk__62490.cljs$core$IIndexed$_nth$arity$2(null,i__62492);
var seq__62532_62702 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__62534_62703 = null;
var count__62535_62704 = (0);
var i__62536_62705 = (0);
while(true){
if((i__62536_62705 < count__62535_62704)){
var component_62706 = chunk__62534_62703.cljs$core$IIndexed$_nth$arity$2(null,i__62536_62705);
var component_ident_62708 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62706) : com.fulcrologic.fulcro.components.get_ident.call(null,component_62706));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_62708,component_62706);


var G__62709 = seq__62532_62702;
var G__62710 = chunk__62534_62703;
var G__62711 = count__62535_62704;
var G__62712 = (i__62536_62705 + (1));
seq__62532_62702 = G__62709;
chunk__62534_62703 = G__62710;
count__62535_62704 = G__62711;
i__62536_62705 = G__62712;
continue;
} else {
var temp__5753__auto___62713 = cljs.core.seq(seq__62532_62702);
if(temp__5753__auto___62713){
var seq__62532_62714__$1 = temp__5753__auto___62713;
if(cljs.core.chunked_seq_QMARK_(seq__62532_62714__$1)){
var c__4649__auto___62715 = cljs.core.chunk_first(seq__62532_62714__$1);
var G__62716 = cljs.core.chunk_rest(seq__62532_62714__$1);
var G__62717 = c__4649__auto___62715;
var G__62718 = cljs.core.count(c__4649__auto___62715);
var G__62719 = (0);
seq__62532_62702 = G__62716;
chunk__62534_62703 = G__62717;
count__62535_62704 = G__62718;
i__62536_62705 = G__62719;
continue;
} else {
var component_62722 = cljs.core.first(seq__62532_62714__$1);
var component_ident_62723 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62722) : com.fulcrologic.fulcro.components.get_ident.call(null,component_62722));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_62723,component_62722);


var G__62726 = cljs.core.next(seq__62532_62714__$1);
var G__62727 = null;
var G__62728 = (0);
var G__62729 = (0);
seq__62532_62702 = G__62726;
chunk__62534_62703 = G__62727;
count__62535_62704 = G__62728;
i__62536_62705 = G__62729;
continue;
}
} else {
}
}
break;
}


var G__62730 = seq__62489;
var G__62731 = chunk__62490;
var G__62732 = count__62491;
var G__62733 = (i__62492 + (1));
seq__62489 = G__62730;
chunk__62490 = G__62731;
count__62491 = G__62732;
i__62492 = G__62733;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62489);
if(temp__5753__auto__){
var seq__62489__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62489__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__62489__$1);
var G__62734 = cljs.core.chunk_rest(seq__62489__$1);
var G__62735 = c__4649__auto__;
var G__62736 = cljs.core.count(c__4649__auto__);
var G__62737 = (0);
seq__62489 = G__62734;
chunk__62490 = G__62735;
count__62491 = G__62736;
i__62492 = G__62737;
continue;
} else {
var class$ = cljs.core.first(seq__62489__$1);
var seq__62548_62738 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__62550_62739 = null;
var count__62551_62740 = (0);
var i__62552_62741 = (0);
while(true){
if((i__62552_62741 < count__62551_62740)){
var component_62742 = chunk__62550_62739.cljs$core$IIndexed$_nth$arity$2(null,i__62552_62741);
var component_ident_62743 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62742) : com.fulcrologic.fulcro.components.get_ident.call(null,component_62742));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_62743,component_62742);


var G__62744 = seq__62548_62738;
var G__62745 = chunk__62550_62739;
var G__62746 = count__62551_62740;
var G__62747 = (i__62552_62741 + (1));
seq__62548_62738 = G__62744;
chunk__62550_62739 = G__62745;
count__62551_62740 = G__62746;
i__62552_62741 = G__62747;
continue;
} else {
var temp__5753__auto___62750__$1 = cljs.core.seq(seq__62548_62738);
if(temp__5753__auto___62750__$1){
var seq__62548_62751__$1 = temp__5753__auto___62750__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62548_62751__$1)){
var c__4649__auto___62753 = cljs.core.chunk_first(seq__62548_62751__$1);
var G__62754 = cljs.core.chunk_rest(seq__62548_62751__$1);
var G__62755 = c__4649__auto___62753;
var G__62756 = cljs.core.count(c__4649__auto___62753);
var G__62757 = (0);
seq__62548_62738 = G__62754;
chunk__62550_62739 = G__62755;
count__62551_62740 = G__62756;
i__62552_62741 = G__62757;
continue;
} else {
var component_62758 = cljs.core.first(seq__62548_62751__$1);
var component_ident_62759 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62758) : com.fulcrologic.fulcro.components.get_ident.call(null,component_62758));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_62759,component_62758);


var G__62760 = cljs.core.next(seq__62548_62751__$1);
var G__62761 = null;
var G__62762 = (0);
var G__62763 = (0);
seq__62548_62738 = G__62760;
chunk__62550_62739 = G__62761;
count__62551_62740 = G__62762;
i__62552_62741 = G__62763;
continue;
}
} else {
}
}
break;
}


var G__62764 = cljs.core.next(seq__62489__$1);
var G__62765 = null;
var G__62766 = (0);
var G__62767 = (0);
seq__62489 = G__62764;
chunk__62490 = G__62765;
count__62491 = G__62766;
i__62492 = G__62767;
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
var map__62573 = app;
var map__62573__$1 = cljs.core.__destructure_map(map__62573);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62573__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__62574 = cljs.core.deref(runtime_atom);
var map__62574__$1 = cljs.core.__destructure_map(map__62574);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62574__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__62575 = indexes;
var map__62575__$1 = cljs.core.__destructure_map(map__62575);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62575__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62575__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__62566_SHARP_,p2__62567_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__62566_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__62567_SHARP_) : class__GT_components.call(null,p2__62567_SHARP_)));
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
var map__62584 = app;
var map__62584__$1 = cljs.core.__destructure_map(map__62584);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62584__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62584__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__62585 = cljs.core.deref(runtime_atom);
var map__62585__$1 = cljs.core.__destructure_map(map__62585);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62585__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62585__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62585__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62585__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__62586 = indexes;
var map__62586__$1 = cljs.core.__destructure_map(map__62586);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62586__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62586__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62586__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62586__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__62590 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__62590__$1 = cljs.core.__destructure_map(map__62590);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62590__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62590__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,limited_props);
var seq__62593_62770 = cljs.core.seq(limited_to_render);
var chunk__62595_62771 = null;
var count__62596_62772 = (0);
var i__62597_62773 = (0);
while(true){
if((i__62597_62773 < count__62596_62772)){
var c_62774 = chunk__62595_62771.cljs$core$IIndexed$_nth$arity$2(null,i__62597_62773);
var ident_62775 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_62774) : com.fulcrologic.fulcro.components.get_ident.call(null,c_62774));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_62775,c_62774);


var G__62777 = seq__62593_62770;
var G__62778 = chunk__62595_62771;
var G__62779 = count__62596_62772;
var G__62780 = (i__62597_62773 + (1));
seq__62593_62770 = G__62777;
chunk__62595_62771 = G__62778;
count__62596_62772 = G__62779;
i__62597_62773 = G__62780;
continue;
} else {
var temp__5753__auto___62782 = cljs.core.seq(seq__62593_62770);
if(temp__5753__auto___62782){
var seq__62593_62783__$1 = temp__5753__auto___62782;
if(cljs.core.chunked_seq_QMARK_(seq__62593_62783__$1)){
var c__4649__auto___62784 = cljs.core.chunk_first(seq__62593_62783__$1);
var G__62785 = cljs.core.chunk_rest(seq__62593_62783__$1);
var G__62786 = c__4649__auto___62784;
var G__62787 = cljs.core.count(c__4649__auto___62784);
var G__62788 = (0);
seq__62593_62770 = G__62785;
chunk__62595_62771 = G__62786;
count__62596_62772 = G__62787;
i__62597_62773 = G__62788;
continue;
} else {
var c_62789 = cljs.core.first(seq__62593_62783__$1);
var ident_62790 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_62789) : com.fulcrologic.fulcro.components.get_ident.call(null,c_62789));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_62790,c_62789);


var G__62791 = cljs.core.next(seq__62593_62783__$1);
var G__62792 = null;
var G__62793 = (0);
var G__62794 = (0);
seq__62593_62770 = G__62791;
chunk__62595_62771 = G__62792;
count__62596_62772 = G__62793;
i__62597_62773 = G__62794;
continue;
}
} else {
}
}
break;
}

var seq__62609 = cljs.core.seq(limited_idents);
var chunk__62610 = null;
var count__62611 = (0);
var i__62612 = (0);
while(true){
if((i__62612 < count__62611)){
var i = chunk__62610.cljs$core$IIndexed$_nth$arity$2(null,i__62612);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__62795 = seq__62609;
var G__62796 = chunk__62610;
var G__62797 = count__62611;
var G__62798 = (i__62612 + (1));
seq__62609 = G__62795;
chunk__62610 = G__62796;
count__62611 = G__62797;
i__62612 = G__62798;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62609);
if(temp__5753__auto__){
var seq__62609__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62609__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__62609__$1);
var G__62799 = cljs.core.chunk_rest(seq__62609__$1);
var G__62800 = c__4649__auto__;
var G__62801 = cljs.core.count(c__4649__auto__);
var G__62802 = (0);
seq__62609 = G__62799;
chunk__62610 = G__62800;
count__62611 = G__62801;
i__62612 = G__62802;
continue;
} else {
var i = cljs.core.first(seq__62609__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__62803 = cljs.core.next(seq__62609__$1);
var G__62804 = null;
var G__62805 = (0);
var G__62806 = (0);
seq__62609 = G__62803;
chunk__62610 = G__62804;
count__62611 = G__62805;
i__62612 = G__62806;
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
var map__62616 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__62616__$1 = cljs.core.__destructure_map(map__62616);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62616__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62616__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__62622_62809 = cljs.core.seq(all_idents);
var chunk__62623_62810 = null;
var count__62624_62811 = (0);
var i__62625_62812 = (0);
while(true){
if((i__62625_62812 < count__62624_62811)){
var i_62813 = chunk__62623_62810.cljs$core$IIndexed$_nth$arity$2(null,i__62625_62812);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_62813);


var G__62814 = seq__62622_62809;
var G__62815 = chunk__62623_62810;
var G__62816 = count__62624_62811;
var G__62817 = (i__62625_62812 + (1));
seq__62622_62809 = G__62814;
chunk__62623_62810 = G__62815;
count__62624_62811 = G__62816;
i__62625_62812 = G__62817;
continue;
} else {
var temp__5753__auto___62818 = cljs.core.seq(seq__62622_62809);
if(temp__5753__auto___62818){
var seq__62622_62819__$1 = temp__5753__auto___62818;
if(cljs.core.chunked_seq_QMARK_(seq__62622_62819__$1)){
var c__4649__auto___62820 = cljs.core.chunk_first(seq__62622_62819__$1);
var G__62821 = cljs.core.chunk_rest(seq__62622_62819__$1);
var G__62822 = c__4649__auto___62820;
var G__62823 = cljs.core.count(c__4649__auto___62820);
var G__62824 = (0);
seq__62622_62809 = G__62821;
chunk__62623_62810 = G__62822;
count__62624_62811 = G__62823;
i__62625_62812 = G__62824;
continue;
} else {
var i_62825 = cljs.core.first(seq__62622_62819__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_62825);


var G__62826 = cljs.core.next(seq__62622_62819__$1);
var G__62827 = null;
var G__62828 = (0);
var G__62829 = (0);
seq__62622_62809 = G__62826;
chunk__62623_62810 = G__62827;
count__62624_62811 = G__62828;
i__62625_62812 = G__62829;
continue;
}
} else {
}
}
break;
}

var seq__62636 = cljs.core.seq(extra_to_force);
var chunk__62637 = null;
var count__62638 = (0);
var i__62639 = (0);
while(true){
if((i__62639 < count__62638)){
var c = chunk__62637.cljs$core$IIndexed$_nth$arity$2(null,i__62639);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__62830 = seq__62636;
var G__62831 = chunk__62637;
var G__62832 = count__62638;
var G__62833 = (i__62639 + (1));
seq__62636 = G__62830;
chunk__62637 = G__62831;
count__62638 = G__62832;
i__62639 = G__62833;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62636);
if(temp__5753__auto__){
var seq__62636__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62636__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__62636__$1);
var G__62834 = cljs.core.chunk_rest(seq__62636__$1);
var G__62835 = c__4649__auto__;
var G__62836 = cljs.core.count(c__4649__auto__);
var G__62837 = (0);
seq__62636 = G__62834;
chunk__62637 = G__62835;
count__62638 = G__62836;
i__62639 = G__62837;
continue;
} else {
var c = cljs.core.first(seq__62636__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__62839 = cljs.core.next(seq__62636__$1);
var G__62840 = null;
var G__62841 = (0);
var G__62842 = (0);
seq__62636 = G__62839;
chunk__62637 = G__62840;
count__62638 = G__62841;
i__62639 = G__62842;
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
var G__62656 = arguments.length;
switch (G__62656) {
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

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,p__62660){
var map__62661 = p__62660;
var map__62661__$1 = cljs.core.__destructure_map(map__62661);
var options = map__62661__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62661__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62661__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
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
}catch (e62662){var e = e62662;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-1751631764,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
