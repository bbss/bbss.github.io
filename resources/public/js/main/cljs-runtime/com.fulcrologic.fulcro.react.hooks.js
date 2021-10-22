goog.provide('com.fulcrologic.fulcro.react.hooks');
/**
 * A simple CLJC wrapper around React/useState. Returns a JS vector for speed. You probably want use-state, which is more
 *   convenient.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#usestate
 */
com.fulcrologic.fulcro.react.hooks.useState = (function com$fulcrologic$fulcro$react$hooks$useState(initial_value){
return React.useState(initial_value);
});
/**
 * A simple wrapper around React/useState. Returns a cljs vector for easy destructuring.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#usestate
 */
com.fulcrologic.fulcro.react.hooks.use_state = (function com$fulcrologic$fulcro$react$hooks$use_state(initial_value){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(React.useState(initial_value));
});
/**
 * A CLJC wrapper around js/React.useEffect that does NO conversion of
 *   dependencies. You probably want the macro use-effect instead.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#useeffect
 */
com.fulcrologic.fulcro.react.hooks.useEffect = (function com$fulcrologic$fulcro$react$hooks$useEffect(var_args){
var G__67074 = arguments.length;
switch (G__67074) {
case 1:
return com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return React.useEffect(f);
}));

(com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2 = (function (f,js_deps){
return React.useEffect(f,js_deps);
}));

(com.fulcrologic.fulcro.react.hooks.useEffect.cljs$lang$maxFixedArity = 2);

/**
 * A simple wrapper around React/useContext.
 */
com.fulcrologic.fulcro.react.hooks.use_context = (function com$fulcrologic$fulcro$react$hooks$use_context(ctx){
return React.useContext(ctx);
});
/**
 * A simple wrapper around React/useReducer. Returns a cljs vector for easy destructuring
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#usecontext
 */
com.fulcrologic.fulcro.react.hooks.use_reducer = (function com$fulcrologic$fulcro$react$hooks$use_reducer(var_args){
var G__67076 = arguments.length;
switch (G__67076) {
case 2:
return com.fulcrologic.fulcro.react.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.react.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.react.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2 = (function (reducer,initial_arg){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(React.useReducer(reducer,initial_arg));
}));

(com.fulcrologic.fulcro.react.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3 = (function (reducer,initial_arg,init){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(React.useReducer(reducer,initial_arg,init));
}));

(com.fulcrologic.fulcro.react.hooks.use_reducer.cljs$lang$maxFixedArity = 3);

/**
 * A simple wrapper around React/useCallback. Converts args to js array before send.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#usecallback
 */
com.fulcrologic.fulcro.react.hooks.use_callback = (function com$fulcrologic$fulcro$react$hooks$use_callback(var_args){
var G__67078 = arguments.length;
switch (G__67078) {
case 1:
return com.fulcrologic.fulcro.react.hooks.use_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.react.hooks.use_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.react.hooks.use_callback.cljs$core$IFn$_invoke$arity$1 = (function (cb){
return React.useCallback(cb);
}));

(com.fulcrologic.fulcro.react.hooks.use_callback.cljs$core$IFn$_invoke$arity$2 = (function (cb,args){
return React.useCallback(cb,cljs.core.to_array(args));
}));

(com.fulcrologic.fulcro.react.hooks.use_callback.cljs$lang$maxFixedArity = 2);

/**
 * A simple wrapper around React/useMemo. Converts args to js array before send.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#usememo
 */
com.fulcrologic.fulcro.react.hooks.use_memo = (function com$fulcrologic$fulcro$react$hooks$use_memo(var_args){
var G__67080 = arguments.length;
switch (G__67080) {
case 1:
return com.fulcrologic.fulcro.react.hooks.use_memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.react.hooks.use_memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.react.hooks.use_memo.cljs$core$IFn$_invoke$arity$1 = (function (cb){
return React.useMemo(cb);
}));

(com.fulcrologic.fulcro.react.hooks.use_memo.cljs$core$IFn$_invoke$arity$2 = (function (cb,args){
return React.useMemo(cb,cljs.core.to_array(args));
}));

(com.fulcrologic.fulcro.react.hooks.use_memo.cljs$lang$maxFixedArity = 2);

/**
 * A simple wrapper around React/useRef.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#useref
 */
com.fulcrologic.fulcro.react.hooks.use_ref = (function com$fulcrologic$fulcro$react$hooks$use_ref(var_args){
var G__67082 = arguments.length;
switch (G__67082) {
case 0:
return com.fulcrologic.fulcro.react.hooks.use_ref.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.fulcro.react.hooks.use_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.react.hooks.use_ref.cljs$core$IFn$_invoke$arity$0 = (function (){
return React.useRef(null);
}));

(com.fulcrologic.fulcro.react.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 = (function (value){
return React.useRef(value);
}));

(com.fulcrologic.fulcro.react.hooks.use_ref.cljs$lang$maxFixedArity = 1);

/**
 * A simple wrapper around React/useImperativeHandle.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#useimperativehandle
 */
com.fulcrologic.fulcro.react.hooks.use_imperative_handle = (function com$fulcrologic$fulcro$react$hooks$use_imperative_handle(ref,f){
return React.useImperativeHandle(ref,f);
});
/**
 * A simple wrapper around React/useLayoutEffect.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */
com.fulcrologic.fulcro.react.hooks.use_layout_effect = (function com$fulcrologic$fulcro$react$hooks$use_layout_effect(var_args){
var G__67084 = arguments.length;
switch (G__67084) {
case 1:
return com.fulcrologic.fulcro.react.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.react.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.react.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return React.useLayoutEffect(f);
}));

(com.fulcrologic.fulcro.react.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$2 = (function (f,args){
return React.useLayoutEffect(f,cljs.core.to_array(args));
}));

(com.fulcrologic.fulcro.react.hooks.use_layout_effect.cljs$lang$maxFixedArity = 2);

/**
 * A simple wrapper around React/useDebugValue.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */
com.fulcrologic.fulcro.react.hooks.use_debug_value = (function com$fulcrologic$fulcro$react$hooks$use_debug_value(var_args){
var G__67086 = arguments.length;
switch (G__67086) {
case 1:
return com.fulcrologic.fulcro.react.hooks.use_debug_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.react.hooks.use_debug_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.react.hooks.use_debug_value.cljs$core$IFn$_invoke$arity$1 = (function (value){
return React.useDebugValue(value);
}));

(com.fulcrologic.fulcro.react.hooks.use_debug_value.cljs$core$IFn$_invoke$arity$2 = (function (value,formatter){
return React.useDebugValue(value,formatter);
}));

(com.fulcrologic.fulcro.react.hooks.use_debug_value.cljs$lang$maxFixedArity = 2);

var id_67126 = (function (){
return com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
});
/**
 * Returns a constant ident with a generated ID component.
 */
com.fulcrologic.fulcro.react.hooks.use_generated_id = (function com$fulcrologic$fulcro$react$hooks$use_generated_id(){
return (com.fulcrologic.fulcro.react.hooks.useState(id_67126)[(0)]);
});
/**
 * Effect handler. Creates an effect that will garbage-collect the given ident from fulcro app state on cleanup, and
 *   will follow any `edges` (a set of keywords) and remove any things pointed through those keywords as well. See
 *   normalized-state's `remove-entity`.
 * 
 *   ```
 *   (defsc NewRoot [this props]
 *  {:use-hooks? true}
 *  (let [generated-id (hooks/use-generated-id)
 *        f (use-fulcro-mount this {:child-class SomeChild
 *                                  :initial-state-params {:id generated-id})]
 *    ;; will garbage-collect the floating root child on unmount
 *    (use-gc this [:child/id generated-id] #{})
 *    (f props)))
 *   ```
 *   
 */
com.fulcrologic.fulcro.react.hooks.use_gc = (function com$fulcrologic$fulcro$react$hooks$use_gc(this_or_app,ident,edges){
return com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
return (function (){
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.any__GT_app(this_or_app));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.algorithms.normalized_state.remove_entity,ident,edges);
});
}),[]);
});
var initial_mount_state_67127 = (function (){
var componentName = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.fulcro.floating-root",cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("generated-root"));
return [componentName,null];
});
/**
 * 
 *  Generate a new sub-root that is controlled and rendered by Fulcro's multi-root-renderer.
 * 
 *  ```
 *  ;; important, you must use hooks (`defhc` or `:use-hooks? true`)
 *  (defsc NewRoot [this props]
 *    {:use-hooks? true}
 *    (let [f (use-fulcro-mount this {:child-class SomeChild})]
 *      ;; parent props will show up in SomeChild as computed props.
 *      (f props)))
 *  ```
 * 
 *  WARNING: Requires you use multi-root-renderer.
 */
com.fulcrologic.fulcro.react.hooks.use_fulcro_mount = (function com$fulcrologic$fulcro$react$hooks$use_fulcro_mount(parent_this,p__67087){
var map__67088 = p__67087;
var map__67088__$1 = cljs.core.__destructure_map(map__67088);
var child_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67088__$1,new cljs.core.Keyword(null,"child-class","child-class",216780503));
var initial_state_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67088__$1,new cljs.core.Keyword(null,"initial-state-params","initial-state-params",-1309280029));
var st = com.fulcrologic.fulcro.react.hooks.useState(initial_mount_state_67127);
var pass_through_props = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var key_and_root = (st[(0)]);
var setRoot_BANG_ = (st[(1)]);
var _ = com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
(function (){
var join_key = (key_and_root[(0)]);
var child_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(child_class);
var initial_state = (function (){var G__67089 = child_class;
var G__67090 = (function (){var or__4223__auto__ = initial_state_params;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__67089,G__67090) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__67089,G__67090));
})();
var cls = com.fulcrologic.fulcro.components.configure_hooks_component_BANG_((function (this$,fulcro_props){
com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
(function (){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1(this$);
})();

return (function (){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1(this$);
});
}),[]);

var parent__58509__auto__ = parent_this;
var app__58510__auto__ = (function (){var or__4223__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return com.fulcrologic.fulcro.components.any__GT_app(parent__58509__auto__);
}
})();
var d__58511__auto__ = (function (){var or__4223__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (com.fulcrologic.fulcro.components.depth(parent__58509__auto__) + (1));
}
})();
var s__58512__auto__ = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__58510__auto__);
var p__58513__auto__ = (function (){var or__4223__auto__ = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return parent__58509__auto__;
}
})();
var _STAR_app_STAR__orig_val__67091 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__67092 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__67093 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__67094 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__67095 = app__58510__auto__;
var _STAR_depth_STAR__temp_val__67096 = d__58511__auto__;
var _STAR_shared_STAR__temp_val__67097 = s__58512__auto__;
var _STAR_parent_STAR__temp_val__67098 = p__58513__auto__;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__67095);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__67096);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__67097);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__67098);

try{var G__67099 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fulcro_props,join_key,initial_state);
var G__67100 = cljs.core.deref(pass_through_props);
return (child_factory.cljs$core$IFn$_invoke$arity$2 ? child_factory.cljs$core$IFn$_invoke$arity$2(G__67099,G__67100) : child_factory.call(null,G__67099,G__67100));
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__67094);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__67093);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__67092);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__67091);
}}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([join_key,com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(child_class)])], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function (_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([join_key,initial_state]);
}),new cljs.core.Keyword(null,"componentName","componentName",-2103437555),join_key], null));
var real_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(cls,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (_){
return join_key;
})], null));
var factory = (function (props){
cljs.core.reset_BANG_(pass_through_props,props);

var G__67101 = cljs.core.PersistentArrayMap.EMPTY;
return (real_factory.cljs$core$IFn$_invoke$arity$1 ? real_factory.cljs$core$IFn$_invoke$arity$1(G__67101) : real_factory.call(null,G__67101));
});
var G__67102 = [join_key,factory];
return (setRoot_BANG_.cljs$core$IFn$_invoke$arity$1 ? setRoot_BANG_.cljs$core$IFn$_invoke$arity$1(G__67102) : setRoot_BANG_.call(null,G__67102));
})();

return (function (){
var join_key = (key_and_root[(0)]);
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.any__GT_app(parent_this));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,join_key);
});
}),[]);
return (key_and_root[(1)]);
});
com.fulcrologic.fulcro.react.hooks.pcs = (function com$fulcrologic$fulcro$react$hooks$pcs(app,component,prior_props_tree_or_ident){
var ident = ((edn_query_language.core.ident_QMARK_(prior_props_tree_or_ident))?prior_props_tree_or_ident:(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(component,prior_props_tree_or_ident) : com.fulcrologic.fulcro.components.get_ident.call(null,component,prior_props_tree_or_ident)));
var state_map = com.fulcrologic.fulcro.raw.application.current_state(app);
var starting_entity = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,ident);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map);
return com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,starting_entity,state_map);
});
com.fulcrologic.fulcro.react.hooks.use_db_lifecycle = (function com$fulcrologic$fulcro$react$hooks$use_db_lifecycle(app,component,current_props_tree,set_state_BANG_){
var vec__67103 = com.fulcrologic.fulcro.react.hooks.use_state(cljs.core.random_uuid());
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67103,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67103,(1),null);
return com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
(function (){
var state_map = com.fulcrologic.fulcro.raw.application.current_state(app);
var ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(component,current_props_tree) : com.fulcrologic.fulcro.components.get_ident.call(null,component,current_props_tree));
var exists_QMARK_ = cljs.core.map_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,ident));
if(exists_QMARK_){
} else {
com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_(app,component,current_props_tree);
}

return com.fulcrologic.fulcro.raw.application.add_render_listener_BANG_(app,id,(function (app__$1,___$1){
var props = com.fulcrologic.fulcro.react.hooks.pcs(app__$1,component,ident);
return (set_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$1(props) : set_state_BANG_.call(null,props));
}));
})();

return (function (){
return com.fulcrologic.fulcro.raw.application.remove_render_listener_BANG_(app,id);
});
}),[]);
});
/**
 * Use Fulcro from raw React. This is a Hook effect/state combo that will connect you to the transaction/network/data
 *   processing of Fulcro, but will not rely on Fulcro's render. Thus, you can embed the use of the returned props in any
 *   stock React context. Technically, you do not have to use Fulcro components for rendering, but they are necessary to define the
 *   query/ident/initial-state for startup and normalization.
 * 
 *   The arguments are:
 * 
 *   app - A Fulcro app
 *   component - A component with query/ident. Queries MUST have co-located normalization info. You
 *            can create this with normal `defsc` or as an anonymous component via `raw.components/nc`.
 *   options - A map of options, containing:
 * 
 *    * :initial-params - The parameters to use when getting the initial state of the component. See `comp/get-initial-state`.
 *  If no initial state exists on the top-level component, then an empty map will be used. This will mean your props will be
 *  empty to start.
 *   * initialize? - A boolean (default true). If true then the initial state of the component will be used to pre-populate the component's state
 *  in the app database.
 *   * :keep-existing? - A boolean. If true, then the state of the component will not be initialized if there
 *  is already data at the component's ident (which will be computed using the initial state params provided, if
 *  necessary).
 *   * :ident - Only needed if you are NOT initializing state, AND the component has a dynamic ident.
 * 
 *   Returns the props from the Fulcro database. The component using this function will automatically refresh after Fulcro
 *    transactions run (Fulcro is not a watched-atom system. Updates happen at transaction boundaries). MAY return nil if no data is at that component's ident.
 *   
 */
com.fulcrologic.fulcro.react.hooks.use_component = (function com$fulcrologic$fulcro$react$hooks$use_component(app,component,p__67106){
var map__67107 = p__67106;
var map__67107__$1 = cljs.core.__destructure_map(map__67107);
var options = map__67107__$1;
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67107__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var initial_params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67107__$1,new cljs.core.Keyword(null,"initial-params","initial-params",1980851682),cljs.core.PersistentArrayMap.EMPTY);
var keep_existing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67107__$1,new cljs.core.Keyword(null,"keep-existing?","keep-existing?",-916245180));
var prior_props_ref = com.fulcrologic.fulcro.react.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var get_props = (function (ident){
return com.fulcrologic.fulcro.raw.components.get_traced_props(com.fulcrologic.fulcro.raw.application.current_state(app),component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ident","ident",-742346),ident,new cljs.core.Keyword(null,"prior-props","prior-props",-1308437879),prior_props_ref.current], null));
});
var vec__67108 = com.fulcrologic.fulcro.react.hooks.use_state((function com$fulcrologic$fulcro$react$hooks$use_component_$_initialize_component_state(){
var initial_entity = (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(component,initial_params) : com.fulcrologic.fulcro.components.get_initial_state.call(null,component,initial_params));
var initial_ident = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component,initial_entity);
}
})();
com.fulcrologic.fulcro.raw.application.maybe_merge_new_component_BANG_(app,component,initial_entity,options);

var initial_props = get_props(initial_ident);
(prior_props_ref.current = initial_props);

return initial_props;
}));
var current_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67108,(0),null);
var set_props_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67108,(1),null);
var current_ident = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component,current_props);
}
})();
com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
var listener_id = cljs.core.random_uuid();
com.fulcrologic.fulcro.raw.application.add_render_listener_BANG_(app,listener_id,(function (app__$1,_){
var props = get_props(current_ident);
if((prior_props_ref.current === props)){
return null;
} else {
(prior_props_ref.current = props);

return (set_props_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_props_BANG_.cljs$core$IFn$_invoke$arity$1(props) : set_props_BANG_.call(null,props));
}
}));

return (function com$fulcrologic$fulcro$react$hooks$use_component_$_use_tree_remove_render_listener_STAR_(){
return com.fulcrologic.fulcro.raw.application.remove_render_listener_BANG_(app,listener_id);
});
}),[cljs.core.hash(current_ident)]);

return current_props;
});
/**
 * Use a root key and component as a subtree managed by Fulcro. The `root-key` must be a unique
 * (namespace recommended) key among all keys used within the application, since the root of the database is where it
 * will live.
 * 
 * The `component` should be a real Fulcro component or a generated normalizing component from `nc` (or similar).
 * 
 * Returns the props (not including `root-key`) that satisfy the query of `component`. MAY return nil if no data is available.
 *   
 */
com.fulcrologic.fulcro.react.hooks.use_root = (function com$fulcrologic$fulcro$react$hooks$use_root(app,root_key,component,p__67111){
var map__67112 = p__67111;
var map__67112__$1 = cljs.core.__destructure_map(map__67112);
var options = map__67112__$1;
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67112__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var keep_existing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67112__$1,new cljs.core.Keyword(null,"keep-existing?","keep-existing?",-916245180));
var initial_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67112__$1,new cljs.core.Keyword(null,"initial-params","initial-params",1980851682));
var prior_props_ref = com.fulcrologic.fulcro.react.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var get_props = (function (){
return com.fulcrologic.fulcro.raw.application.get_root_subtree_props(app,root_key,component,prior_props_ref.current);
});
var vec__67113 = com.fulcrologic.fulcro.react.hooks.use_state((function (){
com.fulcrologic.fulcro.raw.application.maybe_merge_new_root_BANG_(app,root_key,component,options);

var initial_props = get_props();
(prior_props_ref.current = initial_props);

return initial_props;
}));
var current_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67113,(0),null);
var set_props_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67113,(1),null);
com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
(function (){
return com.fulcrologic.fulcro.raw.application.add_render_listener_BANG_(app,root_key,(function com$fulcrologic$fulcro$react$hooks$use_root_$_use_root_render_listener_STAR_(app__$1,_){
var props = get_props();
if((prior_props_ref.current === props)){
return null;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.react.hooks",null,325,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props updated",root_key], null);
}),null)),null,-540635971,null);

(prior_props_ref.current = props);

return (set_props_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_props_BANG_.cljs$core$IFn$_invoke$arity$1(props) : set_props_BANG_.call(null,props));
}
}));
})();

return (function com$fulcrologic$fulcro$react$hooks$use_root_$_use_tree_remove_render_listener_STAR_(){
return com.fulcrologic.fulcro.raw.application.remove_root_BANG_(app,root_key);
});
}),[]);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_props,root_key);
});
/**
 * Use a UISM as an effect hook. This will set up the given state machine under the given ID, and start it (if not
 * already started). Your initial state handler MUST set up actors and otherwise initialize based on initial-event-data.
 * 
 * If the machine is already started at the given ID then this effect will send it an `:event/remounted` event.
 * This hook will send an `:event/unmounted` when the component using this effect goes away. In both cases you may choose
 * to ignore the event.
 * 
 * You MUST include `:componentName` in each of your actor's normalizing component options (e.g. `(nc query {:componentName ::uniqueName})`)
 * because UISM requires component appear in the component registry (components cannot be safely stored in app state, just their
 * names).
 * 
 * Returns a map that contains the actor props (by actor name) and the current state of the state machine as `:active-state`.
 */
com.fulcrologic.fulcro.react.hooks.use_uism = (function com$fulcrologic$fulcro$react$hooks$use_uism(app,state_machine_definition,id,initial_event_data){
var vec__67116 = com.fulcrologic.fulcro.react.hooks.use_state(null);
var uism_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67116,(0),null);
var set_uism_data_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67116,(1),null);
com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
(function (){
return com.fulcrologic.fulcro.ui_state_machines.add_uism_BANG_(app,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state-machine-definition","state-machine-definition",-64300746),state_machine_definition,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"receive-props","receive-props",-391890642),set_uism_data_BANG_,new cljs.core.Keyword(null,"initial-event-data","initial-event-data",184944047),initial_event_data], null));
})();

return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"keep-on-unmount","keep-on-unmount",-2141132651).cljs$core$IFn$_invoke$arity$1(initial_event_data))){
return null;
} else {
return com.fulcrologic.fulcro.ui_state_machines.remove_uism_BANG_(app,id);
}
});
}),[]);

return uism_data;
});

//# sourceMappingURL=com.fulcrologic.fulcro.react.hooks.js.map
