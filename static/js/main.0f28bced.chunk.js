(this["webpackJsonptutorial-27"]=this["webpackJsonptutorial-27"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/mintbean.cf18b629.png"},27:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=(a(20),a(8)),s=a.n(o),u=a(16),l=a(42),m=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null);Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("enumerate devices:",navigator.mediaDevices.enumerateDevices()),e.next=3,navigator.mediaDevices.enumerateDevices();case 3:t=e.sent,a(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log(navigator.mediaDevices.enumerateDevices()),function(){e.apply(this,arguments)}()}),[]);var a=function(e){e.forEach((function(e){console.log("Device:",e.label),c(e)}))},c=function(){var t=Object(u.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.deviceId,t.next=3,navigator.mediaDevices.getUserMedia({audio:!1,video:{deviceId:n}}).then((function(t){return e.current.srcObject=t})).catch((function(e){return console.log(e)}));case 3:t.sent,e.current.play();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"c-camera-feed"},r.a.createElement("div",{className:"c-camera-feed__viewer"},r.a.createElement("video",{ref:e,width:"680",heigh:"510"})),r.a.createElement("div",{className:"buttons"},r.a.createElement(l.a,{className:"button",onClick:function(){e.current.srcObject.getVideoTracks().forEach((function(e){return e.stop()}))}},"Turn off Camera"),r.a.createElement(l.a,{className:"button",onClick:function(){return i()}},"Turn on Camera"),r.a.createElement(l.a,{className:"button",onClick:function(){return function(){var a=t.current.getContext("2d");a.filter="hue-rotate(0deg) brightness(400%) contrast(1000%) saturate(1000%) ",a.drawImage(e.current,0,0,t.current.width,t.current.height)}()}},"Take photo!")),r.a.createElement("div",{className:"c-camera-feed__stage"},r.a.createElement("canvas",{className:"canvas",width:"680",height:"510px",ref:t})))},f=a(43),v=a(44),d=a(21),p=a.n(d),h=function(){return r.a.createElement(f.a,{bg:"dark",variant:"dark"},r.a.createElement(f.a.Brand,{href:"#home"},r.a.createElement("img",{src:p.a,width:"30",height:"30",className:"d-inline-block align-top",alt:"React Bootstrap logo"})," ","Mintbean-Mirror"),r.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(v.a,{className:"mr-auto"},r.a.createElement(v.a.Link,{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mreichba/mintbean-mirror"},"Repo"))))},g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Image POP"),r.a.createElement(m,null)))};a(39);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.0f28bced.chunk.js.map