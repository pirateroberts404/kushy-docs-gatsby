webpackJsonp([0xba8fa9324ae8],{356:function(n,s){n.exports={data:{post:{html:'<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">  curl &quot;https://kushy.net/api/v1/inventory/&quot;</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> api <span class="token operator">=</span> <span class="token string">\'https://kushy.net/api/v1/inventory/\'</span><span class="token punctuation">;</span>\n<span class="token function">fetch</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token variable">$client</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GuzzleHttp<span class="token punctuation">\\</span>Client</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token single-quoted-string string">\'base_uri\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'https://kushy.net/api/v1/\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$apiEndpoint</span> <span class="token operator">=</span> <span class="token single-quoted-string string">\'inventory\'</span><span class="token punctuation">;</span>\n\n<span class="token variable">$response</span> <span class="token operator">=</span> <span class="token variable">$client</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">request</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'GET\'</span><span class="token punctuation">,</span> <span class="token variable">$apiEndpoint</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$response</span> <span class="token operator">=</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">getContents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">echo</span> <span class="token single-quoted-string string">\'State Name\'</span><span class="token punctuation">.</span> <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token single-quoted-string string">\'california\'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token single-quoted-string string">\'title\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">echo</span> <span class="token single-quoted-string string">\'State Slug\'</span><span class="token punctuation">.</span> <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token single-quoted-string string">\'california\'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token single-quoted-string string">\'slug\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">[</span><span class="token single-quoted-string string">\'california\'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token single-quoted-string string">\'cities\'</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token variable">$city</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">echo</span> <span class="token variable">$city</span>\n<span class="token punctuation">}</span>\n<span class="token delimiter important">?></span>\n</code></pre>\n      </div>\n<blockquote>\n<p>The above command returns JSON structured like this:</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This endpoint retrieves all US states and their city data.</p>\n<h3>HTTP Request</h3>\n<p><code class="language-text">GET https://kushy.net/api/v1/inventory/</code></p>\n<h3>The states object</h3>\n<table>\n<thead>\n<tr>\n<th>Attributes</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>[\nstateName\n]</td>\n<td>object</td>\n<td>State object (see specific state section)</td>\n</tr>\n</tbody>\n</table>',frontmatter:{title:"Get all inventory",method:"get",route:"/inventory/"},fields:{slug:"/docs/inventory/get-all-inventory/",section:"docs",category:"inventory"}},sidebar:{totalCount:16,edges:[{node:{frontmatter:{title:"Delete strain",method:"delete",route:"/strains/:id"},fields:{slug:"/docs/strains/delete-strain/",category:"strains"}}},{node:{frontmatter:{title:"Get all strains",method:"get",route:"/strains/"},fields:{slug:"/docs/strains/get-all-strains/",category:"strains"}}},{node:{frontmatter:{title:"Get specific strain",method:"get",route:"/strains/:id"},fields:{slug:"/docs/strains/get-specific-strain/",category:"strains"}}},{node:{frontmatter:{title:"Get all states",method:"get",route:"/states/"},fields:{slug:"/docs/states/get-all-states/",category:"states"}}},{node:{frontmatter:{title:"Get specific states",method:"get",route:"/states/:state"},fields:{slug:"/docs/states/get-specific-state/",category:"states"}}},{node:{frontmatter:{title:"Delete shop",method:"delete",route:"/shops/:id"},fields:{slug:"/docs/shops/delete-shop/",category:"shops"}}},{node:{frontmatter:{title:"Get all shops",method:"get",route:"/shops/"},fields:{slug:"/docs/shops/get-all-shops/",category:"shops"}}},{node:{frontmatter:{title:"Get specific shop",method:"get",route:"/shops/:id"},fields:{slug:"/docs/shops/get-specific-shop/",category:"shops"}}},{node:{frontmatter:{title:"Create new shop",method:"post",route:"/shops/"},fields:{slug:"/docs/shops/post-create-shop/",category:"shops"}}},{node:{frontmatter:{title:"Update shop",method:"put",route:"/shops/:id"},fields:{slug:"/docs/shops/put-update-shop/",category:"shops"}}},{node:{frontmatter:{title:"Get search results from all posts",method:"get",route:"/search/:field/:search"},fields:{slug:"/docs/search/get-search-all-posts/",category:"search"}}},{node:{frontmatter:{title:"Get all inventory",method:"get",route:"/inventory/"},fields:{slug:"/docs/inventory/get-all-inventory/",category:"inventory"}}},{node:{frontmatter:{title:"Get inventory of specific shop/brand",method:"get",route:"/inventory/menu/:slug"},fields:{slug:"/docs/inventory/get-menu-inventory/",category:"inventory"}}},{node:{frontmatter:{title:"Authorization",method:null,route:"/authorization/application"},fields:{slug:"/docs/authorization/application-authorization/",category:"authorization"}}},{node:{frontmatter:{title:"Authorization",method:null,route:"/authorization/"},fields:{slug:"/docs/authorization/introduction/",category:"authorization"}}},{node:{frontmatter:{title:"Scopes",method:null,route:"/authorization/scopes"},fields:{slug:"/docs/authorization/scopes/",category:"authorization"}}}]},pagination:{totalCount:2,edges:[{node:{frontmatter:{title:"Get all inventory"},fields:{slug:"/docs/inventory/get-all-inventory/"}},next:{fields:{slug:"/docs/inventory/get-menu-inventory/"}},previous:null},{node:{frontmatter:{title:"Get inventory of specific shop/brand"},fields:{slug:"/docs/inventory/get-menu-inventory/"}},next:null,previous:{fields:{slug:"/docs/inventory/get-all-inventory/"}}}]}},pathContext:{slug:"/docs/inventory/get-all-inventory/",category:"inventory"}}}});
//# sourceMappingURL=path---docs-inventory-get-all-inventory-b55a8a991192d7f592a4.js.map