goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing');
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx !== 'undefined')){
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}

/**
 * Returns true if the current thread is running non-nested transaction processing code.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.top_level_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$top_level_QMARK_(p__64513){
var map__64514 = p__64513;
var map__64514__$1 = cljs.core.__destructure_map(map__64514);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64514__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx),id,(0)),(0));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_submission_queue_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___64792 = arguments.length;
var i__4830__auto___64793 = (0);
while(true){
if((i__4830__auto___64793 < len__4829__auto___64792)){
args__4835__auto__.push((arguments[i__4830__auto___64793]));

var G__64794 = (i__4830__auto___64793 + (1));
i__4830__auto___64793 = G__64794;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$lang$applyTo = (function (seq64517){
var G__64518 = cljs.core.first(seq64517);
var seq64517__$1 = cljs.core.next(seq64517);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64518,seq64517__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_submission_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_submission_queue_BANG_(app,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$submission_queue(app){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_post_processing_steps_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___64797 = arguments.length;
var i__4830__auto___64798 = (0);
while(true){
if((i__4830__auto___64798 < len__4829__auto___64797)){
args__4835__auto__.push((arguments[i__4830__auto___64798]));

var G__64800 = (i__4830__auto___64798 + (1));
i__4830__auto___64798 = G__64800;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$lang$applyTo = (function (seq64528){
var G__64529 = cljs.core.first(seq64528);
var seq64528__$1 = cljs.core.next(seq64528);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64529,seq64528__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_post_processing_steps_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_post_processing_steps_BANG_(app,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$post_processing_steps(app){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_active_queue_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___64802 = arguments.length;
var i__4830__auto___64803 = (0);
while(true){
if((i__4830__auto___64803 < len__4829__auto___64802)){
args__4835__auto__.push((arguments[i__4830__auto___64803]));

var G__64804 = (i__4830__auto___64803 + (1));
i__4830__auto___64803 = G__64804;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$lang$applyTo = (function (seq64544){
var G__64545 = cljs.core.first(seq64544);
var seq64544__$1 = cljs.core.next(seq64544);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64545,seq64544__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_active_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_active_queue_BANG_(app,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$active_queue(app){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_send_queue_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___64805 = arguments.length;
var i__4830__auto___64806 = (0);
while(true){
if((i__4830__auto___64806 < len__4829__auto___64805)){
args__4835__auto__.push((arguments[i__4830__auto___64806]));

var G__64807 = (i__4830__auto___64806 + (1));
i__4830__auto___64806 = G__64807;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app,remote,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$lang$applyTo = (function (seq64555){
var G__64556 = cljs.core.first(seq64555);
var seq64555__$1 = cljs.core.next(seq64555);
var G__64558 = cljs.core.first(seq64555__$1);
var seq64555__$2 = cljs.core.next(seq64555__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64556,G__64558,seq64555__$2);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_send_queue_BANG_(app,remote,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$send_queue(app,remote){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)));
});
/**
 * Add `f` as a function that will run after the current transaction has been fully processed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_after_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_after_BANG_(app,f){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),f], 0));
});
/**
 * Is there post processing to do?
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$post_processing_QMARK_(app){
return cljs.core.boolean$(cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app)));
});
/**
 * Runs the queued post processing steps until the post-processing queue is empty.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.do_post_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$do_post_processing_BANG_(app){
var steps = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app);
while(true){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_post_processing_steps_BANG_(app,cljs.core.PersistentVector.EMPTY);

var seq__64576_64808 = cljs.core.seq(steps);
var chunk__64577_64809 = null;
var count__64578_64810 = (0);
var i__64579_64811 = (0);
while(true){
if((i__64579_64811 < count__64578_64810)){
var f_64812 = chunk__64577_64809.cljs$core$IIndexed$_nth$arity$2(null,i__64579_64811);
try{(f_64812.cljs$core$IFn$_invoke$arity$0 ? f_64812.cljs$core$IFn$_invoke$arity$0() : f_64812.call(null));
}catch (e64596){var e_64813 = e64596;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,134,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__64576_64808,chunk__64577_64809,count__64578_64810,i__64579_64811,steps,e_64813,f_64812){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64813,"Post processing step failed. See https://book.fulcrologic.com/#err-stp-postproc-failed"], null);
});})(seq__64576_64808,chunk__64577_64809,count__64578_64810,i__64579_64811,steps,e_64813,f_64812))
,null)),null,916405639,null);
}

var G__64814 = seq__64576_64808;
var G__64815 = chunk__64577_64809;
var G__64816 = count__64578_64810;
var G__64817 = (i__64579_64811 + (1));
seq__64576_64808 = G__64814;
chunk__64577_64809 = G__64815;
count__64578_64810 = G__64816;
i__64579_64811 = G__64817;
continue;
} else {
var temp__5753__auto___64818 = cljs.core.seq(seq__64576_64808);
if(temp__5753__auto___64818){
var seq__64576_64819__$1 = temp__5753__auto___64818;
if(cljs.core.chunked_seq_QMARK_(seq__64576_64819__$1)){
var c__4649__auto___64820 = cljs.core.chunk_first(seq__64576_64819__$1);
var G__64821 = cljs.core.chunk_rest(seq__64576_64819__$1);
var G__64822 = c__4649__auto___64820;
var G__64823 = cljs.core.count(c__4649__auto___64820);
var G__64824 = (0);
seq__64576_64808 = G__64821;
chunk__64577_64809 = G__64822;
count__64578_64810 = G__64823;
i__64579_64811 = G__64824;
continue;
} else {
var f_64825 = cljs.core.first(seq__64576_64819__$1);
try{(f_64825.cljs$core$IFn$_invoke$arity$0 ? f_64825.cljs$core$IFn$_invoke$arity$0() : f_64825.call(null));
}catch (e64601){var e_64826 = e64601;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,134,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__64576_64808,chunk__64577_64809,count__64578_64810,i__64579_64811,steps,e_64826,f_64825,seq__64576_64819__$1,temp__5753__auto___64818){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64826,"Post processing step failed. See https://book.fulcrologic.com/#err-stp-postproc-failed"], null);
});})(seq__64576_64808,chunk__64577_64809,count__64578_64810,i__64579_64811,steps,e_64826,f_64825,seq__64576_64819__$1,temp__5753__auto___64818))
,null)),null,-2144807908,null);
}

var G__64827 = cljs.core.next(seq__64576_64819__$1);
var G__64828 = null;
var G__64829 = (0);
var G__64830 = (0);
seq__64576_64808 = G__64827;
chunk__64577_64809 = G__64828;
count__64578_64810 = G__64829;
i__64579_64811 = G__64830;
continue;
}
} else {
}
}
break;
}

var temp__5753__auto__ = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app));
if(temp__5753__auto__){
var next_steps = temp__5753__auto__;
var G__64831 = next_steps;
steps = G__64831;
continue;
} else {
return null;
}
break;
}
});
/**
 * Returns true if the current thread is in the midst of running the optimistic actions of a new transaction.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.in_transaction_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$in_transaction_QMARK_(p__64614){
var map__64615 = p__64614;
var map__64615__$1 = cljs.core.__destructure_map(map__64615);
var app = map__64615__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64615__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx),id,(0)));
});
/**
 * Should be called after the application renders to ensure that transactions blocked until the next render become
 * unblocked. Schedules an activation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.release_post_render_tasks_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$release_post_render_tasks_BANG_(app){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (queue){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.dissoc,new cljs.core.Keyword(null,"after-render?","after-render?",595994030));
}),queue);
})], 0));
});
/**
 * Figure out the dispatch routine to trigger for the given network result.  If it exists, send the result
 *   to it.
 * 
 *   Returns the tx-element with the remote marked complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$dispatch_result_BANG_(app,tx_node,p__64623,remote){
var map__64624 = p__64623;
var map__64624__$1 = cljs.core.__destructure_map(map__64624);
var tx_element = map__64624__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64624__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64624__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var desired_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64624__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425));
var transmitted_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64624__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64624__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var result_64832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_64833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_64833)){
var env_64834 = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app,tx_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"transacted-ast","transacted-ast",-442737948),original_ast_node,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891),cljs.core.get.cljs$core$IFn$_invoke$arity$2(desired_ast_nodes,remote),new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690),cljs.core.get.cljs$core$IFn$_invoke$arity$2(transmitted_ast_nodes,remote),new cljs.core.Keyword(null,"result","result",1415092211),result_64832], null));
try{(handler_64833.cljs$core$IFn$_invoke$arity$1 ? handler_64833.cljs$core$IFn$_invoke$arity$1(env_64834) : handler_64833.call(null,env_64834));
}catch (e64629){var e_64835 = e64629;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,166,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64835,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception. See https://book.fulcrologic.com/#err-stp-res-action-exc"], null);
}),null)),null,35047678,null);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$distribute_element_results_BANG_(app,tx_node,p__64634){
var map__64635 = p__64634;
var map__64635__$1 = cljs.core.__destructure_map(map__64635);
var tx_element = map__64635__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64635__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64635__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null,remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.dispatch_result_BANG_(app,tx_node,new_element,remote);
}
}),tx_element,cljs.core.keys(results));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$node_index(queue,txn_id){
var n = cljs.core.count(queue);
var idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__64636){
var map__64637 = p__64636;
var map__64637__$1 = cljs.core.__destructure_map(map__64637);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64637__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
}),(0),queue);
if((idx < n)){
return idx;
} else {
return null;
}
});
/**
 * Side-effects against the app state to distribute the result for txn-id element at ele-idx. This will call the result
 * handler and mark that remote as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$distribute_results_BANG_(app,txn_id,ele_idx){
var active_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app);
var idx = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index(active_queue,txn_id);
var tx_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,idx);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx], null),(function (p1__64638_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_element_results_BANG_(app,tx_node,p1__64638_SHARP_);
})], 0));
});
/**
 * Deal with a network result on the given txn/element.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$record_result_BANG_(var_args){
var G__64648 = arguments.length;
switch (G__64648) {
case 6:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (app,txn_id,ele_idx,remote,result,result_key){
var active_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app);
var txn_idx = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index(active_queue,txn_id);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,209,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue! See https://book.fulcrologic.com/#err-stp-res-lacks-valid-node"], null);
}),null)),null,-909263742,null);
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result], 0));

return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_results_BANG_(app,txn_id,ele_idx);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app,txn_id,ele_idx,remote,result){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6);

/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$remove_send_BANG_(app,remote,txn_id,ele_idx){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,remote,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (old_queue){
return cljs.core.filterv((function (p__64651){
var map__64652 = p__64651;
var map__64652__$1 = cljs.core.__destructure_map(map__64652);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64652__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64652__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
}),old_queue);
})], 0));
});
/**
 * Generate a new send node and add it to the appropriate send queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG_(app,p__64656,ele_idx,remote){
var map__64657 = p__64656;
var map__64657__$1 = cljs.core.__destructure_map(map__64657);
var tx_node = map__64657__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64657__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64657__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var update_handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG__$_progress_handler_STAR_(result){
var id__64314__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__64314__auto__,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

var G__64659 = app;
var G__64660 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2(G__64659,G__64660) : com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.call(null,G__64659,G__64660));
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__64314__auto__,cljs.core.dec);
}});
var ast = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null));
var handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG__$_result_handler_STAR_(result){
var id__64314__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__64314__auto__,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app,id,ele_idx,remote,result);

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.remove_send_BANG_(app,remote,id,ele_idx);

var G__64662 = app;
var G__64663 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2(G__64662,G__64663) : com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.call(null,G__64662,G__64663));
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__64314__auto__,cljs.core.dec);
}});
var send_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),false,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),handler,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),update_handler], null);
if(cljs.core.truth_(ast)){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,remote,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),send_node], 0));
} else {
com.fulcrologic.fulcro.algorithms.scheduling.defer((function (){
return handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY], null));
}),(1));
}

return null;
});
/**
 * Queue all (unqueued) remote actions for the given element.  Returns the (possibly updated) node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$queue_element_sends_BANG_(app,tx_node,p__64666){
var map__64667 = p__64666;
var map__64667__$1 = cljs.core.__destructure_map(map__64667);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64667__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64667__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64667__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
var updated_node = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),(function (tx_element){
return com.fulcrologic.fulcro.algorithms.tx_processing.compute_desired_ast_node(app,remote,node,tx_element);
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.add_send_BANG_(app,updated_node,idx,remote);

return updated_node;
}
}),tx_node,to_dispatch);
});
/**
 * Finds any item(s) on the given node that are ready to be placed on the network queues and adds them. Non-optimistic
 *   multi-element nodes will only queue one remote operation at a time.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$queue_sends_BANG_(app,p__64680){
var map__64681 = p__64680;
var map__64681__$1 = cljs.core.__destructure_map(map__64681);
var tx_node = map__64681__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64681__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64681__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_element_sends_BANG_(app,node,element);
}),tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_tx_node_BANG_(app,p__64685){
var map__64686 = p__64685;
var map__64686__$1 = cljs.core.__destructure_map(map__64686);
var tx_node = map__64686__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64686__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
if(com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_(app,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_(app,com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_sends_BANG_(app,com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app,tx_node)));
}
});
/**
 * Process the send queues against the remotes, which will cause idle remotes with queued work to issue network requests.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_send_queues_BANG_(app){
var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app);
var operations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__64689_64845 = cljs.core.seq(remote_names);
var chunk__64690_64846 = null;
var count__64691_64847 = (0);
var i__64692_64848 = (0);
while(true){
if((i__64692_64848 < count__64691_64847)){
var remote_64849 = chunk__64690_64846.cljs$core$IIndexed$_nth$arity$2(null,i__64692_64848);
var send_queue_64850 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue(app,remote_64849);
var vec__64720_64851 = com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel(send_queue_64850);
var p_64852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64720_64851,(0),null);
var serial_64853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64720_64851,(1),null);
var front_64854 = cljs.core.first(serial_64853);
var seq__64723_64855 = cljs.core.seq(p_64852);
var chunk__64724_64856 = null;
var count__64725_64857 = (0);
var i__64726_64858 = (0);
while(true){
if((i__64726_64858 < count__64725_64857)){
var item_64859 = chunk__64724_64856.cljs$core$IIndexed$_nth$arity$2(null,i__64726_64858);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__64723_64855,chunk__64724_64856,count__64725_64857,i__64726_64858,seq__64689_64845,chunk__64690_64846,count__64691_64847,i__64692_64848,item_64859,send_queue_64850,vec__64720_64851,p_64852,serial_64853,front_64854,remote_64849,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app,item_64859,remote_64849);
});})(seq__64723_64855,chunk__64724_64856,count__64725_64857,i__64726_64858,seq__64689_64845,chunk__64690_64846,count__64691_64847,i__64692_64848,item_64859,send_queue_64850,vec__64720_64851,p_64852,serial_64853,front_64854,remote_64849,remote_names,operations))
);


var G__64860 = seq__64723_64855;
var G__64861 = chunk__64724_64856;
var G__64862 = count__64725_64857;
var G__64863 = (i__64726_64858 + (1));
seq__64723_64855 = G__64860;
chunk__64724_64856 = G__64861;
count__64725_64857 = G__64862;
i__64726_64858 = G__64863;
continue;
} else {
var temp__5753__auto___64864 = cljs.core.seq(seq__64723_64855);
if(temp__5753__auto___64864){
var seq__64723_64865__$1 = temp__5753__auto___64864;
if(cljs.core.chunked_seq_QMARK_(seq__64723_64865__$1)){
var c__4649__auto___64867 = cljs.core.chunk_first(seq__64723_64865__$1);
var G__64869 = cljs.core.chunk_rest(seq__64723_64865__$1);
var G__64870 = c__4649__auto___64867;
var G__64871 = cljs.core.count(c__4649__auto___64867);
var G__64872 = (0);
seq__64723_64855 = G__64869;
chunk__64724_64856 = G__64870;
count__64725_64857 = G__64871;
i__64726_64858 = G__64872;
continue;
} else {
var item_64873 = cljs.core.first(seq__64723_64865__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__64723_64855,chunk__64724_64856,count__64725_64857,i__64726_64858,seq__64689_64845,chunk__64690_64846,count__64691_64847,i__64692_64848,item_64873,seq__64723_64865__$1,temp__5753__auto___64864,send_queue_64850,vec__64720_64851,p_64852,serial_64853,front_64854,remote_64849,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app,item_64873,remote_64849);
});})(seq__64723_64855,chunk__64724_64856,count__64725_64857,i__64726_64858,seq__64689_64845,chunk__64690_64846,count__64691_64847,i__64692_64848,item_64873,seq__64723_64865__$1,temp__5753__auto___64864,send_queue_64850,vec__64720_64851,p_64852,serial_64853,front_64854,remote_64849,remote_names,operations))
);


var G__64876 = cljs.core.next(seq__64723_64865__$1);
var G__64877 = null;
var G__64878 = (0);
var G__64879 = (0);
seq__64723_64855 = G__64876;
chunk__64724_64856 = G__64877;
count__64725_64857 = G__64878;
i__64726_64858 = G__64879;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active?",-132674601).cljs$core$IFn$_invoke$arity$1(front_64854))){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app,remote_64849,serial_64853);
} else {
var map__64727_64881 = com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends(app,remote_64849,serial_64853);
var map__64727_64882__$1 = cljs.core.__destructure_map(map__64727_64881);
var send_queue_64883__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64727_64882__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node_64884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64727_64882__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node_64884)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__64689_64845,chunk__64690_64846,count__64691_64847,i__64692_64848,map__64727_64881,map__64727_64882__$1,send_queue_64883__$1,send_node_64884,send_queue_64850,vec__64720_64851,p_64852,serial_64853,front_64854,remote_64849,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app,send_node_64884,remote_64849);
});})(seq__64689_64845,chunk__64690_64846,count__64691_64847,i__64692_64848,map__64727_64881,map__64727_64882__$1,send_queue_64883__$1,send_node_64884,send_queue_64850,vec__64720_64851,p_64852,serial_64853,front_64854,remote_64849,remote_names,operations))
);
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app,remote_64849,send_queue_64883__$1);
}


var G__64885 = seq__64689_64845;
var G__64886 = chunk__64690_64846;
var G__64887 = count__64691_64847;
var G__64888 = (i__64692_64848 + (1));
seq__64689_64845 = G__64885;
chunk__64690_64846 = G__64886;
count__64691_64847 = G__64887;
i__64692_64848 = G__64888;
continue;
} else {
var temp__5753__auto___64889 = cljs.core.seq(seq__64689_64845);
if(temp__5753__auto___64889){
var seq__64689_64890__$1 = temp__5753__auto___64889;
if(cljs.core.chunked_seq_QMARK_(seq__64689_64890__$1)){
var c__4649__auto___64891 = cljs.core.chunk_first(seq__64689_64890__$1);
var G__64892 = cljs.core.chunk_rest(seq__64689_64890__$1);
var G__64893 = c__4649__auto___64891;
var G__64894 = cljs.core.count(c__4649__auto___64891);
var G__64895 = (0);
seq__64689_64845 = G__64892;
chunk__64690_64846 = G__64893;
count__64691_64847 = G__64894;
i__64692_64848 = G__64895;
continue;
} else {
var remote_64896 = cljs.core.first(seq__64689_64890__$1);
var send_queue_64897 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue(app,remote_64896);
var vec__64728_64898 = com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel(send_queue_64897);
var p_64899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64728_64898,(0),null);
var serial_64900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64728_64898,(1),null);
var front_64901 = cljs.core.first(serial_64900);
var seq__64731_64902 = cljs.core.seq(p_64899);
var chunk__64732_64903 = null;
var count__64733_64904 = (0);
var i__64734_64905 = (0);
while(true){
if((i__64734_64905 < count__64733_64904)){
var item_64906 = chunk__64732_64903.cljs$core$IIndexed$_nth$arity$2(null,i__64734_64905);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__64731_64902,chunk__64732_64903,count__64733_64904,i__64734_64905,seq__64689_64845,chunk__64690_64846,count__64691_64847,i__64692_64848,item_64906,send_queue_64897,vec__64728_64898,p_64899,serial_64900,front_64901,remote_64896,seq__64689_64890__$1,temp__5753__auto___64889,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app,item_64906,remote_64896);
});})(seq__64731_64902,chunk__64732_64903,count__64733_64904,i__64734_64905,seq__64689_64845,chunk__64690_64846,count__64691_64847,i__64692_64848,item_64906,send_queue_64897,vec__64728_64898,p_64899,serial_64900,front_64901,remote_64896,seq__64689_64890__$1,temp__5753__auto___64889,remote_names,operations))
);


var G__64907 = seq__64731_64902;
var G__64908 = chunk__64732_64903;
var G__64909 = count__64733_64904;
var G__64910 = (i__64734_64905 + (1));
seq__64731_64902 = G__64907;
chunk__64732_64903 = G__64908;
count__64733_64904 = G__64909;
i__64734_64905 = G__64910;
continue;
} else {
var temp__5753__auto___64911__$1 = cljs.core.seq(seq__64731_64902);
if(temp__5753__auto___64911__$1){
var seq__64731_64912__$1 = temp__5753__auto___64911__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64731_64912__$1)){
var c__4649__auto___64913 = cljs.core.chunk_first(seq__64731_64912__$1);
var G__64914 = cljs.core.chunk_rest(seq__64731_64912__$1);
var G__64915 = c__4649__auto___64913;
var G__64916 = cljs.core.count(c__4649__auto___64913);
var G__64917 = (0);
seq__64731_64902 = G__64914;
chunk__64732_64903 = G__64915;
count__64733_64904 = G__64916;
i__64734_64905 = G__64917;
continue;
} else {
var item_64920 = cljs.core.first(seq__64731_64912__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__64731_64902,chunk__64732_64903,count__64733_64904,i__64734_64905,seq__64689_64845,chunk__64690_64846,count__64691_64847,i__64692_64848,item_64920,seq__64731_64912__$1,temp__5753__auto___64911__$1,send_queue_64897,vec__64728_64898,p_64899,serial_64900,front_64901,remote_64896,seq__64689_64890__$1,temp__5753__auto___64889,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app,item_64920,remote_64896);
});})(seq__64731_64902,chunk__64732_64903,count__64733_64904,i__64734_64905,seq__64689_64845,chunk__64690_64846,count__64691_64847,i__64692_64848,item_64920,seq__64731_64912__$1,temp__5753__auto___64911__$1,send_queue_64897,vec__64728_64898,p_64899,serial_64900,front_64901,remote_64896,seq__64689_64890__$1,temp__5753__auto___64889,remote_names,operations))
);


var G__64921 = cljs.core.next(seq__64731_64912__$1);
var G__64922 = null;
var G__64923 = (0);
var G__64924 = (0);
seq__64731_64902 = G__64921;
chunk__64732_64903 = G__64922;
count__64733_64904 = G__64923;
i__64734_64905 = G__64924;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active?",-132674601).cljs$core$IFn$_invoke$arity$1(front_64901))){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app,remote_64896,serial_64900);
} else {
var map__64740_64925 = com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends(app,remote_64896,serial_64900);
var map__64740_64926__$1 = cljs.core.__destructure_map(map__64740_64925);
var send_queue_64927__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64740_64926__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node_64928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64740_64926__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node_64928)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__64689_64845,chunk__64690_64846,count__64691_64847,i__64692_64848,map__64740_64925,map__64740_64926__$1,send_queue_64927__$1,send_node_64928,send_queue_64897,vec__64728_64898,p_64899,serial_64900,front_64901,remote_64896,seq__64689_64890__$1,temp__5753__auto___64889,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app,send_node_64928,remote_64896);
});})(seq__64689_64845,chunk__64690_64846,count__64691_64847,i__64692_64848,map__64740_64925,map__64740_64926__$1,send_queue_64927__$1,send_node_64928,send_queue_64897,vec__64728_64898,p_64899,serial_64900,front_64901,remote_64896,seq__64689_64890__$1,temp__5753__auto___64889,remote_names,operations))
);
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app,remote_64896,send_queue_64927__$1);
}


var G__64929 = cljs.core.next(seq__64689_64890__$1);
var G__64930 = null;
var G__64931 = (0);
var G__64932 = (0);
seq__64689_64845 = G__64929;
chunk__64690_64846 = G__64930;
count__64691_64847 = G__64931;
i__64692_64848 = G__64932;
continue;
}
} else {
}
}
break;
}

var seq__64741 = cljs.core.seq(cljs.core.deref(operations));
var chunk__64742 = null;
var count__64743 = (0);
var i__64744 = (0);
while(true){
if((i__64744 < count__64743)){
var op = chunk__64742.cljs$core$IIndexed$_nth$arity$2(null,i__64744);
(op.cljs$core$IFn$_invoke$arity$0 ? op.cljs$core$IFn$_invoke$arity$0() : op.call(null));


var G__64933 = seq__64741;
var G__64934 = chunk__64742;
var G__64935 = count__64743;
var G__64936 = (i__64744 + (1));
seq__64741 = G__64933;
chunk__64742 = G__64934;
count__64743 = G__64935;
i__64744 = G__64936;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64741);
if(temp__5753__auto__){
var seq__64741__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64741__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__64741__$1);
var G__64937 = cljs.core.chunk_rest(seq__64741__$1);
var G__64938 = c__4649__auto__;
var G__64939 = cljs.core.count(c__4649__auto__);
var G__64940 = (0);
seq__64741 = G__64937;
chunk__64742 = G__64938;
count__64743 = G__64939;
i__64744 = G__64940;
continue;
} else {
var op = cljs.core.first(seq__64741__$1);
(op.cljs$core$IFn$_invoke$arity$0 ? op.cljs$core$IFn$_invoke$arity$0() : op.call(null));


var G__64941 = cljs.core.next(seq__64741__$1);
var G__64942 = null;
var G__64943 = (0);
var G__64944 = (0);
seq__64741 = G__64941;
chunk__64742 = G__64942;
count__64743 = G__64943;
i__64744 = G__64944;
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
 * Run through the active queue and do a processing step.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_queue_BANG_(p__64749){
var map__64750 = p__64749;
var map__64750__$1 = cljs.core.__destructure_map(map__64750);
var app = map__64750__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64750__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64750__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var old_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app);
var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5751__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_tx_node_BANG_(app,n);
if(cljs.core.truth_(temp__5751__auto__)){
var new_node = temp__5751__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
}),cljs.core.PersistentVector.EMPTY,old_queue);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app);
var explicit_refresh = com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes(app,new_queue);
var remotes_active_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes(new_queue,remotes);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_queue,com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,325,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Old queue changed! See https://book.fulcrologic.com/#err-stp-old-queue-chng"], null);
}),null)),null,447592248,null);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),remotes_active_QMARK_);

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_active_queue_BANG_(app,new_queue);

if(cljs.core.seq(explicit_refresh)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explicit_refresh], 0));
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_send_queues_BANG_(app);

return null;
});
/**
 * Returns true if the submission queue has work on it that can proceed without any restrictions.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$available_work_QMARK_(app){
var map__64756 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue(app));
var map__64756__$1 = cljs.core.__destructure_map(map__64756);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64756__$1,false);
return cljs.core.boolean$(cljs.core.seq(ready));
});
/**
 * Activate all of the transactions that have been submitted since the last activation. After the items are activated
 *   a single processing step will run for the active queue.
 * 
 *   Activation can be blocked by the tx-node options for things like waiting for the next render frame.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$activate_submissions_BANG_(app){
var map__64761 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue(app));
var map__64761__$1 = cljs.core.__destructure_map(map__64761);
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64761__$1,true);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64761__$1,false);
var _ = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_submission_queue_BANG_(app,cljs.core.vec(blocked));
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__64760_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(p1__64760_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app,p1__64760_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
}),ready);
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),dispatched_nodes], 0));

return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_queue_BANG_(app);
});
/**
 * Runs the submission queue. If the submission queue's optimistic actions submit more to the submission queue, then those
 * are processed as well until the submission queue remains empty. This can start network requests.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_all_immediate_work_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_all_immediate_work_BANG_(app){
try{return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.activate_submissions_BANG_(app);
}catch (e64764){var e = e64764;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,358,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Error processing tx queue! See https://book.fulcrologic.com/#err-stp-err-processing-tx-q"], null);
}),null)),null,-14330977,null);
}});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_queue_BANG_(app,p__64766){
while(true){
var map__64767 = p__64766;
var map__64767__$1 = cljs.core.__destructure_map(map__64767);
var options = map__64767__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64767__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var synchronous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64767__$1,new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391));
while(true){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_all_immediate_work_BANG_(app);

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_(app)){
continue;
} else {
}
break;
}

if(cljs.core.truth_((function (){var and__4221__auto__ = synchronous_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return component;
} else {
return and__4221__auto__;
}
})())){
com.fulcrologic.fulcro.components.refresh_component_BANG_(component);
} else {
var temp__5753__auto___64950 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(temp__5753__auto___64950)){
var render_BANG__64951 = temp__5753__auto___64950;
(render_BANG__64951.cljs$core$IFn$_invoke$arity$2 ? render_BANG__64951.cljs$core$IFn$_invoke$arity$2(app,options) : render_BANG__64951.call(null,app,options));
} else {
}
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.release_post_render_tasks_BANG_(app);

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_(app)){
var G__64952 = app;
var G__64953 = cljs.core.PersistentArrayMap.EMPTY;
app = G__64952;
p__64766 = G__64953;
continue;
} else {
return null;
}
break;
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$sync_tx_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___64954 = arguments.length;
var i__4830__auto___64955 = (0);
while(true){
if((i__4830__auto___64955 < len__4829__auto___64954)){
args__4835__auto__.push((arguments[i__4830__auto___64955]));

var G__64956 = (i__4830__auto___64955 + (1));
i__4830__auto___64955 = G__64956;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("BREAKING CHANGE. Please use `with-synchronous-transaction` to add sync transaction support to your Fulcro app",cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$lang$applyTo = (function (seq64772){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64772));
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$submit_sync_tx_BANG_(var_args){
var G__64778 = arguments.length;
switch (G__64778) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,tx){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3(app,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__64779,tx,options){
var map__64780 = p__64779;
var map__64780__$1 = cljs.core.__destructure_map(map__64780);
var app = map__64780__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64780__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__64781 = options;
var map__64781__$1 = cljs.core.__destructure_map(map__64781);
var options__$1 = map__64781__$1;
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64781__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64781__$1,new cljs.core.Keyword(null,"only-refresh","only-refresh",548241249));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64781__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var follow_on_reads = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64775_SHARP_){
return (((p1__64775_SHARP_ instanceof cljs.core.Keyword)) || (edn_query_language.core.ident_QMARK_(p1__64775_SHARP_)));
}),tx));
var node = com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,options__$1);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var refresh__$1 = (function (){var G__64782 = cljs.core.set(refresh);
var G__64782__$1 = ((cljs.core.seq(follow_on_reads))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__64782,follow_on_reads):G__64782);
if(cljs.core.truth_(ref)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__64782__$1,ref);
} else {
return G__64782__$1;
}
})();
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),node], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (s){
var G__64784 = s;
var G__64784__$1 = ((cljs.core.seq(refresh__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__64784,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,refresh__$1):G__64784);
if(cljs.core.seq(only_refresh)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__64784__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206),accumulate,only_refresh);
} else {
return G__64784__$1;
}
}));

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.in_transaction_QMARK_(app)){
} else {
var id__64314__auto___64958 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__64314__auto___64958,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_(app,options__$1);
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__64314__auto___64958,cljs.core.dec);
}}

return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * [app abort-id]
 * 
 * Implementation of abort when using this tx processing
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.abort_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.abort_BANG_;
/**
 * Installs synchronous transaction processing on a fulcro application.
 * 
 *   ```
 *   (defonce app (stx/with-synchronous-transactions
 *               (app/fulcro-app {...})))
 *   ```
 * 
 *   This plug-in attempts to do as much work as possible synchronously, including the processing of "remotes" that
 *   can behave synchronously. This processing system
 *   preserves transactional ordering semantics for nested submissions, but cannot guarantee that the overall sequence of
 *   operations will exactly match what you'd see if using the standard tx processing.
 * 
 *   The options map you can pass to `transact!` supports most of the same things as the standard tx processing, with the significant exception of
 *   `:optimistic? false` (pessimistic transactions). It also *always* assumes synchronous operation, thought the
 *   `synchronous?` option (if used) does imply that only the current component should be refreshed in the UI.
 * 
 *   - `:ref` - ident. The component ident to include in the transaction env.
 *   - `:component` - React element. The instance of the component that should appear in the transaction env.
 *   - `:synchronous?` - When true, causes the rendering to only refresh the calling component (if possible), since the implication
 *   is for fast-as-possible refresh semantics, even though this tx processing is already sync.
 *   - `:refresh` - A hint. Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - A hint. Vector of idents/keywords.  If the underlying configured rendering algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI, and they may be refreshed immediately on
 *  `transact!`. This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 * 
 *   If the `options` include `:ref` (which comp/transact! sets), then it will be auto-included on the `:refresh` list.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$with_synchronous_transactions(app){
var remotes = cljs.core.keys(new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app))));
var send_queues = cljs.core.zipmap(remotes,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
})));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(app,new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","tx!","com.fulcrologic.fulcro.algorithm/tx!",1081877133),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","abort!","com.fulcrologic.fulcro.algorithm/abort!",1698846123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.abort_BANG_], 0)),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),send_queues], null));
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.js.map
