(function(t){function e(e){for(var r,a,s=e[0],o=e[1],u=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},c={app:0},i=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0ab51b":"e22728b6","chunk-2d21a36a":"783265a1","chunk-43bc999a":"e9014b93","chunk-8404fc98":"5257a744","chunk-f410a302":"dcfcaa05"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-43bc999a":1,"chunk-8404fc98":1,"chunk-f410a302":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0ab51b":"31d6cfe0","chunk-2d21a36a":"31d6cfe0","chunk-43bc999a":"41b9a1c3","chunk-8404fc98":"41b9a1c3","chunk-f410a302":"bd6f9319"}[t]+".css",c=o.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"15db":function(t,e,n){t.exports=n.p+"img/fish.b9e243f7.svg"},"445a":function(t,e,n){},"5be5":function(t,e,n){t.exports=n.p+"img/elephant.5f7f0187.svg"},"5c0b":function(t,e,n){"use strict";n("9c0c")},8724:function(t,e,n){},"9c0c":function(t,e,n){},a9e3:function(t,e,n){t.exports=n.p+"img/lepaya.c06554b5.png"},ae8d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Card",class:[t.flipped?"Card--flipped":"",t.small?"Card--small":"","Card--"+t.color]},[n("div",{staticClass:"inner"},[n("div",{staticClass:"front face",on:{click:t.onClick}},[t.card?[t._v(" "+t._s(void 0!==t.card.indexAnswer?t.card.indexAnswer+1:"")+" ")]:t._e()],2),n("div",{staticClass:"back face"},[t.card?[t._v(" "+t._s(t.card.value)+" ")]:t._e()],2)])])},a=[],c=n("9ab4"),i=n("1b40"),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(c["d"])(e,t),e.prototype.onClick=function(){this.card&&void 0===this.card.indexAnswer&&this.$emit("click",this.card)},Object(c["c"])([Object(i["b"])()],e.prototype,"card",void 0),Object(c["c"])([Object(i["b"])({default:!1})],e.prototype,"flipped",void 0),Object(c["c"])([Object(i["b"])({default:!1})],e.prototype,"small",void 0),Object(c["c"])([Object(i["b"])()],e.prototype,"color",void 0),e=Object(c["c"])([i["a"]],e),e}(i["c"]),o=s,u=o,l=(n("af2c"),n("2877")),d=Object(l["a"])(u,r,a,!1,null,"13cd30d9",null);e["a"]=d.exports},af2c:function(t,e,n){"use strict";n("445a")},b7e4:function(t,e,n){"use strict";n("8724")},cd49:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("small",[n("router-link",{attrs:{to:{name:"History"}}},[t._v(" 🕑 view history ")])],1),n("router-view")],1)},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:"/"}},[r("img",{staticClass:"mr-1",attrs:{alt:"Lepaya",src:n("a9e3"),height:"50"}}),r("h1",{staticClass:"mt-0 d-flex align-items-center justify-content-center"},[t._v(" Memory Game (Ascending) ")])])}],i=(n("5c0b"),n("2877")),s={},o=Object(i["a"])(s,a,c,!1,null,null,null),u=o.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper__app"},[n("ChooseDifficulty")],1)},f=[],m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Difficulty"},[r("h2",{staticClass:"mt-0"},[t._v("Choose Difficulty")]),r("div",[r("router-link",{staticClass:"option easy",attrs:{to:{name:"MemoryAscendingIntro",params:{numberOfCards:4}}}},[r("div",{staticClass:"d-flex align-items-center"},[r("div",{staticClass:"wrapper__img"},[r("img",{attrs:{alt:"",src:n("15db"),width:"40"}})]),r("h3",{staticClass:"mb-0 mt-0"},[t._v("Easy (4 cards)")])]),r("div",{staticClass:"cards__wrapper d-flex"},t._l(4,(function(t){return r("Card",{key:t,attrs:{small:!0,color:"easy"}})})),1)]),r("router-link",{staticClass:"option medium",attrs:{to:{name:"MemoryAscendingIntro",params:{numberOfCards:8}}}},[r("div",{staticClass:"d-flex align-items-center"},[r("div",{staticClass:"wrapper__img"},[r("img",{attrs:{alt:"",src:n("dfe7"),width:"40"}})]),r("h3",{staticClass:"mb-0 mt-0"},[t._v("Medium (8 cards)")])]),r("div",{staticClass:"cards__wrapper d-flex"},t._l(8,(function(t){return r("Card",{key:t,attrs:{small:!0,color:"medium"}})})),1)]),r("router-link",{staticClass:"option hard",attrs:{to:{name:"MemoryAscendingIntro",params:{numberOfCards:12}}}},[r("div",{staticClass:"d-flex align-items-center"},[r("div",{staticClass:"wrapper__img"},[r("img",{attrs:{alt:"",src:n("5be5"),width:"40"}})]),r("h3",{staticClass:"mb-0 mt-0"},[t._v("Hard (12 cards)")])]),r("div",{staticClass:"cards__wrapper d-flex"},t._l(12,(function(t){return r("Card",{key:t,attrs:{small:!0,color:"hard"}})})),1)])],1)])},p=[],h=n("9ab4"),b=n("1b40"),v=n("ae8d"),g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(h["d"])(e,t),e=Object(h["c"])([Object(b["a"])({components:{Card:v["a"]}})],e),e}(b["c"]),y=g,_=y,C=(n("b7e4"),Object(i["a"])(_,m,p,!1,null,"56cc1999",null)),O=C.exports,j={name:"Home",components:{ChooseDifficulty:O}},w=j,k=Object(i["a"])(w,d,f,!1,null,null,null),E=k.exports;r["a"].use(l["a"]);var x=[{path:"/",name:"Home",component:E},{path:"/games/memory-ascending/:numberOfCards/intro",name:"MemoryAscendingIntro",component:function(){return n.e("chunk-2d0ab51b").then(n.bind(null,"1589"))}},{path:"/games/memory-ascending/:numberOfCards/cards",name:"MemoryAscendingCards",component:function(){return n.e("chunk-8404fc98").then(n.bind(null,"afc4"))}},{path:"/games/memory-ascending/:numberOfCards/challenge",name:"MemoryAscendingChallenge",component:function(){return n.e("chunk-43bc999a").then(n.bind(null,"cd5d"))}},{path:"/games/memory-ascending/success",name:"Success",component:function(){return n.e("chunk-2d21a36a").then(n.bind(null,"bb0d"))}},{path:"/games/memory-ascending/history",name:"History",component:function(){return n.e("chunk-f410a302").then(n.bind(null,"e4bb"))}}],S=new l["a"]({mode:"history",base:"/",routes:x}),A=S,T=n("2f62"),N="http://localhost:8081",I={get:P,post:D,delete:M};function P(t){return Object(h["b"])(this,void 0,Promise,(function(){var e;return Object(h["e"])(this,(function(n){switch(n.label){case 0:return[4,fetch(N+t,Object(h["a"])({},R()))];case 1:return e=n.sent(),L(e)?[2,[]]:[4,U(e)];case 2:return[2,n.sent()]}}))}))}function D(t,e){return Object(h["b"])(this,void 0,Promise,(function(){var n;return Object(h["e"])(this,(function(r){switch(r.label){case 0:return[4,fetch(N+t,Object(h["a"])(Object(h["a"])({},R()),{method:"POST",body:JSON.stringify(e||{})}))];case 1:return n=r.sent(),L(n)?[2,null]:[4,U(n)];case 2:return[2,r.sent()]}}))}))}function M(t,e){return Object(h["b"])(this,void 0,Promise,(function(){var n;return Object(h["e"])(this,(function(r){switch(r.label){case 0:return[4,fetch(N+t,Object(h["a"])(Object(h["a"])({},R()),{method:"DELETE",body:JSON.stringify(e||{})}))];case 1:return n=r.sent(),L(n)?[2,null]:[4,U(n)];case 2:return[2,r.sent()]}}))}))}function L(t){for(var e=!1,n=0,r=t.headers.entries();n<r.length;n++){var a=r[n];if("location"===a[0]){window.location.href=a[1],e=!0;break}}return 200!==t.status&&console.error("Looks like there was a problem. Status Code: "+t.status),e}function R(){return{headers:{Accept:"application/json","Content-Type":"application/json"},method:"GET",mode:"cors",credentials:"include"}}function U(t){return Object(h["b"])(this,void 0,void 0,(function(){var e;return Object(h["e"])(this,(function(n){switch(n.label){case 0:return[4,t.json().catch((function(t){console.error("e",t)}))];case 1:return e=n.sent(),[2,e]}}))}))}var $={state:{turn:{},indexCurr:0,fail:!1},mutations:{SET_TURN:function(t,e){var n={cards:e};if(t.turn=n,t.indexCurr=0,t.fail=!1,localStorage){var r="turn-"+(new Date).getTime().toString();localStorage.setItem(r,JSON.stringify(e))}},SET_FAIL:function(t,e){t.fail=e},SET_INDEX_CURR:function(t,e){t.indexCurr=e},SET_INDEX_ANSWER:function(t,e){var n=H(t.turn.cards,e.card);null!==n&&b["c"].set(t.turn.cards[n],"indexAnswer",e.index)},UNSET_INDEX_ANSWER:function(t,e){b["c"].delete(e,"indexAnswer")}},actions:{getCards:function(t,e){return Object(h["b"])(this,void 0,Promise,(function(){var n;return Object(h["e"])(this,(function(r){switch(r.label){case 0:return[4,I.get("/api/cards/"+e)];case 1:return n=r.sent(),t.commit("SET_TURN",n),[2,new Promise((function(t){t(n)}))]}}))}))},resetAllIndexes:function(t){return Object(h["b"])(this,void 0,Promise,(function(){return Object(h["e"])(this,(function(e){return t.state.turn.cards.forEach((function(e){t.commit("UNSET_INDEX_ANSWER",e)})),[2,null]}))}))},setIndexCurr:function(t,e){t.commit("SET_INDEX_CURR",e)},setIndexAnswer:function(t,e){t.commit("SET_INDEX_ANSWER",e)},setFail:function(t,e){t.commit("SET_FAIL",e)}}};function H(t,e){var n=null;return t.every((function(t,r){return e!==t||(n=r,!1)})),n}r["a"].use(T["a"]);var X=new T["a"].Store({state:{count:0},modules:{turns:$},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:A,store:X,render:function(t){return t(u)}}).$mount("#app")},dfe7:function(t,e,n){t.exports=n.p+"img/parrot.0a30c89c.svg"}});
//# sourceMappingURL=app.2e18f1f3.js.map