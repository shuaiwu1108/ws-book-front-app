!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=42)}([function(t,e){t.exports={"@VERSION":2}},function(t,e,i){"use strict";function n(t,e,i,n,o,r,a,s,l,u){var c,f="function"==typeof t?t.options:t;if(l){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var p in l)d.call(l,p)&&!d.call(f.components,p)&&(f.components[p]=l[p])}if(u&&("function"==typeof u.beforeCreate&&(u.beforeCreate=[u.beforeCreate]),(u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(f.mixins||(f.mixins=[])).push(u)),e&&(f.render=e,f.staticRenderFns=i,f._compiled=!0),n&&(f.functional=!0),r&&(f._scopeId="data-v-"+r),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(f.functional){f._injectStyles=c;var h=f.render;f.render=function(t,e){return c.call(e),h(t,e)}}else{var g=f.beforeCreate;f.beforeCreate=g?[].concat(g,c):[c]}return{exports:t,options:f}}i.d(e,"a",(function(){return n}))},function(t,e,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(3).default,Vue.prototype.__$appStyle__)},function(t,e,i){"use strict";i.r(e);var n=i(0),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=o.a},function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(i){return e.resolve(t()).then((function(){return i}))}),(function(i){return e.resolve(t()).then((function(){throw i}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var i=uni.requireGlobal();ArrayBuffer=i.ArrayBuffer,Int8Array=i.Int8Array,Uint8Array=i.Uint8Array,Uint8ClampedArray=i.Uint8ClampedArray,Int16Array=i.Int16Array,Uint16Array=i.Uint16Array,Int32Array=i.Int32Array,Uint32Array=i.Uint32Array,Float32Array=i.Float32Array,Float64Array=i.Float64Array,BigInt64Array=i.BigInt64Array,BigUint64Array=i.BigUint64Array}},,,function(t,e,i){"use strict";var n=i(28),o=i(14),r=i(1);var a=Object(r.a)(o.default,n.b,n.c,!1,null,null,"fd7e5cfe",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(39).default,this.options.style):Object.assign(this.options.style,i(39).default)}).call(a),e.default=a.exports},,,,,,,function(t,e,i){"use strict";var n=i(15),o=i.n(n);e.default=o.a},function(t,e,i){"use strict";var n=i(34);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i(43)),r=weex.requireModule("dom"),a={components:{newsPage:o.default},data:function(){return{tabList:[{id:"tab01",name:"\u7384\u5e7b",booktype:"xuanhuan"},{id:"tab02",name:"\u4fee\u771f",booktype:"xiuzhen"},{id:"tab03",name:"\u90fd\u5e02",booktype:"dushi"},{id:"tab04",name:"\u5386\u53f2",booktype:"lishi"},{id:"tab05",name:"\u7f51\u6e38",booktype:"wangyou"},{id:"tab06",name:"\u79d1\u5e7b",booktype:"kehuan"},{id:"tab07",name:"\u5b8c\u672c",booktype:"wanben"}],tabIndex:0,cacheTab:[],scrollInto:"",navigateFlag:!1,indicatorLineLeft:0,indicatorLineWidth:0,isTap:!1}},onReady:function(){this._lastTabIndex=0,this.swiperWidth=0,this.tabbarWidth=0,this.tabListSize={},this._touchTabIndex=0,this.pageList=[];for(var t=0;t<this.tabList.length;t++){var e=this.$refs["page"+t];Array.isArray(e)?this.pageList.push(e[0]):this.pageList.push(e)}this.switchTab(this.tabIndex),this.selectorQuery()},methods:{ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.isTap=!0;var i=this.tabListSize[e];this.updateIndicator(i.left,i.width),this._touchTabIndex=e,this.switchTab(e)},onswiperchange:function(t){},onswiperscroll:function(t){if(!this.isTap){var e=t.detail.dx,i=this._lastTabIndex;if(e>1?i++:e<-1&&i--,!(i===this._lastTabIndex||i<0||i>this.pageList.length-1)){0===this.pageList[i].dataList.length&&this.loadTabData(i);var n=Math.abs(this.swiperWidth/e),o=this.tabListSize[this._lastTabIndex],r=this.tabListSize[i],a=o.left+(r.left-o.left)/n,s=o.width+(r.width-o.width)/n;this.updateIndicator(a,s)}}},animationfinish:function(t){var e=t.detail.current;this._touchTabIndex===e&&(this.isTap=!1),this._lastTabIndex=e,this.switchTab(e),this.updateIndicator(this.tabListSize[e].left,this.tabListSize[e].width)},selectorQuery:function(){var t=this;r.getComponentRect(this.$refs.tabbar1,(function(e){t.tabbarWidth=e.size.width})),r.getComponentRect(this.$refs.swiper1,(function(e){t.swiperWidth=e.size.width}));for(var e=uni.createSelectorQuery().in(this),i=0;i<this.tabList.length;i++)e.select("#"+this.tabList[i].id).boundingClientRect();e.exec((function(e){e.forEach((function(e){t.tabListSize[e.dataset.id]=e})),t.updateIndicator(t.tabListSize[t.tabIndex].left,t.tabListSize[t.tabIndex].width),t.switchTab(t.tabIndex)}))},getElementSize:function(t,e,i){var n=this;t.getComponentRect(e,(function(t){n.tabListSize[i]=t.size}))},updateIndicator:function(t,e){this.indicatorLineLeft=t,this.indicatorLineWidth=e},switchTab:function(t){if(0===this.pageList[t].dataList.length&&this.loadTabData(t),this.tabIndex!==t){if(this.pageList[this.tabIndex].dataList.length>100)this.cacheTab.indexOf(this.tabIndex)<0&&this.cacheTab.push(this.tabIndex);if(this.tabIndex=t,this.scrollTabTo(t),this.cacheTab.length>3){var e=this.cacheTab[0];this.clearTabData(e),this.cacheTab.splice(0,1)}}},scrollTabTo:function(t){var e=this.$refs["tabitem"+t][0],i=0;t>0&&(i=this.tabbarWidth/2-this.tabListSize[t].width/2,this.tabListSize[t].right<this.tabbarWidth/2&&(i=this.tabListSize[0].width)),r.scrollToElement(e,{offset:-i})},loadTabData:function(t){this.pageList[t].loadData()},clearTabData:function(t){this.pageList[t].clear()}}};e.default=a},function(t,e,i){"use strict";i.r(e);var n=i(17),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=o.a},function(t,e,i){"use strict";(function(t){var n=i(34);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i(45)),r=(i(48),n(i(49))),a={components:{uniLoadMore:n(i(50)).default,bookInfo:r.default},props:{booktype:{type:[String],default:""}},data:function(){var t;return t={dataList:[],navigateFlag:!1,pulling:!1,refreshing:!1,refreshFlag:!1,refreshText:"",isLoading:!1,loadingText:"\u52a0\u8f7d\u4e2d...",isNoData:!1},(0,o.default)(t,"pulling",!1),(0,o.default)(t,"angle",0),(0,o.default)(t,"listCount",1),(0,o.default)(t,"loadingMoreText",{contentdown:"",contentrefresh:"",contentnomore:""}),(0,o.default)(t,"refreshIcon","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="),t},created:function(){this.pullTimer=null,this.requestParams={source:"bqg",bookType:this.booktype,pageIndex:1,pageSize:10},this._isWidescreen=!1},methods:{loadData:function(e){var i=this;this.isLoading||(this.isNoData?this.loadingText="\u5230\u5e95\u5566":(this.isLoading=!0,this.isNoData=!1,this.requestParams.pageIndex=this.listCount,uni.request({url:this.$host+"/api/book/list",data:this.requestParams,method:"POST",success:function(n){var o=n.data;if(null==o||o.length<10)return i.isNoData=!0,void(i.loadingText="\u5230\u5e95\u5566");var r=o.map((function(t){return{id:t.id,article_type:1,description:t.description,icon:t.icon,name:t.name,author_name:t.authorId,book_source:t.bookSource}}));e?(i.dataList=r,i.requestParams.pageIndex=1,i.listCount=1,t("info",i.listCount," at pages/books/news-page.nvue:128")):(i.dataList=i.dataList.concat(r),i.listCount=i.listCount+1),i.dataList.length>0&&i._isWidescreen&&i.dataList.length<=10&&i.goDetail(i.dataList[0])},fail:function(t){0==i.dataList.length&&(i.isNoData=!0)},complete:function(t){i.isLoading=!1,e&&(i.refreshing=!1,i.refreshFlag=!1,i.refreshText="\u5df2\u5237\u65b0",i.pullTimer&&clearTimeout(i.pullTimer),i.pullTimer=setTimeout((function(){i.pulling=!1}),1e3))}})))},loadMore:function(t){this.loadData()},clear:function(){this.dataList.length=0,this.requestParams.pageIndex=1,this.listCount=0},goDetail:function(t){this._isWidescreen?uni.$emit("updateDetail",{detail:encodeURIComponent(JSON.stringify(t))}):uni.navigateTo({url:"./detail?query="+encodeURIComponent(JSON.stringify(t))})},refreshData:function(){this.isLoading||(this.pulling=!0,this.refreshing=!0,this.refreshText="\u6b63\u5728\u5237\u65b0...",this.loadData(!0))},onrefresh:function(t){this.refreshData(),this.$refs.list.resetLoadmore()},onpullingdown:function(t){this.refreshing||(this.pulling=!1,Math.abs(t.pullingDistance)>Math.abs(t.viewHeight)?(this.refreshFlag=!0,this.refreshText="\u91ca\u653e\u7acb\u5373\u5237\u65b0"):(this.refreshFlag=!1,this.refreshText="\u4e0b\u62c9\u53ef\u4ee5\u5237\u65b0"))}}};e.default=a}).call(this,i(44).default)},function(t,e,i){"use strict";i.r(e);var n=i(19),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=o.a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{bookInfo:{type:Object,default:function(t){return{}}}},methods:{click:function(){this.$emit("click")}}};e.default=n},function(t,e){t.exports={view:{flexDirection:"column"},"flex-row":{flexDirection:"row"},"flex-col":{flexDirection:"column"},"list-cell":{paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"uni-list-cell-hover":{backgroundColor:"#eeeeee"},"media-item":{position:"relative",flex:1,flexDirection:"column",paddingTop:"10",paddingRight:"15",paddingBottom:"10",paddingLeft:"15"},"media-item-line":{position:"absolute",left:"15",right:"15",bottom:0,height:"1",backgroundColor:"#ebebeb"},"media-image-right":{flexDirection:"row"},"media-image-left":{flexDirection:"row-reverse"},"media-title":{flex:1,lines:3,textOverflow:"ellipsis",fontSize:"15",color:"#555555"},"media-title2":{flex:1,marginTop:"0",lineHeight:"20",maxHeight:"100",minHeight:"100",overflow:"hidden",textOverflow:"ellipsis"},"image-section":{marginTop:"10",flexDirection:"row",justifyContent:"space-between"},"image-section-right":{marginTop:0,marginLeft:"5",width:"112",height:"73"},"image-section-left":{marginTop:0,marginRight:"5",width:"112",height:"73"},"image-list1":{height:"240"},"image-list2":{width:"112",height:"110"},"image-list3":{width:"112",height:"73"},"media-info":{flexDirection:"row",alignItems:"center"},"info-text":{marginRight:"10",color:"#999999",fontSize:"12"},"media-foot":{marginTop:"12",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},"close-view":{position:"relative",alignItems:"center",flexDirection:"row",width:"20",height:"15",lineHeight:"15",borderWidth:"1upx",borderStyle:"solid",borderColor:"#aaaaaa",borderRadius:"4",justifyContent:"center",textAlign:"center"},"close-l":{position:"absolute",width:"9",height:"1",backgroundColor:"#aaaaaa"},"close-h":{transform:"rotate(45deg)"},"close-v":{transform:"rotate(-45deg)"},"@VERSION":2}},function(t,e,i){"use strict";i.r(e);var n=i(22),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=o.a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync().platform,o={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"\u4e0a\u62c9\u663e\u793a\u66f4\u591a",contentrefresh:"\u6b63\u5728\u52a0\u8f7d...",contentnomore:"\u6ca1\u6709\u66f4\u591a\u6570\u636e\u4e86"}}}},data:function(){return{platform:n}},methods:{onClick:function(){this.$emit("clickLoadMore",{detail:{status:this.status}})}}};e.default=o},function(t,e){t.exports={"uni-load-more":{flexDirection:"row",height:"40",alignItems:"center",justifyContent:"center"},"uni-load-more__text":{fontSize:"15"},"uni-load-more__img":{width:"24",height:"24",marginRight:"8"},"uni-load-more__img--nvue":{color:"#666666"},"uni-load-more__img--android":{width:"24",height:"24",transform:"rotate(0deg)"},"uni-load-more__img--ios":{width:"24",height:"24",transform:"rotate(0deg)"},"@VERSION":2}},function(t,e){t.exports={"no-data":{flex:1,position:"absolute",left:0,top:0,right:0,bottom:0,zIndex:10},"page-news":{flex:1,flexDirection:"column",position:"absolute",left:0,top:0,right:0,bottom:0},listview:{position:"absolute",left:0,top:0,right:0,bottom:0,flexDirection:"column"},refresh:{justifyContent:"center"},"refresh-view":{width:"750rpx",height:"64",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",justifyContent:"center"},"refresh-icon":{width:"32",height:"32",transitionDuration:500,transitionProperty:"transform",transform:"rotate(0deg)",transformOrigin:"15px 15px"},"refresh-icon-active":{transform:"rotate(180deg)"},"loading-icon":{width:"28",height:"28",marginRight:"5",color:"#808080"},"loading-text":{marginLeft:"2",fontSize:"16",color:"#999999"},"loading-more":{alignItems:"center",justifyContent:"center",paddingTop:"14",paddingBottom:"14",textAlign:"center"},"loading-more-text":{fontSize:"28upx",color:"#999999"},"@VERSION":2}},function(t,e){t.exports={tabs:{flex:1,flexDirection:"column",overflow:"hidden",backgroundColor:"#ffffff"},"tab-bar":{width:"750rpx",height:"42",flexDirection:"row"},"scroll-view-indicator":{position:"relative",height:"2",backgroundColor:"rgba(0,0,0,0)"},"scroll-view-underline":{position:"absolute",top:0,bottom:0,width:0,backgroundColor:"#007AFF"},"scroll-view-animation":{transitionDuration:200,transitionProperty:"left"},"tab-bar-line":{height:"1",backgroundColor:"#cccccc"},"tab-box":{flex:1},"uni-tab-item":{flexWrap:"nowrap",paddingLeft:"20",paddingRight:"20"},"uni-tab-item-title":{color:"#555555",fontSize:"15",height:"40",lineHeight:"40",flexWrap:"nowrap"},"uni-tab-item-title-active":{color:"#007AFF"},"swiper-item":{flex:1,flexDirection:"column"},"page-item":{flex:1,flexDirection:"row",position:"absolute",left:0,top:0,right:0,bottom:0},"@VERSION":2}},,,function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[i("view",{staticClass:["tabs"]},[i("scroll-view",{ref:"tabbar1",staticClass:["tab-bar"],attrs:{id:"tab-bar",scroll:!1,scrollX:!0,showScrollbar:!1,scrollIntoView:t.scrollInto}},[i("view",{staticStyle:{flexDirection:"column"}},[i("view",{staticStyle:{flexDirection:"row"}},t._l(t.tabList,(function(e,n){return i("view",{key:e.id,ref:"tabitem"+n,refInFor:!0,staticClass:["uni-tab-item"],attrs:{id:e.id,dataId:n,dataCurrent:n},on:{click:t.ontabtap}},[i("u-text",{staticClass:["uni-tab-item-title"],class:t.tabIndex==n?"uni-tab-item-title-active":"",appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(e.name))])])})),0),i("view",{staticClass:["scroll-view-indicator"]},[i("view",{ref:"underline",staticClass:["scroll-view-underline"],class:t.isTap?"scroll-view-animation":"",style:{left:t.indicatorLineLeft+"px",width:t.indicatorLineWidth+"px"}})])])]),i("view",{staticClass:["tab-bar-line"]}),i("swiper",{ref:"swiper1",staticClass:["tab-box"],attrs:{current:t.tabIndex,duration:300},on:{change:t.onswiperchange,transition:t.onswiperscroll,animationfinish:t.animationfinish,onAnimationEnd:t.animationfinish}},t._l(t.tabList,(function(t,e){return i("swiper-item",{key:e,staticClass:["swiper-item"]},[i("newsPage",{ref:"page"+e,refInFor:!0,staticClass:["page-item"],attrs:{booktype:t.booktype}})],1)})),1)],1)])},o=[]},function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:["page-news"]},[i("list",{staticClass:["listview"]},[i("refresh",{attrs:{display:t.refreshing},on:{refresh:t.onrefresh,pullingdown:t.onpullingdown}}),t._l(t.dataList,(function(e,n){return i("cell",{key:e.id,appendAsTree:!0,attrs:{append:"tree"}},[i("book-info",{attrs:{bookInfo:e},on:{close:function(e){t.closeItem(n)},click:function(i){t.goDetail(e)}}})],1)})),t.isLoading||t.dataList.length>4?i("cell",{appendAsTree:!0,attrs:{append:"tree"}},[i("view",{staticClass:["loading-more"]},[i("u-text",{staticClass:["loading-more-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.loadingText))])])]):t._e()],2)])},o=[]},function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:["media-item","view"],on:{click:t.click}},[i("view",{staticClass:["view"],style:{flexDirection:1===t.bookInfo.article_type||2===t.bookInfo.article_type?2===t.bookInfo.article_type?"row":"row-reverse":"column"}},[i("u-text",{staticClass:["media-title"],class:{"media-title2":1===t.bookInfo.article_type||2===t.bookInfo.article_type},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.bookInfo.description))]),t.bookInfo.image_list||t.bookInfo.icon?i("view",{staticClass:["image-section","flex-row"],class:{"image-section-right":2===t.bookInfo.article_type,"image-section-left":1===t.bookInfo.article_type}},[t.bookInfo.icon?i("u-image",{staticClass:["image-list1"],class:{"image-list2":1===t.bookInfo.article_type||2===t.bookInfo.article_type},attrs:{fadeShow:!1,src:t.bookInfo.icon}}):t._e(),t.bookInfo.image_list?t._l(t.bookInfo.image_list,(function(t,e){return i("u-image",{key:e,staticClass:["image-list3"],attrs:{fadeShow:!1,src:t.url}})})):t._e()],2):t._e()]),i("view",{staticClass:["media-foot","flex-row"]},[i("view",{staticClass:["media-info","flex-row"]},[i("u-text",{staticClass:["info-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u4f5c\u54c1\uff1a"+t._s(t.bookInfo.name))]),i("u-text",{staticClass:["info-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u4f5c\u8005\uff1a"+t._s(t.bookInfo.author_name))]),i("u-text",{staticClass:["info-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u6765\u6e90\uff1a"+t._s(t.bookInfo.book_source))])])]),i("view",{staticClass:["media-item-line"],staticStyle:{position:"absolute"}})])},o=[]},function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:["uni-load-more"],on:{click:t.onClick}},["loading"===t.status&&t.showIcon?i("loading-indicator",{staticClass:["uni-load-more__img","uni-load-more__img--nvue"],style:{color:t.color},attrs:{animating:!0}}):t._e(),i("u-text",{staticClass:["uni-load-more__text"],style:{color:t.color},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])])},o=[]},,,function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){function i(e){return t.exports=i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,i(e)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,i){"use strict";i.r(e);var n=i(20),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=o.a},function(t,e,i){"use strict";i.r(e);var n=i(23),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=o.a},function(t,e,i){"use strict";i.r(e);var n=i(24),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=o.a},function(t,e,i){"use strict";i.r(e);var n=i(25),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=o.a},,,function(t,e,i){"use strict";i.r(e);i(2),i(4);var n=i(7);n.default.mpType="page",n.default.route="pages/books/index",n.default.el="#root",new Vue(n.default)},function(t,e,i){"use strict";i.r(e);var n=i(29),o=i(16);for(var r in o)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(r);var a=i(1);var s=Object(a.a)(o.default,n.b,n.c,!1,null,"da143190","b80a15cc",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(38).default,this.options.style):Object.assign(this.options.style,i(38).default)}).call(s),e.default=s.exports},function(t,e,i){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"==typeof __channelId__&&__channelId__}function r(t,e){switch(n(e)){case"Function":return"function() { [native code] }";default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var a=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var s=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,r)+"---END:JSON---"}catch(i){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var i=n(t).toUpperCase();t="NUMBER"===i||"BOOLEAN"===i?"---BEGIN:"+i+"---"+t+"---END:"+i+"---":String(t)}return t})),l="";if(s.length>1){var u=s.pop();l=s.join("---COMMA---"),0===u.indexOf(" at ")?l+=u:l+="---COMMA---"+u}else l=s[0];console[a](l)},e.log=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];console[t].apply(console,i)}},function(t,e,i){var n=i(46);t.exports=function(t,e,i){return(e=n(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,i){var n=i(35).default,o=i(47);t.exports=function(t){var e=o(t,"string");return"symbol"===n(e)?e:String(e)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,i){var n=i(35).default;t.exports=function(t,e){if("object"!==n(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.friendlyDate=function(t){var e=Date.now(),i=Math.floor((e-t)/1e3),n=Math.floor(i/60),o=Math.floor(n/60),r=Math.floor(o/24),a=Math.floor(r/30),s=Math.floor(a/12),l="",u=0;s>0?(l="year",u=s):a>0?(l="month",u=a):r>0?(l="day",u=r):o>0?(l="hour",u=o):n>0?(l="minute",u=n):(l="second",u=0===i?i=1:i);return{year:"%n% \u5e74\u524d",month:"%n% \u6708\u524d",day:"%n% \u5929\u524d",hour:"%n% \u5c0f\u65f6\u524d",minute:"%n% \u5206\u949f\u524d",second:"%n% \u79d2\u524d"}[l].replace("%n%",u)}},function(t,e,i){"use strict";i.r(e);var n=i(30),o=i(18);for(var r in o)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(r);var a=i(1);var s=Object(a.a)(o.default,n.b,n.c,!1,null,"1532aa06","20a6e1d4",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(36).default,this.options.style):Object.assign(this.options.style,i(36).default)}).call(s),e.default=s.exports},function(t,e,i){"use strict";i.r(e);var n=i(31),o=i(21);for(var r in o)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(r);var a=i(1);var s=Object(a.a)(o.default,n.b,n.c,!1,null,"faa193a8","0395c9f8",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(37).default,this.options.style):Object.assign(this.options.style,i(37).default)}).call(s),e.default=s.exports}]);