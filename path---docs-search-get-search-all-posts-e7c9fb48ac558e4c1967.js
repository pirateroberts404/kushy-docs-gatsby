webpackJsonp([3730073232390],{366:function(s,n){s.exports={data:{post:{html:'<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">  curl &quot;https://kushy.net/api/v1/search/name/chronic&quot;</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> api <span class="token operator">=</span> <span class="token string">\'https://kushy.net/api/v1/search/name/chronic\'</span><span class="token punctuation">;</span>\n<span class="token function">fetch</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token variable">$client</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GuzzleHttp<span class="token punctuation">\\</span>Client</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token single-quoted-string string">\'base_uri\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'https://kushy.net/api/v1/\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$apiEndpoint</span> <span class="token operator">=</span> <span class="token single-quoted-string string">\'search/name/chronic\'</span><span class="token punctuation">;</span>\n\n<span class="token variable">$response</span> <span class="token operator">=</span> <span class="token variable">$client</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">request</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'GET\'</span><span class="token punctuation">,</span> <span class="token variable">$apiEndpoint</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$response</span> <span class="token operator">=</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">getContents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">[</span><span class="token single-quoted-string string">\'data\'</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">echo</span> <span class="token variable">$item</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">name</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token delimiter important">?></span>\n</code></pre>\n      </div>\n<blockquote>\n<p>The above command returns JSON structured like this:</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    data<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            id<span class="token operator">:</span> <span class="token string">"371fc9f0-5ae8-11e8-9d8b-c5f206a16ed9"</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">"BC Chronic"</span><span class="token punctuation">,</span>\n            section<span class="token operator">:</span> <span class="token string">"strain"</span><span class="token punctuation">,</span>\n            slug<span class="token operator">:</span> <span class="token string">"bc-chronic"</span><span class="token punctuation">,</span>\n            categories<span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    category_id<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>\n                    post_id<span class="token operator">:</span> <span class="token string">"371fc9f0-5ae8-11e8-9d8b-c5f206a16ed9"</span><span class="token punctuation">,</span>\n                    category<span class="token operator">:</span> <span class="token punctuation">{</span>\n                        id<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>\n                        name<span class="token operator">:</span> <span class="token string">"Hybrid"</span><span class="token punctuation">,</span>\n                        slug<span class="token operator">:</span> <span class="token string">"hybrid"</span><span class="token punctuation">,</span>\n                        section<span class="token operator">:</span> <span class="token string">"strain"</span><span class="token punctuation">,</span>\n                        parent<span class="token operator">:</span> <span class="token number">0</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            avatar<span class="token operator">:</span> <span class="token string">"http://localhost/img/Icons/avatar-default-leaf.jpg"</span><span class="token punctuation">,</span>\n            featured_img<span class="token operator">:</span> <span class="token string">"http://localhost/img/Icons/avatar-default-leaf.jpg"</span><span class="token punctuation">,</span>\n            rating<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n            featured<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n            verified<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n            location<span class="token operator">:</span> <span class="token punctuation">{</span>\n                latitude<span class="token operator">:</span> <span class="token string">"0.0000000"</span><span class="token punctuation">,</span>\n                longitude<span class="token operator">:</span> <span class="token string">"0.0000000"</span><span class="token punctuation">,</span>\n                address<span class="token operator">:</span> <span class="token null">null</span><span class="token punctuation">,</span>\n                state<span class="token operator">:</span> <span class="token null">null</span><span class="token punctuation">,</span>\n                city<span class="token operator">:</span> <span class="token null">null</span><span class="token punctuation">,</span>\n                postal_code<span class="token operator">:</span> <span class="token null">null</span><span class="token punctuation">,</span>\n                country<span class="token operator">:</span> <span class="token null">null</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This endpoint searches all posts (shops, brands, products, strains) for a search term in a specific field.</p>\n<h3>HTTP Request</h3>\n<p><code class="language-text">GET https://kushy.net/api/v1/search/&lt;FIELD&gt;/&lt;SEARCH&gt;</code></p>\n<h3>The states object</h3>\n<table>\n<thead>\n<tr>\n<th>Attributes</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>field</td>\n<td>string</td>\n<td>The property/column you want to search against (see any major endpoint object like Shops for properties)</td>\n</tr>\n<tr>\n<td>search</td>\n<td>string</td>\n<td>The search string (uses a wildcard in front and behind)</td>\n</tr>\n</tbody>\n</table>',frontmatter:{title:"Get search results from all posts",method:"get",route:"/search/:field/:search"},fields:{slug:"/docs/search/get-search-all-posts/",section:"docs",category:"search"}},sidebar:{totalCount:20,edges:[{node:{frontmatter:{title:"Delete strain",method:"delete",route:"/strains/:id"},fields:{slug:"/docs/strains/delete-strain/",category:"strains"}}},{node:{frontmatter:{title:"Get all strains",method:"get",route:"/strains/"},fields:{slug:"/docs/strains/get-all-strains/",category:"strains"}}},{node:{frontmatter:{title:"Get specific strain",method:"get",route:"/strains/:id"},fields:{slug:"/docs/strains/get-specific-strain/",category:"strains"}}},{node:{frontmatter:{title:"Get all states",method:"get",route:"/states/"},fields:{slug:"/docs/states/get-all-states/",category:"states"}}},{node:{frontmatter:{title:"Get specific states",method:"get",route:"/states/:state"},fields:{slug:"/docs/states/get-specific-state/",category:"states"}}},{node:{frontmatter:{title:"Delete shop",method:"delete",route:"/shops/:id"},fields:{slug:"/docs/shops/delete-shop/",category:"shops"}}},{node:{frontmatter:{title:"Get all shops",method:"get",route:"/shops/"},fields:{slug:"/docs/shops/get-all-shops/",category:"shops"}}},{node:{frontmatter:{title:"Get specific shop",method:"get",route:"/shops/:id"},fields:{slug:"/docs/shops/get-specific-shop/",category:"shops"}}},{node:{frontmatter:{title:"Create new shop",method:"post",route:"/shops/"},fields:{slug:"/docs/shops/post-create-shop/",category:"shops"}}},{node:{frontmatter:{title:"Update shop",method:"put",route:"/shops/:id"},fields:{slug:"/docs/shops/put-update-shop/",category:"shops"}}},{node:{frontmatter:{title:"Get search results from all posts",method:"get",route:"/search/:field/:search"},fields:{slug:"/docs/search/get-search-all-posts/",category:"search"}}},{node:{frontmatter:{title:"Get all photos",method:"get",route:"/photos/"},fields:{slug:"/docs/photos/get-all-photos/",category:"photos"}}},{node:{frontmatter:{title:"Get a post's photos",method:"get",route:"/photos/post/post/:id"},fields:{slug:"/docs/photos/get-post-photos/",category:"photos"}}},{node:{frontmatter:{title:"Get specific photo",method:"get",route:"/photos/:id"},fields:{slug:"/docs/photos/get-specific-photo/",category:"photos"}}},{node:{frontmatter:{title:"The meta object",method:null,route:"/objects/meta"},fields:{slug:"/docs/objects/meta/",category:"objects"}}},{node:{frontmatter:{title:"Get all inventory",method:"get",route:"/inventory/"},fields:{slug:"/docs/inventory/get-all-inventory/",category:"inventory"}}},{node:{frontmatter:{title:"Get inventory of specific shop/brand",method:"get",route:"/inventory/menu/:slug"},fields:{slug:"/docs/inventory/get-menu-inventory/",category:"inventory"}}},{node:{frontmatter:{title:"Authorization",method:null,route:"/authorization/application"},fields:{slug:"/docs/authorization/application-authorization/",category:"authorization"}}},{node:{frontmatter:{title:"Authorization",method:null,route:"/authorization/"},fields:{slug:"/docs/authorization/introduction/",category:"authorization"}}},{node:{frontmatter:{title:"Scopes",method:null,route:"/authorization/scopes"},fields:{slug:"/docs/authorization/scopes/",category:"authorization"}}}]},pagination:{totalCount:1,edges:[{node:{frontmatter:{title:"Get search results from all posts"},fields:{slug:"/docs/search/get-search-all-posts/"}},next:null,previous:null}]}},pathContext:{slug:"/docs/search/get-search-all-posts/",category:"search"}}}});
//# sourceMappingURL=path---docs-search-get-search-all-posts-e7c9fb48ac558e4c1967.js.map