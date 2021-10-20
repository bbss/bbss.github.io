goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_56363 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_56363(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_56364 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_56364(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__55390 = coll;
var G__55391 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__55390,G__55391) : shadow.dom.lazy_native_coll_seq.call(null,G__55390,G__55391));
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
var G__55443 = arguments.length;
switch (G__55443) {
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
var G__55459 = arguments.length;
switch (G__55459) {
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
var G__55465 = arguments.length;
switch (G__55465) {
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
var G__55468 = arguments.length;
switch (G__55468) {
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
var G__55471 = arguments.length;
switch (G__55471) {
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
var G__55481 = arguments.length;
switch (G__55481) {
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
}catch (e55485){if((e55485 instanceof Object)){
var e = e55485;
return console.log("didnt support attachEvent",el,e);
} else {
throw e55485;

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
var seq__55492 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__55493 = null;
var count__55494 = (0);
var i__55495 = (0);
while(true){
if((i__55495 < count__55494)){
var el = chunk__55493.cljs$core$IIndexed$_nth$arity$2(null,i__55495);
var handler_56383__$1 = ((function (seq__55492,chunk__55493,count__55494,i__55495,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__55492,chunk__55493,count__55494,i__55495,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_56383__$1);


var G__56384 = seq__55492;
var G__56385 = chunk__55493;
var G__56386 = count__55494;
var G__56387 = (i__55495 + (1));
seq__55492 = G__56384;
chunk__55493 = G__56385;
count__55494 = G__56386;
i__55495 = G__56387;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55492);
if(temp__5753__auto__){
var seq__55492__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55492__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55492__$1);
var G__56388 = cljs.core.chunk_rest(seq__55492__$1);
var G__56389 = c__4649__auto__;
var G__56390 = cljs.core.count(c__4649__auto__);
var G__56391 = (0);
seq__55492 = G__56388;
chunk__55493 = G__56389;
count__55494 = G__56390;
i__55495 = G__56391;
continue;
} else {
var el = cljs.core.first(seq__55492__$1);
var handler_56392__$1 = ((function (seq__55492,chunk__55493,count__55494,i__55495,el,seq__55492__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__55492,chunk__55493,count__55494,i__55495,el,seq__55492__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_56392__$1);


var G__56393 = cljs.core.next(seq__55492__$1);
var G__56394 = null;
var G__56395 = (0);
var G__56396 = (0);
seq__55492 = G__56393;
chunk__55493 = G__56394;
count__55494 = G__56395;
i__55495 = G__56396;
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
var G__55507 = arguments.length;
switch (G__55507) {
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
var seq__55558 = cljs.core.seq(events);
var chunk__55559 = null;
var count__55560 = (0);
var i__55561 = (0);
while(true){
if((i__55561 < count__55560)){
var vec__55575 = chunk__55559.cljs$core$IIndexed$_nth$arity$2(null,i__55561);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55575,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55575,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56400 = seq__55558;
var G__56401 = chunk__55559;
var G__56402 = count__55560;
var G__56403 = (i__55561 + (1));
seq__55558 = G__56400;
chunk__55559 = G__56401;
count__55560 = G__56402;
i__55561 = G__56403;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55558);
if(temp__5753__auto__){
var seq__55558__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55558__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55558__$1);
var G__56404 = cljs.core.chunk_rest(seq__55558__$1);
var G__56405 = c__4649__auto__;
var G__56406 = cljs.core.count(c__4649__auto__);
var G__56407 = (0);
seq__55558 = G__56404;
chunk__55559 = G__56405;
count__55560 = G__56406;
i__55561 = G__56407;
continue;
} else {
var vec__55580 = cljs.core.first(seq__55558__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55580,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55580,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56409 = cljs.core.next(seq__55558__$1);
var G__56410 = null;
var G__56411 = (0);
var G__56412 = (0);
seq__55558 = G__56409;
chunk__55559 = G__56410;
count__55560 = G__56411;
i__55561 = G__56412;
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
var seq__55586 = cljs.core.seq(styles);
var chunk__55587 = null;
var count__55588 = (0);
var i__55589 = (0);
while(true){
if((i__55589 < count__55588)){
var vec__55606 = chunk__55587.cljs$core$IIndexed$_nth$arity$2(null,i__55589);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55606,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55606,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__56414 = seq__55586;
var G__56415 = chunk__55587;
var G__56416 = count__55588;
var G__56417 = (i__55589 + (1));
seq__55586 = G__56414;
chunk__55587 = G__56415;
count__55588 = G__56416;
i__55589 = G__56417;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55586);
if(temp__5753__auto__){
var seq__55586__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55586__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55586__$1);
var G__56418 = cljs.core.chunk_rest(seq__55586__$1);
var G__56419 = c__4649__auto__;
var G__56420 = cljs.core.count(c__4649__auto__);
var G__56421 = (0);
seq__55586 = G__56418;
chunk__55587 = G__56419;
count__55588 = G__56420;
i__55589 = G__56421;
continue;
} else {
var vec__55613 = cljs.core.first(seq__55586__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55613,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55613,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__56422 = cljs.core.next(seq__55586__$1);
var G__56423 = null;
var G__56424 = (0);
var G__56425 = (0);
seq__55586 = G__56422;
chunk__55587 = G__56423;
count__55588 = G__56424;
i__55589 = G__56425;
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
var G__55619_56426 = key;
var G__55619_56427__$1 = (((G__55619_56426 instanceof cljs.core.Keyword))?G__55619_56426.fqn:null);
switch (G__55619_56427__$1) {
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
var ks_56429 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_56429,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_56429,"aria-");
}
})())){
el.setAttribute(ks_56429,value);
} else {
(el[ks_56429] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__55648){
var map__55649 = p__55648;
var map__55649__$1 = cljs.core.__destructure_map(map__55649);
var props = map__55649__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55649__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__55650 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55650,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55650,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55650,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__55653 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__55653,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__55653;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__55656 = arguments.length;
switch (G__55656) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__55666){
var vec__55667 = p__55666;
var seq__55668 = cljs.core.seq(vec__55667);
var first__55669 = cljs.core.first(seq__55668);
var seq__55668__$1 = cljs.core.next(seq__55668);
var nn = first__55669;
var first__55669__$1 = cljs.core.first(seq__55668__$1);
var seq__55668__$2 = cljs.core.next(seq__55668__$1);
var np = first__55669__$1;
var nc = seq__55668__$2;
var node = vec__55667;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55670 = nn;
var G__55671 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__55670,G__55671) : create_fn.call(null,G__55670,G__55671));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55672 = nn;
var G__55673 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__55672,G__55673) : create_fn.call(null,G__55672,G__55673));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__55674 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55674,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55674,(1),null);
var seq__55677_56437 = cljs.core.seq(node_children);
var chunk__55678_56438 = null;
var count__55679_56439 = (0);
var i__55680_56440 = (0);
while(true){
if((i__55680_56440 < count__55679_56439)){
var child_struct_56441 = chunk__55678_56438.cljs$core$IIndexed$_nth$arity$2(null,i__55680_56440);
var children_56442 = shadow.dom.dom_node(child_struct_56441);
if(cljs.core.seq_QMARK_(children_56442)){
var seq__55694_56443 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56442));
var chunk__55696_56444 = null;
var count__55697_56445 = (0);
var i__55698_56446 = (0);
while(true){
if((i__55698_56446 < count__55697_56445)){
var child_56447 = chunk__55696_56444.cljs$core$IIndexed$_nth$arity$2(null,i__55698_56446);
if(cljs.core.truth_(child_56447)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56447);


var G__56448 = seq__55694_56443;
var G__56449 = chunk__55696_56444;
var G__56450 = count__55697_56445;
var G__56451 = (i__55698_56446 + (1));
seq__55694_56443 = G__56448;
chunk__55696_56444 = G__56449;
count__55697_56445 = G__56450;
i__55698_56446 = G__56451;
continue;
} else {
var G__56454 = seq__55694_56443;
var G__56455 = chunk__55696_56444;
var G__56456 = count__55697_56445;
var G__56457 = (i__55698_56446 + (1));
seq__55694_56443 = G__56454;
chunk__55696_56444 = G__56455;
count__55697_56445 = G__56456;
i__55698_56446 = G__56457;
continue;
}
} else {
var temp__5753__auto___56458 = cljs.core.seq(seq__55694_56443);
if(temp__5753__auto___56458){
var seq__55694_56461__$1 = temp__5753__auto___56458;
if(cljs.core.chunked_seq_QMARK_(seq__55694_56461__$1)){
var c__4649__auto___56462 = cljs.core.chunk_first(seq__55694_56461__$1);
var G__56463 = cljs.core.chunk_rest(seq__55694_56461__$1);
var G__56464 = c__4649__auto___56462;
var G__56465 = cljs.core.count(c__4649__auto___56462);
var G__56466 = (0);
seq__55694_56443 = G__56463;
chunk__55696_56444 = G__56464;
count__55697_56445 = G__56465;
i__55698_56446 = G__56466;
continue;
} else {
var child_56467 = cljs.core.first(seq__55694_56461__$1);
if(cljs.core.truth_(child_56467)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56467);


var G__56468 = cljs.core.next(seq__55694_56461__$1);
var G__56469 = null;
var G__56470 = (0);
var G__56471 = (0);
seq__55694_56443 = G__56468;
chunk__55696_56444 = G__56469;
count__55697_56445 = G__56470;
i__55698_56446 = G__56471;
continue;
} else {
var G__56472 = cljs.core.next(seq__55694_56461__$1);
var G__56473 = null;
var G__56474 = (0);
var G__56475 = (0);
seq__55694_56443 = G__56472;
chunk__55696_56444 = G__56473;
count__55697_56445 = G__56474;
i__55698_56446 = G__56475;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56442);
}


var G__56476 = seq__55677_56437;
var G__56477 = chunk__55678_56438;
var G__56478 = count__55679_56439;
var G__56479 = (i__55680_56440 + (1));
seq__55677_56437 = G__56476;
chunk__55678_56438 = G__56477;
count__55679_56439 = G__56478;
i__55680_56440 = G__56479;
continue;
} else {
var temp__5753__auto___56480 = cljs.core.seq(seq__55677_56437);
if(temp__5753__auto___56480){
var seq__55677_56481__$1 = temp__5753__auto___56480;
if(cljs.core.chunked_seq_QMARK_(seq__55677_56481__$1)){
var c__4649__auto___56482 = cljs.core.chunk_first(seq__55677_56481__$1);
var G__56483 = cljs.core.chunk_rest(seq__55677_56481__$1);
var G__56484 = c__4649__auto___56482;
var G__56485 = cljs.core.count(c__4649__auto___56482);
var G__56486 = (0);
seq__55677_56437 = G__56483;
chunk__55678_56438 = G__56484;
count__55679_56439 = G__56485;
i__55680_56440 = G__56486;
continue;
} else {
var child_struct_56487 = cljs.core.first(seq__55677_56481__$1);
var children_56488 = shadow.dom.dom_node(child_struct_56487);
if(cljs.core.seq_QMARK_(children_56488)){
var seq__55703_56489 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56488));
var chunk__55705_56490 = null;
var count__55706_56491 = (0);
var i__55707_56492 = (0);
while(true){
if((i__55707_56492 < count__55706_56491)){
var child_56496 = chunk__55705_56490.cljs$core$IIndexed$_nth$arity$2(null,i__55707_56492);
if(cljs.core.truth_(child_56496)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56496);


var G__56498 = seq__55703_56489;
var G__56499 = chunk__55705_56490;
var G__56500 = count__55706_56491;
var G__56501 = (i__55707_56492 + (1));
seq__55703_56489 = G__56498;
chunk__55705_56490 = G__56499;
count__55706_56491 = G__56500;
i__55707_56492 = G__56501;
continue;
} else {
var G__56502 = seq__55703_56489;
var G__56503 = chunk__55705_56490;
var G__56504 = count__55706_56491;
var G__56505 = (i__55707_56492 + (1));
seq__55703_56489 = G__56502;
chunk__55705_56490 = G__56503;
count__55706_56491 = G__56504;
i__55707_56492 = G__56505;
continue;
}
} else {
var temp__5753__auto___56506__$1 = cljs.core.seq(seq__55703_56489);
if(temp__5753__auto___56506__$1){
var seq__55703_56507__$1 = temp__5753__auto___56506__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55703_56507__$1)){
var c__4649__auto___56508 = cljs.core.chunk_first(seq__55703_56507__$1);
var G__56509 = cljs.core.chunk_rest(seq__55703_56507__$1);
var G__56510 = c__4649__auto___56508;
var G__56511 = cljs.core.count(c__4649__auto___56508);
var G__56512 = (0);
seq__55703_56489 = G__56509;
chunk__55705_56490 = G__56510;
count__55706_56491 = G__56511;
i__55707_56492 = G__56512;
continue;
} else {
var child_56513 = cljs.core.first(seq__55703_56507__$1);
if(cljs.core.truth_(child_56513)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56513);


var G__56514 = cljs.core.next(seq__55703_56507__$1);
var G__56515 = null;
var G__56516 = (0);
var G__56517 = (0);
seq__55703_56489 = G__56514;
chunk__55705_56490 = G__56515;
count__55706_56491 = G__56516;
i__55707_56492 = G__56517;
continue;
} else {
var G__56518 = cljs.core.next(seq__55703_56507__$1);
var G__56519 = null;
var G__56520 = (0);
var G__56521 = (0);
seq__55703_56489 = G__56518;
chunk__55705_56490 = G__56519;
count__55706_56491 = G__56520;
i__55707_56492 = G__56521;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56488);
}


var G__56522 = cljs.core.next(seq__55677_56481__$1);
var G__56523 = null;
var G__56524 = (0);
var G__56525 = (0);
seq__55677_56437 = G__56522;
chunk__55678_56438 = G__56523;
count__55679_56439 = G__56524;
i__55680_56440 = G__56525;
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
var seq__55720 = cljs.core.seq(node);
var chunk__55721 = null;
var count__55722 = (0);
var i__55723 = (0);
while(true){
if((i__55723 < count__55722)){
var n = chunk__55721.cljs$core$IIndexed$_nth$arity$2(null,i__55723);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__56532 = seq__55720;
var G__56533 = chunk__55721;
var G__56534 = count__55722;
var G__56535 = (i__55723 + (1));
seq__55720 = G__56532;
chunk__55721 = G__56533;
count__55722 = G__56534;
i__55723 = G__56535;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55720);
if(temp__5753__auto__){
var seq__55720__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55720__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55720__$1);
var G__56536 = cljs.core.chunk_rest(seq__55720__$1);
var G__56537 = c__4649__auto__;
var G__56538 = cljs.core.count(c__4649__auto__);
var G__56539 = (0);
seq__55720 = G__56536;
chunk__55721 = G__56537;
count__55722 = G__56538;
i__55723 = G__56539;
continue;
} else {
var n = cljs.core.first(seq__55720__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__56540 = cljs.core.next(seq__55720__$1);
var G__56541 = null;
var G__56542 = (0);
var G__56543 = (0);
seq__55720 = G__56540;
chunk__55721 = G__56541;
count__55722 = G__56542;
i__55723 = G__56543;
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
var G__55726 = arguments.length;
switch (G__55726) {
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
var G__55730 = arguments.length;
switch (G__55730) {
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
var G__55733 = arguments.length;
switch (G__55733) {
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
var len__4829__auto___56564 = arguments.length;
var i__4830__auto___56565 = (0);
while(true){
if((i__4830__auto___56565 < len__4829__auto___56564)){
args__4835__auto__.push((arguments[i__4830__auto___56565]));

var G__56566 = (i__4830__auto___56565 + (1));
i__4830__auto___56565 = G__56566;
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
var seq__55737_56567 = cljs.core.seq(nodes);
var chunk__55738_56568 = null;
var count__55739_56569 = (0);
var i__55740_56570 = (0);
while(true){
if((i__55740_56570 < count__55739_56569)){
var node_56571 = chunk__55738_56568.cljs$core$IIndexed$_nth$arity$2(null,i__55740_56570);
fragment.appendChild(shadow.dom._to_dom(node_56571));


var G__56572 = seq__55737_56567;
var G__56573 = chunk__55738_56568;
var G__56574 = count__55739_56569;
var G__56575 = (i__55740_56570 + (1));
seq__55737_56567 = G__56572;
chunk__55738_56568 = G__56573;
count__55739_56569 = G__56574;
i__55740_56570 = G__56575;
continue;
} else {
var temp__5753__auto___56576 = cljs.core.seq(seq__55737_56567);
if(temp__5753__auto___56576){
var seq__55737_56577__$1 = temp__5753__auto___56576;
if(cljs.core.chunked_seq_QMARK_(seq__55737_56577__$1)){
var c__4649__auto___56579 = cljs.core.chunk_first(seq__55737_56577__$1);
var G__56580 = cljs.core.chunk_rest(seq__55737_56577__$1);
var G__56581 = c__4649__auto___56579;
var G__56582 = cljs.core.count(c__4649__auto___56579);
var G__56583 = (0);
seq__55737_56567 = G__56580;
chunk__55738_56568 = G__56581;
count__55739_56569 = G__56582;
i__55740_56570 = G__56583;
continue;
} else {
var node_56587 = cljs.core.first(seq__55737_56577__$1);
fragment.appendChild(shadow.dom._to_dom(node_56587));


var G__56588 = cljs.core.next(seq__55737_56577__$1);
var G__56589 = null;
var G__56590 = (0);
var G__56591 = (0);
seq__55737_56567 = G__56588;
chunk__55738_56568 = G__56589;
count__55739_56569 = G__56590;
i__55740_56570 = G__56591;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq55736){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55736));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__55748_56596 = cljs.core.seq(scripts);
var chunk__55749_56597 = null;
var count__55750_56598 = (0);
var i__55751_56599 = (0);
while(true){
if((i__55751_56599 < count__55750_56598)){
var vec__55768_56600 = chunk__55749_56597.cljs$core$IIndexed$_nth$arity$2(null,i__55751_56599);
var script_tag_56601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55768_56600,(0),null);
var script_body_56602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55768_56600,(1),null);
eval(script_body_56602);


var G__56603 = seq__55748_56596;
var G__56604 = chunk__55749_56597;
var G__56605 = count__55750_56598;
var G__56606 = (i__55751_56599 + (1));
seq__55748_56596 = G__56603;
chunk__55749_56597 = G__56604;
count__55750_56598 = G__56605;
i__55751_56599 = G__56606;
continue;
} else {
var temp__5753__auto___56607 = cljs.core.seq(seq__55748_56596);
if(temp__5753__auto___56607){
var seq__55748_56609__$1 = temp__5753__auto___56607;
if(cljs.core.chunked_seq_QMARK_(seq__55748_56609__$1)){
var c__4649__auto___56610 = cljs.core.chunk_first(seq__55748_56609__$1);
var G__56611 = cljs.core.chunk_rest(seq__55748_56609__$1);
var G__56612 = c__4649__auto___56610;
var G__56613 = cljs.core.count(c__4649__auto___56610);
var G__56614 = (0);
seq__55748_56596 = G__56611;
chunk__55749_56597 = G__56612;
count__55750_56598 = G__56613;
i__55751_56599 = G__56614;
continue;
} else {
var vec__55774_56615 = cljs.core.first(seq__55748_56609__$1);
var script_tag_56616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55774_56615,(0),null);
var script_body_56617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55774_56615,(1),null);
eval(script_body_56617);


var G__56618 = cljs.core.next(seq__55748_56609__$1);
var G__56619 = null;
var G__56620 = (0);
var G__56621 = (0);
seq__55748_56596 = G__56618;
chunk__55749_56597 = G__56619;
count__55750_56598 = G__56620;
i__55751_56599 = G__56621;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__55794){
var vec__55796 = p__55794;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55796,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55796,(1),null);
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
var G__55821 = arguments.length;
switch (G__55821) {
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
var seq__55859 = cljs.core.seq(style_keys);
var chunk__55860 = null;
var count__55861 = (0);
var i__55862 = (0);
while(true){
if((i__55862 < count__55861)){
var it = chunk__55860.cljs$core$IIndexed$_nth$arity$2(null,i__55862);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__56627 = seq__55859;
var G__56628 = chunk__55860;
var G__56629 = count__55861;
var G__56630 = (i__55862 + (1));
seq__55859 = G__56627;
chunk__55860 = G__56628;
count__55861 = G__56629;
i__55862 = G__56630;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55859);
if(temp__5753__auto__){
var seq__55859__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55859__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55859__$1);
var G__56631 = cljs.core.chunk_rest(seq__55859__$1);
var G__56632 = c__4649__auto__;
var G__56633 = cljs.core.count(c__4649__auto__);
var G__56634 = (0);
seq__55859 = G__56631;
chunk__55860 = G__56632;
count__55861 = G__56633;
i__55862 = G__56634;
continue;
} else {
var it = cljs.core.first(seq__55859__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__56636 = cljs.core.next(seq__55859__$1);
var G__56637 = null;
var G__56638 = (0);
var G__56639 = (0);
seq__55859 = G__56636;
chunk__55860 = G__56637;
count__55861 = G__56638;
i__55862 = G__56639;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k55870,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__55887 = k55870;
var G__55887__$1 = (((G__55887 instanceof cljs.core.Keyword))?G__55887.fqn:null);
switch (G__55887__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55870,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__55897){
var vec__55898 = p__55897;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55898,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55898,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55869){
var self__ = this;
var G__55869__$1 = this;
return (new cljs.core.RecordIter((0),G__55869__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55871,other55872){
var self__ = this;
var this55871__$1 = this;
return (((!((other55872 == null)))) && ((((this55871__$1.constructor === other55872.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55871__$1.x,other55872.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55871__$1.y,other55872.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55871__$1.__extmap,other55872.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k55870){
var self__ = this;
var this__4479__auto____$1 = this;
var G__55933 = k55870;
var G__55933__$1 = (((G__55933 instanceof cljs.core.Keyword))?G__55933.fqn:null);
switch (G__55933__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k55870);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__55869){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__55935 = cljs.core.keyword_identical_QMARK_;
var expr__55936 = k__4481__auto__;
if(cljs.core.truth_((pred__55935.cljs$core$IFn$_invoke$arity$2 ? pred__55935.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__55936) : pred__55935.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__55936)))){
return (new shadow.dom.Coordinate(G__55869,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55935.cljs$core$IFn$_invoke$arity$2 ? pred__55935.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__55936) : pred__55935.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__55936)))){
return (new shadow.dom.Coordinate(self__.x,G__55869,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__55869),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__55869){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__55869,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__55881){
var extmap__4512__auto__ = (function (){var G__55965 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55881,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__55881)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55965);
} else {
return G__55965;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__55881),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__55881),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k55972,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__56037 = k55972;
var G__56037__$1 = (((G__56037 instanceof cljs.core.Keyword))?G__56037.fqn:null);
switch (G__56037__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55972,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__56053){
var vec__56060 = p__56053;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56060,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56060,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55971){
var self__ = this;
var G__55971__$1 = this;
return (new cljs.core.RecordIter((0),G__55971__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55973,other55974){
var self__ = this;
var this55973__$1 = this;
return (((!((other55974 == null)))) && ((((this55973__$1.constructor === other55974.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55973__$1.w,other55974.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55973__$1.h,other55974.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55973__$1.__extmap,other55974.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k55972){
var self__ = this;
var this__4479__auto____$1 = this;
var G__56130 = k55972;
var G__56130__$1 = (((G__56130 instanceof cljs.core.Keyword))?G__56130.fqn:null);
switch (G__56130__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k55972);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__55971){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__56134 = cljs.core.keyword_identical_QMARK_;
var expr__56135 = k__4481__auto__;
if(cljs.core.truth_((pred__56134.cljs$core$IFn$_invoke$arity$2 ? pred__56134.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__56135) : pred__56134.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__56135)))){
return (new shadow.dom.Size(G__55971,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56134.cljs$core$IFn$_invoke$arity$2 ? pred__56134.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__56135) : pred__56134.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__56135)))){
return (new shadow.dom.Size(self__.w,G__55971,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__55971),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__55971){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__55971,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__56008){
var extmap__4512__auto__ = (function (){var G__56150 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56008,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__56008)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56150);
} else {
return G__56150;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__56008),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__56008),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
var G__56669 = (i + (1));
var G__56670 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__56669;
ret = G__56670;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56181){
var vec__56182 = p__56181;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56182,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56182,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__56189 = arguments.length;
switch (G__56189) {
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
var G__56672 = ps;
var G__56673 = (i + (1));
el__$1 = G__56672;
i = G__56673;
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
var vec__56248 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56248,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56248,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56248,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__56253_56674 = cljs.core.seq(props);
var chunk__56254_56675 = null;
var count__56255_56676 = (0);
var i__56256_56677 = (0);
while(true){
if((i__56256_56677 < count__56255_56676)){
var vec__56263_56678 = chunk__56254_56675.cljs$core$IIndexed$_nth$arity$2(null,i__56256_56677);
var k_56679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56263_56678,(0),null);
var v_56680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56263_56678,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_56679);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_56679),v_56680);


var G__56682 = seq__56253_56674;
var G__56683 = chunk__56254_56675;
var G__56684 = count__56255_56676;
var G__56685 = (i__56256_56677 + (1));
seq__56253_56674 = G__56682;
chunk__56254_56675 = G__56683;
count__56255_56676 = G__56684;
i__56256_56677 = G__56685;
continue;
} else {
var temp__5753__auto___56686 = cljs.core.seq(seq__56253_56674);
if(temp__5753__auto___56686){
var seq__56253_56687__$1 = temp__5753__auto___56686;
if(cljs.core.chunked_seq_QMARK_(seq__56253_56687__$1)){
var c__4649__auto___56688 = cljs.core.chunk_first(seq__56253_56687__$1);
var G__56689 = cljs.core.chunk_rest(seq__56253_56687__$1);
var G__56690 = c__4649__auto___56688;
var G__56691 = cljs.core.count(c__4649__auto___56688);
var G__56692 = (0);
seq__56253_56674 = G__56689;
chunk__56254_56675 = G__56690;
count__56255_56676 = G__56691;
i__56256_56677 = G__56692;
continue;
} else {
var vec__56266_56693 = cljs.core.first(seq__56253_56687__$1);
var k_56694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56266_56693,(0),null);
var v_56695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56266_56693,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_56694);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_56694),v_56695);


var G__56696 = cljs.core.next(seq__56253_56687__$1);
var G__56697 = null;
var G__56698 = (0);
var G__56699 = (0);
seq__56253_56674 = G__56696;
chunk__56254_56675 = G__56697;
count__56255_56676 = G__56698;
i__56256_56677 = G__56699;
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
var vec__56280 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56280,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56280,(1),null);
var seq__56283_56700 = cljs.core.seq(node_children);
var chunk__56285_56701 = null;
var count__56286_56702 = (0);
var i__56287_56703 = (0);
while(true){
if((i__56287_56703 < count__56286_56702)){
var child_struct_56704 = chunk__56285_56701.cljs$core$IIndexed$_nth$arity$2(null,i__56287_56703);
if((!((child_struct_56704 == null)))){
if(typeof child_struct_56704 === 'string'){
var text_56705 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_56705),child_struct_56704].join(''));
} else {
var children_56706 = shadow.dom.svg_node(child_struct_56704);
if(cljs.core.seq_QMARK_(children_56706)){
var seq__56304_56707 = cljs.core.seq(children_56706);
var chunk__56306_56708 = null;
var count__56307_56709 = (0);
var i__56308_56710 = (0);
while(true){
if((i__56308_56710 < count__56307_56709)){
var child_56711 = chunk__56306_56708.cljs$core$IIndexed$_nth$arity$2(null,i__56308_56710);
if(cljs.core.truth_(child_56711)){
node.appendChild(child_56711);


var G__56712 = seq__56304_56707;
var G__56713 = chunk__56306_56708;
var G__56714 = count__56307_56709;
var G__56715 = (i__56308_56710 + (1));
seq__56304_56707 = G__56712;
chunk__56306_56708 = G__56713;
count__56307_56709 = G__56714;
i__56308_56710 = G__56715;
continue;
} else {
var G__56716 = seq__56304_56707;
var G__56717 = chunk__56306_56708;
var G__56718 = count__56307_56709;
var G__56719 = (i__56308_56710 + (1));
seq__56304_56707 = G__56716;
chunk__56306_56708 = G__56717;
count__56307_56709 = G__56718;
i__56308_56710 = G__56719;
continue;
}
} else {
var temp__5753__auto___56720 = cljs.core.seq(seq__56304_56707);
if(temp__5753__auto___56720){
var seq__56304_56721__$1 = temp__5753__auto___56720;
if(cljs.core.chunked_seq_QMARK_(seq__56304_56721__$1)){
var c__4649__auto___56722 = cljs.core.chunk_first(seq__56304_56721__$1);
var G__56723 = cljs.core.chunk_rest(seq__56304_56721__$1);
var G__56724 = c__4649__auto___56722;
var G__56725 = cljs.core.count(c__4649__auto___56722);
var G__56726 = (0);
seq__56304_56707 = G__56723;
chunk__56306_56708 = G__56724;
count__56307_56709 = G__56725;
i__56308_56710 = G__56726;
continue;
} else {
var child_56727 = cljs.core.first(seq__56304_56721__$1);
if(cljs.core.truth_(child_56727)){
node.appendChild(child_56727);


var G__56728 = cljs.core.next(seq__56304_56721__$1);
var G__56729 = null;
var G__56730 = (0);
var G__56731 = (0);
seq__56304_56707 = G__56728;
chunk__56306_56708 = G__56729;
count__56307_56709 = G__56730;
i__56308_56710 = G__56731;
continue;
} else {
var G__56732 = cljs.core.next(seq__56304_56721__$1);
var G__56733 = null;
var G__56734 = (0);
var G__56735 = (0);
seq__56304_56707 = G__56732;
chunk__56306_56708 = G__56733;
count__56307_56709 = G__56734;
i__56308_56710 = G__56735;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_56706);
}
}


var G__56736 = seq__56283_56700;
var G__56737 = chunk__56285_56701;
var G__56738 = count__56286_56702;
var G__56739 = (i__56287_56703 + (1));
seq__56283_56700 = G__56736;
chunk__56285_56701 = G__56737;
count__56286_56702 = G__56738;
i__56287_56703 = G__56739;
continue;
} else {
var G__56740 = seq__56283_56700;
var G__56741 = chunk__56285_56701;
var G__56742 = count__56286_56702;
var G__56743 = (i__56287_56703 + (1));
seq__56283_56700 = G__56740;
chunk__56285_56701 = G__56741;
count__56286_56702 = G__56742;
i__56287_56703 = G__56743;
continue;
}
} else {
var temp__5753__auto___56744 = cljs.core.seq(seq__56283_56700);
if(temp__5753__auto___56744){
var seq__56283_56745__$1 = temp__5753__auto___56744;
if(cljs.core.chunked_seq_QMARK_(seq__56283_56745__$1)){
var c__4649__auto___56746 = cljs.core.chunk_first(seq__56283_56745__$1);
var G__56747 = cljs.core.chunk_rest(seq__56283_56745__$1);
var G__56748 = c__4649__auto___56746;
var G__56749 = cljs.core.count(c__4649__auto___56746);
var G__56750 = (0);
seq__56283_56700 = G__56747;
chunk__56285_56701 = G__56748;
count__56286_56702 = G__56749;
i__56287_56703 = G__56750;
continue;
} else {
var child_struct_56751 = cljs.core.first(seq__56283_56745__$1);
if((!((child_struct_56751 == null)))){
if(typeof child_struct_56751 === 'string'){
var text_56752 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_56752),child_struct_56751].join(''));
} else {
var children_56753 = shadow.dom.svg_node(child_struct_56751);
if(cljs.core.seq_QMARK_(children_56753)){
var seq__56312_56754 = cljs.core.seq(children_56753);
var chunk__56314_56755 = null;
var count__56315_56756 = (0);
var i__56316_56757 = (0);
while(true){
if((i__56316_56757 < count__56315_56756)){
var child_56758 = chunk__56314_56755.cljs$core$IIndexed$_nth$arity$2(null,i__56316_56757);
if(cljs.core.truth_(child_56758)){
node.appendChild(child_56758);


var G__56759 = seq__56312_56754;
var G__56760 = chunk__56314_56755;
var G__56761 = count__56315_56756;
var G__56762 = (i__56316_56757 + (1));
seq__56312_56754 = G__56759;
chunk__56314_56755 = G__56760;
count__56315_56756 = G__56761;
i__56316_56757 = G__56762;
continue;
} else {
var G__56763 = seq__56312_56754;
var G__56764 = chunk__56314_56755;
var G__56765 = count__56315_56756;
var G__56766 = (i__56316_56757 + (1));
seq__56312_56754 = G__56763;
chunk__56314_56755 = G__56764;
count__56315_56756 = G__56765;
i__56316_56757 = G__56766;
continue;
}
} else {
var temp__5753__auto___56767__$1 = cljs.core.seq(seq__56312_56754);
if(temp__5753__auto___56767__$1){
var seq__56312_56769__$1 = temp__5753__auto___56767__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56312_56769__$1)){
var c__4649__auto___56770 = cljs.core.chunk_first(seq__56312_56769__$1);
var G__56771 = cljs.core.chunk_rest(seq__56312_56769__$1);
var G__56772 = c__4649__auto___56770;
var G__56773 = cljs.core.count(c__4649__auto___56770);
var G__56774 = (0);
seq__56312_56754 = G__56771;
chunk__56314_56755 = G__56772;
count__56315_56756 = G__56773;
i__56316_56757 = G__56774;
continue;
} else {
var child_56775 = cljs.core.first(seq__56312_56769__$1);
if(cljs.core.truth_(child_56775)){
node.appendChild(child_56775);


var G__56776 = cljs.core.next(seq__56312_56769__$1);
var G__56777 = null;
var G__56778 = (0);
var G__56779 = (0);
seq__56312_56754 = G__56776;
chunk__56314_56755 = G__56777;
count__56315_56756 = G__56778;
i__56316_56757 = G__56779;
continue;
} else {
var G__56780 = cljs.core.next(seq__56312_56769__$1);
var G__56781 = null;
var G__56782 = (0);
var G__56783 = (0);
seq__56312_56754 = G__56780;
chunk__56314_56755 = G__56781;
count__56315_56756 = G__56782;
i__56316_56757 = G__56783;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_56753);
}
}


var G__56784 = cljs.core.next(seq__56283_56745__$1);
var G__56785 = null;
var G__56786 = (0);
var G__56787 = (0);
seq__56283_56700 = G__56784;
chunk__56285_56701 = G__56785;
count__56286_56702 = G__56786;
i__56287_56703 = G__56787;
continue;
} else {
var G__56788 = cljs.core.next(seq__56283_56745__$1);
var G__56789 = null;
var G__56790 = (0);
var G__56791 = (0);
seq__56283_56700 = G__56788;
chunk__56285_56701 = G__56789;
count__56286_56702 = G__56790;
i__56287_56703 = G__56791;
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
var len__4829__auto___56792 = arguments.length;
var i__4830__auto___56793 = (0);
while(true){
if((i__4830__auto___56793 < len__4829__auto___56792)){
args__4835__auto__.push((arguments[i__4830__auto___56793]));

var G__56794 = (i__4830__auto___56793 + (1));
i__4830__auto___56793 = G__56794;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq56325){
var G__56326 = cljs.core.first(seq56325);
var seq56325__$1 = cljs.core.next(seq56325);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56326,seq56325__$1);
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
var G__56331 = arguments.length;
switch (G__56331) {
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
var c__49450__auto___56797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49451__auto__ = (function (){var switch__49348__auto__ = (function (state_56342){
var state_val_56343 = (state_56342[(1)]);
if((state_val_56343 === (1))){
var state_56342__$1 = state_56342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56342__$1,(2),once_or_cleanup);
} else {
if((state_val_56343 === (2))){
var inst_56339 = (state_56342[(2)]);
var inst_56340 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_56342__$1 = (function (){var statearr_56346 = state_56342;
(statearr_56346[(7)] = inst_56339);

return statearr_56346;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56342__$1,inst_56340);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__49349__auto__ = null;
var shadow$dom$state_machine__49349__auto____0 = (function (){
var statearr_56349 = [null,null,null,null,null,null,null,null];
(statearr_56349[(0)] = shadow$dom$state_machine__49349__auto__);

(statearr_56349[(1)] = (1));

return statearr_56349;
});
var shadow$dom$state_machine__49349__auto____1 = (function (state_56342){
while(true){
var ret_value__49350__auto__ = (function (){try{while(true){
var result__49351__auto__ = switch__49348__auto__(state_56342);
if(cljs.core.keyword_identical_QMARK_(result__49351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49351__auto__;
}
break;
}
}catch (e56350){var ex__49352__auto__ = e56350;
var statearr_56351_56798 = state_56342;
(statearr_56351_56798[(2)] = ex__49352__auto__);


if(cljs.core.seq((state_56342[(4)]))){
var statearr_56352_56799 = state_56342;
(statearr_56352_56799[(1)] = cljs.core.first((state_56342[(4)])));

} else {
throw ex__49352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56800 = state_56342;
state_56342 = G__56800;
continue;
} else {
return ret_value__49350__auto__;
}
break;
}
});
shadow$dom$state_machine__49349__auto__ = function(state_56342){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__49349__auto____0.call(this);
case 1:
return shadow$dom$state_machine__49349__auto____1.call(this,state_56342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__49349__auto____0;
shadow$dom$state_machine__49349__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__49349__auto____1;
return shadow$dom$state_machine__49349__auto__;
})()
})();
var state__49452__auto__ = (function (){var statearr_56353 = f__49451__auto__();
(statearr_56353[(6)] = c__49450__auto___56797);

return statearr_56353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49452__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
