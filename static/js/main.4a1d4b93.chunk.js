(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(4),u=n.n(o),r=(n(12),n(13),n(2)),i=n(5),c=n(1);var m=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],o=t[1],u=Object(a.useState)(!0),m=Object(c.a)(u,2),s=m[0],h=m[1],p=Object(a.useState)("Red"),d=Object(c.a)(p,2),g=d[0],E=(d[1],Object(a.useState)(!0)),v=Object(c.a)(E,2),b=v[0],f=v[1],I=Object(a.useState)({hours:"",lunchTimeHours:0,lunchTimeMins:0,timeInHours:"",timeInMins:"",timeOfDay:"AM",goalHours:"40"}),H=Object(c.a)(I,2),M=H[0],O=H[1],y=function(e){var t=e.target,n=t.name,a=t.value;O(Object(i.a)({},M,Object(r.a)({},n,a)))};return l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=M.timeOfDay,n=60*(M.goalHours-M.hours)+parseInt(M.timeInMins,10);M.lunchTimeHours&&(console.log(n),n+=60*M.lunchTimeHours,console.log(n),console.log("hours hit")),M.lunchTimeMins&&(n+=parseInt(M.lunchTimeMins,10),console.log(n));var a,l=n%60;for(a=12===M.timeInHours?parseInt(n/60,10)+parseInt(M.timeInHours,10)-12:parseInt(n/60,10)+parseInt(M.timeInHours,10);a>=12&&M.timeInHours<=12;)a-=12,t="AM"===t?"PM":"AM";0===a&&(a+=12),o(l<10?a+":0"+l+" "+t:a+":"+l+" "+t),h(!1)}},l.a.createElement("label",{className:"top"},"Goal Hours:",l.a.createElement("input",{className:"goalHoursInput paddingleftRight",name:"goalHours",type:"text",value:M.goalHours,onChange:y}),"Hours:",l.a.createElement("input",{className:"paddingleftRight",name:"hours",type:"text",value:M.hours,onChange:y}),l.a.createElement("button",{className:"lunch",onClick:function(e){e.preventDefault(),f(!b)}})," Lunch?"),l.a.createElement("label",{hidden:b},l.a.createElement("div",null,l.a.createElement("br",null),"Enter how long of a lunch break you intend to take.",l.a.createElement("br",null),"Hours",l.a.createElement("input",{name:"lunchTimeHours",type:"text",value:M.lunchTimeHours,onChange:y}),"Minutes",l.a.createElement("input",{name:"lunchTimeMins",type:"text",value:M.lunchTimeMins,onChange:y}))),l.a.createElement("label",{className:"bottom",backgroundColor:g},l.a.createElement("br",null),l.a.createElement("br",null),"Time in =",l.a.createElement("input",{className:"timeInput paddingleftRight",name:"timeInHours",type:"text",value:M.timeInHours,onChange:y}),":",l.a.createElement("input",{className:"timeInput paddingleftRight",name:"timeInMins",type:"text",value:M.timeInMins,onChange:y}),l.a.createElement("select",{className:"paddingleftRight",name:"timeOfDay",onChange:y,value:M.timeOfDay},l.a.createElement("option",{value:"AM"},"AM"),l.a.createElement("option",{value:"PM"},"PM"))),l.a.createElement("input",{type:"submit",value:"Submit"}),l.a.createElement("div",{className:"output",hidden:s},l.a.createElement("h2",null,"Clock out Time "),l.a.createElement("div",{name:"outString"},n)))};var s=function(){return l.a.createElement("div",{className:"App gradient"},l.a.createElement("div",{className:"HeaderStuff"},l.a.createElement("h1",null,"When should I clock out?"),l.a.createElement("h2",null,"Input: The hours worked and The time you clocked in.")),l.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.4a1d4b93.chunk.js.map