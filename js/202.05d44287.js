"use strict";(self["webpackChunkopenchat_vue"]=self["webpackChunkopenchat_vue"]||[]).push([[202],{8202:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex w-full justify-center backdrop-blur bg-sky-500"},[s("div",{staticClass:"max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20"},[s("div",{staticClass:"flex justify-center md:justify-end -mt-16"},[s("img",{staticClass:"w-20 h-20 object-cover rounded-full border-2 border-white-500",attrs:{alt:e.info.name,src:e.icon}})]),s("div",[s("h2",{staticClass:"text-gray-800 text-3xl font-semibold"},[e._v(e._s(e.info.name))]),s("p",{staticClass:"mt-2 text-gray-600"},[e._v(e._s(e.info.description))]),s("p",{staticClass:"mt-2 text-amber-500"},[e._v(" 加入社群，即代表您同意遵守我們的 "),s("router-link",{staticClass:"text-red-500",attrs:{to:"/rule"}},[e._v("社群守則")]),e._v(" 。 ")],1)]),s("div",{staticClass:"flex justify-end mt-4"},[s("a",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",attrs:{href:e.info.url}},[e._v("加入社群")])])])])},n=[],l=s(7590),a={name:"JoinChatView",props:{code:{type:String,required:!0}},data:()=>({info:{name:null,description:null,url:null}}),computed:{icon(){return this.code?`/openchat/static/images/chats/${this.code}.jpg`:null}},created(){this.code in l?this.info=l[this.code]:this.$router.replace({name:"join"})}},r=a,o=s(1001),c=(0,o.Z)(r,i,n,!1,null,null,null),u=c.exports},7590:function(e){e.exports=JSON.parse('{"research":{"name":"資訊安全&程式設計&Web技術 研究社群","description":"console.log(\\"Hello World!\\");\\n\\n歡迎來到程式的世界，這裡有各式各樣類型的開發者。\\n\\n從網路工程到機器學習，歡迎彼此互相切磋及探討相關問題。","url":"https://line.me/ti/g2/lPx3ICiyRmK_igae77rMpw"},"line-dev":{"name":"LINE Developers (Community)","description":"LINE開發者社群，你是LINE Developer嗎？\\n\\n歡迎您的加入！這裡是非官方的OpenChat社群，為即時與開發者們互動所打造，歡迎各位的加入！","url":"https://line.me/ti/g2/Fi11VhNE7XDI0MPmxxbnoA"},"php-tw":{"name":"PHP Taiwan","description":"專屬PHP的社群","url":"https://line.me/ti/g2/rQT19HAbBoQJ12FBMqsMAA"},"vue-tw":{"name":"Vue.js Taiwan","description":"只有Vue.js","url":"https://line.me/ti/g2/J7bTfoHgmfgc42C9baJNs2gwH00kAMd9QfJDsQ"}}')}}]);
//# sourceMappingURL=202.05d44287.js.map