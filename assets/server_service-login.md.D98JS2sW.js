import{_ as t,c as a,o as e,a2 as s}from"./chunks/framework.Br3nnO5T.js";const b=JSON.parse('{"title":"客服登录","description":"","frontmatter":{},"headers":[],"relativePath":"server/service-login.md","filePath":"server/service-login.md"}'),n={name:"server/service-login.md"},o=s(`<h1 id="客服登录" tabindex="-1">客服登录 <a class="header-anchor" href="#客服登录" aria-label="Permalink to &quot;客服登录&quot;">​</a></h1><h3 id="功能说明" tabindex="-1">功能说明 <a class="header-anchor" href="#功能说明" aria-label="Permalink to &quot;功能说明&quot;">​</a></h3><p>客服登录</p><h3 id="接口调用说明" tabindex="-1">接口调用说明 <a class="header-anchor" href="#接口调用说明" aria-label="Permalink to &quot;接口调用说明&quot;">​</a></h3><blockquote><p>接口地址:<code>/user/service/login</code> <code>post</code> <code>application/json</code></p></blockquote><blockquote><p>注意: 客服登录密码默认为客服账号</p></blockquote><h3 id="请求参数" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数" aria-label="Permalink to &quot;请求参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">Header参数</th><th>属性</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:left;">sdkId</td><td><span style="color:#f79009;">必填</span></td><td>后台sdk参数</td></tr></tbody></table><table tabindex="0"><thead><tr><th style="text-align:left;">Body参数</th><th>类型</th><th>属性</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:left;">account</td><td>String</td><td><span style="color:#f79009;">必填</span></td><td>客服账号</td></tr><tr><td style="text-align:left;">password</td><td>String</td><td><span style="color:#f79009;">必填</span></td><td>客服密码</td></tr></tbody></table><h3 id="响应参数" tabindex="-1">响应参数 <a class="header-anchor" href="#响应参数" aria-label="Permalink to &quot;响应参数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 返回参数用于sdk登录</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;code&quot;: 1000,</span></span>
<span class="line"><span>  &quot;message&quot;: &quot;成功&quot;,</span></span>
<span class="line"><span>  &quot;data&quot;: {</span></span>
<span class="line"><span>    &quot;userId&quot;: &quot;xxx&quot;,</span></span>
<span class="line"><span>    &quot;sdkId&quot;: &quot;xxx&quot;,</span></span>
<span class="line"><span>    &quot;userSig&quot;: &quot;xxx&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,11),l=[o];function d(r,i,p,c,h,u){return e(),a("div",null,l)}const _=t(n,[["render",d]]);export{b as __pageData,_ as default};
