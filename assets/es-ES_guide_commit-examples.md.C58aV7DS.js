import{_ as n}from"./chunks/theme.B80B4RRr.js";import{c as l,a as s,y as e,X as i,aG as t,o}from"./chunks/framework.lYNz_Rcs.js";const p=s("h1",{id:"ejemplos-de-commit",tabindex:"-1"},[i("Ejemplos de Commit "),s("a",{class:"header-anchor vp-link",href:"#ejemplos-de-commit","aria-label":'Permalink to "Ejemplos de Commit"'},"​")],-1),h=s("h2",{id:"por-que-existe-este-capitulo",tabindex:"-1"},[i("Por qué existe este capítulo "),s("a",{class:"header-anchor vp-link",href:"#por-que-existe-este-capitulo","aria-label":'Permalink to "Por qué existe este capítulo"'},"​")],-1),r=i("Consulte "),c={href:"https://www.conventionalcommits.org/",class:"vp-link",target:"_blank",rel:"noreferrer"},d=i("Compromisos Convencionales"),k=i(" para obtener más información."),g=t(`<p>Un buen mensaje de confirmación nos sirve para:</p><ol><li>Para entender lo que el colaborador está intentando hacer</li><li>Genera automáticamente el registro de cambios</li></ol><h3 id="regla-para-escribir-mensaje-de-confirmacion" tabindex="-1">Regla para escribir mensaje de confirmación <a class="header-anchor vp-link" href="#regla-para-escribir-mensaje-de-confirmacion" aria-label="Permalink to &quot;Regla para escribir mensaje de confirmación&quot;">​</a></h3><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># (Si se aplica, este commit hará...) &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">subject</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">&gt; (Max 72 caracteres)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># |&lt;---- Usando un máximo de 72 caracteres----&gt;|</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Explicar por qué se está haciendo este cambio</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># |&lt;---- Intentar limitar cada línea a un máximo de 72 caracteres ----&gt;|</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Proporcionar enlaces o claves a cualquier ticket relevante, artículos u otros recursos</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Utilice issues y las URL completas de las solicitudes de fusión en lugar de referencias cortas,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># ya que se muestran como texto plano fuera de GitLab</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># --- COMMIT END ---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># --------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Recuerde</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Capitalizar la línea del asunto</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Usar el modo imperativo en la línea del asunto</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># No termine la línea del asunto con un punto</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># El asunto debe contener al menos 3 palabras</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Separar el tema del cuerpo con una línea en blanco</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Commits que cambian 30 o más líneas en al menos 3 archivos deben</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># describir estos cambios en el cuerpo del commit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># No use Emojis</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Utilice el cuerpo para explicar qué y por qué en vez de cómo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Puede usar múltiples líneas con &quot;-&quot; para incluir puntos en el cuerpo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Para más información: https://chris.beams.io/posts/git-commit/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># --------------------</span></span></code></pre></div><h3 id="plantilla-para-mensajes-de-confirmacion" tabindex="-1">Plantilla para mensajes de confirmación <a class="header-anchor vp-link" href="#plantilla-para-mensajes-de-confirmacion" aria-label="Permalink to &quot;Plantilla para mensajes de confirmación&quot;">​</a></h3><p>A continuación se muestra un mensaje de confirmación de plantilla para su referencia.</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">feat(components): [</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] Hice algo con botón</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Se espera un espacio en blanco entre el asunto y el cuerpo.(se espera un punto)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Describe tu cambio en una o varias líneas.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Capitaliza tu primera letra al iniciar una nueva línea</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Por favor, no exceda 72 caracteres por línea, porque sería más difícil de entender.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> También puedes añadir el símbolo de lista para una mejor disposición</span></span></code></pre></div><p>Para el encabezado del tema, el formato es:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[type](scope): [messages]</span></span></code></pre></div>`,9),m=i("Puede revisar los valores permitidos para "),u=s("strong",null,"type",-1),b=i(" y "),f=s("strong",null,"scope",-1),_=i(" en "),C={href:"https://github.com/element-plus/element-plus/blob/c2ee36a7fc72b17742d43ecdff4e2912c416141d/commitlint.config.js#L57",class:"vp-link",target:"_blank",rel:"noreferrer"},w=i("commitlint.config.js"),F=i(","),y=s("h3",{id:"enlaces-utiles",tabindex:"-1"},[i("Enlaces útiles "),s("a",{class:"header-anchor vp-link",href:"#enlaces-utiles","aria-label":'Permalink to "Enlaces útiles"'},"​")],-1),E={href:"https://about.gitlab.com/blog/2018/06/07/keeping-git-commit-history-clean/",class:"vp-link",target:"_blank",rel:"noreferrer"},v=i("Manteniendo limpio el historial de git commit"),N=JSON.parse('{"title":"Commit Examples","description":"","frontmatter":{"title":"Commit Examples","lang":"es-ES"},"headers":[{"level":2,"title":"Por qué existe este capítulo","slug":"por-que-existe-este-capitulo","link":"#por-que-existe-este-capitulo","children":[{"level":3,"title":"Regla para escribir mensaje de confirmación","slug":"regla-para-escribir-mensaje-de-confirmacion","link":"#regla-para-escribir-mensaje-de-confirmacion","children":[]},{"level":3,"title":"Plantilla para mensajes de confirmación","slug":"plantilla-para-mensajes-de-confirmacion","link":"#plantilla-para-mensajes-de-confirmacion","children":[]},{"level":3,"title":"Enlaces útiles","slug":"enlaces-utiles","link":"#enlaces-utiles","children":[]}]}],"relativePath":"es-ES/guide/commit-examples.md","filePath":"es-ES/guide/commit-examples.md","lastUpdated":null}'),x={name:"es-ES/guide/commit-examples.md"},T=Object.assign(x,{setup(B){return(j,P)=>{const a=n;return o(),l("div",null,[p,h,s("p",null,[r,s("a",c,[d,e(a,{class:"link-icon"})]),k]),g,s("p",null,[m,u,b,f,_,s("a",C,[w,e(a,{class:"link-icon"})]),F]),y,s("p",null,[s("a",E,[v,e(a,{class:"link-icon"})])])])}}});export{N as __pageData,T as default};