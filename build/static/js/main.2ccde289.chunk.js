(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{115:function(e,a,n){},116:function(e,a,n){},117:function(e,a,n){},118:function(e,a,n){},119:function(e,a,n){},169:function(e,a,n){},170:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n(80),r=n.n(l),s=n(7),i=n(4),c=n(2),o=(n(90),n(3)),u=n.n(o),d=n(12),h=n(13),j=n.n(h);function b(e){var a="; ".concat(document.cookie).split("; ".concat(e,"="));if(2===a.length)return a.pop().split(";").shift()}function m(){return(m=Object(d.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,e.next=3,j.a.get("http://192.168.1.103/api/protected",{withCredentials:!0}).then((function(e){"success"===e.data.status&&(a=!0)})).catch((function(e){console.log("in catch"),a=!1}));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return x.apply(this,arguments)}function x(){return(x=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("http://192.168.1.103/api/user/signout",{withCredentials:!0}).then((function(e){if("success"===e.data.status)return console.log(e.data.status),!0})).catch((function(e){return console.log(e),!1}));case 2:return e.abrupt("return",!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(d.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.next=3,j.a.post("http://192.168.1.103/api/user/login",a,{withCredentials:!0}).then((function(e){n=!0})).catch((function(e){n=!1}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(d.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.next=3,j.a.post("http://192.168.1.103/api/maintenance_log/submit",a,{withCredentials:!0,headers:{"X-CSRF-TOKEN":b("csrf_access_token")}}).then((function(e){console.log(e),n=e})).catch((function(e){console.log(e.response.data),n=e.response.data}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(d.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.next=3,j.a.post("http://192.168.1.103/api/waterbill/input",a,{withCredentials:!0,headers:{"X-CSRF-TOKEN":b("csrf_access_token")}}).then((function(e){console.log(e),n=e})).catch((function(e){console.log(e.response.data),n=e.response.data}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(d.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.next=3,j.a.post("http://192.168.1.103/api/electricbill/input",a,{withCredentials:!0,headers:{"X-CSRF-TOKEN":b("csrf_access_token")}}).then((function(e){console.log(e),n=e})).catch((function(e){console.log(e.response.data),n=e.response.data}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(d.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.next=3,j.a.post("http://192.168.1.103/api/guest/retrieve_data",a,{withCredentials:!0,headers:{"X-CSRF-TOKEN":b("csrf_access_token")}}).then((function(e){console.log(e),n=e})).catch((function(e){console.log(e.response.data),n=e.response.data}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(d.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.next=3,j.a.post("http://192.168.1.103/api/guest/retrieve_room",a,{withCredentials:!0,headers:{"X-CSRF-TOKEN":b("csrf_access_token")}}).then((function(e){console.log(e),n=e})).catch((function(e){console.log(e.response.data),n=e.response.data}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(d.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.next=3,j.a.post("http://192.168.1.103/api/guest/remove_guest",a,{withCredentials:!0,headers:{"X-CSRF-TOKEN":b("csrf_access_token")}}).then((function(e){console.log(e),n=e})).catch((function(e){console.log(e.response.data),n=e.response.data}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(d.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.next=3,j.a.post("http://192.168.1.103/api/guest/add_guest",a,{withCredentials:!0,headers:{"X-CSRF-TOKEN":b("csrf_access_token")}}).then((function(e){console.log(e),n=e})).catch((function(e){console.log(e.response.data),n=e.response.data}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(d.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,e.next=3,j.a.get("http://192.168.1.103/api/guest/retrieve_payment_due",{withCredentials:!0,headers:{"X-CSRF-TOKEN":b("csrf_access_token")}}).then((function(e){console.log(e),a=e})).catch((function(e){console.log(e.response.data),a=e.response.data}));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(d.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.next=3,j.a.post("http://192.168.1.103/api/guest/remove_payment_due",a,{withCredentials:!0,headers:{"X-CSRF-TOKEN":b("csrf_access_token")}}).then((function(e){console.log(e),n=e})).catch((function(e){console.log(e.response.data),n=e.response.data}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=n(0);var w=function(){var e=Object(t.useState)(""),a=Object(c.a)(e,2),n=a[0],l=a[1],r=Object(t.useState)(""),s=Object(c.a)(r,2),o=s[0],u=s[1],d=Object(t.useState)(null),h=Object(c.a)(d,2),j=h[0],b=h[1];return j?Object(F.jsx)(i.a,{to:"/"}):Object(F.jsx)("div",{className:"card-wrapper",children:Object(F.jsxs)("div",{className:"card",children:[Object(F.jsx)("h1",{className:"center",children:"Log In"}),Object(F.jsxs)("form",{name:"login_form",onSubmit:function(e){e.preventDefault(),function(e){return f.apply(this,arguments)}({email:n,password:o}).then((function(e){b(e)}))},children:[Object(F.jsx)("label",{htmlFor:"email",children:"Email"}),Object(F.jsx)("input",{type:"email",name:"email",className:"field",required:!0,onChange:function(e){return l(e.target.value)}}),Object(F.jsx)("label",{htmlFor:"password",children:"Password"}),Object(F.jsx)("input",{type:"password",name:"password",className:"field",required:!0,onChange:function(e){return u(e.target.value)}}),Object(F.jsx)("p",{className:"error error--hidden"}),Object(F.jsx)("input",{type:"submit",value:"Log In",className:"btn"})]})]})})},S=(n(115),n(116),["btn--primary","btn--outline"]),q=["btn--medium","btn--large"],E=function(e){var a=e.children,n=e.type,t=e.onClick,l=e.buttonStyle,r=e.buttonSize,i=S.includes(l)?l:S[0],c=q.includes(r)?r:q[0];return Object(F.jsx)(s.b,{to:"/login",className:"btn-mobie",children:Object(F.jsx)("button",{className:"btn ".concat(i," ").concat(c),onClick:t,type:n,children:a})})};n(117);var I=function(){var e=Object(t.useState)(!1),a=Object(c.a)(e,2),n=a[0],l=a[1],r=Object(t.useState)(!0),i=Object(c.a)(r,2),o=i[0],u=i[1],d=function(){return l(!1)},h=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(t.useEffect)((function(){h()}),[]),window.addEventListener("resize",h),Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("nav",{className:"navbar",children:[Object(F.jsx)("div",{className:"navbar-container"}),Object(F.jsxs)(s.b,{to:"/",className:"navbar-logo",onClick:d,children:["Modern Place",Object(F.jsx)("i",{className:"fab fa-typo3"})]}),Object(F.jsx)("div",{className:"menu-icon",onClick:function(){return l(!n)},children:Object(F.jsx)("i",{className:n?"fas fa-times":"fas fa-bars"})}),Object(F.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(s.b,{to:"/maiantainance_log",className:"nav-links",onClick:d,children:"Maintainance log"})}),Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(s.b,{to:"/water_bill",className:"nav-links",onClick:d,children:"Water Bill"})}),Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(s.b,{to:"/electric_bill",className:"nav-links",onClick:d,children:"Electric Bill"})}),Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(s.b,{to:"/payment_due",className:"nav-links",onClick:d,children:"Payment Due"})}),Object(F.jsx)("li",{children:Object(F.jsx)(s.b,{to:"/login",className:"nav-links-mobile",onClick:p,children:"Sign Out"})})]}),o&&Object(F.jsx)(E,{buttonStyle:"btn--outline",onClick:p,children:"SIGN OUT"})]})})};n(118);function D(e){return e.trigger?Object(F.jsx)("div",{className:"popup",children:Object(F.jsxs)("div",{className:"popup-inner",children:[Object(F.jsx)("button",{className:"close-btn",onClick:function(){return e.setTrigger(!1)},children:"close"}),Object(F.jsxs)("p",{children:["Room Number: ",e.data._id]}),Object(F.jsxs)("p",{children:["status: ",e.data.status]}),Object(F.jsxs)("p",{children:["rent: ",e.data.rent]}),Object(F.jsxs)("p",{children:["deposit: ",e.data.deposit]}),""!==e.data.guest&&Object(F.jsxs)("p",{children:["guest citizenID: ",e.data.guest._id]}),""!==e.data.guest&&Object(F.jsxs)("p",{children:["guest: ",e.data.guest.first_name," ",e.data.guest.last_name]}),""!==e.data.guest&&Object(F.jsxs)("p",{children:["Date of Birth: ",e.data.guest.DoB]}),""!==e.data.guest&&Object(F.jsxs)("p",{children:["Check-In Date: ",e.data.guest.rooms[e.data.guest.rooms.length-1].check_in_date]}),""!==e.data.guest&&Object(F.jsx)("button",{className:"checkout-btn",onClick:function(){return function(e){return C.apply(this,arguments)}({roomid:e.data._id}).then((function(e){200===e.status&&window.location.reload()}))},children:"Check Out"}),""===e.data.guest&&Object(F.jsx)("button",{className:"checkout-btn",children:Object(F.jsx)(s.b,{to:"/check-in/"+e.data._id,className:"Links",children:"Check-In"})})]})}):""}n(119);var A=function(e){var a=e.RoomObj;console.log("room ".concat(a.status));var n=Object(t.useState)(!1),l=Object(c.a)(n,2),r=l[0],s=l[1],i=Object(t.useState)(null),o=Object(c.a)(i,2),u=o[0],d=o[1];return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("button",{className:"room room--".concat(a.status),onClick:function(){return function(e){return k.apply(this,arguments)}({room:a._id}).then((function(e){200===e.status?(d(e.data.data),s(!0)):(e.error&&alert(e.error),e.msg&&alert(e.msg))}))},children:a._id}),Object(F.jsx)(D,{trigger:r,setTrigger:s,data:u})]})},T=n(81),X=n.n(T),V={loop:!0,autoplay:!0,animationData:n(82),rendererSetting:{preserveAspectRatio:"xMidYMid slice"}},R=function(){return Object(F.jsx)("div",{style:{marginTop:"10rem"},children:Object(F.jsx)(X.a,{options:V,height:120,width:120})})},G=n(16);var K=function(){var e=Object(G.a)({initialValues:{building:"A",floor:"1"}}),a=Object(t.useState)(null),n=Object(c.a)(a,2),l=n[0],r=n[1];return Object(t.useEffect)((function(){r(null),function(e){return y.apply(this,arguments)}(e.values).then((function(e){200===e.status?r(e.data.data):(e.error&&alert(e.error),e.msg&&alert(e.msg))}))}),[e.values]),null===l?Object(F.jsx)(R,{Loading:R}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(I,{}),Object(F.jsxs)("div",{className:"card-wrapper2",children:[Object(F.jsx)("div",{children:"Dashboard"}),Object(F.jsxs)("select",{name:"building",id:"building",className:"field",onChange:e.handleChange,value:e.values.building,required:!0,children:[Object(F.jsx)("option",{value:"A",children:"A"}),Object(F.jsx)("option",{value:"B",children:"B"})]}),Object(F.jsxs)("select",{name:"floor",id:"floor",className:"field",onChange:e.handleChange,value:e.values.floor,required:!0,children:[Object(F.jsx)("option",{value:"1",children:"1"}),Object(F.jsx)("option",{value:"2",children:"2"}),Object(F.jsx)("option",{value:"3",children:"3"}),Object(F.jsx)("option",{value:"4",children:"4"}),Object(F.jsx)("option",{value:"5",children:"5"})]})]}),Object(F.jsx)("ul",{children:l.map((function(e){return Object(F.jsx)(A,{RoomObj:e},e._id)}))})]})},L=n(41),M=n(85),z=["component"];var J=function(e){var a=e.component,n=Object(M.a)(e,z),l=Object(t.useState)(null),r=Object(c.a)(l,2),s=r[0],o=r[1];return Object(t.useEffect)((function(){o(null),function(){return m.apply(this,arguments)}().then((function(e){o(e)}))}),[]),console.log(s),null===s?(console.log("hello"),Object(F.jsx)(R,{Loading:R})):(console.log(s),Object(F.jsx)(i.b,Object(L.a)(Object(L.a)({},n),{},{render:function(e){return s?Object(F.jsx)(a,Object(L.a)({},e)):Object(F.jsx)(i.a,{to:"/login/"})}})))};var P=function(){var e=Object(t.useState)(null),a=Object(c.a)(e,2),n=a[0],l=a[1],r=Object(t.useState)(null),s=Object(c.a)(r,2),o=s[0],u=s[1];Object(t.useEffect)((function(){u(null)}),[]);var d=Object(G.a)({initialValues:{roomid:"",code:"",date:"",cost:"",note:""},onSubmit:function(e){l(null),function(e){return O.apply(this,arguments)}(e).then((function(e){console.log(e),"error"in e?l(e.error):"msg"in e?l(e.msg):(alert("Success"),u(!0))}))}});return o?Object(F.jsx)(i.a,{to:"/"}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(I,{}),Object(F.jsx)("div",{className:"card-wrapper",children:Object(F.jsxs)("form",{name:"maintainance_form",onSubmit:d.handleSubmit,children:[Object(F.jsx)("label",{htmlFor:"roomId",children:"RoomId"}),Object(F.jsx)("input",{type:"text",name:"roomid",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.roomid,required:!0}),Object(F.jsx)("label",{htmlFor:"code",children:"Code"}),Object(F.jsx)("input",{type:"text",name:"code",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.code,required:!0}),Object(F.jsx)("label",{htmlFor:"date",children:"Date"}),Object(F.jsx)("input",{type:"date",name:"date",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.date,required:!0}),Object(F.jsx)("label",{htmlFor:"cost",children:"Cost"}),Object(F.jsx)("input",{type:"text",name:"cost",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.cost,required:!0}),Object(F.jsx)("label",{htmlFor:"note",children:"Notes"}),Object(F.jsx)("textarea",{rows:"4",cols:"50",name:"note",form:"Notes",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.note}),n?Object(F.jsx)("p",{className:"error",children:n}):null,Object(F.jsx)("input",{type:"submit",value:"Submit",className:"btn"})]})})]})};var W=function(){var e=Object(t.useState)(null),a=Object(c.a)(e,2),n=a[0],l=a[1],r=Object(t.useState)(null),s=Object(c.a)(r,2),o=s[0],u=s[1];Object(t.useEffect)((function(){u(null)}),[]);var d=Object(G.a)({initialValues:{date:"",building:"A",floor:"1",r01:"",r02:"",r03:"",r04:"",r05:"",r06:"",r07:"",r08:"",r09:"",r10:"",r11:"",r12:"",r13:"",r14:"",r15:""},onSubmit:function(e){l(null);var a={};if(e&&e.floor)for(var n in a.date=e.date,a.data=[],e)if("date"!==n&&"building"!==n&&"floor"!==n){if(""===e[n])break;var t={};t.roomid=e.building+e.floor+n.replace("r",""),t.unit=e[n],a.data.push(t),console.log(a)}(function(e){return g.apply(this,arguments)})(a).then((function(e){"error"in e?l(e.error):"msg"in e?l(e.msg):(alert("Success"),u(!0))}))}});return o?Object(F.jsx)(i.a,{to:"/"}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(I,{}),Object(F.jsx)("div",{className:"card-wrapper",children:Object(F.jsxs)("form",{name:"electricbill_form",onSubmit:d.handleSubmit,children:[Object(F.jsx)("label",{htmlFor:"date",children:"Electric Bill"}),Object(F.jsx)("label",{htmlFor:"date",children:"Date"}),Object(F.jsx)("input",{type:"date",name:"date",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.date,required:!0}),Object(F.jsx)("label",{htmlFor:"building",children:"building"}),Object(F.jsxs)("select",{name:"building",id:"building",className:"field",onChange:d.handleChange,value:d.values.building,required:!0,children:[Object(F.jsx)("option",{value:"A",children:"A"}),Object(F.jsx)("option",{value:"B",children:"B"})]}),Object(F.jsx)("label",{htmlFor:"floor",children:"floor"}),Object(F.jsxs)("select",{name:"floor",id:"floor",className:"field",onChange:d.handleChange,value:d.values.floor,required:!0,children:[Object(F.jsx)("option",{value:"1",children:"1"}),Object(F.jsx)("option",{value:"2",children:"2"}),Object(F.jsx)("option",{value:"3",children:"3"}),Object(F.jsx)("option",{value:"4",children:"4"}),Object(F.jsx)("option",{value:"5",children:"5"})]}),Object(F.jsxs)("label",{htmlFor:"01",children:[d.values.building+d.values.floor,"01"]}),Object(F.jsx)("input",{type:"number",name:"r01",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r01,required:!0}),Object(F.jsxs)("label",{htmlFor:"02",children:[d.values.building+d.values.floor,"02"]}),Object(F.jsx)("input",{type:"number",name:"r02",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r02,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"03"]}),Object(F.jsx)("input",{type:"number",name:"r03",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r03,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"04"]}),Object(F.jsx)("input",{type:"number",name:"r04",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r04,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"05"]}),Object(F.jsx)("input",{type:"number",name:"r05",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r05,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"06"]}),Object(F.jsx)("input",{type:"number",name:"r06",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r06,required:!0}),"1"!==d.values.floor?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"07"]}),Object(F.jsx)("input",{type:"number",name:"r07",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r07,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"08"]}),Object(F.jsx)("input",{type:"number",name:"r08",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r08,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"09"]}),Object(F.jsx)("input",{type:"number",name:"r09",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r09,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"10"]}),Object(F.jsx)("input",{type:"number",name:"r10",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r10,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"11"]}),Object(F.jsx)("input",{type:"number",name:"r11",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r11,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"12"]}),Object(F.jsx)("input",{type:"number",name:"r12",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r12,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"13"]}),Object(F.jsx)("input",{type:"number",name:"r13",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r13,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"14"]}),Object(F.jsx)("input",{type:"number",name:"r14",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r14,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"15"]}),Object(F.jsx)("input",{type:"number",name:"r15",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r15,required:!0})]}):null,n?Object(F.jsx)("p",{className:"error",children:n}):null,Object(F.jsx)("input",{type:"submit",value:"Submit",className:"btn"})]})})]})};var U=function(){var e=Object(t.useState)(null),a=Object(c.a)(e,2),n=a[0],l=a[1],r=Object(t.useState)(null),s=Object(c.a)(r,2),o=s[0],u=s[1];Object(t.useEffect)((function(){u(null)}),[]);var d=Object(G.a)({initialValues:{date:"",building:"A",floor:"1",r01:"",r02:"",r03:"",r04:"",r05:"",r06:"",r07:"",r08:"",r09:"",r10:"",r11:"",r12:"",r13:"",r14:"",r15:""},onSubmit:function(e){l(null);var a={};if(e&&e.floor)for(var n in a.date=e.date,a.data=[],e)if("date"!==n&&"building"!==n&&"floor"!==n){if(""===e[n])break;var t={};t.roomid=e.building+e.floor+n.replace("r",""),t.unit=e[n],a.data.push(t)}(function(e){return v.apply(this,arguments)})(a).then((function(e){"error"in e?l(e.error):"msg"in e?l(e.msg):(alert("Success"),u(!0))}))}});return o?Object(F.jsx)(i.a,{to:"/"}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(I,{}),Object(F.jsx)("div",{className:"card-wrapper",children:Object(F.jsxs)("form",{name:"waterbill_form",onSubmit:d.handleSubmit,children:[Object(F.jsx)("label",{htmlFor:"date",children:"Water Bill"}),Object(F.jsx)("label",{htmlFor:"date",children:"Date"}),Object(F.jsx)("input",{type:"date",name:"date",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.date,required:!0}),Object(F.jsx)("label",{htmlFor:"building",children:"building"}),Object(F.jsxs)("select",{name:"building",id:"building",className:"field",onChange:d.handleChange,value:d.values.building,required:!0,children:[Object(F.jsx)("option",{value:"A",children:"A"}),Object(F.jsx)("option",{value:"B",children:"B"})]}),Object(F.jsx)("label",{htmlFor:"floor",children:"floor"}),Object(F.jsxs)("select",{name:"floor",id:"floor",className:"field",onChange:d.handleChange,value:d.values.floor,required:!0,children:[Object(F.jsx)("option",{value:"1",children:"1"}),Object(F.jsx)("option",{value:"2",children:"2"}),Object(F.jsx)("option",{value:"3",children:"3"}),Object(F.jsx)("option",{value:"4",children:"4"}),Object(F.jsx)("option",{value:"5",children:"5"})]}),Object(F.jsxs)("label",{htmlFor:"01",children:[d.values.building+d.values.floor,"01"]}),Object(F.jsx)("input",{type:"number",name:"r01",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r01,required:!0}),Object(F.jsxs)("label",{htmlFor:"02",children:[d.values.building+d.values.floor,"02"]}),Object(F.jsx)("input",{type:"number",name:"r02",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r02,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"03"]}),Object(F.jsx)("input",{type:"number",name:"r03",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r03,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"04"]}),Object(F.jsx)("input",{type:"number",name:"r04",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r04,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"05"]}),Object(F.jsx)("input",{type:"number",name:"r05",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r05,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"06"]}),Object(F.jsx)("input",{type:"number",name:"r06",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r06,required:!0}),"1"!==d.values.floor?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"07"]}),Object(F.jsx)("input",{type:"number",name:"r07",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r07,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"08"]}),Object(F.jsx)("input",{type:"number",name:"r08",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r08,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"09"]}),Object(F.jsx)("input",{type:"number",name:"r09",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r09,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"10"]}),Object(F.jsx)("input",{type:"number",name:"r10",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r10,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"11"]}),Object(F.jsx)("input",{type:"number",name:"r11",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r11,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"12"]}),Object(F.jsx)("input",{type:"number",name:"r12",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r12,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"13"]}),Object(F.jsx)("input",{type:"number",name:"r13",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r13,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"14"]}),Object(F.jsx)("input",{type:"number",name:"r14",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r14,required:!0}),Object(F.jsxs)("label",{htmlFor:"roomId",children:[d.values.building+d.values.floor,"15"]}),Object(F.jsx)("input",{type:"number",name:"r15",className:"field",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.r15,required:!0})]}):null,n?Object(F.jsx)("p",{className:"error",children:n}):null,Object(F.jsx)("input",{type:"submit",value:"Submit",className:"btn"})]})})]})};function Y(e){var a=Object(t.useState)(null),n=Object(c.a)(a,2),l=n[0],r=n[1],s=Object(t.useState)(null),o=Object(c.a)(s,2),u=o[0],d=o[1];Object(t.useEffect)((function(){d(null)}),[]);var h=Object(G.a)({initialValues:{id:"",roomid:e.match.params.id,first_name:"",last_name:"",DoB:"",check_in_date:"",check_out_date:"",status:"Monthly",rent:0,deposit:0},onSubmit:function(e){(function(e){return _.apply(this,arguments)})(e).then((function(e){"error"in e?r(e.error):"msg"in e?r(e.msg):(alert("Success"),d(!0))}))}});return u?Object(F.jsx)(i.a,{to:"/"}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(I,{}),Object(F.jsx)("div",{className:"card-wrapper",children:Object(F.jsxs)("form",{name:"checkin",onSubmit:h.handleSubmit,children:[Object(F.jsxs)("label",{htmlFor:"roomId",children:["Check-in for ",e.match.params.id]}),Object(F.jsx)("label",{htmlFor:"roomId",children:'Citizen Id "X-XXXX-XXXXX-XX-X"'}),Object(F.jsx)("input",{type:"text",name:"id",className:"field",onChange:h.handleChange,onBlur:h.handleBlur,value:h.values.id,required:!0}),Object(F.jsx)("label",{htmlFor:"first_name",children:"First Name"}),Object(F.jsx)("input",{type:"text",name:"first_name",className:"field",onChange:h.handleChange,onBlur:h.handleBlur,value:h.values.first_name,required:!0}),Object(F.jsx)("label",{htmlFor:"last_name",children:"Last Name"}),Object(F.jsx)("input",{type:"text",name:"last_name",className:"field",onChange:h.handleChange,onBlur:h.handleBlur,value:h.values.last_name,required:!0}),Object(F.jsx)("label",{htmlFor:"DoB",children:"Date of Birth"}),Object(F.jsx)("input",{type:"date",name:"DoB",className:"field",onChange:h.handleChange,onBlur:h.handleBlur,value:h.values.DoB,required:!0}),Object(F.jsx)("label",{htmlFor:"check_in_date",children:"Check-In Date"}),Object(F.jsx)("input",{type:"date",name:"check_in_date",className:"field",onChange:h.handleChange,onBlur:h.handleBlur,value:h.values.check_in_date,required:!0}),Object(F.jsx)("label",{htmlFor:"check_in_date",children:"Check-Out Date(optional)"}),Object(F.jsx)("input",{type:"date",name:"check_out_date",className:"field",onChange:h.handleChange,onBlur:h.handleBlur,value:h.values.check_out_date}),Object(F.jsx)("label",{htmlFor:"rent",children:"Rent"}),Object(F.jsx)("input",{type:"number",name:"rent",className:"field",onChange:h.handleChange,onBlur:h.handleBlur,value:h.values.rent,required:!0}),Object(F.jsx)("label",{htmlFor:"deposit",children:"Deposit"}),Object(F.jsx)("input",{type:"number",name:"deposit",className:"field",onChange:h.handleChange,onBlur:h.handleBlur,value:h.values.deposit,required:!0}),Object(F.jsx)("label",{htmlFor:"check_in_date",children:"Rent Type"}),Object(F.jsxs)("select",{name:"status",className:"field",id:"status",onChange:h.handleChange,value:h.values.status,required:!0,children:[Object(F.jsx)("option",{value:"Monthly",children:"Monthly"}),Object(F.jsx)("option",{value:"Daily",children:"Daily"})]}),l?Object(F.jsx)("p",{className:"error",children:l}):null,Object(F.jsx)("input",{type:"submit",value:"Submit",className:"btn"})]})})]})}n(169);function H(){var e=Object(t.useState)(null),a=Object(c.a)(e,2),n=a[0],l=a[1];return Object(t.useEffect)((function(){l(null),function(){return B.apply(this,arguments)}().then((function(e){200===e.status&&(l(e.data.data),console.log(e.data.data))}))}),[]),null===n?Object(F.jsx)(R,{Loading:R}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(I,{}),Object(F.jsx)("ul",{children:n.map((function(e){return Object(F.jsxs)("div",{className:"container",children:[Object(F.jsxs)("p",{className:"content",children:[" RoomId: ",e.roomid," "]}),Object(F.jsxs)("p",{className:"content",children:[" Amount: ",e.amount," "]}),Object(F.jsxs)("p",{className:"content",children:[" Name: ",e.first_name," ",e.last_name," "]}),Object(F.jsxs)("p",{className:"content",children:[" Date: ",e.date," "]}),Object(F.jsx)("button",{className:"checkout-btn",onClick:function(){return function(e){return N.apply(this,arguments)}(e).then((function(e){200===e.status?window.location.reload():(e.error&&alert(e.error),e.msg&&alert(e.msg))}))},children:" Remove "})]},e.roomid+e.date)}))})]})}var Q=function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(s.a,{children:Object(F.jsxs)(i.d,{children:[Object(F.jsx)(i.b,{path:"/login",exact:!0,component:w}),Object(F.jsx)(J,{path:"/",exact:!0,component:K}),Object(F.jsx)(J,{path:"/maiantainance_log",exact:!0,component:P}),Object(F.jsx)(J,{path:"/electric_bill",exact:!0,component:W}),Object(F.jsx)(J,{path:"/water_bill",exact:!0,component:U}),Object(F.jsx)(J,{path:"/check-in/:id",component:Y}),Object(F.jsx)(J,{path:"/payment_due",component:H})]})})})};r.a.render(Object(F.jsx)(Q,{}),document.getElementById("root"))},82:function(e){e.exports=JSON.parse('{"v":"5.1.15","fr":60,"ip":0,"op":120,"w":300,"h":300,"nm":"Composi\xe7\xe3o 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Camada de forma 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[1080]},{"t":180}],"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[-14.604,-15.104,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[106.793,106.793],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Caminho da elipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11,"ix":5},"lc":2,"lj":1,"ml":4,"nm":"Tra\xe7ado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-14.604,-15.104],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Elipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":60,"s":[0],"e":[67]},{"t":119}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[3],"e":[70]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":60,"s":[70],"e":[70]},{"t":119}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Aparar caminhos 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Camada de forma 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[1080]},{"t":180}],"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[-14.604,-15.104,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[106.793,106.793],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Caminho da elipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":4,"nm":"Tra\xe7ado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-14.604,-15.104],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Elipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":20,"s":[0],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":69.916,"s":[0],"e":[67]},{"t":119}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":20,"s":[3],"e":[70]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":69.916,"s":[70],"e":[70]},{"t":119}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Aparar caminhos 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Camada de forma 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[1080]},{"t":180}],"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[-14.604,-15.104,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[106.793,106.793],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Caminho da elipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":4,"nm":"Tra\xe7ado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-14.604,-15.104],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Elipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":41,"s":[0],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":80.328,"s":[0],"e":[67]},{"t":119}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":41,"s":[3],"e":[70]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":80.328,"s":[70],"e":[70]},{"t":119}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Aparar caminhos 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Camada de forma 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[1080]},{"t":180}],"ix":10},"p":{"a":0,"k":[150,150,0],"ix":2},"a":{"a":0,"k":[-14.604,-15.104,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[106.793,106.793],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Caminho da elipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":4,"nm":"Tra\xe7ado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-14.604,-15.104],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Elipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":54,"s":[0],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":86.773,"s":[0],"e":[67]},{"t":119}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":54,"s":[3],"e":[70]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":86.773,"s":[70],"e":[70]},{"t":119}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Aparar caminhos 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":900,"st":0,"bm":0}],"markers":[]}')},90:function(e,a,n){}},[[170,1,2]]]);
//# sourceMappingURL=main.2ccde289.chunk.js.map