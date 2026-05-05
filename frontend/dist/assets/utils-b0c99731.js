function ac(r,t){return function(){return r.apply(t,arguments)}}const{toString:Qf}=Object.prototype,{getPrototypeOf:jo}=Object,{iterator:Ko,toStringTag:ic}=Symbol,Xo=(r=>t=>{const e=Qf.call(t);return r[e]||(r[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),It=r=>(r=r.toLowerCase(),t=>Xo(t)===r),$o=r=>t=>typeof t===r,{isArray:pr}=Array,ur=$o("undefined");function Mr(r){return r!==null&&!ur(r)&&r.constructor!==null&&!ur(r.constructor)&&it(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const sc=It("ArrayBuffer");function Zf(r){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(r):t=r&&r.buffer&&sc(r.buffer),t}const eh=$o("string"),it=$o("function"),uc=$o("number"),Br=r=>r!==null&&typeof r=="object",th=r=>r===!0||r===!1,po=r=>{if(Xo(r)!=="object")return!1;const t=jo(r);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(ic in r)&&!(Ko in r)},nh=r=>{if(!Br(r)||Mr(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},rh=It("Date"),oh=It("File"),ah=r=>!!(r&&typeof r.uri<"u"),ih=r=>r&&typeof r.getParts<"u",sh=It("Blob"),uh=It("FileList"),ch=r=>Br(r)&&it(r.pipe);function lh(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Us=lh(),zs=typeof Us.FormData<"u"?Us.FormData:void 0,fh=r=>{if(!r)return!1;if(zs&&r instanceof zs)return!0;const t=jo(r);if(!t||t===Object.prototype||!it(r.append))return!1;const e=Xo(r);return e==="formdata"||e==="object"&&it(r.toString)&&r.toString()==="[object FormData]"},hh=It("URLSearchParams"),[dh,ph,vh,mh]=["ReadableStream","Request","Response","Headers"].map(It),gh=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Lr(r,t,{allOwnKeys:e=!1}={}){if(r===null||typeof r>"u")return;let n,o;if(typeof r!="object"&&(r=[r]),pr(r))for(n=0,o=r.length;n<o;n++)t.call(null,r[n],n,r);else{if(Mr(r))return;const a=e?Object.getOwnPropertyNames(r):Object.keys(r),i=a.length;let s;for(n=0;n<i;n++)s=a[n],t.call(null,r[s],s,r)}}function cc(r,t){if(Mr(r))return null;t=t.toLowerCase();const e=Object.keys(r);let n=e.length,o;for(;n-- >0;)if(o=e[n],t===o.toLowerCase())return o;return null}const Tn=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),lc=r=>!ur(r)&&r!==Tn;function ei(...r){const{caseless:t,skipUndefined:e}=lc(this)&&this||{},n={},o=(a,i)=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;const s=t&&cc(n,i)||i,u=ti(n,s)?n[s]:void 0;po(u)&&po(a)?n[s]=ei(u,a):po(a)?n[s]=ei({},a):pr(a)?n[s]=a.slice():(!e||!ur(a))&&(n[s]=a)};for(let a=0,i=r.length;a<i;a++)r[a]&&Lr(r[a],o);return n}const yh=(r,t,e,{allOwnKeys:n}={})=>(Lr(t,(o,a)=>{e&&it(o)?Object.defineProperty(r,a,{__proto__:null,value:ac(o,e),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(r,a,{__proto__:null,value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:n}),r),bh=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),xh=(r,t,e,n)=>{r.prototype=Object.create(t.prototype,n),Object.defineProperty(r.prototype,"constructor",{__proto__:null,value:r,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(r,"super",{__proto__:null,value:t.prototype}),e&&Object.assign(r.prototype,e)},wh=(r,t,e,n)=>{let o,a,i;const s={};if(t=t||{},r==null)return t;do{for(o=Object.getOwnPropertyNames(r),a=o.length;a-- >0;)i=o[a],(!n||n(i,r,t))&&!s[i]&&(t[i]=r[i],s[i]=!0);r=e!==!1&&jo(r)}while(r&&(!e||e(r,t))&&r!==Object.prototype);return t},Ch=(r,t,e)=>{r=String(r),(e===void 0||e>r.length)&&(e=r.length),e-=t.length;const n=r.indexOf(t,e);return n!==-1&&n===e},_h=r=>{if(!r)return null;if(pr(r))return r;let t=r.length;if(!uc(t))return null;const e=new Array(t);for(;t-- >0;)e[t]=r[t];return e},Eh=(r=>t=>r&&t instanceof r)(typeof Uint8Array<"u"&&jo(Uint8Array)),Rh=(r,t)=>{const n=(r&&r[Ko]).call(r);let o;for(;(o=n.next())&&!o.done;){const a=o.value;t.call(r,a[0],a[1])}},Sh=(r,t)=>{let e;const n=[];for(;(e=r.exec(t))!==null;)n.push(e);return n},kh=It("HTMLFormElement"),Ih=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,n,o){return n.toUpperCase()+o}),ti=(({hasOwnProperty:r})=>(t,e)=>r.call(t,e))(Object.prototype),Th=It("RegExp"),fc=(r,t)=>{const e=Object.getOwnPropertyDescriptors(r),n={};Lr(e,(o,a)=>{let i;(i=t(o,a,r))!==!1&&(n[a]=i||o)}),Object.defineProperties(r,n)},Dh=r=>{fc(r,(t,e)=>{if(it(r)&&["arguments","caller","callee"].includes(e))return!1;const n=r[e];if(it(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},Ah=(r,t)=>{const e={},n=o=>{o.forEach(a=>{e[a]=!0})};return pr(r)?n(r):n(String(r).split(t)),e},Nh=()=>{},Fh=(r,t)=>r!=null&&Number.isFinite(r=+r)?r:t;function Ph(r){return!!(r&&it(r.append)&&r[ic]==="FormData"&&r[Ko])}const Oh=r=>{const t=new Array(10),e=(n,o)=>{if(Br(n)){if(t.indexOf(n)>=0)return;if(Mr(n))return n;if(!("toJSON"in n)){t[o]=n;const a=pr(n)?[]:{};return Lr(n,(i,s)=>{const u=e(i,o+1);!ur(u)&&(a[s]=u)}),t[o]=void 0,a}}return n};return e(r,0)},Mh=It("AsyncFunction"),Bh=r=>r&&(Br(r)||it(r))&&it(r.then)&&it(r.catch),hc=((r,t)=>r?setImmediate:t?((e,n)=>(Tn.addEventListener("message",({source:o,data:a})=>{o===Tn&&a===e&&n.length&&n.shift()()},!1),o=>{n.push(o),Tn.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate=="function",it(Tn.postMessage)),Lh=typeof queueMicrotask<"u"?queueMicrotask.bind(Tn):typeof process<"u"&&process.nextTick||hc,Wh=r=>r!=null&&it(r[Ko]),F={isArray:pr,isArrayBuffer:sc,isBuffer:Mr,isFormData:fh,isArrayBufferView:Zf,isString:eh,isNumber:uc,isBoolean:th,isObject:Br,isPlainObject:po,isEmptyObject:nh,isReadableStream:dh,isRequest:ph,isResponse:vh,isHeaders:mh,isUndefined:ur,isDate:rh,isFile:oh,isReactNativeBlob:ah,isReactNative:ih,isBlob:sh,isRegExp:Th,isFunction:it,isStream:ch,isURLSearchParams:hh,isTypedArray:Eh,isFileList:uh,forEach:Lr,merge:ei,extend:yh,trim:gh,stripBOM:bh,inherits:xh,toFlatObject:wh,kindOf:Xo,kindOfTest:It,endsWith:Ch,toArray:_h,forEachEntry:Rh,matchAll:Sh,isHTMLForm:kh,hasOwnProperty:ti,hasOwnProp:ti,reduceDescriptors:fc,freezeMethods:Dh,toObjectSet:Ah,toCamelCase:Ih,noop:Nh,toFiniteNumber:Fh,findKey:cc,global:Tn,isContextDefined:lc,isSpecCompliantForm:Ph,toJSONObject:Oh,isAsyncFn:Mh,isThenable:Bh,setImmediate:hc,asap:Lh,isIterable:Wh},Uh=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zh=r=>{const t={};let e,n,o;return r&&r.split(`
`).forEach(function(i){o=i.indexOf(":"),e=i.substring(0,o).trim().toLowerCase(),n=i.substring(o+1).trim(),!(!e||t[e]&&Uh[e])&&(e==="set-cookie"?t[e]?t[e].push(n):t[e]=[n]:t[e]=t[e]?t[e]+", "+n:n)}),t},Vs=Symbol("internals"),Vh=/[^\x09\x20-\x7E\x80-\xFF]/g;function Hh(r){let t=0,e=r.length;for(;t<e;){const n=r.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;e>t;){const n=r.charCodeAt(e-1);if(n!==9&&n!==32)break;e-=1}return t===0&&e===r.length?r:r.slice(t,e)}function gr(r){return r&&String(r).trim().toLowerCase()}function Gh(r){return Hh(r.replace(Vh,""))}function vo(r){return r===!1||r==null?r:F.isArray(r)?r.map(vo):Gh(String(r))}function qh(r){const t=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=e.exec(r);)t[n[1]]=n[2];return t}const jh=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function wa(r,t,e,n,o){if(F.isFunction(n))return n.call(this,t,e);if(o&&(t=e),!!F.isString(t)){if(F.isString(n))return t.indexOf(n)!==-1;if(F.isRegExp(n))return n.test(t)}}function Kh(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,n)=>e.toUpperCase()+n)}function Xh(r,t){const e=F.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(r,n+e,{__proto__:null,value:function(o,a,i){return this[n].call(this,t,o,a,i)},configurable:!0})})}class Yo{constructor(t){t&&this.set(t)}set(t,e,n){const o=this;function a(s,u,c){const l=gr(u);if(!l)throw new Error("header name must be a non-empty string");const f=F.findKey(o,l);(!f||o[f]===void 0||c===!0||c===void 0&&o[f]!==!1)&&(o[f||u]=vo(s))}const i=(s,u)=>F.forEach(s,(c,l)=>a(c,l,u));if(F.isPlainObject(t)||t instanceof this.constructor)i(t,e);else if(F.isString(t)&&(t=t.trim())&&!jh(t))i(zh(t),e);else if(F.isObject(t)&&F.isIterable(t)){let s={},u,c;for(const l of t){if(!F.isArray(l))throw TypeError("Object iterator must return a key-value pair");s[c=l[0]]=(u=s[c])?F.isArray(u)?[...u,l[1]]:[u,l[1]]:l[1]}i(s,e)}else t!=null&&a(e,t,n);return this}get(t,e){if(t=gr(t),t){const n=F.findKey(this,t);if(n){const o=this[n];if(!e)return o;if(e===!0)return qh(o);if(F.isFunction(e))return e.call(this,o,n);if(F.isRegExp(e))return e.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=gr(t),t){const n=F.findKey(this,t);return!!(n&&this[n]!==void 0&&(!e||wa(this,this[n],n,e)))}return!1}delete(t,e){const n=this;let o=!1;function a(i){if(i=gr(i),i){const s=F.findKey(n,i);s&&(!e||wa(n,n[s],s,e))&&(delete n[s],o=!0)}}return F.isArray(t)?t.forEach(a):a(t),o}clear(t){const e=Object.keys(this);let n=e.length,o=!1;for(;n--;){const a=e[n];(!t||wa(this,this[a],a,t,!0))&&(delete this[a],o=!0)}return o}normalize(t){const e=this,n={};return F.forEach(this,(o,a)=>{const i=F.findKey(n,a);if(i){e[i]=vo(o),delete e[a];return}const s=t?Kh(a):String(a).trim();s!==a&&delete e[a],e[s]=vo(o),n[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return F.forEach(this,(n,o)=>{n!=null&&n!==!1&&(e[o]=t&&F.isArray(n)?n.join(", "):n)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[Vs]=this[Vs]={accessors:{}}).accessors,o=this.prototype;function a(i){const s=gr(i);n[s]||(Xh(o,i),n[s]=!0)}return F.isArray(t)?t.forEach(a):a(t),this}}Yo.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);F.reduceDescriptors(Yo.prototype,({value:r},t)=>{let e=t[0].toUpperCase()+t.slice(1);return{get:()=>r,set(n){this[e]=n}}});F.freezeMethods(Yo);const _t=Yo,$h="[REDACTED ****]";function Yh(r){if(F.hasOwnProp(r,"toJSON"))return!0;let t=Object.getPrototypeOf(r);for(;t&&t!==Object.prototype;){if(F.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function Jh(r,t){const e=new Set(t.map(a=>String(a).toLowerCase())),n=[],o=a=>{if(a===null||typeof a!="object"||F.isBuffer(a))return a;if(n.indexOf(a)!==-1)return;a instanceof _t&&(a=a.toJSON()),n.push(a);let i;if(F.isArray(a))i=[],a.forEach((s,u)=>{const c=o(s);F.isUndefined(c)||(i[u]=c)});else{if(!F.isPlainObject(a)&&Yh(a))return n.pop(),a;i=Object.create(null);for(const[s,u]of Object.entries(a)){const c=e.has(s.toLowerCase())?$h:o(u);F.isUndefined(c)||(i[s]=c)}}return n.pop(),i};return o(r)}class $e extends Error{static from(t,e,n,o,a,i){const s=new $e(t.message,e||t.code,n,o,a);return s.cause=t,s.name=t.name,t.status!=null&&s.status==null&&(s.status=t.status),i&&Object.assign(s,i),s}constructor(t,e,n,o,a){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,e&&(this.code=e),n&&(this.config=n),o&&(this.request=o),a&&(this.response=a,this.status=a.status)}toJSON(){const t=this.config,e=t&&F.hasOwnProp(t,"redact")?t.redact:void 0,n=F.isArray(e)&&e.length>0?Jh(t,e):F.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}}$e.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";$e.ERR_BAD_OPTION="ERR_BAD_OPTION";$e.ECONNABORTED="ECONNABORTED";$e.ETIMEDOUT="ETIMEDOUT";$e.ECONNREFUSED="ECONNREFUSED";$e.ERR_NETWORK="ERR_NETWORK";$e.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";$e.ERR_DEPRECATED="ERR_DEPRECATED";$e.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";$e.ERR_BAD_REQUEST="ERR_BAD_REQUEST";$e.ERR_CANCELED="ERR_CANCELED";$e.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";$e.ERR_INVALID_URL="ERR_INVALID_URL";$e.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const ae=$e,Qh=null;function ni(r){return F.isPlainObject(r)||F.isArray(r)}function dc(r){return F.endsWith(r,"[]")?r.slice(0,-2):r}function Ca(r,t,e){return r?r.concat(t).map(function(o,a){return o=dc(o),!e&&a?"["+o+"]":o}).join(e?".":""):t}function Zh(r){return F.isArray(r)&&!r.some(ni)}const ed=F.toFlatObject(F,{},null,function(t){return/^is[A-Z]/.test(t)});function Jo(r,t,e){if(!F.isObject(r))throw new TypeError("target must be an object");t=t||new FormData,e=F.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,g){return!F.isUndefined(g[v])});const n=e.metaTokens,o=e.visitor||f,a=e.dots,i=e.indexes,s=e.Blob||typeof Blob<"u"&&Blob,u=e.maxDepth===void 0?100:e.maxDepth,c=s&&F.isSpecCompliantForm(t);if(!F.isFunction(o))throw new TypeError("visitor must be a function");function l(m){if(m===null)return"";if(F.isDate(m))return m.toISOString();if(F.isBoolean(m))return m.toString();if(!c&&F.isBlob(m))throw new ae("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(m)||F.isTypedArray(m)?c&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function f(m,v,g){let b=m;if(F.isReactNative(t)&&F.isReactNativeBlob(m))return t.append(Ca(g,v,a),l(m)),!1;if(m&&!g&&typeof m=="object"){if(F.endsWith(v,"{}"))v=n?v:v.slice(0,-2),m=JSON.stringify(m);else if(F.isArray(m)&&Zh(m)||(F.isFileList(m)||F.endsWith(v,"[]"))&&(b=F.toArray(m)))return v=dc(v),b.forEach(function(y,w){!(F.isUndefined(y)||y===null)&&t.append(i===!0?Ca([v],w,a):i===null?v:v+"[]",l(y))}),!1}return ni(m)?!0:(t.append(Ca(g,v,a),l(m)),!1)}const h=[],d=Object.assign(ed,{defaultVisitor:f,convertValue:l,isVisitable:ni});function p(m,v,g=0){if(!F.isUndefined(m)){if(g>u)throw new ae("Object is too deeply nested ("+g+" levels). Max depth: "+u,ae.ERR_FORM_DATA_DEPTH_EXCEEDED);if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+v.join("."));h.push(m),F.forEach(m,function(x,y){(!(F.isUndefined(x)||x===null)&&o.call(t,x,F.isString(y)?y.trim():y,v,d))===!0&&p(x,v?v.concat(y):[y],g+1)}),h.pop()}}if(!F.isObject(r))throw new TypeError("data must be an object");return p(r),t}function Hs(r){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(r).replace(/[!'()~]|%20/g,function(n){return t[n]})}function Ii(r,t){this._pairs=[],r&&Jo(r,this,t)}const pc=Ii.prototype;pc.append=function(t,e){this._pairs.push([t,e])};pc.toString=function(t){const e=t?function(n){return t.call(this,n,Hs)}:Hs;return this._pairs.map(function(o){return e(o[0])+"="+e(o[1])},"").join("&")};function td(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function vc(r,t,e){if(!t)return r;const n=e&&e.encode||td,o=F.isFunction(e)?{serialize:e}:e,a=o&&o.serialize;let i;if(a?i=a(t,o):i=F.isURLSearchParams(t)?t.toString():new Ii(t,o).toString(n),i){const s=r.indexOf("#");s!==-1&&(r=r.slice(0,s)),r+=(r.indexOf("?")===-1?"?":"&")+i}return r}class nd{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){F.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Gs=nd,Ti={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},rd=typeof URLSearchParams<"u"?URLSearchParams:Ii,od=typeof FormData<"u"?FormData:null,ad=typeof Blob<"u"?Blob:null,id={isBrowser:!0,classes:{URLSearchParams:rd,FormData:od,Blob:ad},protocols:["http","https","file","blob","url","data"]},Di=typeof window<"u"&&typeof document<"u",ri=typeof navigator=="object"&&navigator||void 0,sd=Di&&(!ri||["ReactNative","NativeScript","NS"].indexOf(ri.product)<0),ud=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),cd=Di&&window.location.href||"http://localhost",ld=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Di,hasStandardBrowserEnv:sd,hasStandardBrowserWebWorkerEnv:ud,navigator:ri,origin:cd},Symbol.toStringTag,{value:"Module"})),Qe={...ld,...id};function fd(r,t){return Jo(r,new Qe.classes.URLSearchParams,{visitor:function(e,n,o,a){return Qe.isNode&&F.isBuffer(e)?(this.append(n,e.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...t})}function hd(r){return F.matchAll(/\w+|\[(\w*)]/g,r).map(t=>t[0]==="[]"?"":t[1]||t[0])}function dd(r){const t={},e=Object.keys(r);let n;const o=e.length;let a;for(n=0;n<o;n++)a=e[n],t[a]=r[a];return t}function mc(r){function t(e,n,o,a){let i=e[a++];if(i==="__proto__")return!0;const s=Number.isFinite(+i),u=a>=e.length;return i=!i&&F.isArray(o)?o.length:i,u?(F.hasOwnProp(o,i)?o[i]=F.isArray(o[i])?o[i].concat(n):[o[i],n]:o[i]=n,!s):((!o[i]||!F.isObject(o[i]))&&(o[i]=[]),t(e,n,o[i],a)&&F.isArray(o[i])&&(o[i]=dd(o[i])),!s)}if(F.isFormData(r)&&F.isFunction(r.entries)){const e={};return F.forEachEntry(r,(n,o)=>{t(hd(n),o,e,0)}),e}return null}const qn=(r,t)=>r!=null&&F.hasOwnProp(r,t)?r[t]:void 0;function pd(r,t,e){if(F.isString(r))try{return(t||JSON.parse)(r),F.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(e||JSON.stringify)(r)}const Ai={transitional:Ti,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){const n=e.getContentType()||"",o=n.indexOf("application/json")>-1,a=F.isObject(t);if(a&&F.isHTMLForm(t)&&(t=new FormData(t)),F.isFormData(t))return o?JSON.stringify(mc(t)):t;if(F.isArrayBuffer(t)||F.isBuffer(t)||F.isStream(t)||F.isFile(t)||F.isBlob(t)||F.isReadableStream(t))return t;if(F.isArrayBufferView(t))return t.buffer;if(F.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(a){const u=qn(this,"formSerializer");if(n.indexOf("application/x-www-form-urlencoded")>-1)return fd(t,u).toString();if((s=F.isFileList(t))||n.indexOf("multipart/form-data")>-1){const c=qn(this,"env"),l=c&&c.FormData;return Jo(s?{"files[]":t}:t,l&&new l,u)}}return a||o?(e.setContentType("application/json",!1),pd(t)):t}],transformResponse:[function(t){const e=qn(this,"transitional")||Ai.transitional,n=e&&e.forcedJSONParsing,o=qn(this,"responseType"),a=o==="json";if(F.isResponse(t)||F.isReadableStream(t))return t;if(t&&F.isString(t)&&(n&&!o||a)){const s=!(e&&e.silentJSONParsing)&&a;try{return JSON.parse(t,qn(this,"parseReviver"))}catch(u){if(s)throw u.name==="SyntaxError"?ae.from(u,ae.ERR_BAD_RESPONSE,this,null,qn(this,"response")):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qe.classes.FormData,Blob:Qe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};F.forEach(["delete","get","head","post","put","patch","query"],r=>{Ai.headers[r]={}});const Ni=Ai;function _a(r,t){const e=this||Ni,n=t||e,o=_t.from(n.headers);let a=n.data;return F.forEach(r,function(s){a=s.call(e,a,o.normalize(),t?t.status:void 0)}),o.normalize(),a}function gc(r){return!!(r&&r.__CANCEL__)}class vd extends ae{constructor(t,e,n){super(t??"canceled",ae.ERR_CANCELED,e,n),this.name="CanceledError",this.__CANCEL__=!0}}const Wr=vd;function yc(r,t,e){const n=e.config.validateStatus;!e.status||!n||n(e.status)?r(e):t(new ae("Request failed with status code "+e.status,e.status>=400&&e.status<500?ae.ERR_BAD_REQUEST:ae.ERR_BAD_RESPONSE,e.config,e.request,e))}function md(r){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(r);return t&&t[1]||""}function gd(r,t){r=r||10;const e=new Array(r),n=new Array(r);let o=0,a=0,i;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),l=n[a];i||(i=c),e[o]=u,n[o]=c;let f=a,h=0;for(;f!==o;)h+=e[f++],f=f%r;if(o=(o+1)%r,o===a&&(a=(a+1)%r),c-i<t)return;const d=l&&c-l;return d?Math.round(h*1e3/d):void 0}}function yd(r,t){let e=0,n=1e3/t,o,a;const i=(c,l=Date.now())=>{e=l,o=null,a&&(clearTimeout(a),a=null),r(...c)};return[(...c)=>{const l=Date.now(),f=l-e;f>=n?i(c,l):(o=c,a||(a=setTimeout(()=>{a=null,i(o)},n-f)))},()=>o&&i(o)]}const bo=(r,t,e=3)=>{let n=0;const o=gd(50,250);return yd(a=>{const i=a.loaded,s=a.lengthComputable?a.total:void 0,u=s!=null?Math.min(i,s):i,c=Math.max(0,u-n),l=o(c);n=Math.max(n,u);const f={loaded:u,total:s,progress:s?u/s:void 0,bytes:c,rate:l||void 0,estimated:l&&s?(s-u)/l:void 0,event:a,lengthComputable:s!=null,[t?"download":"upload"]:!0};r(f)},e)},qs=(r,t)=>{const e=r!=null;return[n=>t[0]({lengthComputable:e,total:r,loaded:n}),t[1]]},js=r=>(...t)=>F.asap(()=>r(...t)),bd=Qe.hasStandardBrowserEnv?((r,t)=>e=>(e=new URL(e,Qe.origin),r.protocol===e.protocol&&r.host===e.host&&(t||r.port===e.port)))(new URL(Qe.origin),Qe.navigator&&/(msie|trident)/i.test(Qe.navigator.userAgent)):()=>!0,xd=Qe.hasStandardBrowserEnv?{write(r,t,e,n,o,a,i){if(typeof document>"u")return;const s=[`${r}=${encodeURIComponent(t)}`];F.isNumber(e)&&s.push(`expires=${new Date(e).toUTCString()}`),F.isString(n)&&s.push(`path=${n}`),F.isString(o)&&s.push(`domain=${o}`),a===!0&&s.push("secure"),F.isString(i)&&s.push(`SameSite=${i}`),document.cookie=s.join("; ")},read(r){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let e=0;e<t.length;e++){const n=t[e].replace(/^\s+/,""),o=n.indexOf("=");if(o!==-1&&n.slice(0,o)===r)return decodeURIComponent(n.slice(o+1))}return null},remove(r){this.write(r,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function wd(r){return typeof r!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function Cd(r,t){return t?r.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):r}function bc(r,t,e){let n=!wd(t);return r&&(n||e===!1)?Cd(r,t):t}const Ks=r=>r instanceof _t?{...r}:r;function Pn(r,t){t=t||{};const e=Object.create(null);Object.defineProperty(e,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function n(c,l,f,h){return F.isPlainObject(c)&&F.isPlainObject(l)?F.merge.call({caseless:h},c,l):F.isPlainObject(l)?F.merge({},l):F.isArray(l)?l.slice():l}function o(c,l,f,h){if(F.isUndefined(l)){if(!F.isUndefined(c))return n(void 0,c,f,h)}else return n(c,l,f,h)}function a(c,l){if(!F.isUndefined(l))return n(void 0,l)}function i(c,l){if(F.isUndefined(l)){if(!F.isUndefined(c))return n(void 0,c)}else return n(void 0,l)}function s(c,l,f){if(F.hasOwnProp(t,f))return n(c,l);if(F.hasOwnProp(r,f))return n(void 0,c)}const u={url:a,method:a,data:a,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,allowedSocketPaths:i,responseEncoding:i,validateStatus:s,headers:(c,l,f)=>o(Ks(c),Ks(l),f,!0)};return F.forEach(Object.keys({...r,...t}),function(l){if(l==="__proto__"||l==="constructor"||l==="prototype")return;const f=F.hasOwnProp(u,l)?u[l]:o,h=F.hasOwnProp(r,l)?r[l]:void 0,d=F.hasOwnProp(t,l)?t[l]:void 0,p=f(h,d,l);F.isUndefined(p)&&f!==s||(e[l]=p)}),e}const _d=["content-type","content-length"];function Ed(r,t,e){if(e!=="content-only"){r.set(t);return}Object.entries(t).forEach(([n,o])=>{_d.includes(n.toLowerCase())&&r.set(n,o)})}const Rd=r=>encodeURIComponent(r).replace(/%([0-9A-F]{2})/gi,(t,e)=>String.fromCharCode(parseInt(e,16))),xc=r=>{const t=Pn({},r),e=h=>F.hasOwnProp(t,h)?t[h]:void 0,n=e("data");let o=e("withXSRFToken");const a=e("xsrfHeaderName"),i=e("xsrfCookieName");let s=e("headers");const u=e("auth"),c=e("baseURL"),l=e("allowAbsoluteUrls"),f=e("url");if(t.headers=s=_t.from(s),t.url=vc(bc(c,f,l),r.params,r.paramsSerializer),u&&s.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?Rd(u.password):""))),F.isFormData(n)&&(Qe.hasStandardBrowserEnv||Qe.hasStandardBrowserWebWorkerEnv?s.setContentType(void 0):F.isFunction(n.getHeaders)&&Ed(s,n.getHeaders(),e("formDataHeaderPolicy"))),Qe.hasStandardBrowserEnv&&(F.isFunction(o)&&(o=o(t)),o===!0||o==null&&bd(t.url))){const d=a&&i&&xd.read(i);d&&s.set(a,d)}return t},Sd=typeof XMLHttpRequest<"u",kd=Sd&&function(r){return new Promise(function(e,n){const o=xc(r);let a=o.data;const i=_t.from(o.headers).normalize();let{responseType:s,onUploadProgress:u,onDownloadProgress:c}=o,l,f,h,d,p;function m(){d&&d(),p&&p(),o.cancelToken&&o.cancelToken.unsubscribe(l),o.signal&&o.signal.removeEventListener("abort",l)}let v=new XMLHttpRequest;v.open(o.method.toUpperCase(),o.url,!0),v.timeout=o.timeout;function g(){if(!v)return;const x=_t.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),w={data:!s||s==="text"||s==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:x,config:r,request:v};yc(function(I){e(I),m()},function(I){n(I),m()},w),v=null}"onloadend"in v?v.onloadend=g:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.startsWith("file:"))||setTimeout(g)},v.onabort=function(){v&&(n(new ae("Request aborted",ae.ECONNABORTED,r,v)),m(),v=null)},v.onerror=function(y){const w=y&&y.message?y.message:"Network Error",C=new ae(w,ae.ERR_NETWORK,r,v);C.event=y||null,n(C),m(),v=null},v.ontimeout=function(){let y=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const w=o.transitional||Ti;o.timeoutErrorMessage&&(y=o.timeoutErrorMessage),n(new ae(y,w.clarifyTimeoutError?ae.ETIMEDOUT:ae.ECONNABORTED,r,v)),m(),v=null},a===void 0&&i.setContentType(null),"setRequestHeader"in v&&F.forEach(i.toJSON(),function(y,w){v.setRequestHeader(w,y)}),F.isUndefined(o.withCredentials)||(v.withCredentials=!!o.withCredentials),s&&s!=="json"&&(v.responseType=o.responseType),c&&([h,p]=bo(c,!0),v.addEventListener("progress",h)),u&&v.upload&&([f,d]=bo(u),v.upload.addEventListener("progress",f),v.upload.addEventListener("loadend",d)),(o.cancelToken||o.signal)&&(l=x=>{v&&(n(!x||x.type?new Wr(null,r,v):x),v.abort(),m(),v=null)},o.cancelToken&&o.cancelToken.subscribe(l),o.signal&&(o.signal.aborted?l():o.signal.addEventListener("abort",l)));const b=md(o.url);if(b&&!Qe.protocols.includes(b)){n(new ae("Unsupported protocol "+b+":",ae.ERR_BAD_REQUEST,r));return}v.send(a||null)})},Id=(r,t)=>{const{length:e}=r=r?r.filter(Boolean):[];if(t||e){let n=new AbortController,o;const a=function(c){if(!o){o=!0,s();const l=c instanceof Error?c:this.reason;n.abort(l instanceof ae?l:new Wr(l instanceof Error?l.message:l))}};let i=t&&setTimeout(()=>{i=null,a(new ae(`timeout of ${t}ms exceeded`,ae.ETIMEDOUT))},t);const s=()=>{r&&(i&&clearTimeout(i),i=null,r.forEach(c=>{c.unsubscribe?c.unsubscribe(a):c.removeEventListener("abort",a)}),r=null)};r.forEach(c=>c.addEventListener("abort",a));const{signal:u}=n;return u.unsubscribe=()=>F.asap(s),u}},Td=Id,Dd=function*(r,t){let e=r.byteLength;if(!t||e<t){yield r;return}let n=0,o;for(;n<e;)o=n+t,yield r.slice(n,o),n=o},Ad=async function*(r,t){for await(const e of Nd(r))yield*Dd(e,t)},Nd=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const t=r.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Xs=(r,t,e,n)=>{const o=Ad(r,t);let a=0,i,s=u=>{i||(i=!0,n&&n(u))};return new ReadableStream({async pull(u){try{const{done:c,value:l}=await o.next();if(c){s(),u.close();return}let f=l.byteLength;if(e){let h=a+=f;e(h)}u.enqueue(new Uint8Array(l))}catch(c){throw s(c),c}},cancel(u){return s(u),o.return()}},{highWaterMark:2})};function Fd(r){if(!r||typeof r!="string"||!r.startsWith("data:"))return 0;const t=r.indexOf(",");if(t<0)return 0;const e=r.slice(5,t),n=r.slice(t+1);if(/;base64/i.test(e)){let i=n.length;const s=n.length;for(let d=0;d<s;d++)if(n.charCodeAt(d)===37&&d+2<s){const p=n.charCodeAt(d+1),m=n.charCodeAt(d+2);(p>=48&&p<=57||p>=65&&p<=70||p>=97&&p<=102)&&(m>=48&&m<=57||m>=65&&m<=70||m>=97&&m<=102)&&(i-=2,d+=2)}let u=0,c=s-1;const l=d=>d>=2&&n.charCodeAt(d-2)===37&&n.charCodeAt(d-1)===51&&(n.charCodeAt(d)===68||n.charCodeAt(d)===100);c>=0&&(n.charCodeAt(c)===61?(u++,c--):l(c)&&(u++,c-=3)),u===1&&c>=0&&(n.charCodeAt(c)===61||l(c))&&u++;const h=Math.floor(i/4)*3-(u||0);return h>0?h:0}if(typeof Buffer<"u"&&typeof Buffer.byteLength=="function")return Buffer.byteLength(n,"utf8");let a=0;for(let i=0,s=n.length;i<s;i++){const u=n.charCodeAt(i);if(u<128)a+=1;else if(u<2048)a+=2;else if(u>=55296&&u<=56319&&i+1<s){const c=n.charCodeAt(i+1);c>=56320&&c<=57343?(a+=4,i++):a+=3}else a+=3}return a}const Fi="1.16.0",$s=64*1024,{isFunction:Jr}=F,Ys=(r,...t)=>{try{return!!r(...t)}catch{return!1}},Pd=r=>{const t=F.global??globalThis,{ReadableStream:e,TextEncoder:n}=t;r=F.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},r);const{fetch:o,Request:a,Response:i}=r,s=o?Jr(o):typeof fetch=="function",u=Jr(a),c=Jr(i);if(!s)return!1;const l=s&&Jr(e),f=s&&(typeof n=="function"?(g=>b=>g.encode(b))(new n):async g=>new Uint8Array(await new a(g).arrayBuffer())),h=u&&l&&Ys(()=>{let g=!1;const b=new a(Qe.origin,{body:new e,method:"POST",get duplex(){return g=!0,"half"}}),x=b.headers.has("Content-Type");return b.body!=null&&b.body.cancel(),g&&!x}),d=c&&l&&Ys(()=>F.isReadableStream(new i("").body)),p={stream:d&&(g=>g.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!p[g]&&(p[g]=(b,x)=>{let y=b&&b[g];if(y)return y.call(b);throw new ae(`Response type '${g}' is not supported`,ae.ERR_NOT_SUPPORT,x)})});const m=async g=>{if(g==null)return 0;if(F.isBlob(g))return g.size;if(F.isSpecCompliantForm(g))return(await new a(Qe.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(F.isArrayBufferView(g)||F.isArrayBuffer(g))return g.byteLength;if(F.isURLSearchParams(g)&&(g=g+""),F.isString(g))return(await f(g)).byteLength},v=async(g,b)=>{const x=F.toFiniteNumber(g.getContentLength());return x??m(b)};return async g=>{let{url:b,method:x,data:y,signal:w,cancelToken:C,timeout:I,onDownloadProgress:k,onUploadProgress:S,responseType:R,headers:A,withCredentials:D="same-origin",fetchOptions:L,maxContentLength:B,maxBodyLength:O}=xc(g);const U=F.isNumber(B)&&B>-1,V=F.isNumber(O)&&O>-1;let z=o||fetch;R=R?(R+"").toLowerCase():"text";let H=Td([w,C&&C.toAbortSignal()],I),G=null;const j=H&&H.unsubscribe&&(()=>{H.unsubscribe()});let Q;try{if(U&&typeof b=="string"&&b.startsWith("data:")&&Fd(b)>B)throw new ae("maxContentLength size of "+B+" exceeded",ae.ERR_BAD_RESPONSE,g,G);if(V&&x!=="get"&&x!=="head"){const Z=await v(A,y);if(typeof Z=="number"&&isFinite(Z)&&Z>O)throw new ae("Request body larger than maxBodyLength limit",ae.ERR_BAD_REQUEST,g,G)}if(S&&h&&x!=="get"&&x!=="head"&&(Q=await v(A,y))!==0){let Z=new a(b,{method:"POST",body:y,duplex:"half"}),he;if(F.isFormData(y)&&(he=Z.headers.get("content-type"))&&A.setContentType(he),Z.body){const[Ee,pe]=qs(Q,bo(js(S)));y=Xs(Z.body,$s,Ee,pe)}}F.isString(D)||(D=D?"include":"omit");const X=u&&"credentials"in a.prototype;if(F.isFormData(y)){const Z=A.getContentType();Z&&/^multipart\/form-data/i.test(Z)&&!/boundary=/i.test(Z)&&A.delete("content-type")}A.set("User-Agent","axios/"+Fi,!1);const ie={...L,signal:H,method:x.toUpperCase(),headers:A.normalize().toJSON(),body:y,duplex:"half",credentials:X?D:void 0};G=u&&new a(b,ie);let oe=await(u?z(G,L):z(b,ie));if(U){const Z=F.toFiniteNumber(oe.headers.get("content-length"));if(Z!=null&&Z>B)throw new ae("maxContentLength size of "+B+" exceeded",ae.ERR_BAD_RESPONSE,g,G)}const fe=d&&(R==="stream"||R==="response");if(d&&oe.body&&(k||U||fe&&j)){const Z={};["status","statusText","headers"].forEach(_e=>{Z[_e]=oe[_e]});const he=F.toFiniteNumber(oe.headers.get("content-length")),[Ee,pe]=k&&qs(he,bo(js(k),!0))||[];let be=0;const ye=_e=>{if(U&&(be=_e,be>B))throw new ae("maxContentLength size of "+B+" exceeded",ae.ERR_BAD_RESPONSE,g,G);Ee&&Ee(_e)};oe=new i(Xs(oe.body,$s,ye,()=>{pe&&pe(),j&&j()}),Z)}R=R||"text";let ce=await p[F.findKey(p,R)||"text"](oe,g);if(U&&!d&&!fe){let Z;if(ce!=null&&(typeof ce.byteLength=="number"?Z=ce.byteLength:typeof ce.size=="number"?Z=ce.size:typeof ce=="string"&&(Z=typeof n=="function"?new n().encode(ce).byteLength:ce.length)),typeof Z=="number"&&Z>B)throw new ae("maxContentLength size of "+B+" exceeded",ae.ERR_BAD_RESPONSE,g,G)}return!fe&&j&&j(),await new Promise((Z,he)=>{yc(Z,he,{data:ce,headers:_t.from(oe.headers),status:oe.status,statusText:oe.statusText,config:g,request:G})})}catch(X){if(j&&j(),H&&H.aborted&&H.reason instanceof ae){const ie=H.reason;throw ie.config=g,G&&(ie.request=G),X!==ie&&(ie.cause=X),ie}throw X&&X.name==="TypeError"&&/Load failed|fetch/i.test(X.message)?Object.assign(new ae("Network Error",ae.ERR_NETWORK,g,G,X&&X.response),{cause:X.cause||X}):ae.from(X,X&&X.code,g,G,X&&X.response)}}},Od=new Map,wc=r=>{let t=r&&r.env||{};const{fetch:e,Request:n,Response:o}=t,a=[n,o,e];let i=a.length,s=i,u,c,l=Od;for(;s--;)u=a[s],c=l.get(u),c===void 0&&l.set(u,c=s?new Map:Pd(t)),l=c;return c};wc();const Pi={http:Qh,xhr:kd,fetch:{get:wc}};F.forEach(Pi,(r,t)=>{if(r){try{Object.defineProperty(r,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(r,"adapterName",{__proto__:null,value:t})}});const Js=r=>`- ${r}`,Md=r=>F.isFunction(r)||r===null||r===!1;function Bd(r,t){r=F.isArray(r)?r:[r];const{length:e}=r;let n,o;const a={};for(let i=0;i<e;i++){n=r[i];let s;if(o=n,!Md(n)&&(o=Pi[(s=String(n)).toLowerCase()],o===void 0))throw new ae(`Unknown adapter '${s}'`);if(o&&(F.isFunction(o)||(o=o.get(t))))break;a[s||"#"+i]=o}if(!o){const i=Object.entries(a).map(([u,c])=>`adapter ${u} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=e?i.length>1?`since :
`+i.map(Js).join(`
`):" "+Js(i[0]):"as no adapter specified";throw new ae("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return o}const Cc={getAdapter:Bd,adapters:Pi};function Ea(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Wr(null,r)}function Qs(r){return Ea(r),r.headers=_t.from(r.headers),r.data=_a.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),Cc.getAdapter(r.adapter||Ni.adapter,r)(r).then(function(n){Ea(r),r.response=n;try{n.data=_a.call(r,r.transformResponse,n)}finally{delete r.response}return n.headers=_t.from(n.headers),n},function(n){if(!gc(n)&&(Ea(r),n&&n.response)){r.response=n.response;try{n.response.data=_a.call(r,r.transformResponse,n.response)}finally{delete r.response}n.response.headers=_t.from(n.response.headers)}return Promise.reject(n)})}const Qo={};["object","boolean","number","function","string","symbol"].forEach((r,t)=>{Qo[r]=function(n){return typeof n===r||"a"+(t<1?"n ":" ")+r}});const Zs={};Qo.transitional=function(t,e,n){function o(a,i){return"[Axios v"+Fi+"] Transitional option '"+a+"'"+i+(n?". "+n:"")}return(a,i,s)=>{if(t===!1)throw new ae(o(i," has been removed"+(e?" in "+e:"")),ae.ERR_DEPRECATED);return e&&!Zs[i]&&(Zs[i]=!0,console.warn(o(i," has been deprecated since v"+e+" and will be removed in the near future"))),t?t(a,i,s):!0}};Qo.spelling=function(t){return(e,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function Ld(r,t,e){if(typeof r!="object")throw new ae("options must be an object",ae.ERR_BAD_OPTION_VALUE);const n=Object.keys(r);let o=n.length;for(;o-- >0;){const a=n[o],i=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(i){const s=r[a],u=s===void 0||i(s,a,r);if(u!==!0)throw new ae("option "+a+" must be "+u,ae.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new ae("Unknown option "+a,ae.ERR_BAD_OPTION)}}const mo={assertOptions:Ld,validators:Qo},yt=mo.validators;class xo{constructor(t){this.defaults=t||{},this.interceptors={request:new Gs,response:new Gs}}async request(t,e){try{return await this._request(t,e)}catch(n){if(n instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const a=(()=>{if(!o.stack)return"";const i=o.stack.indexOf(`
`);return i===-1?"":o.stack.slice(i+1)})();try{if(!n.stack)n.stack=a;else if(a){const i=a.indexOf(`
`),s=i===-1?-1:a.indexOf(`
`,i+1),u=s===-1?"":a.slice(s+1);String(n.stack).endsWith(u)||(n.stack+=`
`+a)}}catch{}}throw n}}_request(t,e){typeof t=="string"?(e=e||{},e.url=t):e=t||{},e=Pn(this.defaults,e);const{transitional:n,paramsSerializer:o,headers:a}=e;n!==void 0&&mo.assertOptions(n,{silentJSONParsing:yt.transitional(yt.boolean),forcedJSONParsing:yt.transitional(yt.boolean),clarifyTimeoutError:yt.transitional(yt.boolean),legacyInterceptorReqResOrdering:yt.transitional(yt.boolean)},!1),o!=null&&(F.isFunction(o)?e.paramsSerializer={serialize:o}:mo.assertOptions(o,{encode:yt.function,serialize:yt.function},!0)),e.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?e.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:e.allowAbsoluteUrls=!0),mo.assertOptions(e,{baseUrl:yt.spelling("baseURL"),withXsrfToken:yt.spelling("withXSRFToken")},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();let i=a&&F.merge(a.common,a[e.method]);a&&F.forEach(["delete","get","head","post","put","patch","query","common"],p=>{delete a[p]}),e.headers=_t.concat(i,a);const s=[];let u=!0;this.interceptors.request.forEach(function(m){if(typeof m.runWhen=="function"&&m.runWhen(e)===!1)return;u=u&&m.synchronous;const v=e.transitional||Ti;v&&v.legacyInterceptorReqResOrdering?s.unshift(m.fulfilled,m.rejected):s.push(m.fulfilled,m.rejected)});const c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});let l,f=0,h;if(!u){const p=[Qs.bind(this),void 0];for(p.unshift(...s),p.push(...c),h=p.length,l=Promise.resolve(e);f<h;)l=l.then(p[f++],p[f++]);return l}h=s.length;let d=e;for(;f<h;){const p=s[f++],m=s[f++];try{d=p(d)}catch(v){m.call(this,v);break}}try{l=Qs.call(this,d)}catch(p){return Promise.reject(p)}for(f=0,h=c.length;f<h;)l=l.then(c[f++],c[f++]);return l}getUri(t){t=Pn(this.defaults,t);const e=bc(t.baseURL,t.url,t.allowAbsoluteUrls);return vc(e,t.params,t.paramsSerializer)}}F.forEach(["delete","get","head","options"],function(t){xo.prototype[t]=function(e,n){return this.request(Pn(n||{},{method:t,url:e,data:(n||{}).data}))}});F.forEach(["post","put","patch","query"],function(t){function e(n){return function(a,i,s){return this.request(Pn(s||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:a,data:i}))}}xo.prototype[t]=e(),t!=="query"&&(xo.prototype[t+"Form"]=e(!0))});const go=xo;class Oi{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(a){e=a});const n=this;this.promise.then(o=>{if(!n._listeners)return;let a=n._listeners.length;for(;a-- >0;)n._listeners[a](o);n._listeners=null}),this.promise.then=o=>{let a;const i=new Promise(s=>{n.subscribe(s),a=s}).then(o);return i.cancel=function(){n.unsubscribe(a)},i},t(function(a,i,s){n.reason||(n.reason=new Wr(a,i,s),e(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);e!==-1&&this._listeners.splice(e,1)}toAbortSignal(){const t=new AbortController,e=n=>{t.abort(n)};return this.subscribe(e),t.signal.unsubscribe=()=>this.unsubscribe(e),t.signal}static source(){let t;return{token:new Oi(function(o){t=o}),cancel:t}}}const Wd=Oi;function Ud(r){return function(e){return r.apply(null,e)}}function zd(r){return F.isObject(r)&&r.isAxiosError===!0}const oi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(oi).forEach(([r,t])=>{oi[t]=r});const Vd=oi;function _c(r){const t=new go(r),e=ac(go.prototype.request,t);return F.extend(e,go.prototype,t,{allOwnKeys:!0}),F.extend(e,t,null,{allOwnKeys:!0}),e.create=function(o){return _c(Pn(r,o))},e}const Oe=_c(Ni);Oe.Axios=go;Oe.CanceledError=Wr;Oe.CancelToken=Wd;Oe.isCancel=gc;Oe.VERSION=Fi;Oe.toFormData=Jo;Oe.AxiosError=ae;Oe.Cancel=Oe.CanceledError;Oe.all=function(t){return Promise.all(t)};Oe.spread=Ud;Oe.isAxiosError=zd;Oe.mergeConfig=Pn;Oe.AxiosHeaders=_t;Oe.formToJSON=r=>mc(F.isHTMLForm(r)?new FormData(r):r);Oe.getAdapter=Cc.getAdapter;Oe.HttpStatusCode=Vd;Oe.default=Oe;const qw=Oe;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ec=function(r,t){return(Ec=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])})(r,t)};function Tt(r,t){function e(){this.constructor=r}Ec(r,t),r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function Y(r,t,e,n){return new(e||(e=Promise))(function(o,a){function i(c){try{u(n.next(c))}catch(l){a(l)}}function s(c){try{u(n.throw(c))}catch(l){a(l)}}function u(c){c.done?o(c.value):new e(function(l){l(c.value)}).then(i,s)}u((n=n.apply(r,t||[])).next())})}function J(r,t){var e,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(l[0]===6&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(r,i)}catch(f){l=[6,f],n=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var Hd=function(){function r(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},r.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},r.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},r.prototype.getNumber=function(t){return this.get(t)},r.prototype.getBool=function(t){return this.get(t)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},r.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},r.prototype.setFlags=function(t){this.flags=Object.assign({},t)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,n,o=(e=this.global.location.search,n={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return Gd(n,i[0],i[1]),i.join("=")}),n);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(a){var i=a.split(":"),s=i[0],u=i[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function Gd(r,t,e){r[decodeURIComponent(t)]=decodeURIComponent(e||"")}function W(){return Rc}var Rc=null,wo=new Map,ai=new Map;function Sc(r,t){var e=Ic(r,t);return wo.get(e)}function qd(r){return ai.get(r)}function eu(r){for(var t=wo.entries(),e=[];;){var n=t.next(),o=n.done,a=n.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===r&&e.push(s)}return e}function kc(r){var t=r.kernelName,e=r.backendName,n=Ic(t,e);if(wo.has(n))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");wo.set(n,r)}function jd(r){var t=r.kernelName;ai.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),ai.set(t,r)}function Ic(r,t){return t+"_"+r}function ii(r,t,e){return Math.max(r,Math.min(t,e))}function Tc(r){return r%2==0?r:r+1}function Kd(r){for(var t=0,e=0;e<r.length;e++)t+=r[e];return t}function E(r,t){if(!r)throw new Error(typeof t=="string"?t:t())}function we(r,t,e){e===void 0&&(e=""),E(Ge(r,t),function(){return e+" Shapes "+r+" and "+t+" must match"})}function vr(r){E(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function cr(r,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(r)||Ut(r)&&!e)for(var n=0;n<r.length;++n)cr(r[n],t,e);else t.push(r);return t}function ee(r){if(r.length===0)return 1;for(var t=r[0],e=1;e<r.length;e++)t*=r[e];return t}function Ge(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function Fe(r){return r%1==0}function Xd(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var t=Math.exp(2*r);return(t-1)/(t+1)}function si(r){var t=Math.ceil(Math.sqrt(r));return[t,Math.ceil(r/t)]}function tr(r,t){return t<=r.length?r:r+" ".repeat(t-r.length)}function tu(r,t,e){return t===void 0&&(t=function(n){return 0}),new Promise(function(n,o){var a=0,i=function(){if(r())n();else{a++;var s=t(a);e!=null&&a>=e?o():setTimeout(i,s)}};i()})}function $d(r,t){for(var e=1,n=-1,o=0;o<r.length;++o)if(r[o]>=0)e*=r[o];else if(r[o]===-1){if(n!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+n+" and dim "+o);n=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(n===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+r);return r}if(e===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var a=r.slice();return a[n]=t/e,a}function Ve(r,t){var e=t.length;return E((r=r==null?t.map(function(n,o){return o}):[].concat(r)).every(function(n){return n>=-e&&n<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+r}),E(r.every(function(n){return Fe(n)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(n){return n<0?e+n:n})}function In(r,t){for(var e=[],n=[],o=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||o?null:Ve(t,r).sort(),i=0,s=0;s<r.length;++s){if(a!=null){if(a[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(a[i]==null||a[i]>s)&&r[s]===1&&(e.push(r[s]),n.push(s)),a[i]<=s&&i++}r[s]!==1&&(e.push(r[s]),n.push(s))}return{newShape:e,keptDims:n}}function Ir(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else{if(r!=="bool")throw new Error("Unknown data type "+r);e=new Uint8Array(t)}return e}function Co(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else if(r==="bool")e=new Uint8Array(t);else{if(r!=="string")throw new Error("Unknown data type "+r);e=new Array(t)}return e}function Yd(r,t){for(var e=0;e<r.length;e++){var n=r[e];if(isNaN(n)||!isFinite(n))throw Error("A tensor of type "+t+" being uploaded contains "+n+".")}}function Jd(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function Qd(r,t){return t!=="complex64"&&(t!=="float32"||r==="complex64")&&(t!=="int32"||r==="float32"||r==="complex64")&&(t!=="bool"||r!=="bool")}function Ut(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function Dc(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function Zd(r){if(r==null)return 0;var t=0;return r.forEach(function(e){return t+=e.length}),t}function Mi(r){return typeof r=="string"||r instanceof String}function ep(r){return typeof r=="boolean"}function tp(r){return typeof r=="number"}function Ur(r){return Array.isArray(r)?Ur(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":tp(r)?"float32":Mi(r)?"string":ep(r)?"bool":"float32"}function ui(r){return!!(r&&r.constructor&&r.call&&r.apply)}function ci(r,t){for(var e=t;e<r;++e)if(r%e==0)return e;return r}function zt(r){var t=r.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=r[t-1];for(var n=t-3;n>=0;--n)e[n]=e[n+1]*r[n+1];return e}function Ac(r,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=cr(r)),e&&Yd(r,t),function(a,i){return a instanceof Float32Array&&i==="float32"||a instanceof Int32Array&&i==="int32"||a instanceof Uint8Array&&i==="bool"}(r,t))return r;if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool"){for(var n=new Uint8Array(r.length),o=0;o<n.length;++o)Math.round(r[o])!==0&&(n[o]=1);return n}throw new Error("Unknown data type "+t)}function nu(r,t){if(r.length===0)return t[0];var e=r.reduce(function(n,o){return n*o});if(e===0)return[];if(e!==t.length)throw new Error("["+r+"] does not match the input size.");return function n(o,a,i){var s=new Array;if(a.length===1)for(var u=a[0],c=0;c<u;c++)s[c]=i[o+c];else{u=a[0];var l=a.slice(1),f=l.reduce(function(h,d){return h*d});for(c=0;c<u;c++)s[c]=n(o+c*f,l,i)}return s}(0,r,t)}function Nc(r,t){for(var e=zr(r,t),n=0;n<e.length;n++)e[n]=1;return e}function zr(r,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+t)}function Mt(){return W().platform.now()}function Fc(r){r.forEach(function(t){E(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function np(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",W().platform.encode(r,t)}function _o(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",W().platform.decode(r,t)}function ru(r,t,e){if(t===0)return 0;if(t===1)return r[0];for(var n=r[r.length-1],o=0;o<r.length-1;++o)n+=e[o]*r[o];return n}function rp(r,t,e){if(t===0)return[];if(t===1)return[r];for(var n=new Array(t),o=0;o<n.length-1;++o)n[o]=Math.floor(r/e[o]),r-=n[o]*e[o];return n[n.length-1]=r,n}var op=function(){function r(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new ap)}return r.prototype.profileKernel=function(t,e,n){var o,a=this,i=this.backendTimer.time(function(){o=n()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,f){if(l!=="float32")return!1;for(var h=0;h<c.length;h++){var d=c[h];if(isNaN(d)||!isFinite(d))return console.warn("Found "+d+" in the result of '"+f+"'"),!0}})(u,s.dtype,t),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),a.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)})})}),o},r}(),ap=function(){function r(){}return r.prototype.logKernelProfile=function(t,e,n,o,a,i){var s=typeof o=="number"?tr(o+"ms",9):o.error,u=tr(t,25),c=e.rank,l=e.size,f=tr(e.shape.toString(),14),h="";for(var d in a){var p=a[d].shape||e.shape,m=p.length;h+=d+": "+m+"D "+(m>0?p:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+f+"	%c"+l+"	%c"+h+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),ou=20,yr=3,Ra=7;function ip(r,t,e,n){var o=zt(t),a=function(c,l,f,h){var d=ee(l),p=h[h.length-1],m=new Array(p).fill(0),v=l.length,g=f==="complex64"?xr(c):c;if(v>1)for(var b=0;b<d/p;b++)for(var x=b*p,y=0;y<p;y++)m[y]=Math.max(m[y],br(g[x+y],0,f).length);return m}(r,t,e,o),i=t.length,s=function c(l,f,h,d,p,m){m===void 0&&(m=!0);var v=h==="complex64"?2:1,g=f[0],b=f.length;if(b===0)return h==="complex64"?[br(xr(l)[0],0,h)]:h==="bool"?[Pc(l[0])]:[l[0].toString()];if(b===1){if(g>ou){var x=yr*v,y=Array.from(l.slice(0,x)),w=Array.from(l.slice((g-yr)*v,g*v));return h==="complex64"&&(y=xr(y),w=xr(w)),["["+y.map(function(O,U){return br(O,p[U],h)}).join(", ")+", ..., "+w.map(function(O,U){return br(O,p[g-yr+U],h)}).join(", ")+"]"]}return["["+(h==="complex64"?xr(l):Array.from(l)).map(function(O,U){return br(O,p[U],h)}).join(", ")+"]"]}var C=f.slice(1),I=d.slice(1),k=d[0]*v,S=[];if(g>ou){for(var R=0;R<yr;R++){var A=(D=R*k)+k;S.push.apply(S,c(l.slice(D,A),C,h,I,p,!1))}for(S.push("..."),R=g-yr;R<g;R++)A=(D=R*k)+k,S.push.apply(S,c(l.slice(D,A),C,h,I,p,R===g-1))}else for(R=0;R<g;R++){var D;A=(D=R*k)+k,S.push.apply(S,c(l.slice(D,A),C,h,I,p,R===g-1))}var L=b===2?",":"";for(S[0]="["+S[0]+L,R=1;R<S.length-1;R++)S[R]=" "+S[R]+L;var B=`,
`;for(R=2;R<b;R++)B+=`
`;return S[S.length-1]=" "+S[S.length-1]+"]"+(m?"":B),S}(r,t,e,o,a),u=["Tensor"];return n&&(u.push("  dtype: "+e),u.push("  rank: "+i),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function br(r,t,e){return tr(Array.isArray(r)?parseFloat(r[0].toFixed(Ra))+" + "+parseFloat(r[1].toFixed(Ra))+"j":Mi(r)?"'"+r+"'":e==="bool"?Pc(r):parseFloat(r.toFixed(Ra)).toString(),t)}function Pc(r){return r===0?"false":"true"}function xr(r){for(var t=[],e=0;e<r.length;e+=2)t.push([r[e],r[e+1]]);return t}var Tr=function(){function r(t,e,n){var o=this;if(this.dtype=e,this.shape=t.slice(),this.size=ee(t),n!=null){var a=n.length;E(a===this.size,function(){return"Length of values '"+a+"' does not match the size inferred by the shape '"+o.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||Co(e,this.size),this.strides=zt(t)}return r.prototype.set=function(t){for(var e=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];n.length===0&&(n=[0]),E(n.length===this.rank,function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"});var a=this.locToIndex(n);this.values[a]=t},r.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var n=0,o=0,a=t;o<a.length;o++){var i=a[o];if(i<0||i>=this.shape[n]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}n++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},r.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},r.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return Bt().makeTensor(this.values,this.shape,this.dtype)},r}(),Bt=null,M=null,Oc=null,Te=function(){function r(t,e,n,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=ee(t),this.strides=zt(t),this.dataId=n,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},r.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},r.prototype.as4D=function(t,e,n,o){return this.throwIfDisposed(),this.reshape([t,e,n,o])},r.prototype.as5D=function(t,e,n,o,a){return this.throwIfDisposed(),this.reshape([t,e,n,o,a])},r.prototype.asType=function(t){return this.throwIfDisposed(),M.cast(this,t)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return Y(this,void 0,void 0,function(){var t;return J(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,M.buffer(this.shape,this.dtype,t)]}})})},r.prototype.bufferSync=function(){return M.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return Y(this,void 0,void 0,function(){var t;return J(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,nu(this.shape,t)]}})})},r.prototype.arraySync=function(){return nu(this.shape,this.dataSync())},r.prototype.data=function(){return Y(this,void 0,void 0,function(){var t,e;return J(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=Bt().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=n.sent();try{return[2,e.map(function(o){return _o(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,t]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var t=Bt().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(e){return _o(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},r.prototype.bytes=function(){return Y(this,void 0,void 0,function(){var t;return J(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,Bt().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(Bt().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(t){return t===void 0&&(t=!1),M.print(this,t)},r.prototype.reshape=function(t){return this.throwIfDisposed(),M.reshape(this,t)},r.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},r.prototype.expandDims=function(t){return t===void 0&&(t=0),M.expandDims(this,t)},r.prototype.cumsum=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1),M.cumsum(this,t,e,n)},r.prototype.squeeze=function(t){return this.throwIfDisposed(),M.squeeze(this,t)},r.prototype.clone=function(){return this.throwIfDisposed(),M.clone(this)},r.prototype.oneHot=function(t,e,n){return this.throwIfDisposed(),M.oneHot(this,t,e,n)},r.prototype.toString=function(t){return t===void 0&&(t=!1),ip(this.dataSync(),this.shape,this.dtype,t)},r.prototype.tile=function(t){return this.throwIfDisposed(),M.tile(this,t)},r.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),M.gather(this,t,e)},r.prototype.matMul=function(t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!1),this.throwIfDisposed(),M.matMul(this,t,e,n)},r.prototype.dot=function(t){return this.throwIfDisposed(),M.dot(this,t)},r.prototype.norm=function(t,e,n){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1),this.throwIfDisposed(),M.norm(this,t,e,n)},r.prototype.slice=function(t,e){return this.throwIfDisposed(),M.slice(this,t,e)},r.prototype.reverse=function(t){return this.throwIfDisposed(),M.reverse(this,t)},r.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof r&&(t=[t]),M.concat([this].concat(t),e)},r.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),M.split(this,t,e)},r.prototype.stack=function(t,e){return e===void 0&&(e=0),M.stack([this,t],e)},r.prototype.unstack=function(t){return t===void 0&&(t=0),M.unstack(this,t)},r.prototype.pad=function(t,e){return e===void 0&&(e=0),M.pad(this,t,e)},r.prototype.batchNormalization=function(t,e,n,o,a){return n===void 0&&(n=.001),Oc("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,a,o,n)},r.prototype.batchNorm=function(t,e,n,o,a){return a===void 0&&(a=.001),this.throwIfDisposed(),M.batchNorm(this,t,e,n,o,a)},r.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.all(this,t,e)},r.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.any(this,t,e)},r.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.logSumExp(this,t,e)},r.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.sum(this,t,e)},r.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.prod(this,t,e)},r.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.mean(this,t,e)},r.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.min(this,t,e)},r.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.max(this,t,e)},r.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),M.argMin(this,t)},r.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),M.argMax(this,t)},r.prototype.cast=function(t){return this.throwIfDisposed(),M.cast(this,t)},r.prototype.add=function(t){return this.throwIfDisposed(),M.add(this,t)},r.prototype.addStrict=function(t){return this.throwIfDisposed(),M.addStrict(this,t)},r.prototype.atan2=function(t){return this.throwIfDisposed(),M.atan2(this,t)},r.prototype.sub=function(t){return this.throwIfDisposed(),M.sub(this,t)},r.prototype.subStrict=function(t){return this.throwIfDisposed(),M.subStrict(this,t)},r.prototype.pow=function(t){return this.throwIfDisposed(),M.pow(this,t)},r.prototype.powStrict=function(t){return this.throwIfDisposed(),M.powStrict(this,t)},r.prototype.mul=function(t){return this.throwIfDisposed(),M.mul(this,t)},r.prototype.mulStrict=function(t){return this.throwIfDisposed(),M.mulStrict(this,t)},r.prototype.div=function(t){return this.throwIfDisposed(),M.div(this,t)},r.prototype.divNoNan=function(t){return this.throwIfDisposed(),M.divNoNan(this,t)},r.prototype.floorDiv=function(t){return this.throwIfDisposed(),M.floorDiv(this,t)},r.prototype.divStrict=function(t){return this.throwIfDisposed(),M.divStrict(this,t)},r.prototype.minimum=function(t){return this.throwIfDisposed(),M.minimum(this,t)},r.prototype.minimumStrict=function(t){return this.throwIfDisposed(),M.minimumStrict(this,t)},r.prototype.maximum=function(t){return this.throwIfDisposed(),M.maximum(this,t)},r.prototype.maximumStrict=function(t){return this.throwIfDisposed(),M.maximumStrict(this,t)},r.prototype.mod=function(t){return this.throwIfDisposed(),M.mod(this,t)},r.prototype.modStrict=function(t){return this.throwIfDisposed(),M.modStrict(this,t)},r.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),M.squaredDifferenceStrict(this,t)},r.prototype.transpose=function(t){return this.throwIfDisposed(),M.transpose(this,t)},r.prototype.notEqual=function(t){return this.throwIfDisposed(),M.notEqual(this,t)},r.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),M.notEqualStrict(this,t)},r.prototype.less=function(t){return this.throwIfDisposed(),M.less(this,t)},r.prototype.lessStrict=function(t){return this.throwIfDisposed(),M.lessStrict(this,t)},r.prototype.equal=function(t){return this.throwIfDisposed(),M.equal(this,t)},r.prototype.equalStrict=function(t){return this.throwIfDisposed(),M.equalStrict(this,t)},r.prototype.lessEqual=function(t){return this.throwIfDisposed(),M.lessEqual(this,t)},r.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),M.lessEqualStrict(this,t)},r.prototype.greater=function(t){return this.throwIfDisposed(),M.greater(this,t)},r.prototype.greaterStrict=function(t){return this.throwIfDisposed(),M.greaterStrict(this,t)},r.prototype.greaterEqual=function(t){return this.throwIfDisposed(),M.greaterEqual(this,t)},r.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),M.greaterEqualStrict(this,t)},r.prototype.logicalAnd=function(t){return this.throwIfDisposed(),M.logicalAnd(this,t)},r.prototype.logicalOr=function(t){return this.throwIfDisposed(),M.logicalOr(this,t)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),M.logicalNot(this)},r.prototype.logicalXor=function(t){return this.throwIfDisposed(),M.logicalXor(this,t)},r.prototype.where=function(t,e){return this.throwIfDisposed(),M.where(t,this,e)},r.prototype.neg=function(){return this.throwIfDisposed(),M.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),M.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),M.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),M.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),M.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),M.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),M.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),M.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),M.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),M.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),M.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),M.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),M.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),M.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),M.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),M.abs(this)},r.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),M.clipByValue(this,t,e)},r.prototype.relu=function(){return this.throwIfDisposed(),M.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),M.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),M.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),M.selu(this)},r.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),M.leakyRelu(this,t)},r.prototype.prelu=function(t){return this.throwIfDisposed(),M.prelu(this,t)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),M.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),M.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),M.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),M.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),M.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),M.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),M.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),M.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),M.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),M.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),M.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),M.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),M.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),M.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),M.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),M.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),M.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),M.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),M.round(this)},r.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),M.step(this,t)},r.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),M.softmax(this,t)},r.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),M.logSoftmax(this,t)},r.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),M.image.resizeBilinear(this,t,e)},r.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),M.image.resizeNearestNeighbor(this,t,e)},r.prototype.conv1d=function(t,e,n,o,a,i){return o===void 0&&(o="NWC"),a===void 0&&(a=1),this.throwIfDisposed(),M.conv1d(this,t,e,n,o,a,i)},r.prototype.conv2d=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),M.conv2d(this,t,e,n,o,a,i)},r.prototype.conv2dTranspose=function(t,e,n,o,a){return this.throwIfDisposed(),M.conv2dTranspose(this,t,e,n,o,a)},r.prototype.depthwiseConv2D=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),M.depthwiseConv2d(this,t,e,n,o,a,i)},r.prototype.separableConv2d=function(t,e,n,o,a,i){return a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),M.separableConv2d(this,t,e,n,o,a,i)},r.prototype.avgPool=function(t,e,n,o){return this.throwIfDisposed(),M.avgPool(this,t,e,n,o)},r.prototype.maxPool=function(t,e,n,o){return this.throwIfDisposed(),M.maxPool(this,t,e,n,o)},r.prototype.localResponseNormalization=function(t,e,n,o){return t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5),M.localResponseNormalization(this,t,e,n,o)},r.prototype.pool=function(t,e,n,o,a){return this.throwIfDisposed(),M.pool(this,t,e,n,o,a)},r.prototype.variable=function(t,e,n){return t===void 0&&(t=!0),this.throwIfDisposed(),Bt().makeVariable(this,t,e,n)},r.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),M.unsortedSegmentSum(this,t,e)},r.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),M.batchToSpaceND(this,t,e)},r.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),M.spaceToBatchND(this,t,e)},r.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),M.topk(this,t,e)},r.prototype.stridedSlice=function(t,e,n,o,a,i,s,u){return o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),M.stridedSlice(this,t,e,n,o,a,i,s,u)},r.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),M.depthToSpace(this,t,e)},r.prototype.fft=function(){return this.throwIfDisposed(),M.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),M.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),M.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),M.spectral.irfft(this)},r}();Object.defineProperty(Te,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var au,li,fi,hi,di,lr=function(r){function t(e,n,o,a){var i=r.call(this,e.shape,e.dtype,e.dataId,a)||this;return i.trainable=n,i.name=o,i}return Tt(t,r),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!Ge(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");Bt().disposeTensor(this),this.dataId=e.dataId,Bt().incRef(this,null)},t.prototype.dispose=function(){Bt().disposeVariable(this),this.isDisposedInternal=!0},t}(Te);Object.defineProperty(lr,Symbol.hasInstance,{value:function(r){return r instanceof Te&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(au||(au={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(li||(li={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(fi||(fi={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(hi||(hi={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(di||(di={}));var sp={float32:hi,int32:li,bool:fi,complex64:di};function Ke(r,t){if(r==="string"||t==="string"){if(r==="string"&&t==="string")return"string";throw new Error("Can not upcast "+r+" with "+t)}return sp[r][t]}function Sa(r){return Ke(r,"int32")}function Ae(r,t){if(r.dtype===t.dtype)return[r,t];var e=Ke(r.dtype,t.dtype);return[r.cast(e),t.cast(e)]}function up(r,t){E(r.dtype===t.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+t.dtype+") input must match"})}function Mc(r){var t=[];return function e(n,o,a){if(n!=null){if(n instanceof Te)return void o.push(n);if(i=n,!(!Array.isArray(i)&&typeof i!="object")){var i,s=n;for(var u in s){var c=s[u];a.has(c)||(a.add(c),e(c,o,a))}}}}(r,t,new Set),t}var ka,iu=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},r}(),cp=function(){function r(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new iu}return r.prototype.ready=function(){return Y(this,void 0,void 0,function(){var t,e,n;return J(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,o.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(n)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},r.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},r.prototype.registerBackend=function(t,e,n){return n===void 0&&(n=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)},r.prototype.setBackend=function(t){return Y(this,void 0,void 0,function(){var e,n,o;return J(this,function(a){switch(a.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return o=a.sent(),[3,3];case 2:o=n,a.label=3;case 3:if(!o)return[2,!1];a.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new op(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var t=this;eu(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)})},r.prototype.disposeRegisteredKernels=function(t){var e=this;eu(t).forEach(function(n){n.disposeFunc!=null&&n.disposeFunc(e.registry[t])})},r.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(n==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=n.factory();if(Promise.resolve(o)===o){var a=++this.pendingBackendInitId,i=o.then(function(s){return!(a<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(a<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],o=this.initializeBackend(n),a=o.success,i=o.asyncInit;if(i||a)return{name:n,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(t,e){var n=this.state.tensorInfo.get(e),o=n.backend,a=this.readSync(e);o.disposeData(e),n.backend=t,t.move(e,a,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(t,e){var n,o=this,a=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=t}return this.scopedRun(function(){return o.startScope(a)},function(){return o.endScope(n)},function(){return(n=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n})},r.prototype.scopedRun=function(t,e,n){t();try{var o=n();return e(),o}catch(a){throw e(),a}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],function(o){return{x:function(){return o.toFloat()}}},[]),e},r.prototype.runKernel=function(t,e,n,o,a){return this.runKernelFunc(null,e,null,t,n,o,a)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(t,e,n){var o=this.backend.numDataIds(),a=0;n.forEach(function(u){a+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-a-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},r.prototype.runKernelFunc=function(t,e,n,o,a,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],f=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var h,d=function(b){f&&(l=b.map(function(x){return c.keep(c.clone(x))}))},p=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var v,g=Sc(o,this.backendName);return h=g!=null?function(){var b=c.backend.numDataIds();v=g.kernelFunc({inputs:e,attrs:a,backend:c.backend});var x=Array.isArray(v)?v:[v];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,b,x);var y=x.map(function(C){var I=C.dataId,k=C.shape,S=C.dtype;return c.makeTensorFromDataId(I,k,S)}),w=y.filter(function(C,I){return s[I]});return d((i||[]).slice().concat(w)),y}:function(){var b=c.backend.numDataIds();v=c.tidy(function(){return t(c.backend,d)});var x=Array.isArray(v)?v:[v];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,b,x),x},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,function(){return h()}):h()}),f&&this.addTapeNode(o,e,u,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(b){return e[b].shape}),outputShapes:u.map(function(b){return b.shape})}),Array.isArray(v)?u:u[0]},r.prototype.makeTensor=function(t,e,n,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",o=o||this.backend;var a=t;n==="string"&&Mi(t[0])&&(a=t.map(function(l){return np(l)}));var i=o.write(a,e,n),s=new Te(e,n,i,this.nextTensorId());if(this.incRef(s,o),n==="string"){var u=this.state.tensorInfo.get(i),c=Zd(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(t,e,n,o){var a=new Te(e,n=n||"float32",t,this.nextTensorId());return this.incRef(a,o),a},r.prototype.makeVariable=function(t,e,n,o){e===void 0&&(e=!0),n=n||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var a=new lr(t,e,n,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error("Variable with name "+a.name+" was already registered");return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a},r.prototype.incRef=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*Dc(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof lr||this.track(t)},r.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},r.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},r.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},r.prototype.profile=function(t){return Y(this,void 0,void 0,function(){var e,n;return J(this,function(o){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(a){return a.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(t,e,n,o,a){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:a},u=qd(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,f){if(l==null){var h=n[f],d=zr(h.size,h.dtype);return i.makeTensor(d,h.shape,h.dtype)}return l}),o(c.length>1?c:c[0],a)}),this.state.activeTape.push(s)},r.prototype.keep=function(t){return t.kept=!0,t},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},r.prototype.endScope=function(t){for(var e=this,n=Mc(t),o=new Set(n.map(function(u){return u.id})),a=0;a<this.state.activeScope.track.length;a++){var i=this.state.activeScope.track[a];i.kept||o.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},r.prototype.gradients=function(t,e,n,o){var a=this;if(o===void 0&&(o=!1),E(e.length>0,function(){return"gradients() received an empty list of xs."}),n!=null&&n.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var i=this.scopedRun(function(){return a.startTape()},function(){return a.endTape()},function(){return a.tidy("forward",t)});E(i instanceof Te,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var f={},h={},d=0;d<c.length;d++)f[c[d].id]=!0;for(d=0;d<u.length;d++){var p=(C=u[d]).inputs;for(var m in p){for(var v=p[m],g=!1,b=0;b<c.length;b++)if(f[v.id]){C.outputs.forEach(function(R){return f[R.id]=!0}),g=!0,h[C.id]=!0;break}if(g)break}}var x={};x[l.id]=!0;var y={};for(d=u.length-1;d>=0;d--)for(p=(C=u[d]).inputs,b=0;b<C.outputs.length;b++)if(x[C.outputs[b].id]){for(var m in p)x[p[m].id]=!0,y[C.id]=!0;break}var w=[];for(d=0;d<u.length;d++){var C;if(h[(C=u[d]).id]&&y[C.id]){var I={};for(var m in C.inputs){var k=C.inputs[m];f[k.id]&&(I[m]=k)}var S=Object.assign({},C);S.inputs=I,S.outputs=C.outputs,w.push(S)}}return w}(this.state.activeTape,e,i);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=n??(u=i.shape,c=Nc(ee(u),"float32"),N.makeTensor(c,u,"float32")),function(h,d,p){for(var m=function(g){var b=d[g],x=[];if(b.outputs.forEach(function(I){var k=h[I.id];k!=null?x.push(k):x.push(null)}),b.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+b.kernelName+".");var y=b.gradient(x),w=function(I){if(!(I in y))throw new Error("Cannot backprop through input "+I+". Available gradients found: "+Object.keys(y)+".");var k=p(function(){return y[I]()});if(k.dtype!=="float32")throw new Error("Error in gradient for op "+b.kernelName+". The gradient of input "+I+" must have 'float32' dtype, but has '"+k.dtype+"'");var S=b.inputs[I];if(!Ge(k.shape,S.shape))throw new Error("Error in gradient for op "+b.kernelName+". The gradient of input '"+I+"' has shape '"+k.shape+"', which does not match the shape of the input '"+S.shape+"'");if(h[S.id]==null)h[S.id]=k;else{var R=h[S.id];h[S.id]=R.add(k),R.dispose()}};for(var C in b.inputs)w(C)},v=d.length-1;v>=0;v--)m(v)}(l,s,function(h){return a.tidy(h)});var f=e.map(function(h){return l[h.id]});return a.state.gradientDepth===0&&(a.state.activeTape.forEach(function(h){for(var d=0,p=h.saved;d<p.length;d++)p[d].dispose()}),a.state.activeTape=null),{value:i,grads:f}})},r.prototype.customGrad=function(t){var e=this;return E(ui(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var n,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];E(o.every(function(s){return s instanceof Te}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return o.forEach(function(s,u){i[u]=s}),e.runKernelFunc(function(s,u){return E((n=t.apply(void 0,o.concat([u]))).value instanceof Te,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),E(ui(n.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},i,function(s,u){var c=n.gradFunc(s,u),l=Array.isArray(c)?c:[c];E(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),E(l.every(function(h){return h instanceof Te}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var f={};return l.forEach(function(h,d){f[d]=function(){return h}}),f})}},r.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},r.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},r.prototype.time=function(t){return Y(this,void 0,void 0,function(){var e,n;return J(this,function(o){switch(o.label){case 0:return e=Mt(),[4,this.backend.time(t)];case 1:return(n=o.sent()).wallMs=Mt()-e,[2,n]}})})},r.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new iu,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),N=function(){var r=function(){if(ka==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}ka=e}return ka}();if(r._tfengine==null){var t=new Hd(r);r._tfengine=new cp(t)}return function(e){Rc=e}(r._tfengine.ENV),Bt=function(){return r._tfengine},r._tfengine}();function Bc(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Qt=W();Qt.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Qt.registerFlag("IS_BROWSER",function(){return Bc()}),Qt.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),Qt.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),Qt.registerFlag("PROD",function(){return!1}),Qt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return Qt.getBool("DEBUG")}),Qt.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),Qt.registerFlag("IS_TEST",function(){return!1});var Dr,dt,ht,Rn={},Ia={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function lp(r,t){Rn[r]=t}function jt(r){r in Rn||(Rn[r]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var n=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return n.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete Rn[e]},!1),e===1?n.getContext("webgl",Ia)||n.getContext("experimental-webgl",Ia):n.getContext("webgl2",Ia)}(r));var t=Rn[r];return t.isContextLost()?(delete Rn[r],jt(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),Rn[r])}function Zo(r,t){return[t,r]}function Rr(r){var t=ee(r);return si(Math.ceil(t/4))}function Vr(r,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(r/2))]}function Bi(r,t){var e,n,o,a,i,s,u,c,l,f=r;return W().getNumber("WEBGL_VERSION")===2?(e=f.R32F,n=f.R16F,o=f.RGBA16F,a=f.RGBA32F,i=f.RED,s=4,u=1,c=f.HALF_FLOAT,l=f.FLOAT):(e=r.RGBA,n=r.RGBA,o=r.RGBA,a=f.RGBA,i=r.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function te(r,t,e){var n=e();return t&&function(o){var a=o.getError();if(a!==o.NO_ERROR)throw new Error("WebGL Error: "+pp(o,a))}(r),n}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(Dr||(Dr={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(dt||(dt={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(ht||(ht={}));var fp=596e-10,hp=65504;function dp(r){return!!(W().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||fp<Math.abs(r)&&Math.abs(r)<hp)}function pp(r,t){switch(t){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function Qr(r,t,e){return tn(r,t,function(){return r.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function vp(r,t,e){var n=tn(r,t,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(te(r,t,function(){return r.shaderSource(n,e)}),te(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function mp(r,t,e){var n=tn(r,t,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(te(r,t,function(){return r.shaderSource(n,e)}),te(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw function(o,a){var i=gp.exec(a);if(i==null)return console.log("Couldn't parse line number in error: "+a),void console.log(o);for(var s=+i[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(v,g){return tr((g+1).toString(),c)+v}),f=0,h=0;h<l.length;h++)f=Math.max(l[h].length,f);var d=l.slice(0,s-1),p=l.slice(s-1,s),m=l.slice(s);console.log(d.join(`
`)),console.log(a.split(`
`)[0]),console.log("%c "+tr(p[0],f),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(m.join(`
`))}(e,r.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var Ta,Da,gp=/ERROR: [0-9]+:([0-9]+):/g;function yp(r,t){return tn(r,t,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function bp(r,t,e){if(te(r,t,function(){return r.linkProgram(e)}),r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Aa(r,t,e){if(te(r,t,function(){return r.validateProgram(e)}),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function xp(r,t,e){var n=tn(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return te(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),te(r,t,function(){return r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function wp(r,t,e){var n=tn(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return te(r,t,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n)}),te(r,t,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function Cp(r,t){return tn(r,t,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function _p(r,t){var e=W().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||t<=0){var n="["+r+"x"+t+"]";throw new Error("Requested texture size "+n+" is invalid.")}if(r>e||t>e)throw n="["+r+"x"+t+"]",new Error("Requested texture size "+n+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function Ep(r,t){return tn(r,t,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function su(r,t,e,n,o,a,i,s){var u=r.getAttribLocation(e,n);return u!==-1&&(te(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,o)}),te(r,t,function(){return r.vertexAttribPointer(u,a,r.FLOAT,!1,i,s)}),te(r,t,function(){return r.enableVertexAttribArray(u)}),!0)}function Rp(r,t,e,n){Dp(r,n),te(r,t,function(){return r.activeTexture(r.TEXTURE0+n)}),te(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)})}function Sp(r,t,e,n){return tn(r,t,function(){return r.getUniformLocation(e,n)},'uniform "'+n+'" not present in program.')}function kp(r,t,e){return r.getUniformLocation(t,e)}function Ip(r,t,e,n,o,a){te(r,t,function(){return Rp(r,t,n,a)}),te(r,t,function(){return r.uniform1i(o,a)})}function Na(r,t,e,n){te(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,n)}),te(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0)})}function uu(r,t,e){te(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,e)}),te(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function Zr(r){var t=r.checkFramebufferStatus(r.FRAMEBUFFER);if(t!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+Tp(r,t))}function Tp(r,t){switch(t){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function tn(r,t,e,n){var o=te(r,t,function(){return e()});if(o==null)throw new Error(n);return o}function Dp(r,t){var e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=t+r.TEXTURE0;if(n<r.TEXTURE0||n>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function Eo(r,t){return t===void 0&&(t=2),ee(r.slice(0,r.length-t))}function Ro(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function Fa(r){var t=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(t=[Eo(r)].concat(Ro(r))),t}function Ap(r,t){var e;t===void 0&&(t=!1);var n=W().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(n*=2,(r=r.map(function(c,l){return l>=r.length-2?Tc(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var o=In(r);r=o.newShape}var a=ee(r);if(r.length<=1&&a<=n)return[1,a];if(r.length===2&&r[0]<=n&&r[1]<=n)return r;if(r.length===3&&r[0]*r[1]<=n&&r[2]<=n)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=n&&r[1]*r[2]<=n)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=n&&r[3]<=n)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=n&&r[1]*r[2]*r[3]<=n)return[r[0],r[1]*r[2]*r[3]];if(t){var i=Eo(r),s=2,u=2;return r.length&&(s=(e=Ro(r))[0],u=e[1]),si(a=i*(s/2)*(u/2)).map(function(c){return 2*c})}return si(a)}function eo(r){return r%2==0}function to(r,t){if(Ge(r=r.slice(-2),t=t.slice(-2))||!r.length||!t.length||r[0]===0||r[1]===0||t[0]===0||t[1]===0)return!0;if(r.length!==t.length){var e=r.slice(-1)[0],n=t.slice(-1)[0];if(e===n||eo(e)&&eo(n)&&(r[0]===1||t[0]===1))return!0}return r[1]===t[1]&&eo(r[0])&&eo(t[0])}function Np(r){if(Ta==null){var t=jt(r);Ta=t.getParameter(t.MAX_TEXTURE_SIZE)}return Ta}function Fp(r){if(Da==null){var t=jt(r);Da=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Da)}function Pp(r){if(r===0)return 0;var t=jt(r);return wt(t,"EXT_disjoint_timer_query_webgl2")&&r===2?2:wt(t,"EXT_disjoint_timer_query")?1:0}function wt(r,t){return r.getExtension(t)!=null}function cu(r){try{if(jt(r)!=null)return!0}catch{return!1}return!1}function Op(r){if(r===0)return!1;var t=jt(r);if(r===1){if(!wt(t,"OES_texture_float"))return!1}else if(!wt(t,"EXT_color_buffer_float"))return!1;return pi(t)}function Mp(r){if(r===0)return!1;var t=jt(r);if(r!==1){if(wt(t,"EXT_color_buffer_float"))return pi(t);if(wt(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return function(n,o){var a=Bi(n,o),i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null);var s=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,s),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0);var u=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(i),n.deleteFramebuffer(s),u}(t,e)}return!1}return!!wt(t,"OES_texture_float")&&!!wt(t,"WEBGL_color_buffer_float")&&pi(t)}function pi(r){var t=Bi(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var n=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,n),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(n),o}function Bp(r){return r===2&&jt(r).fenceSync!=null}var se=W();function Lc(r){W().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function $(r,t){return N.tidy(r,t)}function st(r){Mc(r).forEach(function(t){return t.dispose()})}function Lp(r){return N.keep(r)}function So(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];W().getBool("IS_TEST")||console.warn.apply(console,r)}function xn(r,t){var e=r;if(Ut(r))return t==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var n=[];Array.isArray(e)||Ut(e)&&t!=="string";)n.push(e.length),e=e[0];return Array.isArray(r)&&W().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(a,i,s){if(s=s||[],!Array.isArray(a)&&!Ut(a))return void E(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});E(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+a.length+" elements"}),E(a.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+a.length+" elements"});for(var u=i.slice(1),c=0;c<a.length;++c)o(a[c],u,s.concat(c))}(r,n,[]),n}function lu(r,t,e,n){if(r!=null&&(r!=="numeric"&&r!==t||r==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+n+"' must be "+r+" tensor, but got "+t+" tensor")}function _(r,t,e,n){if(n===void 0&&(n="numeric"),r instanceof Te)return lu(n,r.dtype,t,e),r;var o=Ur(r);if(o!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),lu(n,o,t,e),r==null||!Ut(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var a=r==null?"null":r.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+a+"'")}var i=xn(r,o);Ut(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?Ac(r,o,W().getBool("DEBUG")):cr(r,[],!0);return N.makeTensor(s,i,o)}function ko(r,t,e,n){if(n===void 0&&(n="numeric"),!Array.isArray(r))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(o,a){return _(o,t+"["+a+"]",e)},n)}function Wc(r,t){for(var e=0;e<r.length;++e)if(r[r.length-e-1]!==t-1-e)return!1;return!0}function Wp(r,t,e){for(var n=r.length+t.length,o=[],a=0,i=0,s=0;s<n;s++)e.indexOf(s)===-1?o.push(r[a++]):o.push(t[i++]);return o}function Ye(r,t){for(var e=[],n=r.length,o=0;o<n;o++)t.indexOf(o)===-1&&e.push(r[o]);return[e,t.map(function(a){return r[a]})]}function ut(r,t){return Wp(r,t.map(function(e){return 1}),t)}function ft(r,t,e){E(Wc(t,e),function(){return r+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."})}function Kt(r,t){if(Wc(r,t))return null;for(var e=[],n=0;n<t;++n)r.indexOf(n)===-1&&e.push(n);return r.forEach(function(o){return e.push(o)}),e}function Li(r){return r.map(function(t,e){return[e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function Xt(r,t){for(var e=[],n=t-r;n<t;++n)e.push(n);return e}function Up(r,t){var e=r[0].length;r.forEach(function(o,a){E(o.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+a+"] must be the same as the rank of the rest ("+e+")"})}),E(t>=0&&t<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var n=r[0];r.forEach(function(o,a){for(var i=0;i<e;i++)E(i===t||o[i]===n[i],function(){return"Error in concat"+e+"D: Shape of tensors["+a+"] ("+o+") does not match the shape of the rest ("+n+") along the non-concatenated axis "+a+"."})})}function fr(r,t){for(var e=r[0].slice(),n=1;n<r.length;n++)e[t]+=r[n][t];return e}function T(r){var t=Object.keys(r);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],n=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];N.startScope(e);try{var s=n.apply(void 0,a);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),N.endScope(s),s}catch(u){throw N.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}se.registerFlag("HAS_WEBGL",function(){return se.getNumber("WEBGL_VERSION")>0}),se.registerFlag("WEBGL_VERSION",function(){return cu(2)?2:cu(1)?1:0}),se.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return se.get("WEBGL_VERSION")===2}),se.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),se.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),se.registerFlag("WEBGL_PACK",function(){return se.getBool("HAS_WEBGL")}),se.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_CLIP",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),se.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_REDUCE",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_LAZILY_UNPACK",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_CONV_IM2COL",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return Np(se.getNumber("WEBGL_VERSION"))}),se.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return Fp(se.getNumber("WEBGL_VERSION"))}),se.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=se.getNumber("WEBGL_VERSION");return r===0?0:Pp(r)}),se.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return se.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),se.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return Op(se.getNumber("WEBGL_VERSION"))}),se.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!se.getBool("WEBGL_FORCE_F16_TEXTURES")&&se.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),se.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return Mp(se.getNumber("WEBGL_VERSION"))}),se.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return Bp(se.getNumber("WEBGL_VERSION"))}),se.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return se.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),Oc=Lc;var je=T({complex_:function(r,t){var e=_(r,"real","complex"),n=_(t,"imag","complex");return we(e.shape,n.shape,"real and imag shapes, "+e.shape+" and "+n.shape+", must match in call to tf.complex()."),N.runKernelFunc(function(o){return o.complex(e,n)},{$real:e,$imag:n})}}),xt=T({real_:function(r){var t=_(r,"input","real");return N.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),Lt=T({imag_:function(r){var t=_(r,"input","imag");return N.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function Xe(r,t,e){return wn(r,t,xn(r,e),e)}function wn(r,t,e,n){if(n==null&&(n=Ur(r)),n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Ut(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Fc(t);var o=ee(t),a=ee(e);E(o===a,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+a});for(var i=0;i<e.length;++i){var s=e[i],u=i!==e.length-1||s!==ee(t.slice(i));E(e[i]===t[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "})}}return Ut(r)||Array.isArray(r)||(r=[r]),t=t||e,r=n!=="string"?Ac(r,n,W().getBool("DEBUG")):cr(r,[],!0),N.makeTensor(r,t,n)}function K(r,t){if((Ut(r)&&t!=="string"||Array.isArray(r))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Ut(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return wn(r,[],[],t)}function Pe(r,t){vr(r);var e=xn(r,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return wn(r,null,e,t)}function vn(r,t,e){if(vr(r),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var n=xn(r,e);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return wn(r,t,n,e)}function Wi(r,t,e){if(vr(r),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var n=xn(r,e);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return wn(r,t,n,e)}function ot(r,t,e){if(vr(r),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var n=xn(r,e);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return wn(r,t,n,e)}function zp(r,t,e){if(vr(r),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var n=xn(r,e);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return wn(r,t,n,e)}function Vp(r,t,e){if(vr(r),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var n=xn(r,e);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return wn(r,t=t||n,n,e)}function Hp(r,t,e,n){return t===void 0&&(t=!0),N.makeVariable(r,t,e,n)}function mr(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=mr(r,"float32"),n=Se(r,"float32");return je(e,n)}var o=Nc(ee(r),t);return N.makeTensor(o,r,t)}function Se(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=Se(r,"float32"),n=Se(r,"float32");return je(e,n)}var o=zr(ee(r),t);return N.makeTensor(o,r,t)}function Vt(r,t,e){return N.runKernelFunc(function(n){return n.fill(r,t,e)},{})}function Gp(r,t,e){if(e<=0)throw new Error("The number of values should be positive.");return N.runKernelFunc(function(n){return n.linspace(r,t,e)},{})}function Io(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e===0)throw new Error("Cannot have a step of zero");if(r===t||r<t&&e<0||t<r&&e>1)return Se([0],n);var o=zr(Math.abs(Math.ceil((t-r)/e)),n);t<r&&e===1&&(e=-1),o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+e;return Pe(o,n)}var Uc=T({onesLike_:function(r){var t=_(r,"x","onesLike");if(t.dtype==="complex64"){var e=Uc(xt(t)),n=ge(Lt(t));return je(e,n)}return N.runKernelFunc(function(o){return o.onesLike(t)},{$x:t},function(o,a){return{$x:function(){return ge(o)}}})}}),ge=T({zerosLike_:function(r){var t=_(r,"x","zerosLike");return N.runKernelFunc(function(e){return e.zerosLike(t)},{$x:t},function(e,n){return{$x:function(){return ge(e)}}})}}),Le=T({concat_:function(r,t){t===void 0&&(t=0),E(r.length>=1,function(){return"Pass at least one tensor to concat"});var e=ko(r,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=Ve(t,e[0].shape)[0];var n=fr(e.map(function(s){return s.shape}),t);if(ee(n)===0)return Xe([],n);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var o=e.map(function(s){return s.shape});Up(o,t);var a=e,i={axis:t};return N.runKernelFunc(function(s){return s.concat(e,t)},a,function(s){var u=o.map(function(c){return c[t]});return Ui(s,u,t).map(function(c){return function(){return c}})},"Concat",i)}}),qp=T({concat1d_:function(r){return Le(r,0)}}),jp=T({concat2d_:function(r,t){return Le(r,t)}}),Kp=T({concat3d_:function(r,t){return Le(r,t)}}),Xp=T({concat4d_:function(r,t){return Le(r,t)}}),Ui=T({split_:function(r,t,e){e===void 0&&(e=0);var n,o=_(r,"x","split");return e=Ve(e,o.shape)[0],typeof t=="number"?(E(o.shape[e]%t==0,function(){return"Number of splits must evenly divide the axis."}),n=new Array(t).fill(o.shape[e]/t)):(E(o.shape[e]===t.reduce(function(a,i){return a+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),n=t),N.runKernelFunc(function(a){return a.split(o,n,e)},{$x:o},function(a){return{$x:function(){return Le(a,e)}}})}});function Bn(r,t){return r(t={exports:{}},t.exports),t.exports}var $p=Bn(function(r){(function(t,e,n){function o(s){var u,c=this,l=(u=4022871197,function(f){f=f.toString();for(var h=0;h<f.length;h++){var d=.02519603282416938*(u+=f.charCodeAt(h));d-=u=d>>>0,u=(d*=u)>>>0,u+=4294967296*(d-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var f=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=f-(c.c=0|f)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function a(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new o(s),l=u&&u.state,f=c.next;return f.int32=function(){return 4294967296*c.next()|0},f.double=function(){return f()+11102230246251565e-32*(2097152*f()|0)},f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.alea=i})(0,r,!1)}),Yp=Bn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var f=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^f^f>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xor128=i})(0,r,!1)}),Jp=Bn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var f=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^f^f<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xorwow=i})(0,r,!1)}),Qp=Bn(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,f=u.x,h=u.i;return c=f[h],l=(c^=c>>>7)^c<<24,l^=(c=f[h+1&7])^c>>>10,l^=(c=f[h+3&7])^c>>>3,l^=(c=f[h+4&7])^c<<7,c=f[h+7&7],l^=(c^=c<<13)^c<<9,f[h]=l,u.i=h+1&7,l},function(c,l){var f,h=[];if(l===(0|l))h[0]=l;else for(l=""+l,f=0;f<l.length;++f)h[7&f]=h[7&f]<<15^l.charCodeAt(f)+h[f+1&7]<<13;for(;h.length<8;)h.push(0);for(f=0;f<8&&h[f]===0;++f);for(f==8?h[7]=-1:h[f],c.x=h,c.i=0,f=256;f>0;--f)c.next()}(u,s)}function a(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.x&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xorshift7=i})(0,r,!1)}),Zp=Bn(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,f=u.w,h=u.X,d=u.i;return u.w=f=f+1640531527|0,l=h[d+34&127],c=h[d=d+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=h[d]=l^c,u.i=d,l+(f^f>>>16)|0},function(c,l){var f,h,d,p,m,v=[],g=128;for(l===(0|l)?(h=l,l=null):(l+="\0",h=0,g=Math.max(g,l.length)),d=0,p=-32;p<g;++p)l&&(h^=l.charCodeAt((p+32)%l.length)),p===0&&(m=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,p>=0&&(m=m+1640531527|0,d=(f=v[127&p]^=h+m)==0?d+1:0);for(d>=128&&(v[127&(l&&l.length||0)]=-1),d=127,p=512;p>0;--p)h=v[d+34&127],f=v[d=d+1&127],h^=h<<13,f^=f<<17,h^=h>>>15,f^=f>>>12,v[d]=h^f;c.w=m,c.X=v,c.i=d}(u,s)}function a(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.X&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xor4096=i})(0,r,!1)}),ev=Bn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var f=u.b,h=u.c,d=u.d,p=u.a;return f=f<<25^f>>>7^h,h=h-d|0,d=d<<24^d>>>8^p,p=p-f|0,u.b=f=f<<20^f>>>12^h,u.c=h=h-d|0,u.d=d<<16^h>>>16^p,u.a=p-f|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.tychei=i})(0,r,!1)}),Sn=Bn(function(r){(function(t,e){var n,o=this,a=256,i=6,s="random",u=e.pow(a,i),c=e.pow(2,52),l=2*c,f=a-1;function h(g,b,x){var y=[],w=m(function k(S,R){var A,D=[],L=typeof S;if(R&&L=="object")for(A in S)try{D.push(k(S[A],R-1))}catch{}return D.length?D:L=="string"?S:S+"\0"}((b=b==1?{entropy:!0}:b||{}).entropy?[g,v(t)]:g??function(){try{var k;return n&&(k=n.randomBytes)?k=k(a):(k=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(k)),v(k)}catch{var S=o.navigator,R=S&&S.plugins;return[+new Date,o,R,o.screen,v(t)]}}(),3),y),C=new d(y),I=function(){for(var k=C.g(i),S=u,R=0;k<c;)k=(k+R)*a,S*=a,R=C.g(1);for(;k>=l;)k/=2,S/=2,R>>>=1;return(k+R)/S};return I.int32=function(){return 0|C.g(4)},I.quick=function(){return C.g(4)/4294967296},I.double=I,m(v(C.S),t),(b.pass||x||function(k,S,R,A){return A&&(A.S&&p(A,C),k.state=function(){return p(C,{})}),R?(e[s]=k,S):k})(I,w,"global"in b?b.global:this==e,b.state)}function d(g){var b,x=g.length,y=this,w=0,C=y.i=y.j=0,I=y.S=[];for(x||(g=[x++]);w<a;)I[w]=w++;for(w=0;w<a;w++)I[w]=I[C=f&C+g[w%x]+(b=I[w])],I[C]=b;(y.g=function(k){for(var S,R=0,A=y.i,D=y.j,L=y.S;k--;)S=L[A=f&A+1],R=R*a+L[f&(L[A]=L[D=f&D+S])+(L[D]=S)];return y.i=A,y.j=D,R})(a)}function p(g,b){return b.i=g.i,b.j=g.j,b.S=g.S.slice(),b}function m(g,b){for(var x,y=g+"",w=0;w<y.length;)b[f&w]=f&(x^=19*b[f&w])+y.charCodeAt(w++);return v(b)}function v(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=h,m(e.random(),t),r.exports){r.exports=h;try{n=require("crypto")}catch{}}})([],Math)});Sn.alea=$p,Sn.xor128=Yp,Sn.xorwow=Jp,Sn.xorshift7=Qp,Sn.xor4096=Zp,Sn.tychei=ev;var ea=Sn.alea,zi=function(){function r(t,e,n,o,a){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=a||Math.random();this.random=ea(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,n,o=!1;!o;){var a=void 0,i=void 0,s=void 0;do s=(a=2*this.random()-1)*a+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*a*u,n=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(e)},r.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},r.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},r}(),tv=function(){function r(t,e,n,o){this.alpha=t,this.beta=1/e,this.dtype=n;var a=o||Math.random();this.randu=ea(a.toString()),this.randn=new zi(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var t,e,n,o,a,i;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,e=1-.331*(t=o*o)*t,n=.5*t+this.d*(1-i+Math.log(i)),(a=this.randu())<e||Math.log(a)<n)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},r}(),nv=function(){function r(t,e,n,o){var a=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return a.dtype==null||a.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=n,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=ea(o)}return r.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function le(r,t,e){return t===void 0&&(t="float32"),t=t||"float32",Fc(r),new Tr(r,t,e)}function rv(r,t){t===void 0&&(t=!1),console.log(r.toString(t))}var zc=T({batchToSpaceND_:function(r,t,e){var n=_(r,"x","batchToSpaceND"),o=t.reduce(function(a,i){return a*i});return E(n.rank>=1+t.length,function(){return"input rank is "+n.rank+" but should be > than blockShape.length "+t.length}),E(e.length===t.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length}),E(n.shape[0]%o==0,function(){return"input tensor batch is "+n.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),N.runKernelFunc(function(a){return a.batchToSpaceND(n,t,e)},{$x:n},function(a){return{$x:function(){return a.spaceToBatchND(t,e)}}})}}),ov=T({broadcastTo_:function(r,t){var e=_(r,"broadcastTo","x"),n=e.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var o=e.shape.slice();o.length<t.length;)o.unshift(1);e=e.reshape(o)}for(var a=Array.from(t),i=t.length-1;i>=0;i--)if(e.shape[i]===t[i])a[i]=1;else if(e.shape[i]!==1)throw new Error("broadcastTo(): ["+n+"] cannot be broadcast to ["+t+"].");var s=a.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():N.runKernelFunc(function(u){return u.tile(e,a)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),av=T({cast_:function(r,t){var e=_(r,"x","cast");if(!Jd(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var n={dtype:t};return N.runKernelFunc(function(o){return o.cast(e,t)},{x:e},function(o){return{x:function(){return o.clone()}}},"Cast",n)}}),iv=T({clone_:function(r){var t=_(r,"x","clone",null);return N.runKernelFunc(function(){return N.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(e){return{$x:function(){return e.toFloat()}}})}}),sv=T({cumsum_:function(r,t,e,n){t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1);var o=_(r,"x","cumsum"),a=Kt([t|=0],o.rank),i=o;a!=null&&(i=o.transpose(a));var s=Xt(1,o.rank)[0],u=N.runKernelFunc(function(c){return c.cumsum(i,s,e,n)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(t,e,!n)}}});return a!=null&&(u=u.transpose(a)),u}}),uv=T({depthToSpace_:function(r,t,e){e===void 0&&(e="NHWC");var n=_(r,"x","depthToSpace"),o=e==="NHWC"?n.shape[1]:n.shape[2],a=e==="NHWC"?n.shape[2]:n.shape[3],i=e==="NHWC"?n.shape[3]:n.shape[1];return E(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+n.shape}),E(a*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+t+` for depthToSpace with input shape
          `+n.shape}),E(i%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+i+" for depthToSpace with input shape "+n.shape}),N.runKernelFunc(function(s){return s.depthToSpace(n,t,e)},{$x:n})}}),bt=T({expandDims_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","expandDims",null);E(t<=e.rank,function(){return"Axis must be <= rank of the tensor"});var n=e.shape.slice();return t<0&&(E(-(e.rank+1)<=t,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),t=e.rank+t+1),n.splice(t,0,1),St(e,n)}}),Vc=T({eye_:function(r,t,e,n){n===void 0&&(n="float32"),t==null&&(t=r);for(var o=le([r,t],n),a=r<=t?r:t,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(r,t);if(e==null)return s;if(e.length===1)return nr(bt(s,0),[e[0],1,1]);if(e.length===2)return nr(bt(bt(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return nr(bt(bt(bt(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),cv=T({multinomial_:function(r,t,e,n){n===void 0&&(n=!1);var o=_(r,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);e=e||Math.random();var s=i===1?o.as2D(1,-1):o,u=N.runKernelFunc(function(c){return c.multinomial(s,n,t,e)},{logits2D:s});return i===1?u.as1D():u}}),vi=T({oneHot_:function(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=_(r,"indices","oneHot","int32"),a=o.shape.concat([t]);return o=o.flatten(),N.runKernelFunc(function(i){return i.oneHot(o,t,e,n)},{$indices:o},function(i){return{$indices:function(){return Se(o.shape,"float32")}}}).reshape(a)}}),Ln=T({pad_:function(r,t,e){e===void 0&&(e=0);var n=_(r,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:e};return N.runKernelFunc(function(a){return a.pad(n,t,e)},{x:n},function(a){var i=t.map(function(s){return s[0]});return{x:function(){return a.slice(i,n.shape)}}},"PadV2",o)}}),lv=T({pad1d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),Ln(r,[t],e)}}),fv=T({pad2d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Ln(r,t,e)}}),hv=T({pad3d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Ln(r,t,e)}}),dv=T({pad4d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Ln(r,t,e)}}),pv=T({rand_:function(r,t,e){var n=ee(r),o=null;if(e==null||e==="float32")o=new Float32Array(n);else if(e==="int32")o=new Int32Array(n);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(n)}for(var a=0;a<n;a++)o[a]=t();return N.makeTensor(o,r,e)}}),vv=T({randomNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new zi(t,e,n,!1,o),i=le(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),mv=T({randomGamma_:function(r,t,e,n,o){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e==null&&(e=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error("Unsupported data type "+n);for(var a=new tv(t,e,n,o),i=le(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Hc=T({randomUniform_:function(r,t,e,n,o){t===void 0&&(t=0),e===void 0&&(e=1),n===void 0&&(n="float32");for(var a=le(r,n),i=new nv(t,e,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),St=T({reshape_:function(r,t){var e=_(r,"x","reshape",null);t=$d(t,e.size),E(e.size===ee(t),function(){return"new shape and old shape must have the same number of elements."});var n={shape:t};return N.runKernelFunc(function(o){return o.reshape(e,t)},{x:e},function(o){return{x:function(){return o.reshape(e.shape)}}},"Reshape",n)}}),Gc=T({spaceToBatchND_:function(r,t,e){var n=_(r,"x","spaceToBatchND");return E(n.rank>=1+t.length,function(){return"input rank "+n.rank+" should be > than [blockShape] "+t.length}),E(e.length===t.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length}),E(n.shape.reduce(function(o,a,i){return i>0&&i<=t.length?o&&(a+e[i-1][0]+e[i-1][1])%t[i-1]==0:o},!0),function(){return"input spatial dimensions "+n.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()}),N.runKernelFunc(function(o){return o.spaceToBatchND(n,t,e)},{$x:n},function(o){return{$x:function(){return o.batchToSpaceND(t,e)}}})}}),qc=T({squeeze_:function(r,t){var e=_(r,"x","squeeze");return St(e,In(e.shape,t).newShape)}}),mt=T({stack_:function(r,t){t===void 0&&(t=0);var e=ko(r,"tensors","stack");if(E(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(t);var n=e[0].rank,o=e[0].shape,a=e[0].dtype;E(t<=n,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){we(o,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){E(a===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=e.map(function(s){return s.expandDims(t)});return Le(i,t)}}),nr=T({tile_:function(r,t){var e=_(r,"x","tile",null);E(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."});var n=[e],o={reps:t};return N.runKernelFunc(function(a,i){var s=a.tile(e,t);return i([e]),s},{x:e},function(a,i){var s=i[0];return{x:function(){var u=ge(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(a.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(a.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var f=0;f<t[2];++f)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(f=0;f<t[2];++f)for(var h=0;h<t[3];++h)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2],h*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,n)}}),gv=T({truncatedNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new zi(t,e,n,!0,o),i=le(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),We=T({unstack_:function(r,t){t===void 0&&(t=0),t=t||0;var e=_(r,"x","unstack");E(t>=-e.shape.length&&t<e.shape.length,function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),t<0&&(t+=e.shape.length);var n={axis:t};return N.runKernelFunc(function(o){return o.unstack(e,t)},{x:e},function(o){return{x:function(){return mt(o,t)}}},"Unpack",n)}}),yv=function(r,t){return Y(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f;return J(this,function(h){switch(h.label){case 0:return e=_(r,"x","setdiff1d"),n=_(t,"y","setdiff1d"),E(e.dtype===n.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+n.dtype+")."}),E(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),E(n.rank===1,function(){return"y should be 1D tensor, but got y ("+n.shape+")."}),[4,e.data()];case 1:return o=h.sent(),[4,n.data()];case 2:for(a=h.sent(),i=new Set(a),s=0,l=0;l<o.length;l++)i.has(o[l])||s++;for(u=new Tr([s],e.dtype),c=new Tr([s],"int32"),l=0,f=0;l<o.length;l++)i.has(o[l])||(u.values[f]=o[l],c.values[f]=l,f++);return[2,[u.toTensor(),c.toTensor()]]}})})};function To(r,t,e,n){n===void 0&&(n=!0);var o=[];if(n)(o=o.concat(t.slice(0))).push(r[0]/e),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var a=t.length,i=0;i<a;++i)o=o.concat([r[i+1]/t[i],t[i]]);o=o.concat(r.slice(a+1))}return o}function Do(r,t,e){e===void 0&&(e=!0);var n=[];if(e){n.push(t);for(var o=t+1;o<r;++o)o<=2*t?(n.push(o),n.push(o-(t+1))):n.push(o)}else{var a=[],i=[];for(o=1;o<r;++o)o>=2*t+1||o%2==1?i.push(o):a.push(o);n.push.apply(n,a),n.push(0),n.push.apply(n,i)}return n}function Ao(r,t,e,n){n===void 0&&(n=!0);var o=[];n?o.push(r[0]/e):o.push(r[0]*e);for(var a=1;a<r.length;++a)a<=t.length?n?o.push(t[a-1]*r[a]):o.push(r[a]/t[a-1]):o.push(r[a]);return o}function jc(r,t){for(var e=[0],n=0;n<t;++n)e.push(r[n][0]);return e}function Kc(r,t,e){for(var n=r.slice(0,1),o=0;o<e;++o)n.push(r[o+1]-t[o][0]-t[o][1]);return n}function Xc(r,t){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var e=t.shape,n=e[e.length-1],o=1,a=0;a<e.length-1;++a)o*=e[a];var i=r.shape,s=e.slice();s.pop();var u=1;for(a=n;a<r.rank;++a)u*=i[a],s.push(i[a]);var c=zt(r.shape).map(function(l){return l/u}).concat([1]).slice(0,n);return[s,o,u,c]}var $c=30;function Pa(r){return r<=$c?r:ci(r,Math.floor(Math.sqrt(r)))}function bv(r,t,e){var n=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+r+", sliceDim: "+n+", and batchDim: "+o+".";if(e.rank<o)throw new Error(a+" update.rank < "+o+". ");if(r.length<n+(e.rank-o))throw new Error(a+" Output shape length < "+(n+(e.rank-o)));if(e.rank!==o+r.length-n)throw new Error(a+" update.rank != "+(o+r.length-n));for(var i=0;i<o;++i)if(e.shape[i]!==t.shape[i])throw new Error(a+" updates.shape["+i+"] ("+e.shape[i]+") != indices.shape["+i+"] ("+t.shape[i]+").");for(i=0;i<e.rank-o;++i)if(e.shape[i+o]!==r[i+n])throw new Error(a+" updates.shape["+(i+o)+"] ("+e.shape[i+o]+") != shape["+(i+o)+"] ("+r[i+o]+")")}function xv(r,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}bv(e,t,r)}function No(r,t,e){for(var n=t.shape.length,o=n>1?t.shape[n-1]:1,a=e.length,i=1,s=o;s<a;++s)i*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:ee(t.shape)/u,sliceSize:i,strides:zt(e.slice(0,o)).concat([1]),outputSize:ee(e)}}function wv(r,t,e){E(r.rank===t.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+t+" must match the rank of the array ("+r.rank+")."}),E(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of size "+e+" must match the rank of the array ("+r.rank+")."});for(var n=function(a){E(t[a]+e[a]<=r.shape[a],function(){return"Error in slice"+r.rank+"D: begin["+a+"] + size["+a+"] ("+(t[a]+e[a])+") would overflow input.shape["+a+"] ("+r.shape[a]+")"})},o=0;o<r.rank;++o)n(o)}function fu(r){for(var t=[],e=0;r>0;)1&r&&t.push(e),r/=2,e++;return t}function Vi(r,t,e){for(var n=[],o=0;o<r.length;o++)n[o]=Math.ceil((t[o]-r[o])/e[o]);return n}function Cv(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=ii(0,a,s-1)}function _v(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=i>0?ii(0,a,s):ii(-1,a,s-1)}function Yc(r,t,e){for(var n=e.length,o=0;o<e.length;o++)if(e[o]>1){n=o;break}for(o=n+1;o<e.length;o++)if(t[o]>0||e[o]!==r[o])return!1;return!0}function Jc(r,t){for(var e=r.length>0?r[r.length-1]:1,n=0;n<r.length-1;n++)e+=r[n]*t[n];return e}function Ev(r,t){E(ui(r),function(){return"The f passed in variableGrads(f) must be a function"}),E(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof lr}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=t!=null;if(!e)for(var n in t=[],N.registeredVariables)t.push(N.registeredVariables[n]);var o=e?t.filter(function(l){return!l.trainable}):null,a=t.length;E((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=N.gradients(r,t,null,!0),s=i.value,u=i.grads;E(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),E(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,f){u[f]!=null&&(c[l.name]=u[f])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function ta(r){return N.customGrad(r)}var nn=T({softmax_:function(r,t){t===void 0&&(t=-1);var e=_(r,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return N.runKernelFunc(function(n,o){var a=n.softmax(e,t);return o([a]),a},{logits:e},function(n,o){var a=o[0],i=n.mul(a);return{logits:function(){return i.sub(i.sum([t],!0).mul(a))}}},"Softmax",{dim:t},[],[!0])}}),Rv=T({logSoftmax_:function(r,t){t===void 0&&(t=-1);var e=_(r,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return ta(function(n,o){var a=n.max(t,!0),i=n.sub(a),s=i.toFloat().sub(i.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(e)}}),Qc=function(){function r(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},r.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},r.prototype.has=function(t){return this.data.has(t)},r.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),Zc=function(){function r(){}return r.prototype.time=function(t){return P("time")},r.prototype.read=function(t){return P("read")},r.prototype.readSync=function(t){return P("readSync")},r.prototype.numDataIds=function(){return P("numDataIds")},r.prototype.disposeData=function(t){return P("disposeData")},r.prototype.write=function(t,e,n){return P("write")},r.prototype.move=function(t,e,n,o){return P("move")},r.prototype.memory=function(){return P("memory")},r.prototype.floatPrecision=function(){return P("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(t,e,n,o){return P("batchMatMul")},r.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,P("fusedBatchMatMul")},r.prototype.slice=function(t,e,n){return P("slice")},r.prototype.stridedSlice=function(t,e,n,o){return P("stridedSlice")},r.prototype.unstack=function(t,e){return P("unstack")},r.prototype.reverse=function(t,e){return P("reverse")},r.prototype.concat=function(t,e){return P("concat")},r.prototype.neg=function(t){return P("neg")},r.prototype.add=function(t,e){return P("add")},r.prototype.addN=function(t){return P("addN")},r.prototype.subtract=function(t,e){return P("subtract")},r.prototype.multiply=function(t,e){return P("multiply")},r.prototype.realDivide=function(t,e){return P("realDivide")},r.prototype.floorDiv=function(t,e){return P("floorDiv")},r.prototype.sum=function(t,e){return P("sum")},r.prototype.prod=function(t,e){return P("prod")},r.prototype.unsortedSegmentSum=function(t,e,n){return P("unsortedSegmentSum")},r.prototype.argMin=function(t,e){return P("argMin")},r.prototype.argMax=function(t,e){return P("argMax")},r.prototype.equal=function(t,e){return P("equal")},r.prototype.notEqual=function(t,e){return P("notEqual")},r.prototype.less=function(t,e){return P("less")},r.prototype.lessEqual=function(t,e){return P("lessEqual")},r.prototype.greater=function(t,e){return P("greater")},r.prototype.greaterEqual=function(t,e){return P("greaterEqual")},r.prototype.logicalNot=function(t){return P("logicalNot")},r.prototype.logicalAnd=function(t,e){return P("logicalAnd")},r.prototype.logicalOr=function(t,e){return P("logicalOr")},r.prototype.where=function(t){return P("where")},r.prototype.select=function(t,e,n){return P("select")},r.prototype.topk=function(t,e,n){return P("topk")},r.prototype.min=function(t,e){return P("min")},r.prototype.minimum=function(t,e){return P("minimum")},r.prototype.mod=function(t,e){return P("mod")},r.prototype.max=function(t,e){return P("max")},r.prototype.maximum=function(t,e){return P("maximum")},r.prototype.all=function(t,e){return P("all")},r.prototype.any=function(t,e){return P("any")},r.prototype.squaredDifference=function(t,e){return P("squaredDifference")},r.prototype.ceil=function(t){return P("ceil")},r.prototype.floor=function(t){return P("floor")},r.prototype.round=function(t){return P("round")},r.prototype.sign=function(t){return P("sign")},r.prototype.isNaN=function(t){return P("isNaN")},r.prototype.isInf=function(t){return P("isInf")},r.prototype.isFinite=function(t){return P("isFinite")},r.prototype.pow=function(t,e){return P("pow")},r.prototype.exp=function(t){return P("exp")},r.prototype.expm1=function(t){return P("expm1")},r.prototype.softmax=function(t,e){return P("softmax")},r.prototype.log=function(t){return P("log")},r.prototype.log1p=function(t){return P("log1p")},r.prototype.sqrt=function(t){return P("sqrt")},r.prototype.rsqrt=function(t){return P("rsqrt")},r.prototype.square=function(t){return P("square")},r.prototype.reciprocal=function(t){return P("reciprocal")},r.prototype.relu=function(t){return P("relu")},r.prototype.relu6=function(t){return P("relu6")},r.prototype.prelu=function(t,e){return P("prelu")},r.prototype.elu=function(t){return P("elu")},r.prototype.eluDer=function(t,e){return P("eluDer")},r.prototype.selu=function(t){return P("selu")},r.prototype.int=function(t){return P("int")},r.prototype.clip=function(t,e,n){return P("clip")},r.prototype.abs=function(t){return P("abs")},r.prototype.complexAbs=function(t){return P("complexAbs")},r.prototype.sigmoid=function(t){return P("sigmoid")},r.prototype.softplus=function(t){return P("softplus")},r.prototype.sin=function(t){return P("sin")},r.prototype.cos=function(t){return P("cos")},r.prototype.tan=function(t){return P("tan")},r.prototype.asin=function(t){return P("asin")},r.prototype.acos=function(t){return P("acos")},r.prototype.atan=function(t){return P("atan")},r.prototype.atan2=function(t,e){return P("atan2")},r.prototype.sinh=function(t){return P("sinh")},r.prototype.cosh=function(t){return P("cosh")},r.prototype.tanh=function(t){return P("tanh")},r.prototype.asinh=function(t){return P("asinh")},r.prototype.acosh=function(t){return P("acosh")},r.prototype.atanh=function(t){return P("atanh")},r.prototype.erf=function(t){return P("erf")},r.prototype.step=function(t,e){return P("step")},r.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,P("fusedConv2d")},r.prototype.conv2d=function(t,e,n){return P("conv2d")},r.prototype.conv2dDerInput=function(t,e,n){return P("conv2dDerInput")},r.prototype.conv2dDerFilter=function(t,e,n){return P("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,P("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(t,e,n){return P("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(t,e,n){return P("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(t,e,n){return P("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(t,e,n){return P("conv3d")},r.prototype.conv3dDerInput=function(t,e,n){return P("conv3dDerInput")},r.prototype.conv3dDerFilter=function(t,e,n){return P("conv3dDerFilter")},r.prototype.maxPool=function(t,e){return P("maxPool")},r.prototype.maxPoolBackprop=function(t,e,n,o){return P("maxPoolBackprop")},r.prototype.avgPool=function(t,e){return P("avgPool")},r.prototype.avgPoolBackprop=function(t,e,n){return P("avgPoolBackprop")},r.prototype.avgPool3d=function(t,e){return P("avgPool3d")},r.prototype.avgPool3dBackprop=function(t,e,n){return P("avgPool3dBackprop")},r.prototype.maxPool3d=function(t,e){return P("maxPool3d")},r.prototype.maxPool3dBackprop=function(t,e,n,o){return P("maxPool3dBackprop")},r.prototype.reshape=function(t,e){return P("reshape")},r.prototype.cast=function(t,e){return P("cast")},r.prototype.tile=function(t,e){return P("tile")},r.prototype.pad=function(t,e,n){return P("pad")},r.prototype.transpose=function(t,e){return P("transpose")},r.prototype.gather=function(t,e,n){return P("gather")},r.prototype.gatherND=function(t,e){return P("gatherND")},r.prototype.scatterND=function(t,e,n){return P("scatterND")},r.prototype.batchToSpaceND=function(t,e,n){return P("batchToSpaceND")},r.prototype.spaceToBatchND=function(t,e,n){return P("spaceToBatchND")},r.prototype.resizeBilinear=function(t,e,n,o){return P("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(t,e,n){return P("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(t,e,n,o){return P("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(t,e,n){return P("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(t,e,n,o,a,i){return P("batchNormalization")},r.prototype.localResponseNormalization4D=function(t,e,n,o,a){return P("localResponseNormalization4D")},r.prototype.LRNGrad=function(t,e,n,o,a,i,s){return P("LRNGrad")},r.prototype.multinomial=function(t,e,n,o){return P("multinomial")},r.prototype.oneHot=function(t,e,n,o){return P("oneHot")},r.prototype.cumsum=function(t,e,n,o){return P("cumsum")},r.prototype.nonMaxSuppression=function(t,e,n,o,a){return P("nonMaxSuppression")},r.prototype.fft=function(t){return P("fft")},r.prototype.ifft=function(t){return P("ifft")},r.prototype.complex=function(t,e){return P("complex")},r.prototype.real=function(t){return P("real")},r.prototype.imag=function(t){return P("imag")},r.prototype.cropAndResize=function(t,e,n,o,a,i){return P("cropAndResize")},r.prototype.depthToSpace=function(t,e,n){return P("depthToSpace")},r.prototype.split=function(t,e,n){return P("split")},r.prototype.sparseToDense=function(t,e,n,o){return P("sparseToDense")},r.prototype.diag=function(t){return P("diag")},r.prototype.fill=function(t,e,n){return P("fill")},r.prototype.onesLike=function(t){return P("onesLike")},r.prototype.zerosLike=function(t){return P("zerosLike")},r.prototype.linspace=function(t,e,n){return P("linspace")},r.prototype.dispose=function(){return P("dispose")},r}();function P(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function hn(r,t){for(var e=r.length,n=[],o=0;o<e;o++){var a=e-1-o,i=r[a]||1;(t[t.length-1-o]||1)>1&&i===1&&n.unshift(a)}return n}function Ue(r,t){for(var e=[],n=0;n<t.length;n++){var o=r[r.length-n-1],a=t.length-n-1,i=t[a];(o==null||o===1&&i>1)&&e.unshift(a)}return e}function me(r,t){for(var e=[],n=Math.max(r.length,t.length),o=0;o<n;o++){var a=r[r.length-o-1];a==null&&(a=1);var i=t[t.length-o-1];if(i==null&&(i=1),a===1)e.unshift(i);else if(i===1)e.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+t+".");e.unshift(a)}}return e}function Ar(r,t,e,n,o,a,i){i===void 0&&(i="channelsLast");var s,u=Oo(t),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return Wn(r,s,e,n,o,a,!1,i)}function Fo(r,t,e,n,o,a,i){i===void 0&&(i="NDHWC");var s,u,c=mi(t),l=c[0],f=c[1],h=c[2];if(i==="NDHWC")u="channelsLast",s=[l,f,h,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,f,h,r[1],r[1]]}return Po(r,s,e,n,o,!1,u,a)}function Wn(r,t,e,n,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3];if(s==="channelsLast")c=r[0],l=r[1],f=r[2],h=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],h=r[1],l=r[2],f=r[3]}var d,p=t[0],m=t[1],v=t[3],g=Oo(e),b=g[0],x=g[1],y=Oo(n),w=y[0],C=y[1],I=rr(p,w),k=rr(m,C),S=function(B,O,U,V,z,H,G,j){var Q,X,ie;if(typeof B=="number"){Q={top:B,bottom:B,left:B,right:B,type:B===0?"VALID":"NUMBER"};var oe=function(pe,be,ye,_e,ke){_e==null&&(_e=el(pe,be,ye));var Ie=pe[0],At=pe[1],Nt=Sr((Ie-be+2*_e)/ye+1,ke);E(Fe(Nt),function(){return"The output # of rows ("+Nt+") must be an integer. Change the stride and/or zero pad parameters"});var lt=Sr((At-be+2*_e)/ye+1,ke);return E(Fe(lt),function(){return"The output # of columns ("+lt+") must be an integer. Change the stride and/or zero pad parameters"}),[Nt,lt]}([O,U],H,V,B,j);X=oe[0],ie=oe[1]}else if(B==="same"){X=Math.ceil(O/V),ie=Math.ceil(U/z);var fe=Math.max(0,(X-1)*V+H-O),ce=Math.max(0,(ie-1)*z+G-U),Z=Math.floor(fe/2),he=fe-Z,Ee=Math.floor(ce/2);Q={top:Z,bottom:he,left:Ee,right:ce-Ee,type:"SAME"}}else{if(B!=="valid")throw Error("Unknown padding parameter: "+B);Q={top:0,bottom:0,left:0,right:0,type:"VALID"},X=Math.ceil((O-H+1)/V),ie=Math.ceil((U-G+1)/z)}return{padInfo:Q,outHeight:X,outWidth:ie}}(o,l,f,b,x,I,k,a),R=S.padInfo,A=S.outHeight,D=S.outWidth,L=i?v*h:v;return s==="channelsFirst"?d=[c,L,A,D]:s==="channelsLast"&&(d=[c,A,D,L]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:f,inChannels:h,outHeight:A,outWidth:D,outChannels:L,padInfo:R,strideHeight:b,strideWidth:x,filterHeight:p,filterWidth:m,effectiveFilterHeight:I,effectiveFilterWidth:k,dilationHeight:w,dilationWidth:C,inShape:r,outShape:d,filterShape:t}}function Po(r,t,e,n,o,a,i,s){a===void 0&&(a=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3],d=u[4];if(i==="channelsLast")c=r[0],l=r[1],f=r[2],h=r[3],d=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],d=r[1],l=r[2],f=r[3],h=r[4]}var p,m=t[0],v=t[1],g=t[2],b=t[4],x=mi(e),y=x[0],w=x[1],C=x[2],I=mi(n),k=I[0],S=I[1],R=I[2],A=rr(m,k),D=rr(v,S),L=rr(g,R),B=function(G,j,Q,X,ie,oe,fe,ce,Z,he,Ee){var pe,be,ye,_e;if(typeof G=="number"){pe={top:G,bottom:G,left:G,right:G,front:G,back:G,type:G===0?"VALID":"NUMBER"};var ke=function(Hn,Jt,ma,Gn,Ft,ga){Ft==null&&(Ft=el(Hn,Jt,Gn));var $f=Hn[0],Yf=Hn[1],Jf=Hn[2],ya=Sr(($f-Jt+2*Ft)/Gn+1,ga);E(Fe(ya),function(){return"The output # of depths ("+ya+") must be an integer. Change the stride and/or zero pad parameters"});var ba=Sr((Yf-Jt+2*Ft)/Gn+1,ga);E(Fe(ba),function(){return"The output # of rows ("+ba+") must be an integer. Change the stride and/or zero pad parameters"});var xa=Sr((Jf-Jt+2*Ft)/Gn+1,ga);return E(Fe(xa),function(){return"The output # of columns ("+xa+") must be an integer. Change the stride and/or zero pad parameters"}),[ya,ba,xa,ma]}([j,Q,X,1],ce,1,ie,G,Ee);be=ke[0],ye=ke[1],_e=ke[2]}else if(G==="same"){be=Math.ceil(j/ie),ye=Math.ceil(Q/oe),_e=Math.ceil(X/fe);var Ie=(be-1)*ie+ce-j,At=(ye-1)*oe+Z-Q,Nt=(_e-1)*fe+he-X,lt=Math.floor(Ie/2),Vn=Ie-lt,$t=Math.floor(At/2),un=At-$t,Yt=Math.floor(Nt/2);pe={top:$t,bottom:un,left:Yt,right:Nt-Yt,front:lt,back:Vn,type:"SAME"}}else{if(G!=="valid")throw Error("Unknown padding parameter: "+G);pe={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},be=Math.ceil((j-ce+1)/ie),ye=Math.ceil((Q-Z+1)/oe),_e=Math.ceil((X-he+1)/fe)}return{padInfo:pe,outDepth:be,outHeight:ye,outWidth:_e}}(o,l,f,h,y,w,C,A,D,L,s),O=B.padInfo,U=B.outDepth,V=B.outHeight,z=B.outWidth,H=a?b*d:b;return i==="channelsFirst"?p=[c,H,U,V,z]:i==="channelsLast"&&(p=[c,U,V,z,H]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:f,inWidth:h,inChannels:d,outDepth:U,outHeight:V,outWidth:z,outChannels:H,padInfo:O,strideDepth:y,strideHeight:w,strideWidth:C,filterDepth:m,filterHeight:v,filterWidth:g,effectiveFilterDepth:A,effectiveFilterHeight:D,effectiveFilterWidth:L,dilationDepth:k,dilationHeight:S,dilationWidth:R,inShape:r,outShape:p,filterShape:t}}function el(r,t,e,n){n===void 0&&(n=1);var o=rr(t,n);return Math.floor((r[0]*(e-1)-e+o)/2)}function Oo(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function mi(r){return typeof r=="number"?[r,r,r]:r}function rr(r,t){return t<=1?r:r+(r-1)*(t-1)}function Sr(r,t){if(!t)return r;switch(t){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+t)}}function hr(r){var t=Oo(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function ct(r,t){return hr(r)||hr(t)}function Hi(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function tl(r,t,e){if(t==="complex64"){if(r.dtype==="complex64")return r.clone();var n=Se(r.shape),o=r.toFloat(),a=e.complex(o,n);return n.dispose(),o.dispose(),a}if(!Qd(r.dtype,t))return N.makeTensorFromDataId(r.dataId,r.shape,t);if(r.dtype==="complex64"){var i=e.real(r);return a=i.cast(t),i.dispose(),a}if(t==="int32")return e.int(r);if(t==="bool"){var s=K(0,r.dtype);return a=e.notEqual(r,s),s.dispose(),a}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+t)}function gi(r,t){return N.makeTensorFromDataId(r.dataId,t,r.dtype)}function nl(r,t,e){var n=(t-r)/(e-1),o=zr(e,"float32");o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return Pe(o,"float32")}function yi(r,t){if(r.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+t.length+".");for(var e=new Float32Array(2*r.length),n=0;n<e.length;n+=2)e[n]=r[n/2],e[n+1]=t[n/2];return e}function hu(r,t){return{real:r[2*t],imag:r[2*t+1]}}function Sv(r,t,e,n){r[2*n]=t,r[2*n+1]=e}function kv(r,t,e){var n=(e?2:-2)*Math.PI*(r/t);return{real:Math.cos(n),imag:Math.sin(n)}}function Iv(r,t,e){var n=function(a,i,s){return function(u,c,l){for(var f=0,h=u.length,d=0,p=!1;f<h;){var m=l(c,u[d=f+(h-f>>>1)]);m>0?f=d+1:(h=d,p=!m)}return p?f:-f-1}(a,i,s||Tv)}(r,t,e),o=n<0?-(n+1):n;r.splice(o,0,t)}function Tv(r,t){return r>t?1:r<t?-1:0}function Gi(r,t,e,n,o){return rl(r,t,e,n,o,0).selectedIndices}function qi(r,t,e,n,o,a){var i=rl(r,t,e,n,o,a);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function rl(r,t,e,n,o,a,i,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(y,w){return{score:y,boxIndex:w,suppressBeginIndex:0}}).filter(function(y){return y.score>o}).sort(du),c=a>0?-.5/a:0,l=[],f=[];l.length<e&&u.length>0;){var h=u.pop(),d=h.score,p=h.boxIndex,m=h.suppressBeginIndex;if(d<o)break;for(var v=!1,g=l.length-1;g>=m;--g){var b=Dv(r,p,l[g]);if(b>=n){v=!0;break}if(h.score=h.score*Av(n,c,b),h.score<=o)break}h.suppressBeginIndex=l.length,v||(h.score===d?(l.push(p),f.push(h.score)):h.score>o&&Iv(u,h,du))}var x=l.length;return s&&(l.fill(0,x),f.fill(0,x)),{selectedIndices:Pe(l,"int32"),selectedScores:Pe(f,"float32"),numValidOutputs:K(x,"int32")}}function Dv(r,t,e){var n=r.subarray(4*t,4*t+4),o=r.subarray(4*e,4*e+4),a=Math.min(n[0],n[2]),i=Math.min(n[1],n[3]),s=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),h=Math.max(o[1],o[3]),d=(s-a)*(u-i),p=(f-c)*(h-l);if(d<=0||p<=0)return 0;var m=Math.max(a,c),v=Math.max(i,l),g=Math.min(s,f),b=Math.min(u,h),x=Math.max(g-m,0)*Math.max(b-v,0);return x/(d+p-x)}function Av(r,t,e){var n=Math.exp(t*e*e);return e<=r?n:0}function du(r,t){return r.score-t.score||r.score===t.score&&t.boxIndex-r.boxIndex}function ol(r,t,e){var n=new Array(r.rank).fill(0),o=r.shape.slice();return t.map(function(a){o[e]=a;var i=r.slice(n,o);return n[e]+=a,i})}function al(r,t){for(var e=new Array(r.rank),n=0;n<e.length;n++)e[n]=r.shape[n]*t[n];var o=le(e,r.dtype);for(n=0;n<o.values.length;++n){for(var a=o.indexToLoc(n),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=a[s]%r.shape[s];var u=r.locToIndex(i);o.values[n]=r.values[u]}return o.toTensor()}function il(r,t,e,n,o){for(var a=t[t.length-1],i=[r.length/a,a],s=i[0],u=i[1],c=Ir(e,s*n),l=Ir("int32",s*n),f=0;f<s;f++){for(var h=f*u,d=r.subarray(h,h+u),p=[],m=0;m<d.length;m++)p.push({value:d[m],index:m});p.sort(function(y,w){return w.value-y.value});var v=f*n,g=c.subarray(v,v+n),b=l.subarray(v,v+n);for(m=0;m<n;m++)g[m]=p[m].value,b[m]=p[m].index}var x=t.slice();return x[x.length-1]=n,[Xe(c,x,e),Xe(l,x,"int32")]}function ji(r,t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(n);var o=le(r,"int32"),a=le([e.length,r.length],"int32");for(n=0;n<e.length;n++){var i=o.indexToLoc(e[n]),s=n*r.length;a.values.set(i,s)}return a.toTensor()}var Nv=function(r,t){this.outputShape=[],this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+n+`;
        setOutput(result);
      }
    `},Fv=function(r,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+n+`;
        setOutput(result);
      }
    `},Pv=function(r,t,e){this.variableNames=["A"];var n=r.windowSize,o=r.batchSize,a=r.inSize,i=Math.ceil(a/n);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+n+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function sl(r,t){return["x","y","z","w","u","v"].slice(0,t).map(function(e){return r+"."+e})}function at(r,t){return t===1?[r]:sl(r,t)}function Ze(){var r,t,e,n,o,a,i,s,u,c;return W().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",t="in",e="out",n="in",o="texture",a="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",t="attribute",e="varying",n="varying",o="texture2D",a="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:t,varyingVs:e,varyingFs:n,texture2D:o,output:a,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function Dn(r,t,e){e===void 0&&(e="index");var n=zt(t);return n.map(function(o,a){return"int "+r[a]+" = "+e+" / "+o+"; "+(a===n.length-1?"int "+r[a+1]+" = "+e+" - "+r[a]+" * "+o:"index -= "+r[a]+" * "+o)+";"}).join("")}function Ki(r){var t=zt(r).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var ul=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function Ov(r,t,e,n){var o=[];r.forEach(function(d){var p=ee(d.shapeInfo.logicalShape);d.shapeInfo.isUniform?o.push("uniform float "+d.name+(p>1?"["+p+"]":"")+";"):(o.push("uniform sampler2D "+d.name+";"),o.push("uniform int offset"+d.name+";"))});var a,i,s=o.join(`
`),u=r.map(function(d){return function(p,m,v){v===void 0&&(v=!1);var g="";g+=v?cl(p):Jn(p);var b=p.shapeInfo.logicalShape,x=m.logicalShape;return b.length<=x.length&&(g+=v?function(y,w){var C,I=y.name,k=I.charAt(0).toUpperCase()+I.slice(1),S="get"+k+"AtOutCoords",R=y.shapeInfo.logicalShape.length,A=w.logicalShape.length,D=hn(y.shapeInfo.logicalShape,w.logicalShape),L=Re(A),B=A-R,O=["x","y","z","w","u","v"];C=R===0?"":A<2&&D.length>=1?"coords = 0;":D.map(function(Q){return"coords."+O[Q+B]+" = 0;"}).join(`
`);var U="";U=A<2&&R>0?"coords":y.shapeInfo.logicalShape.map(function(Q,X){return"coords."+O[X+B]}).join(", ");var V="return outputValue;",z=ee(y.shapeInfo.logicalShape)===1,H=ee(w.logicalShape)===1;if(R!==1||z||H){if(z&&!H)V=A===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(D.length){var G=R-2,j=R-1;D.indexOf(G)>-1&&D.indexOf(j)>-1?V="return vec4(outputValue.x);":D.indexOf(G)>-1?V="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":D.indexOf(j)>-1&&(V="return vec4(outputValue.xx, outputValue.zz);")}}else V=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+S+`() {
      `+L+` coords = getOutputCoords();
      `+C+`
      vec4 outputValue = get`+k+"("+U+`);
      `+V+`
    }
  `}(p,m):function(y,w){var C=y.name,I=C.charAt(0).toUpperCase()+C.slice(1),k="get"+I+"AtOutCoords",S=w.texShape,R=y.shapeInfo.texShape,A=y.shapeInfo.logicalShape.length,D=w.logicalShape.length;if(!y.shapeInfo.isUniform&&A===D&&y.shapeInfo.flatOffset==null&&Ge(R,S))return`
      float `+k+`() {
        return sampleTexture(`+C+`, resultUV);
      }
    `;var L,B=Re(D),O=hn(y.shapeInfo.logicalShape,w.logicalShape),U=D-A,V=["x","y","z","w","u","v"];L=A===0?"":D<2&&O.length>=1?"coords = 0;":O.map(function(H){return"coords."+V[H+U]+" = 0;"}).join(`
`);var z="";return z=D<2&&A>0?"coords":y.shapeInfo.logicalShape.map(function(H,G){return"coords."+V[G+U]}).join(", "),`
    float `+k+`() {
      `+B+` coords = getOutputCoords();
      `+L+`
      return get`+I+"("+z+`);
    }
  `}(p,m)),g}(d,t,n)}).join(`
`),c=t.texShape,l=Ze(),f=function(d){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+d.texture2D+`(textureSampler, uv).r;
    }
  `}(l),h=function(d){return d.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+d.varyingFs+` vec2 resultUV;
    `+d.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+d.defineSpecialNaN+`
    `+d.defineSpecialInf+`
    `+d.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+Mv+`
    `+Bv+`
    `+Lv+`
  `}(l);return t.isPacked?(a=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(y,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return C[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+C[1]+`.0);
      }
    `:C[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+C[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      return 2 * (resTexRC.x * `+C[1]+` + resTexRC.y);
    }
  `}(0,p);case 2:return function(y,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(Ge(y,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+C[0]+", "+C[1]+`));
      }
    `;var I=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));

      int index = resTexRC.x * `+C[1]+` + resTexRC.y;
      int r = 2 * (index / `+I+`);
      int c = imod(index, `+I+`) * 2;

      return ivec2(r, c);
    }
  `}(d,p);case 3:return m=d,v=p,g=[Math.ceil(v[0]/2),Math.ceil(v[1]/2)],b=Math.ceil(m[2]/2),x=b*Math.ceil(m[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+x+`;
      index -= b * `+x+`;

      int r = 2 * (index / `+b+`);
      int c = imod(index, `+b+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(y,w){for(var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],I=Math.ceil(y[y.length-1]/2),k=I*Math.ceil(y[y.length-2]/2),S=k,R="",A="b, r, c",D=2;D<y.length-1;D++)S*=y[y.length-D-1],R=`
      int b`+D+" = index / "+S+`;
      index -= b`+D+" * "+S+`;
    `+R,A="b"+D+", "+A;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      int index = resTexRC.x * `+C[1]+` + resTexRC.y;

      `+R+`

      int b = index / `+k+`;
      index -= b * `+k+`;

      int r = 2 * (index / `+I+`);
      int c = imod(index, `+I+`) * 2;

      return ivec`+y.length+"("+A+`);
    }
  `}(d,p)}var m,v,g,b,x}(t.logicalShape,c),i=function(d){return`
    void setOutput(vec4 val) {
      `+d.output+` = val;
    }
  `}(l)):(a=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,b){return b[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+b[1]+`.0);
      }
    `:b[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+b[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+b[0]+", "+b[1]+`));
      return resTexRC.x * `+b[1]+` + resTexRC.y;
    }
  `}(0,p);case 2:return function(g,b){return Ge(g,b)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+b[0]+", "+b[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+b[0]+", "+b[1]+`));
        int index = resTexRC.x * `+b[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+b[0]+", "+b[1]+`));
        int index = resTexRC.x * `+b[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+b[0]+", "+b[1]+`));
      int index = resTexRC.x * `+b[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(d,p);case 3:return m=p,v=Dn(["r","c","d"],d),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;
      `+v+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,b){var x=Dn(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+b[0]+", "+b[1]+`));
      int index = resTexRC.x * `+b[1]+` + resTexRC.y;
      `+x+`
      return ivec4(r, c, d, d2);
    }
  `}(d,p);case 5:return function(g,b){var x=Dn(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+b[0]+`,
                             `+b[1]+`));

      int index = resTexRC.x * `+b[1]+` + resTexRC.y;

      `+x+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(d,p);case 6:return function(g,b){var x=Dn(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+b[0]+", "+b[1]+`));
      int index = resTexRC.x * `+b[1]+` + resTexRC.y;

      `+x+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(d,p);default:throw new Error(d.length+"-D output sampling is not yet supported")}var m,v}(t.logicalShape,c),i=function(d){return`
    void setOutput(float val) {
      `+d.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),n&&(h+=Wv),[h,f,i,s,a,u,e].join(`
`)}function Jn(r){var t=r.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+n+";}";var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(i===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],f=_n(n);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+f+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 1:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+jn(e)+`
      }
    `;var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(s===1&&i===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=_n(n);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `:i===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+n+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 2:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=e.shapeInfo.texShape;if(i!=null&&Ge(n,i)){var s=i[0],u=i[1];return`
    float `+a+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=In(n),l=c.newShape,f=c.keptDims,h=l;if(h.length<n.length){var d=Qn(e,h);return`
      `+Jn(d)+`
      float `+a+`(int row, int col) {
        return `+a+"("+Zn(["row","col"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+n[1]+`, 1)));
        `+jn(e)+`
      }
    `;var p=i[0],m=i[1],v=_n(o);return m===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:p===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+m+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+a+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+n[1]+" + col + "+v+`;
    vec2 uv = uvFromFlat(`+p+", "+m+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(r);case 3:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[1]*n[2],s=n[2],u=In(n),c=u.newShape,l=u.keptDims,f=c;if(f.length<n.length){var h=Qn(e,f);return`
        `+Jn(h)+`
        float `+a+`(int row, int col, int depth) {
          return `+a+"("+Zn(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+jn(e)+`
      }
    `;var d=e.shapeInfo.texShape,p=d[0],m=d[1],v=e.shapeInfo.flatOffset;if(m===i&&v==null)return`
        float `+a+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+m+".0, "+p+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(m===s&&v==null)return`
    float `+a+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+n[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+m+".0, "+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=_n(o);return`
      float `+a+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+p+", "+m+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(r);case 4:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[3],s=n[2]*i,u=n[1]*s,c=In(n),l=c.newShape,f=c.keptDims;if(l.length<n.length){var h=Qn(e,l);return`
      `+Jn(h)+`
      float `+a+`(int row, int col, int depth, int depth2) {
        return `+a+"("+Zn(["row","col","depth","depth2"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+jn(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,m=p[0],v=p[1];if(v===u&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(v===i&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+n[1]*n[2]+", "+n[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=_n(o);return`
    float `+a+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+m+", "+v+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 5:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[4],s=n[3]*i,u=n[2]*s,c=n[1]*u,l=In(n),f=l.newShape,h=l.keptDims;if(f.length<n.length){var d=Qn(e,f);return`
      `+Jn(d)+`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        return `+a+"("+Zn(["row","col","depth","depth2","depth3"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+jn(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,v=m[0],g=m[1];if(g===c&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===i&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]+`,
               `+n[2]*n[3]+", "+n[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=_n(o);return`
    float `+a+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+b+`;
      vec2 uv = uvFromFlat(`+v+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 6:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=In(n),s=i.newShape,u=i.keptDims;if(s.length<n.length){var c=Qn(e,s);return`
      `+Jn(c)+`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+a+"("+Zn(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=n[5],f=n[4]*l,h=n[3]*f,d=n[2]*h,p=n[1]*d;if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+p+", "+d+", "+h+", "+f+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+jn(e)+`
      }
    `;var m=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,g=v[0],b=v[1];if(b===p&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+d+", "+h+", "+f+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+b+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(b===l&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]*n[4]+`,
               `+n[2]*n[3]*n[4]+`,
               `+n[3]*n[4]+`,
               `+n[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+b+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=_n(o);return`
    float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+p+" + col * "+d+" + depth * "+h+` +
          depth2 * `+f+" + depth3 * "+l+" + depth4 + "+x+`;
      vec2 uv = uvFromFlat(`+g+", "+b+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function cl(r){var t,e,n;switch(r.shapeInfo.logicalShape.length){case 0:return t=r.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),n=Ze(),`
    vec4 `+e+`() {
      return `+n.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var a=o.name,i="get"+a.charAt(0).toUpperCase()+a.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Ze();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+a+`, uv);
    }
  `}(r);case 2:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],f=Ze();if(u!=null&&Ge(a,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+f.texture2D+"("+i+`, uv);
      }
    `;var h=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],d=Math.ceil(a[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+d+", "+h[0]+", "+h[1]+`, row, col);
      return `+f.texture2D+"("+i+`, uv);
    }
  `}(r);case 3:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(a[0]===1){var l=a.slice(1),f=Qn(o,l);return`
        `+cl(f)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+Zn(["b","row","col"],[1,2])+`);
        }
      `}var h=c[0],d=c[1],p=Math.ceil(a[2]/2),m=p*Math.ceil(a[1]/2),v=Ze();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+h+", "+d+", "+m+", "+p+`, b, row, col);
      return `+v.texture2D+"("+i+`, uv);
    }
  `}(r);default:return function(o){for(var a=o.shapeInfo.logicalShape,i=a.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],f=l[0],h=l[1],d=Math.ceil(a[i-1]/2),p=d*Math.ceil(a[i-2]/2),m="int b, int row, int col",v="b * "+p+" + (row / 2) * "+d+" + (col / 2)",g=2;g<i-1;g++)m="int b"+g+", "+m,p*=a[i-g-1],v="b"+g+" * "+p+" + "+v;var b=Ze();return`
    vec4 `+u+"("+m+`) {
      int index = `+v+`;
      int texR = index / `+h+`;
      int texC = index - texR * `+h+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+h+", "+f+`);
      return `+b.texture2D+"("+s+`, uv);
    }
  `}(r)}}var Mv=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Bv=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Lv=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Wv=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function _n(r){return"offset"+r}function jn(r){var t=r.name,e=ee(r.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function Re(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function Qn(r,t){var e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=t,e}function Zn(r,t){return t.map(function(e){return r[e]}).join(", ")}var Uv=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,E(r.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var o=r[r.length-1],a=Math.ceil(o/t);this.outputShape=r.slice(0,-1),a>1&&this.outputShape.push(a),n||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=Re(c),f=at("coords",c);if(a===1){var h=Re(s=c+1);i=`
        `+h+" sourceLocR = "+h+"("+f.join()+`, 0);
        ++`+f[c-1]+`;
        `+h+" sourceLocG = "+h+"("+f.join()+`, 0);
        ++`+f[c-2]+`;
        `+h+" sourceLocA = "+h+"("+f.join()+`, 0);
        --`+f[c-1]+`;
        `+h+" sourceLocB = "+h+"("+f.join()+`, 0);
        --`+f[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+f[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+f[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+f[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+f[c-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),p="."+d[s-1],m=d.map(function(k){return"int "+k}),v=at("sourceLocR",s-1).concat("inIdx.r"),g=at("sourceLocG",s-1).concat("inIdx.g"),b=at("sourceLocB",s-1).concat("inIdx.b"),x=at("sourceLocA",s-1).concat("inIdx.a"),y=e==="max"?"greaterThan":"lessThan",w=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+b.join()+`),
                             getBestIndicesAChannel(`+x.join()+")));",C=`vec4(
            getAChannel(`+v.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+b.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+x.join()+") : 0.)",I=n?"":`
      float getBestIndicesAChannel(`+m.join()+`) {
        return getChannel(getBestIndicesA(`+d.join()+`),
                                          vec2(`+d.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+m.join()+`) {
        return getChannel(getA(`+d.join()+`),
                               vec2(`+d.slice(-2).join()+`));
      }
      `+I+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+f[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+f[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+p+", sourceLocG"+p+`,
          sourceLocB`+p+", sourceLocA"+p+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+C+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+C+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},zv=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,f=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+f+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},Vv=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,f=r.effectiveFilterHeight,h=r.effectiveFilterWidth,d=l-1-r.padInfo.front,p=f-1-r.padInfo.top,m=h-1-r.padInfo.left,v=1/(t*e*n);this.userCode=`
      const ivec3 pads = ivec3(`+d+", "+p+", "+m+`);
      const float avgMultiplier = float(`+v+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+f+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+h+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Hv=function(r,t,e,n,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],me(r,t),me(r,e);var i="0.0";n!=null&&(me(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";o!=null&&(me(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},Gv=function(r,t,e,n,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],me(r,t),me(r,e);var i="vec4(0.0)";n!=null&&(me(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(me(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},qv="return areal * breal - aimag * bimag;",jv="return areal * bimag + aimag * breal;",pu=function(r,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=me(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Oa="return a + b;",Ma="return a - b;",vu="return a * b;",ll="return (a < 0.) ? b * a : a;",Ne=function(r,t,e){this.variableNames=["A","B"],this.outputShape=me(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},fl=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,Zt=function(r,t,e,n){n===void 0&&(n=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=me(t,e);var o=this.outputShape.length,a="";if(n)if(o===0||ee(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+Re(o)+` coords = getOutputCoords();
        `,o===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=at("coords",o);a+=`
            bool nextRowOutOfBounds =
              (`+i[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+i[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `},Kv=function(){function r(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),Xv=function(){function r(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),$v=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},Yv=function(r){this.outputShape=[],this.outputShape=fr(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var t=new Array(r.length-1);t[0]=r[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+r[e][1];var n=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var o=t[e-1];n.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var a=t.length,i=t[t.length-1];n.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+n.join(`
        `)+`
      }
    `},Jv=function(r,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=fr(r,t);var e=this.outputShape,n=e.length,o=Re(n),a=at("coords",n),i=["x","y","z","w","u","v"].slice(0,n);this.variableNames=r.map(function(v,g){return"T"+g});var s=new Array(r.length-1);s[0]=r[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][t];var c=i[t],l=i.slice(-2),f=i.join(),h="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+f+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var d=s[u-1];h+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+no(i,c,d)+`),
            vec2(`+no(l,c,d)+`));
        }`}var p=s.length,m=s[s.length-1];h+=`
        return getChannel(
          getT`+p+"("+no(i,c,m)+`),
          vec2(`+no(l,c,m)+"));",this.userCode=`
      float getValue(`+i.map(function(v){return"int "+v})+`) {
        `+h+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[n-1]+" = "+a[n-1]+` + 1;
        if (`+a[n-1]+" < "+e[n-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[n-2]+" = "+a[n-2]+` + 1;
        if (`+a[n-2]+" < "+e[n-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[n-1]+" = "+a[n-1]+` - 1;
        if (`+a[n-2]+" < "+e[n-2]+` &&
            `+a[n-1]+" < "+e[n-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function no(r,t,e){var n=r.indexOf(t);return r.map(function(o,a){return a===n?o+" - "+e:o}).join()}var Qv=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},Zv=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dataFormat==="channelsLast",i=t-1-r.padInfo.top,s=e-1-r.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},em=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.padInfo.front,a=r.padInfo.top,i=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+a+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+n+" - "+i+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},tm=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=t-1-r.padInfo.front,u=e-1-r.padInfo.top,c=n-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+n+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+n+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},nm=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},rm=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=t-1-r.padInfo.top,i=e-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},mu=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,a=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,f=r.filterWidth,h=4*Math.floor(r.inChannels/4),d=r.inChannels%4,p=r.dataFormat==="channelsLast",m=p?1:2,v=p?2:3,g=p?3:1,b="",x="";e&&(b=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,x="result = activation(result);");var y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+b+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+m+"], coords["+v+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+h+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+p+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(d===1)+`) {

              if (`+p+`) {
                dotProd +=
                    getX(batch, xR, xC, `+h+`) *
                    getW(wR, wC, `+h+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+h+`, xR, xC) *
                    getW(wR, wC, `+h+`, d2);
              }

            } else if (`+(d===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2)
              );

              if (`+p+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(d===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2),
                getW(wR, wC, `+h+` + 2, d2)
              );

              if (`+p+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1),
                  getX(batch, xR, xC, `+h+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC),
                  getX(batch, `+h+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+x+`
        setOutput(result);
      }
    `},om=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var t=r.padInfo.front,e=r.padInfo.top,n=r.padInfo.left,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,f=r.filterHeight,h=r.filterWidth,d=4*Math.floor(r.inChannels/4),p=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+n+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+h+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+d+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(p===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+d+`) *
                  getW(wF, wR, wC, `+d+`, d2);
              } else if (`+(p===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(p===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1),
                  getX(batch, xF, xR, xC, `+d+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2),
                  getW(wF, wR, wC, `+d+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},gu=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,f=r.dilationWidth,h=r.filterHeight,d=r.filterWidth,p=r.outChannels/r.inChannels,m="",v="";e&&(m=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,v="result = activation(result);");var g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+m+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+p+`;
        int q = d2 - d1 * `+p+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+h+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+d+`; wC++) {
            int xC = xCCorner + wC * `+f+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+v+`
        setOutput(result);
      }
    `},yu=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,f=r.dilationWidth,h=r.filterHeight,d=r.filterWidth,p=d,m="int xR; int xC; int xCOffset;",v=0;v<h;v++)for(var g=0;g<d;g++)m+=`
          vec4 xTexelR`+v+"C"+2*g+` = vec4(0.);
          vec4 wR`+v+"C"+g+` = vec4(0.);
          vec4 xR`+v+"C"+g+" = vec4(0.);";for(v=0;v<h;v++)for(var b=0;b<p;b++){if(m+=`
          xR = xRCorner + `+v*l+`;
          xC = xCCorner + `+(g=2*b)*f+`;
        `,c===1){if(g<d&&(m+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+v+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+v+"C"+g+" = vec4(previous.zw, xTexelR"+v+"C"+g+`.xy);
                } else {
                  xR`+v+"C"+g+" = vec4(0, 0, xTexelR"+v+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xR`+v+"C"+g+" = xTexelR"+v+"C"+g+`;
              `,g+1<d)){var x=s%2==0?Tc(f):f;f%2==0&&s%2==1||f%2!=0&&s%2!=1?(m+=`
                  xCOffset = xC + `+s%2+" + "+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,f>1&&(m+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+v+"C"+g+` = vec4(0.);
                    }
                  `),m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.xy);
                `):m+=`
                  xCOffset = xC + `+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+v+"C"+(g+1)+" = xTexelR"+v+"C"+(g+2)+`;
                `}}else g<d&&(m+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(m+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
              `,g+1<d&&(m+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+v+"C"+(g+1)+" = vec4(xTexelR"+v+"C"+(g+2)+`.xy, final.xy);
                `)):(m+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".xy, xTexelR"+v+"C"+(g+2)+`.xy);
              `,g+1<d&&(m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
                `)),m+="}");g<d&&(m+=`
            vec4 wTexelR`+v+"C"+g+" = getW("+v+", "+g+`, d1, q);
            wR`+v+"C"+g+" = vec4(wTexelR"+v+"C"+g+".xz, wTexelR"+v+"C"+g+`.xz);
          `,g+1<d&&(m+=`
              vec4 wTexelR`+v+"C"+(g+1)+" = getW("+v+", "+(g+1)+`, d1, q);
              wR`+v+"C"+(g+1)+` =
                vec4(wTexelR`+v+"C"+(g+1)+".xz, wTexelR"+v+"C"+(g+1)+".xz);"))}for(v=0;v<h;v++)for(g=0;g<d;g++)m+="dotProd += xR"+v+"C"+g+" * wR"+v+"C"+g+";";var y="",w="";e&&(y=n?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var C=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+m+`

        vec4 result = dotProd;
        `+C+`
        `+w+`
        setOutput(result);
      }
    `},am=function(r,t,e,n,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=r[0],i=r[1],s=r[2],u=r[3],c=t[0],l=e[0],f=e[1];this.outputShape=[c,l,f,u];var h=n==="bilinear"?1:0,d=[i-1+".0",s-1+".0"],p=d[0],m=d[1],v=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],g=v[0],b=v[1],x=v[2],y=f>1?[""+(s-1)/(f-1),"(x2-x1) * width_ratio","x1*"+m+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+m],w=y[0],C=y[1],I=y[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+b+`;
        float width_scale = `+C+`;

        float in_y = `+x+`;
        if( in_y < 0.0 || in_y > `+p+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+I+`;
        if( in_x < 0.0 || in_x > `+m+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+h+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},im=function(r,t,e){this.variableNames=["x"],this.outputShape=r;var n=r.length,o=r[r.length-1],a=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+Re(n)+` coords = getOutputCoords();
        int end = `+bu(n,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+bu(n,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(n,"coords")+`);
        }
        setOutput(val);
      }
    `};function bu(r,t){if(r===1)return""+t;if(r===2)return t+".y";if(r===3)return t+".z";if(r===4)return t+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var sm=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Dr.DENSE;var t=Rr(r),e=Ze();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Dn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},um=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Dr.DENSE;var t=Rr(r),e=Ze();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Dn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},cm=function(){function r(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),lm=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},fm=function(r){this.variableNames=["A"],this.outTexUsage=dt.DOWNLOAD;var t=Ze();this.outputShape=r,this.userCode=`
      `+ul+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},hm=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=dt.DOWNLOAD;var t=Ze();this.outputShape=r,this.userCode=`
      `+ul+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},dm=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var n=Ze(),o=t[0],a=t[1];this.outputShape=r;var i="result";e&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+Ki(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
        vec4 values = `+n.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+n.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},pm=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=Ze(),o=t[0],a=t[1];this.outputShape=r;var i="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
              values = `+n.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+Ki(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+n.output+" = "+s+`;
      }
    `},vm="return real * expR - imag * expI;",mm="return real * expI + imag * expR;",xu=function(r,t,e){this.variableNames=["real","imag"];var n=t[1];this.outputShape=t;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=e?n+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+n+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+n+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},gm=function(){function r(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.valueLoc==null&&(e.valueLoc=n.getUniformLocationNoThrow(o,"value")),n.gl.uniform1f(e.valueLoc,t)}},r}(),ym=function(r,t,e){this.variableNames=["A","indices"];var n=r.slice();n[e]=t,this.outputShape=n,this.rank=n.length;var o=Re(this.rank),a=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],f=0;f<i.length;f++)f===s?l.push("int(getIndices("+c[f]+"))"):l.push(""+c[f]);return l.join()}(r,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},bm=function(r,t,e){this.sliceDim=r,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var n=Re(t.length),o=Re(e.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+n+" strides = "+n+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function xm(r,t){var e=Ze();return vp(r,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function wm(r,t){return xp(r,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Cm(r,t){return wp(r,t,new Uint16Array([0,1,2,2,1,3]))}function Hr(r,t,e,n,o,a,i){_p(e,n);var s=Cp(r,t),u=r.TEXTURE_2D;return te(r,t,function(){return r.bindTexture(u,s)}),te(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),te(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),te(r,t,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),te(r,t,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),te(r,t,function(){return r.texImage2D(u,0,o,e,n,0,a,i,null)}),te(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function _m(r,t,e,n,o){var a=Zo(e,n);return Hr(r,t,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function Em(r,t,e,n,o){var a=Zo(e,n);return Hr(r,t,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function Rm(r,t,e,n,o){var a=Zo(e,n);return Hr(r,t,a[0],a[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function Sm(r,t,e,n,o){var a=Vr(e,n);return Hr(r,t,a[0],a[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function km(r,t,e,n,o){var a=Vr(e,n);return Hr(r,t,a[0],a[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function Im(r,t,e,n){return te(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),su(r,t,e,"clipSpacePos",n,3,20,0)&&su(r,t,e,"uv",n,2,20,12)}function Tm(r,t,e,n,o,a,i){var s,u,c;te(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),a instanceof Uint8Array?(s=new Uint8Array(n*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(n*o*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(a),te(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,c,n,o,0,r.RGBA,u,s)}),te(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function Dm(r,t,e,n){te(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),n.data instanceof Uint8Array?te(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n.width,n.height,0,r.RGBA,r.UNSIGNED_BYTE,n.data)}):te(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,n)}),te(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function Am(r,t,e,n,o){var a=r.createBuffer();te(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,a)});var i=16*e*n;return te(r,t,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)}),te(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,0)}),te(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),a}function Nm(r,t,e){var n=r,o=new Float32Array(e);return n.bindBuffer(n.PIXEL_PACK_BUFFER,t),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,o),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),o}function Fm(r,t,e,n,o){var a=Zo(e,n),i=a[0],s=a[1],u=new Uint8Array(e*n*4);return te(r,t,function(){return r.readPixels(0,0,i,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function Pm(r,t,e,n,o,a,i,s){var u=r,c=new Float32Array(function(l,f){var h=Vr(l,f);return h[0]*h[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function Om(r,t,e,n){var o=new Float32Array(e*n*4);return te(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,o)}),o}var Mm=function(){function r(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=W().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,lp(e,t)):this.gl=jt(e);var n="WEBGL_color_buffer_float";if(W().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=Qr(this.gl,this.debug,"OES_texture_float"),wt(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=Qr(this.gl,this.debug,"OES_texture_half_float");else if(W().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),wt(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=Qr(this.gl,this.debug,"EXT_color_buffer_half_float");else if(W().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",wt(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!wt(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=wm(this.gl,this.debug),this.indexBuffer=Cm(this.gl,this.debug),this.framebuffer=Ep(this.gl,this.debug),this.textureConfig=Bi(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return W().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;te(e,this.debug,function(){return e.finish()}),te(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),te(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),te(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),te(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),te(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),_m(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),Em(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),Rm(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),Dm(this.gl,this.debug,t,e)},r.prototype.uploadDenseMatrixToTexture=function(t,e,n,o){this.throwIfDisposed(),Tm(this.gl,this.debug,t,e,n,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),km(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Sm(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(uu(this.gl,this.debug,this.framebuffer),this.outputTexture=null),te(this.gl,this.debug,function(){return e.gl.deleteTexture(t)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return Fm(o.gl,o.debug,e,n,o.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(t,e,n,o,a,i){return Pm(this.gl,t,0,0,0,a,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return Nm(this.gl,t,e)},r.prototype.createBufferFromTexture=function(t,e,n){this.bindTextureToFrameBuffer(t);var o=Am(this.gl,this.debug,e,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},r.prototype.createFence=function(t){var e,n,o=this;if(W().getBool("WEBGL_FENCE_API_ENABLED")){var a=t,i=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),n=function(){var s=a.clientWaitSync(i,0,0);return s===a.ALREADY_SIGNALED||s===a.CONDITION_SATISFIED},e=i}else W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),n=function(){return o.isQueryAvailable(e,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return!0};return{query:e,isFencePassed:n}},r.prototype.downloadMatrixFromPackedTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return Om(o.gl,o.debug,e,n)})},r.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,n=mp(e,this.debug,t),o=xm(e,this.debug),a=yp(e,this.debug);return te(e,this.debug,function(){return e.attachShader(a,o)}),te(e,this.debug,function(){return e.attachShader(a,n)}),bp(e,this.debug,a),this.debug&&Aa(e,this.debug,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=Im(e,this.debug,this.program,this.vertexBuffer)),a},r.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&te(this.gl,this.debug,function(){return e.gl.deleteProgram(t)})},r.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&Aa(this.gl,this.debug,this.program),te(this.gl,this.debug,function(){return e.gl.useProgram(t)})},r.prototype.getUniformLocation=function(t,e,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?Sp(this.gl,this.debug,t,e):kp(this.gl,t,e)},r.prototype.getAttributeLocation=function(t,e){var n=this;return this.throwIfDisposed(),te(this.gl,this.debug,function(){return n.gl.getAttribLocation(t,e)})},r.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},r.prototype.setInputMatrixTexture=function(t,e,n){this.throwIfDisposed(),this.throwIfNoProgram(),Ip(this.gl,this.debug,this.program,t,e,n)},r.prototype.setOutputMatrixTexture=function(t,e,n){this.setOutputMatrixTextureDriver(t,n,e)},r.prototype.setOutputPackedMatrixTexture=function(t,e,n){this.throwIfDisposed();var o=Vr(e,n),a=o[0],i=o[1];this.setOutputMatrixTextureDriver(t,a,i)},r.prototype.setOutputMatrixWriteRegion=function(t,e,n,o){this.setOutputMatrixWriteRegionDriver(n,t,o,e)},r.prototype.setOutputPackedMatrixWriteRegion=function(t,e,n,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&Aa(this.gl,this.debug,this.program),Zr(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),te(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),te(this.gl,this.debug,function(){return t.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Qr(this.gl,this.debug,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),n=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,n),n}var o=this.getQueryTimerExtensionWebGL1(),a=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,a),a},r.prototype.endQuery=function(){if(W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,n=this.getQueryTimerExtensionWebGL2();e.endQuery(n.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(t){return Y(this,void 0,void 0,function(){var e=this;return J(this,function(n){switch(n.label){case 0:return[4,tu(function(){return e.disposed||e.isQueryAvailable(t,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(t,W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var n=this.gl;return n.getQueryParameter(t,n.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var n=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=n.getQueryParameter(t,n.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}return a=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint},r.prototype.pollFence=function(t){var e=this;return new Promise(function(n){e.addItemToPoll(function(){return t.isFencePassed()},function(){return n()})})},r.prototype.pollItems=function(){for(var t=function(n){for(var o=0;o<n.length&&n[o]();++o);return o-1}(this.itemsToPoll.map(function(n){return n.isDoneFn})),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},r.prototype.addItemToPoll=function(t,e){var n=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||tu(function(){return n.pollItems(),n.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),Na(this.gl,this.debug,t,this.framebuffer),this.debug&&Zr(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Na(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&Zr(this.gl)):uu(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var n=e();return this.unbindTextureToFrameBuffer(),n},r.prototype.setOutputMatrixTextureDriver=function(t,e,n){this.throwIfDisposed();var o=this.gl;Na(o,this.debug,t,this.framebuffer),this.debug&&Zr(o),this.outputTexture=t,te(o,this.debug,function(){return o.viewport(0,0,e,n)}),te(o,this.debug,function(){return o.scissor(0,0,e,n)})},r.prototype.setOutputMatrixWriteRegionDriver=function(t,e,n,o){var a=this;this.throwIfDisposed(),te(this.gl,this.debug,function(){return a.gl.scissor(t,e,n,o)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function wu(r,t){if(r.length!==t.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+t.length+" inputs");r.forEach(function(e,n){var o=e.logicalShape,a=t[n],i=a.shape;if(!Ge(o,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+i+" must match");if(!e.isUniform||!a.isUniform){var s=e.texShape,u=a.isUniform?null:a.texData.texShape;if(!Ge(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var Bm=function(r,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var n=e.filterWidth,o=e.inChannels,a=e.strideWidth,i=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,f=e.dataFormat,h=s.left,d=s.top,p=o*n,m=Ze(),v=f==="channelsLast",g=v?0:1,b=v?1:2,x="",y=0;y<=1;y++)for(var w=0;w<=1;w++)x+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+d+`;
            d0 = offsetY + `+l+" * (pos / "+p+`);

            if(d0 < `+t[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+a+". - "+h+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+p+".) / "+o+`.));

              if(d1 < `+t[b]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+v+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+x+`

        `+m.output+` = result;
      }
    `},Lm=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[];var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `},Wm=function(r,t,e,n,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=t,this.bias=e,this.alpha=n,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+n+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+n+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},Um=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `},zm=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideHeight,e=r.strideWidth,n=r.dilationHeight,o=r.effectiveFilterHeight,a=r.effectiveFilterWidth,i=o-1-r.padInfo.top,s=a-1-r.padInfo.left,u=o*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+n+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},Vm=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.dilationDepth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,f=u-1-r.padInfo.top,h=c-1-r.padInfo.left,d=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+f+", "+h+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+n+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+d+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ba=function(r,t,e,n,o,a,i){e===void 0&&(e=!1),n===void 0&&(n=!1),o===void 0&&(o=!1),a===void 0&&(a=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?r[1]:r[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=n?"rc.z, i * 2":"i * 2, rc.z",f=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],h=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";a&&(d=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,p="result = activation(result);");var m=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+d+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+f[0]+" * "+h[0]+`);
          result += (`+f[1]+" * "+h[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+m+`

        `+p+`

        setOutput(result);
      }
    `},Hm=function(){function r(t,e,n){this.variableNames=["probs"],this.outputShape=[t,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.seedLoc==null&&(e.seedLoc=n.getUniformLocation(o,"seed")),n.gl.uniform1f(e.seedLoc,t)}},r}(),Gm=function(r,t,e,n){this.variableNames=["indices"],this.outputShape=[r,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+n+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},qm=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var t=r.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=at("rc",t),n=Re(t),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",f=s-2;f<s;f++)l+=c[f]+" >= "+u[f],f<s-1&&(l+="||");return l}(t,r,e),a=function(s,u,c,l){if(s===1)return"";var f=l.slice(-2);return`
    int r = `+f[0]+`;
    int c = `+f[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,r[r.length-1],r[r.length-2],e),i=function(s,u){var c=s.length,l=function(f,h){for(var d=[],p=0;p<=1;p++)for(var m=0;m<=1;m++){for(var v=(p===0?"r":"rp1")+", "+(m===0?"c":"cp1"),g=2;g<f;g++)v=h[h.length-1-g]+","+v;d.push(v)}return d}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,e);this.userCode=`
        void main() {
          `+n+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},jm=function(r,t,e){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+r[c]+u[1]});var n=r.length,o=Re(n),a=t.map(function(u){return u[0]}).join(","),i=t.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);this.userCode=n!==1?`
      `+o+" start = "+o+"("+a+`);
      `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+a+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},Km=function(r,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(v,g){return v[0]+r[g]+v[1]});for(var n=r.length,o=Re(n),a=t.map(function(v){return v[0]}).join(","),i=t.map(function(v,g){return v[0]+r[g]}).join(","),s=at("rc",n),u=at("source",n),c=s[n-1]+" < "+this.outputShape[n-1],l=n===1?"source":"vec2("+u.slice(-2).join()+")",f=[o+" rc = outputLoc;",s[n-1]+` += 1;
       if(`+c+`) {
      `,n===1?"":`}
       rc = outputLoc;
       `+s[n-2]+` += 1;
       if(`+s[n-2]+" < "+this.outputShape[n-2]+") {",n===1?"":"  "+s[n-1]+` += 1;
         if(`+c+") {"],h=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="",p=0,m=n===1?2:4;p<m;p++)d+=`
        `+f[p]+`
        if (`+h+`) {
          result[`+p+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+p+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;d+=n===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+a+`);
      const `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+d+`
        setOutput(result);
      }
    `},La=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideHeight,a=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,f=r.padInfo.left;this.outputShape=r.outShape;var h=t==="avg",d="0.0";if(h||(d="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+a+`);
        const ivec2 pads = ivec2(`+l+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var p=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(p="avgValue / count");var m=4*Math.floor(n/4),v=n%4,g=`
      if (`+h+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+a+`);
      const ivec2 pads = ivec2(`+l+", "+f+`);
      const float initializationValue = `+d+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+d+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+i+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+m+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+m+`;
          if (`+(v===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+p+`);
      }
    `}},Wa=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,f=r.effectiveFilterHeight,h=r.effectiveFilterWidth,d=r.padInfo.front,p=r.padInfo.top,m=r.padInfo.left;this.outputShape=r.outShape;var v=t==="avg",g="0.0";if(v||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+a+", "+i+`);
        const ivec3 pads = ivec3(`+d+", "+p+", "+m+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+h+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+f+" * "+h+` +
                      wR * `+h+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var b=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(b="avgValue / count");var x=4*Math.floor(n/4),y=n%4,w=`
      if (`+v+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+d+", "+p+", "+m+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+x+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+x+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+b+`);
        }
      }
    `}},Xm=function(r,t){this.variableNames=["x"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=Math.ceil(o/e);this.outputShape=[n,a];var i="0.0",s="";t==="prod"?i="1.0":t==="min"?(i="1.0 / 1e-20",s="min"):t==="max"&&(i="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,f=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,h="vec4";t==="all"?(i="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,h="bvec4"):t==="any"&&(i="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,h="bvec4");var d="";o%e>0&&(d=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+d+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+f+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===2)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===3)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+f+`
        }
        setOutput(`+u+`);
      }
    `},$m=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var e="",n=0;n<4;n++){var o="thisRC = rc;";n%2==1&&(o+="thisRC.z += 1;"),n>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(n>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+n+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(n>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+Dn(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+Ki(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+e+`

        setOutput(result);
      }
    `},Ym=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,m=2*Math.ceil(d)+2,v=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Jm=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},Qm=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+a+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},Zm=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,m=2*Math.ceil(d)+2,v=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},eg=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e],l=n?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},tg=function(r,t){this.variableNames=["x"];var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=r,e!==1){var n=r.map(function(a,i){return function(s){return t.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),o=Re(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+n+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},ng=function(r,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=r;var n=at("rc",e),o=n[e-1]+" + 1 < "+this.outputShape[e-1],a=n[e-2]+" + 1 < "+this.outputShape[e-2],i=Re(e);function s(u){var c=r.map(function(l,f){return function(h,d){return t.indexOf(h)!==-1&&r[h]!==1?r[h]+" - "+d[h]+" - 1":""+d[h]}(f,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(n.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(n.slice())+`;
          }
          if(`+a+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            }
          }
          setOutput(result);
        }
    `},Cu=function(r,t,e,n,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=Re(o.length),u=Re(a.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",f="";n===1?f="i":n===2&&(f="i, coords[1]");var h="getUpdates("+f+")",d=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+d+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+h+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},rg=function(r,t){this.variableNames=["x","segmentIds"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=r.numSegments,i=a*Math.ceil(o/e);this.outputShape=[n,i];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var f="";o%e>0&&(f=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+f+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},og=function(r,t,e){var n,o;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",n="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<t.length;u++)s.push(""+a[u]),u<r&&i.push(""+a[u]);n=i.join(),o=s.join()}var c=Re(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+n+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},ag=function(){function r(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,n=Re(this.rank),o="uniform int start["+this.rank+"];",a=function(i){if(i===1)return"sourceLoc";if(i<=6)return Ua.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);e=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+t.map(function(i,s){return"sourceLoc."+Ua[s]+" = start["+s+"] + coords."+Ua[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+a+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),Ua=["x","y","z","w","u","v"],ig=function(){function r(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=Re(this.rank),n=at("coords",this.rank),o=at("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",i="getChannel(getSource("+o.join()+"), "+a+")",s=`
      result.x = `+i+`;
      if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+i+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map(function(l,f){return"start["+f+"]"}).join()+");":t.map(function(l,f){return o[f]+" = "+n[f]+" + start["+f+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),sg=function(r,t,e){this.variableNames=["x"],this.outputShape=e;var n=e.length,o=Re(e.length),a=Re(e.length),i="";if(n===1)i="coords * strides + begin";else{var s=0;i=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},ug=function(){function r(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(t,e,n){var o,a=_u(e,n),i=Eu(t,a,n);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),a===ht.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):a===ht.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):a===ht.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):a===ht.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):a===ht.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[i].push(o),o},r.prototype.releaseTexture=function(t,e,n,o){if(this.freeTextures!=null){var a=Eu(e,_u(n,o),o);a in this.freeTextures||(this.freeTextures[a]=[]),this.freeTextures[a].push(t),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[a],s=i.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(n){t.gpgpu.deleteMatrixTexture(n)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function _u(r,t){if(r===dt.UPLOAD)return ht.PACKED_2X2_FLOAT32;if(r===dt.RENDER||r==null)return function(e){return W().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?ht.PACKED_2X2_FLOAT32:ht.UNPACKED_FLOAT32:e?ht.PACKED_2X2_FLOAT16:ht.UNPACKED_FLOAT16}(t);if(r===dt.DOWNLOAD||r===dt.PIXELS)return ht.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function Eu(r,t,e){return r[0]+"_"+r[1]+"_"+t+"_"+e}var cg=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[n]*t[n];this.outputShape=e,this.rank=e.length;var o=Re(this.rank),a=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},lg=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];this.outputShape=e,this.rank=e.length;var o=Re(this.rank),a=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},fg=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=Re(this.rank),a=sl("rc",this.rank),i=new Array(this.rank);for(n=0;n<t.length;n++)i[t[n]]=a[n];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},Xi=1.7580993408473768,$i=1.0507009873554805,de=function(r,t){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},Dt="if (isnan(x)) return x;",hg="return x;",Ru="return abs(x);",hl=Dt+`
  return (x < 0.0) ? 0.0 : x;
`,dl=Dt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,pl="return (x >= 0.0) ? x : (exp(x) - 1.0);",dg=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+Xi+`;
  float scale = `+$i+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,Su="return -x;",ku="return ceil(x);",Iu="return floor(x);",Tu="return exp(x);",Du="return exp(x) - 1.0;",pg=Dt+`
  return sin(x);
`,vg=Dt+`
  return cos(x);
`,mg=Dt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,gg=Dt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,yg=Dt+`
  return atan(x);
`,bg=Dt+"return log(x + sqrt(x * x + 1.0));",xg=Dt+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,wg=Dt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,ro="return x;",Cg="return x;",vl=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,ml=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,gl=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,wr=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},_g=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var t=r.length,e=at("rc",t),n=Re(t),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,e),a=e.slice(-2),i=t<=1?"rc":"vec2("+a.join(",")+")";this.userCode=`
      void main() {
        `+n+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},oo={};function ao(r,t){if(t===void 0&&(t=!1),r==="linear")return t?Cg:hg;if(r==="relu")return t?vl:hl;if(r==="elu")return t?gl:pl;if(r==="relu6")return t?ml:dl;if(r==="prelu")return t?fl:ll;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var Eg=600,Rg=function(r){function t(e){var n,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!W().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var a=jt(W().getNumber("WEBGL_VERSION"));o.binaryCache=((n=W().getNumber("WEBGL_VERSION"))in oo||(oo[n]={}),oo[n]),o.gpgpu=new Mm(a),o.canvas=a.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new ug(o.gpgpu),o.numMBBeforeWarning=W().global.screen==null?1024:W().global.screen.height*W().global.screen.width*window.devicePixelRatio*Eg/1024/1024,o.texData=new Qc(o,N),o}return Tt(t,r),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,n,o){if(W().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var a={};return this.texData.set(a,{shape:n,dtype:o,values:e,usage:dt.UPLOAD}),a},t.prototype.move=function(e,n,o,a){if(W().getBool("DEBUG")&&this.checkNumericalProblems(n),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:a,values:n,usage:dt.UPLOAD})},t.prototype.readSync=function(e){var n=this.texData.get(e),o=n.values,a=n.dtype,i=n.complexTensors,s=n.slice,u=n.shape,c=n.isPacked;if(s!=null){var l=void 0;l=c?new wr(u,ro):new de(u,ro);var f=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:a}],a),h=this.readSync(f.dataId);return this.disposeData(f.dataId),h}if(o!=null)return this.convertAndCacheOnCPU(e);if(a==="string")return o;var d,p,m=this.activeTimers!=null;return m&&(d=Mt()),a==="complex64"?p=yi(i.real.dataSync(),i.imag.dataSync()):p=this.getValuesFromTexture(e),m&&(this.downloadWaitMs+=Mt()-d),this.convertAndCacheOnCPU(e,p)},t.prototype.read=function(e){return Y(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,h,d,p,m,v,g,b,x,y,w,C,I,k;return J(this,function(S){switch(S.label){case 0:if(this.pendingRead.has(e))return n=this.pendingRead.get(e),[2,new Promise(function(R){return n.push(R)})];if(o=this.texData.get(e),a=o.values,i=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return f=void 0,f=l?new wr(i,ro):new de(i,ro),h=this.runWebGLProgram(f,[{dataId:e,shape:i,dtype:u}],u),d=this.read(h.dataId),this.disposeData(h.dataId),[2,d];if(a!=null)return[2,this.convertAndCacheOnCPU(e)];if(!W().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&W().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,u!=="complex64"&&W().get("WEBGL_BUFFER_SUPPORTED")&&(m=this.decode(e),v=this.texData.get(m.dataId),p=(k=this.gpgpu).createBufferFromTexture.apply(k,[v.texture].concat(Rr(i)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:S.sent(),S.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return b=S.sent(),x=b[0],y=b[1],g=yi(x,y),[3,5];case 4:p==null?g=this.getValuesFromTexture(e):(w=ee(i),g=this.gpgpu.downloadFloat32MatrixFromBuffer(p,w)),S.label=5;case 5:return m!=null&&this.disposeData(m.dataId),C=this.convertAndCacheOnCPU(e,g),I=this.pendingRead.get(e),this.pendingRead.delete(e),I.forEach(function(R){return R(C)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,C]}})})},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var n=0;n<e.length;n++){var o=e[n];if(!dp(o))throw W().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.isPacked,u=ee(a);if(W().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),f=(n=this.gpgpu).downloadMatrixFromPackedTexture.apply(n,[l.texture].concat(Rr(a))).subarray(0,u);return this.disposeData(c.dataId),f}var h=W().getBool("WEBGL_PACK")&&s===!0,d=h?Fa(a):a,p=h?new hm(d):new fm(d),m=this.runWebGLProgram(p,[{shape:d,dtype:i,dataId:e}],"float32"),v=this.texData.get(m.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,u);return this.disposeData(m.dataId),g},t.prototype.time=function(e){return Y(this,void 0,void 0,function(){var n,o,a,i,s,u,c;return J(this,function(l){switch(l.label){case 0:return n=this.activeTimers,o=[],a=!1,this.programTimersStack==null?(this.programTimersStack=o,a=!0):this.activeTimers.push(o),this.activeTimers=o,e(),i=cr(this.activeTimers.map(function(f){return f.query})).filter(function(f){return f!=null}),s=cr(this.activeTimers.map(function(f){return f.name})).filter(function(f){return f!=null}),this.activeTimers=n,a&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=Kd(c),u.getExtraProfileInfo=function(){return c.map(function(f,h){return{name:s[h],ms:f}}).map(function(f){return f.name+": "+f.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Mt(),endMs:null}},t.prototype.endTimer=function(e){return W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=Mt(),e)},t.prototype.getQueryTime=function(e){return Y(this,void 0,void 0,function(){var n;return J(this,function(o){return W().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(n=e).endMs-n.startMs]})})},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var n=this.texData.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var n=this.texData.get(e),o=n.texture,a=n.dtype,i=n.texShape,s=n.usage,u=n.isPacked,c=n.slice,l=c&&c.origDataId||e,f=this.dataRefCount.get(l);f>1?this.dataRefCount.set(l,f-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(i,a),this.textureManager.releaseTexture(o,i,s,u)));var h=this.texData.get(e);h.texture=null,h.texShape=null,h.isPacked=!1,h.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return W().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=N.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,n){var o=this;return n===void 0&&(n=128),this.getCPUBackend()!=null&&e.every(function(a){return o.texData.get(a.dataId).texture==null&&a.size<n})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,n){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:N.keep(e.clone()),imag:N.keep(n.clone())},o},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,n,o);if(ee(o)===0)return Xe([],o,e.dtype);var a=this.texData.get(e.dataId).isPacked,i=Yc(e.shape,n,o);if(a||!i){var s=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ig(o):new ag(o),u=s.getCustomSetupFunc(n);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,n,o)},t.prototype.shallowSlice=function(e,n,o){var a=this.texData.get(e.dataId),i=this.makeOutput(o,e.dtype),s=this.texData.get(i.dataId);Object.assign(s,a),s.shape=o,s.dtype=e.dtype;var u=Jc(n,e.strides);a.slice&&(u+=a.slice.flatOffset),s.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},t.prototype.stridedSlice=function(e,n,o,a){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,n,o,a);var i=Vi(n,o,a);if(i.some(function(u){return u===0}))return Xe([],i);var s=new sg(n,a,i);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,n){var o=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ng(e.shape,n):new tg(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.concat=function(e,n){if(e[0].dtype==="complex64"){var o=e.map(function(d){return xt(d)}),a=e.map(function(d){return Lt(d)});return je(this.concat(o,n),this.concat(a,n))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,n);if(e.length===1)return e[0];if(e.length>W().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(e.length/2),s=this.concat(e.slice(0,i),n),u=this.concat(e.slice(i),n);return this.concat([s,u],n)}if(W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new Jv(e.map(function(d){return d.shape}),n);return this.compileAndRun(c,e)}var l=fr(e.map(function(d){return d.shape}),n),f=e.map(function(d){return d.as2D(-1,ee(d.shape.slice(n)))}),h=new Yv(f.map(function(d){return d.shape}));return this.compileAndRun(h,f).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Su,e.dtype);var n=new de(e.shape,Su);return this.compileAndRun(n,[e])},t.prototype.batchMatMul=function(e,n,o,a){var i=o?e.shape[2]:e.shape[1],s=a?n.shape[1]:n.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((i===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),a&&(n=n.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),f=s===1?2:1,h=s===1?n.as3D(c,1,u):n;return this.multiply(l,h).sum(f,!0)}var d=Ke(e.dtype,n.dtype),p=new Ba(e.shape,[c,i,s],o,a);return this.compileAndRun(p,[e,n],d)},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=a?n.shape[2]:n.shape[1],f=i?o.shape[1]:o.shape[2],h=n.shape[0],d=Ke(n.dtype,o.dtype),p=s!=null,m=c!=null,v=u?ao(u,!0):null,g=new Ba(n.shape,[h,l,f],a,i,p,v,m),b=[n,o];return s&&b.push(s),c&&b.push(c),this.compileAndRun(g,b,d)},t.prototype.multiply=function(e,n){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),a=this.texData.get(n.dataId),i=new pu(qv,e.shape,n.shape),s=new pu(jv,e.shape,n.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(n,a.complexTensors.real),this.makeComplexComponentTensorInfo(n,a.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),f=this.complex(c,l);return c.dispose(),l.dispose(),f}if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.multiply(e,n);if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,vu,e.dtype);var h=new Ne(vu,e.shape,n.shape);return this.compileAndRun(h,[e,n],e.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){var u=[e,n,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),W().getBool("WEBGL_PACK_NORMALIZATION")){var f=new Gv(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(f,u)}var h=new Hv(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(h,u)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){var s=W().getBool("WEBGL_PACK_NORMALIZATION")?new Um(e.shape,n,o,a,i):new Lm(e.shape,n,o,a,i);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){var c=new Wm(n.shape,a,i,s,u);return this.compileAndRun(c,[n,o,e])},t.prototype.tile=function(e,n){if(e.dtype==="string"){var o=this.readSync(e.dataId).map(function(i){return _o(i)});return al(le(e.shape,e.dtype,o),n)}var a=new cg(e.shape,n);return this.compileAndRun(a,[e])},t.prototype.pad=function(e,n,o){var a=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Km(e.shape,n,o):new jm(e.shape,n,o);return this.compileAndRun(a,[e])},t.prototype.transpose=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,n);var o=W().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new fg(e.shape,n):new lg(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,n,o){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.gather(e,n,o);var a=new ym(e.shape,n.size,o);return this.compileAndRun(a,[e,n])},t.prototype.batchToSpaceND=function(e,n,o){E(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(f,h){return f*h}),i=To(e.shape,n,a),s=Do(i.length,n.length),u=Ao(e.shape,n,a),c=jc(o,n.length),l=Kc(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){E(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(h,d){return h*d}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=To(u.shape,n,a,!1),l=Do(c.length,n.length,!1),f=Ao(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.reduce=function(e,n,o){var a=e.shape[0],i=e.shape[1],s=Pa(i),u=new Xm({windowSize:s,inSize:i,batchSize:a},n),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,n,o)},t.prototype.argReduce=function(e,n,o){o===void 0&&(o=null);var a=e.shape[0],i=e.shape[1];o!=null&&(a=o.shape[0],i=o.shape[1]);var s=Pa(i),u=new Pv({windowSize:s,inSize:i,batchSize:a},n,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,n,l)},t.prototype.argReducePacked=function(e,n,o){o===void 0&&(o=null);var a=o!=null?o.shape:e.shape,i=Pa(a[a.length-1]),s=new Uv(a,i,n,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,n,c):c},t.prototype.sum=function(e,n){ft("sum",n,e.rank);var o=Ye(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i),u=Sa(e.dtype);return this.reduce(s,"sum",u).reshape(a)},t.prototype.prod=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,n);var o=Ye(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i),u=Sa(e.dtype);return this.reduce(s,"prod",u).reshape(a)},t.prototype.unsortedSegmentSum=function(e,n,o){var a=0,i=Kt([a],e.rank),s=e;i!=null&&(s=e.transpose(i),a=Xt(1,e.rank)[0]);var u=function(d,p,m){for(var v=[],g=d.length,b=0;b<g;b++)b!==p?v.push(d[b]):v.push(m);return v}(s.shape,a,o),c=ee([s.shape[a]]),l=s.as2D(-1,c),f=Sa(e.dtype),h=this.segOpCompute(l,"unsortedSegmentSum",n,f,o).reshape(u);return i!=null&&(h=h.transpose(Li(i))),h},t.prototype.segOpCompute=function(e,n,o,a,i){var s=e.shape[0],u=e.shape[1],c=function(h,d){var p,m=!1;for(h<=$c?(p=h,m=!0):p=ci(h,Math.floor(Math.sqrt(h)));!m;)p>d||p===h?m=!0:p=ci(h,p+1);return p}(u,i),l=new rg({windowSize:c,inSize:u,batchSize:s,numSegments:i}),f=this.compileAndRun(l,[e,o],a);return f.shape[1]===i?f:(o=Io(0,i).tile([u/c]),this.segOpCompute(f,n,o,a,i))},t.prototype.argMinMaxReduce=function(e,n,o){var a=[n];if(ft("arg"+o.charAt(0).toUpperCase()+o.slice(1),a,e.rank),!W().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var i=Ye(e.shape,a),s=i[0],u=ee(i[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},t.prototype.argMin=function(e,n){return this.argMinMaxReduce(e,n,"min")},t.prototype.argMax=function(e,n){return this.argMinMaxReduce(e,n,"max")},t.prototype.cumsum=function(e,n,o,a){if(n!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+n);var i=new im(e.shape,o,a);return this.compileAndRun(i,[e])},t.prototype.equal=function(e,n){if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(equal(a, b));
`,"bool");var o=new Ne("return float(a == b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.notEqual=function(e,n){if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Ne("return float(a != b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.less=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.less(e,n);if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Ne("return float(a < b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.lessEqual=function(e,n){if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Ne("return float(a <= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greater=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.greater(e,n);if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Ne("return float(a > b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greaterEqual=function(e,n){if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Ne("return float(a >= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalNot=function(e){var n=new de(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(n,[e])},t.prototype.logicalAnd=function(e,n){if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Ne("return float(a >= 1.0 && b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalOr=function(e,n){if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Ne("return float(a >= 1.0 || b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.select=function(e,n,o){var a=new og(e.rank,n.shape,n.rank);return this.compileAndRun(a,[e,n,o],Ke(n.dtype,o.dtype))},t.prototype.where=function(e){So("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var n=e.dataSync();return ji(e.shape,n)},t.prototype.topk=function(e,n,o){return il(e.dataSync(),e.shape,e.dtype,n)},t.prototype.min=function(e,n){ft("min",n,e.rank);var o=Ye(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(a)},t.prototype.minimum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.minimum(e,n);var o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Zt(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Ne(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.mod=function(e,n){var o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Zt(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Ne(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.max=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,n);ft("max",n,e.rank);var o=Ye(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(a)},t.prototype.maximum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.maximum(e,n);var o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Zt(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Ne(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.all=function(e,n){ft("all",n,e.rank);var o=Ye(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(a)},t.prototype.any=function(e,n){ft("any",n,e.rank);var o=Ye(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(a)},t.prototype.realDivide=function(e,n){if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Ne(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"float32")},t.prototype.floorDiv=function(e,n){if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Ne(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"int32")},t.prototype.add=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,Oa);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.add(e,n);var o=Ke(e.dtype,n.dtype);if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Oa,o);var a=new Ne(Oa,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.packedUnaryOp=function(e,n,o){var a=new wr(e.shape,n);return this.compileAndRun(a,[e],o)},t.prototype.packedBinaryOp=function(e,n,o,a,i){i===void 0&&(i=!1);var s=new Zt(o,e.shape,n.shape,i);return this.compileAndRun(s,[e,n],a)},t.prototype.complexSeparableBinaryOp=function(e,n,o){var a=this,i=this.texData.get(e.dataId),s=this.texData.get(n.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(h){var d=h[0],p=h[1],m=a.makeComplexComponentTensorInfo(e,d),v=a.makeComplexComponentTensorInfo(n,p),g=new Ne(o,e.shape,n.shape);return a.compileAndRun(g,[m,v],Ke(d.dtype,p.dtype))}),c=u[0],l=u[1],f=this.complex(c,l);return c.dispose(),l.dispose(),f},t.prototype.makeComplexComponentTensorInfo=function(e,n){return{dataId:n.dataId,dtype:n.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>W().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var n=Math.floor(e.length/2),o=this.addN(e.slice(0,n)),a=this.addN(e.slice(n));return this.addN([o,a])}var i=e.map(function(c){return c.dtype}).reduce(function(c,l){return Ke(c,l)}),s=e.map(function(c){return c.shape}),u=W().getBool("WEBGL_PACK")?new Fv(e[0].shape,s):new Nv(e[0].shape,s);return this.compileAndRun(u,e,i)},t.prototype.subtract=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,Ma);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.subtract(e,n);var o=Ke(e.dtype,n.dtype);if(W().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Ma,e.dtype);var a=new Ne(Ma,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.pow=function(e,n){var o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Zt(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Ne(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,n.shape),a=Ke(e.dtype,n.dtype);return this.compileAndRun(o,[e,n],a)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ku,e.dtype);var n=new de(e.shape,ku);return this.compileAndRun(n,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Iu,e.dtype);var n=new de(e.shape,Iu);return this.compileAndRun(n,[e])},t.prototype.sign=function(e){var n=new de(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(n,[e])},t.prototype.isNaN=function(e){var n=new de(e.shape,"return float(isnan(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isInf=function(e){var n=new de(e.shape,"return float(isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isFinite=function(e){var n=new de(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.round=function(e){var n=new de(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(n,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Tu,e.dtype);var n=new de(e.shape,Tu);return this.compileAndRun(n,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Du,e.dtype);var n=new de(e.shape,Du);return this.compileAndRun(n,[e])},t.prototype.softmax=function(e,n){var o=Ve([n],e.shape),a=this.max(e,o),i=ut(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var n=new de(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(n,[e])},t.prototype.log1p=function(e){var n=new de(e.shape,"return log(1.0 + x);");return this.compileAndRun(n,[e])},t.prototype.sqrt=function(e){var n=new de(e.shape,"return sqrt(x);");return this.compileAndRun(n,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var n=new de(e.shape,"return inversesqrt(x);");return this.compileAndRun(n,[e])},t.prototype.reciprocal=function(e){var n=new de(e.shape,"return 1.0 / x;");return this.compileAndRun(n,[e])},t.prototype.relu=function(e){var n;return n=W().getBool("WEBGL_PACK")?new wr(e.shape,vl):new de(e.shape,hl),this.compileAndRun(n,[e])},t.prototype.relu6=function(e){var n;return n=W().getBool("WEBGL_PACK")?new wr(e.shape,ml):new de(e.shape,dl),this.compileAndRun(n,[e])},t.prototype.prelu=function(e,n){var o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Zt(fl,e.shape,n.shape):new Ne(ll,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.elu=function(e){if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,gl,e.dtype);var n=new de(e.shape,pl);return this.compileAndRun(n,[e])},t.prototype.eluDer=function(e,n){var o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Zt(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,n.shape):new Ne("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.selu=function(e){var n=new de(e.shape,dg);return this.compileAndRun(n,[e])},t.prototype.int=function(e){var n=new de(e.shape,"return float(int(x));");return this.compileAndRun(n,[e],"int32")},t.prototype.clip=function(e,n,o){var a,i=(a=W().getBool("WEBGL_PACK_CLIP")?new Xv(e.shape):new Kv(e.shape)).getCustomSetupFunc(n,o);return this.compileAndRun(a,[e],null,i)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(W().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Ru,e.dtype);var n=new de(e.shape,Ru);return this.compileAndRun(n,[e])},t.prototype.complexAbs=function(e){var n=this.texData.get(e.dataId),o=new $v(e.shape),a=[this.makeComplexComponentTensorInfo(e,n.complexTensors.real),this.makeComplexComponentTensorInfo(e,n.complexTensors.imag)];return this.compileAndRun(o,a)},t.prototype.sigmoid=function(e){var n=new de(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(n,[e])},t.prototype.softplus=function(e){var n=new de(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(n,[e])},t.prototype.sin=function(e){var n=new de(e.shape,pg);return this.compileAndRun(n,[e])},t.prototype.cos=function(e){var n=new de(e.shape,vg);return this.compileAndRun(n,[e])},t.prototype.tan=function(e){var n=new de(e.shape,"return tan(x);");return this.compileAndRun(n,[e])},t.prototype.asin=function(e){var n=new de(e.shape,mg);return this.compileAndRun(n,[e])},t.prototype.acos=function(e){var n=new de(e.shape,gg);return this.compileAndRun(n,[e])},t.prototype.atan=function(e){var n=new de(e.shape,yg);return this.compileAndRun(n,[e])},t.prototype.atan2=function(e,n){var o=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Zt(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Ne(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.sinh=function(e){var n=new de(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.cosh=function(e){var n=new de(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.tanh=function(e){var n=new de(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(n,[e])},t.prototype.asinh=function(e){var n=new de(e.shape,bg);return this.compileAndRun(n,[e])},t.prototype.acosh=function(e){var n=new de(e.shape,xg);return this.compileAndRun(n,[e])},t.prototype.atanh=function(e){var n=new de(e.shape,wg);return this.compileAndRun(n,[e])},t.prototype.erf=function(e){var n=new de(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(n,[e])},t.prototype.step=function(e,n){var o=new de(e.shape,function(a){return a===void 0&&(a=0),Dt+`
    return x > 0.0 ? 1.0 : float(`+a+`);
  `}(n));return this.compileAndRun(o,[e])},t.prototype.conv2dByMatMul=function(e,n,o,a,i,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,f=u[0]*u[1]*u[2],h=o.outChannels,d=o.dataFormat==="channelsLast",p=(f===1||h===1)&&l>1e3,m=u[2]%2!=0&&!!c.isPacked;if(p||!W().getBool("WEBGL_LAZILY_UNPACK")||!W().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!m){var v=d?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,v,o.inChannels]),b=this.reshape(n,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),o.outShape)}var x=d?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:e.dataId,shape:[1,x,o.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,E(to(c.shape,y.shape),function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"});var C=this.reshape(n,[1,o.inChannels,o.outChannels]),I=this.fusedBatchMatMul({a:y,b:C,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),k=this.texData.get(I.dataId);return E(k.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,k.shape=o.outShape,N.makeTensorFromDataId(I.dataId,o.outShape,I.dtype)},t.prototype.conv2dWithIm2Row=function(e,n,o,a,i,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,f=o.outWidth,h=o.outHeight,d=o.dataFormat==="channelsLast",p=u*c*l,m=h*f,v=[p,m],g=e.squeeze([0]),b=n.reshape([1,p,-1]),x=new Bm(v,g.shape,o),y=this.compileAndRun(x,[g]).reshape([1,v[0],v[1]]),w=a!=null,C=s!=null,I=i?ao(i,!0):null,k=new Ba(y.shape,[1,m,o.outChannels],!0,!1,w,I,C),S=[y,b];a&&S.push(a),C&&S.push(s);var R=this.compileAndRun(k,S);return d?R.reshape([1,h,f,o.outChannels]):R.reshape([1,o.outChannels,h,f])},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights;if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(n,o,a,i,s,u);if(W().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,o,a,i,s,u);var c=i!=null,l=u!=null,f=s?ao(s,!1):null,h=new mu(a,c,f,l),d=[n,o];return i&&d.push(i),u&&d.push(u),this.compileAndRun(h,d)},t.prototype.conv2d=function(e,n,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,n,o);if(W().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,n,o);var a=new mu(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerInput=function(e,n,o){var a=new Zv(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerFilter=function(e,n,o){var a=new Qv(o);return this.compileAndRun(a,[e,n])},t.prototype.fusedDepthwiseConv2D=function(e){var n,o=e.input,a=e.filter,i=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=W().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,f=u?ao(u,l):null,h=[o,a],d=s!=null,p=c!=null;return d&&h.push(s),p&&h.push(c),l?(n=new yu(i,d,f,p),this.compileAndRun(n,h)):(n=new gu(i,d,f,p),this.compileAndRun(n,h))},t.prototype.depthwiseConv2D=function(e,n,o){var a;return W().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(a=new yu(o),this.compileAndRun(a,[e,n])):(a=new gu(o),this.compileAndRun(a,[e,n]))},t.prototype.depthwiseConv2DDerInput=function(e,n,o){var a=new rm(o);return this.compileAndRun(a,[e,n])},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){var a=new nm(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3d=function(e,n,o){var a=new om(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerInput=function(e,n,o){var a=new tm(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerFilter=function(e,n,o){var a=new em(o);return this.compileAndRun(a,[e,n])},t.prototype.maxPool=function(e,n){var o=new La(n,"max",!1);return this.compileAndRun(o,[e])},t.prototype.avgPool=function(e,n){var o=new La(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPoolBackprop=function(e,n,o,a){var i=new La(a,"max",!0),s=this.compileAndRun(i,[n]),u=new zm(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,n,o){var a=new zv(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.cast=function(e,n){return tl(e,n,this)},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.avgPool3d=function(e,n){var o=new Wa(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,n,o){var a=new Vv(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.maxPool3d=function(e,n){var o=new Wa(n,"max",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,n,o,a){var i=new Wa(a,"max",!0),s=this.compileAndRun(i,[n]),u=new Vm(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.reshape=function(e,n){var o=this.texData.get(e.dataId);if(o.isPacked&&!to(e.shape,n)&&(o.texture===null||!to(o.shape,n))){var a=this.packedReshape(e,n);return N.makeTensorFromDataId(a.dataId,a.shape,a.dtype)}return gi(e,n)},t.prototype.resizeBilinear=function(e,n,o,a){var i=W().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Qm(e.shape,n,o,a):new Jm(e.shape,n,o,a);return this.compileAndRun(i,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,n,o){var a=new Ym(e,n,o);return this.compileAndRun(a,[e])},t.prototype.resizeNearestNeighbor=function(e,n,o,a){var i=new eg(e.shape,n,o,a);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){var a=new Zm(e,n,o);return this.compileAndRun(a,[e])},t.prototype.multinomial=function(e,n,o,a){var i=n?e:nn(e),s=i.shape[0],u=i.shape[1],c=new Hm(s,u,o),l=c.getCustomSetupFunc(a);return this.compileAndRun(c,[i],"int32",l)},t.prototype.oneHot=function(e,n,o,a){var i=new Gm(e.size,n,o,a);return this.compileAndRun(i,[e])},t.prototype.diag=function(e){var n=new lm(e.size);return this.compileAndRun(n,[e])},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return So("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Gi(e.dataSync(),n.dataSync(),o,a,i)},t.prototype.cropAndResize=function(e,n,o,a,i,s){var u=new am(e.shape,n.shape,a,i,s);return this.compileAndRun(u,[e,n,o],"float32")},t.prototype.depthToSpace=function(e,n,o){E(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});var a=e.shape[0],i=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=i*n,l=s*n,f=u/(n*n),h=new cm(o==="NHWC"?[a,c,l,f]:[a,f,c,l],n,o);return this.compileAndRun(h,[e])},t.prototype.split=function(e,n,o){return ol(e,n,o)},t.prototype.scatterND=function(e,n,o){var a=No(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,f=[l/u,u],h=e.reshape([s,i]),d=n.reshape([s,u]);if(l===0)return gi(Xe([]),o);var p=K(0),m=new Cu(s,i,h.rank,d.rank,c,f);return this.compileAndRun(m,[d,h,p]).reshape(o)},t.prototype.sparseToDense=function(e,n,o,a){var i=No(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,f=new Cu(u,s,e.rank,n.rank,c,[l,1]);return this.compileAndRun(f,[n,e,a]).reshape(o)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,n){var o=this.texData.get(e.dataId),a=new xu(vm,e.shape,n),i=new xu(mm,e.shape,n),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(a,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=Xc(e,n),s=i[0],u=i[1],c=i[2],l=i[3],f=n.reshape([u,a]),h=e.reshape([e.size/c,c]),d=new bm(a,l,[u,c]);return this.compileAndRun(d,[h,f]).reshape(s)},t.prototype.fill=function(e,n,o){if((o=o||Ur(n))==="string"){var a=Co(o,ee(e));return a.fill(n),N.makeTensor(a,e,o,this)}var i=new gm(e,n),s=i.getCustomSetupFunc(n);return this.compileAndRun(i,[],o,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,n,o){return nl(e,n,o)},t.prototype.makeTensorInfo=function(e,n){var o=this.write(null,e,n);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:n}},t.prototype.makeOutput=function(e,n){var o=this.makeTensorInfo(e,n).dataId;return N.makeTensorFromDataId(o,e,n,this)},t.prototype.unpackTensor=function(e){var n=new _g(e.shape);return this.runWebGLProgram(n,[e],e.dtype)},t.prototype.packTensor=function(e){var n=new qm(e.shape);return this.runWebGLProgram(n,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,n){var o=[Eo(e.shape)].concat(Ro(e.shape)),a={dtype:e.dtype,shape:o,dataId:e.dataId},i=[Eo(n)].concat(Ro(n)),s=new $m(i,o),u=this.runWebGLProgram(s,[a],e.dtype,null,!0);return{dataId:u.dataId,shape:n,dtype:u.dtype}},t.prototype.decode=function(e){var n,o=this.texData.get(e),a=o.isPacked,i=o.shape,s=o.dtype,u=Fa(i);return n=a?new um(u):new sm(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(n,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,n,o,a,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===Dr.DENSE){var l=Rr(e.outputShape);c.texShape=l.map(function(x){return 2*x})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),ee(u.shape)===0)return c.values=Ir(u.dtype,0),u;var f=[],h=n.map(function(x){if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(x.dataId);if(y.texture==null){if(!e.packedInputs&&ee(x.shape)<=W().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:y.values};e.packedInputs&&(y.isPacked=!0,y.shape=x.shape)}else if(!!y.isPacked!=!!e.packedInputs)x=y.isPacked?s.unpackTensor(x):s.packTensor(x),f.push(x),y=s.texData.get(x.dataId);else if(y.isPacked&&!to(y.shape,x.shape)){var w=x,C=x.shape;x.shape=y.shape,x=s.packedReshape(x,C),f.push(x),y=s.texData.get(x.dataId),w.shape=C}return s.uploadToGPU(x.dataId),{shape:x.shape,texData:y,isUniform:!1}});this.uploadToGPU(u.dataId);var d,p={shape:u.shape,texData:c,isUniform:!1},m=function(x,y,w){var C="";y.concat(w).forEach(function(S){var R=S.texData!=null&&S.texData.slice!=null&&S.texData.slice.flatOffset>0,A=S.isUniform?"uniform":S.texData.texShape;C+=S.shape+"_"+A+"_"+R});var I=x.userCode,k=x.constructor.name;return k+="_"+C+"_"+I}(e,h,p),v=this.getAndSaveBinary(m,function(){return function(x,y,w,C){var I=y.userCode,k=w.map(function(z,H){var G={logicalShape:z.shape,texShape:z.isUniform?null:z.texData.texShape,isUniform:z.isUniform,isPacked:!z.isUniform&&z.texData.isPacked,flatOffset:null};return z.texData!=null&&z.texData.slice!=null&&z.texData.slice.flatOffset>0&&(G.flatOffset=z.texData.slice.flatOffset),{name:y.variableNames[H],shapeInfo:G}}),S=k.map(function(z){return z.shapeInfo}),R={logicalShape:C.shape,texShape:C.texData.texShape,isUniform:!1,isPacked:C.texData.isPacked,flatOffset:null},A=Ov(k,R,I,y.packedInputs),D=x.createProgram(A),L=null,B=x.getUniformLocation(D,"NAN",!1);W().getNumber("WEBGL_VERSION")===1&&(L=x.getUniformLocation(D,"INFINITY",!1));for(var O={},U=0;U<y.variableNames.length;U++){var V=y.variableNames[U];O[V]=x.getUniformLocation(D,V,!1),O["offset"+V]=x.getUniformLocation(D,"offset"+V,!1)}return{program:y,source:A,webGLProgram:D,uniformLocations:O,inShapeInfos:S,outShapeInfo:R,infLoc:L,nanLoc:B}}(s.gpgpu,e,h,p)}),g=this.activeTimers!=null;if(g&&(d=this.startTimer()),function(x,y,w,C,I){wu(y.inShapeInfos,w),wu([y.outShapeInfo],[C]);var k=C.texData.texture,S=C.texData.texShape;C.texData.isPacked?x.setOutputPackedMatrixTexture(k,S[0],S[1]):x.setOutputMatrixTexture(k,S[0],S[1]),x.setProgram(y.webGLProgram),W().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&x.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&x.gl.uniform1f(y.nanLoc,NaN),w.forEach(function(R,A){var D=y.program.variableNames[A],L=y.uniformLocations[D],B=y.uniformLocations["offset"+D];if(L!=null)if(R.isUniform)if(ee(R.shape)<2)x.gl.uniform1f(L,R.uniformValues[0]);else{var O=R.uniformValues;O instanceof Float32Array||(O=new Float32Array(O)),x.gl.uniform1fv(L,O)}else R.texData.slice!=null&&B!=null&&x.gl.uniform1i(B,R.texData.slice.flatOffset),x.setInputMatrixTexture(R.texData.texture,L,A)}),I!=null&&I(x,y.webGLProgram),x.executeProgram()}(this.gpgpu,v,h,p,a),f.forEach(function(x){return s.disposeData(x.dataId)}),g&&(d=this.endTimer(d),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(d)})),!W().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var b=this.unpackTensor(u);return this.disposeData(u.dataId),b}return u},t.prototype.compileAndRun=function(e,n,o,a,i){i===void 0&&(i=!1),o=o||n[0].dtype;var s=this.runWebGLProgram(e,n,o,a,i);return N.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(W().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(n){e.gpgpu.deleteProgram(e.binaryCache[n].webGLProgram),delete e.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=$(function(){if(!W().get("WEBGL_RENDER_FLOAT32_ENABLED")){var n=W().getBool("DEBUG");W().set("DEBUG",!1);var o=e.abs(K(1e-8)).dataSync()[0];if(W().set("DEBUG",n),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var f,h=this.activeTimers!=null;h&&(f=Mt());var d=o.texShape;if(d==null&&(d=Ap(a,l),o.texShape=d),s!=null){var p=Fa(a),m=void 0,v=d[1],g=d[0],b=s instanceof Uint8Array;l?(v=(n=Vr(d[0],d[1]))[0],g=n[1],m=new pm(p,[g,v],b)):m=new dm(p,[g,v],b);var x=this.makeTensorInfo([g,v],i);this.texData.get(x.dataId).usage=b?dt.PIXELS:dt.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(x.dataId),v,g,s);var y=this.runWebGLProgram(m,[x],i,null,!0),w=this.texData.get(y.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(x.dataId),this.texData.delete(y.dataId),o.values=null,h&&(this.uploadWaitMs+=Mt()-f)}else{var C=this.acquireTexture(d,c,i,l);o.texture=C}}},t.prototype.convertAndCacheOnCPU=function(e,n){var o=this.texData.get(e),a=o.dtype;return this.releaseGPUData(e),n!=null&&(o.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(n,a)),o.values},t.prototype.acquireTexture=function(e,n,o,a){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,n,a)},t.prototype.computeBytes=function(e,n){return e[0]*e[1]*Dc(n)},t}(Zc);Bc()&&N.registerBackend("webgl",function(){return new Rg},2);var Sg=T({square_:function(r){var t=_(r,"x","square"),e=[t];return N.runKernelFunc(function(n,o){return o([t]),n.square(t)},{x:t},null,"Square",{},e,[])}}),Nr="SquaredDifference",yl=T({squaredDifference_:function(r,t){var e,n=_(r,"a","squaredDifference"),o=_(t,"b","squaredDifference");e=Ae(n,o),n=e[0],o=e[1],me(n.shape,o.shape);var a={a:n,b:o},i=[n,o];return N.runKernelFunc(function(s,u){var c=s.squaredDifference(n,o);return u([n,o]),c},a,function(s,u){var c=u[0],l=u[1],f=K(2);return{a:function(){return s.mul(c.sub(l).mul(f))},b:function(){return s.mul(l.sub(c).mul(f))}}},Nr,{},i,[])}}),kg=T({abs_:function(r){var t=_(r,"x","abs");return t.dtype==="complex64"?N.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):N.runKernelFunc(function(e,n){var o=e.abs(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}},"Abs")}}),Ig=T({acos_:function(r){var t=_(r,"x","acos");return N.runKernelFunc(function(e,n){var o=e.acos(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(K(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),Tg=T({acosh_:function(r){var t=_(r,"x","acosh");return N.runKernelFunc(function(e,n){var o=e.acosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),Dg=T({asin_:function(r){var t=_(r,"x","asin");return N.runKernelFunc(function(e,n){var o=e.asin(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(K(1).sub(o.toFloat().square()).sqrt())}}})}}),Ag=T({asinh_:function(r){var t=_(r,"x","asinh");return N.runKernelFunc(function(e,n){var o=e.asinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(K(1).add(o.toFloat().square()).sqrt())}}})}}),Ng=T({atan_:function(r){var t=_(r,"x","atan");return N.runKernelFunc(function(e,n){var o=e.atan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}})}}),Fg=T({atanh_:function(r){var t=_(r,"x","atanh");return N.runKernelFunc(function(e,n){var o=e.atanh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(K(1).sub(o.toFloat().square()))}}})}}),Pg=T({ceil_:function(r){var t=_(r,"x","ceil");return N.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),Yi=T({clipByValue_:function(r,t,e){var n=_(r,"x","clipByValue");E(t<=e,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."});var o=[n],a={min:t,max:e};return N.runKernelFunc(function(i,s){var u=i.clip(n,t,e);return s([n]),u},{x:n},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),ge(i))}}},"ClipByValue",a,o)}}),Og=T({cos_:function(r){var t=_(r,"x","cos"),e=[t];return N.runKernelFunc(function(n,o){var a=n.cos(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return a.toFloat().sin().neg().mul(n)}}},"Cos",{},e)}}),Mg=T({cosh_:function(r){var t=_(r,"x","cosh");return N.runKernelFunc(function(e,n){var o=e.cosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}})}}),Bg=T({erf_:function(r){var t=_(r,"x","erf");return E(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),N.runKernelFunc(function(e,n){var o=e.erf(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),bi=T({exp_:function(r){var t=_(r,"x","exp");return N.runKernelFunc(function(e,n){var o=e.exp(t);return n([o]),o},{x:t},function(e,n){return{x:function(){return e.mulStrict(n[0])}}},"Exp",{},[],[!0])}}),Lg=T({expm1_:function(r){var t=_(r,"x","expm1");return N.runKernelFunc(function(e,n){var o=e.expm1(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.exp())}}})}}),Wg=T({floor_:function(r){var t=_(r,"x","floor");return N.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),Ug=T({log_:function(r){var t=_(r,"x","log"),e=[t];return N.runKernelFunc(function(n,o){var a=n.log(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return n.div(a.toFloat())}}},"Log",{},e)}}),zg=T({log1p_:function(r){var t=_(r,"x","log1p");return N.runKernelFunc(function(e,n){var o=e.log1p(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.add(1))}}})}}),Vg=T({logSigmoid_:function(r){var t=_(r,"x","logSigmoid");return N.runKernelFunc(function(e,n){var o=e.softplus(t.neg()).neg();return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}})}}),Mo=T({neg_:function(r){var t=_(r,"x","neg"),e=[t];return N.runKernelFunc(function(n){return n.neg(t)},{x:t},function(n){return{x:function(){return n.neg()}}},"Neg",{},e)}}),Hg=T({reciprocal_:function(r){var t=_(r,"x","reciprocal");return N.runKernelFunc(function(e,n){var o=e.reciprocal(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.square().neg())}}})}}),Gg=T({round_:function(r){var t=_(r,"x","round");return N.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),bl=T({rsqrt_:function(r){var t=_(r,"x","rsqrt"),e=[t];return N.runKernelFunc(function(n,o){var a=n.rsqrt(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return n.div(a.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),xl=T({sigmoid_:function(r){var t=_(r,"x","sigmoid");return N.runKernelFunc(function(e,n){var o=e.sigmoid(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.mul(K(1).sub(o)))}}},"Sigmoid")}}),qg=T({sign_:function(r){var t=_(r,"x","sign");return N.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),jg=T({isNaN_:function(r){var t=_(r,"x","isNaN");return N.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),Kg=T({isInf_:function(r){var t=_(r,"x","isInf");return N.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),Xg=T({isFinite_:function(r){var t=_(r,"x","isFinite");return N.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),$g=T({sin_:function(r){var t=_(r,"x","sin"),e=[t];return N.runKernelFunc(function(n,o){var a=n.sin(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return a.toFloat().cos().mul(n)}}},"Sin",{},e)}}),Yg=T({sinh_:function(r){var t=_(r,"x","sinh");return N.runKernelFunc(function(e,n){var o=e.sinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}})}}),Jg=T({softplus_:function(r){var t=_(r,"x","softplus");return N.runKernelFunc(function(e,n){var o=e.softplus(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.sigmoid())}}})}}),Qg=T({sqrt_:function(r){var t=_(r,"x","sqrt");return N.runKernelFunc(function(e,n){var o=e.sqrt(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}})}}),Zg=T({step_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","step");return N.runKernelFunc(function(n){return n.step(e,t)},{$x:e},function(n){return{$x:function(){return ge(n)}}})}}),e0=T({tan_:function(r){var t=_(r,"x","tan");return N.runKernelFunc(function(e,n){var o=e.tan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.cos().square())}}})}}),t0=T({tanh_:function(r){var t=_(r,"x","tanh");return N.runKernelFunc(function(e,n){var o=e.tanh(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return K(1).sub(o.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function wl(r,t,e,n,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(t,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),E(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),Gr(u,c,l,s,i,a)}function Cl(r,t,e,n,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(t,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),E(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),Gr(u,c,l,s,i,a)}function _l(r,t,e,n,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(t,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),E(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),E(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),Gr(u,c,l,s,i,a)}function Gr(r,t,e,n,o,a){a==null&&(a=.001);var i,s,u,c=_(r,"x","batchNorm"),l=_(t,"mean","batchNorm"),f=_(e,"variance","batchNorm");o!=null&&(i=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(l.rank===f.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),E(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),E(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var h=[c,l,f,i];return N.runKernelFunc(function(d,p){var m=d.batchNormalization(u,io(l),io(f),a,io(i),io(s));return p([c,l,f,i]),m},{x:c,mean:l,variance:f,scale:i,offset:s},function(d,p){var m=p,v=m[0],g=m[1],b=m[2],x=m[3],y=x??K(1),w=Ue(g.shape,u.shape),C=[];if(g.rank===1){for(var I=0;I<u.shape.length-1;++I)C.push(u.shape[I]);C.push(1)}var k=v.sub(g),S=d.mul(y),R=bl(b.add(K(a))),A=R.mul(R).mul(R).mul(K(-.5));return{x:function(){return g.rank===1?d.mul(nr(R.as4D(1,1,1,g.shape[0]),C)).mul(y).reshape(v.shape):d.mul(R).mul(y).reshape(v.shape)},mean:function(){var D=R.mul(K(-1)).mul(S);return g.rank===1&&(D=D.sum(w)),D.reshape(g.shape)},variance:function(){var D=A.mul(k).mul(S);return g.rank===1&&(D=D.sum(w)),D.reshape(g.shape)},scale:function(){var D=k.mul(R),L=d.mul(D);return g.rank===1&&(L=L.sum(w)),L.reshape(g.shape)},offset:function(){var D=d;return g.rank===1&&(D=D.sum(w)),D.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:a},h).reshape(c.shape)}function io(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function na(){Lc("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var n0=T({batchNormalization2d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),na(),wl(r,t,e,a,o,n)}}),r0=T({batchNormalization3d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),na(),Cl(r,t,e,a,o,n)}}),o0=T({batchNormalization4d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),na(),_l(r,t,e,a,o,n)}}),a0=T({batchNormalization_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),na(),Gr(r,t,e,a,o,n)}}),El=T({batchNorm_:Gr}),i0=T({batchNorm2d_:wl}),s0=T({batchNorm3d_:Cl}),u0=T({batchNorm4d_:_l}),ra=T({logicalAnd_:function(r,t){var e=_(r,"a","logicalAnd","bool"),n=_(t,"b","logicalAnd","bool");return me(e.shape,n.shape),N.runKernelFunc(function(o){return o.logicalAnd(e,n)},{a:e,b:n},null,"LogicalAnd")}}),c0=T({logicalNot_:function(r){var t=_(r,"x","logicalNot","bool");return N.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),Rl=T({logicalOr_:function(r,t){var e=_(r,"a","logicalOr","bool"),n=_(t,"b","logicalOr","bool");return me(e.shape,n.shape),N.runKernelFunc(function(o){return o.logicalOr(e,n)},{$a:e,$b:n})}}),l0=T({logicalXor_:function(r,t){var e=_(r,"a","logicalXor","bool"),n=_(t,"b","logicalXor","bool");return me(e.shape,n.shape),Rl(r,t).logicalAnd(ra(r,t).logicalNot())}}),On=T({where_:function(r,t,e){var n=_(t,"a","where"),o=_(e,"b","where"),a=_(r,"condition","where","bool");return we(n.shape,o.shape,"Error in where: "),a.rank===1?E(a.shape[0]===n.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):we(a.shape,o.shape,"Error in where: "),N.runKernelFunc(function(i,s){var u=i.select(a,n,o);return s([a]),u},{$condition:a,$a:n,$b:o},function(i,s){var u=s[0];return{$condition:function(){return ge(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),Sl=function(r){return Y(this,void 0,void 0,function(){var t,e,n;return J(this,function(o){switch(o.label){case 0:return[4,(t=_(r,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),n=ji(t.shape,e),r!==t&&t.dispose(),[2,n]}})})},ve=T({add_:function(r,t){var e,n=_(r,"a","add"),o=_(t,"b","add");e=Ae(n,o),n=e[0],o=e[1];var a=me(n.shape,o.shape);return N.runKernelFunc(function(i){return i.add(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=Ue(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Ue(o.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),f0=T({addN_:function(r){E(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),E(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var t=r.map(function(o,a){return _(o,"tensors"+a,"addN")}),e=t[0];t.forEach(function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!Ge(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var n=t;return N.runKernelFunc(function(o){return o.addN(t)},n,function(o){var a={};return t.forEach(function(i,s){a[s]=function(){return o.clone()}}),a},"AddN")}}),h0=T({addStrict_:function(r,t){var e=_(r,"a","addStrict"),n=_(t,"b","addStrict");return we(e.shape,n.shape,"Error in addStrict: "),e.add(n)}}),d0=T({atan2_:function(r,t){var e,n=_(r,"a","atan2"),o=_(t,"b","atan2");e=Ae(n,o),n=e[0],o=e[1];var a=me(n.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.atan2(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=ve(u.square(),c.square()),f=i.mul(c.div(l)),h=Ue(u.shape,a);return h.length>0&&(f=f.sum(h)),f.reshape(u.shape)},$b:function(){var l=ve(u.square(),c.square()),f=Mo(i.mul(u.div(l))),h=Ue(c.shape,a);return h.length>0&&(f=f.sum(h)),f.reshape(c.shape)}}})}}),Rt=T({div_:function(r,t){var e,n=_(r,"a","div"),o=_(t,"b","div");if(e=Ae(n,o),n=e[0],o=e[1],n.dtype==="int32"&&o.dtype==="int32")return kl(n,o);var a=me(n.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.realDivide(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),f=Ue(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Ue(c.shape,a);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"Div")}}),p0=T({divNoNan_:function(r,t){var e,n=_(r,"a","div"),o=_(t,"b","div");n=(e=Ae(n,o))[0],o=e[1];var a=Rt(n,o),i=ge(a),s=o.equal(i);return On(s,i,a)}}),v0=T({divStrict_:function(r,t){var e=_(r,"a","div"),n=_(t,"b","div");return we(e.shape,n.shape,"Error in divideStrict: "),e.div(n)}}),kl=T({floorDiv_:function(r,t){var e,n=_(r,"a","floorDiv"),o=_(t,"b","floorDiv");e=Ae(n,o),n=e[0],o=e[1];var a=me(n.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.floorDiv(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),f=Ue(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Ue(c.shape,a);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"FloorDiv")}}),Ji=T({maximum_:function(r,t){var e,n=_(r,"a","maximum"),o=_(t,"b","maximum");return e=Ae(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),me(n.shape,o.shape),N.runKernelFunc(function(a,i){var s=a.maximum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.greaterEqual(u).toFloat())},b:function(){return a.mul(s.less(u).toFloat())}}},"Maximum")}}),m0=T({maximumStrict_:function(r,t){var e=_(r,"a","maximumStrict"),n=_(t,"b","maximumStrict");return we(e.shape,n.shape,"Error in maximumStrict: "),e.maximum(n)}}),Il=T({minimum_:function(r,t){var e,n=_(r,"a","minimum"),o=_(t,"b","minimum");return e=Ae(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),me(n.shape,o.shape),N.runKernelFunc(function(a,i){var s=a.minimum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.lessEqual(u).toFloat())},b:function(){return a.mul(s.greater(u).toFloat())}}},"Minimum")}}),g0=T({minimumStrict_:function(r,t){var e=_(r,"a","minimumStrict"),n=_(t,"b","minimumStrict");return we(e.shape,n.shape,"Error in minimumStrict: "),e.minimum(n)}}),y0=T({mod_:function(r,t){var e,n=_(r,"a","mod"),o=_(t,"b","mod");e=Ae(n,o),n=e[0],o=e[1];var a=me(n.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.mod(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=Ue(u.shape,a);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),f=Ue(c.shape,a);return f.length>0?l.sum(f).reshape(c.shape):l}}})}}),b0=T({modStrict_:function(r,t){var e=_(r,"a","modStrict"),n=_(t,"b","modStrict");return we(e.shape,n.shape,"Error in modStrict: "),e.mod(n)}}),tt=T({mul_:function(r,t){var e,n=_(r,"a","mul"),o=_(t,"b","mul");e=Ae(n,o),n=e[0],o=e[1];var a=me(n.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.multiply(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),f=Ue(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Ue(c.shape,a);return f.length>0?l.sum(f).reshape(c.shape):l}}},"Mul")}}),x0=T({mulStrict_:function(r,t){var e=_(r,"a","mul"),n=_(t,"b","mul");return we(e.shape,n.shape,"Error in multiplyStrict: "),e.mul(n)}}),Bo=T({pow_:function(r,t){var e,n=_(r,"base","pow"),o=_(t,"exp","pow");e=Ae(n,o),n=e[0],o=e[1];var a=me(n.shape,o.shape),i=[n,o];return N.runKernelFunc(function(s,u){var c=s.pow(n,o);return u([n,o,c]),c},{a:n,b:o},function(s,u){var c=u[0],l=u[1],f=u[2];return{a:function(){var h=l.toFloat(),d=s.mul(h.mul(c.pow(h.sub(K(1))))),p=Ue(c.shape,a);return p.length>0&&(d=d.sum(p)),d.reshape(c.shape)},b:function(){var h=c.greater(0),d=c.log().where(h,ge(c)),p=s.mul(f.mul(d)),m=Ue(l.shape,a);return m.length>0&&(p=p.sum(m)),p.reshape(l.shape)}}},"Pow",{},i,[!0])}}),w0=T({powStrict_:function(r,t){return we(r.shape,t.shape,"Error in powStrict: "),r.pow(t)}}),C0=T({squaredDifferenceStrict_:function(r,t){var e=_(r,"a","squaredDifferenceStrict"),n=_(t,"b","squaredDifferenceStrict");return we(e.shape,n.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(n)}}),ze=T({sub_:function(r,t){var e,n=_(r,"a","sub"),o=_(t,"b","sub");e=Ae(n,o),n=e[0],o=e[1];var a=me(n.shape,o.shape);return N.runKernelFunc(function(i){return i.subtract(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=Ue(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Ue(o.shape,a);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),_0=T({subStrict_:function(r,t){var e=_(r,"a","subStrict"),n=_(t,"b","subStrict");return we(e.shape,n.shape,"Error in subStrict: "),e.sub(n)}}),Tl=T({equal_:function(r,t){var e,n=_(r,"a","equal"),o=_(t,"b","equal");return e=Ae(n,o),n=e[0],o=e[1],me(n.shape,o.shape),N.runKernelFunc(function(a){return a.equal(n,o)},{$a:n,$b:o})}}),E0=T({equalStrict_:function(r,t){var e=_(r,"a","equalStrict"),n=_(t,"b","equalStrict");return we(e.shape,n.shape,"Error in equalStrict: "),e.equal(n)}}),R0=T({greater_:function(r,t){var e,n=_(r,"a","greater"),o=_(t,"b","greater");return e=Ae(n,o),n=e[0],o=e[1],me(n.shape,o.shape),N.runKernelFunc(function(a){return a.greater(n,o)},{a:n,b:o},null,"Greater")}}),Dl=T({greaterEqual_:function(r,t){var e,n=_(r,"a","greaterEqual"),o=_(t,"b","greaterEqual");return e=Ae(n,o),n=e[0],o=e[1],me(n.shape,o.shape),N.runKernelFunc(function(a,i){var s=a.greaterEqual(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return ge(s)},b:function(){return ge(u)}}},"GreaterEqual")}}),S0=T({greaterEqualStrict_:function(r,t){var e=_(r,"a","greaterEqualStrict"),n=_(t,"b","greaterEqualStrict");return we(e.shape,n.shape,"Error in greaterEqualStrict: "),e.greaterEqual(n)}}),k0=T({greaterStrict_:function(r,t){var e=_(r,"a","greaterStrict"),n=_(t,"b","greaterStrict");return we(e.shape,n.shape,"Error in greaterStrict: "),e.greater(n)}}),I0=T({less_:function(r,t){var e,n=_(r,"a","less"),o=_(t,"b","less");return e=Ae(n,o),n=e[0],o=e[1],me(n.shape,o.shape),N.runKernelFunc(function(a){return a.less(n,o)},{a:n,b:o},null,"Less")}}),T0=T({lessEqual_:function(r,t){var e,n=_(r,"a","lessEqual"),o=_(t,"b","lessEqual");return e=Ae(n,o),n=e[0],o=e[1],me(n.shape,o.shape),N.runKernelFunc(function(a,i){var s=a.lessEqual(n,o);return i([n,o]),s},{a:n,b:o},null,"LessEqual")}}),D0=T({lessEqualStrict_:function(r,t){var e=_(r,"a","lessEqualStrict"),n=_(t,"b","lessEqualStrict");return we(e.shape,n.shape,"Error in lessEqualStrict: "),e.lessEqual(n)}}),A0=T({lessStrict_:function(r,t){var e=_(r,"a","lessStrict"),n=_(t,"b","lessStrict");return we(e.shape,n.shape,"Error in lessStrict: "),e.less(n)}}),N0=T({notEqual_:function(r,t){var e,n=_(r,"a","notEqual"),o=_(t,"b","notEqual");return e=Ae(n,o),n=e[0],o=e[1],me(n.shape,o.shape),N.runKernelFunc(function(a){return a.notEqual(n,o)},{a:n,b:o},null,"NotEqual")}}),F0=T({notEqualStrict_:function(r,t){var e=_(r,"a","notEqualStrict"),n=_(t,"b","notEqualStrict");return we(e.shape,n.shape,"Error in notEqualStrict: "),e.notEqual(n)}});function Au(r,t){for(var e=[],n=r;n<t;++n)e.push(n);return e}function Nu(r){for(var t=[],e=0;e<r.length;++e)for(var n=0;n<r[e].length;++n)t.push(r[e][n]);return t}var Qi=T({gather_:function(r,t,e){e===void 0&&(e=0);var n=_(r,"x","gather"),o=_(t,"indices","gather","int32");e=Ve(e,n.shape)[0];var a=function(i,s,u){for(var c=i.shape[u],l=[],f=1,h=1,d=0;d<u;d++)l.push(i.shape[d]),f*=i.shape[d];for(d=0;d<s.rank;d++)l.push(s.shape[d]);for(d=u+1;d<i.rank;d++)l.push(i.shape[d]),h*=i.shape[d];return{batchSize:f,sliceSize:h,dimSize:c,outputShape:l}}(n,o,e);return N.runKernelFunc(function(i,s){var u=i.gather(n,o.flatten(),e);return s([o]),u},{x:n,indices:o},function(i,s){var u=s[0];return{x:function(){var c=n.shape,l=u.size,f=c.slice(0,e),h=f.length,d=c.slice(e,c.length).slice(1),p=d.length,m=Au(0,h),v=Au(h+1,h+1+p),g=Nu([f,[l],d]),b=i.reshape(g),x=u.reshape([l]),y=Nu([[h],m,v]),w=b.transpose(y),C=Al(w,x,n.shape[e]),I=Li(y);return C=C.transpose(I)},indices:function(){return u}}},"Gather",{axis:e}).reshape(a.outputShape)}}),Al=T({unsortedSegmentSum_:function(r,t,e){var n=_(r,"x","unsortedSegmentSum"),o=_(t,"segmentIds","unsortedSegmentSum","int32");return E(Fe(e),function(){return"numSegments must be of dtype int"}),N.runKernelFunc(function(a,i){var s=a.unsortedSegmentSum(n,o,e);return i([o]),s},{$x:n},function(a,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=Ji(c,ge(c)),f=Qi(u,l),h=Dl(c,K(0,"int32")),d=f.rank-h.rank,p=0;p<d;++p)h=bt(h,p+1);h=ra(h,mr(f.shape,"bool"));var m=ge(f);return On(h,f,m)}(a,s)}}})}}),P0=function(r,t,e){return Y(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,h,d,p,m;return J(this,function(v){switch(v.label){case 0:for(n=_(r,"tensor","boolMask"),o=_(t,"mask","boolMask","bool"),a=e??0,i=o.rank,s=n.shape,E(i>0,function(){return"mask cannot be scalar"}),we(s.slice(a,a+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=a;c<a+i;c++)u*=s[c];return l=s.slice(0,a).concat([u],s.slice(a+i)),f=n.reshape(l),h=o.reshape([-1]),[4,Sl(h)];case 1:return d=v.sent(),p=d.squeeze([1]),m=Qi(f,p,a),r!==n&&n.dispose(),t!==o&&o.dispose(),p.dispose(),f.dispose(),h.dispose(),d.dispose(),[2,m]}})})};function Nl(r,t,e,n,o,a,i){a===void 0&&(a="NHWC"),E(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var s=r,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,r[0],r[1],r[2]]),E(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),E(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),E(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=a==="NHWC"?s[3]:s[1],f=a==="NHWC"?u.shape[3]:u.shape[1];E(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),E(f===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+f+") must match output depth for filter "+e.shape[3]+"."}),i!=null&&E(Fe(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var h=Hi(a),d=Wn(s,e.shape,n,1,o,i,!1,h),p=N.runKernelFunc(function(m,v){var g=m.conv2dDerInput(u,e,d);return v([e,u]),g},{dy4D:u,filter:e},function(m,v){var g=v[0],b=v[1];return{dy4D:function(){return Et(m,g,n,o,a,1,i)},filter:function(){return Zi(m,b,g.shape,n,o,a,i)}}});return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function za(r){var t=function(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a}(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function Fl(r,t,e,n,o){E(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var a=r,i=t,s=!1;t.rank===4&&(s=!0,i=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),a=[1,r[0],r[1],r[2],r[3]]);var u=a[4],c=i.shape[4];E(a.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),E(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),E(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),E(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),E(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=Po(a,e.shape,n,1,o),f=N.runKernelFunc(function(h){return h.conv3dDerInput(i,e,l)},{dy5D:i});return s?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}var O0=T({conv1d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NWC"),a===void 0&&(a=1);var s=_(r,"x","conv1d"),u=_(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),E(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),E(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&E(Fe(n),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."}),E(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),E(ct(e,a),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+a+"'"}),E(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var f=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),h=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),d=Et(h,f,[1,e],n,"NHWC",[1,a],i);return l?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),Et=T({conv2d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=_(r,"x","conv2d"),u=_(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&E(Fe(n),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var f=o==="NHWC"?c.shape[3]:c.shape[1];E(f===u.shape[2],function(){return"Error in conv2d: depth of input ("+f+") must match input depth for filter "+u.shape[2]+"."}),E(ct(e,a),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"});var h=Hi(o),d=Wn(c.shape,u.shape,e,a,n,i,!1,h),p=[u,c],m=N.runKernelFunc(function(v,g){var b=v.conv2d(c,u,d);return g([u,c]),b},{x:c,filter:u},function(v,g){var b=g,x=b[0],y=b[1];return E(hr(a),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return Pl(y.shape,v,x,e,n,o)},filter:function(){return Zi(y,v,x.shape,e,n,o)}}},"Conv2D",d,p);return l?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),M0=T({conv3d_:function(r,t,e,n,o,a){o===void 0&&(o="NDHWC"),a===void 0&&(a=[1,1,1]);var i=_(r,"x","conv3d"),s=_(t,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),E(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),E(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),E(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),E(function(h,d){return za(h)||za(d)}(e,a),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),E(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=Po(u.shape,s.shape,e,a,n),f=N.runKernelFunc(function(h,d){var p=h.conv3d(u,s,l);return d([u,s]),p},{x:u,$filter:s},function(h,d){E(za(a),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var p=d[0],m=d[1];return{x:function(){return Fl(p.shape,h,m,e,n)},$filter:function(){return function(v,g,b,x,y){var w=v;v.rank===4&&(w=v.as5D(1,v.shape[0],v.shape[1],v.shape[2],v.shape[3]));var C=g;C.rank===4&&(C=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),E(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),E(C.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+C.shape+"."}),E(b.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+b+"."}),E(w.shape[4]===b[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+b[3]+"."}),E(C.shape[4]===b[4],function(){return"Error in conv3dDerFilter: depth of dy ("+C.shape[4]+") must match output depth for filter ("+b[4]+")."});var I=Po(w.shape,b,x,1,y);return N.runKernelFunc(function(k){return k.conv3dDerFilter(w,C,I)},{x5D:w,dy5D:C})}(p,h,m.shape,e,n)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Zi=T({conv2dDerFilter_:function(r,t,e,n,o,a,i){a===void 0&&(a="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),E(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),E(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),E(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=a==="NHWC"?s.shape[3]:s.shape[1],l=a==="NHWC"?u.shape[3]:u.shape[1];E(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),E(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),i!=null&&E(Fe(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var f=Hi(a),h=Wn(s.shape,e,n,1,o,i,!1,f);return N.runKernelFunc(function(d){return d.conv2dDerFilter(s,u,h)},{x4D:s,dy4D:u})}}),Pl=T({conv2dDerInput_:Nl}),oa=T({depthwiseConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]);var s=_(r,"x","depthwiseConv2d"),u=_(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),a==null&&(a=[1,1]),E(ct(e,a),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),i!=null&&E(Fe(n),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var f=Wn(c.shape,u.shape,e,a,n,i,!0),h=[c,u],d=N.runKernelFunc(function(p,m){var v=p.depthwiseConv2D(c,u,f);return m([c,u]),v},{x:c,filter:u},function(p,m){E(hr(a),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var v=m[0],g=m[1];return{x:function(){return Ol(v.shape,p,g,f)},filter:function(){return Ml(v,p,g.shape,f)}}},"DepthwiseConv2dNative",f,h);return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}}),Ol=T({depthwiseConv2dDerInput_:function(r,t,e,n){var o=t,a=!1;t.rank===3&&(a=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=N.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,e,n)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),Ml=T({depthwiseConv2dDerFilter_:function(r,t,e,n){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t;return a.rank===3&&(a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),N.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(o,a,n)},{x4D:o,dy4D:a})}}),es=T({separableConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC");var s=_(r,"x","separableConv2d"),u=_(t,"depthwiseFilter","separableConv2d"),c=_(e,"pointwiseFilter","separableConv2d"),l=s,f=!1;if(s.rank===3&&(f=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),E(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),E(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var h=u.shape[2],d=u.shape[3];E(c.shape[2]===h*d,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+h*d+", but got "+c.shape[2]+"."});var p=oa(l,u,n,o,i,a),m=Et(p,c,1,"valid",i);return f?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),B0=T({conv2dTranspose_:function(r,t,e,n,o,a){return Nl(e,_(r,"x","conv2dTranspose"),_(t,"filter","conv2dTranspose"),n,o,"NHWC",a)}}),L0=T({conv3dTranspose_:function(r,t,e,n,o){return Fl(e,_(r,"x","conv3dTranspose"),_(t,"filter","conv3dTranspose"),n,o)}}),aa=T({matMul_:function(r,t,e,n){var o;e===void 0&&(e=!1),n===void 0&&(n=!1);var a=_(r,"a","matMul"),i=_(t,"b","matMul");o=Ae(a,i),a=o[0],i=o[1];var s=e?a.shape[a.rank-2]:a.shape[a.rank-1],u=n?i.shape[i.rank-1]:i.shape[i.rank-2],c=e?a.shape[a.rank-1]:a.shape[a.rank-2],l=n?i.shape[i.rank-2]:i.shape[i.rank-1],f=a.shape.slice(0,-2),h=i.shape.slice(0,-2),d=ee(f),p=ee(h);E(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),E(Ge(f,h),function(){return"Error in matMul: outer dimensions ("+f+") and ("+h+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),E(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+e+" and transposeB="+n+" must match."});var m=a.shape.slice(0,-2).concat([c,l]),v=e?a.as3D(d,s,c):a.as3D(d,c,s),g=n?i.as3D(p,l,u):i.as3D(p,u,l),b={transposeA:e,transposeB:n};return N.runKernelFunc(function(x,y){var w=x.batchMatMul(v,g,e,n);return y([v,g]),w},{a:v,b:g},function(x,y){var w=y,C=w[0],I=w[1];return e||n?!e&&n?{a:function(){return x.matMul(I,!1,!1)},b:function(){return x.matMul(C,!0,!1)}}:e&&!n?{a:function(){return I.matMul(x,!1,!0)},b:function(){return C.matMul(x,!1,!1)}}:{a:function(){return I.matMul(x,!0,!0)},b:function(){return x.matMul(C,!0,!0)}}:{a:function(){return x.matMul(I,!1,!0)},b:function(){return C.matMul(x,!0,!1)}}},"BatchMatMul",b).reshape(m)}}),W0=T({dot_:function(r,t){var e=_(r,"t1","dot"),n=_(t,"t2","dot");E(!(e.rank!==1&&e.rank!==2||n.rank!==1&&n.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+n.rank+"."});var o=e.rank===1?e.size:e.shape[1],a=n.rank===1?n.size:n.shape[0];return E(o===a,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),e.rank===1&&n.rank===1?e.as2D(1,-1).matMul(n.as2D(-1,1)).asScalar():e.rank===1&&n.rank===2?e.as2D(1,-1).matMul(n.as2D(n.shape[0],n.shape[1])).as1D():e.rank===2&&n.rank===1?e.matMul(n.as2D(-1,1)).as1D():e.matMul(n.as2D(n.shape[0],n.shape[1]))}}),U0=T({outerProduct_:function(r,t){var e=_(r,"v1","outerProduct"),n=_(t,"v2","outerProduct");return E(e.rank===1&&n.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+n.rank+"."}),e.as2D(-1,1).matMul(n.as2D(1,-1))}}),qr=T({reverse_:function(r,t){var e=_(r,"x","reverse");if(e.rank===0)return e.clone();var n=Ve(t,e.shape);return N.runKernelFunc(function(o){return o.reverse(e,n)},{$x:e},function(o){return{$x:function(){return o.reverse(n)}}}).reshapeAs(e)}}),z0=T({reverse1d_:function(r){var t=_(r,"x","reverse");return E(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),qr(t,0)}}),V0=T({reverse2d_:function(r,t){var e=_(r,"x","reverse");return E(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),qr(e,t)}}),H0=T({reverse3d_:function(r,t){var e=_(r,"x","reverse");return E(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),qr(e,t)}}),G0=T({reverse4d_:function(r,t){var e=_(r,"x","reverse");return E(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),qr(e,t)}});function Bl(r,t,e,n,o,a){var i=_(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),n==null&&(n=[1,1]),E(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),E(ct(e,n),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"}),a!=null&&E(Fe(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=Ar(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Ge(c.inShape,c.outShape))return i.clone();var l=[s],f=N.runKernelFunc(function(h,d){var p=h.maxPool(s,c);return d([s,p]),p},{x:s},function(h,d){var p=d[0],m=d[1];return{x:function(){return function(v,g,b,x,y,w,C,I){var k=_(v,"dy","maxPoolBackprop"),S=_(g,"input","maxPoolBackprop"),R=_(b,"output","maxPoolBackprop");E(S.rank===k.rank,function(){return"Rank of input ("+S.rank+") does not match rank of dy ("+k.rank+")"}),w==null&&(w=[1,1]),E(ct(y,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),E(k.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+k.rank+"."}),E(S.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+S.rank+"."}),I!=null&&E(Fe(C),function(){return"Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+I+" but got pad "+C+"."});var A=Ar(S.shape,x,y,w,C,I);return N.runKernelFunc(function(D){return D.maxPoolBackprop(k,S,R,A)},{$dy:k,$input:S})}(h,p,m,t,e,n,o)}}},"MaxPool",c,l);return u?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}function Ll(r,t,e,n,o,a){var i=_(r,"x","avgPool","float32");n==null&&(n=[1,1]),E(ct(e,n),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),a!=null&&E(Fe(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=Ar(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Ge(c.inShape,c.outShape))return i.clone();var l=N.runKernelFunc(function(f){return f.avgPool(s,c)},{x:s},function(f){return{x:function(){return function(h,d,p,m,v,g){var b=_(h,"dy","avgPoolBackprop"),x=_(d,"input","avgPoolBackprop");E(x.rank===b.rank,function(){return"Rank of input ("+x.rank+") does not match rank of dy ("+b.rank+")"}),v==null&&(v=[1,1]),E(ct(m,v),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+v+"'"});var y=x,w=b,C=!1;x.rank===3&&(C=!0,y=x.as4D(1,x.shape[0],x.shape[1],x.shape[2]),w=b.as4D(1,b.shape[0],b.shape[1],b.shape[2])),E(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),E(y.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."});var I=Ar(y.shape,p,m,v,g),k=N.runKernelFunc(function(S){return S.avgPoolBackprop(w,y,I)},{dy4D:w,input4D:y});return C?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}(f,s,t,e,n,o)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var He=T({maxPool_:function(r,t,e,n,o){return Bl(r,t,e,1,n,o)}}),jr=T({avgPool_:function(r,t,e,n,o){return Ll(r,t,e,1,n,o)}}),q0=T({pool_:function(r,t,e,n,o,a){o==null&&(o=[1,1]),a==null&&(a=1),n===0&&(n="valid");var i=_(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(ct(a,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var c,l=Ar(s.shape,t,a,o,n),f=[l.dilationHeight,l.dilationWidth];c=n==="same"?function(y,w){var C=y.map(function(S,R){return S+(S-1)*(w[R]-1)}).map(function(S){return S-1}),I=C.map(function(S){return Math.floor(S/2)}),k=C.map(function(S,R){return S-I[R]});return C.map(function(S,R){return[I[R],k[R]]})}([l.filterHeight,l.filterWidth],f):[[0,0],[0,0]];var h=f[0]===1&&f[1]===1,d=function(y,w,C){var I=C.map(function(B){return B[0]}),k=C.map(function(B){return B[1]}),S=y.concat(I,k),R=w.map(function(B,O){return(B-S[O]%B)%B}),A=k.map(function(B,O){return B+R[O]}),D=w.map(function(B,O){return[I[O],A[O]]}),L=w.map(function(B,O){return[0,R[O]]});return[D,L]}([l.inHeight,l.inWidth],f,c),p=d[0],m=d[1],v=h?n:"valid",g=h?s:Gc(s,f,p),b=(e==="avg"?function(){return Ll(g,t,a,1,v)}:function(){return Bl(g,t,a,1,v)})(),x=h?b:zc(b,f,m);return u?x.as3D(x.shape[1],x.shape[2],x.shape[3]):x}}),j0=T({maxPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=_(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(ct(e,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&E(Fe(n),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=Fo(u.shape,t,e,i,n,o,a),f=N.runKernelFunc(function(h,d){var p=h.maxPool3d(u,l);return d([u,p]),p},{x:u},function(h,d){var p=d[0],m=d[1];return{x:function(){return function(v,g,b,x,y,w,C,I){var k=_(v,"dy","maxPool3dBackprop"),S=_(g,"input","maxPool3dBackprop"),R=_(b,"output","maxPool3dBackprop"),A=k,D=S,L=R,B=!1;S.rank===4&&(B=!0,A=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3]),D=S.as5D(1,S.shape[0],S.shape[1],S.shape[2],S.shape[3]),L=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3])),E(A.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+A.rank+"."}),E(D.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+D.rank+"."}),E(L.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+L.rank+"."}),w==null&&(w=[1,1,1]),E(ct(y,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),I!=null&&E(Fe(C),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+I+" but got pad "+C+"."});var O=Fo(D.shape,x,y,w,C,I),U=N.runKernelFunc(function(V){return V.maxPool3dBackprop(A,D,L,O)},{dy5D:A,input5D:D});return B?U.as4D(U.shape[1],U.shape[2],U.shape[3],U.shape[4]):U}(h,p,m,t,e,i,n,o)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),K0=T({avgPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=_(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(ct(e,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&E(Fe(n),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=Fo(u.shape,t,e,i,n,o,a),f=N.runKernelFunc(function(h){return h.avgPool3d(u,l)},{x:u},function(h){return{x:function(){return function(d,p,m,v,g,b,x){var y=_(d,"dy","avgPool3dBackprop"),w=_(p,"input","avgPool3dBackprop"),C=y,I=w,k=!1;w.rank===4&&(k=!0,C=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),I=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),E(C.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+C.rank+"."}),E(I.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+I.rank+"."}),g==null&&(g=[1,1,1]),E(ct(v,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+g+"'"}),x!=null&&E(Fe(b),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+x+" but got pad "+b+"."});var S=Fo(I.shape,m,v,g,b,x),R=N.runKernelFunc(function(A){return A.avgPool3dBackprop(C,I,S)},{dy5D:C,input5D:I});return k?R.as4D(R.shape[1],R.shape[2],R.shape[3],R.shape[4]):R}(h,u,t,e,i,n,o)}}});return f=f.cast(u.dtype),c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Ht=T({slice_:function(r,t,e){var n,o,a=_(r,"x","slice");if(a.rank===0)throw new Error("Slicing scalar is not possible");(n=typeof t=="number"?[t].concat(new Array(a.rank-1).fill(0)):t.length<a.rank?t.concat(new Array(a.rank-t.length).fill(0)):t.slice()).forEach(function(u){E(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=e==null?new Array(a.rank).fill(-1):typeof e=="number"?[e].concat(new Array(a.rank-1).fill(-1)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(E(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),a.shape[c]-n[c])}),wv(a,n,o);var i=a.shape,s={begin:n,size:o};return N.runKernelFunc(function(u){return u.slice(a,n,o)},{x:a},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([n[l],i[l]-n[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),X0=T({slice1d_:function(r,t,e){var n=_(r,"x","slice1d");return E(n.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+n.rank+" tensor"}),Ht(n,[t],[e])}}),$0=T({slice2d_:function(r,t,e){var n=_(r,"x","slice2d");return E(n.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+n.rank+" tensor"}),Ht(n,t,e)}}),Wl=T({slice3d_:function(r,t,e){var n=_(r,"x","slice3d");return E(n.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+n.rank+" tensor"}),Ht(n,t,e)}}),Y0=T({slice4d_:function(r,t,e){var n=_(r,"x","slice4d");return E(n.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+n.rank+" tensor"}),Ht(n,t,e)}});function Ul(r,t,e,n,o){return t.rank<e.rank&&(t=t.reshape(ut(t.shape,n))),r.rank<e.rank&&(r=r.reshape(ut(r.shape,n))),{x:function(){var a=r.mul(e.equal(t).cast(r.dtype));return o==null?a:a.transpose(o)}}}var J0=T({all_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","all","bool"),o=Ve(t,n.shape),a=o,i=Kt(a,n.rank);i!=null&&(n=n.transpose(i),a=Xt(a.length,n.rank));var s=N.runKernelFunc(function(c){return c.all(n,a)},{$x:n});if(e){var u=ut(s.shape,o);return s.reshape(u)}return s}}),Q0=T({any_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","any","bool"),o=Ve(t,n.shape),a=o,i=Kt(a,n.rank);i!=null&&(n=n.transpose(i),a=Xt(a.length,n.rank));var s=N.runKernelFunc(function(c){return c.any(n,a)},{$x:n});if(e){var u=ut(s.shape,o);return s.reshape(u)}return s}}),Z0=T({argMax_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","argMax");t==null&&(t=0);var n=Ve(t,e.shape),o=Kt(n,e.rank);o!=null&&(e=e.transpose(o),n=Xt(n.length,e.rank));var a={axis:n[0]},i=[e];return N.runKernelFunc(function(s,u){var c=s.argMax(e,n[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return ge(c)}}},"ArgMax",a,i)}}),ey=T({argMin_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","argMin");t==null&&(t=0);var n=Ve(t,e.shape),o=Kt(n,e.rank);return o!=null&&(e=e.transpose(o),n=Xt(n.length,e.rank)),N.runKernelFunc(function(a,i){var s=a.argMin(e,n[0]);return i([e]),s},{$x:e},function(a,i){var s=i[0];return{$x:function(){return ge(s)}}})}}),ty=T({logSumExp_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","logSumExp"),o=Ve(t,n.shape),a=n.max(o,!0),i=n.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(e){var u=ut(s.shape,o);return s.reshape(u)}return s}}),ia=T({max_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","max"),o=n,a=Ve(t,n.shape),i=a,s=Kt(i,n.rank);s!=null&&(n=n.transpose(s),i=Xt(i.length,n.rank));var u=[n],c=N.runKernelFunc(function(f,h){var d=f.max(n,i);return h([o,d]),d},{x:n},function(f,h){return Ul(f,h[1],h[0],a,s)},"Max",{axes:i},u,[!0]);if(e){var l=ut(c.shape,a);c=c.reshape(l)}return c}}),ny=T({mean_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","mean"),o=Ve(t,n.shape),a=ee(Ye(n.shape,o)[1]);return ta(function(i){var s=K(a);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=i.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(mr(i.shape,"float32")).div(a)}}})(n)}}),ry=T({min_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","min"),o=n,a=Ve(t,n.shape),i=a,s=Kt(i,n.rank);s!=null&&(n=n.transpose(s),i=Xt(i.length,n.rank));var u=[n],c=N.runKernelFunc(function(f,h){var d=f.min(n,i);return h([o,d]),d},{x:n},function(f,h){return Ul(f,h[1],h[0],a,s)},"Min",{axes:i},u,[!0]);if(e){var l=ut(c.shape,a);c=c.reshape(l)}return c}}),oy=T({moments_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=Ve(t,(r=_(r,"x","moments")).shape),o=r.mean(n,e),a=o.shape;e||(a=ut(o.shape,n));var i=r.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(n,e)}}}),zl=T({sum_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","sum");n.dtype==="bool"&&(n=n.toInt());var o=Ve(t,n.shape);return ta(function(a){var i=Kt(o,a.rank),s=o,u=a;i!=null&&(u=a.transpose(i),s=Xt(s.length,a.rank));var c=function(d){var p=a.shape.slice();return o.forEach(function(m){p[m]=1}),d.reshape(p).mul(mr(a.shape,"float32"))},l={axes:s},f=N.runKernelFunc(function(d){return d.sum(u,s)},{x:u},function(d){return{x:function(){return c(d)}}},"Sum",l);if(e){var h=ut(f.shape,o);f=f.reshape(h)}return{value:f,gradFunc:c}})(n)}}),ay=T({prod_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","prod");n.dtype==="bool"&&(n=n.toInt());var o=Ve(t,n.shape),a=Kt(o,n.rank),i=o,s=n;a!=null&&(s=n.transpose(a),i=Xt(i.length,n.rank));var u=N.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(e){var c=ut(u.shape,o);u=u.reshape(c)}return u}}),Vl=T({elu_:function(r){var t=_(r,"x","elu");return N.runKernelFunc(function(e,n){var o=e.elu(t);return n([o]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return N.runKernelFunc(function(a){return a.eluDer(e,o)},{dy:e,y:o})}}})}}),iy=T({leakyRelu_:function(r,t){t===void 0&&(t=.2);var e=_(r,"x","leakyRelu");return Ji(K(t).mul(e),e)}}),Hl=T({prelu_:function(r,t){var e=_(r,"x","prelu"),n=_(t,"alpha","prelu");return N.runKernelFunc(function(o,a){var i=o.prelu(e,n);return a([e,n]),i},{x:e,alpha:n},function(o,a){var i=a[0],s=a[1],u=i.greater(0);return{x:function(){return On(u,o,o.mul(s))},alpha:function(){var c=On(u,ge(o),o.mul(i)),l=Ue(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),De=T({relu_:function(r){var t=_(r,"x","relu");return t.dtype==="bool"?t.toInt():N.runKernelFunc(function(e,n){var o=e.relu(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}},"Relu")}}),Gl=T({relu6_:function(r){var t=_(r,"x","relu6");return t.dtype==="bool"?t.toInt():N.runKernelFunc(function(e,n){var o=e.relu6(t);return n([t]),o},{x:t},function(e,n){var o=n[0],a=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(a.toFloat())}}},"Relu6")}}),sy=T({selu_:function(r){var t=_(r,"x","selu");return N.runKernelFunc(function(e,n){var o=e.selu(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){var a=o.greater(K(0)),i=K(Xi),s=K($i),u=e.mul(s),c=e.mul(i).mul(o.toFloat().exp());return On(a,u,c)}}})}}),yn=T({transpose_:function(r,t){var e=_(r,"x","transpose");if(t==null&&(t=e.shape.map(function(o,a){return a}).reverse()),E(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."}),t.forEach(function(o){E(o>=0&&o<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t})}),e.rank<=1)return e.clone();var n={perm:t};return N.runKernelFunc(function(o){return o.transpose(e,t)},{x:e},function(o){var a=Li(t);return{x:function(){return o.transpose(a)}}},"Transpose",n)}}),uy=T({localResponseNormalization_:function(r,t,e,n,o){t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5);var a=_(r,"x","localResponseNormalization");E(a.rank===4||a.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+"."}),E(Fe(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var i=a,s=!1;a.rank===3&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=N.runKernelFunc(function(c,l){var f=c.localResponseNormalization4D(i,t,e,n,o);return l([i,f]),f},{x4D:i},function(c,l){var f=l[0],h=l[1];return{x4D:function(){return N.runKernelFunc(function(d){return d.LRNGrad(c,f,h,t,e,n,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),ql=T({norm_:function(r,t,e,n){t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(K(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=_(r,"x","norm"),t,e),a=o.shape;if(n){var i=Ve(e,r.shape);a=ut(o.shape,i)}return o.reshape(a)}}),cy=T({basicLSTMCell_:function(r,t,e,n,o,a){var i=_(r,"forgetBias","basicLSTMCell"),s=_(t,"lstmKernel","basicLSTMCell"),u=_(e,"lstmBias","basicLSTMCell"),c=_(n,"data","basicLSTMCell"),l=_(o,"c","basicLSTMCell"),f=_(a,"h","basicLSTMCell"),h=c.concat(f,1).matMul(s).add(u),d=h.shape[0],p=h.shape[1]/4,m=[d,p],v=h.slice([0,0],m),g=h.slice([0,p],m),b=h.slice([0,2*p],m),x=h.slice([0,3*p],m),y=v.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(b).sigmoid())),w=y.tanh().mulStrict(x.sigmoid());return[y,w]}}),ly=T({multiRNNCell_:function(r,t,e,n){for(var o=_(t,"data","multiRNNCell"),a=ko(e,"c","multiRNNCell"),i=ko(n,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var f=[],h=[];for(c=0;c<u.length;c+=2)f.push(u[c]),h.push(u[c+1]);return[f,h]}}),fy=T({movingAverage_:function(r,t,e,n,o){o===void 0&&(o=!0);var a=_(r,"v","movingAverage"),i=_(t,"x","movingAverage"),s=_(e,"decay","movingAverage");up(a,i),E(Ge(a.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=K(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){E(n!=null,function(){return"When using zeroDebias: true, step is required."});var f=_(n,"step","movingAverage");l=l.div(u.sub(Bo(s,f)))}return a.add(l)}}),hy=T({stridedSlice_:function(r,t,e,n,o,a,i,s,u){if(o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),n==null&&(n=new Array(t.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=_(r,"x","stridedSlice"),l=fu(s),f=c.shape.slice();l.forEach(function(v){t[v]=0,e[v]=1,f.splice(v,0,1)}),c=c.reshape(f);for(var h=0;h<c.rank;h++)t[h]=Cv(o,t,n,c.shape,h),e[h]=_v(a,e,n,c.shape,h),n[h]=n[h]||1;var d=fu(u);d.forEach(function(v){e[v]=t[v]+1,n[v]=1});var p=Vi(t,e,n),m=p.filter(function(v,g){return d.indexOf(g)===-1});return n.every(function(v){return v===1})?Ht(c,t,p).reshape(m):N.runKernelFunc(function(v){return v.stridedSlice(c,t,e,n)},{$x:c}).reshape(m)}}),dy=T({topk_:function(r,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var n=_(r,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=n.shape[n.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var a=N.runKernelFunc(function(i){return i.topk(n,t,e)},{$x:n});return{values:a[0],indices:a[1]}}}),py=T({scatterND_:function(r,t,e){var n=_(r,"indices","scatterND","int32"),o=_(t,"updates","scatterND");return xv(o,n,e),N.runKernelFunc(function(a){return a.scatterND(n,o,e)},{indices:n,updates:o},null,"ScatterNd",{shape:e})}}),ts=T({fft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return N.runKernelFunc(function(o){return o.fft(n)},{input:r}).reshape(r.shape)}}),Lo=T({ifft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return N.runKernelFunc(function(o){return o.ifft(n)},{input:r}).reshape(r.shape)}}),ns=T({rfft_:function(r,t){E(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var e,n=r.shape[r.shape.length-1],o=r.size/n;if(t!=null&&t<n){var a=r.shape.map(function(g){return 0}),i=r.shape.map(function(g){return g});i[r.shape.length-1]=t,e=r.slice(a,i),n=t}else if(t!=null&&t>n){var s=r.shape.map(function(g){return g});s[r.shape.length-1]=t-n,e=r.concat(Se(s),r.shape.length-1),n=t}else e=r;var u=e.zerosLike(),c=je(e,u).as2D(o,n),l=ts(c),f=Math.floor(n/2)+1,h=xt(l),d=Lt(l),p=h.split([f,n-f],h.shape.length-1),m=d.split([f,n-f],d.shape.length-1),v=e.shape.slice();return v[e.shape.length-1]=f,je(p[0],m[0]).reshape(v)}}),jl=T({irfft_:function(r){var t=r.shape[r.shape.length-1],e=r.size/t;if(t<=2){var n=r.as2D(e,t),o=Lo(n);return xt(o)}var a=[e,2*(t-1)],i=xt(r).as2D(e,t),s=Lt(r).as2D(e,t),u=i.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(K(-1)),l=i.concat(u,1),f=s.concat(c,1);return n=je(l,f).as2D(a[0],a[1]),o=Lo(n),xt(o)}}),vy=Object.freeze({fft:ts,ifft:Lo,rfft:ns,irfft:jl}),my=T({sparseToDense_:function(r,t,e,n){n===void 0&&(n=0);var o=_(r,"sparseIndices","sparseToDense","int32"),a=_(t,"sparseValues","sparseToDense"),i=_(n,"defaultValue","sparseToDense",a.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var f=s.rank>0?s.shape[0]:1,h=s.rank>1?s.shape[1]:1;if(c.length!==h)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+h+".");var d=u.size;if(u.rank!==0&&(u.rank!==1||d!==f))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+f+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,e,i),N.runKernelFunc(function(s){return s.sparseToDense(o,a,e,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}}),gy=T({gatherND_:function(r,t){var e=_(t,"indices","gatherND","int32"),n=_(r,"x","gatherND");return N.runKernelFunc(function(o){return o.gatherND(n,e)},{x:n,indices:e},null,"GatherNd")}}),yy=T({diag_:function(r){var t=_(r,"x","diag").flatten(),e=r.shape.concat(r.shape);return N.runKernelFunc(function(n){return n.diag(t)},{$x:t}).reshape(e)}}),by=T({dropout_:function(r,t,e,n){var o=_(r,"x","dropout");if(E(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),E(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return r instanceof Te?o.clone():o;var a=function(u,c){if(c==null)return u.shape.slice();if(Ge(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],f=0;f<u.shape.length;f++)c[f]==null&&u.shape[f]!=null?l.push(u.shape[f]):l.push(c[f]);return l}return c}(o,e),i=1-t,s=Hc(a,0,1,"float32",n).add(i).floor().div(i);return o.mul(s)}});function Kl(r,t,e){for(var n=1-r%2,o=new Float32Array(r),a=0;a<r;++a){var i=2*Math.PI*a/(r+n-1);o[a]=t-e*Math.cos(i)}return Pe(o,"float32")}var rs=T({hannWindow_:function(r){return Kl(r,.5,.5)}}),Xl=T({hammingWindow_:function(r){return Kl(r,.54,.46)}}),os=T({frame_:function(r,t,e,n,o){n===void 0&&(n=!1),o===void 0&&(o=0);for(var a=0,i=[];a+t<=r.size;)i.push(Ht(r,a,t)),a+=e;if(n)for(;a<r.size;){var s=a+t-r.size,u=Le([Ht(r,a,t-s),Vt([s],o)]);i.push(u),a+=e}return i.length===0?vn([],[0,t]):Le(i).as2D(i.length,t)}}),$l=T({stft_:function(r,t,e,n,o){var a;o===void 0&&(o=rs),n==null&&(a=t,n=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=os(r,t,e),s=tt(i,o(t)),u=[],c=0;c<i.shape[0];c++)u.push(ns(s.slice([c,0],[1,t]),n));return Le(u)}}),xy=Object.freeze({hannWindow:rs,hammingWindow:Xl,frame:os,stft:$l}),et,wy=function(r,t,e){return e===void 0&&(e=1),Y(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,h,d,p,m,v;return J(this,function(g){switch(g.label){case 0:return n=_(r,"predictions","inTopK"),o=_(t,"targets","inTopK"),E(n.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank}),E(n.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+o.rank}),we(n.shape.slice(0,n.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=n.shape[n.shape.length-1],E(e>0&&e<=a,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+a+"), but got "+e}),[4,n.data()];case 1:return i=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[i.length/a,a],l=u[1],f=Ir("bool",c=u[0]),h=0;h<c;h++){for(d=h*l,p=i.subarray(d,d+l),m=[],v=0;v<p.length;v++)m.push({value:p[v],index:v});for(m.sort(function(b,x){return x.value-b.value}),f[h]=0,v=0;v<e;v++)if(m[v].index===s[h]){f[h]=1;break}}return r!==n&&n.dispose(),t!==o&&o.dispose(),[2,Xe(f,o.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(et||(et={}));var Cy=T({absoluteDifference_:function(r,t,e,n){n===void 0&&(n=et.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","absoluteDifference"),a=_(t,"predictions","absoluteDifference"),i=null;e!=null&&(i=_(e,"weights","absoluteDifference")),we(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return rn(s,i,n)}}),rn=T({computeWeightedLoss_:function(r,t,e){e===void 0&&(e=et.SUM_BY_NONZERO_WEIGHTS);var n=_(r,"losses","computeWeightedLoss"),o=null;t!=null&&(o=_(t,"weights","computeWeightedLoss"));var a=o==null?n:n.mul(o);if(e===et.NONE)return a;if(e===et.SUM)return a.sum();if(e===et.MEAN){if(o==null)return a.mean();var i=n.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(K(i)):s}if(e===et.SUM_BY_NONZERO_WEIGHTS){if(o==null)return a.sum().div(K(n.size));var u=o.mul(mr(n.shape)).notEqual(K(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+e)}}),_y=T({cosineDistance_:function(r,t,e,n,o){o===void 0&&(o=et.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","cosineDistance"),i=_(t,"predictions","cosineDistance"),s=null;n!=null&&(s=_(n,"weights","cosineDistance")),we(a.shape,i.shape,"Error in cosineDistance: ");var u=K(1).sub(a.mul(i).sum(e,!0));return rn(u,s,o)}}),Ey=T({hingeLoss_:function(r,t,e,n){n===void 0&&(n=et.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","hingeLoss"),a=_(t,"predictions","hingeLoss"),i=null;e!=null&&(i=_(e,"weights","hingeLoss")),we(o.shape,a.shape,"Error in hingeLoss: ");var s=K(1);o=K(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return rn(u,i,n)}}),Ry=T({huberLoss_:function(r,t,e,n,o){n===void 0&&(n=1),o===void 0&&(o=et.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","huberLoss"),i=_(t,"predictions","huberLoss"),s=null;e!=null&&(s=_(e,"weights","huberLoss")),we(a.shape,i.shape,"Error in huberLoss: ");var u=K(n),c=i.sub(a).abs(),l=Il(c,u),f=c.sub(l),h=K(.5).mul(l.square()).add(u.mul(f));return rn(h,s,o)}}),Sy=T({logLoss_:function(r,t,e,n,o){n===void 0&&(n=1e-7),o===void 0&&(o=et.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","logLoss"),i=_(t,"predictions","logLoss"),s=null;e!=null&&(s=_(e,"weights","logLoss")),we(a.shape,i.shape,"Error in logLoss: ");var u=K(1),c=K(n),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return rn(l,s,o)}}),ky=T({meanSquaredError_:function(r,t,e,n){n===void 0&&(n=et.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","meanSquaredError"),a=_(t,"predictions","meanSquaredError"),i=null;e!=null&&(i=_(e,"weights","meanSquaredError")),we(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return rn(s,i,n)}}),Iy=T({sigmoidCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=et.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"multiClassLabels","sigmoidCrossEntropy"),i=_(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=_(e,"weights","sigmoidCrossEntropy")),we(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),n>0){var u=K(n),c=K(1),l=K(.5);a=a.mul(c.sub(u)).add(l.mul(u))}var f=function(h,d){var p=_(h,"labels","sigmoidCrossEntropyWithLogits"),m=_(d,"logits","sigmoidCrossEntropyWithLogits");we(p.shape,m.shape,"Error in sigmoidCrossEntropyWithLogits: ");var v=m.relu(),g=m.mul(p),b=m.abs().neg().exp().log1p();return v.sub(g).add(b)}(a,i);return rn(f,s,o)}}),Ty=T({softmaxCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=et.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"onehotLabels","softmaxCrossEntropy"),i=_(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=_(e,"weights","softmaxCrossEntropy")),we(a.shape,i.shape,"Error in softmaxCrossEntropy: "),n>0){var u=K(n),c=K(1),l=K(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l))}var f=function(h,d,p){if(p===void 0&&(p=-1),p===-1&&(p=d.rank-1),p!==d.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+d.rank+" and dim was "+p);return ta(function(m,v,g){var b=v.logSumExp([p],!0),x=v.toFloat().sub(b);return g([m,x]),{value:x.mul(m).neg().sum([p]),gradFunc:function(y,w){var C=w[0],I=w[1],k=ut(y.shape,[p]);return[y.reshape(k).mul(C.toFloat().sub(I.exp())),y.reshape(k).mul(I.exp().sub(C.toFloat()))]}}})(h,d)}(a,i);return rn(f,s,o)}}),Dy=Object.freeze({get Reduction(){return et},absoluteDifference:Cy,computeWeightedLoss:rn,cosineDistance:_y,hingeLoss:Ey,huberLoss:Ry,logLoss:Sy,meanSquaredError:ky,sigmoidCrossEntropy:Iy,softmaxCrossEntropy:Ty});function Fu(r,t){return t===void 0&&(t=!1),N.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var e=r.shape[0],n=r.shape[1],o=Vc(e),a=r.clone(),i=vn([[1]],[1,1]),s=i.clone(),u=e>=n?n:e,c=function(f){var h,d=a,p=s,m=o;h=N.tidy(function(){var v=a.slice([f,f],[e-f,1]),g=v.norm(),b=a.slice([f,f],[1,1]),x=vn([[-1]]).where(b.greater(0),vn([[1]])),y=b.sub(x.mul(g)),w=v.div(y);s=w.shape[0]===1?i.clone():i.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var C=x.matMul(y).div(g).neg(),I=a.slice([f,0],[e-f,n]),k=C.mul(s);if(f===0)a=I.sub(k.matMul(s.transpose().matMul(I)));else{var S=I.sub(k.matMul(s.transpose().matMul(I)));a=a.slice([0,0],[f,n]).concat(S,0)}var R=o.slice([0,f],[e,o.shape[1]-f]);if(f===0)o=R.sub(R.matMul(s).matMul(k.transpose()));else{var A=R.sub(R.matMul(s).matMul(k.transpose()));o=o.slice([0,0],[e,f]).concat(A,1)}return[s,a,o]}),s=h[0],a=h[1],o=h[2],st([d,p,m])},l=0;l<u;++l)c(l);return!t&&e>n&&(o=o.slice([0,0],[e,n]),a=a.slice([0,0],[n,n])),[o,a]})}var Ay=T({bandPart_:function(r,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var n=_(r,"a","bandPart");if(n.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+n.rank+".");var o=n.shape,a=n.shape.slice(-2),i=a[0],s=a[1];if(!(t<=i))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+i+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=i),e<0&&(e=s);var u=Io(0,i,1,"int32").reshape([-1,1]),c=Io(0,s,1,"int32"),l=ze(u,c),f=ra(l.lessEqual(K(+t,"int32")),l.greaterEqual(K(-e,"int32"))),h=Se([i,s],n.dtype);return mt(We(n.reshape([-1,i,s])).map(function(d){return On(f,d,h)})).reshape(o)}}),Ny=T({gramSchmidt_:function(r){var t;if(Array.isArray(r)){t=!1,E(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=r[0].shape[0],n=function(u){E(r[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+e+")"})},o=1;o<r.length;++o)n(o)}else t=!0,r=Ui(r,r.shape[0],0).map(function(u){return qc(u,[0])});E(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var a=[],i=r,s=function(u){a.push(N.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var f=zl(a[l].mulStrict(c)).mul(a[l]);c=c.sub(f)}return c.div(ql(c,"euclidean"))}))};for(o=0;o<r.length;++o)s(o);return t?mt(a,0):a}}),Fy=T({qr_:function(r,t){if(t===void 0&&(t=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return Fu(r,t);var e=r.shape.slice(0,r.shape.length-2).reduce(function(i,s){return i*s}),n=We(r.reshape([e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],a=[];return n.forEach(function(i){var s=Fu(i,t),u=s[0],c=s[1];o.push(u),a.push(c)}),[mt(o,0).reshape(r.shape),mt(a,0).reshape(r.shape)]}}),Py=Object.freeze({bandPart:Ay,gramSchmidt:Ny,qr:Fy});function sa(r,t,e,n,o,a){n==null&&(n=.5),o==null&&(o=Number.NEGATIVE_INFINITY),a==null&&(a=0);var i=r.shape[0];return e=Math.min(e,i),E(0<=n&&n<=1,function(){return"iouThreshold must be in [0, 1], but was '"+n+"'"}),E(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),E(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),E(t.rank===1,function(){return"scores must be a 1D tensor"}),E(t.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+t.shape[0]}),E(0<=a&&a<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"}),{maxOutputSize:e,iouThreshold:n,scoreThreshold:o,softNmsSigma:a}}var Oy=T({resizeBilinear_:function(r,t,e){e===void 0&&(e=!1);var n=_(r,"images","resizeBilinear");E(n.rank===3||n.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+n.rank+"."}),E(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=N.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,i,s,e)},{x:o},function(c,l){return{x:function(){return N.runKernelFunc(function(f){return f.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),My=T({resizeNearestNeighbor_:function(r,t,e){e===void 0&&(e=!1);var n=_(r,"images","resizeNearestNeighbor");E(n.rank===3||n.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+n.rank+"."}),E(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),E(n.dtype==="float32"||n.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=N.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,i,s,e)},{batchImages:o},function(c,l){return{batchImages:function(){return N.runKernelFunc(function(f){return f.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),By=T({nonMaxSuppression_:function(r,t,e,n,o){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var a=_(r,"boxes","nonMaxSuppression"),i=_(t,"scores","nonMaxSuppression"),s=sa(a,i,e,n,o);e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:n,scoreThreshold:o};return N.runKernelFunc(function(c){return c.nonMaxSuppression(a,i,e,n,o)},{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),Ly=function(r,t,e,n,o){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),Y(this,void 0,void 0,function(){var a,i,s,u,c,l,f;return J(this,function(h){switch(h.label){case 0:return a=_(r,"boxes","nonMaxSuppressionAsync"),i=_(t,"scores","nonMaxSuppressionAsync"),s=sa(a,i,e,n,o),e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([a.data(),i.data()])];case 1:return u=h.sent(),c=u[0],l=u[1],f=Gi(c,l,e,n,o),a!==r&&a.dispose(),i!==t&&i.dispose(),[2,f]}})})},Wy=T({nonMaxSuppressionWithScore_:function(r,t,e,n,o,a){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0);var i=_(r,"boxes","nonMaxSuppression"),s=_(t,"scores","nonMaxSuppression"),u=sa(i,s,e,n,o,a),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:n=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=N.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),Uy=function(r,t,e,n,o,a){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0),Y(this,void 0,void 0,function(){var i,s,u,c,l,f,h;return J(this,function(d){switch(d.label){case 0:return i=_(r,"boxes","nonMaxSuppressionAsync"),s=_(t,"scores","nonMaxSuppressionAsync"),u=sa(i,s,e,n,o,a),e=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=d.sent(),l=c[0],f=c[1],h=qi(l,f,e,n,o,a),i!==r&&i.dispose(),s!==t&&s.dispose(),[2,h]}})})},zy=T({cropAndResize_:function(r,t,e,n,o,a){var i=_(r,"image","cropAndResize"),s=_(t,"boxes","cropAndResize","float32"),u=_(e,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return E(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),E(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),E(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),E(n.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+n.length+"."}),E(n[0]>=1&&n[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+n}),E(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),N.runKernelFunc(function(l,f){return l.cropAndResize(i,s,u,n,o,a)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:n})}}),as=Object.freeze({resizeBilinear:Oy,resizeNearestNeighbor:My,nonMaxSuppression:By,nonMaxSuppressionAsync:Ly,nonMaxSuppressionWithScore:Wy,nonMaxSuppressionWithScoreAsync:Uy,cropAndResize:zy}),is=function(r,t){return!(r>0)||t==="linear"},ss=function(r,t,e){if(e==null||e==="linear")return r;if(e==="relu")return r.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},us=function(r,t){var e=t,n=Ue(r.shape,t.shape);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},cs=function(r,t,e){if(t==="linear")return r;if(t==="relu")return De(r);if(t==="elu")return Vl(r);if(t==="relu6")return Gl(r);if(t==="prelu")return Hl(r,e);throw new Error("Unknown fused activation "+t+".")},Vy=T({fusedMatMul_:function(r){var t,e=r.a,n=r.b,o=r.transposeA,a=o!==void 0&&o,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,f=r.preluActivationWeights;if(is(N.state.gradientDepth,l)===!1){var h=aa(e,n,a,s);return u!=null&&(h=ve(h,u)),cs(h,l,f)}var d=_(e,"a","fused matMul"),p=_(n,"b","fused matMul");t=Ae(d,p),d=t[0],p=t[1];var m=a?d.shape[d.rank-2]:d.shape[d.rank-1],v=s?p.shape[p.rank-1]:p.shape[p.rank-2],g=a?d.shape[d.rank-1]:d.shape[d.rank-2],b=s?p.shape[p.rank-2]:p.shape[p.rank-1],x=d.shape.slice(0,-2),y=p.shape.slice(0,-2),w=ee(x),C=ee(y);E(d.rank>=2&&p.rank>=2&&d.rank===p.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+d.rank+" and "+p.rank+"."}),E(Ge(x,y),function(){return"Error in fused matMul: outer dimensions ("+x+") and ("+y+") of Tensors with shapes "+d.shape+" and "+p.shape+" must match."}),E(m===v,function(){return"Error in fused matMul: inner shapes ("+m+") and ("+v+") of Tensors with shapes "+d.shape+" and "+p.shape+" and transposeA="+a+" and transposeB="+s+" must match."});var I,k,S=d.shape.slice(0,-2).concat([g,b]),R=a?d.as3D(w,m,g):d.as3D(w,g,m),A=s?p.as3D(C,b,v):p.as3D(C,v,b);u!=null&&me(S,(I=Ae(I=_(u,"bias","fused matMul"),d)[0]).shape),f!=null&&(k=_(f,"prelu weights","fused matMul"));var D={a:R,b:A};u!=null&&(D.bias=I),f!=null&&(D.preluActivationWeights=k);var L=[R,A];return N.runKernelFunc(function(B,O){var U=B.fusedBatchMatMul({a:R,b:A,transposeA:a,transposeB:s,bias:I,activation:l,preluActivationWeights:k});return O([R,A,U]),U},D,function(B,O){var U=O[0],V=O[1],z=O[2],H=ss(B,z,l),G={};return u!=null&&(G={bias:function(){return us(I,H)}}),Object.assign(a||s?!a&&s?{a:function(){return H.matMul(V,!1,!1)},b:function(){return H.matMul(U,!0,!1)}}:a&&!s?{a:function(){return V.matMul(H,!1,!0)},b:function(){return U.matMul(H,!1,!1)}}:{a:function(){return V.matMul(H,!0,!0)},b:function(){return H.matMul(U,!0,!0)}}:{a:function(){return H.matMul(V,!1,!0)},b:function(){return U.matMul(H,!0,!1)}},G)},"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},L,[!0]).reshape(S)}}),Hy=T({fusedConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,f=r.activation,h=f===void 0?"linear":f,d=r.preluActivationWeights;if(h=h||"linear",is(N.state.gradientDepth,h)===!1){var p=Et(t,e,n,o,i,u,c);return l!=null&&(p=ve(p,l)),cs(p,h,d)}var m=_(t,"x","conv2d"),v=_(e,"filter","conv2d"),g=m,b=!1;m.rank===3&&(b=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),E(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),E(v.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+v.rank+"."}),c!=null&&E(Fe(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),E(g.shape[3]===v.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+v.shape[2]+"."}),E(ct(n,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),E(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var x,y,w=Wn(g.shape,v.shape,n,u,o,c);l!=null&&(x=Ae(x=_(l,"bias","fused conv2d"),m)[0],me(w.outShape,x.shape)),d!=null&&(y=_(d,"prelu weights","fused conv2d"));var C={x:g,filter:v};l!=null&&(C.bias=x),d!=null&&(C.preluActivationWeights=y);var I=[v,g],k=N.runKernelFunc(function(S,R){var A=S.fusedConv2d({input:g,filter:v,convInfo:w,bias:x,activation:h,preluActivationWeights:y});return R([v,g,A]),A},C,function(S,R){var A=R,D=A[0],L=A[1],B=A[2],O=ss(S,B,h);E(hr(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var U={};return l!=null&&(U={bias:function(){return us(x,O)}}),Object.assign({x:function(){return Pl(L.shape,O,D,n,o)},filter:function(){return Zi(L,O,D.shape,n,o)}},U)},"FusedConv2D",{convInfo:w,activation:h},I,[!0]);return b?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),Gy=T({fusedDepthwiseConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,f=r.activation,h=f===void 0?"linear":f,d=r.preluActivationWeights;if(is(N.state.gradientDepth,h)===!1){var p=oa(t,e,n,o,i,u,c);return l!=null&&(p=ve(p,l)),cs(p,h,d)}var m=_(t,"x","depthwiseConv2d"),v=_(e,"filter","depthwiseConv2d"),g=m,b=!1;m.rank===3&&(b=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),E(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),E(v.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+v.rank+"."}),E(g.shape[3]===v.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+v.shape[2]+"."}),u==null&&(u=[1,1]),E(ct(n,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),c!=null&&E(Fe(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var x,y,w=Wn(g.shape,v.shape,n,u,o,c,!0);l!=null&&(x=Ae(x=_(l,"bias","fused conv2d"),m)[0],me(w.outShape,x.shape)),d!=null&&(y=_(d,"prelu weights","fused depthwiseConv2d"));var C={x:g,filter:v};l!=null&&(C.bias=x),d!=null&&(C.preluActivationWeights=y);var I=[v,g],k=N.runKernelFunc(function(S,R){var A=S.fusedDepthwiseConv2D({input:g,filter:v,convInfo:w,bias:x,activation:h,preluActivationWeights:y});return R([v,g,A]),A},C,function(S,R){E(hr(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var A=R[0],D=R[1],L=R[2],B=ss(S,L,h),O={};return l!=null&&(O={bias:function(){return us(x,B)}}),Object.assign({x:function(){return Ol(D.shape,B,A,w)},filter:function(){return Ml(D,B,A.shape,w)}},O)},"FusedDepthwiseConv2D",{convInfo:w,activation:h},I,[!0]);return b?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),qy=Object.freeze({matMul:Vy,conv2d:Hy,depthwiseConv2d:Gy}),jy=Object.freeze({image:as,linalg:Py,losses:Dy,spectral:vy,fused:qy,signal:xy,square:Sg,squaredDifference:yl,conv1d:O0,conv2d:Et,conv3d:M0,depthwiseConv2d:oa,separableConv2d:es,conv2dTranspose:B0,conv3dTranspose:L0,op:T,batchNormalization2d:n0,batchNormalization3d:r0,batchNormalization4d:o0,batchNormalization:a0,batchNorm:El,batchNorm2d:i0,batchNorm3d:s0,batchNorm4d:u0,booleanMaskAsync:P0,complex:je,real:xt,imag:Lt,concat:Le,concat1d:qp,concat2d:jp,concat3d:Kp,concat4d:Xp,split:Ui,matMul:aa,dot:W0,outerProduct:U0,reverse:qr,reverse1d:z0,reverse2d:V0,reverse3d:H0,reverse4d:G0,maxPool:He,avgPool:jr,pool:q0,maxPool3d:j0,avgPool3d:K0,slice:Ht,slice1d:X0,slice2d:$0,slice3d:Wl,slice4d:Y0,abs:kg,acos:Ig,acosh:Tg,asin:Dg,asinh:Ag,atan:Ng,atanh:Fg,ceil:Pg,clipByValue:Yi,cos:Og,cosh:Mg,erf:Bg,exp:bi,expm1:Lg,floor:Wg,log:Ug,log1p:zg,logSigmoid:Vg,neg:Mo,reciprocal:Hg,round:Gg,rsqrt:bl,sigmoid:xl,sign:qg,isNaN:jg,isInf:Kg,isFinite:Xg,sin:$g,sinh:Yg,softplus:Jg,sqrt:Qg,step:Zg,tan:e0,tanh:t0,all:J0,any:Q0,argMax:Z0,argMin:ey,logSumExp:ty,max:ia,mean:ny,min:ry,moments:oy,sum:zl,prod:ay,equal:Tl,equalStrict:E0,greater:R0,greaterEqual:Dl,greaterEqualStrict:S0,greaterStrict:k0,less:I0,lessEqual:T0,lessEqualStrict:D0,lessStrict:A0,notEqual:N0,notEqualStrict:F0,add:ve,addN:f0,addStrict:h0,atan2:d0,div:Rt,divNoNan:p0,divStrict:v0,floorDiv:kl,maximum:Ji,maximumStrict:m0,minimum:Il,minimumStrict:g0,mod:y0,modStrict:b0,mul:tt,mulStrict:x0,pow:Bo,powStrict:w0,squaredDifferenceStrict:C0,sub:ze,subStrict:_0,elu:Vl,leakyRelu:iy,prelu:Hl,relu:De,relu6:Gl,selu:sy,logicalAnd:ra,logicalNot:c0,logicalOr:Rl,logicalXor:l0,where:On,whereAsync:Sl,buffer:le,print:rv,batchToSpaceND:zc,broadcastTo:ov,cast:av,clone:iv,cumsum:sv,depthToSpace:uv,expandDims:bt,eye:Vc,multinomial:cv,oneHot:vi,pad:Ln,pad1d:lv,pad2d:fv,pad3d:hv,pad4d:dv,rand:pv,randomNormal:vv,randomGamma:mv,randomUniform:Hc,reshape:St,spaceToBatchND:Gc,squeeze:qc,stack:mt,tile:nr,truncatedNormal:gv,unstack:We,setdiff1dAsync:yv,fill:Vt,linspace:Gp,ones:mr,range:Io,scalar:K,tensor:Xe,tensor1d:Pe,tensor2d:vn,tensor3d:Wi,tensor4d:ot,tensor5d:zp,tensor6d:Vp,variable:Hp,zeros:Se,onesLike:Uc,zerosLike:ge,transpose:yn,softmax:nn,logSoftmax:Rv,localResponseNormalization:uy,norm:ql,gather:Qi,unsortedSegmentSum:Al,basicLSTMCell:cy,multiRNNCell:ly,movingAverage:fy,stridedSlice:hy,topk:dy,scatterND:py,fft:ts,ifft:Lo,rfft:ns,irfft:jl,sparseToDense:my,gatherND:gy,diag:yy,dropout:by,hannWindow:rs,hammingWindow:Xl,frame:os,stft:$l,inTopKAsync:wy});function q(r,t){Array.isArray(r)||(r=[r]),r.forEach(function(e){e!=null&&E(e.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function Va(r,t,e,n){if(e==="linear")return r.linear(t);if(e==="relu")return r.relu(t);if(e==="elu")return r.elu(t);if(e==="relu6")return r.relu6(t);if(e==="prelu")return r.prelu(t,n);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var Ky=function(r){function t(){var e=r.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new Qc(e,N),e}return Tt(t,r),t.prototype.write=function(e,n,o){this.firstUse&&(this.firstUse=!1,W().get("IS_NODE")&&So(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var a={};return this.data.set(a,{values:e,dtype:o}),a},t.prototype.move=function(e,n,o,a){this.data.set(e,{values:n,dtype:a})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return Y(this,void 0,void 0,function(){return J(this,function(n){return[2,this.readSync(e)]})})},t.prototype.readSync=function(e){var n=this.data.get(e),o=n.dtype,a=n.complexTensors;return o==="complex64"?yi(this.readSync(a.real.dataId),this.readSync(a.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var n=this.readSync(e.dataId),o=n;if(e.dtype==="string")try{o=n.map(function(a){return _o(a)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return le(e.shape,e.dtype,o)},t.prototype.makeOutput=function(e,n,o){var a=this.write(e,n,o);return N.makeTensorFromDataId(a,n,o,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var n=this.data.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return Y(this,void 0,void 0,function(){var n;return J(this,function(o){return n=Mt(),e(),[2,{kernelMs:Mt()-n}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,n){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:N.keep(e.clone()),imag:N.keep(n.clone())},o},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(q(e,"slice"),Yc(e.shape,n,o)){var a=Jc(n,e.strides),i=ee(o);return Xe(this.readSync(e.dataId).subarray(a,a+i),o,e.dtype)}for(var s=le(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(f,h){return f+n[h]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,n,o,a){q(e,"stridedSlice");var i=Vi(n,o,a);if(i.some(function(d){return d===0}))return Xe([],i);for(var s=le(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),f=new Array(l.length),h=0;h<f.length;h++)f[h]=l[h]*a[h]+n[h];s.set.apply(s,[u.get.apply(u,f)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var n=this.readSync(e.dataId),o=le([e.size,e.size],e.dtype),a=o.values,i=0;i<n.length;i++)a[i*e.size+i]=n[i];return o.toTensor()},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.reverse=function(e,n){q(e,"reverse");for(var o=le(e.shape,e.dtype),a=this.bufferSync(e),i=function(u){var c=o.indexToLoc(u),l=c.slice();n.forEach(function(f){return l[f]=e.shape[f]-1-l[f]}),o.set.apply(o,[a.get.apply(a,l)].concat(c))},s=0;s<o.size;s++)i(s);return o.toTensor()},t.prototype.concat=function(e,n){var o=this;if(e[0].dtype==="complex64"){var a=e.map(function(d){return xt(d)}),i=e.map(function(d){return Lt(d)});return je(this.concat(a,n),this.concat(i,n))}var s=e.map(function(d){var p=ee(d.shape.slice(n));return d.as2D(-1,p)}),u=fr(s.map(function(d){return d.shape}),1),c=le(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(d){c.set(o.readSync(d.dataId),l),l+=d.size})}else{var f=0;s.forEach(function(d){for(var p=o.readSync(d.dataId),m=0,v=0;v<d.shape[0];++v)for(var g=v*u[1]+f,b=0;b<d.shape[1];++b)c[g+b]=p[m++];f+=d.shape[1]})}var h=fr(e.map(function(d){return d.shape}),n);return Xe(c,h,e[0].dtype)},t.prototype.neg=function(e){return q(e,"neg"),this.multiply(K(-1),e)},t.prototype.add=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o+i,imag:a+s}}):this.broadcastedBinaryOp(e,n,Ke(e.dtype,n.dtype),function(o,a){return o+a})},t.prototype.addN=function(e){var n=this;q(e,"addN");for(var o=e.map(function(l){return n.readSync(l.dataId)}),a=le(e[0].shape,e[0].dtype),i=a.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<i.length;c++)i[c]+=u[c];return a.toTensor()},t.prototype.softmax=function(e,n){var o=Ve([n],e.shape),a=this.max(e,o),i=ut(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.subtract=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o-i,imag:a-s}}):this.broadcastedBinaryOp(e,n,Ke(e.dtype,n.dtype),function(o,a){return o-a})},t.prototype.pow=function(e,n){return q([e,n],"pow"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.pow(o,a)})},t.prototype.batchMatMul=function(e,n,o,a){q([e,n],"matMul");for(var i=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=a?n.shape[1]:n.shape[2],c=e.shape[0],l=this.readSync(e.dataId),f=this.readSync(n.dataId),h=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],d=h[0],p=h[1],m=h[2],v=a?[1,n.strides[1],n.strides[0]]:[n.strides[1],1,n.strides[0]],g=v[0],b=v[1],x=v[2],y=s*u,w=le([c,s,u],e.dtype),C=w.values,I=this.blockSize,k=0;k<c;k++)for(var S=0;S<s;S+=I)for(var R=0;R<u;R+=I)for(var A=0;A<i;A+=I)for(var D=Math.min(S+I,s),L=Math.min(R+I,u),B=Math.min(A+I,i),O=S;O<D;O++)for(var U=R;U<L;U++){for(var V=0,z=A;z<B;z++)V+=l[k*d+O*p+z*m]*f[z*g+U*b+k*x];C[k*y+(O*u+U)]+=V}return w.toTensor()},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(n,o,a,i);return s&&(l=this.add(l,s)),u&&(l=Va(this,l,u,c)),l},t.prototype.multiply=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o*i-a*s,imag:o*s+a*i}}):this.broadcastedBinaryOp(e,n,Ke(e.dtype,n.dtype),function(o,a){return o*a})},t.prototype.realDivide=function(e,n){return q([e,n],"realDivide"),this.broadcastedBinaryOp(e,n,"float32",function(o,a){return o/a})},t.prototype.floorDiv=function(e,n){return q([e,n],"floorDiv"),this.broadcastedBinaryOp(e,n,"int32",function(o,a){return Math.floor(o/a)})},t.prototype.sum=function(e,n){q(e,"sum"),ft("sum",n,e.rank);for(var o=Ye(e.shape,n),a=o[0],i=o[1],s=Se(a,Ke(e.dtype,"int32")),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=0,p=0;p<u;++p)d+=l[h+p];c[f]=d}return s},t.prototype.prod=function(e,n){q(e,"sum");for(var o=Ye(e.shape,n),a=o[0],i=o[1],s=Se(a,Ke(e.dtype,"int32")),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=1,p=0;p<u;++p)d*=l[h+p];c[f]=d}return s},t.prototype.unsortedSegmentSum=function(e,n,o){q(e,"unsortedSegmentSum");for(var a=[],i=e.rank-n.rank,s=0;s<i;++s)n=n.expandDims(s+1);for(s=0;s<o;++s){var u=K(s,"int32"),c=Tl(u,n).asType("float32").mul(e).sum(0);a.push(c)}return mt(a)},t.prototype.argMin=function(e,n){q(e,"argMin");var o=[n];ft("argMin",o,e.rank);for(var a=Ye(e.shape,o),i=a[0],s=a[1],u=Se(i,"int32"),c=ee(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],m=0,v=0;v<c;++v){var g=f[d+v];g<p&&(p=g,m=v)}l[h]=m}return u},t.prototype.argMax=function(e,n){q(e,"argMax");var o=[n];ft("argMax",o,e.rank);for(var a=Ye(e.shape,o),i=a[0],s=a[1],u=Se(i,"int32"),c=ee(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],m=0,v=0;v<c;++v){var g=f[d+v];g>p&&(p=g,m=v)}l[h]=m}return u},t.prototype.cumsum=function(e,n,o,a){if(q(e,"cumsum"),n!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+n);for(var i=Ke(e.dtype,"int32"),s=Se(e.shape,i),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],f=a?function(v,g){return v+l-g-1}:function(v,g){return v+g},h=0;h<c.length;h+=l)for(var d=0;d<l;d++){var p=f(h,d);if(d===0)u[p]=o?0:c[p];else{var m=f(h,d-1);u[p]=o?c[m]+u[m]:c[p]+u[m]}}return s},t.prototype.equal=function(e,n){return q([e,n],"equal"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o===a?1:0})},t.prototype.notEqual=function(e,n){return q([e,n],"notEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o!==a?1:0})},t.prototype.less=function(e,n){return q([e,n],"less"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o<a?1:0})},t.prototype.lessEqual=function(e,n){return q([e,n],"lessEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o<=a?1:0})},t.prototype.greater=function(e,n){return q([e,n],"greater"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o>a?1:0})},t.prototype.greaterEqual=function(e,n){return q([e,n],"greaterEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o>=a?1:0})},t.prototype.logicalNot=function(e){q(e,"logicalNot");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)o[a]=n[a]?0:1;return this.makeOutput(o,e.shape,"bool")},t.prototype.logicalAnd=function(e,n){return q([e,n],"logicalAnd"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o&&a})},t.prototype.logicalOr=function(e,n){return q([e,n],"logicalOr"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o||a})},t.prototype.select=function(e,n,o){q([e,n,o],"select");for(var a=this.readSync(e.dataId),i=this.readSync(n.dataId),s=this.readSync(o.dataId),u=Se(n.shape,Ke(n.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,f=e.rank===0||e.rank>1||n.rank===1?1:ee(n.shape.slice(1)),h=0;h<a.length;h++)for(var d=0;d<f;d++)a[h]===1?c[l++]=i[h]:c[l++]=s[h];return u},t.prototype.where=function(e){q([e],"where");var n=this.readSync(e.dataId);return ji(e.shape,n)},t.prototype.topk=function(e,n,o){return q(e,"topk"),il(this.readSync(e.dataId),e.shape,e.dtype,n)},t.prototype.min=function(e,n){q(e,"min"),ft("min",n,e.rank);for(var o=Ye(e.shape,n),a=o[0],i=o[1],s=Se(a,e.dtype),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var m=l[h+p];m<d&&(d=m)}c[f]=d}return s},t.prototype.minimum=function(e,n){return q([e,n],"minimum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.min(o,a)})},t.prototype.mod=function(e,n){return q([e,n],"mod"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){var i=o%a;return o<0&&a<0||o>=0&&a>=0?i:(i+a)%a})},t.prototype.max=function(e,n){q(e,"max"),ft("max",n,e.rank);for(var o=Ye(e.shape,n),a=o[0],i=o[1],s=Se(a,e.dtype),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var m=l[h+p];m>d&&(d=m)}c[f]=d}return s},t.prototype.maximum=function(e,n){return q([e,n],"maximum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.max(o,a)})},t.prototype.all=function(e,n){q(e,"all"),ft("all",n,e.rank);for(var o=Ye(e.shape,n),a=o[0],i=o[1],s=Se(a,e.dtype),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var m=l[h+p];d=d&&m}c[f]=d}return s},t.prototype.any=function(e,n){q(e,"any"),ft("any",n,e.rank);for(var o=Ye(e.shape,n),a=o[0],i=o[1],s=Se(a,e.dtype),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var m=l[h+p];d=d||m}c[f]=d}return s},t.prototype.squaredDifference=function(e,n){return q([e,n],"squaredDifference"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){var i=o-a;return i*i})},t.prototype.ceil=function(e){q(e,"ceil");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.ceil(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.floor=function(e){q(e,"floor");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.floor(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.sign=function(e){q(e,"x");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)n[a]<0?o[a]=-1:n[a]>0?o[a]=1:o[a]=0;return this.makeOutput(o,e.shape,"float32")},t.prototype.isNaN=function(e){q(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isNaN(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isInf=function(e){q(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Math.abs(n[a])===1/0&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isFinite=function(e){q(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isFinite(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.round=function(e){q(e,"round");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=Math.floor(n[a]);n[a]-i<.5?o[a]=Math.floor(n[a]):n[a]-i>.5?o[a]=Math.ceil(n[a]):o[a]=i%2==0?i:i+1}return this.makeOutput(o,e.shape,"float32")},t.prototype.exp=function(e){q(e,"exp");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.exp(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.expm1=function(e){q(e,"expm1");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.expm1(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.log=function(e){q(e,"log");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.log1p=function(e){q(e,"log1p");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log1p(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.sqrt=function(e){q(e,"sqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.rsqrt=function(e){q(e,"rsqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=1/Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.reciprocal=function(e){q(e,"reciprocal");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=1/n[a];return this.makeOutput(o,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){q(e,"relu");for(var n=Se(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.max(0,a[i]);return n},t.prototype.relu6=function(e){q(e,"relu");for(var n=Se(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.min(Math.max(0,a[i]),6);return n},t.prototype.prelu=function(e,n){return q([e,n],"prelu"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return o<0?a*o:o})},t.prototype.elu=function(e){q(e,"elu");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=o[a];n[a]=i>=0?i:Math.exp(i)-1}return this.makeOutput(n,e.shape,"float32")},t.prototype.eluDer=function(e,n){q([e,n],"eluDer");for(var o=new Float32Array(n.size),a=this.readSync(n.dataId),i=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];o[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(o,n.shape,"float32")},t.prototype.selu=function(e){q(e,"selu");for(var n=Xi,o=$i,a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>=0?o*u:n*(Math.exp(u)-1)}return this.makeOutput(a,e.shape,"float32")},t.prototype.clip=function(e,n,o){q(e,"clip");for(var a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>o?o:u<n?n:u}return this.makeOutput(a,e.shape,"float32")},t.prototype.abs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.abs(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<e.size;++a){var i=o[2*a],s=o[2*a+1];n[a]=Math.hypot(i,s)}return this.makeOutput(n,e.shape,"float32")},t.prototype.int=function(e){q(e,"int");for(var n=new Int32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=o[a];return this.makeOutput(n,e.shape,"int32")},t.prototype.sigmoid=function(e){q(e,"sigmoid");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=1/(1+Math.exp(-o[a]));return this.makeOutput(n,e.shape,"float32")},t.prototype.softplus=function(e){q(e,"softplus");for(var n=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i]>-n,u=a[i]<n,c=Math.exp(a[i]),l=void 0;l=u?c:s?a[i]:Math.log(1+c),o[i]=l}return this.makeOutput(o,e.shape,"float32")},t.prototype.sin=function(e){q(e,"sin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cos=function(e){q(e,"cos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tan=function(e){q(e,"tan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.tan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asin=function(e){q(e,"asin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acos=function(e){q(e,"acos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan=function(e){q(e,"atan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan2=function(e,n){return q([e,n],"atan2"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.atan2(o,a)})},t.prototype.sinh=function(e){q(e,"sinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cosh=function(e){q(e,"cosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tanh=function(e){q(e,"tanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Xd(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asinh=function(e){q(e,"asinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acosh=function(e){q(e,"acosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atanh=function(e){q(e,"atanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atanh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.erf=function(e){q(e,"erf");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=Math.sign(o[a]),s=Math.abs(o[a]),u=1/(1+.3275911*s);n[a]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(n,e.shape,"float32")},t.prototype.step=function(e,n){n===void 0&&(n=0),q(e,"step");for(var o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i];isNaN(s)?o[i]=NaN:o[i]=s>0?1:n}return this.makeOutput(o,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(n,o,a);return i&&(c=this.add(c,i)),s&&(c=Va(this,c,s,u)),c},t.prototype.conv2d=function(e,n,o){q([e,n],"conv2d");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.dataFormat==="channelsLast",h=le(o.outShape,e.dtype),d=e.strides[0],p=f?e.strides[1]:e.strides[2],m=f?e.strides[2]:1,v=f?1:e.strides[1],g=h.strides[0],b=f?h.strides[1]:h.strides[2],x=f?h.strides[2]:1,y=f?1:h.strides[1],w=this.readSync(e.dataId),C=this.readSync(n.dataId),I=h.values,k=0;k<o.batchSize;++k)for(var S=k*d,R=k*g,A=0;A<o.outHeight;++A)for(var D=R+A*b,L=A*o.strideHeight-l,B=0;B<a;B++){var O=L+B*s;if(!(O<0||O>=o.inHeight))for(var U=B*n.strides[0],V=S+O*p,z=0;z<o.outWidth;++z)for(var H=D+z*x,G=z*o.strideWidth-c,j=0;j<i;j++){var Q=G+j*u;if(!(Q<0||Q>=o.inWidth))for(var X=V+Q*m,ie=U+j*n.strides[1],oe=0;oe<o.inChannels;++oe){for(var fe=w[X+oe*v],ce=0;ce<o.outChannels;++ce)I[H+ce*y]+=fe*C[ie+ce];ie+=o.outChannels}}}return h.toTensor()},t.prototype.conv3d=function(e,n,o){for(var a=o.filterDepth,i=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,f=o.padInfo.front,h=o.padInfo.left,d=o.padInfo.top,p=le(o.outShape,e.dtype),m=this.readSync(e.dataId),v=this.readSync(n.dataId),g=p.values,b=0;b<o.batchSize;++b)for(var x=b*e.strides[0],y=b*p.strides[0],w=0;w<o.outDepth;++w)for(var C=y+w*p.strides[1],I=w*o.strideDepth-f,k=0;k<a;k++){var S=I+k*u;if(!(S<0||S>=o.inDepth))for(var R=k*n.strides[0],A=x+S*e.strides[1],D=0;D<o.outHeight;++D)for(var L=C+D*p.strides[2],B=D*o.strideHeight-d,O=0;O<i;O++){var U=B+O*c;if(!(U<0||U>=o.inHeight))for(var V=R+O*n.strides[1],z=A+U*e.strides[2],H=0;H<o.outWidth;++H)for(var G=L+H*o.outChannels,j=H*o.strideWidth-h,Q=0;Q<s;Q++){var X=j+Q*l;if(!(X<0||X>=o.inWidth))for(var ie=V+Q*n.strides[2],oe=z+X*o.inChannels,fe=ie,ce=0;ce<o.inChannels;++ce){for(var Z=m[oe+ce],he=0;he<o.outChannels;++he)g[G+he]+=Z*v[fe+he];fe+=o.outChannels}}}}return p.toTensor()},t.prototype.conv2dDerInput=function(e,n,o){q([e,n],"conv2dDerInput");for(var a=le(o.inShape,"float32"),i=a.values,s=this.readSync(e.dataId),u=this.readSync(n.dataId),c=n.strides,l=c[0],f=c[1],h=c[2],d=o.batchSize,p=o.filterHeight,m=o.filterWidth,v=o.inChannels,g=o.inHeight,b=o.inWidth,x=o.outChannels,y=o.outHeight,w=o.outWidth,C=o.strideHeight,I=o.strideWidth,k=o.dataFormat,S=p-1-o.padInfo.top,R=m-1-o.padInfo.left,A=k==="channelsLast",D=a.strides[0],L=A?a.strides[1]:a.strides[2],B=A?a.strides[2]:1,O=A?1:a.strides[1],U=e.strides[0],V=A?e.strides[1]:e.strides[2],z=A?e.strides[2]:1,H=A?1:e.strides[1],G=0;G<d;++G)for(var j=0;j<v;++j)for(var Q=0;Q<g;++Q)for(var X=Q-S,ie=Math.max(0,Math.ceil(X/C)),oe=Math.min(y,(p+X)/C),fe=0;fe<b;++fe){for(var ce=fe-R,Z=Math.max(0,Math.ceil(ce/I)),he=Math.min(w,(m+ce)/I),Ee=0,pe=ie;pe<oe;++pe)for(var be=pe*C-X,ye=Z;ye<he;++ye)for(var _e=U*G+V*pe+z*ye,ke=l*(p-1-be)+f*(m-1-(ye*I-ce))+h*j,Ie=0;Ie<x;++Ie)Ee+=s[_e+H*Ie]*u[ke+Ie];i[D*G+L*Q+B*fe+O*j]=Ee}return a.toTensor()},t.prototype.conv3dDerInput=function(e,n,o){for(var a=le(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],f=s[3],h=this.readSync(e.dataId),d=e.strides,p=d[0],m=d[1],v=d[2],g=d[3],b=this.readSync(n.dataId),x=n.strides,y=x[0],w=x[1],C=x[2],I=x[3],k=o.batchSize,S=o.filterDepth,R=o.filterHeight,A=o.filterWidth,D=o.inChannels,L=o.inDepth,B=o.inHeight,O=o.inWidth,U=o.outChannels,V=o.outDepth,z=o.outHeight,H=o.outWidth,G=o.strideDepth,j=o.strideHeight,Q=o.strideWidth,X=S-1-o.padInfo.front,ie=R-1-o.padInfo.top,oe=A-1-o.padInfo.left,fe=0;fe<k;++fe)for(var ce=0;ce<D;++ce)for(var Z=0;Z<L;++Z)for(var he=Z-X,Ee=Math.max(0,Math.ceil(he/G)),pe=Math.min(V,(S+he)/G),be=0;be<B;++be)for(var ye=be-ie,_e=Math.max(0,Math.ceil(ye/j)),ke=Math.min(z,(R+ye)/j),Ie=0;Ie<O;++Ie){for(var At=Ie-oe,Nt=Math.max(0,Math.ceil(At/Q)),lt=Math.min(H,(A+At)/Q),Vn=0,$t=Ee;$t<pe;++$t)for(var un=$t*G-he,Yt=_e;Yt<ke;++Yt)for(var Hn=Yt*j-ye,Jt=Nt;Jt<lt;++Jt)for(var ma=p*fe+m*$t+v*Yt+g*Jt,Gn=y*(S-1-un)+w*(R-1-Hn)+C*(A-1-(Jt*Q-At))+I*ce,Ft=0;Ft<U;++Ft)Vn+=h[ma+Ft]*b[Gn+Ft];i[u*fe+c*Z+l*be+f*Ie+ce]=Vn}return a.toTensor()},t.prototype.conv2dDerFilter=function(e,n,o){q([e,n],"conv2dDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=le(o.filterShape,"float32"),f=o.padInfo.left,h=o.padInfo.top,d=this.bufferSync(e),p=this.bufferSync(n),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((h-m)/a)),g=Math.min(o.outHeight,(o.inHeight+h-m)/a),b=0;b<u;++b)for(var x=Math.max(0,Math.ceil((f-b)/i)),y=Math.min(o.outWidth,(o.inWidth+f-b)/i),w=0;w<o.inChannels;++w)for(var C=0;C<o.outChannels;++C){for(var I=0,k=0;k<o.batchSize;++k)for(var S=v;S<g;++S)for(var R=m+S*a-h,A=x;A<y;++A){var D=b+A*i-f;I+=c?d.get(k,R,D,w)*p.get(k,S,A,C):d.get(k,w,R,D)*p.get(k,C,S,A)}l.set(I,m,b,w,C)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,n,o){for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=le(o.filterShape,"float32"),h=f.values,d=f.strides,p=d[0],m=d[1],v=d[2],g=d[3],b=this.readSync(n.dataId),x=n.strides,y=x[0],w=x[1],C=x[2],I=x[3],k=this.readSync(e.dataId),S=e.strides,R=S[0],A=S[1],D=S[2],L=S[3],B=o.padInfo.front,O=o.padInfo.left,U=o.padInfo.top,V=0;V<u;++V)for(var z=Math.max(0,Math.ceil((B-V)/a)),H=Math.min(o.outDepth,(o.inDepth+B-V)/a),G=V*p,j=0;j<c;++j)for(var Q=Math.max(0,Math.ceil((U-j)/i)),X=Math.min(o.outHeight,(o.inHeight+U-j)/i),ie=j*m+G,oe=0;oe<l;++oe)for(var fe=Math.max(0,Math.ceil((O-oe)/s)),ce=Math.min(o.outWidth,(o.inWidth+O-oe)/s),Z=oe*v+ie,he=0;he<o.inChannels;++he)for(var Ee=he*g+Z,pe=0;pe<o.outChannels;++pe){for(var be=0,ye=0;ye<o.batchSize;++ye)for(var _e=ye*R,ke=ye*y,Ie=z;Ie<H;++Ie)for(var At=(V+Ie*a-B)*A+_e,Nt=Ie*w+ke,lt=Q;lt<X;++lt)for(var Vn=(j+lt*i-U)*D+At,$t=lt*C+Nt,un=fe;un<ce;++un){var Yt=un*I+$t;be+=k[(oe+un*s-O)*L+Vn+he]*b[Yt+pe]}h[Ee+pe]=be}return f.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(n,o,a);return i&&(c=this.add(c,i)),s&&(c=Va(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,n,o){q([e,n],"depthwiseConv2D");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.outChannels/o.inChannels,h=le(o.outShape,e.dtype),d=this.readSync(e.dataId),p=this.readSync(n.dataId),m=h.values,v=0;v<o.batchSize;++v)for(var g=v*e.strides[0],b=v*h.strides[0],x=0;x<o.outHeight;++x)for(var y=b+x*h.strides[1],w=x*o.strideHeight-c,C=0;C<a;++C){var I=w+C*s;if(!(I<0||I>=o.inHeight))for(var k=C*n.strides[0],S=g+I*e.strides[1],R=0;R<o.outWidth;++R)for(var A=y+R*h.strides[2],D=R*o.strideWidth-l,L=0;L<i;++L){var B=D+L*u;if(!(B<0||B>=o.inWidth))for(var O=k+L*n.strides[1],U=S+B*o.inChannels,V=A,z=O,H=0;H<o.inChannels;++H){for(var G=d[U+H],j=0;j<f;++j)m[V+j]+=G*p[z+j];V+=f,z+=f}}}return h.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,n,o){q([e,n],"depthwiseConv2DDerInput");for(var a=le(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],f=this.readSync(e.dataId),h=e.strides,d=h[0],p=h[1],m=h[2],v=this.readSync(n.dataId),g=n.strides,b=g[0],x=g[1],y=g[2],w=o.batchSize,C=o.filterHeight,I=o.filterWidth,k=o.inChannels,S=o.inHeight,R=o.inWidth,A=o.outChannels,D=o.outHeight,L=o.outWidth,B=o.strideHeight,O=o.strideWidth,U=C-1-o.padInfo.top,V=I-1-o.padInfo.left,z=A/k,H=0;H<w;++H)for(var G=0;G<k;++G)for(var j=0;j<S;++j)for(var Q=j-U,X=Math.max(0,Math.ceil(Q/B)),ie=Math.min(D,(C+Q)/B),oe=0;oe<R;++oe){for(var fe=oe-V,ce=Math.max(0,Math.ceil(fe/O)),Z=Math.min(L,(I+fe)/O),he=0,Ee=X;Ee<ie;++Ee)for(var pe=Ee*B-Q,be=ce;be<Z;++be)for(var ye=d*H+p*Ee+m*be,_e=b*(C-1-pe)+x*(I-1-(be*O-fe))+y*G,ke=0;ke<z;++ke)he+=f[ye+(G*z+ke)]*v[_e+ke];i[u*H+c*j+l*oe+G]=he}return a.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){q([e,n],"depthwiseConv2DDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=le(o.filterShape,"float32"),l=o.padInfo.left,f=o.padInfo.top,h=o.outChannels/o.inChannels,d=this.bufferSync(e),p=this.bufferSync(n),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((f-m)/a)),g=Math.min(o.outHeight,(o.inHeight+f-m)/a),b=0;b<u;++b)for(var x=Math.max(0,Math.ceil((l-b)/i)),y=Math.min(o.outWidth,(o.inWidth+l-b)/i),w=0;w<o.outChannels;++w){for(var C=Math.trunc(w/h),I=w%h,k=0,S=0;S<o.batchSize;++S)for(var R=v;R<g;++R)for(var A=m+R*a-f,D=x;D<y;++D){var L=b+D*i-l;k+=d.get(S,A,L,C)*p.get(S,R,D,w)}c.set(k,m,b,C,I)}return c.toTensor()},t.prototype.tile=function(e,n){return q(e,"tile"),al(this.bufferSync(e),n)},t.prototype.pad=function(e,n,o){q(e,"pad");var a=n.map(function(h,d){return h[0]+e.shape[d]+h[1]}),i=n.map(function(h){return h[0]}),s=this.bufferSync(e),u=le(a,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),f=l.map(function(h,d){return h+i[d]});u.set.apply(u,[s.get.apply(s,l)].concat(f))}return u.toTensor()},t.prototype.transpose=function(e,n){q(e,"transpose");for(var o=new Array(e.rank),a=0;a<o.length;a++)o[a]=e.shape[n[a]];var i=this.readSync(e.dataId),s=le(o,e.dtype),u=this.bufferSync(e);for(a=0;a<e.size;++a){for(var c=u.indexToLoc(a),l=new Array(c.length),f=0;f<l.length;f++)l[f]=c[n[f]];var h=s.locToIndex(l);s.values[h]=i[a]}return s.toTensor()},t.prototype.gather=function(e,n,o){q([e,n],"gather");var a=e.shape.slice(),i=this.readSync(n.dataId);a[o]=i.length;for(var s=le(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),f=l.slice();f[o]=i[l[o]];var h=u.locToIndex(f);s.values[c]=u.values[h]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,n,o){q([e],"batchToSpaceND");var a=n.reduce(function(f,h){return f*h}),i=To(e.shape,n,a),s=Do(i.length,n.length),u=Ao(e.shape,n,a),c=jc(o,n.length),l=Kc(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){q([e],"spaceToBatchND");var a=n.reduce(function(h,d){return h*d}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=To(u.shape,n,a,!1),l=Do(c.length,n.length,!1),f=Ao(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.pool=function(e,n,o){q(e,"pool");for(var a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,f=n.padInfo.top,h=n.padInfo.left,d=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=this.readSync(e.dataId),m=le(n.outShape,e.dtype),v=m.values,g=n.outShape[1]*n.outShape[2]*n.outShape[3],b=n.outShape[2]*n.outShape[3],x=n.outShape[3],y=0;y<n.batchSize;++y)for(var w=y*g,C=y*e.strides[0],I=0;I<n.inChannels;++I)for(var k=0;k<n.outHeight;++k)for(var S=k*a-f,R=Math.max(0,S),A=Math.min(n.inHeight,c+S),D=w+k*b,L=0;L<n.outWidth;++L){for(var B=L*i-h,O=Math.max(0,B),U=Math.min(n.inWidth,l+B),V=d,z=0,H=0,G=R;G<A;G+=s){for(var j=C+G*e.strides[1],Q=O;Q<U;Q+=u){var X=p[j+Q*e.strides[2]+I];o==="max"&&X>V?V=X:o==="avg"&&(z+=X,H++)}if(isNaN(V))break}v[D+L*x+I]=o==="avg"?z/H:V}return m.toTensor()},t.prototype.maxPool=function(e,n){return this.pool(e,n,"max")},t.prototype.maxPoolPositions=function(e,n){for(var o=le(n.outShape,"int32"),a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,f=n.padInfo.top,h=n.padInfo.left,d=this.bufferSync(e),p=0;p<n.batchSize;++p)for(var m=0;m<n.inChannels;++m)for(var v=0;v<n.outHeight;++v){for(var g=v*a-f,b=g;b<0;)b+=s;for(var x=Math.min(n.inHeight,c+g),y=0;y<n.outWidth;++y){for(var w=y*i-h,C=w;C<0;)C+=u;for(var I=Math.min(n.inWidth,l+w),k=Number.NEGATIVE_INFINITY,S=-1,R=b;R<x;R+=s)for(var A=R-g,D=C;D<I;D+=u){var L=D-w,B=d.get(p,R,D,m);B>k&&(k=B,S=A*l+L)}o.set(S,p,v,y,m)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(e,n,o,a){q([n,o],"maxPoolBackprop");for(var i=this.maxPoolPositions(n,a),s=a.strideHeight,u=a.strideWidth,c=a.dilationHeight,l=a.dilationWidth,f=a.effectiveFilterHeight,h=a.effectiveFilterWidth,d=h-1-a.padInfo.left,p=f-1-a.padInfo.top,m=le(n.shape,"float32"),v=this.bufferSync(i),g=this.bufferSync(e),b=0;b<a.batchSize;++b)for(var x=0;x<a.inChannels;++x)for(var y=0;y<a.inHeight;++y)for(var w=0;w<a.inWidth;++w){for(var C=y-p,I=w-d,k=0,S=0;S<f;S+=c){var R=(C+S)/s;if(!(R<0||R>=a.outHeight||Math.floor(R)!==R))for(var A=0;A<h;A+=l){var D=(I+A)/u;if(!(D<0||D>=a.outWidth||Math.floor(D)!==D)){var L=f*h-1-v.get(b,R,D,x)===S*h+A?1:0;L!==0&&(k+=g.get(b,R,D,x)*L)}}}m.set(k,b,y,w,x)}return m.toTensor()},t.prototype.avgPoolBackprop=function(e,n,o){q([e,n],"avgPoolBackprop");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,f=o.effectiveFilterHeight,h=o.effectiveFilterWidth,d=h-1-o.padInfo.left,p=f-1-o.padInfo.top,m=le(n.shape,"float32"),v=1/(s*u),g=this.bufferSync(e),b=0;b<o.batchSize;++b)for(var x=0;x<o.inChannels;++x)for(var y=0;y<o.inHeight;++y)for(var w=0;w<o.inWidth;++w){for(var C=y-p,I=w-d,k=0,S=0;S<f;S+=c){var R=(C+S)/a;if(!(R<0||R>=o.outHeight||Math.floor(R)!==R))for(var A=0;A<h;A+=l){var D=(I+A)/i;D<0||D>=o.outWidth||Math.floor(D)!==D||(k+=g.get(b,R,D,x))}}m.set(k*v,b,y,w,x)}return m.toTensor()},t.prototype.pool3d=function(e,n,o){q(e,"pool3d");for(var a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,f=n.effectiveFilterDepth,h=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,m=n.padInfo.top,v=n.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,b=this.readSync(e.dataId),x=le(n.outShape,e.dtype),y=x.values,w=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],C=n.outShape[2]*n.outShape[3]*n.outShape[4],I=n.outShape[3]*n.outShape[4],k=n.outShape[4],S=0;S<n.batchSize;++S)for(var R=S*w,A=S*e.strides[0],D=0;D<n.inChannels;++D)for(var L=0;L<n.outDepth;++L){for(var B=L*a-p,O=B;O<0;)O+=u;for(var U=Math.min(n.inDepth,f+B),V=R+L*C,z=0;z<n.outHeight;++z){for(var H=z*i-m,G=H;G<0;)G+=c;for(var j=Math.min(n.inHeight,h+H),Q=V+z*I,X=0;X<n.outWidth;++X){for(var ie=X*s-v,oe=ie;oe<0;)oe+=l;for(var fe=Math.min(n.inWidth,d+ie),ce=Q+X*k,Z=g,he=0,Ee=0,pe=O;pe<U;pe+=u){for(var be=A+pe*e.strides[1],ye=G;ye<j;ye+=c){for(var _e=be+ye*e.strides[2],ke=oe;ke<fe;ke+=l){var Ie=b[_e+ke*e.strides[3]+D];if(o==="max"&&Ie>Z?Z=Ie:o==="avg"&&(he+=Ie,Ee++),isNaN(Z))break}if(isNaN(Z))break}if(isNaN(Z))break}y[ce+D]=o==="avg"?he/Ee:Z}}}return x.toTensor()},t.prototype.avgPool3d=function(e,n){return q(e,"avgPool3d"),this.pool3d(e,n,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,n,o){q([e,n],"avgPool3dBackprop");for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=o.dilationDepth,h=o.dilationHeight,d=o.dilationWidth,p=o.effectiveFilterDepth,m=o.effectiveFilterHeight,v=o.effectiveFilterWidth,g=p-1-o.padInfo.front,b=v-1-o.padInfo.left,x=m-1-o.padInfo.top,y=le(n.shape,"float32"),w=1/(u*c*l),C=this.bufferSync(e),I=0;I<o.batchSize;++I)for(var k=0;k<o.inChannels;++k)for(var S=0;S<o.inDepth;++S)for(var R=0;R<o.inHeight;++R)for(var A=0;A<o.inWidth;++A){for(var D=S-g,L=R-x,B=A-b,O=0,U=0;U<p;U+=f){var V=(D+U)/a;if(!(V<0||V>=o.outDepth||Math.floor(V)!==V))for(var z=0;z<m;z+=h){var H=(L+z)/i;if(!(H<0||H>=o.outHeight||Math.floor(H)!==H))for(var G=0;G<v;G+=d){var j=(B+G)/s;j<0||j>=o.outWidth||Math.floor(j)!==j||(O+=C.get(I,V,H,j,k))}}}y.set(O*w,I,S,R,A,k)}return y.toTensor()},t.prototype.maxPool3d=function(e,n){return q(e,"maxPool3d"),this.pool3d(e,n,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,n){for(var o=le(n.outShape,"int32"),a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,f=n.effectiveFilterDepth,h=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,m=n.padInfo.top,v=n.padInfo.left,g=this.bufferSync(e),b=0;b<n.batchSize;++b)for(var x=0;x<n.inChannels;++x)for(var y=0;y<n.outDepth;++y){for(var w=y*a-p,C=w;C<0;)C+=u;for(var I=Math.min(n.inDepth,f+w),k=0;k<n.outHeight;++k){for(var S=k*i-m,R=S;R<0;)R+=c;for(var A=Math.min(n.inHeight,h+S),D=0;D<n.outWidth;++D){for(var L=D*s-v,B=L;B<0;)B+=l;for(var O=Math.min(n.inWidth,d+L),U=Number.NEGATIVE_INFINITY,V=-1,z=C;z<I;z+=u)for(var H=z-w,G=R;G<A;G+=c)for(var j=G-S,Q=B;Q<O;Q+=l){var X=Q-L,ie=g.get(b,z,G,Q,x);ie>=U&&(U=ie,V=H*h*d+j*h+X)}o.set(V,b,y,k,D,x)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(e,n,o,a){q([n,o],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(n,a),s=a.strideDepth,u=a.strideHeight,c=a.strideWidth,l=a.dilationDepth,f=a.dilationHeight,h=a.dilationWidth,d=a.effectiveFilterDepth,p=a.effectiveFilterHeight,m=a.effectiveFilterWidth,v=d-1-a.padInfo.front,g=m-1-a.padInfo.left,b=p-1-a.padInfo.top,x=le(n.shape,"float32"),y=this.bufferSync(i),w=this.bufferSync(e),C=0;C<a.batchSize;++C)for(var I=0;I<a.inChannels;++I)for(var k=0;k<a.inDepth;++k)for(var S=0;S<a.inHeight;++S)for(var R=0;R<a.inWidth;++R){for(var A=k-v,D=S-b,L=R-g,B=0,O=0;O<d;O+=l){var U=(A+O)/s;if(!(U<0||U>=a.outDepth||Math.floor(U)!==U))for(var V=0;V<p;V+=f){var z=(D+V)/u;if(!(z<0||z>=a.outHeight||Math.floor(z)!==z))for(var H=0;H<m;H+=h){var G=(L+H)/c;if(!(G<0||G>=a.outWidth||Math.floor(G)!==G)){var j=d*p*m-1-y.get(C,U,z,G,I)===O*p*m+V*m+H?1:0;j!==0&&(B+=w.get(C,U,z,G,I)*j)}}}}x.set(B,C,k,S,R,I)}return x.toTensor()},t.prototype.cast=function(e,n){return tl(e,n,this)},t.prototype.reshape=function(e,n){return gi(e,n)},t.prototype.avgPool=function(e,n){return q(e,"avgPool"),this.pool(e,n,"avg").toFloat()},t.prototype.resizeBilinear=function(e,n,o,a){q(e,"resizeBilinear");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],f=this.readSync(e.dataId),h=new Float32Array(ee([s,n,o,l])),d=[a&&n>1?u-1:u,a&&o>1?c-1:c],p=[a&&n>1?n-1:n,a&&o>1?o-1:o],m=0,v=d[0]/p[0],g=d[1]/p[1],b=0;b<s;b++)for(var x=0;x<n;x++)for(var y=v*x,w=Math.floor(y),C=y-w,I=Math.min(u-1,Math.ceil(y)),k=b*e.strides[0]+w*e.strides[1],S=b*e.strides[0]+I*e.strides[1],R=0;R<o;R++)for(var A=g*R,D=Math.floor(A),L=A-D,B=Math.min(c-1,Math.ceil(A)),O=k+D*e.strides[2],U=S+D*e.strides[2],V=k+B*e.strides[2],z=S+B*e.strides[2],H=0;H<l;H++){var G=f[O+H],j=f[U+H],Q=G+(f[V+H]-G)*L,X=Q+(j+(f[z+H]-j)*L-Q)*C;h[m++]=X}return Xe(h,[s,n,o,l])},t.prototype.resizeBilinearBackprop=function(e,n,o){q([e,n],"resizeBilinearBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(i*s*u*c),p=[o&&f>1?s-1:s,o&&h>1?u-1:u],m=[o&&f>1?f-1:f,o&&h>1?h-1:h],v=p[0]/m[0],g=p[1]/m[1],b=this.readSync(e.dataId),x=0,y=0;y<i;y++)for(var w=y*n.strides[0],C=0;C<f;C++)for(var I=C*v,k=Math.floor(I),S=Math.min(Math.ceil(I),s-1),R=w+k*n.strides[1],A=w+S*n.strides[1],D=I-k,L=1-D,B=0;B<h;B++)for(var O=B*g,U=Math.floor(O),V=Math.min(Math.ceil(O),u-1),z=O-U,H=1-z,G=R+U*n.strides[2],j=R+V*n.strides[2],Q=A+U*n.strides[2],X=A+V*n.strides[2],ie=L*H,oe=L*z,fe=D*H,ce=D*z,Z=0;Z<c;Z++){var he=b[x++];d[G+Z]+=he*ie,d[j+Z]+=he*oe,d[Q+Z]+=he*fe,d[X+Z]+=he*ce}return ot(d,[i,u,s,c],n.dtype)},t.prototype.resizeNearestNeighbor=function(e,n,o,a){q(e,"resizeNearestNeighbor");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],f=this.readSync(e.dataId),h=new Float32Array(s*n*o*l),d=[a&&n>1?u-1:u,a&&o>1?c-1:c],p=[a&&n>1?n-1:n,a&&o>1?o-1:o],m=d[0]/p[0],v=d[1]/p[1],g=0,b=0;b<s;b++)for(var x=b*e.strides[0],y=0;y<n;y++)for(var w=m*y,C=x+Math.min(u-1,a?Math.round(w):Math.floor(w))*e.strides[1],I=0;I<o;I++)for(var k=v*I,S=C+Math.min(c-1,a?Math.round(k):Math.floor(k))*e.strides[2],R=0;R<l;R++){var A=f[S+R];h[g++]=A}return Xe(h,[s,n,o,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){q([e,n],"resizeNearestNeighborBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(i*s*u*c),p=this.readSync(e.dataId),m=[o&&f>1?s-1:s,o&&h>1?u-1:u],v=[o&&f>1?f-1:f,o&&h>1?h-1:h],g=m[0]/v[0],b=m[1]/v[1],x=1/g,y=1/b,w=2*Math.ceil(x)+2,C=2*Math.ceil(y)+2,I=0;I<i;I++)for(var k=I*n.strides[0],S=0;S<s;S++)for(var R=k+S*n.strides[1],A=Math.floor(S*x),D=Math.floor(A-w/2),L=0;L<u;L++)for(var B=R+L*n.strides[2],O=Math.floor(L*y),U=Math.floor(O-C/2),V=0;V<c;V++){for(var z=0,H=0;H<w;H++){var G=H+D;if(!(G<0||G>=f)){var j=k+G*e.strides[1],Q=G*g;if(S===Math.min(s-1,o?Math.round(Q):Math.floor(Q)))for(var X=0;X<C;X++){var ie=X+U;if(!(ie<0||ie>=h)){var oe=j+ie*e.strides[2],fe=ie*b;L===Math.min(u-1,o?Math.round(fe):Math.floor(fe))&&(z+=p[oe+V])}}}}d[B+V]=z}return ot(d,n.shape,n.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){q([e,n,o,i,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=this.readSync(o.dataId),f=i?this.readSync(i.dataId):new Float32Array([1]),h=s?this.readSync(s.dataId):new Float32Array([0]),d=new Float32Array(u.length),p=h.length,m=f.length,v=l.length,g=c.length,b=0,x=0,y=0,w=0,C=0;C<u.length;++C)d[C]=h[b++]+(u[C]-c[x++])*f[y++]/Math.sqrt(l[w++]+a),b>=p&&(b=0),x>=g&&(x=0),y>=m&&(y=0),w>=v&&(w=0);return ot(d,e.shape)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){q(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,f=new Float32Array(l);function h(v){for(var g=v%s,b=v-g+Math.max(0,g-n),x=v-g+Math.min(g+n,u),y=0;b<=x;b++){var w=c[b];y+=w*w}return y}for(var d=0;d<l;d++){var p=h(d),m=c[d]*Math.pow(o+a*p,-i);f[d]=m}return ot(f,e.shape)},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){q(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),f=this.readSync(n.dataId),h=this.readSync(o.dataId),d=new Float32Array(e.size),p=e.size,m=0;m<p;m++){for(var v=m%c,g=m-v+Math.max(0,v-a),b=m-v+Math.min(c,v+a+1),x=0,y=g;y<b;y++)x+=Math.pow(f[y],2);for(x=s*x+i,y=g;y<b;y++){var w=-2*s*u*f[y]*h[m]/x;m===y&&(w+=Math.pow(x,-u)),w*=l[m],d[y]+=w}}return ot(d,e.shape)},t.prototype.multinomial=function(e,n,o,a){q(e,"multinomial");for(var i=n?e:nn(e),s=i.shape[0],u=i.shape[1],c=Se([s,o],"int32"),l=this.readSync(c.dataId),f=this.readSync(i.dataId),h=0;h<s;++h){var d=h*u,p=new Float32Array(u-1);p[0]=f[d];for(var m=1;m<p.length;++m)p[m]=p[m-1]+f[d+m];for(var v=ea(a.toString()),g=h*o,b=0;b<o;++b){var x=v();l[g+b]=p.length;for(var y=0;y<p.length;y++)if(x<p[y]){l[g+b]=y;break}}}return c},t.prototype.oneHot=function(e,n,o,a){q(e,"oneHot");var i=new Float32Array(e.size*n);i.fill(a);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<n&&(i[u*n+s[u]]=o);return vn(i,[e.size,n],"int32")},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return q(e,"nonMaxSuppression"),Gi(this.readSync(e.dataId),this.readSync(n.dataId),o,a,i)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,n){for(var o=e.shape[0],a=e.shape[1],i=le(e.shape,"float32"),s=le(e.shape,"float32"),u=xt(e).as2D(o,a),c=Lt(e).as2D(o,a),l=0;l<o;l++)for(var f=u.slice([l,0],[1,a]),h=c.slice([l,0],[1,a]),d=je(f,h),p=this.readSync(this.fftImpl(d,n).dataId),m=0;m<a;m++){var v=hu(p,m);i.values[l*a+m]=v.real,s.values[l*a+m]=v.imag}return je(i.toTensor(),s.toTensor()).as2D(o,a)},t.prototype.fftImpl=function(e,n){var o=e.as1D(),a=o.size;if(this.isExponentOf2(a)){var i=this.fftRadix2(o,a,n).as2D(e.shape[0],e.shape[1]);return n&&(i=je(xt(i).div(K(a)),Lt(i).div(K(a)))),i}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),f=new Float32Array(c.length/2),h=0;h<c.length;h+=2)l[h/2]=c[h],f[h/2]=c[h+1];return{real:l,imag:f}}(this.fourierTransformByMatmul(s,a,n));return je(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,n,o){if(n===1)return e;var a=this.readSync(e.dataId),i=n/2,s=function(g){for(var b=Math.ceil(g.length/4),x=new Float32Array(b),y=new Float32Array(b),w=0;w<g.length;w+=4)x[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:x,imag:y}}(a),u=je(s.real,s.imag).as1D(),c=function(g){for(var b=Math.floor(g.length/4),x=new Float32Array(b),y=new Float32Array(b),w=2;w<g.length;w+=4)x[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:x,imag:y}}(a),l=je(c.real,c.imag).as1D();u=this.fftRadix2(u,i,o),l=this.fftRadix2(l,i,o);var f=function(g,b){for(var x=new Float32Array(g/2),y=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var C=(b?2:-2)*Math.PI*(w/g);x[w]=Math.cos(C),y[w]=Math.sin(C)}return{real:x,imag:y}}(n,o),h=je(f.real,f.imag).mul(l),d=u.add(h),p=u.sub(h),m=xt(d).concat(xt(p)),v=Lt(d).concat(Lt(p));return je(m,v).as1D()},t.prototype.fourierTransformByMatmul=function(e,n,o){for(var a=new Float32Array(2*n),i=0;i<n;i++){for(var s=0,u=0,c=0;c<n;c++){var l=kv(i*c,n,o),f=hu(e,c);s+=f.real*l.real-f.imag*l.imag,u+=f.real*l.imag+f.imag*l.real}o&&(s/=n,u/=n),Sv(a,s,u,i)}return a},t.prototype.depthToSpace=function(e,n,o){E(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),E(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});for(var a=e.shape[0],i=e.shape[1],s=e.shape[2],u=e.shape[3],c=i*n,l=s*n,f=u/(n*n),h=this.readSync(e.dataId),d=new Float32Array(a*c*l*f),p=0,m=0;m<a;++m)for(var v=0;v<c;++v)for(var g=Math.floor(v/n),b=v%n,x=0;x<l;++x)for(var y=Math.floor(x/n),w=(b*n+x%n)*f,C=0;C<f;++C){var I=C+w+u*(y+s*(g+i*m));d[p++]=h[I]}return ot(d,[a,c,l,f])},t.prototype.broadcastedBinaryOp=function(e,n,o,a){var i=me(e.shape,n.shape),s=le(i,o),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=hn(e.shape,i),f=hn(n.shape,i),h=s.values;if(l.length+f.length===0)for(var d=0;d<h.length;++d)h[d]=a(u[d%u.length],c[d%c.length]);else{var p=this.bufferSync(e),m=this.bufferSync(n),v=function(g){var b=s.indexToLoc(g),x=b.slice(-e.rank);l.forEach(function(I){return x[I]=0});var y=p.locToIndex(x),w=b.slice(-n.rank);f.forEach(function(I){return w[I]=0});var C=m.locToIndex(w);h[g]=a(u[y],c[C])};for(d=0;d<h.length;++d)v(d)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,n,o){var a=me(e.shape,n.shape),i=le(a,"float32"),s=le(a,"float32"),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=hn(e.shape,a),f=hn(n.shape,a),h=i.values,d=s.values;if(l.length+f.length===0)for(var p=0;p<h.length;p++){var m=p%u.length,v=p%c.length,g=o(u[2*m],u[2*m+1],c[2*v],c[2*v+1]);h[p]=g.real,d[p]=g.imag}else{var b=this.bufferSync(this.data.get(e.dataId).complexTensors.real),x=this.bufferSync(this.data.get(n.dataId).complexTensors.real),y=function(w){var C=i.indexToLoc(w),I=C.slice(-e.rank);l.forEach(function(D){return I[D]=0});var k=b.locToIndex(I),S=C.slice(-n.rank);f.forEach(function(D){return S[D]=0});var R=x.locToIndex(S),A=o(u[2*k],u[2*k+1],c[2*R],c[2*R+1]);h[w]=A.real,d[w]=A.imag};for(p=0;p<h.length;p++)y(p)}return this.complex(i.toTensor(),s.toTensor())},t.prototype.split=function(e,n,o){return ol(e,n,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,n,o,a,i,s){for(var u=e.shape,c=u[0],l=u[1],f=u[2],h=u[3],d=n.shape[0],p=a[0],m=a[1],v=le([d,p,m,h],"float32"),g=this.readSync(n.dataId),b=this.readSync(o.dataId),x=this.readSync(e.dataId),y=e.strides,w=v.strides,C=0;C<d;C++){var I=4*C,k=g[I],S=g[I+1],R=g[I+2],A=g[I+3],D=b[C];if(!(D>=c))for(var L=p>1?(R-k)*(l-1)/(p-1):0,B=m>1?(A-S)*(f-1)/(m-1):0,O=0;O<p;O++){var U=p>1?k*(l-1)+O*L:.5*(k+R)*(l-1);if(U<0||U>l-1)for(var V=0;V<m;V++)for(var z=0;z<h;z++){var H=z+V*w[2]+O*w[1]+C*w[0];v.values[H]=s}else if(i==="bilinear"){var G=Math.floor(U),j=Math.ceil(U),Q=U-G;for(V=0;V<m;V++)if((pe=m>1?S*(f-1)+V*B:.5*(S+A)*(f-1))<0||pe>f-1)for(z=0;z<h;z++)H=z+V*w[2]+O*w[1]+C*w[0],v.values[H]=s;else{var X=Math.floor(pe),ie=Math.ceil(pe),oe=pe-X;for(z=0;z<h;z++){var fe=x[H=z+X*y[2]+G*y[1]+D*y[0]],ce=x[H=z+ie*y[2]+G*y[1]+D*y[0]],Z=x[H=z+X*y[2]+j*y[1]+D*y[0]],he=fe+(ce-fe)*oe,Ee=Z+(x[H=z+ie*y[2]+j*y[1]+D*y[0]]-Z)*oe;H=z+V*w[2]+O*w[1]+C*w[0],v.values[H]=he+(Ee-he)*Q}}}else for(V=0;V<m;++V){var pe;if((pe=m>1?S*(f-1)+V*B:.5*(S+A)*(f-1))<0||pe>f-1)for(z=0;z<h;z++)H=z+V*w[2]+O*w[1]+C*w[0],v.values[H]=s;else{var be=Math.round(pe),ye=Math.round(U);for(z=0;z<h;z++){var _e=z+be*y[2]+ye*y[1]+D*y[0],ke=z+V*w[2]+O*w[1]+C*w[0];v.values[ke]=x[_e]}}}}}return v.toTensor()},t.prototype.sparseToDense=function(e,n,o,a){var i=No(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,f=i.outputSize;return this.scatter(e,n,o,f,c,u,s,l,a,!1)},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=Xc(e,n),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return Xe([],s,e.dtype);for(var f=new Tr([u,c],e.dtype),h=this.readSync(n.dataId),d=this.readSync(e.dataId),p=0;p<u;p++){for(var m=[],v=0,g=0;g<a;g++){var b=h[p*a+g];v+=b*l[g],m.push(b)}if(v<0||v>=e.size/c)throw new Error("Invalid indices: "+m+" does not index into "+e.shape);for(var x=0;x<c;x++)f.values[p*c+x]=d[v*c+x]}return f.toTensor().reshape(s)},t.prototype.scatterND=function(e,n,o){var a=No(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,f=K(0);return this.scatter(e,n,o,l,u,s,i,c,f,!0)},t.prototype.fill=function(e,n,o){var a=Co(o=o||Ur(n),ee(e));return a.fill(n),N.makeTensor(a,e,o,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var n=Co(e.dtype,ee(e.shape));return this.makeOutput(n,e.shape,e.dtype)},t.prototype.linspace=function(e,n,o){return nl(e,n,o)},t.prototype.scatter=function(e,n,o,a,i,s,u,c,l,f){var h=[a/i,i],d=this.readSync(e.dataId),p=this.readSync(n.dataId);if(a===0)return Xe([],o,n.dtype);var m=new Tr(h,n.dtype);m.values.fill(this.readSync(l.dataId)[0]);for(var v=0;v<s;v++){for(var g=[],b=0,x=0;x<u;x++){var y=d[v*u+x];g.push(y),b+=y*c[x]}if(b<0||b>=a/i)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var w=0;w<i;w++)f?m.values[b*i+w]+=p[v*i+w]:m.values[b*i+w]=n.rank===0?p[0]:p[v*i+w]}return m.toTensor().reshape(o)},t}(Zc);N.registerBackend("cpu",function(){return new Ky},1);for(var Ha=0,Pu=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e;q(a,"NonMaxSuppressionWithScore");var d=qi(h.data.get(a.dataId).values,h.data.get(i.dataId).values,u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e;q(n,"square");for(var a=o.data.get(n.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},{kernelName:Nr,backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e;q([o,a],Nr);var s=i.data.get(o.dataId).values,u=i.data.get(a.dataId).values,c=function(h,d,p,m,v,g){var b=me(h,d),x=b.length,y=zt(b),w=Ir(v,ee(b)),C=h.length,I=d.length,k=zt(h),S=zt(d),R=hn(h,b),A=hn(d,b);if(R.length+A.length===0)for(var D=0;D<w.length;++D)w[D]=g(p[D%p.length],m[D%m.length]);else{var L=function(B){var O=rp(B,x,y),U=O.slice(-C);R.forEach(function(G){return U[G]=0});var V=ru(U,C,k),z=O.slice(-I);A.forEach(function(G){return z[G]=0});var H=ru(z,I,S);w[B]=g(p[V],m[H])};for(D=0;D<w.length;++D)L(D)}return[w,b]}(o.shape,a.shape,s,u,o.dtype,function(h,d){var p=h-d;return p*p}),l=c[0],f=c[1];return{dataId:i.write(l,f,o.dtype),shape:f,dtype:o.dtype}}}];Ha<Pu.length;Ha++)kc(Pu[Ha]);var Kn,Xy=function(r){this.variableNames=["A"];var t=Ze(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+n+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},$y=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=Ze(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+n+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var Ga=0,Ou=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t.pixels,a=n.numChannels,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],f=[l,c],h=[l,c,a];(s||i)&&(Kn==null&&(Kn=document.createElement("canvas").getContext("2d")),Kn.canvas.width=c,Kn.canvas.height=l,Kn.drawImage(o,0,0,c,l),o=Kn.canvas);var d=e.makeTensorInfo(f,"int32");e.texData.get(d.dataId).usage=dt.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),o);var p=W().getBool("WEBGL_PACK")?new $y(h):new Xy(h),m=e.runWebGLProgram(p,[d],"int32");return e.disposeData(d.dataId),m}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs;So("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e,d=qi(h.readSync(a.dataId),h.readSync(i.dataId),u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e,a=new de(n.shape,"return x * x;");return o.runWebGLProgram(a,[n],n.dtype)}},{kernelName:Nr,backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e,s=W().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Zt("return (a - b) * (a - b);",o.shape,a.shape):new Ne("return (a - b) * (a - b);",o.shape,a.shape);return i.compileAndRun(s,[o,a])}}];Ga<Ou.length;Ga++)kc(Ou[Ga]);for(var qa=0,Mu=[{kernelName:"Square",gradFunc:function(r,t){var e=t[0];return{x:function(){return r.mul(e.toFloat().mul(2))}}}},{kernelName:Nr,gradFunc:function(r,t){var e=t[0],n=t[1],o=K(2);return{a:function(){return tt(r,tt(o,ze(e,n)))},b:function(){return tt(r,tt(o,ze(n,e)))}}}}];qa<Mu.length;qa++)jd(Mu[qa]);var Yy=function(){function r(){}return r.prototype.fetch=function(t,e){return fetch(t,e)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},r}();W().get("IS_BROWSER")&&W().setPlatform("browser",new Yy);var ja,Jy=function(){return require("node-fetch")},Qy=function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(t,e){return W().global.fetch!=null?W().global.fetch(t,e):(ja==null&&(ja=Jy()),ja(t,e))},r.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},r}();W().get("IS_NODE")&&W().setPlatform("node",new Qy);var xi={float32:4,int32:4,uint16:2,uint8:1,bool:1},Wo=4;function Yl(r,t){for(var e={},n=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,f=ee(l),h=void 0;if("quantization"in s){var d=s.quantization;if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+d.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var p=xi[d.dtype],m=r.slice(n,n+f*p),v=d.dtype==="uint8"?new Uint8Array(m):new Uint16Array(m);if(c==="float32")h=Float32Array.from(v,function(C){return C*d.scale+d.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=Int32Array.from(v,function(C){return Math.round(C*d.scale+d.min)})}n+=f*p}else if(c==="string"){var g=ee(s.shape);h=[];for(var b=0;b<g;b++){var x=new Uint32Array(r.slice(n,n+Wo))[0];n+=Wo;var y=new Uint8Array(r.slice(n,n+x));h.push(y),n+=x}}else{var w=xi[c];if(m=r.slice(n,n+f*w),c==="float32")h=new Float32Array(m);else if(c==="int32")h=new Int32Array(m);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=new Uint8Array(m)}n+=f*w}e[u]=Xe(h,l,c)},a=0,i=t;a<i.length;a++)o(i[a]);return e}function Zy(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var t=0,e=[];r.forEach(function(a){if(t+=a.byteLength,e.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+a.constructor.name)});var n=new Uint8Array(t),o=0;return e.forEach(function(a){n.set(new Uint8Array(a.buffer),o),o+=a.byteLength}),n.buffer}var wi=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Bu(r){return wi?Buffer.byteLength(r):new Blob([r]).size}function ls(r){var t=0;r.forEach(function(o){t+=o.byteLength});var e=new Uint8Array(t),n=0;return r.forEach(function(o){e.set(new Uint8Array(o),n),n+=o.byteLength}),e.buffer}function Lu(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var t=r.split("/");return t[t.length-1]}function Kr(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:Bu(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:Bu(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var pt=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(t){r.getInstance().saveRouters.push(t)},r.registerLoadRouter=function(t){r.getInstance().loadRouters.push(t)},r.getSaveHandlers=function(t){return r.getHandlers(t,"save")},r.getLoadHandlers=function(t,e){return r.getHandlers(t,"load",e)},r.getHandlers=function(t,e,n){var o=[];return(e==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(a){var i=a(t,n);i!==null&&o.push(i)}),o},r}(),or="://",mn=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(t,e){E(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(or)&&(t=t.slice(0,t.indexOf(or))),E(t.length>0,function(){return"scheme must not be an empty string."});var n=r.getInstance();E(n.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),n.managers[t]=e},r.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function yo(r){if(r.indexOf(or)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+mn.getSchemes().join(","));return{scheme:r.split(or)[0],path:r.split(or)[1]}}function Wu(r,t,e){return e===void 0&&(e=!1),Y(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f;return J(this,function(h){switch(h.label){case 0:return E(r!==t,function(){return"Old path and new path are the same: '"+r+"'"}),E((n=pt.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),E(n.length<2,function(){return"Copying failed because more than one ("+n.length+") load handlers for source URL "+r+"."}),o=n[0],E((a=pt.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),E(a.length<2,function(){return"Copying failed because more than one ("+n.length+") save handlers for destination URL "+t+"."}),i=a[0],s=yo(r).scheme,u=yo(r).path,c=s===yo(r).scheme,[4,o.load()];case 1:return l=h.sent(),e&&c?[4,mn.getManager(s).removeModel(u)]:[3,3];case 2:h.sent(),h.label=3;case 3:return[4,i.save(l)];case 4:return f=h.sent(),!e||c?[3,6]:[4,mn.getManager(s).removeModel(u)];case 5:h.sent(),h.label=6;case 6:return[2,f.modelArtifactsInfo]}})})}var An="models_store",dn="model_info_store";function Jl(){if(!W().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,t=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Ci(r){var t=r.result;t.createObjectStore(An,{keyPath:"modelPath"}),t.createObjectStore(dn,{keyPath:"modelPath"})}var ar=function(){function r(t){if(this.indexedDB=Jl(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return r.prototype.save=function(t){return Y(this,void 0,void 0,function(){return J(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},r.prototype.load=function(){return Y(this,void 0,void 0,function(){return J(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(t,e){var n=this;return new Promise(function(o,a){var i=n.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return Ci(i)},i.onsuccess=function(){var s=i.result;if(e==null){var u=s.transaction(An,"readonly"),c=u.objectStore(An).get(n.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),a(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(m){return s.close(),a(c.error)},u.oncomplete=function(){return s.close()}}else{var l,f=Kr(e),h=s.transaction(dn,"readwrite"),d=h.objectStore(dn),p=d.put({modelPath:n.modelPath,modelArtifactsInfo:f});p.onsuccess=function(){var m=(l=s.transaction(An,"readwrite")).objectStore(An).put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:f});m.onsuccess=function(){return o({modelArtifactsInfo:f})},m.onerror=function(v){var g=(d=h.objectStore(dn)).delete(n.modelPath);g.onsuccess=function(){return s.close(),a(m.error)},g.onerror=function(b){return s.close(),a(m.error)}}},p.onerror=function(m){return s.close(),a(p.error)},h.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return a(i.error)}})},r.URL_SCHEME="indexeddb://",r}(),Uu=function(r){return W().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(ar.URL_SCHEME)?(t=r.slice(ar.URL_SCHEME.length),new ar(t)):null;var t};pt.registerSaveRouter(Uu),pt.registerLoadRouter(Uu);var eb=function(){function r(){this.indexedDB=Jl()}return r.prototype.listModels=function(){return Y(this,void 0,void 0,function(){var t=this;return J(this,function(e){return[2,new Promise(function(n,o){var a=t.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return Ci(a)},a.onsuccess=function(){var i=a.result,s=i.transaction(dn,"readonly"),u=s.objectStore(dn).getAll();u.onsuccess=function(){for(var c={},l=0,f=u.result;l<f.length;l++){var h=f[l];c[h.modelPath]=h.modelArtifactsInfo}n(c)},u.onerror=function(c){return i.close(),o(u.error)},s.oncomplete=function(){return i.close()}},a.onerror=function(i){return o(a.error)}})]})})},r.prototype.removeModel=function(t){return Y(this,void 0,void 0,function(){var e=this;return J(this,function(n){var o;return t=(o=t).startsWith(ar.URL_SCHEME)?o.slice(ar.URL_SCHEME.length):o,[2,new Promise(function(a,i){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return Ci(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(dn,"readwrite"),f=l.objectStore(dn),h=f.get(t);h.onsuccess=function(){if(h.result==null)return c.close(),i(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var d=f.delete(t),p=function(){var m=(u=c.transaction(An,"readwrite")).objectStore(An).delete(t);m.onsuccess=function(){return a(h.result.modelArtifactsInfo)},m.onerror=function(v){return i(h.error)}};d.onsuccess=p,d.onerror=function(m){return p(),c.close(),i(h.error)}},h.onerror=function(d){return c.close(),i(h.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},r}();if(W().getBool("IS_BROWSER"))try{mn.registerManager(ar.URL_SCHEME,new eb)}catch{}var en="/",er="tensorflowjs_models",Ql="info",tb="model_topology",nb="weight_specs",rb="weight_data",ob="model_metadata";function Zl(r){return{info:[er,r,Ql].join(en),topology:[er,r,tb].join(en),weightSpecs:[er,r,nb].join(en),weightData:[er,r,rb].join(en),modelMetadata:[er,r,ob].join(en)}}function ab(r){var t=r.split(en);if(t.length<3)throw new Error("Invalid key format: "+r);return t.slice(1,t.length-1).join(en)}var ir=function(){function r(t){if(!W().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Zl(this.modelPath)}return r.prototype.save=function(t){return Y(this,void 0,void 0,function(){var e,n,o;return J(this,function(a){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),o=Kr(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(i){if(wi)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return Y(this,void 0,void 0,function(){var t,e,n,o,a,i,s;return J(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(a=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(a),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(wi){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var f=atob(c),h=new Uint8Array(f.length),d=0;d<f.length;++d)h.set([f.charCodeAt(d)],d);return h.buffer}(s),[2,e]})})},r.URL_SCHEME="localstorage://",r}(),zu=function(r){return W().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(ir.URL_SCHEME)?(t=r.slice(ir.URL_SCHEME.length),new ir(t)):null;var t};pt.registerSaveRouter(zu),pt.registerLoadRouter(zu);var ib=function(){function r(){E(W().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),E(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return Y(this,void 0,void 0,function(){var t,e,n,o,a,i;return J(this,function(s){for(t={},e=er+en,n=en+Ql,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(e)&&a.endsWith(n)&&(i=ab(a),t[i]=JSON.parse(this.LS.getItem(a)));return[2,t]})})},r.prototype.removeModel=function(t){return Y(this,void 0,void 0,function(){var e,n;return J(this,function(o){var a;if(t=(a=t).startsWith(ir.URL_SCHEME)?a.slice(ir.URL_SCHEME.length):a,e=Zl(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]})})},r}();if(W().getBool("IS_BROWSER"))try{mn.registerManager(ir.URL_SCHEME,new ib)}catch{}var sb="model",ub=".json",cb=".weights.bin";function Vu(r){return new Promise(function(t){return setTimeout(t)}).then(r)}var Ka=function(){function r(t){if(!W().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(r.URL_SCHEME)&&(t=t.slice(r.URL_SCHEME.length)),t!=null&&t.length!==0||(t=sb),this.modelTopologyFileName=t+ub,this.weightDataFileName=t+cb}return r.prototype.save=function(t){return Y(this,void 0,void 0,function(){var e,n,o,a,i,s;return J(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,Vu(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,Vu(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:Kr(t)}]}})})},r.URL_SCHEME="downloads://",r}(),lb=function(){function r(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return r.prototype.load=function(){return Y(this,void 0,void 0,function(){var t,e,n=this;return J(this,function(o){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(a,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&a({modelTopology:l});var f=c.weightsManifest;if(f!=null){var h;try{h=n.checkManifestAndWeightFiles(f,e)}catch(v){return void i(v)}var d=[],p=[],m=[];f.forEach(function(v){v.paths.forEach(function(g){p.push(g),m.push(null)}),d.push.apply(d,v.weights)}),f.forEach(function(v){v.paths.forEach(function(g){var b=new FileReader;b.onload=function(x){var y=x.target.result,w=p.indexOf(g);m[w]=y,m.indexOf(null)===-1&&a({modelTopology:l,weightSpecs:d,weightData:ls(m),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},b.onerror=function(x){return i("Failed to weights data from file of path '"+g+"'.")},b.readAsArrayBuffer(h[g])})})}else i(new Error("weightManifest field is missing from file "+t.name))}else i(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},r.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],o=e.map(function(u){return Lu(u.name)}),a={},i=0,s=t;i<s.length;i++)s[i].paths.forEach(function(u){var c=Lu(u);if(n.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(n.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");a[u]=e[o.indexOf(c)]});if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return a},r}();function Hu(r,t,e,n){(function(a){E(a!=null&&Array.isArray(a)&&a.length>0,function(){return"promises must be a none empty array"})})(r),function(a,i){E(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+a}),E(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),E(i>=a,function(){return"startFraction must be no more than endFraction, but got startFraction "+a+" and endFraction "+i})}(e=e??0,n=n??1);var o=0;return Promise.all(r.map(function(a){return a.then(function(i){var s=e+ ++o/r.length*(n-e);return t(s),i}),a}))}function ef(r,t){return Y(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l;return J(this,function(f){switch(f.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?W().platform.fetch:t.fetchFunc,n=r.map(function(h){return e(h,t.requestInit,{isBinary:!0})}),o=0,a=.5,t.onProgress!=null?[3,2]:[4,Promise.all(n)];case 1:return i=f.sent(),[3,4];case 2:return[4,Hu(n,t.onProgress,o,a)];case 3:i=f.sent(),f.label=4;case 4:return s=i.map(function(h){return h.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=f.sent(),[3,8];case 6:return[4,Hu(s,t.onProgress,u,c)];case 7:l=f.sent(),f.label=8;case 8:return[2,l]}})})}function Gu(r){var t=this;return function(e,n,o){return n===void 0&&(n=""),Y(t,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p;return J(this,function(m){switch(m.label){case 0:if(a=e.map(function(){return!1}),i={},s=o!=null?o.map(function(){return!1}):[],u=[],e.forEach(function(v,g){var b=0;v.weights.forEach(function(x){var y="quantization"in x?x.quantization.dtype:x.dtype,w=xi[y]*ee(x.shape),C=function(){a[g]=!0,i[g]==null&&(i[g]=[]),i[g].push({manifestEntry:x,groupOffset:b,sizeBytes:w})};o!=null?o.forEach(function(I,k){I===x.name&&(C(),s[k]=!0)}):C(),u.push(x.name),b+=w})}),!s.every(function(v){return v}))throw c=o.filter(function(v,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=a.reduce(function(v,g,b){return g&&v.push(b),v},[]),f=[],l.forEach(function(v){e[v].paths.forEach(function(g){var b=n+(n.endsWith("/")?"":"/")+g;f.push(b)})}),[4,r(f)];case 1:return h=m.sent(),d={},p=0,l.forEach(function(v){for(var g=e[v].paths.length,b=0,x=0;x<g;x++)b+=h[p+x].byteLength;for(var y=new ArrayBuffer(b),w=new Uint8Array(y),C=0,I=0;I<g;I++){var k=new Uint8Array(h[p+I]);w.set(k,C),C+=k.byteLength}i[v].forEach(function(S){var R=Yl(y.slice(S.groupOffset,S.groupOffset+S.sizeBytes),[S.manifestEntry]);for(var A in R)d[A]=R[A]}),p+=g}),[2,d]}})})}}pt.registerSaveRouter(function(r){return W().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Ka.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new Ka(t)}(r.slice(Ka.URL_SCHEME.length)):null});var tf=function(){function r(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(E(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=W().platform.fetch,E(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&E(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return r.prototype.save=function(t){return Y(this,void 0,void 0,function(){var e,n,o,a;return J(this,function(i){switch(i.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((a=i.sent()).ok)return[2,{modelArtifactsInfo:Kr(t),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},r.prototype.load=function(){return Y(this,void 0,void 0,function(){var t,e,n,o,a,i,s,u,c,l,f,h;return J(this,function(d){switch(d.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=d.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");d.label=2;case 2:return d.trys.push([2,4,,5]),[4,t.json()];case 3:return e=d.sent(),[3,5];case 4:throw d.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=e.modelTopology,a=e.weightsManifest,i=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&a==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return a==null?[3,7]:[4,this.loadWeights(a)];case 6:h=d.sent(),l=h[0],f=h[1],d.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:f,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(t){return Y(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f,h;return J(this,function(d){switch(d.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=function(p){var m=p.lastIndexOf("/"),v=p.lastIndexOf("?"),g=p.substring(0,m),b=v>m?p.substring(v):"";return[g+"/",b]}(e),o=n[0],a=n[1],i=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return f=[],t.forEach(function(p){p.paths.forEach(function(m){f.push(i+m+a)})}),[4,ef(f,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return h=d.sent(),[2,[s,ls(h)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function _i(r){return r.match(tf.URL_SCHEME_REGEX)!=null}var qu=function(r,t){return typeof fetch>"u"?null:(Array.isArray(r)?r.every(function(e){return _i(e)}):_i(r))?Ei(r,{onProgress:t}):null};function Ei(r,t){return new tf(r,t)}pt.registerSaveRouter(qu),pt.registerLoadRouter(qu);var Xa=function(){function r(t){this.modelArtifacts=t}return r.prototype.load=function(){return Y(this,void 0,void 0,function(){return J(this,function(t){return[2,this.modelArtifacts]})})},r}(),fb=function(){function r(t){this.saveHandler=t}return r.prototype.save=function(t){return Y(this,void 0,void 0,function(){return J(this,function(e){return[2,this.saveHandler(t)]})})},r}(),nf=Object.freeze({browserFiles:function(r){return new lb(r)},browserHTTPRequest:function(r,t){return Ei(r,t)},concatenateArrayBuffers:ls,decodeWeights:Yl,encodeWeights:function(r,t){return Y(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return J(this,function(u){switch(u.label){case 0:for(e=[],n=[],o=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),a=function(c){var l=o[c],f=Array.isArray(r)?r[c].tensor:r[l];if(f.dtype!=="float32"&&f.dtype!=="int32"&&f.dtype!=="bool"&&f.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+f.dtype);var h={name:l,shape:f.shape,dtype:f.dtype};if(f.dtype==="string"){var d=new Promise(function(p){return Y(s,void 0,void 0,function(){var m,v,g,b,x,y,w;return J(this,function(C){switch(C.label){case 0:return[4,f.bytes()];case 1:for(m=C.sent(),v=m.reduce(function(I,k){return I+k.length},0)+Wo*m.length,g=new Uint8Array(v),b=0,x=0;x<m.length;x++)y=m[x],w=new Uint8Array(new Uint32Array([y.length]).buffer),g.set(w,b),b+=Wo,g.set(y,b),b+=y.length;return p(g),[2]}})})});n.push(d)}else n.push(f.data());t!=null&&(h.group=t),e.push(h)},i=0;i<o.length;++i)a(i);return[4,Promise.all(n)];case 1:return[2,{data:Zy(u.sent()),specs:e}]}})})},fromMemory:function(r,t,e,n){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new Xa(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Xa({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Xa({modelTopology:r,weightSpecs:t,weightData:e,trainingConfig:n}))},getLoadHandlers:function(r,t){return pt.getLoadHandlers(r,t)},getModelArtifactsInfoForJSON:Kr,getSaveHandlers:function(r){return pt.getSaveHandlers(r)},http:Ei,isHTTPScheme:_i,loadWeights:function(r,t,e,n){return t===void 0&&(t=""),Y(this,void 0,void 0,function(){return J(this,function(o){return[2,Gu(function(a){return ef(a,{requestInit:n})})(r,t,e)]})})},registerLoadRouter:function(r){return pt.registerLoadRouter(r)},registerSaveRouter:function(r){return pt.registerSaveRouter(r)},weightsLoaderFactory:Gu,withSaveHandler:function(r){return new fb(r)},copyModel:function(r,t){return Y(this,void 0,void 0,function(){return J(this,function(e){return[2,Wu(r,t,!1)]})})},listModels:function(){return Y(this,void 0,void 0,function(){var r,t,e,n,o,a,i;return J(this,function(s){switch(s.label){case 0:r=mn.getSchemes(),t={},e=0,n=r,s.label=1;case 1:return e<n.length?(o=n[e],[4,mn.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())t[o+or+i]=a[i];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}})})},moveModel:function(r,t){return Y(this,void 0,void 0,function(){return J(this,function(e){return[2,Wu(r,t,!0)]})})},removeModel:function(r){return Y(this,void 0,void 0,function(){var t;return J(this,function(e){return t=yo(r),[2,mn.getManager(t.scheme).removeModel(t.path)]})})}}),Xn;T({confusionMatrix_:function(r,t,e){var n=_(r,"labels","confusionMatrix"),o=_(t,"predictions","confusionMatrix");E(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),E(n.rank===1,function(){return"Expected the rank of labels to be 1, but got "+n.rank}),E(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),E(n.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+n.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),E(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var a=vi(n.asType("int32"),e),i=vi(o.asType("int32"),e);return a.transpose().matMul(i).asType("int32")}});var hb=T({fromPixels_:function(r,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,n=!1,o=!1,a=!1,i=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)n=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)a=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(Sc("FromPixels",N.backendName)!=null)return N.runKernel("FromPixels",{pixels:r},{numChannels:t});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],f=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,f).data:n||e?s=r.data:(a||o)&&(Xn==null&&(Xn=document.createElement("canvas").getContext("2d")),Xn.canvas.width=l,Xn.canvas.height=f,Xn.drawImage(r,0,0,l,f),s=Xn.getImageData(0,0,l,f).data),t===4)u=new Int32Array(s);else{var h=l*f;u=new Int32Array(h*t);for(var d=0;d<h;d++)for(var p=0;p<t;++p)u[d*t+p]=s[4*d+p]}return Wi(u,[f,l,t],"int32")}}),fs=Object.freeze({toPixels:function(r,t){return Y(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f,h,d,p,m,v,g,b,x,y,w,C,I,k;return J(this,function(S){switch(S.label){case 0:if(e=_(r,"img","toPixels"),r instanceof Te||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(n=e.shape.slice(0,2),o=n[0],a=n[1],(i=e.rank===2?1:e.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,e.data()];case 1:return s=S.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=S.sent(),f=l[0],h=l[1],d=f[0],p=h[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(d<0||p>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+d+" - "+p+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(d<0||p>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+d+" - "+p+"].")}for(m=e.dtype==="float32"?255:1,v=new Uint8ClampedArray(a*o*4),g=0;g<o*a;++g)b=void 0,x=void 0,y=void 0,w=void 0,i===1?(b=s[g]*m,x=s[g]*m,y=s[g]*m,w=255):i===3?(b=s[3*g]*m,x=s[3*g+1]*m,y=s[3*g+2]*m,w=255):i===4&&(b=s[4*g]*m,x=s[4*g+1]*m,y=s[4*g+2]*m,w=s[4*g+3]*m),v[(C=4*g)+0]=Math.round(b),v[C+1]=Math.round(x),v[C+2]=Math.round(y),v[C+3]=Math.round(w);return t!=null&&(t.width=a,t.height=o,I=t.getContext("2d"),k=new ImageData(v,a,o),I.putImageData(k,0,0)),e!==r&&e.dispose(),[2,v]}})})},fromPixels:hb}),db=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(t,e){return new t(e)},r}(),pb=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(t){r.getMap().classNameMap[t.className]=[t,t.fromConfig]},r}();function Un(r){E(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),E(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),E(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),pb.register(r)}var zn=function(r){function t(){return r!==null&&r.apply(this,arguments)||this}return Tt(t,r),t.prototype.minimize=function(e,n,o){n===void 0&&(n=!1);var a=this.computeGradients(e,o),i=a.value,s=a.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return st(s),n?i:(i.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,n){return Ev(e,n)},t.prototype.dispose=function(){this.iterations_!=null&&st(this.iterations_)},t.prototype.saveIterations=function(){return Y(this,void 0,void 0,function(){return J(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:K(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return J(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return J(this,function(n){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(e){return Y(this,void 0,void 0,function(){var n;return J(this,function(o){switch(o.label){case 0:return n=this,[4,e[0].tensor.data()];case 1:return n.iterations_=o.sent()[0],[2,e.slice(1)]}})})},t}(db);Object.defineProperty(zn,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var vb=function(r){function t(e,n,o){o===void 0&&(o=null);var a=r.call(this)||this;return a.learningRate=e,a.rho=n,a.epsilon=o,a.accumulatedGrads=[],a.accumulatedUpdates=[],o==null&&(a.epsilon=N.backend.epsilon()),a}return Tt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=N.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accum_grad",variable:$(function(){return ge(i).variable(!1)})}),n.accumulatedUpdates[a]==null&&(n.accumulatedUpdates[a]={originalName:o+"/accum_var",variable:$(function(){return ge(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable,c=n.accumulatedUpdates[a].variable;$(function(){var l=u.mul(n.rho).add(s.square().mul(1-n.rho)),f=c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s),h=c.mul(n.rho).add(f.square().mul(1-n.rho));u.assign(l),c.assign(h);var d=f.mul(-n.learningRate).add(i);i.assign(d)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(st(this.accumulatedGrads.map(function(e){return e.variable})),st(this.accumulatedUpdates.map(function(e){return e.variable})))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){var e;return J(this,function(n){switch(n.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){var n;return J(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=e.length/2,this.accumulatedGrads=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.rho,n.epsilon)},t.className="Adadelta",t}(zn);Un(vb);var mb=function(r){function t(e,n){n===void 0&&(n=.1);var o=r.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=n,o.accumulatedGrads=[],o}return Tt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=N.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accumulator",variable:$(function(){return Vt(i.shape,n.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable;$(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(N.backend.epsilon()).sqrt()).mul(-n.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&st(this.accumulatedGrads.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return J(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return J(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulatedGrads=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,n){return new e(n.learningRate,n.initialAccumulatorValue)},t.className="Adagrad",t}(zn);Un(mb);var gb=function(r){function t(e,n,o,a){a===void 0&&(a=null);var i=r.call(this)||this;return i.learningRate=e,i.beta1=n,i.beta2=o,i.epsilon=a,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],$(function(){i.accBeta1=K(n).variable(),i.accBeta2=K(o).variable()}),a==null&&(i.epsilon=N.backend.epsilon()),i}return Tt(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);$(function(){var a=ze(1,n.accBeta1),i=ze(1,n.accBeta2);o.forEach(function(s,u){var c=N.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:$(function(){return ge(c).variable(!1)})}),n.accumulatedSecondMoment[u]==null&&(n.accumulatedSecondMoment[u]={originalName:s+"/v",variable:$(function(){return ge(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=n.accumulatedFirstMoment[u].variable,h=n.accumulatedSecondMoment[u].variable,d=f.mul(n.beta1).add(l.mul(1-n.beta1)),p=h.mul(n.beta2).add(l.square().mul(1-n.beta2)),m=d.div(a),v=p.div(i);f.assign(d),h.assign(p);var g=m.div(v.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);c.assign(g)}}),n.accBeta1.assign(n.accBeta1.mul(n.beta1)),n.accBeta2.assign(n.accBeta2.mul(n.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&st(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&st(this.accumulatedSecondMoment.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){var e;return J(this,function(n){switch(n.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){var n,o=this;return J(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),$(function(){o.accBeta1.assign(Bo(o.beta1,o.iterations_+1)),o.accBeta2.assign(Bo(o.beta2,o.iterations_+1))}),n=e.length/2,this.accumulatedFirstMoment=e.slice(0,n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(n,2*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)},t.className="Adam",t}(zn);Un(gb);var yb=function(r){function t(e,n,o,a,i){a===void 0&&(a=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=e,s.beta1=n,s.beta2=o,s.epsilon=a,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],$(function(){s.iteration=K(0).variable(),s.accBeta1=K(n).variable()}),a==null&&(s.epsilon=N.backend.epsilon()),s}return Tt(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);$(function(){var a=ze(1,n.accBeta1),i=Rt(-n.learningRate,n.iteration.mul(n.decay).add(1));o.forEach(function(s,u){var c=N.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:ge(c).variable(!1)}),n.accumulatedWeightedInfNorm[u]==null&&(n.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:ge(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=n.accumulatedFirstMoment[u].variable,h=n.accumulatedWeightedInfNorm[u].variable,d=f.mul(n.beta1).add(l.mul(1-n.beta1)),p=h.mul(n.beta2),m=l.abs(),v=p.maximum(m);f.assign(d),h.assign(v);var g=i.div(a).mul(d.div(v.add(n.epsilon))).add(c);c.assign(g)}}),n.iteration.assign(n.iteration.add(1)),n.accBeta1.assign(n.accBeta1.mul(n.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&st(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&st(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return J(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return J(this,function(n){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)},t.className="Adamax",t}(zn);Un(yb);var rf=function(r){function t(e){var n=r.call(this)||this;return n.learningRate=e,n.setLearningRate(e),n}return Tt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=Array.isArray(e)?e[a].tensor:e[o];if(i!=null){var s=N.registeredVariables[o];$(function(){var u=n.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Lp(K(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return J(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return J(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=n.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,n){return new e(n.learningRate)},t.className="SGD",t}(zn);Un(rf);var bb=function(r){function t(e,n,o){o===void 0&&(o=!1);var a=r.call(this,e)||this;return a.learningRate=e,a.momentum=n,a.useNesterov=o,a.accumulations=[],a.m=K(a.momentum),a}return Tt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=N.registeredVariables[o];n.accumulations[a]==null&&(n.accumulations[a]={originalName:o+"/momentum",variable:$(function(){return ge(i).variable(!1)})});var s=n.accumulations[a].variable,u=Array.isArray(e)?e[a].tensor:e[o];u!=null&&$(function(){var c,l=n.m.mul(s).add(u);c=n.useNesterov?n.c.mul(u.add(l.mul(n.m))).add(i):n.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&st(this.accumulations.map(function(e){return e.variable}))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return J(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return J(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulations=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)},t.className="Momentum",t}(rf);Un(bb);var xb=function(r){function t(e,n,o,a,i){n===void 0&&(n=.9),o===void 0&&(o=0),a===void 0&&(a=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=e,s.decay=n,s.momentum=o,s.epsilon=a,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,a==null&&(s.epsilon=N.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return Tt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=N.registeredVariables[o];n.accumulatedMeanSquares[a]==null&&(n.accumulatedMeanSquares[a]={originalName:o+"/rms",variable:$(function(){return ge(i).variable(!1)})}),n.accumulatedMoments[a]==null&&(n.accumulatedMoments[a]={originalName:o+"/momentum",variable:$(function(){return ge(i).variable(!1)})}),n.accumulatedMeanGrads[a]==null&&n.centered&&(n.accumulatedMeanGrads[a]={originalName:o+"/mg",variable:$(function(){return ge(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedMeanSquares[a].variable,c=n.accumulatedMoments[a].variable;$(function(){var l=u.mul(n.decay).add(s.square().mul(1-n.decay));if(n.centered){var f=n.accumulatedMeanGrads[a].variable,h=f.mul(n.decay).add(s.mul(1-n.decay)),d=c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(h.square().add(n.epsilon)).sqrt()));u.assign(l),f.assign(h),c.assign(d);var p=i.sub(d);i.assign(p)}else{var m=u.mul(n.decay).add(s.square().mul(1-n.decay));d=c.mul(n.momentum).add(s.mul(n.learningRate).div(m.add(n.epsilon).sqrt())),u.assign(m),c.assign(d),p=i.sub(d),i.assign(p)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&st(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&st(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&st(this.accumulatedMoments.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){var e;return J(this,function(n){switch(n.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){var n;return J(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*n,3*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)},t.className="RMSProp",t}(zn);Un(xb);Te.prototype.squaredDifference=function(r){return yl(this,r)},M=jy;function En(r,t,e){if(e===void 0&&(e=!1),r.beginPath(),t.slice(1).forEach(function(a,i){var s=a.x,u=a.y,c=t[i];r.moveTo(c.x,c.y),r.lineTo(s,u)}),e){var n=t[t.length-1],o=t[0];if(!n||!o)return;r.moveTo(n.x,n.y),r.lineTo(o.x,o.y)}r.stroke()}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ri=function(r,t){return Ri=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])},Ri(r,t)};function ue(r,t){Ri(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Je=function(){return Je=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},Je.apply(this,arguments)};function ne(r,t,e,n){function o(a){return a instanceof e?a:new e(function(i){i(a)})}return new(e||(e=Promise))(function(a,i){function s(l){try{c(n.next(l))}catch(f){i(f)}}function u(l){try{c(n.throw(l))}catch(f){i(f)}}function c(l){l.done?a(l.value):o(l.value).then(s,u)}c((n=n.apply(r,t||[])).next())})}function re(r,t){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,o&&(a=c[0]&2?o.return:c[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,c[1])).done)return a;switch(o=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(a=e.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){e.label=c[1];break}if(c[0]===6&&e.label<a[1]){e.label=a[1],a=c;break}if(a&&e.label<a[2]){e.label=a[2],e.ops.push(c);break}a[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(r,e)}catch(l){c=[6,l],o=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function kr(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var n=Array(r),o=0,t=0;t<e;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,o++)n[o]=a[i];return n}var Nn=function(){function r(t,e){if(!Fn(t)||!Fn(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function ua(r,t){return r instanceof Te&&r.shape.length===t}function wb(r){return ua(r,2)}function ca(r){return ua(r,3)}function gn(r){return ua(r,4)}function Cb(r){return r%1!==0}function ju(r){return r%2===0}function of(r,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(r*e)/e}function Ku(r){return r&&r.width&&r.height}function _b(r,t){var e=r.width,n=r.height,o=t/Math.max(n,e);return new Nn(Math.round(e*o),Math.round(n*o))}function hs(r){return r.reduce(function(t,e){return t.add(e)},new xe(0,0)).div(new xe(r.length,r.length))}function Fr(r,t,e){return Array(r).fill(0).map(function(n,o){return t+o*e})}function Fn(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function Xu(r){return Fn(r)&&0<=r&&r<=1}var xe=function(){function r(t,e){this._x=t,this._y=e}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(t){return new r(this.x+t.x,this.y+t.y)},r.prototype.sub=function(t){return new r(this.x-t.x,this.y-t.y)},r.prototype.mul=function(t){return new r(this.x*t.x,this.y*t.y)},r.prototype.div=function(t){return new r(this.x/t.x,this.y/t.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}(),Gt=function(){function r(t,e){e===void 0&&(e=!0);var n=t||{},o=[n.left,n.top,n.right,n.bottom].every(Fn),a=[n.x,n.y,n.width,n.height].every(Fn);if(!a&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(n));var i=a?[n.x,n.y,n.width,n.height]:[n.left,n.top,n.right-n.left,n.bottom-n.top],s=i[0],u=i[1],c=i[2],l=i[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(Fn)},r.assertIsValidBox=function(t,e,n){if(n===void 0&&(n=!1),!r.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!n&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new xe(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new xe(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new xe(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new xe(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.round(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.floor(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.toSquare=function(){var t=this,e=t.x,n=t.y,o=t.width,a=t.height,i=Math.abs(o-a);return o<a&&(e-=i/2,o+=i),a<o&&(n-=i/2,a+=i),new r({x:e,y:n,width:o,height:a})},r.prototype.rescale=function(t){var e=Ku(t)?t.width:t,n=Ku(t)?t.height:t;return new r({x:this.x*e,y:this.y*n,width:this.width*e,height:this.height*n})},r.prototype.pad=function(t,e){var n=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],o=n[0],a=n[1],i=n[2],s=n[3];return new r({x:o,y:a,width:i,height:s})},r.prototype.clipAtImageBorders=function(t,e){var n=this,o=n.x,a=n.y,i=n.right,s=n.bottom,u=Math.max(o,0),c=Math.max(a,0),l=i-u,f=s-c,h=Math.min(l,t-u),d=Math.min(f,e-c);return new r({x:u,y:c,width:h,height:d}).floor()},r.prototype.shift=function(t,e){var n=this,o=n.width,a=n.height,i=this.x+t,s=this.y+e;return new r({x:i,y:s,width:o,height:a})},r.prototype.padAtBorders=function(t,e){var n=this.width+1,o=this.height+1,a=1,i=1,s=n,u=o,c=this.left,l=this.top,f=this.right,h=this.bottom;return f>e&&(s=-f+e+n,f=e),h>t&&(u=-h+t+o,h=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:i,edy:u,dx:a,edx:s,y:l,ey:h,x:c,ex:f,w:n,h:o}},r.prototype.calibrate=function(t){return new r({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},r}(),la=function(r){ue(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{left:e,top:n,right:o,bottom:a},i)||this}return t}(Gt),af=function(){function r(t,e,n,o,a){this._imageDims=new Nn(a.width,a.height),this._score=t,this._classScore=e,this._className=n,this._box=new Gt(o).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new Gt(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},r}(),gt=function(r){ue(t,r);function t(e,n,o){return r.call(this,e,e,"",n,o)||this}return t.prototype.forSize=function(e,n){var o=r.prototype.forSize.call(this,e,n),a=o.score,i=o.relativeBox,s=o.imageDims;return new t(a,i,s)},t}(af);function Eb(r,t,e){e===void 0&&(e=!0);var n=Math.max(0,Math.min(r.right,t.right)-Math.max(r.left,t.left)),o=Math.max(0,Math.min(r.bottom,t.bottom)-Math.max(r.top,t.top)),a=n*o;return e?a/(r.area+t.area-a):a/Math.min(r.area,t.area)}function Rb(r){var t=r.map(function(s){return s.x}),e=r.map(function(s){return s.y}),n=t.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),a=t.reduce(function(s,u){return s<u?u:s},0),i=e.reduce(function(s,u){return s<u?u:s},0);return new la(n,o,a,i)}function Pr(r,t,e,n){n===void 0&&(n=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),a=[],i=function(){var s=o.pop();a.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var f=u[l],h=r[s],d=r[f];c.push(Eb(h,d,n))}o=o.filter(function(p,m){return c[m]<=e})};o.length>0;)i();return a}function Xr(r,t){return $(function(){var e=t[0],n=t[1],o=t[2],a=Vt(kr(r.shape.slice(0,3),[1]),e),i=Vt(kr(r.shape.slice(0,3),[1]),n),s=Vt(kr(r.shape.slice(0,3),[1]),o),u=Le([a,i,s],3);return ze(r,u)})}function Sb(r,t){return t===void 0&&(t=!1),$(function(){var e=r.shape.slice(1),n=e[0],o=e[1];if(n===o)return r;var a=Math.abs(n-o),i=Math.round(a*(t?.5:1)),s=n>o?2:1,u=function(d){var p=r.shape.slice();return p[s]=d,Vt(p,0)},c=u(i),l=a-c.shape[s],f=t&&l?u(l):null,h=[f,r,c].filter(function(d){return!!d}).map(function(d){return d.toFloat()});return Le(h,s)})}function $a(r){return 1/(1+Math.exp(-r))}var ds=function(r){ue(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{x:e,y:n,width:o,height:a},i)||this}return t}(Gt),kb=.5,Ib=.43,Tb=.45,dr=function(){function r(t,e,n){n===void 0&&(n=new xe(0,0));var o=e.width,a=e.height;this._imgDims=new Nn(o,a),this._shift=n,this._positions=t.map(function(i){return i.mul(new xe(o,a)).add(n)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new xe(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new xe(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},r.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new xe(t,e))},r.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},r.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var n=t instanceof gt?t.box.floor():new Gt(t);return this.shiftBy(n.x,n.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),a=o.useDlibAlignment,i=o.minBoxPadding;return a?this.alignDlib():this.alignMinBbox(i)},r.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],n=t[1],o=t[2],a=function(f){return o.sub(f).magnitude()},i=(a(e)+a(n))/2,s=Math.floor(i/Tb),u=hs(t),c=Math.floor(Math.max(0,u.x-kb*s)),l=Math.floor(Math.max(0,u.y-Ib*s));return new ds(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(t){var e=Rb(this.positions);return e.pad(e.width*t,e.height*t)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}(),Db=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],hs([e[3],e[4]])]},t}(dr),sf=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(hs)},t}(dr),$u=function(){function r(t,e){this._label=t,this._distance=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+of(this.distance)+")":"")},r}(),Yu=function(r){ue(t,r);function t(e,n){var o=r.call(this,e)||this;return o._label=n,o}return t.assertIsValidLabeledBox=function(e,n){if(Gt.assertIsValidBox(e,n),!Fn(e.label))throw new Error(n+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(Gt),so=function(){function r(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(n){return!(n instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},r.fromJSON=function(t){var e=t.descriptors.map(function(n){return new Float32Array(n)});return new r(t.label,e)},r}();(function(r){ue(t,r);function t(e,n,o,a){var i=r.call(this,e,n)||this;return i._score=o,i._classScore=a,i}return t.assertIsValidPredictedBox=function(e,n){if(Yu.assertIsValidLabeledBox(e,n),!Xu(e.score)||!Xu(e.classScore))throw new Error(n+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(Yu);function Uo(r){return r.detection instanceof gt}function Or(r,t){var e={detection:t};return Object.assign({},r,e)}function uf(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:t}}function cf(r){var t="";if(!r)try{r=require("fs")}catch(n){t=n.toString()}var e=r?function(n){return new Promise(function(o,a){r.readFile(n,function(i,s){return i?a(i):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function lf(){var r=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},n=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},a=cf();return Je({Canvas:r||function(){function i(){}return i}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function i(){}return i}(),Image:t||function(){function i(){}return i}(),ImageData:global.ImageData||function(){function i(){}return i}(),Video:global.HTMLVideoElement||function(){function i(){}return i}(),createCanvasElement:e,createImageElement:n,fetch:o},a)}function ff(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function hf(){return typeof global=="object"&&typeof require=="function"&&typeof module<"u"&&typeof process<"u"&&!!process.version}var Be;function Ab(){if(!Be)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Be}function Si(r){Be=r}function ps(){ff()&&Si(uf()),hf()&&Si(lf())}function Nb(r){if(Be||ps(),!Be)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=r.Canvas,e=t===void 0?Be.Canvas:t,n=r.Image,o=n===void 0?Be.Image:n;Be.Canvas=e,Be.Image=o,Be.createCanvasElement=r.createCanvasElement||function(){return new e},Be.createImageElement=r.createImageElement||function(){return new o},Be.ImageData=r.ImageData||Be.ImageData,Be.Video=r.Video||Be.Video,Be.fetch=r.fetch||Be.fetch,Be.readFile=r.readFile||Be.readFile}var rt={getEnv:Ab,setEnv:Si,initialize:ps,createBrowserEnv:uf,createFileSystem:cf,createNodejsEnv:lf,monkeyPatch:Nb,isBrowser:ff,isNodejs:hf};ps();function vs(r){return!rt.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function qt(r){var t=rt.getEnv(),e=t.Canvas,n=t.CanvasRenderingContext2D;if(r instanceof n)return r;var o=vs(r);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var a=o.getContext("2d");if(!a)throw new Error("resolveContext2d - canvas 2d context is null");return a}var pn;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(pn||(pn={}));var df=function(){function r(t){t===void 0&&(t={});var e=t.anchorPosition,n=t.backgroundColor,o=t.fontColor,a=t.fontSize,i=t.fontStyle,s=t.padding;this.anchorPosition=e||pn.TOP_LEFT,this.backgroundColor=n||"rgba(0, 0, 0, 0.5)",this.fontColor=o||"rgba(255, 255, 255, 1)",this.fontSize=a||14,this.fontStyle=i||"Georgia",this.padding=s||4}return r}(),Fb=function(){function r(t,e,n){n===void 0&&(n={}),this.text=typeof t=="string"?[t]:t instanceof r?t.text:t,this.anchor=e,this.options=new df(n)}return r.prototype.measureWidth=function(t){var e=this.options.padding;return this.text.map(function(n){return t.measureText(n).width}).reduce(function(n,o){return n<o?o:n},0)+2*e},r.prototype.measureHeight=function(){var t=this.options,e=t.fontSize,n=t.padding;return this.text.length*e+2*n},r.prototype.getUpperLeft=function(t,e){var n=this.options.anchorPosition,o=n===pn.BOTTOM_RIGHT||n===pn.TOP_RIGHT,a=n===pn.BOTTOM_LEFT||n===pn.BOTTOM_RIGHT,i=this.measureWidth(t),s=this.measureHeight(),u=o?this.anchor.x-i:this.anchor.x,c=a?this.anchor.y-s:this.anchor.y;if(e){var l=e.width,f=e.height,h=Math.max(Math.min(u,l-i),0),d=Math.max(Math.min(c,f-s),0);return{x:h,y:d}}return{x:u,y:c}},r.prototype.draw=function(t){var e=vs(t),n=qt(e),o=this.options,a=o.backgroundColor,i=o.fontColor,s=o.fontSize,u=o.fontStyle,c=o.padding;n.font=s+"px "+u;var l=this.measureWidth(n),f=this.measureHeight();n.fillStyle=a;var h=this.getUpperLeft(n,e);n.fillRect(h.x,h.y,l,f),n.fillStyle=i,this.text.forEach(function(d,p){var m=c+h.x,v=c+h.y+(p+1)*s;n.fillText(d,m,v)})},r}(),Pb=function(){function r(t){t===void 0&&(t={});var e=t.boxColor,n=t.lineWidth,o=t.label,a=t.drawLabelOptions;this.boxColor=e||"rgba(0, 0, 255, 1)",this.lineWidth=n||2,this.label=o;var i={anchorPosition:pn.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new df(Object.assign({},i,a))}return r}(),Ob=function(){function r(t,e){e===void 0&&(e={}),this.box=new Gt(t),this.options=new Pb(e)}return r.prototype.draw=function(t){var e=qt(t),n=this.options,o=n.boxColor,a=n.lineWidth,i=this.box,s=i.x,u=i.y,c=i.width,l=i.height;e.strokeStyle=o,e.lineWidth=a,e.strokeRect(s,u,c,l);var f=this.options.label;f&&new Fb([f],{x:s-a/2,y:u},this.options.drawLabelOptions).draw(t)},r}();function jw(r,t){var e=Array.isArray(t)?t:[t];e.forEach(function(n){var o=n instanceof gt?n.score:Uo(n)?n.detection.score:void 0,a=n instanceof gt?n.box:Uo(n)?n.detection.box:new Gt(n),i=o?""+of(o):void 0;new Ob(a,{label:i}).draw(r)})}function pf(r){var t=rt.getEnv(),e=t.Image,n=t.Video;return r instanceof e&&r.complete||r instanceof n&&r.readyState>=3}function Mb(r){return new Promise(function(t,e){if(r instanceof rt.getEnv().Canvas||pf(r))return t();function n(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),t(a))}function o(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),e(a))}r.addEventListener("load",n),r.addEventListener("error",o)})}function ms(r){var t=rt.getEnv(),e=t.Image,n=t.Video;return r instanceof e?new Nn(r.naturalWidth,r.naturalHeight):r instanceof n?new Nn(r.videoWidth,r.videoHeight):new Nn(r.width,r.height)}function fa(r){var t=r.width,e=r.height,n=rt.getEnv().createCanvasElement,o=n();return o.width=t,o.height=e,o}function gs(r,t){var e=rt.getEnv().ImageData;if(!(r instanceof e)&&!pf(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var n=t||ms(r),o=n.width,a=n.height,i=fa({width:o,height:a});return r instanceof e?qt(i).putImageData(r,0,0):qt(i).drawImage(r,0,0,o,a),i}function Bb(r,t){return ne(this,void 0,void 0,function(){var e,n,o,a,i,s;return re(this,function(u){switch(u.label){case 0:return e=t||rt.getEnv().createCanvasElement(),n=r.shape.slice(gn(r)?1:0),o=n[0],a=n[1],i=n[2],s=$(function(){return r.as3D(o,a,i).toInt()}),[4,fs.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function Ju(r){var t=rt.getEnv(),e=t.Image,n=t.Canvas,o=t.Video;return r instanceof e||r instanceof n||r instanceof o}function Lb(r,t,e){e===void 0&&(e=!1);var n=rt.getEnv(),o=n.Image,a=n.Canvas;if(!(r instanceof o||r instanceof a))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var i=ms(r),s=t/Math.max(i.height,i.width),u=s*i.width,c=s*i.height,l=fa({width:t,height:t}),f=r instanceof a?r:gs(r),h=Math.abs(u-c)/2,d=e&&u<c?h:0,p=e&&c<u?h:0;return qt(l).drawImage(f,d,p,u,c),l}var zo=function(){function r(t,e){var n=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(o,a){if(ca(o)){n._imageTensors[a]=o,n._inputDimensions[a]=o.shape;return}if(gn(o)){var i=o.shape[0];if(i!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+i+" passed, but not supported in input array");n._imageTensors[a]=o,n._inputDimensions[a]=o.shape.slice(1);return}var s=o instanceof rt.getEnv().Canvas?o:gs(o);n._canvases[a]=s,n._inputDimensions[a]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var t=this;return Fr(this.batchSize,0,1).map(function(e,n){return t.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},r.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},r.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},r.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},r.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),n=this.getInputHeight(t);return _b({width:e,height:n},this.inputSize)},r.prototype.toBatchTensor=function(t,e){var n=this;return e===void 0&&(e=!0),this._inputSize=t,$(function(){var o=Fr(n.batchSize,0,1).map(function(i){var s=n.getInput(i);if(s instanceof Te){var u=gn(s)?s:s.expandDims();return u=Sb(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=as.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof rt.getEnv().Canvas)return fs.fromPixels(Lb(s,t,e));throw new Error("toBatchTensor - at batchIdx "+i+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),a=mt(o.map(function(i){return i.toFloat()})).as4D(n.batchSize,t,t,3);return a})},r}();function qe(r){return ne(this,void 0,void 0,function(){var t,e,n;return re(this,function(o){switch(o.label){case 0:if(r instanceof zo)return[2,r];if(t=Array.isArray(r)?r:[r],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(a){return Array.isArray(r)?" at input index "+a+":":""},n=t.map(vs),n.forEach(function(a,i){if(!Ju(a)&&!ca(a)&&!gn(a))throw typeof t[i]=="string"?new Error("toNetInput -"+e(i)+" string passed, but could not resolve HTMLElement for element id "+t[i]):new Error("toNetInput -"+e(i)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(gn(a)){var s=a.shape[0];if(s!==1)throw new Error("toNetInput -"+e(i)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(n.map(function(a){return Ju(a)&&Mb(a)}))];case 1:return o.sent(),[2,new zo(n,Array.isArray(r))]}})})}function ys(r,t){return ne(this,void 0,void 0,function(){var e,n,o,a,i,s,u;return re(this,function(c){switch(c.label){case 0:return e=rt.getEnv().Canvas,n=r,r instanceof e?[3,5]:[4,qe(r)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return a=o.getInput(0),a instanceof e?(i=a,[3,4]):[3,2];case 2:return[4,Bb(a)];case 3:i=c.sent(),c.label=4;case 4:n=i,c.label=5;case 5:return s=qt(n),u=t.map(function(l){return l instanceof gt?l.forSize(n.width,n.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(n.width,n.height)}),[2,u.map(function(l){var f=l.x,h=l.y,d=l.width,p=l.height,m=fa({width:d,height:p});return qt(m).putImageData(s.getImageData(f,h,d,p),0,0),m})]}})})}function bs(r,t){return ne(this,void 0,void 0,function(){return re(this,function(e){if(!ca(r)&&!gn(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(gn(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,$(function(){var n=r.shape.slice(gn(r)?1:0),o=n[0],a=n[1],i=n[2],s=t.map(function(c){return c instanceof gt?c.forSize(a,o).box:c}).map(function(c){return c.clipAtImageBorders(a,o)}),u=s.map(function(c){var l=c.x,f=c.y,h=c.width,d=c.height;return Wl(r.as3D(o,a,i),[f,l,0],[d,h,i])});return u})]})})}function Wb(r,t){return ne(this,void 0,void 0,function(){var e,n;return re(this,function(o){switch(o.label){case 0:return e=rt.getEnv().fetch,[4,e(r,t)];case 1:if(n=o.sent(),!(n.status<400))throw new Error("failed to fetch: ("+n.status+") "+n.statusText+", from url: "+n.url);return[2,n]}})})}function Ub(r){return ne(this,void 0,void 0,function(){return re(this,function(t){switch(t.label){case 0:return[4,Wb(r)];case 1:return[2,t.sent().json()]}})})}function vf(r,t){var e=t+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:e};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var n=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(n,"");var o=r.split("/").filter(function(s){return s}),a=r.endsWith(".json")?o[o.length-1]:e,i=n+(r.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return i=r.startsWith("/")?"/"+i:i,{modelBaseUri:i,manifestUri:i==="/"?"/"+a:i+"/"+a}}function zb(r,t){return ne(this,void 0,void 0,function(){var e,n,o,a;return re(this,function(i){switch(i.label){case 0:return e=vf(r,t),n=e.manifestUri,o=e.modelBaseUri,[4,Ub(n)];case 1:return a=i.sent(),[2,nf.loadWeights(a,o)]}})})}function Kw(r,t,e){e===void 0&&(e=!1);var n=e?ms(t):t,o=n.width,a=n.height;return r.width=o,r.height=a,{width:o,height:a}}var on=function(){function r(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),n=e.obj,o=e.objProp;return n[o]},r.prototype.reassignParamFromPath=function(t,e){var n=this.traversePropertyPath(t),o=n.obj,a=n.objProp;o[a].dispose(),o[a]=e},r.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var n=e.paramPath;return{path:n,tensor:t.getParamFromPath(n)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof lr})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof lr)})},r.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var n=e.path,o=e.tensor;t.reassignParamFromPath(n,o.variable())})},r.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var n=e.path,o=e.tensor,a=Xe(o.dataSync());o.dispose(),t.reassignParamFromPath(n,a)})},r.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},r.prototype.load=function(t){return ne(this,void 0,void 0,function(){return re(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},r.prototype.loadFromUri=function(t){return ne(this,void 0,void 0,function(){var e;return re(this,function(n){switch(n.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,zb(t,this.getDefaultModelName())];case 1:return e=n.sent(),this.loadFromWeightMap(e),[2]}})})},r.prototype.loadFromDisk=function(t){return ne(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f;return re(this,function(h){switch(h.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=rt.getEnv().readFile,n=vf(t,this.getDefaultModelName()),o=n.manifestUri,a=n.modelBaseUri,i=function(d){return Promise.all(d.map(function(p){return e(p).then(function(m){return m.buffer})}))},s=nf.weightsLoaderFactory(i),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[h.sent().toString()]),[4,s(u,a)];case 2:return f=h.sent(),this.loadFromWeightMap(f),[2]}})})},r.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.extractWeights=function(t){var e=this.extractParams(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(a,i){if(!a.nextObj.hasOwnProperty(i))throw new Error("traversePropertyPath - object does not have property "+i+", for path "+t);return{obj:a.nextObj,objProp:i,nextObj:a.nextObj[i]}},{nextObj:this.params}),n=e.obj,o=e.objProp;if(!n||!o||!(n[o]instanceof Te))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:n,objProp:o}},r}();function vt(r,t,e){return $(function(){var n=es(r,t.depthwise_filter,t.pointwise_filter,e,"same");return n=ve(n,t.bias),n})}function Ya(r,t,e){return e===void 0&&(e=!1),$(function(){var n=De(e?ve(Et(r,t.conv0.filters,[2,2],"same"),t.conv0.bias):vt(r,t.conv0,[2,2])),o=vt(n,t.conv1,[1,1]),a=De(ve(n,o)),i=vt(a,t.conv2,[1,1]);return De(ve(n,ve(o,i)))})}function uo(r,t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!0),$(function(){var o=De(e?ve(Et(r,t.conv0.filters,n?[2,2]:[1,1],"same"),t.conv0.bias):vt(r,t.conv0,n?[2,2]:[1,1])),a=vt(o,t.conv1,[1,1]),i=De(ve(o,a)),s=vt(i,t.conv2,[1,1]),u=De(ve(o,ve(a,s))),c=vt(u,t.conv3,[1,1]);return De(ve(o,ve(a,ve(s,c))))})}function kt(r,t,e,n){return e===void 0&&(e="same"),n===void 0&&(n=!1),$(function(){var o=ve(Et(r,t.filters,[1,1],e),t.bias);return n?De(o):o})}function an(r,t){Object.keys(r).forEach(function(e){t.some(function(n){return n.originalPath===e})||r[e].dispose()})}function ha(r,t){return function(e,n,o,a){var i=ot(r(e*n*o*o),[o,o,e,n]),s=Pe(r(n));return t.push({paramPath:a+"/filters"},{paramPath:a+"/bias"}),{filters:i,bias:s}}}function xs(r,t){return function(e,n,o){var a=vn(r(e*n),[e,n]),i=Pe(r(n));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:a,bias:i}}}var mf=function(){function r(t,e,n){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=n}return r}();function ws(r,t){return function(e,n,o){var a=ot(r(9*e),[3,3,e,1]),i=ot(r(e*n),[1,1,e,n]),s=Pe(r(n));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new mf(a,i,s)}}function Cs(r){return function(t){var e=r(t+"/depthwise_filter",4),n=r(t+"/pointwise_filter",4),o=r(t+"/bias",1);return new mf(e,n,o)}}function Cn(r,t){return function(e,n,o){var a=r[e];if(!ua(a,n))throw new Error("expected weightMap["+e+"] to be a Tensor"+n+"D, instead have "+a);return t.push({originalPath:e,paramPath:o||e}),a}}function sn(r){var t=r;function e(o){var a=t.slice(0,o);return t=t.slice(o),a}function n(){return t}return{extractWeights:e,getRemainingWeights:n}}function gf(r,t){var e=ha(r,t),n=ws(r,t);function o(i,s,u,c){c===void 0&&(c=!1);var l=c?e(i,s,3,u+"/conv0"):n(i,s,u+"/conv0"),f=n(s,s,u+"/conv1"),h=n(s,s,u+"/conv2");return{conv0:l,conv1:f,conv2:h}}function a(i,s,u,c){c===void 0&&(c=!1);var l=o(i,s,u,c),f=l.conv0,h=l.conv1,d=l.conv2,p=n(s,s,u+"/conv3");return{conv0:f,conv1:h,conv2:d,conv3:p}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:a}}function Vb(r){var t=[],e=sn(r),n=e.extractWeights,o=e.getRemainingWeights,a=gf(n,t).extractDenseBlock4Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2"),c=a(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u,dense3:c}}}function yf(r){return function(t){var e=r(t+"/filters",4),n=r(t+"/bias",1);return{filters:e,bias:n}}}function bf(r,t){var e=Cn(r,t),n=yf(e),o=Cs(e);function a(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2");return{conv0:c,conv1:l,conv2:f}}function i(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2"),h=o(s+"/conv3");return{conv0:c,conv1:l,conv2:f,conv3:h}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:i}}function Hb(r){var t=[],e=bf(r,t).extractDenseBlock4Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return an(r,t),{params:n,paramMappings:t}}var xf=function(r){ue(t,r);function t(){return r.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceFeatureExtractor - load model before inference");return $(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=Xr(o,a).div(K(255)),s=uo(i,n.dense0,!0);return s=uo(s,n.dense1),s=uo(s,n.dense2),s=uo(s,n.dense3),s=jr(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qe(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Hb(e)},t.prototype.extractParams=function(e){return Vb(e)},t}(on);function Wt(r,t){return $(function(){return ve(aa(r,t.weights),t.bias)})}function Gb(r,t,e){var n=[],o=sn(r),a=o.extractWeights,i=o.getRemainingWeights,s=xs(a,n),u=s(t,e,"fc");if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:n,params:{fc:u}}}function qb(r){var t=[],e=Cn(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:n("fc")};return an(r,t),{params:o,paramMappings:t}}function wf(r){var t={},e={};return Object.keys(r).forEach(function(n){var o=n.startsWith("fc")?e:t;o[n]=r[n]}),{featureExtractorMap:t,classifierMap:e}}var Cf=function(r){ue(t,r);function t(e,n){var o=r.call(this,e)||this;return o._faceFeatureExtractor=n,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return $(function(){var a=e instanceof zo?n.faceFeatureExtractor.forwardInput(e):e;return Wt(a.as2D(a.shape[0],-1),o.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return Gb(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var n=wf(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),qb(a)},t.prototype.extractParams=function(e){var n=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),a=o*n+o,i=e.slice(0,e.length-a),s=e.slice(e.length-a);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(s)},t}(on),Qu=["neutral","happy","sad","angry","fearful","disgusted","surprised"],jb=function(){function r(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);Qu.forEach(function(n,o){e[n]=t[o]})}return r.prototype.asSortedArray=function(){var t=this;return Qu.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,n){return n.probability-e.probability})},r}(),Kb=function(r){ue(t,r);function t(e){return e===void 0&&(e=new xf),r.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var n=this;return $(function(){return nn(n.runNet(e))})},t.prototype.forward=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qe(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(e){return ne(this,void 0,void 0,function(){var n,o,a,i,s=this;return re(this,function(u){switch(u.label){case 0:return[4,qe(e)];case 1:return n=u.sent(),[4,this.forwardInput(n)];case 2:return o=u.sent(),[4,Promise.all(We(o).map(function(c){return ne(s,void 0,void 0,function(){var l;return re(this,function(f){switch(f.label){case 0:return[4,c.data()];case 1:return l=f.sent(),c.dispose(),[2,l]}})})}))];case 3:return a=u.sent(),o.dispose(),i=a.map(function(c){return new jb(c)}),[2,n.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(Cf);function _f(r,t){var e={expressions:t};return Object.assign({},r,e)}function _s(r){return Uo(r)&&r.landmarks instanceof dr&&r.unshiftedLandmarks instanceof dr&&r.alignedRect instanceof gt}function da(r,t){var e=r.detection.box,n=t.shiftBy(e.x,e.y),o=n.align(),a=r.detection.imageDims,i=new gt(r.detection.score,o.rescale(a.reverse()),a),s={landmarks:n,unshiftedLandmarks:t,alignedRect:i};return Object.assign({},r,s)}var Xb=function(){function r(t){t===void 0&&(t={});var e=t.drawLines,n=e===void 0?!0:e,o=t.drawPoints,a=o===void 0?!0:o,i=t.lineWidth,s=t.lineColor,u=t.pointSize,c=t.pointColor;this.drawLines=n,this.drawPoints=a,this.lineWidth=i||1,this.pointSize=u||2,this.lineColor=s||"rgba(0, 255, 255, 1)",this.pointColor=c||"rgba(255, 0, 255, 1)"}return r}(),$b=function(){function r(t,e){e===void 0&&(e={}),this.faceLandmarks=t,this.options=new Xb(e)}return r.prototype.draw=function(t){var e=qt(t),n=this.options,o=n.drawLines,a=n.drawPoints,i=n.lineWidth,s=n.lineColor,u=n.pointSize,c=n.pointColor;if(o&&this.faceLandmarks instanceof sf&&(e.strokeStyle=s,e.lineWidth=i,En(e,this.faceLandmarks.getJawOutline()),En(e,this.faceLandmarks.getLeftEyeBrow()),En(e,this.faceLandmarks.getRightEyeBrow()),En(e,this.faceLandmarks.getNose()),En(e,this.faceLandmarks.getLeftEye(),!0),En(e,this.faceLandmarks.getRightEye(),!0),En(e,this.faceLandmarks.getMouth(),!0)),a){e.strokeStyle=c,e.fillStyle=c;var l=function(f){e.beginPath(),e.arc(f.x,f.y,u,0,2*Math.PI),e.fill()};this.faceLandmarks.positions.forEach(l)}},r}();function Xw(r,t){var e=Array.isArray(t)?t:[t];e.forEach(function(n){var o=n instanceof dr?n:_s(n)?n.landmarks:void 0;if(!o)throw new Error("drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof");new $b(o).draw(r)})}function Yb(r,t){var e=ha(r,t),n=ws(r,t);function o(i,s,u){var c=n(i,s,u+"/separable_conv0"),l=n(s,s,u+"/separable_conv1"),f=e(i,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:f}}function a(i,s){var u=n(i,i,s+"/separable_conv0"),c=n(i,i,s+"/separable_conv1"),l=n(i,i,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:n,extractReductionBlockParams:o,extractMainBlockParams:a}}function Jb(r,t){var e=[],n=sn(r),o=n.extractWeights,a=n.getRemainingWeights,i=Yb(o,e),s=i.extractConvParams,u=i.extractSeparableConvParams,c=i.extractReductionBlockParams,l=i.extractMainBlockParams,f=s(3,32,3,"entry_flow/conv_in"),h=c(32,64,"entry_flow/reduction_block_0"),d=c(64,128,"entry_flow/reduction_block_1"),p={conv_in:f,reduction_block_0:h,reduction_block_1:d},m={};Fr(t,0,1).forEach(function(x){m["main_block_"+x]=l(128,"middle_flow/main_block_"+x)});var v=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),b={reduction_block:v,separable_conv:g};if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:e,params:{entry_flow:p,middle_flow:m,exit_flow:b}}}function Qb(r,t){var e=Cn(r,t),n=yf(e),o=Cs(e);function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=n(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:n,extractSeparableConvParams:o,extractReductionBlockParams:a,extractMainBlockParams:i}}function Zb(r,t){var e=[],n=Qb(r,e),o=n.extractConvParams,a=n.extractSeparableConvParams,i=n.extractReductionBlockParams,s=n.extractMainBlockParams,u=o("entry_flow/conv_in"),c=i("entry_flow/reduction_block_0"),l=i("entry_flow/reduction_block_1"),f={conv_in:u,reduction_block_0:c,reduction_block_1:l},h={};Fr(t,0,1).forEach(function(v){h["main_block_"+v]=s("middle_flow/main_block_"+v)});var d=i("exit_flow/reduction_block"),p=a("exit_flow/separable_conv"),m={reduction_block:d,separable_conv:p};return an(r,e),{params:{entry_flow:f,middle_flow:h,exit_flow:m},paramMappings:e}}function Ef(r,t,e){return ve(Et(r,t.filters,e,"same"),t.bias)}function Ja(r,t,e){e===void 0&&(e=!0);var n=e?De(r):r;return n=vt(n,t.separable_conv0,[1,1]),n=vt(De(n),t.separable_conv1,[1,1]),n=He(n,[3,3],[2,2],"same"),n=ve(n,Ef(r,t.expansion_conv,[2,2])),n}function ex(r,t){var e=vt(De(r),t.separable_conv0,[1,1]);return e=vt(De(e),t.separable_conv1,[1,1]),e=vt(De(e),t.separable_conv2,[1,1]),e=ve(e,r),e}var tx=function(r){ue(t,r);function t(e){var n=r.call(this,"TinyXception")||this;return n._numMainBlocks=e,n}return t.prototype.forwardInput=function(e){var n=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return $(function(){var a=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],s=Xr(a,i).div(K(256)),u=De(Ef(s,o.entry_flow.conv_in,[2,2]));return u=Ja(u,o.entry_flow.reduction_block_0,!1),u=Ja(u,o.entry_flow.reduction_block_1),Fr(n._numMainBlocks,0,1).forEach(function(c){u=ex(u,o.middle_flow["main_block_"+c])}),u=Ja(u,o.exit_flow.reduction_block),u=De(vt(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qe(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Zb(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return Jb(e,this._numMainBlocks)},t}(on);function nx(r){var t=[],e=sn(r),n=e.extractWeights,o=e.getRemainingWeights,a=xs(n,t),i=a(512,1,"fc/age"),s=a(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:i,gender:s}}}}function rx(r){var t=[],e=Cn(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:{age:n("fc/age"),gender:n("fc/gender")}};return an(r,t),{params:o,paramMappings:t}}var Vo;(function(r){r.FEMALE="female",r.MALE="male"})(Vo||(Vo={}));var ox=function(r){ue(t,r);function t(e){e===void 0&&(e=new tx(2));var n=r.call(this,"AgeGenderNet")||this;return n._faceFeatureExtractor=e,n}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return $(function(){var a=e instanceof zo?n.faceFeatureExtractor.forwardInput(e):e,i=jr(a,[7,7],[2,2],"valid").as2D(a.shape[0],-1),s=Wt(i,o.fc.age).as1D(),u=Wt(i,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var n=this;return $(function(){var o=n.runNet(e),a=o.age,i=o.gender;return{age:a,gender:nn(i)}})},t.prototype.forward=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qe(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return ne(this,void 0,void 0,function(){var n,o,a,i,s,u,c=this;return re(this,function(l){switch(l.label){case 0:return[4,qe(e)];case 1:return n=l.sent(),[4,this.forwardInput(n)];case 2:return o=l.sent(),a=We(o.age),i=We(o.gender),s=a.map(function(f,h){return{ageTensor:f,genderTensor:i[h]}}),[4,Promise.all(s.map(function(f){var h=f.ageTensor,d=f.genderTensor;return ne(c,void 0,void 0,function(){var p,m,v,g,b;return re(this,function(x){switch(x.label){case 0:return[4,h.data()];case 1:return p=x.sent()[0],[4,d.data()];case 2:return m=x.sent()[0],v=m>.5,g=v?Vo.MALE:Vo.FEMALE,b=v?m:1-m,h.dispose(),d.dispose(),[2,{age:p,gender:g,genderProbability:b}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,n.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return nx(e)},t.prototype.extractParamsFromWeigthMap=function(e){var n=wf(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),rx(a)},t.prototype.extractParams=function(e){var n=1539,o=e.slice(0,e.length-n),a=e.slice(e.length-n);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(a)},t}(on),Rf=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.postProcess=function(e,n,o){var a=o.map(function(s){var u=s.width,c=s.height,l=n/Math.max(c,u);return{width:u*l,height:c*l}}),i=a.length;return $(function(){var s=function(h,d){return mt([Vt([68],h),Vt([68],d)],1).as2D(1,136).as1D()},u=function(h,d){var p=a[h],m=p.width,v=p.height;return d(m,v)?Math.abs(m-v)/2:0},c=function(h){return u(h,function(d,p){return d<p})},l=function(h){return u(h,function(d,p){return p<d})},f=e.mul(Vt([i,136],n)).sub(mt(Array.from(Array(i),function(h,d){return s(c(d),l(d))}))).div(mt(Array.from(Array(i),function(h,d){return s(a[d].width,a[d].height)})));return f})},t.prototype.forwardInput=function(e){var n=this;return $(function(){var o=n.runNet(e);return n.postProcess(o,e.inputSize,e.inputDimensions.map(function(a){var i=a[0],s=a[1];return{height:i,width:s}}))})},t.prototype.forward=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qe(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(e){return ne(this,void 0,void 0,function(){var n,o,a,i=this;return re(this,function(s){switch(s.label){case 0:return[4,qe(e)];case 1:return n=s.sent(),o=$(function(){return We(i.forwardInput(n))}),[4,Promise.all(o.map(function(u,c){return ne(i,void 0,void 0,function(){var l,f,h,d,p;return re(this,function(m){switch(m.label){case 0:return h=(f=Array).from,[4,u.data()];case 1:return l=h.apply(f,[m.sent()]),d=l.filter(function(v,g){return ju(g)}),p=l.filter(function(v,g){return!ju(g)}),[2,new sf(Array(68).fill(0).map(function(v,g){return new xe(d[g],p[g])}),{height:n.getInputHeight(c),width:n.getInputWidth(c)})]}})})}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(Cf),Sf=function(r){ue(t,r);function t(e){return e===void 0&&(e=new xf),r.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t}(Rf);function ax(r){var t=[],e=bf(r,t).extractDenseBlock3Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return an(r,t),{params:n,paramMappings:t}}function ix(r){var t=[],e=sn(r),n=e.extractWeights,o=e.getRemainingWeights,a=gf(n,t).extractDenseBlock3Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u}}}var sx=function(r){ue(t,r);function t(){return r.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("TinyFaceFeatureExtractor - load model before inference");return $(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=Xr(o,a).div(K(255)),s=Ya(i,n.dense0,!0);return s=Ya(s,n.dense1),s=Ya(s,n.dense2),s=jr(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qe(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return ax(e)},t.prototype.extractParams=function(e){return ix(e)},t}(on),ux=function(r){ue(t,r);function t(e){return e===void 0&&(e=new sx),r.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t}(Rf);(function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(Sf);function cx(r,t){return ve(tt(r,t.weights),t.biases)}function Es(r,t,e,n,o){o===void 0&&(o="same");var a=t.conv,i=a.filters,s=a.bias,u=Et(r,i,e,o);return u=ve(u,s),u=cx(u,t.scale),n?De(u):u}function lx(r,t){return Es(r,t,[1,1],!0)}function kf(r,t){return Es(r,t,[1,1],!1)}function If(r,t){return Es(r,t,[2,2],!0,"valid")}function fx(r,t){function e(s,u,c){var l=r(s),f=l.length/(u*c*c);if(Cb(f))throw new Error("depth has to be an integer: "+f+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return $(function(){return yn(ot(l,[u,f,c,c]),[2,3,1,0])})}function n(s,u,c,l){var f=e(s,u,c),h=Pe(r(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:f,bias:h}}function o(s,u){var c=Pe(r(s)),l=Pe(r(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function a(s,u,c,l){var f=n(s,u,c,l+"/conv"),h=o(u,l+"/scale");return{conv:f,scale:h}}function i(s,u,c,l,f){f===void 0&&(f=!1);var h=a((f?.5:1)*s,u,c,l+"/conv1"),d=a(s,u,c,l+"/conv2");return{conv1:h,conv2:d}}return{extractConvLayerParams:a,extractResidualLayerParams:i}}function hx(r){var t=sn(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=fx(e,o),i=a.extractConvLayerParams,s=a.extractResidualLayerParams,u=i(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),f=s(9216,32,3,"conv32_3"),h=s(36864,64,3,"conv64_down",!0),d=s(36864,64,3,"conv64_1"),p=s(36864,64,3,"conv64_2"),m=s(36864,64,3,"conv64_3"),v=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),b=s(147456,128,3,"conv128_2"),x=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),C=s(589824,256,3,"conv256_down_out"),I=$(function(){return yn(vn(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),n().length!==0)throw new Error("weights remaing after extract: "+n().length);var k={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:f,conv64_down:h,conv64_1:d,conv64_2:p,conv64_3:m,conv128_down:v,conv128_1:g,conv128_2:b,conv256_down:x,conv256_1:y,conv256_2:w,conv256_down_out:C,fc:I};return{params:k,paramMappings:o}}function dx(r,t){var e=Cn(r,t);function n(i){var s=e(i+"/scale/weights",1),u=e(i+"/scale/biases",1);return{weights:s,biases:u}}function o(i){var s=e(i+"/conv/filters",4),u=e(i+"/conv/bias",1),c=n(i);return{conv:{filters:s,bias:u},scale:c}}function a(i){return{conv1:o(i+"/conv1"),conv2:o(i+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:a}}function px(r){var t=[],e=dx(r,t),n=e.extractConvLayerParams,o=e.extractResidualLayerParams,a=n("conv32_down"),i=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),f=o("conv64_2"),h=o("conv64_3"),d=o("conv128_down"),p=o("conv128_1"),m=o("conv128_2"),v=o("conv256_down"),g=o("conv256_1"),b=o("conv256_2"),x=o("conv256_down_out"),y=r.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!wb(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var w={conv32_down:a,conv32_1:i,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:f,conv64_3:h,conv128_down:d,conv128_1:p,conv128_2:m,conv256_down:v,conv256_1:g,conv256_2:b,conv256_down_out:x,fc:y};return an(r,t),{params:w,paramMappings:t}}function Pt(r,t){var e=lx(r,t.conv1);return e=kf(e,t.conv2),e=ve(e,r),e=De(e),e}function co(r,t){var e=If(r,t.conv1);e=kf(e,t.conv2);var n=jr(r,2,2,"valid"),o=Se(n.shape),a=n.shape[3]!==e.shape[3],i=n.shape[1]!==e.shape[1]||n.shape[2]!==e.shape[2];if(i){var s=kr(e.shape);s[1]=1;var u=Se(s);e=Le([e,u],1);var c=kr(e.shape);c[2]=1;var l=Se(c);e=Le([e,l],2)}return n=a?Le([n,o],3):n,e=ve(n,e),e=De(e),e}var vx=function(r){ue(t,r);function t(){return r.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceRecognitionNet - load model before inference");return $(function(){var o=e.toBatchTensor(150,!0).toFloat(),a=[122.782,117.001,104.298],i=Xr(o,a).div(K(256)),s=If(i,n.conv32_down);s=He(s,3,2,"valid"),s=Pt(s,n.conv32_1),s=Pt(s,n.conv32_2),s=Pt(s,n.conv32_3),s=co(s,n.conv64_down),s=Pt(s,n.conv64_1),s=Pt(s,n.conv64_2),s=Pt(s,n.conv64_3),s=co(s,n.conv128_down),s=Pt(s,n.conv128_1),s=Pt(s,n.conv128_2),s=co(s,n.conv256_down),s=Pt(s,n.conv256_1),s=Pt(s,n.conv256_2),s=co(s,n.conv256_down_out);var u=s.mean([1,2]),c=aa(u,n.fc);return c})},t.prototype.forward=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qe(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return ne(this,void 0,void 0,function(){var n,o,a,i=this;return re(this,function(s){switch(s.label){case 0:return[4,qe(e)];case 1:return n=s.sent(),o=$(function(){return We(i.forwardInput(n))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return px(e)},t.prototype.extractParams=function(e){return hx(e)},t}(on);function Tf(r,t){var e={descriptor:t};return Object.assign({},r,e)}function Df(r,t){var e={age:t};return Object.assign({},r,e)}function Af(r,t,e){var n={gender:t,genderProbability:e};return Object.assign({},r,n)}var Nf=function(){function r(t){var e=t===void 0?{}:t,n=e.minFaceSize,o=e.scaleFactor,a=e.maxNumScales,i=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=n||20,this._scaleFactor=o||.709,this._maxNumScales=a||10,this._scoreThresholds=i||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function mx(r,t){function e(u,c){var l=ot(r(9*u),[3,3,u,1]),f=Pe(r(u)),h=Pe(r(u)),d=Pe(r(u)),p=Pe(r(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:f,batch_norm_offset:h,batch_norm_mean:d,batch_norm_variance:p}}function n(u,c,l,f,h){var d=ot(r(u*c*l*l),[l,l,u,c]),p=Pe(r(c));return t.push({paramPath:f+"/filters"},{paramPath:f+"/"+(h?"batch_norm_offset":"bias")}),{filters:d,bias:p}}function o(u,c,l,f){var h=n(u,c,l,f,!0),d=h.filters,p=h.bias;return{filters:d,batch_norm_offset:p}}function a(u,c,l){var f=e(u,l+"/depthwise_conv"),h=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:f,pointwise_conv:h}}function i(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=a(32,64,"mobilenetv1/conv_1"),l=a(64,128,"mobilenetv1/conv_2"),f=a(128,128,"mobilenetv1/conv_3"),h=a(128,256,"mobilenetv1/conv_4"),d=a(256,256,"mobilenetv1/conv_5"),p=a(256,512,"mobilenetv1/conv_6"),m=a(512,512,"mobilenetv1/conv_7"),v=a(512,512,"mobilenetv1/conv_8"),g=a(512,512,"mobilenetv1/conv_9"),b=a(512,512,"mobilenetv1/conv_10"),x=a(512,512,"mobilenetv1/conv_11"),y=a(512,1024,"mobilenetv1/conv_12"),w=a(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:m,conv_8:v,conv_9:g,conv_10:b,conv_11:x,conv_12:y,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),f=o(128,256,3,"prediction_layer/conv_3"),h=o(256,128,1,"prediction_layer/conv_4"),d=o(128,256,3,"prediction_layer/conv_5"),p=o(256,64,1,"prediction_layer/conv_6"),m=o(64,128,3,"prediction_layer/conv_7"),v=n(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=n(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),b=n(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),x=n(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=n(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=n(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),C=n(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),I=n(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),k=n(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),S=n(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),R=n(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),A=n(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),D={box_encoding_predictor:v,class_predictor:g},L={box_encoding_predictor:b,class_predictor:x},B={box_encoding_predictor:y,class_predictor:w},O={box_encoding_predictor:C,class_predictor:I},U={box_encoding_predictor:k,class_predictor:S},V={box_encoding_predictor:R,class_predictor:A};return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:m,box_predictor_0:D,box_predictor_1:L,box_predictor_2:B,box_predictor_3:O,box_predictor_4:U,box_predictor_5:V}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:s}}function gx(r){var t=[],e=sn(r),n=e.extractWeights,o=e.getRemainingWeights,a=mx(n,t),i=a.extractMobilenetV1Params,s=a.extractPredictionLayerParams,u=i(),c=s(),l=Wi(n(5118*4),[1,5118,4]),f={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:f},paramMappings:t}}function yx(r,t){var e=Cn(r,t);function n(c,l,f){var h=e(c+"/Conv2d_"+l+"_pointwise/weights",4,f+"/filters"),d=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,f+"/batch_norm_offset");return{filters:h,batch_norm_offset:d}}function o(c){var l="mobilenetv1/conv_"+c,f="MobilenetV1/Conv2d_"+c+"_depthwise",h=l+"/depthwise_conv",d=l+"/pointwise_conv",p=e(f+"/depthwise_weights",4,h+"/filters"),m=e(f+"/BatchNorm/gamma",1,h+"/batch_norm_scale"),v=e(f+"/BatchNorm/beta",1,h+"/batch_norm_offset"),g=e(f+"/BatchNorm/moving_mean",1,h+"/batch_norm_mean"),b=e(f+"/BatchNorm/moving_variance",1,h+"/batch_norm_variance");return{depthwise_conv:{filters:p,batch_norm_scale:m,batch_norm_offset:v,batch_norm_mean:g,batch_norm_variance:b},pointwise_conv:n("MobilenetV1",c,d)}}function a(){return{conv_0:n("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function i(c,l){var f=e(c+"/weights",4,l+"/filters"),h=e(c+"/biases",1,l+"/bias");return{filters:f,bias:h}}function s(c){var l=i("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),f=i("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:f}}function u(){return{conv_0:n("Prediction",0,"prediction_layer/conv_0"),conv_1:n("Prediction",1,"prediction_layer/conv_1"),conv_2:n("Prediction",2,"prediction_layer/conv_2"),conv_3:n("Prediction",3,"prediction_layer/conv_3"),conv_4:n("Prediction",4,"prediction_layer/conv_4"),conv_5:n("Prediction",5,"prediction_layer/conv_5"),conv_6:n("Prediction",6,"prediction_layer/conv_6"),conv_7:n("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:u}}function bx(r){var t=[],e=yx(r,t),n=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,a=r["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!ca(a))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+a);var i={mobilenetv1:n(),prediction_layer:o(),output_layer:{extra_dim:a}};return an(r,t),{params:i,paramMappings:t}}function Ot(r,t,e){return $(function(){var n=Et(r,t.filters,e,"same");return n=ve(n,t.batch_norm_offset),Yi(n,0,6)})}var xx=.0010000000474974513;function wx(r,t,e){return $(function(){var n=oa(r,t.filters,e,"same");return n=El(n,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,xx),Yi(n,0,6)})}function Cx(r){return[2,4,6,12].some(function(t){return t===r})?[2,2]:[1,1]}function _x(r,t){return $(function(){var e=null,n=Ot(r,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(a,i){var s=i+1,u=Cx(s);n=wx(n,a.depthwise_conv,u),n=Ot(n,a.pointwise_conv,[1,1]),s===11&&(e=n)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:n,conv11:e}})}function Ex(r,t,e,n,o){var a=r.shape[0],i=Math.min(e,a),s=t.map(function(l,f){return{score:l,boxIndex:f}}).filter(function(l){return l.score>o}).sort(function(l,f){return f.score-l.score}),u=function(l){return l<=n?1:0},c=[];return s.forEach(function(l){if(!(c.length>=i)){for(var f=l.score,h=c.length-1;h>=0;--h){var d=Rx(r,l.boxIndex,c[h]);if(d!==0&&(l.score*=u(d),l.score<=o))break}f===l.score&&c.push(l.boxIndex)}}),c}function Rx(r,t,e){var n=r.arraySync(),o=Math.min(n[t][0],n[t][2]),a=Math.min(n[t][1],n[t][3]),i=Math.max(n[t][0],n[t][2]),s=Math.max(n[t][1],n[t][3]),u=Math.min(n[e][0],n[e][2]),c=Math.min(n[e][1],n[e][3]),l=Math.max(n[e][0],n[e][2]),f=Math.max(n[e][1],n[e][3]),h=(i-o)*(s-a),d=(l-u)*(f-c);if(h<=0||d<=0)return 0;var p=Math.max(o,u),m=Math.max(a,c),v=Math.min(i,l),g=Math.min(s,f),b=Math.max(v-p,0)*Math.max(g-m,0);return b/(h+d-b)}function Sx(r){var t=We(yn(r,[1,0])),e=[ze(t[2],t[0]),ze(t[3],t[1])],n=[ve(t[0],Rt(e[0],K(2))),ve(t[1],Rt(e[1],K(2)))];return{sizes:e,centers:n}}function kx(r,t){var e=Sx(r),n=e.sizes,o=e.centers,a=We(yn(t,[1,0])),i=Rt(tt(bi(Rt(a[2],K(5))),n[0]),K(2)),s=ve(tt(Rt(a[0],K(10)),n[0]),o[0]),u=Rt(tt(bi(Rt(a[3],K(5))),n[1]),K(2)),c=ve(tt(Rt(a[1],K(10)),n[1]),o[1]);return yn(mt([ze(s,i),ze(c,u),ve(s,i),ve(c,u)]),[1,0])}function Ix(r,t,e){return $(function(){var n=r.shape[0],o=kx(St(nr(e.extra_dim,[n,1,1]),[-1,4]),St(r,[-1,4]));o=St(o,[n,o.shape[0]/n,4]);var a=xl(Ht(t,[0,0,1],[-1,-1,-1])),i=Ht(a,[0,0,0],[-1,-1,1]);i=St(i,[n,i.shape[1]]);var s=We(o),u=We(i);return{boxes:s,scores:u}})}function $n(r,t){return $(function(){var e=r.shape[0],n=St(kt(r,t.box_encoding_predictor),[e,-1,1,4]),o=St(kt(r,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:n,classPrediction:o}})}function Tx(r,t,e){return $(function(){var n=Ot(r,e.conv_0,[1,1]),o=Ot(n,e.conv_1,[2,2]),a=Ot(o,e.conv_2,[1,1]),i=Ot(a,e.conv_3,[2,2]),s=Ot(i,e.conv_4,[1,1]),u=Ot(s,e.conv_5,[2,2]),c=Ot(u,e.conv_6,[1,1]),l=Ot(c,e.conv_7,[2,2]),f=$n(t,e.box_predictor_0),h=$n(r,e.box_predictor_1),d=$n(o,e.box_predictor_2),p=$n(i,e.box_predictor_3),m=$n(u,e.box_predictor_4),v=$n(l,e.box_predictor_5),g=Le([f.boxPredictionEncoding,h.boxPredictionEncoding,d.boxPredictionEncoding,p.boxPredictionEncoding,m.boxPredictionEncoding,v.boxPredictionEncoding],1),b=Le([f.classPrediction,h.classPrediction,d.classPrediction,p.classPrediction,m.classPrediction,v.classPrediction],1);return{boxPredictions:g,classPredictions:b}})}var $r=function(){function r(t){var e=t===void 0?{}:t,n=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=n||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}(),Ff=function(r){ue(t,r);function t(){return r.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("SsdMobilenetv1 - load model before inference");return $(function(){var o=e.toBatchTensor(512,!1).toFloat(),a=ze(tt(o,K(.007843137718737125)),K(1)),i=_x(a,n.mobilenetv1),s=Tx(i.out,i.conv11,n.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return Ix(u,c,n.output_layer)})},t.prototype.forward=function(e){return ne(this,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,qe(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(e,n){return n===void 0&&(n={}),ne(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,h,d,p,m,v,g,b,x,y,w,C,I,k;return re(this,function(S){switch(S.label){case 0:return o=new $r(n),a=o.maxResults,i=o.minConfidence,[4,qe(e)];case 1:for(s=S.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,f=c[0],h=l[0],d=1;d<c.length;d++)c[d].dispose(),l[d].dispose();return v=(m=Array).from,[4,h.data()];case 2:return p=v.apply(m,[S.sent()]),g=.5,b=Ex(f,p,a,g,i),x=s.getReshapedInputDimensions(0),y=s.inputSize,w=y/x.width,C=y/x.height,I=f.arraySync(),k=b.map(function(R){var A=[Math.max(0,I[R][0]),Math.min(1,I[R][2])].map(function(V){return V*C}),D=A[0],L=A[1],B=[Math.max(0,I[R][1]),Math.min(1,I[R][3])].map(function(V){return V*w}),O=B[0],U=B[1];return new gt(p[R],new ds(O,D,U-O,L-D),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),f.dispose(),h.dispose(),[2,k]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return bx(e)},t.prototype.extractParams=function(e){return gx(e)},t}(on);(function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(Ff);var Dx=.4,Ax=[new xe(.738768,.874946),new xe(2.42204,2.65704),new xe(4.30971,7.04493),new xe(10.246,4.59428),new xe(12.6868,11.8741)],Nx=[new xe(1.603231,2.094468),new xe(6.041143,7.080126),new xe(2.882459,3.518061),new xe(4.266906,5.178857),new xe(9.041765,10.66308)],Fx=[117.001,114.697,97.404],Px="tiny_yolov2_model",Ox="tiny_yolov2_separable_conv_model",lo=function(r){return typeof r=="number"};function Mx(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!lo(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(t){return t||{}}).every(function(t){return lo(t.x)&&lo(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(lo)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function Rs(r){return $(function(){var t=tt(r,K(.10000000149011612));return ve(De(ze(r,t)),t)})}function cn(r,t){return $(function(){var e=Ln(r,[[0,0],[1,1],[1,1],[0,0]]);return e=Et(e,t.conv.filters,[1,1],"valid"),e=ze(e,t.bn.sub),e=tt(e,t.bn.truediv),e=ve(e,t.conv.bias),Rs(e)})}function ln(r,t){return $(function(){var e=Ln(r,[[0,0],[1,1],[1,1],[0,0]]);return e=es(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=ve(e,t.bias),Rs(e)})}function Bx(r,t){var e=ha(r,t);function n(i,s){var u=Pe(r(i)),c=Pe(r(i));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(i,s,u){var c=e(i,s,3,u+"/conv"),l=n(s,u+"/bn");return{conv:c,bn:l}}var a=ws(r,t);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:a}}function Lx(r,t,e,n){var o=sn(r),a=o.extractWeights,i=o.getRemainingWeights,s=[],u=Bx(a,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,f=u.extractSeparableConvParams,h;if(t.withSeparableConvs){var d=n[0],p=n[1],m=n[2],v=n[3],g=n[4],b=n[5],x=n[6],y=n[7],w=n[8],C=t.isFirstLayerConv2d?c(d,p,3,"conv0"):f(d,p,"conv0"),I=f(p,m,"conv1"),k=f(m,v,"conv2"),S=f(v,g,"conv3"),R=f(g,b,"conv4"),A=f(b,x,"conv5"),D=y?f(x,y,"conv6"):void 0,L=w?f(y,w,"conv7"):void 0,B=c(w||y||x,5*e,1,"conv8");h={conv0:C,conv1:I,conv2:k,conv3:S,conv4:R,conv5:A,conv6:D,conv7:L,conv8:B}}else{var d=n[0],p=n[1],m=n[2],v=n[3],g=n[4],b=n[5],x=n[6],y=n[7],w=n[8],C=l(d,p,"conv0"),I=l(p,m,"conv1"),k=l(m,v,"conv2"),S=l(v,g,"conv3"),R=l(g,b,"conv4"),A=l(b,x,"conv5"),D=l(x,y,"conv6"),L=l(y,w,"conv7"),B=c(w,5*e,1,"conv8");h={conv0:C,conv1:I,conv2:k,conv3:S,conv4:R,conv5:A,conv6:D,conv7:L,conv8:B}}if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{params:h,paramMappings:s}}function Wx(r,t){var e=Cn(r,t);function n(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function a(s){var u=o(s+"/conv"),c=n(s+"/bn");return{conv:u,bn:c}}var i=Cs(e);return{extractConvParams:o,extractConvWithBatchNormParams:a,extractSeparableConvParams:i}}function Ux(r,t){var e=[],n=Wx(r,e),o=n.extractConvParams,a=n.extractConvWithBatchNormParams,i=n.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:o("conv8")}}else s={conv0:a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:a("conv6"),conv7:a("conv7"),conv8:o("conv8")};return an(r,e),{params:s,paramMappings:e}}var Zu;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(Zu||(Zu={}));var Ss=function(){function r(t){var e=t===void 0?{}:t,n=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=n||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}(),Pf=function(r){ue(t,r);function t(e){var n=r.call(this,"TinyYolov2")||this;return Mx(e),n._config=e,n}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,n){var o=cn(e,n.conv0);return o=He(o,[2,2],[2,2],"same"),o=cn(o,n.conv1),o=He(o,[2,2],[2,2],"same"),o=cn(o,n.conv2),o=He(o,[2,2],[2,2],"same"),o=cn(o,n.conv3),o=He(o,[2,2],[2,2],"same"),o=cn(o,n.conv4),o=He(o,[2,2],[2,2],"same"),o=cn(o,n.conv5),o=He(o,[2,2],[1,1],"same"),o=cn(o,n.conv6),o=cn(o,n.conv7),kt(o,n.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,n){var o=this.config.isFirstLayerConv2d?Rs(kt(e,n.conv0,"valid",!1)):ln(e,n.conv0);return o=He(o,[2,2],[2,2],"same"),o=ln(o,n.conv1),o=He(o,[2,2],[2,2],"same"),o=ln(o,n.conv2),o=He(o,[2,2],[2,2],"same"),o=ln(o,n.conv3),o=He(o,[2,2],[2,2],"same"),o=ln(o,n.conv4),o=He(o,[2,2],[2,2],"same"),o=ln(o,n.conv5),o=He(o,[2,2],[1,1],"same"),o=n.conv6?ln(o,n.conv6):o,o=n.conv7?ln(o,n.conv7):o,kt(o,n.conv8,"valid",!1)},t.prototype.forwardInput=function(e,n){var o=this,a=this.params;if(!a)throw new Error("TinyYolov2 - load model before inference");return $(function(){var i=e.toBatchTensor(n,!1).toFloat();return i=o.config.meanRgb?Xr(i,o.config.meanRgb):i,i=i.div(K(256)),o.config.withSeparableConvs?o.runMobilenet(i,a):o.runTinyYolov2(i,a)})},t.prototype.forward=function(e,n){return ne(this,void 0,void 0,function(){var o;return re(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,qe(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent()]}})})},t.prototype.detect=function(e,n){return n===void 0&&(n={}),ne(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,h,d,p,m,v,g,b=this;return re(this,function(x){switch(x.label){case 0:return o=new Ss(n),a=o.inputSize,i=o.scoreThreshold,[4,qe(e)];case 1:return s=x.sent(),[4,this.forwardInput(s,a)];case 2:return u=x.sent(),c=$(function(){return We(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),i)];case 3:return f=x.sent(),u.dispose(),c.dispose(),h=f.map(function(y){return y.box}),d=f.map(function(y){return y.score}),p=f.map(function(y){return y.classScore}),m=f.map(function(y){return b.config.classes[y.label]}),v=Pr(h.map(function(y){return y.rescale(a)}),d,this.config.iouThreshold,!0),g=v.map(function(y){return new af(d[y],p[y],m[y],h[y],l)}),[2,g]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return Ux(e,this.config)},t.prototype.extractParams=function(e){var n=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=n?n.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return Lx(e,this.config,this.boxEncodingSize,n)},t.prototype.extractBoxes=function(e,n,o){return ne(this,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p,m,v,g,b,x,y,w,C,I,k,S,R,A,D,L,B,O,U,V,z=this;return re(this,function(H){switch(H.label){case 0:return a=n.width,i=n.height,s=Math.max(a,i),u=s/a,c=s/i,l=e.shape[1],f=this.config.anchors.length,h=$(function(){var G=e.reshape([l,l,f,z.boxEncodingSize]),j=G.slice([0,0,0,0],[l,l,f,4]),Q=G.slice([0,0,0,4],[l,l,f,1]),X=z.withClassScores?nn(G.slice([0,0,0,5],[l,l,f,z.config.classes.length]),3):K(0);return[j,Q,X]}),d=h[0],p=h[1],m=h[2],v=[],[4,p.array()];case 1:return g=H.sent(),[4,d.array()];case 2:b=H.sent(),x=0,H.label=3;case 3:if(!(x<l))return[3,12];y=0,H.label=4;case 4:if(!(y<l))return[3,11];w=0,H.label=5;case 5:return w<f?(C=$a(g[x][y][w][0]),!o||C>o?(I=(y+$a(b[x][y][w][0]))/l*u,k=(x+$a(b[x][y][w][1]))/l*c,S=Math.exp(b[x][y][w][2])*this.config.anchors[w].x/l*u,R=Math.exp(b[x][y][w][3])*this.config.anchors[w].y/l*c,A=I-S/2,D=k-R/2,L={row:x,col:y,anchor:w},this.withClassScores?[4,this.extractPredictedClass(m,L)]:[3,7]):[3,9]):[3,10];case 6:return V=H.sent(),[3,8];case 7:V={classScore:1,label:0},H.label=8;case 8:B=V,O=B.classScore,U=B.label,v.push(Je({box:new la(A,D,A+S,D+R),score:C,classScore:C*O,label:U},L)),H.label=9;case 9:return w++,[3,5];case 10:return y++,[3,4];case 11:return x++,[3,3];case 12:return d.dispose(),p.dispose(),m.dispose(),[2,v]}})})},t.prototype.extractPredictedClass=function(e,n){return ne(this,void 0,void 0,function(){var o,a,i,s;return re(this,function(u){switch(u.label){case 0:return o=n.row,a=n.col,i=n.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][a][i][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}(on),zx=function(r){ue(t,r);function t(e){e===void 0&&(e=!0);var n=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:Dx,classes:["face"]},e?{anchors:Nx,meanRgb:Fx}:{anchors:Ax,withClassScores:!0});return n=r.call(this,o)||this,n}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return ne(this,void 0,void 0,function(){var o;return re(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new gt(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?Ox:Px},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Pf),Vx=function(r){ue(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t}(Ss),Yr=function(){function r(){}return r.prototype.then=function(t){return ne(this,void 0,void 0,function(){var e;return re(this,function(n){switch(n.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[n.sent()])]}})})},r.prototype.run=function(){return ne(this,void 0,void 0,function(){return re(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},r}();function pa(r,t,e,n,o){return o===void 0&&(o=function(a){var i=a.alignedRect;return i}),ne(this,void 0,void 0,function(){var a,i,s,u,c;return re(this,function(l){switch(l.label){case 0:return a=r.map(function(f){return _s(f)?o(f):f.detection}),s=n,s?[3,5]:t instanceof Te?[4,bs(t,a)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,ys(t,a)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return i=s,[4,e(i)];case 6:return c=l.sent(),i.forEach(function(f){return f instanceof Te&&f.dispose()}),[2,c]}})})}function ks(r,t,e,n,o){return ne(this,void 0,void 0,function(){var a=this;return re(this,function(i){return[2,pa([r],t,function(s){return ne(a,void 0,void 0,function(){return re(this,function(u){return[2,e(s[0])]})})},n,o)]})})}function Hx(r){return $(function(){return mt(We(r,3).reverse(),3)})}var fo=2,Ho=12;function Gx(r,t){var e=ha(r,t),n=xs(r,t);function o(c,l){var f=Pe(r(c));return t.push({paramPath:l}),f}function a(c,l,f){f===void 0&&(f=!1);var h=e(c[0],c[1],3,l+"/conv1"),d=o(c[1],l+"/prelu1_alpha"),p=e(c[1],c[2],3,l+"/conv2"),m=o(c[2],l+"/prelu2_alpha"),v=e(c[2],c[3],f?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:d,conv2:p,prelu2_alpha:m,conv3:v,prelu3_alpha:g}}function i(){var c=a([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),f=e(32,4,1,"pnet/conv4_2");return Je(Je({},c),{conv4_1:l,conv4_2:f})}function s(){var c=a([3,28,48,64],"rnet",!0),l=n(576,128,"rnet/fc1"),f=o(128,"rnet/prelu4_alpha"),h=n(128,2,"rnet/fc2_1"),d=n(128,4,"rnet/fc2_2");return Je(Je({},c),{fc1:l,prelu4_alpha:f,fc2_1:h,fc2_2:d})}function u(){var c=a([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),f=o(128,"onet/prelu4_alpha"),h=n(1152,256,"onet/fc1"),d=o(256,"onet/prelu5_alpha"),p=n(256,2,"onet/fc2_1"),m=n(256,4,"onet/fc2_2"),v=n(256,10,"onet/fc2_3");return Je(Je({},c),{conv4:l,prelu4_alpha:f,fc1:h,prelu5_alpha:d,fc2_1:p,fc2_2:m,fc2_3:v})}return{extractPNetParams:i,extractRNetParams:s,extractONetParams:u}}function qx(r){var t=sn(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=Gx(e,o),i=a.extractPNetParams,s=a.extractRNetParams,u=a.extractONetParams,c=i(),l=s(),f=u();if(n().length!==0)throw new Error("weights remaing after extract: "+n().length);return{params:{pnet:c,rnet:l,onet:f},paramMappings:o}}function jx(r,t){var e=Cn(r,t);function n(l){var f=e(l+"/weights",4,l+"/filters"),h=e(l+"/bias",1);return{filters:f,bias:h}}function o(l){var f=e(l+"/weights",2),h=e(l+"/bias",1);return{weights:f,bias:h}}function a(l){return e(l,1)}function i(l){var f=n(l+"/conv1"),h=a(l+"/prelu1_alpha"),d=n(l+"/conv2"),p=a(l+"/prelu2_alpha"),m=n(l+"/conv3"),v=a(l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:h,conv2:d,prelu2_alpha:p,conv3:m,prelu3_alpha:v}}function s(){var l=i("pnet"),f=n("pnet/conv4_1"),h=n("pnet/conv4_2");return Je(Je({},l),{conv4_1:f,conv4_2:h})}function u(){var l=i("rnet"),f=o("rnet/fc1"),h=a("rnet/prelu4_alpha"),d=o("rnet/fc2_1"),p=o("rnet/fc2_2");return Je(Je({},l),{fc1:f,prelu4_alpha:h,fc2_1:d,fc2_2:p})}function c(){var l=i("onet"),f=n("onet/conv4"),h=a("onet/prelu4_alpha"),d=o("onet/fc1"),p=a("onet/prelu5_alpha"),m=o("onet/fc2_1"),v=o("onet/fc2_2"),g=o("onet/fc2_3");return Je(Je({},l),{conv4:f,prelu4_alpha:h,fc1:d,prelu5_alpha:p,fc2_1:m,fc2_2:v,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function Kx(r){var t=[],e=jx(r,t),n=e.extractPNetParams,o=e.extractRNetParams,a=e.extractONetParams,i=n(),s=o(),u=a();return an(r,t),{params:{pnet:i,rnet:s,onet:u},paramMappings:t}}function ki(r,t){var e=t[0],n=t[1];return{height:Math.floor(e*r),width:Math.floor(n*r)}}function Xx(r,t,e){for(var n=e[0],o=e[1],a=Ho/r,i=[],s=Math.min(n,o)*a,u=0;s>=12;)i.push(a*Math.pow(t,u)),s=s*t,u+=1;return i}var Is=function(r){ue(t,r);function t(e,n,o,a){return r.call(this,{left:e,top:n,right:o,bottom:a},!0)||this}return t}(Gt);function Of(r){return $(function(){return tt(ze(r,K(127.5)),K(.0078125))})}function sr(r,t){return $(function(){return ve(De(r),tt(t,Mo(De(Mo(r)))))})}function Ts(r,t,e){return e===void 0&&(e=!1),$(function(){var n=kt(r,t.conv1,"valid");return n=sr(n,t.prelu1_alpha),n=He(n,e?[2,2]:[3,3],[2,2],"same"),n=kt(n,t.conv2,"valid"),n=sr(n,t.prelu2_alpha),n=e?n:He(n,[3,3],[2,2],"valid"),n=kt(n,t.conv3,"valid"),n=sr(n,t.prelu3_alpha),n})}function $x(r,t){return $(function(){var e=Ts(r,t,!0),n=kt(e,t.conv4_1,"valid"),o=bt(ia(n,3),3),a=nn(ze(n,o),3),i=kt(e,t.conv4_2,"valid");return{prob:a,regions:i}})}function Yx(r,t){return $(function(){var e=ki(t,r.shape.slice(1)),n=e.height,o=e.width,a=as.resizeBilinear(r,[n,o]),i=Of(a);return yn(i,[0,2,1,3])})}function Jx(r,t,e,n){for(var o=[],a=r.arraySync(),i=0;i<r.shape[0];i++)for(var s=0;s<r.shape[1];s++)a[i][s]>=n&&o.push(new xe(s,i));var u=o.map(function(c){var l=new la(Math.round((c.y*fo+1)/e),Math.round((c.x*fo+1)/e),Math.round((c.y*fo+Ho)/e),Math.round((c.x*fo+Ho)/e)),f=a[c.y][c.x],h=t.arraySync(),d=new Is(h[c.y][c.x][0],h[c.y][c.x][1],h[c.y][c.x][2],h[c.y][c.x][3]);return{cell:l,score:f,region:d}});return u}function Qx(r,t,e,n,o){o.stage1=[];var a=t.map(function(h){return $(function(){var d={scale:h},p=Yx(r,h),m=Date.now(),v=$x(p,n),g=v.prob,b=v.regions;d.pnet=Date.now()-m;var x=We(We(g,3)[1])[0],y=We(b)[0];return{scoresTensor:x,regionsTensor:y,scale:h,statsForScale:d}})}),i=a.map(function(h){var d=h.scoresTensor,p=h.regionsTensor,m=h.scale,v=h.statsForScale,g=Jx(d,p,m,e);if(d.dispose(),p.dispose(),!g.length)return o.stage1.push(v),[];var b=Date.now(),x=Pr(g.map(function(y){return y.cell}),g.map(function(y){return y.score}),.5);return v.nms=Date.now()-b,v.numBoxes=x.length,o.stage1.push(v),x.map(function(y){return g[y]})}),s=i.reduce(function(h,d){return h.concat(d)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),f=Pr(s.map(function(h){return h.cell}),s.map(function(h){return h.score}),.7);o.stage1_nms=Date.now()-l,c=f.map(function(h){return s[h].score}),u=f.map(function(h){return s[h]}).map(function(h){var d=h.cell,p=h.region;return new la(d.left+p.left*d.width,d.top+p.top*d.height,d.right+p.right*d.width,d.bottom+p.bottom*d.height).toSquare().round()})}return{boxes:u,scores:c}}function Mf(r,t,e){var n=e.width,o=e.height;return ne(this,void 0,void 0,function(){var a,i,s,u=this;return re(this,function(c){switch(c.label){case 0:return a=qt(r),[4,Promise.all(t.map(function(l){return ne(u,void 0,void 0,function(){var f,h,d,p,m,v,g,b;return re(this,function(x){return f=l.padAtBorders(r.height,r.width),h=f.y,d=f.ey,p=f.x,m=f.ex,v=p-1,g=h-1,b=a.getImageData(v,g,m-v,d-g),[2,rt.isNodejs()?gs(b):createImageBitmap(b)]})})}))];case 1:return i=c.sent(),s=[],i.forEach(function(l){var f=fa({width:n,height:o}),h=qt(f);h.drawImage(l,0,0,n,o);for(var d=h.getImageData(0,0,n,o).data,p=[],m=0;m<d.length;m+=4)p.push(d[m+2]),p.push(d[m+1]),p.push(d[m]);s.push(p)}),[2,s.map(function(l){var f=$(function(){var h=yn(ot(l,[1,n,o,3]),[0,2,1,3]).toFloat();return Of(h)});return f})]}})})}function Zx(r,t){return $(function(){var e=Ts(r,t),n=St(e,[e.shape[0],t.fc1.weights.shape[0]]),o=Wt(n,t.fc1),a=sr(o,t.prelu4_alpha),i=Wt(a,t.fc2_1),s=bt(ia(i,1),1),u=nn(ze(i,s),1),c=Wt(a,t.fc2_2),l=We(u,1)[1];return{scores:l,regions:c}})}function e1(r,t,e,n,o){return ne(this,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p,m,v,g,b;return re(this,function(x){switch(x.label){case 0:return a=Date.now(),[4,Mf(r,t,{width:24,height:24})];case 1:return i=x.sent(),o.stage2_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(y){var w=Zx(y,n);return y.dispose(),w}),o.stage2_rnet=Date.now()-a,u=s.length>1?Le(s.map(function(y){return y.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[x.sent()]),u.dispose(),h=c.map(function(y,w){return{score:y,idx:w}}).filter(function(y){return y.score>e}).map(function(y){var w=y.idx;return w}),d=h.map(function(y){return t[y]}),p=h.map(function(y){return c[y]}),m=[],v=[],d.length>0&&(a=Date.now(),g=Pr(d,p,.7),o.stage2_nms=Date.now()-a,b=g.map(function(y){var w=s[h[y]].regions.arraySync();return new Is(w[0][0],w[0][1],w[0][2],w[0][3])}),v=g.map(function(y){return p[y]}),m=g.map(function(y,w){return d[y].calibrate(b[w])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:m,scores:v}]}})})}function t1(r,t){return $(function(){var e=Ts(r,t);e=He(e,[2,2],[2,2],"same"),e=kt(e,t.conv4,"valid"),e=sr(e,t.prelu4_alpha);var n=St(e,[e.shape[0],t.fc1.weights.shape[0]]),o=Wt(n,t.fc1),a=sr(o,t.prelu5_alpha),i=Wt(a,t.fc2_1),s=bt(ia(i,1),1),u=nn(ze(i,s),1),c=Wt(a,t.fc2_2),l=Wt(a,t.fc2_3),f=We(u,1)[1];return{scores:f,regions:c,points:l}})}function n1(r,t,e,n,o){return ne(this,void 0,void 0,function(){var a,i,s,u,c,l,f,h,d,p,m,v,g,b,x;return re(this,function(y){switch(y.label){case 0:return a=Date.now(),[4,Mf(r,t,{width:48,height:48})];case 1:return i=y.sent(),o.stage3_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(w){var C=t1(w,n);return w.dispose(),C}),o.stage3_onet=Date.now()-a,u=s.length>1?Le(s.map(function(w){return w.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[y.sent()]),u.dispose(),h=c.map(function(w,C){return{score:w,idx:C}}).filter(function(w){return w.score>e}).map(function(w){var C=w.idx;return C}),d=h.map(function(w){var C=s[w].regions.arraySync();return new Is(C[0][0],C[0][1],C[0][2],C[0][3])}),p=h.map(function(w,C){return t[w].calibrate(d[C])}),m=h.map(function(w){return c[w]}),v=[],g=[],b=[],p.length>0&&(a=Date.now(),x=Pr(p,m,.7,!1),o.stage3_nms=Date.now()-a,v=x.map(function(w){return p[w]}),g=x.map(function(w){return m[w]}),b=x.map(function(w,C){return Array(5).fill(0).map(function(I,k){var S=s[w].points.arraySync();return new xe(S[0][k]*(v[C].width+1)+v[C].left,S[0][k+5]*(v[C].height+1)+v[C].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:v,scores:g,points:b}]}})})}var r1=function(r){ue(t,r);function t(){return r.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return ne(this,void 0,void 0,function(){return re(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return ne(this,void 0,void 0,function(){return re(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,n){return n===void 0&&(n={}),ne(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,h,d,p,m,v,g,b,x,y,w,C,I,k;return re(this,function(S){switch(S.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(a=e.canvases[0],!a)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return i={},s=Date.now(),u=$(function(){return Hx(bt(fs.fromPixels(a)).toFloat())}),c=function(R){return u.dispose(),i.total=Date.now()-s,R},l=u.shape.slice(1),f=l[0],h=l[1],d=new Nf(n),p=d.minFaceSize,m=d.scaleFactor,v=d.maxNumScales,g=d.scoreThresholds,b=d.scaleSteps,x=(b||Xx(p,m,[f,h])).filter(function(R){var A=ki(R,[f,h]);return Math.min(A.width,A.height)>Ho}).slice(0,v),i.scales=x,i.pyramid=x.map(function(R){return ki(R,[f,h])}),y=Date.now(),[4,Qx(u,x,g[0],o.pnet,i)];case 1:return w=S.sent(),i.total_stage1=Date.now()-y,w.boxes.length?(i.stage2_numInputBoxes=w.boxes.length,y=Date.now(),[4,e1(a,w.boxes,g[1],o.rnet,i)]):[2,c({results:[],stats:i})];case 2:return C=S.sent(),i.total_stage2=Date.now()-y,C.boxes.length?(i.stage3_numInputBoxes=C.boxes.length,y=Date.now(),[4,n1(a,C.boxes,g[2],o.onet,i)]):[2,c({results:[],stats:i})];case 3:return I=S.sent(),i.total_stage3=Date.now()-y,k=I.boxes.map(function(R,A){return da(Or({},new gt(I.scores[A],new ds(R.left/h,R.top/f,R.width/h,R.height/f),{height:f,width:h})),new Db(I.points[A].map(function(D){return D.sub(new xe(R.left,R.top)).div(new xe(R.width,R.height))}),{width:R.width,height:R.height}))}),[2,c({results:k,stats:i})]}})})},t.prototype.forward=function(e,n){return n===void 0&&(n={}),ne(this,void 0,void 0,function(){var o;return re(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,qe(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent().results]}})})},t.prototype.forwardWithStats=function(e,n){return n===void 0&&(n={}),ne(this,void 0,void 0,function(){var o;return re(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,qe(e)];case 1:return[2,o.apply(this,[a.sent(),n])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Kx(e)},t.prototype.extractParams=function(e){return qx(e)},t}(on),o1=.4,a1=[new xe(1.603231,2.094468),new xe(6.041143,7.080126),new xe(2.882459,3.518061),new xe(4.266906,5.178857),new xe(9.041765,10.66308)],i1=[117.001,114.697,97.404],s1=function(r){ue(t,r);function t(){var e=this,n={withSeparableConvs:!0,iouThreshold:o1,classes:["face"],anchors:a1,meanRgb:i1,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=r.call(this,n)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return ne(this,void 0,void 0,function(){var o;return re(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new gt(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Pf),Ct={ssdMobilenetv1:new Ff,tinyFaceDetector:new s1,tinyYolov2:new zx,mtcnn:new r1,faceLandmark68Net:new Sf,faceLandmark68TinyNet:new ux,faceRecognitionNet:new vx,faceExpressionNet:new Kb,ageGenderNet:new ox},Bf=function(r){ue(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t}(Yr),Ds=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n,o=this;return re(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,pa(e,this.input,function(i){return ne(o,void 0,void 0,function(){return re(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return Ct.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){return _f(i,n[s])})]}})})},t.prototype.withAgeAndGender=function(){return new Ps(this,this.input)},t}(Bf),As=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n;return re(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,ks(e,this.input,function(a){return Ct.faceExpressionNet.predictExpressions(a)},this.extractedFaces)]:[2];case 2:return n=o.sent(),[2,_f(e,n)]}})})},t.prototype.withAgeAndGender=function(){return new Os(this,this.input)},t}(Bf),Ns=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new Ms(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Ls(this,this.input)},t}(Ds),Fs=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new Bs(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Ws(this,this.input)},t}(As),Lf=function(r){ue(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t}(Yr),Ps=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n,o=this;return re(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,pa(e,this.input,function(i){return ne(o,void 0,void 0,function(){return re(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return Ct.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){var u=n[s],c=u.age,l=u.gender,f=u.genderProbability;return Df(Af(i,l,f),c)})]}})})},t.prototype.withFaceExpressions=function(){return new Ds(this,this.input)},t}(Lf),Os=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n,o,a,i;return re(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,ks(e,this.input,function(u){return Ct.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return n=s.sent(),o=n.age,a=n.gender,i=n.genderProbability,[2,Df(Af(e,a,i),o)]}})})},t.prototype.withFaceExpressions=function(){return new As(this,this.input)},t}(Lf),Ms=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new Ns(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Ls(this,this.input)},t}(Ps),Bs=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new Fs(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Ws(this,this.input)},t}(Os),Wf=function(r){ue(t,r);function t(e,n){var o=r.call(this)||this;return o.parentTask=e,o.input=n,o}return t}(Yr),Ls=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n;return re(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,pa(e,this.input,function(a){return Promise.all(a.map(function(i){return Ct.faceRecognitionNet.computeFaceDescriptor(i)}))},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return n=o.sent(),[2,n.map(function(a,i){return Tf(e[i],a)})]}})})},t.prototype.withFaceExpressions=function(){return new Ns(this,this.input)},t.prototype.withAgeAndGender=function(){return new Ms(this,this.input)},t}(Wf),Ws=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n;return re(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,ks(e,this.input,function(a){return Ct.faceRecognitionNet.computeFaceDescriptor(a)},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return n=o.sent(),[2,Tf(e,n)]}})})},t.prototype.withFaceExpressions=function(){return new Fs(this,this.input)},t.prototype.withAgeAndGender=function(){return new Bs(this,this.input)},t}(Wf),Uf=function(r){ue(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.useTinyLandmarkNet=o,a}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?Ct.faceLandmark68TinyNet:Ct.faceLandmark68Net},enumerable:!0,configurable:!0}),t}(Yr),u1=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return re(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),n=e.map(function(c){return c.detection}),this.input instanceof Te?[4,bs(this.input,n)]:[3,3];case 2:return a=u.sent(),[3,5];case 3:return[4,ys(this.input,n)];case 4:a=u.sent(),u.label=5;case 5:return o=a,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return i=u.sent(),o.forEach(function(c){return c instanceof Te&&c.dispose()}),[2,e.map(function(c,l){return da(c,i[l])})]}})})},t.prototype.withFaceExpressions=function(){return new Ns(this,this.input)},t.prototype.withAgeAndGender=function(){return new Ms(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Ls(this,this.input)},t}(Uf),c1=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n,o,a,i;return re(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(n=e.detection,this.input instanceof Te?[4,bs(this.input,[n])]:[3,3]):[2];case 2:return a=s.sent(),[3,5];case 3:return[4,ys(this.input,[n])];case 4:a=s.sent(),s.label=5;case 5:return o=a,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return i=s.sent(),o.forEach(function(u){return u instanceof Te&&u.dispose()}),[2,da(e,i)]}})})},t.prototype.withFaceExpressions=function(){return new Fs(this,this.input)},t.prototype.withAgeAndGender=function(){return new Bs(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Ws(this,this.input)},t}(Uf),zf=function(r){ue(t,r);function t(e,n){n===void 0&&(n=new $r);var o=r.call(this)||this;return o.input=e,o.options=n,o}return t}(Yr),Vf=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n,o,a;return re(this,function(i){switch(i.label){case 0:return e=this,n=e.input,o=e.options,o instanceof Nf?[4,Ct.mtcnn.forward(n,o)]:[3,2];case 1:return[2,i.sent().map(function(s){return s.detection})];case 2:if(a=o instanceof Vx?function(s){return Ct.tinyFaceDetector.locateFaces(s,o)}:o instanceof $r?function(s){return Ct.ssdMobilenetv1.locateFaces(s,o)}:o instanceof Ss?function(s){return Ct.tinyYolov2.locateFaces(s,o)}:null,!a)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,a(n)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(n){return ne(e,void 0,void 0,function(){var o;return re(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o.map(function(i){return Or({},i)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new u1(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new Ds(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new Ps(this.runAndExtendWithFaceDetections(),this.input)},t}(zf),l1=function(r){ue(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return ne(this,void 0,void 0,function(){var e,n;return re(this,function(o){switch(o.label){case 0:return[4,new Vf(this.input,this.options)];case 1:return e=o.sent(),n=e[0],e.forEach(function(a){a.score>n.score&&(n=a)}),[2,n]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(n){return ne(e,void 0,void 0,function(){var o;return re(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o?Or({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new c1(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new As(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new Os(this.runAndExtendWithFaceDetection(),this.input)},t}(zf);function $w(r,t){return t===void 0&&(t=new $r),new l1(r,t)}function Yw(r,t){return t===void 0&&(t=new $r),new Vf(r,t)}function f1(r,t){if(r.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(r),n=Array.from(t);return Math.sqrt(e.map(function(o,a){return o-n[a]}).reduce(function(o,a){return o+Math.pow(a,2)},0))}var Jw=function(){function r(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var n=Array.isArray(t)?t:[t];if(!n.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,a=function(){return"person "+o++};this._labeledDescriptors=n.map(function(i){if(i instanceof so)return i;if(i instanceof Float32Array)return new so(a(),[i]);if(i.descriptor&&i.descriptor instanceof Float32Array)return new so(a(),[i.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(t,e){return e.map(function(n){return f1(n,t)}).reduce(function(n,o){return n+o},0)/(e.length||1)},r.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(n){var o=n.descriptors,a=n.label;return new $u(a,e.computeMeanDistance(t,o))}).reduce(function(n,o){return n.distance<o.distance?n:o})},r.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new $u("unknown",e.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},r.fromJSON=function(t){var e=t.labeledDescriptors.map(function(n){return so.fromJSON(n)});return new r(e,t.distanceThreshold)},r}();function h1(r,t){var e=new Nn(t.width,t.height),n=e.width,o=e.height;if(n<=0||o<=0)throw new Error("resizeResults - invalid dimensions: "+JSON.stringify({width:n,height:o}));if(Array.isArray(r))return r.map(function(s){return h1(s,{width:n,height:o})});if(_s(r)){var a=r.detection.forSize(n,o),i=r.unshiftedLandmarks.forSize(a.box.width,a.box.height);return da(Or(r,a),i)}return Uo(r)?Or(r,r.detection.forSize(n,o)):r instanceof dr||r instanceof gt?r.forSize(n,o):r}function Mn(r){"@babel/helpers - typeof";return Mn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mn(r)}function bn(r){if(r===null||r===!0||r===!1)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function Me(r,t){if(t.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+t.length+" present")}function nt(r){Me(1,arguments);var t=Object.prototype.toString.call(r);return r instanceof Date||Mn(r)==="object"&&t==="[object Date]"?new Date(r.getTime()):typeof r=="number"||t==="[object Number]"?new Date(r):((typeof r=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function d1(r,t){Me(2,arguments);var e=nt(r).getTime(),n=bn(t);return new Date(e+n)}var p1={};function va(){return p1}function v1(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}var Hf=6e4,Gf=36e5;function m1(r){return Me(1,arguments),r instanceof Date||Mn(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function g1(r){if(Me(1,arguments),!m1(r)&&typeof r!="number")return!1;var t=nt(r);return!isNaN(Number(t))}function Qw(r){Me(1,arguments);var t=nt(r),e=t.getMonth();return t.setFullYear(t.getFullYear(),e+1,0),t.setHours(23,59,59,999),t}function Zw(r){Me(1,arguments);var t=nt(r);return t.setDate(1),t.setHours(0,0,0,0),t}function y1(r,t){Me(2,arguments);var e=bn(t);return d1(r,-e)}var b1=864e5;function x1(r){Me(1,arguments);var t=nt(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=t.getTime(),o=e-n;return Math.floor(o/b1)+1}function Go(r){Me(1,arguments);var t=1,e=nt(r),n=e.getUTCDay(),o=(n<t?7:0)+n-t;return e.setUTCDate(e.getUTCDate()-o),e.setUTCHours(0,0,0,0),e}function qf(r){Me(1,arguments);var t=nt(r),e=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(e+1,0,4),n.setUTCHours(0,0,0,0);var o=Go(n),a=new Date(0);a.setUTCFullYear(e,0,4),a.setUTCHours(0,0,0,0);var i=Go(a);return t.getTime()>=o.getTime()?e+1:t.getTime()>=i.getTime()?e:e-1}function w1(r){Me(1,arguments);var t=qf(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var n=Go(e);return n}var C1=6048e5;function _1(r){Me(1,arguments);var t=nt(r),e=Go(t).getTime()-w1(t).getTime();return Math.round(e/C1)+1}function qo(r,t){var e,n,o,a,i,s,u,c;Me(1,arguments);var l=va(),f=bn((e=(n=(o=(a=t==null?void 0:t.weekStartsOn)!==null&&a!==void 0?a:t==null||(i=t.locale)===null||i===void 0||(s=i.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&o!==void 0?o:l.weekStartsOn)!==null&&n!==void 0?n:(u=l.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&e!==void 0?e:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=nt(r),d=h.getUTCDay(),p=(d<f?7:0)+d-f;return h.setUTCDate(h.getUTCDate()-p),h.setUTCHours(0,0,0,0),h}function jf(r,t){var e,n,o,a,i,s,u,c;Me(1,arguments);var l=nt(r),f=l.getUTCFullYear(),h=va(),d=bn((e=(n=(o=(a=t==null?void 0:t.firstWeekContainsDate)!==null&&a!==void 0?a:t==null||(i=t.locale)===null||i===void 0||(s=i.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&o!==void 0?o:h.firstWeekContainsDate)!==null&&n!==void 0?n:(u=h.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setUTCFullYear(f+1,0,d),p.setUTCHours(0,0,0,0);var m=qo(p,t),v=new Date(0);v.setUTCFullYear(f,0,d),v.setUTCHours(0,0,0,0);var g=qo(v,t);return l.getTime()>=m.getTime()?f+1:l.getTime()>=g.getTime()?f:f-1}function E1(r,t){var e,n,o,a,i,s,u,c;Me(1,arguments);var l=va(),f=bn((e=(n=(o=(a=t==null?void 0:t.firstWeekContainsDate)!==null&&a!==void 0?a:t==null||(i=t.locale)===null||i===void 0||(s=i.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&o!==void 0?o:l.firstWeekContainsDate)!==null&&n!==void 0?n:(u=l.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&e!==void 0?e:1),h=jf(r,t),d=new Date(0);d.setUTCFullYear(h,0,f),d.setUTCHours(0,0,0,0);var p=qo(d,t);return p}var R1=6048e5;function S1(r,t){Me(1,arguments);var e=nt(r),n=qo(e,t).getTime()-E1(e,t).getTime();return Math.round(n/R1)+1}function Ce(r,t){for(var e=r<0?"-":"",n=Math.abs(r).toString();n.length<t;)n="0"+n;return e+n}var k1={y:function(t,e){var n=t.getUTCFullYear(),o=n>0?n:1-n;return Ce(e==="yy"?o%100:o,e.length)},M:function(t,e){var n=t.getUTCMonth();return e==="M"?String(n+1):Ce(n+1,2)},d:function(t,e){return Ce(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(t,e){return Ce(t.getUTCHours()%12||12,e.length)},H:function(t,e){return Ce(t.getUTCHours(),e.length)},m:function(t,e){return Ce(t.getUTCMinutes(),e.length)},s:function(t,e){return Ce(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,o=t.getUTCMilliseconds(),a=Math.floor(o*Math.pow(10,n-3));return Ce(a,e.length)}};const fn=k1;var Yn={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},I1={G:function(t,e,n){var o=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(o,{width:"abbreviated"});case"GGGGG":return n.era(o,{width:"narrow"});case"GGGG":default:return n.era(o,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){var o=t.getUTCFullYear(),a=o>0?o:1-o;return n.ordinalNumber(a,{unit:"year"})}return fn.y(t,e)},Y:function(t,e,n,o){var a=jf(t,o),i=a>0?a:1-a;if(e==="YY"){var s=i%100;return Ce(s,2)}return e==="Yo"?n.ordinalNumber(i,{unit:"year"}):Ce(i,e.length)},R:function(t,e){var n=qf(t);return Ce(n,e.length)},u:function(t,e){var n=t.getUTCFullYear();return Ce(n,e.length)},Q:function(t,e,n){var o=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(o);case"QQ":return Ce(o,2);case"Qo":return n.ordinalNumber(o,{unit:"quarter"});case"QQQ":return n.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(o,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(o,{width:"wide",context:"formatting"})}},q:function(t,e,n){var o=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(o);case"qq":return Ce(o,2);case"qo":return n.ordinalNumber(o,{unit:"quarter"});case"qqq":return n.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(o,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(o,{width:"wide",context:"standalone"})}},M:function(t,e,n){var o=t.getUTCMonth();switch(e){case"M":case"MM":return fn.M(t,e);case"Mo":return n.ordinalNumber(o+1,{unit:"month"});case"MMM":return n.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(o,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(o,{width:"wide",context:"formatting"})}},L:function(t,e,n){var o=t.getUTCMonth();switch(e){case"L":return String(o+1);case"LL":return Ce(o+1,2);case"Lo":return n.ordinalNumber(o+1,{unit:"month"});case"LLL":return n.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(o,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(o,{width:"wide",context:"standalone"})}},w:function(t,e,n,o){var a=S1(t,o);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):Ce(a,e.length)},I:function(t,e,n){var o=_1(t);return e==="Io"?n.ordinalNumber(o,{unit:"week"}):Ce(o,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):fn.d(t,e)},D:function(t,e,n){var o=x1(t);return e==="Do"?n.ordinalNumber(o,{unit:"dayOfYear"}):Ce(o,e.length)},E:function(t,e,n){var o=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(o,{width:"short",context:"formatting"});case"EEEE":default:return n.day(o,{width:"wide",context:"formatting"})}},e:function(t,e,n,o){var a=t.getUTCDay(),i=(a-o.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return Ce(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,o){var a=t.getUTCDay(),i=(a-o.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return Ce(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var o=t.getUTCDay(),a=o===0?7:o;switch(e){case"i":return String(a);case"ii":return Ce(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(o,{width:"short",context:"formatting"});case"iiii":default:return n.day(o,{width:"wide",context:"formatting"})}},a:function(t,e,n){var o=t.getUTCHours(),a=o/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var o=t.getUTCHours(),a;switch(o===12?a=Yn.noon:o===0?a=Yn.midnight:a=o/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var o=t.getUTCHours(),a;switch(o>=17?a=Yn.evening:o>=12?a=Yn.afternoon:o>=4?a=Yn.morning:a=Yn.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){var o=t.getUTCHours()%12;return o===0&&(o=12),n.ordinalNumber(o,{unit:"hour"})}return fn.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):fn.H(t,e)},K:function(t,e,n){var o=t.getUTCHours()%12;return e==="Ko"?n.ordinalNumber(o,{unit:"hour"}):Ce(o,e.length)},k:function(t,e,n){var o=t.getUTCHours();return o===0&&(o=24),e==="ko"?n.ordinalNumber(o,{unit:"hour"}):Ce(o,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):fn.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):fn.s(t,e)},S:function(t,e){return fn.S(t,e)},X:function(t,e,n,o){var a=o._originalDate||t,i=a.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return tc(i);case"XXXX":case"XX":return kn(i);case"XXXXX":case"XXX":default:return kn(i,":")}},x:function(t,e,n,o){var a=o._originalDate||t,i=a.getTimezoneOffset();switch(e){case"x":return tc(i);case"xxxx":case"xx":return kn(i);case"xxxxx":case"xxx":default:return kn(i,":")}},O:function(t,e,n,o){var a=o._originalDate||t,i=a.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ec(i,":");case"OOOO":default:return"GMT"+kn(i,":")}},z:function(t,e,n,o){var a=o._originalDate||t,i=a.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ec(i,":");case"zzzz":default:return"GMT"+kn(i,":")}},t:function(t,e,n,o){var a=o._originalDate||t,i=Math.floor(a.getTime()/1e3);return Ce(i,e.length)},T:function(t,e,n,o){var a=o._originalDate||t,i=a.getTime();return Ce(i,e.length)}};function ec(r,t){var e=r>0?"-":"+",n=Math.abs(r),o=Math.floor(n/60),a=n%60;if(a===0)return e+String(o);var i=t||"";return e+String(o)+i+Ce(a,2)}function tc(r,t){if(r%60===0){var e=r>0?"-":"+";return e+Ce(Math.abs(r)/60,2)}return kn(r,t)}function kn(r,t){var e=t||"",n=r>0?"-":"+",o=Math.abs(r),a=Ce(Math.floor(o/60),2),i=Ce(o%60,2);return n+a+e+i}const T1=I1;var nc=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Kf=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},D1=function(t,e){var n=t.match(/(P+)(p+)?/)||[],o=n[1],a=n[2];if(!a)return nc(t,e);var i;switch(o){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",nc(o,e)).replace("{{time}}",Kf(a,e))},A1={p:Kf,P:D1};const N1=A1;var F1=["D","DD"],P1=["YY","YYYY"];function O1(r){return F1.indexOf(r)!==-1}function M1(r){return P1.indexOf(r)!==-1}function rc(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var B1={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},L1=function(t,e,n){var o,a=B1[t];return typeof a=="string"?o=a:e===1?o=a.one:o=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+o:o+" ago":o};const W1=L1;function Qa(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,n=r.formats[e]||r.formats[r.defaultWidth];return n}}var U1={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},z1={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},V1={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},H1={date:Qa({formats:U1,defaultWidth:"full"}),time:Qa({formats:z1,defaultWidth:"full"}),dateTime:Qa({formats:V1,defaultWidth:"full"})};const G1=H1;var q1={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},j1=function(t,e,n,o){return q1[t]};const K1=j1;function Cr(r){return function(t,e){var n=e!=null&&e.context?String(e.context):"standalone",o;if(n==="formatting"&&r.formattingValues){var a=r.defaultFormattingWidth||r.defaultWidth,i=e!=null&&e.width?String(e.width):a;o=r.formattingValues[i]||r.formattingValues[a]}else{var s=r.defaultWidth,u=e!=null&&e.width?String(e.width):r.defaultWidth;o=r.values[u]||r.values[s]}var c=r.argumentCallback?r.argumentCallback(t):t;return o[c]}}var X1={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},$1={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Y1={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},J1={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Q1={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Z1={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ew=function(t,e){var n=Number(t),o=n%100;if(o>20||o<10)switch(o%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},tw={ordinalNumber:ew,era:Cr({values:X1,defaultWidth:"wide"}),quarter:Cr({values:$1,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Cr({values:Y1,defaultWidth:"wide"}),day:Cr({values:J1,defaultWidth:"wide"}),dayPeriod:Cr({values:Q1,defaultWidth:"wide",formattingValues:Z1,defaultFormattingWidth:"wide"})};const nw=tw;function _r(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.width,o=n&&r.matchPatterns[n]||r.matchPatterns[r.defaultMatchWidth],a=t.match(o);if(!a)return null;var i=a[0],s=n&&r.parsePatterns[n]||r.parsePatterns[r.defaultParseWidth],u=Array.isArray(s)?ow(s,function(f){return f.test(i)}):rw(s,function(f){return f.test(i)}),c;c=r.valueCallback?r.valueCallback(u):u,c=e.valueCallback?e.valueCallback(c):c;var l=t.slice(i.length);return{value:c,rest:l}}}function rw(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function ow(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function aw(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(r.matchPattern);if(!n)return null;var o=n[0],a=t.match(r.parsePattern);if(!a)return null;var i=r.valueCallback?r.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var s=t.slice(o.length);return{value:i,rest:s}}}var iw=/^(\d+)(th|st|nd|rd)?/i,sw=/\d+/i,uw={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},cw={any:[/^b/i,/^(a|c)/i]},lw={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},fw={any:[/1/i,/2/i,/3/i,/4/i]},hw={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},dw={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},pw={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},vw={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},mw={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},gw={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},yw={ordinalNumber:aw({matchPattern:iw,parsePattern:sw,valueCallback:function(t){return parseInt(t,10)}}),era:_r({matchPatterns:uw,defaultMatchWidth:"wide",parsePatterns:cw,defaultParseWidth:"any"}),quarter:_r({matchPatterns:lw,defaultMatchWidth:"wide",parsePatterns:fw,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:_r({matchPatterns:hw,defaultMatchWidth:"wide",parsePatterns:dw,defaultParseWidth:"any"}),day:_r({matchPatterns:pw,defaultMatchWidth:"wide",parsePatterns:vw,defaultParseWidth:"any"}),dayPeriod:_r({matchPatterns:mw,defaultMatchWidth:"any",parsePatterns:gw,defaultParseWidth:"any"})};const bw=yw;var xw={code:"en-US",formatDistance:W1,formatLong:G1,formatRelative:K1,localize:nw,match:bw,options:{weekStartsOn:0,firstWeekContainsDate:1}};const ww=xw;var Cw=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_w=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ew=/^'([^]*?)'?$/,Rw=/''/g,Sw=/[a-zA-Z]/;function e2(r,t,e){var n,o,a,i,s,u,c,l,f,h,d,p,m,v,g,b,x,y;Me(2,arguments);var w=String(t),C=va(),I=(n=(o=e==null?void 0:e.locale)!==null&&o!==void 0?o:C.locale)!==null&&n!==void 0?n:ww,k=bn((a=(i=(s=(u=e==null?void 0:e.firstWeekContainsDate)!==null&&u!==void 0?u:e==null||(c=e.locale)===null||c===void 0||(l=c.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&s!==void 0?s:C.firstWeekContainsDate)!==null&&i!==void 0?i:(f=C.locale)===null||f===void 0||(h=f.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(k>=1&&k<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var S=bn((d=(p=(m=(v=e==null?void 0:e.weekStartsOn)!==null&&v!==void 0?v:e==null||(g=e.locale)===null||g===void 0||(b=g.options)===null||b===void 0?void 0:b.weekStartsOn)!==null&&m!==void 0?m:C.weekStartsOn)!==null&&p!==void 0?p:(x=C.locale)===null||x===void 0||(y=x.options)===null||y===void 0?void 0:y.weekStartsOn)!==null&&d!==void 0?d:0);if(!(S>=0&&S<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!I.localize)throw new RangeError("locale must contain localize property");if(!I.formatLong)throw new RangeError("locale must contain formatLong property");var R=nt(r);if(!g1(R))throw new RangeError("Invalid time value");var A=v1(R),D=y1(R,A),L={firstWeekContainsDate:k,weekStartsOn:S,locale:I,_originalDate:R},B=w.match(_w).map(function(O){var U=O[0];if(U==="p"||U==="P"){var V=N1[U];return V(O,I.formatLong)}return O}).join("").match(Cw).map(function(O){if(O==="''")return"'";var U=O[0];if(U==="'")return kw(O);var V=T1[U];if(V)return!(e!=null&&e.useAdditionalWeekYearTokens)&&M1(O)&&rc(O,t,String(r)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&O1(O)&&rc(O,t,String(r)),V(D,O,I.localize,L);if(U.match(Sw))throw new RangeError("Format string contains an unescaped latin alphabet character `"+U+"`");return O}).join("");return B}function kw(r){var t=r.match(Ew);return t?t[1].replace(Rw,"'"):r}function t2(r){return Me(1,arguments),nt(r).getTime()>Date.now()}function oc(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}function n2(r,t){if(r){if(typeof r=="string")return oc(r,t);var e={}.toString.call(r).slice(8,-1);return e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set"?Array.from(r):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?oc(r,t):void 0}}function Iw(r,t){if(Mn(r)!="object"||!r)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var n=e.call(r,t||"default");if(Mn(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function Tw(r){var t=Iw(r,"string");return Mn(t)=="symbol"?t:t+""}function r2(r,t,e){return(t=Tw(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function o2(r,t){Me(2,arguments);var e=nt(r).getTime(),n=nt(t.start).getTime(),o=nt(t.end).getTime();if(!(n<=o))throw new RangeError("Invalid interval");return e>=n&&e<=o}function a2(r,t){var e;Me(1,arguments);var n=bn((e=t==null?void 0:t.additionalDigits)!==null&&e!==void 0?e:2);if(n!==2&&n!==1&&n!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof r=="string"||Object.prototype.toString.call(r)==="[object String]"))return new Date(NaN);var o=Fw(r),a;if(o.date){var i=Pw(o.date,n);a=Ow(i.restDateString,i.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);var s=a.getTime(),u=0,c;if(o.time&&(u=Mw(o.time),isNaN(u)))return new Date(NaN);if(o.timezone){if(c=Bw(o.timezone),isNaN(c))return new Date(NaN)}else{var l=new Date(s+u),f=new Date(0);return f.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),f.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),f}return new Date(s+u+c)}var ho={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Dw=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,Aw=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Nw=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Fw(r){var t={},e=r.split(ho.dateTimeDelimiter),n;if(e.length>2)return t;if(/:/.test(e[0])?n=e[0]:(t.date=e[0],n=e[1],ho.timeZoneDelimiter.test(t.date)&&(t.date=r.split(ho.timeZoneDelimiter)[0],n=r.substr(t.date.length,r.length))),n){var o=ho.timezone.exec(n);o?(t.time=n.replace(o[1],""),t.timezone=o[1]):t.time=n}return t}function Pw(r,t){var e=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=r.match(e);if(!n)return{year:NaN,restDateString:""};var o=n[1]?parseInt(n[1]):null,a=n[2]?parseInt(n[2]):null;return{year:a===null?o:a*100,restDateString:r.slice((n[1]||n[2]).length)}}function Ow(r,t){if(t===null)return new Date(NaN);var e=r.match(Dw);if(!e)return new Date(NaN);var n=!!e[4],o=Er(e[1]),a=Er(e[2])-1,i=Er(e[3]),s=Er(e[4]),u=Er(e[5])-1;if(n)return Vw(t,s,u)?Lw(t,s,u):new Date(NaN);var c=new Date(0);return!Uw(t,a,i)||!zw(t,o)?new Date(NaN):(c.setUTCFullYear(t,a,Math.max(o,i)),c)}function Er(r){return r?parseInt(r):1}function Mw(r){var t=r.match(Aw);if(!t)return NaN;var e=Za(t[1]),n=Za(t[2]),o=Za(t[3]);return Hw(e,n,o)?e*Gf+n*Hf+o*1e3:NaN}function Za(r){return r&&parseFloat(r.replace(",","."))||0}function Bw(r){if(r==="Z")return 0;var t=r.match(Nw);if(!t)return 0;var e=t[1]==="+"?-1:1,n=parseInt(t[2]),o=t[3]&&parseInt(t[3])||0;return Gw(n,o)?e*(n*Gf+o*Hf):NaN}function Lw(r,t,e){var n=new Date(0);n.setUTCFullYear(r,0,4);var o=n.getUTCDay()||7,a=(t-1)*7+e+1-o;return n.setUTCDate(n.getUTCDate()+a),n}var Ww=[31,null,31,30,31,30,31,31,30,31,30,31];function Xf(r){return r%400===0||r%4===0&&r%100!==0}function Uw(r,t,e){return t>=0&&t<=11&&e>=1&&e<=(Ww[t]||(Xf(r)?29:28))}function zw(r,t){return t>=1&&t<=(Xf(r)?366:365)}function Vw(r,t,e){return t>=1&&t<=53&&e>=0&&e<=6}function Hw(r,t,e){return r===24?t===0&&e===0:e>=0&&e<60&&t>=0&&t<60&&r>=0&&r<25}function Gw(r,t){return t>=0&&t<=59}export{Jw as F,so as L,$r as S,n2 as _,qw as a,jw as b,Xw as c,$w as d,Mn as e,e2 as f,Yw as g,Qw as h,t2 as i,o2 as j,r2 as k,Kw as m,Ct as n,a2 as p,h1 as r,Zw as s};
