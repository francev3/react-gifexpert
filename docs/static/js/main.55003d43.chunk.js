(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=(a(14),a(1)),l=a(8),s=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],s=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&t((function(e){return[i].concat(Object(l.a)(e))}))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){s(e.target.value)}}))},o=function(e){e.id;var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t))},m=a(4),f=a.n(m),p=a(7),d=function(){var e=Object(p.a)(f.a.mark((function e(t){var a,n,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"sSfGz5zNgVH4DNOM5uknx7JrwswNNGpV",a="https://api.giphy.com/v1/gifs/search?q=".concat(t,"&limit=10&api_key=").concat("sSfGz5zNgVH4DNOM5uknx7JrwswNNGpV"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({gifs:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){d(e).then((function(e){return c({gifs:e,loading:!1})}))}),[e]),r}(t),c=a.gifs,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__fadeIn"},t),i&&r.a.createElement("p",{className:"animate__animated animate__fadeIn"},"'Caragando...'"),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(o,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(n.useState)(["One puch"]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"GifExpertApp"),r.a.createElement("hr",null),r.a.createElement(s,{setCategories:c}),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};i.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.55003d43.chunk.js.map