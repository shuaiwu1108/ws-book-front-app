(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/books/index"],{"3fb7":function(t,i,a){},"5ada":function(t,i,a){"use strict";var e=a("3fb7"),n=a.n(e);n.a},7125:function(t,i,a){"use strict";a.r(i);var e=a("f112"),n=a.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a},"744c":function(t,i,a){},"79b2":function(t,i,a){"use strict";var e=a("744c"),n=a.n(e);n.a},9345:function(t,i,a){"use strict";(function(t,i){var e=a("4ea4");a("cf85");e(a("66fd"));var n=e(a("93bd"));t.__webpack_require_UNI_MP_PLUGIN__=a,i(n.default)}).call(this,a("bc2e")["default"],a("543d")["createPage"])},"93bd":function(t,i,a){"use strict";a.r(i);var e=a("a2eb"),n=a("7125");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("79b2"),a("5ada");var o=a("f0c5"),c=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);i["default"]=c.exports},a2eb:function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){}));var e=function(){var t=this.$createElement;this._self._c},n=[]},f112:function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={components:{newsPage:function(){Promise.all([a.e("common/vendor"),a.e("pages/books/news-page")]).then(function(){return resolve(a("fad7"))}.bind(null,a)).catch(a.oe)}},data:function(){return{tabList:[{id:"tab01",name:"玄幻",booktype:"xuanhuan"},{id:"tab02",name:"修真",booktype:"xiuzhen"},{id:"tab03",name:"都市",booktype:"dushi"},{id:"tab04",name:"历史",booktype:"lishi"},{id:"tab05",name:"网游",booktype:"wangyou"},{id:"tab06",name:"科幻",booktype:"kehuan"},{id:"tab07",name:"完本",booktype:"wanben"}],tabIndex:0,cacheTab:[],scrollInto:"",navigateFlag:!1,indicatorLineLeft:0,indicatorLineWidth:0,isTap:!1}},onReady:function(){this._lastTabIndex=0,this.swiperWidth=0,this.tabbarWidth=0,this.tabListSize={},this._touchTabIndex=0,this.pageList=[];for(var t=0;t<this.tabList.length;t++){var i=this.$refs["page"+t];Array.isArray(i)?this.pageList.push(i[0]):this.pageList.push(i)}this.switchTab(this.tabIndex),this.selectorQuery()},methods:{ontabtap:function(t){var i=t.target.dataset.current||t.currentTarget.dataset.current;this.isTap=!0;var a=this.tabListSize[i];this.updateIndicator(a.left,a.width),this._touchTabIndex=i,this.switchTab(i)},onswiperchange:function(t){},onswiperscroll:function(t){if(!this.isTap){var i=t.detail.dx,a=this._lastTabIndex;if(i>1?a++:i<-1&&a--,!(a===this._lastTabIndex||a<0||a>this.pageList.length-1)){0===this.pageList[a].dataList.length&&this.loadTabData(a);var e=Math.abs(this.swiperWidth/i),n=this.tabListSize[this._lastTabIndex],s=this.tabListSize[a],o=n.left+(s.left-n.left)/e,c=n.width+(s.width-n.width)/e;this.updateIndicator(o,c)}}},animationfinish:function(t){var i=t.detail.current;this._touchTabIndex===i&&(this.isTap=!1),this._lastTabIndex=i,this.switchTab(i),this.updateIndicator(this.tabListSize[i].left,this.tabListSize[i].width)},selectorQuery:function(){var i=this;t.createSelectorQuery().in(this).select(".tab-box").fields({dataset:!0,size:!0},(function(t){i.swiperWidth=t.width})).exec(),t.createSelectorQuery().in(this).selectAll(".uni-tab-item").boundingClientRect((function(t){t.forEach((function(t){i.tabListSize[t.dataset.id]=t})),i.updateIndicator(i.tabListSize[i.tabIndex].left,i.tabListSize[i.tabIndex].width)})).exec()},getElementSize:function(t,i,a){var e=this;t.getComponentRect(i,(function(t){e.tabListSize[a]=t.size}))},updateIndicator:function(t,i){this.indicatorLineLeft=t,this.indicatorLineWidth=i},switchTab:function(t){if(0===this.pageList[t].dataList.length&&this.loadTabData(t),this.tabIndex!==t){if(this.pageList[this.tabIndex].dataList.length>100){var i=this.cacheTab.indexOf(this.tabIndex);i<0&&this.cacheTab.push(this.tabIndex)}if(this.tabIndex=t,this.scrollInto=this.tabList[t].id,this.cacheTab.length>3){var a=this.cacheTab[0];this.clearTabData(a),this.cacheTab.splice(0,1)}}},scrollTabTo:function(t){var i=this.$refs["tabitem"+t][0],a=0;t>0&&(a=this.tabbarWidth/2-this.tabListSize[t].width/2,this.tabListSize[t].right<this.tabbarWidth/2&&(a=this.tabListSize[0].width)),dom.scrollToElement(i,{offset:-a})},loadTabData:function(t){this.pageList[t].loadData()},clearTabData:function(t){this.pageList[t].clear()}}};i.default=e}).call(this,a("543d")["default"])}},[["9345","common/runtime","common/vendor"]]]);