(this["webpackJsonpconsultas-react"]=this["webpackJsonpconsultas-react"]||[]).push([[0],{59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),i=(n(59),n(60),n(19)),s=n(10),l=(n(61),n.p+"static/media/logoD.5aa0a60a.png"),u=n(98),j=n(99),d=n(32),h=n(17),b=n(41),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=Object(a.useState)(e),o=Object(b.a)(n,2),r=o[0],c=o[1],i=Object(a.useState)({}),s=Object(b.a)(i,2),l=s[0],u=s[1],j=function(e){console.log("change: ",e.target.value),c(Object(h.a)(Object(h.a)({},r),{},Object(d.a)({},e.target.name,e.target.value)))};Object(a.useEffect)((function(){u(t(r))}),[r]);var p=function(){};return{formu:r,errors:l,handleChange:j,handleBlur:p}},O=n(3),f=function(){var e=Object(s.g)(),t=p({user:"",pass:""},(function(e){var t={};return e.user.trim()||(t.user="El campo usuario es obligatorio."),e.pass.trim()||(t.pass="El campo contrase\xf1a es obligatorio."),t})),n=t.formu,a=t.errors,o=t.handleChange,r=n.user,c=n.pass;return Object(O.jsx)("section",{className:"login",children:Object(O.jsxs)("aside",{className:"login-content",children:[Object(O.jsx)("img",{src:l,title:"logo",alt:"logo"}),Object(O.jsx)("h3",{children:"MI CUENTA"}),Object(O.jsxs)("form",{autoComplete:"off",noValidate:!0,onSubmit:function(e){e.preventDefault(),console.log("formu: ",n)},children:[Object(O.jsx)(u.a,{onChange:o,value:r,name:"user",error:!!(null===a||void 0===a?void 0:a.user),helperText:null===a||void 0===a?void 0:a.user,label:"Usuario",variant:"outlined",size:"small",fullWidth:!0}),Object(O.jsx)(u.a,{onChange:o,value:c,name:"pass",error:!!(null===a||void 0===a?void 0:a.pass),helperText:null===a||void 0===a?void 0:a.pass,label:"Contrase\xf1a",variant:"outlined",size:"small",fullWidth:!0}),Object(O.jsx)(j.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Entrar"}),Object(O.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){return e.push("/auth/register")},fullWidth:!0,children:"Registrarse"}),Object(O.jsx)(j.a,{variant:"outlined",color:"primary",onClick:function(){return e.push("/auth/recover")},fullWidth:!0,children:"Recuperar Contrase\xf1a"})]})]})})},m=function(){var e=Object(s.g)(),t=p({pass:""},(function(e){return{}})),n=t.formu,a=t.errors,o=t.handleChange,r=n.pass;return Object(O.jsx)("section",{className:"login",children:Object(O.jsxs)("aside",{className:"login-content",children:[Object(O.jsx)("img",{src:l,title:"logo",alt:"logo"}),Object(O.jsx)("h3",{children:"RECUPERAR CONTRASE\xd1A"}),Object(O.jsxs)("form",{autoComplete:"off",noValidate:!0,onSubmit:function(e){e.preventDefault(),console.log("formu: ",n)},children:[Object(O.jsx)(u.a,{onChange:o,value:r,name:"pass",error:null===a||void 0===a?void 0:a.pass,helperText:null===a||void 0===a?void 0:a.pass,label:"Correo",variant:"outlined",size:"small",fullWidth:!0}),Object(O.jsx)(j.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Recuperar"}),Object(O.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){return e.push("/auth/login")},fullWidth:!0,children:"Login"})]})]})})},v=function(){var e=Object(s.g)(),t=p({user:"",pass:"",pass2:""},(function(e){return{}})),n=t.formu,a=t.errors,o=t.handleChange,r=n.user,c=n.pass,i=n.pass2;return Object(O.jsx)("section",{className:"login",children:Object(O.jsxs)("aside",{className:"login-content",children:[Object(O.jsx)("img",{src:l,title:"logo",alt:"logo"}),Object(O.jsx)("h3",{children:"REGISTRO"}),Object(O.jsxs)("form",{autoComplete:"off",noValidate:!0,onSubmit:function(e){e.preventDefault(),console.log("formu: ",n)},children:[Object(O.jsx)(u.a,{onChange:o,value:r,name:"user",error:null===a||void 0===a?void 0:a.user,helperText:null===a||void 0===a?void 0:a.user,label:"Usuario",variant:"outlined",size:"small",fullWidth:!0}),Object(O.jsx)(u.a,{onChange:o,value:c,name:"pass",error:null===a||void 0===a?void 0:a.pass,helperText:null===a||void 0===a?void 0:a.pass,label:"Contrase\xf1a",variant:"outlined",size:"small",fullWidth:!0}),Object(O.jsx)(u.a,{onChange:o,value:i,name:"pass2",error:null===a||void 0===a?void 0:a.pass2,helperText:null===a||void 0===a?void 0:a.pass2,label:"Repetir Contrase\xf1a",variant:"outlined",size:"small",fullWidth:!0}),Object(O.jsx)(j.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Registrar"}),Object(O.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){return e.push("/auth/login")},fullWidth:!0,children:"Login"})]})]})})},x=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(s.d,{children:[Object(O.jsx)(s.b,{exact:!0,path:"/auth/login",component:f}),Object(O.jsx)(s.b,{exact:!0,path:"/auth/register",component:v}),Object(O.jsx)(s.b,{exact:!0,path:"/auth/recover",component:m}),Object(O.jsx)(s.a,{to:"/auth/login"})]})})},g=function(){return Object(O.jsx)("section",{className:"dashboard",children:"DASHBOARD"})},C=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(s.d,{children:[Object(O.jsx)(s.b,{exact:!0,path:"/",component:g}),Object(O.jsx)(s.a,{to:"/"})]})})},W=n(37),A=["isAuthenticated","component"],R=function(e){var t=e.isAuthenticated,n=e.component,a=Object(W.a)(e,A);return Object(O.jsx)(s.b,Object(h.a)(Object(h.a)({},a),{},{component:function(e){return t?Object(O.jsx)(n,Object(h.a)({},e)):Object(O.jsx)(s.a,{to:"/auth"})}}))},y=["isAuthenticated","component"],T=function(e){var t=e.isAuthenticated,n=e.component,a=Object(W.a)(e,y);return Object(O.jsx)(s.b,Object(h.a)(Object(h.a)({},a),{},{component:function(e){return t?Object(O.jsx)(s.a,{to:"/"}):Object(O.jsx)(n,Object(h.a)({},e))}}))},E=function(){return Object(O.jsx)(i.a,{children:Object(O.jsx)("div",{children:Object(O.jsxs)(s.d,{children:[Object(O.jsx)(T,{isAuthenticated:false,path:"/auth",component:x}),Object(O.jsx)(R,{isAuthenticated:false,path:"/",component:C}),Object(O.jsx)(s.a,{to:"/auth"})]})})})};var S=function(){return Object(O.jsx)(E,{})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};c.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),N()}},[[68,1,2]]]);
//# sourceMappingURL=main.9103af5a.chunk.js.map