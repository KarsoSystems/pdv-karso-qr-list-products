"use strict";(self.webpackChunkkarso_qr=self.webpackChunkkarso_qr||[]).push([[992],{9992:(e,t,n)=>{n.r(t);var r=n(4914),a=n.n(r),o=n(5338),i=n(4855),c=(0,i.createTheme)({palette:{primary:{main:"#ffdd00"}}});const s=n.p+"49e17b6b19cf28b6719f1a05ff1567c0.png",l=n.p+"c7254efd59d7014d5a534324ed02ceb5.png",p=n.p+"464e3e2b2114de09319316f392988e81.png",d=n.p+"c70900bde06166c299b683d9cc56e42b.png",u=function(){return a().createElement(a().Fragment,null,a().createElement(i.AppBar,{position:"sticky"},a().createElement(i.Container,{maxWidth:"xl"},a().createElement(i.Toolbar,{disableGutters:!0},a().createElement("img",{src:d,width:"150px",style:{padding:"10px"}}),a().createElement(i.Box,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}}),a().createElement(i.Typography,{variant:"h5",noWrap:!0,component:"a",href:"#app-bar-with-responsive-menu",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"LOGO")))),a().createElement(i.Container,{maxWidth:"lg"},a().createElement("img",{src:p,style:{width:"100%",margin:"10px 0px"}}),a().createElement("img",{src:s,style:{width:"100%",margin:"10px 0px"}}),a().createElement("img",{src:l,style:{width:"100%",margin:"10px 0px"}})))};var f=n(5072),m=n.n(f),h=n(7825),v=n.n(h),g=n(7659),y=n.n(g),b=n(5056),x=n.n(b),E=n(540),w=n.n(E),A=n(1113),C=n.n(A),T=n(8972),k={};k.styleTagTransform=C(),k.setAttributes=x(),k.insert=y().bind(null,"head"),k.domAPI=v(),k.insertStyleElement=w(),m()(T.A,k),T.A&&T.A.locals&&T.A.locals;const M=function(){return a().createElement("div",null,a().createElement("div",{className:"gradient"}),a().createElement(i.ThemeProvider,{theme:c},a().createElement(i.CssBaseline,null),a().createElement(u,null)))};var S=document.getElementById("app");if(!S)throw new Error("Failed to find the root element");o.createRoot(S).render(a().createElement(M,null))},8972:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(1601),a=n.n(r),o=n(6314),i=n.n(o)()(a());i.push([e.id,"\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  background:#000000!important;\n  height:100vh;\n}\n.MuiAppBar-root{\n  background:#000000!important;\n  color:aliceblue;\n}\n.gradient{\n  width: 100vw;\n  height:100vh;\n  background: #1E387B;\n  background: radial-gradient(at center bottom, #194fd8, #010101);\n  opacity: 0.3;\n  position:fixed;\n  bottom:0;\n  left:0;\n  z-index:-1;\n}\n\n",""]);const c=i},6314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},1601:e=>{e.exports=function(e){return e[1]}},5338:(e,t,n)=>{var r=n(6672);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},5072:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],p=o[l]||0,d="".concat(l," ").concat(p);o[l]=p+1;var u=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=r(e,a),l=0;l<o.length;l++){var p=n(o[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=s}}},7659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},5056:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},1113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);