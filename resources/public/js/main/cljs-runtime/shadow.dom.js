goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_56188 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_56188(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_56194 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_56194(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__55354 = coll;
var G__55355 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__55354,G__55355) : shadow.dom.lazy_native_coll_seq.call(null,G__55354,G__55355));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__55410 = arguments.length;
switch (G__55410) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__55443 = arguments.length;
switch (G__55443) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__55445 = arguments.length;
switch (G__55445) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__55457 = arguments.length;
switch (G__55457) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__55468 = arguments.length;
switch (G__55468) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__55476 = arguments.length;
switch (G__55476) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e55482){if((e55482 instanceof Object)){
var e = e55482;
return console.log("didnt support attachEvent",el,e);
} else {
throw e55482;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__55483 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__55484 = null;
var count__55485 = (0);
var i__55486 = (0);
while(true){
if((i__55486 < count__55485)){
var el = chunk__55484.cljs$core$IIndexed$_nth$arity$2(null,i__55486);
var handler_56272__$1 = ((function (seq__55483,chunk__55484,count__55485,i__55486,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__55483,chunk__55484,count__55485,i__55486,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_56272__$1);


var G__56273 = seq__55483;
var G__56274 = chunk__55484;
var G__56275 = count__55485;
var G__56276 = (i__55486 + (1));
seq__55483 = G__56273;
chunk__55484 = G__56274;
count__55485 = G__56275;
i__55486 = G__56276;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55483);
if(temp__5753__auto__){
var seq__55483__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55483__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55483__$1);
var G__56277 = cljs.core.chunk_rest(seq__55483__$1);
var G__56278 = c__4649__auto__;
var G__56279 = cljs.core.count(c__4649__auto__);
var G__56280 = (0);
seq__55483 = G__56277;
chunk__55484 = G__56278;
count__55485 = G__56279;
i__55486 = G__56280;
continue;
} else {
var el = cljs.core.first(seq__55483__$1);
var handler_56281__$1 = ((function (seq__55483,chunk__55484,count__55485,i__55486,el,seq__55483__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__55483,chunk__55484,count__55485,i__55486,el,seq__55483__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_56281__$1);


var G__56282 = cljs.core.next(seq__55483__$1);
var G__56283 = null;
var G__56284 = (0);
var G__56285 = (0);
seq__55483 = G__56282;
chunk__55484 = G__56283;
count__55485 = G__56284;
i__55486 = G__56285;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__55493 = arguments.length;
switch (G__55493) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__55496 = cljs.core.seq(events);
var chunk__55497 = null;
var count__55498 = (0);
var i__55499 = (0);
while(true){
if((i__55499 < count__55498)){
var vec__55506 = chunk__55497.cljs$core$IIndexed$_nth$arity$2(null,i__55499);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55506,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55506,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56288 = seq__55496;
var G__56289 = chunk__55497;
var G__56290 = count__55498;
var G__56291 = (i__55499 + (1));
seq__55496 = G__56288;
chunk__55497 = G__56289;
count__55498 = G__56290;
i__55499 = G__56291;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55496);
if(temp__5753__auto__){
var seq__55496__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55496__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55496__$1);
var G__56292 = cljs.core.chunk_rest(seq__55496__$1);
var G__56293 = c__4649__auto__;
var G__56294 = cljs.core.count(c__4649__auto__);
var G__56295 = (0);
seq__55496 = G__56292;
chunk__55497 = G__56293;
count__55498 = G__56294;
i__55499 = G__56295;
continue;
} else {
var vec__55513 = cljs.core.first(seq__55496__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55513,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55513,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56296 = cljs.core.next(seq__55496__$1);
var G__56297 = null;
var G__56298 = (0);
var G__56299 = (0);
seq__55496 = G__56296;
chunk__55497 = G__56297;
count__55498 = G__56298;
i__55499 = G__56299;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__55516 = cljs.core.seq(styles);
var chunk__55517 = null;
var count__55518 = (0);
var i__55519 = (0);
while(true){
if((i__55519 < count__55518)){
var vec__55528 = chunk__55517.cljs$core$IIndexed$_nth$arity$2(null,i__55519);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55528,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55528,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__56300 = seq__55516;
var G__56301 = chunk__55517;
var G__56302 = count__55518;
var G__56303 = (i__55519 + (1));
seq__55516 = G__56300;
chunk__55517 = G__56301;
count__55518 = G__56302;
i__55519 = G__56303;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55516);
if(temp__5753__auto__){
var seq__55516__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55516__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55516__$1);
var G__56308 = cljs.core.chunk_rest(seq__55516__$1);
var G__56309 = c__4649__auto__;
var G__56310 = cljs.core.count(c__4649__auto__);
var G__56311 = (0);
seq__55516 = G__56308;
chunk__55517 = G__56309;
count__55518 = G__56310;
i__55519 = G__56311;
continue;
} else {
var vec__55531 = cljs.core.first(seq__55516__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55531,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55531,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__56312 = cljs.core.next(seq__55516__$1);
var G__56313 = null;
var G__56314 = (0);
var G__56315 = (0);
seq__55516 = G__56312;
chunk__55517 = G__56313;
count__55518 = G__56314;
i__55519 = G__56315;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__55534_56316 = key;
var G__55534_56317__$1 = (((G__55534_56316 instanceof cljs.core.Keyword))?G__55534_56316.fqn:null);
switch (G__55534_56317__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_56320 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_56320,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_56320,"aria-");
}
})())){
el.setAttribute(ks_56320,value);
} else {
(el[ks_56320] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__55567){
var map__55568 = p__55567;
var map__55568__$1 = cljs.core.__destructure_map(map__55568);
var props = map__55568__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55568__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__55569 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55569,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55569,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55569,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__55575 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__55575,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__55575;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__55578 = arguments.length;
switch (G__55578) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__55593){
var vec__55595 = p__55593;
var seq__55596 = cljs.core.seq(vec__55595);
var first__55597 = cljs.core.first(seq__55596);
var seq__55596__$1 = cljs.core.next(seq__55596);
var nn = first__55597;
var first__55597__$1 = cljs.core.first(seq__55596__$1);
var seq__55596__$2 = cljs.core.next(seq__55596__$1);
var np = first__55597__$1;
var nc = seq__55596__$2;
var node = vec__55595;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55599 = nn;
var G__55600 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__55599,G__55600) : create_fn.call(null,G__55599,G__55600));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55602 = nn;
var G__55603 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__55602,G__55603) : create_fn.call(null,G__55602,G__55603));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__55604 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55604,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55604,(1),null);
var seq__55607_56336 = cljs.core.seq(node_children);
var chunk__55608_56337 = null;
var count__55609_56338 = (0);
var i__55610_56339 = (0);
while(true){
if((i__55610_56339 < count__55609_56338)){
var child_struct_56340 = chunk__55608_56337.cljs$core$IIndexed$_nth$arity$2(null,i__55610_56339);
var children_56341 = shadow.dom.dom_node(child_struct_56340);
if(cljs.core.seq_QMARK_(children_56341)){
var seq__55632_56342 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56341));
var chunk__55634_56343 = null;
var count__55635_56344 = (0);
var i__55636_56345 = (0);
while(true){
if((i__55636_56345 < count__55635_56344)){
var child_56346 = chunk__55634_56343.cljs$core$IIndexed$_nth$arity$2(null,i__55636_56345);
if(cljs.core.truth_(child_56346)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56346);


var G__56347 = seq__55632_56342;
var G__56348 = chunk__55634_56343;
var G__56349 = count__55635_56344;
var G__56350 = (i__55636_56345 + (1));
seq__55632_56342 = G__56347;
chunk__55634_56343 = G__56348;
count__55635_56344 = G__56349;
i__55636_56345 = G__56350;
continue;
} else {
var G__56351 = seq__55632_56342;
var G__56352 = chunk__55634_56343;
var G__56353 = count__55635_56344;
var G__56354 = (i__55636_56345 + (1));
seq__55632_56342 = G__56351;
chunk__55634_56343 = G__56352;
count__55635_56344 = G__56353;
i__55636_56345 = G__56354;
continue;
}
} else {
var temp__5753__auto___56355 = cljs.core.seq(seq__55632_56342);
if(temp__5753__auto___56355){
var seq__55632_56356__$1 = temp__5753__auto___56355;
if(cljs.core.chunked_seq_QMARK_(seq__55632_56356__$1)){
var c__4649__auto___56357 = cljs.core.chunk_first(seq__55632_56356__$1);
var G__56358 = cljs.core.chunk_rest(seq__55632_56356__$1);
var G__56359 = c__4649__auto___56357;
var G__56360 = cljs.core.count(c__4649__auto___56357);
var G__56361 = (0);
seq__55632_56342 = G__56358;
chunk__55634_56343 = G__56359;
count__55635_56344 = G__56360;
i__55636_56345 = G__56361;
continue;
} else {
var child_56362 = cljs.core.first(seq__55632_56356__$1);
if(cljs.core.truth_(child_56362)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56362);


var G__56363 = cljs.core.next(seq__55632_56356__$1);
var G__56364 = null;
var G__56365 = (0);
var G__56366 = (0);
seq__55632_56342 = G__56363;
chunk__55634_56343 = G__56364;
count__55635_56344 = G__56365;
i__55636_56345 = G__56366;
continue;
} else {
var G__56367 = cljs.core.next(seq__55632_56356__$1);
var G__56368 = null;
var G__56369 = (0);
var G__56370 = (0);
seq__55632_56342 = G__56367;
chunk__55634_56343 = G__56368;
count__55635_56344 = G__56369;
i__55636_56345 = G__56370;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56341);
}


var G__56371 = seq__55607_56336;
var G__56372 = chunk__55608_56337;
var G__56373 = count__55609_56338;
var G__56374 = (i__55610_56339 + (1));
seq__55607_56336 = G__56371;
chunk__55608_56337 = G__56372;
count__55609_56338 = G__56373;
i__55610_56339 = G__56374;
continue;
} else {
var temp__5753__auto___56375 = cljs.core.seq(seq__55607_56336);
if(temp__5753__auto___56375){
var seq__55607_56376__$1 = temp__5753__auto___56375;
if(cljs.core.chunked_seq_QMARK_(seq__55607_56376__$1)){
var c__4649__auto___56377 = cljs.core.chunk_first(seq__55607_56376__$1);
var G__56378 = cljs.core.chunk_rest(seq__55607_56376__$1);
var G__56379 = c__4649__auto___56377;
var G__56380 = cljs.core.count(c__4649__auto___56377);
var G__56381 = (0);
seq__55607_56336 = G__56378;
chunk__55608_56337 = G__56379;
count__55609_56338 = G__56380;
i__55610_56339 = G__56381;
continue;
} else {
var child_struct_56382 = cljs.core.first(seq__55607_56376__$1);
var children_56383 = shadow.dom.dom_node(child_struct_56382);
if(cljs.core.seq_QMARK_(children_56383)){
var seq__55645_56384 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56383));
var chunk__55647_56385 = null;
var count__55648_56386 = (0);
var i__55649_56387 = (0);
while(true){
if((i__55649_56387 < count__55648_56386)){
var child_56388 = chunk__55647_56385.cljs$core$IIndexed$_nth$arity$2(null,i__55649_56387);
if(cljs.core.truth_(child_56388)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56388);


var G__56389 = seq__55645_56384;
var G__56390 = chunk__55647_56385;
var G__56391 = count__55648_56386;
var G__56392 = (i__55649_56387 + (1));
seq__55645_56384 = G__56389;
chunk__55647_56385 = G__56390;
count__55648_56386 = G__56391;
i__55649_56387 = G__56392;
continue;
} else {
var G__56393 = seq__55645_56384;
var G__56394 = chunk__55647_56385;
var G__56395 = count__55648_56386;
var G__56396 = (i__55649_56387 + (1));
seq__55645_56384 = G__56393;
chunk__55647_56385 = G__56394;
count__55648_56386 = G__56395;
i__55649_56387 = G__56396;
continue;
}
} else {
var temp__5753__auto___56397__$1 = cljs.core.seq(seq__55645_56384);
if(temp__5753__auto___56397__$1){
var seq__55645_56398__$1 = temp__5753__auto___56397__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55645_56398__$1)){
var c__4649__auto___56399 = cljs.core.chunk_first(seq__55645_56398__$1);
var G__56400 = cljs.core.chunk_rest(seq__55645_56398__$1);
var G__56401 = c__4649__auto___56399;
var G__56402 = cljs.core.count(c__4649__auto___56399);
var G__56403 = (0);
seq__55645_56384 = G__56400;
chunk__55647_56385 = G__56401;
count__55648_56386 = G__56402;
i__55649_56387 = G__56403;
continue;
} else {
var child_56404 = cljs.core.first(seq__55645_56398__$1);
if(cljs.core.truth_(child_56404)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56404);


var G__56405 = cljs.core.next(seq__55645_56398__$1);
var G__56406 = null;
var G__56407 = (0);
var G__56408 = (0);
seq__55645_56384 = G__56405;
chunk__55647_56385 = G__56406;
count__55648_56386 = G__56407;
i__55649_56387 = G__56408;
continue;
} else {
var G__56409 = cljs.core.next(seq__55645_56398__$1);
var G__56410 = null;
var G__56411 = (0);
var G__56412 = (0);
seq__55645_56384 = G__56409;
chunk__55647_56385 = G__56410;
count__55648_56386 = G__56411;
i__55649_56387 = G__56412;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56383);
}


var G__56413 = cljs.core.next(seq__55607_56376__$1);
var G__56414 = null;
var G__56415 = (0);
var G__56416 = (0);
seq__55607_56336 = G__56413;
chunk__55608_56337 = G__56414;
count__55609_56338 = G__56415;
i__55610_56339 = G__56416;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__55675 = cljs.core.seq(node);
var chunk__55676 = null;
var count__55677 = (0);
var i__55678 = (0);
while(true){
if((i__55678 < count__55677)){
var n = chunk__55676.cljs$core$IIndexed$_nth$arity$2(null,i__55678);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__56421 = seq__55675;
var G__56422 = chunk__55676;
var G__56423 = count__55677;
var G__56424 = (i__55678 + (1));
seq__55675 = G__56421;
chunk__55676 = G__56422;
count__55677 = G__56423;
i__55678 = G__56424;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55675);
if(temp__5753__auto__){
var seq__55675__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55675__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55675__$1);
var G__56428 = cljs.core.chunk_rest(seq__55675__$1);
var G__56429 = c__4649__auto__;
var G__56430 = cljs.core.count(c__4649__auto__);
var G__56431 = (0);
seq__55675 = G__56428;
chunk__55676 = G__56429;
count__55677 = G__56430;
i__55678 = G__56431;
continue;
} else {
var n = cljs.core.first(seq__55675__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__56432 = cljs.core.next(seq__55675__$1);
var G__56433 = null;
var G__56434 = (0);
var G__56435 = (0);
seq__55675 = G__56432;
chunk__55676 = G__56433;
count__55677 = G__56434;
i__55678 = G__56435;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__55686 = arguments.length;
switch (G__55686) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__55691 = arguments.length;
switch (G__55691) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__55704 = arguments.length;
switch (G__55704) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___56439 = arguments.length;
var i__4830__auto___56440 = (0);
while(true){
if((i__4830__auto___56440 < len__4829__auto___56439)){
args__4835__auto__.push((arguments[i__4830__auto___56440]));

var G__56441 = (i__4830__auto___56440 + (1));
i__4830__auto___56440 = G__56441;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__55717_56442 = cljs.core.seq(nodes);
var chunk__55718_56443 = null;
var count__55719_56444 = (0);
var i__55720_56445 = (0);
while(true){
if((i__55720_56445 < count__55719_56444)){
var node_56446 = chunk__55718_56443.cljs$core$IIndexed$_nth$arity$2(null,i__55720_56445);
fragment.appendChild(shadow.dom._to_dom(node_56446));


var G__56447 = seq__55717_56442;
var G__56448 = chunk__55718_56443;
var G__56449 = count__55719_56444;
var G__56450 = (i__55720_56445 + (1));
seq__55717_56442 = G__56447;
chunk__55718_56443 = G__56448;
count__55719_56444 = G__56449;
i__55720_56445 = G__56450;
continue;
} else {
var temp__5753__auto___56451 = cljs.core.seq(seq__55717_56442);
if(temp__5753__auto___56451){
var seq__55717_56452__$1 = temp__5753__auto___56451;
if(cljs.core.chunked_seq_QMARK_(seq__55717_56452__$1)){
var c__4649__auto___56453 = cljs.core.chunk_first(seq__55717_56452__$1);
var G__56454 = cljs.core.chunk_rest(seq__55717_56452__$1);
var G__56455 = c__4649__auto___56453;
var G__56456 = cljs.core.count(c__4649__auto___56453);
var G__56457 = (0);
seq__55717_56442 = G__56454;
chunk__55718_56443 = G__56455;
count__55719_56444 = G__56456;
i__55720_56445 = G__56457;
continue;
} else {
var node_56458 = cljs.core.first(seq__55717_56452__$1);
fragment.appendChild(shadow.dom._to_dom(node_56458));


var G__56459 = cljs.core.next(seq__55717_56452__$1);
var G__56460 = null;
var G__56461 = (0);
var G__56462 = (0);
seq__55717_56442 = G__56459;
chunk__55718_56443 = G__56460;
count__55719_56444 = G__56461;
i__55720_56445 = G__56462;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq55716){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55716));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__55721_56463 = cljs.core.seq(scripts);
var chunk__55722_56464 = null;
var count__55723_56465 = (0);
var i__55724_56466 = (0);
while(true){
if((i__55724_56466 < count__55723_56465)){
var vec__55731_56467 = chunk__55722_56464.cljs$core$IIndexed$_nth$arity$2(null,i__55724_56466);
var script_tag_56468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55731_56467,(0),null);
var script_body_56469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55731_56467,(1),null);
eval(script_body_56469);


var G__56470 = seq__55721_56463;
var G__56471 = chunk__55722_56464;
var G__56472 = count__55723_56465;
var G__56473 = (i__55724_56466 + (1));
seq__55721_56463 = G__56470;
chunk__55722_56464 = G__56471;
count__55723_56465 = G__56472;
i__55724_56466 = G__56473;
continue;
} else {
var temp__5753__auto___56474 = cljs.core.seq(seq__55721_56463);
if(temp__5753__auto___56474){
var seq__55721_56475__$1 = temp__5753__auto___56474;
if(cljs.core.chunked_seq_QMARK_(seq__55721_56475__$1)){
var c__4649__auto___56476 = cljs.core.chunk_first(seq__55721_56475__$1);
var G__56477 = cljs.core.chunk_rest(seq__55721_56475__$1);
var G__56478 = c__4649__auto___56476;
var G__56479 = cljs.core.count(c__4649__auto___56476);
var G__56480 = (0);
seq__55721_56463 = G__56477;
chunk__55722_56464 = G__56478;
count__55723_56465 = G__56479;
i__55724_56466 = G__56480;
continue;
} else {
var vec__55734_56481 = cljs.core.first(seq__55721_56475__$1);
var script_tag_56482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55734_56481,(0),null);
var script_body_56483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55734_56481,(1),null);
eval(script_body_56483);


var G__56484 = cljs.core.next(seq__55721_56475__$1);
var G__56485 = null;
var G__56486 = (0);
var G__56487 = (0);
seq__55721_56463 = G__56484;
chunk__55722_56464 = G__56485;
count__55723_56465 = G__56486;
i__55724_56466 = G__56487;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__55738){
var vec__55739 = p__55738;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55739,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55739,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__55748 = arguments.length;
switch (G__55748) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__55753 = cljs.core.seq(style_keys);
var chunk__55754 = null;
var count__55755 = (0);
var i__55756 = (0);
while(true){
if((i__55756 < count__55755)){
var it = chunk__55754.cljs$core$IIndexed$_nth$arity$2(null,i__55756);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__56489 = seq__55753;
var G__56490 = chunk__55754;
var G__56491 = count__55755;
var G__56492 = (i__55756 + (1));
seq__55753 = G__56489;
chunk__55754 = G__56490;
count__55755 = G__56491;
i__55756 = G__56492;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55753);
if(temp__5753__auto__){
var seq__55753__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55753__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55753__$1);
var G__56493 = cljs.core.chunk_rest(seq__55753__$1);
var G__56494 = c__4649__auto__;
var G__56495 = cljs.core.count(c__4649__auto__);
var G__56496 = (0);
seq__55753 = G__56493;
chunk__55754 = G__56494;
count__55755 = G__56495;
i__55756 = G__56496;
continue;
} else {
var it = cljs.core.first(seq__55753__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__56497 = cljs.core.next(seq__55753__$1);
var G__56498 = null;
var G__56499 = (0);
var G__56500 = (0);
seq__55753 = G__56497;
chunk__55754 = G__56498;
count__55755 = G__56499;
i__55756 = G__56500;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k55760,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__55767 = k55760;
var G__55767__$1 = (((G__55767 instanceof cljs.core.Keyword))?G__55767.fqn:null);
switch (G__55767__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55760,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__55769){
var vec__55770 = p__55769;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55770,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55770,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55759){
var self__ = this;
var G__55759__$1 = this;
return (new cljs.core.RecordIter((0),G__55759__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55761,other55762){
var self__ = this;
var this55761__$1 = this;
return (((!((other55762 == null)))) && ((((this55761__$1.constructor === other55762.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55761__$1.x,other55762.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55761__$1.y,other55762.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55761__$1.__extmap,other55762.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k55760){
var self__ = this;
var this__4479__auto____$1 = this;
var G__55797 = k55760;
var G__55797__$1 = (((G__55797 instanceof cljs.core.Keyword))?G__55797.fqn:null);
switch (G__55797__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k55760);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__55759){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__55804 = cljs.core.keyword_identical_QMARK_;
var expr__55805 = k__4481__auto__;
if(cljs.core.truth_((pred__55804.cljs$core$IFn$_invoke$arity$2 ? pred__55804.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__55805) : pred__55804.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__55805)))){
return (new shadow.dom.Coordinate(G__55759,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55804.cljs$core$IFn$_invoke$arity$2 ? pred__55804.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__55805) : pred__55804.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__55805)))){
return (new shadow.dom.Coordinate(self__.x,G__55759,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__55759),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__55759){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__55759,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__55763){
var extmap__4512__auto__ = (function (){var G__55818 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55763,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__55763)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55818);
} else {
return G__55818;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__55763),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__55763),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k55823,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__55829 = k55823;
var G__55829__$1 = (((G__55829 instanceof cljs.core.Keyword))?G__55829.fqn:null);
switch (G__55829__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55823,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__55831){
var vec__55832 = p__55831;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55832,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55832,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55822){
var self__ = this;
var G__55822__$1 = this;
return (new cljs.core.RecordIter((0),G__55822__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55824,other55825){
var self__ = this;
var this55824__$1 = this;
return (((!((other55825 == null)))) && ((((this55824__$1.constructor === other55825.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55824__$1.w,other55825.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55824__$1.h,other55825.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55824__$1.__extmap,other55825.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k55823){
var self__ = this;
var this__4479__auto____$1 = this;
var G__55840 = k55823;
var G__55840__$1 = (((G__55840 instanceof cljs.core.Keyword))?G__55840.fqn:null);
switch (G__55840__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k55823);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__55822){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__55841 = cljs.core.keyword_identical_QMARK_;
var expr__55842 = k__4481__auto__;
if(cljs.core.truth_((pred__55841.cljs$core$IFn$_invoke$arity$2 ? pred__55841.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__55842) : pred__55841.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__55842)))){
return (new shadow.dom.Size(G__55822,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55841.cljs$core$IFn$_invoke$arity$2 ? pred__55841.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__55842) : pred__55841.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__55842)))){
return (new shadow.dom.Size(self__.w,G__55822,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__55822),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__55822){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__55822,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__55826){
var extmap__4512__auto__ = (function (){var G__55851 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55826,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__55826)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55851);
} else {
return G__55851;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__55826),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__55826),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__56518 = (i + (1));
var G__56519 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__56518;
ret = G__56519;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55936){
var vec__55940 = p__55936;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55940,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55940,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__55954 = arguments.length;
switch (G__55954) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__56525 = ps;
var G__56526 = (i + (1));
el__$1 = G__56525;
i = G__56526;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__55979 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55979,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55979,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55979,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__55982_56532 = cljs.core.seq(props);
var chunk__55983_56533 = null;
var count__55984_56534 = (0);
var i__55985_56535 = (0);
while(true){
if((i__55985_56535 < count__55984_56534)){
var vec__55995_56536 = chunk__55983_56533.cljs$core$IIndexed$_nth$arity$2(null,i__55985_56535);
var k_56537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55995_56536,(0),null);
var v_56538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55995_56536,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_56537);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_56537),v_56538);


var G__56539 = seq__55982_56532;
var G__56540 = chunk__55983_56533;
var G__56541 = count__55984_56534;
var G__56542 = (i__55985_56535 + (1));
seq__55982_56532 = G__56539;
chunk__55983_56533 = G__56540;
count__55984_56534 = G__56541;
i__55985_56535 = G__56542;
continue;
} else {
var temp__5753__auto___56543 = cljs.core.seq(seq__55982_56532);
if(temp__5753__auto___56543){
var seq__55982_56545__$1 = temp__5753__auto___56543;
if(cljs.core.chunked_seq_QMARK_(seq__55982_56545__$1)){
var c__4649__auto___56546 = cljs.core.chunk_first(seq__55982_56545__$1);
var G__56547 = cljs.core.chunk_rest(seq__55982_56545__$1);
var G__56548 = c__4649__auto___56546;
var G__56549 = cljs.core.count(c__4649__auto___56546);
var G__56550 = (0);
seq__55982_56532 = G__56547;
chunk__55983_56533 = G__56548;
count__55984_56534 = G__56549;
i__55985_56535 = G__56550;
continue;
} else {
var vec__56007_56551 = cljs.core.first(seq__55982_56545__$1);
var k_56552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56007_56551,(0),null);
var v_56553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56007_56551,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_56552);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_56552),v_56553);


var G__56555 = cljs.core.next(seq__55982_56545__$1);
var G__56556 = null;
var G__56557 = (0);
var G__56558 = (0);
seq__55982_56532 = G__56555;
chunk__55983_56533 = G__56556;
count__55984_56534 = G__56557;
i__55985_56535 = G__56558;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__56038 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56038,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56038,(1),null);
var seq__56045_56563 = cljs.core.seq(node_children);
var chunk__56047_56564 = null;
var count__56048_56565 = (0);
var i__56049_56566 = (0);
while(true){
if((i__56049_56566 < count__56048_56565)){
var child_struct_56567 = chunk__56047_56564.cljs$core$IIndexed$_nth$arity$2(null,i__56049_56566);
if((!((child_struct_56567 == null)))){
if(typeof child_struct_56567 === 'string'){
var text_56568 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_56568),child_struct_56567].join(''));
} else {
var children_56569 = shadow.dom.svg_node(child_struct_56567);
if(cljs.core.seq_QMARK_(children_56569)){
var seq__56077_56570 = cljs.core.seq(children_56569);
var chunk__56079_56571 = null;
var count__56080_56572 = (0);
var i__56081_56573 = (0);
while(true){
if((i__56081_56573 < count__56080_56572)){
var child_56575 = chunk__56079_56571.cljs$core$IIndexed$_nth$arity$2(null,i__56081_56573);
if(cljs.core.truth_(child_56575)){
node.appendChild(child_56575);


var G__56577 = seq__56077_56570;
var G__56578 = chunk__56079_56571;
var G__56579 = count__56080_56572;
var G__56580 = (i__56081_56573 + (1));
seq__56077_56570 = G__56577;
chunk__56079_56571 = G__56578;
count__56080_56572 = G__56579;
i__56081_56573 = G__56580;
continue;
} else {
var G__56581 = seq__56077_56570;
var G__56582 = chunk__56079_56571;
var G__56583 = count__56080_56572;
var G__56584 = (i__56081_56573 + (1));
seq__56077_56570 = G__56581;
chunk__56079_56571 = G__56582;
count__56080_56572 = G__56583;
i__56081_56573 = G__56584;
continue;
}
} else {
var temp__5753__auto___56586 = cljs.core.seq(seq__56077_56570);
if(temp__5753__auto___56586){
var seq__56077_56587__$1 = temp__5753__auto___56586;
if(cljs.core.chunked_seq_QMARK_(seq__56077_56587__$1)){
var c__4649__auto___56588 = cljs.core.chunk_first(seq__56077_56587__$1);
var G__56589 = cljs.core.chunk_rest(seq__56077_56587__$1);
var G__56590 = c__4649__auto___56588;
var G__56591 = cljs.core.count(c__4649__auto___56588);
var G__56592 = (0);
seq__56077_56570 = G__56589;
chunk__56079_56571 = G__56590;
count__56080_56572 = G__56591;
i__56081_56573 = G__56592;
continue;
} else {
var child_56593 = cljs.core.first(seq__56077_56587__$1);
if(cljs.core.truth_(child_56593)){
node.appendChild(child_56593);


var G__56594 = cljs.core.next(seq__56077_56587__$1);
var G__56595 = null;
var G__56596 = (0);
var G__56597 = (0);
seq__56077_56570 = G__56594;
chunk__56079_56571 = G__56595;
count__56080_56572 = G__56596;
i__56081_56573 = G__56597;
continue;
} else {
var G__56598 = cljs.core.next(seq__56077_56587__$1);
var G__56599 = null;
var G__56600 = (0);
var G__56601 = (0);
seq__56077_56570 = G__56598;
chunk__56079_56571 = G__56599;
count__56080_56572 = G__56600;
i__56081_56573 = G__56601;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_56569);
}
}


var G__56602 = seq__56045_56563;
var G__56603 = chunk__56047_56564;
var G__56604 = count__56048_56565;
var G__56605 = (i__56049_56566 + (1));
seq__56045_56563 = G__56602;
chunk__56047_56564 = G__56603;
count__56048_56565 = G__56604;
i__56049_56566 = G__56605;
continue;
} else {
var G__56606 = seq__56045_56563;
var G__56607 = chunk__56047_56564;
var G__56608 = count__56048_56565;
var G__56609 = (i__56049_56566 + (1));
seq__56045_56563 = G__56606;
chunk__56047_56564 = G__56607;
count__56048_56565 = G__56608;
i__56049_56566 = G__56609;
continue;
}
} else {
var temp__5753__auto___56610 = cljs.core.seq(seq__56045_56563);
if(temp__5753__auto___56610){
var seq__56045_56611__$1 = temp__5753__auto___56610;
if(cljs.core.chunked_seq_QMARK_(seq__56045_56611__$1)){
var c__4649__auto___56612 = cljs.core.chunk_first(seq__56045_56611__$1);
var G__56613 = cljs.core.chunk_rest(seq__56045_56611__$1);
var G__56614 = c__4649__auto___56612;
var G__56615 = cljs.core.count(c__4649__auto___56612);
var G__56616 = (0);
seq__56045_56563 = G__56613;
chunk__56047_56564 = G__56614;
count__56048_56565 = G__56615;
i__56049_56566 = G__56616;
continue;
} else {
var child_struct_56617 = cljs.core.first(seq__56045_56611__$1);
if((!((child_struct_56617 == null)))){
if(typeof child_struct_56617 === 'string'){
var text_56618 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_56618),child_struct_56617].join(''));
} else {
var children_56619 = shadow.dom.svg_node(child_struct_56617);
if(cljs.core.seq_QMARK_(children_56619)){
var seq__56114_56620 = cljs.core.seq(children_56619);
var chunk__56116_56621 = null;
var count__56117_56622 = (0);
var i__56118_56623 = (0);
while(true){
if((i__56118_56623 < count__56117_56622)){
var child_56624 = chunk__56116_56621.cljs$core$IIndexed$_nth$arity$2(null,i__56118_56623);
if(cljs.core.truth_(child_56624)){
node.appendChild(child_56624);


var G__56626 = seq__56114_56620;
var G__56627 = chunk__56116_56621;
var G__56628 = count__56117_56622;
var G__56629 = (i__56118_56623 + (1));
seq__56114_56620 = G__56626;
chunk__56116_56621 = G__56627;
count__56117_56622 = G__56628;
i__56118_56623 = G__56629;
continue;
} else {
var G__56630 = seq__56114_56620;
var G__56631 = chunk__56116_56621;
var G__56632 = count__56117_56622;
var G__56633 = (i__56118_56623 + (1));
seq__56114_56620 = G__56630;
chunk__56116_56621 = G__56631;
count__56117_56622 = G__56632;
i__56118_56623 = G__56633;
continue;
}
} else {
var temp__5753__auto___56635__$1 = cljs.core.seq(seq__56114_56620);
if(temp__5753__auto___56635__$1){
var seq__56114_56637__$1 = temp__5753__auto___56635__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56114_56637__$1)){
var c__4649__auto___56638 = cljs.core.chunk_first(seq__56114_56637__$1);
var G__56640 = cljs.core.chunk_rest(seq__56114_56637__$1);
var G__56641 = c__4649__auto___56638;
var G__56642 = cljs.core.count(c__4649__auto___56638);
var G__56643 = (0);
seq__56114_56620 = G__56640;
chunk__56116_56621 = G__56641;
count__56117_56622 = G__56642;
i__56118_56623 = G__56643;
continue;
} else {
var child_56644 = cljs.core.first(seq__56114_56637__$1);
if(cljs.core.truth_(child_56644)){
node.appendChild(child_56644);


var G__56645 = cljs.core.next(seq__56114_56637__$1);
var G__56646 = null;
var G__56647 = (0);
var G__56648 = (0);
seq__56114_56620 = G__56645;
chunk__56116_56621 = G__56646;
count__56117_56622 = G__56647;
i__56118_56623 = G__56648;
continue;
} else {
var G__56649 = cljs.core.next(seq__56114_56637__$1);
var G__56650 = null;
var G__56651 = (0);
var G__56652 = (0);
seq__56114_56620 = G__56649;
chunk__56116_56621 = G__56650;
count__56117_56622 = G__56651;
i__56118_56623 = G__56652;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_56619);
}
}


var G__56653 = cljs.core.next(seq__56045_56611__$1);
var G__56654 = null;
var G__56655 = (0);
var G__56656 = (0);
seq__56045_56563 = G__56653;
chunk__56047_56564 = G__56654;
count__56048_56565 = G__56655;
i__56049_56566 = G__56656;
continue;
} else {
var G__56657 = cljs.core.next(seq__56045_56611__$1);
var G__56658 = null;
var G__56659 = (0);
var G__56660 = (0);
seq__56045_56563 = G__56657;
chunk__56047_56564 = G__56658;
count__56048_56565 = G__56659;
i__56049_56566 = G__56660;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___56661 = arguments.length;
var i__4830__auto___56662 = (0);
while(true){
if((i__4830__auto___56662 < len__4829__auto___56661)){
args__4835__auto__.push((arguments[i__4830__auto___56662]));

var G__56663 = (i__4830__auto___56662 + (1));
i__4830__auto___56662 = G__56663;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq56127){
var G__56128 = cljs.core.first(seq56127);
var seq56127__$1 = cljs.core.next(seq56127);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56128,seq56127__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__56138 = arguments.length;
switch (G__56138) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__49445__auto___56669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49446__auto__ = (function (){var switch__49334__auto__ = (function (state_56144){
var state_val_56145 = (state_56144[(1)]);
if((state_val_56145 === (1))){
var state_56144__$1 = state_56144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56144__$1,(2),once_or_cleanup);
} else {
if((state_val_56145 === (2))){
var inst_56141 = (state_56144[(2)]);
var inst_56142 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_56144__$1 = (function (){var statearr_56147 = state_56144;
(statearr_56147[(7)] = inst_56141);

return statearr_56147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56144__$1,inst_56142);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__49335__auto__ = null;
var shadow$dom$state_machine__49335__auto____0 = (function (){
var statearr_56149 = [null,null,null,null,null,null,null,null];
(statearr_56149[(0)] = shadow$dom$state_machine__49335__auto__);

(statearr_56149[(1)] = (1));

return statearr_56149;
});
var shadow$dom$state_machine__49335__auto____1 = (function (state_56144){
while(true){
var ret_value__49336__auto__ = (function (){try{while(true){
var result__49337__auto__ = switch__49334__auto__(state_56144);
if(cljs.core.keyword_identical_QMARK_(result__49337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49337__auto__;
}
break;
}
}catch (e56150){var ex__49338__auto__ = e56150;
var statearr_56152_56673 = state_56144;
(statearr_56152_56673[(2)] = ex__49338__auto__);


if(cljs.core.seq((state_56144[(4)]))){
var statearr_56154_56674 = state_56144;
(statearr_56154_56674[(1)] = cljs.core.first((state_56144[(4)])));

} else {
throw ex__49338__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56675 = state_56144;
state_56144 = G__56675;
continue;
} else {
return ret_value__49336__auto__;
}
break;
}
});
shadow$dom$state_machine__49335__auto__ = function(state_56144){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__49335__auto____0.call(this);
case 1:
return shadow$dom$state_machine__49335__auto____1.call(this,state_56144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__49335__auto____0;
shadow$dom$state_machine__49335__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__49335__auto____1;
return shadow$dom$state_machine__49335__auto__;
})()
})();
var state__49447__auto__ = (function (){var statearr_56155 = f__49446__auto__();
(statearr_56155[(6)] = c__49445__auto___56669);

return statearr_56155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49447__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
