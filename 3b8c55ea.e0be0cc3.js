(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r),o=n(94),i=function(e){var t=e.size,n=void 0===t?"large":t,r=e.width,i=void 0===r?140:r,u=e.height,l=void 0===u?30:u,c=e.inline,b={};return b=void 0!==c&&c?{display:"inline-block"}:{marginLeft:15,display:"flex",alignItems:"center",justifyContent:"center"},a.a.createElement("div",{className:Object(o.a)("button--lg"),style:b},a.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=nguyenquangminh0711&repo=ruby_jard&type=star&count=true&size="+n,scrolling:"0",title:"GitHub Stars",width:i,height:l,frameBorder:"0"}))}},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return j})),n.d(t,"metadata",(function(){return O})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return w}));var r=n(2),a=n(6),o=n(0),i=n.n(o),u=n(90),l=n(98),c=n(94),b=n(67),s=n.n(b),d=37,p=39;var m=function(e){var t=e.block,n=e.children,r=e.defaultValue,a=e.values,u=e.groupId,b=Object(l.a)(),m=b.tabGroupChoices,f=b.setTabGroupChoices,y=Object(o.useState)(r),g=y[0],j=y[1],O=Object(o.useState)(!1),h=O[0],v=O[1];if(null!=u){var w=m[u];null!=w&&w!==g&&a.some((function(e){return e.value===w}))&&j(w)}var N=function(e){j(e),null!=u&&f(u,e)},x=[],_=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},k=function(){v(!1)};return Object(o.useEffect)((function(){window.addEventListener("keydown",_),window.addEventListener("mousedown",k)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},a.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===t}),style:h?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),_(e)},onFocus:function(){return N(t)},onClick:function(){N(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))};var f=function(e){return i.a.createElement("div",null,e.children)},y=n(95),g=n(104),j={id:"Installation",slug:"/"},O={unversionedId:"Installation",id:"Installation",isDocsHomePage:!1,title:"Installation",description:"[![From Vietnam with",source:"@site/docs/installation.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/nguyenquangminh0711/ruby_jard/edit/master/website/docs/installation.md",version:"current",sidebar:"docs",next:{title:"Screenshot tour",permalink:"/docs/Screenshot tour"}},h=[{value:"Install Ruby Jard",id:"install-ruby-jard",children:[]},{value:"Run your program with Ruby Jard",id:"run-your-program-with-ruby-jard",children:[]},{value:"Supported platform",id:"supported-platform",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],v={rightToc:h};function w(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("img",{src:"/img/logo/logo-full.png",width:"400"}),Object(u.b)("br",null),Object(u.b)("br",null),Object(u.b)("p",null,Object(u.b)("a",Object(r.a)({parentName:"p"},{href:"https://webuild.community"}),Object(u.b)("img",Object(r.a)({parentName:"a"},{src:"https://raw.githubusercontent.com/webuild-community/badge/master/svg/love.svg",alt:"From Vietnam with <3"})))," ",Object(u.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/nguyenquangminh0711/ruby_jard/workflows/Rspec/badge.svg?branch=master",alt:"Rspec"}))," ",Object(u.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/rubocop-hq/rubocop"}),Object(u.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/code_style-rubocop-brightgreen.svg",alt:"Ruby Style Guide"})))," ",Object(u.b)(g.a,{inline:"true",size:"small",height:"20",width:"100",mdxType:"GithubButton"})),Object(u.b)("p",null,Object(u.b)("strong",{parentName:"p"},"Note"),": Ruby Jard is still under heavy development. Bugs and weird behaviors are expected. If you see one, please don't hesitate to ",Object(u.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nguyenquangminh0711/ruby_jard/issues"}),"open an issue"),". I'll try my best to fix."),Object(u.b)("h2",{id:"install-ruby-jard"},"Install Ruby Jard"),Object(u.b)(m,{defaultValue:"bundler",values:[{label:"Bundler",value:"bundler"},{label:"Ruby Gem",value:"ruby_gem"}],mdxType:"Tabs"},Object(u.b)(f,{value:"bundler",mdxType:"TabItem"},Object(u.b)("p",null,"  Add one of those lines into your Gemfile. ",Object(u.b)("strong",{parentName:"p"},"Note"),": Ruby Jard is discouraged to use on production environment."),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"gem 'ruby_jard', group: :development\n")),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"\u276f bundle install\n")),Object(u.b)("p",null,"  If you would like to use Ruby Jard to debug a test, you can add to group test too."),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"gem 'ruby_jard', group: [:development, :test]\n")),Object(u.b)("p",null,"  If you would like to use edged developing version of Ruby Jard:"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"gem 'ruby_jard', group: :development, git: 'https://github.com/nguyenquangminh0711/ruby_jard'\n"))),Object(u.b)(f,{value:"ruby_gem",mdxType:"TabItem"},Object(u.b)("p",null,"  If you want to install Ruby Jard independently from bundler:"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gem install ruby_jard\n")),Object(u.b)("p",null,"  If you want to install a specific version published on ",Object(u.b)("a",Object(r.a)({parentName:"p"},{href:"https://rubygems.org/gems/ruby_jard"}),"Ruby gems"),":"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gem install ruby_jard@0.2.3\n")))),Object(u.b)("h2",{id:"run-your-program-with-ruby-jard"},"Run your program with Ruby Jard"),Object(u.b)(y.a,{link:"/img/getting_started/how-to-use.gif",alt:"How to run your program with Ruby Jard",mdxType:"LinkedImage"}),Object(u.b)("p",null,"To use Ruby Jard, you just need to put ",Object(u.b)("inlineCode",{parentName:"p"},"jard")," magic method ",Object(u.b)("strong",{parentName:"p"},"before")," any places you want to stop. Jard supports stopping at anywhere, including top level binding, instance methods, class methods, string evaluation, or even inside a class declaration."),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"def test_method(input)\n  a = 1\n  b = 2\n  jard # Debugger will stop here\n  c = a + b + input\nend\n\nclass TestClass\n  jard # Yes, it can stop here too\n  @dirty_class_method = 1 + 1\n\n  def test_method\n    jard\n  end\n\n  def self.test_class_method\n    jard\n  end\nend\n\njard\ntest_method(5)\n")),Object(u.b)("p",null,"Afterward, run your program, just like normally. If your program meets ",Object(u.b)("inlineCode",{parentName:"p"},"jard")," execution break point, it gonna stop, show the UI, and let you debug."),Object(u.b)("p",null,"In case you meet error ",Object(u.b)("inlineCode",{parentName:"p"},"undefined local variable or method jard"),", please require ruby_jard manually at initializing scripts. If you use Ruby Jard with famous frameworks, ruby_jard will be loaded by default"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"require 'ruby_jard'\n")),Object(u.b)("h2",{id:"supported-platform"},"Supported platform"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Ruby Jard supports official Ruby versions: 2.5.x, 2.6.x, 2.7.x, 2.8.x - 3.0.x (in ruby trunk)."),Object(u.b)("li",{parentName:"ul"},"Truffle Ruby support is in the Roadmap."),Object(u.b)("li",{parentName:"ul"},"jRuby support is not promised yet, as byebug core is written in C."),Object(u.b)("li",{parentName:"ul"},"Ruby Jard is developed, and tested on Linux distros, and MacOS."),Object(u.b)("li",{parentName:"ul"},"Windows is not supported (yet).")),Object(u.b)("h2",{id:"dependencies"},"Dependencies"),Object(u.b)("p",null,"Ruby Jard depends on 3 dependencies:"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},Object(u.b)("inlineCode",{parentName:"li"},"byebug"),", compatibility: '>= 9.1', '< 12.0'"),Object(u.b)("li",{parentName:"ul"},Object(u.b)("inlineCode",{parentName:"li"},"pry"),", compatibility: '~> 0.13.0'"),Object(u.b)("li",{parentName:"ul"},Object(u.b)("inlineCode",{parentName:"li"},"tty-screen"),", compatibility: '~> 0.8.1'")))}w.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=b(n),p=r,m=s["".concat(i,".").concat(p)]||s[p]||d[p]||o;return n?a.a.createElement(m,u(u({ref:t},c),{},{components:n})):a.a.createElement(m,u({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},92:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(91),a=n(93);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,u=void 0!==i&&i,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(u)return t+n;var b=!n.startsWith(t)?t+n.replace(/^\//,""):n;return c?e+b:b}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},93:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},94:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r),o=n(92),i=function(e){var t=e.link,n=e.alt;return a.a.createElement(a.a.Fragment,null,a.a.createElement("a",{target:"_blank",href:Object(o.a)(t),style:{display:"block"}},a.a.createElement("div",{style:{lineHeight:0,display:"inline-block"}},a.a.createElement("img",{alt:n,src:Object(o.a)(t),style:{borderRadius:"7px"}}),a.a.createElement("div",{className:"alert alert--secondary",style:{padding:"1.5rem"}},n,". Click to enlarge."))),a.a.createElement("br",null))}},97:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},98:function(e,t,n){"use strict";var r=n(0),a=n(97);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);