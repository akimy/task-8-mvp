!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!w[e]||!m[e])return;for(var n in m[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--y&&0===g&&O()}(e,n),t&&t(e,n)};var n,r=!0,i="57c446f7730cfa7ff81d",o=1e4,a={},c=[],u=[];function l(e){var t=D[e];if(!t)return P;var r=function(r){return t.hot.active?(D[r]?-1===D[r].parents.indexOf(e)&&D[r].parents.push(e):(c=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),P(r)},i=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var o in P)Object.prototype.hasOwnProperty.call(P,o)&&"e"!==o&&Object.defineProperty(r,o,i(o));return r.e=function(e){return"ready"===d&&f("prepare"),g++,P.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===d&&(b[e]||k(e),0===g&&0===y&&O())}},r}var s=[],d="idle";function f(e){d=e;for(var t=0;t<s.length;t++)s[t].call(null,e)}var p,h,v,y=0,g=0,b={},m={},w={};function _(e){return+e+""===e?+e:e}function E(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return r=e,f("check"),(t=o,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=P.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return f("idle"),null;m={},b={},w=e.c,v=e.h,f("prepare");var t=new Promise(function(e,t){p={resolve:e,reject:t}});h={};return k(0),"prepare"===d&&0===g&&0===y&&O(),t});var t}function k(e){w[e]?(m[e]=!0,y++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=P.p+""+e+"."+i+".hot-update.js",t.appendChild(n)}(e)):b[e]=!0}function O(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then(function(){return j(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(_(n));e.resolve(t)}}function j(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var n,r,o,u,l;function s(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var i=r.pop(),o=i.id,a=i.chain;if((u=D[o])&&!u.hot._selfAccepted){if(u.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:o};if(u.hot._main)return{type:"unaccepted",chain:a,moduleId:o};for(var c=0;c<u.parents.length;c++){var l=u.parents[c],s=D[l];if(s){if(s.hot._declinedDependencies[o])return{type:"declined",chain:a.concat([l]),moduleId:o,parentId:l};-1===t.indexOf(l)&&(s.hot._acceptedDependencies[o]?(n[l]||(n[l]=[]),p(n[l],[o])):(delete n[l],t.push(l),r.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var y={},g=[],b={},m=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var k;l=_(E);var O=!1,j=!1,H=!1,M="";switch((k=h[E]?s(l):{type:"disposed",moduleId:E}).chain&&(M="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+k.moduleId+M));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+M));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(O=new Error("Aborted because "+l+" is not accepted"+M));break;case"accepted":t.onAccepted&&t.onAccepted(k),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),H=!0;break;default:throw new Error("Unexception type "+k.type)}if(O)return f("abort"),Promise.reject(O);if(j)for(l in b[l]=h[l],p(g,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,l)&&(y[l]||(y[l]=[]),p(y[l],k.outdatedDependencies[l]));H&&(p(g,[k.moduleId]),b[l]=m)}var C,x=[];for(r=0;r<g.length;r++)l=g[r],D[l]&&D[l].hot._selfAccepted&&x.push({module:l,errorHandler:D[l].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var S,L,I=g.slice();I.length>0;)if(l=I.pop(),u=D[l]){var q={},A=u.hot._disposeHandlers;for(o=0;o<A.length;o++)(n=A[o])(q);for(a[l]=q,u.hot.active=!1,delete D[l],delete y[l],o=0;o<u.children.length;o++){var T=D[u.children[o]];T&&((C=T.parents.indexOf(l))>=0&&T.parents.splice(C,1))}}for(l in y)if(Object.prototype.hasOwnProperty.call(y,l)&&(u=D[l]))for(L=y[l],o=0;o<L.length;o++)S=L[o],(C=u.children.indexOf(S))>=0&&u.children.splice(C,1);for(l in f("apply"),i=v,b)Object.prototype.hasOwnProperty.call(b,l)&&(e[l]=b[l]);var U=null;for(l in y)if(Object.prototype.hasOwnProperty.call(y,l)&&(u=D[l])){L=y[l];var B=[];for(r=0;r<L.length;r++)if(S=L[r],n=u.hot._acceptedDependencies[S]){if(-1!==B.indexOf(n))continue;B.push(n)}for(r=0;r<B.length;r++){n=B[r];try{n(L)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:L[r],error:e}),t.ignoreErrored||U||(U=e)}}}for(r=0;r<x.length;r++){var N=x[r];l=N.module,c=[l];try{P(l)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||U||(U=n),U||(U=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||U||(U=e)}}return U?(f("fail"),Promise.reject(U)):(f("idle"),new Promise(function(e){e(g)}))}var D={};function P(t){if(D[t])return D[t].exports;var r=D[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:E,apply:j,status:function(e){if(!e)return d;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var t=s.indexOf(e);t>=0&&s.splice(t,1)},data:a[e]};return n=void 0,t}(t),parents:(u=c,c=[],u),children:[]};return e[t].call(r.exports,r,r.exports,l(t)),r.l=!0,r.exports}P.m=e,P.c=D,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},P.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="",P.h=function(){return i},l(7)(P.s=7)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"write",value:function(e){console.log(e)}}]),e}());t.default=i},function(e,t,n){"use strict";var r=a(n(6)),i=a(n(3)),o=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}var c=new i.default(o.default),u=new r.default(c,o.default);document.querySelector(".view").insertBefore(u.getView().html,document.querySelector(".view__log"))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=new(function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.clearButton=n,this.clearButton.addEventListener("click",function(){r.clear()})}return r(e,[{key:"getDateString",value:function(){var e=new Date;return e.getHours()+":"+(e.getMinutes()<10?"0":"")+e.getMinutes()+":"+(e.getSeconds()<10?"0":"")+e.getSeconds()}},{key:"scroll",value:function(){this.container.scrollTop=this.container.scrollHeight}},{key:"write",value:function(e){var t=document.createElement("span");t.innerHTML="> "+e+" "+this.getDateString(),this.container.appendChild(t),this.scroll()}},{key:"clear",value:function(){for(;this.container.firstChild;)this.container.removeChild(this.container.firstChild)}}]),e}())(document.querySelector(".log__text"),document.querySelector(".log__clear"));t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=(r=o)&&r.__esModule?r:{default:r};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(t){c(this,e),this.name=t,this.callbacks=[]}return i(e,[{key:"registerCallback",value:function(e){this.callbacks.push(e)}}]),e}(),l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.default;c(this,e),this.logger=t,this.events={}}return i(e,[{key:"registerEvent",value:function(e){var t=new u(e);this.events[e]=t}},{key:"dispatchEvent",value:function(e,t){this.logger.write("CustomEvents.js: dispatch "+e),this.events[e].callbacks.forEach(function(e){e(t)})}},{key:"addEventListener",value:function(e,t){this.events[e].registerCallback(t)}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=(r=o)&&r.__esModule?r:{default:r};var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.default;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.logger=t,this.html=document.createElement("div"),this.html.innerHTML='\n        <div class="view-stub">\n            <div class="view-stub__input-block">\n                <input class="view-stub__input"/>\n                <button class="view-stub__apply">Отправить</button>\n            </div>\n            <div class="animals"></div>\n        </div>'}return i(e,[{key:"addCreateHandler",value:function(e){var t=this;this.html.querySelector(".view-stub__apply").addEventListener("click",function(){var n=t.html.querySelector(".view-stub__input"),r=n.value;n.value="",e(r)})}},{key:"addDeleteHandler",value:function(e){this.html.querySelectorAll(".item__button_remove").forEach(function(t){return t.addEventListener("click",function(){var n=t.id;e(n)})})}},{key:"render",value:function(e){this.logger.write("View.js: Call render function");var t=[],n=this.html.querySelector(".animals"),r=0;for(r in e){var i=e[r],o=document.createElement("div");o.classList.add("animals__item");var a=document.createElement("span");a.innerHTML=i;var c=document.createElement("button");c.innerHTML="X",c.classList.add("item__button_remove"),c.setAttribute("id",r),o.appendChild(a),o.appendChild(c),t.push(o)}for(;n.firstChild;)n.removeChild(n.firstChild);t.forEach(function(e){n.appendChild(e)})}}]),e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=(r=o)&&r.__esModule?r:{default:r};var c=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.default;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=t,this.customEvents=n,this.currentId=3,this.logger=r}return i(e,[{key:"get",value:function(){return this.logger.write('Model.js: get data <pre class="log__store">'+JSON.stringify(this.data)+"</pre>"),this.data}},{key:"add",value:function(e){this.logger.write("Model.js: add data "+e),this.data[this.currentId++]=e,this.customEvents.dispatchEvent("updateList")}},{key:"delete",value:function(e){this.logger.write("Model.js: remove data id="+e),delete this.data[e],this.customEvents.dispatchEvent("updateList")}}]),e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=c(n(0)),o=c(n(5)),a=c(n(4));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.default;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.logger=r,this.model=new o.default({0:"Fox",1:"Lion",2:"Squerrel"},t,r),this.view=new a.default(r),this.customEvents=t,this.view.addCreateHandler(function(e){n.validateString(e)&&n.model.add(e)}),this.customEvents.registerEvent("updateList"),this.customEvents.addEventListener("updateList",function(){n.logger.write('Presenter.js: catch event "updateList"'),n.view.render(n.model.get()),n.subscribeDeleteHandlers()})}return r(e,[{key:"subscribeDeleteHandlers",value:function(){var e=this;this.logger.write("Presenter.js: subscribe delete handlers"),this.view.addDeleteHandler(function(t){e.model.delete(t)})}},{key:"validateString",value:function(e){return e.length>0||(this.logger.write('<span style="color: red">Empty string sending. Abort.</span>'),!1)}},{key:"getView",value:function(){return this.logger.write("Presenter.js: get view"),this.view.render(this.model.get()),this.subscribeDeleteHandlers(),this.view}}]),e}();t.default=u},function(e,t,n){n(1),e.exports=n(1)}]);