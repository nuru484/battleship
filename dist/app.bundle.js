(()=>{var e={156:(e,t,r)=>{"use strict";r.d(t,{c:()=>o});var n=r(500),a=r.n(n),s=r(312),i=r.n(s)()(a());i.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100dvh;\n}\n\n.main-container {\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n  align-items: center;\n}\n\ntable {\n  border-collapse: collapse;\n  width: max-content;\n}\n\ntable,\nth,\ntd {\n  border: 1px solid black;\n}\n\ntd {\n  text-align: center;\n\n  width: clamp(1.5rem, 4dvw, 3rem);\n  height: clamp(1.5rem, 4dvw, 3rem);\n}\n\n.ship {\n  background-color: black;\n  margin: 5px;\n  padding: 5px;\n  color: white;\n  cursor: grabbing;\n}\n\n.hide {\n  display: none;\n}\n\n.drag-over {\n  border: dashed 3px red;\n}\n",""]);const o=i},312:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);n&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},500:e=>{"use strict";e.exports=function(e){return e[1]}},596:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var s={},i=[],o=0;o<e.length;o++){var c=e[o],l=n.base?c[0]+n.base:c[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var h=r(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var m=a(p,n);n.byIndex=o,t.splice(o,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var s=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var o=r(s[i]);t[o].references--}for(var c=n(e,a),l=0;l<s.length;l++){var d=r(s[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=c}}},176:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},808:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},120:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},520:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},936:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},288:()=>{const e=document.querySelectorAll(".ship"),t=document.querySelectorAll(".playerCells"),r=e=>{setTimeout((()=>{e.target.classList.add("hide")}),0)};e.forEach((e=>{e.addEventListener("dragstart",r)}));const n=e=>{e.preventDefault(),e.target.classList.add("drag-over")},a=e=>{e.preventDefault(),e.target.classList.add("drag-over")},s=e=>{e.target.classList.remove("drag-over")},i=e=>{e.target.classList.remove("drag-over");const t=document.querySelector(".hide");e.target.append(t),t.classList.remove("hide")};t.forEach((e=>{e.addEventListener("dragenter",n),e.addEventListener("dragover",a),e.addEventListener("dragleave",s),e.addEventListener("drop",i)}))}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={id:n,exports:{}};return e[n](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{"use strict";class e{constructor(e,t=0){this.length=e,this.hitTimes=t}hit(){this.isSunk()||(this.hitTimes+=1)}isSunk(){return this.hitTimes===this.length}}class t{constructor(){this.gameGrid=((e,t)=>{const r=[];let n=0;for(let e=0;e<10;e++){r[e]=[];for(let t=0;t<10;t++)r[e][t]=n++}return r})(),this.ships=[]}placeShip(e,t,r){if(t>=0&&t<this.gameGrid.length&&r>=0&&r<this.gameGrid.length){for(let n=0;n<e.length;n++)if("ship"===this.gameGrid[t][r+n]||""===this.gameGrid[t][r+n])return!1;if(r+e.length>this.gameGrid[t].length)return!1;e.startRow=t,e.startColumn=r;for(let n=0;n<e.length;n++)this.gameGrid[t][r+n]="ship","number"==typeof this.gameGrid[t][r+e.length]&&(this.gameGrid[t][r+e.length]=""),"number"==typeof this.gameGrid[t][r-1]&&(this.gameGrid[t][r-1]="");return this.ships.push(e),!0}return!1}receiveAttack(e,t){if(e>=0&&e<this.gameGrid.length&&t>=0&&t<this.gameGrid[0].length)if("ship"===this.gameGrid[e][t]){const r=this.ships.find((r=>e===r.startRow&&t>=r.startColumn&&t<r.startColumn+r.length));r&&(r.hit(),this.gameGrid[e][t]="hit")}else if("hit"===this.gameGrid[e][t]||"miss"===this.gameGrid[e][t])return;"number"==typeof this.gameGrid[e][t]&&(this.gameGrid[e][t]="miss"),""===this.gameGrid[e][t]&&(this.gameGrid[e][t]="miss")}gameOver(){if(this.ships.every((e=>e.isSunk())))return"Game Over"}}class n{constructor(){this.gameBoard=null}startGame(){this.gameBoard=new t}createShip(t){return new e(t)}placeShip(e,t,r){return!!this.gameBoard.placeShip(e,t,r)&&(this.gameBoard.placeShip(e,t,r),!0)}attack(e,t,r){e.gameBoard.receiveAttack(t,r)}}const a=new Set,s=(e=10,t=10)=>{let r,n;do{r=Math.floor(Math.random()*e),n=Math.floor(Math.random()*t)}while(a.has(`${r},${n}`));return a.add(`${r},${n}`),{x:r,y:n}},i=new n;i.startGame();const o=i.createShip(5);i.placeShip(o,4,5);const c=i.gameBoard.gameGrid,l=new n;l.startGame();const d=l.gameBoard.gameGrid;[5,4,3,3,2].forEach((e=>{let t=!1;for(;!t;){const{x:r}=s(10),{y:n}=s(10,10-e);t=l.placeShip(l.createShip(e),r,n)}}));const u=document.getElementById("playerTable"),h=document.getElementById("computerTable"),p=(e,t)=>{for(let r=0;r<10;r++){const r=e.insertRow();for(let e=0;e<10;e++){const e=r.insertCell();e.textContent="",e.classList.add(t)}}};p(u,"playerCells"),p(h,"computerCells");const m=(e,t)=>{t.forEach(((t,r)=>{const n=Math.floor(r/e[0].length),a=r%e[0].length;t.textContent=e[n][a]}))};var g,f,v,y;m(c,document.querySelectorAll(".playerCells")),m(d,document.querySelectorAll(".computerCells")),g=d,f=document.querySelectorAll(".computerCells"),v=i,y=l,f.forEach(((e,t)=>{e.addEventListener("click",(()=>{const r=Math.floor(t/g[0].length),n=t%g[0].length;if(v.attack(y,r,n),"miss"===e.textContent||"hit"===e.textContent)return;const a=s();l.attack(i,a.x,a.y),m(c,document.querySelectorAll(".playerCells")),m(g,f),console.log(l.gameBoard.gameOver()),console.log(i.gameBoard.gameOver())}))})),r(288);var b=r(596),x=r.n(b),G=r(520),S=r.n(G),w=r(176),C=r.n(w),E=r(120),L=r.n(E),T=r(808),M=r.n(T),k=r(936),A=r.n(k),B=r(156),q={};q.styleTagTransform=A(),q.setAttributes=L(),q.insert=C().bind(null,"head"),q.domAPI=S(),q.insertStyleElement=M(),x()(B.c,q),B.c&&B.c.locals&&B.c.locals})()})();