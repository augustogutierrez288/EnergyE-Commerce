import{r as c}from"./index.NEDEFKed.js";var u={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=c,d=Symbol.for("react.element"),b=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,x=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function f(a,r,t){var s,n={},l=null,o=null;t!==void 0&&(l=""+t),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(o=r.ref);for(s in r)h.call(r,s)&&!p.hasOwnProperty(s)&&(n[s]=r[s]);if(a&&a.defaultProps)for(s in r=a.defaultProps,r)n[s]===void 0&&(n[s]=r[s]);return{$$typeof:d,type:a,key:l,ref:o,props:n,_owner:x.current}}i.Fragment=b;i.jsx=f;i.jsxs=f;u.exports=i;var e=u.exports;function g(){const a=c.useRef(null),r=c.useRef(null),[t,s]=c.useState(!1);return c.useEffect(()=>{const n=a.current;r.current;const l=()=>{s(!t)};return n&&n.addEventListener("click",l),()=>{n&&n.removeEventListener("click",l)}},[t]),e.jsx("nav",{className:"burger",children:e.jsxs("section",{className:"burger-section",children:[e.jsx("a",{className:"burger-logo",href:"/",children:"Energy"}),t?e.jsx("article",{className:`burger-article animate__animated ${t?"animate__fadeIn":"animate__fadeOut"}`,ref:r,children:e.jsxs("ul",{className:"burger--ul",children:[e.jsx("li",{className:"burger--li",children:e.jsx("a",{className:"burger--link",href:"/",children:"Inicio"})}),e.jsx("li",{className:"burger--li",children:e.jsx("a",{className:"burger--link",href:"#product",children:"Productos"})}),e.jsx("li",{className:"burger--li",children:e.jsx("a",{className:"burger--link",href:"about",children:"Sobre Nosotros"})}),e.jsx("li",{className:"burger--li",children:e.jsx("a",{className:"burger--link",href:"contact",children:"Contactos"})})]})}):null,e.jsx("button",{className:`hamburger hamburger--spring ${t?"is-active":""}`,type:"button",ref:a,children:e.jsx("span",{className:"hamburger-box",children:e.jsx("span",{className:"hamburger-inner"})})})]})})}export{g as default};