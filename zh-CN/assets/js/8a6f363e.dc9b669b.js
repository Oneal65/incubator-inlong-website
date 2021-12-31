"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[382],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),m=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=m(n),s=a,g=c["".concat(u,".").concat(s)]||c[s]||d[s]||l;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},53852:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"\u603b\u89c8",sidebar_position:1},u=void 0,m={unversionedId:"modules/agent/overview",id:"version-0.12.0/modules/agent/overview",isDocsHomePage:!1,title:"\u603b\u89c8",description:"InLong-Agent\u662f\u4e00\u4e2a\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\u7c7b\u578b\u7684\u6536\u96c6\u5de5\u5177\uff0c\u81f4\u529b\u4e8e\u5b9e\u73b0\u5305\u62ecFile\u3001Sql\u3001Binlog\u3001Metrics\u7b49\u591a\u79cd\u5f02\u6784\u6570\u636e\u6e90\u4e4b\u95f4\u7a33\u5b9a\u9ad8\u6548\u7684\u6570\u636e\u91c7\u96c6\u529f\u80fd\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.12.0/modules/agent/overview.md",sourceDirName:"modules/agent",slug:"/modules/agent/overview",permalink:"/zh-CN/docs/modules/agent/overview",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.12.0/modules/agent/overview.md",tags:[],version:"0.12.0",sidebarPosition:1,frontMatter:{title:"\u603b\u89c8",sidebar_position:1},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"Bare Metal \u90e8\u7f72",permalink:"/zh-CN/docs/deployment/bare_metal"},next:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/modules/agent/quick_start"}},p=[{value:"\u8bbe\u8ba1\u7406\u5ff5",id:"\u8bbe\u8ba1\u7406\u5ff5",children:[]},{value:"InLong-Agent \u67b6\u6784\u4ecb\u7ecd",id:"inlong-agent-\u67b6\u6784\u4ecb\u7ecd",children:[]},{value:"InLong-Agent \u91c7\u96c6\u5206\u7c7b",id:"inlong-agent-\u91c7\u96c6\u5206\u7c7b",children:[{value:"\u6587\u4ef6",id:"\u6587\u4ef6",children:[]},{value:"Sql",id:"sql",children:[]},{value:"Binlog",id:"binlog",children:[]}]},{value:"\u76d1\u63a7\u6307\u6807\u914d\u7f6e",id:"\u76d1\u63a7\u6307\u6807\u914d\u7f6e",children:[{value:"AgentTaskMetric",id:"agenttaskmetric",children:[]},{value:"JobMetrics",id:"jobmetrics",children:[]},{value:"PluginMetric",id:"pluginmetric",children:[]},{value:"SourceMetric",id:"sourcemetric",children:[]},{value:"SinkMetric",id:"sinkmetric",children:[]},{value:"Configure Prometheus",id:"configure-prometheus",children:[]}]}],d={toc:p};function c(t){var e=t.components,o=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"InLong-Agent\u662f\u4e00\u4e2a\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\u7c7b\u578b\u7684\u6536\u96c6\u5de5\u5177\uff0c\u81f4\u529b\u4e8e\u5b9e\u73b0\u5305\u62ecFile\u3001Sql\u3001Binlog\u3001Metrics\u7b49\u591a\u79cd\u5f02\u6784\u6570\u636e\u6e90\u4e4b\u95f4\u7a33\u5b9a\u9ad8\u6548\u7684\u6570\u636e\u91c7\u96c6\u529f\u80fd\u3002"),(0,l.kt)("h2",{id:"\u8bbe\u8ba1\u7406\u5ff5"},"\u8bbe\u8ba1\u7406\u5ff5"),(0,l.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u6570\u636e\u6e90\u591a\u6837\u6027\u95ee\u9898\uff0cInLong-agent \u5c06\u591a\u79cd\u6570\u636e\u6e90\u62bd\u8c61\u6210\u7edf\u4e00\u7684source\u6982\u5ff5\uff0c\u5e76\u62bd\u8c61\u51fasink\u6765\u5bf9\u6570\u636e\u8fdb\u884c\u5199\u5165\u3002\u5f53\u9700\u8981\u63a5\u5165\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u6e90\u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u914d\u7f6e\u597d\u6570\u636e\u6e90\u7684\u683c\u5f0f\u4e0e\u8bfb\u53d6\u53c2\u6570\u4fbf\u80fd\u8ddf\u505a\u5230\u9ad8\u6548\u8bfb\u53d6\u3002"),(0,l.kt)("h2",{id:"inlong-agent-\u67b6\u6784\u4ecb\u7ecd"},"InLong-Agent \u67b6\u6784\u4ecb\u7ecd"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(15455).Z})),(0,l.kt)("p",null,"InLong Agent\u672c\u8eab\u4f5c\u4e3a\u6570\u636e\u91c7\u96c6\u6846\u67b6\uff0c\u91c7\u7528channel + plugin\u67b6\u6784\u6784\u5efa\u3002\u5c06\u6570\u636e\u6e90\u8bfb\u53d6\u548c\u5199\u5165\u62bd\u8c61\u6210\u4e3aReader/Writer\u63d2\u4ef6\uff0c\u7eb3\u5165\u5230\u6574\u4e2a\u6846\u67b6\u4e2d\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reader\uff1aReader\u4e3a\u6570\u636e\u91c7\u96c6\u6a21\u5757\uff0c\u8d1f\u8d23\u91c7\u96c6\u6570\u636e\u6e90\u7684\u6570\u636e\uff0c\u5c06\u6570\u636e\u53d1\u9001\u7ed9channel\u3002"),(0,l.kt)("li",{parentName:"ul"},"Writer\uff1a Writer\u4e3a\u6570\u636e\u5199\u5165\u6a21\u5757\uff0c\u8d1f\u8d23\u4e0d\u65ad\u5411channel\u53d6\u6570\u636e\uff0c\u5e76\u5c06\u6570\u636e\u5199\u5165\u5230\u76ee\u7684\u7aef\u3002"),(0,l.kt)("li",{parentName:"ul"},"Channel\uff1aChannel\u7528\u4e8e\u8fde\u63a5reader\u548cwriter\uff0c\u4f5c\u4e3a\u4e24\u8005\u7684\u6570\u636e\u4f20\u8f93\u901a\u9053\uff0c\u5e76\u8d77\u5230\u4e86\u6570\u636e\u7684\u5199\u5165\u8bfb\u53d6\u76d1\u63a7\u4f5c\u7528")),(0,l.kt)("h2",{id:"inlong-agent-\u91c7\u96c6\u5206\u7c7b"},"InLong-Agent \u91c7\u96c6\u5206\u7c7b"),(0,l.kt)("h3",{id:"\u6587\u4ef6"},"\u6587\u4ef6"),(0,l.kt)("p",null,"\u6587\u4ef6\u91c7\u96c6\u5305\u542b\u5982\u4e0b\u529f\u80fd\uff1a\n\u7528\u6237\u914d\u7f6e\u7684\u8def\u5f84\u76d1\u542c\uff0c\u80fd\u591f\u76d1\u542c\u51fa\u521b\u5efa\u7684\u6587\u4ef6\u4fe1\u606f\n\u76ee\u5f55\u6b63\u5219\u8fc7\u6ee4\uff0c\u652f\u6301YYYYMMDD+\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u8def\u5f84\u914d\u7f6e\n\u65ad\u70b9\u91cd\u4f20\uff0cInLong-Agent\u91cd\u542f\u65f6\uff0c\u80fd\u591f\u652f\u6301\u81ea\u52a8\u4ece\u4e0a\u6b21\u8bfb\u53d6\u4f4d\u7f6e\u91cd\u65b0\u8bfb\u53d6\uff0c\u4fdd\u8bc1\u4e0d\u91cd\u8bfb\u4e0d\u6f0f\u8bfb\u3002\\"),(0,l.kt)("h3",{id:"sql"},"Sql"),(0,l.kt)("p",null,"\u8fd9\u7c7b\u6570\u636e\u662f\u6307\u901a\u8fc7SQL\u6267\u884c\u7684\u65b9\u5f0f\nSQL\u6b63\u5219\u5206\u89e3\uff0c\u8f6c\u5316\u6210\u591a\u6761SQL\u8bed\u53e5\n\u5206\u522b\u6267\u884cSQL\uff0c\u62c9\u53d6\u6570\u636e\u96c6\uff0c\u62c9\u53d6\u8fc7\u7a0b\u9700\u8981\u6ce8\u610f\u5bf9mysql\u672c\u8eab\u7684\u5f71\u54cd\n\u6267\u884c\u5468\u671f\uff0c\u8fd9\u79cd\u4e00\u822c\u662f\u5b9a\u65f6\u6267\u884c"),(0,l.kt)("h3",{id:"binlog"},"Binlog"),(0,l.kt)("p",null,"\u8fd9\u7c7b\u91c7\u96c6\u901a\u8fc7\u914d\u7f6emysql slave\u7684\u65b9\u5f0f\uff0c\u8bfb\u53d6binlog\uff0c\u5e76\u8fd8\u539f\u6570\u636e\n\u9700\u8981\u6ce8\u610fbinlog\u8bfb\u53d6\u7684\u65f6\u5019\u591a\u7ebf\u7a0b\u89e3\u6790\uff0c\u591a\u7ebf\u7a0b\u89e3\u6790\u7684\u6570\u636e\u9700\u8981\u6253\u4e0a\u987a\u5e8f\u6807\u7b7e\n\u4ee3\u7801\u57fa\u4e8e\u8001\u7248\u672c\u7684dbsync\uff0c\u4e3b\u8981\u7684\u4fee\u6539\u662f\u5c06tdbus-sender\u7684\u53d1\u9001\u6539\u4e3a\u63a8\u9001\u5230agent-channel\u7684\u65b9\u5f0f\u505a\u878d\u5408"),(0,l.kt)("h2",{id:"\u76d1\u63a7\u6307\u6807\u914d\u7f6e"},"\u76d1\u63a7\u6307\u6807\u914d\u7f6e"),(0,l.kt)("p",null,"Agent\u63d0\u4f9b\u4e86JMX\u548cPrometheus\u65b9\u5f0f\u7684\u76d1\u63a7\u6307\u6807\u80fd\u529b\uff0c\u9ed8\u8ba4\u4f7f\u7528JMX\u65b9\u5f0f\u3002JMX\u65b9\u5f0f\u7684\u76d1\u63a7\u6307\u6807\u5df2\u7ecf\u6ce8\u518c\u5230MBeanServer\n\u7528\u6237\u53ef\u4ee5\u5728Agent\u7684\u542f\u52a8\u53c2\u6570\u4e2d\u589e\u52a0\u5982\u4e0b\u7c7b\u4f3cJMX\u5b9a\u4e49\uff08\u7aef\u53e3\u548c\u9274\u6743\u6839\u636e\u60c5\u51b5\u8fdb\u884c\u8c03\u6574\uff09\uff0c\u5b9e\u73b0\u76d1\u63a7\u6307\u6807\u4ece\u8fdc\u7aef\u91c7\u96c6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    -Dcom.sun.management.jmxremote\n    -Djava.rmi.server.hostname=127.0.0.1\n    -Dcom.sun.management.jmxremote.port=9999\n    -Dcom.sun.management.jmxremote.authenticate=false\n    -Dcom.sun.management.jmxremote.ssl=false\n")),(0,l.kt)("p",null,"Agent\u6307\u6807\u5206\u4e3a\u4ee5\u4e0b\u51e0\u9879, \u5404\u9879\u7684\u5c5e\u6027\u5206\u522b\u4e3a\uff1a"),(0,l.kt)("h3",{id:"agenttaskmetric"},"AgentTaskMetric"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"runningTasks"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retryingTasks"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6b63\u5728\u91cd\u8bd5\u7684\u4efb\u52a1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fatalTasks"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5931\u8d25\u7684\u4efb\u52a1\u603b\u6570")))),(0,l.kt)("h3",{id:"jobmetrics"},"JobMetrics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"runningJobs"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684job\u603b\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fatalJobs"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5931\u8d25\u7684job\u603b\u6570")))),(0,l.kt)("h3",{id:"pluginmetric"},"PluginMetric"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readNum"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bfb\u53d6\u7684\u6761\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sendNum"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u7684\u6761\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sendFailedNum"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5931\u8d25\u6761\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readFailedNum"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bfb\u53d6\u5931\u8d25\u6761\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readSuccessNum"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bfb\u53d6\u6210\u529f\u6761\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sendSuccessNum"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6210\u529f\u6761\u6570")))),(0,l.kt)("h3",{id:"sourcemetric"},"SourceMetric"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent_source_count_success"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"source \u8bfb\u53d6\u6210\u529f\u6b21\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent_source_count_fail"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"source \u8bfb\u53d6\u5931\u8d25\u6b21\u6570")))),(0,l.kt)("h3",{id:"sinkmetric"},"SinkMetric"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent_sink_count_success"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"sink \u5199\u5165\u6210\u529f\u6b21\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"agent_sink_count_fail"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"sink \u5199\u5165\u5931\u8d25\u6b21\u6570")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53e6\u5916\uff0cAgent\u8fd8\u5185\u7f6e\u4e86Prometheus\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"simpleclient-hotspot"),"\uff0c\u7528\u4e8e\u91c7\u96c6JVM\u76f8\u5173\u7684\u6307\u6807\u4fe1\u606f")),(0,l.kt)("h3",{id:"configure-prometheus"},"Configure Prometheus"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"agent.properties"),"\u4e2d\u58f0\u660e\u662f\u5426\u542f\u7528Prometheus\u4ee5\u53caHTTPServer\u7aef\u53e3\u53f7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"# \u9ed8\u8ba4\u4e0d\u542f\u7528Prometheus\nagent.prometheus.enable=true\n# \u9ed8\u8ba4\u7aef\u53e3\u4e3a8080\nagent.prometheus.exporter.port=8080\n")))}c.isMDXComponent=!0},15455:function(t,e,n){e.Z=n.p+"assets/images/architecture-4c55eb883104dccdff77e8b8e57f2678.png"}}]);