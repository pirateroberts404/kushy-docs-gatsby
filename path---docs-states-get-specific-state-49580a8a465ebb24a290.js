webpackJsonp([0x88b0ee8332bd],{365:function(n,s){n.exports={data:{post:{html:'<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">  curl &quot;https://kushy.net/api/v1/states/california&quot;</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> api <span class="token operator">=</span> <span class="token string">\'https://kushy.net/api/v1/states/california\'</span><span class="token punctuation">;</span>\n<span class="token function">fetch</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token variable">$client</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GuzzleHttp<span class="token punctuation">\\</span>Client</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token single-quoted-string string">\'base_uri\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'https://kushy.net/api/v1/\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$apiEndpoint</span> <span class="token operator">=</span> <span class="token single-quoted-string string">\'states/california\'</span><span class="token punctuation">;</span>\n\n<span class="token variable">$response</span> <span class="token operator">=</span> <span class="token variable">$client</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">request</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'GET\'</span><span class="token punctuation">,</span> <span class="token variable">$apiEndpoint</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$response</span> <span class="token operator">=</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">getContents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">echo</span> <span class="token single-quoted-string string">\'State Name\'</span><span class="token punctuation">.</span> <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token single-quoted-string string">\'title\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">echo</span> <span class="token single-quoted-string string">\'State Slug\'</span><span class="token punctuation">.</span> <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token single-quoted-string string">\'slug\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">[</span><span class="token single-quoted-string string">\'cities\'</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token variable">$city</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">echo</span> <span class="token variable">$city</span>\n<span class="token punctuation">}</span>\n<span class="token delimiter important">?></span>\n</code></pre>\n      </div>\n<blockquote>\n<p>The above command returns JSON structured like this:</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token string">"California"</span><span class="token punctuation">,</span>\n    slug<span class="token operator">:</span> <span class="token string">"california"</span><span class="token punctuation">,</span>\n    abbreviation<span class="token operator">:</span> <span class="token string">"ca"</span><span class="token punctuation">,</span>\n    description<span class="token operator">:</span> <span class="token string">"&lt;p>California legalized medical marijuana for patients suffering from acceptable conditions with Proposition 215 on November 5th, 1996, amended their medical marijuana program with Senate Bill 420 in 2003, and legalized recreational cannabis for all adults over 21 with Proposition 64 in 2016.&lt;/p> &lt;p>There are over 2,100 medical dispensaries operating licensed or illegally in California today. There are no recreational shops licensed or operating as of yet.&lt;/p>"</span><span class="token punctuation">,</span>\n    cities<span class="token operator">:</span> <span class="token punctuation">{</span>\n        santaAna<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">"Santa Ana"</span><span class="token punctuation">,</span>\n            slug<span class="token operator">:</span> <span class="token string">"santa-ana"</span><span class="token punctuation">,</span>\n            description<span class="token operator">:</span> <span class="token string">"Measure M and X"</span><span class="token punctuation">,</span>\n            lat<span class="token operator">:</span> <span class="token number">33.719657</span><span class="token punctuation">,</span>\n            lng<span class="token operator">:</span> -<span class="token number">117.852899</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        losAngeles<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">"Los Angeles"</span><span class="token punctuation">,</span>\n            slug<span class="token operator">:</span> <span class="token string">"los-angeles"</span><span class="token punctuation">,</span>\n            description<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n            lat<span class="token operator">:</span> <span class="token number">34.0522</span><span class="token punctuation">,</span>\n            lng<span class="token operator">:</span> -<span class="token number">118.2437</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        sanFrancisco<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">"San Francisco"</span><span class="token punctuation">,</span>\n            slug<span class="token operator">:</span> <span class="token string">"san-francisco"</span><span class="token punctuation">,</span>\n            description<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n            lat<span class="token operator">:</span> <span class="token number">37.7749</span><span class="token punctuation">,</span>\n            lng<span class="token operator">:</span> -<span class="token number">122.4194</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        sanDiego<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">"Santa Diego"</span><span class="token punctuation">,</span>\n            slug<span class="token operator">:</span> <span class="token string">"san-diego"</span><span class="token punctuation">,</span>\n            description<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n            lat<span class="token operator">:</span> <span class="token number">32.7157</span><span class="token punctuation">,</span>\n            lng<span class="token operator">:</span> -<span class="token number">117.1611</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        sacramento<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">"Sacramento"</span><span class="token punctuation">,</span>\n            slug<span class="token operator">:</span> <span class="token string">"sacramento"</span><span class="token punctuation">,</span>\n            description<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n            lat<span class="token operator">:</span> <span class="token number">38.5816</span><span class="token punctuation">,</span>\n            lng<span class="token operator">:</span> -<span class="token number">121.4944</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        longBeach<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">"Long Beach"</span><span class="token punctuation">,</span>\n            slug<span class="token operator">:</span> <span class="token string">"long-beach"</span><span class="token punctuation">,</span>\n            description<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n            lat<span class="token operator">:</span> <span class="token number">33.7701</span><span class="token punctuation">,</span>\n            lng<span class="token operator">:</span> -<span class="token number">118.1937</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        sanJose<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">"San Jose"</span><span class="token punctuation">,</span>\n            slug<span class="token operator">:</span> <span class="token string">"san-jose"</span><span class="token punctuation">,</span>\n            description<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n            lat<span class="token operator">:</span> <span class="token number">37.329699</span><span class="token punctuation">,</span>\n            lng<span class="token operator">:</span> -<span class="token number">121.883339</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        anaheim<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">"Anaheim"</span><span class="token punctuation">,</span>\n            slug<span class="token operator">:</span> <span class="token string">"anaheim"</span><span class="token punctuation">,</span>\n            description<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n            lat<span class="token operator">:</span> <span class="token number">33.831361</span><span class="token punctuation">,</span>\n            lng<span class="token operator">:</span> -<span class="token number">117.910878</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        riverside<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">"Riverside"</span><span class="token punctuation">,</span>\n            slug<span class="token operator">:</span> <span class="token string">"riverside"</span><span class="token punctuation">,</span>\n            description<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n            lat<span class="token operator">:</span> <span class="token number">33.948844</span><span class="token punctuation">,</span>\n            lng<span class="token operator">:</span> -<span class="token number">117.397127</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        sanBernardino<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">"San Bernardino"</span><span class="token punctuation">,</span>\n            slug<span class="token operator">:</span> <span class="token string">"san-bernardino"</span><span class="token punctuation">,</span>\n            description<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n            lat<span class="token operator">:</span> <span class="token number">34.104237</span><span class="token punctuation">,</span>\n            lng<span class="token operator">:</span> -<span class="token number">117.290527</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        bakersfield<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">"Bakersfield"</span><span class="token punctuation">,</span>\n            slug<span class="token operator">:</span> <span class="token string">"bakersfield"</span><span class="token punctuation">,</span>\n            description<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n            lat<span class="token operator">:</span> <span class="token number">35.334901</span><span class="token punctuation">,</span>\n            lng<span class="token operator">:</span> -<span class="token number">119.06058</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        vanNuys<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">"Van Nuys"</span><span class="token punctuation">,</span>\n            slug<span class="token operator">:</span> <span class="token string">"van-nuys"</span><span class="token punctuation">,</span>\n            description<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n            lat<span class="token operator">:</span> <span class="token number">34.199865</span><span class="token punctuation">,</span>\n            lng<span class="token operator">:</span> -<span class="token number">118.454795</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This endpoint retrieves a specific state and cities.</p>\n<h3>HTTP Request</h3>\n<p><code class="language-text">GET https://kushy.net/api/v1/shops/&lt;STATE&gt;</code></p>\n<h3>URL Parameters</h3>\n<table>\n<thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>STATE</td>\n<td>Full name of state in camelCase.</td>\n</tr>\n</tbody>\n</table>\n<h3>The state object</h3>\n<table>\n<thead>\n<tr>\n<th>Attributes</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>string</td>\n<td>The state name</td>\n</tr>\n<tr>\n<td>slug</td>\n<td>string</td>\n<td>Slug version of state name</td>\n</tr>\n<tr>\n<td>abbreviation</td>\n<td>string</td>\n<td>Abbreviated version of state</td>\n</tr>\n<tr>\n<td>description</td>\n<td>string</td>\n<td>Description of the state</td>\n</tr>\n<tr>\n<td>cities</td>\n<td>object</td>\n<td>Contains city objects (see below) labeled by city name in camelCase</td>\n</tr>\n</tbody>\n</table>\n<h3>The city object</h3>\n<table>\n<thead>\n<tr>\n<th>Attributes</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>string</td>\n<td>The city name</td>\n</tr>\n<tr>\n<td>slug</td>\n<td>string</td>\n<td>Slug version of city name</td>\n</tr>\n<tr>\n<td>description</td>\n<td>string</td>\n<td>Description of the city</td>\n</tr>\n<tr>\n<td>lat</td>\n<td>number</td>\n<td>Latitude of the city</td>\n</tr>\n<tr>\n<td>lng</td>\n<td>number</td>\n<td>Longitude of the city</td>\n</tr>\n</tbody>\n</table>',frontmatter:{title:"Get specific states",method:"get",route:"/states/:state"},fields:{slug:"/docs/states/get-specific-state/",section:"docs",category:"states"}},sidebar:{totalCount:16,edges:[{node:{frontmatter:{title:"Delete strain",method:"delete",route:"/strains/:id"},fields:{slug:"/docs/strains/delete-strain/",category:"strains"}}},{node:{frontmatter:{title:"Get all strains",method:"get",route:"/strains/"},fields:{slug:"/docs/strains/get-all-strains/",category:"strains"}}},{node:{frontmatter:{title:"Get specific strain",method:"get",route:"/strains/:id"},fields:{slug:"/docs/strains/get-specific-strain/",category:"strains"}}},{node:{frontmatter:{title:"Get all states",method:"get",route:"/states/"},fields:{slug:"/docs/states/get-all-states/",category:"states"}}},{node:{frontmatter:{title:"Get specific states",method:"get",route:"/states/:state"},fields:{slug:"/docs/states/get-specific-state/",category:"states"}}},{node:{frontmatter:{title:"Delete shop",method:"delete",route:"/shops/:id"},fields:{slug:"/docs/shops/delete-shop/",category:"shops"}}},{node:{frontmatter:{title:"Get all shops",method:"get",route:"/shops/"},fields:{slug:"/docs/shops/get-all-shops/",category:"shops"}}},{node:{frontmatter:{title:"Get specific shop",method:"get",route:"/shops/:id"},fields:{slug:"/docs/shops/get-specific-shop/",category:"shops"}}},{node:{frontmatter:{title:"Create new shop",method:"post",route:"/shops/"},fields:{slug:"/docs/shops/post-create-shop/",category:"shops"}}},{node:{frontmatter:{title:"Update shop",method:"put",route:"/shops/:id"},fields:{slug:"/docs/shops/put-update-shop/",category:"shops"}}},{node:{frontmatter:{title:"Get search results from all posts",method:"get",route:"/search/:field/:search"},fields:{slug:"/docs/search/get-search-all-posts/",category:"search"}}},{node:{frontmatter:{title:"Get all inventory",method:"get",route:"/inventory/"},fields:{slug:"/docs/inventory/get-all-inventory/",category:"inventory"}}},{node:{frontmatter:{title:"Get inventory of specific shop/brand",method:"get",route:"/inventory/menu/:slug"},fields:{slug:"/docs/inventory/get-menu-inventory/",category:"inventory"}}},{node:{frontmatter:{title:"Authorization",method:null,route:"/authorization/application"},fields:{slug:"/docs/authorization/application-authorization/",category:"authorization"}}},{node:{frontmatter:{title:"Authorization",method:null,route:"/authorization/"},fields:{slug:"/docs/authorization/introduction/",category:"authorization"}}},{node:{frontmatter:{title:"Scopes",method:null,route:"/authorization/scopes"},fields:{slug:"/docs/authorization/scopes/",category:"authorization"}}}]},pagination:{totalCount:2,edges:[{node:{frontmatter:{title:"Get all states"},fields:{slug:"/docs/states/get-all-states/"}},next:{fields:{slug:"/docs/states/get-specific-state/"}},previous:null},{node:{frontmatter:{title:"Get specific states"},fields:{slug:"/docs/states/get-specific-state/"}},next:null,previous:{fields:{slug:"/docs/states/get-all-states/"}}}]}},pathContext:{slug:"/docs/states/get-specific-state/",category:"states"}}}});
//# sourceMappingURL=path---docs-states-get-specific-state-49580a8a465ebb24a290.js.map