/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

function playVideo(stream, idVideo) {
    const video = document.getElementById(idVideo);
    video.srcObject = stream;
    video.onloadedmetadata = function() {
        video.play();
    }
}
module.exports = playVideo;

/***/ }),
/* 2 */
/***/ ((module) => {

function openStream(cb) {
    navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        })
        .then(stream => cb(stream))
        .catch(err => console.log(err))
}
module.exports = openStream;

/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uid": () => (/* binding */ uid)
/* harmony export */ });
var IDX=256, HEX=[], SIZE=256, BUFFER;
while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);

function uid(len) {
	var i=0, tmp=(len || 11);
	if (!BUFFER || ((IDX + tmp) > SIZE*2)) {
		for (BUFFER='',IDX=0; i < SIZE; i++) {
			BUFFER += HEX[Math.random() * 256 | 0];
		}
	}

	return BUFFER.substring(IDX, IDX++ + tmp);
}


/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u=undefined;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if( true&&"string"==typeof t)return __webpack_require__(5)(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]); true?module.exports=l:0}if(parcelRequire=f,i)throw i;return f}({"EgBh":[function(require,module,exports) {
var e={};e.useBlobBuilder=function(){try{return new Blob([]),!1}catch(e){return!0}}(),e.useArrayBufferView=!e.useBlobBuilder&&function(){try{return 0===new Blob([new Uint8Array([])]).size}catch(e){return!0}}(),module.exports.binaryFeatures=e;var r=module.exports.BlobBuilder;function t(){this._pieces=[],this._parts=[]}"undefined"!=typeof window&&(r=module.exports.BlobBuilder=window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder||window.BlobBuilder),t.prototype.append=function(e){"number"==typeof e?this._pieces.push(e):(this.flush(),this._parts.push(e))},t.prototype.flush=function(){if(this._pieces.length>0){var r=new Uint8Array(this._pieces);e.useArrayBufferView||(r=r.buffer),this._parts.push(r),this._pieces=[]}},t.prototype.getBuffer=function(){if(this.flush(),e.useBlobBuilder){for(var t=new r,i=0,u=this._parts.length;i<u;i++)t.append(this._parts[i]);return t.getBlob()}return new Blob(this._parts)},module.exports.BufferBuilder=t;
},{}],"kdPp":[function(require,module,exports) {
var t=require("./bufferbuilder").BufferBuilder,e=require("./bufferbuilder").binaryFeatures,i={unpack:function(t){return new r(t).unpack()},pack:function(t){var e=new n;return e.pack(t),e.getBuffer()}};function r(t){this.index=0,this.dataBuffer=t,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}function n(){this.bufferBuilder=new t}function u(t){var e=t.charCodeAt(0);return e<=2047?"00":e<=65535?"000":e<=2097151?"0000":e<=67108863?"00000":"000000"}function a(t){return t.length>600?new Blob([t]).size:t.replace(/[^\u0000-\u007F]/g,u).length}module.exports=i,r.prototype.unpack=function(){var t,e=this.unpack_uint8();if(e<128)return e;if((224^e)<32)return(224^e)-32;if((t=160^e)<=15)return this.unpack_raw(t);if((t=176^e)<=15)return this.unpack_string(t);if((t=144^e)<=15)return this.unpack_array(t);if((t=128^e)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:case 213:case 214:case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}},r.prototype.unpack_uint8=function(){var t=255&this.dataView[this.index];return this.index++,t},r.prototype.unpack_uint16=function(){var t=this.read(2),e=256*(255&t[0])+(255&t[1]);return this.index+=2,e},r.prototype.unpack_uint32=function(){var t=this.read(4),e=256*(256*(256*t[0]+t[1])+t[2])+t[3];return this.index+=4,e},r.prototype.unpack_uint64=function(){var t=this.read(8),e=256*(256*(256*(256*(256*(256*(256*t[0]+t[1])+t[2])+t[3])+t[4])+t[5])+t[6])+t[7];return this.index+=8,e},r.prototype.unpack_int8=function(){var t=this.unpack_uint8();return t<128?t:t-256},r.prototype.unpack_int16=function(){var t=this.unpack_uint16();return t<32768?t:t-65536},r.prototype.unpack_int32=function(){var t=this.unpack_uint32();return t<Math.pow(2,31)?t:t-Math.pow(2,32)},r.prototype.unpack_int64=function(){var t=this.unpack_uint64();return t<Math.pow(2,63)?t:t-Math.pow(2,64)},r.prototype.unpack_raw=function(t){if(this.length<this.index+t)throw new Error("BinaryPackFailure: index is out of range "+this.index+" "+t+" "+this.length);var e=this.dataBuffer.slice(this.index,this.index+t);return this.index+=t,e},r.prototype.unpack_string=function(t){for(var e,i,r=this.read(t),n=0,u="";n<t;)(e=r[n])<128?(u+=String.fromCharCode(e),n++):(192^e)<32?(i=(192^e)<<6|63&r[n+1],u+=String.fromCharCode(i),n+=2):(i=(15&e)<<12|(63&r[n+1])<<6|63&r[n+2],u+=String.fromCharCode(i),n+=3);return this.index+=t,u},r.prototype.unpack_array=function(t){for(var e=new Array(t),i=0;i<t;i++)e[i]=this.unpack();return e},r.prototype.unpack_map=function(t){for(var e={},i=0;i<t;i++){var r=this.unpack(),n=this.unpack();e[r]=n}return e},r.prototype.unpack_float=function(){var t=this.unpack_uint32(),e=(t>>23&255)-127;return(0===t>>31?1:-1)*(8388607&t|8388608)*Math.pow(2,e-23)},r.prototype.unpack_double=function(){var t=this.unpack_uint32(),e=this.unpack_uint32(),i=(t>>20&2047)-1023;return(0===t>>31?1:-1)*((1048575&t|1048576)*Math.pow(2,i-20)+e*Math.pow(2,i-52))},r.prototype.read=function(t){var e=this.index;if(e+t<=this.length)return this.dataView.subarray(e,e+t);throw new Error("BinaryPackFailure: read index out of range")},n.prototype.getBuffer=function(){return this.bufferBuilder.getBuffer()},n.prototype.pack=function(t){var i=typeof t;if("string"===i)this.pack_string(t);else if("number"===i)Math.floor(t)===t?this.pack_integer(t):this.pack_double(t);else if("boolean"===i)!0===t?this.bufferBuilder.append(195):!1===t&&this.bufferBuilder.append(194);else if("undefined"===i)this.bufferBuilder.append(192);else{if("object"!==i)throw new Error('Type "'+i+'" not yet supported');if(null===t)this.bufferBuilder.append(192);else{var r=t.constructor;if(r==Array)this.pack_array(t);else if(r==Blob||r==File||t instanceof Blob||t instanceof File)this.pack_bin(t);else if(r==ArrayBuffer)e.useArrayBufferView?this.pack_bin(new Uint8Array(t)):this.pack_bin(t);else if("BYTES_PER_ELEMENT"in t)e.useArrayBufferView?this.pack_bin(new Uint8Array(t.buffer)):this.pack_bin(t.buffer);else if(r==Object||r.toString().startsWith("class"))this.pack_object(t);else if(r==Date)this.pack_string(t.toString());else{if("function"!=typeof t.toBinaryPack)throw new Error('Type "'+r.toString()+'" not yet supported');this.bufferBuilder.append(t.toBinaryPack())}}}this.bufferBuilder.flush()},n.prototype.pack_bin=function(t){var e=t.length||t.byteLength||t.size;if(e<=15)this.pack_uint8(160+e);else if(e<=65535)this.bufferBuilder.append(218),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(219),this.pack_uint32(e)}this.bufferBuilder.append(t)},n.prototype.pack_string=function(t){var e=a(t);if(e<=15)this.pack_uint8(176+e);else if(e<=65535)this.bufferBuilder.append(216),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(217),this.pack_uint32(e)}this.bufferBuilder.append(t)},n.prototype.pack_array=function(t){var e=t.length;if(e<=15)this.pack_uint8(144+e);else if(e<=65535)this.bufferBuilder.append(220),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(221),this.pack_uint32(e)}for(var i=0;i<e;i++)this.pack(t[i])},n.prototype.pack_integer=function(t){if(t>=-32&&t<=127)this.bufferBuilder.append(255&t);else if(t>=0&&t<=255)this.bufferBuilder.append(204),this.pack_uint8(t);else if(t>=-128&&t<=127)this.bufferBuilder.append(208),this.pack_int8(t);else if(t>=0&&t<=65535)this.bufferBuilder.append(205),this.pack_uint16(t);else if(t>=-32768&&t<=32767)this.bufferBuilder.append(209),this.pack_int16(t);else if(t>=0&&t<=4294967295)this.bufferBuilder.append(206),this.pack_uint32(t);else if(t>=-2147483648&&t<=2147483647)this.bufferBuilder.append(210),this.pack_int32(t);else if(t>=-0x8000000000000000&&t<=0x8000000000000000)this.bufferBuilder.append(211),this.pack_int64(t);else{if(!(t>=0&&t<=0x10000000000000000))throw new Error("Invalid integer");this.bufferBuilder.append(207),this.pack_uint64(t)}},n.prototype.pack_double=function(t){var e=0;t<0&&(e=1,t=-t);var i=Math.floor(Math.log(t)/Math.LN2),r=t/Math.pow(2,i)-1,n=Math.floor(r*Math.pow(2,52)),u=Math.pow(2,32),a=e<<31|i+1023<<20|n/u&1048575,p=n%u;this.bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(p)},n.prototype.pack_object=function(t){var e=Object.keys(t).length;if(e<=15)this.pack_uint8(128+e);else if(e<=65535)this.bufferBuilder.append(222),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(223),this.pack_uint32(e)}for(var i in t)t.hasOwnProperty(i)&&(this.pack(i),this.pack(t[i]))},n.prototype.pack_uint8=function(t){this.bufferBuilder.append(t)},n.prototype.pack_uint16=function(t){this.bufferBuilder.append(t>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_uint32=function(t){var e=4294967295&t;this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e)},n.prototype.pack_uint64=function(t){var e=t/Math.pow(2,32),i=t%Math.pow(2,32);this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e),this.bufferBuilder.append((4278190080&i)>>>24),this.bufferBuilder.append((16711680&i)>>>16),this.bufferBuilder.append((65280&i)>>>8),this.bufferBuilder.append(255&i)},n.prototype.pack_int8=function(t){this.bufferBuilder.append(255&t)},n.prototype.pack_int16=function(t){this.bufferBuilder.append((65280&t)>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_int32=function(t){this.bufferBuilder.append(t>>>24&255),this.bufferBuilder.append((16711680&t)>>>16),this.bufferBuilder.append((65280&t)>>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_int64=function(t){var e=Math.floor(t/Math.pow(2,32)),i=t%Math.pow(2,32);this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e),this.bufferBuilder.append((4278190080&i)>>>24),this.bufferBuilder.append((16711680&i)>>>16),this.bufferBuilder.append((65280&i)>>>8),this.bufferBuilder.append(255&i)};
},{"./bufferbuilder":"EgBh"}],"iSxC":[function(require,module,exports) {
"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.extractVersion=o,exports.wrapPeerConnectionEvent=i,exports.disableLog=s,exports.disableWarnings=a,exports.log=u,exports.deprecated=c,exports.detectBrowser=p,exports.compactObject=d,exports.walkStats=l,exports.filterStats=b;var n=!0,r=!0;function o(e,t,n){var r=e.match(t);return r&&r.length>=n&&parseInt(r[n],10)}function i(e,t,n){if(e.RTCPeerConnection){var r=e.RTCPeerConnection.prototype,o=r.addEventListener;r.addEventListener=function(e,r){if(e!==t)return o.apply(this,arguments);var i=function(e){var t=n(e);t&&r(t)};return this._eventMap=this._eventMap||{},this._eventMap[r]=i,o.apply(this,[e,i])};var i=r.removeEventListener;r.removeEventListener=function(e,n){if(e!==t||!this._eventMap||!this._eventMap[n])return i.apply(this,arguments);var r=this._eventMap[n];return delete this._eventMap[n],i.apply(this,[e,r])},Object.defineProperty(r,"on"+t,{get:function(){return this["_on"+t]},set:function(e){this["_on"+t]&&(this.removeEventListener(t,this["_on"+t]),delete this["_on"+t]),e&&this.addEventListener(t,this["_on"+t]=e)},enumerable:!0,configurable:!0})}}function s(e){return"boolean"!=typeof e?new Error("Argument type: "+t(e)+". Please use a boolean."):(n=e,e?"adapter.js logging disabled":"adapter.js logging enabled")}function a(e){return"boolean"!=typeof e?new Error("Argument type: "+t(e)+". Please use a boolean."):(r=!e,"adapter.js deprecation warnings "+(e?"disabled":"enabled"))}function u(){if("object"===("undefined"==typeof window?"undefined":t(window))){if(n)return;"undefined"!=typeof console&&"function"==typeof console.log&&console.log.apply(console,arguments)}}function c(e,t){r&&console.warn(e+" is deprecated, please use "+t+" instead.")}function p(e){var{navigator:t}=e,n={browser:null,version:null};if(void 0===e||!e.navigator)return n.browser="Not a browser.",n;if(t.mozGetUserMedia)n.browser="firefox",n.version=o(t.userAgent,/Firefox\/(\d+)\./,1);else if(t.webkitGetUserMedia||!1===e.isSecureContext&&e.webkitRTCPeerConnection&&!e.RTCIceGatherer)n.browser="chrome",n.version=o(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(t.mediaDevices&&t.userAgent.match(/Edge\/(\d+).(\d+)$/))n.browser="edge",n.version=o(t.userAgent,/Edge\/(\d+).(\d+)$/,2);else{if(!e.RTCPeerConnection||!t.userAgent.match(/AppleWebKit\/(\d+)\./))return n.browser="Not a supported browser.",n;n.browser="safari",n.version=o(t.userAgent,/AppleWebKit\/(\d+)\./,1),n.supportsUnifiedPlan=e.RTCRtpTransceiver&&"currentDirection"in e.RTCRtpTransceiver.prototype}return n}function f(e){return"[object Object]"===Object.prototype.toString.call(e)}function d(t){return f(t)?Object.keys(t).reduce(function(n,r){var o=f(t[r]),i=o?d(t[r]):t[r],s=o&&!Object.keys(i).length;return void 0===i||s?n:Object.assign(n,e({},r,i))},{}):t}function l(e,t,n){t&&!n.has(t.id)&&(n.set(t.id,t),Object.keys(t).forEach(function(r){r.endsWith("Id")?l(e,e.get(t[r]),n):r.endsWith("Ids")&&t[r].forEach(function(t){l(e,e.get(t),n)})}))}function b(e,t,n){var r=n?"outbound-rtp":"inbound-rtp",o=new Map;if(null===t)return o;var i=[];return e.forEach(function(e){"track"===e.type&&e.trackIdentifier===t.id&&i.push(e)}),i.forEach(function(t){e.forEach(function(n){n.type===r&&n.trackId===t.id&&l(e,n,o)})}),o}
},{}],"s6SN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetUserMedia=i;var e=t(require("../utils.js"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function t(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,t&&t.set(e,o),o}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=e.log;function i(r){var t=r&&r.navigator;if(t.mediaDevices){var i=e.detectBrowser(r),a=function(e){if("object"!==o(e)||e.mandatory||e.optional)return e;var r={};return Object.keys(e).forEach(function(t){if("require"!==t&&"advanced"!==t&&"mediaSource"!==t){var n="object"===o(e[t])?e[t]:{ideal:e[t]};void 0!==n.exact&&"number"==typeof n.exact&&(n.min=n.max=n.exact);var i=function(e,r){return e?e+r.charAt(0).toUpperCase()+r.slice(1):"deviceId"===r?"sourceId":r};if(void 0!==n.ideal){r.optional=r.optional||[];var a={};"number"==typeof n.ideal?(a[i("min",t)]=n.ideal,r.optional.push(a),(a={})[i("max",t)]=n.ideal,r.optional.push(a)):(a[i("",t)]=n.ideal,r.optional.push(a))}void 0!==n.exact&&"number"!=typeof n.exact?(r.mandatory=r.mandatory||{},r.mandatory[i("",t)]=n.exact):["min","max"].forEach(function(e){void 0!==n[e]&&(r.mandatory=r.mandatory||{},r.mandatory[i(e,t)]=n[e])})}}),e.advanced&&(r.optional=(r.optional||[]).concat(e.advanced)),r},c=function(e,r){if(i.version>=61)return r(e);if((e=JSON.parse(JSON.stringify(e)))&&"object"===o(e.audio)){var c=function(e,r,t){r in e&&!(t in e)&&(e[t]=e[r],delete e[r])};c((e=JSON.parse(JSON.stringify(e))).audio,"autoGainControl","googAutoGainControl"),c(e.audio,"noiseSuppression","googNoiseSuppression"),e.audio=a(e.audio)}if(e&&"object"===o(e.video)){var d=e.video.facingMode;d=d&&("object"===o(d)?d:{ideal:d});var u,s=i.version<66;if(d&&("user"===d.exact||"environment"===d.exact||"user"===d.ideal||"environment"===d.ideal)&&(!t.mediaDevices.getSupportedConstraints||!t.mediaDevices.getSupportedConstraints().facingMode||s))if(delete e.video.facingMode,"environment"===d.exact||"environment"===d.ideal?u=["back","rear"]:"user"!==d.exact&&"user"!==d.ideal||(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(function(t){var o=(t=t.filter(function(e){return"videoinput"===e.kind})).find(function(e){return u.some(function(r){return e.label.toLowerCase().includes(r)})});return!o&&t.length&&u.includes("back")&&(o=t[t.length-1]),o&&(e.video.deviceId=d.exact?{exact:o.deviceId}:{ideal:o.deviceId}),e.video=a(e.video),n("chrome: "+JSON.stringify(e)),r(e)});e.video=a(e.video)}return n("chrome: "+JSON.stringify(e)),r(e)},d=function(e){return i.version>=64?e:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[e.name]||e.name,message:e.message,constraint:e.constraint||e.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}};if(t.getUserMedia=function(e,r,o){c(e,function(e){t.webkitGetUserMedia(e,r,function(e){o&&o(d(e))})})}.bind(t),t.mediaDevices.getUserMedia){var u=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(e){return c(e,function(e){return u(e).then(function(r){if(e.audio&&!r.getAudioTracks().length||e.video&&!r.getVideoTracks().length)throw r.getTracks().forEach(function(e){e.stop()}),new DOMException("","NotFoundError");return r},function(e){return Promise.reject(d(e))})})}}}}
},{"../utils.js":"iSxC"}],"VHa8":[function(require,module,exports) {
"use strict";function e(e,i){e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||e.navigator.mediaDevices&&("function"==typeof i?e.navigator.mediaDevices.getDisplayMedia=function(a){return i(a).then(function(i){var t=a.video&&a.video.width,o=a.video&&a.video.height,d=a.video&&a.video.frameRate;return a.video={mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:i,maxFrameRate:d||3}},t&&(a.video.mandatory.maxWidth=t),o&&(a.video.mandatory.maxHeight=o),e.navigator.mediaDevices.getUserMedia(a)})}:console.error("shimGetDisplayMedia: getSourceId argument is not a function"))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetDisplayMedia=e;
},{}],"uI5X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimMediaStream=a,exports.shimOnTrack=c,exports.shimGetSendersWithDtmf=p,exports.shimGetStats=d,exports.shimSenderReceiverGetStats=h,exports.shimAddTrackRemoveTrackWithNative=f,exports.shimAddTrackRemoveTrack=m,exports.shimPeerConnection=u,exports.fixNegotiationNeeded=l,Object.defineProperty(exports,"shimGetUserMedia",{enumerable:!0,get:function(){return t.shimGetUserMedia}}),Object.defineProperty(exports,"shimGetDisplayMedia",{enumerable:!0,get:function(){return r.shimGetDisplayMedia}});var e=i(require("../utils.js")),t=require("./getusermedia"),r=require("./getdisplaymedia");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){e.MediaStream=e.MediaStream||e.webkitMediaStream}function c(t){if("object"!==s(t)||!t.RTCPeerConnection||"ontrack"in t.RTCPeerConnection.prototype)e.wrapPeerConnectionEvent(t,"track",function(e){return e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e});else{Object.defineProperty(t.RTCPeerConnection.prototype,"ontrack",{get:function(){return this._ontrack},set:function(e){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=e)},enumerable:!0,configurable:!0});var r=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(){var e=this;return this._ontrackpoly||(this._ontrackpoly=function(r){r.stream.addEventListener("addtrack",function(n){var i;i=t.RTCPeerConnection.prototype.getReceivers?e.getReceivers().find(function(e){return e.track&&e.track.id===n.track.id}):{track:n.track};var o=new Event("track");o.track=n.track,o.receiver=i,o.transceiver={receiver:i},o.streams=[r.stream],e.dispatchEvent(o)}),r.stream.getTracks().forEach(function(n){var i;i=t.RTCPeerConnection.prototype.getReceivers?e.getReceivers().find(function(e){return e.track&&e.track.id===n.id}):{track:n};var o=new Event("track");o.track=n,o.receiver=i,o.transceiver={receiver:i},o.streams=[r.stream],e.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),r.apply(this,arguments)}}}function p(e){if("object"===s(e)&&e.RTCPeerConnection&&!("getSenders"in e.RTCPeerConnection.prototype)&&"createDTMFSender"in e.RTCPeerConnection.prototype){var t=function(e,t){return{track:t,get dtmf(){return void 0===this._dtmf&&("audio"===t.kind?this._dtmf=e.createDTMFSender(t):this._dtmf=null),this._dtmf},_pc:e}};if(!e.RTCPeerConnection.prototype.getSenders){e.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};var r=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function(e,n){var i=r.apply(this,arguments);return i||(i=t(this,e),this._senders.push(i)),i};var n=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function(e){n.apply(this,arguments);var t=this._senders.indexOf(e);-1!==t&&this._senders.splice(t,1)}}var i=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(e){var r=this;this._senders=this._senders||[],i.apply(this,[e]),e.getTracks().forEach(function(e){r._senders.push(t(r,e))})};var o=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){var t=this;this._senders=this._senders||[],o.apply(this,[e]),e.getTracks().forEach(function(e){var r=t._senders.find(function(t){return t.track===e});r&&t._senders.splice(t._senders.indexOf(r),1)})}}else if("object"===s(e)&&e.RTCPeerConnection&&"getSenders"in e.RTCPeerConnection.prototype&&"createDTMFSender"in e.RTCPeerConnection.prototype&&e.RTCRtpSender&&!("dtmf"in e.RTCRtpSender.prototype)){var a=e.RTCPeerConnection.prototype.getSenders;e.RTCPeerConnection.prototype.getSenders=function(){var e=this,t=a.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t},Object.defineProperty(e.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function d(e){if(e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.getStats;e.RTCPeerConnection.prototype.getStats=function(){var e=this,[r,n,i]=arguments;if(arguments.length>0&&"function"==typeof r)return t.apply(this,arguments);if(0===t.length&&(0===arguments.length||"function"!=typeof r))return t.apply(this,[]);var o=function(e){var t={};return e.result().forEach(function(e){var r={id:e.id,timestamp:e.timestamp,type:{localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[e.type]||e.type};e.names().forEach(function(t){r[t]=e.stat(t)}),t[r.id]=r}),t},s=function(e){return new Map(Object.keys(e).map(function(t){return[t,e[t]]}))};if(arguments.length>=2){return t.apply(this,[function(e){n(s(o(e)))},r])}return new Promise(function(r,n){t.apply(e,[function(e){r(s(o(e)))},n])}).then(n,i)}}}function h(t){if("object"===s(t)&&t.RTCPeerConnection&&t.RTCRtpSender&&t.RTCRtpReceiver){if(!("getStats"in t.RTCRtpSender.prototype)){var r=t.RTCPeerConnection.prototype.getSenders;r&&(t.RTCPeerConnection.prototype.getSenders=function(){var e=this,t=r.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t});var n=t.RTCPeerConnection.prototype.addTrack;n&&(t.RTCPeerConnection.prototype.addTrack=function(){var e=n.apply(this,arguments);return e._pc=this,e}),t.RTCRtpSender.prototype.getStats=function(){var t=this;return this._pc.getStats().then(function(r){return e.filterStats(r,t.track,!0)})}}if(!("getStats"in t.RTCRtpReceiver.prototype)){var i=t.RTCPeerConnection.prototype.getReceivers;i&&(t.RTCPeerConnection.prototype.getReceivers=function(){var e=this,t=i.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t}),e.wrapPeerConnectionEvent(t,"track",function(e){return e.receiver._pc=e.srcElement,e}),t.RTCRtpReceiver.prototype.getStats=function(){var t=this;return this._pc.getStats().then(function(r){return e.filterStats(r,t.track,!1)})}}if("getStats"in t.RTCRtpSender.prototype&&"getStats"in t.RTCRtpReceiver.prototype){var o=t.RTCPeerConnection.prototype.getStats;t.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof t.MediaStreamTrack){var e,r,n,i=arguments[0];return this.getSenders().forEach(function(t){t.track===i&&(e?n=!0:e=t)}),this.getReceivers().forEach(function(e){return e.track===i&&(r?n=!0:r=e),e.track===i}),n||e&&r?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):e?e.getStats():r?r.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return o.apply(this,arguments)}}}}function f(e){e.RTCPeerConnection.prototype.getLocalStreams=function(){var e=this;return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(function(t){return e._shimmedLocalStreams[t][0]})};var t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function(e,r){if(!r)return t.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};var n=t.apply(this,arguments);return this._shimmedLocalStreams[r.id]?-1===this._shimmedLocalStreams[r.id].indexOf(n)&&this._shimmedLocalStreams[r.id].push(n):this._shimmedLocalStreams[r.id]=[r,n],n};var r=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(e){var t=this;this._shimmedLocalStreams=this._shimmedLocalStreams||{},e.getTracks().forEach(function(e){if(t.getSenders().find(function(t){return t.track===e}))throw new DOMException("Track already exists.","InvalidAccessError")});var n=this.getSenders();r.apply(this,arguments);var i=this.getSenders().filter(function(e){return-1===n.indexOf(e)});this._shimmedLocalStreams[e.id]=[e].concat(i)};var n=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[e.id],n.apply(this,arguments)};var i=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function(e){var t=this;return this._shimmedLocalStreams=this._shimmedLocalStreams||{},e&&Object.keys(this._shimmedLocalStreams).forEach(function(r){var n=t._shimmedLocalStreams[r].indexOf(e);-1!==n&&t._shimmedLocalStreams[r].splice(n,1),1===t._shimmedLocalStreams[r].length&&delete t._shimmedLocalStreams[r]}),i.apply(this,arguments)}}function m(t){if(t.RTCPeerConnection){var r=e.detectBrowser(t);if(t.RTCPeerConnection.prototype.addTrack&&r.version>=65)return f(t);var n=t.RTCPeerConnection.prototype.getLocalStreams;t.RTCPeerConnection.prototype.getLocalStreams=function(){var e=this,t=n.apply(this);return this._reverseStreams=this._reverseStreams||{},t.map(function(t){return e._reverseStreams[t.id]})};var i=t.RTCPeerConnection.prototype.addStream;t.RTCPeerConnection.prototype.addStream=function(e){var r=this;if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},e.getTracks().forEach(function(e){if(r.getSenders().find(function(t){return t.track===e}))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[e.id]){var n=new t.MediaStream(e.getTracks());this._streams[e.id]=n,this._reverseStreams[n.id]=e,e=n}i.apply(this,[e])};var s=t.RTCPeerConnection.prototype.removeStream;t.RTCPeerConnection.prototype.removeStream=function(e){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[e.id]||e]),delete this._reverseStreams[this._streams[e.id]?this._streams[e.id].id:e.id],delete this._streams[e.id]},t.RTCPeerConnection.prototype.addTrack=function(e,r){var n=this;if("closed"===this.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");var i=[].slice.call(arguments,1);if(1!==i.length||!i[0].getTracks().find(function(t){return t===e}))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(function(t){return t.track===e}))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};var o=this._streams[r.id];if(o)o.addTrack(e),Promise.resolve().then(function(){n.dispatchEvent(new Event("negotiationneeded"))});else{var s=new t.MediaStream([e]);this._streams[r.id]=s,this._reverseStreams[s.id]=r,this.addStream(s)}return this.getSenders().find(function(t){return t.track===e})},["createOffer","createAnswer"].forEach(function(e){var r=t.RTCPeerConnection.prototype[e],n=o({},e,function(){var e=this,t=arguments;return arguments.length&&"function"==typeof arguments[0]?r.apply(this,[function(r){var n=p(e,r);t[0].apply(null,[n])},function(e){t[1]&&t[1].apply(null,e)},arguments[2]]):r.apply(this,arguments).then(function(t){return p(e,t)})});t.RTCPeerConnection.prototype[e]=n[e]});var a=t.RTCPeerConnection.prototype.setLocalDescription;t.RTCPeerConnection.prototype.setLocalDescription=function(){return arguments.length&&arguments[0].type?(arguments[0]=(e=this,t=arguments[0],r=t.sdp,Object.keys(e._reverseStreams||[]).forEach(function(t){var n=e._reverseStreams[t],i=e._streams[n.id];r=r.replace(new RegExp(n.id,"g"),i.id)}),new RTCSessionDescription({type:t.type,sdp:r})),a.apply(this,arguments)):a.apply(this,arguments);var e,t,r};var c=Object.getOwnPropertyDescriptor(t.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(t.RTCPeerConnection.prototype,"localDescription",{get:function(){var e=c.get.apply(this);return""===e.type?e:p(this,e)}}),t.RTCPeerConnection.prototype.removeTrack=function(e){var t,r=this;if("closed"===this.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!e._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(e._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{},Object.keys(this._streams).forEach(function(n){r._streams[n].getTracks().find(function(t){return e.track===t})&&(t=r._streams[n])}),t&&(1===t.getTracks().length?this.removeStream(this._reverseStreams[t.id]):t.removeTrack(e.track),this.dispatchEvent(new Event("negotiationneeded")))}}function p(e,t){var r=t.sdp;return Object.keys(e._reverseStreams||[]).forEach(function(t){var n=e._reverseStreams[t],i=e._streams[n.id];r=r.replace(new RegExp(i.id,"g"),n.id)}),new RTCSessionDescription({type:t.type,sdp:r})}}function u(t){var r=e.detectBrowser(t);if(!t.RTCPeerConnection&&t.webkitRTCPeerConnection&&(t.RTCPeerConnection=t.webkitRTCPeerConnection),t.RTCPeerConnection){r.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){var r=t.RTCPeerConnection.prototype[e],n=o({},e,function(){return arguments[0]=new("addIceCandidate"===e?t.RTCIceCandidate:t.RTCSessionDescription)(arguments[0]),r.apply(this,arguments)});t.RTCPeerConnection.prototype[e]=n[e]});var n=t.RTCPeerConnection.prototype.addIceCandidate;t.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?r.version<78&&arguments[0]&&""===arguments[0].candidate?Promise.resolve():n.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())}}}function l(t){e.wrapPeerConnectionEvent(t,"negotiationneeded",function(e){if("stable"===e.target.signalingState)return e})}
},{"../utils.js":"iSxC","./getusermedia":"s6SN","./getdisplaymedia":"VHa8"}],"NZ1C":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.filterIceServers=n;var r=t(require("../utils"));function e(){if("function"!=typeof WeakMap)return null;var r=new WeakMap;return e=function(){return r},r}function t(r){if(r&&r.__esModule)return r;if(null===r||"object"!=typeof r&&"function"!=typeof r)return{default:r};var t=e();if(t&&t.has(r))return t.get(r);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in r)if(Object.prototype.hasOwnProperty.call(r,i)){var f=u?Object.getOwnPropertyDescriptor(r,i):null;f&&(f.get||f.set)?Object.defineProperty(n,i,f):n[i]=r[i]}return n.default=r,t&&t.set(r,n),n}function n(e,t){var n=!1;return(e=JSON.parse(JSON.stringify(e))).filter(function(e){if(e&&(e.urls||e.url)){var t=e.urls||e.url;e.url&&!e.urls&&r.deprecated("RTCIceServer.url","RTCIceServer.urls");var u="string"==typeof t;return u&&(t=[t]),t=t.filter(function(r){if(0===r.indexOf("stun:"))return!1;var e=r.startsWith("turn")&&!r.startsWith("turn:[")&&r.includes("transport=udp");return e&&!n?(n=!0,!0):e&&!n}),delete e.url,e.urls=u?t[0]:t,!!t.length}})}
},{"../utils":"iSxC"}],"YHvh":[function(require,module,exports) {
"use strict";var r={generateIdentifier:function(){return Math.random().toString(36).substr(2,10)}};r.localCName=r.generateIdentifier(),r.splitLines=function(r){return r.trim().split("\n").map(function(r){return r.trim()})},r.splitSections=function(r){return r.split("\nm=").map(function(r,e){return(e>0?"m="+r:r).trim()+"\r\n"})},r.getDescription=function(e){var t=r.splitSections(e);return t&&t[0]},r.getMediaSections=function(e){var t=r.splitSections(e);return t.shift(),t},r.matchPrefix=function(e,t){return r.splitLines(e).filter(function(r){return 0===r.indexOf(t)})},r.parseCandidate=function(r){for(var e,t={foundation:(e=0===r.indexOf("a=candidate:")?r.substring(12).split(" "):r.substring(10).split(" "))[0],component:parseInt(e[1],10),protocol:e[2].toLowerCase(),priority:parseInt(e[3],10),ip:e[4],address:e[4],port:parseInt(e[5],10),type:e[7]},n=8;n<e.length;n+=2)switch(e[n]){case"raddr":t.relatedAddress=e[n+1];break;case"rport":t.relatedPort=parseInt(e[n+1],10);break;case"tcptype":t.tcpType=e[n+1];break;case"ufrag":t.ufrag=e[n+1],t.usernameFragment=e[n+1];break;default:t[e[n]]=e[n+1]}return t},r.writeCandidate=function(r){var e=[];e.push(r.foundation),e.push(r.component),e.push(r.protocol.toUpperCase()),e.push(r.priority),e.push(r.address||r.ip),e.push(r.port);var t=r.type;return e.push("typ"),e.push(t),"host"!==t&&r.relatedAddress&&r.relatedPort&&(e.push("raddr"),e.push(r.relatedAddress),e.push("rport"),e.push(r.relatedPort)),r.tcpType&&"tcp"===r.protocol.toLowerCase()&&(e.push("tcptype"),e.push(r.tcpType)),(r.usernameFragment||r.ufrag)&&(e.push("ufrag"),e.push(r.usernameFragment||r.ufrag)),"candidate:"+e.join(" ")},r.parseIceOptions=function(r){return r.substr(14).split(" ")},r.parseRtpMap=function(r){var e=r.substr(9).split(" "),t={payloadType:parseInt(e.shift(),10)};return e=e[0].split("/"),t.name=e[0],t.clockRate=parseInt(e[1],10),t.channels=3===e.length?parseInt(e[2],10):1,t.numChannels=t.channels,t},r.writeRtpMap=function(r){var e=r.payloadType;void 0!==r.preferredPayloadType&&(e=r.preferredPayloadType);var t=r.channels||r.numChannels||1;return"a=rtpmap:"+e+" "+r.name+"/"+r.clockRate+(1!==t?"/"+t:"")+"\r\n"},r.parseExtmap=function(r){var e=r.substr(9).split(" ");return{id:parseInt(e[0],10),direction:e[0].indexOf("/")>0?e[0].split("/")[1]:"sendrecv",uri:e[1]}},r.writeExtmap=function(r){return"a=extmap:"+(r.id||r.preferredId)+(r.direction&&"sendrecv"!==r.direction?"/"+r.direction:"")+" "+r.uri+"\r\n"},r.parseFmtp=function(r){for(var e,t={},n=r.substr(r.indexOf(" ")+1).split(";"),a=0;a<n.length;a++)t[(e=n[a].trim().split("="))[0].trim()]=e[1];return t},r.writeFmtp=function(r){var e="",t=r.payloadType;if(void 0!==r.preferredPayloadType&&(t=r.preferredPayloadType),r.parameters&&Object.keys(r.parameters).length){var n=[];Object.keys(r.parameters).forEach(function(e){r.parameters[e]?n.push(e+"="+r.parameters[e]):n.push(e)}),e+="a=fmtp:"+t+" "+n.join(";")+"\r\n"}return e},r.parseRtcpFb=function(r){var e=r.substr(r.indexOf(" ")+1).split(" ");return{type:e.shift(),parameter:e.join(" ")}},r.writeRtcpFb=function(r){var e="",t=r.payloadType;return void 0!==r.preferredPayloadType&&(t=r.preferredPayloadType),r.rtcpFeedback&&r.rtcpFeedback.length&&r.rtcpFeedback.forEach(function(r){e+="a=rtcp-fb:"+t+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+"\r\n"}),e},r.parseSsrcMedia=function(r){var e=r.indexOf(" "),t={ssrc:parseInt(r.substr(7,e-7),10)},n=r.indexOf(":",e);return n>-1?(t.attribute=r.substr(e+1,n-e-1),t.value=r.substr(n+1)):t.attribute=r.substr(e+1),t},r.parseSsrcGroup=function(r){var e=r.substr(13).split(" ");return{semantics:e.shift(),ssrcs:e.map(function(r){return parseInt(r,10)})}},r.getMid=function(e){var t=r.matchPrefix(e,"a=mid:")[0];if(t)return t.substr(6)},r.parseFingerprint=function(r){var e=r.substr(14).split(" ");return{algorithm:e[0].toLowerCase(),value:e[1]}},r.getDtlsParameters=function(e,t){return{role:"auto",fingerprints:r.matchPrefix(e+t,"a=fingerprint:").map(r.parseFingerprint)}},r.writeDtlsParameters=function(r,e){var t="a=setup:"+e+"\r\n";return r.fingerprints.forEach(function(r){t+="a=fingerprint:"+r.algorithm+" "+r.value+"\r\n"}),t},r.getIceParameters=function(e,t){var n=r.splitLines(e);return{usernameFragment:(n=n.concat(r.splitLines(t))).filter(function(r){return 0===r.indexOf("a=ice-ufrag:")})[0].substr(12),password:n.filter(function(r){return 0===r.indexOf("a=ice-pwd:")})[0].substr(10)}},r.writeIceParameters=function(r){return"a=ice-ufrag:"+r.usernameFragment+"\r\na=ice-pwd:"+r.password+"\r\n"},r.parseRtpParameters=function(e){for(var t={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},n=r.splitLines(e)[0].split(" "),a=3;a<n.length;a++){var s=n[a],i=r.matchPrefix(e,"a=rtpmap:"+s+" ")[0];if(i){var p=r.parseRtpMap(i),c=r.matchPrefix(e,"a=fmtp:"+s+" ");switch(p.parameters=c.length?r.parseFmtp(c[0]):{},p.rtcpFeedback=r.matchPrefix(e,"a=rtcp-fb:"+s+" ").map(r.parseRtcpFb),t.codecs.push(p),p.name.toUpperCase()){case"RED":case"ULPFEC":t.fecMechanisms.push(p.name.toUpperCase())}}}return r.matchPrefix(e,"a=extmap:").forEach(function(e){t.headerExtensions.push(r.parseExtmap(e))}),t},r.writeRtpDescription=function(e,t){var n="";n+="m="+e+" ",n+=t.codecs.length>0?"9":"0",n+=" UDP/TLS/RTP/SAVPF ",n+=t.codecs.map(function(r){return void 0!==r.preferredPayloadType?r.preferredPayloadType:r.payloadType}).join(" ")+"\r\n",n+="c=IN IP4 0.0.0.0\r\n",n+="a=rtcp:9 IN IP4 0.0.0.0\r\n",t.codecs.forEach(function(e){n+=r.writeRtpMap(e),n+=r.writeFmtp(e),n+=r.writeRtcpFb(e)});var a=0;return t.codecs.forEach(function(r){r.maxptime>a&&(a=r.maxptime)}),a>0&&(n+="a=maxptime:"+a+"\r\n"),n+="a=rtcp-mux\r\n",t.headerExtensions&&t.headerExtensions.forEach(function(e){n+=r.writeExtmap(e)}),n},r.parseRtpEncodingParameters=function(e){var t,n=[],a=r.parseRtpParameters(e),s=-1!==a.fecMechanisms.indexOf("RED"),i=-1!==a.fecMechanisms.indexOf("ULPFEC"),p=r.matchPrefix(e,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(r){return"cname"===r.attribute}),c=p.length>0&&p[0].ssrc,o=r.matchPrefix(e,"a=ssrc-group:FID").map(function(r){return r.substr(17).split(" ").map(function(r){return parseInt(r,10)})});o.length>0&&o[0].length>1&&o[0][0]===c&&(t=o[0][1]),a.codecs.forEach(function(r){if("RTX"===r.name.toUpperCase()&&r.parameters.apt){var e={ssrc:c,codecPayloadType:parseInt(r.parameters.apt,10)};c&&t&&(e.rtx={ssrc:t}),n.push(e),s&&((e=JSON.parse(JSON.stringify(e))).fec={ssrc:c,mechanism:i?"red+ulpfec":"red"},n.push(e))}}),0===n.length&&c&&n.push({ssrc:c});var u=r.matchPrefix(e,"b=");return u.length&&(u=0===u[0].indexOf("b=TIAS:")?parseInt(u[0].substr(7),10):0===u[0].indexOf("b=AS:")?1e3*parseInt(u[0].substr(5),10)*.95-16e3:void 0,n.forEach(function(r){r.maxBitrate=u})),n},r.parseRtcpParameters=function(e){var t={},n=r.matchPrefix(e,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(r){return"cname"===r.attribute})[0];n&&(t.cname=n.value,t.ssrc=n.ssrc);var a=r.matchPrefix(e,"a=rtcp-rsize");t.reducedSize=a.length>0,t.compound=0===a.length;var s=r.matchPrefix(e,"a=rtcp-mux");return t.mux=s.length>0,t},r.parseMsid=function(e){var t,n=r.matchPrefix(e,"a=msid:");if(1===n.length)return{stream:(t=n[0].substr(7).split(" "))[0],track:t[1]};var a=r.matchPrefix(e,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(r){return"msid"===r.attribute});return a.length>0?{stream:(t=a[0].value.split(" "))[0],track:t[1]}:void 0},r.parseSctpDescription=function(e){var t,n=r.parseMLine(e),a=r.matchPrefix(e,"a=max-message-size:");a.length>0&&(t=parseInt(a[0].substr(19),10)),isNaN(t)&&(t=65536);var s=r.matchPrefix(e,"a=sctp-port:");if(s.length>0)return{port:parseInt(s[0].substr(12),10),protocol:n.fmt,maxMessageSize:t};if(r.matchPrefix(e,"a=sctpmap:").length>0){var i=r.matchPrefix(e,"a=sctpmap:")[0].substr(10).split(" ");return{port:parseInt(i[0],10),protocol:i[1],maxMessageSize:t}}},r.writeSctpDescription=function(r,e){var t=[];return t="DTLS/SCTP"!==r.protocol?["m="+r.kind+" 9 "+r.protocol+" "+e.protocol+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctp-port:"+e.port+"\r\n"]:["m="+r.kind+" 9 "+r.protocol+" "+e.port+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctpmap:"+e.port+" "+e.protocol+" 65535\r\n"],void 0!==e.maxMessageSize&&t.push("a=max-message-size:"+e.maxMessageSize+"\r\n"),t.join("")},r.generateSessionId=function(){return Math.random().toString().substr(2,21)},r.writeSessionBoilerplate=function(e,t,n){var a=void 0!==t?t:2;return"v=0\r\no="+(n||"thisisadapterortc")+" "+(e||r.generateSessionId())+" "+a+" IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"},r.writeMediaSection=function(e,t,n,a){var s=r.writeRtpDescription(e.kind,t);if(s+=r.writeIceParameters(e.iceGatherer.getLocalParameters()),s+=r.writeDtlsParameters(e.dtlsTransport.getLocalParameters(),"offer"===n?"actpass":"active"),s+="a=mid:"+e.mid+"\r\n",e.direction?s+="a="+e.direction+"\r\n":e.rtpSender&&e.rtpReceiver?s+="a=sendrecv\r\n":e.rtpSender?s+="a=sendonly\r\n":e.rtpReceiver?s+="a=recvonly\r\n":s+="a=inactive\r\n",e.rtpSender){var i="msid:"+a.id+" "+e.rtpSender.track.id+"\r\n";s+="a="+i,s+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" "+i,e.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" "+i,s+="a=ssrc-group:FID "+e.sendEncodingParameters[0].ssrc+" "+e.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return s+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" cname:"+r.localCName+"\r\n",e.rtpSender&&e.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" cname:"+r.localCName+"\r\n"),s},r.getDirection=function(e,t){for(var n=r.splitLines(e),a=0;a<n.length;a++)switch(n[a]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return n[a].substr(2)}return t?r.getDirection(t):"sendrecv"},r.getKind=function(e){return r.splitLines(e)[0].split(" ")[0].substr(2)},r.isRejected=function(r){return"0"===r.split(" ",2)[1]},r.parseMLine=function(e){var t=r.splitLines(e)[0].substr(2).split(" ");return{kind:t[0],port:parseInt(t[1],10),protocol:t[2],fmt:t.slice(3).join(" ")}},r.parseOLine=function(e){var t=r.matchPrefix(e,"o=")[0].substr(2).split(" ");return{username:t[0],sessionId:t[1],sessionVersion:parseInt(t[2],10),netType:t[3],addressType:t[4],address:t[5]}},r.isValidSDP=function(e){if("string"!=typeof e||0===e.length)return!1;for(var t=r.splitLines(e),n=0;n<t.length;n++)if(t[n].length<2||"="!==t[n].charAt(1))return!1;return!0},"object"==typeof module&&(module.exports=r);
},{}],"NJ2u":[function(require,module,exports) {
"use strict";var e=require("sdp");function t(e){return{inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[e.type]||e.type}function r(t,r,n,a,i){var s=e.writeRtpDescription(t.kind,r);if(s+=e.writeIceParameters(t.iceGatherer.getLocalParameters()),s+=e.writeDtlsParameters(t.dtlsTransport.getLocalParameters(),"offer"===n?"actpass":i||"active"),s+="a=mid:"+t.mid+"\r\n",t.rtpSender&&t.rtpReceiver?s+="a=sendrecv\r\n":t.rtpSender?s+="a=sendonly\r\n":t.rtpReceiver?s+="a=recvonly\r\n":s+="a=inactive\r\n",t.rtpSender){var o=t.rtpSender._initialTrackId||t.rtpSender.track.id;t.rtpSender._initialTrackId=o;var c="msid:"+(a?a.id:"-")+" "+o+"\r\n";s+="a="+c,s+="a=ssrc:"+t.sendEncodingParameters[0].ssrc+" "+c,t.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+t.sendEncodingParameters[0].rtx.ssrc+" "+c,s+="a=ssrc-group:FID "+t.sendEncodingParameters[0].ssrc+" "+t.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return s+="a=ssrc:"+t.sendEncodingParameters[0].ssrc+" cname:"+e.localCName+"\r\n",t.rtpSender&&t.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+t.sendEncodingParameters[0].rtx.ssrc+" cname:"+e.localCName+"\r\n"),s}function n(e,t){var r=!1;return(e=JSON.parse(JSON.stringify(e))).filter(function(e){if(e&&(e.urls||e.url)){var n=e.urls||e.url;e.url&&!e.urls&&console.warn("RTCIceServer.url is deprecated! Use urls instead.");var a="string"==typeof n;return a&&(n=[n]),n=n.filter(function(e){return 0===e.indexOf("turn:")&&-1!==e.indexOf("transport=udp")&&-1===e.indexOf("turn:[")&&!r?(r=!0,!0):0===e.indexOf("stun:")&&t>=14393&&-1===e.indexOf("?transport=udp")}),delete e.url,e.urls=a?n[0]:n,!!n.length}})}function a(e,t){var r={codecs:[],headerExtensions:[],fecMechanisms:[]},n=function(e,t){e=parseInt(e,10);for(var r=0;r<t.length;r++)if(t[r].payloadType===e||t[r].preferredPayloadType===e)return t[r]},a=function(e,t,r,a){var i=n(e.parameters.apt,r),s=n(t.parameters.apt,a);return i&&s&&i.name.toLowerCase()===s.name.toLowerCase()};return e.codecs.forEach(function(n){for(var i=0;i<t.codecs.length;i++){var s=t.codecs[i];if(n.name.toLowerCase()===s.name.toLowerCase()&&n.clockRate===s.clockRate){if("rtx"===n.name.toLowerCase()&&n.parameters&&s.parameters.apt&&!a(n,s,e.codecs,t.codecs))continue;(s=JSON.parse(JSON.stringify(s))).numChannels=Math.min(n.numChannels,s.numChannels),r.codecs.push(s),s.rtcpFeedback=s.rtcpFeedback.filter(function(e){for(var t=0;t<n.rtcpFeedback.length;t++)if(n.rtcpFeedback[t].type===e.type&&n.rtcpFeedback[t].parameter===e.parameter)return!0;return!1});break}}}),e.headerExtensions.forEach(function(e){for(var n=0;n<t.headerExtensions.length;n++){var a=t.headerExtensions[n];if(e.uri===a.uri){r.headerExtensions.push(a);break}}}),r}function i(e,t,r){return-1!=={offer:{setLocalDescription:["stable","have-local-offer"],setRemoteDescription:["stable","have-remote-offer"]},answer:{setLocalDescription:["have-remote-offer","have-local-pranswer"],setRemoteDescription:["have-local-offer","have-remote-pranswer"]}}[t][e].indexOf(r)}function s(e,t){var r=e.getRemoteCandidates().find(function(e){return t.foundation===e.foundation&&t.ip===e.ip&&t.port===e.port&&t.priority===e.priority&&t.protocol===e.protocol&&t.type===e.type});return r||e.addRemoteCandidate(t),!r}function o(e,t){var r=new Error(t);return r.name=e,r.code={NotSupportedError:9,InvalidStateError:11,InvalidAccessError:15,TypeError:void 0,OperationError:void 0}[e],r}module.exports=function(c,d){function p(e,t){t.addTrack(e),t.dispatchEvent(new c.MediaStreamTrackEvent("addtrack",{track:e}))}function l(e,t,r,n){var a=new Event("track");a.track=t,a.receiver=r,a.transceiver={receiver:r},a.streams=n,c.setTimeout(function(){e._dispatchEvent("track",a)})}var f=function(t){var r=this,a=document.createDocumentFragment();if(["addEventListener","removeEventListener","dispatchEvent"].forEach(function(e){r[e]=a[e].bind(a)}),this.canTrickleIceCandidates=null,this.needNegotiation=!1,this.localStreams=[],this.remoteStreams=[],this._localDescription=null,this._remoteDescription=null,this.signalingState="stable",this.iceConnectionState="new",this.connectionState="new",this.iceGatheringState="new",t=JSON.parse(JSON.stringify(t||{})),this.usingBundle="max-bundle"===t.bundlePolicy,"negotiate"===t.rtcpMuxPolicy)throw o("NotSupportedError","rtcpMuxPolicy 'negotiate' is not supported");switch(t.rtcpMuxPolicy||(t.rtcpMuxPolicy="require"),t.iceTransportPolicy){case"all":case"relay":break;default:t.iceTransportPolicy="all"}switch(t.bundlePolicy){case"balanced":case"max-compat":case"max-bundle":break;default:t.bundlePolicy="balanced"}if(t.iceServers=n(t.iceServers||[],d),this._iceGatherers=[],t.iceCandidatePoolSize)for(var i=t.iceCandidatePoolSize;i>0;i--)this._iceGatherers.push(new c.RTCIceGatherer({iceServers:t.iceServers,gatherPolicy:t.iceTransportPolicy}));else t.iceCandidatePoolSize=0;this._config=t,this.transceivers=[],this._sdpSessionId=e.generateSessionId(),this._sdpSessionVersion=0,this._dtlsRole=void 0,this._isClosed=!1};Object.defineProperty(f.prototype,"localDescription",{configurable:!0,get:function(){return this._localDescription}}),Object.defineProperty(f.prototype,"remoteDescription",{configurable:!0,get:function(){return this._remoteDescription}}),f.prototype.onicecandidate=null,f.prototype.onaddstream=null,f.prototype.ontrack=null,f.prototype.onremovestream=null,f.prototype.onsignalingstatechange=null,f.prototype.oniceconnectionstatechange=null,f.prototype.onconnectionstatechange=null,f.prototype.onicegatheringstatechange=null,f.prototype.onnegotiationneeded=null,f.prototype.ondatachannel=null,f.prototype._dispatchEvent=function(e,t){this._isClosed||(this.dispatchEvent(t),"function"==typeof this["on"+e]&&this["on"+e](t))},f.prototype._emitGatheringStateChange=function(){var e=new Event("icegatheringstatechange");this._dispatchEvent("icegatheringstatechange",e)},f.prototype.getConfiguration=function(){return this._config},f.prototype.getLocalStreams=function(){return this.localStreams},f.prototype.getRemoteStreams=function(){return this.remoteStreams},f.prototype._createTransceiver=function(e,t){var r=this.transceivers.length>0,n={track:null,iceGatherer:null,iceTransport:null,dtlsTransport:null,localCapabilities:null,remoteCapabilities:null,rtpSender:null,rtpReceiver:null,kind:e,mid:null,sendEncodingParameters:null,recvEncodingParameters:null,stream:null,associatedRemoteMediaStreams:[],wantReceive:!0};if(this.usingBundle&&r)n.iceTransport=this.transceivers[0].iceTransport,n.dtlsTransport=this.transceivers[0].dtlsTransport;else{var a=this._createIceAndDtlsTransports();n.iceTransport=a.iceTransport,n.dtlsTransport=a.dtlsTransport}return t||this.transceivers.push(n),n},f.prototype.addTrack=function(e,t){if(this._isClosed)throw o("InvalidStateError","Attempted to call addTrack on a closed peerconnection.");var r;if(this.transceivers.find(function(t){return t.track===e}))throw o("InvalidAccessError","Track already exists.");for(var n=0;n<this.transceivers.length;n++)this.transceivers[n].track||this.transceivers[n].kind!==e.kind||(r=this.transceivers[n]);return r||(r=this._createTransceiver(e.kind)),this._maybeFireNegotiationNeeded(),-1===this.localStreams.indexOf(t)&&this.localStreams.push(t),r.track=e,r.stream=t,r.rtpSender=new c.RTCRtpSender(e,r.dtlsTransport),r.rtpSender},f.prototype.addStream=function(e){var t=this;if(d>=15025)e.getTracks().forEach(function(r){t.addTrack(r,e)});else{var r=e.clone();e.getTracks().forEach(function(e,t){var n=r.getTracks()[t];e.addEventListener("enabled",function(e){n.enabled=e.enabled})}),r.getTracks().forEach(function(e){t.addTrack(e,r)})}},f.prototype.removeTrack=function(e){if(this._isClosed)throw o("InvalidStateError","Attempted to call removeTrack on a closed peerconnection.");if(!(e instanceof c.RTCRtpSender))throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");var t=this.transceivers.find(function(t){return t.rtpSender===e});if(!t)throw o("InvalidAccessError","Sender was not created by this connection.");var r=t.stream;t.rtpSender.stop(),t.rtpSender=null,t.track=null,t.stream=null,-1===this.transceivers.map(function(e){return e.stream}).indexOf(r)&&this.localStreams.indexOf(r)>-1&&this.localStreams.splice(this.localStreams.indexOf(r),1),this._maybeFireNegotiationNeeded()},f.prototype.removeStream=function(e){var t=this;e.getTracks().forEach(function(e){var r=t.getSenders().find(function(t){return t.track===e});r&&t.removeTrack(r)})},f.prototype.getSenders=function(){return this.transceivers.filter(function(e){return!!e.rtpSender}).map(function(e){return e.rtpSender})},f.prototype.getReceivers=function(){return this.transceivers.filter(function(e){return!!e.rtpReceiver}).map(function(e){return e.rtpReceiver})},f.prototype._createIceGatherer=function(e,t){var r=this;if(t&&e>0)return this.transceivers[0].iceGatherer;if(this._iceGatherers.length)return this._iceGatherers.shift();var n=new c.RTCIceGatherer({iceServers:this._config.iceServers,gatherPolicy:this._config.iceTransportPolicy});return Object.defineProperty(n,"state",{value:"new",writable:!0}),this.transceivers[e].bufferedCandidateEvents=[],this.transceivers[e].bufferCandidates=function(t){var a=!t.candidate||0===Object.keys(t.candidate).length;n.state=a?"completed":"gathering",null!==r.transceivers[e].bufferedCandidateEvents&&r.transceivers[e].bufferedCandidateEvents.push(t)},n.addEventListener("localcandidate",this.transceivers[e].bufferCandidates),n},f.prototype._gather=function(t,r){var n=this,a=this.transceivers[r].iceGatherer;if(!a.onlocalcandidate){var i=this.transceivers[r].bufferedCandidateEvents;this.transceivers[r].bufferedCandidateEvents=null,a.removeEventListener("localcandidate",this.transceivers[r].bufferCandidates),a.onlocalcandidate=function(i){if(!(n.usingBundle&&r>0)){var s=new Event("icecandidate");s.candidate={sdpMid:t,sdpMLineIndex:r};var o=i.candidate,c=!o||0===Object.keys(o).length;if(c)"new"!==a.state&&"gathering"!==a.state||(a.state="completed");else{"new"===a.state&&(a.state="gathering"),o.component=1,o.ufrag=a.getLocalParameters().usernameFragment;var d=e.writeCandidate(o);s.candidate=Object.assign(s.candidate,e.parseCandidate(d)),s.candidate.candidate=d,s.candidate.toJSON=function(){return{candidate:s.candidate.candidate,sdpMid:s.candidate.sdpMid,sdpMLineIndex:s.candidate.sdpMLineIndex,usernameFragment:s.candidate.usernameFragment}}}var p=e.getMediaSections(n._localDescription.sdp);p[s.candidate.sdpMLineIndex]+=c?"a=end-of-candidates\r\n":"a="+s.candidate.candidate+"\r\n",n._localDescription.sdp=e.getDescription(n._localDescription.sdp)+p.join("");var l=n.transceivers.every(function(e){return e.iceGatherer&&"completed"===e.iceGatherer.state});"gathering"!==n.iceGatheringState&&(n.iceGatheringState="gathering",n._emitGatheringStateChange()),c||n._dispatchEvent("icecandidate",s),l&&(n._dispatchEvent("icecandidate",new Event("icecandidate")),n.iceGatheringState="complete",n._emitGatheringStateChange())}},c.setTimeout(function(){i.forEach(function(e){a.onlocalcandidate(e)})},0)}},f.prototype._createIceAndDtlsTransports=function(){var e=this,t=new c.RTCIceTransport(null);t.onicestatechange=function(){e._updateIceConnectionState(),e._updateConnectionState()};var r=new c.RTCDtlsTransport(t);return r.ondtlsstatechange=function(){e._updateConnectionState()},r.onerror=function(){Object.defineProperty(r,"state",{value:"failed",writable:!0}),e._updateConnectionState()},{iceTransport:t,dtlsTransport:r}},f.prototype._disposeIceAndDtlsTransports=function(e){var t=this.transceivers[e].iceGatherer;t&&(delete t.onlocalcandidate,delete this.transceivers[e].iceGatherer);var r=this.transceivers[e].iceTransport;r&&(delete r.onicestatechange,delete this.transceivers[e].iceTransport);var n=this.transceivers[e].dtlsTransport;n&&(delete n.ondtlsstatechange,delete n.onerror,delete this.transceivers[e].dtlsTransport)},f.prototype._transceive=function(t,r,n){var i=a(t.localCapabilities,t.remoteCapabilities);r&&t.rtpSender&&(i.encodings=t.sendEncodingParameters,i.rtcp={cname:e.localCName,compound:t.rtcpParameters.compound},t.recvEncodingParameters.length&&(i.rtcp.ssrc=t.recvEncodingParameters[0].ssrc),t.rtpSender.send(i)),n&&t.rtpReceiver&&i.codecs.length>0&&("video"===t.kind&&t.recvEncodingParameters&&d<15019&&t.recvEncodingParameters.forEach(function(e){delete e.rtx}),t.recvEncodingParameters.length?i.encodings=t.recvEncodingParameters:i.encodings=[{}],i.rtcp={compound:t.rtcpParameters.compound},t.rtcpParameters.cname&&(i.rtcp.cname=t.rtcpParameters.cname),t.sendEncodingParameters.length&&(i.rtcp.ssrc=t.sendEncodingParameters[0].ssrc),t.rtpReceiver.receive(i))},f.prototype.setLocalDescription=function(t){var r,n,s=this;if(-1===["offer","answer"].indexOf(t.type))return Promise.reject(o("TypeError",'Unsupported type "'+t.type+'"'));if(!i("setLocalDescription",t.type,s.signalingState)||s._isClosed)return Promise.reject(o("InvalidStateError","Can not set local "+t.type+" in state "+s.signalingState));if("offer"===t.type)r=e.splitSections(t.sdp),n=r.shift(),r.forEach(function(t,r){var n=e.parseRtpParameters(t);s.transceivers[r].localCapabilities=n}),s.transceivers.forEach(function(e,t){s._gather(e.mid,t)});else if("answer"===t.type){r=e.splitSections(s._remoteDescription.sdp),n=r.shift();var c=e.matchPrefix(n,"a=ice-lite").length>0;r.forEach(function(t,r){var i=s.transceivers[r],o=i.iceGatherer,d=i.iceTransport,p=i.dtlsTransport,l=i.localCapabilities,f=i.remoteCapabilities;if(!(e.isRejected(t)&&0===e.matchPrefix(t,"a=bundle-only").length)&&!i.rejected){var u=e.getIceParameters(t,n),v=e.getDtlsParameters(t,n);c&&(v.role="server"),s.usingBundle&&0!==r||(s._gather(i.mid,r),"new"===d.state&&d.start(o,u,c?"controlling":"controlled"),"new"===p.state&&p.start(v));var h=a(l,f);s._transceive(i,h.codecs.length>0,!1)}})}return s._localDescription={type:t.type,sdp:t.sdp},"offer"===t.type?s._updateSignalingState("have-local-offer"):s._updateSignalingState("stable"),Promise.resolve()},f.prototype.setRemoteDescription=function(t){var r=this;if(-1===["offer","answer"].indexOf(t.type))return Promise.reject(o("TypeError",'Unsupported type "'+t.type+'"'));if(!i("setRemoteDescription",t.type,r.signalingState)||r._isClosed)return Promise.reject(o("InvalidStateError","Can not set remote "+t.type+" in state "+r.signalingState));var n={};r.remoteStreams.forEach(function(e){n[e.id]=e});var f=[],u=e.splitSections(t.sdp),v=u.shift(),h=e.matchPrefix(v,"a=ice-lite").length>0,m=e.matchPrefix(v,"a=group:BUNDLE ").length>0;r.usingBundle=m;var g=e.matchPrefix(v,"a=ice-options:")[0];return r.canTrickleIceCandidates=!!g&&g.substr(14).split(" ").indexOf("trickle")>=0,u.forEach(function(i,o){var l=e.splitLines(i),u=e.getKind(i),g=e.isRejected(i)&&0===e.matchPrefix(i,"a=bundle-only").length,y=l[0].substr(2).split(" ")[2],S=e.getDirection(i,v),T=e.parseMsid(i),E=e.getMid(i)||e.generateIdentifier();if(g||"application"===u&&("DTLS/SCTP"===y||"UDP/DTLS/SCTP"===y))r.transceivers[o]={mid:E,kind:u,protocol:y,rejected:!0};else{var C,P,w,R,_,k,b,x,D;!g&&r.transceivers[o]&&r.transceivers[o].rejected&&(r.transceivers[o]=r._createTransceiver(u,!0));var I,L,M=e.parseRtpParameters(i);g||(I=e.getIceParameters(i,v),(L=e.getDtlsParameters(i,v)).role="client"),b=e.parseRtpEncodingParameters(i);var O=e.parseRtcpParameters(i),G=e.matchPrefix(i,"a=end-of-candidates",v).length>0,j=e.matchPrefix(i,"a=candidate:").map(function(t){return e.parseCandidate(t)}).filter(function(e){return 1===e.component});if(("offer"===t.type||"answer"===t.type)&&!g&&m&&o>0&&r.transceivers[o]&&(r._disposeIceAndDtlsTransports(o),r.transceivers[o].iceGatherer=r.transceivers[0].iceGatherer,r.transceivers[o].iceTransport=r.transceivers[0].iceTransport,r.transceivers[o].dtlsTransport=r.transceivers[0].dtlsTransport,r.transceivers[o].rtpSender&&r.transceivers[o].rtpSender.setTransport(r.transceivers[0].dtlsTransport),r.transceivers[o].rtpReceiver&&r.transceivers[o].rtpReceiver.setTransport(r.transceivers[0].dtlsTransport)),"offer"!==t.type||g){if("answer"===t.type&&!g){P=(C=r.transceivers[o]).iceGatherer,w=C.iceTransport,R=C.dtlsTransport,_=C.rtpReceiver,k=C.sendEncodingParameters,x=C.localCapabilities,r.transceivers[o].recvEncodingParameters=b,r.transceivers[o].remoteCapabilities=M,r.transceivers[o].rtcpParameters=O,j.length&&"new"===w.state&&(!h&&!G||m&&0!==o?j.forEach(function(e){s(C.iceTransport,e)}):w.setRemoteCandidates(j)),m&&0!==o||("new"===w.state&&w.start(P,I,"controlling"),"new"===R.state&&R.start(L)),!a(C.localCapabilities,C.remoteCapabilities).codecs.filter(function(e){return"rtx"===e.name.toLowerCase()}).length&&C.sendEncodingParameters[0].rtx&&delete C.sendEncodingParameters[0].rtx,r._transceive(C,"sendrecv"===S||"recvonly"===S,"sendrecv"===S||"sendonly"===S),!_||"sendrecv"!==S&&"sendonly"!==S?delete C.rtpReceiver:(D=_.track,T?(n[T.stream]||(n[T.stream]=new c.MediaStream),p(D,n[T.stream]),f.push([D,_,n[T.stream]])):(n.default||(n.default=new c.MediaStream),p(D,n.default),f.push([D,_,n.default])))}}else{(C=r.transceivers[o]||r._createTransceiver(u)).mid=E,C.iceGatherer||(C.iceGatherer=r._createIceGatherer(o,m)),j.length&&"new"===C.iceTransport.state&&(!G||m&&0!==o?j.forEach(function(e){s(C.iceTransport,e)}):C.iceTransport.setRemoteCandidates(j)),x=c.RTCRtpReceiver.getCapabilities(u),d<15019&&(x.codecs=x.codecs.filter(function(e){return"rtx"!==e.name})),k=C.sendEncodingParameters||[{ssrc:1001*(2*o+2)}];var N,A=!1;if("sendrecv"===S||"sendonly"===S){if(A=!C.rtpReceiver,_=C.rtpReceiver||new c.RTCRtpReceiver(C.dtlsTransport,u),A)D=_.track,T&&"-"===T.stream||(T?(n[T.stream]||(n[T.stream]=new c.MediaStream,Object.defineProperty(n[T.stream],"id",{get:function(){return T.stream}})),Object.defineProperty(D,"id",{get:function(){return T.track}}),N=n[T.stream]):(n.default||(n.default=new c.MediaStream),N=n.default)),N&&(p(D,N),C.associatedRemoteMediaStreams.push(N)),f.push([D,_,N])}else C.rtpReceiver&&C.rtpReceiver.track&&(C.associatedRemoteMediaStreams.forEach(function(e){var t,r,n=e.getTracks().find(function(e){return e.id===C.rtpReceiver.track.id});n&&(t=n,(r=e).removeTrack(t),r.dispatchEvent(new c.MediaStreamTrackEvent("removetrack",{track:t})))}),C.associatedRemoteMediaStreams=[]);C.localCapabilities=x,C.remoteCapabilities=M,C.rtpReceiver=_,C.rtcpParameters=O,C.sendEncodingParameters=k,C.recvEncodingParameters=b,r._transceive(r.transceivers[o],!1,A)}}}),void 0===r._dtlsRole&&(r._dtlsRole="offer"===t.type?"active":"passive"),r._remoteDescription={type:t.type,sdp:t.sdp},"offer"===t.type?r._updateSignalingState("have-remote-offer"):r._updateSignalingState("stable"),Object.keys(n).forEach(function(e){var t=n[e];if(t.getTracks().length){if(-1===r.remoteStreams.indexOf(t)){r.remoteStreams.push(t);var a=new Event("addstream");a.stream=t,c.setTimeout(function(){r._dispatchEvent("addstream",a)})}f.forEach(function(e){var n=e[0],a=e[1];t.id===e[2].id&&l(r,n,a,[t])})}}),f.forEach(function(e){e[2]||l(r,e[0],e[1],[])}),c.setTimeout(function(){r&&r.transceivers&&r.transceivers.forEach(function(e){e.iceTransport&&"new"===e.iceTransport.state&&e.iceTransport.getRemoteCandidates().length>0&&(console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"),e.iceTransport.addRemoteCandidate({}))})},4e3),Promise.resolve()},f.prototype.close=function(){this.transceivers.forEach(function(e){e.iceTransport&&e.iceTransport.stop(),e.dtlsTransport&&e.dtlsTransport.stop(),e.rtpSender&&e.rtpSender.stop(),e.rtpReceiver&&e.rtpReceiver.stop()}),this._isClosed=!0,this._updateSignalingState("closed")},f.prototype._updateSignalingState=function(e){this.signalingState=e;var t=new Event("signalingstatechange");this._dispatchEvent("signalingstatechange",t)},f.prototype._maybeFireNegotiationNeeded=function(){var e=this;"stable"===this.signalingState&&!0!==this.needNegotiation&&(this.needNegotiation=!0,c.setTimeout(function(){if(e.needNegotiation){e.needNegotiation=!1;var t=new Event("negotiationneeded");e._dispatchEvent("negotiationneeded",t)}},0))},f.prototype._updateIceConnectionState=function(){var e,t={new:0,closed:0,checking:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(e){e.iceTransport&&!e.rejected&&t[e.iceTransport.state]++}),e="new",t.failed>0?e="failed":t.checking>0?e="checking":t.disconnected>0?e="disconnected":t.new>0?e="new":t.connected>0?e="connected":t.completed>0&&(e="completed"),e!==this.iceConnectionState){this.iceConnectionState=e;var r=new Event("iceconnectionstatechange");this._dispatchEvent("iceconnectionstatechange",r)}},f.prototype._updateConnectionState=function(){var e,t={new:0,closed:0,connecting:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(e){e.iceTransport&&e.dtlsTransport&&!e.rejected&&(t[e.iceTransport.state]++,t[e.dtlsTransport.state]++)}),t.connected+=t.completed,e="new",t.failed>0?e="failed":t.connecting>0?e="connecting":t.disconnected>0?e="disconnected":t.new>0?e="new":t.connected>0&&(e="connected"),e!==this.connectionState){this.connectionState=e;var r=new Event("connectionstatechange");this._dispatchEvent("connectionstatechange",r)}},f.prototype.createOffer=function(){var t=this;if(t._isClosed)return Promise.reject(o("InvalidStateError","Can not call createOffer after close"));var n=t.transceivers.filter(function(e){return"audio"===e.kind}).length,a=t.transceivers.filter(function(e){return"video"===e.kind}).length,i=arguments[0];if(i){if(i.mandatory||i.optional)throw new TypeError("Legacy mandatory/optional constraints not supported.");void 0!==i.offerToReceiveAudio&&(n=!0===i.offerToReceiveAudio?1:!1===i.offerToReceiveAudio?0:i.offerToReceiveAudio),void 0!==i.offerToReceiveVideo&&(a=!0===i.offerToReceiveVideo?1:!1===i.offerToReceiveVideo?0:i.offerToReceiveVideo)}for(t.transceivers.forEach(function(e){"audio"===e.kind?--n<0&&(e.wantReceive=!1):"video"===e.kind&&--a<0&&(e.wantReceive=!1)});n>0||a>0;)n>0&&(t._createTransceiver("audio"),n--),a>0&&(t._createTransceiver("video"),a--);var s=e.writeSessionBoilerplate(t._sdpSessionId,t._sdpSessionVersion++);t.transceivers.forEach(function(r,n){var a=r.track,i=r.kind,s=r.mid||e.generateIdentifier();r.mid=s,r.iceGatherer||(r.iceGatherer=t._createIceGatherer(n,t.usingBundle));var o=c.RTCRtpSender.getCapabilities(i);d<15019&&(o.codecs=o.codecs.filter(function(e){return"rtx"!==e.name})),o.codecs.forEach(function(e){"H264"===e.name&&void 0===e.parameters["level-asymmetry-allowed"]&&(e.parameters["level-asymmetry-allowed"]="1"),r.remoteCapabilities&&r.remoteCapabilities.codecs&&r.remoteCapabilities.codecs.forEach(function(t){e.name.toLowerCase()===t.name.toLowerCase()&&e.clockRate===t.clockRate&&(e.preferredPayloadType=t.payloadType)})}),o.headerExtensions.forEach(function(e){(r.remoteCapabilities&&r.remoteCapabilities.headerExtensions||[]).forEach(function(t){e.uri===t.uri&&(e.id=t.id)})});var p=r.sendEncodingParameters||[{ssrc:1001*(2*n+1)}];a&&d>=15019&&"video"===i&&!p[0].rtx&&(p[0].rtx={ssrc:p[0].ssrc+1}),r.wantReceive&&(r.rtpReceiver=new c.RTCRtpReceiver(r.dtlsTransport,i)),r.localCapabilities=o,r.sendEncodingParameters=p}),"max-compat"!==t._config.bundlePolicy&&(s+="a=group:BUNDLE "+t.transceivers.map(function(e){return e.mid}).join(" ")+"\r\n"),s+="a=ice-options:trickle\r\n",t.transceivers.forEach(function(n,a){s+=r(n,n.localCapabilities,"offer",n.stream,t._dtlsRole),s+="a=rtcp-rsize\r\n",!n.iceGatherer||"new"===t.iceGatheringState||0!==a&&t.usingBundle||(n.iceGatherer.getLocalCandidates().forEach(function(t){t.component=1,s+="a="+e.writeCandidate(t)+"\r\n"}),"completed"===n.iceGatherer.state&&(s+="a=end-of-candidates\r\n"))});var p=new c.RTCSessionDescription({type:"offer",sdp:s});return Promise.resolve(p)},f.prototype.createAnswer=function(){var t=this;if(t._isClosed)return Promise.reject(o("InvalidStateError","Can not call createAnswer after close"));if("have-remote-offer"!==t.signalingState&&"have-local-pranswer"!==t.signalingState)return Promise.reject(o("InvalidStateError","Can not call createAnswer in signalingState "+t.signalingState));var n=e.writeSessionBoilerplate(t._sdpSessionId,t._sdpSessionVersion++);t.usingBundle&&(n+="a=group:BUNDLE "+t.transceivers.map(function(e){return e.mid}).join(" ")+"\r\n"),n+="a=ice-options:trickle\r\n";var i=e.getMediaSections(t._remoteDescription.sdp).length;t.transceivers.forEach(function(e,s){if(!(s+1>i)){if(e.rejected)return"application"===e.kind?"DTLS/SCTP"===e.protocol?n+="m=application 0 DTLS/SCTP 5000\r\n":n+="m=application 0 "+e.protocol+" webrtc-datachannel\r\n":"audio"===e.kind?n+="m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n":"video"===e.kind&&(n+="m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"),void(n+="c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:"+e.mid+"\r\n");var o;if(e.stream)"audio"===e.kind?o=e.stream.getAudioTracks()[0]:"video"===e.kind&&(o=e.stream.getVideoTracks()[0]),o&&d>=15019&&"video"===e.kind&&!e.sendEncodingParameters[0].rtx&&(e.sendEncodingParameters[0].rtx={ssrc:e.sendEncodingParameters[0].ssrc+1});var c=a(e.localCapabilities,e.remoteCapabilities);!c.codecs.filter(function(e){return"rtx"===e.name.toLowerCase()}).length&&e.sendEncodingParameters[0].rtx&&delete e.sendEncodingParameters[0].rtx,n+=r(e,c,"answer",e.stream,t._dtlsRole),e.rtcpParameters&&e.rtcpParameters.reducedSize&&(n+="a=rtcp-rsize\r\n")}});var s=new c.RTCSessionDescription({type:"answer",sdp:n});return Promise.resolve(s)},f.prototype.addIceCandidate=function(t){var r,n=this;return t&&void 0===t.sdpMLineIndex&&!t.sdpMid?Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")):new Promise(function(a,i){if(!n._remoteDescription)return i(o("InvalidStateError","Can not add ICE candidate without a remote description"));if(t&&""!==t.candidate){var c=t.sdpMLineIndex;if(t.sdpMid)for(var d=0;d<n.transceivers.length;d++)if(n.transceivers[d].mid===t.sdpMid){c=d;break}var p=n.transceivers[c];if(!p)return i(o("OperationError","Can not add ICE candidate"));if(p.rejected)return a();var l=Object.keys(t.candidate).length>0?e.parseCandidate(t.candidate):{};if("tcp"===l.protocol&&(0===l.port||9===l.port))return a();if(l.component&&1!==l.component)return a();if((0===c||c>0&&p.iceTransport!==n.transceivers[0].iceTransport)&&!s(p.iceTransport,l))return i(o("OperationError","Can not add ICE candidate"));var f=t.candidate.trim();0===f.indexOf("a=")&&(f=f.substr(2)),(r=e.getMediaSections(n._remoteDescription.sdp))[c]+="a="+(l.type?f:"end-of-candidates")+"\r\n",n._remoteDescription.sdp=e.getDescription(n._remoteDescription.sdp)+r.join("")}else for(var u=0;u<n.transceivers.length&&(n.transceivers[u].rejected||(n.transceivers[u].iceTransport.addRemoteCandidate({}),(r=e.getMediaSections(n._remoteDescription.sdp))[u]+="a=end-of-candidates\r\n",n._remoteDescription.sdp=e.getDescription(n._remoteDescription.sdp)+r.join(""),!n.usingBundle));u++);a()})},f.prototype.getStats=function(e){if(e&&e instanceof c.MediaStreamTrack){var t=null;if(this.transceivers.forEach(function(r){r.rtpSender&&r.rtpSender.track===e?t=r.rtpSender:r.rtpReceiver&&r.rtpReceiver.track===e&&(t=r.rtpReceiver)}),!t)throw o("InvalidAccessError","Invalid selector.");return t.getStats()}var r=[];return this.transceivers.forEach(function(e){["rtpSender","rtpReceiver","iceGatherer","iceTransport","dtlsTransport"].forEach(function(t){e[t]&&r.push(e[t].getStats())})}),Promise.all(r).then(function(e){var t=new Map;return e.forEach(function(e){e.forEach(function(e){t.set(e.id,e)})}),t})};["RTCRtpSender","RTCRtpReceiver","RTCIceGatherer","RTCIceTransport","RTCDtlsTransport"].forEach(function(e){var r=c[e];if(r&&r.prototype&&r.prototype.getStats){var n=r.prototype.getStats;r.prototype.getStats=function(){return n.apply(this).then(function(e){var r=new Map;return Object.keys(e).forEach(function(n){e[n].type=t(e[n]),r.set(n,e[n])}),r})}}});var u=["createOffer","createAnswer"];return u.forEach(function(e){var t=f.prototype[e];f.prototype[e]=function(){var e=arguments;return"function"==typeof e[0]||"function"==typeof e[1]?t.apply(this,[arguments[2]]).then(function(t){"function"==typeof e[0]&&e[0].apply(null,[t])},function(t){"function"==typeof e[1]&&e[1].apply(null,[t])}):t.apply(this,arguments)}}),(u=["setLocalDescription","setRemoteDescription","addIceCandidate"]).forEach(function(e){var t=f.prototype[e];f.prototype[e]=function(){var e=arguments;return"function"==typeof e[1]||"function"==typeof e[2]?t.apply(this,arguments).then(function(){"function"==typeof e[1]&&e[1].apply(null)},function(t){"function"==typeof e[2]&&e[2].apply(null,[t])}):t.apply(this,arguments)}}),["getStats"].forEach(function(e){var t=f.prototype[e];f.prototype[e]=function(){var e=arguments;return"function"==typeof e[1]?t.apply(this,arguments).then(function(){"function"==typeof e[1]&&e[1].apply(null)}):t.apply(this,arguments)}}),f};
},{"sdp":"YHvh"}],"YdKx":[function(require,module,exports) {
"use strict";function e(e){var r=e&&e.navigator,t=r.mediaDevices.getUserMedia.bind(r.mediaDevices);r.mediaDevices.getUserMedia=function(e){return t(e).catch(function(e){return Promise.reject(function(e){return{name:{PermissionDeniedError:"NotAllowedError"}[e.name]||e.name,message:e.message,constraint:e.constraint,toString:function(){return this.name}}}(e))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetUserMedia=e;
},{}],"P3bV":[function(require,module,exports) {
"use strict";function e(e){"getDisplayMedia"in e.navigator&&e.navigator.mediaDevices&&(e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||(e.navigator.mediaDevices.getDisplayMedia=e.navigator.getDisplayMedia.bind(e.navigator)))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetDisplayMedia=e;
},{}],"XRic":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimPeerConnection=a,exports.shimReplaceTrack=p,Object.defineProperty(exports,"shimGetUserMedia",{enumerable:!0,get:function(){return n.shimGetUserMedia}}),Object.defineProperty(exports,"shimGetDisplayMedia",{enumerable:!0,get:function(){return i.shimGetDisplayMedia}});var e=s(require("../utils")),t=require("./filtericeservers"),r=o(require("rtcpeerconnection-shim")),n=require("./getusermedia"),i=require("./getdisplaymedia");function o(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function a(n){var i=e.detectBrowser(n);if(n.RTCIceGatherer&&(n.RTCIceCandidate||(n.RTCIceCandidate=function(e){return e}),n.RTCSessionDescription||(n.RTCSessionDescription=function(e){return e}),i.version<15025)){var o=Object.getOwnPropertyDescriptor(n.MediaStreamTrack.prototype,"enabled");Object.defineProperty(n.MediaStreamTrack.prototype,"enabled",{set:function(e){o.set.call(this,e);var t=new Event("enabled");t.enabled=e,this.dispatchEvent(t)}})}!n.RTCRtpSender||"dtmf"in n.RTCRtpSender.prototype||Object.defineProperty(n.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=new n.RTCDtmfSender(this):"video"===this.track.kind&&(this._dtmf=null)),this._dtmf}}),n.RTCDtmfSender&&!n.RTCDTMFSender&&(n.RTCDTMFSender=n.RTCDtmfSender);var c=(0,r.default)(n,i.version);n.RTCPeerConnection=function(r){return r&&r.iceServers&&(r.iceServers=(0,t.filterIceServers)(r.iceServers,i.version),e.log("ICE servers after filtering:",r.iceServers)),new c(r)},n.RTCPeerConnection.prototype=c.prototype}function p(e){!e.RTCRtpSender||"replaceTrack"in e.RTCRtpSender.prototype||(e.RTCRtpSender.prototype.replaceTrack=e.RTCRtpSender.prototype.setTrack)}
},{"../utils":"iSxC","./filtericeservers":"NZ1C","rtcpeerconnection-shim":"NJ2u","./getusermedia":"YdKx","./getdisplaymedia":"P3bV"}],"GzSv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetUserMedia=n;var e=o(require("../utils"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=t();if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,o&&o.set(e,r),r}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){var o=e.detectBrowser(t),n=t&&t.navigator,i=t&&t.MediaStreamTrack;if(n.getUserMedia=function(t,o,r){e.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),n.mediaDevices.getUserMedia(t).then(o,r)},!(o.version>55&&"autoGainControl"in n.mediaDevices.getSupportedConstraints())){var a=function(e,t,o){t in e&&!(o in e)&&(e[o]=e[t],delete e[t])},s=n.mediaDevices.getUserMedia.bind(n.mediaDevices);if(n.mediaDevices.getUserMedia=function(e){return"object"===r(e)&&"object"===r(e.audio)&&(e=JSON.parse(JSON.stringify(e)),a(e.audio,"autoGainControl","mozAutoGainControl"),a(e.audio,"noiseSuppression","mozNoiseSuppression")),s(e)},i&&i.prototype.getSettings){var p=i.prototype.getSettings;i.prototype.getSettings=function(){var e=p.apply(this,arguments);return a(e,"mozAutoGainControl","autoGainControl"),a(e,"mozNoiseSuppression","noiseSuppression"),e}}if(i&&i.prototype.applyConstraints){var u=i.prototype.applyConstraints;i.prototype.applyConstraints=function(e){return"audio"===this.kind&&"object"===r(e)&&(e=JSON.parse(JSON.stringify(e)),a(e,"autoGainControl","mozAutoGainControl"),a(e,"noiseSuppression","mozNoiseSuppression")),u.apply(this,[e])}}}}
},{"../utils":"iSxC"}],"UuGU":[function(require,module,exports) {
"use strict";function e(e,i){e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||e.navigator.mediaDevices&&(e.navigator.mediaDevices.getDisplayMedia=function(a){if(!a||!a.video){var t=new DOMException("getDisplayMedia without video constraints is undefined");return t.name="NotFoundError",t.code=8,Promise.reject(t)}return!0===a.video?a.video={mediaSource:i}:a.video.mediaSource=i,e.navigator.mediaDevices.getUserMedia(a)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetDisplayMedia=e;
},{}],"Fzdr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimOnTrack=c,exports.shimPeerConnection=s,exports.shimSenderGetStats=p,exports.shimReceiverGetStats=u,exports.shimRemoveStream=f,exports.shimRTCDataChannel=C,exports.shimAddTransceiver=d,exports.shimCreateOffer=y,exports.shimCreateAnswer=l,Object.defineProperty(exports,"shimGetUserMedia",{enumerable:!0,get:function(){return t.shimGetUserMedia}}),Object.defineProperty(exports,"shimGetDisplayMedia",{enumerable:!0,get:function(){return r.shimGetDisplayMedia}});var e=o(require("../utils")),t=require("./getusermedia"),r=require("./getdisplaymedia");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){"object"===a(e)&&e.RTCTrackEvent&&"receiver"in e.RTCTrackEvent.prototype&&!("transceiver"in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function s(t){var r=e.detectBrowser(t);if("object"===a(t)&&(t.RTCPeerConnection||t.mozRTCPeerConnection)){if(!t.RTCPeerConnection&&t.mozRTCPeerConnection&&(t.RTCPeerConnection=t.mozRTCPeerConnection),r.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){var r=t.RTCPeerConnection.prototype[e],n=i({},e,function(){return arguments[0]=new("addIceCandidate"===e?t.RTCIceCandidate:t.RTCSessionDescription)(arguments[0]),r.apply(this,arguments)});t.RTCPeerConnection.prototype[e]=n[e]}),r.version<68){var n=t.RTCPeerConnection.prototype.addIceCandidate;t.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?arguments[0]&&""===arguments[0].candidate?Promise.resolve():n.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())}}var o={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},c=t.RTCPeerConnection.prototype.getStats;t.RTCPeerConnection.prototype.getStats=function(){var[e,t,n]=arguments;return c.apply(this,[e||null]).then(function(e){if(r.version<53&&!t)try{e.forEach(function(e){e.type=o[e.type]||e.type})}catch(n){if("TypeError"!==n.name)throw n;e.forEach(function(t,r){e.set(r,Object.assign({},t,{type:o[t.type]||t.type}))})}return e}).then(t,n)}}}function p(e){if("object"===a(e)&&e.RTCPeerConnection&&e.RTCRtpSender&&!(e.RTCRtpSender&&"getStats"in e.RTCRtpSender.prototype)){var t=e.RTCPeerConnection.prototype.getSenders;t&&(e.RTCPeerConnection.prototype.getSenders=function(){var e=this,r=t.apply(this,[]);return r.forEach(function(t){return t._pc=e}),r});var r=e.RTCPeerConnection.prototype.addTrack;r&&(e.RTCPeerConnection.prototype.addTrack=function(){var e=r.apply(this,arguments);return e._pc=this,e}),e.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}}function u(t){if("object"===a(t)&&t.RTCPeerConnection&&t.RTCRtpSender&&!(t.RTCRtpSender&&"getStats"in t.RTCRtpReceiver.prototype)){var r=t.RTCPeerConnection.prototype.getReceivers;r&&(t.RTCPeerConnection.prototype.getReceivers=function(){var e=this,t=r.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t}),e.wrapPeerConnectionEvent(t,"track",function(e){return e.receiver._pc=e.srcElement,e}),t.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}}function f(t){!t.RTCPeerConnection||"removeStream"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.removeStream=function(t){var r=this;e.deprecated("removeStream","removeTrack"),this.getSenders().forEach(function(e){e.track&&t.getTracks().includes(e.track)&&r.removeTrack(e)})})}function C(e){e.DataChannel&&!e.RTCDataChannel&&(e.RTCDataChannel=e.DataChannel)}function d(e){if("object"===a(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.addTransceiver;t&&(e.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];var e=arguments[1],r=e&&"sendEncodings"in e;r&&e.sendEncodings.forEach(function(e){if("rid"in e){if(!/^[a-z0-9]{0,16}$/i.test(e.rid))throw new TypeError("Invalid RID value provided.")}if("scaleResolutionDownBy"in e&&!(parseFloat(e.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in e&&!(parseFloat(e.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});var n=t.apply(this,arguments);if(r){var{sender:o}=n,i=o.getParameters();"encodings"in i||(i.encodings=e.sendEncodings,this.setParametersPromises.push(o.setParameters(i).catch(function(){})))}return n})}}function y(e){if("object"===a(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function(){var e=arguments,r=this;return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(function(){return t.apply(r,e)}).finally(function(){r.setParametersPromises=[]}):t.apply(this,arguments)}}}function l(e){if("object"===a(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.createAnswer;e.RTCPeerConnection.prototype.createAnswer=function(){var e=arguments,r=this;return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(function(){return t.apply(r,e)}).finally(function(){r.setParametersPromises=[]}):t.apply(this,arguments)}}}
},{"../utils":"iSxC","./getusermedia":"GzSv","./getdisplaymedia":"UuGU"}],"t1lL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimLocalStreamsAPI=n,exports.shimRemoteStreamsAPI=i,exports.shimCallbacksAPI=a,exports.shimGetUserMedia=s,exports.shimConstraints=c,exports.shimRTCIceServerUrls=d,exports.shimTrackEventTransceiver=f,exports.shimCreateOfferLegacy=p;var e=r(require("../utils"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){if("object"===o(e)&&e.RTCPeerConnection){if("getLocalStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in e.RTCPeerConnection.prototype)){var t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addStream=function(e){var r=this;this._localStreams||(this._localStreams=[]),this._localStreams.includes(e)||this._localStreams.push(e),e.getAudioTracks().forEach(function(o){return t.call(r,o,e)}),e.getVideoTracks().forEach(function(o){return t.call(r,o,e)})},e.RTCPeerConnection.prototype.addTrack=function(e){var r=arguments[1];return r&&(this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]),t.apply(this,arguments)}}"removeStream"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.removeStream=function(e){var t=this;this._localStreams||(this._localStreams=[]);var r=this._localStreams.indexOf(e);if(-1!==r){this._localStreams.splice(r,1);var o=e.getTracks();this.getSenders().forEach(function(e){o.includes(e.track)&&t.removeTrack(e)})}})}}function i(e){if("object"===o(e)&&e.RTCPeerConnection&&("getRemoteStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in e.RTCPeerConnection.prototype))){Object.defineProperty(e.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(e){var t=this;this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=e),this.addEventListener("track",this._onaddstreampoly=function(e){e.streams.forEach(function(e){if(t._remoteStreams||(t._remoteStreams=[]),!t._remoteStreams.includes(e)){t._remoteStreams.push(e);var r=new Event("addstream");r.stream=e,t.dispatchEvent(r)}})})}});var t=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(){var e=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(t){t.streams.forEach(function(t){if(e._remoteStreams||(e._remoteStreams=[]),!(e._remoteStreams.indexOf(t)>=0)){e._remoteStreams.push(t);var r=new Event("addstream");r.stream=t,e.dispatchEvent(r)}})}),t.apply(e,arguments)}}}function a(e){if("object"===o(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype,r=t.createOffer,n=t.createAnswer,i=t.setLocalDescription,a=t.setRemoteDescription,s=t.addIceCandidate;t.createOffer=function(e,t){var o=arguments.length>=2?arguments[2]:arguments[0],n=r.apply(this,[o]);return t?(n.then(e,t),Promise.resolve()):n},t.createAnswer=function(e,t){var r=arguments.length>=2?arguments[2]:arguments[0],o=n.apply(this,[r]);return t?(o.then(e,t),Promise.resolve()):o};var c=function(e,t,r){var o=i.apply(this,[e]);return r?(o.then(t,r),Promise.resolve()):o};t.setLocalDescription=c,c=function(e,t,r){var o=a.apply(this,[e]);return r?(o.then(t,r),Promise.resolve()):o},t.setRemoteDescription=c,c=function(e,t,r){var o=s.apply(this,[e]);return r?(o.then(t,r),Promise.resolve()):o},t.addIceCandidate=c}}function s(e){var t=e&&e.navigator;if(t.mediaDevices&&t.mediaDevices.getUserMedia){var r=t.mediaDevices,o=r.getUserMedia.bind(r);t.mediaDevices.getUserMedia=function(e){return o(c(e))}}!t.getUserMedia&&t.mediaDevices&&t.mediaDevices.getUserMedia&&(t.getUserMedia=function(e,r,o){t.mediaDevices.getUserMedia(e).then(r,o)}.bind(t))}function c(t){return t&&void 0!==t.video?Object.assign({},t,{video:e.compactObject(t.video)}):t}function d(t){var r=t.RTCPeerConnection;t.RTCPeerConnection=function(t,o){if(t&&t.iceServers){for(var n=[],i=0;i<t.iceServers.length;i++){var a=t.iceServers[i];!a.hasOwnProperty("urls")&&a.hasOwnProperty("url")?(e.deprecated("RTCIceServer.url","RTCIceServer.urls"),(a=JSON.parse(JSON.stringify(a))).urls=a.url,delete a.url,n.push(a)):n.push(t.iceServers[i])}t.iceServers=n}return new r(t,o)},t.RTCPeerConnection.prototype=r.prototype,"generateCertificate"in t.RTCPeerConnection&&Object.defineProperty(t.RTCPeerConnection,"generateCertificate",{get:function(){return r.generateCertificate}})}function f(e){"object"===o(e)&&e.RTCTrackEvent&&"receiver"in e.RTCTrackEvent.prototype&&!("transceiver"in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function p(e){var t=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function(e){if(e){void 0!==e.offerToReceiveAudio&&(e.offerToReceiveAudio=!!e.offerToReceiveAudio);var r=this.getTransceivers().find(function(e){return"audio"===e.receiver.track.kind});!1===e.offerToReceiveAudio&&r?"sendrecv"===r.direction?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":"recvonly"===r.direction&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):!0!==e.offerToReceiveAudio||r||this.addTransceiver("audio"),void 0!==e.offerToReceiveVideo&&(e.offerToReceiveVideo=!!e.offerToReceiveVideo);var o=this.getTransceivers().find(function(e){return"video"===e.receiver.track.kind});!1===e.offerToReceiveVideo&&o?"sendrecv"===o.direction?o.setDirection?o.setDirection("sendonly"):o.direction="sendonly":"recvonly"===o.direction&&(o.setDirection?o.setDirection("inactive"):o.direction="inactive"):!0!==e.offerToReceiveVideo||o||this.addTransceiver("video")}return t.apply(this,arguments)}}
},{"../utils":"iSxC"}],"GOQK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimRTCIceCandidate=a,exports.shimMaxMessageSize=c,exports.shimSendThrowTypeError=s,exports.shimConnectionState=p,exports.removeAllowExtmapMixed=u;var e=r(require("sdp")),t=o(require("./utils"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,t&&t.set(e,o),o}function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(n){if(n.RTCIceCandidate&&!(n.RTCIceCandidate&&"foundation"in n.RTCIceCandidate.prototype)){var o=n.RTCIceCandidate;n.RTCIceCandidate=function(t){if("object"===i(t)&&t.candidate&&0===t.candidate.indexOf("a=")&&((t=JSON.parse(JSON.stringify(t))).candidate=t.candidate.substr(2)),t.candidate&&t.candidate.length){var n=new o(t),r=e.default.parseCandidate(t.candidate),a=Object.assign(n,r);return a.toJSON=function(){return{candidate:a.candidate,sdpMid:a.sdpMid,sdpMLineIndex:a.sdpMLineIndex,usernameFragment:a.usernameFragment}},a}return new o(t)},n.RTCIceCandidate.prototype=o.prototype,t.wrapPeerConnectionEvent(n,"icecandidate",function(e){return e.candidate&&Object.defineProperty(e,"candidate",{value:new n.RTCIceCandidate(e.candidate),writable:"false"}),e})}}function c(n){if(n.RTCPeerConnection){var o=t.detectBrowser(n);"sctp"in n.RTCPeerConnection.prototype||Object.defineProperty(n.RTCPeerConnection.prototype,"sctp",{get:function(){return void 0===this._sctp?null:this._sctp}});var r=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,"chrome"===o.browser&&o.version>=76){var{sdpSemantics:t}=this.getConfiguration();"plan-b"===t&&Object.defineProperty(this,"sctp",{get:function(){return void 0===this._sctp?null:this._sctp},enumerable:!0,configurable:!0})}if(function(t){if(!t||!t.sdp)return!1;var n=e.default.splitSections(t.sdp);return n.shift(),n.some(function(t){var n=e.default.parseMLine(t);return n&&"application"===n.kind&&-1!==n.protocol.indexOf("SCTP")})}(arguments[0])){var n,i=function(e){var t=e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(null===t||t.length<2)return-1;var n=parseInt(t[1],10);return n!=n?-1:n}(arguments[0]),a=(p=i,u=65536,"firefox"===o.browser&&(u=o.version<57?-1===p?16384:2147483637:o.version<60?57===o.version?65535:65536:2147483637),u),c=function(t,n){var r=65536;"firefox"===o.browser&&57===o.version&&(r=65535);var i=e.default.matchPrefix(t.sdp,"a=max-message-size:");return i.length>0?r=parseInt(i[0].substr(19),10):"firefox"===o.browser&&-1!==n&&(r=2147483637),r}(arguments[0],i);n=0===a&&0===c?Number.POSITIVE_INFINITY:0===a||0===c?Math.max(a,c):Math.min(a,c);var s={};Object.defineProperty(s,"maxMessageSize",{get:function(){return n}}),this._sctp=s}var p,u;return r.apply(this,arguments)}}}function s(e){if(e.RTCPeerConnection&&"createDataChannel"in e.RTCPeerConnection.prototype){var n=e.RTCPeerConnection.prototype.createDataChannel;e.RTCPeerConnection.prototype.createDataChannel=function(){var e=n.apply(this,arguments);return o(e,this),e},t.wrapPeerConnectionEvent(e,"datachannel",function(e){return o(e.channel,e.target),e})}function o(e,t){var n=e.send;e.send=function(){var o=arguments[0],r=o.length||o.size||o.byteLength;if("open"===e.readyState&&t.sctp&&r>t.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+t.sctp.maxMessageSize+" bytes)");return n.apply(e,arguments)}}}function p(e){if(e.RTCPeerConnection&&!("connectionState"in e.RTCPeerConnection.prototype)){var t=e.RTCPeerConnection.prototype;Object.defineProperty(t,"connectionState",{get:function(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(t,"onconnectionstatechange",{get:function(){return this._onconnectionstatechange||null},set:function(e){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),e&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=e)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(function(e){var n=t[e];t[e]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=function(e){var t=e.target;if(t._lastConnectionState!==t.connectionState){t._lastConnectionState=t.connectionState;var n=new Event("connectionstatechange",e);t.dispatchEvent(n)}return e},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}}function u(e){if(e.RTCPeerConnection){var n=t.detectBrowser(e);if(!("chrome"===n.browser&&n.version>=71)){var o=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(e){return e&&e.sdp&&-1!==e.sdp.indexOf("\na=extmap-allow-mixed")&&(e.sdp=e.sdp.split("\n").filter(function(e){return"a=extmap-allow-mixed"!==e.trim()}).join("\n")),o.apply(this,arguments)}}}}
},{"sdp":"YHvh","./utils":"iSxC"}],"KtlG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.adapterFactory=m;var e=o(require("./utils")),r=o(require("./chrome/chrome_shim")),i=o(require("./edge/edge_shim")),s=o(require("./firefox/firefox_shim")),t=o(require("./safari/safari_shim")),a=o(require("./common_shim"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n();if(r&&r.has(e))return r.get(e);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=s?Object.getOwnPropertyDescriptor(e,t):null;a&&(a.get||a.set)?Object.defineProperty(i,t,a):i[t]=e[t]}return i.default=e,r&&r.set(e,i),i}function m(){var{window:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shimChrome:!0,shimFirefox:!0,shimEdge:!0,shimSafari:!0},m=e.log,h=e.detectBrowser(n),d={browserDetails:h,commonShim:a,extractVersion:e.extractVersion,disableLog:e.disableLog,disableWarnings:e.disableWarnings};switch(h.browser){case"chrome":if(!r||!r.shimPeerConnection||!o.shimChrome)return m("Chrome shim is not included in this adapter release."),d;m("adapter.js shimming chrome."),d.browserShim=r,r.shimGetUserMedia(n),r.shimMediaStream(n),r.shimPeerConnection(n),r.shimOnTrack(n),r.shimAddTrackRemoveTrack(n),r.shimGetSendersWithDtmf(n),r.shimGetStats(n),r.shimSenderReceiverGetStats(n),r.fixNegotiationNeeded(n),a.shimRTCIceCandidate(n),a.shimConnectionState(n),a.shimMaxMessageSize(n),a.shimSendThrowTypeError(n),a.removeAllowExtmapMixed(n);break;case"firefox":if(!s||!s.shimPeerConnection||!o.shimFirefox)return m("Firefox shim is not included in this adapter release."),d;m("adapter.js shimming firefox."),d.browserShim=s,s.shimGetUserMedia(n),s.shimPeerConnection(n),s.shimOnTrack(n),s.shimRemoveStream(n),s.shimSenderGetStats(n),s.shimReceiverGetStats(n),s.shimRTCDataChannel(n),s.shimAddTransceiver(n),s.shimCreateOffer(n),s.shimCreateAnswer(n),a.shimRTCIceCandidate(n),a.shimConnectionState(n),a.shimMaxMessageSize(n),a.shimSendThrowTypeError(n);break;case"edge":if(!i||!i.shimPeerConnection||!o.shimEdge)return m("MS edge shim is not included in this adapter release."),d;m("adapter.js shimming edge."),d.browserShim=i,i.shimGetUserMedia(n),i.shimGetDisplayMedia(n),i.shimPeerConnection(n),i.shimReplaceTrack(n),a.shimMaxMessageSize(n),a.shimSendThrowTypeError(n);break;case"safari":if(!t||!o.shimSafari)return m("Safari shim is not included in this adapter release."),d;m("adapter.js shimming safari."),d.browserShim=t,t.shimRTCIceServerUrls(n),t.shimCreateOfferLegacy(n),t.shimCallbacksAPI(n),t.shimLocalStreamsAPI(n),t.shimRemoteStreamsAPI(n),t.shimTrackEventTransceiver(n),t.shimGetUserMedia(n),a.shimRTCIceCandidate(n),a.shimMaxMessageSize(n),a.shimSendThrowTypeError(n),a.removeAllowExtmapMixed(n);break;default:m("Unsupported browser!")}return d}
},{"./utils":"iSxC","./chrome/chrome_shim":"uI5X","./edge/edge_shim":"XRic","./firefox/firefox_shim":"Fzdr","./safari/safari_shim":"t1lL","./common_shim":"GOQK"}],"tI1X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./adapter_factory.js"),r=(0,e.adapterFactory)({window:window}),t=r;exports.default=t;
},{"./adapter_factory.js":"KtlG"}],"sXtV":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("webrtc-adapter"));exports.webRTCAdapter=t.default;
},{"webrtc-adapter":"tI1X"}],"I31f":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./adapter");exports.Supports=new(function(){function e(){this.isIOS=["iPad","iPhone","iPod"].includes(navigator.platform),this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}return e.prototype.isWebRTCSupported=function(){return"undefined"!=typeof RTCPeerConnection},e.prototype.isBrowserSupported=function(){var r=this.getBrowser(),e=this.getVersion();return!!this.supportedBrowsers.includes(r)&&("chrome"===r?e>=this.minChromeVersion:"firefox"===r?e>=this.minFirefoxVersion:"safari"===r&&(!this.isIOS&&e>=this.minSafariVersion))},e.prototype.getBrowser=function(){return r.webRTCAdapter.browserDetails.browser},e.prototype.getVersion=function(){return r.webRTCAdapter.browserDetails.version||0},e.prototype.isUnifiedPlanSupported=function(){var e,i=this.getBrowser(),t=r.webRTCAdapter.browserDetails.version||0;if("chrome"===i&&t<72)return!1;if("firefox"===i&&t>=59)return!0;if(!(window.RTCRtpTransceiver&&"currentDirection"in RTCRtpTransceiver.prototype))return!1;var o=!1;try{(e=new RTCPeerConnection).addTransceiver("audio"),o=!0}catch(n){}finally{e&&e.close()}return o},e.prototype.toString=function(){return"Supports: \n    browser:"+this.getBrowser()+" \n    version:"+this.getVersion()+" \n    isIOS:"+this.isIOS+" \n    isWebRTCSupported:"+this.isWebRTCSupported()+" \n    isBrowserSupported:"+this.isBrowserSupported()+" \n    isUnifiedPlanSupported:"+this.isUnifiedPlanSupported()},e}());
},{"./adapter":"sXtV"}],"BHXf":[function(require,module,exports) {
"use strict";var r=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var t={};if(null!=r)for(var e in r)Object.hasOwnProperty.call(r,e)&&(t[e]=r[e]);return t.default=r,t};Object.defineProperty(exports,"__esModule",{value:!0});var t=r(require("peerjs-js-binarypack")),e=require("./supports"),o={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:0.peerjs.com:3478",username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};exports.util=new(function(){function r(){this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.chunkedMTU=16300,this.defaultConfig=o,this.browser=e.Supports.getBrowser(),this.browserVersion=e.Supports.getVersion(),this.supports=function(){var r,t={browser:e.Supports.isBrowserSupported(),webRTC:e.Supports.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;try{r=new RTCPeerConnection(o),t.audioVideo=!0;var n=void 0;try{n=r.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!n.ordered;try{n.binaryType="blob",t.binaryBlob=!e.Supports.isIOS}catch(a){}}catch(a){}finally{n&&n.close()}}catch(a){}finally{r&&r.close()}return t}(),this.pack=t.pack,this.unpack=t.unpack,this._dataCount=1}return r.prototype.noop=function(){},r.prototype.validateId=function(r){return!r||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(r)},r.prototype.chunk=function(r){for(var t=[],e=r.size,o=Math.ceil(e/exports.util.chunkedMTU),n=0,a=0;a<e;){var i=Math.min(e,a+exports.util.chunkedMTU),s=r.slice(a,i),u={__peerData:this._dataCount,n:n,data:s,total:o};t.push(u),a=i,n++}return this._dataCount++,t},r.prototype.blobToArrayBuffer=function(r,t){var e=new FileReader;return e.onload=function(r){r.target&&t(r.target.result)},e.readAsArrayBuffer(r),e},r.prototype.binaryStringToArrayBuffer=function(r){for(var t=new Uint8Array(r.length),e=0;e<r.length;e++)t[e]=255&r.charCodeAt(e);return t.buffer},r.prototype.randomToken=function(){return Math.random().toString(36).substr(2)},r.prototype.isSecure=function(){return"https:"===location.protocol},r}());
},{"peerjs-js-binarypack":"kdPp","./supports":"I31f"}],"JJlS":[function(require,module,exports) {
"use strict";var e=Object.prototype.hasOwnProperty,t="~";function n(){}function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,n,o,s,i){if("function"!=typeof o)throw new TypeError("The listener must be a function");var c=new r(o,s||e,i),f=t?t+n:n;return e._events[f]?e._events[f].fn?e._events[f]=[e._events[f],c]:e._events[f].push(c):(e._events[f]=c,e._eventsCount++),e}function s(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function i(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(t=!1)),i.prototype.eventNames=function(){var n,r,o=[];if(0===this._eventsCount)return o;for(r in n=this._events)e.call(n,r)&&o.push(t?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(n)):o},i.prototype.listeners=function(e){var n=t?t+e:e,r=this._events[n];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,s=r.length,i=new Array(s);o<s;o++)i[o]=r[o].fn;return i},i.prototype.listenerCount=function(e){var n=t?t+e:e,r=this._events[n];return r?r.fn?1:r.length:0},i.prototype.emit=function(e,n,r,o,s,i){var c=t?t+e:e;if(!this._events[c])return!1;var f,u,a=this._events[c],l=arguments.length;if(a.fn){switch(a.once&&this.removeListener(e,a.fn,void 0,!0),l){case 1:return a.fn.call(a.context),!0;case 2:return a.fn.call(a.context,n),!0;case 3:return a.fn.call(a.context,n,r),!0;case 4:return a.fn.call(a.context,n,r,o),!0;case 5:return a.fn.call(a.context,n,r,o,s),!0;case 6:return a.fn.call(a.context,n,r,o,s,i),!0}for(u=1,f=new Array(l-1);u<l;u++)f[u-1]=arguments[u];a.fn.apply(a.context,f)}else{var v,h=a.length;for(u=0;u<h;u++)switch(a[u].once&&this.removeListener(e,a[u].fn,void 0,!0),l){case 1:a[u].fn.call(a[u].context);break;case 2:a[u].fn.call(a[u].context,n);break;case 3:a[u].fn.call(a[u].context,n,r);break;case 4:a[u].fn.call(a[u].context,n,r,o);break;default:if(!f)for(v=1,f=new Array(l-1);v<l;v++)f[v-1]=arguments[v];a[u].fn.apply(a[u].context,f)}}return!0},i.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},i.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},i.prototype.removeListener=function(e,n,r,o){var i=t?t+e:e;if(!this._events[i])return this;if(!n)return s(this,i),this;var c=this._events[i];if(c.fn)c.fn!==n||o&&!c.once||r&&c.context!==r||s(this,i);else{for(var f=0,u=[],a=c.length;f<a;f++)(c[f].fn!==n||o&&!c[f].once||r&&c[f].context!==r)&&u.push(c[f]);u.length?this._events[i]=1===u.length?u[0]:u:s(this,i)}return this},i.prototype.removeAllListeners=function(e){var r;return e?(r=t?t+e:e,this._events[r]&&s(this,r)):(this._events=new n,this._eventsCount=0),this},i.prototype.off=i.prototype.removeListener,i.prototype.addListener=i.prototype.on,i.prefixed=t,i.EventEmitter=i,"undefined"!=typeof module&&(module.exports=i);
},{}],"WOs9":[function(require,module,exports) {
"use strict";var r=this&&this.__read||function(r,e){var o="function"==typeof Symbol&&r[Symbol.iterator];if(!o)return r;var t,n,l=o.call(r),i=[];try{for(;(void 0===e||e-- >0)&&!(t=l.next()).done;)i.push(t.value)}catch(s){n={error:s}}finally{try{t&&!t.done&&(o=l.return)&&o.call(l)}finally{if(n)throw n.error}}return i},e=this&&this.__spread||function(){for(var e=[],o=0;o<arguments.length;o++)e=e.concat(r(arguments[o]));return e};Object.defineProperty(exports,"__esModule",{value:!0});var o,t="PeerJS: ";!function(r){r[r.Disabled=0]="Disabled",r[r.Errors=1]="Errors",r[r.Warnings=2]="Warnings",r[r.All=3]="All"}(o=exports.LogLevel||(exports.LogLevel={}));var n=function(){function r(){this._logLevel=o.Disabled}return Object.defineProperty(r.prototype,"logLevel",{get:function(){return this._logLevel},set:function(r){this._logLevel=r},enumerable:!0,configurable:!0}),r.prototype.log=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._logLevel>=o.All&&this._print.apply(this,e([o.All],r))},r.prototype.warn=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._logLevel>=o.Warnings&&this._print.apply(this,e([o.Warnings],r))},r.prototype.error=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._logLevel>=o.Errors&&this._print.apply(this,e([o.Errors],r))},r.prototype.setLogFunction=function(r){this._print=r},r.prototype._print=function(r){for(var n=[],l=1;l<arguments.length;l++)n[l-1]=arguments[l];var i=e([t],n);for(var s in i)i[s]instanceof Error&&(i[s]="("+i[s].name+") "+i[s].message);r>=o.All?console.log.apply(console,e(i)):r>=o.Warnings?console.warn.apply(console,e(["WARNING"],i)):r>=o.Errors&&console.error.apply(console,e(["ERROR"],i))},r}();exports.default=new n;
},{}],"ZRYf":[function(require,module,exports) {
"use strict";var e,r,n,o,t,a,i;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e.Open="open",e.Stream="stream",e.Data="data",e.Close="close",e.Error="error",e.IceStateChanged="iceStateChanged"}(e=exports.ConnectionEventType||(exports.ConnectionEventType={})),function(e){e.Data="data",e.Media="media"}(r=exports.ConnectionType||(exports.ConnectionType={})),function(e){e.Open="open",e.Close="close",e.Connection="connection",e.Call="call",e.Disconnected="disconnected",e.Error="error"}(n=exports.PeerEventType||(exports.PeerEventType={})),function(e){e.BrowserIncompatible="browser-incompatible",e.Disconnected="disconnected",e.InvalidID="invalid-id",e.InvalidKey="invalid-key",e.Network="network",e.PeerUnavailable="peer-unavailable",e.SslUnavailable="ssl-unavailable",e.ServerError="server-error",e.SocketError="socket-error",e.SocketClosed="socket-closed",e.UnavailableID="unavailable-id",e.WebRTC="webrtc"}(o=exports.PeerErrorType||(exports.PeerErrorType={})),function(e){e.Binary="binary",e.BinaryUTF8="binary-utf8",e.JSON="json"}(t=exports.SerializationType||(exports.SerializationType={})),function(e){e.Message="message",e.Disconnected="disconnected",e.Error="error",e.Close="close"}(a=exports.SocketEventType||(exports.SocketEventType={})),function(e){e.Heartbeat="HEARTBEAT",e.Candidate="CANDIDATE",e.Offer="OFFER",e.Answer="ANSWER",e.Open="OPEN",e.Error="ERROR",e.IdTaken="ID-TAKEN",e.InvalidKey="INVALID-KEY",e.Leave="LEAVE",e.Expire="EXPIRE"}(i=exports.ServerMessageType||(exports.ServerMessageType={}));
},{}],"wJlv":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function s(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}(),t=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var s,o,r=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(c){o={error:c}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return i},n=this&&this.__spread||function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(t(arguments[n]));return e},s=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],s=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&s>=e.length&&(e=void 0),{value:e&&e[s++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("eventemitter3"),i=o(require("./logger")),c=require("./enums"),a=function(t){function o(e,n,s,o,r,i){void 0===i&&(i=5e3);var c=t.call(this)||this;c.pingInterval=i,c._disconnected=!0,c._messagesQueue=[];var a=e?"wss://":"ws://";return c._baseUrl=a+n+":"+s+o+"peerjs?key="+r,c}return e(o,t),o.prototype.start=function(e,t){var n=this;this._id=e;var s=this._baseUrl+"&id="+e+"&token="+t;!this._socket&&this._disconnected&&(this._socket=new WebSocket(s),this._disconnected=!1,this._socket.onmessage=function(e){var t;try{t=JSON.parse(e.data),i.default.log("Server message received:",t)}catch(s){return void i.default.log("Invalid server message",e.data)}n.emit(c.SocketEventType.Message,t)},this._socket.onclose=function(e){n._disconnected||(i.default.log("Socket closed.",e),n._cleanup(),n._disconnected=!0,n.emit(c.SocketEventType.Disconnected))},this._socket.onopen=function(){n._disconnected||(n._sendQueuedMessages(),i.default.log("Socket open"),n._scheduleHeartbeat())})},o.prototype._scheduleHeartbeat=function(){var e=this;this._wsPingTimer=setTimeout(function(){e._sendHeartbeat()},this.pingInterval)},o.prototype._sendHeartbeat=function(){if(this._wsOpen()){var e=JSON.stringify({type:c.ServerMessageType.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}else i.default.log("Cannot send heartbeat, because socket closed")},o.prototype._wsOpen=function(){return!!this._socket&&1===this._socket.readyState},o.prototype._sendQueuedMessages=function(){var e,t,o=n(this._messagesQueue);this._messagesQueue=[];try{for(var r=s(o),i=r.next();!i.done;i=r.next()){var c=i.value;this.send(c)}}catch(a){e={error:a}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}},o.prototype.send=function(e){if(!this._disconnected)if(this._id)if(e.type){if(this._wsOpen()){var t=JSON.stringify(e);this._socket.send(t)}}else this.emit(c.SocketEventType.Error,"Invalid message");else this._messagesQueue.push(e)},o.prototype.close=function(){this._disconnected||(this._cleanup(),this._disconnected=!0)},o.prototype._cleanup=function(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)},o}(r.EventEmitter);exports.Socket=a;
},{"eventemitter3":"JJlS","./logger":"WOs9","./enums":"ZRYf"}],"HCdX":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},n=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))(function(i,r){function c(e){try{s(o.next(e))}catch(n){r(n)}}function a(e){try{s(o.throw(e))}catch(n){r(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(c,a)}s((o=o.apply(e,n||[])).next())})},t=this&&this.__generator||function(e,n){var t,o,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,o=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=n.call(e,c)}catch(a){r=[6,a],o=0}finally{t=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var i=require("./util"),r=o(require("./logger")),c=require("./enums"),a=function(){function o(e){this.connection=e}return o.prototype.startConnection=function(e){var n=this._startPeerConnection();if(this.connection.peerConnection=n,this.connection.type===c.ConnectionType.Media&&e._stream&&this._addTracksToConnection(e._stream,n),e.originator){if(this.connection.type===c.ConnectionType.Data){var t=this.connection,o={ordered:!!e.reliable},i=n.createDataChannel(t.label,o);t.initialize(i)}this._makeOffer()}else this.handleSDP("OFFER",e.sdp)},o.prototype._startPeerConnection=function(){r.default.log("Creating RTCPeerConnection.");var e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e},o.prototype._setupListeners=function(e){var n=this,t=this.connection.peer,o=this.connection.connectionId,a=this.connection.type,s=this.connection.provider;r.default.log("Listening for ICE candidates."),e.onicecandidate=function(e){e.candidate&&e.candidate.candidate&&(r.default.log("Received ICE candidates for "+t+":",e.candidate),s.socket.send({type:c.ServerMessageType.Candidate,payload:{candidate:e.candidate,type:a,connectionId:o},dst:t}))},e.oniceconnectionstatechange=function(){switch(e.iceConnectionState){case"failed":r.default.log("iceConnectionState is failed, closing connections to "+t),n.connection.emit(c.ConnectionEventType.Error,new Error("Negotiation of connection to "+t+" failed.")),n.connection.close();break;case"closed":r.default.log("iceConnectionState is closed, closing connections to "+t),n.connection.emit(c.ConnectionEventType.Error,new Error("Connection to "+t+" closed.")),n.connection.close();break;case"disconnected":r.default.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=i.util.noop}n.connection.emit(c.ConnectionEventType.IceStateChanged,e.iceConnectionState)},r.default.log("Listening for data channel"),e.ondatachannel=function(e){r.default.log("Received data channel");var n=e.channel;s.getConnection(t,o).initialize(n)},r.default.log("Listening for remote stream"),e.ontrack=function(e){r.default.log("Received remote stream");var i=e.streams[0],a=s.getConnection(t,o);if(a.type===c.ConnectionType.Media){var d=a;n._addStreamToMediaConnection(i,d)}}},o.prototype.cleanup=function(){r.default.log("Cleaning up PeerConnection to "+this.connection.peer);var e=this.connection.peerConnection;if(e){this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=function(){};var n="closed"!==e.signalingState,t=!1;if(this.connection.type===c.ConnectionType.Data){var o=this.connection.dataChannel;o&&(t=!!o.readyState&&"closed"!==o.readyState)}(n||t)&&e.close()}},o.prototype._makeOffer=function(){return n(this,void 0,Promise,function(){var n,o,a,s,d,l,u;return t(this,function(t){switch(t.label){case 0:n=this.connection.peerConnection,o=this.connection.provider,t.label=1;case 1:return t.trys.push([1,7,,8]),[4,n.createOffer(this.connection.options.constraints)];case 2:a=t.sent(),r.default.log("Created offer."),this.connection.options.sdpTransform&&"function"==typeof this.connection.options.sdpTransform&&(a.sdp=this.connection.options.sdpTransform(a.sdp)||a.sdp),t.label=3;case 3:return t.trys.push([3,5,,6]),[4,n.setLocalDescription(a)];case 4:return t.sent(),r.default.log("Set localDescription:",a,"for:"+this.connection.peer),s={sdp:a,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata,browser:i.util.browser},this.connection.type===c.ConnectionType.Data&&(d=this.connection,s=e(e({},s),{label:d.label,reliable:d.reliable,serialization:d.serialization})),o.socket.send({type:c.ServerMessageType.Offer,payload:s,dst:this.connection.peer}),[3,6];case 5:return"OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"!=(l=t.sent())&&(o.emitError(c.PeerErrorType.WebRTC,l),r.default.log("Failed to setLocalDescription, ",l)),[3,6];case 6:return[3,8];case 7:return u=t.sent(),o.emitError(c.PeerErrorType.WebRTC,u),r.default.log("Failed to createOffer, ",u),[3,8];case 8:return[2]}})})},o.prototype._makeAnswer=function(){return n(this,void 0,Promise,function(){var e,n,o,a,s;return t(this,function(t){switch(t.label){case 0:e=this.connection.peerConnection,n=this.connection.provider,t.label=1;case 1:return t.trys.push([1,7,,8]),[4,e.createAnswer()];case 2:o=t.sent(),r.default.log("Created answer."),this.connection.options.sdpTransform&&"function"==typeof this.connection.options.sdpTransform&&(o.sdp=this.connection.options.sdpTransform(o.sdp)||o.sdp),t.label=3;case 3:return t.trys.push([3,5,,6]),[4,e.setLocalDescription(o)];case 4:return t.sent(),r.default.log("Set localDescription:",o,"for:"+this.connection.peer),n.socket.send({type:c.ServerMessageType.Answer,payload:{sdp:o,type:this.connection.type,connectionId:this.connection.connectionId,browser:i.util.browser},dst:this.connection.peer}),[3,6];case 5:return a=t.sent(),n.emitError(c.PeerErrorType.WebRTC,a),r.default.log("Failed to setLocalDescription, ",a),[3,6];case 6:return[3,8];case 7:return s=t.sent(),n.emitError(c.PeerErrorType.WebRTC,s),r.default.log("Failed to create answer, ",s),[3,8];case 8:return[2]}})})},o.prototype.handleSDP=function(e,o){return n(this,void 0,Promise,function(){var n,i,a,s;return t(this,function(t){switch(t.label){case 0:o=new RTCSessionDescription(o),n=this.connection.peerConnection,i=this.connection.provider,r.default.log("Setting remote description",o),a=this,t.label=1;case 1:return t.trys.push([1,5,,6]),[4,n.setRemoteDescription(o)];case 2:return t.sent(),r.default.log("Set remoteDescription:"+e+" for:"+this.connection.peer),"OFFER"!==e?[3,4]:[4,a._makeAnswer()];case 3:t.sent(),t.label=4;case 4:return[3,6];case 5:return s=t.sent(),i.emitError(c.PeerErrorType.WebRTC,s),r.default.log("Failed to setRemoteDescription, ",s),[3,6];case 6:return[2]}})})},o.prototype.handleCandidate=function(e){return n(this,void 0,Promise,function(){var n,o,i,a,s,d;return t(this,function(t){switch(t.label){case 0:r.default.log("handleCandidate:",e),n=e.candidate,o=e.sdpMLineIndex,i=e.sdpMid,a=this.connection.peerConnection,s=this.connection.provider,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,a.addIceCandidate(new RTCIceCandidate({sdpMid:i,sdpMLineIndex:o,candidate:n}))];case 2:return t.sent(),r.default.log("Added ICE candidate for:"+this.connection.peer),[3,4];case 3:return d=t.sent(),s.emitError(c.PeerErrorType.WebRTC,d),r.default.log("Failed to handleCandidate, ",d),[3,4];case 4:return[2]}})})},o.prototype._addTracksToConnection=function(e,n){if(r.default.log("add tracks from stream "+e.id+" to peer connection"),!n.addTrack)return r.default.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(function(t){n.addTrack(t,e)})},o.prototype._addStreamToMediaConnection=function(e,n){r.default.log("add stream "+e.id+" to media connection "+n.connectionId),n.addStream(e)},o}();exports.Negotiator=a;
},{"./util":"BHXf","./logger":"WOs9","./enums":"ZRYf"}],"tQFK":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("eventemitter3"),r=function(e){function r(t,r,n){var o=e.call(this)||this;return o.peer=t,o.provider=r,o.options=n,o._open=!1,o.metadata=n.metadata,o}return t(r,e),Object.defineProperty(r.prototype,"open",{get:function(){return this._open},enumerable:!0,configurable:!0}),r}(e.EventEmitter);exports.BaseConnection=r;
},{"eventemitter3":"JJlS"}],"dbHP":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,o=t&&e[t],r=0;if(o)return o.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./util"),i=r(require("./logger")),a=require("./negotiator"),s=require("./enums"),l=require("./baseconnection"),c=function(r){function l(e,t,o){var i=r.call(this,e,t,o)||this;return i._localStream=i.options._stream,i.connectionId=i.options.connectionId||l.ID_PREFIX+n.util.randomToken(),i._negotiator=new a.Negotiator(i),i._localStream&&i._negotiator.startConnection({_stream:i._localStream,originator:!0}),i}return e(l,r),Object.defineProperty(l.prototype,"type",{get:function(){return s.ConnectionType.Media},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"localStream",{get:function(){return this._localStream},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"remoteStream",{get:function(){return this._remoteStream},enumerable:!0,configurable:!0}),l.prototype.addStream=function(e){i.default.log("Receiving stream",e),this._remoteStream=e,r.prototype.emit.call(this,s.ConnectionEventType.Stream,e)},l.prototype.handleMessage=function(e){var t=e.type,o=e.payload;switch(e.type){case s.ServerMessageType.Answer:this._negotiator.handleSDP(t,o.sdp),this._open=!0;break;case s.ServerMessageType.Candidate:this._negotiator.handleCandidate(o.candidate);break;default:i.default.warn("Unrecognized message type:"+t+" from peer:"+this.peer)}},l.prototype.answer=function(e,r){var n,a;if(void 0===r&&(r={}),this._localStream)i.default.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");else{this._localStream=e,r&&r.sdpTransform&&(this.options.sdpTransform=r.sdpTransform),this._negotiator.startConnection(t(t({},this.options._payload),{_stream:e}));var s=this.provider._getMessages(this.connectionId);try{for(var l=o(s),c=l.next();!c.done;c=l.next()){var p=c.value;this.handleMessage(p)}}catch(u){n={error:u}}finally{try{c&&!c.done&&(a=l.return)&&a.call(l)}finally{if(n)throw n.error}}this._open=!0}},l.prototype.close=function(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,r.prototype.emit.call(this,s.ConnectionEventType.Close))},l.ID_PREFIX="mc_",l}(l.BaseConnection);exports.MediaConnection=c;
},{"./util":"BHXf","./logger":"WOs9","./negotiator":"HCdX","./enums":"ZRYf","./baseconnection":"tQFK"}],"GGp6":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("eventemitter3"),o=t(require("./logger")),n=function(t){function r(){var e=t.call(this)||this;return e.fileReader=new FileReader,e._queue=[],e._processing=!1,e.fileReader.onload=function(t){e._processing=!1,t.target&&e.emit("done",t.target.result),e.doNextTask()},e.fileReader.onerror=function(t){o.default.error("EncodingQueue error:",t),e._processing=!1,e.destroy(),e.emit("error",t)},e}return e(r,t),Object.defineProperty(r.prototype,"queue",{get:function(){return this._queue},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"size",{get:function(){return this.queue.length},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"processing",{get:function(){return this._processing},enumerable:!0,configurable:!0}),r.prototype.enque=function(e){this.queue.push(e),this.processing||this.doNextTask()},r.prototype.destroy=function(){this.fileReader.abort(),this._queue=[]},r.prototype.doNextTask=function(){0!==this.size&&(this.processing||(this._processing=!0,this.fileReader.readAsArrayBuffer(this.queue.shift())))},r}(r.EventEmitter);exports.EncodingQueue=n;
},{"eventemitter3":"JJlS","./logger":"WOs9"}],"GBTQ":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),t=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var i=require("./util"),o=n(require("./logger")),r=require("./negotiator"),a=require("./enums"),s=require("./baseconnection"),u=require("./encodingQueue"),l=function(n){function s(e,t,l){var f=n.call(this,e,t,l)||this;return f.stringify=JSON.stringify,f.parse=JSON.parse,f._buffer=[],f._bufferSize=0,f._buffering=!1,f._chunkedData={},f._encodingQueue=new u.EncodingQueue,f.connectionId=f.options.connectionId||s.ID_PREFIX+i.util.randomToken(),f.label=f.options.label||f.connectionId,f.serialization=f.options.serialization||a.SerializationType.Binary,f.reliable=!!f.options.reliable,f._encodingQueue.on("done",function(e){f._bufferedSend(e)}),f._encodingQueue.on("error",function(){o.default.error("DC#"+f.connectionId+": Error occured in encoding from blob to arraybuffer, close DC"),f.close()}),f._negotiator=new r.Negotiator(f),f._negotiator.startConnection(f.options._payload||{originator:!0}),f}return e(s,n),Object.defineProperty(s.prototype,"type",{get:function(){return a.ConnectionType.Data},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"dataChannel",{get:function(){return this._dc},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"bufferSize",{get:function(){return this._bufferSize},enumerable:!0,configurable:!0}),s.prototype.initialize=function(e){this._dc=e,this._configureDataChannel()},s.prototype._configureDataChannel=function(){var e=this;i.util.supports.binaryBlob&&!i.util.supports.reliable||(this.dataChannel.binaryType="arraybuffer"),this.dataChannel.onopen=function(){o.default.log("DC#"+e.connectionId+" dc connection success"),e._open=!0,e.emit(a.ConnectionEventType.Open)},this.dataChannel.onmessage=function(t){o.default.log("DC#"+e.connectionId+" dc onmessage:",t.data),e._handleDataMessage(t)},this.dataChannel.onclose=function(){o.default.log("DC#"+e.connectionId+" dc closed for:",e.peer),e.close()}},s.prototype._handleDataMessage=function(e){var t=this,o=e.data,r=o.constructor,s=o;if(this.serialization===a.SerializationType.Binary||this.serialization===a.SerializationType.BinaryUTF8){if(r===Blob)return void i.util.blobToArrayBuffer(o,function(e){var n=i.util.unpack(e);t.emit(a.ConnectionEventType.Data,n)});if(r===ArrayBuffer)s=i.util.unpack(o);else if(r===String){var u=i.util.binaryStringToArrayBuffer(o);s=i.util.unpack(u)}}else this.serialization===a.SerializationType.JSON&&(s=this.parse(o));s.__peerData?this._handleChunk(s):n.prototype.emit.call(this,a.ConnectionEventType.Data,s)},s.prototype._handleChunk=function(e){var t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=e.data,n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];var i=new Blob(n.data);this._handleDataMessage({data:i})}},s.prototype.close=function(){this._buffer=[],this._bufferSize=0,this._chunkedData={},this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this._dc=null),this._encodingQueue&&(this._encodingQueue.destroy(),this._encodingQueue.removeAllListeners(),this._encodingQueue=null),this.open&&(this._open=!1,n.prototype.emit.call(this,a.ConnectionEventType.Close))},s.prototype.send=function(e,t){if(this.open)if(this.serialization===a.SerializationType.JSON)this._bufferedSend(this.stringify(e));else if(this.serialization===a.SerializationType.Binary||this.serialization===a.SerializationType.BinaryUTF8){var o=i.util.pack(e);if(!t&&o.size>i.util.chunkedMTU)return void this._sendChunks(o);i.util.supports.binaryBlob?this._bufferedSend(o):this._encodingQueue.enque(o)}else this._bufferedSend(e);else n.prototype.emit.call(this,a.ConnectionEventType.Error,new Error("Connection is not open. You should listen for the `open` event before sending messages."))},s.prototype._bufferedSend=function(e){!this._buffering&&this._trySend(e)||(this._buffer.push(e),this._bufferSize=this._buffer.length)},s.prototype._trySend=function(e){var t=this;if(!this.open)return!1;if(this.dataChannel.bufferedAmount>s.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(function(){t._buffering=!1,t._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(n){return o.default.error("DC#:"+this.connectionId+" Error when sending:",n),this._buffering=!0,this.close(),!1}return!0},s.prototype._tryBuffer=function(){if(this.open&&0!==this._buffer.length){var e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}},s.prototype._sendChunks=function(e){var n,r,a=i.util.chunk(e);o.default.log("DC#"+this.connectionId+" Try to send "+a.length+" chunks...");try{for(var s=t(a),u=s.next();!u.done;u=s.next()){var l=u.value;this.send(l,!0)}}catch(f){n={error:f}}finally{try{u&&!u.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},s.prototype.handleMessage=function(e){var t=e.payload;switch(e.type){case a.ServerMessageType.Answer:this._negotiator.handleSDP(e.type,t.sdp);break;case a.ServerMessageType.Candidate:this._negotiator.handleCandidate(t.candidate);break;default:o.default.warn("Unrecognized message type:",e.type,"from peer:",this.peer)}},s.ID_PREFIX="dc_",s.MAX_BUFFERED_AMOUNT=8388608,s}(s.BaseConnection);exports.DataConnection=l;
},{"./util":"BHXf","./logger":"WOs9","./negotiator":"HCdX","./enums":"ZRYf","./baseconnection":"tQFK","./encodingQueue":"GGp6"}],"in7L":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,r,o){return new(r||(r=Promise))(function(n,s){function i(t){try{a(o.next(t))}catch(e){s(e)}}function u(t){try{a(o.throw(t))}catch(e){s(e)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r(function(t){t(e)})).then(i,u)}a((o=o.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var r,o,n,s,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&s[0]?o.return:s[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,s[1])).done)return n;switch(o=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,o=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(6===s[0]&&i.label<n[1]){i.label=n[1],n=s;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(s);break}n[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(u){s=[6,u],o=0}finally{r=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var o=require("./util"),n=r(require("./logger")),s=function(){function r(t){this._options=t}return r.prototype._buildUrl=function(t){var e=(this._options.secure?"https://":"http://")+this._options.host+":"+this._options.port+this._options.path+this._options.key+"/"+t;return e+="?ts="+(new Date).getTime()+Math.random()},r.prototype.retrieveId=function(){return t(this,void 0,Promise,function(){var t,r,s,i;return e(this,function(e){switch(e.label){case 0:t=this._buildUrl("id"),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,fetch(t)];case 2:if(200!==(r=e.sent()).status)throw new Error("Error. Status:"+r.status);return[2,r.text()];case 3:throw s=e.sent(),n.default.error("Error retrieving ID",s),i="","/"===this._options.path&&this._options.host!==o.util.CLOUD_HOST&&(i=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+i);case 4:return[2]}})})},r.prototype.listAllPeers=function(){return t(this,void 0,Promise,function(){var t,r,s,i;return e(this,function(e){switch(e.label){case 0:t=this._buildUrl("peers"),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,fetch(t)];case 2:if(200!==(r=e.sent()).status){if(401===r.status)throw s="",s=this._options.host===o.util.CLOUD_HOST?"It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":"You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+s);throw new Error("Error. Status:"+r.status)}return[2,r.json()];case 3:throw i=e.sent(),n.default.error("Error retrieving list peers",i),new Error("Could not get list peers from the server."+i);case 4:return[2]}})})},r}();exports.API=s;
},{"./util":"BHXf","./logger":"WOs9"}],"Hxpd":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},n=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},r=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var i=require("eventemitter3"),s=require("./util"),a=o(require("./logger")),c=require("./socket"),l=require("./mediaconnection"),d=require("./dataconnection"),u=require("./enums"),p=require("./api"),h=function(){return function(){}}(),f=function(o){function i(e,n){var r,c=o.call(this)||this;return c._id=null,c._lastServerId=null,c._destroyed=!1,c._disconnected=!1,c._open=!1,c._connections=new Map,c._lostMessages=new Map,e&&e.constructor==Object?n=e:e&&(r=e.toString()),n=t({debug:0,host:s.util.CLOUD_HOST,port:s.util.CLOUD_PORT,path:"/",key:i.DEFAULT_KEY,token:s.util.randomToken(),config:s.util.defaultConfig},n),c._options=n,"/"===c._options.host&&(c._options.host=window.location.hostname),c._options.path&&("/"!==c._options.path[0]&&(c._options.path="/"+c._options.path),"/"!==c._options.path[c._options.path.length-1]&&(c._options.path+="/")),void 0===c._options.secure&&c._options.host!==s.util.CLOUD_HOST?c._options.secure=s.util.isSecure():c._options.host==s.util.CLOUD_HOST&&(c._options.secure=!0),c._options.logFunction&&a.default.setLogFunction(c._options.logFunction),a.default.logLevel=c._options.debug||0,c._api=new p.API(n),c._socket=c._createServerConnection(),s.util.supports.audioVideo||s.util.supports.data?r&&!s.util.validateId(r)?(c._delayedAbort(u.PeerErrorType.InvalidID,'ID "'+r+'" is invalid'),c):(r?c._initialize(r):c._api.retrieveId().then(function(e){return c._initialize(e)}).catch(function(e){return c._abort(u.PeerErrorType.ServerError,e)}),c):(c._delayedAbort(u.PeerErrorType.BrowserIncompatible,"The current browser does not support WebRTC"),c)}return e(i,o),Object.defineProperty(i.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"open",{get:function(){return this._open},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"socket",{get:function(){return this._socket},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"connections",{get:function(){var e,t,o=Object.create(null);try{for(var i=n(this._connections),s=i.next();!s.done;s=i.next()){var a=r(s.value,2),c=a[0],l=a[1];o[c]=l}}catch(d){e={error:d}}finally{try{s&&!s.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return o},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"disconnected",{get:function(){return this._disconnected},enumerable:!0,configurable:!0}),i.prototype._createServerConnection=function(){var e=this,t=new c.Socket(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return t.on(u.SocketEventType.Message,function(t){e._handleMessage(t)}),t.on(u.SocketEventType.Error,function(t){e._abort(u.PeerErrorType.SocketError,t)}),t.on(u.SocketEventType.Disconnected,function(){e.disconnected||(e.emitError(u.PeerErrorType.Network,"Lost connection to server."),e.disconnect())}),t.on(u.SocketEventType.Close,function(){e.disconnected||e._abort(u.PeerErrorType.SocketClosed,"Underlying socket is already closed.")}),t},i.prototype._initialize=function(e){this._id=e,this.socket.start(e,this._options.token)},i.prototype._handleMessage=function(e){var t,r,o=e.type,i=e.payload,s=e.src;switch(o){case u.ServerMessageType.Open:this._lastServerId=this.id,this._open=!0,this.emit(u.PeerEventType.Open,this.id);break;case u.ServerMessageType.Error:this._abort(u.PeerErrorType.ServerError,i.msg);break;case u.ServerMessageType.IdTaken:this._abort(u.PeerErrorType.UnavailableID,'ID "'+this.id+'" is taken');break;case u.ServerMessageType.InvalidKey:this._abort(u.PeerErrorType.InvalidKey,'API KEY "'+this._options.key+'" is invalid');break;case u.ServerMessageType.Leave:a.default.log("Received leave message from "+s),this._cleanupPeer(s),this._connections.delete(s);break;case u.ServerMessageType.Expire:this.emitError(u.PeerErrorType.PeerUnavailable,"Could not connect to peer "+s);break;case u.ServerMessageType.Offer:var c=i.connectionId;if((_=this.getConnection(s,c))&&(_.close(),a.default.warn("Offer received for existing Connection ID:"+c)),i.type===u.ConnectionType.Media)_=new l.MediaConnection(s,this,{connectionId:c,_payload:i,metadata:i.metadata}),this._addConnection(s,_),this.emit(u.PeerEventType.Call,_);else{if(i.type!==u.ConnectionType.Data)return void a.default.warn("Received malformed connection type:"+i.type);_=new d.DataConnection(s,this,{connectionId:c,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable}),this._addConnection(s,_),this.emit(u.PeerEventType.Connection,_)}var p=this._getMessages(c);try{for(var h=n(p),f=h.next();!f.done;f=h.next()){var y=f.value;_.handleMessage(y)}}catch(v){t={error:v}}finally{try{f&&!f.done&&(r=h.return)&&r.call(h)}finally{if(t)throw t.error}}break;default:if(!i)return void a.default.warn("You received a malformed message from "+s+" of type "+o);var _;c=i.connectionId;(_=this.getConnection(s,c))&&_.peerConnection?_.handleMessage(e):c?this._storeMessage(c,e):a.default.warn("You received an unrecognized message:",e)}},i.prototype._storeMessage=function(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)},i.prototype._getMessages=function(e){var t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]},i.prototype.connect=function(e,t){if(void 0===t&&(t={}),this.disconnected)return a.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),void this.emitError(u.PeerErrorType.Disconnected,"Cannot connect to new Peer after disconnecting from server.");var n=new d.DataConnection(e,this,t);return this._addConnection(e,n),n},i.prototype.call=function(e,t,n){if(void 0===n&&(n={}),this.disconnected)return a.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),void this.emitError(u.PeerErrorType.Disconnected,"Cannot connect to new Peer after disconnecting from server.");if(t){n._stream=t;var r=new l.MediaConnection(e,this,n);return this._addConnection(e,r),r}a.default.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.")},i.prototype._addConnection=function(e,t){a.default.log("add connection "+t.type+":"+t.connectionId+" to peerId:"+e),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)},i.prototype._removeConnection=function(e){var t=this._connections.get(e.peer);if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)},i.prototype.getConnection=function(e,t){var r,o,i=this._connections.get(e);if(!i)return null;try{for(var s=n(i),a=s.next();!a.done;a=s.next()){var c=a.value;if(c.connectionId===t)return c}}catch(l){r={error:l}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(r)throw r.error}}return null},i.prototype._delayedAbort=function(e,t){var n=this;setTimeout(function(){n._abort(e,t)},0)},i.prototype._abort=function(e,t){a.default.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()},i.prototype.emitError=function(e,t){var n;a.default.error("Error:",t),(n="string"==typeof t?new Error(t):t).type=e,this.emit(u.PeerEventType.Error,n)},i.prototype.destroy=function(){this.destroyed||(a.default.log("Destroy peer with ID:"+this.id),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit(u.PeerEventType.Close))},i.prototype._cleanup=function(){var e,t;try{for(var r=n(this._connections.keys()),o=r.next();!o.done;o=r.next()){var i=o.value;this._cleanupPeer(i),this._connections.delete(i)}}catch(s){e={error:s}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}this.socket.removeAllListeners()},i.prototype._cleanupPeer=function(e){var t,r,o=this._connections.get(e);if(o)try{for(var i=n(o),s=i.next();!s.done;s=i.next()){s.value.close()}}catch(a){t={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}},i.prototype.disconnect=function(){if(!this.disconnected){var e=this.id;a.default.log("Disconnect peer with ID:"+e),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit(u.PeerEventType.Disconnected,e)}},i.prototype.reconnect=function(){if(this.disconnected&&!this.destroyed)a.default.log("Attempting reconnection to server with ID "+this._lastServerId),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(this.disconnected||this.open)throw new Error("Peer "+this.id+" cannot reconnect because it is not disconnected from the server!");a.default.error("In a hurry? We're still trying to make the initial connection!")}},i.prototype.listAllPeers=function(e){var t=this;void 0===e&&(e=function(e){}),this._api.listAllPeers().then(function(t){return e(t)}).catch(function(e){return t._abort(u.PeerErrorType.ServerError,e)})},i.DEFAULT_KEY="peerjs",i}(i.EventEmitter);exports.Peer=f;
},{"eventemitter3":"JJlS","./util":"BHXf","./logger":"WOs9","./socket":"wJlv","./mediaconnection":"dbHP","./dataconnection":"GBTQ","./enums":"ZRYf","./api":"in7L"}],"iTK6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./util"),r=require("./peer");exports.peerjs={Peer:r.Peer,util:e.util},exports.default=r.Peer,window.peerjs=exports.peerjs,window.Peer=r.Peer;
},{"./util":"BHXf","./peer":"Hxpd"}]},{},["iTK6"], null)
//# sourceMappingURL=/peerjs.min.js.map

/***/ }),
/* 5 */
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 5;
module.exports = webpackEmptyContext;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(peerjs__WEBPACK_IMPORTED_MODULE_1__);
const playVideo = __webpack_require__(1);
const openStream = __webpack_require__(2);



const $ = __webpack_require__(6);
// const Peer = require('peerjs');


const config = {
    host: 'localhost',
    port: 3000,
    secure: true,
    key: 'peerjs',
    path: '/'
}

function getPeer() {
    const id = (0,uid__WEBPACK_IMPORTED_MODULE_0__.uid)(10);
    $('#peer-id').append(id);
    return id;
}
const peer = (0,peerjs__WEBPACK_IMPORTED_MODULE_1__.Peer)(getPeer(), config);

$('#btnCall').on("click", () => {
    const friendId = $('#txtFriendId').val();
    openStream(stream => {
        playVideo(stream, 'localStream');
        const call = peer.call(friendId, stream);
        call.on('stream', remoteStream => playVideo(remoteStream, 'friendStream'));
    })
});

peer.on('call', (call) => {
    openStream(stream => {
        playVideo(stream, 'localStream');
        call.answer(stream);
        call.on('stream', remoteStream => playVideo(remoteStream, 'friendStream'));
    })
})



// openStream(function(stream) {
//     playVideo(stream, 'localStream')
//     const p = new Peer({ initiator: location.hash === '#1', trickle: false, stream });
//     p.on('signal', token =>
//         $('#txtMySignal').val(JSON.stringify(token))
//     );

//     $('#btnConnect').click(() => {
//         const friendSignal = JSON.parse($('#txtFriendSignal').val());
//         p.signal(friendSignal);
//     });

//     p.on('stream', friendStream => playVideo(friendStream, 'friendStream'));
// })
})();

/******/ })()
;