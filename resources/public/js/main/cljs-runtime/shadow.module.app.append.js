
shadow.cljs.devtools.client.env.module_loaded('app');

try { bbss.portfolio.init(); } catch (e) { console.error("An error occurred when calling (bbss.portfolio/init)"); throw(e); }