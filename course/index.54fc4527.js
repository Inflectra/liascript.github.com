!function(){function e(e){return e&&e.__esModule?e.default:e}function o(e,o,t,i){Object.defineProperty(e,o,{get:t,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},r=t.parcelRequire55a5;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in a){var o=a[e];delete a[e];var t={id:e,exports:{}};return i[e]=t,o.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){a[e]=o},t.parcelRequire55a5=r),r.register("2DHz2",(function(t,i){o(t.exports,"extract",(function(){return l}));var a=r("iDmjL"),m=r("1JCPQ"),c=r("9yLLw"),n=r("3vvcD"),s=Object();function d(e){e=(e=e.replace("https://","")).replace("http://","");var o=c.endpoints.find((function(o){var t=a.slicedToArray(o,2),i=t[0],r=t[1];return r&&r.length?r.some((function(o){return e.match(new RegExp(o.replace(/\*/g,"(?:.*)"),"i"))})):i.includes(e)}));if(o)return"https://"+o[0]}function w(e,o,t,i){return p.apply(this,arguments)}function p(){return(p=a.asyncToGenerator(e(m).mark((function o(t,i,a,r){var c,n,s;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=i.replace(/\{format\}/g,"json"),c="".concat(i,"?format=json&url=").concat(encodeURIComponent(t)),c=a.maxwidth?"".concat(c,"&maxwidth=").concat(a.maxwidth):c,c=a.maxheight?"".concat(c,"&maxheight=").concat(a.maxheight):c,!r){e.next=17;break}return c=r+encodeURIComponent(c),e.next=9,fetch(c);case 9:return n=e.sent,e.next=12,n.text();case 12:s=e.sent,s=JSON.parse(s),s=JSON.parse(s.contents),e.next=23;break;case 17:return e.next=19,fetch(c);case 19:return n=e.sent,e.next=22,n.json();case 22:s=e.sent;case 23:return e.abrupt("return",s);case 24:case"end":return e.stop()}}),o)})))).apply(this,arguments)}function l(e,o){return u.apply(this,arguments)}function u(){return(u=a.asyncToGenerator(e(m).mark((function o(t,i){var a,r,c,p;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.endsWith("/")&&(t=t.slice(0,-1)),!s[t]||!s[t][JSON.stringify(i)]){e.next=3;break}return e.abrupt("return",s[t][JSON.stringify(i)]);case 3:if(a=d(t)){e.next=6;break}throw new Error('No provider found with given url "'.concat(t,'"'));case 6:return e.prev=7,e.next=10,w(t,a,i);case 10:r=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(7),e.next=17,w(t,a,i,n.PROXY);case 17:r=e.sent;case 18:return c=JSON.stringify(i),s[t]?s[t][c]=r:((p={})[c]=r,s[t]=p),e.abrupt("return",r);case 21:case"end":return e.stop()}}),o,null,[[7,13]])})))).apply(this,arguments)}function b(e){e.target instanceof HTMLElement&&(e.target.style.width="100%")}customElements.define("lia-embed",function(e){"use strict";a.inherits(t,e);var o=a.createSuper(t);function t(){var e;return a.classCallCheck(this,t),(e=o.call(this)).url_=null,e.div_=document.createElement("div"),e.div_.style.width="inherit",e.div_.style.height="inherit",e.div_.style.display="inline-block",e.thumbnail_=!1,e.paramCount=0,e}return a.createClass(t,[{key:"connectedCallback",value:function(){this.attachShadow({mode:"closed"}).appendChild(this.div_);var e=this.parentElement,o=parseFloat(this.getAttribute("scale")||"0.674");if(e){var t=parseInt(window.getComputedStyle(e).getPropertyValue("padding-left").replace("px",""));this.maxwidth_=null!=this.maxwidth_?this.maxwidth_:e.clientWidth-t-30,this.maxheight_=null!=this.maxheight_?this.maxheight_:Math.floor(this.maxwidth_*(o||.674)),this.maxheight_>screen.availHeight&&(this.maxheight_=Math.floor(screen.availHeight*(o||.76)))}this.render()}},{key:"render",value:function(){if(this.paramCount>2){var e=this.div_,o={maxwidth:this.maxwidth_,maxheight:this.maxheight_};if(this.url_){var t=this.url_,i=this.thumbnail_;l(t,o).then((function(o){try{i&&o.thumbnail_url?e.innerHTML='<img style="width: inherit; height: inherit; object-fit: cover" src="'.concat(o.thumbnail_url,'"></img>'):e.innerHTML=o.html}catch(o){e.innerHTML='<iframe src="'.concat(t,'" style="width: 100%; height: inherit" allowfullscreen loading="lazy"></iframe>')}var a=e.children[0];a&&("IFRAME"===a.nodeName?a.addEventListener("load",b):1===a.childElementCount&&"IFRAME"===a.children[0].nodeName?a.children[0].addEventListener("load",b):a instanceof HTMLElement&&(a.style.width="100%"))})).catch((function(i){e.innerHTML='<iframe src="'.concat(t,'" style="width: 100%; height: ').concat(o.maxheight?o.maxheight+"px":"inherit",';" allowfullscreen loading="lazy""></iframe>')}))}}}},{key:"url",get:function(){return this.url_},set:function(e){this.url_!==e&&(this.url_=e,this.paramCount++,this.render())}},{key:"maxheight",get:function(){return this.maxheight_},set:function(e){this.maxheight_!==e&&(this.paramCount++,0!=e&&(this.maxheight_=e))}},{key:"maxwidth",get:function(){return this.maxwidth_},set:function(e){this.maxwidth_!==e&&(this.paramCount++,0!=e&&(this.maxwidth_=e))}},{key:"thumbnail",get:function(){return this.thumbnail_},set:function(e){this.thumbnail_=e}}]),t}(a.wrapNativeSuper(HTMLElement)))})),r.register("1JCPQ",(function(e,o){var t=function(e){var o,t=function(e,o,t){return Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[o]},i=function(e,o,t,i){var a=o&&o.prototype instanceof r?o:r,m=Object.create(a.prototype),c=new l(i||[]);return m._invoke=d(e,t,c),m},a=function(e,o,t){try{return{type:"normal",arg:e.call(o,t)}}catch(e){return{type:"throw",arg:e}}},r=function(){},m=function(){},c=function(){},n=function(e){["next","throw","return"].forEach((function(o){t(e,o,(function(e){return this._invoke(o,e)}))}))},s=function(e,o){function t(i,r,m,c){var n=a(e[i],e,r);if("throw"!==n.type){var s=n.arg,d=s.value;return d&&"object"==typeof d&&v.call(d,"__await")?o.resolve(d.__await).then((function(e){t("next",e,m,c)}),(function(e){t("throw",e,m,c)})):o.resolve(d).then((function(e){s.value=e,m(s)}),(function(e){return t("throw",e,m,c)}))}c(n.arg)}var i;this._invoke=function(e,a){function r(){return new o((function(o,i){t(e,a,o,i)}))}return i=i?i.then(r,r):r()}},d=function(e,o,t){var i=x;return function(r,m){if(i===_)throw new Error("Generator is already running");if(i===j){if("throw"===r)throw m;return b()}for(t.method=r,t.arg=m;;){var c=t.delegate;if(c){var n=q(c,t);if(n){if(n===L)continue;return n}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(i===x)throw i=j,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);i=_;var s=a(e,o,t);if("normal"===s.type){if(i=t.done?j:z,s.arg===L)continue;return{value:s.arg,done:t.done}}"throw"===s.type&&(i=j,t.method="throw",t.arg=s.arg)}}},w=function(e){var o={tryLoc:e[0]};1 in e&&(o.catchLoc=e[1]),2 in e&&(o.finallyLoc=e[2],o.afterLoc=e[3]),this.tryEntries.push(o)},p=function(e){var o=e.completion||{};o.type="normal",delete o.arg,e.completion=o},l=function(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)},u=function(e){if(e){var t=e[g];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function t(){for(;++i<e.length;)if(v.call(e,i))return t.value=e[i],t.done=!1,t;return t.value=o,t.done=!0,t};return a.next=a}}return{next:b}},b=function(){return{value:o,done:!0}},h=Object.prototype,v=h.hasOwnProperty,f="function"==typeof Symbol?Symbol:{},g=f.iterator||"@@iterator",y=f.asyncIterator||"@@asyncIterator",k=f.toStringTag||"@@toStringTag";try{t({},"")}catch(e){t=function(e,o,t){return e[o]=t}}e.wrap=i;var x="suspendedStart",z="suspendedYield",_="executing",j="completed",L={},E={};t(E,g,(function(){return this}));var T=Object.getPrototypeOf,O=T&&T(T(u([])));O&&O!==h&&v.call(O,g)&&(E=O);var N=c.prototype=r.prototype=Object.create(E);function q(e,t){var i=e.iterator[t.method];if(i===o){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=o,q(e,t),"throw"===t.method))return L;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return L}var r=a(i,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,L;var m=r.arg;return m?m.done?(t[e.resultName]=m.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=o),t.delegate=null,L):m:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,L)}return m.prototype=c,t(N,"constructor",c),t(c,"constructor",m),m.displayName=t(c,k,"GeneratorFunction"),e.isGeneratorFunction=function(e){var o="function"==typeof e&&e.constructor;return!!o&&(o===m||"GeneratorFunction"===(o.displayName||o.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,t(e,k,"GeneratorFunction")),e.prototype=Object.create(N),e},e.awrap=function(e){return{__await:e}},n(s.prototype),t(s.prototype,y,(function(){return this})),e.AsyncIterator=s,e.async=function(o,t,a,r,m){void 0===m&&(m=Promise);var c=new s(i(o,t,a,r),m);return e.isGeneratorFunction(t)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},n(N),t(N,k,"Generator"),t(N,g,(function(){return this})),t(N,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var o=[];for(var t in e)o.push(t);return o.reverse(),function t(){for(;o.length;){var i=o.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},e.values=u,l.prototype={constructor:l,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=o,this.done=!1,this.delegate=null,this.method="next",this.arg=o,this.tryEntries.forEach(p),!e)for(var t in this)"t"===t.charAt(0)&&v.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=o)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){var t=function(t,a){return m.type="throw",m.arg=e,i.next=t,a&&(i.method="next",i.arg=o),!!a};if(this.done)throw e;for(var i=this,a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a],m=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var c=v.call(r,"catchLoc"),n=v.call(r,"finallyLoc");if(c&&n){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!n)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(e,o){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc<=this.prev&&v.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=o&&o<=a.finallyLoc&&(a=null);var r=a?a.completion:{};return r.type=e,r.arg=o,a?(this.method="next",this.next=a.finallyLoc,L):this.complete(r)},complete:function(e,o){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&o&&(this.next=o),L},finish:function(e){for(var o=this.tryEntries.length-1;o>=0;--o){var t=this.tryEntries[o];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),p(t),L}},catch:function(e){for(var o=this.tryEntries.length-1;o>=0;--o){var t=this.tryEntries[o];if(t.tryLoc===e){var i=t.completion;if("throw"===i.type){var a=i.arg;p(t)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,i){return this.delegate={iterator:u(e),resultName:t,nextLoc:i},"next"===this.method&&(this.arg=o),L}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})),r.register("9yLLw",(function(e,t){o(e.exports,"endpoints",(function(){return i}));var i=JSON.parse('[["www.23hq.com/23/oembed",["www.23hq.com/*/photo/*"]],["api.abraia.me/oembed",["store.abraia.me/*"]],["secure.actblue.com/cf/oembed",["secure.actblue.com/donate/*"]],["adilo.bigcommand.com/web/oembed",["adilo.bigcommand.com/watch/*"]],["play.adpaths.com/oembed/*",["play.adpaths.com/experience/*"]],["openapi.afreecatv.com/oembed/embedinfo",["v.afree.ca/ST/","vod.afreecatv.com/ST/","vod.afreecatv.com/PLAYER/STATION/","play.afreecatv.com/"]],["viewer.altium.com/shell/oembed",["altium.com/viewer/*"]],["api.altrulabs.com/api/v1/social/oembed",["app.altrulabs.com/*/*?answer_id=*","app.altrulabs.com/player/*"]],["live.amcharts.com/oembed",["live.amcharts.com/*","live.amcharts.com/*"]],["api.amtraker.com/v2/oembed",["amtraker.com/trains/*","beta.amtraker.com/trains/*"]],["animatron.com/oembed/json",["www.animatron.com/project/*","animatron.com/project/*"]],["animoto.com/oembeds/create",["animoto.com/play/*"]],["api.anniemusic.app/api/v1/oembed",["anniemusic.app/t/*","anniemusic.app/p/*"]],["display.apester.com/oembed",["renderer.apester.com/v2/*?preview=true&iframe_preview=true"]],["storymaps.arcgis.com/oembed",["storymaps.arcgis.com/stories/*"]],["app.archivos.digital/oembed/",["app.archivos.digital/app/view/*"]],["audioboom.com/publishing/oembed/v4.{format}",["audioboom.com/channels/*","audioboom.com/channel/*","audioboom.com/posts/*"]],["audioclip.naver.com/oembed",["audioclip.naver.com/channels/*/clips/*","audioclip.naver.com/audiobooks/*"]],["audiomack.com/oembed",["audiomack.com/*/song/*","audiomack.com/*/album/*","audiomack.com/*/playlist/*"]],["podcasts.audiomeans.fr/services/oembed",["podcasts.audiomeans.fr/*"]],["stage-embed.avocode.com/api/oembed",["app.avocode.com/view/*"]],["backtracks.fm/oembed",["backtracks.fm/*/*/e/*","backtracks.fm/*/s/*/*","backtracks.fm/*/*/*/*/e/*/*","backtracks.fm/*","backtracks.fm/*"]],["www.beautiful.ai/api/oembed",[]],["blackfire.io/oembed",["blackfire.io/profiles/*/graph","blackfire.io/profiles/compare/*/graph"]],["blogcast.host/oembed",["blogcast.host/embed/*","blogcast.host/embedly/*"]],["bookingmood.com/api/oembed",["www.bookingmood.com/embed/*/*"]],["boxofficebuz.com/oembed",[]],["view.briovr.com/api/v1/worlds/oembed/",["view.briovr.com/api/v1/worlds/oembed/*"]],["www.bumper.com/oembed/bumper",["www.bumper.com/oembed/bumper","www.bumper.com/oembed-s/bumper"]],["buttondown.email/embed",["buttondown.email/*"]],["cmc.byzart.eu/oembed/",["cmc.byzart.eu/files/*"]],["cacoo.com/oembed.{format}",["cacoo.com/diagrams/*"]],["www.catapult.app/_hcms/api/video/oembed",["www-catapult-app.sandbox.hs-sites.com/video-page*","www-catapult.app/video-page*"]],["img.catbo.at/oembed.json",["img.catbo.at/*"]],["view.ceros.com/oembed",["view.ceros.com/*"]],["www.chainflix.net/video/oembed",["chainflix.net/video/*","chainflix.net/video/embed/*","*.chainflix.net/video/*","*.chainflix.net/video/embed/*"]],["embed.chartblocks.com/1.0/oembed",["public.chartblocks.com/c/*"]],["chirb.it/oembed.{format}",["chirb.it/*"]],["chroco.ooo/embed",["chroco.ooo/mypage/*","chroco.ooo/story/*"]],["www.circuitlab.com/circuit/oembed/",["www.circuitlab.com/circuit/*"]],["www.clipland.com/api/oembed",["www.clipland.com/v/*","www.clipland.com/v/*"]],["api.clyp.it/oembed/",["clyp.it/*","clyp.it/playlist/*"]],["app.ilovecoco.video/api/oembed.{format}",["app.ilovecoco.video/*/embed"]],["codehs.com/api/sharedprogram/*/oembed/",["codehs.com/editor/share_abacus/*"]],["codepen.io/api/oembed",["codepen.io/*","codepen.io/*"]],["codepoints.net/api/v1/oembed",["codepoints.net/*","codepoints.net/*","www.codepoints.net/*","www.codepoints.net/*"]],["codesandbox.io/oembed",["codesandbox.io/s/*","codesandbox.io/embed/*"]],["www.collegehumor.com/oembed.{format}",["www.collegehumor.com/video/*"]],["commaful.com/api/oembed/",["commaful.com/play/*"]],["coub.com/api/oembed.{format}",["coub.com/view/*","coub.com/embed/*"]],["crowdranking.com/api/oembed.{format}",["crowdranking.com/*/*"]],["crumb.sh/oembed/",["crumb.sh/*"]],["gql.cueup.io/oembed",["cueup.io/user/*/sounds/*"]],["api.curated.co/oembed",["*.curated.co/*"]],["app.customerdb.com/embed",["app.customerdb.com/share/*"]],["app.dadan.io/api/video/oembed",["app.dadan.io/*","stage.dadan.io/*"]],["www.dailymotion.com/services/oembed",["www.dailymotion.com/video/*"]],["dalexni.com/oembed/",["dalexni.com/i/*"]],["api.datawrapper.de/v3/oembed/",["datawrapper.dwcdn.net/*"]],["embed.deseret.com/",["*.deseret.com/*"]],["backend.deviantart.com/oembed",["*.deviantart.com/art/*","*.deviantart.com/*#/d*","fav.me/*","sta.sh/*","*.deviantart.com/art/*","*.deviantart.com/*/art/*"]],["*.didacte.com/cards/oembed",["*.didacte.com/a/course/*"]],["www.ultimedia.com/api/search/oembed",["www.ultimedia.com/central/video/edit/id/*/topic_id/*/","www.ultimedia.com/default/index/videogeneric/id/*/showtitle/1/viewnc/1","www.ultimedia.com/default/index/videogeneric/id/*"]],["www.docdroid.net/api/oembed",["*.docdroid.net/*","*.docdroid.net/*","docdro.id/*","docdro.id/*","*.docdroid.com/*","*.docdroid.com/*"]],["dotsub.com/services/oembed",["dotsub.com/view/*"]],["api.d.tube/oembed",["d.tube/v/*"]],["www.edumedia-sciences.com/oembed.json",[]],["www.edumedia-sciences.com/oembed.xml",[]],["egliseinfo.catholique.fr/api/oembed",["egliseinfo.catholique.fr/*"]],["embedery.com/api/oembed",["embedery.com/widget/*"]],["api.embed.ly/1/oembed",[]],["music.enystre.com/oembed",["music.enystre.com/lyrics/*"]],["ethfiddle.com/services/oembed/",["ethfiddle.com/*"]],["evt.live/api/oembed",["evt.live/*","evt.live/*/*","live.eventlive.pro/*","live.eventlive.pro/*/*"]],["api.everviz.com/oembed",["app.everviz.com/embed/*","app.everviz.com/embed/*"]],["oembed.ex.co/item",["app.ex.co/stories/*","www.playbuzz.com/*"]],["eyrie.io/v1/oembed",["eyrie.io/board/*","eyrie.io/sparkfun/*"]],["graph.facebook.com/v10.0/oembed_post",["www.facebook.com/*/posts/*","www.facebook.com/*/activity/*","www.facebook.com/*/photos/*","www.facebook.com/photo.php?fbid=*","www.facebook.com/photos/*","www.facebook.com/permalink.php?story_fbid=*","www.facebook.com/media/set?set=*","www.facebook.com/questions/*","www.facebook.com/notes/*/*/*"]],["graph.facebook.com/v10.0/oembed_video",["www.facebook.com/*/videos/*","www.facebook.com/video.php?id=*","www.facebook.com/video.php?v=*"]],["graph.facebook.com/v10.0/oembed_page",["www.facebook.com/*"]],["app.getfader.com/api/oembed",["app.getfader.com/projects/*/publish"]],["faithlifetv.com/api/oembed",["faithlifetv.com/items/*","faithlifetv.com/items/resource/*/*","faithlifetv.com/media/*","faithlifetv.com/media/assets/*","faithlifetv.com/media/resource/*/*"]],["www.fireworktv.com/oembed",["*.fireworktv.com/*","*.fireworktv.com/embed/*/v/*"]],["www.fite.tv/oembed",["www.fite.tv/watch/*"]],["flat.io/services/oembed",["flat.io/score/*","*.flat.io/score/*"]],["www.flickr.com/services/oembed/",["*.flickr.com/photos/*","flic.kr/p/*","*.flickr.com/photos/*","flic.kr/p/*","*.*.flickr.com/*/*","*.*.flickr.com/*/*"]],["app.flourish.studio/api/v1/oembed",["public.flourish.studio/visualisation/*","public.flourish.studio/story/*"]],["fiso.foxsports.com.au/oembed",["fiso.foxsports.com.au/isomorphic-widget/*","fiso.foxsports.com.au/isomorphic-widget/*"]],["framebuzz.com/oembed/",["framebuzz.com/v/*","framebuzz.com/v/*"]],["api.framer.com/web/oembed",["framer.com/share/*","framer.com/embed/*"]],["api.geograph.org.uk/api/oembed",["*.geograph.org.uk/*","*.geograph.co.uk/*","*.geograph.ie/*","*.wikimedia.org/*_geograph.org.uk_*"]],["www.geograph.org.gg/api/oembed",["*.geograph.org.gg/*","*.geograph.org.je/*","channel-islands.geograph.org/*","channel-islands.geographs.org/*","*.channel.geographs.org/*"]],["geo.hlipp.de/restapi.php/api/oembed",["geo-en.hlipp.de/*","geo.hlipp.de/*","germany.geograph.org/*"]],["embed.gettyimages.com/oembed",["gty.im/*"]],["api.gfycat.com/v1/oembed",["gfycat.com/*","www.gfycat.com/*","gfycat.com/*","www.gfycat.com/*"]],["www.gifnote.com/services/oembed",["www.gifnote.com/play/*"]],["giphy.com/services/oembed",["giphy.com/gifs/*","giphy.com/clips/*","gph.is/*","media.giphy.com/media/*/giphy.gif"]],["gloria.tv/oembed/",[]],["embed.gmetri.com/oembed/",["view.gmetri.com/*","*.gmetri.com/*"]],["app.gong.io/oembed",["app.gong.io/call?id=*"]],["api.grain.com/_/api/oembed",["grain.co/highlight/*","grain.co/share/*","grain.com/share/*"]],["api.luminery.com/oembed",["gtchannel.com/watch/*"]],["api.gyazo.com/api/oembed",["gyazo.com/*"]],["api.hash.ai/oembed",["core.hash.ai/@*"]],["hearthis.at/oembed/?format=json",["hearthis.at/*/*/","hearthis.at/*/set/*/"]],["player.hihaho.com/services/oembed",["player.hihaho.com/*"]],["www.hippovideo.io/services/oembed",["*.hippovideo.io/*","*.hippovideo.io/*"]],["homey.app/api/oembed/flow",["homey.app/f/*","homey.app/*/flow/*"]],["huffduffer.com/oembed",["huffduffer.com/*/*"]],["www.hulu.com/api/oembed.{format}",["www.hulu.com/watch/*"]],["oembed.idomoo.com/oembed",["*.idomoo.com/*"]],["www.ifixit.com/Embed",["www.ifixit.com/Guide/View/*"]],["www.ifttt.com/oembed/",["ifttt.com/recipes/*"]],["www.iheart.com/oembed",["www.iheart.com/podcast/*/*"]],["oembed.incredible.dev/oembed",["incredible.dev/watch/*"]],["player.indacolive.com/services/oembed",["player.indacolive.com/player/jwp/clients/*"]],["infogram.com/oembed",["infogram.com/*"]],["infoveave.net/services/oembed/",["*.infoveave.net/E/*","*.infoveave.net/P/*"]],["www.injurymap.com/services/oembed",["www.injurymap.com/exercises/*"]],["www.inoreader.com/oembed/api/",["www.inoreader.com/oembed/"]],["api.inphood.com/oembed",["*.inphood.com/*"]],["graph.facebook.com/v10.0/instagram_oembed",["instagram.com/*/p/*,","www.instagram.com/*/p/*,","instagram.com/*/p/*,","www.instagram.com/*/p/*,","instagram.com/p/*","instagr.am/p/*","www.instagram.com/p/*","www.instagr.am/p/*","instagram.com/p/*","instagr.am/p/*","www.instagram.com/p/*","www.instagr.am/p/*","instagram.com/tv/*","instagr.am/tv/*","www.instagram.com/tv/*","www.instagr.am/tv/*","instagram.com/tv/*","instagr.am/tv/*","www.instagram.com/tv/*","www.instagr.am/tv/*","www.instagram.com/reel/*","www.instagram.com/reel/*","instagram.com/reel/*","instagram.com/reel/*","instagr.am/reel/*","instagr.am/reel/*"]],["www.insticator.com/oembed",["ppa.insticator.com/embed-unit/*"]],["issuu.com/oembed",["issuu.com/*/docs/*"]],["api.jovian.ai/oembed.json",["jovian.ml/*","jovian.ml/viewer*","*.jovian.ml/*","jovian.ai/*","jovian.ai/viewer*","*.jovian.ai/*"]],["tv.kakao.com/oembed",["tv.kakao.com/channel/*/cliplink/*","tv.kakao.com/m/channel/*/cliplink/*","tv.kakao.com/channel/v/*","tv.kakao.com/channel/*/livelink/*","tv.kakao.com/m/channel/*/livelink/*","tv.kakao.com/channel/l/*"]],["www.kickstarter.com/services/oembed",["www.kickstarter.com/projects/*"]],["www.kidoju.com/api/oembed",["www.kidoju.com/en/x/*/*","www.kidoju.com/fr/x/*/*"]],["halaman.email/service/oembed",["halaman.email/form/*","aplikasi.kirim.email/form/*"]],["embed.kit.co/oembed",["kit.co/*/*","kit.co/*/*"]],["www.kitchenbowl.com/oembed",["www.kitchenbowl.com/recipe/*"]],["api.kmdr.sh/services/oembed",["app.kmdr.sh/h/*","app.kmdr.sh/history/*"]],["jdr.knacki.info/oembed",["jdr.knacki.info/meuh/*","jdr.knacki.info/meuh/*"]],["api.spoonacular.com/knowledge/oembed",["knowledgepad.co/#/knowledge/*"]],["embed-stage.kooapp.com/services/oembed",["*.kooapp.com/koo/*","*.kooapp.com/koo/*"]],["learningapps.org/oembed.php",["learningapps.org/*"]],["umotion-test.univ-lemans.fr/oembed",["umotion-test.univ-lemans.fr/video/*"]],["pod.univ-lille.fr/oembed",["pod.univ-lille.fr/video/*"]],["livestream.com/oembed",["livestream.com/accounts/*/events/*","livestream.com/accounts/*/events/*/videos/*","livestream.com/*/events/*","livestream.com/*/events/*/videos/*","livestream.com/*/*","livestream.com/*/*/videos/*"]],["embed.lottiefiles.com/oembed",["lottiefiles.com/*","*.lottiefiles.com/*"]],["app.ludus.one/oembed",["app.ludus.one/*"]],["admin.lumiere.is/api/services/oembed",["*.lumiere.is/v/*"]],["mathembed.com/oembed",["mathembed.com/latex?inputText=*","mathembed.com/latex?inputText=*"]],["my.matterport.com/api/v1/models/oembed/",[]],["me.me/oembed",["me.me/i/*"]],["*.medialab.(co|app)/api/oembed/",["*.medialab.app/share/watch/*","*.medialab.co/share/watch/*","*.medialab.app/share/social/*","*.medialab.co/share/social/*","*.medialab.app/share/embed/*","*.medialab.co/share/embed/*"]],["medienarchiv.zhdk.ch/oembed.{format}",["medienarchiv.zhdk.ch/entries/*"]],["mermaid.ink/services/oembed",["mermaid.ink/img/*","mermaid.ink/svg/*"]],["web.microsoftstream.com/oembed",["*.microsoftstream.com/video/*","*.microsoftstream.com/channel/*"]],["oembed.minervaknows.com",["www.minervaknows.com/featured-recipes/*","www.minervaknows.com/themes/*","www.minervaknows.com/themes/*/recipes/*","app.minervaknows.com/recipes/*","app.minervaknows.com/recipes/*/follow"]],["www.mixcloud.com/oembed/",["www.mixcloud.com/*/*/","www.mixcloud.com/*/*/"]],["api.mobypicture.com/oEmbed",["www.mobypicture.com/user/*/view/*","moby.to/*"]],["musicboxmaniacs.com/embed/",["musicboxmaniacs.com/explore/melody/*"]],["mybeweeg.com/services/oembed",["mybeweeg.com/w/*"]],["namchey.com/api/oembed",["namchey.com/embeds/*"]],["www.nanoo.tv/services/oembed",["*.nanoo.tv/link/*","nanoo.tv/link/*","*.nanoo.pro/link/*","nanoo.pro/link/*","*.nanoo.tv/link/*","nanoo.tv/link/*","*.nanoo.pro/link/*","nanoo.pro/link/*","media.zhdk.ch/signatur/*","new.media.zhdk.ch/signatur/*","media.zhdk.ch/signatur/*","new.media.zhdk.ch/signatur/*"]],["api.nb.no/catalog/v1/oembed",["www.nb.no/items/*"]],["naturalatlas.com/oembed.{format}",["naturalatlas.com/*","naturalatlas.com/*/*","naturalatlas.com/*/*/*","naturalatlas.com/*/*/*/*"]],["www.nfb.ca/remote/services/oembed/",["*.nfb.ca/film/*"]],["www.nftndx.io/oembed",[]],["oembed.nopaste.ml",["nopaste.ml/*"]],["api.observablehq.com/oembed",["observablehq.com/@*/*","observablehq.com/d/*","observablehq.com/embed/*"]],["www.odds.com.au/api/oembed/",["www.odds.com.au/*","odds.com.au/*"]],["song.link/oembed",["song.link/*","album.link/*","artist.link/*","playlist.link/*","pods.link/*","mylink.page/*","odesli.co/*"]],["odysee.com/$/oembed",["odysee.com/*/*","odysee.com/*"]],["official.fm/services/oembed.{format}",["official.fm/tracks/*","official.fm/playlists/*"]],["omniscope.me/_global_/oembed/json",["omniscope.me/*"]],["omny.fm/oembed",["omny.fm/shows/*"]],["www.ora.tv/oembed/*?format={format}",[]],["orbitvu.co/service/oembed",["orbitvu.co/001/*/ov3601/view","orbitvu.co/001/*/ov3601/*/view","orbitvu.co/001/*/ov3602/*/view","orbitvu.co/001/*/2/orbittour/*/view","orbitvu.co/001/*/1/2/orbittour/*/view","orbitvu.co/001/*/ov3601/view","orbitvu.co/001/*/ov3601/*/view","orbitvu.co/001/*/ov3602/*/view","orbitvu.co/001/*/2/orbittour/*/view","orbitvu.co/001/*/1/2/orbittour/*/view"]],["outplayed.tv/oembed",["outplayed.tv/media/*"]],["overflow.io/services/oembed",["overflow.io/s/*","overflow.io/embed/*"]],["core.oz.com/oembed",["www.oz.com/*/video/*"]],["padlet.com/oembed/",["padlet.com/*"]],["api-v2.pandavideo.com.br/oembed",["*.tv.pandavideo.com.br/embed/?v=*","*.tv.pandavideo.com.br/*/playlist.m3u8","dashboard.pandavideo.com.br/#/videos/*"]],["www.pastery.net/oembed",["pastery.net/*","pastery.net/*","www.pastery.net/*","www.pastery.net/*"]],["beta.pingvp.com.kpnis.nl/p/oembed.php",[]],["tools.pinpoll.com/oembed",["tools.pinpoll.com/embed/*"]],["www.pinterest.com/oembed.json",["www.pinterest.com/*"]],["*.pitchhub.com.com/en/public/oembed",["*.pitchhub.com/en/public/player/*"]],["store.pixdor.com/oembed",["store.pixdor.com/place-marker-widget/*/show","store.pixdor.com/map/*/show"]],["api.podbean.com/v1/oembed",["*.podbean.com/e/*","*.podbean.com/e/*"]],["polldaddy.com/oembed/",["*.polldaddy.com/s/*","*.polldaddy.com/poll/*","*.polldaddy.com/ratings/*"]],["api.portfolium.com/oembed",["portfolium.com/entry/*"]],["gateway.cobalt.run/present/decks/oembed",["present.do/decks/*"]],["prezi.com/v/oembed",["prezi.com/v/*","*.prezi.com/v/*"]],["www.quiz.biz/api/oembed",["www.quiz.biz/quizz-*.html"]],["www.quizz.biz/api/oembed",["www.quizz.biz/quizz-*.html"]],["oembed.radiopublic.com/oembed",["play.radiopublic.com/*","radiopublic.com/*","www.radiopublic.com/*","play.radiopublic.com/*","radiopublic.com/*","www.radiopublic.com/*","*.radiopublic.com/*"]],["pub.raindrop.io/api/oembed",["raindrop.io/*","raindrop.io/*/*","raindrop.io/*/*/*","raindrop.io/*/*/*/*"]],["animatron.com/oembed",["www.rcvis.com/v/*","www.rcvis.com/visualize=*","www.rcvis.com/ve/*","www.rcvis.com/visualizeEmbedded=*"]],["www.reddit.com/oembed",["reddit.com/r/*/comments/*/*","www.reddit.com/r/*/comments/*/*"]],["publisher.releasewire.com/oembed/",["rwire.com/*"]],["replit.com/data/oembed",["repl.it/@*/*","replit.com/@*/*"]],["www.reverbnation.com/oembed",["www.reverbnation.com/*","www.reverbnation.com/*/songs/*"]],["roomshare.jp/en/oembed.{format}",["roomshare.jp/post/*","roomshare.jp/en/post/*"]],["roosterteeth.com/oembed",["roosterteeth.com/*"]],["rumble.com/api/Media/oembed.{format}",[]],["embed.runkit.com/oembed",["embed.runkit.com/*,","embed.runkit.com/*,"]],["octopus.saooti.com/oembed",["octopus.saooti.com/main/pub/podcast/*"]],["videos.sapo.pt/oembed",["videos.sapo.pt/*"]],["api.screen9.com/oembed",["console.screen9.com/*","*.screen9.tv/*"]],["api.screencast.com/external/oembed",["www.screencast.com/*"]],["www.screenr.com/api/oembed.{format}",["www.screenr.com/*/"]],["scribblemaps.com/api/services/oembed.{format}",["www.scribblemaps.com/maps/view/*","www.scribblemaps.com/maps/view/*","scribblemaps.com/maps/view/*","scribblemaps.com/maps/view/*"]],["www.scribd.com/services/oembed/",["www.scribd.com/doc/*"]],["embed.sendtonews.com/services/oembed",["embed.sendtonews.com/oembed/*"]],["www.shortnote.jp/oembed/",["www.shortnote.jp/view/notes/*"]],["shoudio.com/api/oembed",["shoudio.com/*","shoud.io/*"]],["api.getshow.io/oembed.{format}",["app.getshow.io/iframe/*","*.getshow.io/share/*"]],["showtheway.io/oembed",["showtheway.io/to/*"]],["simplecast.com/oembed",["simplecast.com/s/*"]],["onsizzle.com/oembed",["onsizzle.com/i/*"]],["sketchfab.com/oembed",["sketchfab.com/*models/*","sketchfab.com/*models/*","sketchfab.com/*/folders/*"]],["www.slideshare.net/api/oembed/2",["www.slideshare.net/*/*","www.slideshare.net/*/*","fr.slideshare.net/*/*","fr.slideshare.net/*/*","de.slideshare.net/*/*","de.slideshare.net/*/*","es.slideshare.net/*/*","es.slideshare.net/*/*","pt.slideshare.net/*/*","pt.slideshare.net/*/*"]],["smashnotes.com/services/oembed",["smashnotes.com/p/*","smashnotes.com/p/*/e/*-smashnotes.com/p/*/e/*/s/*"]],["www.smrthi.com/api/oembed",["www.smrthi.com/book/*"]],["api.smugmug.com/services/oembed/",["*.smugmug.com/*","*.smugmug.com/*"]],["www.socialexplorer.com/services/oembed/",["www.socialexplorer.com/*/explore","www.socialexplorer.com/*/view","www.socialexplorer.com/*/edit","www.socialexplorer.com/*/embed"]],["soundcloud.com/oembed",["soundcloud.com/*","soundcloud.com/*","soundcloud.app.goog.gl/*"]],["speakerdeck.com/oembed.json",["speakerdeck.com/*/*","speakerdeck.com/*/*"]],["open.spotify.com/oembed",["open.spotify.com/*","spotify:*"]],["api.spreaker.com/oembed",["*.spreaker.com/*","*.spreaker.com/*"]],["sproutvideo.com/oembed.{format}",["sproutvideo.com/videos/*","*.vids.io/videos/*"]],["purl.stanford.edu/embed.{format}",["purl.stanford.edu/*"]],["api.streamable.com/oembed.json",["streamable.com/*","streamable.com/*"]],["streamio.com/api/v1/oembed",["s3m.io/*","23m.io/*"]],["subscribi.io/api/oembed",["subscribi.io/api/oembed*"]],["www.sudomemo.net/oembed",["www.sudomemo.net/watch/*","www.sudomemo.net/watch/*","flipnot.es/*","flipnot.es/*"]],["www.sutori.com/api/oembed",["www.sutori.com/story/*"]],["sway.com/api/v1.0/oembed",["sway.com/*","www.sway.com/*"]],["sway.office.com/api/v1.0/oembed",["sway.office.com/*"]],["69jr5v75rc.execute-api.eu-west-1.amazonaws.com/prod/v2/oembed",["share.synthesia.io/*"]],["www.ted.com/services/v1/oembed.{format}",["ted.com/talks/*","ted.com/talks/*","www.ted.com/talks/*"]],["www.nytimes.com/svc/oembed/json/",["www.nytimes.com/svc/oembed","nytimes.com/*","*.nytimes.com/*"]],["theysaidso.com/extensions/oembed/",["theysaidso.com/image/*"]],["www.tickcounter.com/oembed",["www.tickcounter.com/countdown/*","www.tickcounter.com/countup/*","www.tickcounter.com/ticker/*","www.tickcounter.com/worldclock/*","www.tickcounter.com/countdown/*","www.tickcounter.com/countup/*","www.tickcounter.com/ticker/*","www.tickcounter.com/worldclock/*"]],["www.tiktok.com/oembed",["www.tiktok.com/*/video/*"]],["widget.toornament.com/oembed",["www.toornament.com/tournaments/*/information","www.toornament.com/tournaments/*/registration/","www.toornament.com/tournaments/*/matches/schedule","www.toornament.com/tournaments/*/stages/*/"]],["www.topy.se/oembed/",["www.topy.se/image/*"]],["app-test.totango.com/oembed",["app-test.totango.com/*"]],["trinitymedia.ai/player/trinity-oembed",["trinitymedia.ai/player/*","trinitymedia.ai/player/*"]],["www.tumblr.com/oembed/1.0",["*.tumblr.com/post/*"]],["www.tuxx.be/services/oembed",["www.tuxx.be/*"]],["play.tvcf.co.kr/rest/oembed",["play.tvcf.co.kr/*","*.tvcf.co.kr/*"]],["publish.twitter.com/oembed",["twitter.com/*","twitter.com/*/status/*","*.twitter.com/*/status/*"]],["play.typecast.ai/oembed",["play.typecast.ai/s/*","play.typecast.ai/e/*","play.typecast.ai/*"]],["typlog.com/oembed",[]],["uapod.univ-antilles.fr/oembed",["uapod.univ-antilles.fr/video/*"]],["map.cam.ac.uk/oembed/",["map.cam.ac.uk/*"]],["mediatheque.univ-paris1.fr/oembed",["mediatheque.univ-paris1.fr/video/*"]],["pod.u-pec.fr/oembed",["pod.u-pec.fr/video/*"]],["www.ustream.tv/oembed",["*.ustream.tv/*","*.ustream.com/*"]],["app.ustudio.com/api/v2/oembed",["*.ustudio.com/embed/*","*.ustudio.com/embed/*/*"]],["api.veer.tv/oembed",["veer.tv/videos/*"]],["api.veervr.tv/oembed",["veervr.tv/videos/*"]],["verse.com/services/oembed/",[]],["www.vevo.com/oembed",["www.vevo.com/*","www.vevo.com/*"]],["videfit.com/oembed",["videfit.com/videos/*"]],["vidmount.com/oembed",["vidmount.com/*"]],["api.vidyard.com/dashboard/v1.1/oembed",["*.vidyard.com/*","*.vidyard.com/*","*.hubs.vidyard.com/*","*.hubs.vidyard.com/*"]],["vimeo.com/api/oembed.{format}",["vimeo.com/*","vimeo.com/album/*/video/*","vimeo.com/channels/*/*","vimeo.com/groups/*/videos/*","vimeo.com/ondemand/*/*","player.vimeo.com/video/*"]],["www.viously.com/oembed",["www.viously.com/*/*"]],["vizydrop.com/oembed",["vizydrop.com/shared/*"]],["vlipsy.com/oembed",["vlipsy.com/*"]],["www.vlive.tv/oembed",["www.vlive.tv/video/*"]],["embed.vouchfor.com/v1/oembed",["*.vouchfor.com/*"]],["data.voxsnap.com/oembed",["article.voxsnap.com/*/*"]],["waltrack.net/oembed",["waltrack.net/product/*"]],["embed.wave.video/oembed",["watch.wave.video/*","embed.wave.video/*"]],["play.wecandeo.com/oembed/",["play.wecandeo.com/video/v/*"]],["*.wiredrive.com/present-oembed/",["*.wiredrive.com/*"]],["fast.wistia.com/oembed.{format}",["fast.wistia.com/embed/iframe/*","fast.wistia.com/embed/playlists/*","*.wistia.com/medias/*"]],["app.wizer.me/api/oembed.{format}",["*.wizer.me/learn/*","*.wizer.me/preview/*"]],["wokwi.com/api/oembed",["wokwi.com/share/*"]],["www.wolframcloud.com/oembed",["*.wolframcloud.com/*"]],["public-api.wordpress.com/oembed/",["wordpress.com/*","wordpress.com/*","*.wordpress.com/*","*.wordpress.com/*","*.*.wordpress.com/*","*.*.wordpress.com/*","wp.me/*","wp.me/*"]],["www.youtube.com/oembed",["*.youtube.com/watch*","*.youtube.com/v/*","youtu.be/*","*.youtube.com/playlist?list=*","youtube.com/playlist?list=*","*.youtube.com/shorts*"]],["app.zeplin.io/embed",["app.zeplin.io/project/*/screen/*","app.zeplin.io/project/*/screen/*/version/*","app.zeplin.io/project/*/styleguide/components?coid=*","app.zeplin.io/styleguide/*/components?coid=*"]],["app.zingsoft.com/oembed",["app.zingsoft.com/embed/*","app.zingsoft.com/view/*"]],["api.znipe.tv/v3/oembed/",["*.znipe.tv/*"]],["srv2.zoomable.ca/oembed",["srv2.zoomable.ca/viewer.php*"]]]')})),r("2DHz2")}();