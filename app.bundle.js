(()=>{"use strict";var e={156:(e,t,r)=>{r.d(t,{c:()=>s});var n=r(500),a=r.n(n),i=r(312),o=r.n(i)()(a());o.push([e.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  height: 100dvh;\n  font-size: clamp(0.5rem, 1dvw, 1.5rem);\n}\n\n.main-container {\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n  align-items: center;\n}\n\ntable {\n  border-collapse: collapse;\n  width: max-content;\n  margin: 1dvw;\n}\n\ntable,\nth,\ntd {\n  border: 1px solid black;\n}\n\ntd {\n  text-align: center;\n  width: clamp(1.8rem, 4dvw, 3rem);\n  height: clamp(1.8rem, 4dvw, 3rem);\n}\n\n.ship-container {\n  text-align: center;\n  align-items: center;\n  background-color: rgba(230, 227, 225, 0.852);\n  margin: 5px;\n  padding: 5px;\n  width: 120px;\n  height: 90px;\n  border: 2px solid black;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n\n#player-details {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 1dvw;\n}\n\n.ship-container img {\n  max-width: 100%;\n  height: 50%;\n}\n\n/* Drag and drop styles */\n\n.hide-dragable,\n.computer-table-container,\n.hide-ship-container {\n  display: none;\n}\n\n.drag-over {\n  border: dashed 3px red;\n}\n\n.computerCells,\n.playerCells {\n  color: white;\n}\n\n.ship-position {\n  background-color: green;\n  color: green;\n}\n\n.reveal-computer-tabel-container {\n  display: block;\n}\n",""]);const s=o},312:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);n&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],l=n.base?c[0]+n.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var h=r(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(u);else{var g=a(u,n);n.byIndex=s,t.splice(s,0,{identifier:p,updater:g,references:1})}o.push(p)}return o}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var i=n(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=r(i[o]);t[s].references--}for(var c=n(e,a),l=0;l<i.length;l++){var d=r(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},176:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},808:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},120:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},936:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&!e;)e=n[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.nc=void 0,(()=>{class e{constructor(e,t=0){this.length=e,this.hitTimes=t}hit(){this.isSunk()||(this.hitTimes+=1)}isSunk(){return this.hitTimes===this.length}}class t{constructor(){this.gameGrid=((e,t)=>{const r=[];let n=0;for(let e=0;e<10;e++){r[e]=[];for(let t=0;t<10;t++)r[e][t]=n++}return r})(),this.ships=[]}placeShip(e,t,r){if(t>=0&&t<this.gameGrid.length&&r>=0&&r<this.gameGrid.length){for(let n=0;n<e.length;n++)if("ship"===this.gameGrid[t][r+n]||""===this.gameGrid[t][r+n])return!1;if(r+e.length>this.gameGrid[t].length)return!1;e.startRow=t,e.startColumn=r;for(let n=0;n<e.length;n++)this.gameGrid[t][r+n]="ship","number"==typeof this.gameGrid[t][r+e.length]&&(this.gameGrid[t][r+e.length]=""),"number"==typeof this.gameGrid[t][r-1]&&(this.gameGrid[t][r-1]="");return this.ships.push(e),!0}return!1}receiveAttack(e,t){if(e>=0&&e<this.gameGrid.length&&t>=0&&t<this.gameGrid[0].length)if("ship"===this.gameGrid[e][t]){const r=this.ships.find((r=>e===r.startRow&&t>=r.startColumn&&t<r.startColumn+r.length));r&&(r.hit(),this.gameGrid[e][t]="hit")}else if("hit"===this.gameGrid[e][t]||"miss"===this.gameGrid[e][t])return;"number"==typeof this.gameGrid[e][t]&&(this.gameGrid[e][t]="miss"),""===this.gameGrid[e][t]&&(this.gameGrid[e][t]="miss")}gameOver(){if(this.ships.every((e=>e.isSunk())))return"Game Over"}}class n{constructor(){this.gameBoard=null}startGame(){this.gameBoard=new t}createShip(t){return new e(t)}placeShip(e,t,r){return!!this.gameBoard.placeShip(e,t,r)&&(this.gameBoard.placeShip(e,t,r),!0)}attack(e,t,r){this.gameBoard&&e.gameBoard.receiveAttack(t,r)}}const a=new Set,i=e=>{e.forEach((e=>{"ship"===e.textContent&&e.classList.add("ship-position")}))},o=e=>{let t=0;e.forEach((e=>{"ship"===e.textContent&&(t+=1)})),17===t&&document.querySelector(".computer-table-container").classList.add("reveal-computer-tabel-container")},s=new n;s.startGame();const c=s.gameBoard.gameGrid,l=new n;l.startGame();const d=l.gameBoard.gameGrid;[5,4,3,3,2].forEach((e=>{let t=!1;for(;!t;){const r=Math.floor(10*Math.random()),n=Math.floor(Math.random()*e);t=l.placeShip(l.createShip(e),r,n)}}));const p=document.getElementById("playerTable"),h=document.getElementById("computerTable"),u=(e,t)=>{for(let r=0;r<10;r++){const r=e.insertRow();for(let e=0;e<10;e++){const e=r.insertCell();e.textContent="",e.classList.add(t)}}};u(p,"playerCells"),u(h,"computerCells");const g=(e,t)=>{t.forEach(((t,r)=>{const n=Math.floor(r/e[0].length),a=r%e[0].length;t.textContent=e[n][a]}))};g(c,document.querySelectorAll(".playerCells")),g(d,document.querySelectorAll(".computerCells"));let m=!0;const f=()=>{const{x:e,y:t}=((e=10,t=10)=>{let r,n;do{r=Math.floor(Math.random()*e),n=Math.floor(Math.random()*t)}while(a.has(`${r},${n}`));return a.add(`${r},${n}`),{x:r,y:n}})();l.attack(s,e,t),s.gameBoard.gameOver(),document.querySelectorAll(".playerCells").forEach((e=>{"hit"===e.textContent&&(e.style.backgroundColor="red"),"miss"===e.textContent&&(e.style.backgroundColor="yellow"),g(c,document.querySelectorAll(".playerCells")),m=!0}))};var v,y,b,x;v=d,y=document.querySelectorAll(".computerCells"),b=s,x=l,y.forEach(((e,t)=>{e.addEventListener("click",(()=>{if(!m)return;const r=Math.floor(t/v[0].length),n=t%v[0].length;b.attack(x,r,n),"miss"!==e.textContent&&"hit"!==e.textContent&&(l.gameBoard.gameOver(),e.style.backgroundColor="yellow","ship"===e.textContent&&(e.style.backgroundColor="red"),g(v,y),setTimeout(f,2e3),m=!1)}))})),(e=>{const t=document.querySelector(".player-ships-class");e.forEach((e=>{const r=document.createElement("div");r.className="ship-container",r.id=e.id;const n=document.createElement("p");n.textContent=e.shipName;const a=document.createElement("img");a.draggable=!0,a.src=e.shipUrl,a.dataset.length=e.length,r.append(n,a),t.append(r)}))})([{length:5,id:"ship5",shipUrl:r.p+"d56e5a89beb359219e25.svg",shipName:"Battleship (5f)"},{length:4,id:"ship4",shipUrl:r.p+"008846a84b2a34dde315.svg",shipName:"Carrier (4f)"},{length:3,id:"ship3first",shipUrl:r.p+"0504ee6feab7e47038d3.svg",shipName:"Cruiser (3f)"},{length:3,id:"ship3second",shipUrl:r.p+"56e5c8a88ff718d93efc.svg",shipName:"Submarine (3f)"},{length:2,id:"ship2",shipUrl:r.p+"543bf6eb30d63dfd7a2f.svg",shipName:"Destroyer (2f)"}]);const w=document.querySelectorAll(".ship-container"),C=document.querySelectorAll(".playerCells"),S=e=>{setTimeout((()=>{e.target.classList.add("hide-dragable")}),0)},E=e=>{e.target.classList.remove("hide-dragable")};w.forEach((e=>{e.addEventListener("dragstart",S),e.addEventListener("dragend",E)}));const L=e=>{"ship"!==e.target.textContent&&(e.preventDefault(),e.target.classList.add("drag-over"))},G=e=>{"ship"!==e.target.textContent&&(e.preventDefault(),e.target.classList.add("drag-over"))},T=e=>{e.target.classList.remove("drag-over")},k=e=>{const t=e.target.parentNode.rowIndex,r=e.target.cellIndex,n=document.querySelector(".hide-dragable"),a=parseInt(n.dataset.length,10),l=s.createShip(a);!1!==s.placeShip(l,t,r)?(e.target.classList.remove("drag-over"),e.target.textContent="",n.classList.remove("hide-dragable"),n.parentNode.classList.add("hide-ship-container"),s.placeShip(l,t,r),g(c,C),i(C),o(C)):e.target.classList.remove("drag-over")};C.forEach((e=>{e.addEventListener("dragenter",L),e.addEventListener("dragover",G),e.addEventListener("dragleave",T),e.addEventListener("drop",k),e.addEventListener("drop",(e=>{e.preventDefault()}))}));let M={};w.forEach((e=>{e.addEventListener("touchstart",(e=>{e.preventDefault(),e.target.hasAttribute("draggable")&&(M={x:e.target.offsetLeft,y:e.target.offsetTop})}))})),w.forEach((e=>{e.addEventListener("touchend",(t=>{if(t.target.hasAttribute("draggable")){const r=t.changedTouches[0];let n,a;C.forEach(((e,t)=>{const i=e.getBoundingClientRect();r.clientX>=i.left&&r.clientX<=i.right&&r.clientY>=i.top&&r.clientY<=i.bottom&&(n=Math.floor(t/10),a=t%10)}));const l=parseInt(t.target.dataset.length,10),d=s.createShip(l);if(!1===s.placeShip(d,n,a))return t.target.style.position="static",void e.append(t.target);s.placeShip(d,n,a),t.target.parentNode.classList.add("hide-ship-container"),s.placeShip(d,n,a),g(c,C),i(C),o(C)}}))})),w.forEach((e=>{e.addEventListener("touchmove",(e=>{if(e.target.hasAttribute("draggable")){const t=e.targetTouches[0];e.target.style.position="absolute",e.target.style.width="100px",e.target.style.height="50px",e.target.style.left=`${t.pageX}px`,e.target.style.top=`${t.pageY}px`}}))}));var A=r(596),B=r.n(A),N=r(520),I=r.n(N),q=r(176),$=r.n(q),j=r(120),O=r.n(j),U=r(808),D=r.n(U),R=r(936),P=r.n(R),z=r(156),F={};F.styleTagTransform=P(),F.setAttributes=O(),F.insert=$().bind(null,"head"),F.domAPI=I(),F.insertStyleElement=D(),B()(z.c,F),z.c&&z.c.locals&&z.c.locals})()})();