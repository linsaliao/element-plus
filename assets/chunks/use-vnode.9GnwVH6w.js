import{G as l,E as a,d as y,Z as h}from"./theme.CK6SIbTt.js";import{p as _,q as r,o as i,t as p,v as c,X as s,ak as m,ap as x,c as d,y as f,M as b,r as C}from"./framework.DcRevfCx.js";const T=_({__name:"alert",setup(u){const n=()=>{l.alert("This is a message","Title",{confirmButtonText:"OK",callback:t=>{a({type:"info",message:`action: ${t}`})}})};return(t,o)=>{const e=r("el-button");return i(),p(e,{plain:"",onClick:n},{default:c(()=>[s("Click to open the Message Box")]),_:1})}}}),D=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),v=_({__name:"centered-content",setup(u){const n=()=>{l.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",center:!0}).then(()=>{a({type:"success",message:"Delete completed"})}).catch(()=>{a({type:"info",message:"Delete canceled"})})};return(t,o)=>{const e=r("el-button");return i(),p(e,{plain:"",onClick:n},{default:c(()=>[s("Click to open Message Box")]),_:1})}}}),E=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),B=_({__name:"confirm",setup(u){const n=()=>{l.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(()=>{a({type:"success",message:"Delete completed"})}).catch(()=>{a({type:"info",message:"Delete canceled"})})};return(t,o)=>{const e=r("el-button");return i(),p(e,{plain:"",onClick:n},{default:c(()=>[s("Click to open the Message Box")]),_:1})}}}),K=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),M=_({__name:"customization",setup(u){const n=()=>{l({title:"Message",message:m("p",null,[m("span",null,"Message can be "),m("i",{style:"color: teal"},"VNode")]),showCancelButton:!0,confirmButtonText:"OK",cancelButtonText:"Cancel",beforeClose:(t,o,e)=>{t==="confirm"?(o.confirmButtonLoading=!0,o.confirmButtonText="Loading...",setTimeout(()=>{e(),setTimeout(()=>{o.confirmButtonLoading=!1},300)},3e3)):e()}}).then(t=>{a({type:"info",message:`action: ${t}`})})};return(t,o)=>{const e=r("el-button");return i(),p(e,{plain:"",onClick:n},{default:c(()=>[s("Click to open Message Box")]),_:1})}}}),V=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),O=_({__name:"customized-icon",setup(u){const n=()=>{l.confirm("It will permanently delete the file. Continue?","Warning",{type:"warning",icon:x(y)})};return(t,o)=>{const e=r("el-button");return i(),p(e,{plain:"",onClick:n},{default:c(()=>[s("Click to open Message Box")]),_:1})}}}),L=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),k=_({__name:"distinguishable-close-cancel",setup(u){const n=()=>{l.confirm("You have unsaved changes, save and proceed?","Confirm",{distinguishCancelAndClose:!0,confirmButtonText:"Save",cancelButtonText:"Discard Changes"}).then(()=>{a({type:"info",message:"Changes saved. Proceeding to a new route."})}).catch(t=>{a({type:"info",message:t==="cancel"?"Changes discarded. Proceeding to a new route.":"Stay in the current route"})})};return(t,o)=>{const e=r("el-button");return i(),p(e,{plain:"",onClick:n},{default:c(()=>[s("Click to open Message Box")]),_:1})}}}),N=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),w=_({__name:"draggable",setup(u){const n=()=>{l.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",draggable:!0}).then(()=>{a({type:"success",message:"Delete completed"})}).catch(()=>{a({type:"info",message:"Delete canceled"})})},t=()=>{l.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",draggable:!0,overflow:!0}).then(()=>{a({type:"success",message:"Delete completed"})}).catch(()=>{a({type:"info",message:"Delete canceled"})})};return(o,e)=>{const g=r("el-button");return i(),d(b,null,[f(g,{plain:"",onClick:n},{default:c(()=>[s("Open a draggable Message Box")]),_:1}),f(g,{plain:"",onClick:t},{default:c(()=>[s(" Open a overflow draggable Message Box ")]),_:1})],64)}}}),W=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),S=_({__name:"prompt",setup(u){const n=()=>{l.prompt("Please input your e-mail","Tip",{confirmButtonText:"OK",cancelButtonText:"Cancel",inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"Invalid Email"}).then(({value:t})=>{a({type:"success",message:`Your email is:${t}`})}).catch(()=>{a({type:"info",message:"Input canceled"})})};return(t,o)=>{const e=r("el-button");return i(),p(e,{plain:"",onClick:n},{default:c(()=>[s("Click to open Message Box")]),_:1})}}}),H=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),j=_({__name:"use-html",setup(u){const n=()=>{l.alert("<strong>proxy is <i>HTML</i> string</strong>","HTML String",{dangerouslyUseHTMLString:!0})};return(t,o)=>{const e=r("el-button");return i(),p(e,{plain:"",onClick:n},{default:c(()=>[s("Click to open Message Box")]),_:1})}}}),I=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),P=_({__name:"use-vnode",setup(u){const n=()=>{l({title:"Message",message:m("p",null,[m("span",null,"Message can be "),m("i",{style:"color: teal"},"VNode")])})},t=()=>{const o=C(!1);l({title:"Message",message:()=>m(h,{modelValue:o.value,"onUpdate:modelValue":e=>{o.value=e}})})};return(o,e)=>{const g=r("el-button");return i(),d(b,null,[f(g,{plain:"",onClick:n},{default:c(()=>[s("Common VNode")]),_:1}),f(g,{plain:"",onClick:t},{default:c(()=>[s("Dynamic props")]),_:1})],64)}}}),U=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{D as _,E as a,K as b,V as c,L as d,N as e,W as f,H as g,I as h,U as i};