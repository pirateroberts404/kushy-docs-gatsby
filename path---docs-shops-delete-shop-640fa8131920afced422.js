webpackJsonp([24822134637858],{367:function(s,t){s.exports={data:{post:{html:'<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token function">postData</span><span class="token punctuation">(</span><span class="token string">\'http://kushy.net/api/v1/shops/09e4b270-5c99-11e8-aaf1-cd90abb01fbc\'</span><span class="token punctuation">,</span> formData<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>data <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// JSON from `response.json()` call</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">postData</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    cache<span class="token punctuation">:</span> <span class="token string">\'no-cache\'</span><span class="token punctuation">,</span> \n    headers<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token string">\'user-agent\'</span><span class="token punctuation">:</span> <span class="token string">\'Mozilla/4.0 MDN Example\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'content-type\'</span><span class="token punctuation">:</span> <span class="token string">\'application/json\'</span>\n      <span class="token string">\'Authorization\'</span><span class="token punctuation">:</span> <span class="token string">"Bearer "</span> <span class="token operator">+</span> myToken<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    method<span class="token punctuation">:</span> <span class="token string">\'DELETE\'</span><span class="token punctuation">,</span> \n    mode<span class="token punctuation">:</span> <span class="token string">\'cors\'</span><span class="token punctuation">,</span> \n    referrer<span class="token punctuation">:</span> <span class="token string">\'no-referrer\'</span><span class="token punctuation">,</span> \n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>response <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// parses response to JSON</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token variable">$myToken</span> <span class="token operator">=</span> <span class="token single-quoted-string string">\'your-kushy-api-oauth-private-access-key\'</span><span class="token punctuation">;</span>\n<span class="token variable">$client</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GuzzleHttp<span class="token punctuation">\\</span>Client</span><span class="token punctuation">;</span>\n<span class="token variable">$response</span> <span class="token operator">=</span> <span class="token variable">$client</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">request</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'DELETE\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'http://kushy.net/api/v1/shops/09e4b270-5c99-11e8-aaf1-cd90abb01fbc\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>\n    <span class="token single-quoted-string string">\'headers\'</span>         <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>\n        <span class="token single-quoted-string string">\'Accept\'</span>        <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'application/json\'</span><span class="token punctuation">,</span>\n        <span class="token single-quoted-string string">\'Authorization\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"Bearer <span class="token interpolation"><span class="token variable">$myToken</span></span>"</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token delimiter important">?></span>\n</code></pre>\n      </div>\n<p>This endpoint deletes a shop. </p>\n<h3>HTTP Request</h3>\n<p><code class="language-text">DELETE http://kushy.net/api/v1/shops/&lt;ID&gt;</code></p>\n<h3>Authorization</h3>\n<p>All requests require an OAuth access token and Admin level access. OAuth access tokens are passed via the <code class="language-text">Authorization</code> HTTP header:</p>\n<p><code class="language-text">Authorization: Bearer {access_token_here}</code></p>',frontmatter:{title:"Delete shop",method:"delete",route:"/shops/:id"},fields:{slug:"/docs/shops/delete-shop/",section:"docs",category:"shops"}},sidebar:{totalCount:20,edges:[{node:{frontmatter:{title:"Delete strain",method:"delete",route:"/strains/:id"},fields:{slug:"/docs/strains/delete-strain/",category:"strains"}}},{node:{frontmatter:{title:"Get all strains",method:"get",route:"/strains/"},fields:{slug:"/docs/strains/get-all-strains/",category:"strains"}}},{node:{frontmatter:{title:"Get specific strain",method:"get",route:"/strains/:id"},fields:{slug:"/docs/strains/get-specific-strain/",category:"strains"}}},{node:{frontmatter:{title:"Get all states",method:"get",route:"/states/"},fields:{slug:"/docs/states/get-all-states/",category:"states"}}},{node:{frontmatter:{title:"Get specific states",method:"get",route:"/states/:state"},fields:{slug:"/docs/states/get-specific-state/",category:"states"}}},{node:{frontmatter:{title:"Delete shop",method:"delete",route:"/shops/:id"},fields:{slug:"/docs/shops/delete-shop/",category:"shops"}}},{node:{frontmatter:{title:"Get all shops",method:"get",route:"/shops/"},fields:{slug:"/docs/shops/get-all-shops/",category:"shops"}}},{node:{frontmatter:{title:"Get specific shop",method:"get",route:"/shops/:id"},fields:{slug:"/docs/shops/get-specific-shop/",category:"shops"}}},{node:{frontmatter:{title:"Create new shop",method:"post",route:"/shops/"},fields:{slug:"/docs/shops/post-create-shop/",category:"shops"}}},{node:{frontmatter:{title:"Update shop",method:"put",route:"/shops/:id"},fields:{slug:"/docs/shops/put-update-shop/",category:"shops"}}},{node:{frontmatter:{title:"Get search results from all posts",method:"get",route:"/search/:field/:search"},fields:{slug:"/docs/search/get-search-all-posts/",category:"search"}}},{node:{frontmatter:{title:"Get all photos",method:"get",route:"/photos/"},fields:{slug:"/docs/photos/get-all-photos/",category:"photos"}}},{node:{frontmatter:{title:"Get a post's photos",method:"get",route:"/photos/post/post/:id"},fields:{slug:"/docs/photos/get-post-photos/",category:"photos"}}},{node:{frontmatter:{title:"Get specific photo",method:"get",route:"/photos/:id"},fields:{slug:"/docs/photos/get-specific-photo/",category:"photos"}}},{node:{frontmatter:{title:"The meta object",method:null,route:"/objects/meta"},fields:{slug:"/docs/objects/meta/",category:"objects"}}},{node:{frontmatter:{title:"Get all inventory",method:"get",route:"/inventory/"},fields:{slug:"/docs/inventory/get-all-inventory/",category:"inventory"}}},{node:{frontmatter:{title:"Get inventory of specific shop/brand",method:"get",route:"/inventory/menu/:slug"},fields:{slug:"/docs/inventory/get-menu-inventory/",category:"inventory"}}},{node:{frontmatter:{title:"Authorization",method:null,route:"/authorization/application"},fields:{slug:"/docs/authorization/application-authorization/",category:"authorization"}}},{node:{frontmatter:{title:"Authorization",method:null,route:"/authorization/"},fields:{slug:"/docs/authorization/introduction/",category:"authorization"}}},{node:{frontmatter:{title:"Scopes",method:null,route:"/authorization/scopes"},fields:{slug:"/docs/authorization/scopes/",category:"authorization"}}}]},pagination:{totalCount:5,edges:[{node:{frontmatter:{title:"Delete shop"},fields:{slug:"/docs/shops/delete-shop/"}},next:{fields:{slug:"/docs/shops/get-all-shops/"}},previous:null},{node:{frontmatter:{title:"Get all shops"},fields:{slug:"/docs/shops/get-all-shops/"}},next:{fields:{slug:"/docs/shops/get-specific-shop/"}},previous:{fields:{slug:"/docs/shops/delete-shop/"}}},{node:{frontmatter:{title:"Get specific shop"},fields:{slug:"/docs/shops/get-specific-shop/"}},next:{fields:{slug:"/docs/shops/post-create-shop/"}},previous:{fields:{slug:"/docs/shops/get-all-shops/"}}},{node:{frontmatter:{title:"Create new shop"},fields:{slug:"/docs/shops/post-create-shop/"}},next:{fields:{slug:"/docs/shops/put-update-shop/"}},previous:{fields:{slug:"/docs/shops/get-specific-shop/"}}},{node:{frontmatter:{title:"Update shop"},fields:{slug:"/docs/shops/put-update-shop/"}},next:null,previous:{fields:{slug:"/docs/shops/post-create-shop/"}}}]}},pathContext:{slug:"/docs/shops/delete-shop/",category:"shops"}}}});
//# sourceMappingURL=path---docs-shops-delete-shop-640fa8131920afced422.js.map