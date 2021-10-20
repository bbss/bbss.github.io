goog.provide('bbss.portfolio');
var module$node_modules$react_intersection_observer$react_intersection_observer=shadow.js.require("module$node_modules$react_intersection_observer$react_intersection_observer", {});
var module$node_modules$$react_spring$web$dist$react_spring_web_cjs=shadow.js.require("module$node_modules$$react_spring$web$dist$react_spring_web_cjs", {});
var module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs=shadow.js.require("module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$$material_ui$core$esm$styles$index=shadow.js.require("module$node_modules$$material_ui$core$esm$styles$index", {});
var module$node_modules$$material_ui$core$index=shadow.js.require("module$node_modules$$material_ui$core$index", {});
var module$node_modules$react_use_measure$dist$web_cjs=shadow.js.require("module$node_modules$react_use_measure$dist$web_cjs", {});
bbss.portfolio.SPA = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
bbss.portfolio.init = (function bbss$portfolio$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init"], 0));

cljs.core.reset_BANG_(bbss.portfolio.SPA,com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"batch-notifications","batch-notifications",1250364860),(function (render_BANG_){
return module$node_modules$react_dom$index.unstable_batchedUpdates(render_BANG_);
})], null)));

module$node_modules$react_dom$index.render(module$node_modules$react$index.createElement(bbss.portfolio.App),document.getElementById("app"));

return com.fulcrologic.fulcro.inspect.inspect_client.app_started_BANG_(cljs.core.deref(bbss.portfolio.SPA));
});
bbss.portfolio.refresh = (function bbss$portfolio$refresh(){
return module$node_modules$react_dom$index.render(module$node_modules$react$index.createElement(bbss.portfolio.App),document.getElementById("app"));
});
bbss.portfolio.pages = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"intro","intro",754440928,null),new cljs.core.Symbol(null,"korean.tools","korean.tools",1344965852,null),new cljs.core.Symbol(null,"aircraft-noise","aircraft-noise",1838063090,null),new cljs.core.Symbol(null,"cljsc2","cljsc2",-1734546000,null),new cljs.core.Symbol(null,"data.worldbank.org","data.worldbank.org",-1557972304,null)], null);

bbss.portfolio.arrow_down = (function (){var G__106867 = (function bbss$portfolio$arrow_down(props__48880__auto__,maybe_ref__48881__auto__){
var vec__106868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__48880__auto__),maybe_ref__48881__auto__], null);

return helix.core.get_react().createElement("svg",(function (){var obj106872 = ({"height":(37),"viewBox":"0 0 24 37","width":"24","xmlns":"http://www.w3.org/2000/svg"});
return obj106872;
})(),helix.core.get_react().createElement("g",(function (){var obj106874 = ({"fill":"none","fillRule":"evenodd","stroke":"#000","strokeLinecap":"square","strokeWidth":"2.8","transform":"translate(2 1)"});
return obj106874;
})(),helix.core.get_react().createElement("path",(function (){var obj106876 = ({"d":"m2.82418338 30.8044364 13.57954542-.0568182.0568182-13.5795454","transform":"matrix(.70710678 .70710678 -.70710678 .70710678 19.785027 .20723)"});
return obj106876;
})()),helix.core.get_react().createElement("path",(function (){var obj106878 = ({"d":"m9.54545455.45075758v30.65151512"});
return obj106878;
})())));
});
if(goog.DEBUG === true){
var G__106879 = G__106867;
goog.object.set(G__106879,"displayName","bbss.portfolio/arrow-down");

return G__106879;
} else {
return G__106867;
}
})();



bbss.portfolio.hamburger_video_points = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Has big searchable dictionary and example dataset",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Creates study of any Korean text or image (e.g. page of a book)",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Scans sentences, grammar, dictionary matches, translations",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(8)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Creates interactive view to aid understanding text",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(15)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Saves words for spaced-repetition memory practice",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(42)], null)], null);
bbss.portfolio.korean_tools_tt = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Has great client-server story"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Uses explicit state-machines in the UI where logic isn't trivial"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Inspectable normalized data on front-end"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Form-state makes server mutations minimal and unintrusive"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Intuitive data resolution from many datasources on back-end"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Makes use of fancy neural network tech for page content and Korean grammar analysis"], null)], null);
bbss.portfolio.get_point_index = (function bbss$portfolio$get_point_index(points,at_time){
return ((function (){var or__4223__auto__ = cljs.core.some((function (p__106880){
var vec__106881 = p__106880;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106881,(0),null);
var map__106884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106881,(1),null);
var map__106884__$1 = cljs.core.__destructure_map(map__106884);
var starts_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106884__$1,new cljs.core.Keyword(null,"starts-at","starts-at",-624383465));
if((at_time < starts_at)){
return index;
} else {
return null;
}
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,points));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.count(points);
}
})() - (1));
});
bbss.portfolio.use_window_dimensions = (function bbss$portfolio$use_window_dimensions(){
var vec__106885 = module$node_modules$react$index.useState(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null));
var dims = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106885,(0),null);
var set_dims = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106885,(1),null);
module$node_modules$react$index.useEffect((function (){
var handler = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null))){
return null;
} else {
var G__106888 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null);
return (set_dims.cljs$core$IFn$_invoke$arity$1 ? set_dims.cljs$core$IFn$_invoke$arity$1(G__106888) : set_dims.call(null,G__106888));
}
});
window.addEventListener("resize",handler);

return (function (){
return window.removeEventListener("resize",handler);
});
}),[]);

return dims;
});

bbss.portfolio.KoreanTools = (function (){var G__106891 = (function bbss$portfolio$KoreanTools(props__48880__auto__,maybe_ref__48881__auto__){
var vec__106892 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__48880__auto__),maybe_ref__48881__auto__], null);
var map__106895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106892,(0),null);
var map__106895__$1 = cljs.core.__destructure_map(map__106895);
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106895__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));

var video_ref = module$node_modules$react$index.useRef();
var thin_QMARK_ = module$node_modules$$material_ui$core$index.useMediaQuery("(max-width: 1000px)");
var long_QMARK_ = module$node_modules$$material_ui$core$index.useMediaQuery("(min-height: 804px)");
var vec__106896 = module$node_modules$react$index.useState((0));
var highlighted_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106896,(0),null);
var set_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106896,(1),null);
var vec__106899 = module$node_modules$react$index.useState(false);
var hovered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106899,(0),null);
var set_hovered_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106899,(1),null);
var vec__106902 = module$node_modules$react$index.useState("points");
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106902,(0),null);
var set_selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106902,(1),null);
var is_mobile_QMARK_ = (function (){var ua = navigator.userAgent.toLowerCase();
var or__4223__auto__ = ua.includes("ipad");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = ua.includes("ios");
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return ua.includes("android");
}
}
})();
var dims = bbss.portfolio.use_window_dimensions();
var ratio = (cljs.core.truth_(long_QMARK_)?(function (){var x__4309__auto__ = 0.8;
var y__4310__auto__ = (function (){var x__4306__auto__ = 0.1;
var y__4307__auto__ = (((cljs.core.second(dims) - ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points"))?(400):(500))) / (766)) - 0.2);
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})():0.8);
var phone_spring = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpring(({"transform": (cljs.core.truth_(hovered_QMARK_)?["skew(0deg, 0deg) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio),")"].join(''):["skew(5deg, 5deg) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio),")"].join('')
), "config": module$node_modules$$react_spring$web$dist$react_spring_web_cjs.config.stiff}));
module$node_modules$react$index.useEffect((function (){
var time_changed = (function (e){
var new_point_index = bbss.portfolio.get_point_index(bbss.portfolio.hamburger_video_points,e.target.currentTime);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(highlighted_point,new_point_index)){
return null;
} else {
return (set_point.cljs$core$IFn$_invoke$arity$1 ? set_point.cljs$core$IFn$_invoke$arity$1(new_point_index) : set_point.call(null,new_point_index));
}
});
if(cljs.core.truth_(video_ref.current)){
video_ref.current.addEventListener("timeupdate",time_changed);
} else {
}

return (function (){
if(cljs.core.truth_(video_ref.current)){
return video_ref.current.removeEventListener("timeupdate",time_changed);
} else {
return null;
}
});
}));

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj106906 = ({"offset":(1),"speed":0.5,"style":({"height": "40px", "zIndex": (5)})});
return obj106906;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj106908 = ({"variant":"h1","style":({"color": "transparent", "WebkitTextStrokeWidth": "2px", "WebkitTextStrokeColor": "#929EA6"})});
return obj106908;
})(),"korean.tools")),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj106910 = ({"offset":0.95,"speed":2.9,"style":({"zIndex": (-1), "userSelect": "none", "pointerEvents": "none"})});
return obj106910;
})(),helix.core.get_react().createElement("img",(function (){var obj106912 = ({"style":(function (){var obj106914 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"left":helix.impl.props.__GT_js("20%"),"transform":helix.impl.props.__GT_js("rotate(10deg)")});
return obj106914;
})(),"height":"100px","src":"ktmain.png"});
return obj106912;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj106916 = ({"offset":0.95,"speed":0.9});
return obj106916;
})(),helix.core.get_react().createElement("img",(function (){var obj106918 = ({"style":(function (){var obj106920 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("2px"),"left":helix.impl.props.__GT_js("5%"),"top":helix.impl.props.__GT_js("5%"),"transform":helix.impl.props.__GT_js("rotate(-10deg)")});
return obj106920;
})(),"width":"200px","src":"ktstudy.png"});
return obj106918;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj106922 = ({"offset":0.9,"speed":0.4,"style":({"zIndex": (-1), "userSelect": "none", "pointerEvents": "none"})});
return obj106922;
})(),helix.core.get_react().createElement("img",(function (){var obj106924 = ({"src":"clj.png","height":"50px","width":"50px","style":(function (){var obj106926 = ({"alignSelf":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("10px")});
return obj106926;
})()});
return obj106924;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj106928 = ({"offset":0.9,"speed":1.9,"style":({"zIndex": (-1), "userSelect": "none", "pointerEvents": "none"})});
return obj106928;
})(),helix.core.get_react().createElement("img",(function (){var obj106930 = ({"style":(function (){var obj106932 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"left":helix.impl.props.__GT_js("30%"),"top":helix.impl.props.__GT_js("5%"),"transform":helix.impl.props.__GT_js("rotate(-15deg)")});
return obj106932;
})(),"src":"ktdebug.png","height":"150px"});
return obj106930;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj106934 = ({"offset":(1),"speed":1.2,"style":({"background": "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 40px 40px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) rgb(54, 54, 69)"})});
return obj106934;
})(),helix.core.get_react().createElement("div",(function (){var obj106936 = ({"style":(function (){var obj106938 = ({"display":helix.impl.props.__GT_js("flex"),"position":helix.impl.props.__GT_js("relative")});
return obj106938;
})()});
return obj106936;
})(),helix.core.get_react().createElement("div",(function (){var obj106940 = ({"style":(function (){var obj106942 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"top":helix.impl.props.__GT_js("130px"),"position":helix.impl.props.__GT_js("relative"),"margin":helix.impl.props.__GT_js("10px")});
return obj106942;
})()});
return obj106940;
})(),helix.core.get_react().createElement("p",(function (){var obj106944 = ({"style":(function (){var obj106946 = ({"display":helix.impl.props.__GT_js("inline-block"),"fontFamily":helix.impl.props.__GT_js("Rubik, sans-serif"),"fontWeight":helix.impl.props.__GT_js("800"),"fontSize":helix.impl.props.__GT_js("1rem"),"lineHeight":helix.impl.props.__GT_js(1.66),"letterSpacing":helix.impl.props.__GT_js("0.03333em"),"color":helix.impl.props.__GT_js("rgba(255,255,255,0.8)")});
return obj106946;
})()});
return obj106944;
})(),"A ",helix.core.get_react().createElement("em",({}),"work in progress")," that I've been using to help me study Korean."),helix.core.get_react().createElement("p",(function (){var obj106950 = ({"style":(function (){var obj106952 = ({"display":helix.impl.props.__GT_js("inline-block"),"fontFamily":helix.impl.props.__GT_js("Rubik, sans-serif"),"fontWeight":helix.impl.props.__GT_js("800"),"fontSize":helix.impl.props.__GT_js("1rem"),"lineHeight":helix.impl.props.__GT_js(1.66),"letterSpacing":helix.impl.props.__GT_js("0.03333em"),"color":helix.impl.props.__GT_js("rgba(255,255,255,0.8)")});
return obj106952;
})()});
return obj106950;
})(),"I started turning it into an app because I think others might like the tool!"),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Paper,(function (){var obj106954 = ({"style":({"marginTop": "50px", "minHeight": "80px", "background": "linear-gradient(white 60%, transparent 100%)"}),"elevation":(3)});
return obj106954;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tabs,(function (){var obj106956 = ({"value":selected_tab,"onChange":(function (_,e2){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(e2) : set_selected_tab.call(null,e2));
})});
return obj106956;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj106958 = ({"value":"points","label":"Highlights"});
return obj106958;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj106960 = ({"value":"tt","label":"Technical Tidbits"});
return obj106960;
})())),helix.core.get_react().createElement("div",(function (){var obj106962 = ({"style":(function (){var obj106964 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("row"),"marginTop":helix.impl.props.__GT_js("20px"),"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("20px")});
return obj106964;
})()});
return obj106962;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj106966 = ({"direction":"right","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points")});
return obj106966;
})(),helix.core.get_react().createElement("div",(function (){var obj106968 = ({"style":(function (){var obj106970 = ({"position":helix.impl.props.__GT_js("absolute")});
return obj106970;
})(),"elevation":(3)});
return obj106968;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__106971){
var vec__106972 = p__106971;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106972,(0),null);
var map__106975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106972,(1),null);
var map__106975__$1 = cljs.core.__destructure_map(map__106975);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106975__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var starts_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106975__$1,new cljs.core.Keyword(null,"starts-at","starts-at",-624383465));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Button,(function (){var obj106977 = ({"key":index,"variant":"outlined","style":({"transform": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"scale(1)":"scale(0.8)"), "transition": "200ms linear"}),"onClick":(function (){
return (video_ref.current.currentTime = starts_at);
})});
return obj106977;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj106979 = ({"variant":"h6","color":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"secondary":"primary")});
return obj106979;
})(),point));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.hamburger_video_points)))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj106981 = ({"direction":"left","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"tt")});
return obj106981;
})(),helix.core.get_react().createElement("div",(function (){var obj106983 = ({"style":(function (){var obj106985 = ({"position":helix.impl.props.__GT_js("absolute")});
return obj106985;
})()});
return obj106983;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__106986){
var vec__106987 = p__106986;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106987,(0),null);
var map__106990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106987,(1),null);
var map__106990__$1 = cljs.core.__destructure_map(map__106990);
var tidbit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106990__$1,new cljs.core.Keyword(null,"tidbit","tidbit",1352532847));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj106992 = ({"key":index,"variant":"h6","color":"primary"});
return obj106992;
})(),tidbit);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.korean_tools_tt)))))))),helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj106994 = ({"onMouseOver":(function (){
return (set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_hovered_BANG_.call(null,true));
}),"onMouseOut":(function (){
return (set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_hovered_BANG_.call(null,false));
}),"style":(cljs.core.truth_(is_mobile_QMARK_)?({"transform": phone_spring.transform, "borderRadius": "40px", "top": ["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.second(dims) / (2)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points"))?(180):(240)))),"px - 383px)"].join(''), "width": "375px", "zIndex": (5), "position": "absolute", "boxShadow": "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111", "height": "812px", "left": ["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.first(dims) / (2))),"px - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((200)),"px)"].join(''), "margin": "40px auto"}):({"transform": phone_spring.transform, "borderRadius": "40px", "top": "-220px", "width": "375px", "position": "relative", "boxShadow": "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111", "height": "812px", "left": "330px", "margin": "40px auto"}))});
return obj106994;
})(),helix.core.get_react().createElement("video",(function (){var obj106996 = ({"autoPlay":true,"ref":video_ref,"muted":true,"loop":true,"playsInline":true,"id":"kt","style":(function (){var obj106998 = ({"borderRadius":helix.impl.props.__GT_js("30px"),"zIndex":helix.impl.props.__GT_js((20))});
return obj106998;
})()});
return obj106996;
})(),helix.core.get_react().createElement("source",(function (){var obj107000 = ({"src":"kt-hamburger.webm","type":"video/webm;codecs=\"vp8, vorbis\""});
return obj107000;
})()),helix.core.get_react().createElement("source",(function (){var obj107002 = ({"src":"kt-hamburger.mov","type":"video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\""});
return obj107002;
})()))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.ButtonBase,(function (){var obj107004 = ({"style":({"position": "absolute", "bottom": "10px", "left": "10px"}),"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((2)) : to_page.call(null,(2)));
})});
return obj107004;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107006 = ({"variant":"caption","style":({"fontWeight": "800", "color": "rgba(255,255,255,0.8)", "fontSize": "20px"})});
return obj107006;
})(),"AIRCRAFT-NOISE.ORG"),helix.core.get_react().createElement("span",(function (){var obj107008 = ({"style":(function (){var obj107010 = ({"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("230px")});
return obj107010;
})()});
return obj107008;
})(),helix.core.get_react().createElement(bbss.portfolio.arrow_down,null)))));
});
if(goog.DEBUG === true){
var G__107011 = G__106891;
goog.object.set(G__107011,"displayName","bbss.portfolio/KoreanTools");

return G__107011;
} else {
return G__106891;
}
})();



bbss.portfolio.aircraft_noise_points = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"3D exploration of flight data",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Client-side data processing",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(12)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Different types of visualization",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(25)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Live flight streaming",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(72)], null)], null);
bbss.portfolio.aircraft_noise_tt = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Making use of the great vis.gl GIS tool suite."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Worked with Uber vis.gl team to squeeze out performance."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Using WebWorkers for data fetching & processing."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Keeping UI thread as yank-free as possible."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Use WebSockets and defined TypedArray layouts for optimal data transfer and display."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Use kafka for backfilling real-time flights."], null)], null);

bbss.portfolio.AircraftNoise = (function (){var G__107014 = (function bbss$portfolio$AircraftNoise(props__48880__auto__,maybe_ref__48881__auto__){
var vec__107015 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__48880__auto__),maybe_ref__48881__auto__], null);
var map__107018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107015,(0),null);
var map__107018__$1 = cljs.core.__destructure_map(map__107018);
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107018__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));

var video_ref = module$node_modules$react$index.useRef();
var vec__107019 = module$node_modules$react$index.useState((0));
var highlighted_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107019,(0),null);
var set_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107019,(1),null);
var vec__107022 = module$node_modules$react$index.useState(false);
var hovered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107022,(0),null);
var set_hovered_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107022,(1),null);
var vec__107025 = module$node_modules$react$index.useState("points");
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107025,(0),null);
var set_selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107025,(1),null);
var vec__107028 = bbss.portfolio.use_window_dimensions();
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107028,(0),null);
var window_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107028,(1),null);
var ratio = (function (){var x__4309__auto__ = 0.8;
var y__4310__auto__ = (function (){var x__4306__auto__ = 0.1;
var y__4307__auto__ = (((window_height - ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points"))?(400):(500))) / (766)) - 0.1);
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
var tablet_spring = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpring(({"transform": (cljs.core.truth_(hovered_QMARK_)?["skew(0deg, 0deg) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio),")"].join(''):["skew(5deg, 5deg) scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ratio),")"].join('')), "config": module$node_modules$$react_spring$web$dist$react_spring_web_cjs.config.stiff}));
module$node_modules$react$index.useEffect((function (){
var time_changed = (function (e){
var new_point_index = bbss.portfolio.get_point_index(bbss.portfolio.aircraft_noise_points,e.target.currentTime);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(highlighted_point,new_point_index)){
return null;
} else {
return (set_point.cljs$core$IFn$_invoke$arity$1 ? set_point.cljs$core$IFn$_invoke$arity$1(new_point_index) : set_point.call(null,new_point_index));
}
});
if(cljs.core.truth_(video_ref.current)){
video_ref.current.addEventListener("timeupdate",time_changed);
} else {
}

return (function (){
if(cljs.core.truth_(video_ref.current)){
return video_ref.current.removeEventListener("timeupdate",time_changed);
} else {
return null;
}
});
}));

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107032 = ({"offset":(2),"speed":0.5,"style":({"height": "115px", "zIndex": (7), "overflow": "hidden"})});
return obj107032;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107034 = ({"variant":"h1","style":({"color": "transparent", "zIndex": (6), "WebkitTextStrokeWidth": "2px", "WebkitTextStrokeColor": "#929EA6"})});
return obj107034;
})(),"aircraft-noise.org")),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107036 = ({"offset":1.96,"speed":0.5,"style":({"zIndex": (-1), "userSelect": "none", "pointerEvents": "none"})});
return obj107036;
})(),helix.core.get_react().createElement("img",(function (){var obj107038 = ({"style":(function (){var obj107040 = ({"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("70%"),"zIndex":helix.impl.props.__GT_js((-1)),"top":helix.impl.props.__GT_js("300px"),"userSelect":helix.impl.props.__GT_js("none"),"pointerEvents":helix.impl.props.__GT_js("none"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("rotate(-10deg)")});
return obj107040;
})(),"height":"250px","src":"acnsf.png"});
return obj107038;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107042 = ({"offset":1.96,"speed":0.4,"style":({"zIndex": (-1), "userSelect": "none", "pointerEvents": "none"})});
return obj107042;
})(),helix.core.get_react().createElement("img",(function (){var obj107044 = ({"style":(function (){var obj107046 = ({"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("40%"),"top":helix.impl.props.__GT_js("300px"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("rotate(5deg)")});
return obj107046;
})(),"height":"250px","src":"acnheatmap.png"});
return obj107044;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107048 = ({"offset":1.96,"speed":0.2,"style":({"zIndex": (-1), "userSelect": "none", "pointerEvents": "none"})});
return obj107048;
})(),helix.core.get_react().createElement("img",(function (){var obj107050 = ({"style":(function (){var obj107052 = ({"position":helix.impl.props.__GT_js("absolute"),"top":helix.impl.props.__GT_js("300px"),"borderRadius":helix.impl.props.__GT_js("20px"),"left":helix.impl.props.__GT_js("10%"),"transform":helix.impl.props.__GT_js("rotate(-5deg)")});
return obj107052;
})(),"height":"250px","src":"acnterrain.png"});
return obj107050;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107054 = ({"offset":(2),"speed":(1),"style":({"background": "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 40px 40px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) rgb(54, 54, 69)", "zIndex": (5)})});
return obj107054;
})(),helix.core.get_react().createElement("div",(function (){var obj107056 = ({"style":(function (){var obj107058 = ({"display":helix.impl.props.__GT_js("flex"),"position":helix.impl.props.__GT_js("relative"),"justifyContent":helix.impl.props.__GT_js("center")});
return obj107058;
})()});
return obj107056;
})(),helix.core.get_react().createElement("div",(function (){var obj107060 = ({"style":(function (){var obj107062 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"top":helix.impl.props.__GT_js("130px"),"position":helix.impl.props.__GT_js("relative"),"margin":helix.impl.props.__GT_js("10px")});
return obj107062;
})()});
return obj107060;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107064 = ({"variant":"body1","style":({"color": "lightgray"})});
return obj107064;
})(),"Supporting researchers in visualizing models of aircraft noise pollution. Building visualizations and supporting tools."),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Paper,(function (){var obj107066 = ({"style":({"marginTop": "50px", "minHeight": "80px", "background": "linear-gradient(white 60%, transparent 100%)"})});
return obj107066;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tabs,(function (){var obj107068 = ({"value":selected_tab,"onChange":(function (___$1,e2){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(e2) : set_selected_tab.call(null,e2));
})});
return obj107068;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj107070 = ({"value":"points","label":"Highlights"});
return obj107070;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj107072 = ({"value":"tt","label":"Technical Tidbits"});
return obj107072;
})())),helix.core.get_react().createElement("div",(function (){var obj107074 = ({"style":(function (){var obj107076 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("row"),"marginTop":helix.impl.props.__GT_js("20px"),"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("20px")});
return obj107076;
})()});
return obj107074;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj107078 = ({"direction":"right","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points")});
return obj107078;
})(),helix.core.get_react().createElement("div",(function (){var obj107080 = ({"style":(function (){var obj107082 = ({"position":helix.impl.props.__GT_js("absolute"),"display":helix.impl.props.__GT_js("flex")});
return obj107082;
})()});
return obj107080;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__107083){
var vec__107084 = p__107083;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107084,(0),null);
var map__107087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107084,(1),null);
var map__107087__$1 = cljs.core.__destructure_map(map__107087);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107087__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var starts_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107087__$1,new cljs.core.Keyword(null,"starts-at","starts-at",-624383465));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Button,(function (){var obj107089 = ({"key":index,"variant":"outlined","style":({"transform": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"scale(1)":"scale(0.8)"), "transition": "200ms linear"}),"onClick":(function (){
return (video_ref.current.currentTime = starts_at);
})});
return obj107089;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107091 = ({"variant":"h6","color":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"secondary":"primary")});
return obj107091;
})(),point));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.aircraft_noise_points)))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj107093 = ({"direction":"left","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"tt")});
return obj107093;
})(),helix.core.get_react().createElement("div",(function (){var obj107095 = ({"style":(function (){var obj107097 = ({"position":helix.impl.props.__GT_js("absolute")});
return obj107097;
})()});
return obj107095;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__107098){
var vec__107099 = p__107098;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107099,(0),null);
var map__107102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107099,(1),null);
var map__107102__$1 = cljs.core.__destructure_map(map__107102);
var tidbit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107102__$1,new cljs.core.Keyword(null,"tidbit","tidbit",1352532847));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107104 = ({"key":index,"variant":"h6","color":"primary"});
return obj107104;
})(),tidbit);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.aircraft_noise_tt))))))),helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj107106 = ({"onMouseOver":(function (){
return (set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_hovered_BANG_.call(null,true));
}),"onMouseOut":(function (){
return (set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_hovered_BANG_.call(null,false));
}),"style":({"transform": tablet_spring.transform, "borderRadius": "40px", "top": ["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((window_height / (2)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points"))?(180):(240)))),"px - 383px)"].join(''), "width": "1000px", "zIndex": (5), "position": "absolute", "boxShadow": "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111", "height": "766px", "left": "calc(50% - 500px)", "margin": "40px auto"})});
return obj107106;
})(),helix.core.get_react().createElement("video",(function (){var obj107108 = ({"autoPlay":true,"muted":true,"loop":true,"playsInline":true,"ref":video_ref,"style":(function (){var obj107110 = ({"width":helix.impl.props.__GT_js("1000px"),"height":helix.impl.props.__GT_js("766px"),"zIndex":helix.impl.props.__GT_js((6)),"borderRadius":helix.impl.props.__GT_js("40px")});
return obj107110;
})()});
return obj107108;
})(),helix.core.get_react().createElement("source",(function (){var obj107112 = ({"src":"acn.mp4","type":"video/webm;codecs=\"vp8, vorbis\""});
return obj107112;
})()),helix.core.get_react().createElement("source",(function (){var obj107114 = ({"src":"acn.mov","type":"video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\""});
return obj107114;
})())))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.ButtonBase,(function (){var obj107116 = ({"style":({"position": "absolute", "left": "10px", "bottom": "20px", "zIndex": (10)}),"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((3)) : to_page.call(null,(3)));
})});
return obj107116;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107118 = ({"variant":"caption","style":({"fontWeight": "800", "color": "rgba(255,255,255,0.8)", "fontSize": "20px"})});
return obj107118;
})(),"CLJSC2"),helix.core.get_react().createElement("span",(function (){var obj107120 = ({"style":(function (){var obj107122 = ({"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("80px")});
return obj107122;
})()});
return obj107120;
})(),helix.core.get_react().createElement(bbss.portfolio.arrow_down,null)))));
});
if(goog.DEBUG === true){
var G__107123 = G__107014;
goog.object.set(G__107123,"displayName","bbss.portfolio/AircraftNoise");

return G__107123;
} else {
return G__107014;
}
})();



bbss.portfolio.cljsc2_points = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1813198264),"Allows running and configuring multiple instances of SC2 games."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1813198264),"Allows interactive control of SC2 game via Clojure REPL."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1813198264),"Wraps full API for low level control."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1813198264),"Provides data-based api with game-state query capabilities for higher level control."], null)], null);
bbss.portfolio.cljsc2_tt = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Parses API EBNF context free grammar file to generate Clojure specs."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Provides datalog version of gamestate, and higher level rules to start playing the game."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Integrated clojure and cljsc2 into Jupyter Notebook for interactive studies."], null)], null);

bbss.portfolio.Cljsc2 = (function (){var G__107126 = (function bbss$portfolio$Cljsc2(props__48880__auto__,maybe_ref__48881__auto__){
var vec__107127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__48880__auto__),maybe_ref__48881__auto__], null);
var map__107130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107127,(0),null);
var map__107130__$1 = cljs.core.__destructure_map(map__107130);
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107130__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));

var vec__107131 = module$node_modules$react$index.useState("points");
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107131,(0),null);
var set_selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107131,(1),null);
var vec__107134 = bbss.portfolio.use_window_dimensions();
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107134,(0),null);
var window_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107134,(1),null);
return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107138 = ({"offset":(3),"speed":0.5,"style":({"height": "40px", "zIndex": (5)})});
return obj107138;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107140 = ({"variant":"h1","style":({"color": "transparent", "WebkitTextStrokeWidth": "2px", "WebkitTextStrokeColor": "#929EA6"})});
return obj107140;
})(),"CLJSC2")),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107142 = ({"offset":2.9,"speed":0.4});
return obj107142;
})(),helix.core.get_react().createElement("img",(function (){var obj107144 = ({"style":(function (){var obj107146 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("rotate(10deg)")});
return obj107146;
})(),"height":"500px","src":"meblizz.jpeg"});
return obj107144;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107148 = ({"offset":2.8,"speed":0.6});
return obj107148;
})(),helix.core.get_react().createElement("img",(function (){var obj107150 = ({"style":(function (){var obj107152 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("scale(0.4) rotate(-5deg)")});
return obj107152;
})(),"src":"sc2.png"});
return obj107150;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107154 = ({"offset":2.8,"speed":0.3});
return obj107154;
})(),helix.core.get_react().createElement("img",(function (){var obj107156 = ({"style":(function (){var obj107158 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"right":helix.impl.props.__GT_js("-70%"),"transform":helix.impl.props.__GT_js("rotate(3deg)")});
return obj107158;
})(),"height":"400px","src":"sc2notebook.png"});
return obj107156;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107160 = ({"offset":2.8,"speed":0.6});
return obj107160;
})(),helix.core.get_react().createElement("img",(function (){var obj107162 = ({"style":(function (){var obj107164 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("scale(0.4) rotate(-3deg)")});
return obj107164;
})(),"src":"sc2deepmind.jpeg"});
return obj107162;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107166 = ({"offset":(3),"speed":1.2,"style":({"background": "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 40px 40px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) rgb(54, 54, 69)", "zIndex": (3)})});
return obj107166;
})(),helix.core.get_react().createElement("div",(function (){var obj107168 = ({"style":(function (){var obj107170 = ({"display":helix.impl.props.__GT_js("flex"),"position":helix.impl.props.__GT_js("relative")});
return obj107170;
})()});
return obj107168;
})(),helix.core.get_react().createElement("div",(function (){var obj107172 = ({"style":(function (){var obj107174 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"top":helix.impl.props.__GT_js("130px"),"position":helix.impl.props.__GT_js("relative"),"margin":helix.impl.props.__GT_js("10px")});
return obj107174;
})()});
return obj107172;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107176 = ({"variant":"body1","style":({"color": "lightgray"})});
return obj107176;
})(),"Wrote an open source Clojure library to the StarCraft II AI API."),helix.core.get_react().createElement("br",null),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107178 = ({"variant":"body1","style":({"color": "lightgray"})});
return obj107178;
})(),"When DeepMind beat the legendary Lee Sedol (\uC774\uC138\uB3CC) in the old Asian game of Go they announced maybe tackling StarCraft next, I got very excited.."),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107180 = ({"variant":"body1","style":({"color": "lightgray"})});
return obj107180;
})(),"When Blizzard announced their cooperation and AI API I knew I wanted to hook up my favorite programming language to experiment with it."),helix.core.get_react().createElement("br",null),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107182 = ({"varinat":"body1","style":({"color": "lightgray"})});
return obj107182;
})(),"Around the time I finished my first experiments I got an invite to a workshop with StarCraft II developers and DeepMind researchers!"),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107184 = ({"varinat":"body1","style":({"color": "lightgray"})});
return obj107184;
})(),"Super lucky to meet a lot of smart people and talk about these awesome topics."),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Paper,(function (){var obj107186 = ({"style":({"marginTop": "50px", "minHeight": "80px", "background": "linear-gradient(white 60%, transparent 100%)"})});
return obj107186;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tabs,(function (){var obj107188 = ({"value":selected_tab,"onChange":(function (___$1,e2){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(e2) : set_selected_tab.call(null,e2));
})});
return obj107188;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj107190 = ({"value":"points","label":"Highlights"});
return obj107190;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj107192 = ({"value":"tt","label":"Technical Tidbits"});
return obj107192;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj107194 = ({"value":"yt","label":"Meetup Talk"});
return obj107194;
})())),helix.core.get_react().createElement("div",(function (){var obj107196 = ({"style":(function (){var obj107198 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("row"),"marginTop":helix.impl.props.__GT_js("20px"),"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("20px")});
return obj107198;
})()});
return obj107196;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj107200 = ({"direction":"right","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points")});
return obj107200;
})(),helix.core.get_react().createElement("div",(function (){var obj107202 = ({"style":(function (){var obj107204 = ({"position":helix.impl.props.__GT_js("absolute"),"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column")});
return obj107204;
})()});
return obj107202;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__107205){
var vec__107206 = p__107205;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107206,(0),null);
var map__107209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107206,(1),null);
var map__107209__$1 = cljs.core.__destructure_map(map__107209);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107209__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var starts_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107209__$1,new cljs.core.Keyword(null,"starts-at","starts-at",-624383465));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107211 = ({"key":index,"variant":"h6","color":"primary"});
return obj107211;
})(),point);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.cljsc2_points)))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj107213 = ({"direction":"left","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"tt")});
return obj107213;
})(),helix.core.get_react().createElement("div",(function (){var obj107215 = ({"style":(function (){var obj107217 = ({"position":helix.impl.props.__GT_js("absolute")});
return obj107217;
})()});
return obj107215;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__107218){
var vec__107219 = p__107218;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107219,(0),null);
var map__107222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107219,(1),null);
var map__107222__$1 = cljs.core.__destructure_map(map__107222);
var tidbit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107222__$1,new cljs.core.Keyword(null,"tidbit","tidbit",1352532847));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107224 = ({"key":index,"variant":"h6","color":"primary"});
return obj107224;
})(),tidbit);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.cljsc2_tt)))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj107226 = ({"direction":"up","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"yt")});
return obj107226;
})(),helix.core.get_react().createElement("div",(function (){var obj107228 = ({"style":(function (){var obj107230 = ({"position":helix.impl.props.__GT_js("absolute")});
return obj107230;
})()});
return obj107228;
})(),helix.core.get_react().createElement("iframe",(function (){var obj107232 = ({"width":(560),"height":(315),"src":"https://www.youtube.com/embed/c5DifklnMI8","frameBorder":(0),"allow":"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"});
return obj107232;
})()))))))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.ButtonBase,(function (){var obj107234 = ({"style":({"position": "absolute", "left": "10px", "bottom": "20px", "zIndex": (10)}),"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((4)) : to_page.call(null,(4)));
})});
return obj107234;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107236 = ({"variant":"caption","style":({"fontWeight": "800", "color": "rgba(255,255,255,0.8)", "fontSize": "20px"})});
return obj107236;
})(),"DATA.WORLDBANK.ORG"),helix.core.get_react().createElement("span",(function (){var obj107238 = ({"style":(function (){var obj107240 = ({"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("240px")});
return obj107240;
})()});
return obj107238;
})(),helix.core.get_react().createElement(bbss.portfolio.arrow_down,null)))));
});
if(goog.DEBUG === true){
var G__107241 = G__107126;
goog.object.set(G__107241,"displayName","bbss.portfolio/Cljsc2");

return G__107241;
} else {
return G__107126;
}
})();



bbss.portfolio.wb_points = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Autocompletes datasets/countries regions",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Has graphs and map visualizations",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(11)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),"Recommends further related data",new cljs.core.Keyword(null,"starts-at","starts-at",-624383465),(20)], null)], null);
bbss.portfolio.wb_tt = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Early adopter of ReactJS Redux pattern."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Wraps datasets with a falcorJS data resolution system: "], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Simplifies data fetching, caching, batching for network-limited devices."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tidbit","tidbit",1352532847),"Uses D3.js for custom graphs e.g. invisible voronoi diagram allows intuitive touch interactions."], null)], null);

bbss.portfolio.Worldbank = (function (){var G__107244 = (function bbss$portfolio$Worldbank(props__48880__auto__,maybe_ref__48881__auto__){
var vec__107245 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__48880__auto__),maybe_ref__48881__auto__], null);
var map__107248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107245,(0),null);
var map__107248__$1 = cljs.core.__destructure_map(map__107248);
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107248__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));

var video_ref = module$node_modules$react$index.useRef();
var vec__107249 = module$node_modules$react$index.useState((0));
var highlighted_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107249,(0),null);
var set_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107249,(1),null);
var vec__107252 = module$node_modules$react$index.useState(false);
var hovered_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107252,(0),null);
var set_hovered_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107252,(1),null);
var vec__107255 = module$node_modules$react$index.useState("points");
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107255,(0),null);
var set_selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107255,(1),null);
var phone_spring = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpring(({"transform": (cljs.core.truth_(hovered_QMARK_)?"skew(0deg, 0deg) scale(0.9)":"skew(5deg, 5deg) scale(0.8)"), "config": module$node_modules$$react_spring$web$dist$react_spring_web_cjs.config.stiff}));
module$node_modules$react$index.useEffect((function (){
var time_changed = (function (e){
var new_point_index = bbss.portfolio.get_point_index(bbss.portfolio.wb_points,e.target.currentTime);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(highlighted_point,new_point_index)){
return null;
} else {
return (set_point.cljs$core$IFn$_invoke$arity$1 ? set_point.cljs$core$IFn$_invoke$arity$1(new_point_index) : set_point.call(null,new_point_index));
}
});
if(cljs.core.truth_(video_ref.current)){
video_ref.current.addEventListener("timeupdate",time_changed);
} else {
}

return (function (){
if(cljs.core.truth_(video_ref.current)){
return video_ref.current.removeEventListener("timeupdate",time_changed);
} else {
return null;
}
});
}));

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107259 = ({"offset":(4),"speed":0.5,"style":({"height": "40px", "zIndex": (5)})});
return obj107259;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107261 = ({"variant":"h1","style":({"color": "transparent", "WebkitTextStrokeWidth": "2px", "WebkitTextStrokeColor": "#929EA6"})});
return obj107261;
})(),"data.worldbank.org")),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107263 = ({"offset":3.96,"speed":0.5});
return obj107263;
})(),helix.core.get_react().createElement("img",(function (){var obj107265 = ({"style":(function (){var obj107267 = ({"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("800px"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("rotate(10deg)")});
return obj107267;
})(),"height":"250px","src":"wbindicators.png"});
return obj107265;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107269 = ({"offset":3.96,"speed":0.4});
return obj107269;
})(),helix.core.get_react().createElement("img",(function (){var obj107271 = ({"style":(function (){var obj107273 = ({"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("300px"),"borderRadius":helix.impl.props.__GT_js("20px"),"transform":helix.impl.props.__GT_js("rotate(5deg)")});
return obj107273;
})(),"height":"250px","src":"wbmain.png"});
return obj107271;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107275 = ({"offset":3.96,"speed":0.3});
return obj107275;
})(),helix.core.get_react().createElement("img",(function (){var obj107277 = ({"style":(function (){var obj107279 = ({"position":helix.impl.props.__GT_js("relative"),"borderRadius":helix.impl.props.__GT_js("20px"),"left":helix.impl.props.__GT_js("0px"),"transform":helix.impl.props.__GT_js("rotate(-5deg)")});
return obj107279;
})(),"height":"250px","src":"wb2.png"});
return obj107277;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107281 = ({"offset":(4),"speed":1.2,"style":({"background": "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 40px 40px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) rgb(54, 54, 69)", "zIndex": (3)})});
return obj107281;
})(),helix.core.get_react().createElement("div",(function (){var obj107283 = ({"style":(function (){var obj107285 = ({"display":helix.impl.props.__GT_js("flex"),"position":helix.impl.props.__GT_js("relative")});
return obj107285;
})()});
return obj107283;
})(),helix.core.get_react().createElement("div",(function (){var obj107287 = ({"style":(function (){var obj107289 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"top":helix.impl.props.__GT_js("130px"),"position":helix.impl.props.__GT_js("relative"),"margin":helix.impl.props.__GT_js("10px")});
return obj107289;
})()});
return obj107287;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107291 = ({"variant":"body1","style":({"color": "lightgray"})});
return obj107291;
})(),"Built the mobile-first SPA for the Open Data platform of the World Bank. The Open Data platform has a big dataset of yearly indicators for all countries in the world.  The datasets are explorable in a bunch of ways and can be mixed and visualized to the user's liking."),helix.core.get_react().createElement("br",null),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107293 = ({"variant":"body1","style":({"color": "lightgray"})});
return obj107293;
})(),"The Open Data platform has a big dataset of yearly indicators for all countries in the world."),helix.core.get_react().createElement("br",null),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107295 = ({"variant":"body1","style":({"color": "lightgray"})});
return obj107295;
})(),"The datasets are explorable in a bunch of ways and can be mixed and visualized to the user's liking."),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Paper,(function (){var obj107297 = ({"style":({"marginTop": "50px", "minHeight": "80px", "background": "linear-gradient(white 60%, transparent 100%)"})});
return obj107297;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tabs,(function (){var obj107299 = ({"value":selected_tab,"onChange":(function (_,e2){
return (set_selected_tab.cljs$core$IFn$_invoke$arity$1 ? set_selected_tab.cljs$core$IFn$_invoke$arity$1(e2) : set_selected_tab.call(null,e2));
})});
return obj107299;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj107301 = ({"value":"points","label":"Highlights"});
return obj107301;
})()),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Tab,(function (){var obj107303 = ({"value":"tt","label":"Technical Tidbits"});
return obj107303;
})())),helix.core.get_react().createElement("div",(function (){var obj107305 = ({"style":(function (){var obj107307 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("row"),"marginTop":helix.impl.props.__GT_js("20px"),"position":helix.impl.props.__GT_js("relative"),"left":helix.impl.props.__GT_js("20px")});
return obj107307;
})()});
return obj107305;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj107309 = ({"direction":"right","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"points")});
return obj107309;
})(),helix.core.get_react().createElement("div",(function (){var obj107311 = ({"style":(function (){var obj107313 = ({"position":helix.impl.props.__GT_js("absolute"),"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column")});
return obj107313;
})()});
return obj107311;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__107314){
var vec__107315 = p__107314;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107315,(0),null);
var map__107318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107315,(1),null);
var map__107318__$1 = cljs.core.__destructure_map(map__107318);
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107318__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var starts_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107318__$1,new cljs.core.Keyword(null,"starts-at","starts-at",-624383465));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Button,(function (){var obj107320 = ({"key":index,"variant":"outlined","style":({"transform": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"scale(1)":"scale(0.8)"), "transition": "200ms linear"}),"onClick":(function (){
return (video_ref.current.currentTime = starts_at);
})});
return obj107320;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107322 = ({"variant":"h6","color":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,highlighted_point))?"secondary":"primary")});
return obj107322;
})(),point));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.wb_points)))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Slide,(function (){var obj107324 = ({"direction":"left","in":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_tab,"tt")});
return obj107324;
})(),helix.core.get_react().createElement("div",(function (){var obj107326 = ({"style":(function (){var obj107328 = ({"position":helix.impl.props.__GT_js("absolute")});
return obj107328;
})()});
return obj107326;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__107329){
var vec__107330 = p__107329;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107330,(0),null);
var map__107333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107330,(1),null);
var map__107333__$1 = cljs.core.__destructure_map(map__107333);
var tidbit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107333__$1,new cljs.core.Keyword(null,"tidbit","tidbit",1352532847));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107335 = ({"key":index,"variant":"h6","color":"primary"});
return obj107335;
})(),tidbit);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bbss.portfolio.wb_tt))))))),helix.core.get_react().createElement("div",(function (){var obj107337 = ({"key":(0),"style":(function (){var obj107339 = ({"margin":helix.impl.props.__GT_js("30px")});
return obj107339;
})()});
return obj107337;
})(),helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj107341 = ({"onMouseOver":(function (){
return (set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_hovered_BANG_.call(null,true));
}),"onMouseOut":(function (){
return (set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hovered_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_hovered_BANG_.call(null,false));
}),"style":({"width": "330px", "height": "714px", "margin": "40px auto", "borderRadius": "40px", "transform": phone_spring.transform, "boxShadow": "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111"})});
return obj107341;
})(),helix.core.get_react().createElement("video",(function (){var obj107343 = ({"autoPlay":true,"muted":true,"loop":true,"playsInline":true,"ref":video_ref,"style":(function (){var obj107345 = ({"width":helix.impl.props.__GT_js("330px"),"height":helix.impl.props.__GT_js("714px"),"zIndex":helix.impl.props.__GT_js((6)),"borderRadius":helix.impl.props.__GT_js("40px")});
return obj107345;
})()});
return obj107343;
})(),helix.core.get_react().createElement("source",(function (){var obj107347 = ({"src":"wb.mp4","type":"video/webm;codecs=\"vp8, vorbis\""});
return obj107347;
})()),helix.core.get_react().createElement("source",(function (){var obj107349 = ({"src":"wb.mov","type":"video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\""});
return obj107349;
})()))))),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.ButtonBase,(function (){var obj107351 = ({"style":({"position": "absolute", "left": "10px", "bottom": "20px", "zIndex": (10)}),"onClick":(function (){
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1((0)) : to_page.call(null,(0)));
})});
return obj107351;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107353 = ({"variant":"caption","style":({"fontWeight": "800", "color": "rgba(255,255,255,0.8)", "fontSize": "20px"})});
return obj107353;
})(),"TOP"),helix.core.get_react().createElement("span",(function (){var obj107355 = ({"style":(function (){var obj107357 = ({"transform":helix.impl.props.__GT_js("rotate(180deg)"),"position":helix.impl.props.__GT_js("absolute"),"left":helix.impl.props.__GT_js("50px")});
return obj107357;
})()});
return obj107355;
})(),helix.core.get_react().createElement(bbss.portfolio.arrow_down,null)))));
});
if(goog.DEBUG === true){
var G__107358 = G__107244;
goog.object.set(G__107358,"displayName","bbss.portfolio/Worldbank");

return G__107358;
} else {
return G__107244;
}
})();



bbss.portfolio.works = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"korean-tools","korean-tools",1842211947,null),bbss.portfolio.KoreanTools,new cljs.core.Symbol(null,"aircraft-noise.org","aircraft-noise.org",-965640641,null),bbss.portfolio.AircraftNoise,new cljs.core.Symbol(null,"cljsc2","cljsc2",-1734546000,null),bbss.portfolio.Cljsc2,new cljs.core.Symbol(null,"worldbank","worldbank",-1267436091,null),bbss.portfolio.Worldbank], null);
bbss.portfolio.orange = "#fadeac";
bbss.portfolio.gray = "#929EA6";
bbss.portfolio.theme = module$node_modules$$material_ui$core$esm$styles$index.createTheme(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Rubik, sans-serif"], null),new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"light","light",1918998747),bbss.portfolio.gray,new cljs.core.Keyword(null,"main","main",-2117802661),bbss.portfolio.gray,new cljs.core.Keyword(null,"dark","dark",1818973999),bbss.portfolio.gray,new cljs.core.Keyword(null,"contrastText","contrastText",-587910032),"#fff"], null),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"light","light",1918998747),bbss.portfolio.orange,new cljs.core.Keyword(null,"main","main",-2117802661),bbss.portfolio.orange,new cljs.core.Keyword(null,"dark","dark",1818973999),bbss.portfolio.orange,new cljs.core.Keyword(null,"contrastText","contrastText",-587910032),"#fff"], null)], null)], null)));

bbss.portfolio.Menu = (function (){var G__107361 = (function bbss$portfolio$Menu(props__48880__auto__,maybe_ref__48881__auto__){
var vec__107362 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__48880__auto__),maybe_ref__48881__auto__], null);
var map__107365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107362,(0),null);
var map__107365__$1 = cljs.core.__destructure_map(map__107365);
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107365__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));

var pop_ref = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpringRef();
var reveal_ref = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpringRef();
var vec__107366 = module$node_modules$react_intersection_observer$react_intersection_observer.useInView(({}));
var in_view_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107366,(0),null);
var top_in_view_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107366,(1),null);
var links = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["korean.tools","aircraft-noise.org","cljsc2","data.worldbank.org"], null));
var pop_spring = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useSpring(({"ref": pop_ref, "transform": (cljs.core.truth_(top_in_view_QMARK_)?"scale(1)":" scale(0)")}));
var trail_spring = module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useTransition((cljs.core.truth_(top_in_view_QMARK_)?cljs.core.to_array(links):[]),({"ref": reveal_ref, "reset": true, "trail": (50), "keys": cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second), "config": ({"mass": (4), "tension": (2000), "friction": (200)}), "enter": ({"opacity": (cljs.core.truth_(top_in_view_QMARK_)?(1):(0)), "height": (cljs.core.truth_(top_in_view_QMARK_)?"100px":"0px"), "x": (cljs.core.truth_(top_in_view_QMARK_)?(0):(20))}), "from": ({"opacity": (0), "x": (20), "height": "100px"})}));
module$node_modules$$react_spring$web$dist$react_spring_web_cjs.useChain((cljs.core.truth_(top_in_view_QMARK_)?[pop_ref,reveal_ref]:[reveal_ref,pop_ref]));

return helix.core.get_react().createElement("div",(function (){var obj107370 = ({"ref":in_view_ref});
return obj107370;
})(),helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj107372 = ({"style":({"display": "flex", "position": "absolute", "flexDirection": "column", "margin": "20px", "background": "rgba(100, 100, 100, 0.7)", "padding": "100px", "clipPath": "polygon(0 1%, 100% 0%, 90% 95%, 10% 90%)", "transform": pop_spring.transform})});
return obj107372;
})(),(function (){var G__107373 = (function (props,p__107374,opts){
var vec__107375 = p__107374;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107375,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__107375,(1),null);
return helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj107379 = ({"style":({"opacity": props.opacity, "height": props.height, "x": props.x}),"key":item});
return obj107379;
})(),helix.core.get_react().createElement(module$node_modules$$react_spring$web$dist$react_spring_web_cjs.animated.div,(function (){var obj107381 = ({"style":({})});
return obj107381;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Button,(function (){var obj107383 = ({"variant":"outlined","style":({"margin": "15px", "padding": "15px", "textTransform": "none"}),"onClick":(function (){
var G__107384 = (i + (1));
return (to_page.cljs$core$IFn$_invoke$arity$1 ? to_page.cljs$core$IFn$_invoke$arity$1(G__107384) : to_page.call(null,G__107384));
})});
return obj107383;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107386 = ({"variant":"h3","style":({"color": "transparent", "WebkitTextStrokeWidth": "1px", "WebkitTextStrokeColor": "white"})});
return obj107386;
})(),item))));
});
return (trail_spring.cljs$core$IFn$_invoke$arity$1 ? trail_spring.cljs$core$IFn$_invoke$arity$1(G__107373) : trail_spring.call(null,G__107373));
})()));
});
if(goog.DEBUG === true){
var G__107387 = G__107361;
goog.object.set(G__107387,"displayName","bbss.portfolio/Menu");

return G__107387;
} else {
return G__107361;
}
})();




bbss.portfolio.App = (function (){var G__107391 = (function bbss$portfolio$App(props__48880__auto__,maybe_ref__48881__auto__){
var vec__107392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__48880__auto__),maybe_ref__48881__auto__], null);

var parallax_ref = module$node_modules$react$index.useRef();
var to_page = (function (p1__107388_SHARP_){
return parallax_ref.current.scrollTo(p1__107388_SHARP_);
});
var thin_QMARK_ = module$node_modules$$material_ui$core$index.useMediaQuery("(max-width: 1000px)");
var long_QMARK_ = module$node_modules$$material_ui$core$index.useMediaQuery("(min-height: 804px)");
var is_mobile_QMARK_ = (function (){var ua = navigator.userAgent.toLowerCase();
var or__4223__auto__ = ua.includes("ipad");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = ua.includes("ios");
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return ua.includes("android");
}
}
})();
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$esm$styles$index.ThemeProvider,(function (){var obj107396 = ({"theme":bbss.portfolio.theme});
return obj107396;
})(),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.Parallax,(function (){var obj107398 = ({"ref":parallax_ref,"pages":(cljs.core.count(bbss.portfolio.works) + (1)),"style":({"top": (0), "left": (0)})});
return obj107398;
})(),helix.core.get_react().createElement("div",(function (){var obj107400 = ({"style":(function (){var obj107402 = ({"borderRadius":helix.impl.props.__GT_js("0 0 30px 30px"),"height":helix.impl.props.__GT_js("calc(100vh - 100px)"),"overflow":helix.impl.props.__GT_js("hidden")});
return obj107402;
})()});
return obj107400;
})(),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107404 = ({"offset":(0),"speed":(2),"horizontal":true,"style":({"background": "linear-gradient(100deg, hsl(110deg 100% 91%) 0vw, hsl(110deg 100% 91%) 55vw, hsl(110deg 100% 91% / 0%) 55.1vw, hsl(90deg 50% 57% / 0%) 100vw)", "position": "relative", "height": "100vh", "width": "100vw"})});
return obj107404;
})()),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107406 = ({"offset":(0),"speed":-1.5,"horizontal":true,"style":({"background": "linear-gradient(80deg, hsl(233deg 100% 92% / 0%) 65vw, hsl(233deg 100% 92% / 100%) 65.1vw, hsl(233deg 100% 92% / 100%) 65.2vw, hsl(233deg 100% 92%) 100vw)", "height": "calc(200vh - 100px)", "width": "100vw"})});
return obj107406;
})())),helix.core.get_react().createElement(module$node_modules$$react_spring$parallax$dist$react_spring_parallax_cjs.ParallaxLayer,(function (){var obj107408 = ({"offset":(0)});
return obj107408;
})(),helix.core.get_react().createElement("div",(function (){var obj107410 = ({"style":(function (){var obj107412 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js((cljs.core.truth_((function (){var and__4221__auto__ = long_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return is_mobile_QMARK_;
} else {
return and__4221__auto__;
}
})())?"column":"row")),"width":helix.impl.props.__GT_js("100vw"),"height":helix.impl.props.__GT_js("100%")});
return obj107412;
})()});
return obj107410;
})(),helix.core.get_react().createElement("div",(function (){var obj107414 = ({"style":(function (){var obj107416 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"alignItems":helix.impl.props.__GT_js("center"),"margin":helix.impl.props.__GT_js("30px")});
return obj107416;
})()});
return obj107414;
})(),helix.core.get_react().createElement("img",(function (){var obj107418 = ({"style":(function (){var obj107420 = ({"borderRadius":helix.impl.props.__GT_js("20px"),"zIndex":helix.impl.props.__GT_js((10)),"minHeight":helix.impl.props.__GT_js("30%"),"maxHeight":helix.impl.props.__GT_js("50%"),"maxWidth":helix.impl.props.__GT_js("30vw"),"verticalAlign":helix.impl.props.__GT_js("bottom"),"objectFit":helix.impl.props.__GT_js("cover")});
return obj107420;
})(),"src":"meblizz.jpeg"});
return obj107418;
})()),helix.core.get_react().createElement("div",({}),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107424 = ({"variant":"h2","style":({"whiteSpace": "nowrap"})});
return obj107424;
})(),"Baruch Berger"),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107426 = ({"variant":"h3","style":({"whiteSpace": "nowrap"})});
return obj107426;
})(),"software engineer"))),helix.core.get_react().createElement("div",(function (){var obj107428 = ({"style":(function (){var obj107430 = ({"position":helix.impl.props.__GT_js("relative"),"margin":helix.impl.props.__GT_js("30px"),"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column")});
return obj107430;
})()});
return obj107428;
})(),helix.core.get_react().createElement(bbss.portfolio.Menu,(function (){var obj107432 = ({"to-page":to_page});
return obj107432;
})())),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.ButtonBase,(function (){var obj107434 = ({"style":({"position": "static", "flexDirection": "column", "display": "flex", "alignItems": "flex-start", "justifyContent": "flex-end", "cursor": "pointer"}),"onClick":(function (){
return parallax_ref.current.scrollTo((1));
})});
return obj107434;
})(),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107436 = ({"variant":"caption","style":({"fontWeight": "800", "fontSize": "20px"})});
return obj107436;
})(),"SEE"),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107438 = ({"variant":"caption","style":({"fontWeight": "800", "fontSize": "20px"})});
return obj107438;
})(),"MY"),helix.core.get_react().createElement(module$node_modules$$material_ui$core$index.Typography,(function (){var obj107440 = ({"variant":"caption","style":({"fontWeight": "800", "fontSize": "20px"})});
return obj107440;
})(),"WORK"),helix.core.get_react().createElement(bbss.portfolio.arrow_down,null)))),helix.core.get_react().createElement(bbss.portfolio.KoreanTools,(function (){var obj107442 = ({"to-page":to_page});
return obj107442;
})()),helix.core.get_react().createElement(bbss.portfolio.AircraftNoise,(function (){var obj107444 = ({"to-page":to_page});
return obj107444;
})()),helix.core.get_react().createElement(bbss.portfolio.Cljsc2,(function (){var obj107446 = ({"to-page":to_page});
return obj107446;
})()),helix.core.get_react().createElement(bbss.portfolio.Worldbank,(function (){var obj107448 = ({"to-page":to_page});
return obj107448;
})())));
});
if(goog.DEBUG === true){
var G__107449 = G__107391;
goog.object.set(G__107449,"displayName","bbss.portfolio/App");

return G__107449;
} else {
return G__107391;
}
})();




//# sourceMappingURL=bbss.portfolio.js.map
