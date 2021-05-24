(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8404fc98"],{"153e":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ListCard"},[r("div",{staticClass:"wrapper__inner"},[t.cards&&t.cards.length?t._l(t.cards,(function(e,n){return r("Card",{key:n,attrs:{card:e,flipped:t.flipped,color:t.color},on:{click:t.onClick}})})):[t._v(" Loading... ")]],2),t.fail?r("span",{staticClass:"error"},[t._v(" Wrong answer :("),r("br"),t._v("please try again. ")]):t._e()])},s=[],i=r("9ab4"),a=r("1b40"),o=r("ae8d"),c=function(t){function e(){var e,r,n=t.apply(this,arguments)||this;return n.numberOfCards=parseInt(null===(r=null===(e=n.$route)||void 0===e?void 0:e.params)||void 0===r?void 0:r.numberOfCards,10),n}return Object(i["d"])(e,t),Object.defineProperty(e.prototype,"cards",{get:function(){var t,e;return null===(e=null===(t=this.$store.state.turns)||void 0===t?void 0:t.turn)||void 0===e?void 0:e.cards},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"indexCurr",{get:function(){var t;return null===(t=this.$store.state.turns)||void 0===t?void 0:t.indexCurr},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fail",{get:function(){var t;return null===(t=this.$store.state.turns)||void 0===t?void 0:t.fail},enumerable:!1,configurable:!0}),e.prototype.created=function(){return Object(i["b"])(this,void 0,Promise,(function(){return Object(i["e"])(this,(function(t){switch(t.label){case 0:if(this.numberOfCards>12)throw new Error("numberOfCards too high");return this.cards&&!this.requestData?[3,2]:[4,this.$store.dispatch("getCards",this.numberOfCards)];case 1:return t.sent(),[3,3];case 2:this.cards||this.$router.push({name:"MemoryAscendingCards",params:{numberOfCards:this.numberOfCards.toString()}}),t.label=3;case 3:return[2]}}))}))},e.prototype.onClick=function(t){var e={card:t,index:this.indexCurr};if(this.$store.dispatch("setIndexAnswer",e),this.$store.dispatch("setIndexCurr",this.indexCurr+1),this.cards){var r=this.cards.filter((function(t){return void 0!==(null===t||void 0===t?void 0:t.indexAnswer)}));r.length===this.numberOfCards&&this.showResult()}},e.prototype.showResult=function(){var t,e=null===(t=this.cards)||void 0===t?void 0:t.slice().sort(d),r=!0;e&&e.length&&(r=e.every((function(t,e){return t.indexAnswer===e}))),r?this.$router.push({name:"Success"}):this.$store.dispatch("setFail",!0)},Object(i["c"])([Object(a["b"])({default:!1})],e.prototype,"flipped",void 0),Object(i["c"])([Object(a["b"])({default:!1})],e.prototype,"showReset",void 0),Object(i["c"])([Object(a["b"])({default:!0})],e.prototype,"requestData",void 0),Object(i["c"])([Object(a["b"])()],e.prototype,"color",void 0),e=Object(i["c"])([Object(a["a"])({components:{Card:o["a"]}})],e),e}(a["c"]),u=c;function d(t,e){return t.value>e.value?1:t.value<e.value?-1:0}var l=u,p=(r("a99c"),r("2877")),f=Object(p["a"])(l,n,s,!1,null,"02e03b1f",null);e["a"]=f.exports},"1e5a":function(t,e,r){},a99c:function(t,e,r){"use strict";r("1e5a")},afc4:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper__app"},[r("h2",{staticClass:"mt-0 mb-0"},[t._v("Cards")]),r("small",[t._v("Take your time to memorise the cards, then click Play.")]),r("ListCard",{attrs:{flipped:t.flipped,showReset:!1,color:t.color,requestData:!0}}),r("button",{staticClass:"btn btn--play",on:{click:t.onPlay}},[t._v("PLAY ->")])],1)},s=[],i=r("9ab4"),a=r("1b40"),o=r("153e"),c={getColor:u};function u(t){var e={4:"easy",8:"medium",12:"hard"};return e[t.toString()]}var d=function(t){function e(){var e,r,n=t.apply(this,arguments)||this;return n.numberOfCards=parseInt(null===(r=null===(e=n.$route)||void 0===e?void 0:e.params)||void 0===r?void 0:r.numberOfCards,10),n.color=c.getColor(n.numberOfCards),n.flipped=!1,n}return Object(i["d"])(e,t),e.prototype.created=function(){var t=this;setTimeout((function(){t.flipped=!0}),100)},e.prototype.onPlay=function(){var t=this;this.flipped=!1,setTimeout((function(){t.$router.push({name:"MemoryAscendingChallenge",params:{numberOfCards:t.numberOfCards.toString()}})}),1200)},e=Object(i["c"])([Object(a["a"])({components:{ListCard:o["a"]}})],e),e}(a["c"]),l=d,p=l,f=r("2877"),b=Object(f["a"])(p,n,s,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-8404fc98.5257a744.js.map