parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function r(r){if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(r=e(r))){var n=0,t=function(){};return{s:t,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i,o=!0,c=!1;return{s:function(){a=r[Symbol.iterator]()},n:function(){var r=a.next();return o=r.done,r},e:function(r){c=!0,i=r},f:function(){try{o||null==a.return||a.return()}finally{if(c)throw i}}}}function e(r,e){if(r){if("string"==typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}function n(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}var t=document.querySelector(".start"),a=document.querySelectorAll(".field-cell"),i=document.querySelector(".game-score"),o=document.querySelector(".message-start"),c=document.querySelector(".message-win"),f=document.querySelector(".message-lose"),s=0,d=!1,u=!1,l=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];function b(){var r=Math.floor(16*Math.random());if(!l.every(function(r){return 0!==r})){if(0!==l[r])return b();l[r]=Math.random()<.1?4:2,a[r].classList.add("field-cell--".concat(l[r])),a[r].innerHTML=l[r],g()}}function v(){t.addEventListener("click",function(){d?location.reload():(d=!0,o.classList.add("hidden"),t.classList.remove("start"),t.classList.add("restart"),t.innerHTML="Restart",b(),b(),T())})}function L(r,e,n,t){var o;"subtraction"===t&&(o=r-e),"add"===t&&(o=r+e),a[o].classList.add("field-cell--".concat(2*parseInt(n.innerHTML))),a[o].classList.remove("field-cell--".concat(parseInt(n.innerHTML))),a[o].innerHTML=2*parseInt(n.innerHTML),n.classList.remove("field-cell--".concat(n.innerHTML)),n.innerHTML="",l[r]=0,l[o]=parseInt(a[o].innerHTML),s+=parseInt(a[o].innerHTML),i.innerHTML=s.toString(),H()}function m(r,e,n,t){var i;"subtraction"===t&&(i=r-e),"add"===t&&(i=r+e),l[r]=0,l[i]=parseInt(n.innerHTML),a[i].classList.add("field-cell--".concat(n.innerHTML)),a[i].innerHTML=n.innerHTML,n.classList.remove("field-cell--".concat(n.innerHTML)),n.innerHTML=""}function y(){for(var r=0;r<a.length;r++)if(0!==l[r]&&r>3)for(var e=12;e>0;e-=4){if(0===l[r-e]){m(r,e,a[r],"subtraction");break}if(4===e&&l[r-e]===l[r]||8===e&&l[r-e]===l[r]&&0===l[r-e+4]||12===e&&l[r-e]===l[r]&&0===l[r-e+4]&&0===l[r-e+8]){L(r,e,a[r],"subtraction");break}}}function k(){for(var r=a.length-1;r>=0;r--){var e=r;if(0!==l[e]&&e<12)for(var n=12;n>0;n-=4){if(0===l[e+n]){m(e,n,a[r],"add");break}if(4===n&&l[e+n]===l[e]||8===n&&l[e+n]===l[e]&&0===l[e+n-4]||12===n&&l[e+n]===l[e]&&0===l[e+n-4]&&0===l[e+n-8]){L(e,n,a[r],"add");break}}}}function M(){for(var r=0;r<a.length;r++){if(0!==l[r]&&r<16&&r>12)for(var e=3;e>0;e--){if(0===l[r-e]&&r-e>=12){m(r,e,a[r],"subtraction");break}if(1===e&&l[r-e]===l[r]||2===e&&l[r-e]===l[r]&&0===l[r-e+1]||3===e&&l[r-e]===l[r]&&0===l[r-e+1]&&0===l[r-e+2]){L(r,e,a[r],"subtraction");break}}if(0!==l[r]&&r<12&&r>8)for(var n=3;n>0;n--){if(0===l[r-n]&&r-n>=8){m(r,n,a[r],"subtraction");break}if(1===n&&l[r-n]===l[r]||2===n&&l[r-n]===l[r]&&0===l[r-n+1]||3===n&&l[r-n]===l[r]&&0===l[r-n+1]&&0===l[r-n+2]){L(r,n,a[r],"subtraction");break}}if(0!==l[r]&&r<8&&r>4)for(var t=3;t>0;t--){if(0===l[r-t]&&r-t>=4){m(r,t,a[r],"subtraction");break}if(1===t&&l[r-t]===l[r]||2===t&&l[r-t]===l[r]&&0===l[r-t+1]||3===t&&l[r-t]===l[r]&&0===l[r-t+1]&&0===l[r-t+2]){L(r,t,a[r],"subtraction");break}}if(0!==l[r]&&r<4&&r>0)for(var i=3;i>0;i--){if(0===l[r-i]){m(r,i,a[r],"subtraction");break}if(1===i&&l[r-i]===l[r]||2===i&&l[r-i]===l[r]&&0===l[r-i+1]||3===i&&l[r-i]===l[r]&&0===l[r-i+1]&&0===l[r-i+2]){L(r,i,a[r],"subtraction");break}}}}function h(){for(var r=a.length-1;r>=0;r--){if(0!==l[r]&&r<15&&r>11)for(var e=3;e>0;e--){if(0===l[r+e]){m(r,e,a[r],"add");break}if(1===e&&l[r+e]===l[r]||2===e&&l[r+e]===l[r]&&0===l[r+e-1]||3===e&&l[r+e]===l[r]&&0===l[r+e-1]&&0===l[r+e-2]){L(r,e,a[r],"add");break}}if(0!==l[r]&&r<11&&r>7)for(var n=3;n>0;n--){if(0===l[r+n]&&r+n<=11){m(r,n,a[r],"add");break}if(1===n&&l[r+n]===l[r]||2===n&&l[r+n]===l[r]&&0===l[r+n-1]||3===n&&l[r+n]===l[r]&&0===l[r+n-1]&&0===l[r+n-2]){L(r,n,a[r],"add");break}}if(0!==l[r]&&r<7&&r>3)for(var t=3;t>0;t--){if(0===l[r+t]&&r+t<=7){m(r,t,a[r],"add");break}if(1===t&&l[r+t]===l[r]||2===t&&l[r+t]===l[r]&&0===l[r+t-1]||3===t&&l[r+t]===l[r]&&0===l[r+t-1]&&0===l[r+t-2]){L(r,t,a[r],"add");break}}if(0!==l[r]&&r<3&&r>=0)for(var i=3;i>0;i--){if(0===l[r+i]&&r+i<=3){m(r,i,a[r],"add");break}if(1===i&&l[r+i]===l[r]||2===i&&l[r+i]===l[r]&&0===l[r+i-1]||3===i&&l[r+i]===l[r]&&0===l[r+i-1]&&0===l[r+i-2]){L(r,i,a[r],"add");break}}}}function T(){document.addEventListener("keydown",function(r){"ArrowUp"!==r.code||u?"ArrowDown"!==r.code||u?"ArrowLeft"!==r.code||u?"ArrowRight"!==r.code||u||(h(),b()):(M(),b()):(k(),b()):(y(),b())})}function H(){var e,n=r(l);try{for(n.s();!(e=n.n()).done;){2048===e.value&&(c.classList.remove("hidden"),u=!0)}}catch(t){n.e(t)}finally{n.f()}}function g(){for(var r=0;r<16;r++){var e=r%4==0,n=(r+1)%4==0;if(r<4&&!n&&l[r]===l[r+1]||r<12&&!n&&l[r]===l[r+1]||r>=4&&r<8&&!e&&l[r]===l[r-1]||r>=8&&r<12&&!e&&l[r]===l[r-1]||r<12&&l[r]===l[r+4]||r>=4&&l[r]===l[r-4]||r>=12&&!e&&l[r]===l[r-1]||r>=12&&!n&&l[r]===l[r+1])return!0;if(!((0!==r&&4!==r&&8!==r&&12!==r||!((r+4)%4==0&&l[r]===l[r+4]||(r-4)%4==0&&l[r]===l[r-4]))&&(1!==r&&5!==r&&9!==r&&13!==r||(r+4!==5&&r+4!==9&&r+4!==13||l[r]!==l[r+4])&&(r-4!=9&&r-4!=5&&r-4!=1||l[r]!==l[r-4]))&&(2!==r&&6!==r&&10!==r&&14!==r||(r+4!==6&&r+4!==10&&r+4!==14||l[r]!==l[r+4])&&(r-4!=10&&r-4!=6&&r-4!=2||l[r]!==l[r-4]))&&(3!==r&&7!==r&&11!==r&&15!==r||(r+4!==7&&r+4!==11&&r+4!==15||l[r]!==l[r+4])&&(r-4!=11&&r-4!=7&&r-4!=3||l[r]!==l[r-4]))))return!0}if([].concat(l).every(function(r){return 0!==r}))return f.classList.remove("hidden"),!1}v();
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.20f41dee.js.map