import{U as o,a3 as p,a4 as u,a5 as l,a6 as c,a7 as f,a8 as d,a9 as m,aa as h,ab as g,ac as A,d as P,u as v,y,x as C,ad as b,ae as w,af as E,ag as R}from"./chunks/framework.Br3nnO5T.js";import{t as S}from"./chunks/theme._2FEEWWE.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(S),_=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return y(()=>{C(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&b(),w(),E(),s.setup&&s.setup(),()=>R(s.Layout)}});async function T(){globalThis.__VITEPRESS__=!0;const e=D(),a=x();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function x(){return h(_)}function D(){let e=o,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&T().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{T as createApp};
