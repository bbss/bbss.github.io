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
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__60549){
var vec__60552 = p__60549;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60552,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60552,(1),null);
var pair = vec__60552;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__60557){
var vec__60558 = p__60557;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60558,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60558,(1),null);
var pair = vec__60558;
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
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__60563){
var vec__60565 = p__60563;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60565,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60565,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__60568 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60568,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__60568;
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
var G__60576 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__60581 = (function (){var G__60582 = r;
if((G__60582 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__60582);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__60581) : ref.call(null,G__60581));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__60576) : factory.call(null,G__60576));
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
var G__60593 = arguments.length;
switch (G__60593) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___61794 = arguments.length;
var i__4830__auto___61795 = (0);
while(true){
if((i__4830__auto___61795 < len__4829__auto___61794)){
args_arr__4850__auto__.push((arguments[i__4830__auto___61795]));

var G__61796 = (i__4830__auto___61795 + (1));
i__4830__auto___61795 = G__61796;
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
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq60588){
var G__60589 = cljs.core.first(seq60588);
var seq60588__$1 = cljs.core.next(seq60588);
var G__60591 = cljs.core.first(seq60588__$1);
var seq60588__$2 = cljs.core.next(seq60588__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60589,G__60591,seq60588__$2);
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
var G__60611 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__60611) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__60611));
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

var x60619_61808 = ctor.prototype;
(x60619_61808.onChange = (function (event){
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

(x60619_61808.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","cached-props","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__60612_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__60612_SHARP_);
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
}),null)),null,-517648015,null);
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

(x60619_61808.render = (function (){
var this$ = this;
return React.createElement(element,goog.object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__61817__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.createElement,ctor,args);
};
var G__61817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61819__i = 0, G__61819__a = new Array(arguments.length -  0);
while (G__61819__i < G__61819__a.length) {G__61819__a[G__61819__i] = arguments[G__61819__i + 0]; ++G__61819__i;}
  args = new cljs.core.IndexedSeq(G__61819__a,0,null);
} 
return G__61817__delegate.call(this,args);};
G__61817.cljs$lang$maxFixedArity = 0;
G__61817.cljs$lang$applyTo = (function (arglist__61821){
var args = cljs.core.seq(arglist__61821);
return G__61817__delegate(args);
});
G__61817.cljs$core$IFn$_invoke$arity$variadic = G__61817__delegate;
return G__61817;
})()
;
return (function() { 
var G__61824__delegate = function (props,children){
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
var G__61824 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__61831__i = 0, G__61831__a = new Array(arguments.length -  1);
while (G__61831__i < G__61831__a.length) {G__61831__a[G__61831__i] = arguments[G__61831__i + 1]; ++G__61831__i;}
  children = new cljs.core.IndexedSeq(G__61831__a,0,null);
} 
return G__61824__delegate.call(this,props,children);};
G__61824.cljs$lang$maxFixedArity = 1;
G__61824.cljs$lang$applyTo = (function (arglist__61832){
var props = cljs.core.first(arglist__61832);
var children = cljs.core.rest(arglist__61832);
return G__61824__delegate(props,children);
});
G__61824.cljs$core$IFn$_invoke$arity$variadic = G__61824__delegate;
return G__61824;
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
var G__60636 = arguments.length;
switch (G__60636) {
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
var vec__60637 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__60638 = cljs.core.seq(vec__60637);
var first__60639 = cljs.core.first(seq__60638);
var seq__60638__$1 = cljs.core.next(seq__60638);
var head = first__60639;
var tail = seq__60638__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__60640 = (function (){var G__60643 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60643,tail);

return G__60643;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60640) : f.call(null,G__60640));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__60644 = (function (){var G__60645 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60645,args);

return G__60645;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60644) : f.call(null,G__60644));
} else {
if(cljs.core.object_QMARK_(head)){
var G__60648 = (function (){var G__60649 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60649,tail);

return G__60649;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60648) : f.call(null,G__60648));
} else {
if(cljs.core.map_QMARK_(head)){
var G__60650 = (function (){var G__60651 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__60651,tail);

return G__60651;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60650) : f.call(null,G__60650));
} else {
var G__60652 = (function (){var G__60653 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60653,args);

return G__60653;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60652) : f.call(null,G__60652));

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
var G__60657 = arguments.length;
switch (G__60657) {
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
var vec__60662 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__60663 = cljs.core.seq(vec__60662);
var first__60664 = cljs.core.first(seq__60663);
var seq__60663__$1 = cljs.core.next(seq__60663);
var head = first__60664;
var tail = seq__60663__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60665 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60665,tail);

return G__60665;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60666 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60666,args);

return G__60666;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60667 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60667,tail);

return G__60667;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60668 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__60668,tail);

return G__60668;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60669 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60669,args);

return G__60669;
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
var len__4829__auto___61858 = arguments.length;
var i__4830__auto___61859 = (0);
while(true){
if((i__4830__auto___61859 < len__4829__auto___61858)){
args__4835__auto__.push((arguments[i__4830__auto___61859]));

var G__61865 = (i__4830__auto___61859 + (1));
i__4830__auto___61859 = G__61865;
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
var map__60688 = conformed_args__59324__auto__;
var map__60688__$1 = cljs.core.__destructure_map(map__60688);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60688__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60688__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60688__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq60681){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60681));
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
var len__4829__auto___61869 = arguments.length;
var i__4830__auto___61870 = (0);
while(true){
if((i__4830__auto___61870 < len__4829__auto___61869)){
args__4835__auto__.push((arguments[i__4830__auto___61870]));

var G__61871 = (i__4830__auto___61870 + (1));
i__4830__auto___61870 = G__61871;
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
var map__60696 = conformed_args__59324__auto__;
var map__60696__$1 = cljs.core.__destructure_map(map__60696);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq60690){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60690));
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
var len__4829__auto___61874 = arguments.length;
var i__4830__auto___61875 = (0);
while(true){
if((i__4830__auto___61875 < len__4829__auto___61874)){
args__4835__auto__.push((arguments[i__4830__auto___61875]));

var G__61876 = (i__4830__auto___61875 + (1));
i__4830__auto___61875 = G__61876;
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
var len__4829__auto___61885 = arguments.length;
var i__4830__auto___61886 = (0);
while(true){
if((i__4830__auto___61886 < len__4829__auto___61885)){
args__4835__auto__.push((arguments[i__4830__auto___61886]));

var G__61887 = (i__4830__auto___61886 + (1));
i__4830__auto___61886 = G__61887;
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
var len__4829__auto___61888 = arguments.length;
var i__4830__auto___61889 = (0);
while(true){
if((i__4830__auto___61889 < len__4829__auto___61888)){
args__4835__auto__.push((arguments[i__4830__auto___61889]));

var G__61890 = (i__4830__auto___61889 + (1));
i__4830__auto___61889 = G__61890;
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
var len__4829__auto___61891 = arguments.length;
var i__4830__auto___61892 = (0);
while(true){
if((i__4830__auto___61892 < len__4829__auto___61891)){
args__4835__auto__.push((arguments[i__4830__auto___61892]));

var G__61893 = (i__4830__auto___61892 + (1));
i__4830__auto___61892 = G__61893;
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
var len__4829__auto___61894 = arguments.length;
var i__4830__auto___61895 = (0);
while(true){
if((i__4830__auto___61895 < len__4829__auto___61894)){
args__4835__auto__.push((arguments[i__4830__auto___61895]));

var G__61896 = (i__4830__auto___61895 + (1));
i__4830__auto___61895 = G__61896;
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
var len__4829__auto___61899 = arguments.length;
var i__4830__auto___61900 = (0);
while(true){
if((i__4830__auto___61900 < len__4829__auto___61899)){
args__4835__auto__.push((arguments[i__4830__auto___61900]));

var G__61901 = (i__4830__auto___61900 + (1));
i__4830__auto___61900 = G__61901;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq60711){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60711));
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
var len__4829__auto___61902 = arguments.length;
var i__4830__auto___61903 = (0);
while(true){
if((i__4830__auto___61903 < len__4829__auto___61902)){
args__4835__auto__.push((arguments[i__4830__auto___61903]));

var G__61904 = (i__4830__auto___61903 + (1));
i__4830__auto___61903 = G__61904;
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
var map__60715 = conformed_args__59324__auto__;
var map__60715__$1 = cljs.core.__destructure_map(map__60715);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq60714){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60714));
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
var len__4829__auto___61905 = arguments.length;
var i__4830__auto___61906 = (0);
while(true){
if((i__4830__auto___61906 < len__4829__auto___61905)){
args__4835__auto__.push((arguments[i__4830__auto___61906]));

var G__61907 = (i__4830__auto___61906 + (1));
i__4830__auto___61906 = G__61907;
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
var map__60723 = conformed_args__59324__auto__;
var map__60723__$1 = cljs.core.__destructure_map(map__60723);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60723__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60723__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60723__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq60718){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60718));
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
var len__4829__auto___61908 = arguments.length;
var i__4830__auto___61909 = (0);
while(true){
if((i__4830__auto___61909 < len__4829__auto___61908)){
args__4835__auto__.push((arguments[i__4830__auto___61909]));

var G__61910 = (i__4830__auto___61909 + (1));
i__4830__auto___61909 = G__61910;
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
var map__60736 = conformed_args__59324__auto__;
var map__60736__$1 = cljs.core.__destructure_map(map__60736);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60736__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq60733){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60733));
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
var len__4829__auto___61911 = arguments.length;
var i__4830__auto___61912 = (0);
while(true){
if((i__4830__auto___61912 < len__4829__auto___61911)){
args__4835__auto__.push((arguments[i__4830__auto___61912]));

var G__61913 = (i__4830__auto___61912 + (1));
i__4830__auto___61912 = G__61913;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq60742){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60742));
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
var len__4829__auto___61914 = arguments.length;
var i__4830__auto___61915 = (0);
while(true){
if((i__4830__auto___61915 < len__4829__auto___61914)){
args__4835__auto__.push((arguments[i__4830__auto___61915]));

var G__61916 = (i__4830__auto___61915 + (1));
i__4830__auto___61915 = G__61916;
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
var map__60751 = conformed_args__59324__auto__;
var map__60751__$1 = cljs.core.__destructure_map(map__60751);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60751__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60751__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60751__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq60749){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60749));
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
var len__4829__auto___61917 = arguments.length;
var i__4830__auto___61918 = (0);
while(true){
if((i__4830__auto___61918 < len__4829__auto___61917)){
args__4835__auto__.push((arguments[i__4830__auto___61918]));

var G__61919 = (i__4830__auto___61918 + (1));
i__4830__auto___61918 = G__61919;
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
var map__60755 = conformed_args__59324__auto__;
var map__60755__$1 = cljs.core.__destructure_map(map__60755);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60755__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60755__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60755__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq60752){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60752));
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
var len__4829__auto___61920 = arguments.length;
var i__4830__auto___61921 = (0);
while(true){
if((i__4830__auto___61921 < len__4829__auto___61920)){
args__4835__auto__.push((arguments[i__4830__auto___61921]));

var G__61922 = (i__4830__auto___61921 + (1));
i__4830__auto___61921 = G__61922;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq60761){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60761));
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
var len__4829__auto___61923 = arguments.length;
var i__4830__auto___61924 = (0);
while(true){
if((i__4830__auto___61924 < len__4829__auto___61923)){
args__4835__auto__.push((arguments[i__4830__auto___61924]));

var G__61925 = (i__4830__auto___61924 + (1));
i__4830__auto___61924 = G__61925;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq60768){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60768));
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
var len__4829__auto___61926 = arguments.length;
var i__4830__auto___61927 = (0);
while(true){
if((i__4830__auto___61927 < len__4829__auto___61926)){
args__4835__auto__.push((arguments[i__4830__auto___61927]));

var G__61928 = (i__4830__auto___61927 + (1));
i__4830__auto___61927 = G__61928;
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
var map__60774 = conformed_args__59324__auto__;
var map__60774__$1 = cljs.core.__destructure_map(map__60774);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60774__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60774__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60774__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq60772){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60772));
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
var len__4829__auto___61929 = arguments.length;
var i__4830__auto___61930 = (0);
while(true){
if((i__4830__auto___61930 < len__4829__auto___61929)){
args__4835__auto__.push((arguments[i__4830__auto___61930]));

var G__61931 = (i__4830__auto___61930 + (1));
i__4830__auto___61930 = G__61931;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq60775){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60775));
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
var len__4829__auto___61932 = arguments.length;
var i__4830__auto___61933 = (0);
while(true){
if((i__4830__auto___61933 < len__4829__auto___61932)){
args__4835__auto__.push((arguments[i__4830__auto___61933]));

var G__61934 = (i__4830__auto___61933 + (1));
i__4830__auto___61933 = G__61934;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq60778){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60778));
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
var len__4829__auto___61935 = arguments.length;
var i__4830__auto___61936 = (0);
while(true){
if((i__4830__auto___61936 < len__4829__auto___61935)){
args__4835__auto__.push((arguments[i__4830__auto___61936]));

var G__61937 = (i__4830__auto___61936 + (1));
i__4830__auto___61936 = G__61937;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq60786){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60786));
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
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60792 = conformed_args__59324__auto__;
var map__60792__$1 = cljs.core.__destructure_map(map__60792);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq60789){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60789));
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
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60798 = conformed_args__59324__auto__;
var map__60798__$1 = cljs.core.__destructure_map(map__60798);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60798__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60798__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60798__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq60794){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60794));
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
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60806 = conformed_args__59324__auto__;
var map__60806__$1 = cljs.core.__destructure_map(map__60806);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60806__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60806__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60806__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq60802){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60802));
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
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60813 = conformed_args__59324__auto__;
var map__60813__$1 = cljs.core.__destructure_map(map__60813);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60813__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60813__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60813__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq60810){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60810));
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
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60819 = conformed_args__59324__auto__;
var map__60819__$1 = cljs.core.__destructure_map(map__60819);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60819__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60819__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60819__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq60816){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60816));
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
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60822 = conformed_args__59324__auto__;
var map__60822__$1 = cljs.core.__destructure_map(map__60822);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60822__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60822__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60822__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq60821){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60821));
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
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60832 = conformed_args__59324__auto__;
var map__60832__$1 = cljs.core.__destructure_map(map__60832);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60832__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60832__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60832__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq60827){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60827));
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
var len__4829__auto___61959 = arguments.length;
var i__4830__auto___61960 = (0);
while(true){
if((i__4830__auto___61960 < len__4829__auto___61959)){
args__4835__auto__.push((arguments[i__4830__auto___61960]));

var G__61961 = (i__4830__auto___61960 + (1));
i__4830__auto___61960 = G__61961;
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
var map__60838 = conformed_args__59324__auto__;
var map__60838__$1 = cljs.core.__destructure_map(map__60838);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60838__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60838__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60838__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq60834){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60834));
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
var len__4829__auto___61962 = arguments.length;
var i__4830__auto___61963 = (0);
while(true){
if((i__4830__auto___61963 < len__4829__auto___61962)){
args__4835__auto__.push((arguments[i__4830__auto___61963]));

var G__61964 = (i__4830__auto___61963 + (1));
i__4830__auto___61963 = G__61964;
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
var map__60841 = conformed_args__59324__auto__;
var map__60841__$1 = cljs.core.__destructure_map(map__60841);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60841__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60841__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60841__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq60839){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60839));
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
var len__4829__auto___61965 = arguments.length;
var i__4830__auto___61966 = (0);
while(true){
if((i__4830__auto___61966 < len__4829__auto___61965)){
args__4835__auto__.push((arguments[i__4830__auto___61966]));

var G__61967 = (i__4830__auto___61966 + (1));
i__4830__auto___61966 = G__61967;
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
var map__60847 = conformed_args__59324__auto__;
var map__60847__$1 = cljs.core.__destructure_map(map__60847);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60847__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60847__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60847__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq60844){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60844));
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
var len__4829__auto___61968 = arguments.length;
var i__4830__auto___61969 = (0);
while(true){
if((i__4830__auto___61969 < len__4829__auto___61968)){
args__4835__auto__.push((arguments[i__4830__auto___61969]));

var G__61970 = (i__4830__auto___61969 + (1));
i__4830__auto___61969 = G__61970;
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
var map__60851 = conformed_args__59324__auto__;
var map__60851__$1 = cljs.core.__destructure_map(map__60851);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60851__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60851__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60851__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq60849){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60849));
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
var len__4829__auto___61971 = arguments.length;
var i__4830__auto___61972 = (0);
while(true){
if((i__4830__auto___61972 < len__4829__auto___61971)){
args__4835__auto__.push((arguments[i__4830__auto___61972]));

var G__61973 = (i__4830__auto___61972 + (1));
i__4830__auto___61972 = G__61973;
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
var map__60855 = conformed_args__59324__auto__;
var map__60855__$1 = cljs.core.__destructure_map(map__60855);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq60852){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60852));
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
var map__60858 = conformed_args__59324__auto__;
var map__60858__$1 = cljs.core.__destructure_map(map__60858);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq60856){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60856));
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
var map__60864 = conformed_args__59324__auto__;
var map__60864__$1 = cljs.core.__destructure_map(map__60864);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60864__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60864__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60864__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq60861){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60861));
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
var map__60866 = conformed_args__59324__auto__;
var map__60866__$1 = cljs.core.__destructure_map(map__60866);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60866__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60866__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60866__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq60865){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60865));
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
var map__60868 = conformed_args__59324__auto__;
var map__60868__$1 = cljs.core.__destructure_map(map__60868);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60868__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60868__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60868__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq60867){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60867));
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
var map__60871 = conformed_args__59324__auto__;
var map__60871__$1 = cljs.core.__destructure_map(map__60871);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60871__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60871__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60871__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq60870){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60870));
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
var map__60875 = conformed_args__59324__auto__;
var map__60875__$1 = cljs.core.__destructure_map(map__60875);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60875__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60875__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60875__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq60872){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60872));
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
var map__60892 = conformed_args__59324__auto__;
var map__60892__$1 = cljs.core.__destructure_map(map__60892);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60892__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60892__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60892__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq60891){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60891));
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
var map__60894 = conformed_args__59324__auto__;
var map__60894__$1 = cljs.core.__destructure_map(map__60894);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60894__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60894__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60894__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq60893){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60893));
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
var map__60897 = conformed_args__59324__auto__;
var map__60897__$1 = cljs.core.__destructure_map(map__60897);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq60896){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60896));
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
var map__60932 = conformed_args__59324__auto__;
var map__60932__$1 = cljs.core.__destructure_map(map__60932);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60932__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60932__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60932__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq60900){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60900));
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
var map__60952 = conformed_args__59324__auto__;
var map__60952__$1 = cljs.core.__destructure_map(map__60952);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60952__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60952__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60952__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq60943){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60943));
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
var map__61002 = conformed_args__59324__auto__;
var map__61002__$1 = cljs.core.__destructure_map(map__61002);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61002__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61002__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61002__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq60994){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60994));
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
var map__61004 = conformed_args__59324__auto__;
var map__61004__$1 = cljs.core.__destructure_map(map__61004);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61004__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61004__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61004__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq61003){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61003));
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
var map__61008 = conformed_args__59324__auto__;
var map__61008__$1 = cljs.core.__destructure_map(map__61008);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61008__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61008__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61008__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq61005){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61005));
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
var map__61010 = conformed_args__59324__auto__;
var map__61010__$1 = cljs.core.__destructure_map(map__61010);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61010__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61010__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61010__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq61009){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61009));
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
var map__61015 = conformed_args__59324__auto__;
var map__61015__$1 = cljs.core.__destructure_map(map__61015);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61015__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61015__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61015__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq61012){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61012));
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
var map__61017 = conformed_args__59324__auto__;
var map__61017__$1 = cljs.core.__destructure_map(map__61017);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61017__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61017__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61017__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq61016){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61016));
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq61018){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61018));
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
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61021 = conformed_args__59324__auto__;
var map__61021__$1 = cljs.core.__destructure_map(map__61021);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61021__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61021__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61021__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq61020){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61020));
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
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq61022){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61022));
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
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61027 = conformed_args__59324__auto__;
var map__61027__$1 = cljs.core.__destructure_map(map__61027);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61027__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61027__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61027__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq61024){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61024));
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
var len__4829__auto___62044 = arguments.length;
var i__4830__auto___62045 = (0);
while(true){
if((i__4830__auto___62045 < len__4829__auto___62044)){
args__4835__auto__.push((arguments[i__4830__auto___62045]));

var G__62047 = (i__4830__auto___62045 + (1));
i__4830__auto___62045 = G__62047;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq61029){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61029));
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
var len__4829__auto___62048 = arguments.length;
var i__4830__auto___62049 = (0);
while(true){
if((i__4830__auto___62049 < len__4829__auto___62048)){
args__4835__auto__.push((arguments[i__4830__auto___62049]));

var G__62052 = (i__4830__auto___62049 + (1));
i__4830__auto___62049 = G__62052;
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
var map__61032 = conformed_args__59324__auto__;
var map__61032__$1 = cljs.core.__destructure_map(map__61032);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61032__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61032__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61032__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq61031){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61031));
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
var len__4829__auto___62053 = arguments.length;
var i__4830__auto___62054 = (0);
while(true){
if((i__4830__auto___62054 < len__4829__auto___62053)){
args__4835__auto__.push((arguments[i__4830__auto___62054]));

var G__62055 = (i__4830__auto___62054 + (1));
i__4830__auto___62054 = G__62055;
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
var map__61034 = conformed_args__59324__auto__;
var map__61034__$1 = cljs.core.__destructure_map(map__61034);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61034__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61034__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61034__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq61033){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61033));
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
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61036 = conformed_args__59324__auto__;
var map__61036__$1 = cljs.core.__destructure_map(map__61036);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61036__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61036__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61036__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq61035){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61035));
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
var len__4829__auto___62064 = arguments.length;
var i__4830__auto___62065 = (0);
while(true){
if((i__4830__auto___62065 < len__4829__auto___62064)){
args__4835__auto__.push((arguments[i__4830__auto___62065]));

var G__62066 = (i__4830__auto___62065 + (1));
i__4830__auto___62065 = G__62066;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq61037){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61037));
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
var len__4829__auto___62067 = arguments.length;
var i__4830__auto___62068 = (0);
while(true){
if((i__4830__auto___62068 < len__4829__auto___62067)){
args__4835__auto__.push((arguments[i__4830__auto___62068]));

var G__62069 = (i__4830__auto___62068 + (1));
i__4830__auto___62068 = G__62069;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq61039){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61039));
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
var len__4829__auto___62072 = arguments.length;
var i__4830__auto___62073 = (0);
while(true){
if((i__4830__auto___62073 < len__4829__auto___62072)){
args__4835__auto__.push((arguments[i__4830__auto___62073]));

var G__62074 = (i__4830__auto___62073 + (1));
i__4830__auto___62073 = G__62074;
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
var map__61042 = conformed_args__59324__auto__;
var map__61042__$1 = cljs.core.__destructure_map(map__61042);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61042__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61042__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61042__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq61041){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61041));
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
var len__4829__auto___62077 = arguments.length;
var i__4830__auto___62078 = (0);
while(true){
if((i__4830__auto___62078 < len__4829__auto___62077)){
args__4835__auto__.push((arguments[i__4830__auto___62078]));

var G__62079 = (i__4830__auto___62078 + (1));
i__4830__auto___62078 = G__62079;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq61043){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61043));
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
var len__4829__auto___62081 = arguments.length;
var i__4830__auto___62082 = (0);
while(true){
if((i__4830__auto___62082 < len__4829__auto___62081)){
args__4835__auto__.push((arguments[i__4830__auto___62082]));

var G__62083 = (i__4830__auto___62082 + (1));
i__4830__auto___62082 = G__62083;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq61049){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61049));
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
var len__4829__auto___62091 = arguments.length;
var i__4830__auto___62092 = (0);
while(true){
if((i__4830__auto___62092 < len__4829__auto___62091)){
args__4835__auto__.push((arguments[i__4830__auto___62092]));

var G__62094 = (i__4830__auto___62092 + (1));
i__4830__auto___62092 = G__62094;
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
var map__61055 = conformed_args__59324__auto__;
var map__61055__$1 = cljs.core.__destructure_map(map__61055);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61055__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61055__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61055__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq61054){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61054));
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
var len__4829__auto___62095 = arguments.length;
var i__4830__auto___62096 = (0);
while(true){
if((i__4830__auto___62096 < len__4829__auto___62095)){
args__4835__auto__.push((arguments[i__4830__auto___62096]));

var G__62097 = (i__4830__auto___62096 + (1));
i__4830__auto___62096 = G__62097;
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
var map__61062 = conformed_args__59324__auto__;
var map__61062__$1 = cljs.core.__destructure_map(map__61062);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61062__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61062__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61062__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq61060){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61060));
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
var len__4829__auto___62098 = arguments.length;
var i__4830__auto___62099 = (0);
while(true){
if((i__4830__auto___62099 < len__4829__auto___62098)){
args__4835__auto__.push((arguments[i__4830__auto___62099]));

var G__62100 = (i__4830__auto___62099 + (1));
i__4830__auto___62099 = G__62100;
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
var map__61066 = conformed_args__59324__auto__;
var map__61066__$1 = cljs.core.__destructure_map(map__61066);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61066__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61066__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61066__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq61064){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61064));
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
var len__4829__auto___62102 = arguments.length;
var i__4830__auto___62103 = (0);
while(true){
if((i__4830__auto___62103 < len__4829__auto___62102)){
args__4835__auto__.push((arguments[i__4830__auto___62103]));

var G__62105 = (i__4830__auto___62103 + (1));
i__4830__auto___62103 = G__62105;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq61069){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61069));
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
var len__4829__auto___62106 = arguments.length;
var i__4830__auto___62107 = (0);
while(true){
if((i__4830__auto___62107 < len__4829__auto___62106)){
args__4835__auto__.push((arguments[i__4830__auto___62107]));

var G__62108 = (i__4830__auto___62107 + (1));
i__4830__auto___62107 = G__62108;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq61072){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61072));
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
var len__4829__auto___62113 = arguments.length;
var i__4830__auto___62114 = (0);
while(true){
if((i__4830__auto___62114 < len__4829__auto___62113)){
args__4835__auto__.push((arguments[i__4830__auto___62114]));

var G__62115 = (i__4830__auto___62114 + (1));
i__4830__auto___62114 = G__62115;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq61079){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61079));
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
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61095 = conformed_args__59324__auto__;
var map__61095__$1 = cljs.core.__destructure_map(map__61095);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61095__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61095__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61095__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq61091){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61091));
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
var len__4829__auto___62121 = arguments.length;
var i__4830__auto___62122 = (0);
while(true){
if((i__4830__auto___62122 < len__4829__auto___62121)){
args__4835__auto__.push((arguments[i__4830__auto___62122]));

var G__62123 = (i__4830__auto___62122 + (1));
i__4830__auto___62122 = G__62123;
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
var map__61100 = conformed_args__59324__auto__;
var map__61100__$1 = cljs.core.__destructure_map(map__61100);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61100__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61100__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61100__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq61099){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61099));
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
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61106 = conformed_args__59324__auto__;
var map__61106__$1 = cljs.core.__destructure_map(map__61106);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61106__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61106__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61106__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq61103){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61103));
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
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61109 = conformed_args__59324__auto__;
var map__61109__$1 = cljs.core.__destructure_map(map__61109);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61109__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61109__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61109__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq61107){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61107));
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
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61117 = conformed_args__59324__auto__;
var map__61117__$1 = cljs.core.__destructure_map(map__61117);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61117__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61117__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61117__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq61116){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61116));
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
var len__4829__auto___62134 = arguments.length;
var i__4830__auto___62135 = (0);
while(true){
if((i__4830__auto___62135 < len__4829__auto___62134)){
args__4835__auto__.push((arguments[i__4830__auto___62135]));

var G__62136 = (i__4830__auto___62135 + (1));
i__4830__auto___62135 = G__62136;
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
var map__61122 = conformed_args__59324__auto__;
var map__61122__$1 = cljs.core.__destructure_map(map__61122);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61122__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61122__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61122__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq61119){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61119));
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
var len__4829__auto___62137 = arguments.length;
var i__4830__auto___62138 = (0);
while(true){
if((i__4830__auto___62138 < len__4829__auto___62137)){
args__4835__auto__.push((arguments[i__4830__auto___62138]));

var G__62140 = (i__4830__auto___62138 + (1));
i__4830__auto___62138 = G__62140;
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
var map__61128 = conformed_args__59324__auto__;
var map__61128__$1 = cljs.core.__destructure_map(map__61128);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61128__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61128__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61128__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq61125){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61125));
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
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61143 = conformed_args__59324__auto__;
var map__61143__$1 = cljs.core.__destructure_map(map__61143);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61143__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61143__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61143__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq61136){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61136));
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
var len__4829__auto___62144 = arguments.length;
var i__4830__auto___62145 = (0);
while(true){
if((i__4830__auto___62145 < len__4829__auto___62144)){
args__4835__auto__.push((arguments[i__4830__auto___62145]));

var G__62148 = (i__4830__auto___62145 + (1));
i__4830__auto___62145 = G__62148;
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
var map__61149 = conformed_args__59324__auto__;
var map__61149__$1 = cljs.core.__destructure_map(map__61149);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61149__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61149__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61149__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq61148){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61148));
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
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61154 = conformed_args__59324__auto__;
var map__61154__$1 = cljs.core.__destructure_map(map__61154);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61154__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61154__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61154__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq61152){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61152));
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
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61156 = conformed_args__59324__auto__;
var map__61156__$1 = cljs.core.__destructure_map(map__61156);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61156__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61156__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61156__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq61155){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61155));
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
var len__4829__auto___62161 = arguments.length;
var i__4830__auto___62162 = (0);
while(true){
if((i__4830__auto___62162 < len__4829__auto___62161)){
args__4835__auto__.push((arguments[i__4830__auto___62162]));

var G__62164 = (i__4830__auto___62162 + (1));
i__4830__auto___62162 = G__62164;
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
var map__61164 = conformed_args__59324__auto__;
var map__61164__$1 = cljs.core.__destructure_map(map__61164);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61164__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61164__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61164__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq61163){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61163));
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
var len__4829__auto___62167 = arguments.length;
var i__4830__auto___62169 = (0);
while(true){
if((i__4830__auto___62169 < len__4829__auto___62167)){
args__4835__auto__.push((arguments[i__4830__auto___62169]));

var G__62171 = (i__4830__auto___62169 + (1));
i__4830__auto___62169 = G__62171;
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
var map__61175 = conformed_args__59324__auto__;
var map__61175__$1 = cljs.core.__destructure_map(map__61175);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61175__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61175__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61175__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq61169){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61169));
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
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61188 = conformed_args__59324__auto__;
var map__61188__$1 = cljs.core.__destructure_map(map__61188);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61188__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61188__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61188__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq61182){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61182));
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
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61195 = conformed_args__59324__auto__;
var map__61195__$1 = cljs.core.__destructure_map(map__61195);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61195__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61195__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61195__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq61193){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61193));
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
var len__4829__auto___62181 = arguments.length;
var i__4830__auto___62184 = (0);
while(true){
if((i__4830__auto___62184 < len__4829__auto___62181)){
args__4835__auto__.push((arguments[i__4830__auto___62184]));

var G__62185 = (i__4830__auto___62184 + (1));
i__4830__auto___62184 = G__62185;
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
var map__61200 = conformed_args__59324__auto__;
var map__61200__$1 = cljs.core.__destructure_map(map__61200);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61200__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61200__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61200__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq61198){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61198));
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
var len__4829__auto___62187 = arguments.length;
var i__4830__auto___62188 = (0);
while(true){
if((i__4830__auto___62188 < len__4829__auto___62187)){
args__4835__auto__.push((arguments[i__4830__auto___62188]));

var G__62189 = (i__4830__auto___62188 + (1));
i__4830__auto___62188 = G__62189;
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
var map__61206 = conformed_args__59324__auto__;
var map__61206__$1 = cljs.core.__destructure_map(map__61206);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61206__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61206__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61206__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq61204){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61204));
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
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61269 = conformed_args__59324__auto__;
var map__61269__$1 = cljs.core.__destructure_map(map__61269);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61269__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61269__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61269__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq61212){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61212));
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
var len__4829__auto___62199 = arguments.length;
var i__4830__auto___62200 = (0);
while(true){
if((i__4830__auto___62200 < len__4829__auto___62199)){
args__4835__auto__.push((arguments[i__4830__auto___62200]));

var G__62201 = (i__4830__auto___62200 + (1));
i__4830__auto___62200 = G__62201;
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
var map__61281 = conformed_args__59324__auto__;
var map__61281__$1 = cljs.core.__destructure_map(map__61281);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61281__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61281__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61281__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq61273){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61273));
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
var len__4829__auto___62205 = arguments.length;
var i__4830__auto___62206 = (0);
while(true){
if((i__4830__auto___62206 < len__4829__auto___62205)){
args__4835__auto__.push((arguments[i__4830__auto___62206]));

var G__62207 = (i__4830__auto___62206 + (1));
i__4830__auto___62206 = G__62207;
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
var map__61287 = conformed_args__59324__auto__;
var map__61287__$1 = cljs.core.__destructure_map(map__61287);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61287__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61287__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61287__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq61285){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61285));
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
var len__4829__auto___62212 = arguments.length;
var i__4830__auto___62213 = (0);
while(true){
if((i__4830__auto___62213 < len__4829__auto___62212)){
args__4835__auto__.push((arguments[i__4830__auto___62213]));

var G__62214 = (i__4830__auto___62213 + (1));
i__4830__auto___62213 = G__62214;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq61290){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61290));
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
var len__4829__auto___62215 = arguments.length;
var i__4830__auto___62216 = (0);
while(true){
if((i__4830__auto___62216 < len__4829__auto___62215)){
args__4835__auto__.push((arguments[i__4830__auto___62216]));

var G__62217 = (i__4830__auto___62216 + (1));
i__4830__auto___62216 = G__62217;
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
var map__61301 = conformed_args__59324__auto__;
var map__61301__$1 = cljs.core.__destructure_map(map__61301);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61301__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61301__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61301__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq61299){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61299));
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
var len__4829__auto___62218 = arguments.length;
var i__4830__auto___62219 = (0);
while(true){
if((i__4830__auto___62219 < len__4829__auto___62218)){
args__4835__auto__.push((arguments[i__4830__auto___62219]));

var G__62220 = (i__4830__auto___62219 + (1));
i__4830__auto___62219 = G__62220;
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
var map__61303 = conformed_args__59324__auto__;
var map__61303__$1 = cljs.core.__destructure_map(map__61303);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61303__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61303__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61303__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq61302){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61302));
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
var len__4829__auto___62222 = arguments.length;
var i__4830__auto___62223 = (0);
while(true){
if((i__4830__auto___62223 < len__4829__auto___62222)){
args__4835__auto__.push((arguments[i__4830__auto___62223]));

var G__62228 = (i__4830__auto___62223 + (1));
i__4830__auto___62223 = G__62228;
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
var map__61309 = conformed_args__59324__auto__;
var map__61309__$1 = cljs.core.__destructure_map(map__61309);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq61307){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61307));
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
var len__4829__auto___62229 = arguments.length;
var i__4830__auto___62230 = (0);
while(true){
if((i__4830__auto___62230 < len__4829__auto___62229)){
args__4835__auto__.push((arguments[i__4830__auto___62230]));

var G__62231 = (i__4830__auto___62230 + (1));
i__4830__auto___62230 = G__62231;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq61310){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61310));
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
var len__4829__auto___62232 = arguments.length;
var i__4830__auto___62233 = (0);
while(true){
if((i__4830__auto___62233 < len__4829__auto___62232)){
args__4835__auto__.push((arguments[i__4830__auto___62233]));

var G__62234 = (i__4830__auto___62233 + (1));
i__4830__auto___62233 = G__62234;
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
var map__61321 = conformed_args__59324__auto__;
var map__61321__$1 = cljs.core.__destructure_map(map__61321);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61321__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61321__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61321__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq61320){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61320));
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
var len__4829__auto___62235 = arguments.length;
var i__4830__auto___62236 = (0);
while(true){
if((i__4830__auto___62236 < len__4829__auto___62235)){
args__4835__auto__.push((arguments[i__4830__auto___62236]));

var G__62237 = (i__4830__auto___62236 + (1));
i__4830__auto___62236 = G__62237;
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
var map__61324 = conformed_args__59324__auto__;
var map__61324__$1 = cljs.core.__destructure_map(map__61324);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61324__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61324__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61324__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq61323){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61323));
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
var len__4829__auto___62238 = arguments.length;
var i__4830__auto___62239 = (0);
while(true){
if((i__4830__auto___62239 < len__4829__auto___62238)){
args__4835__auto__.push((arguments[i__4830__auto___62239]));

var G__62240 = (i__4830__auto___62239 + (1));
i__4830__auto___62239 = G__62240;
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
var map__61327 = conformed_args__59324__auto__;
var map__61327__$1 = cljs.core.__destructure_map(map__61327);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61327__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61327__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61327__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq61326){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61326));
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
var len__4829__auto___62243 = arguments.length;
var i__4830__auto___62244 = (0);
while(true){
if((i__4830__auto___62244 < len__4829__auto___62243)){
args__4835__auto__.push((arguments[i__4830__auto___62244]));

var G__62245 = (i__4830__auto___62244 + (1));
i__4830__auto___62244 = G__62245;
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
var map__61332 = conformed_args__59324__auto__;
var map__61332__$1 = cljs.core.__destructure_map(map__61332);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61332__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61332__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61332__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq61331){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61331));
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
var len__4829__auto___62246 = arguments.length;
var i__4830__auto___62247 = (0);
while(true){
if((i__4830__auto___62247 < len__4829__auto___62246)){
args__4835__auto__.push((arguments[i__4830__auto___62247]));

var G__62248 = (i__4830__auto___62247 + (1));
i__4830__auto___62247 = G__62248;
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
var map__61335 = conformed_args__59324__auto__;
var map__61335__$1 = cljs.core.__destructure_map(map__61335);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61335__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61335__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61335__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq61333){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61333));
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
var len__4829__auto___62249 = arguments.length;
var i__4830__auto___62250 = (0);
while(true){
if((i__4830__auto___62250 < len__4829__auto___62249)){
args__4835__auto__.push((arguments[i__4830__auto___62250]));

var G__62251 = (i__4830__auto___62250 + (1));
i__4830__auto___62250 = G__62251;
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
var map__61339 = conformed_args__59324__auto__;
var map__61339__$1 = cljs.core.__destructure_map(map__61339);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61339__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61339__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61339__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq61336){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61336));
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
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq61341){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61341));
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
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61351 = conformed_args__59324__auto__;
var map__61351__$1 = cljs.core.__destructure_map(map__61351);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61351__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61351__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61351__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq61348){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61348));
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
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61357 = conformed_args__59324__auto__;
var map__61357__$1 = cljs.core.__destructure_map(map__61357);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61357__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61357__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61357__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq61353){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61353));
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
var len__4829__auto___62261 = arguments.length;
var i__4830__auto___62262 = (0);
while(true){
if((i__4830__auto___62262 < len__4829__auto___62261)){
args__4835__auto__.push((arguments[i__4830__auto___62262]));

var G__62263 = (i__4830__auto___62262 + (1));
i__4830__auto___62262 = G__62263;
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
var map__61366 = conformed_args__59324__auto__;
var map__61366__$1 = cljs.core.__destructure_map(map__61366);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61366__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61366__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61366__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq61360){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61360));
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
var len__4829__auto___62264 = arguments.length;
var i__4830__auto___62265 = (0);
while(true){
if((i__4830__auto___62265 < len__4829__auto___62264)){
args__4835__auto__.push((arguments[i__4830__auto___62265]));

var G__62266 = (i__4830__auto___62265 + (1));
i__4830__auto___62265 = G__62266;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq61367){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61367));
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
var len__4829__auto___62267 = arguments.length;
var i__4830__auto___62268 = (0);
while(true){
if((i__4830__auto___62268 < len__4829__auto___62267)){
args__4835__auto__.push((arguments[i__4830__auto___62268]));

var G__62269 = (i__4830__auto___62268 + (1));
i__4830__auto___62268 = G__62269;
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
var map__61379 = conformed_args__59324__auto__;
var map__61379__$1 = cljs.core.__destructure_map(map__61379);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61379__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61379__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61379__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq61371){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61371));
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
var len__4829__auto___62272 = arguments.length;
var i__4830__auto___62273 = (0);
while(true){
if((i__4830__auto___62273 < len__4829__auto___62272)){
args__4835__auto__.push((arguments[i__4830__auto___62273]));

var G__62274 = (i__4830__auto___62273 + (1));
i__4830__auto___62273 = G__62274;
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
var map__61384 = conformed_args__59324__auto__;
var map__61384__$1 = cljs.core.__destructure_map(map__61384);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq61380){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61380));
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
var len__4829__auto___62275 = arguments.length;
var i__4830__auto___62276 = (0);
while(true){
if((i__4830__auto___62276 < len__4829__auto___62275)){
args__4835__auto__.push((arguments[i__4830__auto___62276]));

var G__62277 = (i__4830__auto___62276 + (1));
i__4830__auto___62276 = G__62277;
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
var map__61397 = conformed_args__59324__auto__;
var map__61397__$1 = cljs.core.__destructure_map(map__61397);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61397__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61397__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61397__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq61388){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61388));
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
var len__4829__auto___62278 = arguments.length;
var i__4830__auto___62279 = (0);
while(true){
if((i__4830__auto___62279 < len__4829__auto___62278)){
args__4835__auto__.push((arguments[i__4830__auto___62279]));

var G__62280 = (i__4830__auto___62279 + (1));
i__4830__auto___62279 = G__62280;
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
var map__61405 = conformed_args__59324__auto__;
var map__61405__$1 = cljs.core.__destructure_map(map__61405);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61405__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61405__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61405__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq61401){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61401));
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
var len__4829__auto___62281 = arguments.length;
var i__4830__auto___62282 = (0);
while(true){
if((i__4830__auto___62282 < len__4829__auto___62281)){
args__4835__auto__.push((arguments[i__4830__auto___62282]));

var G__62283 = (i__4830__auto___62282 + (1));
i__4830__auto___62282 = G__62283;
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
var map__61413 = conformed_args__59324__auto__;
var map__61413__$1 = cljs.core.__destructure_map(map__61413);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61413__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61413__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61413__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq61410){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61410));
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
var len__4829__auto___62286 = arguments.length;
var i__4830__auto___62287 = (0);
while(true){
if((i__4830__auto___62287 < len__4829__auto___62286)){
args__4835__auto__.push((arguments[i__4830__auto___62287]));

var G__62288 = (i__4830__auto___62287 + (1));
i__4830__auto___62287 = G__62288;
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
var map__61426 = conformed_args__59324__auto__;
var map__61426__$1 = cljs.core.__destructure_map(map__61426);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61426__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61426__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61426__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq61419){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61419));
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
var len__4829__auto___62289 = arguments.length;
var i__4830__auto___62290 = (0);
while(true){
if((i__4830__auto___62290 < len__4829__auto___62289)){
args__4835__auto__.push((arguments[i__4830__auto___62290]));

var G__62291 = (i__4830__auto___62290 + (1));
i__4830__auto___62290 = G__62291;
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
var map__61434 = conformed_args__59324__auto__;
var map__61434__$1 = cljs.core.__destructure_map(map__61434);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61434__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61434__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61434__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq61428){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61428));
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq61437){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61437));
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
var len__4829__auto___62295 = arguments.length;
var i__4830__auto___62296 = (0);
while(true){
if((i__4830__auto___62296 < len__4829__auto___62295)){
args__4835__auto__.push((arguments[i__4830__auto___62296]));

var G__62297 = (i__4830__auto___62296 + (1));
i__4830__auto___62296 = G__62297;
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
var map__61451 = conformed_args__59324__auto__;
var map__61451__$1 = cljs.core.__destructure_map(map__61451);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq61449){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61449));
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
var len__4829__auto___62302 = arguments.length;
var i__4830__auto___62303 = (0);
while(true){
if((i__4830__auto___62303 < len__4829__auto___62302)){
args__4835__auto__.push((arguments[i__4830__auto___62303]));

var G__62304 = (i__4830__auto___62303 + (1));
i__4830__auto___62303 = G__62304;
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
var map__61462 = conformed_args__59324__auto__;
var map__61462__$1 = cljs.core.__destructure_map(map__61462);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61462__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61462__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61462__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq61457){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61457));
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
var len__4829__auto___62307 = arguments.length;
var i__4830__auto___62308 = (0);
while(true){
if((i__4830__auto___62308 < len__4829__auto___62307)){
args__4835__auto__.push((arguments[i__4830__auto___62308]));

var G__62309 = (i__4830__auto___62308 + (1));
i__4830__auto___62308 = G__62309;
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
var map__61469 = conformed_args__59324__auto__;
var map__61469__$1 = cljs.core.__destructure_map(map__61469);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61469__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61469__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61469__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq61466){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61466));
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
var len__4829__auto___62310 = arguments.length;
var i__4830__auto___62311 = (0);
while(true){
if((i__4830__auto___62311 < len__4829__auto___62310)){
args__4835__auto__.push((arguments[i__4830__auto___62311]));

var G__62312 = (i__4830__auto___62311 + (1));
i__4830__auto___62311 = G__62312;
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
var map__61472 = conformed_args__59324__auto__;
var map__61472__$1 = cljs.core.__destructure_map(map__61472);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61472__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61472__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61472__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq61470){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61470));
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
var len__4829__auto___62315 = arguments.length;
var i__4830__auto___62316 = (0);
while(true){
if((i__4830__auto___62316 < len__4829__auto___62315)){
args__4835__auto__.push((arguments[i__4830__auto___62316]));

var G__62319 = (i__4830__auto___62316 + (1));
i__4830__auto___62316 = G__62319;
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
var map__61477 = conformed_args__59324__auto__;
var map__61477__$1 = cljs.core.__destructure_map(map__61477);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61477__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61477__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61477__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq61474){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61474));
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
var len__4829__auto___62320 = arguments.length;
var i__4830__auto___62321 = (0);
while(true){
if((i__4830__auto___62321 < len__4829__auto___62320)){
args__4835__auto__.push((arguments[i__4830__auto___62321]));

var G__62322 = (i__4830__auto___62321 + (1));
i__4830__auto___62321 = G__62322;
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
var map__61480 = conformed_args__59324__auto__;
var map__61480__$1 = cljs.core.__destructure_map(map__61480);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61480__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61480__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61480__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq61479){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61479));
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
var len__4829__auto___62327 = arguments.length;
var i__4830__auto___62328 = (0);
while(true){
if((i__4830__auto___62328 < len__4829__auto___62327)){
args__4835__auto__.push((arguments[i__4830__auto___62328]));

var G__62329 = (i__4830__auto___62328 + (1));
i__4830__auto___62328 = G__62329;
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
var map__61486 = conformed_args__59324__auto__;
var map__61486__$1 = cljs.core.__destructure_map(map__61486);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61486__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61486__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61486__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq61484){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61484));
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
var len__4829__auto___62332 = arguments.length;
var i__4830__auto___62333 = (0);
while(true){
if((i__4830__auto___62333 < len__4829__auto___62332)){
args__4835__auto__.push((arguments[i__4830__auto___62333]));

var G__62334 = (i__4830__auto___62333 + (1));
i__4830__auto___62333 = G__62334;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq61495){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61495));
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
var len__4829__auto___62335 = arguments.length;
var i__4830__auto___62336 = (0);
while(true){
if((i__4830__auto___62336 < len__4829__auto___62335)){
args__4835__auto__.push((arguments[i__4830__auto___62336]));

var G__62337 = (i__4830__auto___62336 + (1));
i__4830__auto___62336 = G__62337;
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
var map__61501 = conformed_args__59324__auto__;
var map__61501__$1 = cljs.core.__destructure_map(map__61501);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61501__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61501__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61501__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq61500){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61500));
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
var map__61508 = conformed_args__59324__auto__;
var map__61508__$1 = cljs.core.__destructure_map(map__61508);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61508__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61508__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61508__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq61503){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61503));
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
var len__4829__auto___62345 = arguments.length;
var i__4830__auto___62347 = (0);
while(true){
if((i__4830__auto___62347 < len__4829__auto___62345)){
args__4835__auto__.push((arguments[i__4830__auto___62347]));

var G__62348 = (i__4830__auto___62347 + (1));
i__4830__auto___62347 = G__62348;
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
var map__61512 = conformed_args__59324__auto__;
var map__61512__$1 = cljs.core.__destructure_map(map__61512);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61512__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61512__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61512__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq61509){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61509));
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
var len__4829__auto___62350 = arguments.length;
var i__4830__auto___62351 = (0);
while(true){
if((i__4830__auto___62351 < len__4829__auto___62350)){
args__4835__auto__.push((arguments[i__4830__auto___62351]));

var G__62352 = (i__4830__auto___62351 + (1));
i__4830__auto___62351 = G__62352;
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
var map__61523 = conformed_args__59324__auto__;
var map__61523__$1 = cljs.core.__destructure_map(map__61523);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61523__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61523__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61523__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq61519){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61519));
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
var len__4829__auto___62354 = arguments.length;
var i__4830__auto___62355 = (0);
while(true){
if((i__4830__auto___62355 < len__4829__auto___62354)){
args__4835__auto__.push((arguments[i__4830__auto___62355]));

var G__62356 = (i__4830__auto___62355 + (1));
i__4830__auto___62355 = G__62356;
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
var map__61529 = conformed_args__59324__auto__;
var map__61529__$1 = cljs.core.__destructure_map(map__61529);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61529__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61529__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61529__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq61526){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61526));
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
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61536 = conformed_args__59324__auto__;
var map__61536__$1 = cljs.core.__destructure_map(map__61536);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61536__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61536__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61536__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq61532){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61532));
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
var len__4829__auto___62365 = arguments.length;
var i__4830__auto___62366 = (0);
while(true){
if((i__4830__auto___62366 < len__4829__auto___62365)){
args__4835__auto__.push((arguments[i__4830__auto___62366]));

var G__62368 = (i__4830__auto___62366 + (1));
i__4830__auto___62366 = G__62368;
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
var map__61549 = conformed_args__59324__auto__;
var map__61549__$1 = cljs.core.__destructure_map(map__61549);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61549__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61549__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61549__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq61544){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61544));
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
var len__4829__auto___62370 = arguments.length;
var i__4830__auto___62371 = (0);
while(true){
if((i__4830__auto___62371 < len__4829__auto___62370)){
args__4835__auto__.push((arguments[i__4830__auto___62371]));

var G__62372 = (i__4830__auto___62371 + (1));
i__4830__auto___62371 = G__62372;
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
var map__61556 = conformed_args__59324__auto__;
var map__61556__$1 = cljs.core.__destructure_map(map__61556);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61556__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61556__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61556__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq61552){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61552));
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
var len__4829__auto___62373 = arguments.length;
var i__4830__auto___62374 = (0);
while(true){
if((i__4830__auto___62374 < len__4829__auto___62373)){
args__4835__auto__.push((arguments[i__4830__auto___62374]));

var G__62375 = (i__4830__auto___62374 + (1));
i__4830__auto___62374 = G__62375;
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
var map__61561 = conformed_args__59324__auto__;
var map__61561__$1 = cljs.core.__destructure_map(map__61561);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61561__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61561__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61561__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq61559){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61559));
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
var len__4829__auto___62378 = arguments.length;
var i__4830__auto___62379 = (0);
while(true){
if((i__4830__auto___62379 < len__4829__auto___62378)){
args__4835__auto__.push((arguments[i__4830__auto___62379]));

var G__62380 = (i__4830__auto___62379 + (1));
i__4830__auto___62379 = G__62380;
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
var map__61563 = conformed_args__59324__auto__;
var map__61563__$1 = cljs.core.__destructure_map(map__61563);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61563__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61563__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61563__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq61562){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61562));
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
var len__4829__auto___62382 = arguments.length;
var i__4830__auto___62383 = (0);
while(true){
if((i__4830__auto___62383 < len__4829__auto___62382)){
args__4835__auto__.push((arguments[i__4830__auto___62383]));

var G__62384 = (i__4830__auto___62383 + (1));
i__4830__auto___62383 = G__62384;
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
var map__61565 = conformed_args__59324__auto__;
var map__61565__$1 = cljs.core.__destructure_map(map__61565);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61565__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61565__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61565__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq61564){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61564));
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
var len__4829__auto___62387 = arguments.length;
var i__4830__auto___62388 = (0);
while(true){
if((i__4830__auto___62388 < len__4829__auto___62387)){
args__4835__auto__.push((arguments[i__4830__auto___62388]));

var G__62390 = (i__4830__auto___62388 + (1));
i__4830__auto___62388 = G__62390;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq61566){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61566));
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
var len__4829__auto___62393 = arguments.length;
var i__4830__auto___62394 = (0);
while(true){
if((i__4830__auto___62394 < len__4829__auto___62393)){
args__4835__auto__.push((arguments[i__4830__auto___62394]));

var G__62395 = (i__4830__auto___62394 + (1));
i__4830__auto___62394 = G__62395;
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
var map__61569 = conformed_args__59324__auto__;
var map__61569__$1 = cljs.core.__destructure_map(map__61569);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61569__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61569__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61569__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq61568){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61568));
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
var len__4829__auto___62401 = arguments.length;
var i__4830__auto___62402 = (0);
while(true){
if((i__4830__auto___62402 < len__4829__auto___62401)){
args__4835__auto__.push((arguments[i__4830__auto___62402]));

var G__62404 = (i__4830__auto___62402 + (1));
i__4830__auto___62402 = G__62404;
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
var map__61571 = conformed_args__59324__auto__;
var map__61571__$1 = cljs.core.__destructure_map(map__61571);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61571__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61571__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61571__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq61570){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61570));
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
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq61572){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61572));
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
var len__4829__auto___62413 = arguments.length;
var i__4830__auto___62414 = (0);
while(true){
if((i__4830__auto___62414 < len__4829__auto___62413)){
args__4835__auto__.push((arguments[i__4830__auto___62414]));

var G__62415 = (i__4830__auto___62414 + (1));
i__4830__auto___62414 = G__62415;
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
var len__4829__auto___62421 = arguments.length;
var i__4830__auto___62424 = (0);
while(true){
if((i__4830__auto___62424 < len__4829__auto___62421)){
args__4835__auto__.push((arguments[i__4830__auto___62424]));

var G__62425 = (i__4830__auto___62424 + (1));
i__4830__auto___62424 = G__62425;
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
var len__4829__auto___62430 = arguments.length;
var i__4830__auto___62431 = (0);
while(true){
if((i__4830__auto___62431 < len__4829__auto___62430)){
args__4835__auto__.push((arguments[i__4830__auto___62431]));

var G__62432 = (i__4830__auto___62431 + (1));
i__4830__auto___62431 = G__62432;
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
var len__4829__auto___62440 = arguments.length;
var i__4830__auto___62441 = (0);
while(true){
if((i__4830__auto___62441 < len__4829__auto___62440)){
args__4835__auto__.push((arguments[i__4830__auto___62441]));

var G__62442 = (i__4830__auto___62441 + (1));
i__4830__auto___62441 = G__62442;
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
var len__4829__auto___62447 = arguments.length;
var i__4830__auto___62448 = (0);
while(true){
if((i__4830__auto___62448 < len__4829__auto___62447)){
args__4835__auto__.push((arguments[i__4830__auto___62448]));

var G__62449 = (i__4830__auto___62448 + (1));
i__4830__auto___62448 = G__62449;
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
var len__4829__auto___62450 = arguments.length;
var i__4830__auto___62451 = (0);
while(true){
if((i__4830__auto___62451 < len__4829__auto___62450)){
args__4835__auto__.push((arguments[i__4830__auto___62451]));

var G__62452 = (i__4830__auto___62451 + (1));
i__4830__auto___62451 = G__62452;
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
var len__4829__auto___62459 = arguments.length;
var i__4830__auto___62461 = (0);
while(true){
if((i__4830__auto___62461 < len__4829__auto___62459)){
args__4835__auto__.push((arguments[i__4830__auto___62461]));

var G__62463 = (i__4830__auto___62461 + (1));
i__4830__auto___62461 = G__62463;
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
var map__61592 = conformed_args__59324__auto__;
var map__61592__$1 = cljs.core.__destructure_map(map__61592);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq61591){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61591));
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
var len__4829__auto___62466 = arguments.length;
var i__4830__auto___62467 = (0);
while(true){
if((i__4830__auto___62467 < len__4829__auto___62466)){
args__4835__auto__.push((arguments[i__4830__auto___62467]));

var G__62468 = (i__4830__auto___62467 + (1));
i__4830__auto___62467 = G__62468;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq61593){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61593));
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
var len__4829__auto___62469 = arguments.length;
var i__4830__auto___62470 = (0);
while(true){
if((i__4830__auto___62470 < len__4829__auto___62469)){
args__4835__auto__.push((arguments[i__4830__auto___62470]));

var G__62471 = (i__4830__auto___62470 + (1));
i__4830__auto___62470 = G__62471;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq61595){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61595));
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
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61598 = conformed_args__59324__auto__;
var map__61598__$1 = cljs.core.__destructure_map(map__61598);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61598__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61598__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61598__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq61597){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61597));
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
var len__4829__auto___62475 = arguments.length;
var i__4830__auto___62476 = (0);
while(true){
if((i__4830__auto___62476 < len__4829__auto___62475)){
args__4835__auto__.push((arguments[i__4830__auto___62476]));

var G__62477 = (i__4830__auto___62476 + (1));
i__4830__auto___62476 = G__62477;
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
var map__61600 = conformed_args__59324__auto__;
var map__61600__$1 = cljs.core.__destructure_map(map__61600);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61600__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61600__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61600__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq61599){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61599));
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
var len__4829__auto___62485 = arguments.length;
var i__4830__auto___62486 = (0);
while(true){
if((i__4830__auto___62486 < len__4829__auto___62485)){
args__4835__auto__.push((arguments[i__4830__auto___62486]));

var G__62487 = (i__4830__auto___62486 + (1));
i__4830__auto___62486 = G__62487;
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
var map__61604 = conformed_args__59324__auto__;
var map__61604__$1 = cljs.core.__destructure_map(map__61604);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq61601){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61601));
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
var len__4829__auto___62488 = arguments.length;
var i__4830__auto___62489 = (0);
while(true){
if((i__4830__auto___62489 < len__4829__auto___62488)){
args__4835__auto__.push((arguments[i__4830__auto___62489]));

var G__62490 = (i__4830__auto___62489 + (1));
i__4830__auto___62489 = G__62490;
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
var map__61606 = conformed_args__59324__auto__;
var map__61606__$1 = cljs.core.__destructure_map(map__61606);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61606__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61606__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61606__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq61605){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61605));
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
var len__4829__auto___62491 = arguments.length;
var i__4830__auto___62492 = (0);
while(true){
if((i__4830__auto___62492 < len__4829__auto___62491)){
args__4835__auto__.push((arguments[i__4830__auto___62492]));

var G__62493 = (i__4830__auto___62492 + (1));
i__4830__auto___62492 = G__62493;
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
var map__61608 = conformed_args__59324__auto__;
var map__61608__$1 = cljs.core.__destructure_map(map__61608);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61608__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61608__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61608__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq61607){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61607));
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
var len__4829__auto___62495 = arguments.length;
var i__4830__auto___62496 = (0);
while(true){
if((i__4830__auto___62496 < len__4829__auto___62495)){
args__4835__auto__.push((arguments[i__4830__auto___62496]));

var G__62497 = (i__4830__auto___62496 + (1));
i__4830__auto___62496 = G__62497;
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
var map__61611 = conformed_args__59324__auto__;
var map__61611__$1 = cljs.core.__destructure_map(map__61611);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61611__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61611__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61611__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq61610){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61610));
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
var len__4829__auto___62504 = arguments.length;
var i__4830__auto___62505 = (0);
while(true){
if((i__4830__auto___62505 < len__4829__auto___62504)){
args__4835__auto__.push((arguments[i__4830__auto___62505]));

var G__62506 = (i__4830__auto___62505 + (1));
i__4830__auto___62505 = G__62506;
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
var map__61614 = conformed_args__59324__auto__;
var map__61614__$1 = cljs.core.__destructure_map(map__61614);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61614__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61614__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61614__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq61612){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61612));
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
var len__4829__auto___62507 = arguments.length;
var i__4830__auto___62508 = (0);
while(true){
if((i__4830__auto___62508 < len__4829__auto___62507)){
args__4835__auto__.push((arguments[i__4830__auto___62508]));

var G__62509 = (i__4830__auto___62508 + (1));
i__4830__auto___62508 = G__62509;
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
var map__61618 = conformed_args__59324__auto__;
var map__61618__$1 = cljs.core.__destructure_map(map__61618);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq61616){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61616));
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
var len__4829__auto___62510 = arguments.length;
var i__4830__auto___62511 = (0);
while(true){
if((i__4830__auto___62511 < len__4829__auto___62510)){
args__4835__auto__.push((arguments[i__4830__auto___62511]));

var G__62512 = (i__4830__auto___62511 + (1));
i__4830__auto___62511 = G__62512;
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
var map__61621 = conformed_args__59324__auto__;
var map__61621__$1 = cljs.core.__destructure_map(map__61621);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61621__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61621__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61621__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq61620){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61620));
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
var len__4829__auto___62513 = arguments.length;
var i__4830__auto___62514 = (0);
while(true){
if((i__4830__auto___62514 < len__4829__auto___62513)){
args__4835__auto__.push((arguments[i__4830__auto___62514]));

var G__62515 = (i__4830__auto___62514 + (1));
i__4830__auto___62514 = G__62515;
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
var map__61624 = conformed_args__59324__auto__;
var map__61624__$1 = cljs.core.__destructure_map(map__61624);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61624__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61624__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61624__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq61623){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61623));
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
var len__4829__auto___62516 = arguments.length;
var i__4830__auto___62517 = (0);
while(true){
if((i__4830__auto___62517 < len__4829__auto___62516)){
args__4835__auto__.push((arguments[i__4830__auto___62517]));

var G__62518 = (i__4830__auto___62517 + (1));
i__4830__auto___62517 = G__62518;
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
var map__61628 = conformed_args__59324__auto__;
var map__61628__$1 = cljs.core.__destructure_map(map__61628);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61628__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61628__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61628__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq61627){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61627));
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
var len__4829__auto___62521 = arguments.length;
var i__4830__auto___62522 = (0);
while(true){
if((i__4830__auto___62522 < len__4829__auto___62521)){
args__4835__auto__.push((arguments[i__4830__auto___62522]));

var G__62524 = (i__4830__auto___62522 + (1));
i__4830__auto___62522 = G__62524;
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
var map__61632 = conformed_args__59324__auto__;
var map__61632__$1 = cljs.core.__destructure_map(map__61632);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61632__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61632__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61632__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq61631){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61631));
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
var len__4829__auto___62526 = arguments.length;
var i__4830__auto___62527 = (0);
while(true){
if((i__4830__auto___62527 < len__4829__auto___62526)){
args__4835__auto__.push((arguments[i__4830__auto___62527]));

var G__62528 = (i__4830__auto___62527 + (1));
i__4830__auto___62527 = G__62528;
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
var map__61636 = conformed_args__59324__auto__;
var map__61636__$1 = cljs.core.__destructure_map(map__61636);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61636__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61636__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61636__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq61635){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61635));
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
var len__4829__auto___62531 = arguments.length;
var i__4830__auto___62534 = (0);
while(true){
if((i__4830__auto___62534 < len__4829__auto___62531)){
args__4835__auto__.push((arguments[i__4830__auto___62534]));

var G__62535 = (i__4830__auto___62534 + (1));
i__4830__auto___62534 = G__62535;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq61637){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61637));
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
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61641 = conformed_args__59324__auto__;
var map__61641__$1 = cljs.core.__destructure_map(map__61641);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61641__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61641__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61641__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq61639){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61639));
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
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61643 = conformed_args__59324__auto__;
var map__61643__$1 = cljs.core.__destructure_map(map__61643);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61643__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61643__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq61642){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61642));
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
var len__4829__auto___62548 = arguments.length;
var i__4830__auto___62550 = (0);
while(true){
if((i__4830__auto___62550 < len__4829__auto___62548)){
args__4835__auto__.push((arguments[i__4830__auto___62550]));

var G__62551 = (i__4830__auto___62550 + (1));
i__4830__auto___62550 = G__62551;
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
var map__61647 = conformed_args__59324__auto__;
var map__61647__$1 = cljs.core.__destructure_map(map__61647);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61647__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61647__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61647__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq61644){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61644));
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
var len__4829__auto___62556 = arguments.length;
var i__4830__auto___62557 = (0);
while(true){
if((i__4830__auto___62557 < len__4829__auto___62556)){
args__4835__auto__.push((arguments[i__4830__auto___62557]));

var G__62558 = (i__4830__auto___62557 + (1));
i__4830__auto___62557 = G__62558;
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
var map__61649 = conformed_args__59324__auto__;
var map__61649__$1 = cljs.core.__destructure_map(map__61649);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61649__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61649__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61649__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq61648){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61648));
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
var len__4829__auto___62566 = arguments.length;
var i__4830__auto___62567 = (0);
while(true){
if((i__4830__auto___62567 < len__4829__auto___62566)){
args__4835__auto__.push((arguments[i__4830__auto___62567]));

var G__62568 = (i__4830__auto___62567 + (1));
i__4830__auto___62567 = G__62568;
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
var map__61651 = conformed_args__59324__auto__;
var map__61651__$1 = cljs.core.__destructure_map(map__61651);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61651__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61651__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61651__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq61650){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61650));
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
var len__4829__auto___62569 = arguments.length;
var i__4830__auto___62570 = (0);
while(true){
if((i__4830__auto___62570 < len__4829__auto___62569)){
args__4835__auto__.push((arguments[i__4830__auto___62570]));

var G__62571 = (i__4830__auto___62570 + (1));
i__4830__auto___62570 = G__62571;
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
var map__61653 = conformed_args__59324__auto__;
var map__61653__$1 = cljs.core.__destructure_map(map__61653);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61653__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61653__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61653__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq61652){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61652));
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
var len__4829__auto___62573 = arguments.length;
var i__4830__auto___62575 = (0);
while(true){
if((i__4830__auto___62575 < len__4829__auto___62573)){
args__4835__auto__.push((arguments[i__4830__auto___62575]));

var G__62576 = (i__4830__auto___62575 + (1));
i__4830__auto___62575 = G__62576;
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
var map__61658 = conformed_args__59324__auto__;
var map__61658__$1 = cljs.core.__destructure_map(map__61658);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61658__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61658__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61658__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq61654){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61654));
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
var len__4829__auto___62583 = arguments.length;
var i__4830__auto___62584 = (0);
while(true){
if((i__4830__auto___62584 < len__4829__auto___62583)){
args__4835__auto__.push((arguments[i__4830__auto___62584]));

var G__62585 = (i__4830__auto___62584 + (1));
i__4830__auto___62584 = G__62585;
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
var map__61662 = conformed_args__59324__auto__;
var map__61662__$1 = cljs.core.__destructure_map(map__61662);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61662__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61662__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61662__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq61659){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61659));
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
var len__4829__auto___62586 = arguments.length;
var i__4830__auto___62587 = (0);
while(true){
if((i__4830__auto___62587 < len__4829__auto___62586)){
args__4835__auto__.push((arguments[i__4830__auto___62587]));

var G__62588 = (i__4830__auto___62587 + (1));
i__4830__auto___62587 = G__62588;
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
var map__61664 = conformed_args__59324__auto__;
var map__61664__$1 = cljs.core.__destructure_map(map__61664);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61664__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61664__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61664__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq61663){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61663));
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
var len__4829__auto___62590 = arguments.length;
var i__4830__auto___62591 = (0);
while(true){
if((i__4830__auto___62591 < len__4829__auto___62590)){
args__4835__auto__.push((arguments[i__4830__auto___62591]));

var G__62592 = (i__4830__auto___62591 + (1));
i__4830__auto___62591 = G__62592;
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
var map__61666 = conformed_args__59324__auto__;
var map__61666__$1 = cljs.core.__destructure_map(map__61666);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61666__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61666__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61666__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq61665){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61665));
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
var len__4829__auto___62597 = arguments.length;
var i__4830__auto___62598 = (0);
while(true){
if((i__4830__auto___62598 < len__4829__auto___62597)){
args__4835__auto__.push((arguments[i__4830__auto___62598]));

var G__62599 = (i__4830__auto___62598 + (1));
i__4830__auto___62598 = G__62599;
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
var map__61671 = conformed_args__59324__auto__;
var map__61671__$1 = cljs.core.__destructure_map(map__61671);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61671__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61671__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61671__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq61667){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61667));
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
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59324__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61675 = conformed_args__59324__auto__;
var map__61675__$1 = cljs.core.__destructure_map(map__61675);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61675__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61675__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61675__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq61674){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61674));
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
var len__4829__auto___62608 = arguments.length;
var i__4830__auto___62609 = (0);
while(true){
if((i__4830__auto___62609 < len__4829__auto___62608)){
args__4835__auto__.push((arguments[i__4830__auto___62609]));

var G__62610 = (i__4830__auto___62609 + (1));
i__4830__auto___62609 = G__62610;
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
var map__61680 = conformed_args__59324__auto__;
var map__61680__$1 = cljs.core.__destructure_map(map__61680);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61680__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61680__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61680__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq61676){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61676));
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
var len__4829__auto___62611 = arguments.length;
var i__4830__auto___62612 = (0);
while(true){
if((i__4830__auto___62612 < len__4829__auto___62611)){
args__4835__auto__.push((arguments[i__4830__auto___62612]));

var G__62613 = (i__4830__auto___62612 + (1));
i__4830__auto___62612 = G__62613;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq61683){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61683));
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
var len__4829__auto___62615 = arguments.length;
var i__4830__auto___62616 = (0);
while(true){
if((i__4830__auto___62616 < len__4829__auto___62615)){
args__4835__auto__.push((arguments[i__4830__auto___62616]));

var G__62617 = (i__4830__auto___62616 + (1));
i__4830__auto___62616 = G__62617;
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
var map__61686 = conformed_args__59324__auto__;
var map__61686__$1 = cljs.core.__destructure_map(map__61686);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61686__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61686__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61686__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq61685){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61685));
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
var len__4829__auto___62622 = arguments.length;
var i__4830__auto___62623 = (0);
while(true){
if((i__4830__auto___62623 < len__4829__auto___62622)){
args__4835__auto__.push((arguments[i__4830__auto___62623]));

var G__62625 = (i__4830__auto___62623 + (1));
i__4830__auto___62623 = G__62625;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq61687){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61687));
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
var len__4829__auto___62629 = arguments.length;
var i__4830__auto___62630 = (0);
while(true){
if((i__4830__auto___62630 < len__4829__auto___62629)){
args__4835__auto__.push((arguments[i__4830__auto___62630]));

var G__62631 = (i__4830__auto___62630 + (1));
i__4830__auto___62630 = G__62631;
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
var map__61695 = conformed_args__59324__auto__;
var map__61695__$1 = cljs.core.__destructure_map(map__61695);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61695__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61695__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61695__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq61692){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61692));
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
var len__4829__auto___62632 = arguments.length;
var i__4830__auto___62633 = (0);
while(true){
if((i__4830__auto___62633 < len__4829__auto___62632)){
args__4835__auto__.push((arguments[i__4830__auto___62633]));

var G__62634 = (i__4830__auto___62633 + (1));
i__4830__auto___62633 = G__62634;
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
var map__61700 = conformed_args__59324__auto__;
var map__61700__$1 = cljs.core.__destructure_map(map__61700);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61700__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61700__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61700__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq61696){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61696));
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
var len__4829__auto___62638 = arguments.length;
var i__4830__auto___62639 = (0);
while(true){
if((i__4830__auto___62639 < len__4829__auto___62638)){
args__4835__auto__.push((arguments[i__4830__auto___62639]));

var G__62640 = (i__4830__auto___62639 + (1));
i__4830__auto___62639 = G__62640;
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
var map__61704 = conformed_args__59324__auto__;
var map__61704__$1 = cljs.core.__destructure_map(map__61704);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61704__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61704__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61704__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq61701){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61701));
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
var len__4829__auto___62641 = arguments.length;
var i__4830__auto___62642 = (0);
while(true){
if((i__4830__auto___62642 < len__4829__auto___62641)){
args__4835__auto__.push((arguments[i__4830__auto___62642]));

var G__62643 = (i__4830__auto___62642 + (1));
i__4830__auto___62642 = G__62643;
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
var map__61709 = conformed_args__59324__auto__;
var map__61709__$1 = cljs.core.__destructure_map(map__61709);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61709__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61709__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61709__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq61705){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61705));
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
var len__4829__auto___62647 = arguments.length;
var i__4830__auto___62648 = (0);
while(true){
if((i__4830__auto___62648 < len__4829__auto___62647)){
args__4835__auto__.push((arguments[i__4830__auto___62648]));

var G__62649 = (i__4830__auto___62648 + (1));
i__4830__auto___62648 = G__62649;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq61712){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61712));
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
var len__4829__auto___62651 = arguments.length;
var i__4830__auto___62652 = (0);
while(true){
if((i__4830__auto___62652 < len__4829__auto___62651)){
args__4835__auto__.push((arguments[i__4830__auto___62652]));

var G__62653 = (i__4830__auto___62652 + (1));
i__4830__auto___62652 = G__62653;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq61716){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61716));
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
var len__4829__auto___62660 = arguments.length;
var i__4830__auto___62661 = (0);
while(true){
if((i__4830__auto___62661 < len__4829__auto___62660)){
args__4835__auto__.push((arguments[i__4830__auto___62661]));

var G__62666 = (i__4830__auto___62661 + (1));
i__4830__auto___62661 = G__62666;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq61721){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61721));
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
var len__4829__auto___62671 = arguments.length;
var i__4830__auto___62672 = (0);
while(true){
if((i__4830__auto___62672 < len__4829__auto___62671)){
args__4835__auto__.push((arguments[i__4830__auto___62672]));

var G__62673 = (i__4830__auto___62672 + (1));
i__4830__auto___62672 = G__62673;
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
var map__61727 = conformed_args__59324__auto__;
var map__61727__$1 = cljs.core.__destructure_map(map__61727);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq61726){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61726));
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
var len__4829__auto___62675 = arguments.length;
var i__4830__auto___62676 = (0);
while(true){
if((i__4830__auto___62676 < len__4829__auto___62675)){
args__4835__auto__.push((arguments[i__4830__auto___62676]));

var G__62681 = (i__4830__auto___62676 + (1));
i__4830__auto___62676 = G__62681;
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
var map__61732 = conformed_args__59324__auto__;
var map__61732__$1 = cljs.core.__destructure_map(map__61732);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61732__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61732__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61732__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq61731){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61731));
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
var len__4829__auto___62706 = arguments.length;
var i__4830__auto___62707 = (0);
while(true){
if((i__4830__auto___62707 < len__4829__auto___62706)){
args__4835__auto__.push((arguments[i__4830__auto___62707]));

var G__62712 = (i__4830__auto___62707 + (1));
i__4830__auto___62707 = G__62712;
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
var map__61734 = conformed_args__59324__auto__;
var map__61734__$1 = cljs.core.__destructure_map(map__61734);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61734__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61734__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61734__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq61733){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61733));
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
var len__4829__auto___62732 = arguments.length;
var i__4830__auto___62733 = (0);
while(true){
if((i__4830__auto___62733 < len__4829__auto___62732)){
args__4835__auto__.push((arguments[i__4830__auto___62733]));

var G__62742 = (i__4830__auto___62733 + (1));
i__4830__auto___62733 = G__62742;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq61735){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61735));
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
var len__4829__auto___62743 = arguments.length;
var i__4830__auto___62744 = (0);
while(true){
if((i__4830__auto___62744 < len__4829__auto___62743)){
args__4835__auto__.push((arguments[i__4830__auto___62744]));

var G__62745 = (i__4830__auto___62744 + (1));
i__4830__auto___62744 = G__62745;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq61737){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61737));
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
var len__4829__auto___62748 = arguments.length;
var i__4830__auto___62753 = (0);
while(true){
if((i__4830__auto___62753 < len__4829__auto___62748)){
args__4835__auto__.push((arguments[i__4830__auto___62753]));

var G__62754 = (i__4830__auto___62753 + (1));
i__4830__auto___62753 = G__62754;
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
var map__61744 = conformed_args__59324__auto__;
var map__61744__$1 = cljs.core.__destructure_map(map__61744);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61744__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61744__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61744__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq61743){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61743));
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
var len__4829__auto___62770 = arguments.length;
var i__4830__auto___62771 = (0);
while(true){
if((i__4830__auto___62771 < len__4829__auto___62770)){
args__4835__auto__.push((arguments[i__4830__auto___62771]));

var G__62772 = (i__4830__auto___62771 + (1));
i__4830__auto___62771 = G__62772;
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
var map__61748 = conformed_args__59324__auto__;
var map__61748__$1 = cljs.core.__destructure_map(map__61748);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61748__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61748__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61748__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq61745){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61745));
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
var len__4829__auto___62777 = arguments.length;
var i__4830__auto___62778 = (0);
while(true){
if((i__4830__auto___62778 < len__4829__auto___62777)){
args__4835__auto__.push((arguments[i__4830__auto___62778]));

var G__62779 = (i__4830__auto___62778 + (1));
i__4830__auto___62778 = G__62779;
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
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59328__auto__], null),children__59326__auto____$1),css__59327__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq61752){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61752));
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
var len__4829__auto___62786 = arguments.length;
var i__4830__auto___62787 = (0);
while(true){
if((i__4830__auto___62787 < len__4829__auto___62786)){
args__4835__auto__.push((arguments[i__4830__auto___62787]));

var G__62788 = (i__4830__auto___62787 + (1));
i__4830__auto___62787 = G__62788;
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
var map__61759 = conformed_args__59324__auto__;
var map__61759__$1 = cljs.core.__destructure_map(map__61759);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61759__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61759__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61759__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq61758){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61758));
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
var len__4829__auto___62798 = arguments.length;
var i__4830__auto___62799 = (0);
while(true){
if((i__4830__auto___62799 < len__4829__auto___62798)){
args__4835__auto__.push((arguments[i__4830__auto___62799]));

var G__62800 = (i__4830__auto___62799 + (1));
i__4830__auto___62799 = G__62800;
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
var map__61767 = conformed_args__59324__auto__;
var map__61767__$1 = cljs.core.__destructure_map(map__61767);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61767__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61767__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61767__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq61766){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61766));
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
var len__4829__auto___62802 = arguments.length;
var i__4830__auto___62803 = (0);
while(true){
if((i__4830__auto___62803 < len__4829__auto___62802)){
args__4835__auto__.push((arguments[i__4830__auto___62803]));

var G__62804 = (i__4830__auto___62803 + (1));
i__4830__auto___62803 = G__62804;
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
var len__4829__auto___62808 = arguments.length;
var i__4830__auto___62809 = (0);
while(true){
if((i__4830__auto___62809 < len__4829__auto___62808)){
args__4835__auto__.push((arguments[i__4830__auto___62809]));

var G__62810 = (i__4830__auto___62809 + (1));
i__4830__auto___62809 = G__62810;
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
var len__4829__auto___62821 = arguments.length;
var i__4830__auto___62823 = (0);
while(true){
if((i__4830__auto___62823 < len__4829__auto___62821)){
args__4835__auto__.push((arguments[i__4830__auto___62823]));

var G__62824 = (i__4830__auto___62823 + (1));
i__4830__auto___62823 = G__62824;
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
var map__61774 = conformed_args__59324__auto__;
var map__61774__$1 = cljs.core.__destructure_map(map__61774);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61774__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61774__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61774__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
var len__4829__auto___62834 = arguments.length;
var i__4830__auto___62835 = (0);
while(true){
if((i__4830__auto___62835 < len__4829__auto___62834)){
args__4835__auto__.push((arguments[i__4830__auto___62835]));

var G__62836 = (i__4830__auto___62835 + (1));
i__4830__auto___62835 = G__62836;
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
var map__61776 = conformed_args__59324__auto__;
var map__61776__$1 = cljs.core.__destructure_map(map__61776);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61776__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61776__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61776__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq61775){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61775));
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
var len__4829__auto___62841 = arguments.length;
var i__4830__auto___62842 = (0);
while(true){
if((i__4830__auto___62842 < len__4829__auto___62841)){
args__4835__auto__.push((arguments[i__4830__auto___62842]));

var G__62843 = (i__4830__auto___62842 + (1));
i__4830__auto___62842 = G__62843;
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
var map__61778 = conformed_args__59324__auto__;
var map__61778__$1 = cljs.core.__destructure_map(map__61778);
var css__59327__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61778__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__59325__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61778__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59326__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61778__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq61777){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61777));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
