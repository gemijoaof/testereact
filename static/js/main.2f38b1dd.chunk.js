(this.webpackJsonptestereact=this.webpackJsonptestereact||[]).push([[0],[,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),i=(a(9),a(3)),l=(a(10),a(11),a(12),function(e){var t=e.user,a=t.name,n=t.email;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(a,"?size=300x300")}),r.a.createElement("h4",null,a.toUpperCase()),r.a.createElement("p",null,n))}),s=function(e){return r.a.createElement("div",{className:"cardList"},e.listRobots.map((function(e,t){return r.a.createElement(l,{key:t,user:e})})))},m=function(e){return r.a.createElement("input",{onChange:e.onSearchChange,type:"search",placeholder:"search robot"})},u=[{name:"joao freitas",email:"gemijoao@gmail.com"},{name:"tiago freitas",email:"gemitiago@gmail.com"}];var h=function(){var e=Object(n.useState)(u),t=Object(i.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"stickyHeader"},r.a.createElement("h1",null,"ROBOFRIENDS"),r.a.createElement(m,{onSearchChange:function(e){var t=e.target.value;o((function(){return u.filter((function(e){return e.name.includes(t)}))}))}}),r.a.createElement("hr",null)),r.a.createElement(s,{listRobots:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.2f38b1dd.chunk.js.map