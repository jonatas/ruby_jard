(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(93)),c={id:"Configurations",slug:"configurations"},o={unversionedId:"guides/Configurations",id:"guides/Configurations",isDocsHomePage:!1,title:"Configurations",description:"Ruby Jard supports customization via pre-loaded configuration files. You can configure Jard both globally, and per-project.",source:"@site/docs/guides/configurations.md",slug:"/guides/configurations",permalink:"/docs/guides/configurations",editUrl:"https://github.com/nguyenquangminh0711/ruby_jard/edit/master/website/docs/guides/configurations.md",version:"current",sidebar:"docs",previous:{title:"Color schemes",permalink:"/docs/guides/color-schemes"},next:{title:"FAQ",permalink:"/docs/guides/faq"}},l=[],b={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Ruby Jard supports customization via pre-loaded configuration files. You can configure Jard both globally, and per-project."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"JARD_CONFIG_FILE")," environment variable is available, Jard uses that file."),Object(i.b)("li",{parentName:"ul"},"The global configuration file is located at ",Object(i.b)("inlineCode",{parentName:"li"},"~/.jardrc"),"."),Object(i.b)("li",{parentName:"ul"},"The project configuration file is located at ",Object(i.b)("inlineCode",{parentName:"li"},".jardrc")," in working directory when you start Ruby Jard. Per-project ones override the global one.")),Object(i.b)("p",null,"There are some supported configurations:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Values"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"color_scheme")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Choose your favorite color scheme. See ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/guides/color-schemes"}),"color schemes page")," for more information."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"256")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"See ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/commands/color-scheme"}),"color-scheme command"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"layout")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"By default, Ruby Jard chooses the layout based on current window size. This option allows you to force a layout."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"nil")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"nil"),", ",Object(i.b)("inlineCode",{parentName:"td"},"tiny"),", ",Object(i.b)("inlineCode",{parentName:"td"},"wide"),", ",Object(i.b)("inlineCode",{parentName:"td"},"narrow-vertical"),", ",Object(i.b)("inlineCode",{parentName:"td"},"narrow-horizontal"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"enabled_screens")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Force display a subset of screens. This option correlates with recent layout's screens."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"[]")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"backtrace"),", ",Object(i.b)("inlineCode",{parentName:"td"},"menu"),", ",Object(i.b)("inlineCode",{parentName:"td"},"source"),", ",Object(i.b)("inlineCode",{parentName:"td"},"threads"),", ",Object(i.b)("inlineCode",{parentName:"td"},"variables"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"filter")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Filter mode. See ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/guides/filter"}),"filter page")," for more information"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},":application")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},":everything"),", ",Object(i.b)("inlineCode",{parentName:"td"},":gems"),", ",Object(i.b)("inlineCode",{parentName:"td"},":application"),", ",Object(i.b)("inlineCode",{parentName:"td"},":source_tree"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"filter_included")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Filter included pattern. See ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/guides/filter"}),"filter page")," for more information"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"[]")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"filter_excluded")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Filter excluded pattern. See ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/guides/filter"}),"filter page")," for more information"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"[]")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"alias_to_debugger")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Use ",Object(i.b)("inlineCode",{parentName:"td"},"debugger")," instead of ",Object(i.b)("inlineCode",{parentName:"td"},"jard")," when debugging."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"))))),Object(i.b)("p",null,"This is a complete example of a configuration file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),"config.color_scheme = \"deep-space\"\nconfig.alias_to_debugger = true\nconfig.layout = \"wide\"\nconfig.enabled_screens = ['backtrace', 'source']\nconfig.filter = :gems\nconfig.filter_included = ['active*', 'sidekiq']\nconfig.filter_excluded = ['acts-as-taggable-on']\n")))}d.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=d(n),O=a,m=p["".concat(c,".").concat(O)]||p[O]||u[O]||i;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);