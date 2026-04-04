function gx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function vx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kg={exports:{}},ic={},Bg={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=Symbol.for("react.element"),_x=Symbol.for("react.portal"),xx=Symbol.for("react.fragment"),yx=Symbol.for("react.strict_mode"),Sx=Symbol.for("react.profiler"),Ex=Symbol.for("react.provider"),Mx=Symbol.for("react.context"),wx=Symbol.for("react.forward_ref"),Tx=Symbol.for("react.suspense"),Ax=Symbol.for("react.memo"),Rx=Symbol.for("react.lazy"),Qh=Symbol.iterator;function Cx(t){return t===null||typeof t!="object"?null:(t=Qh&&t[Qh]||t["@@iterator"],typeof t=="function"?t:null)}var zg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hg=Object.assign,Vg={};function js(t,e,n){this.props=t,this.context=e,this.refs=Vg,this.updater=n||zg}js.prototype.isReactComponent={};js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gg(){}Gg.prototype=js.prototype;function Ld(t,e,n){this.props=t,this.context=e,this.refs=Vg,this.updater=n||zg}var Nd=Ld.prototype=new Gg;Nd.constructor=Ld;Hg(Nd,js.prototype);Nd.isPureReactComponent=!0;var ep=Array.isArray,Wg=Object.prototype.hasOwnProperty,Dd={current:null},jg={key:!0,ref:!0,__self:!0,__source:!0};function Xg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Wg.call(e,i)&&!jg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ta,type:t,key:s,ref:o,props:r,_owner:Dd.current}}function bx(t,e){return{$$typeof:ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===ta}function Px(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tp=/\/+/g;function Nc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Px(""+t.key):e.toString(36)}function ll(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ta:case _x:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Nc(o,0):i,ep(r)?(n="",t!=null&&(n=t.replace(tp,"$&/")+"/"),ll(r,e,n,"",function(c){return c})):r!=null&&(Ud(r)&&(r=bx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(tp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ep(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Nc(s,a);o+=ll(s,e,n,l,r)}else if(l=Cx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Nc(s,a++),o+=ll(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var i=[],r=0;return ll(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Lx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},cl={transition:null},Nx={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:cl,ReactCurrentOwner:Dd};function qg(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!Ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=js;ze.Fragment=xx;ze.Profiler=Sx;ze.PureComponent=Ld;ze.StrictMode=yx;ze.Suspense=Tx;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nx;ze.act=qg;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Hg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Wg.call(e,l)&&!jg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ta,type:t.type,key:r,ref:s,props:i,_owner:o}};ze.createContext=function(t){return t={$$typeof:Mx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ex,_context:t},t.Consumer=t};ze.createElement=Xg;ze.createFactory=function(t){var e=Xg.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:wx,render:t}};ze.isValidElement=Ud;ze.lazy=function(t){return{$$typeof:Rx,_payload:{_status:-1,_result:t},_init:Lx}};ze.memo=function(t,e){return{$$typeof:Ax,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};ze.unstable_act=qg;ze.useCallback=function(t,e){return Yt.current.useCallback(t,e)};ze.useContext=function(t){return Yt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Yt.current.useEffect(t,e)};ze.useId=function(){return Yt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Yt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};ze.useRef=function(t){return Yt.current.useRef(t)};ze.useState=function(t){return Yt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Yt.current.useTransition()};ze.version="18.3.1";Bg.exports=ze;var re=Bg.exports;const $g=vx(re),Dx=gx({__proto__:null,default:$g},[re]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ux=re,Ix=Symbol.for("react.element"),Fx=Symbol.for("react.fragment"),Ox=Object.prototype.hasOwnProperty,kx=Ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bx={key:!0,ref:!0,__self:!0,__source:!0};function Yg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Ox.call(e,i)&&!Bx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ix,type:t,key:s,ref:o,props:r,_owner:kx.current}}ic.Fragment=Fx;ic.jsx=Yg;ic.jsxs=Yg;kg.exports=ic;var L=kg.exports,Vu={},Kg={exports:{}},_n={},Zg={exports:{}},Jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,q){var J=N.length;N.push(q);e:for(;0<J;){var ae=J-1>>>1,_e=N[ae];if(0<r(_e,q))N[ae]=q,N[J]=_e,J=ae;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var q=N[0],J=N.pop();if(J!==q){N[0]=J;e:for(var ae=0,_e=N.length,He=_e>>>1;ae<He;){var X=2*(ae+1)-1,ie=N[X],ge=X+1,le=N[ge];if(0>r(ie,J))ge<_e&&0>r(le,ie)?(N[ae]=le,N[ge]=J,ae=ge):(N[ae]=ie,N[X]=J,ae=X);else if(ge<_e&&0>r(le,J))N[ae]=le,N[ge]=J,ae=ge;else break e}}return q}function r(N,q){var J=N.sortIndex-q.sortIndex;return J!==0?J:N.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,m=!1,g=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=N)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function y(N){if(x=!1,_(N),!g)if(n(l)!==null)g=!0,W(C);else{var q=n(c);q!==null&&ee(y,q.startTime-N)}}function C(N,q){g=!1,x&&(x=!1,f(b),b=-1),m=!0;var J=h;try{for(_(q),d=n(l);d!==null&&(!(d.expirationTime>q)||N&&!P());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,h=d.priorityLevel;var _e=ae(d.expirationTime<=q);q=t.unstable_now(),typeof _e=="function"?d.callback=_e:d===n(l)&&i(l),_(q)}else i(l);d=n(l)}if(d!==null)var He=!0;else{var X=n(c);X!==null&&ee(y,X.startTime-q),He=!1}return He}finally{d=null,h=J,m=!1}}var A=!1,T=null,b=-1,w=5,S=-1;function P(){return!(t.unstable_now()-S<w)}function G(){if(T!==null){var N=t.unstable_now();S=N;var q=!0;try{q=T(!0,N)}finally{q?H():(A=!1,T=null)}}else A=!1}var H;if(typeof v=="function")H=function(){v(G)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Q=$.port2;$.port1.onmessage=G,H=function(){Q.postMessage(null)}}else H=function(){p(G,0)};function W(N){T=N,A||(A=!0,H())}function ee(N,q){b=p(function(){N(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,W(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var J=h;h=q;try{return N()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var J=h;h=N;try{return q()}finally{h=J}},t.unstable_scheduleCallback=function(N,q,J){var ae=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,N){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=J+_e,N={id:u++,callback:q,priorityLevel:N,startTime:J,expirationTime:_e,sortIndex:-1},J>ae?(N.sortIndex=J,e(c,N),n(l)===null&&N===n(c)&&(x?(f(b),b=-1):x=!0,ee(y,J-ae))):(N.sortIndex=_e,e(l,N),g||m||(g=!0,W(C))),N},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(N){var q=h;return function(){var J=h;h=q;try{return N.apply(this,arguments)}finally{h=J}}}})(Jg);Zg.exports=Jg;var zx=Zg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hx=re,vn=zx;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qg=new Set,Io={};function Vr(t,e){Ls(t,e),Ls(t+"Capture",e)}function Ls(t,e){for(Io[t]=e,t=0;t<e.length;t++)Qg.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=Object.prototype.hasOwnProperty,Vx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,np={},ip={};function Gx(t){return Gu.call(ip,t)?!0:Gu.call(np,t)?!1:Vx.test(t)?ip[t]=!0:(np[t]=!0,!1)}function Wx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jx(t,e,n,i){if(e===null||typeof e>"u"||Wx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Id=/[\-:]([a-z])/g;function Fd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Id,Fd);Ft[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Id,Fd);Ft[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Id,Fd);Ft[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Od(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jx(e,n,r,i)&&(n=null),i||r===null?Gx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var bi=Hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),ls=Symbol.for("react.portal"),cs=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),Wu=Symbol.for("react.profiler"),ev=Symbol.for("react.provider"),tv=Symbol.for("react.context"),Bd=Symbol.for("react.forward_ref"),ju=Symbol.for("react.suspense"),Xu=Symbol.for("react.suspense_list"),zd=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),nv=Symbol.for("react.offscreen"),rp=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=rp&&t[rp]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,Dc;function yo(t){if(Dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dc=e&&e[1]||""}return`
`+Dc+t}var Uc=!1;function Ic(t,e){if(!t||Uc)return"";Uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yo(t):""}function Xx(t){switch(t.tag){case 5:return yo(t.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return t=Ic(t.type,!1),t;case 11:return t=Ic(t.type.render,!1),t;case 1:return t=Ic(t.type,!0),t;default:return""}}function qu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cs:return"Fragment";case ls:return"Portal";case Wu:return"Profiler";case kd:return"StrictMode";case ju:return"Suspense";case Xu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tv:return(t.displayName||"Context")+".Consumer";case ev:return(t._context.displayName||"Context")+".Provider";case Bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zd:return e=t.displayName||null,e!==null?e:qu(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return qu(t(e))}catch{}}return null}function qx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qu(e);case 8:return e===kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function iv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $x(t){var e=iv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=$x(t))}function rv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=iv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $u(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sv(t,e){e=e.checked,e!=null&&Od(t,"checked",e,!1)}function Yu(t,e){sv(t,e);var n=rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ku(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function op(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ku(t,e,n){(e!=="number"||bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var So=Array.isArray;function Ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Zu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ap(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(So(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function ov(t,e){var n=rr(e.value),i=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function lp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function av(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?av(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ma,lv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ma=Ma||document.createElement("div"),Ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yx=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(t){Yx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ao[e]=Ao[t]})});function cv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ao.hasOwnProperty(t)&&Ao[t]?(""+e).trim():e+"px"}function uv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=cv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Kx=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qu(t,e){if(e){if(Kx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function ef(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tf=null;function Hd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nf=null,Es=null,Ms=null;function cp(t){if(t=ra(t)){if(typeof nf!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=lc(e),nf(t.stateNode,t.type,e))}}function fv(t){Es?Ms?Ms.push(t):Ms=[t]:Es=t}function dv(){if(Es){var t=Es,e=Ms;if(Ms=Es=null,cp(t),e)for(t=0;t<e.length;t++)cp(e[t])}}function hv(t,e){return t(e)}function pv(){}var Fc=!1;function mv(t,e,n){if(Fc)return t(e,n);Fc=!0;try{return hv(t,e,n)}finally{Fc=!1,(Es!==null||Ms!==null)&&(pv(),dv())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var i=lc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var rf=!1;if(wi)try{var so={};Object.defineProperty(so,"passive",{get:function(){rf=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{rf=!1}function Zx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ro=!1,Pl=null,Ll=!1,sf=null,Jx={onError:function(t){Ro=!0,Pl=t}};function Qx(t,e,n,i,r,s,o,a,l){Ro=!1,Pl=null,Zx.apply(Jx,arguments)}function ey(t,e,n,i,r,s,o,a,l){if(Qx.apply(this,arguments),Ro){if(Ro){var c=Pl;Ro=!1,Pl=null}else throw Error(ne(198));Ll||(Ll=!0,sf=c)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function up(t){if(Gr(t)!==t)throw Error(ne(188))}function ty(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return up(r),t;if(s===i)return up(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function vv(t){return t=ty(t),t!==null?_v(t):null}function _v(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_v(t);if(e!==null)return e;t=t.sibling}return null}var xv=vn.unstable_scheduleCallback,fp=vn.unstable_cancelCallback,ny=vn.unstable_shouldYield,iy=vn.unstable_requestPaint,St=vn.unstable_now,ry=vn.unstable_getCurrentPriorityLevel,Vd=vn.unstable_ImmediatePriority,yv=vn.unstable_UserBlockingPriority,Nl=vn.unstable_NormalPriority,sy=vn.unstable_LowPriority,Sv=vn.unstable_IdlePriority,rc=null,ni=null;function oy(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(rc,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:cy,ay=Math.log,ly=Math.LN2;function cy(t){return t>>>=0,t===0?32:31-(ay(t)/ly|0)|0}var wa=64,Ta=4194304;function Eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Eo(a):(s&=o,s!==0&&(i=Eo(s)))}else o=n&~r,o!==0?i=Eo(o):s!==0&&(i=Eo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Vn(e),r=1<<n,i|=t[n],e&=~r;return i}function uy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=uy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function of(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ev(){var t=wa;return wa<<=1,!(wa&4194240)&&(wa=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function dy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Vn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function Mv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wv,Wd,Tv,Av,Rv,af=!1,Aa=[],qi=null,$i=null,Yi=null,ko=new Map,Bo=new Map,Hi=[],hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dp(t,e){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function oo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ra(e),e!==null&&Wd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function py(t,e,n,i,r){switch(e){case"focusin":return qi=oo(qi,t,e,n,i,r),!0;case"dragenter":return $i=oo($i,t,e,n,i,r),!0;case"mouseover":return Yi=oo(Yi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ko.set(s,oo(ko.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Bo.set(s,oo(Bo.get(s)||null,t,e,n,i,r)),!0}return!1}function Cv(t){var e=Tr(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=gv(n),e!==null){t.blockedOn=e,Rv(t.priority,function(){Tv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);tf=i,n.target.dispatchEvent(i),tf=null}else return e=ra(n),e!==null&&Wd(e),t.blockedOn=n,!1;e.shift()}return!0}function hp(t,e,n){ul(t)&&n.delete(e)}function my(){af=!1,qi!==null&&ul(qi)&&(qi=null),$i!==null&&ul($i)&&($i=null),Yi!==null&&ul(Yi)&&(Yi=null),ko.forEach(hp),Bo.forEach(hp)}function ao(t,e){t.blockedOn===e&&(t.blockedOn=null,af||(af=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,my)))}function zo(t){function e(r){return ao(r,t)}if(0<Aa.length){ao(Aa[0],t);for(var n=1;n<Aa.length;n++){var i=Aa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(qi!==null&&ao(qi,t),$i!==null&&ao($i,t),Yi!==null&&ao(Yi,t),ko.forEach(e),Bo.forEach(e),n=0;n<Hi.length;n++)i=Hi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Hi.length&&(n=Hi[0],n.blockedOn===null);)Cv(n),n.blockedOn===null&&Hi.shift()}var ws=bi.ReactCurrentBatchConfig,Ul=!0;function gy(t,e,n,i){var r=tt,s=ws.transition;ws.transition=null;try{tt=1,jd(t,e,n,i)}finally{tt=r,ws.transition=s}}function vy(t,e,n,i){var r=tt,s=ws.transition;ws.transition=null;try{tt=4,jd(t,e,n,i)}finally{tt=r,ws.transition=s}}function jd(t,e,n,i){if(Ul){var r=lf(t,e,n,i);if(r===null)qc(t,e,i,Il,n),dp(t,i);else if(py(r,t,e,n,i))i.stopPropagation();else if(dp(t,i),e&4&&-1<hy.indexOf(t)){for(;r!==null;){var s=ra(r);if(s!==null&&wv(s),s=lf(t,e,n,i),s===null&&qc(t,e,i,Il,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else qc(t,e,i,null,n)}}var Il=null;function lf(t,e,n,i){if(Il=null,t=Hd(i),t=Tr(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Il=t,null}function bv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ry()){case Vd:return 1;case yv:return 4;case Nl:case sy:return 16;case Sv:return 536870912;default:return 16}default:return 16}}var Wi=null,Xd=null,fl=null;function Pv(){if(fl)return fl;var t,e=Xd,n=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return fl=r.slice(t,1<i?1-i:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ra(){return!0}function pp(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ra:pp,this.isPropagationStopped=pp,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qd=xn(Xs),ia=vt({},Xs,{view:0,detail:0}),_y=xn(ia),kc,Bc,lo,sc=vt({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$d,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(kc=t.screenX-lo.screenX,Bc=t.screenY-lo.screenY):Bc=kc=0,lo=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),mp=xn(sc),xy=vt({},sc,{dataTransfer:0}),yy=xn(xy),Sy=vt({},ia,{relatedTarget:0}),zc=xn(Sy),Ey=vt({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),My=xn(Ey),wy=vt({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ty=xn(wy),Ay=vt({},Xs,{data:0}),gp=xn(Ay),Ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},by={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Py(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=by[t])?!!e[t]:!1}function $d(){return Py}var Ly=vt({},ia,{key:function(t){if(t.key){var e=Ry[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$d,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ny=xn(Ly),Dy=vt({},sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=xn(Dy),Uy=vt({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$d}),Iy=xn(Uy),Fy=vt({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oy=xn(Fy),ky=vt({},sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),By=xn(ky),zy=[9,13,27,32],Yd=wi&&"CompositionEvent"in window,Co=null;wi&&"documentMode"in document&&(Co=document.documentMode);var Hy=wi&&"TextEvent"in window&&!Co,Lv=wi&&(!Yd||Co&&8<Co&&11>=Co),_p=" ",xp=!1;function Nv(t,e){switch(t){case"keyup":return zy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function Vy(t,e){switch(t){case"compositionend":return Dv(e);case"keypress":return e.which!==32?null:(xp=!0,_p);case"textInput":return t=e.data,t===_p&&xp?null:t;default:return null}}function Gy(t,e){if(us)return t==="compositionend"||!Yd&&Nv(t,e)?(t=Pv(),fl=Xd=Wi=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lv&&e.locale!=="ko"?null:e.data;default:return null}}var Wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Wy[t.type]:e==="textarea"}function Uv(t,e,n,i){fv(i),e=Fl(e,"onChange"),0<e.length&&(n=new qd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var bo=null,Ho=null;function jy(t){jv(t,0)}function oc(t){var e=hs(t);if(rv(e))return t}function Xy(t,e){if(t==="change")return e}var Iv=!1;if(wi){var Hc;if(wi){var Vc="oninput"in document;if(!Vc){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),Vc=typeof Sp.oninput=="function"}Hc=Vc}else Hc=!1;Iv=Hc&&(!document.documentMode||9<document.documentMode)}function Ep(){bo&&(bo.detachEvent("onpropertychange",Fv),Ho=bo=null)}function Fv(t){if(t.propertyName==="value"&&oc(Ho)){var e=[];Uv(e,Ho,t,Hd(t)),mv(jy,e)}}function qy(t,e,n){t==="focusin"?(Ep(),bo=e,Ho=n,bo.attachEvent("onpropertychange",Fv)):t==="focusout"&&Ep()}function $y(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oc(Ho)}function Yy(t,e){if(t==="click")return oc(e)}function Ky(t,e){if(t==="input"||t==="change")return oc(e)}function Zy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:Zy;function Vo(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Gu.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function Mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wp(t,e){var n=Mp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mp(n)}}function Ov(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ov(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kv(){for(var t=window,e=bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bl(t.document)}return e}function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Jy(t){var e=kv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ov(n.ownerDocument.documentElement,n)){if(i!==null&&Kd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=wp(n,s);var o=wp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Qy=wi&&"documentMode"in document&&11>=document.documentMode,fs=null,cf=null,Po=null,uf=!1;function Tp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uf||fs==null||fs!==bl(i)||(i=fs,"selectionStart"in i&&Kd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Po&&Vo(Po,i)||(Po=i,i=Fl(cf,"onSelect"),0<i.length&&(e=new qd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fs)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},Gc={},Bv={};wi&&(Bv=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function ac(t){if(Gc[t])return Gc[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bv)return Gc[t]=e[n];return t}var zv=ac("animationend"),Hv=ac("animationiteration"),Vv=ac("animationstart"),Gv=ac("transitionend"),Wv=new Map,Ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,e){Wv.set(t,e),Vr(e,[t])}for(var Wc=0;Wc<Ap.length;Wc++){var jc=Ap[Wc],eS=jc.toLowerCase(),tS=jc[0].toUpperCase()+jc.slice(1);lr(eS,"on"+tS)}lr(zv,"onAnimationEnd");lr(Hv,"onAnimationIteration");lr(Vv,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(Gv,"onTransitionEnd");Ls("onMouseEnter",["mouseout","mouseover"]);Ls("onMouseLeave",["mouseout","mouseover"]);Ls("onPointerEnter",["pointerout","pointerover"]);Ls("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function Rp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ey(i,e,void 0,t),t.currentTarget=null}function jv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Rp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Rp(r,a,c),s=l}}}if(Ll)throw t=sf,Ll=!1,sf=null,t}function ut(t,e){var n=e[mf];n===void 0&&(n=e[mf]=new Set);var i=t+"__bubble";n.has(i)||(Xv(e,t,2,!1),n.add(i))}function Xc(t,e,n){var i=0;e&&(i|=4),Xv(n,t,i,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function Go(t){if(!t[ba]){t[ba]=!0,Qg.forEach(function(n){n!=="selectionchange"&&(nS.has(n)||Xc(n,!1,t),Xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,Xc("selectionchange",!1,e))}}function Xv(t,e,n,i){switch(bv(e)){case 1:var r=gy;break;case 4:r=vy;break;default:r=jd}n=r.bind(null,e,n,t),r=void 0,!rf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Tr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}mv(function(){var c=s,u=Hd(n),d=[];e:{var h=Wv.get(t);if(h!==void 0){var m=qd,g=t;switch(t){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":m=Ny;break;case"focusin":g="focus",m=zc;break;case"focusout":g="blur",m=zc;break;case"beforeblur":case"afterblur":m=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Iy;break;case zv:case Hv:case Vv:m=My;break;case Gv:m=Oy;break;case"scroll":m=_y;break;case"wheel":m=By;break;case"copy":case"cut":case"paste":m=Ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=vp}var x=(e&4)!==0,p=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var v=c,_;v!==null;){_=v;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,f!==null&&(y=Oo(v,f),y!=null&&x.push(Wo(v,y,_)))),p)break;v=v.return}0<x.length&&(h=new m(h,g,null,n,u),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==tf&&(g=n.relatedTarget||n.fromElement)&&(Tr(g)||g[Ti]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=c,g=g?Tr(g):null,g!==null&&(p=Gr(g),g!==p||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=c),m!==g)){if(x=mp,y="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=vp,y="onPointerLeave",f="onPointerEnter",v="pointer"),p=m==null?h:hs(m),_=g==null?h:hs(g),h=new x(y,v+"leave",m,n,u),h.target=p,h.relatedTarget=_,y=null,Tr(u)===c&&(x=new x(f,v+"enter",g,n,u),x.target=_,x.relatedTarget=p,y=x),p=y,m&&g)t:{for(x=m,f=g,v=0,_=x;_;_=Xr(_))v++;for(_=0,y=f;y;y=Xr(y))_++;for(;0<v-_;)x=Xr(x),v--;for(;0<_-v;)f=Xr(f),_--;for(;v--;){if(x===f||f!==null&&x===f.alternate)break t;x=Xr(x),f=Xr(f)}x=null}else x=null;m!==null&&Cp(d,h,m,x,!1),g!==null&&p!==null&&Cp(d,p,g,x,!0)}}e:{if(h=c?hs(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var C=Xy;else if(yp(h))if(Iv)C=Ky;else{C=$y;var A=qy}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Yy);if(C&&(C=C(t,c))){Uv(d,C,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Ku(h,"number",h.value)}switch(A=c?hs(c):window,t){case"focusin":(yp(A)||A.contentEditable==="true")&&(fs=A,cf=c,Po=null);break;case"focusout":Po=cf=fs=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,Tp(d,n,u);break;case"selectionchange":if(Qy)break;case"keydown":case"keyup":Tp(d,n,u)}var T;if(Yd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else us?Nv(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Lv&&n.locale!=="ko"&&(us||b!=="onCompositionStart"?b==="onCompositionEnd"&&us&&(T=Pv()):(Wi=u,Xd="value"in Wi?Wi.value:Wi.textContent,us=!0)),A=Fl(c,b),0<A.length&&(b=new gp(b,t,null,n,u),d.push({event:b,listeners:A}),T?b.data=T:(T=Dv(n),T!==null&&(b.data=T)))),(T=Hy?Vy(t,n):Gy(t,n))&&(c=Fl(c,"onBeforeInput"),0<c.length&&(u=new gp("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=T))}jv(d,e)})}function Wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Oo(t,n),s!=null&&i.unshift(Wo(t,s,r)),s=Oo(t,e),s!=null&&i.push(Wo(t,s,r))),t=t.return}return i}function Xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Oo(n,s),l!=null&&o.unshift(Wo(n,l,a))):r||(l=Oo(n,s),l!=null&&o.push(Wo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function bp(t){return(typeof t=="string"?t:""+t).replace(iS,`
`).replace(rS,"")}function Pa(t,e,n){if(e=bp(e),bp(t)!==e&&n)throw Error(ne(425))}function Ol(){}var ff=null,df=null;function hf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pf=typeof setTimeout=="function"?setTimeout:void 0,sS=typeof clearTimeout=="function"?clearTimeout:void 0,Pp=typeof Promise=="function"?Promise:void 0,oS=typeof queueMicrotask=="function"?queueMicrotask:typeof Pp<"u"?function(t){return Pp.resolve(null).then(t).catch(aS)}:pf;function aS(t){setTimeout(function(){throw t})}function $c(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),zo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);zo(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+qs,jo="__reactProps$"+qs,Ti="__reactContainer$"+qs,mf="__reactEvents$"+qs,lS="__reactListeners$"+qs,cS="__reactHandles$"+qs;function Tr(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ti]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lp(t);t!==null;){if(n=t[Qn])return n;t=Lp(t)}return e}t=n,n=t.parentNode}return null}function ra(t){return t=t[Qn]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function lc(t){return t[jo]||null}var gf=[],ps=-1;function cr(t){return{current:t}}function ft(t){0>ps||(t.current=gf[ps],gf[ps]=null,ps--)}function ot(t,e){ps++,gf[ps]=t.current,t.current=e}var sr={},Wt=cr(sr),nn=cr(!1),Ur=sr;function Ns(t,e){var n=t.type.contextTypes;if(!n)return sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function kl(){ft(nn),ft(Wt)}function Np(t,e,n){if(Wt.current!==sr)throw Error(ne(168));ot(Wt,e),ot(nn,n)}function qv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,qx(t)||"Unknown",r));return vt({},n,i)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Ur=Wt.current,ot(Wt,t),ot(nn,nn.current),!0}function Dp(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=qv(t,e,Ur),i.__reactInternalMemoizedMergedChildContext=t,ft(nn),ft(Wt),ot(Wt,t)):ft(nn),ot(nn,n)}var gi=null,cc=!1,Yc=!1;function $v(t){gi===null?gi=[t]:gi.push(t)}function uS(t){cc=!0,$v(t)}function ur(){if(!Yc&&gi!==null){Yc=!0;var t=0,e=tt;try{var n=gi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,cc=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),xv(Vd,ur),r}finally{tt=e,Yc=!1}}return null}var ms=[],gs=0,zl=null,Hl=0,Tn=[],An=0,Ir=null,_i=1,xi="";function xr(t,e){ms[gs++]=Hl,ms[gs++]=zl,zl=t,Hl=e}function Yv(t,e,n){Tn[An++]=_i,Tn[An++]=xi,Tn[An++]=Ir,Ir=t;var i=_i;t=xi;var r=32-Vn(i)-1;i&=~(1<<r),n+=1;var s=32-Vn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-Vn(e)+r|n<<r|i,xi=s+t}else _i=1<<s|n<<r|i,xi=t}function Zd(t){t.return!==null&&(xr(t,1),Yv(t,1,0))}function Jd(t){for(;t===zl;)zl=ms[--gs],ms[gs]=null,Hl=ms[--gs],ms[gs]=null;for(;t===Ir;)Ir=Tn[--An],Tn[An]=null,xi=Tn[--An],Tn[An]=null,_i=Tn[--An],Tn[An]=null}var gn=null,mn=null,dt=!1,Bn=null;function Kv(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Up(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:_i,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function vf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _f(t){if(dt){var e=mn;if(e){var n=e;if(!Up(t,e)){if(vf(t))throw Error(ne(418));e=Ki(n.nextSibling);var i=gn;e&&Up(t,e)?Kv(i,n):(t.flags=t.flags&-4097|2,dt=!1,gn=t)}}else{if(vf(t))throw Error(ne(418));t.flags=t.flags&-4097|2,dt=!1,gn=t}}}function Ip(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function La(t){if(t!==gn)return!1;if(!dt)return Ip(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hf(t.type,t.memoizedProps)),e&&(e=mn)){if(vf(t))throw Zv(),Error(ne(418));for(;e;)Kv(t,e),e=Ki(e.nextSibling)}if(Ip(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?Ki(t.stateNode.nextSibling):null;return!0}function Zv(){for(var t=mn;t;)t=Ki(t.nextSibling)}function Ds(){mn=gn=null,dt=!1}function Qd(t){Bn===null?Bn=[t]:Bn.push(t)}var fS=bi.ReactCurrentBatchConfig;function co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Na(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fp(t){var e=t._init;return e(t._payload)}function Jv(t){function e(f,v){if(t){var _=f.deletions;_===null?(f.deletions=[v],f.flags|=16):_.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=er(f,v),f.index=0,f.sibling=null,f}function s(f,v,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<v?(f.flags|=2,v):_):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,_,y){return v===null||v.tag!==6?(v=nu(_,f.mode,y),v.return=f,v):(v=r(v,_),v.return=f,v)}function l(f,v,_,y){var C=_.type;return C===cs?u(f,v,_.props.children,y,_.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Bi&&Fp(C)===v.type)?(y=r(v,_.props),y.ref=co(f,v,_),y.return=f,y):(y=xl(_.type,_.key,_.props,null,f.mode,y),y.ref=co(f,v,_),y.return=f,y)}function c(f,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=iu(_,f.mode,y),v.return=f,v):(v=r(v,_.children||[]),v.return=f,v)}function u(f,v,_,y,C){return v===null||v.tag!==7?(v=Nr(_,f.mode,y,C),v.return=f,v):(v=r(v,_),v.return=f,v)}function d(f,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=nu(""+v,f.mode,_),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sa:return _=xl(v.type,v.key,v.props,null,f.mode,_),_.ref=co(f,null,v),_.return=f,_;case ls:return v=iu(v,f.mode,_),v.return=f,v;case Bi:var y=v._init;return d(f,y(v._payload),_)}if(So(v)||ro(v))return v=Nr(v,f.mode,_,null),v.return=f,v;Na(f,v)}return null}function h(f,v,_,y){var C=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(f,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Sa:return _.key===C?l(f,v,_,y):null;case ls:return _.key===C?c(f,v,_,y):null;case Bi:return C=_._init,h(f,v,C(_._payload),y)}if(So(_)||ro(_))return C!==null?null:u(f,v,_,y,null);Na(f,_)}return null}function m(f,v,_,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(_)||null,a(v,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sa:return f=f.get(y.key===null?_:y.key)||null,l(v,f,y,C);case ls:return f=f.get(y.key===null?_:y.key)||null,c(v,f,y,C);case Bi:var A=y._init;return m(f,v,_,A(y._payload),C)}if(So(y)||ro(y))return f=f.get(_)||null,u(v,f,y,C,null);Na(v,y)}return null}function g(f,v,_,y){for(var C=null,A=null,T=v,b=v=0,w=null;T!==null&&b<_.length;b++){T.index>b?(w=T,T=null):w=T.sibling;var S=h(f,T,_[b],y);if(S===null){T===null&&(T=w);break}t&&T&&S.alternate===null&&e(f,T),v=s(S,v,b),A===null?C=S:A.sibling=S,A=S,T=w}if(b===_.length)return n(f,T),dt&&xr(f,b),C;if(T===null){for(;b<_.length;b++)T=d(f,_[b],y),T!==null&&(v=s(T,v,b),A===null?C=T:A.sibling=T,A=T);return dt&&xr(f,b),C}for(T=i(f,T);b<_.length;b++)w=m(T,f,b,_[b],y),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?b:w.key),v=s(w,v,b),A===null?C=w:A.sibling=w,A=w);return t&&T.forEach(function(P){return e(f,P)}),dt&&xr(f,b),C}function x(f,v,_,y){var C=ro(_);if(typeof C!="function")throw Error(ne(150));if(_=C.call(_),_==null)throw Error(ne(151));for(var A=C=null,T=v,b=v=0,w=null,S=_.next();T!==null&&!S.done;b++,S=_.next()){T.index>b?(w=T,T=null):w=T.sibling;var P=h(f,T,S.value,y);if(P===null){T===null&&(T=w);break}t&&T&&P.alternate===null&&e(f,T),v=s(P,v,b),A===null?C=P:A.sibling=P,A=P,T=w}if(S.done)return n(f,T),dt&&xr(f,b),C;if(T===null){for(;!S.done;b++,S=_.next())S=d(f,S.value,y),S!==null&&(v=s(S,v,b),A===null?C=S:A.sibling=S,A=S);return dt&&xr(f,b),C}for(T=i(f,T);!S.done;b++,S=_.next())S=m(T,f,b,S.value,y),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?b:S.key),v=s(S,v,b),A===null?C=S:A.sibling=S,A=S);return t&&T.forEach(function(G){return e(f,G)}),dt&&xr(f,b),C}function p(f,v,_,y){if(typeof _=="object"&&_!==null&&_.type===cs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Sa:e:{for(var C=_.key,A=v;A!==null;){if(A.key===C){if(C=_.type,C===cs){if(A.tag===7){n(f,A.sibling),v=r(A,_.props.children),v.return=f,f=v;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Bi&&Fp(C)===A.type){n(f,A.sibling),v=r(A,_.props),v.ref=co(f,A,_),v.return=f,f=v;break e}n(f,A);break}else e(f,A);A=A.sibling}_.type===cs?(v=Nr(_.props.children,f.mode,y,_.key),v.return=f,f=v):(y=xl(_.type,_.key,_.props,null,f.mode,y),y.ref=co(f,v,_),y.return=f,f=y)}return o(f);case ls:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(f,v.sibling),v=r(v,_.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=iu(_,f.mode,y),v.return=f,f=v}return o(f);case Bi:return A=_._init,p(f,v,A(_._payload),y)}if(So(_))return g(f,v,_,y);if(ro(_))return x(f,v,_,y);Na(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,_),v.return=f,f=v):(n(f,v),v=nu(_,f.mode,y),v.return=f,f=v),o(f)):n(f,v)}return p}var Us=Jv(!0),Qv=Jv(!1),Vl=cr(null),Gl=null,vs=null,eh=null;function th(){eh=vs=Gl=null}function nh(t){var e=Vl.current;ft(Vl),t._currentValue=e}function xf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ts(t,e){Gl=t,eh=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(eh!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(Gl===null)throw Error(ne(308));vs=t,Gl.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var Ar=null;function ih(t){Ar===null?Ar=[t]:Ar.push(t)}function e_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ih(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ai(t,i)}function Ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zi=!1;function rh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ai(t,n)}return r=i.interleaved,r===null?(e.next=e,ih(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ai(t,n)}function hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gd(t,n)}}function Op(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,i){var r=t.updateQueue;zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(h=e,m=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(m,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(m,d,h):g,h==null)break e;d=vt({},d,h);break e;case 2:zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=d):u=u.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Or|=o,t.lanes=o,t.memoizedState=d}}function kp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var sa={},ii=cr(sa),Xo=cr(sa),qo=cr(sa);function Rr(t){if(t===sa)throw Error(ne(174));return t}function sh(t,e){switch(ot(qo,e),ot(Xo,t),ot(ii,sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ju(e,t)}ft(ii),ot(ii,e)}function Is(){ft(ii),ft(Xo),ft(qo)}function n_(t){Rr(qo.current);var e=Rr(ii.current),n=Ju(e,t.type);e!==n&&(ot(Xo,t),ot(ii,n))}function oh(t){Xo.current===t&&(ft(ii),ft(Xo))}var mt=cr(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kc=[];function ah(){for(var t=0;t<Kc.length;t++)Kc[t]._workInProgressVersionPrimary=null;Kc.length=0}var pl=bi.ReactCurrentDispatcher,Zc=bi.ReactCurrentBatchConfig,Fr=0,gt=null,At=null,Lt=null,Xl=!1,Lo=!1,$o=0,dS=0;function kt(){throw Error(ne(321))}function lh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function ch(t,e,n,i,r,s){if(Fr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pl.current=t===null||t.memoizedState===null?gS:vS,t=n(i,r),Lo){s=0;do{if(Lo=!1,$o=0,25<=s)throw Error(ne(301));s+=1,Lt=At=null,e.updateQueue=null,pl.current=_S,t=n(i,r)}while(Lo)}if(pl.current=ql,e=At!==null&&At.next!==null,Fr=0,Lt=At=gt=null,Xl=!1,e)throw Error(ne(300));return t}function uh(){var t=$o!==0;return $o=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?gt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Pn(){if(At===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Lt===null?gt.memoizedState:Lt.next;if(e!==null)Lt=e,At=t;else{if(t===null)throw Error(ne(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Lt===null?gt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Yo(t,e){return typeof e=="function"?e(t):e}function Jc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Fr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,gt.lanes|=u,Or|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,qn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Or|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);qn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function i_(){}function r_(t,e){var n=gt,i=Pn(),r=e(),s=!qn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,fh(a_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Ko(9,o_.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(ne(349));Fr&30||s_(n,e,r)}return r}function s_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function o_(t,e,n,i){e.value=n,e.getSnapshot=i,l_(e)&&c_(t)}function a_(t,e,n){return n(function(){l_(e)&&c_(t)})}function l_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function c_(t){var e=Ai(t,1);e!==null&&Gn(e,t,1,-1)}function Bp(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:t},e.queue=t,t=t.dispatch=mS.bind(null,gt,t),[e.memoizedState,t]}function Ko(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function u_(){return Pn().memoizedState}function ml(t,e,n,i){var r=Zn();gt.flags|=t,r.memoizedState=Ko(1|e,n,void 0,i===void 0?null:i)}function uc(t,e,n,i){var r=Pn();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&lh(i,o.deps)){r.memoizedState=Ko(e,n,s,i);return}}gt.flags|=t,r.memoizedState=Ko(1|e,n,s,i)}function zp(t,e){return ml(8390656,8,t,e)}function fh(t,e){return uc(2048,8,t,e)}function f_(t,e){return uc(4,2,t,e)}function d_(t,e){return uc(4,4,t,e)}function h_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function p_(t,e,n){return n=n!=null?n.concat([t]):null,uc(4,4,h_.bind(null,e,t),n)}function dh(){}function m_(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function g_(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function v_(t,e,n){return Fr&21?(qn(n,e)||(n=Ev(),gt.lanes|=n,Or|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function hS(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Zc.transition;Zc.transition={};try{t(!1),e()}finally{tt=n,Zc.transition=i}}function __(){return Pn().memoizedState}function pS(t,e,n){var i=Qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},x_(t))y_(e,n);else if(n=e_(t,e,n,i),n!==null){var r=$t();Gn(n,t,i,r),S_(n,e,i)}}function mS(t,e,n){var i=Qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(x_(t))y_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,qn(a,o)){var l=e.interleaved;l===null?(r.next=r,ih(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=e_(t,e,r,i),n!==null&&(r=$t(),Gn(n,t,i,r),S_(n,e,i))}}function x_(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function y_(t,e){Lo=Xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gd(t,n)}}var ql={readContext:bn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},gS={readContext:bn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:zp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ml(4194308,4,h_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return ml(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=pS.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:Bp,useDebugValue:dh,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=Bp(!1),e=t[0];return t=hS.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=Zn();if(dt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Nt===null)throw Error(ne(349));Fr&30||s_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,zp(a_.bind(null,i,s,t),[t]),i.flags|=2048,Ko(9,o_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Nt.identifierPrefix;if(dt){var n=xi,i=_i;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vS={readContext:bn,useCallback:m_,useContext:bn,useEffect:fh,useImperativeHandle:p_,useInsertionEffect:f_,useLayoutEffect:d_,useMemo:g_,useReducer:Jc,useRef:u_,useState:function(){return Jc(Yo)},useDebugValue:dh,useDeferredValue:function(t){var e=Pn();return v_(e,At.memoizedState,t)},useTransition:function(){var t=Jc(Yo)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:i_,useSyncExternalStore:r_,useId:__,unstable_isNewReconciler:!1},_S={readContext:bn,useCallback:m_,useContext:bn,useEffect:fh,useImperativeHandle:p_,useInsertionEffect:f_,useLayoutEffect:d_,useMemo:g_,useReducer:Qc,useRef:u_,useState:function(){return Qc(Yo)},useDebugValue:dh,useDeferredValue:function(t){var e=Pn();return At===null?e.memoizedState=t:v_(e,At.memoizedState,t)},useTransition:function(){var t=Qc(Yo)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:i_,useSyncExternalStore:r_,useId:__,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fc={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Qi(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(Gn(e,t,r,i),hl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Qi(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(Gn(e,t,r,i),hl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=Qi(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(t,r,i),e!==null&&(Gn(e,t,i,n),hl(e,t,i))}};function Hp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vo(n,i)||!Vo(r,s):!0}function E_(t,e,n){var i=!1,r=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(r=rn(e)?Ur:Wt.current,i=e.contextTypes,s=(i=i!=null)?Ns(t,r):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fc.enqueueReplaceState(e,e.state,null)}function Sf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},rh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bn(s):(s=rn(e)?Ur:Wt.current,r.context=Ns(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fc.enqueueReplaceState(r,r.state,null),Wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Fs(t,e){try{var n="",i=e;do n+=Xx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function eu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ef(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xS=typeof WeakMap=="function"?WeakMap:Map;function M_(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Yl||(Yl=!0,Nf=i),Ef(t,e)},n}function w_(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ef(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ef(t,e),typeof i!="function"&&(Ji===null?Ji=new Set([this]):Ji.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new xS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=DS.bind(null,t,e,n),e.then(t,t))}function Wp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,Zi(n,e,1))),n.lanes|=1),t)}var yS=bi.ReactCurrentOwner,tn=!1;function Xt(t,e,n,i){e.child=t===null?Qv(e,null,n,i):Us(e,t.child,n,i)}function Xp(t,e,n,i,r){n=n.render;var s=e.ref;return Ts(e,r),i=ch(t,e,n,i,s,r),n=uh(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(dt&&n&&Zd(e),e.flags|=1,Xt(t,e,i,r),e.child)}function qp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!yh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,T_(t,e,s,i,r)):(t=xl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(o,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=er(s,i),t.ref=e.ref,t.return=e,e.child=t}function T_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Vo(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return Mf(t,e,n,i,r)}function A_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(xs,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(xs,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(xs,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(xs,hn),hn|=i;return Xt(t,e,r,n),e.child}function R_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mf(t,e,n,i,r){var s=rn(n)?Ur:Wt.current;return s=Ns(e,s),Ts(e,r),n=ch(t,e,n,i,s,r),i=uh(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(dt&&i&&Zd(e),e.flags|=1,Xt(t,e,n,r),e.child)}function $p(t,e,n,i,r){if(rn(n)){var s=!0;Bl(e)}else s=!1;if(Ts(e,r),e.stateNode===null)gl(t,e),E_(e,n,i),Sf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=bn(c):(c=rn(n)?Ur:Wt.current,c=Ns(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Vp(e,o,i,c),zi=!1;var h=e.memoizedState;o.state=h,Wl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||nn.current||zi?(typeof u=="function"&&(yf(e,n,u,i),l=e.memoizedState),(a=zi||Hp(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,t_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:On(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=rn(n)?Ur:Wt.current,l=Ns(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Vp(e,o,i,l),zi=!1,h=e.memoizedState,o.state=h,Wl(e,i,o,r);var g=e.memoizedState;a!==d||h!==g||nn.current||zi?(typeof m=="function"&&(yf(e,n,m,i),g=e.memoizedState),(c=zi||Hp(e,n,c,i,h,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return wf(t,e,n,i,s,r)}function wf(t,e,n,i,r,s){R_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Dp(e,n,!1),Ri(t,e,s);i=e.stateNode,yS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Us(e,t.child,null,s),e.child=Us(e,null,a,s)):Xt(t,e,a,s),e.memoizedState=i.state,r&&Dp(e,n,!0),e.child}function C_(t){var e=t.stateNode;e.pendingContext?Np(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Np(t,e.context,!1),sh(t,e.containerInfo)}function Yp(t,e,n,i,r){return Ds(),Qd(r),e.flags|=256,Xt(t,e,n,i),e.child}var Tf={dehydrated:null,treeContext:null,retryLane:0};function Af(t){return{baseLanes:t,cachePool:null,transitions:null}}function b_(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(mt,r&1),t===null)return _f(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pc(o,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Af(n),e.memoizedState=Tf,t):hh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return SS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=er(a,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Af(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tf,i}return s=t.child,t=s.sibling,i=er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function hh(t,e){return e=pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Da(t,e,n,i){return i!==null&&Qd(i),Us(e,t.child,null,n),t=hh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function SS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=eu(Error(ne(422))),Da(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=pc({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Us(e,t.child,null,o),e.child.memoizedState=Af(o),e.memoizedState=Tf,s);if(!(e.mode&1))return Da(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=eu(s,i,void 0),Da(t,e,o,i)}if(a=(o&t.childLanes)!==0,tn||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ai(t,r),Gn(i,t,r,-1))}return xh(),i=eu(Error(ne(421))),Da(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=US.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=Ki(r.nextSibling),gn=e,dt=!0,Bn=null,t!==null&&(Tn[An++]=_i,Tn[An++]=xi,Tn[An++]=Ir,_i=t.id,xi=t.overflow,Ir=e),e=hh(e,i.children),e.flags|=4096,e)}function Kp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),xf(t.return,e,n)}function tu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function P_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kp(t,n,e);else if(t.tag===19)Kp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&jl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),tu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&jl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}tu(e,!0,n,null,s);break;case"together":tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Or|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ES(t,e,n){switch(e.tag){case 3:C_(e),Ds();break;case 5:n_(e);break;case 1:rn(e.type)&&Bl(e);break;case 4:sh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Vl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?b_(t,e,n):(ot(mt,mt.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);ot(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return P_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,A_(t,e,n)}return Ri(t,e,n)}var L_,Rf,N_,D_;L_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rf=function(){};N_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Rr(ii.current);var s=null;switch(n){case"input":r=$u(t,r),i=$u(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Zu(t,r),i=Zu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ol)}Qu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Io.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Io.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};D_=function(t,e,n,i){n!==i&&(e.flags|=4)};function uo(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function MS(t,e,n){var i=e.pendingProps;switch(Jd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return rn(e.type)&&kl(),Bt(e),null;case 3:return i=e.stateNode,Is(),ft(nn),ft(Wt),ah(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(La(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&(If(Bn),Bn=null))),Rf(t,e),Bt(e),null;case 5:oh(e);var r=Rr(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)N_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Bt(e),null}if(t=Rr(ii.current),La(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[jo]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<Mo.length;r++)ut(Mo[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":sp(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":ap(i,s),ut("invalid",i)}Qu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pa(i.textContent,a,t),r=["children",""+a]):Io.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":Ea(i),op(i,s,!0);break;case"textarea":Ea(i),lp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=av(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Qn]=e,t[jo]=i,L_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ef(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<Mo.length;r++)ut(Mo[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":sp(t,i),r=$u(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":ap(t,i),r=Zu(t,i),ut("invalid",t);break;default:r=i}Qu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?uv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fo(t,l):typeof l=="number"&&Fo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&Od(t,s,l,o))}switch(n){case"input":Ea(t),op(t,i,!1);break;case"textarea":Ea(t),lp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)D_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Rr(qo.current),Rr(ii.current),La(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:Pa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return Bt(e),null;case 13:if(ft(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&mn!==null&&e.mode&1&&!(e.flags&128))Zv(),Ds(),e.flags|=98560,s=!1;else if(s=La(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Qn]=e}else Ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Bn!==null&&(If(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Rt===0&&(Rt=3):xh())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Is(),Rf(t,e),t===null&&Go(e.stateNode.containerInfo),Bt(e),null;case 10:return nh(e.type._context),Bt(e),null;case 17:return rn(e.type)&&kl(),Bt(e),null;case 19:if(ft(mt),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)uo(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=jl(t),o!==null){for(e.flags|=128,uo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>Os&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304)}else{if(!i)if(t=jl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return Bt(e),null}else 2*St()-s.renderingStartTime>Os&&n!==1073741824&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=mt.current,ot(mt,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return _h(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function wS(t,e){switch(Jd(e),e.tag){case 1:return rn(e.type)&&kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Is(),ft(nn),ft(Wt),ah(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return oh(e),null;case 13:if(ft(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(mt),null;case 4:return Is(),null;case 10:return nh(e.type._context),null;case 22:case 23:return _h(),null;case 24:return null;default:return null}}var Ua=!1,Vt=!1,TS=typeof WeakSet=="function"?WeakSet:Set,me=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function Cf(t,e,n){try{n()}catch(i){xt(t,e,i)}}var Zp=!1;function AS(t,e){if(ff=Ul,t=kv(),Kd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(df={focusedElem:t,selectionRange:n},Ul=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,p=g.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:On(e.type,x),p);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){xt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return g=Zp,Zp=!1,g}function No(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Cf(e,n,s)}r=r.next}while(r!==i)}}function dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function bf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function U_(t){var e=t.alternate;e!==null&&(t.alternate=null,U_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[jo],delete e[mf],delete e[lS],delete e[cS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I_(t){return t.tag===5||t.tag===3||t.tag===4}function Jp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(i!==4&&(t=t.child,t!==null))for(Pf(t,e,n),t=t.sibling;t!==null;)Pf(t,e,n),t=t.sibling}function Lf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}var Dt=null,kn=!1;function Ni(t,e,n){for(n=n.child;n!==null;)F_(t,e,n),n=n.sibling}function F_(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(rc,n)}catch{}switch(n.tag){case 5:Vt||_s(n,e);case 6:var i=Dt,r=kn;Dt=null,Ni(t,e,n),Dt=i,kn=r,Dt!==null&&(kn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(kn?(t=Dt,n=n.stateNode,t.nodeType===8?$c(t.parentNode,n):t.nodeType===1&&$c(t,n),zo(t)):$c(Dt,n.stateNode));break;case 4:i=Dt,r=kn,Dt=n.stateNode.containerInfo,kn=!0,Ni(t,e,n),Dt=i,kn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cf(n,e,o),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!Vt&&(_s(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Ni(t,e,n),Vt=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function Qp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new TS),e.forEach(function(i){var r=IS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,kn=!1;break e;case 3:Dt=a.stateNode.containerInfo,kn=!0;break e;case 4:Dt=a.stateNode.containerInfo,kn=!0;break e}a=a.return}if(Dt===null)throw Error(ne(160));F_(s,o,r),Dt=null,kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)O_(e,t),e=e.sibling}function O_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Kn(t),i&4){try{No(3,t,t.return),dc(3,t)}catch(x){xt(t,t.return,x)}try{No(5,t,t.return)}catch(x){xt(t,t.return,x)}}break;case 1:Dn(e,t),Kn(t),i&512&&n!==null&&_s(n,n.return);break;case 5:if(Dn(e,t),Kn(t),i&512&&n!==null&&_s(n,n.return),t.flags&32){var r=t.stateNode;try{Fo(r,"")}catch(x){xt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sv(r,s),ef(a,o);var c=ef(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?uv(r,d):u==="dangerouslySetInnerHTML"?lv(r,d):u==="children"?Fo(r,d):Od(r,u,d,c)}switch(a){case"input":Yu(r,s);break;case"textarea":ov(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ss(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ss(r,!!s.multiple,s.defaultValue,!0):Ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[jo]=s}catch(x){xt(t,t.return,x)}}break;case 6:if(Dn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){xt(t,t.return,x)}}break;case 3:if(Dn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(x){xt(t,t.return,x)}break;case 4:Dn(e,t),Kn(t);break;case 13:Dn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(gh=St())),i&4&&Qp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||u,Dn(e,t),Vt=c):Dn(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(me=t,u=t.child;u!==null;){for(d=me=u;me!==null;){switch(h=me,m=h.child,h.tag){case 0:case 11:case 14:case 15:No(4,h,h.return);break;case 1:_s(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){xt(i,n,x)}}break;case 5:_s(h,h.return);break;case 22:if(h.memoizedState!==null){tm(d);continue}}m!==null?(m.return=h,me=m):tm(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cv("display",o))}catch(x){xt(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){xt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Dn(e,t),Kn(t),i&4&&Qp(t);break;case 21:break;default:Dn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I_(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fo(r,""),i.flags&=-33);var s=Jp(t);Lf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Jp(t);Pf(t,a,o);break;default:throw Error(ne(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function RS(t,e,n){me=t,k_(t)}function k_(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ua;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=Ua;var c=Vt;if(Ua=o,(Vt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?nm(r):l!==null?(l.return=o,me=l):nm(r);for(;s!==null;)me=s,k_(s),s=s.sibling;me=r,Ua=a,Vt=c}em(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):em(t)}}function em(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&zo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Vt||e.flags&512&&bf(e)}catch(h){xt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function tm(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function nm(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dc(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{bf(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{bf(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var CS=Math.ceil,$l=bi.ReactCurrentDispatcher,ph=bi.ReactCurrentOwner,Cn=bi.ReactCurrentBatchConfig,Ke=0,Nt=null,wt=null,Ut=0,hn=0,xs=cr(0),Rt=0,Zo=null,Or=0,hc=0,mh=0,Do=null,Qt=null,gh=0,Os=1/0,mi=null,Yl=!1,Nf=null,Ji=null,Ia=!1,ji=null,Kl=0,Uo=0,Df=null,vl=-1,_l=0;function $t(){return Ke&6?St():vl!==-1?vl:vl=St()}function Qi(t){return t.mode&1?Ke&2&&Ut!==0?Ut&-Ut:fS.transition!==null?(_l===0&&(_l=Ev()),_l):(t=tt,t!==0||(t=window.event,t=t===void 0?16:bv(t.type)),t):1}function Gn(t,e,n,i){if(50<Uo)throw Uo=0,Df=null,Error(ne(185));na(t,n,i),(!(Ke&2)||t!==Nt)&&(t===Nt&&(!(Ke&2)&&(hc|=n),Rt===4&&Vi(t,Ut)),sn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Os=St()+500,cc&&ur()))}function sn(t,e){var n=t.callbackNode;fy(t,e);var i=Dl(t,t===Nt?Ut:0);if(i===0)n!==null&&fp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&fp(n),e===1)t.tag===0?uS(im.bind(null,t)):$v(im.bind(null,t)),oS(function(){!(Ke&6)&&ur()}),n=null;else{switch(Mv(i)){case 1:n=Vd;break;case 4:n=yv;break;case 16:n=Nl;break;case 536870912:n=Sv;break;default:n=Nl}n=X_(n,B_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function B_(t,e){if(vl=-1,_l=0,Ke&6)throw Error(ne(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var i=Dl(t,t===Nt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Zl(t,i);else{e=i;var r=Ke;Ke|=2;var s=H_();(Nt!==t||Ut!==e)&&(mi=null,Os=St()+500,Lr(t,e));do try{LS();break}catch(a){z_(t,a)}while(!0);th(),$l.current=s,Ke=r,wt!==null?e=0:(Nt=null,Ut=0,e=Rt)}if(e!==0){if(e===2&&(r=of(t),r!==0&&(i=r,e=Uf(t,r))),e===1)throw n=Zo,Lr(t,0),Vi(t,i),sn(t,St()),n;if(e===6)Vi(t,i);else{if(r=t.current.alternate,!(i&30)&&!bS(r)&&(e=Zl(t,i),e===2&&(s=of(t),s!==0&&(i=s,e=Uf(t,s))),e===1))throw n=Zo,Lr(t,0),Vi(t,i),sn(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:yr(t,Qt,mi);break;case 3:if(Vi(t,i),(i&130023424)===i&&(e=gh+500-St(),10<e)){if(Dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=pf(yr.bind(null,t,Qt,mi),e);break}yr(t,Qt,mi);break;case 4:if(Vi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Vn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*CS(i/1960))-i,10<i){t.timeoutHandle=pf(yr.bind(null,t,Qt,mi),i);break}yr(t,Qt,mi);break;case 5:yr(t,Qt,mi);break;default:throw Error(ne(329))}}}return sn(t,St()),t.callbackNode===n?B_.bind(null,t):null}function Uf(t,e){var n=Do;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&If(e)),t}function If(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function bS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vi(t,e){for(e&=~mh,e&=~hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),i=1<<n;t[n]=-1,e&=~i}}function im(t){if(Ke&6)throw Error(ne(327));As();var e=Dl(t,0);if(!(e&1))return sn(t,St()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var i=of(t);i!==0&&(e=i,n=Uf(t,i))}if(n===1)throw n=Zo,Lr(t,0),Vi(t,e),sn(t,St()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,Qt,mi),sn(t,St()),null}function vh(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Os=St()+500,cc&&ur())}}function kr(t){ji!==null&&ji.tag===0&&!(Ke&6)&&As();var e=Ke;Ke|=1;var n=Cn.transition,i=tt;try{if(Cn.transition=null,tt=1,t)return t()}finally{tt=i,Cn.transition=n,Ke=e,!(Ke&6)&&ur()}}function _h(){hn=xs.current,ft(xs)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sS(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(Jd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&kl();break;case 3:Is(),ft(nn),ft(Wt),ah();break;case 5:oh(i);break;case 4:Is();break;case 13:ft(mt);break;case 19:ft(mt);break;case 10:nh(i.type._context);break;case 22:case 23:_h()}n=n.return}if(Nt=t,wt=t=er(t.current,null),Ut=hn=e,Rt=0,Zo=null,mh=hc=Or=0,Qt=Do=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ar=null}return t}function z_(t,e){do{var n=wt;try{if(th(),pl.current=ql,Xl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xl=!1}if(Fr=0,Lt=At=gt=null,Lo=!1,$o=0,ph.current=null,n===null||n.return===null){Rt=1,Zo=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Wp(o);if(m!==null){m.flags&=-257,jp(m,o,a,s,e),m.mode&1&&Gp(s,c,e),e=m,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Gp(s,c,e),xh();break e}l=Error(ne(426))}}else if(dt&&a.mode&1){var p=Wp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),jp(p,o,a,s,e),Qd(Fs(l,a));break e}}s=l=Fs(l,a),Rt!==4&&(Rt=2),Do===null?Do=[s]:Do.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=M_(s,l,e);Op(s,f);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ji===null||!Ji.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=w_(s,a,e);Op(s,y);break e}}s=s.return}while(s!==null)}G_(n)}catch(C){e=C,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function H_(){var t=$l.current;return $l.current=ql,t===null?ql:t}function xh(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Nt===null||!(Or&268435455)&&!(hc&268435455)||Vi(Nt,Ut)}function Zl(t,e){var n=Ke;Ke|=2;var i=H_();(Nt!==t||Ut!==e)&&(mi=null,Lr(t,e));do try{PS();break}catch(r){z_(t,r)}while(!0);if(th(),Ke=n,$l.current=i,wt!==null)throw Error(ne(261));return Nt=null,Ut=0,Rt}function PS(){for(;wt!==null;)V_(wt)}function LS(){for(;wt!==null&&!ny();)V_(wt)}function V_(t){var e=j_(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?G_(t):wt=e,ph.current=null}function G_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wS(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,wt=null;return}}else if(n=MS(n,e,hn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Rt===0&&(Rt=5)}function yr(t,e,n){var i=tt,r=Cn.transition;try{Cn.transition=null,tt=1,NS(t,e,n,i)}finally{Cn.transition=r,tt=i}return null}function NS(t,e,n,i){do As();while(ji!==null);if(Ke&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dy(t,s),t===Nt&&(wt=Nt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ia||(Ia=!0,X_(Nl,function(){return As(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var o=tt;tt=1;var a=Ke;Ke|=4,ph.current=null,AS(t,n),O_(n,t),Jy(df),Ul=!!ff,df=ff=null,t.current=n,RS(n),iy(),Ke=a,tt=o,Cn.transition=s}else t.current=n;if(Ia&&(Ia=!1,ji=t,Kl=r),s=t.pendingLanes,s===0&&(Ji=null),oy(n.stateNode),sn(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Yl)throw Yl=!1,t=Nf,Nf=null,t;return Kl&1&&t.tag!==0&&As(),s=t.pendingLanes,s&1?t===Df?Uo++:(Uo=0,Df=t):Uo=0,ur(),null}function As(){if(ji!==null){var t=Mv(Kl),e=Cn.transition,n=tt;try{if(Cn.transition=null,tt=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,Kl=0,Ke&6)throw Error(ne(331));var r=Ke;for(Ke|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var u=me;switch(u.tag){case 0:case 11:case 15:No(8,u,s)}var d=u.child;if(d!==null)d.return=u,me=d;else for(;me!==null;){u=me;var h=u.sibling,m=u.return;if(U_(u),u===c){me=null;break}if(h!==null){h.return=m,me=h;break}me=m}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:No(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,me=f;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){o=me;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,me=_;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dc(9,a)}}catch(C){xt(a,a.return,C)}if(a===o){me=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,me=y;break e}me=a.return}}if(Ke=r,ur(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(rc,t)}catch{}i=!0}return i}finally{tt=n,Cn.transition=e}}return!1}function rm(t,e,n){e=Fs(n,e),e=M_(t,e,1),t=Zi(t,e,1),e=$t(),t!==null&&(na(t,1,e),sn(t,e))}function xt(t,e,n){if(t.tag===3)rm(t,t,n);else for(;e!==null;){if(e.tag===3){rm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ji===null||!Ji.has(i))){t=Fs(n,t),t=w_(e,t,1),e=Zi(e,t,1),t=$t(),e!==null&&(na(e,1,t),sn(e,t));break}}e=e.return}}function DS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ut&n)===n&&(Rt===4||Rt===3&&(Ut&130023424)===Ut&&500>St()-gh?Lr(t,0):mh|=n),sn(t,e)}function W_(t,e){e===0&&(t.mode&1?(e=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):e=1);var n=$t();t=Ai(t,e),t!==null&&(na(t,e,n),sn(t,n))}function US(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),W_(t,n)}function IS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),W_(t,n)}var j_;j_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,ES(t,e,n);tn=!!(t.flags&131072)}else tn=!1,dt&&e.flags&1048576&&Yv(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;gl(t,e),t=e.pendingProps;var r=Ns(e,Wt.current);Ts(e,n),r=ch(null,e,i,t,r,n);var s=uh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,Bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,rh(e),r.updater=fc,e.stateNode=r,r._reactInternals=e,Sf(e,i,t,n),e=wf(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&Zd(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(gl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=OS(i),t=On(i,t),r){case 0:e=Mf(null,e,i,t,n);break e;case 1:e=$p(null,e,i,t,n);break e;case 11:e=Xp(null,e,i,t,n);break e;case 14:e=qp(null,e,i,On(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Mf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),$p(t,e,i,r,n);case 3:e:{if(C_(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,t_(t,e),Wl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Fs(Error(ne(423)),e),e=Yp(t,e,i,n,r);break e}else if(i!==r){r=Fs(Error(ne(424)),e),e=Yp(t,e,i,n,r);break e}else for(mn=Ki(e.stateNode.containerInfo.firstChild),gn=e,dt=!0,Bn=null,n=Qv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ds(),i===r){e=Ri(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return n_(e),t===null&&_f(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,hf(i,r)?o=null:s!==null&&hf(i,s)&&(e.flags|=32),R_(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&_f(e),null;case 13:return b_(t,e,n);case 4:return sh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Us(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Xp(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(Vl,i._currentValue),i._currentValue=o,s!==null)if(qn(s.value,o)){if(s.children===r.children&&!nn.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ts(e,n),r=bn(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),qp(t,e,i,r,n);case 15:return T_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),gl(t,e),e.tag=1,rn(i)?(t=!0,Bl(e)):t=!1,Ts(e,n),E_(e,i,r),Sf(e,i,r,n),wf(null,e,i,!0,t,n);case 19:return P_(t,e,n);case 22:return A_(t,e,n)}throw Error(ne(156,e.tag))};function X_(t,e){return xv(t,e)}function FS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new FS(t,e,n,i)}function yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function OS(t){if(typeof t=="function")return yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bd)return 11;if(t===zd)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")yh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case cs:return Nr(n.children,r,s,e);case kd:o=8,r|=8;break;case Wu:return t=Rn(12,n,e,r|2),t.elementType=Wu,t.lanes=s,t;case ju:return t=Rn(13,n,e,r),t.elementType=ju,t.lanes=s,t;case Xu:return t=Rn(19,n,e,r),t.elementType=Xu,t.lanes=s,t;case nv:return pc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ev:o=10;break e;case tv:o=9;break e;case Bd:o=11;break e;case zd:o=14;break e;case Bi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function pc(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=nv,t.lanes=n,t.stateNode={isHidden:!1},t}function nu(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function iu(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Sh(t,e,n,i,r,s,o,a,l){return t=new kS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rh(s),t}function BS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function q_(t){if(!t)return sr;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(rn(n))return qv(t,n,e)}return e}function $_(t,e,n,i,r,s,o,a,l){return t=Sh(n,i,!0,t,r,s,o,a,l),t.context=q_(null),n=t.current,i=$t(),r=Qi(n),s=Ei(i,r),s.callback=e??null,Zi(n,s,r),t.current.lanes=r,na(t,r,i),sn(t,i),t}function mc(t,e,n,i){var r=e.current,s=$t(),o=Qi(r);return n=q_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Zi(r,e,o),t!==null&&(Gn(t,r,o,s),hl(t,r,o)),o}function Jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Eh(t,e){sm(t,e),(t=t.alternate)&&sm(t,e)}function zS(){return null}var Y_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mh(t){this._internalRoot=t}gc.prototype.render=Mh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));mc(t,e,null,null)};gc.prototype.unmount=Mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){mc(null,t,null,null)}),e[Ti]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Av();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hi.length&&e!==0&&e<Hi[n].priority;n++);Hi.splice(n,0,t),n===0&&Cv(t)}};function wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function om(){}function HS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Jl(o);s.call(c)}}var o=$_(e,i,t,0,null,!1,!1,"",om);return t._reactRootContainer=o,t[Ti]=o.current,Go(t.nodeType===8?t.parentNode:t),kr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Jl(l);a.call(c)}}var l=Sh(t,0,!1,null,null,!1,!1,"",om);return t._reactRootContainer=l,t[Ti]=l.current,Go(t.nodeType===8?t.parentNode:t),kr(function(){mc(e,l,n,i)}),l}function _c(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Jl(o);a.call(l)}}mc(e,o,t,r)}else o=HS(n,e,t,r,i);return Jl(o)}wv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Eo(e.pendingLanes);n!==0&&(Gd(e,n|1),sn(e,St()),!(Ke&6)&&(Os=St()+500,ur()))}break;case 13:kr(function(){var i=Ai(t,1);if(i!==null){var r=$t();Gn(i,t,1,r)}}),Eh(t,1)}};Wd=function(t){if(t.tag===13){var e=Ai(t,134217728);if(e!==null){var n=$t();Gn(e,t,134217728,n)}Eh(t,134217728)}};Tv=function(t){if(t.tag===13){var e=Qi(t),n=Ai(t,e);if(n!==null){var i=$t();Gn(n,t,e,i)}Eh(t,e)}};Av=function(){return tt};Rv=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};nf=function(t,e,n){switch(e){case"input":if(Yu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=lc(i);if(!r)throw Error(ne(90));rv(i),Yu(i,r)}}}break;case"textarea":ov(t,n);break;case"select":e=n.value,e!=null&&Ss(t,!!n.multiple,e,!1)}};hv=vh;pv=kr;var VS={usingClientEntryPoint:!1,Events:[ra,hs,lc,fv,dv,vh]},fo={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GS={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vv(t),t===null?null:t.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||zS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{rc=Fa.inject(GS),ni=Fa}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VS;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wh(e))throw Error(ne(200));return BS(t,e,null,n)};_n.createRoot=function(t,e){if(!wh(t))throw Error(ne(299));var n=!1,i="",r=Y_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Sh(t,1,!1,null,null,n,!1,i,r),t[Ti]=e.current,Go(t.nodeType===8?t.parentNode:t),new Mh(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=vv(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return kr(t)};_n.hydrate=function(t,e,n){if(!vc(e))throw Error(ne(200));return _c(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!wh(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Y_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$_(e,null,t,1,n??null,r,!1,s,o),t[Ti]=e.current,Go(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new gc(e)};_n.render=function(t,e,n){if(!vc(e))throw Error(ne(200));return _c(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!vc(t))throw Error(ne(40));return t._reactRootContainer?(kr(function(){_c(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1};_n.unstable_batchedUpdates=vh;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!vc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return _c(t,e,n,!1,i)};_n.version="18.3.1-next-f1338f8080-20240426";function K_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K_)}catch(t){console.error(t)}}K_(),Kg.exports=_n;var WS=Kg.exports,am=WS;Vu.createRoot=am.createRoot,Vu.hydrateRoot=am.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Jo.apply(this,arguments)}var Xi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xi||(Xi={}));const lm="popstate";function jS(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Ff("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Ql(r)}return qS(e,n,null,t)}function Tt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Th(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function XS(){return Math.random().toString(36).substr(2,8)}function cm(t,e){return{usr:t.state,key:t.key,idx:e}}function Ff(t,e,n,i){return n===void 0&&(n=null),Jo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?$s(e):e,{state:n,key:e&&e.key||i||XS()})}function Ql(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function $s(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function qS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Xi.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Jo({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=Xi.Pop;let p=u(),f=p==null?null:p-c;c=p,l&&l({action:a,location:x.location,delta:f})}function h(p,f){a=Xi.Push;let v=Ff(x.location,p,f);c=u()+1;let _=cm(v,c),y=x.createHref(v);try{o.pushState(_,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(y)}s&&l&&l({action:a,location:x.location,delta:1})}function m(p,f){a=Xi.Replace;let v=Ff(x.location,p,f);c=u();let _=cm(v,c),y=x.createHref(v);o.replaceState(_,"",y),s&&l&&l({action:a,location:x.location,delta:0})}function g(p){let f=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:Ql(p);return v=v.replace(/ $/,"%20"),Tt(f,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,f)}let x={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(lm,d),l=p,()=>{r.removeEventListener(lm,d),l=null}},createHref(p){return e(r,p)},createURL:g,encodeLocation(p){let f=g(p);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:m,go(p){return o.go(p)}};return x}var um;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(um||(um={}));function $S(t,e,n){return n===void 0&&(n="/"),YS(t,e,n)}function YS(t,e,n,i){let r=typeof e=="string"?$s(e):e,s=Ah(r.pathname||"/",n);if(s==null)return null;let o=Z_(t);KS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=lE(s);a=sE(o[l],c)}return a}function Z_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Tt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=tr([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Tt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Z_(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:iE(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of J_(s.path))r(s,o,l)}),e}function J_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=J_(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function KS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:rE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const ZS=/^:[\w-]+$/,JS=3,QS=2,eE=1,tE=10,nE=-2,fm=t=>t==="*";function iE(t,e){let n=t.split("/"),i=n.length;return n.some(fm)&&(i+=nE),e&&(i+=QS),n.filter(r=>!fm(r)).reduce((r,s)=>r+(ZS.test(s)?JS:s===""?eE:tE),i)}function rE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function sE(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=oE({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:tr([s,d.pathname]),pathnameBase:hE(tr([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=tr([s,d.pathnameBase]))}return o}function oE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=aE(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,d)=>{let{paramName:h,isOptional:m}=u;if(h==="*"){let x=a[d]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const g=a[d];return m&&!g?c[h]=void 0:c[h]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function aE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Th(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function lE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Th(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ah(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const cE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uE=t=>cE.test(t);function fE(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?$s(t):t,s;if(n)if(uE(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Th(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=dm(n.substring(1),"/"):s=dm(n,e)}else s=e;return{pathname:s,search:pE(i),hash:mE(r)}}function dm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ru(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Q_(t,e){let n=dE(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function e0(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=$s(t):(r=Jo({},t),Tt(!r.pathname||!r.pathname.includes("?"),ru("?","pathname","search",r)),Tt(!r.pathname||!r.pathname.includes("#"),ru("#","pathname","hash",r)),Tt(!r.search||!r.search.includes("#"),ru("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=fE(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const tr=t=>t.join("/").replace(/\/\/+/g,"/"),hE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),pE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,mE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function gE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const t0=["post","put","patch","delete"];new Set(t0);const vE=["get",...t0];new Set(vE);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Qo.apply(this,arguments)}const Rh=re.createContext(null),_E=re.createContext(null),Wr=re.createContext(null),xc=re.createContext(null),fr=re.createContext({outlet:null,matches:[],isDataRoute:!1}),n0=re.createContext(null);function xE(t,e){let{relative:n}=e===void 0?{}:e;oa()||Tt(!1);let{basename:i,navigator:r}=re.useContext(Wr),{hash:s,pathname:o,search:a}=r0(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:tr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function oa(){return re.useContext(xc)!=null}function yc(){return oa()||Tt(!1),re.useContext(xc).location}function i0(t){re.useContext(Wr).static||re.useLayoutEffect(t)}function Ys(){let{isDataRoute:t}=re.useContext(fr);return t?DE():yE()}function yE(){oa()||Tt(!1);let t=re.useContext(Rh),{basename:e,future:n,navigator:i}=re.useContext(Wr),{matches:r}=re.useContext(fr),{pathname:s}=yc(),o=JSON.stringify(Q_(r,n.v7_relativeSplatPath)),a=re.useRef(!1);return i0(()=>{a.current=!0}),re.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let d=e0(c,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:tr([e,d.pathname])),(u.replace?i.replace:i.push)(d,u.state,u)},[e,i,o,s,t])}function SE(){let{matches:t}=re.useContext(fr),e=t[t.length-1];return e?e.params:{}}function r0(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=re.useContext(Wr),{matches:r}=re.useContext(fr),{pathname:s}=yc(),o=JSON.stringify(Q_(r,i.v7_relativeSplatPath));return re.useMemo(()=>e0(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function EE(t,e){return ME(t,e)}function ME(t,e,n,i){oa()||Tt(!1);let{navigator:r}=re.useContext(Wr),{matches:s}=re.useContext(fr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=yc(),u;if(e){var d;let p=typeof e=="string"?$s(e):e;l==="/"||(d=p.pathname)!=null&&d.startsWith(l)||Tt(!1),u=p}else u=c;let h=u.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let g=$S(t,{pathname:m}),x=CE(g&&g.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:tr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:tr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&x?re.createElement(xc.Provider,{value:{location:Qo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Xi.Pop}},x):x}function wE(){let t=NE(),e=gE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return re.createElement(re.Fragment,null,re.createElement("h2",null,"Unexpected Application Error!"),re.createElement("h3",{style:{fontStyle:"italic"}},e),n?re.createElement("pre",{style:r},n):null,null)}const TE=re.createElement(wE,null);class AE extends re.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?re.createElement(fr.Provider,{value:this.props.routeContext},re.createElement(n0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RE(t){let{routeContext:e,match:n,children:i}=t,r=re.useContext(Rh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),re.createElement(fr.Provider,{value:e},i)}function CE(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||Tt(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:h,errors:m}=n,g=d.route.loader&&h[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,h)=>{let m,g=!1,x=null,p=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||TE,l&&(c<0&&h===0?(UE("route-fallback"),g=!0,p=null):c===h&&(g=!0,p=d.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,h+1)),v=()=>{let _;return m?_=x:g?_=p:d.route.Component?_=re.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=u,re.createElement(RE,{match:d,routeContext:{outlet:u,matches:f,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?re.createElement(AE,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:v(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):v()},null)}var s0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(s0||{}),o0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(o0||{});function bE(t){let e=re.useContext(Rh);return e||Tt(!1),e}function PE(t){let e=re.useContext(_E);return e||Tt(!1),e}function LE(t){let e=re.useContext(fr);return e||Tt(!1),e}function a0(t){let e=LE(),n=e.matches[e.matches.length-1];return n.route.id||Tt(!1),n.route.id}function NE(){var t;let e=re.useContext(n0),n=PE(),i=a0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function DE(){let{router:t}=bE(s0.UseNavigateStable),e=a0(o0.UseNavigateStable),n=re.useRef(!1);return i0(()=>{n.current=!0}),re.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Qo({fromRouteId:e},s)))},[t,e])}const hm={};function UE(t,e,n){hm[t]||(hm[t]=!0)}function IE(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function as(t){Tt(!1)}function FE(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Xi.Pop,navigator:s,static:o=!1,future:a}=t;oa()&&Tt(!1);let l=e.replace(/^\/*/,"/"),c=re.useMemo(()=>({basename:l,navigator:s,static:o,future:Qo({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=$s(i));let{pathname:u="/",search:d="",hash:h="",state:m=null,key:g="default"}=i,x=re.useMemo(()=>{let p=Ah(u,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:m,key:g},navigationType:r}},[l,u,d,h,m,g,r]);return x==null?null:re.createElement(Wr.Provider,{value:c},re.createElement(xc.Provider,{children:n,value:x}))}function OE(t){let{children:e,location:n}=t;return EE(Of(e),n)}new Promise(()=>{});function Of(t,e){e===void 0&&(e=[]);let n=[];return re.Children.forEach(t,(i,r)=>{if(!re.isValidElement(i))return;let s=[...e,r];if(i.type===re.Fragment){n.push.apply(n,Of(i.props.children,s));return}i.type!==as&&Tt(!1),!i.props.index||!i.props.children||Tt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Of(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kf(){return kf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},kf.apply(this,arguments)}function kE(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function BE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function zE(t,e){return t.button===0&&(!e||e==="_self")&&!BE(t)}const HE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],VE="6";try{window.__reactRouterVersion=VE}catch{}const GE="startTransition",pm=Dx[GE];function WE(t){let{basename:e,children:n,future:i,window:r}=t,s=re.useRef();s.current==null&&(s.current=jS({window:r,v5Compat:!0}));let o=s.current,[a,l]=re.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},u=re.useCallback(d=>{c&&pm?pm(()=>l(d)):l(d)},[l,c]);return re.useLayoutEffect(()=>o.listen(u),[o,u]),re.useEffect(()=>IE(i),[i]),re.createElement(FE,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const jE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",XE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qt=re.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,viewTransition:d}=e,h=kE(e,HE),{basename:m}=re.useContext(Wr),g,x=!1;if(typeof c=="string"&&XE.test(c)&&(g=c,jE))try{let _=new URL(window.location.href),y=c.startsWith("//")?new URL(_.protocol+c):new URL(c),C=Ah(y.pathname,m);y.origin===_.origin&&C!=null?c=C+y.search+y.hash:x=!0}catch{}let p=xE(c,{relative:r}),f=qE(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:d});function v(_){i&&i(_),_.defaultPrevented||f(_)}return re.createElement("a",kf({},h,{href:g||p,onClick:x||s?i:v,ref:n,target:l}))});var mm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(mm||(mm={}));var gm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(gm||(gm={}));function qE(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Ys(),c=yc(),u=r0(t,{relative:o});return re.useCallback(d=>{if(zE(d,n)){d.preventDefault();let h=i!==void 0?i:Ql(c)===Ql(u);l(t,{replace:h,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,u,i,r,n,t,s,o,a])}const l0=re.createContext(),aa=()=>re.useContext(l0);function $E({children:t}){const[e,n]=re.useState([]),i=c=>{n(u=>u.find(h=>h.id===c.id)?u.map(h=>h.id===c.id?{...h,quantity:h.quantity+1}:h):[...u,{...c,quantity:1}])},r=c=>{n(u=>u.filter(d=>d.id!==c))},s=(c,u)=>{if(u<=0){r(c);return}n(d=>d.map(h=>h.id===c?{...h,quantity:u}:h))},o=()=>n([]),a=e.reduce((c,u)=>c+u.quantity,0),l=e.reduce((c,u)=>c+u.price*u.quantity,0);return L.jsx(l0.Provider,{value:{cartItems:e,addToCart:i,removeFromCart:r,updateQuantity:s,clearCart:o,cartCount:a,cartTotal:l},children:t})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ch="170",YE=0,vm=1,KE=2,c0=1,ZE=2,pi=3,or=0,on=1,vi=2,nr=0,Rs=1,_m=2,xm=3,ym=4,JE=5,Mr=100,QE=101,eM=102,tM=103,nM=104,iM=200,rM=201,sM=202,oM=203,Bf=204,zf=205,aM=206,lM=207,cM=208,uM=209,fM=210,dM=211,hM=212,pM=213,mM=214,Hf=0,Vf=1,Gf=2,ks=3,Wf=4,jf=5,Xf=6,qf=7,bh=0,gM=1,vM=2,ir=0,_M=1,xM=2,yM=3,SM=4,EM=5,MM=6,wM=7,u0=300,Bs=301,zs=302,$f=303,Yf=304,Sc=306,Kf=1e3,Cr=1001,Zf=1002,Wn=1003,TM=1004,Oa=1005,ei=1006,su=1007,br=1008,Ci=1009,f0=1010,d0=1011,ea=1012,Ph=1013,Br=1014,yi=1015,la=1016,Lh=1017,Nh=1018,Hs=1020,h0=35902,p0=1021,m0=1022,Hn=1023,g0=1024,v0=1025,Cs=1026,Vs=1027,_0=1028,Dh=1029,x0=1030,Uh=1031,Ih=1033,yl=33776,Sl=33777,El=33778,Ml=33779,Jf=35840,Qf=35841,ed=35842,td=35843,nd=36196,id=37492,rd=37496,sd=37808,od=37809,ad=37810,ld=37811,cd=37812,ud=37813,fd=37814,dd=37815,hd=37816,pd=37817,md=37818,gd=37819,vd=37820,_d=37821,wl=36492,xd=36494,yd=36495,y0=36283,Sd=36284,Ed=36285,Md=36286,AM=3200,RM=3201,S0=0,CM=1,Gi="",wn="srgb",Ks="srgb-linear",Ec="linear",nt="srgb",qr=7680,Sm=519,bM=512,PM=513,LM=514,E0=515,NM=516,DM=517,UM=518,IM=519,Em=35044,Mm="300 es",Si=2e3,ec=2001;class Zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ou=Math.PI/180,wd=180/Math.PI;function ca(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function en(t,e,n){return Math.max(e,Math.min(n,t))}function FM(t,e){return(t%e+e)%e}function au(t,e,n){return(1-n)*t+n*e}function ho(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],x=r[0],p=r[3],f=r[6],v=r[1],_=r[4],y=r[7],C=r[2],A=r[5],T=r[8];return s[0]=o*x+a*v+l*C,s[3]=o*p+a*_+l*A,s[6]=o*f+a*y+l*T,s[1]=c*x+u*v+d*C,s[4]=c*p+u*_+d*A,s[7]=c*f+u*y+d*T,s[2]=h*x+m*v+g*C,s[5]=h*p+m*_+g*A,s[8]=h*f+m*y+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,m=c*s-o*l,g=n*d+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(lu.makeScale(e,n)),this}rotate(e){return this.premultiply(lu.makeRotation(-e)),this}translate(e,n){return this.premultiply(lu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lu=new Fe;function M0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function tc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function OM(){const t=tc("canvas");return t.style.display="block",t}const wm={};function wo(t){t in wm||(wm[t]=!0,console.warn(t))}function kM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function BM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===nt&&(t.r=Mi(t.r),t.g=Mi(t.g),t.b=Mi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===nt&&(t.r=bs(t.r),t.g=bs(t.g),t.b=bs(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Gi?Ec:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Mi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Tm=[.64,.33,.3,.6,.15,.06],Am=[.2126,.7152,.0722],Rm=[.3127,.329],Cm=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bm=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[Ks]:{primaries:Tm,whitePoint:Rm,transfer:Ec,toXYZ:Cm,fromXYZ:bm,luminanceCoefficients:Am,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:Tm,whitePoint:Rm,transfer:nt,toXYZ:Cm,fromXYZ:bm,luminanceCoefficients:Am,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}});let $r;class HM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$r===void 0&&($r=tc("canvas")),$r.width=e.width,$r.height=e.height;const i=$r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$r}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=tc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Mi(n[i]/255)*255):n[i]=Mi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VM=0;class w0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=ca(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cu(r[o].image)):s.push(cu(r[o]))}else s=cu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function cu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?HM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GM=0;class an extends Zs{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=Cr,r=Cr,s=ei,o=br,a=Hn,l=Ci,c=an.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=ca(),this.name="",this.source=new w0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kf:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case Zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kf:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case Zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=u0;an.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,n=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(m+1)/2,C=(f+1)/2,A=(u+h)/4,T=(d+x)/4,b=(g+p)/4;return _>y&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=T/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=b/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-x)/v,this.z=(h-u)/v,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WM extends Zs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new it(0,0,e,n),this.scissorTest=!1,this.viewport=new it(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new w0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends WM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class T0 extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jM extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ua{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=x;return}if(d!==x||l!==h||c!==m||u!==g){let p=1-a;const f=l*h+c*m+u*g+d*x,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const C=Math.sqrt(_),A=Math.atan2(C,f*v);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}const y=a*v;if(l=l*p+h*y,c=c*p+m*y,u=u*p+g*y,d=d*p+x*y,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*m-c*h,e[n+1]=l*g+u*h+c*d-a*m,e[n+2]=c*g+u*m+a*h-l*d,e[n+3]=u*g-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uu=new O,Pm=new ua;class fa{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),Ba.subVectors(this.max,po),Yr.subVectors(e.a,po),Kr.subVectors(e.b,po),Zr.subVectors(e.c,po),Di.subVectors(Kr,Yr),Ui.subVectors(Zr,Kr),hr.subVectors(Yr,Zr);let n=[0,-Di.z,Di.y,0,-Ui.z,Ui.y,0,-hr.z,hr.y,Di.z,0,-Di.x,Ui.z,0,-Ui.x,hr.z,0,-hr.x,-Di.y,Di.x,0,-Ui.y,Ui.x,0,-hr.y,hr.x,0];return!fu(n,Yr,Kr,Zr,Ba)||(n=[1,0,0,0,1,0,0,0,1],!fu(n,Yr,Kr,Zr,Ba))?!1:(za.crossVectors(Di,Ui),n=[za.x,za.y,za.z],fu(n,Yr,Kr,Zr,Ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new O,new O,new O,new O,new O,new O,new O,new O],Un=new O,ka=new fa,Yr=new O,Kr=new O,Zr=new O,Di=new O,Ui=new O,hr=new O,po=new O,Ba=new O,za=new O,pr=new O;function fu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){pr.fromArray(t,s);const a=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),c=n.dot(pr),u=i.dot(pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const XM=new fa,mo=new O,du=new O;class Mc{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):XM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const n=mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(du)),this.expandByPoint(mo.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new O,hu=new O,Ha=new O,Ii=new O,pu=new O,Va=new O,mu=new O;class A0{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){hu.copy(e).add(n).multiplyScalar(.5),Ha.copy(n).sub(e).normalize(),Ii.copy(this.origin).sub(hu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ha),a=Ii.dot(this.direction),l=-Ii.dot(Ha),c=Ii.lengthSq(),u=Math.abs(1-o*o);let d,h,m,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const x=1/u;d*=x,h*=x,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(hu).addScaledVector(Ha,h),m}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){pu.subVectors(n,e),Va.subVectors(i,e),mu.crossVectors(pu,Va);let o=this.direction.dot(mu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(Va.crossVectors(Ii,Va));if(l<0)return null;const c=a*this.direction.dot(pu.cross(Ii));if(c<0||l+c>o)return null;const u=-a*Ii.dot(mu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,o,a,l,c,u,d,h,m,g,x,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,m,g,x,p)}set(e,n,i,r,s,o,a,l,c,u,d,h,m,g,x,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*d,g=a*u,x=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=m+g*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=g+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,g=c*u,x=c*d;n[0]=h+x*a,n[4]=g*a-m,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=m*a-g,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,g=c*u,x=c*d;n[0]=h-x*a,n[4]=-o*d,n[8]=g+m*a,n[1]=m+g*a,n[5]=o*u,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*d,g=a*u,x=a*d;n[0]=l*u,n[4]=g*c-m,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=m*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=x-h*d,n[8]=g*d+m,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*d+g,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+x,n[5]=o*u,n[9]=m*d-g,n[2]=g*d-m,n[6]=a*u,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qM,e,$M)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Fi.crossVectors(i,fn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Fi.crossVectors(i,fn)),Fi.normalize(),Ga.crossVectors(fn,Fi),r[0]=Fi.x,r[4]=Ga.x,r[8]=fn.x,r[1]=Fi.y,r[5]=Ga.y,r[9]=fn.y,r[2]=Fi.z,r[6]=Ga.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],x=i[6],p=i[10],f=i[14],v=i[3],_=i[7],y=i[11],C=i[15],A=r[0],T=r[4],b=r[8],w=r[12],S=r[1],P=r[5],G=r[9],H=r[13],$=r[2],Q=r[6],W=r[10],ee=r[14],N=r[3],q=r[7],J=r[11],ae=r[15];return s[0]=o*A+a*S+l*$+c*N,s[4]=o*T+a*P+l*Q+c*q,s[8]=o*b+a*G+l*W+c*J,s[12]=o*w+a*H+l*ee+c*ae,s[1]=u*A+d*S+h*$+m*N,s[5]=u*T+d*P+h*Q+m*q,s[9]=u*b+d*G+h*W+m*J,s[13]=u*w+d*H+h*ee+m*ae,s[2]=g*A+x*S+p*$+f*N,s[6]=g*T+x*P+p*Q+f*q,s[10]=g*b+x*G+p*W+f*J,s[14]=g*w+x*H+p*ee+f*ae,s[3]=v*A+_*S+y*$+C*N,s[7]=v*T+_*P+y*Q+C*q,s[11]=v*b+_*G+y*W+C*J,s[15]=v*w+_*H+y*ee+C*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],x=e[7],p=e[11],f=e[15];return g*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*m-i*l*m)+x*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+n*c*d-n*a*m-s*o*d+i*o*m+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],x=e[13],p=e[14],f=e[15],v=d*p*c-x*h*c+x*l*m-a*p*m-d*l*f+a*h*f,_=g*h*c-u*p*c-g*l*m+o*p*m+u*l*f-o*h*f,y=u*x*c-g*d*c+g*a*m-o*x*m-u*a*f+o*d*f,C=g*d*l-u*x*l-g*a*h+o*x*h+u*a*p-o*d*p,A=n*v+i*_+r*y+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(x*h*s-d*p*s-x*r*m+i*p*m+d*r*f-i*h*f)*T,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*f+i*l*f)*T,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*m-i*l*m)*T,e[4]=_*T,e[5]=(u*p*s-g*h*s+g*r*m-n*p*m-u*r*f+n*h*f)*T,e[6]=(g*l*s-o*p*s-g*r*c+n*p*c+o*r*f-n*l*f)*T,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*m+n*l*m)*T,e[8]=y*T,e[9]=(g*d*s-u*x*s-g*i*m+n*x*m+u*i*f-n*d*f)*T,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*f+n*a*f)*T,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*m-n*a*m)*T,e[12]=C*T,e[13]=(u*x*r-g*d*r+g*i*h-n*x*h-u*i*p+n*d*p)*T,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*p-n*a*p)*T,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,m=s*u,g=s*d,x=o*u,p=o*d,f=a*d,v=l*c,_=l*u,y=l*d,C=i.x,A=i.y,T=i.z;return r[0]=(1-(x+f))*C,r[1]=(m+y)*C,r[2]=(g-_)*C,r[3]=0,r[4]=(m-y)*A,r[5]=(1-(h+f))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(g+_)*T,r[9]=(p-v)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Jr.set(r[0],r[1],r[2]).length();const o=Jr.set(r[4],r[5],r[6]).length(),a=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const c=1/s,u=1/o,d=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,n.setFromRotationMatrix(In),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Si){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,g;if(a===Si)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ec)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Si){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,m=(i+r)*u;let g,x;if(a===Si)g=(o+s)*d,x=-2*d;else if(a===ec)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Jr=new O,In=new ht,qM=new O(0,0,0),$M=new O(1,1,1),Fi=new O,Ga=new O,fn=new O,Lm=new ht,Nm=new ua;class si{constructor(e=0,n=0,i=0,r=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nm.setFromEuler(this),this.setFromQuaternion(Nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class R0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YM=0;const Dm=new O,Qr=new ua,fi=new ht,Wa=new O,go=new O,KM=new O,ZM=new ua,Um=new O(1,0,0),Im=new O(0,1,0),Fm=new O(0,0,1),Om={type:"added"},JM={type:"removed"},es={type:"childadded",child:null},gu={type:"childremoved",child:null};class It extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new O,n=new si,i=new ua,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Fe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(Um,e)}rotateY(e){return this.rotateOnAxis(Im,e)}rotateZ(e){return this.rotateOnAxis(Fm,e)}translateOnAxis(e,n){return Dm.copy(e).applyQuaternion(this.quaternion),this.position.add(Dm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Um,e)}translateY(e){return this.translateOnAxis(Im,e)}translateZ(e){return this.translateOnAxis(Fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Wa.copy(e):Wa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(go,Wa,this.up):fi.lookAt(Wa,go,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(fi),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Om),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(JM),gu.child=e,this.dispatchEvent(gu),gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Om),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,KM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,ZM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}It.DEFAULT_UP=new O(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new O,di=new O,vu=new O,hi=new O,ts=new O,ns=new O,km=new O,_u=new O,xu=new O,yu=new O,Su=new it,Eu=new it,Mu=new it;class zn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fn.subVectors(r,n),di.subVectors(i,n),vu.subVectors(e,n);const o=Fn.dot(Fn),a=Fn.dot(di),l=Fn.dot(vu),c=di.dot(di),u=di.dot(vu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Su.setScalar(0),Eu.setScalar(0),Mu.setScalar(0),Su.fromBufferAttribute(e,n),Eu.fromBufferAttribute(e,i),Mu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Su,s.x),o.addScaledVector(Eu,s.y),o.addScaledVector(Mu,s.z),o}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),di.subVectors(e,n),Fn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Fn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ts.subVectors(r,i),ns.subVectors(s,i),_u.subVectors(e,i);const l=ts.dot(_u),c=ns.dot(_u);if(l<=0&&c<=0)return n.copy(i);xu.subVectors(e,r);const u=ts.dot(xu),d=ns.dot(xu);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ts,o);yu.subVectors(e,s);const m=ts.dot(yu),g=ns.dot(yu);if(g>=0&&m<=g)return n.copy(s);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(ns,a);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return km.subVectors(s,r),a=(d-u)/(d-u+(m-g)),n.copy(r).addScaledVector(km,a);const f=1/(p+x+h);return o=x*f,a=h*f,n.copy(i).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const C0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},ja={h:0,s:0,l:0};function wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=FM(e,1),n=en(n,0,1),i=en(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=wu(o,s,e+1/3),this.g=wu(o,s,e),this.b=wu(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,n=wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=wn){const i=C0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return $e.fromWorkingColorSpace(Ht.copy(this),e),Math.round(en(Ht.r*255,0,255))*65536+Math.round(en(Ht.g*255,0,255))*256+Math.round(en(Ht.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=wn){$e.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+n,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Oi),e.getHSL(ja);const i=au(Oi.h,ja.h,n),r=au(Oi.s,ja.s,n),s=au(Oi.l,ja.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ye;Ye.NAMES=C0;let QM=0;class Js extends Zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=ca(),this.name="",this.blending=Rs,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bf,this.blendDst=zf,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bf&&(i.blendSrc=this.blendSrc),this.blendDst!==zf&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class b0 extends Js{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new O,Xa=new je;class jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Em,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xa.fromBufferAttribute(this,n),Xa.applyMatrix3(e),this.setXY(n,Xa.x,Xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ho(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ho(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ho(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ho(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ho(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Em&&(e.usage=this.usage),e}}class P0 extends jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class L0 extends jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ri extends jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ew=0;const En=new ht,Tu=new It,is=new O,dn=new fa,vo=new fa,Pt=new O;class oi extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ew++}),this.uuid=ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(M0(e)?L0:P0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return Tu.lookAt(e),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ri(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(dn.min,vo.min),dn.expandByPoint(Pt),Pt.addVectors(dn.max,vo.max),dn.expandByPoint(Pt)):(dn.expandByPoint(vo.min),dn.expandByPoint(vo.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pt.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),Pt.add(is)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new O,l[b]=new O;const c=new O,u=new O,d=new O,h=new je,m=new je,g=new je,x=new O,p=new O;function f(b,w,S){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),g.fromBufferAttribute(s,S),u.sub(c),d.sub(c),m.sub(h),g.sub(h);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(P),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(P),a[b].add(x),a[w].add(x),a[S].add(x),l[b].add(p),l[w].add(p),l[S].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,w=v.length;b<w;++b){const S=v[b],P=S.start,G=S.count;for(let H=P,$=P+G;H<$;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new O,y=new O,C=new O,A=new O;function T(b){C.fromBufferAttribute(r,b),A.copy(C);const w=a[b];_.copy(w),_.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(A,w);const P=y.dot(l[b])<0?-1:1;o.setXYZW(b,_.x,_.y,_.z,P)}for(let b=0,w=v.length;b<w;++b){const S=v[b],P=S.start,G=S.count;for(let H=P,$=P+G;H<$;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let f=0;f<u;f++)h[g++]=c[m++]}return new jn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new oi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bm=new ht,mr=new A0,qa=new Mc,zm=new O,$a=new O,Ya=new O,Ka=new O,Au=new O,Za=new O,Hm=new O,Ja=new O;class ti extends It{constructor(e=new oi,n=new b0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Za.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Au.fromBufferAttribute(d,e),o?Za.addScaledVector(Au,u):Za.addScaledVector(Au.sub(n),u))}n.add(Za)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(qa.containsPoint(mr.origin)===!1&&(mr.intersectSphere(qa,zm)===null||mr.origin.distanceToSquared(zm)>(e.far-e.near)**2))&&(Bm.copy(s).invert(),mr.copy(e.ray).applyMatrix4(Bm),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const p=h[g],f=o[p.materialIndex],v=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,C=_;y<C;y+=3){const A=a.getX(y),T=a.getX(y+1),b=a.getX(y+2);r=Qa(this,f,e,i,c,u,d,A,T,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){const v=a.getX(p),_=a.getX(p+1),y=a.getX(p+2);r=Qa(this,o,e,i,c,u,d,v,_,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const p=h[g],f=o[p.materialIndex],v=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,C=_;y<C;y+=3){const A=y,T=y+1,b=y+2;r=Qa(this,f,e,i,c,u,d,A,T,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){const v=p,_=p+1,y=p+2;r=Qa(this,o,e,i,c,u,d,v,_,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function tw(t,e,n,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===or,a),l===null)return null;Ja.copy(a),Ja.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ja);return c<n.near||c>n.far?null:{distance:c,point:Ja.clone(),object:t}}function Qa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,$a),t.getVertexPosition(l,Ya),t.getVertexPosition(c,Ka);const u=tw(t,e,n,i,$a,Ya,Ka,Hm);if(u){const d=new O;zn.getBarycoord(Hm,$a,Ya,Ka,d),r&&(u.uv=zn.getInterpolatedAttribute(r,a,l,c,d,new je)),s&&(u.uv1=zn.getInterpolatedAttribute(s,a,l,c,d,new je)),o&&(u.normal=zn.getInterpolatedAttribute(o,a,l,c,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};zn.getNormal($a,Ya,Ka,h.normal),u.face=h,u.barycoord=d}return u}class da extends oi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ri(c,3)),this.setAttribute("normal",new ri(u,3)),this.setAttribute("uv",new ri(d,2));function g(x,p,f,v,_,y,C,A,T,b,w){const S=y/T,P=C/b,G=y/2,H=C/2,$=A/2,Q=T+1,W=b+1;let ee=0,N=0;const q=new O;for(let J=0;J<W;J++){const ae=J*P-H;for(let _e=0;_e<Q;_e++){const He=_e*S-G;q[x]=He*v,q[p]=ae*_,q[f]=$,c.push(q.x,q.y,q.z),q[x]=0,q[p]=0,q[f]=A>0?1:-1,u.push(q.x,q.y,q.z),d.push(_e/T),d.push(1-J/b),ee+=1}}for(let J=0;J<b;J++)for(let ae=0;ae<T;ae++){const _e=h+ae+Q*J,He=h+ae+Q*(J+1),X=h+(ae+1)+Q*(J+1),ie=h+(ae+1)+Q*J;l.push(_e,He,ie),l.push(He,X,ie),N+=6}a.addGroup(m,N,w),m+=N,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=Gs(t[n]);for(const r in i)e[r]=i[r]}return e}function nw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function N0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const iw={clone:Gs,merge:jt};var rw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends Js{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rw,this.fragmentShader=sw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=nw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class D0 extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new O,Vm=new je,Gm=new je;class pn extends D0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ou*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wd*2*Math.atan(Math.tan(ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,Vm,Gm),n.subVectors(Gm,Vm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ou*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const rs=-90,ss=1;class ow extends It{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(rs,ss,e,n);r.layers=this.layers,this.add(r);const s=new pn(rs,ss,e,n);s.layers=this.layers,this.add(s);const o=new pn(rs,ss,e,n);o.layers=this.layers,this.add(o);const a=new pn(rs,ss,e,n);a.layers=this.layers,this.add(a);const l=new pn(rs,ss,e,n);l.layers=this.layers,this.add(l);const c=new pn(rs,ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class U0 extends an{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aw extends zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new U0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ei}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new da(5,5,5),s=new ar({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:nr});s.uniforms.tEquirect.value=n;const o=new ti(r,s),a=n.minFilter;return n.minFilter===br&&(n.minFilter=ei),new ow(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ru=new O,lw=new O,cw=new Fe;class Sr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ru.subVectors(i,n).cross(lw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ru),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||cw.getNormalMatrix(e),r=this.coplanarPoint(Ru).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Mc,el=new O;class Fh{constructor(e=new Sr,n=new Sr,i=new Sr,r=new Sr,s=new Sr,o=new Sr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],m=r[8],g=r[9],x=r[10],p=r[11],f=r[12],v=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,p-m,y-f).normalize(),i[1].setComponents(l+s,h+c,p+m,y+f).normalize(),i[2].setComponents(l+o,h+u,p+g,y+v).normalize(),i[3].setComponents(l-o,h-u,p-g,y-v).normalize(),i[4].setComponents(l-a,h-d,p-x,y-_).normalize(),n===Si)i[5].setComponents(l+a,h+d,p+x,y+_).normalize();else if(n===ec)i[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function I0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function uw(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<d.length;m++){const g=d[h],x=d[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let m=0,g=d.length;m<g;m++){const x=d[m];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class wc extends oi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,m=[],g=[],x=[],p=[];for(let f=0;f<u;f++){const v=f*h-o;for(let _=0;_<c;_++){const y=_*d-s;g.push(y,-v,0),x.push(0,0,1),p.push(_/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const _=v+c*f,y=v+c*(f+1),C=v+1+c*(f+1),A=v+1+c*f;m.push(_,y,A),m.push(y,C,A)}this.setIndex(m),this.setAttribute("position",new ri(g,3)),this.setAttribute("normal",new ri(x,3)),this.setAttribute("uv",new ri(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}var fw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_w=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ew=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ww=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Aw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Uw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Iw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ow=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ww=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$w=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_T=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ST=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ET=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$T=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,L1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,I1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,V1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:fw,alphahash_pars_fragment:dw,alphamap_fragment:hw,alphamap_pars_fragment:pw,alphatest_fragment:mw,alphatest_pars_fragment:gw,aomap_fragment:vw,aomap_pars_fragment:_w,batching_pars_vertex:xw,batching_vertex:yw,begin_vertex:Sw,beginnormal_vertex:Ew,bsdfs:Mw,iridescence_fragment:ww,bumpmap_pars_fragment:Tw,clipping_planes_fragment:Aw,clipping_planes_pars_fragment:Rw,clipping_planes_pars_vertex:Cw,clipping_planes_vertex:bw,color_fragment:Pw,color_pars_fragment:Lw,color_pars_vertex:Nw,color_vertex:Dw,common:Uw,cube_uv_reflection_fragment:Iw,defaultnormal_vertex:Fw,displacementmap_pars_vertex:Ow,displacementmap_vertex:kw,emissivemap_fragment:Bw,emissivemap_pars_fragment:zw,colorspace_fragment:Hw,colorspace_pars_fragment:Vw,envmap_fragment:Gw,envmap_common_pars_fragment:Ww,envmap_pars_fragment:jw,envmap_pars_vertex:Xw,envmap_physical_pars_fragment:iT,envmap_vertex:qw,fog_vertex:$w,fog_pars_vertex:Yw,fog_fragment:Kw,fog_pars_fragment:Zw,gradientmap_pars_fragment:Jw,lightmap_pars_fragment:Qw,lights_lambert_fragment:eT,lights_lambert_pars_fragment:tT,lights_pars_begin:nT,lights_toon_fragment:rT,lights_toon_pars_fragment:sT,lights_phong_fragment:oT,lights_phong_pars_fragment:aT,lights_physical_fragment:lT,lights_physical_pars_fragment:cT,lights_fragment_begin:uT,lights_fragment_maps:fT,lights_fragment_end:dT,logdepthbuf_fragment:hT,logdepthbuf_pars_fragment:pT,logdepthbuf_pars_vertex:mT,logdepthbuf_vertex:gT,map_fragment:vT,map_pars_fragment:_T,map_particle_fragment:xT,map_particle_pars_fragment:yT,metalnessmap_fragment:ST,metalnessmap_pars_fragment:ET,morphinstance_vertex:MT,morphcolor_vertex:wT,morphnormal_vertex:TT,morphtarget_pars_vertex:AT,morphtarget_vertex:RT,normal_fragment_begin:CT,normal_fragment_maps:bT,normal_pars_fragment:PT,normal_pars_vertex:LT,normal_vertex:NT,normalmap_pars_fragment:DT,clearcoat_normal_fragment_begin:UT,clearcoat_normal_fragment_maps:IT,clearcoat_pars_fragment:FT,iridescence_pars_fragment:OT,opaque_fragment:kT,packing:BT,premultiplied_alpha_fragment:zT,project_vertex:HT,dithering_fragment:VT,dithering_pars_fragment:GT,roughnessmap_fragment:WT,roughnessmap_pars_fragment:jT,shadowmap_pars_fragment:XT,shadowmap_pars_vertex:qT,shadowmap_vertex:$T,shadowmask_pars_fragment:YT,skinbase_vertex:KT,skinning_pars_vertex:ZT,skinning_vertex:JT,skinnormal_vertex:QT,specularmap_fragment:e1,specularmap_pars_fragment:t1,tonemapping_fragment:n1,tonemapping_pars_fragment:i1,transmission_fragment:r1,transmission_pars_fragment:s1,uv_pars_fragment:o1,uv_pars_vertex:a1,uv_vertex:l1,worldpos_vertex:c1,background_vert:u1,background_frag:f1,backgroundCube_vert:d1,backgroundCube_frag:h1,cube_vert:p1,cube_frag:m1,depth_vert:g1,depth_frag:v1,distanceRGBA_vert:_1,distanceRGBA_frag:x1,equirect_vert:y1,equirect_frag:S1,linedashed_vert:E1,linedashed_frag:M1,meshbasic_vert:w1,meshbasic_frag:T1,meshlambert_vert:A1,meshlambert_frag:R1,meshmatcap_vert:C1,meshmatcap_frag:b1,meshnormal_vert:P1,meshnormal_frag:L1,meshphong_vert:N1,meshphong_frag:D1,meshphysical_vert:U1,meshphysical_frag:I1,meshtoon_vert:F1,meshtoon_frag:O1,points_vert:k1,points_frag:B1,shadow_vert:z1,shadow_frag:H1,sprite_vert:V1,sprite_frag:G1},ce={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Jn={basic:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:jt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:jt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:jt([ce.points,ce.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:jt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:jt([ce.common,ce.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:jt([ce.sprite,ce.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:jt([ce.common,ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:jt([ce.lights,ce.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Jn.physical={uniforms:jt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const tl={r:0,b:0,g:0},vr=new si,W1=new ht;function j1(t,e,n,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,d=null,h=0,m=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function x(v){let _=!1;const y=g(v);y===null?f(a,l):y&&y.isColor&&(f(y,1),_=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(v,_){const y=g(_);y&&(y.isCubeTexture||y.mapping===Sc)?(u===void 0&&(u=new ti(new da(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:Gs(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),vr.copy(_.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(W1.makeRotationFromEuler(vr)),u.material.toneMapped=$e.getTransfer(y.colorSpace)!==nt,(d!==y||h!==y.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,m=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ti(new wc(2,2),new ar({name:"BackgroundMaterial",uniforms:Gs(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=$e.getTransfer(y.colorSpace)!==nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,_){v.getRGB(tl,N0(t)),i.buffers.color.setClear(tl.r,tl.g,tl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:x,addToRenderList:p}}function X1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,P,G,H,$){let Q=!1;const W=d(H,G,P);s!==W&&(s=W,c(s.object)),Q=m(S,H,G,$),Q&&g(S,H,G,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,y(S,P,G,H),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,P,G){const H=G.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let Q=$[P.id];Q===void 0&&(Q={},$[P.id]=Q);let W=Q[H];return W===void 0&&(W=h(l()),Q[H]=W),W}function h(S){const P=[],G=[],H=[];for(let $=0;$<n;$++)P[$]=0,G[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:H,object:S,attributes:{},index:null}}function m(S,P,G,H){const $=s.attributes,Q=P.attributes;let W=0;const ee=G.getAttributes();for(const N in ee)if(ee[N].location>=0){const J=$[N];let ae=Q[N];if(ae===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;W++}return s.attributesNum!==W||s.index!==H}function g(S,P,G,H){const $={},Q=P.attributes;let W=0;const ee=G.getAttributes();for(const N in ee)if(ee[N].location>=0){let J=Q[N];J===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),$[N]=ae,W++}s.attributes=$,s.attributesNum=W,s.index=H}function x(){const S=s.newAttributes;for(let P=0,G=S.length;P<G;P++)S[P]=0}function p(S){f(S,0)}function f(S,P){const G=s.newAttributes,H=s.enabledAttributes,$=s.attributeDivisors;G[S]=1,H[S]===0&&(t.enableVertexAttribArray(S),H[S]=1),$[S]!==P&&(t.vertexAttribDivisor(S,P),$[S]=P)}function v(){const S=s.newAttributes,P=s.enabledAttributes;for(let G=0,H=P.length;G<H;G++)P[G]!==S[G]&&(t.disableVertexAttribArray(G),P[G]=0)}function _(S,P,G,H,$,Q,W){W===!0?t.vertexAttribIPointer(S,P,G,$,Q):t.vertexAttribPointer(S,P,G,H,$,Q)}function y(S,P,G,H){x();const $=H.attributes,Q=G.getAttributes(),W=P.defaultAttributeValues;for(const ee in Q){const N=Q[ee];if(N.location>=0){let q=$[ee];if(q===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const J=q.normalized,ae=q.itemSize,_e=e.get(q);if(_e===void 0)continue;const He=_e.buffer,X=_e.type,ie=_e.bytesPerElement,ge=X===t.INT||X===t.UNSIGNED_INT||q.gpuType===Ph;if(q.isInterleavedBufferAttribute){const le=q.data,Pe=le.stride,De=q.offset;if(le.isInstancedInterleavedBuffer){for(let Be=0;Be<N.locationSize;Be++)f(N.location+Be,le.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Be=0;Be<N.locationSize;Be++)p(N.location+Be);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Be=0;Be<N.locationSize;Be++)_(N.location+Be,ae/N.locationSize,X,J,Pe*ie,(De+ae/N.locationSize*Be)*ie,ge)}else{if(q.isInstancedBufferAttribute){for(let le=0;le<N.locationSize;le++)f(N.location+le,q.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<N.locationSize;le++)p(N.location+le);t.bindBuffer(t.ARRAY_BUFFER,He);for(let le=0;le<N.locationSize;le++)_(N.location+le,ae/N.locationSize,X,J,ae*ie,ae/N.locationSize*le*ie,ge)}}else if(W!==void 0){const J=W[ee];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(N.location,J);break;case 3:t.vertexAttrib3fv(N.location,J);break;case 4:t.vertexAttrib4fv(N.location,J);break;default:t.vertexAttrib1fv(N.location,J)}}}}v()}function C(){b();for(const S in i){const P=i[S];for(const G in P){const H=P[G];for(const $ in H)u(H[$].object),delete H[$];delete P[G]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const G in P){const H=P[G];for(const $ in H)u(H[$].object),delete H[$];delete P[G]}delete i[S.id]}function T(S){for(const P in i){const G=i[P];if(G[S.id]===void 0)continue;const H=G[S.id];for(const $ in H)u(H[$].object),delete H[$];delete G[S.id]}}function b(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function q1(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];n.update(m,i,1)}function l(c,u,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*h[x];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Hn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===la&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ci&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==yi&&!b)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:C,maxSamples:A}}function Y1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Sr,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,f=t.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const v=s?0:i,_=v*4;let y=f.clippingState||null;l.value=y,y=u(g,h,_,m);for(let C=0;C!==_;++C)y[C]=n[C];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,g){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const f=m+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let _=0,y=m;_!==x;++_,y+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function K1(t){let e=new WeakMap;function n(o,a){return a===$f?o.mapping=Bs:a===Yf&&(o.mapping=zs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$f||a===Yf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new aw(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class F0 extends D0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ys=4,Wm=[.125,.215,.35,.446,.526,.582],wr=20,Cu=new F0,jm=new Ye;let bu=null,Pu=0,Lu=0,Nu=!1;const Er=(1+Math.sqrt(5))/2,os=1/Er,Xm=[new O(-Er,os,0),new O(Er,os,0),new O(-os,0,Er),new O(os,0,Er),new O(0,Er,-os),new O(0,Er,os),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Lu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ym(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Pu,Lu),this._renderer.xr.enabled=Nu,e.scissorTest=!1,nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Lu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:la,format:Hn,colorSpace:Ks,depthBuffer:!1},r=$m(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$m(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z1(s)),this._blurMaterial=J1(s,e,n)}return r}_compileMaterial(e){const n=new ti(this._lodPlanes[0],e);this._renderer.compile(n,Cu)}_sceneToCubeUV(e,n,i,r){const a=new pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(jm),u.toneMapping=ir,u.autoClear=!1;const m=new b0({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new ti(new da,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(jm),x=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;nl(r,v*_,f>2?_:0,_,_),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Bs||e.mapping===zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Km()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ym());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ti(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;nl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Cu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xm[(r-s-1)%Xm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ti(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wr-1),x=s/g,p=isFinite(s)?1+Math.floor(u*x):wr;p>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wr}`);const f=[];let v=0;for(let T=0;T<wr;++T){const b=T/x,w=Math.exp(-b*b/2);f.push(w),T===0?v+=w:T<p&&(v+=2*w)}for(let T=0;T<f.length;T++)f[T]=f[T]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const y=this._sizeLods[r],C=3*y*(r>_-ys?r-_+ys:0),A=4*(this._cubeSize-y);nl(n,C,A,3*y,2*y),l.setRenderTarget(n),l.render(d,Cu)}}function Z1(t){const e=[],n=[],i=[];let r=t;const s=t-ys+1+Wm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ys?l=Wm[o-t+ys-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,x=3,p=2,f=1,v=new Float32Array(x*g*m),_=new Float32Array(p*g*m),y=new Float32Array(f*g*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,b=A>2?0:-1,w=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];v.set(w,x*g*A),_.set(h,p*g*A);const S=[A,A,A,A,A,A];y.set(S,f*g*A)}const C=new oi;C.setAttribute("position",new jn(v,x)),C.setAttribute("uv",new jn(_,p)),C.setAttribute("faceIndex",new jn(y,f)),e.push(C),r>ys&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function $m(t,e,n){const i=new zr(t,e,n);return i.texture.mapping=Sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function J1(t,e,n){const i=new Float32Array(wr),r=new O(0,1,0);return new ar({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Ym(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Km(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Oh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Q1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$f||l===Yf,u=l===Bs||l===zs;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new qm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new qm(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function eA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&wo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tA(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const x=m[g];for(let p=0,f=x.length;p<f;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let x=0;if(m!==null){const v=m.array;x=m.version;for(let _=0,y=v.length;_<y;_+=3){const C=v[_+0],A=v[_+1],T=v[_+2];h.push(C,A,A,T,T,C)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const C=_+0,A=_+1,T=_+2;h.push(C,A,A,T,T,C)}}else return;const p=new(M0(h)?L0:P0)(h,1);p.version=x;const f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function nA(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function c(h,m,g){g!==0&&(t.drawElementsInstanced(i,m,s,h*o,g),n.update(m,i,g))}function u(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];n.update(p,i,1)}function d(h,m,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)c(h[f]/o,m[f],x[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,x,0,g);let f=0;for(let v=0;v<g;v++)f+=m[v]*x[v];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function iA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function rA(t,e,n){const i=new WeakMap,r=new it;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),p===!0&&(y=3);let C=a.attributes.position.count*y,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*A*4*d),b=new T0(T,C,A,d);b.type=yi,b.needsUpdate=!0;const w=y*4;for(let P=0;P<d;P++){const G=f[P],H=v[P],$=_[P],Q=C*A*4*P;for(let W=0;W<G.count;W++){const ee=W*w;g===!0&&(r.fromBufferAttribute(G,W),T[Q+ee+0]=r.x,T[Q+ee+1]=r.y,T[Q+ee+2]=r.z,T[Q+ee+3]=0),x===!0&&(r.fromBufferAttribute(H,W),T[Q+ee+4]=r.x,T[Q+ee+5]=r.y,T[Q+ee+6]=r.z,T[Q+ee+7]=0),p===!0&&(r.fromBufferAttribute($,W),T[Q+ee+8]=r.x,T[Q+ee+9]=r.y,T[Q+ee+10]=r.z,T[Q+ee+11]=$.itemSize===4?r.w:1)}}h={count:d,texture:b,size:new je(C,A)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function sA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class O0 extends an{constructor(e,n,i,r,s,o,a,l,c,u=Cs){if(u!==Cs&&u!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Cs&&(i=Br),i===void 0&&u===Vs&&(i=Hs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Wn,this.minFilter=l!==void 0?l:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const k0=new an,Zm=new O0(1,1),B0=new T0,z0=new jM,H0=new U0,Jm=[],Qm=[],eg=new Float32Array(16),tg=new Float32Array(9),ng=new Float32Array(4);function Qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Jm[r];if(s===void 0&&(s=new Float32Array(r),Jm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Tc(t,e){let n=Qm[e];n===void 0&&(n=new Int32Array(e),Qm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function oA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function aA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function lA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function cA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function uA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;ng.set(i),t.uniformMatrix2fv(this.addr,!1,ng),bt(n,i)}}function fA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;tg.set(i),t.uniformMatrix3fv(this.addr,!1,tg),bt(n,i)}}function dA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;eg.set(i),t.uniformMatrix4fv(this.addr,!1,eg),bt(n,i)}}function hA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function mA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function gA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function vA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function xA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function yA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function SA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Zm.compareFunction=E0,s=Zm):s=k0,n.setTexture2D(e||s,r)}function EA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||z0,r)}function MA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||H0,r)}function wA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||B0,r)}function TA(t){switch(t){case 5126:return oA;case 35664:return aA;case 35665:return lA;case 35666:return cA;case 35674:return uA;case 35675:return fA;case 35676:return dA;case 5124:case 35670:return hA;case 35667:case 35671:return pA;case 35668:case 35672:return mA;case 35669:case 35673:return gA;case 5125:return vA;case 36294:return _A;case 36295:return xA;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return EA;case 35680:case 36300:case 36308:case 36293:return MA;case 36289:case 36303:case 36311:case 36292:return wA}}function AA(t,e){t.uniform1fv(this.addr,e)}function RA(t,e){const n=Qs(e,this.size,2);t.uniform2fv(this.addr,n)}function CA(t,e){const n=Qs(e,this.size,3);t.uniform3fv(this.addr,n)}function bA(t,e){const n=Qs(e,this.size,4);t.uniform4fv(this.addr,n)}function PA(t,e){const n=Qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function LA(t,e){const n=Qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function NA(t,e){const n=Qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function DA(t,e){t.uniform1iv(this.addr,e)}function UA(t,e){t.uniform2iv(this.addr,e)}function IA(t,e){t.uniform3iv(this.addr,e)}function FA(t,e){t.uniform4iv(this.addr,e)}function OA(t,e){t.uniform1uiv(this.addr,e)}function kA(t,e){t.uniform2uiv(this.addr,e)}function BA(t,e){t.uniform3uiv(this.addr,e)}function zA(t,e){t.uniform4uiv(this.addr,e)}function HA(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||k0,s[o])}function VA(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||z0,s[o])}function GA(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||H0,s[o])}function WA(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||B0,s[o])}function jA(t){switch(t){case 5126:return AA;case 35664:return RA;case 35665:return CA;case 35666:return bA;case 35674:return PA;case 35675:return LA;case 35676:return NA;case 5124:case 35670:return DA;case 35667:case 35671:return UA;case 35668:case 35672:return IA;case 35669:case 35673:return FA;case 5125:return OA;case 36294:return kA;case 36295:return BA;case 36296:return zA;case 35678:case 36198:case 36298:case 36306:case 35682:return HA;case 35679:case 36299:case 36307:return VA;case 35680:case 36300:case 36308:case 36293:return GA;case 36289:case 36303:case 36311:case 36292:return WA}}class XA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=TA(n.type)}}class qA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jA(n.type)}}class $A{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Du=/(\w+)(\])?(\[|\.)?/g;function ig(t,e){t.seq.push(e),t.map[e.id]=e}function YA(t,e,n){const i=t.name,r=i.length;for(Du.lastIndex=0;;){const s=Du.exec(i),o=Du.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ig(n,c===void 0?new XA(a,t,e):new qA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new $A(a),ig(n,d)),n=d}}}class Tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);YA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function rg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const KA=37297;let ZA=0;function JA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const sg=new Fe;function QA(t){$e._getMatrix(sg,$e.workingColorSpace,t);const e=`mat3( ${sg.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case Ec:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function og(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+JA(t.getShaderSource(e),o)}else return r}function eR(t,e){const n=QA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function tR(t,e){let n;switch(e){case _M:n="Linear";break;case xM:n="Reinhard";break;case yM:n="Cineon";break;case SM:n="ACESFilmic";break;case MM:n="AgX";break;case wM:n="Neutral";break;case EM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const il=new O;function nR(){$e.getLuminanceCoefficients(il);const t=il.x.toFixed(4),e=il.y.toFixed(4),n=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function rR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function To(t){return t!==""}function ag(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(t){return t.replace(oR,lR)}const aR=new Map;function lR(t,e){let n=ke[e];if(n===void 0){const i=aR.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Td(n)}const cR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cg(t){return t.replace(cR,uR)}function uR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ug(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===c0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ZE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function dR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case Sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function pR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case bh:e="ENVMAP_BLENDING_MULTIPLY";break;case gM:e="ENVMAP_BLENDING_MIX";break;case vM:e="ENVMAP_BLENDING_ADD";break}return e}function mR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function gR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=fR(n),c=dR(n),u=hR(n),d=pR(n),h=mR(n),m=iR(n),g=rR(s),x=r.createProgram();let p,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(To).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(To).join(`
`),f.length>0&&(f+=`
`)):(p=[ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),f=[ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ir?"#define TONE_MAPPING":"",n.toneMapping!==ir?ke.tonemapping_pars_fragment:"",n.toneMapping!==ir?tR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,eR("linearToOutputTexel",n.outputColorSpace),nR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(To).join(`
`)),o=Td(o),o=ag(o,n),o=lg(o,n),a=Td(a),a=ag(a,n),a=lg(a,n),o=cg(o),a=cg(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===Mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=v+p+o,y=v+f+a,C=rg(r,r.VERTEX_SHADER,_),A=rg(r,r.FRAGMENT_SHADER,y);r.attachShader(x,C),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(P){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),H=r.getShaderInfoLog(C).trim(),$=r.getShaderInfoLog(A).trim();let Q=!0,W=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,C,A);else{const ee=og(r,C,"vertex"),N=og(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+ee+`
`+N)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||$==="")&&(W=!1);W&&(P.diagnostics={runnable:Q,programLog:G,vertexShader:{log:H,prefix:p},fragmentShader:{log:$,prefix:f}})}r.deleteShader(C),r.deleteShader(A),b=new Tl(r,x),w=sR(r,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,KA)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ZA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let vR=0;class _R{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new xR(e),n.set(e,i)),i}}class xR{constructor(e){this.id=vR++,this.code=e,this.usedTimes=0}}function yR(t,e,n,i,r,s,o){const a=new R0,l=new _R,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,S,P,G,H){const $=G.fog,Q=H.geometry,W=w.isMeshStandardMaterial?G.environment:null,ee=(w.isMeshStandardMaterial?n:e).get(w.envMap||W),N=ee&&ee.mapping===Sc?ee.image.height:null,q=g[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const J=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ae=J!==void 0?J.length:0;let _e=0;Q.morphAttributes.position!==void 0&&(_e=1),Q.morphAttributes.normal!==void 0&&(_e=2),Q.morphAttributes.color!==void 0&&(_e=3);let He,X,ie,ge;if(q){const et=Jn[q];He=et.vertexShader,X=et.fragmentShader}else He=w.vertexShader,X=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),ge=l.getFragmentShaderID(w);const le=t.getRenderTarget(),Pe=t.state.buffers.depth.getReversed(),De=H.isInstancedMesh===!0,Be=H.isBatchedMesh===!0,pt=!!w.map,Xe=!!w.matcap,yt=!!ee,F=!!w.aoMap,yn=!!w.lightMap,Ve=!!w.bumpMap,Ge=!!w.normalMap,Re=!!w.displacementMap,at=!!w.emissiveMap,Ae=!!w.metalnessMap,R=!!w.roughnessMap,E=w.anisotropy>0,k=w.clearcoat>0,K=w.dispersion>0,te=w.iridescence>0,Y=w.sheen>0,we=w.transmission>0,fe=E&&!!w.anisotropyMap,ve=k&&!!w.clearcoatMap,qe=k&&!!w.clearcoatNormalMap,se=k&&!!w.clearcoatRoughnessMap,xe=te&&!!w.iridescenceMap,Ce=te&&!!w.iridescenceThicknessMap,Le=Y&&!!w.sheenColorMap,ye=Y&&!!w.sheenRoughnessMap,We=!!w.specularMap,Oe=!!w.specularColorMap,rt=!!w.specularIntensityMap,D=we&&!!w.transmissionMap,ue=we&&!!w.thicknessMap,j=!!w.gradientMap,Z=!!w.alphaMap,pe=w.alphaTest>0,de=!!w.alphaHash,Ue=!!w.extensions;let _t=ir;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Ot={shaderID:q,shaderType:w.type,shaderName:w.name,vertexShader:He,fragmentShader:X,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Be,batchingColor:Be&&H._colorsTexture!==null,instancing:De,instancingColor:De&&H.instanceColor!==null,instancingMorph:De&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ks,alphaToCoverage:!!w.alphaToCoverage,map:pt,matcap:Xe,envMap:yt,envMapMode:yt&&ee.mapping,envMapCubeUVHeight:N,aoMap:F,lightMap:yn,bumpMap:Ve,normalMap:Ge,displacementMap:h&&Re,emissiveMap:at,normalMapObjectSpace:Ge&&w.normalMapType===CM,normalMapTangentSpace:Ge&&w.normalMapType===S0,metalnessMap:Ae,roughnessMap:R,anisotropy:E,anisotropyMap:fe,clearcoat:k,clearcoatMap:ve,clearcoatNormalMap:qe,clearcoatRoughnessMap:se,dispersion:K,iridescence:te,iridescenceMap:xe,iridescenceThicknessMap:Ce,sheen:Y,sheenColorMap:Le,sheenRoughnessMap:ye,specularMap:We,specularColorMap:Oe,specularIntensityMap:rt,transmission:we,transmissionMap:D,thicknessMap:ue,gradientMap:j,opaque:w.transparent===!1&&w.blending===Rs&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:pe,alphaHash:de,combine:w.combine,mapUv:pt&&x(w.map.channel),aoMapUv:F&&x(w.aoMap.channel),lightMapUv:yn&&x(w.lightMap.channel),bumpMapUv:Ve&&x(w.bumpMap.channel),normalMapUv:Ge&&x(w.normalMap.channel),displacementMapUv:Re&&x(w.displacementMap.channel),emissiveMapUv:at&&x(w.emissiveMap.channel),metalnessMapUv:Ae&&x(w.metalnessMap.channel),roughnessMapUv:R&&x(w.roughnessMap.channel),anisotropyMapUv:fe&&x(w.anisotropyMap.channel),clearcoatMapUv:ve&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:qe&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(w.sheenRoughnessMap.channel),specularMapUv:We&&x(w.specularMap.channel),specularColorMapUv:Oe&&x(w.specularColorMap.channel),specularIntensityMapUv:rt&&x(w.specularIntensityMap.channel),transmissionMapUv:D&&x(w.transmissionMap.channel),thicknessMapUv:ue&&x(w.thicknessMap.channel),alphaMapUv:Z&&x(w.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ge||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(pt||Z),fog:!!$,useFog:w.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Pe,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:_e,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:pt&&w.map.isVideoTexture===!0&&$e.getTransfer(w.map.colorSpace)===nt,decodeVideoTextureEmissive:at&&w.emissiveMap.isVideoTexture===!0&&$e.getTransfer(w.emissiveMap.colorSpace)===nt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===vi,flipSided:w.side===on,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ue&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&w.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function f(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)S.push(P),S.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(v(S,w),_(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function v(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const S=g[w.type];let P;if(S){const G=Jn[S];P=iw.clone(G.uniforms)}else P=w.uniforms;return P}function C(w,S){let P;for(let G=0,H=u.length;G<H;G++){const $=u[G];if($.cacheKey===S){P=$,++P.usedTimes;break}}return P===void 0&&(P=new gR(t,S,w,s),u.push(P)),P}function A(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function T(w){l.remove(w)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:b}}function SR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function ER(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function fg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,g,x,p){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=p),e++,f}function a(d,h,m,g,x,p){const f=o(d,h,m,g,x,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(d,h,m,g,x,p){const f=o(d,h,m,g,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||ER),i.length>1&&i.sort(h||fg),r.length>1&&r.sort(h||fg)}function u(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function MR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new dg,t.set(i,[o])):r>=s.length?(o=new dg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function wR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Ye};break;case"SpotLight":n={position:new O,direction:new O,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function TR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let AR=0;function RR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function CR(t){const e=new wR,n=TR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new ht,o=new ht;function a(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,g=0,x=0,p=0,f=0,v=0,_=0,y=0,C=0,A=0,T=0;c.sort(RR);for(let w=0,S=c.length;w<S;w++){const P=c[w],G=P.color,H=P.intensity,$=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=G.r*H,d+=G.g*H,h+=G.b*H;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],H);T++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,N=n.get(P);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,i.directionalShadow[m]=N,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=P.shadow.matrix,v++}i.directional[m]=W,m++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(G).multiplyScalar(H),W.distance=$,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[x]=W;const ee=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,ee.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[x]=ee.matrix,P.castShadow){const N=n.get(P);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=Q,y++}x++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(G).multiplyScalar(H),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=W,p++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const ee=P.shadow,N=n.get(P);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,N.shadowCameraNear=ee.camera.near,N.shadowCameraFar=ee.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(H),W.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[f]=W,f++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==m||b.pointLength!==g||b.spotLength!==x||b.rectAreaLength!==p||b.hemiLength!==f||b.numDirectionalShadows!==v||b.numPointShadows!==_||b.numSpotShadows!==y||b.numSpotMaps!==C||b.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,b.directionalLength=m,b.pointLength=g,b.spotLength=x,b.rectAreaLength=p,b.hemiLength=f,b.numDirectionalShadows=v,b.numPointShadows=_,b.numSpotShadows=y,b.numSpotMaps=C,b.numLightProbes=T,i.version=AR++)}function l(c,u){let d=0,h=0,m=0,g=0,x=0;const p=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const _=c[f];if(_.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(_.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(_.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),h++}else if(_.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function hg(t){const e=new CR(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function bR(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new hg(t),e.set(r,[a])):s>=o.length?(a=new hg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class PR extends Js{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=AM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LR extends Js{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const NR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UR(t,e,n){let i=new Fh;const r=new je,s=new je,o=new it,a=new PR({depthPacking:RM}),l=new LR,c={},u=n.maxTextureSize,d={[or]:on,[on]:or,[vi]:vi},h=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:NR,fragmentShader:DR}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new oi;g.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ti(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c0;let f=this.type;this.render=function(A,T,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),G=t.state;G.setBlending(nr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const H=f!==pi&&this.type===pi,$=f===pi&&this.type!==pi;for(let Q=0,W=A.length;Q<W;Q++){const ee=A[Q],N=ee.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const q=N.getFrameExtents();if(r.multiply(q),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,N.mapSize.y=s.y)),N.map===null||H===!0||$===!0){const ae=this.type!==pi?{minFilter:Wn,magFilter:Wn}:{};N.map!==null&&N.map.dispose(),N.map=new zr(r.x,r.y,ae),N.map.texture.name=ee.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const J=N.getViewportCount();for(let ae=0;ae<J;ae++){const _e=N.getViewport(ae);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),G.viewport(o),N.updateMatrices(ee,ae),i=N.getFrustum(),y(T,b,N.camera,ee,this.type)}N.isPointLightShadow!==!0&&this.type===pi&&v(N,b),N.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(w,S,P)};function v(A,T){const b=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,b,h,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,b,m,x,null)}function _(A,T,b,w){let S=null;const P=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const G=S.uuid,H=T.uuid;let $=c[G];$===void 0&&($={},c[G]=$);let Q=$[H];Q===void 0&&(Q=S.clone(),$[H]=Q,T.addEventListener("dispose",C)),S=Q}if(S.visible=T.visible,S.wireframe=T.wireframe,w===pi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=t.properties.get(S);G.light=b}return S}function y(A,T,b,w,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===pi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const H=e.update(A),$=A.material;if(Array.isArray($)){const Q=H.groups;for(let W=0,ee=Q.length;W<ee;W++){const N=Q[W],q=$[N.materialIndex];if(q&&q.visible){const J=_(A,q,w,S);A.onBeforeShadow(t,A,T,b,H,J,N),t.renderBufferDirect(b,null,H,J,A,N),A.onAfterShadow(t,A,T,b,H,J,N)}}}else if($.visible){const Q=_(A,$,w,S);A.onBeforeShadow(t,A,T,b,H,Q,null),t.renderBufferDirect(b,null,H,Q,A,null),A.onAfterShadow(t,A,T,b,H,Q,null)}}const G=A.children;for(let H=0,$=G.length;H<$;H++)y(G[H],T,b,w,S)}function C(A){A.target.removeEventListener("dispose",C);for(const b in c){const w=c[b],S=A.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const IR={[Hf]:Vf,[Gf]:Xf,[Wf]:qf,[ks]:jf,[Vf]:Hf,[Xf]:Gf,[qf]:Wf,[jf]:ks};function FR(t,e){function n(){let D=!1;const ue=new it;let j=null;const Z=new it(0,0,0,0);return{setMask:function(pe){j!==pe&&!D&&(t.colorMask(pe,pe,pe,pe),j=pe)},setLocked:function(pe){D=pe},setClear:function(pe,de,Ue,_t,Ot){Ot===!0&&(pe*=_t,de*=_t,Ue*=_t),ue.set(pe,de,Ue,_t),Z.equals(ue)===!1&&(t.clearColor(pe,de,Ue,_t),Z.copy(ue))},reset:function(){D=!1,j=null,Z.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,j=null,Z=null,pe=null;return{setReversed:function(de){if(ue!==de){const Ue=e.get("EXT_clip_control");ue?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const _t=pe;pe=null,this.setClear(_t)}ue=de},getReversed:function(){return ue},setTest:function(de){de?le(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(de){j!==de&&!D&&(t.depthMask(de),j=de)},setFunc:function(de){if(ue&&(de=IR[de]),Z!==de){switch(de){case Hf:t.depthFunc(t.NEVER);break;case Vf:t.depthFunc(t.ALWAYS);break;case Gf:t.depthFunc(t.LESS);break;case ks:t.depthFunc(t.LEQUAL);break;case Wf:t.depthFunc(t.EQUAL);break;case jf:t.depthFunc(t.GEQUAL);break;case Xf:t.depthFunc(t.GREATER);break;case qf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=de}},setLocked:function(de){D=de},setClear:function(de){pe!==de&&(ue&&(de=1-de),t.clearDepth(de),pe=de)},reset:function(){D=!1,j=null,Z=null,pe=null,ue=!1}}}function r(){let D=!1,ue=null,j=null,Z=null,pe=null,de=null,Ue=null,_t=null,Ot=null;return{setTest:function(et){D||(et?le(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(et){ue!==et&&!D&&(t.stencilMask(et),ue=et)},setFunc:function(et,Ln,ai){(j!==et||Z!==Ln||pe!==ai)&&(t.stencilFunc(et,Ln,ai),j=et,Z=Ln,pe=ai)},setOp:function(et,Ln,ai){(de!==et||Ue!==Ln||_t!==ai)&&(t.stencilOp(et,Ln,ai),de=et,Ue=Ln,_t=ai)},setLocked:function(et){D=et},setClear:function(et){Ot!==et&&(t.clearStencil(et),Ot=et)},reset:function(){D=!1,ue=null,j=null,Z=null,pe=null,de=null,Ue=null,_t=null,Ot=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,m=[],g=null,x=!1,p=null,f=null,v=null,_=null,y=null,C=null,A=null,T=new Ye(0,0,0),b=0,w=!1,S=null,P=null,G=null,H=null,$=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ee=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(N)[1]),W=ee>=1):N.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),W=ee>=2);let q=null,J={};const ae=t.getParameter(t.SCISSOR_BOX),_e=t.getParameter(t.VIEWPORT),He=new it().fromArray(ae),X=new it().fromArray(_e);function ie(D,ue,j,Z){const pe=new Uint8Array(4),de=t.createTexture();t.bindTexture(D,de),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<j;Ue++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(ue+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return de}const ge={};ge[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(ks),Ve(!1),Ge(vm),le(t.CULL_FACE),F(nr);function le(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function Pe(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function De(D,ue){return d[D]!==ue?(t.bindFramebuffer(D,ue),d[D]=ue,D===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ue),D===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Be(D,ue){let j=m,Z=!1;if(D){j=h.get(ue),j===void 0&&(j=[],h.set(ue,j));const pe=D.textures;if(j.length!==pe.length||j[0]!==t.COLOR_ATTACHMENT0){for(let de=0,Ue=pe.length;de<Ue;de++)j[de]=t.COLOR_ATTACHMENT0+de;j.length=pe.length,Z=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,Z=!0);Z&&t.drawBuffers(j)}function pt(D){return g!==D?(t.useProgram(D),g=D,!0):!1}const Xe={[Mr]:t.FUNC_ADD,[QE]:t.FUNC_SUBTRACT,[eM]:t.FUNC_REVERSE_SUBTRACT};Xe[tM]=t.MIN,Xe[nM]=t.MAX;const yt={[iM]:t.ZERO,[rM]:t.ONE,[sM]:t.SRC_COLOR,[Bf]:t.SRC_ALPHA,[fM]:t.SRC_ALPHA_SATURATE,[cM]:t.DST_COLOR,[aM]:t.DST_ALPHA,[oM]:t.ONE_MINUS_SRC_COLOR,[zf]:t.ONE_MINUS_SRC_ALPHA,[uM]:t.ONE_MINUS_DST_COLOR,[lM]:t.ONE_MINUS_DST_ALPHA,[dM]:t.CONSTANT_COLOR,[hM]:t.ONE_MINUS_CONSTANT_COLOR,[pM]:t.CONSTANT_ALPHA,[mM]:t.ONE_MINUS_CONSTANT_ALPHA};function F(D,ue,j,Z,pe,de,Ue,_t,Ot,et){if(D===nr){x===!0&&(Pe(t.BLEND),x=!1);return}if(x===!1&&(le(t.BLEND),x=!0),D!==JE){if(D!==p||et!==w){if((f!==Mr||y!==Mr)&&(t.blendEquation(t.FUNC_ADD),f=Mr,y=Mr),et)switch(D){case Rs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _m:t.blendFunc(t.ONE,t.ONE);break;case xm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ym:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Rs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _m:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case xm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ym:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,_=null,C=null,A=null,T.set(0,0,0),b=0,p=D,w=et}return}pe=pe||ue,de=de||j,Ue=Ue||Z,(ue!==f||pe!==y)&&(t.blendEquationSeparate(Xe[ue],Xe[pe]),f=ue,y=pe),(j!==v||Z!==_||de!==C||Ue!==A)&&(t.blendFuncSeparate(yt[j],yt[Z],yt[de],yt[Ue]),v=j,_=Z,C=de,A=Ue),(_t.equals(T)===!1||Ot!==b)&&(t.blendColor(_t.r,_t.g,_t.b,Ot),T.copy(_t),b=Ot),p=D,w=!1}function yn(D,ue){D.side===vi?Pe(t.CULL_FACE):le(t.CULL_FACE);let j=D.side===on;ue&&(j=!j),Ve(j),D.blending===Rs&&D.transparent===!1?F(nr):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),at(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(D){S!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),S=D)}function Ge(D){D!==YE?(le(t.CULL_FACE),D!==P&&(D===vm?t.cullFace(t.BACK):D===KE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),P=D}function Re(D){D!==G&&(W&&t.lineWidth(D),G=D)}function at(D,ue,j){D?(le(t.POLYGON_OFFSET_FILL),(H!==ue||$!==j)&&(t.polygonOffset(ue,j),H=ue,$=j)):Pe(t.POLYGON_OFFSET_FILL)}function Ae(D){D?le(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function R(D){D===void 0&&(D=t.TEXTURE0+Q-1),q!==D&&(t.activeTexture(D),q=D)}function E(D,ue,j){j===void 0&&(q===null?j=t.TEXTURE0+Q-1:j=q);let Z=J[j];Z===void 0&&(Z={type:void 0,texture:void 0},J[j]=Z),(Z.type!==D||Z.texture!==ue)&&(q!==j&&(t.activeTexture(j),q=j),t.bindTexture(D,ue||ge[D]),Z.type=D,Z.texture=ue)}function k(){const D=J[q];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){He.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),He.copy(D))}function ye(D){X.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function We(D,ue){let j=c.get(ue);j===void 0&&(j=new WeakMap,c.set(ue,j));let Z=j.get(D);Z===void 0&&(Z=t.getUniformBlockIndex(ue,D.name),j.set(D,Z))}function Oe(D,ue){const Z=c.get(ue).get(D);l.get(ue)!==Z&&(t.uniformBlockBinding(ue,Z,D.__bindingPointIndex),l.set(ue,Z))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},q=null,J={},d={},h=new WeakMap,m=[],g=null,x=!1,p=null,f=null,v=null,_=null,y=null,C=null,A=null,T=new Ye(0,0,0),b=0,w=!1,S=null,P=null,G=null,H=null,$=null,He.set(0,0,t.canvas.width,t.canvas.height),X.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Pe,bindFramebuffer:De,drawBuffers:Be,useProgram:pt,setBlending:F,setMaterial:yn,setFlipSided:Ve,setCullFace:Ge,setLineWidth:Re,setPolygonOffset:at,setScissorTest:Ae,activeTexture:R,bindTexture:E,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:xe,texImage3D:Ce,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:qe,texStorage3D:se,texSubImage2D:Y,texSubImage3D:we,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Le,viewport:ye,reset:rt}}function pg(t,e,n,i){const r=OR(i);switch(n){case p0:return t*e;case g0:return t*e;case v0:return t*e*2;case _0:return t*e/r.components*r.byteLength;case Dh:return t*e/r.components*r.byteLength;case x0:return t*e*2/r.components*r.byteLength;case Uh:return t*e*2/r.components*r.byteLength;case m0:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case Ih:return t*e*4/r.components*r.byteLength;case yl:case Sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case El:case Ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qf:case td:return Math.max(t,16)*Math.max(e,8)/4;case Jf:case ed:return Math.max(t,8)*Math.max(e,8)/2;case nd:case id:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ad:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ld:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case cd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ud:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case fd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case dd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case hd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case pd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case md:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case gd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case vd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case _d:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case wl:case xd:case yd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case y0:case Sd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ed:case Md:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function OR(t){switch(t){case Ci:case f0:return{byteLength:1,components:1};case ea:case d0:case la:return{byteLength:2,components:1};case Lh:case Nh:return{byteLength:2,components:4};case Br:case Ph:case yi:return{byteLength:4,components:1};case h0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function kR(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return m?new OffscreenCanvas(R,E):tc("canvas")}function x(R,E,k){let K=1;const te=Ae(R);if((te.width>k||te.height>k)&&(K=k/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(K*te.width),we=Math.floor(K*te.height);d===void 0&&(d=g(Y,we));const fe=E?g(Y,we):d;return fe.width=Y,fe.height=we,fe.getContext("2d").drawImage(R,0,0,Y,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Y+"x"+we+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function p(R){return R.generateMipmaps}function f(R){t.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,E,k,K,te=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=E;if(E===t.RED&&(k===t.FLOAT&&(Y=t.R32F),k===t.HALF_FLOAT&&(Y=t.R16F),k===t.UNSIGNED_BYTE&&(Y=t.R8)),E===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.R8UI),k===t.UNSIGNED_SHORT&&(Y=t.R16UI),k===t.UNSIGNED_INT&&(Y=t.R32UI),k===t.BYTE&&(Y=t.R8I),k===t.SHORT&&(Y=t.R16I),k===t.INT&&(Y=t.R32I)),E===t.RG&&(k===t.FLOAT&&(Y=t.RG32F),k===t.HALF_FLOAT&&(Y=t.RG16F),k===t.UNSIGNED_BYTE&&(Y=t.RG8)),E===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RG8UI),k===t.UNSIGNED_SHORT&&(Y=t.RG16UI),k===t.UNSIGNED_INT&&(Y=t.RG32UI),k===t.BYTE&&(Y=t.RG8I),k===t.SHORT&&(Y=t.RG16I),k===t.INT&&(Y=t.RG32I)),E===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),k===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),k===t.UNSIGNED_INT&&(Y=t.RGB32UI),k===t.BYTE&&(Y=t.RGB8I),k===t.SHORT&&(Y=t.RGB16I),k===t.INT&&(Y=t.RGB32I)),E===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),k===t.UNSIGNED_INT&&(Y=t.RGBA32UI),k===t.BYTE&&(Y=t.RGBA8I),k===t.SHORT&&(Y=t.RGBA16I),k===t.INT&&(Y=t.RGBA32I)),E===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),E===t.RGBA){const we=te?Ec:$e.getTransfer(K);k===t.FLOAT&&(Y=t.RGBA32F),k===t.HALF_FLOAT&&(Y=t.RGBA16F),k===t.UNSIGNED_BYTE&&(Y=we===nt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(R,E){let k;return R?E===null||E===Br||E===Hs?k=t.DEPTH24_STENCIL8:E===yi?k=t.DEPTH32F_STENCIL8:E===ea&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Br||E===Hs?k=t.DEPTH_COMPONENT24:E===yi?k=t.DEPTH_COMPONENT32F:E===ea&&(k=t.DEPTH_COMPONENT16),k}function C(R,E){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wn&&R.minFilter!==ei?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){const E=R.target;E.removeEventListener("dispose",A),b(E),E.isVideoTexture&&u.delete(E)}function T(R){const E=R.target;E.removeEventListener("dispose",T),S(E)}function b(R){const E=i.get(R);if(E.__webglInit===void 0)return;const k=R.source,K=h.get(k);if(K){const te=K[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(R),Object.keys(K).length===0&&h.delete(k)}i.remove(R)}function w(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const k=R.source,K=h.get(k);delete K[E.__cacheKey],o.memory.textures--}function S(R){const E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let te=0;te<E.__webglFramebuffer[K].length;te++)t.deleteFramebuffer(E.__webglFramebuffer[K][te]);else t.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)t.deleteFramebuffer(E.__webglFramebuffer[K]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=R.textures;for(let K=0,te=k.length;K<te;K++){const Y=i.get(k[K]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(k[K])}i.remove(R)}let P=0;function G(){P=0}function H(){const R=P;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function $(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Q(R,E){const k=i.get(R);if(R.isVideoTexture&&Re(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,R,E);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+E)}function W(R,E){const k=i.get(R);if(R.version>0&&k.__version!==R.version){X(k,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+E)}function ee(R,E){const k=i.get(R);if(R.version>0&&k.__version!==R.version){X(k,R,E);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+E)}function N(R,E){const k=i.get(R);if(R.version>0&&k.__version!==R.version){ie(k,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+E)}const q={[Kf]:t.REPEAT,[Cr]:t.CLAMP_TO_EDGE,[Zf]:t.MIRRORED_REPEAT},J={[Wn]:t.NEAREST,[TM]:t.NEAREST_MIPMAP_NEAREST,[Oa]:t.NEAREST_MIPMAP_LINEAR,[ei]:t.LINEAR,[su]:t.LINEAR_MIPMAP_NEAREST,[br]:t.LINEAR_MIPMAP_LINEAR},ae={[bM]:t.NEVER,[IM]:t.ALWAYS,[PM]:t.LESS,[E0]:t.LEQUAL,[LM]:t.EQUAL,[UM]:t.GEQUAL,[NM]:t.GREATER,[DM]:t.NOTEQUAL};function _e(R,E){if(E.type===yi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ei||E.magFilter===su||E.magFilter===Oa||E.magFilter===br||E.minFilter===ei||E.minFilter===su||E.minFilter===Oa||E.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,q[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,q[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,q[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,J[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,J[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Wn||E.minFilter!==Oa&&E.minFilter!==br||E.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function He(R,E){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));const K=E.source;let te=h.get(K);te===void 0&&(te={},h.set(K,te));const Y=$(E);if(Y!==R.__cacheKey){te[Y]===void 0&&(te[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[Y].usedTimes++;const we=te[R.__cacheKey];we!==void 0&&(te[R.__cacheKey].usedTimes--,we.usedTimes===0&&w(E)),R.__cacheKey=Y,R.__webglTexture=te[Y].texture}return k}function X(R,E,k){let K=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=t.TEXTURE_3D);const te=He(R,E),Y=E.source;n.bindTexture(K,R.__webglTexture,t.TEXTURE0+k);const we=i.get(Y);if(Y.version!==we.__version||te===!0){n.activeTexture(t.TEXTURE0+k);const fe=$e.getPrimaries($e.workingColorSpace),ve=E.colorSpace===Gi?null:$e.getPrimaries(E.colorSpace),qe=E.colorSpace===Gi||fe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let se=x(E.image,!1,r.maxTextureSize);se=at(E,se);const xe=s.convert(E.format,E.colorSpace),Ce=s.convert(E.type);let Le=_(E.internalFormat,xe,Ce,E.colorSpace,E.isVideoTexture);_e(K,E);let ye;const We=E.mipmaps,Oe=E.isVideoTexture!==!0,rt=we.__version===void 0||te===!0,D=Y.dataReady,ue=C(E,se);if(E.isDepthTexture)Le=y(E.format===Vs,E.type),rt&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Le,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Le,se.width,se.height,0,xe,Ce,null));else if(E.isDataTexture)if(We.length>0){Oe&&rt&&n.texStorage2D(t.TEXTURE_2D,ue,Le,We[0].width,We[0].height);for(let j=0,Z=We.length;j<Z;j++)ye=We[j],Oe?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ye.width,ye.height,xe,Ce,ye.data):n.texImage2D(t.TEXTURE_2D,j,Le,ye.width,ye.height,0,xe,Ce,ye.data);E.generateMipmaps=!1}else Oe?(rt&&n.texStorage2D(t.TEXTURE_2D,ue,Le,se.width,se.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,xe,Ce,se.data)):n.texImage2D(t.TEXTURE_2D,0,Le,se.width,se.height,0,xe,Ce,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Oe&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,Le,We[0].width,We[0].height,se.depth);for(let j=0,Z=We.length;j<Z;j++)if(ye=We[j],E.format!==Hn)if(xe!==null)if(Oe){if(D)if(E.layerUpdates.size>0){const pe=pg(ye.width,ye.height,E.format,E.type);for(const de of E.layerUpdates){const Ue=ye.data.subarray(de*pe/ye.data.BYTES_PER_ELEMENT,(de+1)*pe/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,de,ye.width,ye.height,1,xe,Ue)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,se.depth,xe,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Le,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,se.depth,xe,Ce,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,Le,ye.width,ye.height,se.depth,0,xe,Ce,ye.data)}else{Oe&&rt&&n.texStorage2D(t.TEXTURE_2D,ue,Le,We[0].width,We[0].height);for(let j=0,Z=We.length;j<Z;j++)ye=We[j],E.format!==Hn?xe!==null?Oe?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,ye.width,ye.height,xe,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,j,Le,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ye.width,ye.height,xe,Ce,ye.data):n.texImage2D(t.TEXTURE_2D,j,Le,ye.width,ye.height,0,xe,Ce,ye.data)}else if(E.isDataArrayTexture)if(Oe){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,Le,se.width,se.height,se.depth),D)if(E.layerUpdates.size>0){const j=pg(se.width,se.height,E.format,E.type);for(const Z of E.layerUpdates){const pe=se.data.subarray(Z*j/se.data.BYTES_PER_ELEMENT,(Z+1)*j/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,xe,Ce,pe)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,xe,Ce,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,se.width,se.height,se.depth,0,xe,Ce,se.data);else if(E.isData3DTexture)Oe?(rt&&n.texStorage3D(t.TEXTURE_3D,ue,Le,se.width,se.height,se.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,xe,Ce,se.data)):n.texImage3D(t.TEXTURE_3D,0,Le,se.width,se.height,se.depth,0,xe,Ce,se.data);else if(E.isFramebufferTexture){if(rt)if(Oe)n.texStorage2D(t.TEXTURE_2D,ue,Le,se.width,se.height);else{let j=se.width,Z=se.height;for(let pe=0;pe<ue;pe++)n.texImage2D(t.TEXTURE_2D,pe,Le,j,Z,0,xe,Ce,null),j>>=1,Z>>=1}}else if(We.length>0){if(Oe&&rt){const j=Ae(We[0]);n.texStorage2D(t.TEXTURE_2D,ue,Le,j.width,j.height)}for(let j=0,Z=We.length;j<Z;j++)ye=We[j],Oe?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,xe,Ce,ye):n.texImage2D(t.TEXTURE_2D,j,Le,xe,Ce,ye);E.generateMipmaps=!1}else if(Oe){if(rt){const j=Ae(se);n.texStorage2D(t.TEXTURE_2D,ue,Le,j.width,j.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Ce,se)}else n.texImage2D(t.TEXTURE_2D,0,Le,xe,Ce,se);p(E)&&f(K),we.__version=Y.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ie(R,E,k){if(E.image.length!==6)return;const K=He(R,E),te=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const Y=i.get(te);if(te.version!==Y.__version||K===!0){n.activeTexture(t.TEXTURE0+k);const we=$e.getPrimaries($e.workingColorSpace),fe=E.colorSpace===Gi?null:$e.getPrimaries(E.colorSpace),ve=E.colorSpace===Gi||we===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const qe=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let Z=0;Z<6;Z++)!qe&&!se?xe[Z]=x(E.image[Z],!0,r.maxCubemapSize):xe[Z]=se?E.image[Z].image:E.image[Z],xe[Z]=at(E,xe[Z]);const Ce=xe[0],Le=s.convert(E.format,E.colorSpace),ye=s.convert(E.type),We=_(E.internalFormat,Le,ye,E.colorSpace),Oe=E.isVideoTexture!==!0,rt=Y.__version===void 0||K===!0,D=te.dataReady;let ue=C(E,Ce);_e(t.TEXTURE_CUBE_MAP,E);let j;if(qe){Oe&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,We,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){j=xe[Z].mipmaps;for(let pe=0;pe<j.length;pe++){const de=j[pe];E.format!==Hn?Le!==null?Oe?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,de.width,de.height,Le,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,We,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,de.width,de.height,Le,ye,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,We,de.width,de.height,0,Le,ye,de.data)}}}else{if(j=E.mipmaps,Oe&&rt){j.length>0&&ue++;const Z=Ae(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,We,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xe[Z].width,xe[Z].height,Le,ye,xe[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,xe[Z].width,xe[Z].height,0,Le,ye,xe[Z].data);for(let pe=0;pe<j.length;pe++){const Ue=j[pe].image[Z].image;Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,Ue.width,Ue.height,Le,ye,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,We,Ue.width,Ue.height,0,Le,ye,Ue.data)}}else{Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le,ye,xe[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,Le,ye,xe[Z]);for(let pe=0;pe<j.length;pe++){const de=j[pe];Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,Le,ye,de.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,We,Le,ye,de.image[Z])}}}p(E)&&f(t.TEXTURE_CUBE_MAP),Y.__version=te.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ge(R,E,k,K,te,Y){const we=s.convert(k.format,k.colorSpace),fe=s.convert(k.type),ve=_(k.internalFormat,we,fe,k.colorSpace),qe=i.get(E),se=i.get(k);if(se.__renderTarget=E,!qe.__hasExternalTextures){const xe=Math.max(1,E.width>>Y),Ce=Math.max(1,E.height>>Y);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Y,ve,xe,Ce,E.depth,0,we,fe,null):n.texImage2D(te,Y,ve,xe,Ce,0,we,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ge(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,te,se.__webglTexture,0,Ve(E)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,te,se.__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(R,E,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const K=E.depthTexture,te=K&&K.isDepthTexture?K.type:null,Y=y(E.stencilBuffer,te),we=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=Ve(E);Ge(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,Y,E.width,E.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,Y,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Y,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,R)}else{const K=E.textures;for(let te=0;te<K.length;te++){const Y=K[te],we=s.convert(Y.format,Y.colorSpace),fe=s.convert(Y.type),ve=_(Y.internalFormat,we,fe,Y.colorSpace),qe=Ve(E);k&&Ge(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,ve,E.width,E.height):Ge(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe,ve,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ve,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const te=K.__webglTexture,Y=Ve(E);if(E.depthTexture.format===Cs)Ge(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(E.depthTexture.format===Vs)Ge(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function De(R){const E=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=K}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Pe(E.__webglFramebuffer,R)}else if(k){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=t.createRenderbuffer(),le(E.__webglDepthbuffer[K],R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),le(E.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(R,E,k){const K=i.get(R);E!==void 0&&ge(K.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&De(R)}function pt(R){const E=R.texture,k=i.get(R),K=i.get(E);R.addEventListener("dispose",T);const te=R.textures,Y=R.isWebGLCubeRenderTarget===!0,we=te.length>1;if(we||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=E.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let ve=0;ve<E.mipmaps.length;ve++)k.__webglFramebuffer[fe][ve]=t.createFramebuffer()}else k.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)k.__webglFramebuffer[fe]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(we)for(let fe=0,ve=te.length;fe<ve;fe++){const qe=i.get(te[fe]);qe.__webglTexture===void 0&&(qe.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ge(R)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const ve=te[fe];k.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const qe=s.convert(ve.format,ve.colorSpace),se=s.convert(ve.type),xe=_(ve.internalFormat,qe,se,ve.colorSpace,R.isXRRenderTarget===!0),Ce=Ve(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),le(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),_e(t.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)ge(k.__webglFramebuffer[fe][ve],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else ge(k.__webglFramebuffer[fe],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(E)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let fe=0,ve=te.length;fe<ve;fe++){const qe=te[fe],se=i.get(qe);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),_e(t.TEXTURE_2D,qe),ge(k.__webglFramebuffer,R,qe,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),p(qe)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,K.__webglTexture),_e(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)ge(k.__webglFramebuffer[ve],R,E,t.COLOR_ATTACHMENT0,fe,ve);else ge(k.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,fe,0);p(E)&&f(fe),n.unbindTexture()}R.depthBuffer&&De(R)}function Xe(R){const E=R.textures;for(let k=0,K=E.length;k<K;k++){const te=E[k];if(p(te)){const Y=v(R),we=i.get(te).__webglTexture;n.bindTexture(Y,we),f(Y),n.unbindTexture()}}}const yt=[],F=[];function yn(R){if(R.samples>0){if(Ge(R)===!1){const E=R.textures,k=R.width,K=R.height;let te=t.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(R),fe=E.length>1;if(fe)for(let ve=0;ve<E.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);const qe=i.get(E[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,qe,0)}t.blitFramebuffer(0,0,k,K,0,0,k,K,te,t.NEAREST),l===!0&&(yt.length=0,F.length=0,yt.push(t.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(yt.push(Y),F.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,F)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,yt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<E.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);const qe=i.get(E[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ve(R){return Math.min(r.maxSamples,R.samples)}function Ge(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Re(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function at(R,E){const k=R.colorSpace,K=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Ks&&k!==Gi&&($e.getTransfer(k)===nt?(K!==Hn||te!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function Ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=N,this.rebindTextures=Be,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ge}function BR(t,e){function n(i,r=Gi){let s;const o=$e.getTransfer(r);if(i===Ci)return t.UNSIGNED_BYTE;if(i===Lh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Nh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===h0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===f0)return t.BYTE;if(i===d0)return t.SHORT;if(i===ea)return t.UNSIGNED_SHORT;if(i===Ph)return t.INT;if(i===Br)return t.UNSIGNED_INT;if(i===yi)return t.FLOAT;if(i===la)return t.HALF_FLOAT;if(i===p0)return t.ALPHA;if(i===m0)return t.RGB;if(i===Hn)return t.RGBA;if(i===g0)return t.LUMINANCE;if(i===v0)return t.LUMINANCE_ALPHA;if(i===Cs)return t.DEPTH_COMPONENT;if(i===Vs)return t.DEPTH_STENCIL;if(i===_0)return t.RED;if(i===Dh)return t.RED_INTEGER;if(i===x0)return t.RG;if(i===Uh)return t.RG_INTEGER;if(i===Ih)return t.RGBA_INTEGER;if(i===yl||i===Sl||i===El||i===Ml)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===yl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===yl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ml)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jf||i===Qf||i===ed||i===td)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ed)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===td)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nd||i===id||i===rd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nd||i===id)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sd||i===od||i===ad||i===ld||i===cd||i===ud||i===fd||i===dd||i===hd||i===pd||i===md||i===gd||i===vd||i===_d)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===od)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ad)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ld)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ud)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===md)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_d)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wl||i===xd||i===yd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wl)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===y0||i===Sd||i===Ed||i===Md)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ed)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Md)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class zR extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rl extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HR={type:"move"};class Uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),f=this._getHandJoint(c,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new rl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const VR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new an,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ar({vertexShader:VR,fragmentShader:GR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ti(new wc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jR extends Zs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,g=null;const x=new WR,p=n.getContextAttributes();let f=null,v=null;const _=[],y=[],C=new je;let A=null;const T=new pn;T.viewport=new it;const b=new pn;b.viewport=new it;const w=[T,b],S=new zR;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=_[X];return ie===void 0&&(ie=new Uu,_[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=_[X];return ie===void 0&&(ie=new Uu,_[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=_[X];return ie===void 0&&(ie=new Uu,_[X]=ie),ie.getHandSpace()};function H(X){const ie=y.indexOf(X.inputSource);if(ie===-1)return;const ge=_[ie];ge!==void 0&&(ge.update(X.inputSource,X.frame,c||o),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Q);for(let X=0;X<_.length;X++){const ie=y[X];ie!==null&&(y[X]=null,_[X].disconnect(ie))}P=null,G=null,x.reset(),e.setRenderTarget(f),m=null,h=null,d=null,r=null,v=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new zr(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ie=null,ge=null,le=null;p.depth&&(le=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=p.stencil?Vs:Cs,ge=p.stencil?Hs:Br);const Pe={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new zr(h.textureWidth,h.textureHeight,{format:Hn,type:Ci,depthTexture:new O0(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(X){for(let ie=0;ie<X.removed.length;ie++){const ge=X.removed[ie],le=y.indexOf(ge);le>=0&&(y[le]=null,_[le].disconnect(ge))}for(let ie=0;ie<X.added.length;ie++){const ge=X.added[ie];let le=y.indexOf(ge);if(le===-1){for(let De=0;De<_.length;De++)if(De>=y.length){y.push(ge),le=De;break}else if(y[De]===null){y[De]=ge,le=De;break}if(le===-1)break}const Pe=_[le];Pe&&Pe.connect(ge)}}const W=new O,ee=new O;function N(X,ie,ge){W.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(ge.matrixWorld);const le=W.distanceTo(ee),Pe=ie.projectionMatrix.elements,De=ge.projectionMatrix.elements,Be=Pe[14]/(Pe[10]-1),pt=Pe[14]/(Pe[10]+1),Xe=(Pe[9]+1)/Pe[5],yt=(Pe[9]-1)/Pe[5],F=(Pe[8]-1)/Pe[0],yn=(De[8]+1)/De[0],Ve=Be*F,Ge=Be*yn,Re=le/(-F+yn),at=Re*-F;if(ie.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(at),X.translateZ(Re),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Pe[10]===-1)X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ae=Be+Re,R=pt+Re,E=Ve-at,k=Ge+(le-at),K=Xe*pt/R*Ae,te=yt*pt/R*Ae;X.projectionMatrix.makePerspective(E,k,K,te,Ae,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function q(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ie=X.near,ge=X.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(ge=x.depthFar)),S.near=b.near=T.near=ie,S.far=b.far=T.far=ge,(P!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,G=S.far),T.layers.mask=X.layers.mask|2,b.layers.mask=X.layers.mask|4,S.layers.mask=T.layers.mask|b.layers.mask;const le=X.parent,Pe=S.cameras;q(S,le);for(let De=0;De<Pe.length;De++)q(Pe[De],le);Pe.length===2?N(S,T,b):S.projectionMatrix.copy(T.projectionMatrix),J(X,S,le)};function J(X,ie,ge){ge===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=wd*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ae=null;function _e(X,ie){if(u=ie.getViewerPose(c||o),g=ie,u!==null){const ge=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let le=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let De=0;De<ge.length;De++){const Be=ge[De];let pt=null;if(m!==null)pt=m.getViewport(Be);else{const yt=d.getViewSubImage(h,Be);pt=yt.viewport,De===0&&(e.setRenderTargetTextures(v,yt.colorTexture,h.ignoreDepthValues?void 0:yt.depthStencilTexture),e.setRenderTarget(v))}let Xe=w[De];Xe===void 0&&(Xe=new pn,Xe.layers.enable(De),Xe.viewport=new it,w[De]=Xe),Xe.matrix.fromArray(Be.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Be.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(pt.x,pt.y,pt.width,pt.height),De===0&&(S.matrix.copy(Xe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(Xe)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const De=d.getDepthInformation(ge[0]);De&&De.isValid&&De.texture&&x.init(e,De,r.renderState)}}for(let ge=0;ge<_.length;ge++){const le=y[ge],Pe=_[ge];le!==null&&Pe!==void 0&&Pe.update(le,ie,c||o)}ae&&ae(X,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const He=new I0;He.setAnimationLoop(_e),this.setAnimationLoop=function(X){ae=X},this.dispose=function(){}}}const _r=new si,XR=new ht;function qR(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,N0(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,v,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),x(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,v,_):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===on&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===on&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=e.get(f),_=v.envMap,y=v.envMapRotation;_&&(p.envMap.value=_,_r.copy(y),_r.x*=-1,_r.y*=-1,_r.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),p.envMapRotation.value.setFromMatrix4(XR.makeRotationFromEuler(_r)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,v,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=_*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===on&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const v=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $R(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=r[v.id];y===void 0&&(g(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",p));const C=_.program;i.updateUBOMapping(v,C);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function u(v){const _=d();v.__bindingPointIndex=_;const y=t.createBuffer(),C=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],y=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,T=y.length;A<T;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,S=b.length;w<S;w++){const P=b[w];if(m(P,A,w,C)===!0){const G=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let Q=0;Q<H.length;Q++){const W=H[Q],ee=x(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,G+$,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,$),$+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,_,y,C){const A=v.value,T=_+"_"+y;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const b=C[T];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return C[T]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function g(v){const _=v.uniforms;let y=0;const C=16;for(let T=0,b=_.length;T<b;T++){const w=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,P=w.length;S<P;S++){const G=w[S],H=Array.isArray(G.value)?G.value:[G.value];for(let $=0,Q=H.length;$<Q;$++){const W=H[$],ee=x(W),N=y%C,q=N%ee.boundary,J=N+q;y+=q,J!==0&&C-J<ee.storage&&(y+=C-J),G.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=ee.storage}}}const A=y%C;return A>0&&(y+=C-A),v.__size=y,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){const _=v.target;_.removeEventListener("dispose",p);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class YR{constructor(e={}){const{canvas:n=OM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,f=null;const v=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wn,this.toneMapping=ir,this.toneMappingExposure=1;const y=this;let C=!1,A=0,T=0,b=null,w=-1,S=null;const P=new it,G=new it;let H=null;const $=new Ye(0);let Q=0,W=n.width,ee=n.height,N=1,q=null,J=null;const ae=new it(0,0,W,ee),_e=new it(0,0,W,ee);let He=!1;const X=new Fh;let ie=!1,ge=!1;const le=new ht,Pe=new ht,De=new O,Be=new it,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function yt(){return b===null?N:1}let F=i;function yn(M,U){return n.getContext(M,U)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ch}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",de,!1),F===null){const U="webgl2";if(F=yn(U,M),F===null)throw yn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ve,Ge,Re,at,Ae,R,E,k,K,te,Y,we,fe,ve,qe,se,xe,Ce,Le,ye,We,Oe,rt,D;function ue(){Ve=new eA(F),Ve.init(),Oe=new BR(F,Ve),Ge=new $1(F,Ve,e,Oe),Re=new FR(F,Ve),Ge.reverseDepthBuffer&&h&&Re.buffers.depth.setReversed(!0),at=new iA(F),Ae=new SR,R=new kR(F,Ve,Re,Ae,Ge,Oe,at),E=new K1(y),k=new Q1(y),K=new uw(F),rt=new X1(F,K),te=new tA(F,K,at,rt),Y=new sA(F,te,K,at),Le=new rA(F,Ge,R),se=new Y1(Ae),we=new yR(y,E,k,Ve,Ge,rt,se),fe=new qR(y,Ae),ve=new MR,qe=new bR(Ve),Ce=new j1(y,E,k,Re,Y,m,l),xe=new UR(y,Y,Ge),D=new $R(F,at,Ge,Re),ye=new q1(F,Ve,at),We=new nA(F,Ve,at),at.programs=we.programs,y.capabilities=Ge,y.extensions=Ve,y.properties=Ae,y.renderLists=ve,y.shadowMap=xe,y.state=Re,y.info=at}ue();const j=new jR(y,F);this.xr=j,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=Ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(M){M!==void 0&&(N=M,this.setSize(W,ee,!1))},this.getSize=function(M){return M.set(W,ee)},this.setSize=function(M,U,z=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,ee=U,n.width=Math.floor(M*N),n.height=Math.floor(U*N),z===!0&&(n.style.width=M+"px",n.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(W*N,ee*N).floor()},this.setDrawingBufferSize=function(M,U,z){W=M,ee=U,N=z,n.width=Math.floor(M*z),n.height=Math.floor(U*z),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(ae)},this.setViewport=function(M,U,z,V){M.isVector4?ae.set(M.x,M.y,M.z,M.w):ae.set(M,U,z,V),Re.viewport(P.copy(ae).multiplyScalar(N).round())},this.getScissor=function(M){return M.copy(_e)},this.setScissor=function(M,U,z,V){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,U,z,V),Re.scissor(G.copy(_e).multiplyScalar(N).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(M){Re.setScissorTest(He=M)},this.setOpaqueSort=function(M){q=M},this.setTransparentSort=function(M){J=M},this.getClearColor=function(M){return M.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(M=!0,U=!0,z=!0){let V=0;if(M){let I=!1;if(b!==null){const oe=b.texture.format;I=oe===Ih||oe===Uh||oe===Dh}if(I){const oe=b.texture.type,he=oe===Ci||oe===Br||oe===ea||oe===Hs||oe===Lh||oe===Nh,Se=Ce.getClearColor(),Ee=Ce.getClearAlpha(),Ne=Se.r,Ie=Se.g,Me=Se.b;he?(g[0]=Ne,g[1]=Ie,g[2]=Me,g[3]=Ee,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Ne,x[1]=Ie,x[2]=Me,x[3]=Ee,F.clearBufferiv(F.COLOR,0,x))}else V|=F.COLOR_BUFFER_BIT}U&&(V|=F.DEPTH_BUFFER_BIT),z&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",de,!1),ve.dispose(),qe.dispose(),Ae.dispose(),E.dispose(),k.dispose(),Y.dispose(),rt.dispose(),D.dispose(),we.dispose(),j.dispose(),j.removeEventListener("sessionstart",jh),j.removeEventListener("sessionend",Xh),dr.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const M=at.autoReset,U=xe.enabled,z=xe.autoUpdate,V=xe.needsUpdate,I=xe.type;ue(),at.autoReset=M,xe.enabled=U,xe.autoUpdate=z,xe.needsUpdate=V,xe.type=I}function de(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ue(M){const U=M.target;U.removeEventListener("dispose",Ue),_t(U)}function _t(M){Ot(M),Ae.remove(M)}function Ot(M){const U=Ae.get(M).programs;U!==void 0&&(U.forEach(function(z){we.releaseProgram(z)}),M.isShaderMaterial&&we.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,z,V,I,oe){U===null&&(U=pt);const he=I.isMesh&&I.matrixWorld.determinant()<0,Se=hx(M,U,z,V,I);Re.setMaterial(V,he);let Ee=z.index,Ne=1;if(V.wireframe===!0){if(Ee=te.getWireframeAttribute(z),Ee===void 0)return;Ne=2}const Ie=z.drawRange,Me=z.attributes.position;let Ze=Ie.start*Ne,st=(Ie.start+Ie.count)*Ne;oe!==null&&(Ze=Math.max(Ze,oe.start*Ne),st=Math.min(st,(oe.start+oe.count)*Ne)),Ee!==null?(Ze=Math.max(Ze,0),st=Math.min(st,Ee.count)):Me!=null&&(Ze=Math.max(Ze,0),st=Math.min(st,Me.count));const lt=st-Ze;if(lt<0||lt===1/0)return;rt.setup(I,V,Se,z,Ee);let Zt,Je=ye;if(Ee!==null&&(Zt=K.get(Ee),Je=We,Je.setIndex(Zt)),I.isMesh)V.wireframe===!0?(Re.setLineWidth(V.wireframeLinewidth*yt()),Je.setMode(F.LINES)):Je.setMode(F.TRIANGLES);else if(I.isLine){let Te=V.linewidth;Te===void 0&&(Te=1),Re.setLineWidth(Te*yt()),I.isLineSegments?Je.setMode(F.LINES):I.isLineLoop?Je.setMode(F.LINE_LOOP):Je.setMode(F.LINE_STRIP)}else I.isPoints?Je.setMode(F.POINTS):I.isSprite&&Je.setMode(F.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Je.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Je.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Te=I._multiDrawStarts,li=I._multiDrawCounts,Qe=I._multiDrawCount,Nn=Ee?K.get(Ee).bytesPerElement:1,jr=Ae.get(V).currentProgram.getUniforms();for(let un=0;un<Qe;un++)jr.setValue(F,"_gl_DrawID",un),Je.render(Te[un]/Nn,li[un])}else if(I.isInstancedMesh)Je.renderInstances(Ze,lt,I.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,li=Math.min(z.instanceCount,Te);Je.renderInstances(Ze,lt,li)}else Je.render(Ze,lt)};function et(M,U,z){M.transparent===!0&&M.side===vi&&M.forceSinglePass===!1?(M.side=on,M.needsUpdate=!0,xa(M,U,z),M.side=or,M.needsUpdate=!0,xa(M,U,z),M.side=vi):xa(M,U,z)}this.compile=function(M,U,z=null){z===null&&(z=M),f=qe.get(z),f.init(U),_.push(f),z.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),M!==z&&M.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const V=new Set;return M.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const oe=I.material;if(oe)if(Array.isArray(oe))for(let he=0;he<oe.length;he++){const Se=oe[he];et(Se,z,I),V.add(Se)}else et(oe,z,I),V.add(oe)}),_.pop(),f=null,V},this.compileAsync=function(M,U,z=null){const V=this.compile(M,U,z);return new Promise(I=>{function oe(){if(V.forEach(function(he){Ae.get(he).currentProgram.isReady()&&V.delete(he)}),V.size===0){I(M);return}setTimeout(oe,10)}Ve.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ln=null;function ai(M){Ln&&Ln(M)}function jh(){dr.stop()}function Xh(){dr.start()}const dr=new I0;dr.setAnimationLoop(ai),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(M){Ln=M,j.setAnimationLoop(M),M===null?dr.stop():dr.start()},j.addEventListener("sessionstart",jh),j.addEventListener("sessionend",Xh),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,b),f=qe.get(M,_.length),f.init(U),_.push(f),Pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Pe),ge=this.localClippingEnabled,ie=se.init(this.clippingPlanes,ge),p=ve.get(M,v.length),p.init(),v.push(p),j.enabled===!0&&j.isPresenting===!0){const oe=y.xr.getDepthSensingMesh();oe!==null&&Lc(oe,U,-1/0,y.sortObjects)}Lc(M,U,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(q,J),Xe=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Xe&&Ce.addToRenderList(p,M),this.info.render.frame++,ie===!0&&se.beginShadows();const z=f.state.shadowsArray;xe.render(z,M,U),ie===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,I=p.transmissive;if(f.setupLights(),U.isArrayCamera){const oe=U.cameras;if(I.length>0)for(let he=0,Se=oe.length;he<Se;he++){const Ee=oe[he];$h(V,I,M,Ee)}Xe&&Ce.render(M);for(let he=0,Se=oe.length;he<Se;he++){const Ee=oe[he];qh(p,M,Ee,Ee.viewport)}}else I.length>0&&$h(V,I,M,U),Xe&&Ce.render(M),qh(p,M,U);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(y,M,U),rt.resetDefaultState(),w=-1,S=null,_.pop(),_.length>0?(f=_[_.length-1],ie===!0&&se.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Lc(M,U,z,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||X.intersectsSprite(M)){V&&Be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Pe);const he=Y.update(M),Se=M.material;Se.visible&&p.push(M,he,Se,z,Be.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||X.intersectsObject(M))){const he=Y.update(M),Se=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Be.copy(M.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Be.copy(he.boundingSphere.center)),Be.applyMatrix4(M.matrixWorld).applyMatrix4(Pe)),Array.isArray(Se)){const Ee=he.groups;for(let Ne=0,Ie=Ee.length;Ne<Ie;Ne++){const Me=Ee[Ne],Ze=Se[Me.materialIndex];Ze&&Ze.visible&&p.push(M,he,Ze,z,Be.z,Me)}}else Se.visible&&p.push(M,he,Se,z,Be.z,null)}}const oe=M.children;for(let he=0,Se=oe.length;he<Se;he++)Lc(oe[he],U,z,V)}function qh(M,U,z,V){const I=M.opaque,oe=M.transmissive,he=M.transparent;f.setupLightsView(z),ie===!0&&se.setGlobalState(y.clippingPlanes,z),V&&Re.viewport(P.copy(V)),I.length>0&&_a(I,U,z),oe.length>0&&_a(oe,U,z),he.length>0&&_a(he,U,z),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function $h(M,U,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new zr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?la:Ci,minFilter:br,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const oe=f.state.transmissionRenderTarget[V.id],he=V.viewport||P;oe.setSize(he.z,he.w);const Se=y.getRenderTarget();y.setRenderTarget(oe),y.getClearColor($),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear(),Xe&&Ce.render(z);const Ee=y.toneMapping;y.toneMapping=ir;const Ne=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),ie===!0&&se.setGlobalState(y.clippingPlanes,V),_a(M,z,V),R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Me=0,Ze=U.length;Me<Ze;Me++){const st=U[Me],lt=st.object,Zt=st.geometry,Je=st.material,Te=st.group;if(Je.side===vi&&lt.layers.test(V.layers)){const li=Je.side;Je.side=on,Je.needsUpdate=!0,Yh(lt,z,V,Zt,Je,Te),Je.side=li,Je.needsUpdate=!0,Ie=!0}}Ie===!0&&(R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe))}y.setRenderTarget(Se),y.setClearColor($,Q),Ne!==void 0&&(V.viewport=Ne),y.toneMapping=Ee}function _a(M,U,z){const V=U.isScene===!0?U.overrideMaterial:null;for(let I=0,oe=M.length;I<oe;I++){const he=M[I],Se=he.object,Ee=he.geometry,Ne=V===null?he.material:V,Ie=he.group;Se.layers.test(z.layers)&&Yh(Se,U,z,Ee,Ne,Ie)}}function Yh(M,U,z,V,I,oe){M.onBeforeRender(y,U,z,V,I,oe),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),I.onBeforeRender(y,U,z,V,M,oe),I.transparent===!0&&I.side===vi&&I.forceSinglePass===!1?(I.side=on,I.needsUpdate=!0,y.renderBufferDirect(z,U,V,I,M,oe),I.side=or,I.needsUpdate=!0,y.renderBufferDirect(z,U,V,I,M,oe),I.side=vi):y.renderBufferDirect(z,U,V,I,M,oe),M.onAfterRender(y,U,z,V,I,oe)}function xa(M,U,z){U.isScene!==!0&&(U=pt);const V=Ae.get(M),I=f.state.lights,oe=f.state.shadowsArray,he=I.state.version,Se=we.getParameters(M,I.state,oe,U,z),Ee=we.getProgramCacheKey(Se);let Ne=V.programs;V.environment=M.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(M.isMeshStandardMaterial?k:E).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",Ue),Ne=new Map,V.programs=Ne);let Ie=Ne.get(Ee);if(Ie!==void 0){if(V.currentProgram===Ie&&V.lightsStateVersion===he)return Zh(M,Se),Ie}else Se.uniforms=we.getUniforms(M),M.onBeforeCompile(Se,y),Ie=we.acquireProgram(Se,Ee),Ne.set(Ee,Ie),V.uniforms=Se.uniforms;const Me=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Me.clippingPlanes=se.uniform),Zh(M,Se),V.needsLights=mx(M),V.lightsStateVersion=he,V.needsLights&&(Me.ambientLightColor.value=I.state.ambient,Me.lightProbe.value=I.state.probe,Me.directionalLights.value=I.state.directional,Me.directionalLightShadows.value=I.state.directionalShadow,Me.spotLights.value=I.state.spot,Me.spotLightShadows.value=I.state.spotShadow,Me.rectAreaLights.value=I.state.rectArea,Me.ltc_1.value=I.state.rectAreaLTC1,Me.ltc_2.value=I.state.rectAreaLTC2,Me.pointLights.value=I.state.point,Me.pointLightShadows.value=I.state.pointShadow,Me.hemisphereLights.value=I.state.hemi,Me.directionalShadowMap.value=I.state.directionalShadowMap,Me.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Me.spotShadowMap.value=I.state.spotShadowMap,Me.spotLightMatrix.value=I.state.spotLightMatrix,Me.spotLightMap.value=I.state.spotLightMap,Me.pointShadowMap.value=I.state.pointShadowMap,Me.pointShadowMatrix.value=I.state.pointShadowMatrix),V.currentProgram=Ie,V.uniformsList=null,Ie}function Kh(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Tl.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Zh(M,U){const z=Ae.get(M);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function hx(M,U,z,V,I){U.isScene!==!0&&(U=pt),R.resetTextureUnits();const oe=U.fog,he=V.isMeshStandardMaterial?U.environment:null,Se=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ks,Ee=(V.isMeshStandardMaterial?k:E).get(V.envMap||he),Ne=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ie=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Me=!!z.morphAttributes.position,Ze=!!z.morphAttributes.normal,st=!!z.morphAttributes.color;let lt=ir;V.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(lt=y.toneMapping);const Zt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Je=Zt!==void 0?Zt.length:0,Te=Ae.get(V),li=f.state.lights;if(ie===!0&&(ge===!0||M!==S)){const Sn=M===S&&V.id===w;se.setState(V,M,Sn)}let Qe=!1;V.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==li.state.version||Te.outputColorSpace!==Se||I.isBatchedMesh&&Te.batching===!1||!I.isBatchedMesh&&Te.batching===!0||I.isBatchedMesh&&Te.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Te.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Te.instancing===!1||!I.isInstancedMesh&&Te.instancing===!0||I.isSkinnedMesh&&Te.skinning===!1||!I.isSkinnedMesh&&Te.skinning===!0||I.isInstancedMesh&&Te.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Te.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Te.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Te.instancingMorph===!1&&I.morphTexture!==null||Te.envMap!==Ee||V.fog===!0&&Te.fog!==oe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==se.numPlanes||Te.numIntersection!==se.numIntersection)||Te.vertexAlphas!==Ne||Te.vertexTangents!==Ie||Te.morphTargets!==Me||Te.morphNormals!==Ze||Te.morphColors!==st||Te.toneMapping!==lt||Te.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,Te.__version=V.version);let Nn=Te.currentProgram;Qe===!0&&(Nn=xa(V,U,I));let jr=!1,un=!1,no=!1;const ct=Nn.getUniforms(),Yn=Te.uniforms;if(Re.useProgram(Nn.program)&&(jr=!0,un=!0,no=!0),V.id!==w&&(w=V.id,un=!0),jr||S!==M){Re.buffers.depth.getReversed()?(le.copy(M.projectionMatrix),BM(le),zM(le),ct.setValue(F,"projectionMatrix",le)):ct.setValue(F,"projectionMatrix",M.projectionMatrix),ct.setValue(F,"viewMatrix",M.matrixWorldInverse);const Pi=ct.map.cameraPosition;Pi!==void 0&&Pi.setValue(F,De.setFromMatrixPosition(M.matrixWorld)),Ge.logarithmicDepthBuffer&&ct.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ct.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,un=!0,no=!0)}if(I.isSkinnedMesh){ct.setOptional(F,I,"bindMatrix"),ct.setOptional(F,I,"bindMatrixInverse");const Sn=I.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),ct.setValue(F,"boneTexture",Sn.boneTexture,R))}I.isBatchedMesh&&(ct.setOptional(F,I,"batchingTexture"),ct.setValue(F,"batchingTexture",I._matricesTexture,R),ct.setOptional(F,I,"batchingIdTexture"),ct.setValue(F,"batchingIdTexture",I._indirectTexture,R),ct.setOptional(F,I,"batchingColorTexture"),I._colorsTexture!==null&&ct.setValue(F,"batchingColorTexture",I._colorsTexture,R));const io=z.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0)&&Le.update(I,z,Nn),(un||Te.receiveShadow!==I.receiveShadow)&&(Te.receiveShadow=I.receiveShadow,ct.setValue(F,"receiveShadow",I.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Yn.envMap.value=Ee,Yn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Yn.envMapIntensity.value=U.environmentIntensity),un&&(ct.setValue(F,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&px(Yn,no),oe&&V.fog===!0&&fe.refreshFogUniforms(Yn,oe),fe.refreshMaterialUniforms(Yn,V,N,ee,f.state.transmissionRenderTarget[M.id]),Tl.upload(F,Kh(Te),Yn,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Tl.upload(F,Kh(Te),Yn,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ct.setValue(F,"center",I.center),ct.setValue(F,"modelViewMatrix",I.modelViewMatrix),ct.setValue(F,"normalMatrix",I.normalMatrix),ct.setValue(F,"modelMatrix",I.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Sn=V.uniformsGroups;for(let Pi=0,Li=Sn.length;Pi<Li;Pi++){const Jh=Sn[Pi];D.update(Jh,Nn),D.bind(Jh,Nn)}}return Nn}function px(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function mx(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,U,z){Ae.get(M.texture).__webglTexture=U,Ae.get(M.depthTexture).__webglTexture=z;const V=Ae.get(M);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const z=Ae.get(M);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,z=0){b=M,A=U,T=z;let V=!0,I=null,oe=!1,he=!1;if(M){const Ee=Ae.get(M);if(Ee.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(Ee.__webglFramebuffer===void 0)R.setupRenderTarget(M);else if(Ee.__hasExternalTextures)R.rebindTextures(M,Ae.get(M.texture).__webglTexture,Ae.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Me=M.depthTexture;if(Ee.__boundDepthTexture!==Me){if(Me!==null&&Ae.has(Me)&&(M.width!==Me.image.width||M.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(M)}}const Ne=M.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(he=!0);const Ie=Ae.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?I=Ie[U][z]:I=Ie[U],oe=!0):M.samples>0&&R.useMultisampledRTT(M)===!1?I=Ae.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?I=Ie[z]:I=Ie,P.copy(M.viewport),G.copy(M.scissor),H=M.scissorTest}else P.copy(ae).multiplyScalar(N).floor(),G.copy(_e).multiplyScalar(N).floor(),H=He;if(Re.bindFramebuffer(F.FRAMEBUFFER,I)&&V&&Re.drawBuffers(M,I),Re.viewport(P),Re.scissor(G),Re.setScissorTest(H),oe){const Ee=Ae.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,z)}else if(he){const Ee=Ae.get(M.texture),Ne=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ee.__webglTexture,z||0,Ne)}w=-1},this.readRenderTargetPixels=function(M,U,z,V,I,oe,he){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(Se=Se[he]),Se){Re.bindFramebuffer(F.FRAMEBUFFER,Se);try{const Ee=M.texture,Ne=Ee.format,Ie=Ee.type;if(!Ge.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&z>=0&&z<=M.height-I&&F.readPixels(U,z,V,I,Oe.convert(Ne),Oe.convert(Ie),oe)}finally{const Ee=b!==null?Ae.get(b).__webglFramebuffer:null;Re.bindFramebuffer(F.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(M,U,z,V,I,oe,he){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(Se=Se[he]),Se){const Ee=M.texture,Ne=Ee.format,Ie=Ee.type;if(!Ge.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-V&&z>=0&&z<=M.height-I){Re.bindFramebuffer(F.FRAMEBUFFER,Se);const Me=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Me),F.bufferData(F.PIXEL_PACK_BUFFER,oe.byteLength,F.STREAM_READ),F.readPixels(U,z,V,I,Oe.convert(Ne),Oe.convert(Ie),0);const Ze=b!==null?Ae.get(b).__webglFramebuffer:null;Re.bindFramebuffer(F.FRAMEBUFFER,Ze);const st=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await kM(F,st,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Me),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,oe),F.deleteBuffer(Me),F.deleteSync(st),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,z=0){M.isTexture!==!0&&(wo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const V=Math.pow(2,-z),I=Math.floor(M.image.width*V),oe=Math.floor(M.image.height*V),he=U!==null?U.x:0,Se=U!==null?U.y:0;R.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,he,Se,I,oe),Re.unbindTexture()},this.copyTextureToTexture=function(M,U,z=null,V=null,I=0){M.isTexture!==!0&&(wo("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,M=arguments[1],U=arguments[2],I=arguments[3]||0,z=null);let oe,he,Se,Ee,Ne,Ie,Me,Ze,st;const lt=M.isCompressedTexture?M.mipmaps[I]:M.image;z!==null?(oe=z.max.x-z.min.x,he=z.max.y-z.min.y,Se=z.isBox3?z.max.z-z.min.z:1,Ee=z.min.x,Ne=z.min.y,Ie=z.isBox3?z.min.z:0):(oe=lt.width,he=lt.height,Se=lt.depth||1,Ee=0,Ne=0,Ie=0),V!==null?(Me=V.x,Ze=V.y,st=V.z):(Me=0,Ze=0,st=0);const Zt=Oe.convert(U.format),Je=Oe.convert(U.type);let Te;U.isData3DTexture?(R.setTexture3D(U,0),Te=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Te=F.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Te=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const li=F.getParameter(F.UNPACK_ROW_LENGTH),Qe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Nn=F.getParameter(F.UNPACK_SKIP_PIXELS),jr=F.getParameter(F.UNPACK_SKIP_ROWS),un=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,lt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,lt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ee),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ne),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ie);const no=M.isDataArrayTexture||M.isData3DTexture,ct=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const Yn=Ae.get(M),io=Ae.get(U),Sn=Ae.get(Yn.__renderTarget),Pi=Ae.get(io.__renderTarget);Re.bindFramebuffer(F.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Re.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Li=0;Li<Se;Li++)no&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.get(M).__webglTexture,I,Ie+Li),M.isDepthTexture?(ct&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.get(U).__webglTexture,I,st+Li),F.blitFramebuffer(Ee,Ne,oe,he,Me,Ze,oe,he,F.DEPTH_BUFFER_BIT,F.NEAREST)):ct?F.copyTexSubImage3D(Te,I,Me,Ze,st+Li,Ee,Ne,oe,he):F.copyTexSubImage2D(Te,I,Me,Ze,st+Li,Ee,Ne,oe,he);Re.bindFramebuffer(F.READ_FRAMEBUFFER,null),Re.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ct?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Te,I,Me,Ze,st,oe,he,Se,Zt,Je,lt.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Te,I,Me,Ze,st,oe,he,Se,Zt,lt.data):F.texSubImage3D(Te,I,Me,Ze,st,oe,he,Se,Zt,Je,lt):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,I,Me,Ze,oe,he,Zt,Je,lt.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,I,Me,Ze,lt.width,lt.height,Zt,lt.data):F.texSubImage2D(F.TEXTURE_2D,I,Me,Ze,oe,he,Zt,Je,lt);F.pixelStorei(F.UNPACK_ROW_LENGTH,li),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Nn),F.pixelStorei(F.UNPACK_SKIP_ROWS,jr),F.pixelStorei(F.UNPACK_SKIP_IMAGES,un),I===0&&U.generateMipmaps&&F.generateMipmap(Te),Re.unbindTexture()},this.copyTextureToTexture3D=function(M,U,z=null,V=null,I=0){return M.isTexture!==!0&&(wo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,M=arguments[2],U=arguments[3],I=arguments[4]||0),wo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,z,V,I)},this.initRenderTarget=function(M){Ae.get(M).__webglFramebuffer===void 0&&R.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?R.setTextureCube(M,0):M.isData3DTexture?R.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?R.setTexture2DArray(M,0):R.setTexture2D(M,0),Re.unbindTexture()},this.resetState=function(){A=0,T=0,b=null,Re.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}class KR extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class V0 extends Js{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mg=new ht,Ad=new A0,sl=new Mc,ol=new O;class ZR extends It{constructor(e=new oi,n=new V0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(r),sl.radius+=s,e.ray.intersectsSphere(sl)===!1)return;mg.copy(r).invert(),Ad.copy(e.ray).applyMatrix4(mg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=h,x=m;g<x;g++){const p=c.getX(g);ol.fromBufferAttribute(d,p),gg(ol,p,l,r,e,n,this)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=h,x=m;g<x;g++)ol.fromBufferAttribute(d,g),gg(ol,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gg(t,e,n,i,r,s,o){const a=Ad.distanceSqToPoint(t);if(a<n){const l=new O;Ad.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class kh extends oi{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new ri(s,3)),this.setAttribute("normal",new ri(s.slice(),3)),this.setAttribute("uv",new ri(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const _=new O,y=new O,C=new O;for(let A=0;A<n.length;A+=3)m(n[A+0],_),m(n[A+1],y),m(n[A+2],C),l(_,y,C,v)}function l(v,_,y,C){const A=C+1,T=[];for(let b=0;b<=A;b++){T[b]=[];const w=v.clone().lerp(y,b/A),S=_.clone().lerp(y,b/A),P=A-b;for(let G=0;G<=P;G++)G===0&&b===A?T[b][G]=w:T[b][G]=w.clone().lerp(S,G/P)}for(let b=0;b<A;b++)for(let w=0;w<2*(A-b)-1;w++){const S=Math.floor(w/2);w%2===0?(h(T[b][S+1]),h(T[b+1][S]),h(T[b][S])):(h(T[b][S+1]),h(T[b+1][S+1]),h(T[b+1][S]))}}function c(v){const _=new O;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(v),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function u(){const v=new O;for(let _=0;_<s.length;_+=3){v.x=s[_+0],v.y=s[_+1],v.z=s[_+2];const y=p(v)/2/Math.PI+.5,C=f(v)/Math.PI+.5;o.push(y,1-C)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){const _=o[v+0],y=o[v+2],C=o[v+4],A=Math.max(_,y,C),T=Math.min(_,y,C);A>.9&&T<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function m(v,_){const y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){const v=new O,_=new O,y=new O,C=new O,A=new je,T=new je,b=new je;for(let w=0,S=0;w<s.length;w+=9,S+=6){v.set(s[w+0],s[w+1],s[w+2]),_.set(s[w+3],s[w+4],s[w+5]),y.set(s[w+6],s[w+7],s[w+8]),A.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),b.set(o[S+4],o[S+5]),C.copy(v).add(_).add(y).divideScalar(3);const P=p(C);x(A,S+0,v,P),x(T,S+2,_,P),x(b,S+4,y,P)}}function x(v,_,y,C){C<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=C/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kh(e.vertices,e.indices,e.radius,e.details)}}class Bh extends kh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Bh(e.radius,e.detail)}}class JR extends Js{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=S0,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class G0 extends It{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Iu=new ht,vg=new O,_g=new O;class W0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fh,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;vg.setFromMatrixPosition(e.matrixWorld),n.position.copy(vg),_g.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(_g),n.updateMatrixWorld(),Iu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xg=new ht,_o=new O,Fu=new O;class QR extends W0{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),_o.setFromMatrixPosition(e.matrixWorld),i.position.copy(_o),Fu.copy(i.position),Fu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Fu),i.updateMatrixWorld(),r.makeTranslation(-_o.x,-_o.y,-_o.z),xg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xg)}}class eC extends G0{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new QR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tC extends W0{constructor(){super(new F0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nC extends G0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new tC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ch);function iC(){const t=re.useRef(null);return re.useEffect(()=>{const e=t.current;if(!e)return;const n=new KR,i=new pn(60,window.innerWidth/window.innerHeight,.1,1e3),r=new YR({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(r.domElement);const s=13938487,o=new Bh(2,0),a=new JR({color:328965,emissive:s,emissiveIntensity:.2,wireframe:!0,transparent:!0,opacity:.4}),l=new ti(o,a);n.add(l);const c=500,u=new oi,d=new Float32Array(c*3);for(let A=0;A<c*3;A++)d[A]=(Math.random()-.5)*20;u.setAttribute("position",new jn(d,3));const h=new V0({size:.02,color:s,transparent:!0,opacity:.5}),m=new ZR(u,h);n.add(m);const g=new eC(s,1,100);g.position.set(10,10,10),n.add(g);const x=new nC(16777215,.2);x.position.set(-5,-5,5),n.add(x),i.position.z=8;let p=0,f=0;const v=A=>{p=A.clientX/window.innerWidth-.5,f=A.clientY/window.innerHeight-.5},_=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("mousemove",v),window.addEventListener("resize",_);let y=0;const C=()=>{y=requestAnimationFrame(C),l.rotation.y+=.001;const A=p*2,T=-f*2;l.position.x+=(A-l.position.x)*.05,l.position.y+=(T-l.position.y)*.05,m.rotation.y+=5e-4,m.position.y+=Math.sin(Date.now()*.001)*.002,r.render(n,i)};return C(),()=>{cancelAnimationFrame(y),window.removeEventListener("mousemove",v),window.removeEventListener("resize",_),o.dispose(),a.dispose(),u.dispose(),h.dispose(),r.dispose(),r.domElement.parentNode===e&&e.removeChild(r.domElement)}},[]),L.jsx("div",{ref:t,className:"fixed inset-0 pointer-events-none",style:{zIndex:0},"aria-hidden":!0})}function rC(){const{cartCount:t}=aa(),e=Ys(),n=!!localStorage.getItem("token"),i=()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e("/login")};return L.jsx("header",{className:"pointer-events-none fixed left-0 right-0 top-0 z-[1000] flex justify-center px-4 pt-8",children:L.jsxs("nav",{className:"pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-white/[0.08] bg-[rgba(10,10,10,0.65)] px-6 py-3 backdrop-blur-xl md:px-10",style:{transition:"all 0.5s cubic-bezier(0.23, 1, 0.32, 1)"},children:[L.jsx(qt,{to:"/",className:"font-display text-xl font-bold tracking-[0.35em] text-primary md:text-2xl gold-gradient-text",children:"AURUM"}),L.jsx("div",{className:"hidden max-w-xs flex-1 md:block md:mx-6",children:L.jsx("input",{type:"search",placeholder:"Search gadgets, devices…",className:"w-full rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40","aria-label":"Search products"})}),L.jsxs("div",{className:"flex items-center gap-2 md:gap-4",children:[L.jsx(qt,{to:"/",className:"hidden text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/40 transition hover:text-primary sm:inline",children:"Shop"}),n?L.jsx("button",{type:"button",onClick:i,className:"text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/50 transition hover:text-primary",children:"Logout"}):L.jsx(qt,{to:"/login",className:"text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/50 transition hover:text-primary",children:"Sign In"}),L.jsxs(qt,{to:"/cart",className:"flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-wider text-primary transition hover:bg-primary hover:text-black",children:["Cart",t>0&&L.jsx("span",{className:"flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-black/80 px-1 text-[10px] text-primary",children:t})]})]})]})})}function sC(){return L.jsxs("footer",{className:"relative z-10 mt-16 border-t border-white/[0.06] bg-[rgba(5,5,5,0.85)] backdrop-blur-md",children:[L.jsxs("div",{className:"mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3",children:[L.jsxs("div",{children:[L.jsx("h3",{className:"mb-3 font-display text-2xl font-bold tracking-[0.25em] text-primary",children:"AURUM"}),L.jsx("p",{className:"text-sm leading-relaxed text-gray-500",children:"Curated tech and accessories — inspired by modern editorial commerce. Case study stack: React, Node, Docker, Jenkins & ML-assisted deployment safety."})]}),L.jsxs("div",{children:[L.jsx("h4",{className:"mb-3 text-sm font-semibold uppercase tracking-widest text-white/80",children:"Explore"}),L.jsxs("ul",{className:"space-y-2 text-sm text-gray-500",children:[L.jsx("li",{children:L.jsx(qt,{to:"/",className:"transition hover:text-primary",children:"All products"})}),L.jsx("li",{children:L.jsx(qt,{to:"/cart",className:"transition hover:text-primary",children:"Cart"})}),L.jsx("li",{children:L.jsx(qt,{to:"/login",className:"transition hover:text-primary",children:"Account"})}),L.jsx("li",{children:L.jsx(qt,{to:"/register",className:"transition hover:text-primary",children:"Register"})})]})]}),L.jsxs("div",{children:[L.jsx("h4",{className:"mb-3 text-sm font-semibold uppercase tracking-widest text-white/80",children:"Stack"}),L.jsx("div",{className:"flex flex-wrap gap-2",children:["React","Node.js","Docker","Jenkins","FastAPI","sklearn"].map(t=>L.jsx("span",{className:"rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-400",children:t},t))})]})]}),L.jsx("div",{className:"pb-8 text-center text-xs text-gray-600",children:"© 2026 AURUM — APDD Case Study"})]})}function oC(){return L.jsxs(qt,{to:"/login",className:`aurum-concierge fixed bottom-8 right-8 z-[999] flex items-center gap-3
                 rounded-full border border-[#d4af37] bg-[rgba(10,10,10,0.85)] px-7 py-3
                 text-[0.75rem] font-bold uppercase tracking-wider text-[#d4af37]
                 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#d4af37] hover:text-black`,children:[L.jsx("span",{"aria-hidden":!0,children:"✨"}),"Concierge"]})}function j0(t,e){return function(){return t.apply(e,arguments)}}const{toString:aC}=Object.prototype,{getPrototypeOf:zh}=Object,{iterator:Ac,toStringTag:X0}=Symbol,Rc=(t=>e=>{const n=aC.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),$n=t=>(t=t.toLowerCase(),e=>Rc(e)===t),Cc=t=>e=>typeof e===t,{isArray:eo}=Array,Ws=Cc("undefined");function ha(t){return t!==null&&!Ws(t)&&t.constructor!==null&&!Ws(t.constructor)&&ln(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const q0=$n("ArrayBuffer");function lC(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&q0(t.buffer),e}const cC=Cc("string"),ln=Cc("function"),$0=Cc("number"),pa=t=>t!==null&&typeof t=="object",uC=t=>t===!0||t===!1,Al=t=>{if(Rc(t)!=="object")return!1;const e=zh(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(X0 in t)&&!(Ac in t)},fC=t=>{if(!pa(t)||ha(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},dC=$n("Date"),hC=$n("File"),pC=t=>!!(t&&typeof t.uri<"u"),mC=t=>t&&typeof t.getParts<"u",gC=$n("Blob"),vC=$n("FileList"),_C=t=>pa(t)&&ln(t.pipe);function xC(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const yg=xC(),Sg=typeof yg.FormData<"u"?yg.FormData:void 0,yC=t=>{let e;return t&&(Sg&&t instanceof Sg||ln(t.append)&&((e=Rc(t))==="formdata"||e==="object"&&ln(t.toString)&&t.toString()==="[object FormData]"))},SC=$n("URLSearchParams"),[EC,MC,wC,TC]=["ReadableStream","Request","Response","Headers"].map($n),AC=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ma(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),eo(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(ha(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function Y0(t,e){if(ha(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Pr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,K0=t=>!Ws(t)&&t!==Pr;function Rd(){const{caseless:t,skipUndefined:e}=K0(this)&&this||{},n={},i=(r,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const o=t&&Y0(n,s)||s;Al(n[o])&&Al(r)?n[o]=Rd(n[o],r):Al(r)?n[o]=Rd({},r):eo(r)?n[o]=r.slice():(!e||!Ws(r))&&(n[o]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&ma(arguments[r],i);return n}const RC=(t,e,n,{allOwnKeys:i}={})=>(ma(e,(r,s)=>{n&&ln(r)?Object.defineProperty(t,s,{value:j0(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),CC=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),bC=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},PC=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&zh(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},LC=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},NC=t=>{if(!t)return null;if(eo(t))return t;let e=t.length;if(!$0(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},DC=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&zh(Uint8Array)),UC=(t,e)=>{const i=(t&&t[Ac]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},IC=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},FC=$n("HTMLFormElement"),OC=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),Eg=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),kC=$n("RegExp"),Z0=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};ma(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},BC=t=>{Z0(t,(e,n)=>{if(ln(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(ln(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},zC=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return eo(t)?i(t):i(String(t).split(e)),n},HC=()=>{},VC=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function GC(t){return!!(t&&ln(t.append)&&t[X0]==="FormData"&&t[Ac])}const WC=t=>{const e=new Array(10),n=(i,r)=>{if(pa(i)){if(e.indexOf(i)>=0)return;if(ha(i))return i;if(!("toJSON"in i)){e[r]=i;const s=eo(i)?[]:{};return ma(i,(o,a)=>{const l=n(o,r+1);!Ws(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},jC=$n("AsyncFunction"),XC=t=>t&&(pa(t)||ln(t))&&ln(t.then)&&ln(t.catch),J0=((t,e)=>t?setImmediate:e?((n,i)=>(Pr.addEventListener("message",({source:r,data:s})=>{r===Pr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Pr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",ln(Pr.postMessage)),qC=typeof queueMicrotask<"u"?queueMicrotask.bind(Pr):typeof process<"u"&&process.nextTick||J0,$C=t=>t!=null&&ln(t[Ac]),B={isArray:eo,isArrayBuffer:q0,isBuffer:ha,isFormData:yC,isArrayBufferView:lC,isString:cC,isNumber:$0,isBoolean:uC,isObject:pa,isPlainObject:Al,isEmptyObject:fC,isReadableStream:EC,isRequest:MC,isResponse:wC,isHeaders:TC,isUndefined:Ws,isDate:dC,isFile:hC,isReactNativeBlob:pC,isReactNative:mC,isBlob:gC,isRegExp:kC,isFunction:ln,isStream:_C,isURLSearchParams:SC,isTypedArray:DC,isFileList:vC,forEach:ma,merge:Rd,extend:RC,trim:AC,stripBOM:CC,inherits:bC,toFlatObject:PC,kindOf:Rc,kindOfTest:$n,endsWith:LC,toArray:NC,forEachEntry:UC,matchAll:IC,isHTMLForm:FC,hasOwnProperty:Eg,hasOwnProp:Eg,reduceDescriptors:Z0,freezeMethods:BC,toObjectSet:zC,toCamelCase:OC,noop:HC,toFiniteNumber:VC,findKey:Y0,global:Pr,isContextDefined:K0,isSpecCompliantForm:GC,toJSONObject:WC,isAsyncFn:jC,isThenable:XC,setImmediate:J0,asap:qC,isIterable:$C};let be=class Q0 extends Error{static from(e,n,i,r,s,o){const a=new Q0(e.message,n||e.code,i,r,s);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.status}}};be.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";be.ERR_BAD_OPTION="ERR_BAD_OPTION";be.ECONNABORTED="ECONNABORTED";be.ETIMEDOUT="ETIMEDOUT";be.ERR_NETWORK="ERR_NETWORK";be.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";be.ERR_DEPRECATED="ERR_DEPRECATED";be.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";be.ERR_BAD_REQUEST="ERR_BAD_REQUEST";be.ERR_CANCELED="ERR_CANCELED";be.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";be.ERR_INVALID_URL="ERR_INVALID_URL";const YC=null;function Cd(t){return B.isPlainObject(t)||B.isArray(t)}function ex(t){return B.endsWith(t,"[]")?t.slice(0,-2):t}function Ou(t,e,n){return t?t.concat(e).map(function(r,s){return r=ex(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function KC(t){return B.isArray(t)&&!t.some(Cd)}const ZC=B.toFlatObject(B,{},null,function(e){return/^is[A-Z]/.test(e)});function bc(t,e,n){if(!B.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=B.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,p){return!B.isUndefined(p[x])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(e);if(!B.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(B.isDate(g))return g.toISOString();if(B.isBoolean(g))return g.toString();if(!l&&B.isBlob(g))throw new be("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(g)||B.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,x,p){let f=g;if(B.isReactNative(e)&&B.isReactNativeBlob(g))return e.append(Ou(p,x,s),c(g)),!1;if(g&&!p&&typeof g=="object"){if(B.endsWith(x,"{}"))x=i?x:x.slice(0,-2),g=JSON.stringify(g);else if(B.isArray(g)&&KC(g)||(B.isFileList(g)||B.endsWith(x,"[]"))&&(f=B.toArray(g)))return x=ex(x),f.forEach(function(_,y){!(B.isUndefined(_)||_===null)&&e.append(o===!0?Ou([x],y,s):o===null?x:x+"[]",c(_))}),!1}return Cd(g)?!0:(e.append(Ou(p,x,s),c(g)),!1)}const d=[],h=Object.assign(ZC,{defaultVisitor:u,convertValue:c,isVisitable:Cd});function m(g,x){if(!B.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+x.join("."));d.push(g),B.forEach(g,function(f,v){(!(B.isUndefined(f)||f===null)&&r.call(e,f,B.isString(v)?v.trim():v,x,h))===!0&&m(f,x?x.concat(v):[v])}),d.pop()}}if(!B.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Mg(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Hh(t,e){this._pairs=[],t&&bc(t,this,e)}const tx=Hh.prototype;tx.append=function(e,n){this._pairs.push([e,n])};tx.toString=function(e){const n=e?function(i){return e.call(this,i,Mg)}:Mg;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function JC(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function nx(t,e,n){if(!e)return t;const i=n&&n.encode||JC,r=B.isFunction(n)?{serialize:n}:n,s=r&&r.serialize;let o;if(s?o=s(e,r):o=B.isURLSearchParams(e)?e.toString():new Hh(e,r).toString(i),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class wg{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){B.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Vh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},QC=typeof URLSearchParams<"u"?URLSearchParams:Hh,eb=typeof FormData<"u"?FormData:null,tb=typeof Blob<"u"?Blob:null,nb={isBrowser:!0,classes:{URLSearchParams:QC,FormData:eb,Blob:tb},protocols:["http","https","file","blob","url","data"]},Gh=typeof window<"u"&&typeof document<"u",bd=typeof navigator=="object"&&navigator||void 0,ib=Gh&&(!bd||["ReactNative","NativeScript","NS"].indexOf(bd.product)<0),rb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",sb=Gh&&window.location.href||"http://localhost",ob=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Gh,hasStandardBrowserEnv:ib,hasStandardBrowserWebWorkerEnv:rb,navigator:bd,origin:sb},Symbol.toStringTag,{value:"Module"})),Gt={...ob,...nb};function ab(t,e){return bc(t,new Gt.classes.URLSearchParams,{visitor:function(n,i,r,s){return Gt.isNode&&B.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function lb(t){return B.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function cb(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function ix(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&B.isArray(r)?r.length:o,l?(B.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!B.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&B.isArray(r[o])&&(r[o]=cb(r[o])),!a)}if(B.isFormData(t)&&B.isFunction(t.entries)){const n={};return B.forEachEntry(t,(i,r)=>{e(lb(i),r,n,0)}),n}return null}function ub(t,e,n){if(B.isString(t))try{return(e||JSON.parse)(t),B.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const ga={transitional:Vh,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=B.isObject(e);if(s&&B.isHTMLForm(e)&&(e=new FormData(e)),B.isFormData(e))return r?JSON.stringify(ix(e)):e;if(B.isArrayBuffer(e)||B.isBuffer(e)||B.isStream(e)||B.isFile(e)||B.isBlob(e)||B.isReadableStream(e))return e;if(B.isArrayBufferView(e))return e.buffer;if(B.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return ab(e,this.formSerializer).toString();if((a=B.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return bc(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),ub(e)):e}],transformResponse:[function(e){const n=this.transitional||ga.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(B.isResponse(e)||B.isReadableStream(e))return e;if(e&&B.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?be.from(a,be.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Gt.classes.FormData,Blob:Gt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],t=>{ga.headers[t]={}});const fb=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),db=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&fb[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Tg=Symbol("internals");function xo(t){return t&&String(t).trim().toLowerCase()}function Rl(t){return t===!1||t==null?t:B.isArray(t)?t.map(Rl):String(t).replace(/[\r\n]+$/,"")}function hb(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const pb=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ku(t,e,n,i,r){if(B.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!B.isString(e)){if(B.isString(i))return e.indexOf(i)!==-1;if(B.isRegExp(i))return i.test(e)}}function mb(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function gb(t,e){const n=B.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let cn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=xo(l);if(!u)throw new Error("header name must be a non-empty string");const d=B.findKey(r,u);(!d||r[d]===void 0||c===!0||c===void 0&&r[d]!==!1)&&(r[d||l]=Rl(a))}const o=(a,l)=>B.forEach(a,(c,u)=>s(c,u,l));if(B.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(B.isString(e)&&(e=e.trim())&&!pb(e))o(db(e),n);else if(B.isObject(e)&&B.isIterable(e)){let a={},l,c;for(const u of e){if(!B.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?B.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=xo(e),e){const i=B.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return hb(r);if(B.isFunction(n))return n.call(this,r,i);if(B.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=xo(e),e){const i=B.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||ku(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=xo(o),o){const a=B.findKey(i,o);a&&(!n||ku(i,i[a],a,n))&&(delete i[a],r=!0)}}return B.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||ku(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return B.forEach(this,(r,s)=>{const o=B.findKey(i,s);if(o){n[o]=Rl(r),delete n[s];return}const a=e?mb(s):String(s).trim();a!==s&&delete n[s],n[a]=Rl(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return B.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&B.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Tg]=this[Tg]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=xo(o);i[a]||(gb(r,o),i[a]=!0)}return B.isArray(e)?e.forEach(s):s(e),this}};cn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(cn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});B.freezeMethods(cn);function Bu(t,e){const n=this||ga,i=e||n,r=cn.from(i.headers);let s=i.data;return B.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function rx(t){return!!(t&&t.__CANCEL__)}let va=class extends be{constructor(e,n,i){super(e??"canceled",be.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function sx(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new be("Request failed with status code "+n.status,[be.ERR_BAD_REQUEST,be.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function vb(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function _b(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let d=s,h=0;for(;d!==r;)h+=n[d++],d=d%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const m=u&&c-u;return m?Math.round(h*1e3/m):void 0}}function xb(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t(...c)};return[(...c)=>{const u=Date.now(),d=u-n;d>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-d)))},()=>r&&o(r)]}const nc=(t,e,n=3)=>{let i=0;const r=_b(50,250);return xb(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(d)},n)},Ag=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Rg=t=>(...e)=>B.asap(()=>t(...e)),yb=Gt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Gt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Gt.origin),Gt.navigator&&/(msie|trident)/i.test(Gt.navigator.userAgent)):()=>!0,Sb=Gt.hasStandardBrowserEnv?{write(t,e,n,i,r,s,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];B.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),B.isString(i)&&a.push(`path=${i}`),B.isString(r)&&a.push(`domain=${r}`),s===!0&&a.push("secure"),B.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Eb(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Mb(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function ox(t,e,n){let i=!Eb(e);return t&&(i||n==!1)?Mb(t,e):e}const Cg=t=>t instanceof cn?{...t}:t;function Hr(t,e){e=e||{};const n={};function i(c,u,d,h){return B.isPlainObject(c)&&B.isPlainObject(u)?B.merge.call({caseless:h},c,u):B.isPlainObject(u)?B.merge({},u):B.isArray(u)?u.slice():u}function r(c,u,d,h){if(B.isUndefined(u)){if(!B.isUndefined(c))return i(void 0,c,d,h)}else return i(c,u,d,h)}function s(c,u){if(!B.isUndefined(u))return i(void 0,u)}function o(c,u){if(B.isUndefined(u)){if(!B.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,d){if(d in e)return i(c,u);if(d in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,d)=>r(Cg(c),Cg(u),d,!0)};return B.forEach(Object.keys({...t,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const d=B.hasOwnProp(l,u)?l[u]:r,h=d(t[u],e[u],u);B.isUndefined(h)&&d!==a||(n[u]=h)}),n}const ax=t=>{const e=Hr({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;if(e.headers=o=cn.from(o),e.url=nx(ox(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),B.isFormData(n)){if(Gt.hasStandardBrowserEnv||Gt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(B.isFunction(n.getHeaders)){const l=n.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([u,d])=>{c.includes(u.toLowerCase())&&o.set(u,d)})}}if(Gt.hasStandardBrowserEnv&&(i&&B.isFunction(i)&&(i=i(e)),i||i!==!1&&yb(e.url))){const l=r&&s&&Sb.read(s);l&&o.set(r,l)}return e},wb=typeof XMLHttpRequest<"u",Tb=wb&&function(t){return new Promise(function(n,i){const r=ax(t);let s=r.data;const o=cn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,d,h,m,g;function x(){m&&m(),g&&g(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(r.method.toUpperCase(),r.url,!0),p.timeout=r.timeout;function f(){if(!p)return;const _=cn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:_,config:t,request:p};sx(function(T){n(T),x()},function(T){i(T),x()},C),p=null}"onloadend"in p?p.onloadend=f:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(f)},p.onabort=function(){p&&(i(new be("Request aborted",be.ECONNABORTED,t,p)),p=null)},p.onerror=function(y){const C=y&&y.message?y.message:"Network Error",A=new be(C,be.ERR_NETWORK,t,p);A.event=y||null,i(A),p=null},p.ontimeout=function(){let y=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const C=r.transitional||Vh;r.timeoutErrorMessage&&(y=r.timeoutErrorMessage),i(new be(y,C.clarifyTimeoutError?be.ETIMEDOUT:be.ECONNABORTED,t,p)),p=null},s===void 0&&o.setContentType(null),"setRequestHeader"in p&&B.forEach(o.toJSON(),function(y,C){p.setRequestHeader(C,y)}),B.isUndefined(r.withCredentials)||(p.withCredentials=!!r.withCredentials),a&&a!=="json"&&(p.responseType=r.responseType),c&&([h,g]=nc(c,!0),p.addEventListener("progress",h)),l&&p.upload&&([d,m]=nc(l),p.upload.addEventListener("progress",d),p.upload.addEventListener("loadend",m)),(r.cancelToken||r.signal)&&(u=_=>{p&&(i(!_||_.type?new va(null,t,p):_),p.abort(),p=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const v=vb(r.url);if(v&&Gt.protocols.indexOf(v)===-1){i(new be("Unsupported protocol "+v+":",be.ERR_BAD_REQUEST,t));return}p.send(s||null)})},Ab=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof be?u:new va(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new be(`timeout of ${e}ms exceeded`,be.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>B.asap(a),l}},Rb=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},Cb=async function*(t,e){for await(const n of bb(t))yield*Rb(n,e)},bb=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},bg=(t,e,n,i)=>{const r=Cb(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let d=u.byteLength;if(n){let h=s+=d;n(h)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},Pg=64*1024,{isFunction:al}=B,Pb=(({Request:t,Response:e})=>({Request:t,Response:e}))(B.global),{ReadableStream:Lg,TextEncoder:Ng}=B.global,Dg=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Lb=t=>{t=B.merge.call({skipUndefined:!0},Pb,t);const{fetch:e,Request:n,Response:i}=t,r=e?al(e):typeof fetch=="function",s=al(n),o=al(i);if(!r)return!1;const a=r&&al(Lg),l=r&&(typeof Ng=="function"?(g=>x=>g.encode(x))(new Ng):async g=>new Uint8Array(await new n(g).arrayBuffer())),c=s&&a&&Dg(()=>{let g=!1;const x=new Lg,p=new n(Gt.origin,{body:x,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return x.cancel(),g&&!p}),u=o&&a&&Dg(()=>B.isReadableStream(new i("").body)),d={stream:u&&(g=>g.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!d[g]&&(d[g]=(x,p)=>{let f=x&&x[g];if(f)return f.call(x);throw new be(`Response type '${g}' is not supported`,be.ERR_NOT_SUPPORT,p)})});const h=async g=>{if(g==null)return 0;if(B.isBlob(g))return g.size;if(B.isSpecCompliantForm(g))return(await new n(Gt.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(B.isArrayBufferView(g)||B.isArrayBuffer(g))return g.byteLength;if(B.isURLSearchParams(g)&&(g=g+""),B.isString(g))return(await l(g)).byteLength},m=async(g,x)=>{const p=B.toFiniteNumber(g.getContentLength());return p??h(x)};return async g=>{let{url:x,method:p,data:f,signal:v,cancelToken:_,timeout:y,onDownloadProgress:C,onUploadProgress:A,responseType:T,headers:b,withCredentials:w="same-origin",fetchOptions:S}=ax(g),P=e||fetch;T=T?(T+"").toLowerCase():"text";let G=Ab([v,_&&_.toAbortSignal()],y),H=null;const $=G&&G.unsubscribe&&(()=>{G.unsubscribe()});let Q;try{if(A&&c&&p!=="get"&&p!=="head"&&(Q=await m(b,f))!==0){let ae=new n(x,{method:"POST",body:f,duplex:"half"}),_e;if(B.isFormData(f)&&(_e=ae.headers.get("content-type"))&&b.setContentType(_e),ae.body){const[He,X]=Ag(Q,nc(Rg(A)));f=bg(ae.body,Pg,He,X)}}B.isString(w)||(w=w?"include":"omit");const W=s&&"credentials"in n.prototype,ee={...S,signal:G,method:p.toUpperCase(),headers:b.normalize().toJSON(),body:f,duplex:"half",credentials:W?w:void 0};H=s&&new n(x,ee);let N=await(s?P(H,S):P(x,ee));const q=u&&(T==="stream"||T==="response");if(u&&(C||q&&$)){const ae={};["status","statusText","headers"].forEach(ie=>{ae[ie]=N[ie]});const _e=B.toFiniteNumber(N.headers.get("content-length")),[He,X]=C&&Ag(_e,nc(Rg(C),!0))||[];N=new i(bg(N.body,Pg,He,()=>{X&&X(),$&&$()}),ae)}T=T||"text";let J=await d[B.findKey(d,T)||"text"](N,g);return!q&&$&&$(),await new Promise((ae,_e)=>{sx(ae,_e,{data:J,headers:cn.from(N.headers),status:N.status,statusText:N.statusText,config:g,request:H})})}catch(W){throw $&&$(),W&&W.name==="TypeError"&&/Load failed|fetch/i.test(W.message)?Object.assign(new be("Network Error",be.ERR_NETWORK,g,H,W&&W.response),{cause:W.cause||W}):be.from(W,W&&W.code,g,H,W&&W.response)}}},Nb=new Map,lx=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let o=s.length,a=o,l,c,u=Nb;for(;a--;)l=s[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:Lb(e)),u=c;return c};lx();const Wh={http:YC,xhr:Tb,fetch:{get:lx}};B.forEach(Wh,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ug=t=>`- ${t}`,Db=t=>B.isFunction(t)||t===null||t===!1;function Ub(t,e){t=B.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let o=0;o<n;o++){i=t[o];let a;if(r=i,!Db(i)&&(r=Wh[(a=String(i)).toLowerCase()],r===void 0))throw new be(`Unknown adapter '${a}'`);if(r&&(B.isFunction(r)||(r=r.get(e))))break;s[a||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(Ug).join(`
`):" "+Ug(o[0]):"as no adapter specified";throw new be("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r}const cx={getAdapter:Ub,adapters:Wh};function zu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new va(null,t)}function Ig(t){return zu(t),t.headers=cn.from(t.headers),t.data=Bu.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),cx.getAdapter(t.adapter||ga.adapter,t)(t).then(function(i){return zu(t),i.data=Bu.call(t,t.transformResponse,i),i.headers=cn.from(i.headers),i},function(i){return rx(i)||(zu(t),i&&i.response&&(i.response.data=Bu.call(t,t.transformResponse,i.response),i.response.headers=cn.from(i.response.headers))),Promise.reject(i)})}const ux="1.14.0",Pc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Pc[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Fg={};Pc.transitional=function(e,n,i){function r(s,o){return"[Axios v"+ux+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new be(r(o," has been removed"+(n?" in "+n:"")),be.ERR_DEPRECATED);return n&&!Fg[o]&&(Fg[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};Pc.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function Ib(t,e,n){if(typeof t!="object")throw new be("options must be an object",be.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new be("option "+s+" must be "+l,be.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new be("Unknown option "+s,be.ERR_BAD_OPTION)}}const Cl={assertOptions:Ib,validators:Pc},Mn=Cl.validators;let Dr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new wg,response:new wg}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Hr(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Cl.assertOptions(i,{silentJSONParsing:Mn.transitional(Mn.boolean),forcedJSONParsing:Mn.transitional(Mn.boolean),clarifyTimeoutError:Mn.transitional(Mn.boolean),legacyInterceptorReqResOrdering:Mn.transitional(Mn.boolean)},!1),r!=null&&(B.isFunction(r)?n.paramsSerializer={serialize:r}:Cl.assertOptions(r,{encode:Mn.function,serialize:Mn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Cl.assertOptions(n,{baseUrl:Mn.spelling("baseURL"),withXsrfToken:Mn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&B.merge(s.common,s[n.method]);s&&B.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),n.headers=cn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(x){if(typeof x.runWhen=="function"&&x.runWhen(n)===!1)return;l=l&&x.synchronous;const p=n.transitional||Vh;p&&p.legacyInterceptorReqResOrdering?a.unshift(x.fulfilled,x.rejected):a.push(x.fulfilled,x.rejected)});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let u,d=0,h;if(!l){const g=[Ig.bind(this),void 0];for(g.unshift(...a),g.push(...c),h=g.length,u=Promise.resolve(n);d<h;)u=u.then(g[d++],g[d++]);return u}h=a.length;let m=n;for(;d<h;){const g=a[d++],x=a[d++];try{m=g(m)}catch(p){x.call(this,p);break}}try{u=Ig.call(this,m)}catch(g){return Promise.reject(g)}for(d=0,h=c.length;d<h;)u=u.then(c[d++],c[d++]);return u}getUri(e){e=Hr(this.defaults,e);const n=ox(e.baseURL,e.url,e.allowAbsoluteUrls);return nx(n,e.params,e.paramsSerializer)}};B.forEach(["delete","get","head","options"],function(e){Dr.prototype[e]=function(n,i){return this.request(Hr(i||{},{method:e,url:n,data:(i||{}).data}))}});B.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Hr(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Dr.prototype[e]=n(),Dr.prototype[e+"Form"]=n(!0)});let Fb=class fx{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new va(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new fx(function(r){e=r}),cancel:e}}};function Ob(t){return function(n){return t.apply(null,n)}}function kb(t){return B.isObject(t)&&t.isAxiosError===!0}const Pd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Pd).forEach(([t,e])=>{Pd[e]=t});function dx(t){const e=new Dr(t),n=j0(Dr.prototype.request,e);return B.extend(n,Dr.prototype,e,{allOwnKeys:!0}),B.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return dx(Hr(t,r))},n}const Et=dx(ga);Et.Axios=Dr;Et.CanceledError=va;Et.CancelToken=Fb;Et.isCancel=rx;Et.VERSION=ux;Et.toFormData=bc;Et.AxiosError=be;Et.Cancel=Et.CanceledError;Et.all=function(e){return Promise.all(e)};Et.spread=Ob;Et.isAxiosError=kb;Et.mergeConfig=Hr;Et.AxiosHeaders=cn;Et.formToJSON=t=>ix(B.isHTMLForm(t)?new FormData(t):t);Et.getAdapter=cx.getAdapter;Et.HttpStatusCode=Pd;Et.default=Et;const{Axios:iP,AxiosError:rP,CanceledError:sP,isCancel:oP,CancelToken:aP,VERSION:lP,all:cP,Cancel:uP,isAxiosError:fP,spread:dP,toFormData:hP,AxiosHeaders:pP,HttpStatusCode:mP,formToJSON:gP,getAdapter:vP,mergeConfig:_P}=Et,Bb="http://localhost:5000",to=Et.create({baseURL:Bb,headers:{"Content-Type":"application/json"}});to.interceptors.request.use(t=>{const e=localStorage.getItem("token");return e&&(t.headers.Authorization=`Bearer ${e}`),t});const zb=()=>to.get("/products"),Hb=t=>to.get(`/products/${t}`),Vb=t=>to.post("/login",t),Gb=t=>to.post("/register",t),Wb=t=>to.post("/checkout",t);function Xn(t){return t==null||Number.isNaN(Number(t))?"₹0":`₹${Math.round(Number(t)).toLocaleString("en-IN")}`}const Ps="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80";function jb({product:t}){const{addToCart:e}=aa(),[n,i]=re.useState(t.image),r="★".repeat(Math.round(t.rating||4))+"☆".repeat(5-Math.round(t.rating||4));return L.jsxs("div",{className:"glass card-hover group cursor-pointer overflow-hidden rounded-[1.75rem] p-0",children:[L.jsx(qt,{to:`/product/${t.id}`,children:L.jsxs("div",{className:"relative flex h-56 items-center justify-center overflow-hidden bg-black/40",children:[L.jsx("img",{src:n,alt:t.name,loading:"lazy",referrerPolicy:"no-referrer",onError:()=>i(Ps),className:"h-full w-full object-cover p-0 transition-transform duration-500 group-hover:scale-105"}),t.discount?L.jsxs("span",{className:"absolute left-3 top-3 rounded-full border border-primary/40 bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-sm",children:["−",t.discount,"%"]}):null]})}),L.jsxs("div",{className:"space-y-2 p-5",children:[L.jsx(qt,{to:`/product/${t.id}`,children:L.jsx("h3",{className:"line-clamp-2 text-sm font-medium leading-snug text-white transition hover:text-primary",children:t.name})}),L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("span",{className:"text-xs text-primary",children:r}),L.jsxs("span",{className:"text-xs text-gray-500",children:["(",t.reviews??0,")"]})]}),L.jsxs("div",{className:"flex items-end justify-between pt-1",children:[L.jsxs("div",{children:[L.jsx("span",{className:"text-lg font-semibold text-primary",children:Xn(t.price)}),t.originalPrice!=null&&L.jsx("span",{className:"ml-2 text-xs text-gray-500 line-through",children:Xn(t.originalPrice)})]}),L.jsx("button",{type:"button",onClick:()=>e(t),className:"rounded-full border border-primary/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary transition hover:bg-primary hover:text-black",id:`add-to-cart-${t.id}`,children:"+ Cart"})]})]})]})}const Og=[{id:1,name:"Wireless Noise-Cancelling Headphones",price:7999,originalPrice:12999,discount:38,rating:5,reviews:2341,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",category:"Electronics"},{id:2,name:"Mechanical Gaming Keyboard RGB",price:5499,originalPrice:8999,discount:39,rating:4,reviews:1876,image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",category:"Electronics"},{id:3,name:"Smart Watch Fitness Tracker",price:5999,originalPrice:9999,discount:40,rating:4,reviews:987,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",category:"Wearables"},{id:4,name:"Portable Bluetooth Speaker",price:3999,originalPrice:6999,discount:43,rating:5,reviews:3210,image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",category:"Electronics"},{id:5,name:"USB-C Hub 7-in-1 Adapter",price:2499,originalPrice:4499,discount:44,rating:4,reviews:654,image:"https://images.unsplash.com/photo-1625948515291-69613efd103f?w=600&q=80",category:"Accessories"},{id:6,name:"Laptop Stand Adjustable Aluminium",price:3499,originalPrice:5499,discount:36,rating:5,reviews:1123,image:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80",category:"Accessories"},{id:7,name:"Webcam 4K Ultra HD with Mic",price:8999,originalPrice:13999,discount:36,rating:4,reviews:789,image:"https://images.unsplash.com/photo-1587826080692-f439cd35b70a?w=600&q=80",category:"Electronics"},{id:8,name:"Ergonomic Wireless Mouse",price:3999,originalPrice:6499,discount:38,rating:5,reviews:2098,image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&q=80",category:"Accessories"}],Xb=["All","Electronics","Wearables","Accessories"];function qb(){const[t,e]=re.useState([]),[n,i]=re.useState([]),[r,s]=re.useState("All"),[o,a]=re.useState(!0);re.useEffect(()=>{zb().then(c=>e(c.data)).catch(()=>e(Og)).finally(()=>a(!1))},[]),re.useEffect(()=>{i(r==="All"?t:t.filter(c=>c.category===r))},[r,t]);const l=t[0]||Og[0];return L.jsxs("div",{className:"fade-in",children:[L.jsxs("section",{className:"relative px-6 pb-16 pt-36 md:pt-44",children:[L.jsxs("div",{className:"mx-auto max-w-4xl text-center",children:[L.jsx("p",{className:"mb-4 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-primary/80",children:"All tech. One atelier."}),L.jsxs("h1",{className:"font-display text-4xl font-extralight leading-[1.05] tracking-tight text-white md:text-6xl md:leading-none",children:["Elegance is an"," ",L.jsx("span",{className:"gold-gradient-text font-display italic",children:"art form."})]}),L.jsxs("p",{className:"mx-auto mt-6 max-w-xl text-sm leading-relaxed text-gray-500 md:text-base",children:["Step into a curated gadget universe — crisp imagery, India pricing in rupees, and the same cart & checkout flow as before. Inspired by editorial storefronts like"," ",L.jsx("a",{href:"https://marvelous-league-629341-c759dd393.framer.app/",className:"text-primary/90 underline-offset-4 hover:underline",target:"_blank",rel:"noreferrer",children:"Altech"}),", refined for AURUM."]}),L.jsxs("div",{className:"mt-10 flex flex-wrap items-center justify-center gap-4",children:[L.jsx("button",{type:"button",onClick:()=>{var c;return(c=document.getElementById("products"))==null?void 0:c.scrollIntoView({behavior:"smooth"})},className:"btn-primary px-10",children:"Enter showroom"}),L.jsx(qt,{to:"/cart",className:"btn-outline px-8 text-xs uppercase tracking-widest",children:"Your bag"})]})]}),l&&L.jsxs("div",{className:"mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-12",children:[L.jsxs("div",{className:"glass card-hover flex min-h-[280px] flex-col justify-between rounded-[2rem] p-8 md:col-span-8",children:[L.jsxs("div",{children:[L.jsx("p",{className:"text-[0.65rem] uppercase tracking-[0.25em] text-primary",children:"Featured"}),L.jsx("h2",{className:"mt-2 font-display text-2xl text-white md:text-3xl",children:l.name}),L.jsx("p",{className:"mt-3 max-w-md text-sm text-gray-500",children:"Premium pick from today's collection. Real product photos via Unsplash — no broken placeholders."})]}),L.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-4",children:[L.jsx("span",{className:"text-2xl font-light text-primary",children:Xn(l.price)}),l.originalPrice!=null&&L.jsx("span",{className:"text-sm text-gray-600 line-through",children:Xn(l.originalPrice)}),L.jsx(qt,{to:`/product/${l.id}`,className:"btn-primary !text-[10px]",children:"View details"})]})]}),L.jsx("div",{className:"glass relative overflow-hidden rounded-[2rem] md:col-span-4",children:L.jsx("img",{src:l.image||Ps,alt:"",className:"h-64 w-full object-cover md:h-full md:min-h-[280px]",loading:"lazy",referrerPolicy:"no-referrer"})})]})]}),L.jsx("section",{className:"mx-auto max-w-7xl px-6 pt-4",children:L.jsx("div",{className:"flex flex-wrap gap-3",children:Xb.map(c=>L.jsx("button",{type:"button",onClick:()=>s(c),className:`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all ${r===c?"bg-primary text-black":"border border-white/10 bg-white/[0.03] text-gray-400 hover:border-primary/40"}`,children:c},c))})}),L.jsxs("section",{id:"products",className:"mx-auto max-w-7xl px-6 py-12",children:[L.jsx("h2",{className:"mb-2 font-display text-2xl text-white md:text-3xl",children:r==="All"?"Curated acquisitions":r}),L.jsxs("p",{className:"mb-8 text-sm text-gray-500",children:[n.length," piece",n.length===1?"":"s"," — prices in"," ",L.jsx("span",{className:"text-primary",children:"₹ INR"})]}),o?L.jsx("div",{className:"grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4",children:[...Array(8)].map((c,u)=>L.jsx("div",{className:"glass h-80 animate-pulse rounded-[1.75rem]"},u))}):L.jsx("div",{className:"grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4",children:n.map(c=>L.jsx(jb,{product:c},c.id))})]})]})}function $b(){const{id:t}=SE(),e=Ys(),{addToCart:n}=aa(),[i,r]=re.useState(null),[s,o]=re.useState(!1),[a,l]=re.useState("");re.useEffect(()=>{Hb(t).then(d=>{r(d.data),l(d.data.image)}).catch(()=>{r({id:Number(t),name:"AURUM Signature Device",price:5999,originalPrice:8999,discount:33,rating:4,reviews:512,image:Ps,description:"Premium device placeholder — start the backend to load the full catalogue with Unsplash imagery.",category:"Electronics"}),l(Ps)})},[t]);const c=()=>{i&&(n(i),o(!0),setTimeout(()=>o(!1),1500))};if(!i)return L.jsx("div",{className:"flex h-64 items-center justify-center pt-24",children:L.jsx("div",{className:"h-12 w-12 animate-spin rounded-full border-2 border-primary border-t-transparent"})});const u="★".repeat(Math.round(i.rating))+"☆".repeat(5-Math.round(i.rating));return L.jsxs("div",{className:"fade-in mx-auto max-w-5xl px-6 pb-16 pt-28",children:[L.jsx("button",{type:"button",onClick:()=>e(-1),className:"mb-8 flex items-center gap-2 text-sm text-gray-500 transition hover:text-primary",children:"← Back to showroom"}),L.jsxs("div",{className:"grid gap-12 md:grid-cols-2",children:[L.jsx("div",{className:"glass flex items-center justify-center overflow-hidden rounded-[2rem] p-4",children:L.jsx("img",{src:a,alt:i.name,loading:"lazy",referrerPolicy:"no-referrer",onError:()=>l(Ps),className:"max-h-96 w-full object-contain"})}),L.jsxs("div",{className:"space-y-5",children:[L.jsx("span",{className:"inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary",children:i.category}),L.jsx("h1",{className:"font-display text-3xl font-normal leading-tight text-white md:text-4xl",children:i.name}),L.jsxs("div",{className:"flex items-center gap-3",children:[L.jsx("span",{className:"text-primary",children:u}),L.jsxs("span",{className:"text-sm text-gray-500",children:["(",i.reviews," reviews)"]})]}),L.jsxs("div",{className:"flex flex-wrap items-end gap-3",children:[L.jsx("span",{className:"font-display text-4xl text-primary",children:Xn(i.price)}),i.originalPrice!=null&&L.jsxs(L.Fragment,{children:[L.jsx("span",{className:"text-lg text-gray-600 line-through",children:Xn(i.originalPrice)}),L.jsxs("span",{className:"rounded-md bg-emerald-500/15 px-2 py-0.5 text-xs text-emerald-400",children:["Save ",i.discount,"%"]})]})]}),L.jsx("p",{className:"text-sm leading-relaxed text-gray-500",children:i.description}),L.jsxs("div",{className:"flex flex-col gap-3 pt-2 sm:flex-row",children:[L.jsx("button",{type:"button",onClick:c,className:`flex-1 rounded-full py-3.5 text-xs font-bold uppercase tracking-[0.2em] transition ${s?"bg-emerald-600 text-white":"btn-primary !w-full border-primary text-center"}`,children:s?"Added to bag":"Add to bag"}),L.jsx("button",{type:"button",onClick:()=>{n(i),e("/cart")},className:"flex-1 rounded-full border border-primary/50 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-primary transition hover:bg-primary/10",children:"Buy now"})]}),L.jsx("div",{className:"grid grid-cols-3 gap-3 pt-4",children:[["🚚","Pan-India shipping"],["🔄","Easy returns"],["🔒","Secure checkout"]].map(([d,h])=>L.jsxs("div",{className:"glass rounded-xl p-3 text-center text-[10px] uppercase tracking-wider text-gray-500",children:[L.jsx("div",{className:"mb-1 text-lg",children:d}),h]},h))})]})]})]})}function Yb({item:t}){const{updateQuantity:e,removeFromCart:n}=aa(),[i,r]=re.useState(t.image),s=t.price*t.quantity;return L.jsxs("div",{className:"glass card-hover flex flex-wrap items-center gap-4 rounded-2xl p-4 md:flex-nowrap",children:[L.jsx("div",{className:"flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black/40",children:L.jsx("img",{src:i,alt:t.name,loading:"lazy",referrerPolicy:"no-referrer",onError:()=>r(Ps),className:"h-full w-full object-cover"})}),L.jsxs("div",{className:"min-w-0 flex-1",children:[L.jsx("h4",{className:"truncate text-sm font-medium text-white",children:t.name}),L.jsx("p",{className:"mt-1 text-sm font-semibold text-primary",children:Xn(t.price)})]}),L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("button",{type:"button",onClick:()=>e(t.id,t.quantity-1),className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary hover:text-black","aria-label":"Decrease quantity",children:"−"}),L.jsx("span",{className:"w-6 text-center font-semibold text-white",children:t.quantity}),L.jsx("button",{type:"button",onClick:()=>e(t.id,t.quantity+1),className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary hover:text-black","aria-label":"Increase quantity",children:"+"})]}),L.jsxs("div",{className:"w-full text-right md:w-28",children:[L.jsx("p",{className:"font-semibold text-white",children:Xn(s)}),L.jsx("button",{type:"button",onClick:()=>n(t.id),className:"mt-1 text-xs text-red-400/90 transition hover:text-red-300",children:"Remove"})]})]})}const Hu=.18;function Kb(){const{cartItems:t,cartTotal:e,clearCart:n}=aa(),i=Ys(),r=Math.round(e*Hu),s=e+r,o=async()=>{try{await Wb({items:t,total:s}),n(),alert("Order placed successfully!"),i("/")}catch{n(),alert("Order placed! (Demo mode)"),i("/")}};return t.length===0?L.jsxs("div",{className:"fade-in flex flex-col items-center justify-center px-6 py-32 text-center",children:[L.jsx("p",{className:"mb-4 font-display text-5xl text-primary/40",children:"◇"}),L.jsx("h2",{className:"mb-3 font-display text-2xl text-white",children:"Your bag is empty"}),L.jsx("p",{className:"mb-10 max-w-sm text-sm text-gray-500",children:"Discover curated tech in the showroom — all prices in Indian Rupees (₹)."}),L.jsx("button",{type:"button",onClick:()=>i("/"),className:"btn-primary px-10",children:"Enter showroom"})]}):L.jsxs("div",{className:"fade-in mx-auto max-w-5xl px-6 pb-20 pt-28",children:[L.jsxs("h1",{className:"mb-2 font-display text-3xl text-white",children:["Your curated bag",L.jsxs("span",{className:"ml-3 text-base font-normal text-gray-500",children:["(",t.length," ",t.length===1?"piece":"pieces",")"]})]}),L.jsxs("p",{className:"mb-10 text-sm text-gray-500",children:["Totals in ₹ incl. illustrative GST (",Hu*100,"%)"]}),L.jsxs("div",{className:"grid gap-8 lg:grid-cols-3",children:[L.jsx("div",{className:"space-y-4 lg:col-span-2",children:t.map(a=>L.jsx(Yb,{item:a},a.id))}),L.jsxs("div",{className:"glass h-fit space-y-4 rounded-[2rem] p-8",children:[L.jsx("h3",{className:"font-display text-lg text-white",children:"Summary"}),L.jsxs("div",{className:"space-y-2 text-sm",children:[L.jsxs("div",{className:"flex justify-between text-gray-500",children:[L.jsx("span",{children:"Subtotal"}),L.jsx("span",{children:Xn(e)})]}),L.jsxs("div",{className:"flex justify-between text-gray-500",children:[L.jsx("span",{children:"Shipping"}),L.jsx("span",{className:"text-emerald-400/90",children:"Complimentary"})]}),L.jsxs("div",{className:"flex justify-between text-gray-500",children:[L.jsxs("span",{children:["GST (",Hu*100,"%)"]}),L.jsx("span",{children:Xn(r)})]})]}),L.jsxs("div",{className:"flex justify-between border-t border-white/10 pt-4",children:[L.jsx("span",{className:"font-medium text-white",children:"Total"}),L.jsx("span",{className:"font-display text-xl text-primary",children:Xn(s)})]}),L.jsx("button",{type:"button",onClick:o,className:"btn-primary mt-2 w-full !tracking-[0.15em]",id:"checkout-btn",children:"Proceed to checkout"}),L.jsx("button",{type:"button",onClick:()=>i("/"),className:"w-full text-center text-sm text-gray-500 transition hover:text-primary",children:"← Continue shopping"})]})]})]})}function Zb(){const t=Ys(),[e,n]=re.useState({email:"",password:""}),[i,r]=re.useState(""),[s,o]=re.useState(!1),a=c=>n(u=>({...u,[c.target.name]:c.target.value})),l=async c=>{c.preventDefault(),o(!0),r("");try{const u=await Vb(e);localStorage.setItem("token",u.data.token),localStorage.setItem("user",JSON.stringify(u.data.user)),t("/")}catch{localStorage.setItem("token","demo-token-123"),localStorage.setItem("user",JSON.stringify({name:"Demo User",email:e.email})),t("/")}finally{o(!1)}};return L.jsx("div",{className:"fade-in flex min-h-[80vh] items-center justify-center px-4 pb-16 pt-28",children:L.jsxs("div",{className:"glass w-full max-w-md rounded-[2rem] p-8",children:[L.jsxs("div",{className:"mb-8 text-center",children:[L.jsx("p",{className:"mb-2 font-display text-xs uppercase tracking-[0.35em] text-primary",children:"AURUM"}),L.jsx("h1",{className:"font-display text-3xl font-normal text-white",children:"Welcome back"}),L.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Sign in to your account"})]}),i&&L.jsx("div",{className:`bg-red-500/10 border border-red-500/30 text-red-400
                          text-sm px-4 py-3 rounded-lg mb-6`,children:i}),L.jsxs("form",{onSubmit:l,className:"space-y-4",children:[L.jsxs("div",{children:[L.jsx("label",{className:"block text-sm text-gray-400 mb-1.5",children:"Email"}),L.jsx("input",{id:"login-email",name:"email",type:"email",required:!0,value:e.email,onChange:a,placeholder:"you@example.com",className:`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                         text-white text-sm placeholder-gray-500
                         focus:outline-none focus:border-primary transition`})]}),L.jsxs("div",{children:[L.jsx("label",{className:"block text-sm text-gray-400 mb-1.5",children:"Password"}),L.jsx("input",{id:"login-password",name:"password",type:"password",required:!0,value:e.password,onChange:a,placeholder:"••••••••",className:`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                         text-white text-sm placeholder-gray-500
                         focus:outline-none focus:border-primary transition`})]}),L.jsx("button",{id:"login-submit",type:"submit",disabled:s,className:"w-full btn-primary py-3 mt-2 disabled:opacity-50 disabled:cursor-not-allowed",children:s?"Signing in...":"Sign In"})]}),L.jsxs("p",{className:"text-center text-gray-500 text-sm mt-6",children:["Don't have an account?"," ",L.jsx(qt,{to:"/register",className:"text-primary hover:underline",children:"Register"})]}),L.jsx("p",{className:"text-center text-gray-600 text-xs mt-4",children:"Demo: any email & password works"})]})})}function Jb(){const t=Ys(),[e,n]=re.useState({name:"",email:"",password:"",confirm:""}),[i,r]=re.useState(""),[s,o]=re.useState(!1),a=u=>n(d=>({...d,[u.target.name]:u.target.value})),l=async u=>{if(u.preventDefault(),e.password!==e.confirm){r("Passwords do not match.");return}if(e.password.length<6){r("Password must be at least 6 characters.");return}o(!0),r("");try{const d=await Gb({name:e.name,email:e.email,password:e.password});localStorage.setItem("token",d.data.token),t("/")}catch{localStorage.setItem("token","demo-token-123"),t("/")}finally{o(!1)}},c=[{id:"reg-name",name:"name",label:"Full Name",type:"text",placeholder:"John Doe"},{id:"reg-email",name:"email",label:"Email",type:"email",placeholder:"you@example.com"},{id:"reg-password",name:"password",label:"Password",type:"password",placeholder:"••••••••"},{id:"reg-confirm",name:"confirm",label:"Confirm Password",type:"password",placeholder:"••••••••"}];return L.jsx("div",{className:"fade-in flex min-h-[80vh] items-center justify-center px-4 pb-16 pt-28",children:L.jsxs("div",{className:"glass w-full max-w-md rounded-[2rem] p-8",children:[L.jsxs("div",{className:"mb-8 text-center",children:[L.jsx("p",{className:"mb-2 font-display text-xs uppercase tracking-[0.35em] text-primary",children:"AURUM"}),L.jsx("h1",{className:"font-display text-3xl font-normal text-white",children:"Create account"}),L.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Join the showroom"})]}),i&&L.jsx("div",{className:`bg-red-500/10 border border-red-500/30 text-red-400
                          text-sm px-4 py-3 rounded-lg mb-6`,children:i}),L.jsxs("form",{onSubmit:l,className:"space-y-4",children:[c.map(u=>L.jsxs("div",{children:[L.jsx("label",{className:"block text-sm text-gray-400 mb-1.5",children:u.label}),L.jsx("input",{id:u.id,name:u.name,type:u.type,required:!0,value:e[u.name],onChange:a,placeholder:u.placeholder,className:`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                           text-white text-sm placeholder-gray-500
                           focus:outline-none focus:border-primary transition`})]},u.name)),L.jsx("button",{id:"register-submit",type:"submit",disabled:s,className:"w-full btn-primary py-3 mt-2 disabled:opacity-50",children:s?"Creating account...":"Create Account"})]}),L.jsxs("p",{className:"text-center text-gray-500 text-sm mt-6",children:["Already have an account?"," ",L.jsx(qt,{to:"/login",className:"text-primary hover:underline",children:"Sign In"})]})]})})}function Qb(){return L.jsx($E,{children:L.jsxs(WE,{children:[L.jsx(iC,{}),L.jsxs("div",{className:"relative z-10 flex min-h-screen flex-col",children:[L.jsx(rC,{}),L.jsx("main",{className:"flex-1",children:L.jsxs(OE,{children:[L.jsx(as,{path:"/",element:L.jsx(qb,{})}),L.jsx(as,{path:"/product/:id",element:L.jsx($b,{})}),L.jsx(as,{path:"/cart",element:L.jsx(Kb,{})}),L.jsx(as,{path:"/login",element:L.jsx(Zb,{})}),L.jsx(as,{path:"/register",element:L.jsx(Jb,{})})]})}),L.jsx(sC,{}),L.jsx(oC,{})]})]})})}Vu.createRoot(document.getElementById("root")).render(L.jsx($g.StrictMode,{children:L.jsx(Qb,{})}));
