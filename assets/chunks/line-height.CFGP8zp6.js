import{v,i as d}from"./theme.B80B4RRr.js";import{p as n,o as t,c as a,a as e,M as h,aa as y,S as f,Y as m,u as r,aG as u,aI as b,aJ as S,aK as x,aL as $,aM as k,aN as T,aO as j,aP as z,aQ as O,aR as B,_ as M,aS as N,aT as C,X as s}from"./framework.lYNz_Rcs.js";const L={class:"demo-typo-size"},P=e("tr",null,[e("td",null,"Level"),e("td",null,"Font Size"),e("td",{class:"color-dark-light"},"Demo")],-1),V=e("td",null,"Build with Element",-1),D=n({__name:"convention",setup(c){const o=[{level:"Supplementary text",type:"extra-small"},{level:"Body (small)",type:"small"},{level:"Body",type:"base"},{level:"Small Title",type:"medium"},{level:"Title",type:"large"},{level:"Main Title",type:"extra-large"}];function _(p){return p.split("-").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(" ")}return(p,i)=>(t(),a("table",L,[e("tbody",null,[P,(t(),a(h,null,y(o,(l,g)=>e("tr",{key:g,style:f(`font-size: var(--el-font-size-${l.type})`)},[e("td",null,m(l.level),1),e("td",null,m(r(v)(`--el-font-size-${l.type}`).value+" "+_(l.type)),1),V],4)),64))])]))}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),H={key:0,class:"demo-term-box"},E=u('<img src="'+b+'" alt="" data-v-5e9e2884><img src="'+S+'" alt="" data-v-5e9e2884><img src="'+x+'" alt="" data-v-5e9e2884><img src="'+$+'" alt="" data-v-5e9e2884><img src="'+k+'" alt="" data-v-5e9e2884>',5),F=[E],I={key:1,class:"demo-term-box"},R=u('<img src="'+T+'" alt="" data-v-5e9e2884><img src="'+j+'" alt="" data-v-5e9e2884><img src="'+z+'" alt="" data-v-5e9e2884><img src="'+O+'" alt="" data-v-5e9e2884><img src="'+B+'" alt="" data-v-5e9e2884>',5),w=[R],A=n({__name:"font",setup(c){return(o,_)=>r(d)?(t(),a("div",I,w)):(t(),a("div",H,F))}}),G=M(A,[["__scopeId","data-v-5e9e2884"]]),W=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),J={key:0,class:"lineH-left",src:N},K={key:1,class:"lineH-left",src:C},Q=e("ul",{class:"lineH-right"},[e("li",null,[s("line-height:1 "),e("span",null,"No line height")]),e("li",null,[s("line-height:1.3 "),e("span",null,"Compact")]),e("li",null,[s("line-height:1.5 "),e("span",null,"Regular")]),e("li",null,[s("line-height:1.7 "),e("span",null,"Loose")])],-1),U=n({__name:"line-height",setup(c){return(o,_)=>(t(),a("div",null,[r(d)?(t(),a("img",J)):(t(),a("img",K)),Q]))}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{q as _,W as a,Z as b};