!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=40)}({0:function(t,e){t.exports={"@VERSION":2}},1:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,u,l,s){var f,c="function"==typeof t?t.options:t;if(l){c.components||(c.components={});var d=Object.prototype.hasOwnProperty;for(var p in l)d.call(l,p)&&!d.call(c.components,p)&&(c.components[p]=l[p])}if(s&&("function"==typeof s.beforeCreate&&(s.beforeCreate=[s.beforeCreate]),(s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(c.mixins||(c.mixins=[])).push(s)),e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=f):o&&(f=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(c.functional){c._injectStyles=f;var y=c.render;c.render=function(t,e){return f.call(e),y(t,e)}}else{var _=c.beforeCreate;c.beforeCreate=_?[].concat(_,f):[f]}return{exports:t,options:c}}n.d(e,"a",(function(){return r}))},10:function(t,e){t.exports={banner:{height:"180",position:"relative",backgroundColor:"#cccccc",flexDirection:"row",overflow:"hidden"},"banner-img":{flex:1},"title-area":{position:"absolute",left:"15",right:"15",bottom:"15",zIndex:11},"title-text":{fontSize:"16",fontWeight:"400",lineHeight:"20",lines:2,color:"#ffffff",overflow:"hidden"},"article-meta":{paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},"article-meta-text":{color:"#808080"},"article-text":{fontSize:"12",lineHeight:"25",marginTop:0,marginRight:"10",marginBottom:0,marginLeft:"10"},"article-author":{fontSize:"15"},"article-time":{fontSize:"15"},"article-content":{fontSize:"15",paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15",marginBottom:"15",overflow:"hidden"},"catalog-content":{fontSize:"16",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10",lineHeight:1.8},"@VERSION":2}},2:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(3).default,Vue.prototype.__$appStyle__)},26:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var r=function(){var t=this.$createElement,e=this._self._c||t;return e("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[e("view",{staticClass:["content"]},[e("view",{staticClass:["article-meta"]},[e("u-text",{staticClass:["catalog-content"],appendAsTree:!0,attrs:{append:"tree"}},[this._v(this._s(this.catalogInfo))])])])])},o=[]},3:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},32:function(t,e,n){"use strict";n.r(e);var r=n(10),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},4:function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var n=uni.requireGlobal();ArrayBuffer=n.ArrayBuffer,Int8Array=n.Int8Array,Uint8Array=n.Uint8Array,Uint8ClampedArray=n.Uint8ClampedArray,Int16Array=n.Int16Array,Uint16Array=n.Uint16Array,Int32Array=n.Int32Array,Uint32Array=n.Uint32Array,Float32Array=n.Float32Array,Float64Array=n.Float64Array,BigInt64Array=n.BigInt64Array,BigUint64Array=n.BigUint64Array}},40:function(t,e,n){"use strict";n.r(e);n(2),n(4);var r=n(5);r.default.mpType="page",r.default.route="pages/books/detail-catalog",r.default.el="#root",new Vue(r.default)},5:function(t,e,n){"use strict";var r=n(26),o=n(8),i=n(1);var a=Object(i.a)(o.default,r.b,r.c,!1,null,null,"1586db3c",!1,r.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(32).default,this.options.style):Object.assign(this.options.style,n(32).default)}).call(a),e.default=a.exports},8:function(t,e,n){"use strict";var r=n(9),o=n.n(r);e.default=o.a},9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{banner:{},dataList:[],catalogInfo:""}},onLoad:function(t){this.load(t.query)},methods:{load:function(t){var e=decodeURIComponent(t);try{this.banner=JSON.parse(e)}catch(t){this.banner=JSON.parse(e)}uni.setNavigationBarTitle({title:this.banner.catalogName}),this.getDetail()},getDetail:function(){var t=this;uni.request({url:this.$host+"/api/bookCatalog/one",data:this.banner,method:"POST",success:function(e){var n=e.data;t.catalogInfo=n}})}}};e.default=r}});