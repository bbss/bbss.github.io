goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__55746){
var map__55747 = p__55746;
var map__55747__$1 = cljs.core.__destructure_map(map__55747);
var m = map__55747__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55747__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55747__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__55752_56041 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55753_56042 = null;
var count__55754_56043 = (0);
var i__55755_56044 = (0);
while(true){
if((i__55755_56044 < count__55754_56043)){
var f_56047 = chunk__55753_56042.cljs$core$IIndexed$_nth$arity$2(null,i__55755_56044);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56047], 0));


var G__56048 = seq__55752_56041;
var G__56049 = chunk__55753_56042;
var G__56050 = count__55754_56043;
var G__56051 = (i__55755_56044 + (1));
seq__55752_56041 = G__56048;
chunk__55753_56042 = G__56049;
count__55754_56043 = G__56050;
i__55755_56044 = G__56051;
continue;
} else {
var temp__5753__auto___56052 = cljs.core.seq(seq__55752_56041);
if(temp__5753__auto___56052){
var seq__55752_56054__$1 = temp__5753__auto___56052;
if(cljs.core.chunked_seq_QMARK_(seq__55752_56054__$1)){
var c__4649__auto___56055 = cljs.core.chunk_first(seq__55752_56054__$1);
var G__56056 = cljs.core.chunk_rest(seq__55752_56054__$1);
var G__56057 = c__4649__auto___56055;
var G__56058 = cljs.core.count(c__4649__auto___56055);
var G__56059 = (0);
seq__55752_56041 = G__56056;
chunk__55753_56042 = G__56057;
count__55754_56043 = G__56058;
i__55755_56044 = G__56059;
continue;
} else {
var f_56063 = cljs.core.first(seq__55752_56054__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56063], 0));


var G__56064 = cljs.core.next(seq__55752_56054__$1);
var G__56065 = null;
var G__56066 = (0);
var G__56067 = (0);
seq__55752_56041 = G__56064;
chunk__55753_56042 = G__56065;
count__55754_56043 = G__56066;
i__55755_56044 = G__56067;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56068 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_56068], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_56068)))?cljs.core.second(arglists_56068):arglists_56068)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__55799_56069 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55800_56070 = null;
var count__55801_56071 = (0);
var i__55802_56072 = (0);
while(true){
if((i__55802_56072 < count__55801_56071)){
var vec__55816_56073 = chunk__55800_56070.cljs$core$IIndexed$_nth$arity$2(null,i__55802_56072);
var name_56074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55816_56073,(0),null);
var map__55819_56075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55816_56073,(1),null);
var map__55819_56076__$1 = cljs.core.__destructure_map(map__55819_56075);
var doc_56077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55819_56076__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55819_56076__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56074], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56078], 0));

if(cljs.core.truth_(doc_56077)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56077], 0));
} else {
}


var G__56079 = seq__55799_56069;
var G__56080 = chunk__55800_56070;
var G__56081 = count__55801_56071;
var G__56082 = (i__55802_56072 + (1));
seq__55799_56069 = G__56079;
chunk__55800_56070 = G__56080;
count__55801_56071 = G__56081;
i__55802_56072 = G__56082;
continue;
} else {
var temp__5753__auto___56083 = cljs.core.seq(seq__55799_56069);
if(temp__5753__auto___56083){
var seq__55799_56084__$1 = temp__5753__auto___56083;
if(cljs.core.chunked_seq_QMARK_(seq__55799_56084__$1)){
var c__4649__auto___56085 = cljs.core.chunk_first(seq__55799_56084__$1);
var G__56086 = cljs.core.chunk_rest(seq__55799_56084__$1);
var G__56087 = c__4649__auto___56085;
var G__56088 = cljs.core.count(c__4649__auto___56085);
var G__56089 = (0);
seq__55799_56069 = G__56086;
chunk__55800_56070 = G__56087;
count__55801_56071 = G__56088;
i__55802_56072 = G__56089;
continue;
} else {
var vec__55832_56091 = cljs.core.first(seq__55799_56084__$1);
var name_56092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55832_56091,(0),null);
var map__55835_56093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55832_56091,(1),null);
var map__55835_56094__$1 = cljs.core.__destructure_map(map__55835_56093);
var doc_56095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55835_56094__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55835_56094__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56092], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56096], 0));

if(cljs.core.truth_(doc_56095)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56095], 0));
} else {
}


var G__56097 = cljs.core.next(seq__55799_56084__$1);
var G__56098 = null;
var G__56099 = (0);
var G__56100 = (0);
seq__55799_56069 = G__56097;
chunk__55800_56070 = G__56098;
count__55801_56071 = G__56099;
i__55802_56072 = G__56100;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__55836 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__55837 = null;
var count__55838 = (0);
var i__55839 = (0);
while(true){
if((i__55839 < count__55838)){
var role = chunk__55837.cljs$core$IIndexed$_nth$arity$2(null,i__55839);
var temp__5753__auto___56101__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___56101__$1)){
var spec_56103 = temp__5753__auto___56101__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56103)], 0));
} else {
}


var G__56104 = seq__55836;
var G__56105 = chunk__55837;
var G__56106 = count__55838;
var G__56107 = (i__55839 + (1));
seq__55836 = G__56104;
chunk__55837 = G__56105;
count__55838 = G__56106;
i__55839 = G__56107;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__55836);
if(temp__5753__auto____$1){
var seq__55836__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__55836__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55836__$1);
var G__56108 = cljs.core.chunk_rest(seq__55836__$1);
var G__56109 = c__4649__auto__;
var G__56110 = cljs.core.count(c__4649__auto__);
var G__56111 = (0);
seq__55836 = G__56108;
chunk__55837 = G__56109;
count__55838 = G__56110;
i__55839 = G__56111;
continue;
} else {
var role = cljs.core.first(seq__55836__$1);
var temp__5753__auto___56113__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___56113__$2)){
var spec_56114 = temp__5753__auto___56113__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56114)], 0));
} else {
}


var G__56115 = cljs.core.next(seq__55836__$1);
var G__56116 = null;
var G__56117 = (0);
var G__56118 = (0);
seq__55836 = G__56115;
chunk__55837 = G__56116;
count__55838 = G__56117;
i__55839 = G__56118;
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
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__56120 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__56121 = cljs.core.ex_cause(t);
via = G__56120;
t = G__56121;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__55873 = datafied_throwable;
var map__55873__$1 = cljs.core.__destructure_map(map__55873);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55873__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55873__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55873__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__55874 = cljs.core.last(via);
var map__55874__$1 = cljs.core.__destructure_map(map__55874);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55874__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55874__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55874__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__55875 = data;
var map__55875__$1 = cljs.core.__destructure_map(map__55875);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55875__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55875__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55875__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__55876 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__55876__$1 = cljs.core.__destructure_map(map__55876);
var top_data = map__55876__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55876__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__55882 = phase;
var G__55882__$1 = (((G__55882 instanceof cljs.core.Keyword))?G__55882.fqn:null);
switch (G__55882__$1) {
case "read-source":
var map__55885 = data;
var map__55885__$1 = cljs.core.__destructure_map(map__55885);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55885__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55885__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__55886 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__55886__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55886,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__55886);
var G__55886__$2 = (cljs.core.truth_((function (){var fexpr__55894 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__55894.cljs$core$IFn$_invoke$arity$1 ? fexpr__55894.cljs$core$IFn$_invoke$arity$1(source) : fexpr__55894.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55886__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__55886__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55886__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__55886__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__55895 = top_data;
var G__55895__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55895,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__55895);
var G__55895__$2 = (cljs.core.truth_((function (){var fexpr__55901 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__55901.cljs$core$IFn$_invoke$arity$1 ? fexpr__55901.cljs$core$IFn$_invoke$arity$1(source) : fexpr__55901.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55895__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__55895__$1);
var G__55895__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55895__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__55895__$2);
var G__55895__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55895__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__55895__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55895__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__55895__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__55902 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55902,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55902,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55902,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55902,(3),null);
var G__55905 = top_data;
var G__55905__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55905,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__55905);
var G__55905__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55905__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__55905__$1);
var G__55905__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55905__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__55905__$2);
var G__55905__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55905__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__55905__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55905__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__55905__$4;
}

break;
case "execution":
var vec__55911 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55911,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55911,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55911,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55911,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55867_SHARP_){
var or__4223__auto__ = (p1__55867_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__55916 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__55916.cljs$core$IFn$_invoke$arity$1 ? fexpr__55916.cljs$core$IFn$_invoke$arity$1(p1__55867_SHARP_) : fexpr__55916.call(null,p1__55867_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__55917 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__55917__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55917,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__55917);
var G__55917__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55917__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__55917__$1);
var G__55917__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55917__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__55917__$2);
var G__55917__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55917__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__55917__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55917__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__55917__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55882__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__55966){
var map__55967 = p__55966;
var map__55967__$1 = cljs.core.__destructure_map(map__55967);
var triage_data = map__55967__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55967__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55967__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55967__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55967__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55967__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55967__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55967__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55967__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__55970 = phase;
var G__55970__$1 = (((G__55970 instanceof cljs.core.Keyword))?G__55970.fqn:null);
switch (G__55970__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__55975 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__55976 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55977 = loc;
var G__55978 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55979_56140 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55980_56141 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55981_56142 = true;
var _STAR_print_fn_STAR__temp_val__55982_56143 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55981_56142);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55982_56143);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55939_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__55939_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55980_56141);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55979_56140);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__55975,G__55976,G__55977,G__55978) : format.call(null,G__55975,G__55976,G__55977,G__55978));

break;
case "macroexpansion":
var G__56009 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56010 = cause_type;
var G__56011 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56012 = loc;
var G__56013 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56009,G__56010,G__56011,G__56012,G__56013) : format.call(null,G__56009,G__56010,G__56011,G__56012,G__56013));

break;
case "compile-syntax-check":
var G__56014 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__56015 = cause_type;
var G__56016 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56017 = loc;
var G__56018 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56014,G__56015,G__56016,G__56017,G__56018) : format.call(null,G__56014,G__56015,G__56016,G__56017,G__56018));

break;
case "compilation":
var G__56019 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__56020 = cause_type;
var G__56021 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56022 = loc;
var G__56023 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56019,G__56020,G__56021,G__56022,G__56023) : format.call(null,G__56019,G__56020,G__56021,G__56022,G__56023));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__56024 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__56025 = symbol;
var G__56026 = loc;
var G__56027 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56028_56145 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56029_56146 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56030_56147 = true;
var _STAR_print_fn_STAR__temp_val__56031_56148 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56030_56147);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56031_56148);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55964_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__55964_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56029_56146);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56028_56145);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56024,G__56025,G__56026,G__56027) : format.call(null,G__56024,G__56025,G__56026,G__56027));
} else {
var G__56032 = "Execution error%s at %s(%s).\n%s\n";
var G__56033 = cause_type;
var G__56034 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56035 = loc;
var G__56036 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56032,G__56033,G__56034,G__56035,G__56036) : format.call(null,G__56032,G__56033,G__56034,G__56035,G__56036));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55970__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
