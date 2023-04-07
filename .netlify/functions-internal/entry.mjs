import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default$1, g as deserializeManifest } from './chunks/astro.7b5a729d.mjs';
import { _ as _page0 } from './chunks/pages/all.7dbab544.mjs';
/* empty css                                 */
const ERROR = Symbol("error");
function castError(err) {
  if (err instanceof Error) return err;
  return new Error(typeof err === "string" ? err : "Unknown error", {
    cause: err
  });
}
function handleError(err) {
  const error = castError(err);
  const fns = lookup(Owner, ERROR);
  if (!fns) throw error;
  for (const f of fns) f(error);
}
const UNOWNED = {
  context: null,
  owner: null,
  owned: null,
  cleanups: null
};
let Owner = null;
function createRoot(fn, detachedOwner) {
  const owner = Owner,
    root = fn.length === 0 ? UNOWNED : {
      context: null,
      owner: detachedOwner === undefined ? owner : detachedOwner,
      owned: null,
      cleanups: null
    };
  Owner = root;
  let result;
  try {
    result = fn(fn.length === 0 ? () => {} : () => cleanNode(root));
  } catch (err) {
    handleError(err);
  } finally {
    Owner = owner;
  }
  return result;
}
function cleanNode(node) {
  if (node.owned) {
    for (let i = 0; i < node.owned.length; i++) cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (let i = 0; i < node.cleanups.length; i++) node.cleanups[i]();
    node.cleanups = null;
  }
}
function lookup(owner, key) {
  return owner ? owner.context && owner.context[key] !== undefined ? owner.context[key] : lookup(owner.owner, key) : undefined;
}
const sharedConfig = {};
function setHydrateContext(context) {
  sharedConfig.context = context;
}
function nextHydrateContext() {
  return sharedConfig.context ? {
    ...sharedConfig.context,
    id: `${sharedConfig.context.id}${sharedConfig.context.count++}-`,
    count: 0
  } : undefined;
}
function createComponent(Comp, props) {
  if (sharedConfig.context && !sharedConfig.context.noHydrate) {
    const c = sharedConfig.context;
    setHydrateContext(nextHydrateContext());
    const r = Comp(props || {});
    setHydrateContext(c);
    return r;
  }
  return Comp(props || {});
}

var I=(c=>(c[c.AggregateError=1]="AggregateError",c[c.ArrayPrototypeValues=2]="ArrayPrototypeValues",c[c.ArrowFunction=4]="ArrowFunction",c[c.BigInt=8]="BigInt",c[c.ErrorPrototypeStack=16]="ErrorPrototypeStack",c[c.Map=32]="Map",c[c.MethodShorthand=64]="MethodShorthand",c[c.ObjectAssign=128]="ObjectAssign",c[c.Promise=256]="Promise",c[c.Set=512]="Set",c[c.Symbol=1024]="Symbol",c[c.TypedArray=2048]="TypedArray",c[c.BigIntTypedArray=4096]="BigIntTypedArray",c))(I||{});var be="hjkmoquxzABCDEFGHIJKLNPQRTUVWXYZ$_",ve=be.length,Ae="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_",ge=Ae.length;function se(e){let r=e%ve,n=be[r];for(e=(e-r)/ve;e>0;)r=e%ge,n+=Ae[r],e=(e-r)/ge;return n}var Le={disabledFeatures:0};function h(e={}){let r=Object.assign({},Le,e||{});return {markedRefs:new Set,refs:new Map,features:8191^r.disabledFeatures}}function V(e){return {stack:[],vars:[],assignments:[],validRefs:[],refSize:0,features:e.features,markedRefs:new Set(e.markedRefs),valueMap:new Map}}function R(e,r){e.markedRefs.add(r);}function m(e,r){let n=e.validRefs[r];n==null&&(n=e.refSize++,e.validRefs[r]=n);let t=e.vars[n];return t==null&&(t=se(n),e.vars[n]=t),t}function P(e,r){let n=e.refs.get(r);return n==null?e.refs.size:n}function z(e,r){let n=e.refs.get(r);if(n==null){let t=e.refs.size;return e.refs.set(r,t),t}return R(e,n),n}function S(e,r){if(!e)throw new Error(r)}function A(e){let r="",n=0;for(let t=0,a=e.length;t<a;t++){let o;switch(e[t]){case'"':o='\\"';break;case"\\":o="\\\\";break;case"<":o="\\x3C";break;case`
`:o="\\n";break;case"\r":o="\\r";break;case"\u2028":o="\\u2028";break;case"\u2029":o="\\u2029";break;default:continue}r+=e.slice(n,t)+o,n=t+1;}return n===0?r=e:r+=e.slice(n),r}var Ie={[0]:"Symbol.asyncIterator",[1]:"Symbol.hasInstance",[2]:"Symbol.isConcatSpreadable",[3]:"Symbol.iterator",[4]:"Symbol.match",[5]:"Symbol.matchAll",[6]:"Symbol.replace",[7]:"Symbol.search",[8]:"Symbol.species",[9]:"Symbol.split",[10]:"Symbol.toPrimitive",[11]:"Symbol.toStringTag",[12]:"Symbol.unscopables"},O={[Symbol.asyncIterator]:0,[Symbol.hasInstance]:1,[Symbol.isConcatSpreadable]:2,[Symbol.iterator]:3,[Symbol.match]:4,[Symbol.matchAll]:5,[Symbol.replace]:6,[Symbol.search]:7,[Symbol.species]:8,[Symbol.split]:9,[Symbol.toPrimitive]:10,[Symbol.toStringTag]:11,[Symbol.unscopables]:12};var T={t:2,i:void 0,s:!0,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0},U={t:2,i:void 0,s:!1,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0},j={t:4,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0},M={t:3,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0},D={t:5,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0},_={t:6,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0},L={t:7,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0},x={t:8,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0};function F(e){return {t:0,i:void 0,s:e,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0}}function K(e){return {t:1,i:void 0,s:A(e),l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0}}function W(e,r){return S(e.features&8,'Unsupported type "BigInt"'),{t:9,i:void 0,s:""+r,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0}}function Y(e){return {t:10,i:e,s:void 0,l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0}}function Z(e,r){return {t:11,i:e,s:r.toISOString(),l:void 0,c:void 0,m:void 0,d:void 0,f:void 0,a:void 0}}function G(e,r){return {t:12,i:e,s:void 0,l:void 0,c:r.source,m:r.flags,d:void 0,a:void 0,f:void 0}}function H(e,r,n){let t=n.constructor.name;S(e.features&2048,`Unsupported value type "${t}"`);let a=n.length,o=new Array(a);for(let i=0;i<a;i++)o[i]=""+n[i];return {t:22,i:r,s:o,l:n.byteOffset,c:t,m:void 0,d:void 0,a:void 0,f:void 0}}var ke=4104;function J(e,r,n){let t=n.constructor.name;S((e.features&ke)===ke,`Unsupported value type "${t}"`);let a=n.length,o=new Array(a);for(let i=0;i<a;i++)o[i]=""+n[i];return {t:23,i:r,s:o,l:n.byteOffset,c:t,m:void 0,d:void 0,a:void 0,f:void 0}}function $(e){return {t:24,i:void 0,s:O[e],l:void 0,c:void 0,m:void 0,d:void 0,a:void 0,f:void 0}}function w(e){return e instanceof EvalError?"EvalError":e instanceof RangeError?"RangeError":e instanceof ReferenceError?"ReferenceError":e instanceof SyntaxError?"SyntaxError":e instanceof TypeError?"TypeError":e instanceof URIError?"URIError":"Error"}function C(e,r){let n,t=w(r);r.name!==t?n={name:r.name}:r.constructor.name!==t&&(n={name:r.constructor.name});let a=Object.getOwnPropertyNames(r);for(let o of a)o!=="name"&&o!=="message"&&(o==="stack"?e.features&16&&(n=n||{},n[o]=r[o]):(n=n||{},n[o]=r[o]));return n}function q(e){let r=Object.getOwnPropertyNames(e);if(r.length){let n={};for(let t of r)n[t]=e[t];return n}}function N(e){if(!e||typeof e!="object"||Array.isArray(e))return !1;switch(e.constructor){case Map:case Set:case Int8Array:case Int16Array:case Int32Array:case Uint8Array:case Uint16Array:case Uint32Array:case Uint8ClampedArray:case Float32Array:case Float64Array:case BigInt64Array:case BigUint64Array:return !1;}return Symbol.iterator in e}var xe=/^[$A-Z_][0-9A-Z_$]*$/i;function le(e){let r=e[0];return (r==="$"||r==="_"||r>="A"&&r<="Z"||r>="a"&&r<="z")&&xe.test(e)}function ne(e){switch(e.t){case"index":return e.s+"="+e.v;case"map":return e.s+".set("+e.k+","+e.v+")";case"set":return e.s+".add("+e.v+")";default:return ""}}function nr(e){let r=[],n=e[0],t=n,a;for(let o=1,i=e.length;o<i;o++){if(a=e[o],a.t===t.t)switch(a.t){case"index":a.v===t.v?n={t:"index",s:a.s,k:void 0,v:ne(n)}:(r.push(n),n=a);break;case"map":a.s===t.s?n={t:"map",s:ne(n),k:a.k,v:a.v}:(r.push(n),n=a);break;case"set":a.s===t.s?n={t:"set",s:ne(n),k:void 0,v:a.v}:(r.push(n),n=a);break;}else r.push(n),n=a;t=a;}return r.push(n),r}function Pe(e){if(e.length){let r="",n=nr(e);for(let t=0,a=n.length;t<a;t++)r+=ne(n[t])+",";return r}}function ze(e){return Pe(e.assignments)}function Be(e,r,n){e.assignments.push({t:"index",s:r,k:void 0,v:n});}function tr(e,r,n){R(e,r),e.assignments.push({t:"set",s:m(e,r),k:void 0,v:n});}function Se(e,r,n,t){R(e,r),e.assignments.push({t:"map",s:m(e,r),k:n,v:t});}function me(e,r,n,t){R(e,r),Be(e,m(e,r)+"["+n+"]",t);}function Te(e,r,n,t){R(e,r),Be(e,m(e,r)+"."+n,t);}function b(e,r,n){return e.markedRefs.has(r)?m(e,r)+"="+n:n}function k(e,r){return r.t===10&&e.stack.includes(r.i)}function ye(e,r){let n=r.l,t="",a,o=!1;for(let i=0;i<n;i++)i!==0&&(t+=","),a=r.a[i],a?k(e,a)?(me(e,r.i,i,m(e,a.i)),o=!0):(t+=y(e,a),o=!1):o=!0;return "["+t+(o?",]":"]")}function ar(e,r){e.stack.push(r.i);let n=ye(e,r);return e.stack.pop(),b(e,r.i,n)}function Ue(e,r,n){if(n.s===0)return "{}";let t="";e.stack.push(r);let a,o,i,d,s,u=!1;for(let l=0;l<n.s;l++)a=n.k[l],o=n.v[l],i=Number(a),d=i>=0||le(a),k(e,o)?(s=m(e,o.i),d&&Number.isNaN(i)?Te(e,r,a,s):me(e,r,d?a:'"'+A(a)+'"',s)):(t+=(u?",":"")+(d?a:'"'+A(a)+'"')+":"+y(e,o),u=!0);return e.stack.pop(),"{"+t+"}"}function or(e,r,n,t){let a=Ue(e,n,r);return a!=="{}"?"Object.assign("+t+","+a+")":t}function ir(e,r,n){e.stack.push(r);let t=[],a,o,i,d,s,u;for(let l=0;l<n.s;l++)a=e.stack,e.stack=[],o=y(e,n.v[l]),e.stack=a,i=n.k[l],d=Number(i),s=e.assignments,e.assignments=t,u=d>=0||le(i),u&&Number.isNaN(d)?Te(e,r,i,o):me(e,r,u?i:'"'+A(i)+'"',o),e.assignments=s;return e.stack.pop(),Pe(t)}function te(e,r,n,t){if(n)if(e.features&128)t=or(e,n,r,t);else {R(e,r);let a=ir(e,r,n);if(a)return "("+b(e,r,t)+","+a+m(e,r)+")"}return b(e,r,t)}function sr(e,r){return te(e,r.i,r.d,"Object.create(null)")}function lr(e,r){return b(e,r.i,Ue(e,r.i,r.d))}function dr(e,r){let n="new Set",t=r.l;if(t){let a="";e.stack.push(r.i);let o,i=!1;for(let d=0;d<t;d++)o=r.a[d],k(e,o)?tr(e,r.i,m(e,o.i)):(a+=(i?",":"")+y(e,o),i=!0);e.stack.pop(),a&&(n+="(["+a+"])");}return b(e,r.i,n)}function ur(e,r){let n="new Map";if(r.d.s){let t="";e.stack.push(r.i);let a,o,i,d,s,u=!1;for(let l=0;l<r.d.s;l++)a=r.d.k[l],o=r.d.v[l],k(e,a)?(i=m(e,a.i),k(e,o)?(d=m(e,o.i),Se(e,r.i,i,d)):(s=e.stack,e.stack=[],Se(e,r.i,i,y(e,o)),e.stack=s)):k(e,o)?(d=m(e,o.i),s=e.stack,e.stack=[],Se(e,r.i,y(e,a),d),e.stack=s):(t+=(u?",[":"[")+y(e,a)+","+y(e,o)+"]",u=!0);e.stack.pop(),t&&(n+="(["+t+"])");}return b(e,r.i,n)}function fr(e,r){e.stack.push(r.i);let n="new AggregateError("+ye(e,r)+',"'+A(r.m)+'")';return e.stack.pop(),te(e,r.i,r.d,n)}function cr(e,r){let n="new "+r.c+'("'+A(r.m)+'")';return te(e,r.i,r.d,n)}function Sr(e,r){let n;if(k(e,r.f)){let t=m(e,r.f.i);e.features&4?n="Promise.resolve().then(()=>"+t+")":n="Promise.resolve().then(function(){return "+t+"})";}else {e.stack.push(r.i);let t=y(e,r.f);e.stack.pop(),n="Promise.resolve("+t+")";}return b(e,r.i,n)}function mr(e,r){let n="",t=r.t===23;for(let o=0,i=r.s.length;o<i;o++)n+=(o!==0?",":"")+r.s[o]+(t?"n":"");let a="["+n+"]"+(r.l!==0?","+r.l:"");return b(e,r.i,"new "+r.c+"("+a+")")}function yr(e,r){let n=e.stack;e.stack=[];let t=ye(e,r);e.stack=n;let a=t;return e.features&2?a+=".values()":a+="[Symbol.iterator]()",e.features&4?a="{[Symbol.iterator]:()=>"+a+"}":e.features&64?a="{[Symbol.iterator](){return "+a+"}}":a="{[Symbol.iterator]:function(){return "+a+"}}",te(e,r.i,r.d,a)}function y(e,r){switch(r.t){case 0:return ""+r.s;case 1:return '"'+r.s+'"';case 2:return r.s?"!0":"!1";case 4:return "void 0";case 3:return "null";case 5:return "-0";case 6:return "1/0";case 7:return "-1/0";case 8:return "NaN";case 9:return r.s+"n";case 10:return m(e,r.i);case 15:return ar(e,r);case 16:return lr(e,r);case 17:return sr(e,r);case 11:return b(e,r.i,'new Date("'+r.s+'")');case 12:return b(e,r.i,"/"+r.c+"/"+r.m);case 13:return dr(e,r);case 14:return ur(e,r);case 23:case 22:return mr(e,r);case 20:return fr(e,r);case 19:return cr(e,r);case 21:return yr(e,r);case 18:return Sr(e,r);case 24:return Ie[r.s];default:throw new Error("Unsupported type")}}function Ne(e,r){let n=r.length,t=new Array(n),a=new Array(n),o;for(let i=0;i<n;i++)i in r&&(o=r[i],N(o)?a[i]=o:t[i]=g(e,o));for(let i=0;i<n;i++)i in a&&(t[i]=g(e,a[i]));return t}function Nr(e,r,n){return {t:15,i:r,s:void 0,l:n.length,c:void 0,m:void 0,d:void 0,a:Ne(e,n),f:void 0}}function pr(e,r,n){S(e.features&32,'Unsupported type "Map"');let t=n.size,a=new Array(t),o=new Array(t),i=new Array(t),d=new Array(t),s=0,u=0;for(let[l,f]of n.entries())N(l)||N(f)?(i[s]=l,d[s]=f,s++):(a[u]=g(e,l),o[u]=g(e,f),u++);for(let l=0;l<s;l++)a[u+l]=g(e,i[l]),o[u+l]=g(e,d[l]);return {t:14,i:r,s:void 0,l:void 0,c:void 0,m:void 0,d:{k:a,v:o,s:t},a:void 0,f:void 0}}function vr(e,r,n){S(e.features&512,'Unsupported type "Set"');let t=n.size,a=new Array(t),o=new Array(t),i=0,d=0;for(let s of n.keys())N(s)?o[i++]=s:a[d++]=g(e,s);for(let s=0;s<i;s++)a[d+s]=g(e,o[s]);return {t:13,i:r,s:void 0,l:t,c:void 0,m:void 0,d:void 0,a,f:void 0}}function oe(e,r){let n=Object.keys(r),t=n.length,a=new Array(t),o=new Array(t),i=new Array(t),d=new Array(t),s=0,u=0,l;for(let f of n)l=r[f],N(l)?(i[s]=f,d[s]=l,s++):(a[u]=f,o[u]=g(e,l),u++);for(let f=0;f<s;f++)a[u+f]=i[f],o[u+f]=g(e,d[f]);return {k:a,v:o,s:t}}function De(e,r,n){S(e.features&1024,'Unsupported type "Iterable"');let t=q(n),a=Array.from(n);return {t:21,i:r,s:void 0,l:a.length,c:void 0,m:void 0,d:t?oe(e,t):void 0,a:Ne(e,a),f:void 0}}function je(e,r,n,t){return Symbol.iterator in n?De(e,r,n):{t:t?17:16,i:r,s:void 0,l:void 0,c:void 0,m:void 0,d:oe(e,n),a:void 0,f:void 0}}function Me(e,r,n){let t=C(e,n),a=t?oe(e,t):void 0;return {t:20,i:r,s:void 0,l:n.errors.length,c:void 0,m:n.message,d:a,a:Ne(e,n.errors),f:void 0}}function ae(e,r,n){let t=C(e,n),a=t?oe(e,t):void 0;return {t:19,i:r,s:void 0,l:void 0,c:w(n),m:n.message,d:a,a:void 0,f:void 0}}function g(e,r){switch(typeof r){case"boolean":return r?T:U;case"undefined":return j;case"string":return K(r);case"number":switch(r){case 1/0:return _;case-1/0:return L;}return r!==r?x:Object.is(r,-0)?D:F(r);case"bigint":return W(e,r);case"object":{if(!r)return M;let n=z(e,r);if(e.markedRefs.has(n))return Y(n);if(Array.isArray(r))return Nr(e,n,r);switch(r.constructor){case Date:return Z(n,r);case RegExp:return G(n,r);case Int8Array:case Int16Array:case Int32Array:case Uint8Array:case Uint16Array:case Uint32Array:case Uint8ClampedArray:case Float32Array:case Float64Array:return H(e,n,r);case BigInt64Array:case BigUint64Array:return J(e,n,r);case Map:return pr(e,n,r);case Set:return vr(e,n,r);case Object:return je(e,n,r,!1);case void 0:return je(e,n,r,!0);case AggregateError:return e.features&1?Me(e,n,r):ae(e,n,r);case Error:case EvalError:case RangeError:case ReferenceError:case SyntaxError:case TypeError:case URIError:return ae(e,n,r);}if(r instanceof AggregateError)return e.features&1?Me(e,n,r):ae(e,n,r);if(r instanceof Error)return ae(e,n,r);if(Symbol.iterator in r)return De(e,n,r);throw new Error("Unsupported type")}case"symbol":return S(e.features&1024,'Unsupported type "symbol"'),S(r in O,"seroval only supports well-known symbols"),$(r);default:throw new Error("Unsupported type")}}function ie(e,r){let n=g(e,r),t=n.t===16||n.t===21;return [n,P(e,r),t]}function pe(e,r,n,t){if(e.vars.length){let a=ze(e),o=t;if(a){let d=m(e,r);o=t+","+a+d,t.startsWith(d+"=")||(o=d+"="+o);}let i=e.vars.length>1?e.vars.join(","):e.vars[0];return e.features&4?(i=e.vars.length>1||e.vars.length===0?"("+i+")":i,"("+i+"=>("+o+"))()"):"(function("+i+"){return "+o+"})()"}return n?"("+t+")":t}function gr(e,r){let n=h(r),[t,a,o]=ie(n,e),i=V(n),d=y(i,t);return pe(i,a,o,d)}

const ES2017FLAG = I.AggregateError
| I.BigInt
| I.BigIntTypedArray;
function stringify(data) {
  return gr(data, {
    disabledFeatures: ES2017FLAG
  });
}
function renderToString(code, options = {}) {
  let scripts = "";
  sharedConfig.context = {
    id: options.renderId || "",
    count: 0,
    suspense: {},
    lazy: {},
    assets: [],
    nonce: options.nonce,
    writeResource(id, p, error) {
      if (sharedConfig.context.noHydrate) return;
      if (error) return scripts += `_$HY.set("${id}", ${stringify(p)});`;
      scripts += `_$HY.set("${id}", ${stringify(p)});`;
    }
  };
  let html = createRoot(d => {
    setTimeout(d);
    return resolveSSRNode(escape(code()));
  });
  sharedConfig.context.noHydrate = true;
  html = injectAssets(sharedConfig.context.assets, html);
  if (scripts.length) html = injectScripts(html, scripts, options.nonce);
  return html;
}
function ssr(t, ...nodes) {
  if (nodes.length) {
    let result = "";
    for (let i = 0; i < nodes.length; i++) {
      result += t[i];
      const node = nodes[i];
      if (node !== undefined) result += resolveSSRNode(node);
    }
    t = result + t[nodes.length];
  }
  return {
    t
  };
}
function escape(s, attr) {
  const t = typeof s;
  if (t !== "string") {
    if (!attr && t === "function") return escape(s());
    if (!attr && Array.isArray(s)) {
      for (let i = 0; i < s.length; i++) s[i] = escape(s[i]);
      return s;
    }
    if (attr && t === "boolean") return String(s);
    return s;
  }
  const delim = attr ? '"' : "<";
  const escDelim = attr ? "&quot;" : "&lt;";
  let iDelim = s.indexOf(delim);
  let iAmp = s.indexOf("&");
  if (iDelim < 0 && iAmp < 0) return s;
  let left = 0,
    out = "";
  while (iDelim >= 0 && iAmp >= 0) {
    if (iDelim < iAmp) {
      if (left < iDelim) out += s.substring(left, iDelim);
      out += escDelim;
      left = iDelim + 1;
      iDelim = s.indexOf(delim, left);
    } else {
      if (left < iAmp) out += s.substring(left, iAmp);
      out += "&amp;";
      left = iAmp + 1;
      iAmp = s.indexOf("&", left);
    }
  }
  if (iDelim >= 0) {
    do {
      if (left < iDelim) out += s.substring(left, iDelim);
      out += escDelim;
      left = iDelim + 1;
      iDelim = s.indexOf(delim, left);
    } while (iDelim >= 0);
  } else while (iAmp >= 0) {
    if (left < iAmp) out += s.substring(left, iAmp);
    out += "&amp;";
    left = iAmp + 1;
    iAmp = s.indexOf("&", left);
  }
  return left < s.length ? out + s.substring(left) : out;
}
function resolveSSRNode(node) {
  const t = typeof node;
  if (t === "string") return node;
  if (node == null || t === "boolean") return "";
  if (Array.isArray(node)) {
    let prev = {};
    let mapped = "";
    for (let i = 0, len = node.length; i < len; i++) {
      if (typeof prev !== "object" && typeof node[i] !== "object") mapped += `<!--!$-->`;
      mapped += resolveSSRNode(prev = node[i]);
    }
    return mapped;
  }
  if (t === "object") return node.t;
  if (t === "function") return resolveSSRNode(node());
  return String(node);
}
function injectAssets(assets, html) {
  if (!assets || !assets.length) return html;
  let out = "";
  for (let i = 0, len = assets.length; i < len; i++) out += assets[i]();
  return html.replace(`</head>`, out + `</head>`);
}
function injectScripts(html, scripts, nonce) {
  const tag = `<script${nonce ? ` nonce="${nonce}"` : ""}>${scripts}</script>`;
  const index = html.indexOf("<!--xs-->");
  if (index > -1) {
    return html.slice(0, index) + tag + html.slice(index);
  }
  return html + tag;
}

const contexts = /* @__PURE__ */ new WeakMap();
function getContext(result) {
  if (contexts.has(result)) {
    return contexts.get(result);
  }
  let ctx = {
    c: 0,
    get id() {
      return "s" + this.c.toString();
    }
  };
  contexts.set(result, ctx);
  return ctx;
}
function incrementId(ctx) {
  let id = ctx.id;
  ctx.c++;
  return id;
}

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
function check(Component, props, children) {
  if (typeof Component !== "function")
    return false;
  const { html } = renderToStaticMarkup.call(this, Component, props, children);
  return typeof html === "string";
}
function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
  const renderId = (metadata == null ? void 0 : metadata.hydrate) ? incrementId(getContext(this.result)) : "";
  const html = renderToString(
    () => {
      const slots = {};
      for (const [key, value] of Object.entries(slotted)) {
        const name = slotName(key);
        slots[name] = ssr(`<astro-slot name="${name}">${value}</astro-slot>`);
      }
      const newProps = {
        ...props,
        ...slots,
        children: children != null ? ssr(`<astro-slot>${children}</astro-slot>`) : children
      };
      return createComponent(Component, newProps);
    },
    {
      renderId
    }
  );
  return {
    attrs: {
      "data-solid-render-id": renderId
    },
    html
  };
}
var server_default = {
  check,
  renderToStaticMarkup
};

const pageMap = new Map([["src/pages/index.astro", _page0],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default$1 }),Object.assign({"name":"@astrojs/solid-js","clientEntrypoint":"@astrojs/solid-js/client.js","serverEntrypoint":"@astrojs/solid-js/server.js","jsxImportSource":"solid-js"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["/_astro/index.43953ad1.css"],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/cow/apps/CowDotDev/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","@astrojs/solid-js/client.js":"_astro/client.1d12319a.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.43953ad1.css","/favicon.svg","/_astro/client.1d12319a.js"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
