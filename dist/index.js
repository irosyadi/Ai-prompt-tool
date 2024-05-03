(()=>{"use strict";function t(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,u=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=r(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,a=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw a}}}}function r(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}var a=function r(o,a,c,l){if("string"!=typeof o)throw new Error("参数类型错误：tag 必须是字符串"+o);if(o.startsWith("<")&&o.endsWith(">"))var u=(new DOMParser).parseFromString(o,"text/html").body.firstChild;else{if(!/^[a-z]+[a-z\d]*$/.test(o))throw new DOMException("参数类型错误".concat(o));u=document.createElement(o);if(a)for(var s=0,f=Object.entries(a);s<f.length;s++){var p=e(f[s],2),h=p[0],d=p[1];["textContent","innerText","innerHTML"].includes(h)?u[h]=d:"className"===h?u.className=d:"style"===h?"string"==typeof d?u.style.cssText=d:"object"===i(d)&&(u.style.cssText=Object.entries(d).reduce((function(t,n){var r=e(n,2),o=r[0],i=r[1];return t+";".concat(o,":").concat(i)}),"")):u.setAttribute(h,d)}if(c)if(Array.isArray(c)){var m,y=n(c);try{for(y.s();!(m=y.n()).done;){var v=m.value;"string"==typeof v?u.appendChild(document.createTextNode(v)):"object"===i(v)&&(Array.isArray(v)||(v=[v.tag,v.props,v.children]),u.appendChild(r.apply(void 0,t(v))))}}catch(t){y.e(t)}finally{y.f()}}else"string"==typeof c?u.appendChild(document.createTextNode(c)):"object"===i(c)&&u.appendChild(r(c.tag,c.props,c.children))}return u&&l&&l.appendChild(u),u};function c(t,e,n){return c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&l(o,n.prototype),o},c.apply(null,arguments)}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function u(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function h(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===f(e)?e:String(e)}var d,m,y,v=function(){function t(){var e,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,r=a,(n=h(n="h"))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,this.duration=3500,this.timer=null,this.cssUrl="https://dev.jrcaifang.com/css/message.css",this.fontUrl="https://dev.jrcaifang.com/css/iconfont.css",this._init()}var e,n,r;return e=t,(n=[{key:"_init",value:function(){a("link",{rel:"stylesheet",href:this.cssUrl},null,document.head),a("link",{rel:"stylesheet",href:this.fontUrl},null,document.head),this._messageBox=a("dialog",{class:"my-message-modal-dialog"}),this._messageInner=a("div",{class:"inner"},null,this._messageBox),this._messageIcon=a("i",{class:"icon"},null,this._messageInner),this._messageContent=a("div",{class:"content",tabIndex:"1"},null,this._messageInner),this._controlCenter=a("div",{class:"control-center"},null,this._messageBox),this._cancelButton=a("button",{class:"cancel"},null,this._controlCenter),this._confirmButton=a("button",{class:"confirm"},null,this._controlCenter),document.body.appendChild(this._messageBox)}},{key:"_show",value:function(t,e,n){switch(this._closeMessage(),t){case"success":this._messageIcon.className="icon iconfont icon-success";break;case"error":this._messageIcon.className="icon iconfont icon-error";break;case"confirm":this._messageIcon.className="icon iconfont icon-help",this._controlCenter.style.display="flex";break;default:this._messageIcon.className="icon iconfont icon-warn"}this._messageIcon.style.color=n,"object"===f(e)?this._messageContent.appendChild(e):this._messageContent.innerText=e,this._messageBox.showModal()}},{key:"_showMessage",value:function(t,e,n,r){var o=this;this._messageBox.onkeydown=null,this._show(t,e,r),this.timer=setTimeout((function(){o._closeMessage()}),n||this.duration)}},{key:"_showConfirmMessage",value:function(t){this._show("confirm",t,"rgb(249, 176, 25)")}},{key:"_removeChildNodes",value:function(t){t.querySelectorAll("input, textarea").forEach((function(t){t.blur(),t.parentNode.removeChild(t),t=null}));for(var e=t.childNodes.length-1;e>=0;e--)t.childNodes[e].remove()}},{key:"_closeMessage",value:function(){this._removeChildNodes(this._messageContent),this._controlCenter.style.display="none",this._messageBox.close(),clearTimeout(this.timer),this.timer=null}},{key:"success",value:function(t,e){this._showMessage("success",t||"完成",e,"rgb(97, 196, 121)")}},{key:"warning",value:function(t,e){this._showMessage("warning",t||"未知警告",e,"rgb(249, 176, 25)")}},{key:"error",value:function(t,e){this._showMessage("error",t||"未知错误",e,"rgb(225, 80, 66)")}},{key:"confirm",value:function(t){var e=this,n=t.content,r=t.confirmText,o=void 0===r?"确定":r,i=t.cancelText,a=void 0===i?"取消":i,c=t.confirmCallback,l=t.cancelCallback;this._cancelButton.textContent=a,this._confirmButton.textContent=o,this._confirmButton.onclick=function(){e._closeMessage(),c&&c.call(e)},this._cancelButton.onclick=function(){e._closeMessage(),l&&l.call(e)},this._messageBox.onkeydown=function(t){"Enter"===t.key?(e._messageBox.open&&e._confirmButton.click(),t.preventDefault()):"Escape"===t.key&&e._messageBox.open&&e._cancelButton.click()},this._showConfirmMessage(n)}}])&&p(e.prototype,n),r&&p(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),g=(d=v,y=new Proxy(d,{construct:function(t,e){return m?console.warn("".concat(d.name,"为单例构造函数，只能有一个实例")):m=c(t,u(e)),m}}),d.prototype.constructor=y,y);function b(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */b=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function u(t,e,n,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new k(o||[]);return r(a,"_invoke",{value:E(t,n,c)}),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function p(){}function h(){}function d(){}var m={};l(m,i,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(I([])));v&&v!==e&&n.call(v,i)&&(m=v);var g=d.prototype=p.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(r,i,a,c){var l=s(t[r],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==P(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(l.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function E(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function S(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=s(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function I(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=d,r(g,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:h,configurable:!0}),h.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),l(g,c,"Generator"),l(g,i,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=I,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function w(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}function x(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){w(i,r,o,a,c,"next",t)}function c(t){w(i,r,o,a,c,"throw",t)}a(void 0)}))}}function E(t,e,n){return(e=M(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function S(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function T(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=A(t);if(e){var o=A(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}(this,n)}}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,M(r.key),r)}}function C(t,e,n){return e&&L(t.prototype,e),n&&L(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function M(t){var e=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===P(e)?e:String(e)}var N=function(t){T(r,t);var e,n=I(r);function r(){var t;return j(this,r),E(O(t=n.call(this)),"usePromptHandler",(function(e){var n=t.getTextArea();n.value+="P"===e.tagName?e.innerText:e.children[0].innerText,t.triggerInputEvent&&t.triggerInputEvent(n),n.focus()})),E(O(t),"clearAllHandler",(function(e){e.stopPropagation();var n=t.getTextArea();n.value="",t.triggerInputEvent&&t.triggerInputEvent(n)})),E(O(t),"startHandler",(function(e){e.stopPropagation(),e.target.classList.contains("icon-sort")&&(t.isSort=!0,t.clientY=e.clientY,t.sortElement="LI"!==e.target.tagName?e.target.parentElement:e.target)})),E(O(t),"endFunc",(function(){t.isSort=!1,t.clientY=0,t.sortElement&&(t.sortElement.style.cssText=""),t.sortElement=null})),E(O(t),"endHandler",(function(e){e.stopPropagation(),t.endFunc()})),E(O(t),"sortMove",(function(e){t.sortElement.remove(),t.promptsElementInner.insertBefore(t.sortElement,e),t.prompts=[];var n,r=S(t.promptsElementInner.children);try{for(r.s();!(n=r.n()).done;){var o=n.value;t.prompts.push({title:o.querySelector("p").innerText})}}catch(t){r.e(t)}finally{r.f()}t.syncSetPrompts(t.prompts)})),E(O(t),"moveHandler",(function(e){if(e.stopPropagation(),t.isSort){var n=t.clientY-(e.clientY||e.touches[0].clientY);if(t.sortElement.style.transform="translateY(".concat(-n,"px)"),(t.MARGIN_BOTTOM+t.LINE_HEIGHT)/2<Math.abs(n)){if(n<0){var r=t.sortElement.previousElementSibling;r&&t.sortMove(r)}else{var o,i=null===(o=t.sortElement.nextElementSibling)||void 0===o?void 0:o.nextElementSibling;t.sortMove(i)}t.endFunc()}}})),t.RIGHT="20px",t.BOTTOM="50px",t.LINE_HEIGHT=30,t.MARGIN_BOTTOM=10,t.PROMPT_FONT_SIZE=13,t.myMgs=new g,t.isSort=!1,t.clientY=0,t.sortElement=null,t.init(),t}return C(r,[{key:"init",value:(e=x(b().mark((function t(){var e,n;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.injectIconsfont(),this.firstInstatllImportPrompts(),this.createMainDom(),e=localStorage.getItem("right")||localStorage.setItem("right",this.RIGHT)||this.RIGHT,n=localStorage.getItem("bottom")||localStorage.setItem("bottom",this.BOTTOM)||this.BOTTOM,this.container.style.cssText="--right:".concat(e,";\n    --bottom:").concat(n,";\n    --lineHeight: ").concat(this.LINE_HEIGHT,"px;\n    --marginBottom:").concat(this.MARGIN_BOTTOM,"px;"),t.prev=6,t.next=9,this.syncGetPrompts();case 9:this.prompts=t.sent,t.next=16;break;case 12:t.prev=12,t.t0=t.catch(6),this.myMgs.warning("读取提示词出错".concat(t.t0.message)),console.log("读取提示词出错",t.t0);case 16:this.promptRender(),this.setUseDelete(this.promptsElementInner),this.addPrompt(),this.setSortEndEvent(),this.acceptMessage(),this.createInputEvent();case 22:case"end":return t.stop()}}),t,this,[[6,12]])}))),function(){return e.apply(this,arguments)})},{key:"firstInstatllImportPrompts",value:function(){var t=this;this.getStorage("installed").then((function(e){void 0===e.installed&&fetch(chrome.runtime.getURL("public/recommend.json")).then((function(t){return t.json()})).then(function(){var e=x(b().mark((function e(n){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.prompts=n.map((function(t){return{title:t}})),e.next=3,t.syncSetPrompts(t.prompts);case 3:t.promptRender(),t.setStorage({installed:!0});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}},{key:"acceptMessage",value:function(){var t,e=this;t=function(){e.syncGetPrompts().then((function(t){e.prompts=t,e.promptRender(),e.myMgs.success("更新完成",1500)})).catch((function(t){e.myMgs.warning("提示词渲染出错，需要手动刷新"),console.warn("提示词渲染出错",t)}))},chrome.runtime.onMessage.addListener((function(e){var n;"popupMessage"===e.type&&0===(null===(n=e.data)||void 0===n?void 0:n.code)&&t()}))}},{key:"addPrompt",value:function(){var t=this;this.container.querySelector(".add-btn").addEventListener("click",(function(e){e.stopPropagation();var n=a("div",null,[["p",{innerText:"输入要添加的提示词"}],["textarea",{class:"enter-prompt",wrap:"soft",rows:"3"}]]);t.myMgs.confirm({content:n,confirmCallback:function(){var e=(n.children[1].value||"").trim();e&&(t.prompts.push({title:e}),t.syncSetPrompts(t.prompts),t.promptsElementInner.appendChild(t.createItemDom(e))),n=null},cancelCallback:function(){return n=null}})}))}},{key:"setUseDelete",value:function(t){var e=this;t.addEventListener("click",(function(t){t.stopPropagation(),["LI","P"].includes(t.target.tagName)?e.usePromptHandler(t.target):"del"===t.target.className&&function(t){e.syncGetPrompts().then((function(n){var r=t.target.previousElementSibling.innerText;e.prompts=n.filter((function(t){return t.title!==r})),e.syncSetPrompts(e.prompts),t.target.parentElement.remove()})).catch((function(t){return e.myMgs.warning("读取提示词出错".concat(t.message))}))}(t)}))}},{key:"clearAll",value:function(t){var e=a("i",{class:"clear-all-content",innerText:"+"});e.addEventListener("click",this.clearAllHandler),t=t||this.getTextArea().parentElement,"static"===window.getComputedStyle(t).position&&(t.style.position="relative"),t.appendChild(e)}},{key:"setSortEndEvent",value:function(){this.promptsElementInner.addEventListener("mouseup",this.endHandler),this.promptsElementInner.addEventListener("touchend",this.endHandler)}},{key:"setSortBtnEvent",value:function(t,e){t.addEventListener("mousedown",this.startHandler),t.addEventListener("touchstart",this.startHandler),e.addEventListener("mouseleave",this.endHandler),t.addEventListener("mousemove",this.moveHandler),t.addEventListener("touchmove",this.moveHandler)}}]),r}(function(t){T(n,t);var e=I(n);function n(){var t;return j(this,n),(t=e.call(this)).prompts=null,t.promptsElementInner=null,t.container=null,t}return C(n,[{key:"getTextArea",value:function(){var t;return null===(t=document.getElementsByTagName("textarea"))||void 0===t?void 0:t[0]}},{key:"createMainDom",value:function(){this.container=a("div",{id:"prompt-container"},[["div",{class:"control-center"},[["button",{class:"add-btn item"},[["i",{class:"iconfont icon-add"}],["span",{innerText:"添加新提示词"}]]]]]]),this.promptsElementInner=a("ul",null,null,a("div",{class:"prompt-box"},null,this.container)),document.body.appendChild(this.container);this.promptsElementInner.addEventListener("mousewheel",(function(t){return t.stopPropagation()}),!0);var t=this.promptsElementInner.parentElement;this.container.addEventListener("mouseenter",(function(e){return t.style.cssText="width: 100vw;transform: scaleY(1);"})),this.promptsElementInner.addEventListener("mouseleave",(function(e){return t.style.cssText=""})),this.container.addEventListener("mouseleave",(function(e){return t.style.cssText=""}))}},{key:"createItemDom",value:function(t){var e=a("li",{class:"item"},[["p",{textContent:t}],["i",{class:"del",textContent:"+"}]]);return this.setSortBtnEvent(a("i",{class:"iconfont icon-sort icon-block"},null,e),e),e}},{key:"promptRender",value:function(){var t,e=document.createDocumentFragment(),n=S(this.prompts);try{for(n.s();!(t=n.n()).done;){var r=t.value;e.appendChild(this.createItemDom(r.title))}}catch(t){n.e(t)}finally{n.f()}this.promptsElementInner.innerHTML="",this.promptsElementInner.appendChild(e),this.promptsElementInner.style.cssText="--promptFontSize: ".concat(this.PROMPT_FONT_SIZE,"px;");var o=this.promptsElementInner.parentElement;requestAnimationFrame((function(){return o.scrollTop=o.scrollHeight}))}},{key:"createInputEvent",value:function(){this.inputEvent=new Event("input",{bubbles:!0,cancelable:!0})}},{key:"triggerInputEvent",value:function(t){t.dispatchEvent(this.inputEvent)}}]),n}(function(){function t(){j(this,t)}return C(t,[{key:"getStorage",value:function(t){return new Promise((function(e){chrome.storage.local.get([t],(function(t){e(t)}))}))}},{key:"syncGetPrompts",value:function(){return this.getStorage("prompts").then((function(t){return t.prompts||[]}))}},{key:"setStorage",value:function(t){return chrome.storage.local.set(t)}},{key:"syncSetPrompts",value:function(t){return this.setStorage({prompts:t})}},{key:"injectIconsfont",value:function(){a("style",{type:"text/css",innerHTML:'@font-face {\n      font-family: "iconfont";\n      src: url(\''.concat(chrome.runtime.getURL("public/font/iconfont.woff2?t=1693204643355"),"') format('woff2'),\n      url('").concat(chrome.runtime.getURL("public/font/iconfont.woff?t=1693204643355"),"') format('woff'),\n      url('").concat(chrome.runtime.getURL("public/font/iconfont.ttf?t=1693204643355"),"') format('truetype');\n    }")},null,document.head)}},{key:"injectScript",value:function(){a("script",{type:"text/javascript",src:chrome.runtime.getURL("src/inject_script/index.js")},null,document.head)}}]),t}()));function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=W(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},R.apply(this,arguments)}function H(t,e,n){return(e=Y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function q(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return G(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function G(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function D(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Y(r.key),r)}}function U(t,e,n){return e&&F(t.prototype,e),n&&F(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Y(t){var e=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===B(e)?e:String(e)}function z(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&$(t,e)}function $(t,e){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},$(t,e)}function Z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=W(t);if(e){var o=W(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return K(t)}(this,n)}}function K(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function W(t){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},W(t)}var J=function(t){z(n,t);var e=Z(n);function n(){var t;return D(this,n),(t=e.call(this)).observerAddEvent(),t}return U(n,[{key:"observerAddEvent",value:function(){var t=this;this.clearAll(this.getTextArea().parentElement.parentElement);var e=new MutationObserver((function(e,n){var r,o=q(e);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(i.addedNodes.length){var a,c=q(i.addedNodes);try{for(c.s();!(a=c.n()).done;){var l,u=a.value;"__next"===(null===(l=i.target)||void 0===l?void 0:l.id)&&u.querySelector("main")&&n.observe(u.querySelector("main"),{childList:!0}),u.querySelector("form")&&queueMicrotask((function(){return t.clearAll(t.getTextArea().parentElement.parentElement)}))}}catch(t){c.e(t)}finally{c.f()}}}}catch(t){o.e(t)}finally{o.f()}}));e.observe(document.querySelector("#__next"),{childList:!0}),e.observe(document.querySelector("main"),{childList:!0})}}]),n}(N),Q=function(t){z(n,t);var e=Z(n);function n(){var t;return D(this,n),H(K(t=e.call(this)),"clearAllHandler",(function(e){e.stopPropagation();for(var n=t.getTextArea();n.childNodes.length;)n.lastChild.remove();return n})),t}return U(n)}(N),V=function(t){z(n,t);var e=Z(n);function n(){var t;return D(this,n),H(K(t=e.call(this)),"usePromptHandler",(function(e){var n=t.getTextArea();n.insertBefore(a("p",{innerText:"P"===e.tagName?e.innerText:e.children[0].innerText}),n.lastChild),n.focus()})),t}return U(n)}(Q),X=function(t){z(n,t);var e=Z(n);function n(){var t;return D(this,n),(t=e.call(this))._el=null,t.observerAddEvent(),t}return U(n,[{key:"observerAddEvent",value:function(){var t=this;this.clearAll(),new MutationObserver((function(e,n){var r,o=q(e);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(i.addedNodes.length){var a,c=q(i.addedNodes);try{for(c.s();!(a=c.n()).done;){var l=a.value;l.querySelector("fieldset")?(t._el=l.querySelector("fieldset>div>div>div"),t.clearAll(t._el)):l.querySelector('[role="status"]')&&n.observe(l,{childList:!0})}}catch(t){c.e(t)}finally{c.f()}}}}catch(t){o.e(t)}finally{o.f()}})).observe(document.body,{childList:!0})}},{key:"getTextArea",value:function(){return(this._el||document).querySelector("div[contenteditable=true]")}}]),n}(V),tt=function(t){z(n,t);var e=Z(n);function n(){return D(this,n),e.call(this)}return U(n,[{key:"init",value:function(){R(W(n.prototype),"init",this).call(this),this.shadowRootInjectStyle(),this.clearAll(this.getTextInputBox().querySelector(".root"))}},{key:"shadowRootInjectStyle",value:function(){this.getTextInputBox().appendChild(a("style",{type:"text/css",innerHTML:'.clear-all-content { position: absolute; top: -8px; right: 0; z-index: 9;\n        width: 15px; height: 15px; line-height: 15px; border-radius: 50%; transform: rotateZ(45deg); \n        text-align: center;font-size: 15px;font-style: normal; background-color: #0000001a; cursor: pointer;\n        font-family: "Microsoft YaHei", "Avenir", "Helvetica", "Arial", "Heiti SC", "sans-serif"; }'}))}},{key:"getTextInputBox",value:function(){var t;return null===(t=document.getElementsByClassName("cib-serp-main"))||void 0===t?void 0:t[0].shadowRoot.getElementById("cib-action-bar-main").shadowRoot}},{key:"getTextArea",value:function(){return this.getTextInputBox().querySelector("cib-text-input").shadowRoot.querySelector("textarea")}}]),n}(N),et=function(t){z(n,t);var e=Z(n);function n(){var t;return D(this,n),(t=e.call(this)).clearAll(),t}return U(n,[{key:"getTextArea",value:function(){return document.querySelector("div[contenteditable=true][role=textbox]")}},{key:"clearAll",value:function(){R(W(n.prototype),"clearAll",this).call(this,this.getTextArea().parentElement.parentElement.parentElement.parentElement.parentElement)}}]),n}(V),nt=function(t){z(n,t);var e=Z(n);function n(){var t;return D(this,n),H(K(t=e.call(this)),"usePromptHandler",(function(e){var n=t.getTextArea(),r=document.createTextNode("P"===e.tagName?e.innerText:e.children[0].innerText);n.appendChild(r),a("br",null,null,n),t.triggerInputEvent(n),n.focus()})),t.clearAll(),t}return U(n,[{key:"getTextArea",value:function(){return document.querySelector("div[contenteditable=true]")}},{key:"clearAll",value:function(t){R(W(n.prototype),"clearAll",this).call(this,t);var e=this.getTextArea();this.newLine(e)}},{key:"newLine",value:function(t){var e=this,n=!1;t.addEventListener("keyup",(function(t){t.stopPropagation(),t.preventDefault(),("ShiftRight"===t.code||"ShiftLeft"===t.code)&&(n=!1)}),!0),t.addEventListener("keydown",(function(r){if("ShiftRight"===r.code||"ShiftLeft"===r.code)r.stopPropagation(),r.preventDefault(),n=!0;else if(n&&"Enter"===r.code)return r.stopPropagation(),a("br",null,null,t),e.triggerInputEvent(t),!1}),!0)}},{key:"analogInputDelete",value:function(t){var e=new KeyboardEvent("keydown",{key:" ",code:"Space",charCode:32,keyCode:32});t.dispatchEvent(e);var n=new KeyboardEvent("keydown",{key:"Backspace",code:"Backspace",charCode:8,keyCode:8});t.dispatchEvent(n)}},{key:"clearAllHandler",value:function(){var t=R(W(n.prototype),"clearAllHandler",this).call(this);this.analogInputDelete(t)}}]),n}(Q),rt=function(t){z(n,t);var e=Z(n);function n(){var t;return D(this,n),H(K(t=e.call(this)),"usePromptHandler",(function(e){var n=t.getTextArea();a("span",{"data-lexical-text":!0,innerText:"P"===e.tagName?e.innerText:e.children[0].innerText},null,n);n.focus()})),t}return U(n,[{key:"getTextArea",value:function(){return document.querySelector("div[contenteditable=true]").firstChild}},{key:"clearAll",value:function(){var t=this.getTextArea().parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;t.style.overflow="visible",R(W(n.prototype),"clearAll",this).call(this,t)}},{key:"clearAllHandler",value:function(){var t=R(W(n.prototype),"clearAllHandler",this).call(this);this.analogInputDelete(t)}}]),n}(nt);window.onload=function(){var t,e=function(){return document.querySelector("textarea")};"chatgpt.com"===window.location.hostname?t=J:"claude.ai"===window.location.hostname?(e=function(){return document.querySelector("div[contenteditable=true]")},t=X):"www.bing.com"===window.location.hostname?(e=function(){return document.querySelector(".cib-serp-main")},t=tt):"gemini.google.com"===window.location.hostname?(e=function(){return document.querySelector("div[contenteditable=true][role=textbox]")},t=et):"chat.baidu.com"===window.location.hostname?(e=function(){return document.querySelector("div[contenteditable=true]")},t=nt):"yiyan.baidu.com"===window.location.hostname?(e=function(){return document.querySelector("div[contenteditable=true]")},t=rt):t=N,new Promise((function(t){if(e())t();else{var n=new MutationObserver((function(n,o){e()&&(t(),r())})),r=function(){n.disconnect(),n=null,clearTimeout(o)},o=setTimeout(r,18e5);n.observe(document.body,{childList:!0})}})).then((function(){new t})).catch((function(t){alert("Ai Prompt加载出错"),console.warn(t)}))}})();