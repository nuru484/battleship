(()=>{"use strict";var e={156:(e,t,r)=>{r.d(t,{c:()=>s});var n=r(500),a=r.n(n),o=r(312),i=r.n(o)()(a());i.push([e.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  height: 100dvh;\n  font-size: clamp(0.5rem, 1dvw, 1.5rem);\n}\n\n.main-container {\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n  align-items: center;\n}\n\ntable {\n  border-collapse: collapse;\n  width: max-content;\n  margin: 1dvw;\n}\n\ntable,\nth,\ntd {\n  border: 1px solid black;\n}\n\ntd {\n  text-align: center;\n  width: clamp(1.8rem, 4dvw, 3rem);\n  height: clamp(1.8rem, 4dvw, 3rem);\n}\n\n.ship-container {\n  text-align: center;\n  align-items: center;\n  background-color: rgba(230, 227, 225, 0.852);\n  margin: 5px;\n  padding: 5px;\n  width: 120px;\n  height: 90px;\n  border: 2px solid black;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n\n#player-details {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 1dvw;\n}\n\n.ship-container img {\n  max-width: 100%;\n  height: 50%;\n}\n\n/* Drag and drop styles */\n.hide-dragable,\n.computer-table-container,\n.hide-ship-container {\n  display: none;\n}\n\n.drag-over {\n  border: dashed 3px red;\n}\n\n.computerCells,\n.playerCells {\n  color: white;\n}\n\n.ship-position {\n  background-color: green;\n  color: green;\n}\n\n.reveal-computer-tabel-container {\n  display: block;\n}\n",""]);const s=i},312:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},i=[],s=0;s<e.length;s++){var l=e[s],c=n.base?l[0]+n.base:l[0],d=o[c]||0,p="".concat(c," ").concat(d);o[c]=d+1;var h=r(p),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(u);else{var g=a(u,n);n.byIndex=s,t.splice(s,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=r(o[i]);t[s].references--}for(var l=n(e,a),c=0;c<o.length;c++){var d=r(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},176:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},808:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},120:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},936:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&!e;)e=n[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.nc=void 0,(()=>{class e{constructor(e,t=0){this.length=e,this.hitTimes=t}hit(){this.isSunk()||(this.hitTimes+=1)}isSunk(){return this.hitTimes===this.length}}class t{constructor(){this.gameGrid=((e,t)=>{const r=[];let n=0;for(let e=0;e<10;e++){r[e]=[];for(let t=0;t<10;t++)r[e][t]=n++}return r})(),this.ships=[]}placeShip(e,t,r){if(t>=0&&t<this.gameGrid.length&&r>=0&&r<this.gameGrid.length){for(let n=0;n<e.length;n++)if("ship"===this.gameGrid[t][r+n]||""===this.gameGrid[t][r+n])return!1;if(r+e.length>this.gameGrid[t].length)return!1;e.startRow=t,e.startColumn=r;for(let n=0;n<e.length;n++)this.gameGrid[t][r+n]="ship","number"==typeof this.gameGrid[t][r+e.length]&&(this.gameGrid[t][r+e.length]=""),"number"==typeof this.gameGrid[t][r-1]&&(this.gameGrid[t][r-1]="");return this.ships.push(e),!0}return!1}receiveAttack(e,t){if(e>=0&&e<this.gameGrid.length&&t>=0&&t<this.gameGrid[0].length)if("ship"===this.gameGrid[e][t]){const r=this.ships.find((r=>e===r.startRow&&t>=r.startColumn&&t<r.startColumn+r.length));r&&(r.hit(),this.gameGrid[e][t]="hit")}else if("hit"===this.gameGrid[e][t]||"miss"===this.gameGrid[e][t])return;"number"==typeof this.gameGrid[e][t]&&(this.gameGrid[e][t]="miss"),""===this.gameGrid[e][t]&&(this.gameGrid[e][t]="miss")}gameOver(){if(this.ships.every((e=>e.isSunk())))return"Game Over"}}class n{constructor(){this.gameBoard=null}startGame(){this.gameBoard=new t}createShip(t){return new e(t)}placeShip(e,t,r){return!!this.gameBoard.placeShip(e,t,r)&&(this.gameBoard.placeShip(e,t,r),!0)}attack(e,t,r){this.gameBoard&&e.gameBoard.receiveAttack(t,r)}}const a=new Set,o=new n;o.startGame();const i=o.gameBoard.gameGrid,s=new n;s.startGame();const l=s.gameBoard.gameGrid;[5,4,3,3,2].forEach((e=>{let t=!1;for(;!t;){const r=Math.floor(10*Math.random()),n=Math.floor(Math.random()*e);t=s.placeShip(s.createShip(e),r,n)}}));const c=document.getElementById("playerTable"),d=document.getElementById("computerTable"),p=(e,t)=>{for(let r=0;r<10;r++){const r=e.insertRow();for(let e=0;e<10;e++){const e=r.insertCell();e.textContent="",e.classList.add(t)}}};p(c,"playerCells"),p(d,"computerCells");const h=(e,t)=>{t.forEach(((t,r)=>{const n=Math.floor(r/e[0].length),a=r%e[0].length;t.textContent=e[n][a]}))};h(i,document.querySelectorAll(".playerCells")),h(l,document.querySelectorAll(".computerCells"));let u=!0;const g=()=>{const{x:e,y:t}=((e=10,t=10)=>{let r,n;do{r=Math.floor(Math.random()*e),n=Math.floor(Math.random()*t)}while(a.has(`${r},${n}`));return a.add(`${r},${n}`),{x:r,y:n}})();s.attack(o,e,t),o.gameBoard.gameOver(),document.querySelectorAll(".playerCells").forEach((e=>{"hit"===e.textContent&&(e.style.backgroundColor="red"),"miss"===e.textContent&&(e.style.backgroundColor="yellow"),h(i,document.querySelectorAll(".playerCells")),u=!0}))};var m,f,v,y;m=l,f=document.querySelectorAll(".computerCells"),v=o,y=s,f.forEach(((e,t)=>{e.addEventListener("click",(()=>{if(!u)return;const r=Math.floor(t/m[0].length),n=t%m[0].length;v.attack(y,r,n),"miss"!==e.textContent&&"hit"!==e.textContent&&(s.gameBoard.gameOver(),e.style.backgroundColor="yellow","ship"===e.textContent&&(e.style.backgroundColor="red"),h(m,f),setTimeout(g,2e3),u=!1)}))}));const b=[{length:5,id:"ship5",shipUrl:r.p+"d56e5a89beb359219e25.svg",shipName:"Battleship (5f)"},{length:4,id:"ship4",shipUrl:r.p+"008846a84b2a34dde315.svg",shipName:"Carrier (4f)"},{length:3,id:"ship3first",shipUrl:r.p+"0504ee6feab7e47038d3.svg",shipName:"Cruiser (3f)"},{length:3,id:"ship3second",shipUrl:r.p+"56e5c8a88ff718d93efc.svg",shipName:"Submarine (3f)"},{length:2,id:"ship2",shipUrl:r.p+"543bf6eb30d63dfd7a2f.svg",shipName:"Destroyer (2f)"}];(()=>{const e=document.querySelector(".player-ships-class");b.forEach((t=>{const r=document.createElement("div");r.className="ship-container",r.id=t.id;const n=document.createElement("p");n.textContent=t.shipName;const a=document.createElement("img");a.draggable=!0,a.src=t.shipUrl,a.dataset.length=t.length,r.append(n,a),e.append(r)}))})();const x=document.querySelectorAll(".ship-container"),C=document.querySelectorAll(".playerCells"),w=()=>{C.forEach((e=>{"ship"===e.textContent&&e.classList.add("ship-position")}))},S=()=>{let e=0;C.forEach((t=>{"ship"===t.textContent&&(e+=1)})),17===e&&document.querySelector(".computer-table-container").classList.add("reveal-computer-tabel-container")},E=e=>{setTimeout((()=>{e.target.classList.add("hide-dragable")}),0)},L=e=>{e.target.classList.remove("hide-dragable")};x.forEach((e=>{e.addEventListener("dragstart",E),e.addEventListener("dragend",L)}));const G=e=>{"ship"!==e.target.textContent&&(e.preventDefault(),e.target.classList.add("drag-over"))},T=e=>{"ship"!==e.target.textContent&&(e.preventDefault(),e.target.classList.add("drag-over"))},A=e=>{e.target.classList.remove("drag-over")},k=e=>{const t=e.target.parentNode.rowIndex,r=e.target.cellIndex,n=document.querySelector(".hide-dragable"),a=parseInt(n.dataset.length,10),s=o.createShip(a);!1!==o.placeShip(s,t,r)?(e.target.classList.remove("drag-over"),e.target.textContent="",n.classList.remove("hide-dragable"),n.parentNode.classList.add("hide-ship-container"),o.placeShip(s,t,r),h(i,document.querySelectorAll(".playerCells")),w(),S()):e.target.classList.remove("drag-over")};C.forEach((e=>{e.addEventListener("dragenter",G),e.addEventListener("dragover",T),e.addEventListener("dragleave",A),e.addEventListener("drop",k),e.addEventListener("drop",(e=>{e.preventDefault()}))}));let M={};x.forEach((e=>{e.addEventListener("touchstart",(e=>{e.preventDefault(),e.target.hasAttribute("draggable")&&(M={x:e.target.offsetLeft,y:e.target.offsetTop})}))})),x.forEach((e=>{e.addEventListener("touchend",(e=>{if(e.target.hasAttribute("draggable")){const t=e.changedTouches[0];let r,n;document.querySelectorAll(".playerCells").forEach(((e,a)=>{const o=e.getBoundingClientRect();t.clientX>=o.left&&t.clientX<=o.right&&t.clientY>=o.top&&t.clientY<=o.bottom&&(r=Math.floor(a/10),n=a%10)}));const a=parseInt(e.target.dataset.length,10),s=o.createShip(a);if(!1===o.placeShip(s,r,n))return e.target.style.left=`${M.x}px`,void(e.target.style.top=`${M.y}px`);o.placeShip(s,r,n),e.target.parentNode.classList.add("hide-ship-container"),o.placeShip(s,r,n),h(i,document.querySelectorAll(".playerCells")),w(),S()}}))})),x.forEach((e=>{e.addEventListener("touchmove",(e=>{if(e.target.hasAttribute("draggable")){const t=e.targetTouches[0];e.target.style.position="absolute",e.target.style.width="100px",e.target.style.height="50px",e.target.style.left=`${t.pageX}px`,e.target.style.top=`${t.pageY}px`}}))}));var B=r(596),N=r.n(B),q=r(520),I=r.n(q),$=r(176),j=r.n($),O=r(120),U=r.n(O),D=r(808),R=r.n(D),P=r(936),z=r.n(P),F=r(156),X={};X.styleTagTransform=z(),X.setAttributes=U(),X.insert=j().bind(null,"head"),X.domAPI=I(),X.insertStyleElement=R(),N()(F.c,X),F.c&&F.c.locals&&F.c.locals})()})();