import{_ as l}from"./chunks/theme.B80B4RRr.js";import{c as h,a as s,y as n,X as i,aG as t,o as p}from"./chunks/framework.lYNz_Rcs.js";const k=s("h1",{id:"服务端渲染-ssr",tabindex:"-1"},[i("服务端渲染 (SSR) "),s("a",{class:"header-anchor vp-link",href:"#服务端渲染-ssr","aria-label":'Permalink to "服务端渲染 (SSR)"'},"​")],-1),e=s("p",null,"当使用 Element Plus 在 SSR 场景下开发时，您需要在 SSR 期间进行特殊处理，以避免水合错误。",-1),E={class:"tip custom-block"},r=s("p",{class:"custom-block-title"},"TIP",-1),d=i("对于Nuxt 用户，我们提供的 "),g={href:"https://github.com/element-plus/element-plus-nuxt",class:"vp-link",target:"_blank",rel:"noreferrer"},y=i("Nuxt 模块"),o=i(" 已经包含了对这些问题的处理方案。 您只需要安装它就可以了。"),c=t("",7),F={href:"https://vuejs.org/guide/scaling-up/ssr.html#teleports",class:"vp-link",target:"_blank",rel:"noreferrer"},u=i("Teleport"),C=i(" 被元素加元件中的多个组件内部使用 (例如) ElDialog, ElDrawer, ElTooltip, ElDropdown, ElSelect, ElDatePicker ...)，所以在SSR期间需要特殊处理。"),A=t("",8),D={class:"warning custom-block"},_=s("p",{class:"custom-block-title"},"WARNING",-1),m=i("Teleport 可能会有一些 "),B={href:"https://github.com/vuejs/core/issues?q=is%3Aissue+is%3Aopen+ssr+teleport+",class:"vp-link",target:"_blank",rel:"noreferrer"},v=i("SSR问题"),b=i("，所以你应该特别注意以下几种情况。"),T=s("ol",null,[s("li",null,[i("基于 ElTooltip 的 "),s("code",null,"teleported"),i(" 的属性应该是一致的，建议使用默认值。")]),s("li",null,[i("ElDialog 和 ElDrawer 的 "),s("code",null," append-to-body"),i(" 属性值应该是一致的，建议启用 "),s("code",null,"append-to-body"),i("。")]),s("li",null,[i("ElSubMenu组件有多层弹出窗口，建议启用 "),s("code",null,"teleported")])],-1),f=t("",5),j=JSON.parse('{"title":"SSR","description":"","frontmatter":{"title":"SSR","lang":"zh-CN"},"headers":[{"level":2,"title":"提供一个ID","slug":"提供一个id","link":"#提供一个id","children":[]},{"level":2,"title":"配置 ZIndex","slug":"配置-zindex","link":"#配置-zindex","children":[]},{"level":2,"title":"Teleports","slug":"teleports","link":"#teleports","children":[{"level":3,"title":"在挂载时渲染 Teleport","slug":"在挂载时渲染-teleport","link":"#在挂载时渲染-teleport","children":[]},{"level":3,"title":"注入 Teleport 标记","slug":"注入-teleport-标记","link":"#注入-teleport-标记","children":[]}]}],"relativePath":"zh-CN/guide/ssr.md","filePath":"zh-CN/guide/ssr.md","lastUpdated":null}'),x={name:"zh-CN/guide/ssr.md"},R=Object.assign(x,{setup(S){return(I,N)=>{const a=l;return p(),h("div",null,[k,e,s("div",E,[r,s("p",null,[d,s("a",g,[y,n(a,{class:"link-icon"})]),o])]),c,s("p",null,[s("a",F,[u,n(a,{class:"link-icon"})]),C]),A,s("div",D,[_,s("p",null,[m,s("a",B,[v,n(a,{class:"link-icon"})]),b]),T]),f])}}});export{j as __pageData,R as default};