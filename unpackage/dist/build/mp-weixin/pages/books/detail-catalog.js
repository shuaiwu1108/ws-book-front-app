(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/books/detail-catalog"],{"0131":function(t,n,e){"use strict";e.r(n);var a=e("d398"),o=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},"3dcb":function(t,n,e){"use strict";var a=e("b04b"),o=e.n(a);o.a},"5ae0":function(t,n,e){"use strict";(function(t,n){var a=e("4ea4");e("cf85");a(e("66fd"));var o=a(e("e986"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(o.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},b04b:function(t,n,e){},be51:function(t,n,e){"use strict";var a=e("f5e6"),o=e.n(a);o.a},d398:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{banner:{},dataList:[],catalogInfo:""}},onLoad:function(t){this.load(t.query)},methods:{load:function(n){var e=decodeURIComponent(n);try{this.banner=JSON.parse(e)}catch(a){this.banner=JSON.parse(e)}t.setNavigationBarTitle({title:this.banner.catalogName}),this.getDetail()},getDetail:function(){var n=this;t.request({url:this.$host+"/api/bookCatalog/one",data:this.banner,method:"POST",success:function(t){var e=t.data;n.catalogInfo=e}})}}};n.default=e}).call(this,e("543d")["default"])},e770:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},o=[]},e986:function(t,n,e){"use strict";e.r(n);var a=e("e770"),o=e("0131");for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("be51"),e("3dcb");var c=e("f0c5"),u=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=u.exports},f5e6:function(t,n,e){}},[["5ae0","common/runtime","common/vendor"]]]);