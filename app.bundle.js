(()=>{"use strict";var e={156:(e,t,n)=>{n.d(t,{c:()=>h});var r=n(500),a=n.n(r),o=n(312),i=n.n(o),s=n(536),c=n.n(s),l=new URL(n(860),n.b),d=i()(a()),p=c()(l);d.push([e.id,`* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.main-container {\n  min-height: 100vh;\n  background-image: url(${p});\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n  align-items: center;\n}\n\ntable {\n  box-sizing: border-box;\n  border-collapse: collapse;\n  margin: 1dvw;\n  table-layout: fixed;\n}\n\ntable,\nth,\ntd {\n  border: 2px solid white;\n  text-align: center;\n  width: 50px;\n  aspect-ratio: 1/1;\n  font-size: 50%;\n  color: transparent;\n  box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.26);\n}\n\n.ship-container {\n  text-align: center;\n  align-items: center;\n  background-color: rgba(230, 227, 225, 0.852);\n  margin: 5px;\n  border: 2px solid black;\n  border-radius: 8px;\n  cursor: pointer;\n  width: 5rem;\n  aspect-ratio: 1/0.8;\n}\n\n.ship-container img {\n  max-width: 100%;\n  max-height: 80%;\n}\n\n.ship-container p {\n  font-size: 50%;\n}\n\n#player-details {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1dvw;\n}\n\n/* Drag and drop styles */\n\n.hide-dragable,\n.computer-table-container,\n.hide-ship-container {\n  display: none;\n}\n\n.drag-over {\n  border: dashed 3px red;\n}\n\n.ship-position {\n  background-color: green;\n  color: green;\n}\n\n.reveal-computer-tabel-container {\n  display: block;\n}\n\n.computer-table-container p,\n.player-table-container p {\n  font-size: 1rem;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  color: #32808d;\n  max-width: fit-content;\n  margin: 0.2rem auto;\n  padding: 0.2rem 0.4rem;\n  border-radius: 0.2rem;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.336);\n  background-color: white;\n}\n\n.game-over-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(0, 0, 0, 0.8);\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.game-over-container p {\n  color: white;\n  margin-bottom: 20px;\n}\n\n.game-over-container button {\n  background-color: #4caf50;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.game-over-container button:hover {\n  background-color: #45a049;\n}\n\n@media screen and (max-width: 650px) {\n  .player-ships-class {\n    display: flex;\n  }\n\n  #player-details {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  table,\n  th,\n  td {\n    width: 35px;\n    aspect-ratio: 1/1;\n  }\n\n  .ship-container {\n    width: 3.5rem;\n    aspect-ratio: 1/0.8;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  table,\n  th,\n  td {\n    width: 8dvw;\n    aspect-ratio: 1/1;\n  }\n\n  .ship-container {\n    width: 2.8rem;\n    aspect-ratio: 1/0.8;\n  }\n}\n`,""]);const h=d},752:(e,t,n)=>{n.d(t,{c:()=>s});var r=n(500),a=n.n(r),o=n(312),i=n.n(o)()(a());i.push([e.id,".welcome-page {\n  text-align: center;\n  max-width: 600px;\n  margin: 5rem auto;\n  padding: 20px;\n  background-color: #f0f0f0;\n  border-radius: 10px;\n}\n\nh1 {\n  color: #333;\n}\n\np {\n  color: #666;\n}\n\nform {\n  margin-top: 20px;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 5px;\n}\n\ninput[type='text'] {\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\nbutton {\n  display: block;\n  margin: 1rem auto;\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #0056b3;\n}\n",""]);const s=i},312:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},536:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var h=n(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(u);else{var g=a(u,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},176:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},808:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},120:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},936:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},860:(e,t,n)=>{e.exports=n.p+"92082ff00ef20b219cee.jpg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{class e{constructor(e,t=0){this.length=e,this.hitTimes=t}hit(){this.isSunk()||(this.hitTimes+=1)}isSunk(){return this.hitTimes===this.length}}class t{constructor(){this.gameGrid=((e,t)=>{const n=[];let r=0;for(let e=0;e<10;e++){n[e]=[];for(let t=0;t<10;t++)n[e][t]=r++}return n})(),this.ships=[]}placeShip(e,t,n){if(t>=0&&t<this.gameGrid.length&&n>=0&&n<this.gameGrid.length){for(let r=0;r<e.length;r++)if("ship"===this.gameGrid[t][n+r]||""===this.gameGrid[t][n+r])return!1;if(n+e.length>this.gameGrid[t].length)return!1;e.startRow=t,e.startColumn=n;for(let r=0;r<e.length;r++)this.gameGrid[t][n+r]="ship","number"==typeof this.gameGrid[t][n+e.length]&&(this.gameGrid[t][n+e.length]=""),"number"==typeof this.gameGrid[t][n-1]&&(this.gameGrid[t][n-1]="");return this.ships.push(e),!0}return!1}receiveAttack(e,t){if(e>=0&&e<this.gameGrid.length&&t>=0&&t<this.gameGrid[0].length)if("ship"===this.gameGrid[e][t]){const n=this.ships.find((n=>e===n.startRow&&t>=n.startColumn&&t<n.startColumn+n.length));if(n)return n.hit(),this.gameGrid[e][t]="hit",!0}else if("hit"===this.gameGrid[e][t]||"miss"===this.gameGrid[e][t])return!1;"number"==typeof this.gameGrid[e][t]&&(this.gameGrid[e][t]="miss"),""===this.gameGrid[e][t]&&(this.gameGrid[e][t]="miss")}gameOver(){return!!this.ships.every((e=>e.isSunk()))}}class r{constructor(){this.gameBoard=null}startGame(){this.gameBoard=new t}createShip(t){return new e(t)}placeShip(e,t,n){return!!this.gameBoard.placeShip(e,t,n)&&(this.gameBoard.placeShip(e,t,n),!0)}attack(e,t,n){return!(!this.gameBoard||!e.gameBoard.receiveAttack(t,n))}}const a=new Set,o=e=>{e.forEach((e=>{"ship"===e.textContent&&e.classList.add("ship-position")}))};(()=>{const e=document.querySelector(".welcome-page"),t=document.querySelector(".form-button"),n=document.getElementById("player-name"),r=document.querySelector(".main-container");r.style.display="none",t.addEventListener("click",(t=>{t.preventDefault(),""!==n.value.trim()&&(e.style.display="none",r.style.display="flex")}))})();const i=e=>{let t=0;e.forEach((e=>{"ship"===e.textContent&&(t+=1)})),17===t&&document.querySelector(".computer-table-container").classList.add("reveal-computer-tabel-container")};function s(e,t){if(e.gameBoard.gameOver()){const e=`Game Over, ${t} won`,n="Restart Game",r=document.createElement("div");r.classList.add("game-over-container");const a=document.createElement("p");a.textContent=e;const o=document.createElement("button");o.textContent=n,o.addEventListener("click",(()=>{location.reload()})),r.appendChild(a),r.appendChild(o);const i=document.getElementById("player-details"),s=document.getElementById("computer-details");i.style.display="none",s.style.display="none",document.body.appendChild(r)}}const c=new r;c.startGame();const l=c.gameBoard.gameGrid,d=new r;d.startGame();const p=d.gameBoard.gameGrid;[5,4,3,3,2].forEach((e=>{let t=!1;for(;!t;){const n=Math.floor(10*Math.random()),r=Math.floor(Math.random()*e);t=d.placeShip(d.createShip(e),n,r)}}));const h=document.getElementById("playerTable"),u=document.getElementById("computerTable"),g=(e,t)=>{for(let n=0;n<10;n++){const n=e.insertRow();for(let e=0;e<10;e++){const e=n.insertCell();e.textContent="",e.classList.add(t)}}};g(h,"playerCells"),g(u,"computerCells");const m=(e,t)=>{t.forEach(((t,n)=>{const r=Math.floor(n/e[0].length),a=n%e[0].length;t.textContent=e[r][a]}))};let f=!0;const b=()=>{const{x:e,y:t}=((e=10,t=10)=>{let n,r;do{n=Math.floor(Math.random()*e),r=Math.floor(Math.random()*t)}while(a.has(`${n},${r}`));return a.add(`${n},${r}`),{x:n,y:r}})();d.attack(c,e,t)&&console.log("hello"),s(c,"Computer"),document.querySelectorAll(".playerCells").forEach((e=>{"hit"===e.textContent&&(e.style.backgroundColor="red"),"miss"===e.textContent&&(e.style.backgroundColor="yellow"),m(l,document.querySelectorAll(".playerCells")),f=!0}))};var v,y,x,w;v=p,y=document.querySelectorAll(".computerCells"),x=c,w=d,y.forEach(((e,t)=>{e.addEventListener("click",(()=>{if(!f)return;const n=Math.floor(t/v[0].length),r=t%v[0].length;x.attack(w,n,r),"miss"!==e.textContent&&"hit"!==e.textContent&&(s(d,document.getElementById("player-name").value),e.style.backgroundColor="yellow","ship"===e.textContent&&(e.style.backgroundColor="red"),m(v,y),f=!1,setTimeout(b,1e3))}))})),(e=>{const t=document.querySelector(".player-ships-class");e.forEach((e=>{const n=document.createElement("div");n.className="ship-container",n.id=e.id;const r=document.createElement("p");r.textContent=e.shipName;const a=document.createElement("img");a.draggable=!0,a.src=e.shipUrl,a.dataset.length=e.length,n.append(r,a),t.append(n)}))})([{length:5,id:"ship5",shipUrl:n.p+"d56e5a89beb359219e25.svg",shipName:"Battleship (5f)"},{length:4,id:"ship4",shipUrl:n.p+"008846a84b2a34dde315.svg",shipName:"Carrier (4f)"},{length:3,id:"ship3first",shipUrl:n.p+"0504ee6feab7e47038d3.svg",shipName:"Cruiser (3f)"},{length:3,id:"ship3second",shipUrl:n.p+"56e5c8a88ff718d93efc.svg",shipName:"Submarine (3f)"},{length:2,id:"ship2",shipUrl:n.p+"543bf6eb30d63dfd7a2f.svg",shipName:"Destroyer (2f)"}]);const E=document.querySelectorAll(".ship-container"),C=document.querySelectorAll(".playerCells"),S=e=>{setTimeout((()=>{e.target.classList.add("hide-dragable")}),0)},k=e=>{e.target.classList.remove("hide-dragable")};E.forEach((e=>{e.addEventListener("dragstart",S),e.addEventListener("dragend",k)}));const L=e=>{"ship"!==e.target.textContent&&(e.preventDefault(),e.target.classList.add("drag-over"))},G=e=>{"ship"!==e.target.textContent&&(e.preventDefault(),e.target.classList.add("drag-over"))},T=e=>{e.target.classList.remove("drag-over")},M=e=>{const t=e.target.parentNode.rowIndex,n=e.target.cellIndex,r=document.querySelector(".hide-dragable"),a=parseInt(r.dataset.length,10),s=c.createShip(a);!1!==c.placeShip(s,t,n)?(e.target.classList.remove("drag-over"),e.target.textContent="",r.classList.remove("hide-dragable"),r.parentNode.classList.add("hide-ship-container"),c.placeShip(s,t,n),m(l,C),o(C),i(C)):e.target.classList.remove("drag-over")};C.forEach((e=>{e.addEventListener("dragenter",L),e.addEventListener("dragover",G),e.addEventListener("dragleave",T),e.addEventListener("drop",M),e.addEventListener("drop",(e=>{e.preventDefault()}))})),E.forEach((e=>{e.addEventListener("touchstart",(e=>{e.preventDefault()}))})),E.forEach((e=>{e.addEventListener("touchend",(t=>{if(t.target.hasAttribute("draggable")){const n=t.changedTouches[0];let r,a;C.forEach(((e,t)=>{const o=e.getBoundingClientRect();n.clientX>=o.left&&n.clientX<=o.right&&n.clientY>=o.top&&n.clientY<=o.bottom&&(r=Math.floor(t/10),a=t%10)}));const s=parseInt(t.target.dataset.length,10),d=c.createShip(s);if(!1===c.placeShip(d,r,a))return t.target.style.position="static",t.target.style.width="100%",t.target.style.height="50%",void e.append(t.target);c.placeShip(d,r,a),t.target.parentNode.classList.add("hide-ship-container"),c.placeShip(d,r,a),m(l,C),o(C),i(C)}}))})),E.forEach((e=>{e.addEventListener("touchmove",(e=>{if(e.target.hasAttribute("draggable")){const t=e.targetTouches[0];e.target.style.position="absolute",e.target.style.width="100px",e.target.style.height="50px",e.target.style.left=`${t.pageX}px`,e.target.style.top=`${t.pageY}px`}}))}));var A=n(596),B=n.n(A),I=n(520),N=n.n(I),q=n(176),$=n.n(q),j=n(120),U=n.n(j),R=n(808),D=n.n(R),O=n(936),z=n.n(O),P=n(156),_={};_.styleTagTransform=z(),_.setAttributes=U(),_.insert=$().bind(null,"head"),_.domAPI=N(),_.insertStyleElement=D(),B()(P.c,_),P.c&&P.c.locals&&P.c.locals;var F=n(752),H={};H.styleTagTransform=z(),H.setAttributes=U(),H.insert=$().bind(null,"head"),H.domAPI=N(),H.insertStyleElement=D(),B()(F.c,H),F.c&&F.c.locals&&F.c.locals})()})();