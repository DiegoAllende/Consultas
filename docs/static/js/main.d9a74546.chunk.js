(this["webpackJsonpconsultas-react"]=this["webpackJsonpconsultas-react"]||[]).push([[0],{80:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(10),r=n.n(i),l=(n(80),n(81),n(27)),c=n(2),s=Object(a.createContext)(),u={uid:null,checking:!0,logged:!1,name:null,email:null},j=function(e){var t=e.children,n=Object(a.useState)(u),o=Object(l.a)(n,2),i=o[0],r=o[1];return Object(c.jsx)(s.Provider,{value:{auth:i,login:function(e){return r({uid:null,checking:!1,logged:!0,name:e.user,email:e.pass}),localStorage.setItem("dataUSer",JSON.stringify(e)),!0},logout:function(){localStorage.removeItem("dataUSer"),r(u)}},children:t})},d=n(14),b=n(11),h=(n(83),n(127)),O=n(122),x=n(48),p=n(21),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=Object(a.useState)(e),o=Object(l.a)(n,2),i=o[0],r=o[1],c=Object(a.useState)({}),s=Object(l.a)(c,2),u=s[0],j=s[1],d=function(e){r(Object(p.a)(Object(p.a)({},i),{},Object(x.a)({},e.target.name,e.target.value)))};return Object(a.useEffect)((function(){j(t(i))}),[i]),{formu:i,errors:u,handleChange:d}},g=function(){var e=Object(b.g)(),t=Object(a.useContext)(s).login,n=m({user:"",pass:""},(function(e){var t={};return e.user.trim()||(t.user="El campo usuario es obligatorio."),e.pass.trim()||(t.pass="El campo contrase\xf1a es obligatorio."),t})),o=n.formu,i=n.errors,r=n.handleChange,l=o.user,u=o.pass;return Object(c.jsx)("section",{className:"login",style:{background:"no-repeat center/cover url(./assets/img/login.jpg)"},children:Object(c.jsxs)("aside",{className:"login-content",children:[Object(c.jsx)("img",{src:"./assets/img/logo.png",title:"logo public",alt:"log2o"}),Object(c.jsx)("h3",{children:"MI CUENTA"}),Object(c.jsxs)("form",{autoComplete:"off",noValidate:!0,onSubmit:function(e){e.preventDefault(),console.log("formu: ",o),t(o)},children:[Object(c.jsx)(h.a,{onChange:r,value:l,name:"user",error:!!(null===i||void 0===i?void 0:i.user),helperText:null===i||void 0===i?void 0:i.user,label:"Usuario",variant:"outlined",size:"small",fullWidth:!0}),Object(c.jsx)(h.a,{onChange:r,value:u,name:"pass",error:!!(null===i||void 0===i?void 0:i.pass),helperText:null===i||void 0===i?void 0:i.pass,label:"Contrase\xf1a",variant:"outlined",size:"small",fullWidth:!0}),Object(c.jsx)(O.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Entrar"}),Object(c.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){return e.push("/auth/register")},fullWidth:!0,children:"Registrarse"}),Object(c.jsx)(O.a,{variant:"outlined",color:"primary",onClick:function(){return e.push("/auth/recover")},fullWidth:!0,children:"Recuperar Contrase\xf1a"})]})]})})},v=function(){var e=Object(b.g)(),t=m({pass:""},(function(e){return{}})),n=t.formu,a=t.errors,o=t.handleChange,i=n.pass;return Object(c.jsx)("section",{className:"login",style:{background:"no-repeat center/cover url(./assets/img/login.jpg)"},children:Object(c.jsxs)("aside",{className:"login-content",children:[Object(c.jsx)("img",{src:"./assets/img/logo.png",title:"logo",alt:"logo"}),Object(c.jsx)("h3",{children:"RECUPERAR CONTRASE\xd1A"}),Object(c.jsxs)("form",{autoComplete:"off",noValidate:!0,onSubmit:function(e){e.preventDefault(),console.log("formu: ",n)},children:[Object(c.jsx)(h.a,{onChange:o,value:i,name:"pass",error:null===a||void 0===a?void 0:a.pass,helperText:null===a||void 0===a?void 0:a.pass,label:"Correo",variant:"outlined",size:"small",fullWidth:!0}),Object(c.jsx)(O.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Recuperar"}),Object(c.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){return e.push("/auth/login")},fullWidth:!0,children:"Login"})]})]})})},f=function(){var e=Object(b.g)(),t=m({user:"",pass:"",pass2:""},(function(e){return{}})),n=t.formu,a=t.errors,o=t.handleChange,i=n.user,r=n.pass,l=n.pass2;return Object(c.jsx)("section",{className:"login",style:{background:"no-repeat center/cover url(./assets/img/login.jpg)"},children:Object(c.jsxs)("aside",{className:"login-content",children:[Object(c.jsx)("img",{src:"./assets/img/logo.png",title:"logo",alt:"logo"}),Object(c.jsx)("h3",{children:"REGISTRO"}),Object(c.jsxs)("form",{autoComplete:"off",noValidate:!0,onSubmit:function(e){e.preventDefault(),console.log("formu: ",n)},children:[Object(c.jsx)(h.a,{onChange:o,value:i,name:"user",error:null===a||void 0===a?void 0:a.user,helperText:null===a||void 0===a?void 0:a.user,label:"Usuario",variant:"outlined",size:"small",fullWidth:!0}),Object(c.jsx)(h.a,{onChange:o,value:r,name:"pass",error:null===a||void 0===a?void 0:a.pass,helperText:null===a||void 0===a?void 0:a.pass,label:"Contrase\xf1a",variant:"outlined",size:"small",fullWidth:!0}),Object(c.jsx)(h.a,{onChange:o,value:l,name:"pass2",error:null===a||void 0===a?void 0:a.pass2,helperText:null===a||void 0===a?void 0:a.pass2,label:"Repetir Contrase\xf1a",variant:"outlined",size:"small",fullWidth:!0}),Object(c.jsx)(O.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Registrar"}),Object(c.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){return e.push("/auth/login")},fullWidth:!0,children:"Login"})]})]})})},C=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(b.d,{children:[Object(c.jsx)(b.b,{exact:!0,path:"/auth/login",component:g}),Object(c.jsx)(b.b,{exact:!0,path:"/auth/register",component:f}),Object(c.jsx)(b.b,{exact:!0,path:"/auth/recover",component:v}),Object(c.jsx)(b.a,{to:"/auth/login"})]})})},k=n(123),y=n(124),S=n(129),T=n(125),A=n(65),W=n(130),R=n(64),N=n.n(R),E=function(){var e=Object(a.useContext)(s).logout,t=o.a.useState(null),n=Object(l.a)(t,2),i=n[0],r=n[1],u=o.a.useState(null),j=Object(l.a)(u,2),b=j[0],h=j[1],x=o.a.useState(null),p=Object(l.a)(x,2),m=p[0],g=p[1],v=function(){r(null)},f=function(){h(null)},C=function(){g(null)};return Object(c.jsxs)("div",{children:[Object(c.jsx)(k.a,{position:"static",children:Object(c.jsxs)(y.a,{children:[Object(c.jsxs)(S.a,{display:"flex",sx:{flexGrow:1,gap:10,alignItems:"center"},children:[Object(c.jsx)(T.a,{size:"medium",edge:"start",color:"inherit",sx:{mr:2},children:Object(c.jsx)(N.a,{})}),Object(c.jsx)(O.a,{"aria-controls":"simple-menu1","aria-haspopup":"true",color:"inherit",onClick:function(e){r(e.currentTarget)},children:"Pacientes"}),Object(c.jsx)(O.a,{"aria-controls":"simple-menu2","aria-haspopup":"true",color:"inherit",onClick:function(e){h(e.currentTarget)},children:"Pagos"}),Object(c.jsx)(O.a,{"aria-controls":"simple-menu3","aria-haspopup":"true",color:"inherit",onClick:function(e){g(e.currentTarget)},children:"Mantenimiento"})]}),Object(c.jsx)(O.a,{color:"inherit",onClick:e,children:"LogOut"})]})}),Object(c.jsxs)(A.a,{id:"simple-menu1",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:v,children:[Object(c.jsx)(W.a,{onClick:v,children:Object(c.jsx)(d.b,{to:"/",children:"Registro de atenci\xf3n"})}),Object(c.jsx)(W.a,{onClick:v,children:Object(c.jsx)(d.b,{to:"/",children:"Registro de especialistas"})}),Object(c.jsx)(W.a,{onClick:v,children:Object(c.jsx)(d.b,{to:"/",children:"Registro de especialistas"})})]}),Object(c.jsxs)(A.a,{id:"simple-menu2",anchorEl:b,keepMounted:!0,open:Boolean(b),onClose:f,children:[Object(c.jsx)(W.a,{onClick:f,children:Object(c.jsx)(d.b,{to:"/",children:"Pendientes de Pago"})}),Object(c.jsx)(W.a,{onClick:f,children:Object(c.jsx)(d.b,{to:"/",children:"Pagados"})})]}),Object(c.jsxs)(A.a,{id:"simple-menu3",anchorEl:m,keepMounted:!0,open:Boolean(m),onClose:C,children:[Object(c.jsx)(W.a,{onClick:C,children:Object(c.jsx)(d.b,{to:"/usuario",children:"Usuarios"})}),Object(c.jsx)(W.a,{onClick:C,children:Object(c.jsx)(d.b,{to:"/forma-pago",children:"Forma de Pago"})})]})]})},z=function(){return Object(c.jsx)("section",{className:"dashboard",children:"DASHBOARD"})},P=function(e){var t=e.title;return Object(c.jsx)("section",{className:"section-titulo",children:Object(c.jsx)("h2",{children:t})})},D=n(126),U=function(){var e=m({user:"",pass:""},(function(e){return{}})),t=e.formu,n=e.errors,a=e.handleChange,o=t.user,i=t.pass,r=function(e){e.preventDefault(),console.log("formu: ",t)};return Object(c.jsxs)("div",{children:[Object(c.jsx)(P,{title:"FORMA DE PAGO"}),Object(c.jsx)("section",{children:Object(c.jsxs)("form",{autoComplete:"off",noValidate:!0,onSubmit:r,children:[Object(c.jsxs)(D.a,{container:!0,spacing:10,children:[Object(c.jsx)(D.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(h.a,{onChange:a,value:o,name:"user",error:!!(null===n||void 0===n?void 0:n.user),helperText:null===n||void 0===n?void 0:n.user,label:"Forma de Pago",variant:"outlined",size:"small",fullWidth:!0})}),Object(c.jsx)(D.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(h.a,{onChange:a,value:i,name:"pass",error:!!(null===n||void 0===n?void 0:n.pass),helperText:null===n||void 0===n?void 0:n.pass,label:"Descripci\xf3n",variant:"outlined",size:"small",fullWidth:!0})})]}),Object(c.jsxs)(D.a,{container:!0,justifyContent:"center",spacing:4,children:[Object(c.jsx)(D.a,{item:!0,children:Object(c.jsx)(O.a,{variant:"contained",color:"primary",children:"Nuevo"})}),Object(c.jsx)(D.a,{item:!0,children:Object(c.jsx)(O.a,{onClick:r,variant:"outlined",color:"primary",children:"Guardar"})})]})]})}),Object(c.jsx)("section",{children:Object(c.jsx)("h2",{children:"TABLA"})})]})},B=function(){var e=m({nombre:"",apellido:"",user:"",pass:""},(function(e){return{}})),t=e.formu,n=e.errors,a=e.handleChange,o=t.nombre,i=t.apellido,r=t.user,l=t.pass,s=function(e){e.preventDefault(),console.log("formu: ",t)};return Object(c.jsxs)("div",{children:[Object(c.jsx)(P,{title:"USUARIO"}),Object(c.jsx)("section",{children:Object(c.jsxs)("form",{autoComplete:"off",noValidate:!0,onSubmit:s,children:[Object(c.jsxs)(D.a,{container:!0,spacing:2,children:[Object(c.jsx)(D.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(h.a,{onChange:a,value:o,name:"nombre",error:!!(null===n||void 0===n?void 0:n.nombre),helperText:null===n||void 0===n?void 0:n.nombre,label:"Nombres",variant:"outlined",size:"small",fullWidth:!0})}),Object(c.jsx)(D.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(h.a,{onChange:a,value:i,name:"apellido",error:!!(null===n||void 0===n?void 0:n.apellido),helperText:null===n||void 0===n?void 0:n.apellido,label:"Apellidos",variant:"outlined",size:"small",fullWidth:!0})}),Object(c.jsx)(D.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(h.a,{onChange:a,value:r,name:"user",error:!!(null===n||void 0===n?void 0:n.user),helperText:null===n||void 0===n?void 0:n.user,label:"Usuario",variant:"outlined",size:"small",fullWidth:!0})}),Object(c.jsx)(D.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(h.a,{onChange:a,value:l,name:"pass",error:!!(null===n||void 0===n?void 0:n.pass),helperText:null===n||void 0===n?void 0:n.pass,label:"Contrase\xf1a",variant:"outlined",size:"small",fullWidth:!0})})]}),Object(c.jsxs)(D.a,{container:!0,justifyContent:"center",spacing:4,children:[Object(c.jsx)(D.a,{item:!0,children:Object(c.jsx)(O.a,{variant:"contained",color:"primary",children:"Nuevo"})}),Object(c.jsx)(D.a,{item:!0,children:Object(c.jsx)(O.a,{onClick:s,variant:"outlined",color:"primary",children:"Guardar"})})]})]})}),Object(c.jsx)("section",{children:Object(c.jsx)("h2",{children:"TABLA"})})]})},I=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(E,{}),Object(c.jsx)("main",{className:"content-pages",children:Object(c.jsxs)(b.d,{children:[Object(c.jsx)(b.b,{exact:!0,path:"/",component:z}),Object(c.jsx)(b.b,{exact:!0,path:"/usuario",component:B}),Object(c.jsx)(b.b,{exact:!0,path:"/forma-pago",component:U}),Object(c.jsx)(b.a,{to:"/"})]})})]})},F=n(52),L=["isAuthenticated","component"],M=function(e){var t=e.isAuthenticated,n=e.component,a=Object(F.a)(e,L);return Object(c.jsx)(b.b,Object(p.a)(Object(p.a)({},a),{},{component:function(e){return t?Object(c.jsx)(n,Object(p.a)({},e)):Object(c.jsx)(b.a,{to:"/auth"})}}))},G=["isAuthenticated","component"],V=function(e){var t=e.isAuthenticated,n=e.component,a=Object(F.a)(e,G);return Object(c.jsx)(b.b,Object(p.a)(Object(p.a)({},a),{},{component:function(e){return t?Object(c.jsx)(b.a,{to:"/"}):Object(c.jsx)(n,Object(p.a)({},e))}}))},w=function(){var e=Object(a.useContext)(s).auth;return Object(c.jsx)(d.a,{children:Object(c.jsx)("div",{children:Object(c.jsxs)(b.d,{children:[Object(c.jsx)(V,{isAuthenticated:e.logged,path:"/auth",component:C}),Object(c.jsx)(M,{isAuthenticated:e.logged,path:"/",component:I}),Object(c.jsx)(b.a,{to:"/auth"})]})})})};var J=function(){return Object(c.jsx)(j,{children:Object(c.jsx)(w,{})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),i(e),r(e)}))};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(J,{})}),document.getElementById("root")),H()}},[[93,1,2]]]);
//# sourceMappingURL=main.d9a74546.chunk.js.map