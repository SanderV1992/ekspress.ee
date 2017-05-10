if(typeof Object.create!=="function"){Object.create=function(a){function b(){}b.prototype=a;return new b}}var ua={toString:function(){return navigator.userAgent},test:function(a){return this.toString().toLowerCase().indexOf(a.toLowerCase())>-1}};ua.version=(ua.toString().toLowerCase().match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1];ua.webkit=ua.test("webkit");ua.gecko=ua.test("gecko")&&!ua.webkit;ua.opera=ua.test("opera");ua.ie=ua.test("msie")&&!ua.opera;ua.ie6=ua.ie&&document.compatMode&&typeof document.documentElement.style.maxHeight==="undefined";ua.ie7=ua.ie&&document.documentElement&&typeof document.documentElement.style.maxHeight!=="undefined"&&typeof XDomainRequest==="undefined";ua.ie8=ua.ie&&typeof XDomainRequest!=="undefined";var domReady=function(){var a=[];var b=function(){if(!arguments.callee.done){arguments.callee.done=true;for(var b=0;b<a.length;b++){a[b]()}}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",b,false)}if(ua.ie){(function(){try{document.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,50);return}b()})();document.onreadystatechange=function(){if(document.readyState==="complete"){document.onreadystatechange=null;b()}}}if(ua.webkit&&document.readyState){(function(){if(document.readyState!=="loading"){b()}else{setTimeout(arguments.callee,10)}})()}window.onload=b;return function(b){if(typeof b==="function"){a[a.length]=b}return b}}();var cssHelper=function(){var a={BLOCKS:/[^\s{][^{]*\{(?:[^{}]*\{[^{}]*\}[^{}]*|[^{}]*)*\}/g,BLOCKS_INSIDE:/[^\s{][^{]*\{[^{}]*\}/g,DECLARATIONS:/[a-zA-Z\-]+[^;]*:[^;]+;/g,RELATIVE_URLS:/url\(['"]?([^\/\)'"][^:\)'"]+)['"]?\)/g,REDUNDANT_COMPONENTS:/(?:\/\*([^*\\\\]|\*(?!\/))+\*\/|@import[^;]+;)/g,REDUNDANT_WHITESPACE:/\s*(,|:|;|\{|\})\s*/g,MORE_WHITESPACE:/\s{2,}/g,FINAL_SEMICOLONS:/;\}/g,NOT_WHITESPACE:/\S+/g};var b,c=false;var d=[];var e=function(a){if(typeof a==="function"){d[d.length]=a}};var f=function(){for(var a=0;a<d.length;a++){d[a](b)}};var g={};var h=function(a,b){if(g[a]){var c=g[a].listeners;if(c){for(var d=0;d<c.length;d++){c[d](b)}}}};var i=function(a,b,c){if(ua.ie&&!window.XMLHttpRequest){window.XMLHttpRequest=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}if(!XMLHttpRequest){return""}var d=new XMLHttpRequest;try{d.open("get",a,true);d.setRequestHeader("X_REQUESTED_WITH","XMLHttpRequest")}catch(e){c();return}var f=false;setTimeout(function(){f=true},5e3);document.documentElement.style.cursor="progress";d.onreadystatechange=function(){if(d.readyState===4&&!f){if(!d.status&&location.protocol==="file:"||d.status>=200&&d.status<300||d.status===304||navigator.userAgent.indexOf("Safari")>-1&&typeof d.status==="undefined"){b(d.responseText)}else{c()}document.documentElement.style.cursor="";d=null}};d.send("")};var j=function(b){b=b.replace(a.REDUNDANT_COMPONENTS,"");b=b.replace(a.REDUNDANT_WHITESPACE,"$1");b=b.replace(a.MORE_WHITESPACE," ");b=b.replace(a.FINAL_SEMICOLONS,"}");return b};var k={mediaQueryList:function(b){var c={};var d=b.indexOf("{");var e=b.substring(0,d);b=b.substring(d+1,b.length-1);var f=[],g=[];var h=e.toLowerCase().substring(7).split(",");for(var i=0;i<h.length;i++){f[f.length]=k.mediaQuery(h[i],c)}var j=b.match(a.BLOCKS_INSIDE);if(j!==null){for(i=0;i<j.length;i++){g[g.length]=k.rule(j[i],c)}}c.getMediaQueries=function(){return f};c.getRules=function(){return g};c.getListText=function(){return e};c.getCssText=function(){return b};return c},mediaQuery:function(b,c){b=b||"";var d=false,e;var f=[];var g=true;var h=b.match(a.NOT_WHITESPACE);for(var i=0;i<h.length;i++){var j=h[i];if(!e&&(j==="not"||j==="only")){if(j==="not"){d=true}}else{if(!e){e=j}else{if(j.charAt(0)==="("){var k=j.substring(1,j.length-1).split(":");f[f.length]={mediaFeature:k[0],value:k[1]||null}}}}}return{getList:function(){return c||null},getValid:function(){return g},getNot:function(){return d},getMediaType:function(){return e},getExpressions:function(){return f}}},rule:function(a,b){var c={};var d=a.indexOf("{");var e=a.substring(0,d);var f=e.split(",");var g=[];var h=a.substring(d+1,a.length-1).split(";");for(var i=0;i<h.length;i++){g[g.length]=k.declaration(h[i],c)}c.getMediaQueryList=function(){return b||null};c.getSelectors=function(){return f};c.getSelectorText=function(){return e};c.getDeclarations=function(){return g};c.getPropertyValue=function(a){for(var b=0;b<g.length;b++){if(g[b].getProperty()===a){return g[b].getValue()}}return null};return c},declaration:function(a,b){var c=a.indexOf(":");var d=a.substring(0,c);var e=a.substring(c+1);return{getRule:function(){return b||null},getProperty:function(){return d},getValue:function(){return e}}}};var l=function(c){if(typeof c.cssHelperText!=="string"){return}var d={mediaQueryLists:[],rules:[],selectors:{},declarations:[],properties:{}};var e=d.mediaQueryLists;var f=d.rules;var g=c.cssHelperText.match(a.BLOCKS);if(g!==null){for(var h=0;h<g.length;h++){if(g[h].substring(0,7)==="@media "){e[e.length]=k.mediaQueryList(g[h]);f=d.rules=f.concat(e[e.length-1].getRules())}else{f[f.length]=k.rule(g[h])}}}var i=d.selectors;var j=function(a){var b=a.getSelectors();for(var c=0;c<b.length;c++){var d=b[c];if(!i[d]){i[d]=[]}i[d][i[d].length]=a}};for(h=0;h<f.length;h++){j(f[h])}var l=d.declarations;for(h=0;h<f.length;h++){l=d.declarations=l.concat(f[h].getDeclarations())}var m=d.properties;for(h=0;h<l.length;h++){var n=l[h].getProperty();if(!m[n]){m[n]=[]}m[n][m[n].length]=l[h]}c.cssHelperParsed=d;b[b.length]=c;return d};var m=function(a,b){a.cssHelperText=j(b||a.innerHTML);return l(a)};var n=function(){c=true;b=[];var d=[];var e=function(){for(var a=0;a<d.length;a++){l(d[a])}var b=document.getElementsByTagName("style");for(a=0;a<b.length;a++){m(b[a])}c=false;f()};var g=document.getElementsByTagName("link");for(var h=0;h<g.length;h++){var k=g[h];if(k.getAttribute("rel").indexOf("style")>-1&&k.href&&k.href.length!==0&&!k.disabled){d[d.length]=k}}if(d.length>0){var n=0;var o=function(){n++;if(n===d.length){e()}};var p=function(b){var c=b.href;i(c,function(d){d=j(d).replace(a.RELATIVE_URLS,"url("+c.substring(0,c.lastIndexOf("/"))+"/$1)");b.cssHelperText=d;o()},o)};for(h=0;h<d.length;h++){p(d[h])}}else{e()}};var o={mediaQueryLists:"array",rules:"array",selectors:"object",declarations:"array",properties:"object"};var p={mediaQueryLists:null,rules:null,selectors:null,declarations:null,properties:null};var q=function(a,b){if(p[a]!==null){if(o[a]==="array"){return p[a]=p[a].concat(b)}else{var c=p[a];for(var d in b){if(b.hasOwnProperty(d)){if(!c[d]){c[d]=b[d]}else{c[d]=c[d].concat(b[d])}}}return c}}};var r=function(a){p[a]=o[a]==="array"?[]:{};for(var c=0;c<b.length;c++){q(a,b[c].cssHelperParsed[a])}return p[a]};domReady(function(){var a=document.body.getElementsByTagName("*");for(var b=0;b<a.length;b++){a[b].checkedByCssHelper=true}if(document.implementation.hasFeature("MutationEvents","2.0")||window.MutationEvent){document.body.addEventListener("DOMNodeInserted",function(a){var b=a.target;if(b.nodeType===1){h("DOMElementInserted",b);b.checkedByCssHelper=true}},false)}else{setInterval(function(){var a=document.body.getElementsByTagName("*");for(var b=0;b<a.length;b++){if(!a[b].checkedByCssHelper){h("DOMElementInserted",a[b]);a[b].checkedByCssHelper=true}}},1e3)}});var s=function(a){if(typeof window.innerWidth!="undefined"){return window["inner"+a]}else{if(typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0){return document.documentElement["client"+a]}}};return{addStyle:function(a,b){var c=document.createElement("style");c.setAttribute("type","text/css");document.getElementsByTagName("head")[0].appendChild(c);if(c.styleSheet){c.styleSheet.cssText=a}else{c.appendChild(document.createTextNode(a))}c.addedWithCssHelper=true;if(typeof b==="undefined"||b===true){cssHelper.parsed(function(b){var d=m(c,a);for(var e in d){if(d.hasOwnProperty(e)){q(e,d[e])}}h("newStyleParsed",c)})}else{c.parsingDisallowed=true}return c},removeStyle:function(a){return a.parentNode.removeChild(a)},parsed:function(a){if(c){e(a)}else{if(typeof b!=="undefined"){if(typeof a==="function"){a(b)}}else{e(a);n()}}},mediaQueryLists:function(a){cssHelper.parsed(function(b){a(p.mediaQueryLists||r("mediaQueryLists"))})},rules:function(a){cssHelper.parsed(function(b){a(p.rules||r("rules"))})},selectors:function(a){cssHelper.parsed(function(b){a(p.selectors||r("selectors"))})},declarations:function(a){cssHelper.parsed(function(b){a(p.declarations||r("declarations"))})},properties:function(a){cssHelper.parsed(function(b){a(p.properties||r("properties"))})},broadcast:h,addListener:function(a,b){if(typeof b==="function"){if(!g[a]){g[a]={listeners:[]}}g[a].listeners[g[a].listeners.length]=b}},removeListener:function(a,b){if(typeof b==="function"&&g[a]){var c=g[a].listeners;for(var d=0;d<c.length;d++){if(c[d]===b){c.splice(d,1);d-=1}}}},getViewportWidth:function(){return s("Width")},getViewportHeight:function(){return s("Height")}}}();domReady(function(){var b;var c={LENGTH_UNIT:/[0-9]+(em|ex|px|in|cm|mm|pt|pc)$/,RESOLUTION_UNIT:/[0-9]+(dpi|dpcm)$/,ASPECT_RATIO:/^[0-9]+\/[0-9]+$/,ABSOLUTE_VALUE:/^[0-9]*(\.[0-9]+)*$/};var d=[];var e=function(){var a="css3-mediaqueries-test";var b=document.createElement("div");b.id=a;var c=cssHelper.addStyle("@media all and (width) { #"+a+" { width: 1px !important; } }",false);document.body.appendChild(b);var d=b.offsetWidth===1;c.parentNode.removeChild(c);b.parentNode.removeChild(b);e=function(){return d};return d};var f=function(){b=document.createElement("div");b.style.cssText="position:absolute;top:-9999em;left:-9999em;"+"margin:0;border:none;padding:0;width:1em;font-size:1em;";document.body.appendChild(b);if(b.offsetWidth!==16){b.style.fontSize=16/b.offsetWidth+"em"}b.style.width=""};var g=function(a){b.style.width=a;var c=b.offsetWidth;b.style.width="";return c};var h=function(a,b){var d=a.length;var e=a.substring(0,4)==="min-";var f=!e&&a.substring(0,4)==="max-";if(b!==null){var h;var i;if(c.LENGTH_UNIT.exec(b)){h="length";i=g(b)}else{if(c.RESOLUTION_UNIT.exec(b)){h="resolution";i=parseInt(b,10);var j=b.substring((i+"").length)}else{if(c.ASPECT_RATIO.exec(b)){h="aspect-ratio";i=b.split("/")}else{if(c.ABSOLUTE_VALUE){h="absolute";i=b}else{h="unknown"}}}}}var k,l;if("device-width"===a.substring(d-12,d)){k=screen.width;if(b!==null){if(h==="length"){return e&&k>=i||f&&k<i||!e&&!f&&k===i}else{return false}}else{return k>0}}else{if("device-height"===a.substring(d-13,d)){l=screen.height;if(b!==null){if(h==="length"){return e&&l>=i||f&&l<i||!e&&!f&&l===i}else{return false}}else{return l>0}}else{if("width"===a.substring(d-5,d)){k=document.documentElement.clientWidth||document.body.clientWidth;if(b!==null){if(h==="length"){return e&&k>=i||f&&k<i||!e&&!f&&k===i}else{return false}}else{return k>0}}else{if("height"===a.substring(d-6,d)){l=document.documentElement.clientHeight||document.body.clientHeight;if(b!==null){if(h==="length"){return e&&l>=i||f&&l<i||!e&&!f&&l===i}else{return false}}else{return l>0}}else{if("device-aspect-ratio"===a.substring(d-19,d)){return h==="aspect-ratio"&&screen.width*i[1]===screen.height*i[0]}else{if("color-index"===a.substring(d-11,d)){var m=Math.pow(2,screen.colorDepth);if(b!==null){if(h==="absolute"){return e&&m>=i||f&&m<i||!e&&!f&&m===i}else{return false}}else{return m>0}}else{if("color"===a.substring(d-5,d)){var n=screen.colorDepth;if(b!==null){if(h==="absolute"){return e&&n>=i||f&&n<i||!e&&!f&&n===i}else{return false}}else{return n>0}}else{if("resolution"===a.substring(d-10,d)){var o;if(j==="dpcm"){o=g("1cm")}else{o=g("1in")}if(b!==null){if(h==="resolution"){return e&&o>=i||f&&o<i||!e&&!f&&o===i}else{return false}}else{return o>0}}else{return false}}}}}}}}};var i=function(a){var b=a.getValid();var c=a.getExpressions();var d=c.length;if(d>0){for(var e=0;e<d&&b;e++){b=h(c[e].mediaFeature,c[e].value)}var f=a.getNot();return b&&!f||f&&!b}};var j=function(a){var b=a.getMediaQueries();var c={};for(var e=0;e<b.length;e++){if(i(b[e])){c[b[e].getMediaType()]=true}}var f=[],g=0;for(var h in c){if(c.hasOwnProperty(h)){if(g>0){f[g++]=","}f[g++]=h}}if(f.length>0){d[d.length]=cssHelper.addStyle("@media "+f.join("")+"{"+a.getCssText()+"}",false)}};var k=function(a){for(var b=0;b<a.length;b++){j(a[b])}if(ua.ie){document.documentElement.style.display="block";setTimeout(function(){document.documentElement.style.display=""},0);setTimeout(function(){cssHelper.broadcast("cssMediaQueriesTested")},100)}else{cssHelper.broadcast("cssMediaQueriesTested")}};var l=function(){for(var a=0;a<d.length;a++){cssHelper.removeStyle(d[a])}d=[];cssHelper.mediaQueryLists(k)};var m=0;var n=function(){var a=cssHelper.getViewportWidth();var b=cssHelper.getViewportHeight();if(ua.ie){var c=document.createElement("div");c.style.position="absolute";c.style.top="-9999em";c.style.overflow="scroll";document.body.appendChild(c);m=c.offsetWidth-c.clientWidth;document.body.removeChild(c)}var d;var f=function(){var c=cssHelper.getViewportWidth();var f=cssHelper.getViewportHeight();if(Math.abs(c-a)>m||Math.abs(f-b)>m){a=c;b=f;clearTimeout(d);d=setTimeout(function(){if(!e()){l()}else{cssHelper.broadcast("cssMediaQueriesTested")}},500)}};window.onresize=function(){var a=window.onresize||function(){};return function(){a();f()}}()};var o=document.documentElement;o.style.marginLeft="-32767px";setTimeout(function(){o.style.marginTop=""},2e4);return function(){if(!e()){cssHelper.addListener("newStyleParsed",function(a){k(a.cssHelperParsed.mediaQueryLists)});cssHelper.addListener("cssMediaQueriesTested",function(){if(ua.ie){o.style.width="1px"}setTimeout(function(){o.style.width="";o.style.marginLeft=""},0);cssHelper.removeListener("cssMediaQueriesTested",arguments.callee)});f();l()}else{o.style.marginLeft=""}n()}}());try{document.execCommand("BackgroundImageCache",false,true)}catch(e){}