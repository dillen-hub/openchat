(self["webpackChunkopenchat"]=self["webpackChunkopenchat"]||[]).push([[517],{3517:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex w-full justify-center bg-sky-500"},[r("div",{staticClass:"max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20"},[r("div",{staticClass:"flex justify-center md:justify-end -mt-16"},[r("img",{staticClass:"w-20 h-20 object-cover rounded-full border-2 border-white-500",attrs:{alt:e.info.name,src:e.icon}})]),r("div",[r("h2",{staticClass:"text-gray-800 text-3xl font-semibold"},[e._v(e._s(e.info.name))]),r("p",{directives:[{name:"show",rawName:"v-show",value:!e.accept,expression:"!accept"}],staticClass:"mt-2 text-gray-600"},[e._v(e._s(e.info.description))]),r("p",{directives:[{name:"show",rawName:"v-show",value:!e.accept,expression:"!accept"}],staticClass:"mt-2 text-amber-500"},[e._v(" 加入社群，即代表您同意遵守我們的 "),r("router-link",{staticClass:"text-red-500",attrs:{to:"/rule"}},[e._v("社群守則")]),e._v(" 。 ")],1),r("p",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"status"}],staticClass:"mt-2 text-red-600"},[e._v(e._s(e.status))]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.accept,expression:"accept"}],staticClass:"mt-2 text-gray-600"},[e._v(" 請複製這份代碼，再貼上到OpenChat的審核答案內： ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.accept,expression:"accept"}],staticClass:"w-full mt-2 text-gray-600 flex rounded bg-white w-auto shadow-md"},[r("input",{staticClass:"w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none",attrs:{disabled:!e.ready,type:"text"},domProps:{value:e.secret}}),r("button",{staticClass:"m-2 rounded px-4 px-4 py-2 font-semibold",attrs:{disabled:!e.ready},on:{click:e.copySecret}},[r("svg",{directives:[{name:"show",rawName:"v-show",value:!e.ready,expression:"!ready"}],staticClass:"animate-spin -ml-1 mr-3 h-5 w-5",attrs:{fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),r("path",{staticClass:"opacity-75",attrs:{d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",fill:"currentColor"}})]),r("svg",{directives:[{name:"show",rawName:"v-show",value:e.ready,expression:"ready"}],staticClass:"h-6 w-6",attrs:{fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])]),r("div",{staticClass:"flex justify-end mt-4"},[r("button",{staticClass:"flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",attrs:{disabled:!e.ready},on:{click:e.submit}},[r("svg",{directives:[{name:"show",rawName:"v-show",value:!e.ready,expression:"!ready"}],staticClass:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",attrs:{fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),r("path",{staticClass:"opacity-75",attrs:{d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",fill:"currentColor"}})]),e._v(" "+e._s(e.state)+" ")])])])])},a=[],s=r(6198),i=(r(8975),r(2222),r(1539),r(8783),r(3948),r(1637),r(4916),r(5306),r(7590)),o={name:"JoinChatView",props:{code:{type:String,required:!0}},data:function(){return{info:{name:null,description:null,url:null},secret:null,status:null,accept:!1,ready:!0}},computed:{icon:function(){return this.code?"".concat("/openchat/","static/images/chats/").concat(this.code,".jpg"):null},state:function(){return this.accept?this.ready?"前往OpenChat界面貼上代碼":"載入中...":"加入社群"}},methods:{copySecret:function(){var e=this;navigator.clipboard?navigator.clipboard.writeText(this.secret).then((function(){return e.status="已複製代碼"})).catch((function(){return e.status="無法複製代碼"})):this.status="您的瀏覽器不支援複製功能"},submit:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var r,n,a,s,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.accept){t.next=21;break}return e.accept=!0,e.ready=!1,r=new URLSearchParams,r.set("slug",e.code),t.prev=5,t.next=8,e.$axios.post("application",r);case 8:n=t.sent,e.ready=!0,e.secret=n.data.code,t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](5),null!==t.t0&&void 0!==t.t0&&null!==(a=t.t0.response)&&void 0!==a&&null!==(s=a.data)&&void 0!==s&&s.code?e.secret=null===t.t0||void 0===t.t0||null===(i=t.t0.response)||void 0===i||null===(o=i.data)||void 0===o?void 0:o.code:e.status="授權伺服器發生嚴重錯誤";case 16:return t.prev=16,e.ready=!0,t.finish(16);case 19:t.next=22;break;case 21:location.href=e.info.url;case 22:case"end":return t.stop()}}),t,null,[[5,13,16,19]])})))()}},created:function(){this.code in i?this.info=i[this.code]:this.$router.replace({name:"join"})}},c=o,l=r(1001),u=(0,l.Z)(c,n,a,!1,null,null,null),h=u.exports},590:function(e,t,r){var n=r(7293),a=r(5112),s=r(1913),i=a("iterator");e.exports=!n((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r="";return e.pathname="c%20d",t.forEach((function(e,n){t["delete"]("b"),r+=n+e})),s&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[i]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},1637:function(e,t,r){"use strict";r(6992);var n=r(2109),a=r(7854),s=r(5005),i=r(6916),o=r(1702),c=r(590),l=r(1320),u=r(2248),h=r(8003),p=r(4994),d=r(9909),v=r(5787),f=r(614),w=r(2597),m=r(9974),y=r(648),g=r(9670),x=r(111),b=r(1340),k=r(30),C=r(9114),R=r(8554),L=r(1246),U=r(8053),_=r(5112),S=r(4362),N=_("iterator"),P="URLSearchParams",j=P+"Iterator",A=d.set,E=d.getterFor(P),Q=d.getterFor(j),z=s("fetch"),H=s("Request"),M=s("Headers"),I=H&&H.prototype,V=M&&M.prototype,J=a.RegExp,T=a.TypeError,B=a.decodeURIComponent,O=a.encodeURIComponent,q=o("".charAt),F=o([].join),D=o([].push),W=o("".replace),Z=o([].shift),$=o([].splice),K=o("".split),X=o("".slice),G=/\+/g,Y=Array(4),ee=function(e){return Y[e-1]||(Y[e-1]=J("((?:%[\\da-f]{2}){"+e+"})","gi"))},te=function(e){try{return B(e)}catch(t){return e}},re=function(e){var t=W(e,G," "),r=4;try{return B(t)}catch(n){while(r)t=W(t,ee(r--),te);return t}},ne=/[!'()~]|%20/g,ae={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},se=function(e){return ae[e]},ie=function(e){return W(O(e),ne,se)},oe=p((function(e,t){A(this,{type:j,iterator:R(E(e).entries),kind:t})}),"Iterator",(function(){var e=Q(this),t=e.kind,r=e.iterator.next(),n=r.value;return r.done||(r.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),r}),!0),ce=function(e){this.entries=[],this.url=null,void 0!==e&&(x(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===q(e,0)?X(e,1):e:b(e)))};ce.prototype={type:P,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,r,n,a,s,o,c,l=L(e);if(l){t=R(e,l),r=t.next;while(!(n=i(r,t)).done){if(a=R(g(n.value)),s=a.next,(o=i(s,a)).done||(c=i(s,a)).done||!i(s,a).done)throw T("Expected sequence with length 2");D(this.entries,{key:b(o.value),value:b(c.value)})}}else for(var u in e)w(e,u)&&D(this.entries,{key:u,value:b(e[u])})},parseQuery:function(e){if(e){var t,r,n=K(e,"&"),a=0;while(a<n.length)t=n[a++],t.length&&(r=K(t,"="),D(this.entries,{key:re(Z(r)),value:re(F(r,"="))}))}},serialize:function(){var e,t=this.entries,r=[],n=0;while(n<t.length)e=t[n++],D(r,ie(e.key)+"="+ie(e.value));return F(r,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var le=function(){v(this,ue);var e=arguments.length>0?arguments[0]:void 0;A(this,new ce(e))},ue=le.prototype;if(u(ue,{append:function(e,t){U(arguments.length,2);var r=E(this);D(r.entries,{key:b(e),value:b(t)}),r.updateURL()},delete:function(e){U(arguments.length,1);var t=E(this),r=t.entries,n=b(e),a=0;while(a<r.length)r[a].key===n?$(r,a,1):a++;t.updateURL()},get:function(e){U(arguments.length,1);for(var t=E(this).entries,r=b(e),n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){U(arguments.length,1);for(var t=E(this).entries,r=b(e),n=[],a=0;a<t.length;a++)t[a].key===r&&D(n,t[a].value);return n},has:function(e){U(arguments.length,1);var t=E(this).entries,r=b(e),n=0;while(n<t.length)if(t[n++].key===r)return!0;return!1},set:function(e,t){U(arguments.length,1);for(var r,n=E(this),a=n.entries,s=!1,i=b(e),o=b(t),c=0;c<a.length;c++)r=a[c],r.key===i&&(s?$(a,c--,1):(s=!0,r.value=o));s||D(a,{key:i,value:o}),n.updateURL()},sort:function(){var e=E(this);S(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){var t,r=E(this).entries,n=m(e,arguments.length>1?arguments[1]:void 0),a=0;while(a<r.length)t=r[a++],n(t.value,t.key,this)},keys:function(){return new oe(this,"keys")},values:function(){return new oe(this,"values")},entries:function(){return new oe(this,"entries")}},{enumerable:!0}),l(ue,N,ue.entries,{name:"entries"}),l(ue,"toString",(function(){return E(this).serialize()}),{enumerable:!0}),h(le,P),n({global:!0,forced:!c},{URLSearchParams:le}),!c&&f(M)){var he=o(V.has),pe=o(V.set),de=function(e){if(x(e)){var t,r=e.body;if(y(r)===P)return t=e.headers?new M(e.headers):new M,he(t,"content-type")||pe(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),k(e,{body:C(0,b(r)),headers:C(0,t)})}return e};if(f(z)&&n({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return z(e,arguments.length>1?de(arguments[1]):{})}}),f(H)){var ve=function(e){return v(this,I),new H(e,arguments.length>1?de(arguments[1]):{})};I.constructor=ve,ve.prototype=I,n({global:!0,forced:!0},{Request:ve})}}e.exports={URLSearchParams:le,getState:E}},7590:function(e){"use strict";e.exports=JSON.parse('{"research":{"name":"資訊安全&程式設計&Web技術 研究社群","description":"console.log(\\"Hello World!\\");\\n\\n歡迎來到程式的世界，這裡有各式各樣類型的開發者。\\n\\n從網路工程到機器學習，歡迎彼此互相切磋及探討相關問題。","url":"https://line.me/ti/g2/lPx3ICiyRmK_igae77rMpw","page_url":"https://ncurl.xyz/s/-73eAWQng"},"line-dev":{"name":"LINE Developers (Community)","description":"LINE開發者社群，你是LINE Developer嗎？\\n\\n歡迎您的加入！這裡是非官方的OpenChat社群，為即時與開發者們互動所打造，歡迎各位的加入！","url":"https://line.me/ti/g2/Fi11VhNE7XDI0MPmxxbnoA","page_url":"https://ncurl.xyz/s/RTV21KQ7R"},"php-tw":{"name":"PHP Taiwan","description":"專屬PHP的社群","url":"https://line.me/ti/g2/rQT19HAbBoQJ12FBMqsMAA","page_url":"https://ncurl.xyz/s/W-SNBFQnR"},"vue-tw":{"name":"Vue.js Taiwan","description":"只有Vue.js","url":"https://line.me/ti/g2/J7bTfoHgmfgc42C9baJNs2gwH00kAMd9QfJDsQ","page_url":"https://ncurl.xyz/s/vJS7bZQng"}}')}}]);
//# sourceMappingURL=517-legacy.100d14ed.js.map