!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new c("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new c("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(e){function t(e){a(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.name="TypeError",n.message=e,n}return u(t,Error),t}();function s(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];f(n,r,i,a),Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return n},set:function(u){n&&"object"==(void 0===n?"undefined":o(n))&&Object.keys(n).forEach(function(e){!function e(t,n){t&&"object"==(void 0===t?"undefined":o(t))&&Object.keys(t[n]).forEach(function(r){e(t[n],r)});delete t[n]}(n,e)}),r(i,e,t,a,n=u)}})}function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];e&&"object"==(void 0===e?"undefined":o(e))&&Object.keys(e).forEach(function(o){var a=[].concat(i(r));a.push(o),s(e,o,e[o],t,n,a)})}t.Observer=function(){function e(t){var n=this;a(this,e),"object"!=(void 0===t?"undefined":o(t))&&console.error(new c("'data' must be an object")),this.__data=t,this.__ons={},f(t,function(e,t,r,o,i){n.haveListener("change")&&n.emit("change",[e,t,o,i])})}return r(e,[{key:"on",value:function(e,t){return this.__ons[e]=t,this}},{key:"emit",value:function(e,t){var n;return(n=this.__ons)[e].apply(n,i(t)),this}},{key:"haveListener",value:function(e){return!!this.__ons[e]}}]),e}()},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";var r=n(0),o=n(3);!function(e){e.define("Binder",function(e){e({Observer:r.Observer,Watcher:o.Watcher})})}(sword)},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Watcher=void 0;var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_Observer=__webpack_require__(0);function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Watcher=exports.Watcher=function(){function Watcher(data,bindingData){var _this=this;_classCallCheck(this,Watcher),this.__data=data,this.__bindingData=bindingData,this.oberver=new _Observer.Observer(data),this.__ons={},this.__bindings={},this.oberver.on("change",function(root,data,keys,value){for(var bd=_this.__bindingData,evalString="bd",i=0;i<keys.length;i++)evalString+="["+JSON.stringify(keys[i])+"]";_this.__bindings[evalString]&&(evalString=_this.__bindings[evalString]),console.log(evalString),evalString+=" = "+JSON.stringify(value),eval(evalString),_this.haveListener("change")&&_this.emit("change",[root,data,keys,value])})}return _createClass(Watcher,[{key:"on",value:function(e,t){return this.__ons[e]=t,this}},{key:"emit",value:function(e,t){var n;return(n=this.__ons)[e].apply(n,_toConsumableArray(t)),this}},{key:"haveListener",value:function(e){return!!this.__ons[e]}},{key:"bind",value:function(e,t){for(var n="bd",r=0;r<e.length;r++)n+="["+JSON.stringify(e[r])+"]";for(var o="bd",i=0;i<t.length;i++)o+="["+JSON.stringify(t[i])+"]";this.__bindings[n]=o}}]),Watcher}()}]);