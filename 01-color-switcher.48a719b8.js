const e=document.querySelector("#start"),t=document.querySelector("#stop"),r=document.querySelector("body");let o=null;e.addEventListener("click",(function(){e.setAttribute("disabled","true"),t.removeAttribute("disabled"),o=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(function(){e.removeAttribute("disabled"),t.setAttribute("disabled","true"),clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.48a719b8.js.map