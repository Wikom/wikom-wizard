!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("react-redux")):"function"==typeof define&&define.amd?define("wikomWizard",["react","prop-types","react-redux"],t):"object"==typeof exports?exports.wikomWizard=t(require("react"),require("prop-types"),require("react-redux")):e.wikomWizard=t(e.react,e["prop-types"],e["react-redux"])}(window,function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";n.r(t);var r="@@wikom-wizard/",o=r+"INITIALIZE",u=r+"DESTROY",i=r+"STEP_FORWARD",c=r+"STEP_BACK",a=r+"SET_ERROR",f=function(e){return{type:o,name:e}},p=function(e){return{type:i,name:e}},s=function(e){return{type:c,name:e}},l=function(e,t){return{type:a,name:e,error:t}},y=function(e){return{type:"@@wikom-wizard/STEP_FORWARD_PRESERVING_ERRORS",name:e}};function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object.assign({},e,d({},t.name,{step:1}));case u:var n=Object.assign({},e);return delete n[t.name],n;case i:return Object.assign({},e,d({},t.name,{step:e[t.name].step+1}));case c:return Object.assign({},e,d({},t.name,{step:e[t.name].step-1}));case a:var r=Object.assign({},e);return null!==t.error?r[t.name].error=t.error:delete r[t.name].error,r;case"@@wikom-wizard/STEP_FORWARD_PRESERVING_ERRORS":var f=Object.assign({},e);return f[t.name].step=e[t.name].step+1,f;default:return e}},m=n(0),v=n.n(m),O=n(1),h=n.n(O),w=n(2);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,j(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,m["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){this.props.initialize()}},{key:"componentWillUnmount",value:function(){this.props.destroy()}},{key:"render",value:function(){return v.a.createElement("div",null,this.props.activeStep)}}])&&S(n.prototype,r),o&&S(n,o),t}(),P=Object(w.connect)(function(e,t){var n=e.wizard,r=t.name,o=t.children;return{activeStep:v.a.Children.map(o,function(e){return n[r]&&n[r].step===e.props.step?v.a.cloneElement(e,{wizard:r}):null}).filter(function(e){return null!==e})}},function(e,t){var n=t.name;return{initialize:function(){return e(f(n))},destroy:function(){return e(function(e){return{type:u,name:e}}(n))}}})(g);P.propTypes={name:h.a.string.isRequired};var T=P;function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),z(this,W(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,m["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){"function"==typeof this.props.onEnter&&this.props.onEnter(this.props)}},{key:"componentWillUnmount",value:function(){"function"==typeof this.props.onLeave&&this.props.onLeave(this.props)}},{key:"render",value:function(){return v.a.createElement("div",null,v.a.createElement(this.props.Component,this.props))}}])&&k(n.prototype,r),o&&k(n,o),t}(),C=Object(w.connect)(null,function(e,t){var n=t.wizard;return{stepForward:function(){return e(p(n))},stepBack:function(){return e(s(n))},stepForwardPreservingErrors:function(){return e(y(n))}}})(q);C.propTypes={step:h.a.number.isRequired,wizard:h.a.string,Component:h.a.func.isRequired,onEnter:h.a.func,onLeave:h.a.func};var A=C;n.d(t,"Wizard",function(){return T}),n.d(t,"Step",function(){return A}),n.d(t,"initializeWizard",function(){return f}),n.d(t,"stepForward",function(){return p}),n.d(t,"stepForwardPreservingErrors",function(){return y}),n.d(t,"stepBack",function(){return s}),n.d(t,"setError",function(){return l}),n.d(t,"INITIALIZE",function(){return o}),n.d(t,"DESTROY",function(){return u}),n.d(t,"STEP_FORWARD",function(){return i}),n.d(t,"STEP_BACK",function(){return c}),n.d(t,"SET_ERROR",function(){return a}),n.d(t,"wizardReducer",function(){return b});t.default=T}])});
//# sourceMappingURL=index.js.map