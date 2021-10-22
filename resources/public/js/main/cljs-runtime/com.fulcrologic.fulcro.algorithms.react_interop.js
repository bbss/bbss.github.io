goog.provide('com.fulcrologic.fulcro.algorithms.react_interop');
/**
 * Returns a factory for raw JS React classes.
 * 
 *   ```
 *   (def ui-thing (react-factory SomeReactLibComponent))
 * 
 *   ...
 *   (defsc X [_ _]
 *  (ui-thing {:value 1}))
 *   ```
 * 
 *   The returned function will accept CLJS maps as props (not optional) and then any number of children. The CLJS props
 *   will be converted to js for interop. You may pass js props as an optimization.
 */
com.fulcrologic.fulcro.algorithms.react_interop.react_factory = (function com$fulcrologic$fulcro$algorithms$react_interop$react_factory(js_component_class){
return (function() { 
var G__61959__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.dom.create_element,js_component_class,com.fulcrologic.fulcro.dom.convert_props(props),children);
};
var G__61959 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__61960__i = 0, G__61960__a = new Array(arguments.length -  1);
while (G__61960__i < G__61960__a.length) {G__61960__a[G__61960__i] = arguments[G__61960__i + 1]; ++G__61960__i;}
  children = new cljs.core.IndexedSeq(G__61960__a,0,null);
} 
return G__61959__delegate.call(this,props,children);};
G__61959.cljs$lang$maxFixedArity = 1;
G__61959.cljs$lang$applyTo = (function (arglist__61964){
var props = cljs.core.first(arglist__61964);
var children = cljs.core.rest(arglist__61964);
return G__61959__delegate(props,children);
});
G__61959.cljs$core$IFn$_invoke$arity$variadic = G__61959__delegate;
return G__61959;
})()
;
});
/**
 * Returns a factory for raw JS React class that acts like an input. Use this on custom raw React controls are
 *   controlled via :value to make them behave properly with Fulcro.
 * 
 *   ```
 *   (def ui-thing (react-input-factory SomeInputComponent))
 * 
 *   ...
 *   (defsc X [_ _]
 *  (ui-thing {:value 1}))
 *   ```
 * 
 *   The returned function will accept CLJS maps as props (not optional) and then any number of children. The CLJS props
 *   will be converted to js for interop. You may pass js props as an optimization.
 */
com.fulcrologic.fulcro.algorithms.react_interop.react_input_factory = (function com$fulcrologic$fulcro$algorithms$react_interop$react_input_factory(js_component_class){
var factory = com.fulcrologic.fulcro.dom.wrap_form_element(js_component_class);
return (function() { 
var G__61965__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(factory,cljs.core.clj__GT_js(props),children);
};
var G__61965 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__61966__i = 0, G__61966__a = new Array(arguments.length -  1);
while (G__61966__i < G__61966__a.length) {G__61966__a[G__61966__i] = arguments[G__61966__i + 1]; ++G__61966__i;}
  children = new cljs.core.IndexedSeq(G__61966__a,0,null);
} 
return G__61965__delegate.call(this,props,children);};
G__61965.cljs$lang$maxFixedArity = 1;
G__61965.cljs$lang$applyTo = (function (arglist__61967){
var props = cljs.core.first(arglist__61967);
var children = cljs.core.rest(arglist__61967);
return G__61965__delegate(props,children);
});
G__61965.cljs$core$IFn$_invoke$arity$variadic = G__61965__delegate;
return G__61965;
})()
;
});
/**
 * Creates a React factory `(fn [parent fulcro-props & children])` for a component that has had an HOC applied,
 *   and passes Fulcro's parent/props through to 'fulcro_hoc$parent' and 'fulcro_hoc_childprops' in the js props.
 * 
 *   See hoc-factory, which is more likely what you want, as it further wraps the parent context for proper interop.
 */
com.fulcrologic.fulcro.algorithms.react_interop.hoc_wrapper_factory = (function com$fulcrologic$fulcro$algorithms$react_interop$hoc_wrapper_factory(component_class){
return (function() { 
var G__61968__delegate = function (this$,props,children){
if(cljs.core.truth_((com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,this$)))){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.react-interop",null,59,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The first argument to an HOC factory MUST be the parent component instance. See https://book.fulcrologic.com/#err-interop-1st-arg-not-parent"], null);
}),null)),null,1287969221,null);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,component_class,({"fulcro_hoc$parent": this$, "fulcro_hoc$childprops": props}),children);
};
var G__61968 = function (this$,props,var_args){
var children = null;
if (arguments.length > 2) {
var G__61972__i = 0, G__61972__a = new Array(arguments.length -  2);
while (G__61972__i < G__61972__a.length) {G__61972__a[G__61972__i] = arguments[G__61972__i + 2]; ++G__61972__i;}
  children = new cljs.core.IndexedSeq(G__61972__a,0,null);
} 
return G__61968__delegate.call(this,this$,props,children);};
G__61968.cljs$lang$maxFixedArity = 2;
G__61968.cljs$lang$applyTo = (function (arglist__61973){
var this$ = cljs.core.first(arglist__61973);
arglist__61973 = cljs.core.next(arglist__61973);
var props = cljs.core.first(arglist__61973);
var children = cljs.core.rest(arglist__61973);
return G__61968__delegate(this$,props,children);
});
G__61968.cljs$core$IFn$_invoke$arity$variadic = G__61968__delegate;
return G__61968;
})()
;
});
/**
 * Returns a (fn [parent-component props & children] ...) that will render the target-fulcro-class, but as
 *   wrapped by the `hoc` function.
 * 
 *   Use this when you have a JS React pattern that tells you:
 * 
 *   ```
 *   var WrappedComponent = injectCrap(Component);
 *   ```
 * 
 *   where `injectCrap` is the `hoc` parameter to this function.
 * 
 *   Any injected data will appear as `:injected-props` (a js map) in the computed parameter of the target Fulcro component.
 * 
 *   You can this use the function returned from `hoc-factory` as a normal component factory in fulcro.
 *   
 */
com.fulcrologic.fulcro.algorithms.react_interop.hoc_factory = (function com$fulcrologic$fulcro$algorithms$react_interop$hoc_factory(target_fulcro_class,hoc){
if(com.fulcrologic.fulcro.components.component_class_QMARK_(target_fulcro_class)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.react-interop",null,85,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hoc-factory MUST be used with a Fulcro Class. See https://book.fulcrologic.com/#err-interop-not-fulcro-class"], null);
}),null)),null,1832749992,null);
}

var target_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(target_fulcro_class);
var target_factory_interop = (function (js_props){
var parent = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(js_props,"fulcro_hoc$parent") : com.fulcrologic.fulcro.components.isoget.call(null,js_props,"fulcro_hoc$parent"));
var fulcro_props = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(js_props,"fulcro_hoc$childprops") : com.fulcrologic.fulcro.components.isoget.call(null,js_props,"fulcro_hoc$childprops"));
var parent__58509__auto__ = parent;
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
var _STAR_app_STAR__orig_val__61916 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__61917 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__61918 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__61919 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__61920 = app__58510__auto__;
var _STAR_depth_STAR__temp_val__61921 = d__58511__auto__;
var _STAR_shared_STAR__temp_val__61922 = s__58512__auto__;
var _STAR_parent_STAR__temp_val__61923 = p__58513__auto__;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__61920);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__61921);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__61922);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__61923);

try{var G__61936 = fulcro_props;
var G__61937 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"injected-props","injected-props",366631973),js_props], null);
return (target_factory.cljs$core$IFn$_invoke$arity$2 ? target_factory.cljs$core$IFn$_invoke$arity$2(G__61936,G__61937) : target_factory.call(null,G__61936,G__61937));
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__61919);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__61918);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__61917);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__61916);
}});
var factory = (function (){var WrappedComponent = (hoc.cljs$core$IFn$_invoke$arity$1 ? hoc.cljs$core$IFn$_invoke$arity$1(target_factory_interop) : hoc.call(null,target_factory_interop));
return com.fulcrologic.fulcro.algorithms.react_interop.hoc_wrapper_factory(WrappedComponent);
})();
return factory;
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.react_interop.js.map
