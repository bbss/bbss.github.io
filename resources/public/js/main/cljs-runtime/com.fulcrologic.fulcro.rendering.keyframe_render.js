goog.provide('com.fulcrologic.fulcro.rendering.keyframe_render');
/**
 * This function renders given state map over top of the current app. This allows you to render previews of state **without
 *   actually changing the app state**. Used by Inspect for DOM preview. Forces a root-based render with no props diff optimization.
 *   The app must already be mounted. Returns the result of render.
 */
com.fulcrologic.fulcro.rendering.keyframe_render.render_state_BANG_ = (function com$fulcrologic$fulcro$rendering$keyframe_render$render_state_BANG_(app,state_map){
var _STAR_blindly_render_STAR__orig_val__62295 = com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_;
var _STAR_blindly_render_STAR__temp_val__62296 = true;
(com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__temp_val__62296);

try{var map__62297 = app;
var map__62297__$1 = cljs.core.__destructure_map(map__62297);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62297__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__62298 = cljs.core.deref(runtime_atom);
var map__62298__$1 = cljs.core.__destructure_map(map__62298);
var root_factory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62298__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-factory","com.fulcrologic.fulcro.application/root-factory",1202626682));
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62298__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
var mount_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62298__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","mount-node","com.fulcrologic.fulcro.application/mount-node",557976672));
var r_BANG_ = (function (){var or__4223__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"render-root!","render-root!",820937651));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return ReactDOM.render;
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(root_class,state_map);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map):state_map);
if(cljs.core.truth_((function (){var and__4221__auto__ = r_BANG_;
if(cljs.core.truth_(and__4221__auto__)){
return root_factory;
} else {
return and__4221__auto__;
}
})())){
var G__62307 = (root_factory.cljs$core$IFn$_invoke$arity$1 ? root_factory.cljs$core$IFn$_invoke$arity$1(data_tree) : root_factory.call(null,data_tree));
var G__62308 = mount_node;
return (r_BANG_.cljs$core$IFn$_invoke$arity$2 ? r_BANG_.cljs$core$IFn$_invoke$arity$2(G__62307,G__62308) : r_BANG_.call(null,G__62307,G__62308));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__orig_val__62295);
}});
/**
 * Render the UI. The keyframe render runs a full UI query and then asks React to render the root component.
 *   The optimizations for this kind of render are purely those provided by `defsc`'s default
 *   shouldComponentUpdate, which causes component to act like React PureComponent (though the props compare in cljs
 *   is often faster).
 * 
 *   If `:hydrate?` is true it will use the React hydrate functionality (on browsers) to render over
 *   server-rendered content in the DOM.
 * 
 *   If `:force-root? true` is included in the options map then not only will this do a keyframe update, it will also
 *   force all components to return `true` from `shouldComponentUpdate`.
 */
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$keyframe_render$render_BANG_(app,p__62315){
var map__62316 = p__62315;
var map__62316__$1 = cljs.core.__destructure_map(map__62316);
var options = map__62316__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62316__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var hydrate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62316__$1,new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185));
var _STAR_blindly_render_STAR__orig_val__62317 = com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_;
var _STAR_blindly_render_STAR__temp_val__62318 = force_root_QMARK_;
(com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__temp_val__62318);

try{var map__62322 = app;
var map__62322__$1 = cljs.core.__destructure_map(map__62322);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__62323 = cljs.core.deref(runtime_atom);
var map__62323__$1 = cljs.core.__destructure_map(map__62323);
var root_factory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62323__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-factory","com.fulcrologic.fulcro.application/root-factory",1202626682));
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62323__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
var mount_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62323__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","mount-node","com.fulcrologic.fulcro.application/mount-node",557976672));
var r_BANG_ = (cljs.core.truth_(hydrate_QMARK_)?(function (){var or__4223__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"hydrate-root!","hydrate-root!",-184171028));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = ReactDOM.hydrate;
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return ReactDOM.render;
}
}
})():(function (){var or__4223__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"render-root!","render-root!",820937651));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return ReactDOM.render;
}
})());
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(root_class,state_map);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map):state_map);
var app_root = (cljs.core.truth_(root_factory)?(function (){var G__62328 = (root_factory.cljs$core$IFn$_invoke$arity$1 ? root_factory.cljs$core$IFn$_invoke$arity$1(data_tree) : root_factory.call(null,data_tree));
var G__62329 = mount_node;
return (r_BANG_.cljs$core$IFn$_invoke$arity$2 ? r_BANG_.cljs$core$IFn$_invoke$arity$2(G__62328,G__62329) : r_BANG_.call(null,G__62328,G__62329));
})():null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005),app_root);

return app_root;
}finally {(com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__orig_val__62317);
}});

//# sourceMappingURL=com.fulcrologic.fulcro.rendering.keyframe_render.js.map
