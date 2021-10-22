goog.provide('com.fulcrologic.fulcro.dom');





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return React.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__60552){
var vec__60553 = p__60552;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60553,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60553,(1),null);
var pair = vec__60553;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__60556){
var vec__60557 = p__60556;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60557,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60557,(1),null);
var pair = vec__60557;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__60560){
var vec__60561 = p__60560;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60561,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60561,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__60564 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60564,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__60564;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__60574 = arguments.length;
switch (G__60574) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__60575 = component.refs;
var G__60575__$1 = (((G__60575 == null))?null:goog.object.get(G__60575,name));
if((G__60575__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__60575__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5751__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5751__auto__)){
var ref = temp__5751__auto__;
var G__60577 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__60578 = (function (){var G__60579 = r;
if((G__60579 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__60579);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__60578) : ref.call(null,G__60578));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__60577) : factory.call(null,G__60577));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__60588 = arguments.length;
switch (G__60588) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___61812 = arguments.length;
var i__4830__auto___61813 = (0);
while(true){
if((i__4830__auto___61813 < len__4829__auto___61812)){
args_arr__4850__auto__.push((arguments[i__4830__auto___61813]));

var G__61814 = (i__4830__auto___61813 + (1));
i__4830__auto___61813 = G__61814;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4851__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq60585){
var G__60586 = cljs.core.first(seq60585);
var seq60585__$1 = cljs.core.next(seq60585);
var G__60587 = cljs.core.first(seq60585__$1);
var seq60585__$2 = cljs.core.next(seq60585__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60586,G__60587,seq60585__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
goog.object.extend(next_state,next_props,({"onChange": on_change}));

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4221__auto__ = tag;
if(cljs.core.truth_(and__4221__auto__)){
var G__60616 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__60616) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__60616));
} else {
return and__4221__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
goog.object.extend(state,props,({"onChange": goog.bind(goog.object.get(this$,"onChange"),this$)}));

goog.object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return React.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,React.Component);

var x60624_61831 = ctor.prototype;
(x60624_61831.onChange = (function (event){
var this$ = this;
var temp__5753__auto__ = goog.object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5753__auto__)){
var handler = temp__5753__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x60624_61831.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","cached-props","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__60617_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__60617_SHARP_);
})));
var element_value = goog.object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4221__auto__ = state_value;
if(cljs.core.truth_(and__4221__auto__)){
var and__4221__auto____$1 = element_value;
if(cljs.core.truth_(and__4221__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,1975666238,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
}));

(x60624_61831.render = (function (){
var this$ = this;
return React.createElement(element,goog.object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__61837__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.createElement,ctor,args);
};
var G__61837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61840__i = 0, G__61840__a = new Array(arguments.length -  0);
while (G__61840__i < G__61840__a.length) {G__61840__a[G__61840__i] = arguments[G__61840__i + 0]; ++G__61840__i;}
  args = new cljs.core.IndexedSeq(G__61840__a,0,null);
} 
return G__61837__delegate.call(this,args);};
G__61837.cljs$lang$maxFixedArity = 0;
G__61837.cljs$lang$applyTo = (function (arglist__61841){
var args = cljs.core.seq(arglist__61841);
return G__61837__delegate(args);
});
G__61837.cljs$core$IFn$_invoke$arity$variadic = G__61837__delegate;
return G__61837;
})()
;
return (function() { 
var G__61842__delegate = function (props,children){
var t = goog.object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"input",props,children);
} else {
var temp__5751__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5751__auto__)){
var r = temp__5751__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__61842 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__61843__i = 0, G__61843__a = new Array(arguments.length -  1);
while (G__61843__i < G__61843__a.length) {G__61843__a[G__61843__i] = arguments[G__61843__i + 1]; ++G__61843__i;}
  children = new cljs.core.IndexedSeq(G__61843__a,0,null);
} 
return G__61842__delegate.call(this,props,children);};
G__61842.cljs$lang$maxFixedArity = 1;
G__61842.cljs$lang$applyTo = (function (arglist__61846){
var props = cljs.core.first(arglist__61846);
var children = cljs.core.rest(arglist__61846);
return G__61842__delegate(props,children);
});
G__61842.cljs$core$IFn$_invoke$arity$variadic = G__61842__delegate;
return G__61842;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__60634 = tag;
switch (G__60634) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60634)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__60643 = arguments.length;
switch (G__60643) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__60649 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__60650 = cljs.core.seq(vec__60649);
var first__60651 = cljs.core.first(seq__60650);
var seq__60650__$1 = cljs.core.next(seq__60650);
var head = first__60651;
var tail = seq__60650__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__60652 = (function (){var G__60653 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60653,tail);

return G__60653;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60652) : f.call(null,G__60652));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__60654 = (function (){var G__60655 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60655,args);

return G__60655;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60654) : f.call(null,G__60654));
} else {
if(cljs.core.object_QMARK_(head)){
var G__60656 = (function (){var G__60657 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60657,tail);

return G__60657;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60656) : f.call(null,G__60656));
} else {
if(cljs.core.map_QMARK_(head)){
var G__60658 = (function (){var G__60659 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__60659,tail);

return G__60659;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60658) : f.call(null,G__60658));
} else {
var G__60660 = (function (){var G__60661 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60661,args);

return G__60661;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60660) : f.call(null,G__60660));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__60667 = arguments.length;
switch (G__60667) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__60670 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__60671 = cljs.core.seq(vec__60670);
var first__60672 = cljs.core.first(seq__60671);
var seq__60671__$1 = cljs.core.next(seq__60671);
var head = first__60672;
var tail = seq__60671__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60673 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60673,tail);

return G__60673;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60674 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60674,args);

return G__60674;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60675 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60675,tail);

return G__60675;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60676 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__60676,tail);

return G__60676;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60677 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60677,args);

return G__60677;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61857 = arguments.length;
var i__4830__auto___61858 = (0);
while(true){
if((i__4830__auto___61858 < len__4829__auto___61857)){
args__4835__auto__.push((arguments[i__4830__auto___61858]));

var G__61859 = (i__4830__auto___61858 + (1));
i__4830__auto___61858 = G__61859;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60694 = conformed_args__59324__auto__;
var map__60694__$1 = cljs.core.__destructure_map(map__60694);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60694__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60694__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60694__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq60689){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60689));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61860 = arguments.length;
var i__4830__auto___61861 = (0);
while(true){
if((i__4830__auto___61861 < len__4829__auto___61860)){
args__4835__auto__.push((arguments[i__4830__auto___61861]));

var G__61862 = (i__4830__auto___61861 + (1));
i__4830__auto___61861 = G__61862;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60698 = conformed_args__59324__auto__;
var map__60698__$1 = cljs.core.__destructure_map(map__60698);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60698__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60698__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60698__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq60697){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60697));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61864 = arguments.length;
var i__4830__auto___61865 = (0);
while(true){
if((i__4830__auto___61865 < len__4829__auto___61864)){
args__4835__auto__.push((arguments[i__4830__auto___61865]));

var G__61866 = (i__4830__auto___61865 + (1));
i__4830__auto___61865 = G__61866;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60700 = conformed_args__59324__auto__;
var map__60700__$1 = cljs.core.__destructure_map(map__60700);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60700__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60700__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60700__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq60699){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60699));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61867 = arguments.length;
var i__4830__auto___61868 = (0);
while(true){
if((i__4830__auto___61868 < len__4829__auto___61867)){
args__4835__auto__.push((arguments[i__4830__auto___61868]));

var G__61869 = (i__4830__auto___61868 + (1));
i__4830__auto___61868 = G__61869;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60702 = conformed_args__59324__auto__;
var map__60702__$1 = cljs.core.__destructure_map(map__60702);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60702__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60702__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq60701){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60701));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61870 = arguments.length;
var i__4830__auto___61871 = (0);
while(true){
if((i__4830__auto___61871 < len__4829__auto___61870)){
args__4835__auto__.push((arguments[i__4830__auto___61871]));

var G__61872 = (i__4830__auto___61871 + (1));
i__4830__auto___61871 = G__61872;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60704 = conformed_args__59324__auto__;
var map__60704__$1 = cljs.core.__destructure_map(map__60704);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60704__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60704__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60704__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq60703){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60703));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61873 = arguments.length;
var i__4830__auto___61874 = (0);
while(true){
if((i__4830__auto___61874 < len__4829__auto___61873)){
args__4835__auto__.push((arguments[i__4830__auto___61874]));

var G__61875 = (i__4830__auto___61874 + (1));
i__4830__auto___61874 = G__61875;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60706 = conformed_args__59324__auto__;
var map__60706__$1 = cljs.core.__destructure_map(map__60706);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60706__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60706__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq60705){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60705));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61876 = arguments.length;
var i__4830__auto___61877 = (0);
while(true){
if((i__4830__auto___61877 < len__4829__auto___61876)){
args__4835__auto__.push((arguments[i__4830__auto___61877]));

var G__61878 = (i__4830__auto___61877 + (1));
i__4830__auto___61877 = G__61878;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60708 = conformed_args__59324__auto__;
var map__60708__$1 = cljs.core.__destructure_map(map__60708);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60708__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60708__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60708__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq60707){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60707));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61880 = arguments.length;
var i__4830__auto___61881 = (0);
while(true){
if((i__4830__auto___61881 < len__4829__auto___61880)){
args__4835__auto__.push((arguments[i__4830__auto___61881]));

var G__61882 = (i__4830__auto___61881 + (1));
i__4830__auto___61881 = G__61882;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60710 = conformed_args__59324__auto__;
var map__60710__$1 = cljs.core.__destructure_map(map__60710);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60710__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60710__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60710__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq60709){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60709));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61883 = arguments.length;
var i__4830__auto___61884 = (0);
while(true){
if((i__4830__auto___61884 < len__4829__auto___61883)){
args__4835__auto__.push((arguments[i__4830__auto___61884]));

var G__61885 = (i__4830__auto___61884 + (1));
i__4830__auto___61884 = G__61885;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60712 = conformed_args__59324__auto__;
var map__60712__$1 = cljs.core.__destructure_map(map__60712);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60712__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60712__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60712__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq60711){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60711));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61886 = arguments.length;
var i__4830__auto___61887 = (0);
while(true){
if((i__4830__auto___61887 < len__4829__auto___61886)){
args__4835__auto__.push((arguments[i__4830__auto___61887]));

var G__61888 = (i__4830__auto___61887 + (1));
i__4830__auto___61887 = G__61888;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60714 = conformed_args__59324__auto__;
var map__60714__$1 = cljs.core.__destructure_map(map__60714);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60714__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60714__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60714__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq60713){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60713));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61889 = arguments.length;
var i__4830__auto___61890 = (0);
while(true){
if((i__4830__auto___61890 < len__4829__auto___61889)){
args__4835__auto__.push((arguments[i__4830__auto___61890]));

var G__61891 = (i__4830__auto___61890 + (1));
i__4830__auto___61890 = G__61891;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60716 = conformed_args__59324__auto__;
var map__60716__$1 = cljs.core.__destructure_map(map__60716);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60716__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60716__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60716__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq60715){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60715));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61892 = arguments.length;
var i__4830__auto___61893 = (0);
while(true){
if((i__4830__auto___61893 < len__4829__auto___61892)){
args__4835__auto__.push((arguments[i__4830__auto___61893]));

var G__61894 = (i__4830__auto___61893 + (1));
i__4830__auto___61893 = G__61894;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60719 = conformed_args__59324__auto__;
var map__60719__$1 = cljs.core.__destructure_map(map__60719);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60719__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60719__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60719__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq60717){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60717));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61895 = arguments.length;
var i__4830__auto___61896 = (0);
while(true){
if((i__4830__auto___61896 < len__4829__auto___61895)){
args__4835__auto__.push((arguments[i__4830__auto___61896]));

var G__61897 = (i__4830__auto___61896 + (1));
i__4830__auto___61896 = G__61897;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60722 = conformed_args__59324__auto__;
var map__60722__$1 = cljs.core.__destructure_map(map__60722);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60722__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60722__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60722__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq60721){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60721));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61898 = arguments.length;
var i__4830__auto___61899 = (0);
while(true){
if((i__4830__auto___61899 < len__4829__auto___61898)){
args__4835__auto__.push((arguments[i__4830__auto___61899]));

var G__61900 = (i__4830__auto___61899 + (1));
i__4830__auto___61899 = G__61900;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60725 = conformed_args__59324__auto__;
var map__60725__$1 = cljs.core.__destructure_map(map__60725);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60725__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60725__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60725__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq60723){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60723));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61901 = arguments.length;
var i__4830__auto___61902 = (0);
while(true){
if((i__4830__auto___61902 < len__4829__auto___61901)){
args__4835__auto__.push((arguments[i__4830__auto___61902]));

var G__61903 = (i__4830__auto___61902 + (1));
i__4830__auto___61902 = G__61903;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60727 = conformed_args__59324__auto__;
var map__60727__$1 = cljs.core.__destructure_map(map__60727);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq60726){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60726));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61904 = arguments.length;
var i__4830__auto___61905 = (0);
while(true){
if((i__4830__auto___61905 < len__4829__auto___61904)){
args__4835__auto__.push((arguments[i__4830__auto___61905]));

var G__61906 = (i__4830__auto___61905 + (1));
i__4830__auto___61905 = G__61906;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60734 = conformed_args__59324__auto__;
var map__60734__$1 = cljs.core.__destructure_map(map__60734);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60734__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60734__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60734__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq60729){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60729));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61907 = arguments.length;
var i__4830__auto___61908 = (0);
while(true){
if((i__4830__auto___61908 < len__4829__auto___61907)){
args__4835__auto__.push((arguments[i__4830__auto___61908]));

var G__61909 = (i__4830__auto___61908 + (1));
i__4830__auto___61908 = G__61909;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60744 = conformed_args__59324__auto__;
var map__60744__$1 = cljs.core.__destructure_map(map__60744);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60744__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60744__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60744__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq60743){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60743));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61910 = arguments.length;
var i__4830__auto___61911 = (0);
while(true){
if((i__4830__auto___61911 < len__4829__auto___61910)){
args__4835__auto__.push((arguments[i__4830__auto___61911]));

var G__61912 = (i__4830__auto___61911 + (1));
i__4830__auto___61911 = G__61912;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60749 = conformed_args__59324__auto__;
var map__60749__$1 = cljs.core.__destructure_map(map__60749);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60749__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60749__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60749__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq60745){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60745));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61913 = arguments.length;
var i__4830__auto___61914 = (0);
while(true){
if((i__4830__auto___61914 < len__4829__auto___61913)){
args__4835__auto__.push((arguments[i__4830__auto___61914]));

var G__61915 = (i__4830__auto___61914 + (1));
i__4830__auto___61914 = G__61915;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60752 = conformed_args__59324__auto__;
var map__60752__$1 = cljs.core.__destructure_map(map__60752);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60752__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60752__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60752__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq60751){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60751));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61924 = arguments.length;
var i__4830__auto___61925 = (0);
while(true){
if((i__4830__auto___61925 < len__4829__auto___61924)){
args__4835__auto__.push((arguments[i__4830__auto___61925]));

var G__61926 = (i__4830__auto___61925 + (1));
i__4830__auto___61925 = G__61926;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60757 = conformed_args__59324__auto__;
var map__60757__$1 = cljs.core.__destructure_map(map__60757);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq60756){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60756));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61927 = arguments.length;
var i__4830__auto___61928 = (0);
while(true){
if((i__4830__auto___61928 < len__4829__auto___61927)){
args__4835__auto__.push((arguments[i__4830__auto___61928]));

var G__61929 = (i__4830__auto___61928 + (1));
i__4830__auto___61928 = G__61929;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60761 = conformed_args__59324__auto__;
var map__60761__$1 = cljs.core.__destructure_map(map__60761);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60761__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60761__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60761__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq60760){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60760));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61930 = arguments.length;
var i__4830__auto___61931 = (0);
while(true){
if((i__4830__auto___61931 < len__4829__auto___61930)){
args__4835__auto__.push((arguments[i__4830__auto___61931]));

var G__61932 = (i__4830__auto___61931 + (1));
i__4830__auto___61931 = G__61932;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60763 = conformed_args__59324__auto__;
var map__60763__$1 = cljs.core.__destructure_map(map__60763);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60763__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60763__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60763__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq60762){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60762));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61933 = arguments.length;
var i__4830__auto___61934 = (0);
while(true){
if((i__4830__auto___61934 < len__4829__auto___61933)){
args__4835__auto__.push((arguments[i__4830__auto___61934]));

var G__61935 = (i__4830__auto___61934 + (1));
i__4830__auto___61934 = G__61935;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60766 = conformed_args__59324__auto__;
var map__60766__$1 = cljs.core.__destructure_map(map__60766);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60766__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60766__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60766__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq60765){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60765));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61938 = arguments.length;
var i__4830__auto___61939 = (0);
while(true){
if((i__4830__auto___61939 < len__4829__auto___61938)){
args__4835__auto__.push((arguments[i__4830__auto___61939]));

var G__61940 = (i__4830__auto___61939 + (1));
i__4830__auto___61939 = G__61940;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60769 = conformed_args__59324__auto__;
var map__60769__$1 = cljs.core.__destructure_map(map__60769);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60769__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60769__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60769__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq60768){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60768));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61941 = arguments.length;
var i__4830__auto___61942 = (0);
while(true){
if((i__4830__auto___61942 < len__4829__auto___61941)){
args__4835__auto__.push((arguments[i__4830__auto___61942]));

var G__61943 = (i__4830__auto___61942 + (1));
i__4830__auto___61942 = G__61943;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60773 = conformed_args__59324__auto__;
var map__60773__$1 = cljs.core.__destructure_map(map__60773);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60773__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60773__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60773__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq60772){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60772));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61944 = arguments.length;
var i__4830__auto___61945 = (0);
while(true){
if((i__4830__auto___61945 < len__4829__auto___61944)){
args__4835__auto__.push((arguments[i__4830__auto___61945]));

var G__61946 = (i__4830__auto___61945 + (1));
i__4830__auto___61945 = G__61946;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60775 = conformed_args__59324__auto__;
var map__60775__$1 = cljs.core.__destructure_map(map__60775);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60775__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60775__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60775__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq60774){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60774));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61947 = arguments.length;
var i__4830__auto___61948 = (0);
while(true){
if((i__4830__auto___61948 < len__4829__auto___61947)){
args__4835__auto__.push((arguments[i__4830__auto___61948]));

var G__61949 = (i__4830__auto___61948 + (1));
i__4830__auto___61948 = G__61949;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60777 = conformed_args__59324__auto__;
var map__60777__$1 = cljs.core.__destructure_map(map__60777);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60777__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60777__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60777__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq60776){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60776));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61950 = arguments.length;
var i__4830__auto___61951 = (0);
while(true){
if((i__4830__auto___61951 < len__4829__auto___61950)){
args__4835__auto__.push((arguments[i__4830__auto___61951]));

var G__61952 = (i__4830__auto___61951 + (1));
i__4830__auto___61951 = G__61952;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60780 = conformed_args__59324__auto__;
var map__60780__$1 = cljs.core.__destructure_map(map__60780);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60780__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60780__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60780__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq60779){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60779));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61953 = arguments.length;
var i__4830__auto___61954 = (0);
while(true){
if((i__4830__auto___61954 < len__4829__auto___61953)){
args__4835__auto__.push((arguments[i__4830__auto___61954]));

var G__61955 = (i__4830__auto___61954 + (1));
i__4830__auto___61954 = G__61955;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60782 = conformed_args__59324__auto__;
var map__60782__$1 = cljs.core.__destructure_map(map__60782);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq60781){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60781));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61956 = arguments.length;
var i__4830__auto___61957 = (0);
while(true){
if((i__4830__auto___61957 < len__4829__auto___61956)){
args__4835__auto__.push((arguments[i__4830__auto___61957]));

var G__61958 = (i__4830__auto___61957 + (1));
i__4830__auto___61957 = G__61958;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60785 = conformed_args__59324__auto__;
var map__60785__$1 = cljs.core.__destructure_map(map__60785);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60785__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60785__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60785__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq60784){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60784));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61961 = arguments.length;
var i__4830__auto___61962 = (0);
while(true){
if((i__4830__auto___61962 < len__4829__auto___61961)){
args__4835__auto__.push((arguments[i__4830__auto___61962]));

var G__61963 = (i__4830__auto___61962 + (1));
i__4830__auto___61962 = G__61963;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60787 = conformed_args__59324__auto__;
var map__60787__$1 = cljs.core.__destructure_map(map__60787);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq60786){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60786));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61969 = arguments.length;
var i__4830__auto___61970 = (0);
while(true){
if((i__4830__auto___61970 < len__4829__auto___61969)){
args__4835__auto__.push((arguments[i__4830__auto___61970]));

var G__61971 = (i__4830__auto___61970 + (1));
i__4830__auto___61970 = G__61971;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60789 = conformed_args__59324__auto__;
var map__60789__$1 = cljs.core.__destructure_map(map__60789);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq60788){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60788));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61974 = arguments.length;
var i__4830__auto___61975 = (0);
while(true){
if((i__4830__auto___61975 < len__4829__auto___61974)){
args__4835__auto__.push((arguments[i__4830__auto___61975]));

var G__61976 = (i__4830__auto___61975 + (1));
i__4830__auto___61975 = G__61976;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60797 = conformed_args__59324__auto__;
var map__60797__$1 = cljs.core.__destructure_map(map__60797);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60797__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60797__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60797__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq60792){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60792));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61977 = arguments.length;
var i__4830__auto___61978 = (0);
while(true){
if((i__4830__auto___61978 < len__4829__auto___61977)){
args__4835__auto__.push((arguments[i__4830__auto___61978]));

var G__61979 = (i__4830__auto___61978 + (1));
i__4830__auto___61978 = G__61979;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60802 = conformed_args__59324__auto__;
var map__60802__$1 = cljs.core.__destructure_map(map__60802);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60802__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60802__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60802__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq60800){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60800));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61980 = arguments.length;
var i__4830__auto___61981 = (0);
while(true){
if((i__4830__auto___61981 < len__4829__auto___61980)){
args__4835__auto__.push((arguments[i__4830__auto___61981]));

var G__61982 = (i__4830__auto___61981 + (1));
i__4830__auto___61981 = G__61982;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60807 = conformed_args__59324__auto__;
var map__60807__$1 = cljs.core.__destructure_map(map__60807);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60807__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60807__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60807__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq60803){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60803));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61983 = arguments.length;
var i__4830__auto___61984 = (0);
while(true){
if((i__4830__auto___61984 < len__4829__auto___61983)){
args__4835__auto__.push((arguments[i__4830__auto___61984]));

var G__61985 = (i__4830__auto___61984 + (1));
i__4830__auto___61984 = G__61985;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60809 = conformed_args__59324__auto__;
var map__60809__$1 = cljs.core.__destructure_map(map__60809);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60809__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60809__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60809__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq60808){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60808));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61986 = arguments.length;
var i__4830__auto___61987 = (0);
while(true){
if((i__4830__auto___61987 < len__4829__auto___61986)){
args__4835__auto__.push((arguments[i__4830__auto___61987]));

var G__61988 = (i__4830__auto___61987 + (1));
i__4830__auto___61987 = G__61988;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60812 = conformed_args__59324__auto__;
var map__60812__$1 = cljs.core.__destructure_map(map__60812);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60812__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60812__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60812__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq60810){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60810));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61989 = arguments.length;
var i__4830__auto___61990 = (0);
while(true){
if((i__4830__auto___61990 < len__4829__auto___61989)){
args__4835__auto__.push((arguments[i__4830__auto___61990]));

var G__61991 = (i__4830__auto___61990 + (1));
i__4830__auto___61990 = G__61991;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60816 = conformed_args__59324__auto__;
var map__60816__$1 = cljs.core.__destructure_map(map__60816);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60816__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60816__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60816__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq60815){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60815));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61992 = arguments.length;
var i__4830__auto___61993 = (0);
while(true){
if((i__4830__auto___61993 < len__4829__auto___61992)){
args__4835__auto__.push((arguments[i__4830__auto___61993]));

var G__61994 = (i__4830__auto___61993 + (1));
i__4830__auto___61993 = G__61994;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60818 = conformed_args__59324__auto__;
var map__60818__$1 = cljs.core.__destructure_map(map__60818);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60818__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60818__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60818__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq60817){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60817));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61995 = arguments.length;
var i__4830__auto___61996 = (0);
while(true){
if((i__4830__auto___61996 < len__4829__auto___61995)){
args__4835__auto__.push((arguments[i__4830__auto___61996]));

var G__61997 = (i__4830__auto___61996 + (1));
i__4830__auto___61996 = G__61997;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60821 = conformed_args__59324__auto__;
var map__60821__$1 = cljs.core.__destructure_map(map__60821);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60821__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60821__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60821__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq60819){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60819));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61998 = arguments.length;
var i__4830__auto___61999 = (0);
while(true){
if((i__4830__auto___61999 < len__4829__auto___61998)){
args__4835__auto__.push((arguments[i__4830__auto___61999]));

var G__62000 = (i__4830__auto___61999 + (1));
i__4830__auto___61999 = G__62000;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60823 = conformed_args__59324__auto__;
var map__60823__$1 = cljs.core.__destructure_map(map__60823);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60823__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60823__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60823__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq60822){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60822));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62001 = arguments.length;
var i__4830__auto___62002 = (0);
while(true){
if((i__4830__auto___62002 < len__4829__auto___62001)){
args__4835__auto__.push((arguments[i__4830__auto___62002]));

var G__62003 = (i__4830__auto___62002 + (1));
i__4830__auto___62002 = G__62003;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60833 = conformed_args__59324__auto__;
var map__60833__$1 = cljs.core.__destructure_map(map__60833);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq60825){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60825));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62004 = arguments.length;
var i__4830__auto___62005 = (0);
while(true){
if((i__4830__auto___62005 < len__4829__auto___62004)){
args__4835__auto__.push((arguments[i__4830__auto___62005]));

var G__62006 = (i__4830__auto___62005 + (1));
i__4830__auto___62005 = G__62006;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60842 = conformed_args__59324__auto__;
var map__60842__$1 = cljs.core.__destructure_map(map__60842);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60842__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60842__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60842__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq60839){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60839));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62007 = arguments.length;
var i__4830__auto___62008 = (0);
while(true){
if((i__4830__auto___62008 < len__4829__auto___62007)){
args__4835__auto__.push((arguments[i__4830__auto___62008]));

var G__62009 = (i__4830__auto___62008 + (1));
i__4830__auto___62008 = G__62009;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60920 = conformed_args__59324__auto__;
var map__60920__$1 = cljs.core.__destructure_map(map__60920);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60920__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60920__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60920__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq60895){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60895));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62010 = arguments.length;
var i__4830__auto___62011 = (0);
while(true){
if((i__4830__auto___62011 < len__4829__auto___62010)){
args__4835__auto__.push((arguments[i__4830__auto___62011]));

var G__62012 = (i__4830__auto___62011 + (1));
i__4830__auto___62011 = G__62012;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60934 = conformed_args__59324__auto__;
var map__60934__$1 = cljs.core.__destructure_map(map__60934);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60934__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60934__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60934__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq60932){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60932));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62013 = arguments.length;
var i__4830__auto___62014 = (0);
while(true){
if((i__4830__auto___62014 < len__4829__auto___62013)){
args__4835__auto__.push((arguments[i__4830__auto___62014]));

var G__62015 = (i__4830__auto___62014 + (1));
i__4830__auto___62014 = G__62015;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60938 = conformed_args__59324__auto__;
var map__60938__$1 = cljs.core.__destructure_map(map__60938);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60938__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60938__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60938__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq60937){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60937));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62016 = arguments.length;
var i__4830__auto___62017 = (0);
while(true){
if((i__4830__auto___62017 < len__4829__auto___62016)){
args__4835__auto__.push((arguments[i__4830__auto___62017]));

var G__62018 = (i__4830__auto___62017 + (1));
i__4830__auto___62017 = G__62018;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60940 = conformed_args__59324__auto__;
var map__60940__$1 = cljs.core.__destructure_map(map__60940);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60940__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60940__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60940__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq60939){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60939));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62019 = arguments.length;
var i__4830__auto___62020 = (0);
while(true){
if((i__4830__auto___62020 < len__4829__auto___62019)){
args__4835__auto__.push((arguments[i__4830__auto___62020]));

var G__62021 = (i__4830__auto___62020 + (1));
i__4830__auto___62020 = G__62021;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60942 = conformed_args__59324__auto__;
var map__60942__$1 = cljs.core.__destructure_map(map__60942);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60942__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60942__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60942__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq60941){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60941));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62022 = arguments.length;
var i__4830__auto___62023 = (0);
while(true){
if((i__4830__auto___62023 < len__4829__auto___62022)){
args__4835__auto__.push((arguments[i__4830__auto___62023]));

var G__62024 = (i__4830__auto___62023 + (1));
i__4830__auto___62023 = G__62024;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60945 = conformed_args__59324__auto__;
var map__60945__$1 = cljs.core.__destructure_map(map__60945);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60945__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60945__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60945__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq60943){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60943));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62025 = arguments.length;
var i__4830__auto___62026 = (0);
while(true){
if((i__4830__auto___62026 < len__4829__auto___62025)){
args__4835__auto__.push((arguments[i__4830__auto___62026]));

var G__62027 = (i__4830__auto___62026 + (1));
i__4830__auto___62026 = G__62027;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60954 = conformed_args__59324__auto__;
var map__60954__$1 = cljs.core.__destructure_map(map__60954);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60954__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60954__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60954__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq60949){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60949));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62028 = arguments.length;
var i__4830__auto___62029 = (0);
while(true){
if((i__4830__auto___62029 < len__4829__auto___62028)){
args__4835__auto__.push((arguments[i__4830__auto___62029]));

var G__62030 = (i__4830__auto___62029 + (1));
i__4830__auto___62029 = G__62030;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60964 = conformed_args__59324__auto__;
var map__60964__$1 = cljs.core.__destructure_map(map__60964);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60964__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60964__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60964__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq60958){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60958));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62031 = arguments.length;
var i__4830__auto___62032 = (0);
while(true){
if((i__4830__auto___62032 < len__4829__auto___62031)){
args__4835__auto__.push((arguments[i__4830__auto___62032]));

var G__62033 = (i__4830__auto___62032 + (1));
i__4830__auto___62032 = G__62033;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60972 = conformed_args__59324__auto__;
var map__60972__$1 = cljs.core.__destructure_map(map__60972);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60972__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60972__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60972__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq60969){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60969));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62034 = arguments.length;
var i__4830__auto___62035 = (0);
while(true){
if((i__4830__auto___62035 < len__4829__auto___62034)){
args__4835__auto__.push((arguments[i__4830__auto___62035]));

var G__62036 = (i__4830__auto___62035 + (1));
i__4830__auto___62035 = G__62036;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60987 = conformed_args__59324__auto__;
var map__60987__$1 = cljs.core.__destructure_map(map__60987);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60987__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60987__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60987__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq60976){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60976));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62037 = arguments.length;
var i__4830__auto___62038 = (0);
while(true){
if((i__4830__auto___62038 < len__4829__auto___62037)){
args__4835__auto__.push((arguments[i__4830__auto___62038]));

var G__62039 = (i__4830__auto___62038 + (1));
i__4830__auto___62038 = G__62039;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61000 = conformed_args__59324__auto__;
var map__61000__$1 = cljs.core.__destructure_map(map__61000);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61000__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61000__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61000__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq60998){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60998));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62040 = arguments.length;
var i__4830__auto___62041 = (0);
while(true){
if((i__4830__auto___62041 < len__4829__auto___62040)){
args__4835__auto__.push((arguments[i__4830__auto___62041]));

var G__62042 = (i__4830__auto___62041 + (1));
i__4830__auto___62041 = G__62042;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61003 = conformed_args__59324__auto__;
var map__61003__$1 = cljs.core.__destructure_map(map__61003);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61003__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61003__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq61002){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61002));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62043 = arguments.length;
var i__4830__auto___62044 = (0);
while(true){
if((i__4830__auto___62044 < len__4829__auto___62043)){
args__4835__auto__.push((arguments[i__4830__auto___62044]));

var G__62045 = (i__4830__auto___62044 + (1));
i__4830__auto___62044 = G__62045;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61005 = conformed_args__59324__auto__;
var map__61005__$1 = cljs.core.__destructure_map(map__61005);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61005__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61005__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61005__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq61004){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61004));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62046 = arguments.length;
var i__4830__auto___62047 = (0);
while(true){
if((i__4830__auto___62047 < len__4829__auto___62046)){
args__4835__auto__.push((arguments[i__4830__auto___62047]));

var G__62048 = (i__4830__auto___62047 + (1));
i__4830__auto___62047 = G__62048;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61007 = conformed_args__59324__auto__;
var map__61007__$1 = cljs.core.__destructure_map(map__61007);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61007__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61007__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61007__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq61006){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61006));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62049 = arguments.length;
var i__4830__auto___62050 = (0);
while(true){
if((i__4830__auto___62050 < len__4829__auto___62049)){
args__4835__auto__.push((arguments[i__4830__auto___62050]));

var G__62051 = (i__4830__auto___62050 + (1));
i__4830__auto___62050 = G__62051;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61014 = conformed_args__59324__auto__;
var map__61014__$1 = cljs.core.__destructure_map(map__61014);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61014__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61014__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61014__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq61010){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61010));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62060 = arguments.length;
var i__4830__auto___62061 = (0);
while(true){
if((i__4830__auto___62061 < len__4829__auto___62060)){
args__4835__auto__.push((arguments[i__4830__auto___62061]));

var G__62062 = (i__4830__auto___62061 + (1));
i__4830__auto___62061 = G__62062;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61016 = conformed_args__59324__auto__;
var map__61016__$1 = cljs.core.__destructure_map(map__61016);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61016__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61016__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61016__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq61015){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61015));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62063 = arguments.length;
var i__4830__auto___62064 = (0);
while(true){
if((i__4830__auto___62064 < len__4829__auto___62063)){
args__4835__auto__.push((arguments[i__4830__auto___62064]));

var G__62065 = (i__4830__auto___62064 + (1));
i__4830__auto___62064 = G__62065;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61019 = conformed_args__59324__auto__;
var map__61019__$1 = cljs.core.__destructure_map(map__61019);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61019__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61019__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61019__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq61017){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61017));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62068 = arguments.length;
var i__4830__auto___62069 = (0);
while(true){
if((i__4830__auto___62069 < len__4829__auto___62068)){
args__4835__auto__.push((arguments[i__4830__auto___62069]));

var G__62070 = (i__4830__auto___62069 + (1));
i__4830__auto___62069 = G__62070;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61023 = conformed_args__59324__auto__;
var map__61023__$1 = cljs.core.__destructure_map(map__61023);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61023__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61023__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61023__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq61020){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61020));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62075 = arguments.length;
var i__4830__auto___62076 = (0);
while(true){
if((i__4830__auto___62076 < len__4829__auto___62075)){
args__4835__auto__.push((arguments[i__4830__auto___62076]));

var G__62077 = (i__4830__auto___62076 + (1));
i__4830__auto___62076 = G__62077;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61030 = conformed_args__59324__auto__;
var map__61030__$1 = cljs.core.__destructure_map(map__61030);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61030__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61030__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61030__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq61026){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61026));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62080 = arguments.length;
var i__4830__auto___62081 = (0);
while(true){
if((i__4830__auto___62081 < len__4829__auto___62080)){
args__4835__auto__.push((arguments[i__4830__auto___62081]));

var G__62082 = (i__4830__auto___62081 + (1));
i__4830__auto___62081 = G__62082;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61038 = conformed_args__59324__auto__;
var map__61038__$1 = cljs.core.__destructure_map(map__61038);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61038__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61038__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61038__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq61032){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61032));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62083 = arguments.length;
var i__4830__auto___62084 = (0);
while(true){
if((i__4830__auto___62084 < len__4829__auto___62083)){
args__4835__auto__.push((arguments[i__4830__auto___62084]));

var G__62085 = (i__4830__auto___62084 + (1));
i__4830__auto___62084 = G__62085;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61040 = conformed_args__59324__auto__;
var map__61040__$1 = cljs.core.__destructure_map(map__61040);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61040__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61040__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61040__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq61039){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61039));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62086 = arguments.length;
var i__4830__auto___62087 = (0);
while(true){
if((i__4830__auto___62087 < len__4829__auto___62086)){
args__4835__auto__.push((arguments[i__4830__auto___62087]));

var G__62088 = (i__4830__auto___62087 + (1));
i__4830__auto___62087 = G__62088;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61044 = conformed_args__59324__auto__;
var map__61044__$1 = cljs.core.__destructure_map(map__61044);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61044__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61044__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61044__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq61042){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61042));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62089 = arguments.length;
var i__4830__auto___62090 = (0);
while(true){
if((i__4830__auto___62090 < len__4829__auto___62089)){
args__4835__auto__.push((arguments[i__4830__auto___62090]));

var G__62092 = (i__4830__auto___62090 + (1));
i__4830__auto___62090 = G__62092;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61046 = conformed_args__59324__auto__;
var map__61046__$1 = cljs.core.__destructure_map(map__61046);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61046__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61046__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61046__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq61045){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61045));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62093 = arguments.length;
var i__4830__auto___62094 = (0);
while(true){
if((i__4830__auto___62094 < len__4829__auto___62093)){
args__4835__auto__.push((arguments[i__4830__auto___62094]));

var G__62095 = (i__4830__auto___62094 + (1));
i__4830__auto___62094 = G__62095;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61048 = conformed_args__59324__auto__;
var map__61048__$1 = cljs.core.__destructure_map(map__61048);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61048__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61048__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61048__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq61047){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61047));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62096 = arguments.length;
var i__4830__auto___62097 = (0);
while(true){
if((i__4830__auto___62097 < len__4829__auto___62096)){
args__4835__auto__.push((arguments[i__4830__auto___62097]));

var G__62098 = (i__4830__auto___62097 + (1));
i__4830__auto___62097 = G__62098;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61050 = conformed_args__59324__auto__;
var map__61050__$1 = cljs.core.__destructure_map(map__61050);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61050__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61050__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61050__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq61049){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61049));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62100 = arguments.length;
var i__4830__auto___62101 = (0);
while(true){
if((i__4830__auto___62101 < len__4829__auto___62100)){
args__4835__auto__.push((arguments[i__4830__auto___62101]));

var G__62102 = (i__4830__auto___62101 + (1));
i__4830__auto___62101 = G__62102;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61052 = conformed_args__59324__auto__;
var map__61052__$1 = cljs.core.__destructure_map(map__61052);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61052__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61052__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61052__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq61051){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61051));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62105 = arguments.length;
var i__4830__auto___62106 = (0);
while(true){
if((i__4830__auto___62106 < len__4829__auto___62105)){
args__4835__auto__.push((arguments[i__4830__auto___62106]));

var G__62107 = (i__4830__auto___62106 + (1));
i__4830__auto___62106 = G__62107;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61054 = conformed_args__59324__auto__;
var map__61054__$1 = cljs.core.__destructure_map(map__61054);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61054__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61054__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61054__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq61053){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61053));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62115 = arguments.length;
var i__4830__auto___62116 = (0);
while(true){
if((i__4830__auto___62116 < len__4829__auto___62115)){
args__4835__auto__.push((arguments[i__4830__auto___62116]));

var G__62117 = (i__4830__auto___62116 + (1));
i__4830__auto___62116 = G__62117;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61059 = conformed_args__59324__auto__;
var map__61059__$1 = cljs.core.__destructure_map(map__61059);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61059__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61059__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61059__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq61057){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61057));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62118 = arguments.length;
var i__4830__auto___62119 = (0);
while(true){
if((i__4830__auto___62119 < len__4829__auto___62118)){
args__4835__auto__.push((arguments[i__4830__auto___62119]));

var G__62120 = (i__4830__auto___62119 + (1));
i__4830__auto___62119 = G__62120;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61063 = conformed_args__59324__auto__;
var map__61063__$1 = cljs.core.__destructure_map(map__61063);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61063__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61063__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61063__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq61062){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61062));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62122 = arguments.length;
var i__4830__auto___62123 = (0);
while(true){
if((i__4830__auto___62123 < len__4829__auto___62122)){
args__4835__auto__.push((arguments[i__4830__auto___62123]));

var G__62124 = (i__4830__auto___62123 + (1));
i__4830__auto___62123 = G__62124;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61065 = conformed_args__59324__auto__;
var map__61065__$1 = cljs.core.__destructure_map(map__61065);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61065__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61065__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61065__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq61064){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61064));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62125 = arguments.length;
var i__4830__auto___62126 = (0);
while(true){
if((i__4830__auto___62126 < len__4829__auto___62125)){
args__4835__auto__.push((arguments[i__4830__auto___62126]));

var G__62127 = (i__4830__auto___62126 + (1));
i__4830__auto___62126 = G__62127;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61068 = conformed_args__59324__auto__;
var map__61068__$1 = cljs.core.__destructure_map(map__61068);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61068__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61068__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61068__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq61067){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61067));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62128 = arguments.length;
var i__4830__auto___62129 = (0);
while(true){
if((i__4830__auto___62129 < len__4829__auto___62128)){
args__4835__auto__.push((arguments[i__4830__auto___62129]));

var G__62130 = (i__4830__auto___62129 + (1));
i__4830__auto___62129 = G__62130;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61070 = conformed_args__59324__auto__;
var map__61070__$1 = cljs.core.__destructure_map(map__61070);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61070__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61070__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61070__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq61069){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61069));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62131 = arguments.length;
var i__4830__auto___62132 = (0);
while(true){
if((i__4830__auto___62132 < len__4829__auto___62131)){
args__4835__auto__.push((arguments[i__4830__auto___62132]));

var G__62133 = (i__4830__auto___62132 + (1));
i__4830__auto___62132 = G__62133;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61073 = conformed_args__59324__auto__;
var map__61073__$1 = cljs.core.__destructure_map(map__61073);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61073__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61073__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq61072){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61072));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62135 = arguments.length;
var i__4830__auto___62136 = (0);
while(true){
if((i__4830__auto___62136 < len__4829__auto___62135)){
args__4835__auto__.push((arguments[i__4830__auto___62136]));

var G__62137 = (i__4830__auto___62136 + (1));
i__4830__auto___62136 = G__62137;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61076 = conformed_args__59324__auto__;
var map__61076__$1 = cljs.core.__destructure_map(map__61076);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61076__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61076__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61076__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq61075){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61075));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62138 = arguments.length;
var i__4830__auto___62139 = (0);
while(true){
if((i__4830__auto___62139 < len__4829__auto___62138)){
args__4835__auto__.push((arguments[i__4830__auto___62139]));

var G__62140 = (i__4830__auto___62139 + (1));
i__4830__auto___62139 = G__62140;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61078 = conformed_args__59324__auto__;
var map__61078__$1 = cljs.core.__destructure_map(map__61078);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61078__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61078__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61078__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq61077){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61077));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62141 = arguments.length;
var i__4830__auto___62142 = (0);
while(true){
if((i__4830__auto___62142 < len__4829__auto___62141)){
args__4835__auto__.push((arguments[i__4830__auto___62142]));

var G__62143 = (i__4830__auto___62142 + (1));
i__4830__auto___62142 = G__62143;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61080 = conformed_args__59324__auto__;
var map__61080__$1 = cljs.core.__destructure_map(map__61080);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61080__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61080__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61080__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq61079){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61079));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62144 = arguments.length;
var i__4830__auto___62145 = (0);
while(true){
if((i__4830__auto___62145 < len__4829__auto___62144)){
args__4835__auto__.push((arguments[i__4830__auto___62145]));

var G__62146 = (i__4830__auto___62145 + (1));
i__4830__auto___62145 = G__62146;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61082 = conformed_args__59324__auto__;
var map__61082__$1 = cljs.core.__destructure_map(map__61082);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61082__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61082__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61082__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq61081){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61081));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62147 = arguments.length;
var i__4830__auto___62148 = (0);
while(true){
if((i__4830__auto___62148 < len__4829__auto___62147)){
args__4835__auto__.push((arguments[i__4830__auto___62148]));

var G__62149 = (i__4830__auto___62148 + (1));
i__4830__auto___62148 = G__62149;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61084 = conformed_args__59324__auto__;
var map__61084__$1 = cljs.core.__destructure_map(map__61084);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61084__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61084__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61084__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq61083){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61083));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62150 = arguments.length;
var i__4830__auto___62151 = (0);
while(true){
if((i__4830__auto___62151 < len__4829__auto___62150)){
args__4835__auto__.push((arguments[i__4830__auto___62151]));

var G__62152 = (i__4830__auto___62151 + (1));
i__4830__auto___62151 = G__62152;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61086 = conformed_args__59324__auto__;
var map__61086__$1 = cljs.core.__destructure_map(map__61086);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61086__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61086__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61086__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq61085){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61085));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62153 = arguments.length;
var i__4830__auto___62154 = (0);
while(true){
if((i__4830__auto___62154 < len__4829__auto___62153)){
args__4835__auto__.push((arguments[i__4830__auto___62154]));

var G__62155 = (i__4830__auto___62154 + (1));
i__4830__auto___62154 = G__62155;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61088 = conformed_args__59324__auto__;
var map__61088__$1 = cljs.core.__destructure_map(map__61088);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61088__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61088__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61088__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq61087){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61087));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62156 = arguments.length;
var i__4830__auto___62157 = (0);
while(true){
if((i__4830__auto___62157 < len__4829__auto___62156)){
args__4835__auto__.push((arguments[i__4830__auto___62157]));

var G__62158 = (i__4830__auto___62157 + (1));
i__4830__auto___62157 = G__62158;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61092 = conformed_args__59324__auto__;
var map__61092__$1 = cljs.core.__destructure_map(map__61092);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61092__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61092__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61092__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq61089){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61089));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62159 = arguments.length;
var i__4830__auto___62160 = (0);
while(true){
if((i__4830__auto___62160 < len__4829__auto___62159)){
args__4835__auto__.push((arguments[i__4830__auto___62160]));

var G__62161 = (i__4830__auto___62160 + (1));
i__4830__auto___62160 = G__62161;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61123 = conformed_args__59324__auto__;
var map__61123__$1 = cljs.core.__destructure_map(map__61123);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61123__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61123__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61123__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq61095){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61095));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62164 = arguments.length;
var i__4830__auto___62165 = (0);
while(true){
if((i__4830__auto___62165 < len__4829__auto___62164)){
args__4835__auto__.push((arguments[i__4830__auto___62165]));

var G__62166 = (i__4830__auto___62165 + (1));
i__4830__auto___62165 = G__62166;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61167 = conformed_args__59324__auto__;
var map__61167__$1 = cljs.core.__destructure_map(map__61167);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61167__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61167__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61167__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq61126){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61126));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62168 = arguments.length;
var i__4830__auto___62169 = (0);
while(true){
if((i__4830__auto___62169 < len__4829__auto___62168)){
args__4835__auto__.push((arguments[i__4830__auto___62169]));

var G__62170 = (i__4830__auto___62169 + (1));
i__4830__auto___62169 = G__62170;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61172 = conformed_args__59324__auto__;
var map__61172__$1 = cljs.core.__destructure_map(map__61172);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq61168){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61168));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62172 = arguments.length;
var i__4830__auto___62173 = (0);
while(true){
if((i__4830__auto___62173 < len__4829__auto___62172)){
args__4835__auto__.push((arguments[i__4830__auto___62173]));

var G__62174 = (i__4830__auto___62173 + (1));
i__4830__auto___62173 = G__62174;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61184 = conformed_args__59324__auto__;
var map__61184__$1 = cljs.core.__destructure_map(map__61184);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61184__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61184__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61184__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq61179){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61179));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62176 = arguments.length;
var i__4830__auto___62177 = (0);
while(true){
if((i__4830__auto___62177 < len__4829__auto___62176)){
args__4835__auto__.push((arguments[i__4830__auto___62177]));

var G__62178 = (i__4830__auto___62177 + (1));
i__4830__auto___62177 = G__62178;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61197 = conformed_args__59324__auto__;
var map__61197__$1 = cljs.core.__destructure_map(map__61197);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61197__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61197__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61197__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq61191){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61191));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62179 = arguments.length;
var i__4830__auto___62180 = (0);
while(true){
if((i__4830__auto___62180 < len__4829__auto___62179)){
args__4835__auto__.push((arguments[i__4830__auto___62180]));

var G__62181 = (i__4830__auto___62180 + (1));
i__4830__auto___62180 = G__62181;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61209 = conformed_args__59324__auto__;
var map__61209__$1 = cljs.core.__destructure_map(map__61209);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61209__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61209__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61209__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq61203){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61203));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62183 = arguments.length;
var i__4830__auto___62184 = (0);
while(true){
if((i__4830__auto___62184 < len__4829__auto___62183)){
args__4835__auto__.push((arguments[i__4830__auto___62184]));

var G__62185 = (i__4830__auto___62184 + (1));
i__4830__auto___62184 = G__62185;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61213 = conformed_args__59324__auto__;
var map__61213__$1 = cljs.core.__destructure_map(map__61213);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61213__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61213__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61213__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq61211){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61211));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62192 = arguments.length;
var i__4830__auto___62193 = (0);
while(true){
if((i__4830__auto___62193 < len__4829__auto___62192)){
args__4835__auto__.push((arguments[i__4830__auto___62193]));

var G__62194 = (i__4830__auto___62193 + (1));
i__4830__auto___62193 = G__62194;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61219 = conformed_args__59324__auto__;
var map__61219__$1 = cljs.core.__destructure_map(map__61219);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61219__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61219__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61219__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq61214){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61214));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62198 = arguments.length;
var i__4830__auto___62199 = (0);
while(true){
if((i__4830__auto___62199 < len__4829__auto___62198)){
args__4835__auto__.push((arguments[i__4830__auto___62199]));

var G__62200 = (i__4830__auto___62199 + (1));
i__4830__auto___62199 = G__62200;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61227 = conformed_args__59324__auto__;
var map__61227__$1 = cljs.core.__destructure_map(map__61227);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61227__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61227__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq61221){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61221));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62206 = arguments.length;
var i__4830__auto___62209 = (0);
while(true){
if((i__4830__auto___62209 < len__4829__auto___62206)){
args__4835__auto__.push((arguments[i__4830__auto___62209]));

var G__62210 = (i__4830__auto___62209 + (1));
i__4830__auto___62209 = G__62210;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61235 = conformed_args__59324__auto__;
var map__61235__$1 = cljs.core.__destructure_map(map__61235);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61235__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61235__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61235__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq61230){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61230));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62216 = arguments.length;
var i__4830__auto___62217 = (0);
while(true){
if((i__4830__auto___62217 < len__4829__auto___62216)){
args__4835__auto__.push((arguments[i__4830__auto___62217]));

var G__62218 = (i__4830__auto___62217 + (1));
i__4830__auto___62217 = G__62218;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61248 = conformed_args__59324__auto__;
var map__61248__$1 = cljs.core.__destructure_map(map__61248);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61248__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61248__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61248__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq61241){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61241));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62228 = arguments.length;
var i__4830__auto___62229 = (0);
while(true){
if((i__4830__auto___62229 < len__4829__auto___62228)){
args__4835__auto__.push((arguments[i__4830__auto___62229]));

var G__62230 = (i__4830__auto___62229 + (1));
i__4830__auto___62229 = G__62230;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61261 = conformed_args__59324__auto__;
var map__61261__$1 = cljs.core.__destructure_map(map__61261);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61261__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61261__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61261__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq61259){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61259));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62231 = arguments.length;
var i__4830__auto___62232 = (0);
while(true){
if((i__4830__auto___62232 < len__4829__auto___62231)){
args__4835__auto__.push((arguments[i__4830__auto___62232]));

var G__62233 = (i__4830__auto___62232 + (1));
i__4830__auto___62232 = G__62233;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61271 = conformed_args__59324__auto__;
var map__61271__$1 = cljs.core.__destructure_map(map__61271);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61271__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61271__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61271__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq61267){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61267));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62234 = arguments.length;
var i__4830__auto___62235 = (0);
while(true){
if((i__4830__auto___62235 < len__4829__auto___62234)){
args__4835__auto__.push((arguments[i__4830__auto___62235]));

var G__62236 = (i__4830__auto___62235 + (1));
i__4830__auto___62235 = G__62236;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61280 = conformed_args__59324__auto__;
var map__61280__$1 = cljs.core.__destructure_map(map__61280);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61280__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61280__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61280__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq61276){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61276));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62237 = arguments.length;
var i__4830__auto___62238 = (0);
while(true){
if((i__4830__auto___62238 < len__4829__auto___62237)){
args__4835__auto__.push((arguments[i__4830__auto___62238]));

var G__62239 = (i__4830__auto___62238 + (1));
i__4830__auto___62238 = G__62239;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61295 = conformed_args__59324__auto__;
var map__61295__$1 = cljs.core.__destructure_map(map__61295);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61295__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61295__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq61284){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61284));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62240 = arguments.length;
var i__4830__auto___62241 = (0);
while(true){
if((i__4830__auto___62241 < len__4829__auto___62240)){
args__4835__auto__.push((arguments[i__4830__auto___62241]));

var G__62242 = (i__4830__auto___62241 + (1));
i__4830__auto___62241 = G__62242;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61300 = conformed_args__59324__auto__;
var map__61300__$1 = cljs.core.__destructure_map(map__61300);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61300__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61300__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61300__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq61298){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61298));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62245 = arguments.length;
var i__4830__auto___62246 = (0);
while(true){
if((i__4830__auto___62246 < len__4829__auto___62245)){
args__4835__auto__.push((arguments[i__4830__auto___62246]));

var G__62247 = (i__4830__auto___62246 + (1));
i__4830__auto___62246 = G__62247;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61313 = conformed_args__59324__auto__;
var map__61313__$1 = cljs.core.__destructure_map(map__61313);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61313__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61313__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61313__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq61309){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61309));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62252 = arguments.length;
var i__4830__auto___62253 = (0);
while(true){
if((i__4830__auto___62253 < len__4829__auto___62252)){
args__4835__auto__.push((arguments[i__4830__auto___62253]));

var G__62254 = (i__4830__auto___62253 + (1));
i__4830__auto___62253 = G__62254;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61323 = conformed_args__59324__auto__;
var map__61323__$1 = cljs.core.__destructure_map(map__61323);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61323__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61323__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61323__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq61317){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61317));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62255 = arguments.length;
var i__4830__auto___62256 = (0);
while(true){
if((i__4830__auto___62256 < len__4829__auto___62255)){
args__4835__auto__.push((arguments[i__4830__auto___62256]));

var G__62257 = (i__4830__auto___62256 + (1));
i__4830__auto___62256 = G__62257;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61331 = conformed_args__59324__auto__;
var map__61331__$1 = cljs.core.__destructure_map(map__61331);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61331__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61331__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61331__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq61327){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61327));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62258 = arguments.length;
var i__4830__auto___62259 = (0);
while(true){
if((i__4830__auto___62259 < len__4829__auto___62258)){
args__4835__auto__.push((arguments[i__4830__auto___62259]));

var G__62260 = (i__4830__auto___62259 + (1));
i__4830__auto___62259 = G__62260;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61341 = conformed_args__59324__auto__;
var map__61341__$1 = cljs.core.__destructure_map(map__61341);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61341__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61341__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61341__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq61332){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61332));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62261 = arguments.length;
var i__4830__auto___62262 = (0);
while(true){
if((i__4830__auto___62262 < len__4829__auto___62261)){
args__4835__auto__.push((arguments[i__4830__auto___62262]));

var G__62264 = (i__4830__auto___62262 + (1));
i__4830__auto___62262 = G__62264;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61343 = conformed_args__59324__auto__;
var map__61343__$1 = cljs.core.__destructure_map(map__61343);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61343__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61343__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61343__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq61342){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61342));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62266 = arguments.length;
var i__4830__auto___62267 = (0);
while(true){
if((i__4830__auto___62267 < len__4829__auto___62266)){
args__4835__auto__.push((arguments[i__4830__auto___62267]));

var G__62268 = (i__4830__auto___62267 + (1));
i__4830__auto___62267 = G__62268;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61350 = conformed_args__59324__auto__;
var map__61350__$1 = cljs.core.__destructure_map(map__61350);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61350__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61350__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61350__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq61346){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61346));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62271 = arguments.length;
var i__4830__auto___62272 = (0);
while(true){
if((i__4830__auto___62272 < len__4829__auto___62271)){
args__4835__auto__.push((arguments[i__4830__auto___62272]));

var G__62273 = (i__4830__auto___62272 + (1));
i__4830__auto___62272 = G__62273;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61356 = conformed_args__59324__auto__;
var map__61356__$1 = cljs.core.__destructure_map(map__61356);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61356__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq61351){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61351));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62274 = arguments.length;
var i__4830__auto___62275 = (0);
while(true){
if((i__4830__auto___62275 < len__4829__auto___62274)){
args__4835__auto__.push((arguments[i__4830__auto___62275]));

var G__62276 = (i__4830__auto___62275 + (1));
i__4830__auto___62275 = G__62276;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61369 = conformed_args__59324__auto__;
var map__61369__$1 = cljs.core.__destructure_map(map__61369);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61369__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61369__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61369__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq61358){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61358));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62277 = arguments.length;
var i__4830__auto___62278 = (0);
while(true){
if((i__4830__auto___62278 < len__4829__auto___62277)){
args__4835__auto__.push((arguments[i__4830__auto___62278]));

var G__62279 = (i__4830__auto___62278 + (1));
i__4830__auto___62278 = G__62279;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61380 = conformed_args__59324__auto__;
var map__61380__$1 = cljs.core.__destructure_map(map__61380);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61380__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61380__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61380__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq61378){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61378));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62282 = arguments.length;
var i__4830__auto___62283 = (0);
while(true){
if((i__4830__auto___62283 < len__4829__auto___62282)){
args__4835__auto__.push((arguments[i__4830__auto___62283]));

var G__62284 = (i__4830__auto___62283 + (1));
i__4830__auto___62283 = G__62284;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61383 = conformed_args__59324__auto__;
var map__61383__$1 = cljs.core.__destructure_map(map__61383);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61383__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61383__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61383__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq61381){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61381));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62287 = arguments.length;
var i__4830__auto___62288 = (0);
while(true){
if((i__4830__auto___62288 < len__4829__auto___62287)){
args__4835__auto__.push((arguments[i__4830__auto___62288]));

var G__62289 = (i__4830__auto___62288 + (1));
i__4830__auto___62288 = G__62289;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61389 = conformed_args__59324__auto__;
var map__61389__$1 = cljs.core.__destructure_map(map__61389);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61389__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61389__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61389__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq61385){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61385));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62292 = arguments.length;
var i__4830__auto___62293 = (0);
while(true){
if((i__4830__auto___62293 < len__4829__auto___62292)){
args__4835__auto__.push((arguments[i__4830__auto___62293]));

var G__62294 = (i__4830__auto___62293 + (1));
i__4830__auto___62293 = G__62294;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61393 = conformed_args__59324__auto__;
var map__61393__$1 = cljs.core.__destructure_map(map__61393);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61393__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61393__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61393__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq61392){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61392));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62301 = arguments.length;
var i__4830__auto___62302 = (0);
while(true){
if((i__4830__auto___62302 < len__4829__auto___62301)){
args__4835__auto__.push((arguments[i__4830__auto___62302]));

var G__62303 = (i__4830__auto___62302 + (1));
i__4830__auto___62302 = G__62303;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61407 = conformed_args__59324__auto__;
var map__61407__$1 = cljs.core.__destructure_map(map__61407);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61407__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61407__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61407__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq61399){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61399));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62304 = arguments.length;
var i__4830__auto___62305 = (0);
while(true){
if((i__4830__auto___62305 < len__4829__auto___62304)){
args__4835__auto__.push((arguments[i__4830__auto___62305]));

var G__62306 = (i__4830__auto___62305 + (1));
i__4830__auto___62305 = G__62306;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61411 = conformed_args__59324__auto__;
var map__61411__$1 = cljs.core.__destructure_map(map__61411);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61411__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61411__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61411__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq61409){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61409));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62309 = arguments.length;
var i__4830__auto___62310 = (0);
while(true){
if((i__4830__auto___62310 < len__4829__auto___62309)){
args__4835__auto__.push((arguments[i__4830__auto___62310]));

var G__62311 = (i__4830__auto___62310 + (1));
i__4830__auto___62310 = G__62311;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61416 = conformed_args__59324__auto__;
var map__61416__$1 = cljs.core.__destructure_map(map__61416);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61416__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61416__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61416__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq61414){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61414));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62312 = arguments.length;
var i__4830__auto___62313 = (0);
while(true){
if((i__4830__auto___62313 < len__4829__auto___62312)){
args__4835__auto__.push((arguments[i__4830__auto___62313]));

var G__62314 = (i__4830__auto___62313 + (1));
i__4830__auto___62313 = G__62314;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61425 = conformed_args__59324__auto__;
var map__61425__$1 = cljs.core.__destructure_map(map__61425);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61425__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61425__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61425__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq61420){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61420));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62319 = arguments.length;
var i__4830__auto___62320 = (0);
while(true){
if((i__4830__auto___62320 < len__4829__auto___62319)){
args__4835__auto__.push((arguments[i__4830__auto___62320]));

var G__62321 = (i__4830__auto___62320 + (1));
i__4830__auto___62320 = G__62321;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61433 = conformed_args__59324__auto__;
var map__61433__$1 = cljs.core.__destructure_map(map__61433);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61433__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61433__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61433__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq61428){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61428));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62324 = arguments.length;
var i__4830__auto___62325 = (0);
while(true){
if((i__4830__auto___62325 < len__4829__auto___62324)){
args__4835__auto__.push((arguments[i__4830__auto___62325]));

var G__62326 = (i__4830__auto___62325 + (1));
i__4830__auto___62325 = G__62326;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61442 = conformed_args__59324__auto__;
var map__61442__$1 = cljs.core.__destructure_map(map__61442);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61442__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61442__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61442__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq61437){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61437));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62330 = arguments.length;
var i__4830__auto___62331 = (0);
while(true){
if((i__4830__auto___62331 < len__4829__auto___62330)){
args__4835__auto__.push((arguments[i__4830__auto___62331]));

var G__62332 = (i__4830__auto___62331 + (1));
i__4830__auto___62331 = G__62332;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61450 = conformed_args__59324__auto__;
var map__61450__$1 = cljs.core.__destructure_map(map__61450);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61450__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61450__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61450__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq61449){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61449));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62334 = arguments.length;
var i__4830__auto___62335 = (0);
while(true){
if((i__4830__auto___62335 < len__4829__auto___62334)){
args__4835__auto__.push((arguments[i__4830__auto___62335]));

var G__62336 = (i__4830__auto___62335 + (1));
i__4830__auto___62335 = G__62336;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61460 = conformed_args__59324__auto__;
var map__61460__$1 = cljs.core.__destructure_map(map__61460);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61460__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61460__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61460__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq61457){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61457));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62337 = arguments.length;
var i__4830__auto___62338 = (0);
while(true){
if((i__4830__auto___62338 < len__4829__auto___62337)){
args__4835__auto__.push((arguments[i__4830__auto___62338]));

var G__62339 = (i__4830__auto___62338 + (1));
i__4830__auto___62338 = G__62339;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61471 = conformed_args__59324__auto__;
var map__61471__$1 = cljs.core.__destructure_map(map__61471);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61471__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61471__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61471__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq61466){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61466));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62340 = arguments.length;
var i__4830__auto___62341 = (0);
while(true){
if((i__4830__auto___62341 < len__4829__auto___62340)){
args__4835__auto__.push((arguments[i__4830__auto___62341]));

var G__62342 = (i__4830__auto___62341 + (1));
i__4830__auto___62341 = G__62342;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61478 = conformed_args__59324__auto__;
var map__61478__$1 = cljs.core.__destructure_map(map__61478);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61478__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61478__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61478__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq61475){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61475));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62344 = arguments.length;
var i__4830__auto___62345 = (0);
while(true){
if((i__4830__auto___62345 < len__4829__auto___62344)){
args__4835__auto__.push((arguments[i__4830__auto___62345]));

var G__62346 = (i__4830__auto___62345 + (1));
i__4830__auto___62345 = G__62346;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61485 = conformed_args__59324__auto__;
var map__61485__$1 = cljs.core.__destructure_map(map__61485);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61485__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61485__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61485__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq61483){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61483));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62349 = arguments.length;
var i__4830__auto___62350 = (0);
while(true){
if((i__4830__auto___62350 < len__4829__auto___62349)){
args__4835__auto__.push((arguments[i__4830__auto___62350]));

var G__62351 = (i__4830__auto___62350 + (1));
i__4830__auto___62350 = G__62351;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61489 = conformed_args__59324__auto__;
var map__61489__$1 = cljs.core.__destructure_map(map__61489);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61489__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61489__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61489__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq61487){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61487));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62353 = arguments.length;
var i__4830__auto___62354 = (0);
while(true){
if((i__4830__auto___62354 < len__4829__auto___62353)){
args__4835__auto__.push((arguments[i__4830__auto___62354]));

var G__62355 = (i__4830__auto___62354 + (1));
i__4830__auto___62354 = G__62355;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61497 = conformed_args__59324__auto__;
var map__61497__$1 = cljs.core.__destructure_map(map__61497);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61497__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61497__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61497__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq61493){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61493));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62356 = arguments.length;
var i__4830__auto___62357 = (0);
while(true){
if((i__4830__auto___62357 < len__4829__auto___62356)){
args__4835__auto__.push((arguments[i__4830__auto___62357]));

var G__62358 = (i__4830__auto___62357 + (1));
i__4830__auto___62357 = G__62358;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61499 = conformed_args__59324__auto__;
var map__61499__$1 = cljs.core.__destructure_map(map__61499);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61499__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61499__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61499__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq61498){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61498));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62359 = arguments.length;
var i__4830__auto___62360 = (0);
while(true){
if((i__4830__auto___62360 < len__4829__auto___62359)){
args__4835__auto__.push((arguments[i__4830__auto___62360]));

var G__62361 = (i__4830__auto___62360 + (1));
i__4830__auto___62360 = G__62361;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61511 = conformed_args__59324__auto__;
var map__61511__$1 = cljs.core.__destructure_map(map__61511);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61511__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61511__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61511__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq61503){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61503));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62363 = arguments.length;
var i__4830__auto___62364 = (0);
while(true){
if((i__4830__auto___62364 < len__4829__auto___62363)){
args__4835__auto__.push((arguments[i__4830__auto___62364]));

var G__62365 = (i__4830__auto___62364 + (1));
i__4830__auto___62364 = G__62365;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61515 = conformed_args__59324__auto__;
var map__61515__$1 = cljs.core.__destructure_map(map__61515);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61515__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61515__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61515__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq61512){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61512));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62366 = arguments.length;
var i__4830__auto___62367 = (0);
while(true){
if((i__4830__auto___62367 < len__4829__auto___62366)){
args__4835__auto__.push((arguments[i__4830__auto___62367]));

var G__62368 = (i__4830__auto___62367 + (1));
i__4830__auto___62367 = G__62368;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61522 = conformed_args__59324__auto__;
var map__61522__$1 = cljs.core.__destructure_map(map__61522);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61522__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61522__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq61516){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61516));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62370 = arguments.length;
var i__4830__auto___62371 = (0);
while(true){
if((i__4830__auto___62371 < len__4829__auto___62370)){
args__4835__auto__.push((arguments[i__4830__auto___62371]));

var G__62373 = (i__4830__auto___62371 + (1));
i__4830__auto___62371 = G__62373;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61524 = conformed_args__59324__auto__;
var map__61524__$1 = cljs.core.__destructure_map(map__61524);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61524__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61524__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61524__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq61523){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61523));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62374 = arguments.length;
var i__4830__auto___62375 = (0);
while(true){
if((i__4830__auto___62375 < len__4829__auto___62374)){
args__4835__auto__.push((arguments[i__4830__auto___62375]));

var G__62376 = (i__4830__auto___62375 + (1));
i__4830__auto___62375 = G__62376;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61534 = conformed_args__59324__auto__;
var map__61534__$1 = cljs.core.__destructure_map(map__61534);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61534__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61534__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61534__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq61527){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61527));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62378 = arguments.length;
var i__4830__auto___62379 = (0);
while(true){
if((i__4830__auto___62379 < len__4829__auto___62378)){
args__4835__auto__.push((arguments[i__4830__auto___62379]));

var G__62381 = (i__4830__auto___62379 + (1));
i__4830__auto___62379 = G__62381;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61545 = conformed_args__59324__auto__;
var map__61545__$1 = cljs.core.__destructure_map(map__61545);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61545__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61545__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61545__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq61539){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61539));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62384 = arguments.length;
var i__4830__auto___62385 = (0);
while(true){
if((i__4830__auto___62385 < len__4829__auto___62384)){
args__4835__auto__.push((arguments[i__4830__auto___62385]));

var G__62386 = (i__4830__auto___62385 + (1));
i__4830__auto___62385 = G__62386;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61558 = conformed_args__59324__auto__;
var map__61558__$1 = cljs.core.__destructure_map(map__61558);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61558__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61558__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61558__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq61552){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61552));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62388 = arguments.length;
var i__4830__auto___62389 = (0);
while(true){
if((i__4830__auto___62389 < len__4829__auto___62388)){
args__4835__auto__.push((arguments[i__4830__auto___62389]));

var G__62390 = (i__4830__auto___62389 + (1));
i__4830__auto___62389 = G__62390;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61567 = conformed_args__59324__auto__;
var map__61567__$1 = cljs.core.__destructure_map(map__61567);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61567__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61567__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61567__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq61564){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61564));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62391 = arguments.length;
var i__4830__auto___62392 = (0);
while(true){
if((i__4830__auto___62392 < len__4829__auto___62391)){
args__4835__auto__.push((arguments[i__4830__auto___62392]));

var G__62394 = (i__4830__auto___62392 + (1));
i__4830__auto___62392 = G__62394;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61573 = conformed_args__59324__auto__;
var map__61573__$1 = cljs.core.__destructure_map(map__61573);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61573__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61573__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61573__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq61569){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61569));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62396 = arguments.length;
var i__4830__auto___62397 = (0);
while(true){
if((i__4830__auto___62397 < len__4829__auto___62396)){
args__4835__auto__.push((arguments[i__4830__auto___62397]));

var G__62398 = (i__4830__auto___62397 + (1));
i__4830__auto___62397 = G__62398;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61575 = conformed_args__59324__auto__;
var map__61575__$1 = cljs.core.__destructure_map(map__61575);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61575__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61575__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61575__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq61574){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61574));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62399 = arguments.length;
var i__4830__auto___62400 = (0);
while(true){
if((i__4830__auto___62400 < len__4829__auto___62399)){
args__4835__auto__.push((arguments[i__4830__auto___62400]));

var G__62401 = (i__4830__auto___62400 + (1));
i__4830__auto___62400 = G__62401;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61577 = conformed_args__59324__auto__;
var map__61577__$1 = cljs.core.__destructure_map(map__61577);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61577__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61577__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61577__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq61576){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61576));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62402 = arguments.length;
var i__4830__auto___62403 = (0);
while(true){
if((i__4830__auto___62403 < len__4829__auto___62402)){
args__4835__auto__.push((arguments[i__4830__auto___62403]));

var G__62404 = (i__4830__auto___62403 + (1));
i__4830__auto___62403 = G__62404;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61579 = conformed_args__59324__auto__;
var map__61579__$1 = cljs.core.__destructure_map(map__61579);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61579__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61579__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61579__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq61578){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61578));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62405 = arguments.length;
var i__4830__auto___62406 = (0);
while(true){
if((i__4830__auto___62406 < len__4829__auto___62405)){
args__4835__auto__.push((arguments[i__4830__auto___62406]));

var G__62407 = (i__4830__auto___62406 + (1));
i__4830__auto___62406 = G__62407;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61581 = conformed_args__59324__auto__;
var map__61581__$1 = cljs.core.__destructure_map(map__61581);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61581__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61581__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61581__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq61580){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61580));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62408 = arguments.length;
var i__4830__auto___62409 = (0);
while(true){
if((i__4830__auto___62409 < len__4829__auto___62408)){
args__4835__auto__.push((arguments[i__4830__auto___62409]));

var G__62410 = (i__4830__auto___62409 + (1));
i__4830__auto___62409 = G__62410;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61584 = conformed_args__59324__auto__;
var map__61584__$1 = cljs.core.__destructure_map(map__61584);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61584__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61584__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61584__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq61583){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61583));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62411 = arguments.length;
var i__4830__auto___62412 = (0);
while(true){
if((i__4830__auto___62412 < len__4829__auto___62411)){
args__4835__auto__.push((arguments[i__4830__auto___62412]));

var G__62413 = (i__4830__auto___62412 + (1));
i__4830__auto___62412 = G__62413;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61586 = conformed_args__59324__auto__;
var map__61586__$1 = cljs.core.__destructure_map(map__61586);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61586__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61586__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61586__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq61585){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61585));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62414 = arguments.length;
var i__4830__auto___62415 = (0);
while(true){
if((i__4830__auto___62415 < len__4829__auto___62414)){
args__4835__auto__.push((arguments[i__4830__auto___62415]));

var G__62416 = (i__4830__auto___62415 + (1));
i__4830__auto___62415 = G__62416;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61588 = conformed_args__59324__auto__;
var map__61588__$1 = cljs.core.__destructure_map(map__61588);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61588__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61588__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61588__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq61587){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61587));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62417 = arguments.length;
var i__4830__auto___62418 = (0);
while(true){
if((i__4830__auto___62418 < len__4829__auto___62417)){
args__4835__auto__.push((arguments[i__4830__auto___62418]));

var G__62419 = (i__4830__auto___62418 + (1));
i__4830__auto___62418 = G__62419;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61590 = conformed_args__59324__auto__;
var map__61590__$1 = cljs.core.__destructure_map(map__61590);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61590__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61590__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61590__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq61589){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61589));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62420 = arguments.length;
var i__4830__auto___62421 = (0);
while(true){
if((i__4830__auto___62421 < len__4829__auto___62420)){
args__4835__auto__.push((arguments[i__4830__auto___62421]));

var G__62422 = (i__4830__auto___62421 + (1));
i__4830__auto___62421 = G__62422;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61594 = conformed_args__59324__auto__;
var map__61594__$1 = cljs.core.__destructure_map(map__61594);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61594__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61594__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61594__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq61593){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61593));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62423 = arguments.length;
var i__4830__auto___62424 = (0);
while(true){
if((i__4830__auto___62424 < len__4829__auto___62423)){
args__4835__auto__.push((arguments[i__4830__auto___62424]));

var G__62425 = (i__4830__auto___62424 + (1));
i__4830__auto___62424 = G__62425;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61596 = conformed_args__59324__auto__;
var map__61596__$1 = cljs.core.__destructure_map(map__61596);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61596__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61596__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61596__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq61595){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61595));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62426 = arguments.length;
var i__4830__auto___62427 = (0);
while(true){
if((i__4830__auto___62427 < len__4829__auto___62426)){
args__4835__auto__.push((arguments[i__4830__auto___62427]));

var G__62428 = (i__4830__auto___62427 + (1));
i__4830__auto___62427 = G__62428;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61599 = conformed_args__59324__auto__;
var map__61599__$1 = cljs.core.__destructure_map(map__61599);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61599__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61599__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61599__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq61598){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61598));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62429 = arguments.length;
var i__4830__auto___62430 = (0);
while(true){
if((i__4830__auto___62430 < len__4829__auto___62429)){
args__4835__auto__.push((arguments[i__4830__auto___62430]));

var G__62431 = (i__4830__auto___62430 + (1));
i__4830__auto___62430 = G__62431;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61603 = conformed_args__59324__auto__;
var map__61603__$1 = cljs.core.__destructure_map(map__61603);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61603__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61603__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61603__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq61600){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61600));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62432 = arguments.length;
var i__4830__auto___62433 = (0);
while(true){
if((i__4830__auto___62433 < len__4829__auto___62432)){
args__4835__auto__.push((arguments[i__4830__auto___62433]));

var G__62434 = (i__4830__auto___62433 + (1));
i__4830__auto___62433 = G__62434;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61607 = conformed_args__59324__auto__;
var map__61607__$1 = cljs.core.__destructure_map(map__61607);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61607__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61607__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61607__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq61606){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61606));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62435 = arguments.length;
var i__4830__auto___62436 = (0);
while(true){
if((i__4830__auto___62436 < len__4829__auto___62435)){
args__4835__auto__.push((arguments[i__4830__auto___62436]));

var G__62437 = (i__4830__auto___62436 + (1));
i__4830__auto___62436 = G__62437;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61612 = conformed_args__59324__auto__;
var map__61612__$1 = cljs.core.__destructure_map(map__61612);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61612__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61612__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61612__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq61609){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61609));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62438 = arguments.length;
var i__4830__auto___62439 = (0);
while(true){
if((i__4830__auto___62439 < len__4829__auto___62438)){
args__4835__auto__.push((arguments[i__4830__auto___62439]));

var G__62440 = (i__4830__auto___62439 + (1));
i__4830__auto___62439 = G__62440;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61616 = conformed_args__59324__auto__;
var map__61616__$1 = cljs.core.__destructure_map(map__61616);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61616__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61616__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61616__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq61613){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61613));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62441 = arguments.length;
var i__4830__auto___62442 = (0);
while(true){
if((i__4830__auto___62442 < len__4829__auto___62441)){
args__4835__auto__.push((arguments[i__4830__auto___62442]));

var G__62443 = (i__4830__auto___62442 + (1));
i__4830__auto___62442 = G__62443;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61620 = conformed_args__59324__auto__;
var map__61620__$1 = cljs.core.__destructure_map(map__61620);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61620__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61620__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61620__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq61619){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61619));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62444 = arguments.length;
var i__4830__auto___62445 = (0);
while(true){
if((i__4830__auto___62445 < len__4829__auto___62444)){
args__4835__auto__.push((arguments[i__4830__auto___62445]));

var G__62446 = (i__4830__auto___62445 + (1));
i__4830__auto___62445 = G__62446;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61622 = conformed_args__59324__auto__;
var map__61622__$1 = cljs.core.__destructure_map(map__61622);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61622__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61622__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61622__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq61621){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61621));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62448 = arguments.length;
var i__4830__auto___62449 = (0);
while(true){
if((i__4830__auto___62449 < len__4829__auto___62448)){
args__4835__auto__.push((arguments[i__4830__auto___62449]));

var G__62450 = (i__4830__auto___62449 + (1));
i__4830__auto___62449 = G__62450;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61625 = conformed_args__59324__auto__;
var map__61625__$1 = cljs.core.__destructure_map(map__61625);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61625__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61625__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61625__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq61624){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61624));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62451 = arguments.length;
var i__4830__auto___62452 = (0);
while(true){
if((i__4830__auto___62452 < len__4829__auto___62451)){
args__4835__auto__.push((arguments[i__4830__auto___62452]));

var G__62453 = (i__4830__auto___62452 + (1));
i__4830__auto___62452 = G__62453;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61627 = conformed_args__59324__auto__;
var map__61627__$1 = cljs.core.__destructure_map(map__61627);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61627__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61627__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61627__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq61626){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61626));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62456 = arguments.length;
var i__4830__auto___62457 = (0);
while(true){
if((i__4830__auto___62457 < len__4829__auto___62456)){
args__4835__auto__.push((arguments[i__4830__auto___62457]));

var G__62458 = (i__4830__auto___62457 + (1));
i__4830__auto___62457 = G__62458;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61631 = conformed_args__59324__auto__;
var map__61631__$1 = cljs.core.__destructure_map(map__61631);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61631__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61631__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61631__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq61630){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61630));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62459 = arguments.length;
var i__4830__auto___62460 = (0);
while(true){
if((i__4830__auto___62460 < len__4829__auto___62459)){
args__4835__auto__.push((arguments[i__4830__auto___62460]));

var G__62461 = (i__4830__auto___62460 + (1));
i__4830__auto___62460 = G__62461;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61633 = conformed_args__59324__auto__;
var map__61633__$1 = cljs.core.__destructure_map(map__61633);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq61632){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61632));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62465 = arguments.length;
var i__4830__auto___62466 = (0);
while(true){
if((i__4830__auto___62466 < len__4829__auto___62465)){
args__4835__auto__.push((arguments[i__4830__auto___62466]));

var G__62468 = (i__4830__auto___62466 + (1));
i__4830__auto___62466 = G__62468;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61635 = conformed_args__59324__auto__;
var map__61635__$1 = cljs.core.__destructure_map(map__61635);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61635__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61635__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61635__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq61634){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61634));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62472 = arguments.length;
var i__4830__auto___62473 = (0);
while(true){
if((i__4830__auto___62473 < len__4829__auto___62472)){
args__4835__auto__.push((arguments[i__4830__auto___62473]));

var G__62474 = (i__4830__auto___62473 + (1));
i__4830__auto___62473 = G__62474;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61638 = conformed_args__59324__auto__;
var map__61638__$1 = cljs.core.__destructure_map(map__61638);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61638__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61638__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61638__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq61637){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61637));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62476 = arguments.length;
var i__4830__auto___62477 = (0);
while(true){
if((i__4830__auto___62477 < len__4829__auto___62476)){
args__4835__auto__.push((arguments[i__4830__auto___62477]));

var G__62478 = (i__4830__auto___62477 + (1));
i__4830__auto___62477 = G__62478;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61642 = conformed_args__59324__auto__;
var map__61642__$1 = cljs.core.__destructure_map(map__61642);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61642__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61642__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61642__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq61641){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61641));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62480 = arguments.length;
var i__4830__auto___62481 = (0);
while(true){
if((i__4830__auto___62481 < len__4829__auto___62480)){
args__4835__auto__.push((arguments[i__4830__auto___62481]));

var G__62482 = (i__4830__auto___62481 + (1));
i__4830__auto___62481 = G__62482;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61644 = conformed_args__59324__auto__;
var map__61644__$1 = cljs.core.__destructure_map(map__61644);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61644__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61644__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61644__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq61643){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61643));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62486 = arguments.length;
var i__4830__auto___62487 = (0);
while(true){
if((i__4830__auto___62487 < len__4829__auto___62486)){
args__4835__auto__.push((arguments[i__4830__auto___62487]));

var G__62488 = (i__4830__auto___62487 + (1));
i__4830__auto___62487 = G__62488;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61648 = conformed_args__59324__auto__;
var map__61648__$1 = cljs.core.__destructure_map(map__61648);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61648__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61648__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61648__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq61645){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61645));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62494 = arguments.length;
var i__4830__auto___62495 = (0);
while(true){
if((i__4830__auto___62495 < len__4829__auto___62494)){
args__4835__auto__.push((arguments[i__4830__auto___62495]));

var G__62496 = (i__4830__auto___62495 + (1));
i__4830__auto___62495 = G__62496;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61650 = conformed_args__59324__auto__;
var map__61650__$1 = cljs.core.__destructure_map(map__61650);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61650__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61650__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61650__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq61649){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61649));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62503 = arguments.length;
var i__4830__auto___62504 = (0);
while(true){
if((i__4830__auto___62504 < len__4829__auto___62503)){
args__4835__auto__.push((arguments[i__4830__auto___62504]));

var G__62505 = (i__4830__auto___62504 + (1));
i__4830__auto___62504 = G__62505;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61655 = conformed_args__59324__auto__;
var map__61655__$1 = cljs.core.__destructure_map(map__61655);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61655__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61655__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61655__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq61651){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61651));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62506 = arguments.length;
var i__4830__auto___62507 = (0);
while(true){
if((i__4830__auto___62507 < len__4829__auto___62506)){
args__4835__auto__.push((arguments[i__4830__auto___62507]));

var G__62508 = (i__4830__auto___62507 + (1));
i__4830__auto___62507 = G__62508;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61659 = conformed_args__59324__auto__;
var map__61659__$1 = cljs.core.__destructure_map(map__61659);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61659__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61659__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61659__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq61658){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61658));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62509 = arguments.length;
var i__4830__auto___62510 = (0);
while(true){
if((i__4830__auto___62510 < len__4829__auto___62509)){
args__4835__auto__.push((arguments[i__4830__auto___62510]));

var G__62512 = (i__4830__auto___62510 + (1));
i__4830__auto___62510 = G__62512;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61661 = conformed_args__59324__auto__;
var map__61661__$1 = cljs.core.__destructure_map(map__61661);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61661__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61661__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61661__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq61660){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61660));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62520 = arguments.length;
var i__4830__auto___62521 = (0);
while(true){
if((i__4830__auto___62521 < len__4829__auto___62520)){
args__4835__auto__.push((arguments[i__4830__auto___62521]));

var G__62522 = (i__4830__auto___62521 + (1));
i__4830__auto___62521 = G__62522;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61668 = conformed_args__59324__auto__;
var map__61668__$1 = cljs.core.__destructure_map(map__61668);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61668__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61668__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61668__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq61665){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61665));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62524 = arguments.length;
var i__4830__auto___62525 = (0);
while(true){
if((i__4830__auto___62525 < len__4829__auto___62524)){
args__4835__auto__.push((arguments[i__4830__auto___62525]));

var G__62526 = (i__4830__auto___62525 + (1));
i__4830__auto___62525 = G__62526;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61670 = conformed_args__59324__auto__;
var map__61670__$1 = cljs.core.__destructure_map(map__61670);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61670__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61670__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61670__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq61669){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61669));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62529 = arguments.length;
var i__4830__auto___62530 = (0);
while(true){
if((i__4830__auto___62530 < len__4829__auto___62529)){
args__4835__auto__.push((arguments[i__4830__auto___62530]));

var G__62531 = (i__4830__auto___62530 + (1));
i__4830__auto___62530 = G__62531;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61672 = conformed_args__59324__auto__;
var map__61672__$1 = cljs.core.__destructure_map(map__61672);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61672__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61672__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61672__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq61671){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61671));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62538 = arguments.length;
var i__4830__auto___62539 = (0);
while(true){
if((i__4830__auto___62539 < len__4829__auto___62538)){
args__4835__auto__.push((arguments[i__4830__auto___62539]));

var G__62540 = (i__4830__auto___62539 + (1));
i__4830__auto___62539 = G__62540;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61679 = conformed_args__59324__auto__;
var map__61679__$1 = cljs.core.__destructure_map(map__61679);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61679__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61679__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61679__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq61676){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61676));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62542 = arguments.length;
var i__4830__auto___62543 = (0);
while(true){
if((i__4830__auto___62543 < len__4829__auto___62542)){
args__4835__auto__.push((arguments[i__4830__auto___62543]));

var G__62544 = (i__4830__auto___62543 + (1));
i__4830__auto___62543 = G__62544;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61684 = conformed_args__59324__auto__;
var map__61684__$1 = cljs.core.__destructure_map(map__61684);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61684__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61684__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61684__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq61680){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61680));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62545 = arguments.length;
var i__4830__auto___62546 = (0);
while(true){
if((i__4830__auto___62546 < len__4829__auto___62545)){
args__4835__auto__.push((arguments[i__4830__auto___62546]));

var G__62547 = (i__4830__auto___62546 + (1));
i__4830__auto___62546 = G__62547;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61688 = conformed_args__59324__auto__;
var map__61688__$1 = cljs.core.__destructure_map(map__61688);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61688__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61688__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61688__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq61686){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61686));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62555 = arguments.length;
var i__4830__auto___62556 = (0);
while(true){
if((i__4830__auto___62556 < len__4829__auto___62555)){
args__4835__auto__.push((arguments[i__4830__auto___62556]));

var G__62557 = (i__4830__auto___62556 + (1));
i__4830__auto___62556 = G__62557;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61693 = conformed_args__59324__auto__;
var map__61693__$1 = cljs.core.__destructure_map(map__61693);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61693__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61693__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61693__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq61690){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61690));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62558 = arguments.length;
var i__4830__auto___62559 = (0);
while(true){
if((i__4830__auto___62559 < len__4829__auto___62558)){
args__4835__auto__.push((arguments[i__4830__auto___62559]));

var G__62560 = (i__4830__auto___62559 + (1));
i__4830__auto___62559 = G__62560;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61698 = conformed_args__59324__auto__;
var map__61698__$1 = cljs.core.__destructure_map(map__61698);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61698__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61698__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61698__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq61696){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61696));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62561 = arguments.length;
var i__4830__auto___62562 = (0);
while(true){
if((i__4830__auto___62562 < len__4829__auto___62561)){
args__4835__auto__.push((arguments[i__4830__auto___62562]));

var G__62564 = (i__4830__auto___62562 + (1));
i__4830__auto___62562 = G__62564;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61702 = conformed_args__59324__auto__;
var map__61702__$1 = cljs.core.__destructure_map(map__61702);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61702__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61702__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq61700){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61700));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62568 = arguments.length;
var i__4830__auto___62569 = (0);
while(true){
if((i__4830__auto___62569 < len__4829__auto___62568)){
args__4835__auto__.push((arguments[i__4830__auto___62569]));

var G__62570 = (i__4830__auto___62569 + (1));
i__4830__auto___62569 = G__62570;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61706 = conformed_args__59324__auto__;
var map__61706__$1 = cljs.core.__destructure_map(map__61706);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61706__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61706__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq61703){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61703));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62576 = arguments.length;
var i__4830__auto___62577 = (0);
while(true){
if((i__4830__auto___62577 < len__4829__auto___62576)){
args__4835__auto__.push((arguments[i__4830__auto___62577]));

var G__62578 = (i__4830__auto___62577 + (1));
i__4830__auto___62577 = G__62578;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61708 = conformed_args__59324__auto__;
var map__61708__$1 = cljs.core.__destructure_map(map__61708);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61708__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61708__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61708__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq61707){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61707));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62580 = arguments.length;
var i__4830__auto___62581 = (0);
while(true){
if((i__4830__auto___62581 < len__4829__auto___62580)){
args__4835__auto__.push((arguments[i__4830__auto___62581]));

var G__62582 = (i__4830__auto___62581 + (1));
i__4830__auto___62581 = G__62582;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61713 = conformed_args__59324__auto__;
var map__61713__$1 = cljs.core.__destructure_map(map__61713);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61713__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61713__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61713__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq61712){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61712));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62587 = arguments.length;
var i__4830__auto___62588 = (0);
while(true){
if((i__4830__auto___62588 < len__4829__auto___62587)){
args__4835__auto__.push((arguments[i__4830__auto___62588]));

var G__62589 = (i__4830__auto___62588 + (1));
i__4830__auto___62588 = G__62589;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61718 = conformed_args__59324__auto__;
var map__61718__$1 = cljs.core.__destructure_map(map__61718);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61718__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61718__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61718__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq61716){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61716));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62601 = arguments.length;
var i__4830__auto___62602 = (0);
while(true){
if((i__4830__auto___62602 < len__4829__auto___62601)){
args__4835__auto__.push((arguments[i__4830__auto___62602]));

var G__62603 = (i__4830__auto___62602 + (1));
i__4830__auto___62602 = G__62603;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61720 = conformed_args__59324__auto__;
var map__61720__$1 = cljs.core.__destructure_map(map__61720);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61720__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61720__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61720__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq61719){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61719));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62604 = arguments.length;
var i__4830__auto___62605 = (0);
while(true){
if((i__4830__auto___62605 < len__4829__auto___62604)){
args__4835__auto__.push((arguments[i__4830__auto___62605]));

var G__62606 = (i__4830__auto___62605 + (1));
i__4830__auto___62605 = G__62606;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61722 = conformed_args__59324__auto__;
var map__61722__$1 = cljs.core.__destructure_map(map__61722);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61722__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61722__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61722__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq61721){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61721));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62618 = arguments.length;
var i__4830__auto___62619 = (0);
while(true){
if((i__4830__auto___62619 < len__4829__auto___62618)){
args__4835__auto__.push((arguments[i__4830__auto___62619]));

var G__62621 = (i__4830__auto___62619 + (1));
i__4830__auto___62619 = G__62621;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61724 = conformed_args__59324__auto__;
var map__61724__$1 = cljs.core.__destructure_map(map__61724);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61724__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61724__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq61723){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61723));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62626 = arguments.length;
var i__4830__auto___62627 = (0);
while(true){
if((i__4830__auto___62627 < len__4829__auto___62626)){
args__4835__auto__.push((arguments[i__4830__auto___62627]));

var G__62628 = (i__4830__auto___62627 + (1));
i__4830__auto___62627 = G__62628;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61726 = conformed_args__59324__auto__;
var map__61726__$1 = cljs.core.__destructure_map(map__61726);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61726__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61726__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61726__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq61725){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61725));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62633 = arguments.length;
var i__4830__auto___62634 = (0);
while(true){
if((i__4830__auto___62634 < len__4829__auto___62633)){
args__4835__auto__.push((arguments[i__4830__auto___62634]));

var G__62635 = (i__4830__auto___62634 + (1));
i__4830__auto___62634 = G__62635;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61728 = conformed_args__59324__auto__;
var map__61728__$1 = cljs.core.__destructure_map(map__61728);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61728__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61728__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61728__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq61727){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61727));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62640 = arguments.length;
var i__4830__auto___62641 = (0);
while(true){
if((i__4830__auto___62641 < len__4829__auto___62640)){
args__4835__auto__.push((arguments[i__4830__auto___62641]));

var G__62642 = (i__4830__auto___62641 + (1));
i__4830__auto___62641 = G__62642;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61730 = conformed_args__59324__auto__;
var map__61730__$1 = cljs.core.__destructure_map(map__61730);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61730__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61730__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61730__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq61729){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61729));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62643 = arguments.length;
var i__4830__auto___62644 = (0);
while(true){
if((i__4830__auto___62644 < len__4829__auto___62643)){
args__4835__auto__.push((arguments[i__4830__auto___62644]));

var G__62645 = (i__4830__auto___62644 + (1));
i__4830__auto___62644 = G__62645;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61736 = conformed_args__59324__auto__;
var map__61736__$1 = cljs.core.__destructure_map(map__61736);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61736__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq61733){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61733));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62646 = arguments.length;
var i__4830__auto___62647 = (0);
while(true){
if((i__4830__auto___62647 < len__4829__auto___62646)){
args__4835__auto__.push((arguments[i__4830__auto___62647]));

var G__62648 = (i__4830__auto___62647 + (1));
i__4830__auto___62647 = G__62648;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61738 = conformed_args__59324__auto__;
var map__61738__$1 = cljs.core.__destructure_map(map__61738);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq61737){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61737));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62649 = arguments.length;
var i__4830__auto___62650 = (0);
while(true){
if((i__4830__auto___62650 < len__4829__auto___62649)){
args__4835__auto__.push((arguments[i__4830__auto___62650]));

var G__62651 = (i__4830__auto___62650 + (1));
i__4830__auto___62650 = G__62651;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61740 = conformed_args__59324__auto__;
var map__61740__$1 = cljs.core.__destructure_map(map__61740);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61740__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61740__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61740__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq61739){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61739));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62652 = arguments.length;
var i__4830__auto___62653 = (0);
while(true){
if((i__4830__auto___62653 < len__4829__auto___62652)){
args__4835__auto__.push((arguments[i__4830__auto___62653]));

var G__62654 = (i__4830__auto___62653 + (1));
i__4830__auto___62653 = G__62654;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61742 = conformed_args__59324__auto__;
var map__61742__$1 = cljs.core.__destructure_map(map__61742);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61742__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61742__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61742__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq61741){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61741));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62657 = arguments.length;
var i__4830__auto___62658 = (0);
while(true){
if((i__4830__auto___62658 < len__4829__auto___62657)){
args__4835__auto__.push((arguments[i__4830__auto___62658]));

var G__62659 = (i__4830__auto___62658 + (1));
i__4830__auto___62658 = G__62659;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61746 = conformed_args__59324__auto__;
var map__61746__$1 = cljs.core.__destructure_map(map__61746);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61746__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61746__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61746__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq61745){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61745));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62663 = arguments.length;
var i__4830__auto___62664 = (0);
while(true){
if((i__4830__auto___62664 < len__4829__auto___62663)){
args__4835__auto__.push((arguments[i__4830__auto___62664]));

var G__62666 = (i__4830__auto___62664 + (1));
i__4830__auto___62664 = G__62666;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61755 = conformed_args__59324__auto__;
var map__61755__$1 = cljs.core.__destructure_map(map__61755);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61755__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61755__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61755__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq61752){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61752));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62667 = arguments.length;
var i__4830__auto___62668 = (0);
while(true){
if((i__4830__auto___62668 < len__4829__auto___62667)){
args__4835__auto__.push((arguments[i__4830__auto___62668]));

var G__62669 = (i__4830__auto___62668 + (1));
i__4830__auto___62668 = G__62669;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61760 = conformed_args__59324__auto__;
var map__61760__$1 = cljs.core.__destructure_map(map__61760);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq61756){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61756));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62670 = arguments.length;
var i__4830__auto___62671 = (0);
while(true){
if((i__4830__auto___62671 < len__4829__auto___62670)){
args__4835__auto__.push((arguments[i__4830__auto___62671]));

var G__62672 = (i__4830__auto___62671 + (1));
i__4830__auto___62671 = G__62672;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61765 = conformed_args__59324__auto__;
var map__61765__$1 = cljs.core.__destructure_map(map__61765);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61765__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61765__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61765__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq61764){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61764));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62674 = arguments.length;
var i__4830__auto___62675 = (0);
while(true){
if((i__4830__auto___62675 < len__4829__auto___62674)){
args__4835__auto__.push((arguments[i__4830__auto___62675]));

var G__62676 = (i__4830__auto___62675 + (1));
i__4830__auto___62675 = G__62676;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61768 = conformed_args__59324__auto__;
var map__61768__$1 = cljs.core.__destructure_map(map__61768);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61768__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61768__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq61767){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61767));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62677 = arguments.length;
var i__4830__auto___62678 = (0);
while(true){
if((i__4830__auto___62678 < len__4829__auto___62677)){
args__4835__auto__.push((arguments[i__4830__auto___62678]));

var G__62679 = (i__4830__auto___62678 + (1));
i__4830__auto___62678 = G__62679;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61770 = conformed_args__59324__auto__;
var map__61770__$1 = cljs.core.__destructure_map(map__61770);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61770__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61770__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61770__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq61769){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61769));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62696 = arguments.length;
var i__4830__auto___62697 = (0);
while(true){
if((i__4830__auto___62697 < len__4829__auto___62696)){
args__4835__auto__.push((arguments[i__4830__auto___62697]));

var G__62698 = (i__4830__auto___62697 + (1));
i__4830__auto___62697 = G__62698;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61772 = conformed_args__59324__auto__;
var map__61772__$1 = cljs.core.__destructure_map(map__61772);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61772__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61772__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61772__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq61771){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61771));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62699 = arguments.length;
var i__4830__auto___62700 = (0);
while(true){
if((i__4830__auto___62700 < len__4829__auto___62699)){
args__4835__auto__.push((arguments[i__4830__auto___62700]));

var G__62701 = (i__4830__auto___62700 + (1));
i__4830__auto___62700 = G__62701;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61775 = conformed_args__59324__auto__;
var map__61775__$1 = cljs.core.__destructure_map(map__61775);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61775__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61775__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61775__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq61773){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61773));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62720 = arguments.length;
var i__4830__auto___62721 = (0);
while(true){
if((i__4830__auto___62721 < len__4829__auto___62720)){
args__4835__auto__.push((arguments[i__4830__auto___62721]));

var G__62724 = (i__4830__auto___62721 + (1));
i__4830__auto___62721 = G__62724;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61781 = conformed_args__59324__auto__;
var map__61781__$1 = cljs.core.__destructure_map(map__61781);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61781__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61781__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61781__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq61778){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61778));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62748 = arguments.length;
var i__4830__auto___62749 = (0);
while(true){
if((i__4830__auto___62749 < len__4829__auto___62748)){
args__4835__auto__.push((arguments[i__4830__auto___62749]));

var G__62752 = (i__4830__auto___62749 + (1));
i__4830__auto___62749 = G__62752;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61791 = conformed_args__59324__auto__;
var map__61791__$1 = cljs.core.__destructure_map(map__61791);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61791__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61791__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61791__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__59326__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59326__auto__);
var attrs_value__59328__auto__ = (function (){var or__4223__auto__ = cljs.core.second(attrs__59325__auto__);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq61790){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61790));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
