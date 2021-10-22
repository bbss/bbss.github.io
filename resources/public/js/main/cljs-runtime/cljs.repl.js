goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__55875){
var map__55880 = p__55875;
var map__55880__$1 = cljs.core.__destructure_map(map__55880);
var m = map__55880__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55880__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55880__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__55883_56195 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55884_56196 = null;
var count__55885_56197 = (0);
var i__55886_56198 = (0);
while(true){
if((i__55886_56198 < count__55885_56197)){
var f_56199 = chunk__55884_56196.cljs$core$IIndexed$_nth$arity$2(null,i__55886_56198);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56199], 0));


var G__56200 = seq__55883_56195;
var G__56201 = chunk__55884_56196;
var G__56202 = count__55885_56197;
var G__56203 = (i__55886_56198 + (1));
seq__55883_56195 = G__56200;
chunk__55884_56196 = G__56201;
count__55885_56197 = G__56202;
i__55886_56198 = G__56203;
continue;
} else {
var temp__5753__auto___56204 = cljs.core.seq(seq__55883_56195);
if(temp__5753__auto___56204){
var seq__55883_56205__$1 = temp__5753__auto___56204;
if(cljs.core.chunked_seq_QMARK_(seq__55883_56205__$1)){
var c__4649__auto___56206 = cljs.core.chunk_first(seq__55883_56205__$1);
var G__56207 = cljs.core.chunk_rest(seq__55883_56205__$1);
var G__56208 = c__4649__auto___56206;
var G__56209 = cljs.core.count(c__4649__auto___56206);
var G__56210 = (0);
seq__55883_56195 = G__56207;
chunk__55884_56196 = G__56208;
count__55885_56197 = G__56209;
i__55886_56198 = G__56210;
continue;
} else {
var f_56211 = cljs.core.first(seq__55883_56205__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56211], 0));


var G__56212 = cljs.core.next(seq__55883_56205__$1);
var G__56213 = null;
var G__56214 = (0);
var G__56215 = (0);
seq__55883_56195 = G__56212;
chunk__55884_56196 = G__56213;
count__55885_56197 = G__56214;
i__55886_56198 = G__56215;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56216 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_56216], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_56216)))?cljs.core.second(arglists_56216):arglists_56216)], 0));
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
var seq__55898_56217 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55899_56218 = null;
var count__55900_56219 = (0);
var i__55901_56220 = (0);
while(true){
if((i__55901_56220 < count__55900_56219)){
var vec__55921_56221 = chunk__55899_56218.cljs$core$IIndexed$_nth$arity$2(null,i__55901_56220);
var name_56222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55921_56221,(0),null);
var map__55924_56223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55921_56221,(1),null);
var map__55924_56225__$1 = cljs.core.__destructure_map(map__55924_56223);
var doc_56226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55924_56225__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55924_56225__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56222], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56227], 0));

if(cljs.core.truth_(doc_56226)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56226], 0));
} else {
}


var G__56228 = seq__55898_56217;
var G__56229 = chunk__55899_56218;
var G__56230 = count__55900_56219;
var G__56231 = (i__55901_56220 + (1));
seq__55898_56217 = G__56228;
chunk__55899_56218 = G__56229;
count__55900_56219 = G__56230;
i__55901_56220 = G__56231;
continue;
} else {
var temp__5753__auto___56233 = cljs.core.seq(seq__55898_56217);
if(temp__5753__auto___56233){
var seq__55898_56234__$1 = temp__5753__auto___56233;
if(cljs.core.chunked_seq_QMARK_(seq__55898_56234__$1)){
var c__4649__auto___56235 = cljs.core.chunk_first(seq__55898_56234__$1);
var G__56236 = cljs.core.chunk_rest(seq__55898_56234__$1);
var G__56237 = c__4649__auto___56235;
var G__56238 = cljs.core.count(c__4649__auto___56235);
var G__56239 = (0);
seq__55898_56217 = G__56236;
chunk__55899_56218 = G__56237;
count__55900_56219 = G__56238;
i__55901_56220 = G__56239;
continue;
} else {
var vec__55932_56240 = cljs.core.first(seq__55898_56234__$1);
var name_56241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55932_56240,(0),null);
var map__55935_56242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55932_56240,(1),null);
var map__55935_56243__$1 = cljs.core.__destructure_map(map__55935_56242);
var doc_56244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55935_56243__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55935_56243__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56241], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56245], 0));

if(cljs.core.truth_(doc_56244)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56244], 0));
} else {
}


var G__56247 = cljs.core.next(seq__55898_56234__$1);
var G__56248 = null;
var G__56249 = (0);
var G__56250 = (0);
seq__55898_56217 = G__56247;
chunk__55899_56218 = G__56248;
count__55900_56219 = G__56249;
i__55901_56220 = G__56250;
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

var seq__55950 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__55951 = null;
var count__55952 = (0);
var i__55953 = (0);
while(true){
if((i__55953 < count__55952)){
var role = chunk__55951.cljs$core$IIndexed$_nth$arity$2(null,i__55953);
var temp__5753__auto___56252__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___56252__$1)){
var spec_56253 = temp__5753__auto___56252__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56253)], 0));
} else {
}


var G__56255 = seq__55950;
var G__56256 = chunk__55951;
var G__56257 = count__55952;
var G__56258 = (i__55953 + (1));
seq__55950 = G__56255;
chunk__55951 = G__56256;
count__55952 = G__56257;
i__55953 = G__56258;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__55950);
if(temp__5753__auto____$1){
var seq__55950__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__55950__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55950__$1);
var G__56259 = cljs.core.chunk_rest(seq__55950__$1);
var G__56260 = c__4649__auto__;
var G__56261 = cljs.core.count(c__4649__auto__);
var G__56262 = (0);
seq__55950 = G__56259;
chunk__55951 = G__56260;
count__55952 = G__56261;
i__55953 = G__56262;
continue;
} else {
var role = cljs.core.first(seq__55950__$1);
var temp__5753__auto___56263__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___56263__$2)){
var spec_56264 = temp__5753__auto___56263__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56264)], 0));
} else {
}


var G__56265 = cljs.core.next(seq__55950__$1);
var G__56266 = null;
var G__56267 = (0);
var G__56268 = (0);
seq__55950 = G__56265;
chunk__55951 = G__56266;
count__55952 = G__56267;
i__55953 = G__56268;
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
var G__56270 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__56271 = cljs.core.ex_cause(t);
via = G__56270;
t = G__56271;
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
var map__56086 = datafied_throwable;
var map__56086__$1 = cljs.core.__destructure_map(map__56086);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56086__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56086__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56086__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56087 = cljs.core.last(via);
var map__56087__$1 = cljs.core.__destructure_map(map__56087);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56087__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56087__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56087__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56088 = data;
var map__56088__$1 = cljs.core.__destructure_map(map__56088);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56088__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56088__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56088__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56089 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56089__$1 = cljs.core.__destructure_map(map__56089);
var top_data = map__56089__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56089__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56120 = phase;
var G__56120__$1 = (((G__56120 instanceof cljs.core.Keyword))?G__56120.fqn:null);
switch (G__56120__$1) {
case "read-source":
var map__56121 = data;
var map__56121__$1 = cljs.core.__destructure_map(map__56121);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56121__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56121__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56122 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56122__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56122,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56122);
var G__56122__$2 = (cljs.core.truth_((function (){var fexpr__56123 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56123.cljs$core$IFn$_invoke$arity$1 ? fexpr__56123.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56123.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56122__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56122__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56122__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56122__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56125 = top_data;
var G__56125__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56125,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56125);
var G__56125__$2 = (cljs.core.truth_((function (){var fexpr__56126 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56126.cljs$core$IFn$_invoke$arity$1 ? fexpr__56126.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56126.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56125__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56125__$1);
var G__56125__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56125__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56125__$2);
var G__56125__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56125__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56125__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56125__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56125__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56129 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56129,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56129,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56129,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56129,(3),null);
var G__56132 = top_data;
var G__56132__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56132,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56132);
var G__56132__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56132__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56132__$1);
var G__56132__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56132__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56132__$2);
var G__56132__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56132__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56132__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56132__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56132__$4;
}

break;
case "execution":
var vec__56133 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56133,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56133,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56133,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56133,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56075_SHARP_){
var or__4223__auto__ = (p1__56075_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__56136 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56136.cljs$core$IFn$_invoke$arity$1 ? fexpr__56136.cljs$core$IFn$_invoke$arity$1(p1__56075_SHARP_) : fexpr__56136.call(null,p1__56075_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__56139 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56139__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56139,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56139);
var G__56139__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56139__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56139__$1);
var G__56139__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56139__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56139__$2);
var G__56139__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56139__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56139__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56139__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56139__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56120__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56151){
var map__56153 = p__56151;
var map__56153__$1 = cljs.core.__destructure_map(map__56153);
var triage_data = map__56153__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56153__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56153__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56153__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56153__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56153__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56153__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56153__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56153__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__56156 = phase;
var G__56156__$1 = (((G__56156 instanceof cljs.core.Keyword))?G__56156.fqn:null);
switch (G__56156__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__56157 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__56158 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56159 = loc;
var G__56160 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56161_56322 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56162_56323 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56163_56324 = true;
var _STAR_print_fn_STAR__temp_val__56164_56325 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56163_56324);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56164_56325);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56146_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56146_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56162_56323);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56161_56322);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56157,G__56158,G__56159,G__56160) : format.call(null,G__56157,G__56158,G__56159,G__56160));

break;
case "macroexpansion":
var G__56165 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56166 = cause_type;
var G__56167 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56168 = loc;
var G__56169 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56165,G__56166,G__56167,G__56168,G__56169) : format.call(null,G__56165,G__56166,G__56167,G__56168,G__56169));

break;
case "compile-syntax-check":
var G__56170 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__56171 = cause_type;
var G__56172 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56173 = loc;
var G__56174 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56170,G__56171,G__56172,G__56173,G__56174) : format.call(null,G__56170,G__56171,G__56172,G__56173,G__56174));

break;
case "compilation":
var G__56175 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__56176 = cause_type;
var G__56177 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56178 = loc;
var G__56179 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56175,G__56176,G__56177,G__56178,G__56179) : format.call(null,G__56175,G__56176,G__56177,G__56178,G__56179));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__56180 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__56181 = symbol;
var G__56182 = loc;
var G__56183 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56184_56327 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56185_56328 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56186_56329 = true;
var _STAR_print_fn_STAR__temp_val__56187_56330 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56186_56329);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56187_56330);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56148_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56148_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56185_56328);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56184_56327);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56180,G__56181,G__56182,G__56183) : format.call(null,G__56180,G__56181,G__56182,G__56183));
} else {
var G__56189 = "Execution error%s at %s(%s).\n%s\n";
var G__56190 = cause_type;
var G__56191 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56192 = loc;
var G__56193 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56189,G__56190,G__56191,G__56192,G__56193) : format.call(null,G__56189,G__56190,G__56191,G__56192,G__56193));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56156__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
