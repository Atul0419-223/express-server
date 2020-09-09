(this["webpackJsonpgithub-react"]=this["webpackJsonpgithub-react"]||[]).push([[0],{107:function(e,t,n){e.exports=n(164)},142:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);n(108);var r=n(0),a=n.n(r),c=n(18),o=n.n(c),i=n(104),s=n(48),u=n(43),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUBLIC REPO":return Object(u.a)(Object(u.a)({},e),{},{publicrepo:t.publicrepo});case"FOLLOWERS":return Object(u.a)(Object(u.a)({},e),{},{followers:t.followers});case"FOLLOWING":return Object(u.a)(Object(u.a)({},e),{},{following:t.following});case"PUBLICGISTS":return Object(u.a)(Object(u.a)({},e),{},{publicgists:t.publicgists});default:return e}},p=Object(s.b)(l);p.dispatch({type:"PUBLIC REPO"}),p.dispatch({type:"FOLLOWERS"}),p.dispatch({type:"FOLLOWING"}),p.dispatch({type:"PUBLICGISTS"});var f=Object(s.b)(l),b=n(53),h=n(37),m=n.n(h),O=n(54),g=n(68),w=n(61),v=n(168),d=n(47),y=n(62),j=n(169);function E(){var e=Object(w.a)(["\n  display:flex;\n"]);return E=function(){return e},e}var S=y.a.div(E()),x=function(e){var t=e.onSubmit,n=Object(r.useState)(""),c=Object(g.a)(n,2),o=c[0],i=c[1],s=function(){var e=Object(O.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t(o);case 3:i("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=a.a.createElement(j.a,{style:{fontSize:16,color:"#1890ff"}});return a.a.createElement(S,null,a.a.createElement(v.a,{type:"text",suffix:u,value:o,onChange:function(e){var t=e.target;return i(t.value.toLowerCase())},placeholder:"GitHub username",required:!0}),a.a.createElement(d.a,{onClick:s,style:{color:"#01CBC6",hover:"#01CBC6"}},"Compare"))},I=n(167),k=function(){return a.a.createElement("footer",{style:{background:"#24292e",color:"white",position:"fixed",bottom:"0",width:"100%",textAlign:"center",height:"30px"}},a.a.createElement("a",{href:"https://www.boardinfinity.com/",style:{color:"white",textDecoration:"none"}},"CopyRight@ BoardInfinity"))},C=n(166);n(142);function L(){var e=Object(w.a)(["\n  display:flex;\n  margin: -1rem;\n"]);return L=function(){return e},e}var B=y.a.div(L());var P=function(){var e=Object(r.useState)(null),t=Object(g.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){var e=window.location.search.split("?usernames=");e[e.length-1].split(",").forEach(function(){var e=Object(O.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(r.useEffect)((function(){(function(){var e=Object(O.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=localStorage.getItem("users"))&&(n="?usernames=".concat(Object.keys(JSON.parse(t)).join(",")),window.history.pushState("","",n),c(JSON.parse(t)));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=function(){var e=Object(O.a)(m.a.mark((function e(t){var n,r,a,o,i,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/".concat(t));case 3:if(200!==(n=e.sent).status){e.next=12;break}return e.next=7,n.json();case 7:return r=e.sent,e.next=10,localStorage.getItem("users");case 10:(a=e.sent)?(o=Object.assign({},JSON.parse(a),Object(b.a)({},t,r)),c(o),localStorage.setItem("users",JSON.stringify(o)),i="?usernames=".concat(Object.keys(o).join(",")),window.history.pushState("","",i)):(c(Object(b.a)({},t,r)),localStorage.setItem("users",JSON.stringify(Object(b.a)({},t,r))),s="?usernames=".concat(t),window.history.pushState("","",s));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement(C.a,{className:"site-page-header",onBack:function(){return null},title:"BoardInfinity",subTitle:"GITHUB PROFILE COMPARE"}),",",a.a.createElement(B,null,n&&function(){var e=[];if(n&&"object"===typeof n)for(var t in n)e.push(n[t]);return e.sort((function(e,t){return t.public_repos-e.public_repos})),e.sort((function(e,t){return t.public_gists-e.public_gists})),e}().map((function(e){return a.a.createElement(I.a,{key:e.id,title:e.login,style:{width:300}},a.a.createElement("img",{src:e.avatar_url,className:"img-thumbnail",style:{height:150,width:150}}),a.a.createElement("p",null,"Public Repos: ",e.public_repos),a.a.createElement("p",null,"Followers: ",e.followers),a.a.createElement("p",null,"Following: ",e.following),a.a.createElement("p",null,"Public Gists:",e.public_gists," "))}))),a.a.createElement(x,{onSubmit:o}),a.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(i.a,{store:f},a.a.createElement(a.a.StrictMode,null,a.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.49d5423b.chunk.js.map