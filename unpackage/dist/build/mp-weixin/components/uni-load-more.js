(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-load-more"],{"0de1":function(t,n,e){"use strict";e.r(n);var o=e("fff4"),a=e("4a48");for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("1372");var f=e("f0c5"),r=Object(f["a"])(a["default"],o["b"],o["c"],!1,null,"faa193a8",null,!1,o["a"],void 0);n["default"]=r.exports},1372:function(t,n,e){"use strict";var o=e("efb7"),a=e.n(o);a.a},"4a48":function(t,n,e){"use strict";e.r(n);var o=e("9ee7"),a=e.n(o);for(var u in o)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=a.a},"9ee7":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=t.getSystemInfoSync().platform,o={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{platform:e}},methods:{onClick:function(){this.$emit("clickLoadMore",{detail:{status:this.status}})}}};n.default=o}).call(this,e("543d")["default"])},efb7:function(t,n,e){},fff4:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-load-more-create-component',
    {
        'components/uni-load-more-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0de1"))
        })
    },
    [['components/uni-load-more-create-component']]
]);
