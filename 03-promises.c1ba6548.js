!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var u=r("iU1Pc");const i={submitRef:document.querySelector('[class="form"]'),delayRef:document.querySelector('[name="delay"]'),stepRef:document.querySelector('[name="step"]'),amountRef:document.querySelector('[name="amount"]')};function l({position:e,delay:t}){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}i.submitRef.addEventListener("submit",(t=>{t.preventDefault();let n=Number(i.delayRef.value),o=Number(i.stepRef.value),r=Number(i.amountRef.value);for(let t=1;t<=r;t++)l({position:t,delay:n}).then((t=>e(u).Notify.success(t))).catch((t=>e(u).Notify.failure(t))),n+=o}))}();
//# sourceMappingURL=03-promises.c1ba6548.js.map