"use strict";(self.webpackChunkwebpack_boilerplate=self.webpackChunkwebpack_boilerplate||[]).push([[179],{426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,"body {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n",""]);const c=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],c=0;c<e.length;c++){var i=e[c],d=r.base?i[0]+r.base:i[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=n(u),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var c=n(o[s]);t[c].references--}for(var i=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},472:(e,t,n)=>{var r=n(379),a=n.n(r),o=n(795),s=n.n(o),c=n(569),i=n.n(c),d=n(565),l=n.n(d),u=n(216),p=n.n(u),f=n(589),m=n.n(f),v=n(426),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=p(),a()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;const y=document.getElementById("saveScore"),g=document.getElementById("nameField"),b=document.getElementById("scoreField"),w=document.getElementById("results"),x=document.getElementById("refresh"),T=document.getElementById("msg");document.addEventListener("DOMContentLoaded",(()=>{x.addEventListener("click",(()=>{(new class{display=async()=>{let e=!0;e&&(w.innerHTML='\n      <div class="d-flex align-items-center">\n      <strong>Loading...</strong>\n      <div class="spinner-border text-primary ms-auto" role="status" aria-hidden="true"></div>\n    </div>\n        ');try{const t=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RVLHmrTjFYooSfq9ZHuB/scores/"),{result:n}=await t.json();let r="";n.map((e=>(r+=`\n            <tr>\n                <td>${e.user}</td>\n                <td>${e.score}</td>\n            </tr>\n            `,e))),w.innerHTML=r,e=!1}catch(t){console.error(t.message),e=!1}}}).display()})),y.addEventListener("click",(e=>{(new class{addScore=async e=>{e.preventDefault();const t=g.value,n=b.value;try{const e=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RVLHmrTjFYooSfq9ZHuB/scores/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:t,score:parseInt(n,10)})}),{result:r}=await e.json();T.innerText=r,g.value="",b.value=""}catch(e){console.error(e.message)}setInterval((()=>{T.style.display="none"}),2500)}}).addScore(e)}))}))}},e=>{e(e.s=472)}]);